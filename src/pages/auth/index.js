import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"

export default function AuthLayout () {
    return (
        <>
            <div className="flex-wrap overflow-auto p-8 items-center justify-center">
                <Outlet />
            </div>
            <Footer/>
        </>

    )
}