import Image from "next/image"

export default function HomeBottom() {
    return (
        <section className="flex bg-white text-black justify-center space-x-[5vw] p-[2vw] max-w-[100vw]">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-[3vw] w-[50vw]" >
                <h1 className="text-[5vw] pb-4 max-w-[40vw]">Upcoming Events:</h1>
                <ul className="max-w-[40vw] text-[3vw] "> 
                    <li>we can put our upcoming events/schedule here if we&apos;d like</li>
                </ul>
            </div>
            <Image src={"/battery2.png"} width={0} height={0} alt="hi" style={{width: "30vw", height: "auto"}}  unoptimized/>
        </section>
    )
}