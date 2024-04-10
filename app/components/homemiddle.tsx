import Image from "next/image"

export default function HomeMiddle() {
    return (
        <section className="flex bg-white text-black justify-center space-x-[5vw] p-[2vw]">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-[3vw] w-[50vw]">
                <h1 className="text-3xl">About Us:</h1>
                <p className="max-w-[40vw] text-2xl"> 
                    description/blurb about the club here
                </p>
            </div>
            <Image src={"/battery.jpg"} width={0} height={0} alt="hi" style={{width: "30vw", height: "auto"}} layout="responsive" unoptimized/>
            </section>
    )
}