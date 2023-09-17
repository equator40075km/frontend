import axios from "axios";

const url = 'http://0.0.0.0:8000/api/v1/'

export default class ProfileService {
    static async getUserID() {
        const token = localStorage.getItem('token')
        if (!token)
            return null

        try {
            const response = await axios.get(`${url}token/`, {
                params: {
                    token: token
                }
            })
            return response.data.user_id
        } catch (error) {
            console.log('ERROR getUserId:')
            console.log(error)
            return null
        }
    }

    static async getProfile(user_id) {
        try {
            const response = await axios.get(url + 'profiles/' + user_id + '/')
            // console.log('SUCCESS getProfile:')
            // console.log(response.data)
            return response
        } catch (error) {
            console.log('ERROR getProfile:')
            console.log(error)
            return error
        }
    }

    static async updateProfile(user_id, data) {
        try {
            const response = await axios.put(
                url + 'profiles/' + user_id + '/',
                data
            )
            return response
        } catch (error) {
            console.log('ERROR updateProfile:')
            console.log(error)
            return error
        }
    }
}
