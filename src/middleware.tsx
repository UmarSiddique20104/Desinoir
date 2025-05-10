import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n.config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

/** Regex to check if the current path equals a public file */
const PUBLIC_FILE = /\.(.*)$/;

/** Ignore non-page paths */
const shouldProceed = (pathname: string) => {
  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return false;
  }
  return true;
};

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  /** Ignore non-page paths */

  const pathname = request.nextUrl.pathname;
  if (!shouldProceed(pathname)) return;

  if (pathname.startsWith("/admin")) {
    return NextResponse.rewrite(request.nextUrl);
  }
  if (pathname.startsWith("/login")) {
    return NextResponse.rewrite(request.nextUrl);
  }
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}
