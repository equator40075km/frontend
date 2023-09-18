import axios from "axios";
import { url } from '../constants/constants'

export default class LoginService {
    static async signUp(formData) {
        try {
            const response = await axios.post(url + 'auth/users/', formData)
            return response.status
        } catch (error) {
            console.log(error)
            return 400
        }
    }

    static async signIn(formData) {
        try {
            const response = await axios.post(url + 'auth/token/login/', formData)
            return response
        } catch (error) {
            return error.response
        }
    }

    static async logout() {
        try {
            const response = await axios.post(url + 'auth/token/logout/', {} , {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            localStorage.removeItem('token')
            return response
        } catch (error) {
            console.log(error)
            return error
        }
    }
}
