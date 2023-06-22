import { create } from 'zustand'
import axios from 'axios';
import { persist } from 'zustand/middleware';
import { createJSONStorage } from 'zustand/middleware';

export const useArticles = create(
    persist(
        (set) => ({
            articles: [],

        setArticles: (articles) => set(state => ({
            articles: [...state.articles, ...articles]
        })),

        fetchArticles: async () => {
            try {
                const res = await axios.get('http://0.0.0.0:8000/api/v1/articles/')

                if (res.status !== 200) throw new Error('Failed to fetch articles!')

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
