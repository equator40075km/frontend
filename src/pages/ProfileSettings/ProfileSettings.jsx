import React, { useState } from 'react'
import classes from './ProfileSettings.module.css'
import { useNavigate } from 'react-router-dom'

const testImg = 'https://sun9-65.userapi.com/impg/EiOkSQFnFPpv8vSYYIAvkb7hi2Hlmd7DzkVuew/RYdjiEs_0iM.jpg?size=605x807&quality=95&sign=ef9ac8902558cb477dd7bfd8c63e345f&c_uniq_tag=xz2Gb08Llml-1cFkak-4yPQooN17VauWViGMq4Y--W0&type=album'

function ProfileSettings() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        first_name: 'firstName',
        last_name: 'lastName',
        city: 'city',
        bday: null,
        gender: 'male',
        email: 'email',
    })

    function onBack() {
        navigate('/profile/1')
    }

    function onChangePhoto() {
        console.log('onChangePhoto')
        // TODO:
    }

    function onChangeInputs(event) {
        const value = event.target.value
        var malebox = document.getElementById('male')
        var femalebox = document.getElementById('female')

        switch(event.target.name) {
        case 'first_name':
            setData({...data, first_name: value})
            break
        case 'last_name':
            setData({...data, last_name: value})
            break
        case 'city':
            setData({...data, city: value})
            break
        case 'bday':
            setData({...data, bday: value})
            break
        case 'male':
            if (malebox.checked) {
                femalebox.checked = false
                setData({...data, gender: 'male'})
            }
            break
        case 'female':
            if (femalebox.checked) {
                malebox.checked = false
                setData({...data, gender: 'female'})
            }
            break
        default:
            return
        }
    }

    async function onSubmit(event) {
        event.preventDefault()
        console.log('FORM: onSubmit')
    }

    return (
        <div className={classes.container}>
            <div className={classes.back} onClick={onBack}/>
            <div className={classes.photo}>
                <img src={testImg} alt='' />
                <button onClick={onChangePhoto}>
                    Изменить
                </button>
            </div>
            <form className={classes.form} onSubmit={onSubmit}>
                <div className={classes.firstName}>
                    <p>Имя</p>
                    <input
                        type='text'
                        value={data.first_name}
                        onChange={onChangeInputs}
                        name='first_name'
                        className={classes.input}
                    />
                </div>
                <div className={classes.lastName}>
                    <p>Фамилия</p>
                    <input
                        type='text'
                        value={data.last_name}
                        onChange={onChangeInputs}
                        name='last_name'
                        className={classes.input}
                    />
                </div>
                <div className={classes.city}>
                    <p>Локация</p>
                    <input
                        type='text'
                        value={data.city}
                        onChange={onChangeInputs}
                        name='city'
                        className={classes.input}
                    />
                </div>
                <div className={classes.bday}>
                    <p>Дата рождения</p>
                    <input
                        type='date'
                        value={data.date}
                        onChange={onChangeInputs}
                        name='bday'
                        className={classes.input}
                    />
                </div>
                <div className={classes.gender}>
                    <p className={classes.p}>Пол</p>
                    <label className={classes.label} style={{maringRight: "10px"}}>
                        <input
                            type='checkbox'
                            name='male'
                            onChange={onChangeInputs}
                            id='male'
                        />
                        <span>Мужской</span>
                    </label>
                    <label className={classes.label}>
                        <input
                            type='checkbox'
                            name='female'
                            onChange={onChangeInputs}
                            id='female'
                        />
                        <span>Женский</span>
                    </label>
                </div>
                <button className={classes.btn}>
                    Сохранить изменения
                </button>
            </form>
        </div>
    )
}

export default ProfileSettings