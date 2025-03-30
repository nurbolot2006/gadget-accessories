import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem("lang") || "ru"
};

const languageSlice = createSlice({
    name: "language", initialState, reducers: {
        setLanguage: (state, action) => {
            state.lang = action.payload;
            localStorage.setItem("lang", action.payload); // 🌍 Тилди сактоо
        }
    }
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;
