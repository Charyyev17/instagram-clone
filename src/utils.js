import store from "./stores"
import { setUser } from "./stores/auth"
import { setChatUser } from "./stores/chat"
import { setShowOptionsModal, setShowCreateModal } from "./stores/modal"

export const userHandle = data => {
    // firebase.js'den gelen değer dispatch uzerinden auth.js içerisindeki setUser'e gönderiliyor
    store.dispatch(setUser(data))
}

export const chatUserHandle = data => {
    store.dispatch(setChatUser(data))
}

export const openOptionsModal = showOptionsModal => {
    store.dispatch(setShowOptionsModal(showOptionsModal))
}

export const openCreateModal = showCreateModal => {
    store.dispatch(setShowCreateModal(showCreateModal))
}