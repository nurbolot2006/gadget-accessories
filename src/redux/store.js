import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ProductsApi } from "./api/ProductsApi.js";
import basketReducer from "./slices/basketSlice.js";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["basket"],
};

const rootReducer = combineReducers({
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    basket: basketReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(ProductsApi.middleware),
});

export const persistor = persistStore(store);
