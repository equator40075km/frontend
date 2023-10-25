import ProfileService from "../API/ProfileService"
import useUserID from "./useUserID"
import { useProfile } from "../store/profile"
import { useEffect } from "react"

export default function useFetchProfile() {
    const userID = useUserID()
    const [profile, setProfile] = useProfile(state => [state.profile, state.setProfile])
    
    useEffect(() => {
        async function fetchProfile() {
            console.log('FETCH PROFILE')
    
            if (!userID)
                return
    
            const response = await ProfileService.getProfile(userID)
    
            if (response && response.status === 200) {
                await setProfile(response.data)
            }
        }
    
        if (!profile.user.id)
            fetchProfile()
    }, [profile.user.id, setProfile, userID])

    return profile
}
