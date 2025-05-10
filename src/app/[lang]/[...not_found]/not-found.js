import Link from 'next/link'
import { Bai_Jamjuree } from "next/font/google";
const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

export default function NotFound() {
  return <div>
      <h1 className={`bg-black ${inter.className}`}>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
  </div>
}