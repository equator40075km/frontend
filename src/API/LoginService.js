import axios from "axios";
import { url } from '../constants/constants'

export default class LoginService {
    static async signUp(formData) {
        try {
            await axios.post(url + 'auth/users/', formData)
            return null
        } catch (error) {
            const errorMsg = error.request.responseText

            if (errorMsg.includes('email address already exists'))
                return 'Пользователь с данной почтой уже существует'
            else if (errorMsg.includes('username already exists'))
                return 'Пользователь с данным логином уже существует'
            else if (errorMsg.includes('too short'))
                return 'Длина пароля меньше 8 символов.'
            else if (errorMsg.includes('too common'))
                return 'Пароль слишком простой.'
            else if (errorMsg.includes('entirely numeric'))
                return 'Пароль содержит только цифры.'
            else if (errorMsg.includes('similar to the username'))
                return 'Пароль совпадает с логином.'
            
            return 'Ошибка на стороне сервера. Просим сообщить нам о проблеме.'
        }
    }

    static async signIn(formData) {
        try {
            let errorMsg = null
            const response = await axios.post(url + 'auth/token/login/', formData)

            if (response.data && response.data.auth_token) {
                localStorage.setItem('token', response.data.auth_token)
            } else {
                errorMsg = 'Не удалось войти: ошибка сервера.\nСообщите нам об ошибке.'
            }

            return errorMsg
        } catch (error) {
            return 'Неверные данные. Попробуйте снова.'
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
