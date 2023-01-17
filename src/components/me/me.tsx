import React from 'react';
import s from './me.module.scss';
import github from '../../common/icons/github-svgrepo-com.svg'
import codeWars from '../../common/icons/codewars-svgrepo-com.svg'
import telegram from '../../common/icons/telegram-svgrepo-com.svg'
import instagram from '../../common/icons/instagram-f-svgrepo-com.svg'
import BackText from "../common/backText/BackText";

export const Me = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.meContainer}>
                <div className={s.info}>
                    <div className={s.titles}>
                        <div className={s.greetings}>
                            <span>Hello <b>my name is</b></span>
                        </div>
                        <h1 className={s.name}>
                            <span><b>Eugene</b> Lipa</span>
                        </h1>
                        <div className={s.iAm}>
                            I am <strong>Web Developer</strong>
                        </div>
                    </div>
                    <div className={s.descriptionLinks}>
                        <div>
                            <p>From Belarus, Hrodna. I want to become a good developer, and find a good job.</p>
                        </div>
                        <div className={s.links}>
                            <a href="#"><img src={github} alt=""/></a>
                            <a href="#"><img src={codeWars} alt=""/></a>
                            <a href="#"><img src={telegram} alt=""/></a>
                            <a href="#"><img src={instagram} alt=""/></a>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <button>download cv</button>
                        <a href="#" className={s.mySkills}>my skills</a>
                    </div>
                </div>
                <div className={s.photo}>
                    <div className={s.circle}></div>
                </div>
            </div>
        </div>
    );
};

