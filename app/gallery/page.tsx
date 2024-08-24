"use client";
import Footer from "../components/footer"
import Nav from "../components/nav"
import PhotoAlbum from "react-photo-album"
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import  Image  from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ScriptProps } from "next/script";


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
    const photos = ["/img1.png", "/img2.png", "/img3.png", "img4.png"]
    
    return (
        <div className="">
            <Nav />
            <section className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Last Year&apos;s Photos</h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
            Take a look at some of the work we did last year!
          </p>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-12 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {
                photos.map((e, idx) => 
                  <CarouselItem key={idx}>
                    <Image width={1200} height={675} alt="img" className="w-[100%] h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg" style={{ aspectRatio: "1200/675", objectFit: "cover" }} src={e} unoptimized/>
                  </CarouselItem>)
              }
            </CarouselContent>
            <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-primary-foreground hover:text-primary">
              <ChevronLeftIcon />
            </CarouselPrevious>
            <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 text-primary-foreground hover:text-primary">
              <ChevronRightIcon  />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
            <Footer />
        </div>
    )
}

function ChevronLeftIcon() {
  return (
    <svg
      className="w-6 h-6"
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon() {
  return (
    <svg
      className="w-6 h-6"
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}