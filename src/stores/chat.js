import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatUser: {
        name: "",
        avatar: ""
    }
}

const chat = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatUser: (state, action) => {
            state.chatUser = action.payload
        }
    }
})

export const { setChatUser } = chat.actions

export default chat.reducer