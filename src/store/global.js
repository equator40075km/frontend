import { create } from 'zustand'

export const useGlobal = create(set => ({
    currentPage: '',
    userID: null,

    setCurrentPage: (page) => set(() => ({
        currentPage: page
    })),

    setUserID: (id) => set(() => ({
        userID: id
    }))
}))
