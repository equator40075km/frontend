import React from 'react'

import { useGlobal } from '../../store/global'

const About = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    setCurrentPage(4)

    return (
        <div>About</div>
    )
}

export default About