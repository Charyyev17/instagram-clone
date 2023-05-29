import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import Icon from "../../../components/Icon"
import ChatList from "./chat-list"


export default function Sidebar () {

    const { user } = useSelector(state => state.auth)

    return (
        <div className="flex flex-col border-r w-4/12 h-full">
            
            <div className="relative border-b h-[60px] py-5 flex px-6 items-center justify-center">
                <div className="flex items-center gap-x-2">
                    <span className="font-medium text-[16px]">{user.username} </span>
                    <BsChevronDown size={20}/>
                </div>
                <div className="absolute right-0 px-[20px]">
                    <Icon name="new-message" size={24}/>
                </div>
            </div>
            
            <ChatList/>
        </div>
    )
}