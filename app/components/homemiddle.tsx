import Image from "next/image"

export default function HomeMiddle() {
    return (
        <section className="flex bg-white text-black justify-center space-x-20 py-8">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-12">
                <h1 className="text-6xl">About Us:</h1>
                <p className="max-w-[40vw] text-2xl"> 
                    description/blurb about the club here
                </p>
            </div>
            <Image src='/battery.jpg' alt="Quantum Gates" width={0} height={0} style={{ width: '30%', height: 'auto' }} unoptimized/>
        </section>
    )
}