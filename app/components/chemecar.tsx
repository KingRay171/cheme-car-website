import Image from "next/image"

export default function ChemECar() {
    return (
        <section className="flex bg-white text-black justify-center space-x-[5vw] p-[2vw] max-w-[100vw]">
            <div className="border-solid border-2 border-black rounded-[50px] flex flex-col p-[3vw] w-[50vw]">
                <h1 className="text-[5vw]">What is ChemE-Car?</h1>
                <p className="max-w-[40vw] text-[3vw]"> 
                    description/blurb about ChemE-Car here
                </p>
            </div>
            <Image src={"/drill.png"} width={0} height={0} alt="hi" style={{width: "30vw", height: "auto" }} unoptimized/>
            </section>
    )
}