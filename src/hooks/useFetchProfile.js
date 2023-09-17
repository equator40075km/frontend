import ProfileService from "../API/ProfileService"
import useUserID from "./useUserID"
import { useProfile } from "../store/profile"

export default function useFetchProfile() {
    const userID = useUserID()
    const {profile, setProfile} = useProfile()
    
    async function fetchProfile() {
        if (!userID)
            return

        const response = await ProfileService.getProfile(userID)
        if (response.status === 200) {
            await setProfile(response.data)
        }
    }

    if (!profile.user.id)
        fetchProfile()

    return profile
}
