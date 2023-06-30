import React from 'react'

import { useGlobal } from '../../store/global'

const Merch = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    setCurrentPage('merch')

    return (
        <div>Merch</div>
    )
}

export default Merch


