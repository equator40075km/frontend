import React from 'react'

import { useGlobal } from '../../store/global'

const About = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    setCurrentPage('about')

    return (
        <div>About</div>
    )
}

export default About