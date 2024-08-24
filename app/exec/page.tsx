import ExecBody from "./components/execbody"
import ExecTop from "./components/exectop"
import Footer from "../components/footer"
import Nav from "../components/nav"
import { ExecPage } from "@/components/exec-page"

export default function Exec() {
    return (
        <div className="flex flex-col h-[100vh]">
            <Nav />
            <ExecPage />
            <Footer />
        </div>
    )
}