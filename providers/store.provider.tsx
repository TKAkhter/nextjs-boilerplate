import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (<Provider store={store}>
        {/* PersistGate delays rendering until the store is rehydrated */}
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
    );
}