import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";
import chat from "./chat";

const store = configureStore({
    reducer: {
        auth,
        modal,
        chat
    }
})

export default store