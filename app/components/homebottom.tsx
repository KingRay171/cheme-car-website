import Image from "next/image"

export default function HomeBottom() {
    return (
        <section className="flex bg-gray-200 text-black justify-center space-x-32 py-8">
            <Image src='/battery2.png' alt="Battery" width={400} height={100}/>
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-12" >
                <h1 className="text-7xl pb-4">Upcoming Events:</h1>
                <ul className="max-w-[40vw] text-2xl "> 
                    <li>we can put our upcoming events/schedule here if we'd like</li>
                    
                </ul>
            </div>
            
        </section>
    )
}