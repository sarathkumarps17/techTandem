
import { createStore } from 'zustand/vanilla'

export interface AuthState {
    error: string | null
}

export type AuthActions = {
    setError: (error: string | null) => void
    clearError: () => void
}

export type AuthStore = AuthState & AuthActions

export const defaultInitState: AuthState = {
    error: null,
}

export const createAuthStore = (
    initState: AuthState = defaultInitState,
) => {
    return createStore<AuthStore>()((set) => ({
        ...initState,
        setError: (error) => set({ error }),
        clearError: () => set({ error: null }),
    }))
}
