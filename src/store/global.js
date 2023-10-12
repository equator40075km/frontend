import { create } from 'zustand'

export const useGlobal = create(set => ({
    currentPage: '',
    userID: null,
    whiteMenu: false,

    setCurrentPage: (page) => set(() => ({
        currentPage: page
    })),

    setUserID: (id) => set(() => ({
        userID: id
    })),

    setWhiteMenu: (white) => set(() => ({
        whiteMenu: white
    }))
}))
