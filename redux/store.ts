import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch as useAppDispatch, TypedUseSelectorHook, useSelector as useAppSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["authState", "userReducer"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  user: persistReducer(authPersistConfig, userReducer),
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;