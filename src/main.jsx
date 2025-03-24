import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import "./i18n"; // <-- БУЛ ЖЕРГЕ i18n'ди импорт кылуу керек

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
