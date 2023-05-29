import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import Icon from "./Icon"
import { FiLogOut } from "react-icons/fi"
import Search from "./Search";
import { logout } from "../firebase.js";
import aston from "../assets/images/aston.jpg"
import { useSelector } from "react-redux";
import { useState } from "react";
import { openCreateModal } from "../utils";
import CreatePost from "../modals/create-post";

export default function Header () {

    const { user } = useSelector(state => state.auth)
    const { showCreateModal } = useSelector(state => state.modal)
    const [show, setShow] = useState(false)

    return (
        <>
            {showCreateModal && <CreatePost />}
            <header className="bg-white border-r border-gray-300 fixed w-[244px] h-[100vh] items-center">

                <div className="flex flex-col h-full justify-between mx-3">

                    <div>
                        <Link to="/">
                            <div className="pl-3 mt-3">
                                <Icon name="icon" size={103}/>
                            </div>
                        </Link>

                        <nav className="flex flex-col gap-y-1.5">
                            <NavLink to="/" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="home" size={24}/>
                                    <span className="pl-4">Home</span>
                                </div>
                            </NavLink>
                            <NavLink to="/" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="search" size={24}/>
                                    <span className="pl-4">Search</span>
                                </div>
                            </NavLink>
                            <NavLink to="/" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="explore" size={24}/>
                                    <span className="pl-4">Explore</span>
                                </div>
                            </NavLink>
                            <NavLink to="/" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="reels" size={24}/>
                                    <span className="pl-4">Reels</span>
                                </div>
                            </NavLink>
                            <NavLink to="/inbox" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="messenger" size={24}/>
                                    <span className="pl-4">Messages</span>
                                </div>
                            </NavLink>
                            <NavLink to="/" className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="heart" size={24}/>
                                    <span className="pl-4">Notifications</span>
                                </div>
                            </NavLink>
                            <NavLink onClick={() => openCreateModal(true)} className="focus:font-bold">
                                <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                    <Icon name="create" size={24}/>
                                    <span className="pl-4">Create</span>
                                </div>
                            </NavLink>
                            <div>
                                <NavLink to={`/${user.username}`} className="focus:font-bold">
                                    <div className="flex py-3 px-3 rounded-3xl hover:bg-gray-50">
                                        <img alt="profile" className="rounded-full w-6 h-6 md:w-6 lg:w-6 overflow-hidden" src={aston}/>
                                        <span className="pl-4">Profile</span>
                                    </div>    
                                </NavLink>
                            </div>
                        </nav>
                    </div>

                    <div className={classNames({
                            "hidden": !show,
                            "absolute bottom-0 z-10 mb-[100px] w-60 ease-out duration-100 rounded bg-white drop-shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none": show
                        })}>
                            <NavLink to={`/`}><div className="px-3 py-2 hover:bg-zinc-50 border-b flex items-center justify-between gap-x-2" onClick={() => setShow(false)}>Settings <Icon name="settings" size={24}/></div></NavLink>
                            <NavLink to={`/`}><div className="px-3 py-2 hover:bg-zinc-50 border-b flex items-center justify-between gap-x-2" onClick={() => setShow(false)}>Your activity <Icon name="activity" size={24}/></div></NavLink>
                            <NavLink to={`/`}><div className="px-3 py-2 hover:bg-zinc-50 border-b flex items-center justify-between gap-x-2" onClick={() => setShow(false)}>Saved <Icon name="save" size={24}/></div></NavLink>
                            <NavLink to={`/`}><div className="px-3 py-2 hover:bg-zinc-50 border-b flex items-center justify-between gap-x-2" onClick={() => setShow(false)}>Switch appearance <Icon name="switch-theme" size={24}/></div></NavLink>
                            <NavLink to={`/`}><div className="px-3 py-2 hover:bg-zinc-50 border-b-4 flex items-center justify-between gap-x-2" onClick={() => setShow(false)}>Report a problem <Icon name="report-problem" size={24}/></div></NavLink>
                            <div className="cursor-pointer px-3 py-2 hover:bg-zinc-50 flex items-center justify-between gap-x-2" onClick={logout}>Logout<FiLogOut size={24}/></div>
                        </div>

                    <Link className="my-6 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-50 focus:font-bold">
                        <div className="flex" onClick={() => setShow(show ? false : true)}>
                            <Icon name="home-more" size={24}/>
                            <span className="pl-4">More</span>
                        </div>
                    </Link>

                </div>

            </header>
        </>
        
    )
}