import React from 'react'

import { useGlobal } from '../../store/global'

const Tours = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    setCurrentPage(2)

    return (
        <div>Tours</div>
    )
}

export default Tours