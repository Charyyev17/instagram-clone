import Icon from "../components/Icon"
import store from "../stores"
import { setShowCreateModal } from "../stores/modal"

export default function CreatePost () {

    const closeModal = showCreateModal => {
        store.dispatch(setShowCreateModal(showCreateModal))
    }

    return (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-create-modal-bg z-40">
            <button className="fixed right-0 top-0 p-4" onClick={() => closeModal(false)}>
                <Icon name="close" size={19}/>
            </button>
            <div className="flex flex-col items-center justify-center bg-white w-[540px] h-[580px] rounded-lg">
                <div className="text-md border-b p-3 px-40 font-semibold text-center w-full">Create new post</div>
                <div className="flex flex-col w-full h-full items-center justify-center p-6">
                    <Icon name="create-post" size={100}/>
                    <span className="text-[20px]">Drag photos and videos here</span>
                    <div className="mt-4">
                        <button className="bg-signup text-white text-sm font-medium rounded-lg py-2 px-3.5">
                            Select from computer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}