import React, { useEffect, useRef } from 'react'
import classes from './Login.module.css'
import { useGlobal } from '../../store/global';
import { pages } from '../../constants/constants';
import IconBtn from '../../components/IconBtn/IconBtn';
import { useNavigate } from 'react-router-dom';
import { text_sign } from '../../constants/constants';
import LoginService from '../../API/LoginService';

const Login = function (props) {
    const navigate = useNavigate()
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    const isLogin = props.type === 'sign_in'
    const text = isLogin ? text_sign.in : text_sign.up

    const passwordInputRef = useRef()

    useEffect(() => {
        setCurrentPage(pages.login)
    })

    const onLogo = () => {
        navigate('/')
    }

    const onOrLink = () => {
        if (isLogin)
            navigate('/signup')
        else
            navigate('/login')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)

        if (isLogin) {
            const response = await LoginService.signIn(formData)
            if (response.data.auth_token) {
                localStorage.setItem('token', response.data.auth_token)
                navigate('/')
                return
            }

            alert('Неверные данные')
            return
        }

        const status = await LoginService.signUp(formData)

        if ( status === 201 ) {
            navigate('/login')
            return
        }

        passwordInputRef.current.value = ''
        alert('Ошибка. Попробуйте ещё раз.')
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.logo} onClick={onLogo} />
                <div className={classes.outbox}>
                    <p className={classes.ftitle}>{text.title}</p>
                    <IconBtn icon='/static/vk-icon.png' text={text.vk} />
                    <IconBtn icon='/static/google-icon.png' text={text.google} />
                    <p className={classes.or}>или</p>
                    <form onSubmit={handleSubmit}>
                        <input name='username' className={classes.input} type='text' placeholder='Ваш логин' />
                        {!isLogin && 
                            <input name='email' className={classes.input} type='email' placeholder='Ваша почта' />
                        }
                        <input ref={passwordInputRef} name='password' className={classes.input} type='password' placeholder={text.password} />
                        <p className={classes.rules}> 
                        Нажимая «Создать», вы принимаете пользовательское соглашение и политику конфиденциальности
                        </p>
                        <button className={classes.loginBtn} type='submit'>
                            {text.btn}
                        </button>
                    </form>
                    <span className={classes.or}>{text.link_text}
                        <p className={classes.link} onClick={onOrLink}>
                            {text.link}
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login;
