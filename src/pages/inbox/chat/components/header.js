import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Icon from "../../../../components/Icon"

export default function Header () {

    const { chatUser } = useSelector(state => state.chat)

    return (
        <div className="border-b h-[60px] flex px-6 items-center justify-between">
            
            <div>
                <NavLink to={``}>
                    <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                        <img alt="profile" className="rounded-full w-6 h-6 md:w-6 lg:w-6 overflow-hidden" src={chatUser.avatar}/>
                        <span className="pl-4 font-semibold">{chatUser.name}</span>
                    </div>    
                </NavLink>
            </div>

            <div className="flex gap-x-4">

                <Icon name="audio-call" size={24}/>
                <Icon name="video-call" size={24}/>
                <Icon name="info" size={24}/>

            </div>
        </div>
    )
}