import axios from "axios";
import { url } from '../constants/constants'

export default class ProfileService {
    static async getUserID() {
        try {
            const response = await axios.get(`${url}token/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })

            if (response.status > 200)
                return null

            return response.data.user_id
        } catch (error) {
            console.log('ERROR getUserId:')
            console.log(error)
            return null
        }
    }

    static async getProfile(user_id) {
        try {
            const response = await axios.get(`${url}profiles/${user_id}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            console.log('ERROR getProfile:')
            console.log(error)
            return error.response
        }
    }

    static async updateProfile(user_id, data) {
        try {
            const response = await axios.put(`${url}profiles/${user_id}/`, data, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            console.log('ERROR updateProfile:')
            console.log(error)
            return error.response
        }
    }

    static async getFavorites(user_id) {
        try {
            const response = await axios.get(`${url}profiles/${user_id}/favorites/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            console.log('ERROR getFavorites:')
            console.log(error)
            return error.response
        }
    }

    static async addToFavorites(user_id, article_id) {
        try {
            const response = await axios.put(`${url}profiles/${user_id}/favorites/${article_id}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            console.log('ERROR addToFavorites:')
            console.log(error)
            return error.response
        }
    }

    static async removeFromFavorites(user_id, article_id) {
        try {
            const response = await axios.delete(`${url}profiles/${user_id}/favorites/${article_id}/`, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            return response
        } catch (error) {
            console.log('ERROR addToFavorites:')
            console.log(error)
            return error.response
        }
    }
}
