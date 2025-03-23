// import { createSlice } from "@reduxjs/toolkit";
//
// const initialState = {
//     favorites: [],
// };
//
// const favoriteSlice = createSlice({
//     name: "favorite",
//     initialState,
//     reducers: {
//         toggleFavorite: (state, action) => {
//             const index = state.favorites.findIndex((id) => id === action.payload);
//             if (index >= 0) {
//                 state.favorites.splice(index, 1); // Эгер бар болсо - өчүрүү
//             } else {
//                 state.favorites.push(action.payload); // Эгер жок болсо - кошуу
//             }
//         },
//         removeFromFavorites: (state, action) => {
//             state.favorites = state.favorites.filter((id) => id !== action.payload);
//         },
//     },
// });
//
// // Экспорт кылууну текшер
// export const { toggleFavorite, removeFromFavorites } = favoriteSlice.actions;
// export default favoriteSlice.reducer;
