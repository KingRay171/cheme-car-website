import Image from 'next/image'
import Nav from './components/nav'
import HomeTop from './components/hometop'
import HomeMiddle from './components/homemiddle'
import HomeBottom from './components/homebottom'
import ChemECar from './components/chemecar'
export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Nav />
      <HomeTop />
      <ChemECar />
      <HomeMiddle />
      <HomeBottom />
    </div>
  )
}
