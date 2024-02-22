import Image from 'next/image'
import Nav from './components/nav'
import HomeTop from './components/hometop'
import HomeMiddle from './components/homemiddle'
import HomeBottom from './components/homebottom'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
    </main>
  )
}
