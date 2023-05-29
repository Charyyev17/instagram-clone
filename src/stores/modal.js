import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showOptionsModal: false,
    showCreateModal: false
}

const auth = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setShowOptionsModal: (state, action) => {
            state.showOptionsModal = action.payload
        },
        setShowCreateModal: (state, action) => {
            state.showCreateModal = action.payload
        }
    }
})

export const { setShowOptionsModal, setShowCreateModal } = auth.actions

export default auth.reducer