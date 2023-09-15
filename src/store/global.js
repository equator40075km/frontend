import { create } from 'zustand'

export const useGlobal = create(set => ({
    currentPage: '',

    setCurrentPage: (page) => set(() => ({
        currentPage: page
    })),
}))
