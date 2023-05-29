import { AiFillCloseCircle } from "react-icons/ai"
import { useState } from "react"
import classNames from "classnames"
import Icon from "./Icon"
 
export default function Search () {

    const [open, setOpen] = useState(false)
    
    return (
        <div className="w-[268px] relative">
            <span className={classNames({
                "absolute text-[#8e8e8e] pointer-events-none top-0 left-0 h-9 w-9 flex items-center justify-center": true,
                "hidden": open
            })}>
                <Icon name="search" size={17}/>

            </span>
            <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" className="h-9 outline-none rounded bg-[#efefef] w-full pl-9 focus:pl-3" placeholder="Search"/>
            <button onClick={() => setOpen(false)} className={classNames({
                "absolute text-[#c7c7c7] hidden top-0 right-0 w-9 h-9 items-center justify-center": true,
                "!flex": open
            })}>
                <AiFillCloseCircle/>
            </button>
        </div>
    )
}