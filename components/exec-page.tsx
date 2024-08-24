/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/RLHD2S7ZHR6
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Image from "next/image"
import Link from "next/link"

export function ExecPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Team</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Meet the Executives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
              <Image src={"/ale.jpeg"} width={280} height={200}/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Alessandro D'Amico</h3>
                <p className="text-muted-foreground mb-4">Co-Captain</p>
                <p className="text-sm">
                  Alessandro is a talented and active leader of CWRU Chem-E Car. He is a junior studying chemical engineering and is highly involved in research on campus, in addition to the club.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-lg shadow-md overflow-hidden">
            <Image src={"/IMG_6619.jpg"} width={280} height={200}/>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Snehal Choudhury</h3>
                <p className="text-muted-foreground mb-4">Co-Captain</p>
                <p className="text-sm">
                  Snehal is also a junior studying chemcial engineering. As a co-captain, she tackles several administrative tasks in addition to being a technical lead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 w-full shrink-0">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-xs">&copy; 2024 College Club</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}