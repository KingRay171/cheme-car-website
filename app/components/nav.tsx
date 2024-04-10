import Image from "next/image"
import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex justify-between px-[2vw] bg-[#089cdc] border-b-2 border-white" >
      <div className="flex items-center">
      <Link href="/"><Image src={"/logo.jpg"} alt="AIChE Logo" width={100} height={40}/></Link>
      </div>
      <div className="flex items-center py-2 space-x-5">
        <Link href="/">Home</Link>
        <Link href="/exec">Exec</Link>
        <Link href="/gallery">Gallery</Link>
      </div>
    </div>
  )
}
