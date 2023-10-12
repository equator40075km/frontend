import React, { useEffect } from 'react'
import classes from './Profile.module.css'
import ProfileMenu from '../../components/Header/ProfileMenu'
import ProfileFavorites from '../../components/ProfileFavorites/ProfileFavorites'
import ProfileTrips from '../../components/ProfileTrips/ProfileTrips'
import ProfilePaidArticles from '../../components/ProfilePaidArticles/ProfilePaidArticles'
import { useProfileChapter } from '../../store/profile'
import { profile_btns } from '../../constants/constants'
import Development from '../../components/Develepment/Development'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants';
import useMatchMedia from 'use-match-media-hook'

const Profile = function() {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)
    const chapter = useProfileChapter(state => state.profileChapter)
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    useEffect(() => {
        setCurrentPage(pages.profile)
        setWhiteMenu(false)
    }, [chapter, setCurrentPage, setWhiteMenu])

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
            {!mobile && <ProfileMenu />}
            {renderChapter()}
        </div>
    )
}

export default Profile;
