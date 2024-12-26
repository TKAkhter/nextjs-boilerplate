
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type User = {
    email: string;
    uuid: string;
    username: string;
    name: string;
}

interface AuthState {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
}

export const useAuth = create<AuthState, [['zustand/persist', unknown]]>(persist(
    (set) => ({
        user: null,  // Initial state: no user is logged in
        token: null,  // Initial state: no user is logged in
        setUser: (user: User) => set({ user }),
        setToken: (token) => set({ token }),
        clearUser: () => set({ user: null }),
        clearToken: () => set({ token: null })
    }),
    {
        name: 'auth-storage',  // Name of the storage item
        storage: createJSONStorage(() => sessionStorage),
    },
));
