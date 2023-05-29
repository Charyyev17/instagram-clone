import { HiOutlineCamera } from "react-icons/hi"

export default function ProfilePosts () {
    return (
        <div className="flex flex-col items-center justify-center">
            <span className="border-black border-[3px] rounded-full p-3 mt-10 mb-6 items-center">
                <HiOutlineCamera size={33}/>
            </span>
            <h1 className="text-3xl font-bold">No Posts Yet</h1>
        </div>
    )
}