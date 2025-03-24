import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [], // Избранные товарлардын тизмеси
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            // Эгер товар мурунтан бар болсо, кошпойбуз
            const isExist = state.favorites.some(item => item.id === action.payload.id);
            if (!isExist) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
