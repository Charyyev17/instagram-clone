import curry from "../../../assets/images/curry.jpg"
import aston from "../../../assets/images/aston.jpg"
import dan_ric from "../../../assets/images/dan_ric.jfif"
import { NavLink, useParams } from "react-router-dom"
import classNames from "classnames"
import { chatUserHandle } from "../../../utils"

export default function ChatList () {

    const { conversationId } = useParams()
    const chats = [
        {
            id: 1,
            user: {
                avatar: curry,
                name: 'Chef'
            },
            lastMessage: 'i just dropped 50',
            messageDate: '3h',
            unread: true,
            active: false
        },
        {
            id: 2,
            user: {
                avatar: dan_ric,
                name: 'Dan Ric 3'
            },
            lastMessage: 'howw??',
            messageDate: '1h',
            unread: false,
            active: true
        },
        {
            id: 3,
            user: {
                avatar: aston,
                name: 'Aston Martin F1'
            },
            lastMessage: 'did u watch el nanos masterclass',
            messageDate: '2h',
            unread: false,
            active: false
        }
    ]

    return (

        <div className="h-full overflow-auto mt-2">
            {chats.map(chat => (
                <NavLink
                    className={classNames({
                        "relative flex items-center py-2 px-5 gap-x-2 hover:opacity-80": true,
                        "font-medium": chat?.unread && !chat?.active,
                        "!bg-[#efefef]": +conversationId === chat.id
                    })}

                    key={chat.id}
                    to={`/inbox/${chat.id}`}
                    onClick={() => chatUserHandle({ name: `${chat.user.name}`, avatar: `${chat.user.avatar}` })}
                >
                    <div className="relative rounded-full w-14 h-14 md:w-14 lg:w-14 overflow-visible">
                        <img alt="" src={chat.user.avatar} className="rounded-full w-full h-full object-cover"/>
                        {chat?.active && (
                            <div className="absolute rounded-full w-[6px] h-[6px] p-2.5 bg-white bottom-0 right-0">
                                <div className="bg-green-400 absolute rounded-full w-3.5 h-3.5 -ml-[7px] -mt-[7px]"></div>
                            </div>
                        )}
                    </div>
                        <div className="flex flex-col text-sm">
                            <span>{chat.user.name}</span>
                            {chat?.unread && !chat?.active
                                ? (<>
                                    <span>Sent you a message <span className="text-gray-400 text-sm font-light">• {chat.messageDate}</span></span>
                                    <div className="absolute right-0 px-[20px]">
                                        <span className="text-signup text-3xl">•</span>
                                    </div>
                                    </>)
                                : (chat?.active 
                                    ? <span className="text-gray-400">Active now</span>      
                                    : <div className="flex gap-x-1"><span className="text-gray-400 max-w-[170px] truncate">{chat.lastMessage}</span><span className="text-gray-400 text-sm font-light">• {chat.messageDate}</span></div>
                                    )
                            }
                        </div>
                </NavLink>
            ))}
            
        </div>
    )
}