import React, { useEffect } from 'react'
import classes from './Profile.module.css'
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu'
import ProfileFavorites from '../../components/ProfileFavorites/ProfileFavorites'
import ProfileTrips from '../../components/ProfileTrips/ProfileTrips'
import ProfilePaidArticles from '../../components/ProfilePaidArticles/ProfilePaidArticles'
import { useProfileChapter } from '../../store/profile'
import { profile_btns } from '../../constants/constants'
import Development from '../../components/Develepment/Development'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants';

const Profile = function() {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const chapter = useProfileChapter(state => state.profileChapter)

    useEffect(() => {
        setCurrentPage(pages.profile)
    }, [chapter, setCurrentPage])

    function renderChapter() {
        switch (chapter) {
            case profile_btns.favorites.name:
                return <ProfileFavorites />
            case profile_btns.trips.name:
                return <ProfileTrips />
            case profile_btns.paid_articles.name:
                return <ProfilePaidArticles />
            case profile_btns.exit.name:
                return <Development />
            default:
                return <ProfileFavorites />
        }
    }

    return (
        <div className={classes.container}>
            <ProfileMenu />
            {renderChapter()}
        </div>
    )
}

export default Profile;
