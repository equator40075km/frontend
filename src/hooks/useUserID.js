// import { useEffect } from "react"
import ProfileService from "../API/ProfileService"
import { useGlobal } from "../store/global"

export default function useUserID() {
    const userID = useGlobal(state => state.userID)
    const setUserID = useGlobal(state => state.setUserID)

    // useEffect(() => {
        async function setID() {
            const response = await ProfileService.getUserID()
            if (response)
                await setUserID(response)
        }

        if (!userID)
            setID()
    // })

    return userID
}
