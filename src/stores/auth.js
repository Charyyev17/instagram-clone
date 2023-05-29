import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

// 3 değer alıyor => isim(name), başlangıç değer(initialState), işlemler(reducers)
const auth = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { setUser } = auth.actions

export default auth.reducer