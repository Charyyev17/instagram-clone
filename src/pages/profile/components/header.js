import { useSelector } from "react-redux"
import aston from "../../../assets/images/aston.jpg"
import Icon from "../../../components/Icon"
import ProfileOptions from "../../../modals/profile-options"
import { openOptionsModal } from "../../../utils"

export default function Header ({ user }) {

    const { showOptionsModal } = useSelector(state => state.modal)

    return (
        <>
            {showOptionsModal && <ProfileOptions/>}
            <div className="flex gap-x-6">
                <div className="py-4 pb-10 px-28">
                    <img className="rounded-full w-[150px] h-[150px]" alt="profile" src={aston}/>
                </div>
                <div>
                    <div className="flex py-6 mb-2">
                        <p className="font-semibold text-xl mr-6">{user.username}</p>
                        <button className="rounded-lg bg-signup text-white font-semibold text-sm py-1.5 px-5 mr-2">Follow</button>
                        <button className="rounded-lg border-black bg-[#efefef] px-2 mr-4">
                            <Icon name="suggested-people" size={18} />
                        </button>
                        <button onClick={() => openOptionsModal(true)}>
                            <Icon name="more" size={28} />
                        </button>
                    </div>
                    <div className="flex gap-x-8 items-center">
                        <div className="font-semibold"><span>{user.posts}</span> posts</div>
                        <div className="font-semibold"><span>{user.followers.length}</span> followers</div>
                        <div className="font-semibold"><span>{user.following.length}</span> following</div>
                    </div>
                </div>
            </div>
        </>
    )
}