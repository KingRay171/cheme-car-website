import Image from "next/image"

export default function ExecBody() {
    const execList = [
        {name: "Alessandro D'Amico - Co-Captain", major: "Chemical Engineering B.S.E.", year: "Sophomore", linkedin: "/snehal-c", image: "/Caden.jpg"},
        {name: "Snehal Choudbury - Co-Captain", major: "Chemical Engineering B.S.E.", year: "Sophomore", linkedin: "/alessandro-d-amico", image: "/Xavier.jpg"},
    ]
    return (
        <section className="flex justify-around bg-gray-200 text-black py-8">
            {execList.map(e => (
                <div className="flex flex-col" key={e.linkedin}>
                    <Image src={e.image} alt={e.name} width={200} height={200} />
                    <h1>{e.name}</h1>
                    <h3>Major: {e.major}</h3>
                    <h3>Year: {e.year}</h3>
                    <h3>LinkedIn: <a href={`https://www.linkedin.com/in${e.linkedin}`}>{e.linkedin}</a></h3>
                </div>
            ))}
        </section>
    )
}