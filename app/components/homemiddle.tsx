import Image from "next/image"

export default function HomeMiddle() {
    return (
        <section className="flex bg-gray-200 text-black justify-center space-x-[5vw] p-[2vw] max-w-[100vw]">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-[3vw] w-[50vw]">
                <h1 className="text-[5vw]">About Us:</h1>
                <p className="max-w-[40vw] text-[3vw]"> 
                    description/blurb about the club here
                </p>
            </div>
            <Image src={"/battery.jpg"} width={0} height={0} alt="hi" style={{width: "30vw", height: "auto" }} unoptimized/>
            </section>
    )
}