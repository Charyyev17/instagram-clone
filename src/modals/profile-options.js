import store from "../stores"
import { setShowOptionsModal } from "../stores/modal"

export default function ProfileOptions () {

    const closeModal = showOptionsModal => {
        store.dispatch(setShowOptionsModal(showOptionsModal))
    }

    return (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-modal-bg z-10">
            <div className="bg-white rounded-lg overflow-auto">
                <div className="text-sm text-red-500 border-b p-3.5 px-44 font-bold text-center cursor-pointer hover:bg-zinc-50">Block</div>
                <div className="text-sm text-red-500 border-b p-3.5 px-44 font-bold text-center cursor-pointer hover:bg-zinc-50">Restrict</div>
                <div className="text-sm text-red-500 border-b p-3.5 px-44 font-bold text-center cursor-pointer hover:bg-zinc-50">Report</div>
                <div className="text-sm p-3.5 px-44 text-center cursor-pointer hover:bg-zinc-50" onClick={() => closeModal(false)}>Cancel</div>
            </div>
        </div>
    )
}