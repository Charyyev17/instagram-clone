import store from "../stores"
import { setShowOptionsModal } from "../stores/modal"

export default function PostOptions () {

    const closeModal = showOptionsModal => {
        store.dispatch(setShowOptionsModal(showOptionsModal))
    }

    return (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-modal-bg z-10">
            <div className="bg-white rounded-lg overflow-auto">
                <div className="text-sm text-red-500 border-b p-3 px-36 font-bold text-center cursor-pointer hover:bg-zinc-50">Report</div>
                <div className="text-sm text-red-500 border-b p-3 px-36 font-bold text-center cursor-pointer hover:bg-zinc-50">Unfollow</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">Add to favourites</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">Go to post</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">Share to...</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">Copy link</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">Embed</div>
                <div className="text-sm border-b p-3 px-36 text-center cursor-pointer hover:bg-zinc-50">About this account</div>
                <div className="text-sm p-3 px-36 text-center cursor-pointer hover:bg-zinc-50" onClick={() => closeModal(false)}>Cancel</div>
            </div>
        </div>
    )
}