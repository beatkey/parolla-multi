import Logo from "./components/logo/index.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
    const rooms = [
        {
            id: 1,
            name: "Oda 1",
        },
        {
            id: 2,
            name: "Oda 2",
        }
    ]

    return <div className="w-screen h-screen flex justify-center">
        <div className="w-full max-w-[768px] relative bgMain">
            <Navbar/>
            <div className="flex items-center justify-center h-full">
                <Logo/>
            </div>
        </div>
    </div>
}