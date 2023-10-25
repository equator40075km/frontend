import React, { useEffect, useState } from 'react'
import classes from './ProfileSettingsForm.module.css'
import ProfileService from '../../API/ProfileService'
import { useProfile } from '../../store/profile'

function ProfileSettingsForm() {
    const {profile, setProfile} = useProfile()

    const [data, setData] = useState({
        user: {
            first_name: '',
            last_name: '',
        },
        city: '',
        bday: '',
        gender: '',
    })

    useEffect(() => {
        setData(profile)

        if (profile.gender === 'male') {
            var malebox = document.getElementById('male')
            malebox.checked = true
        }
        if (profile.gender === 'female') {
            var femalebox = document.getElementById('female')
            femalebox.checked = true
        }

    }, [profile])

    function onChangeInputs(event) {
        const value = event.target.value
        var malebox = document.getElementById('male')
        var femalebox = document.getElementById('female')

        switch(event.target.name) {
        case 'first_name':
            setData({...data, user: {...data.user, first_name: value}})
            break
        case 'last_name':
            setData({...data, user: {...data.user, last_name: value}})
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

        const response = await ProfileService.updateProfile(profile.user.id, data)
        if ( response.status === 200 ) {
            setProfile(response.data)
            alert('Данные успешно сохранены')
        } else {
            alert('Не удалось сохранить данные')
        }
    }

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <div className={classes.firstName}>
                <p>Имя</p>
                <input
                    type='text'
                    value={data.user.first_name}
                    onChange={onChangeInputs}
                    name='first_name'
                    className={classes.input}
                />
            </div>
            <div className={classes.lastName}>
                <p>Фамилия</p>
                <input
                    type='text'
                    value={data.user.last_name}
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
                    value={data.bday || ''}
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
    )
}

export default ProfileSettingsForm
