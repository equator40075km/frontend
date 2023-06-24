import { create } from 'zustand'

export const useGlobal = create(set => ({
    currentPage: 0,

    setCurrentPage: (page) => set(() => ({
        currentPage: page
    }))
}))
