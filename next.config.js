/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "http://localhost",
      "https://localhost",
      "localhost",
      "www.course-api.com",
      'desinoir.com',
      'api.desinoir.com'
    ], // Add both http and https
  },
};

module.exports = {
  env: {
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_SERVER_PREFIX: process.env.MAILCHIMP_SERVER_PREFIX,
    MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID,
  },
};

module.exports = nextConfig;
