import { Helmet } from "react-helmet"
import Icon from "../components/Icon"
import { AiFillRightCircle } from "react-icons/ai"
import aston from "../assets/images/aston.jpg"
import curry from "../assets/images/curry.jpg"
import dan_ric from "../assets/images/dan_ric.jfif"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PostOptions from "../modals/post-options"
import { openOptionsModal } from "../utils"

export default function Home () {

    const { user } = useSelector(state => state.auth)

    const { showOptionsModal } = useSelector(state => state.modal)
    
    return (
        <>
            {showOptionsModal && <PostOptions/>}
            <div className="flex flex-row">
           
                <Helmet>
                    <title>Instagram</title>
                </Helmet>
                
                <div className="flex flex-col items-center">

                    <div className="relative mt-9 mb-4 pl-3 flex items-center overflow-hidden">
                        
                        <div className="absolute right-0 px-5 cursor-pointer">
                            <AiFillRightCircle size={23} color="rgba(255, 255, 255, .9)"/>
                        </div>

                        <div className="flex gap-x-2.5 left-0">
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={curry} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={dan_ric} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={curry} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={dan_ric} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={curry} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                            <div className="flex flex-col">
                                <div className="rounded-full w-16 h-16 md:w-16 lg:w-16 border-2 border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={dan_ric} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <span className="text-xs font-medium text-center pt-1">username</span>
                            </div>
                        </div>
                        
                    </div>

                    <div className="rounded w-[470px] h-[850px] shadow m-4 py-3 flex flex-col gap-y-3">
                        
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-x-2">
                                <div className="rounded-full w-10 h-10 md:w-10 lg:w-10 border border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>                            
                                <div className="flex flex-col">
                                    <span><Link to={`/${user.username}`} className="font-medium">{user.username} </Link><span className="text-gray-400 text-sm">• 8h</span></span>
                                    <span className="text-xs">Original audio</span>
                                </div>
                            </div>
                            <button onClick={() => openOptionsModal(true)}>
                                <Icon name="more" size={24} className="hover:text-gray-400 cursor-pointer"/>
                            </button>
                        </div>

                        <div className="rounded relative">
                            <img alt="" src={curry} className="rounded object-contain w-full max-h-[585px]"/>
                            <div className="bg-black absolute left-0 bottom-0 m-3 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                <Icon name="post-tag-people" size={11}/>
                            </div>
                        </div>

                        <div className="flex flex-col px-3 gap-y-3">
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <Icon name="heart" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                    <Icon name="comment" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                    <Icon name="send" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                </div>
                                <div>
                                    <Icon name="save" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <span className="text-[14px] font-medium">2,072 likes</span>
                                <span className="text-[14px]"><span className="font-medium"><Link to={`/${user.username}`}>{user.username}</Link></span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <span className="font-medium text-xs cursor-pointer">See translation</span>
                                <span className="text-[14px] text-gray-400 cursor-pointer">View all 22 comments</span>
                                <div className="flex justify-between items-center py-1">
                                    <input className="text-[14px] text-gray-400 bg-transparent w-full outline-none focus:text-black " placeholder="Add a comment..."/>
                                    <Icon name="emoji" size={14} className="text-gray-400 hover:text-gray-300 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded w-[470px] h-[850px] shadow m-4 py-3 flex flex-col gap-y-3">
                        
                        <div className="flex items-center justify-between px-3">
                            <div className="flex items-center gap-x-2">
                                <div className="rounded-full w-10 h-10 md:w-10 lg:w-10 border border-green-500 p-[1.5px] overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>                            
                                <div className="flex flex-col">
                                    <span><Link to={`/${user.username}`} className="font-medium">{user.username} </Link><span className="text-gray-400 text-sm">• 8h</span></span>
                                    <span className="text-xs">Original audio</span>
                                </div>
                            </div>
                            <button onClick={() => openOptionsModal(true)}>
                                <Icon name="more" size={24} className="hover:text-gray-400 cursor-pointer"/>
                            </button>
                        </div>

                        <div className="rounded relative">
                            <img alt="" src={curry} className="rounded object-contain w-full max-h-[585px]"/>
                            <div className="bg-black absolute left-0 bottom-0 m-3 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                <Icon name="post-tag-people" size={11}/>
                            </div>
                        </div>

                        <div className="flex flex-col px-3 gap-y-3">
                            
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <Icon name="heart" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                    <Icon name="comment" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                    <Icon name="send" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                </div>
                                <div>
                                    <Icon name="save" size={24} className="hover:text-gray-400 cursor-pointer"/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-y-1">
                                <span className="text-[14px] font-medium">2,072 likes</span>
                                <span className="text-[14px]"><span className="font-medium"><Link to={`/${user.username}`}>{user.username}</Link></span> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <span className="font-medium text-xs cursor-pointer">See translation</span>
                                <span className="text-[14px] text-gray-400 cursor-pointer">View all 22 comments</span>
                                <div className="flex justify-between items-center py-1">
                                    <input className="text-[14px] text-gray-400 bg-transparent w-full outline-none focus:text-black " placeholder="Add a comment..."/>
                                    <Icon name="emoji" size={14} className="text-gray-400 hover:text-gray-300 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full pl-10">
                    
                    <div className="flex w-full mt-7 items-center h-[80px] justify-between">
                        <div className="flex items-center gap-x-3">
                            <div className="rounded-full w-14 h-14 md:w-14 lg:w-14 p-[1.5px] overflow-hidden">
                                <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col">
                                <Link to={`/${user.username}`}><span className="font-semibold">{user.username}</span></Link>
                                <span className="text-gray-400 text-sm">{user.fullName}</span>
                            </div>
                        </div>
                        <button className="text-xs font-semibold text-signup">
                            Switch
                        </button>
                    </div>

                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center text-sm text-gray-400 font-medium">Suggestions for you</div>
                        <button className="text-xs font-semibold text-black">
                            See all
                        </button>
                    </div>

                    <div className="flex flex-col w-full items-center mt-4 mb-10 gap-y-3">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full w-9 h-9 md:w-9 lg:w-9 overflow-hidden">
                                    <img alt="" src={aston} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm">username</span>
                                    <span className="text-gray-400 text-xs font-medium">New to Instagram</span>
                                </div>
                            </div>
                            <button className="text-xs font-semibold text-signup">
                                Follow
                            </button>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full w-9 h-9 md:w-9 lg:w-9 overflow-hidden">
                                    <img alt="" src={curry} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm">username</span>
                                    <span className="text-gray-400 text-xs font-medium">Follows You</span>
                                </div>
                            </div>
                            <button className="text-xs font-semibold text-signup">
                                Follow
                            </button>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <div className="rounded-full w-9 h-9 md:w-9 lg:w-9 overflow-hidden">
                                    <img alt="" src={dan_ric} className="rounded-full w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-sm">username</span>
                                    <span className="text-gray-400 text-xs font-medium">New to Instagram</span>
                                </div>
                            </div>
                            <button className="text-xs font-semibold text-signup">
                                Follow
                            </button>
                        </div>
                    </div>

                    <footer className="flex w-full items-center justify-center">
                        <div className="block w-full items-center sticky top-[100vh]">
            
                            <div className="flex flex-wrap gap-x-1 gap-y-1 w-full text-xs text-gray-300">
                                <a href="#">About •</a>
                                <a href="#">Help •</a>
                                <a href="#">Press •</a>
                                <a href="#">API •</a>
                                <a href="#">Jobs •</a>
                                <a href="#">Privacy •</a>
                                <a href="#">Terms •</a>
                                <a href="#">Locations •</a>
                                <a href="#">Meta Verified •</a>
                                <select className="cursor-pointer bg-transparent w-20">
                                    <option value="">Language</option>
                                    <option value="en">English</option>
                                    <option value="ru">Russian</option>
                                    <option value="tr">Türkçe</option>
                                </select>
                            </div>

                            <div className="flex gap-x-2 items-center text-xs text-gray-300 mt-4">
                                <p>© 2023 INSTAGRAM CLONE BY <span className="font-semibold">SCH</span></p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}