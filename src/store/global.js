import { create } from 'zustand'

export const useGlobal = create(set => ({
    isMainPage: true,
    setIsMainPage: (isMainPage) => set(() => ({
        isMainPage: isMainPage
    }))
}))
