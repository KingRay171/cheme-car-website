import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <header className="p-4 lg:px-6 h-14 flex items-center">
        <Link href="/"><Image src={"/logo.jpg"} alt="AIChE Logo" width={100} height={40}/></Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/exec" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Exec
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Gallery
          </Link>
        </nav>
      </header>
  )
}
