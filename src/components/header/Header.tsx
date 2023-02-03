import React, {useState} from 'react';
import s from './header.module.scss'
import buttonMenu from '../../common/icons/burger-menu-svgrepo-com.svg'
import moon from '../../common/icons/moon-02-svgrepo-com.svg'
import close from '../../common/icons/close-square-svgrepo-com.svg'
import {Link} from "react-scroll";
import github from "../../common/icons/github-svgrepo-com.svg";
import codeWars from "../../common/icons/codewars-svgrepo-com.svg";
import telegram from "../../common/icons/telegram-svgrepo-com.svg";
import linkedIn from "../../common/icons/linkedin-linked-in-svgrepo-com.svg";


export const Header = () => {

    const [isActiveNav, setIsActiveNav] = useState(false)

    const onClickHandler = (isActive: boolean) => {
        setIsActiveNav(isActive)
    }

    return (
        <header className={s.headerAndNavContainer}>
            <div className={s.header}>
                <div className={s.moon}>
                    <img src={moon} alt=""/>
                </div>
                <div className={s.buttonMenu}>
                    <img src={buttonMenu} onClick={() => onClickHandler(true)}/>
                </div>
            </div>

            <div className={isActiveNav ? `${s.nav} ${s.show}` : s.nav} tabIndex={1}
                 onBlur={() => onClickHandler(false)}>
                <div className={s.links}>
                    <Link smooth={true} to={'me'} onClick={() => onClickHandler(false)}>Me</Link>
                    <Link smooth={true} to={'skills'} onClick={() => onClickHandler(false)}>Skills</Link>
                    <Link smooth={true} to={'portfolio'} onClick={() => onClickHandler(false)}>Portfolio</Link>
                    <Link smooth={true} to={'contacts'} onClick={() => onClickHandler(false)}>Contacts</Link>
                </div>
                <div className={s.closeButton}>
                    <img src={close} onClick={() => onClickHandler(false)}/>
                </div>
                <div className={s.myAccounts}>
                    <a href="https://github.com/Stemmy287" target={'_blank'}><img src={github} alt=""/></a>
                    <a href="https://www.codewars.com/users/EvgenLipa" target={'_blank'}><img src={codeWars}
                                                                                              alt=""/></a>
                    <a href="https://t.me/steem287" target={'_blank'}><img src={telegram} alt=""/></a>
                    <a href="https://www.linkedin.com/in/eugene-lipatsenko-563184183" target={'_blank'}><img src={linkedIn} alt=""/></a>

                </div>
            </div>

        </header>
    );
};

