import { create } from "zustand"
import { profile_btns } from '../constants/constants'

export const useProfileChapter = create(set => ({
    profileChapter: profile_btns.favorites.name,

    setProfileChapter: (chapter) => set(() => ({
        profileChapter: chapter
    }))
}))

export const useProfile = create(set => ({
    profile: {
        user: {
            id: null,
            first_name: '',
            last_name: '',
            email: ''
        },
        city: '',
        bday: '',
        gender: ''
    },

    setProfile: (_profile) => set(() => ({
        profile: _profile
    }))
}))
