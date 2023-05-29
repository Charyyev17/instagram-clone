import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet"
import Sidebar from "./components/sidebar";

export default function InboxLayout () {

    return (
        <div className="flex bg-white w-full h-[750px] shadow-sm rounded border">
            
            <Helmet>
                <title>
                    Inbox • Chats
                </title>
            </Helmet>

            <Sidebar/>
            <Outlet/>

        </div>
    )
    
}