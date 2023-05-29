import classNames from "classnames";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Icon from "../../components/Icon.js";
import { getUserInfo } from "../../firebase.js";
import Header from "./components/header.js";
import ProfileNotFound from "./not-found.js";
import Loader from "../../components/Loader.js";
import Footer from "../../components/Footer.js";

export default function ProfileLayout () {

  // url parametrelerine erişmek için kullanılır
  const [user, setUser] = useState(false)
  const { username } = useParams()

  useEffect(() => {
    getUserInfo(username)
        .then(user => {
            setUser(user)
        })
        .catch(err => {
            setUser(null)
        })
  }, [])

  if (user === null) {
    return <ProfileNotFound />
  }

  if (user === false) {
    return <Loader />
  }

    return user && (
        <div className="h-full">
            <Helmet>
                <title>{user.fullName} (@{user.username}) • Instagram photos and videos</title>
            </Helmet>
            <Header user={user} />
            <nav className="border-t flex items-center justify-center gap-x-16">
                <NavLink to={`/${username}`} end={true} className={({ isActive }) => classNames({
                    "text-xs flex font-semibold tracking-widest gap-x-1.5 border-t py-5 items-center -mt-px": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="post" size={12}/>
                    POSTS
                </NavLink>
                <NavLink to={`/${username}/tagged`} end={true} className={({ isActive }) => classNames({
                    "text-xs flex font-semibold tracking-widest gap-x-1.5 border-t py-5 items-center -mt-px": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="tagged" size={12}/>
                    TAGGED
                </NavLink>
            </nav>
            <Outlet/>
            <Footer/>
        </div>
    )
}