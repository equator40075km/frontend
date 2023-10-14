import React from 'react'
import classes from './MainPageMerch.module.css'
import GreenBtn from '../GreenBtn/GreenBtn'
import useMatchMedia from 'use-match-media-hook'

function MainPageMerch() {
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    function merchPhoto() {
        return (
            <div>
                <div className={classes.merchPhoto}>
                    <img src='static/merch3.png' alt='merch' />
                </div>
                <div className={classes.merchGreen} />
            </div>
        )
    }

    return (
        <div className={classes.merch} id='scroll-merch'>
            <div className={classes.merchL}>
                <div className={classes.merchTitle}>Станьте частью сообщества</div>
                {mobile && merchPhoto()}
                <div className={classes.merchText}>
                    Скоро запустим первую линейку мерча. Присоединяйтесь и следите за новостями!
                </div>
                <div className={classes.merchBtn}>
                    <GreenBtn onClick={() => {window.open("https://vk.com/aequator", "_blank")}}>
                        Присоединиться
                    </GreenBtn>
                </div>
            </div>
            
            { !mobile && merchPhoto()}
        </div>
    )
}

export default MainPageMerch