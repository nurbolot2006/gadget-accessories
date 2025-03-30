import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {ProductsApi} from "./api/ProductsApi.js";
import basketReducer from "./slices/basketSlice.js";
import favoriteReducer from "./slices/favoriteSlice.js";

const persistConfig = {
    key: "root", storage, whitelist: ["basket", "favorites"],
};

const rootReducer = combineReducers({
    [ProductsApi.reducerPath]: ProductsApi.reducer, basket: basketReducer, favorite: favoriteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(ProductsApi.middleware),
});

export const persistor = persistStore(store);
