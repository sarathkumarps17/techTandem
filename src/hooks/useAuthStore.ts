import { createStore } from 'zustand/vanilla'

interface AuthState {
    error: string | null
    setError: (error: string | null) => void
    clearError: () => void
}

const useAuthStore = createStore<AuthState>((set) => ({
    error: null,
    setError: (error) => set({ error }),
    clearError: () => set({ error: null }),
}))

export default useAuthStore