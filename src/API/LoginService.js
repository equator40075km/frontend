import axios from "axios";

const url = 'http://0.0.0.0:8000/'

export default class LoginService {
    static async signUp(formData) {
        try {
            const response = await axios.post(url + 'api/v1/auth/users/', formData)
            return response.status
        } catch (error) {
            console.log(error)
            return 400
        }
    }

    static async signIn(formData) {
        try {
            const response = await axios.post(url + '/auth/token/login/', formData)
            return response
        } catch (error) {
            return error.response
        }
    }
}
