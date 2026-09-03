import { createSlice } from "@reduxjs/toolkit";

const getMode = () => {
    let mode = localStorage.getItem("mode")
    if (mode) {
        if (mode === "light") {
            return mode
        } else {
            mode = "dark"
            return mode
        }
    } else {
        mode = "light"
    }
    return mode
}

const initialState = {
    mode: getMode(),
    globalMsg: null,
}

const globalSlice = createSlice({
    name: 'global', initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark"
            localStorage.setItem("mode", state.mode)
            return state
        },
    }
})

export const { setMode, setGlobalMsg, setUser, logout } = globalSlice.actions
export default globalSlice.reducer