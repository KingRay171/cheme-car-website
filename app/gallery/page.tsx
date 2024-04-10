
import Footer from "../components/footer"
import Nav from "../components/nav"
import PhotoAlbum from "react-photo-album"

export default function Exec() {
    const photos = [
        {src: "/battery.jpg", width: 400, height: 300}
    ]
    return (
        <div className="flex flex-col h-[100vh]">
            <Nav />
            <PhotoAlbum layout="rows" photos={photos} />
            <Footer />
        </div>
    )
}