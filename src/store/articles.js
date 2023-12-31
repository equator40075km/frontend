import { create } from 'zustand'
import axios from 'axios';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';
import { url } from '../constants/constants'

export const useArticles = create(
    persist(
        (set, get) => ({
        articles: [],

        setArticles: (articles) => set(state => ({
            articles: [...state.articles, ...articles]
        })),

        fetchArticles: async () => {
            console.log("Fetch articles start!")

            try {
                const res = await axios.get(`${url}articles/`)

                if (res.status !== 200)
                    throw new Error('Failed to fetch articles!')

                set({ articles: await res.data })
            } catch (error) {
                console.log( error.message )
            } finally {
                // console.log( 'End fetch articles!' )
            }
        },

        }),
        {
            name: 'articlesStorage',
            storage: createJSONStorage( () => localStorage )
        }
    )
)
