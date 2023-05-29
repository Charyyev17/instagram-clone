import Header from "../components/Header"
import { Outlet } from "react-router-dom"

export default function MainLayout () {
    return (
        <>
            <div className="flex">
                <Header />
                <div className="container ml-[360px] mr-[150px] pt-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}