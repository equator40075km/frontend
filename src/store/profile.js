import { create } from "zustand"
import { profile_btns } from '../constants/constants'

export const useProfile = create(set => ({
    profileChapter: profile_btns.favorites.name,

    setProfileChapter: (chapter) => set(() => ({
        profileChapter: chapter
    }))
}))