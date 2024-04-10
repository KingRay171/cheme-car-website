"use client";
import Footer from "../components/footer"
import Nav from "../components/nav"
import PhotoAlbum from "react-photo-album"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import  Image  from "next/image"

export default function Exec() {
    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
    const photos = ["/battery.jpg", "/battery2.png", "/logo.jpg"]
    
    return (
        <div className="">
            <Nav />
            <div className="">
                <Slide>
                {photos.map((e, idx) => <Image width={0} height={0} alt="img" key={idx} style={{width: "100%", height: "auto"}} src={e} unoptimized/>)}
                </Slide>
            </div>
            <Footer />
        </div>
    )
}