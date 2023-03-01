import React, {FC, useEffect, useState} from 'react';
import s from './header.module.scss'
import moon from '../../common/icons/moon-02-svgrepo-com.svg'
import sun from '../../common/icons/sun-1-svgrepo-com.svg'
import {Link} from "react-scroll";
import {ThemeType} from "../../App";
import {ReactComponent as CloseButton} from "../../common/icons/close-square-svgrepo-com.svg";
import {ReactComponent as BurgerButton} from "../../common/icons/burger-menu-svgrepo-com.svg";
import {ReactComponent as GithubLogo} from "../../common/icons/github-svgrepo-com.svg";
import {ReactComponent as CodeWarsLogo} from "../../common/icons/codewars-svgrepo-com.svg";
import {ReactComponent as TelegramLogo} from "../../common/icons/telegram-svgrepo-com.svg";
import {ReactComponent as LinkedInLogo} from "../../common/icons/linkedin-linked-in-svgrepo-com.svg";

type HeaderPropsType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

export const Header: FC<HeaderPropsType> = ({theme, setTheme}) => {

  const [isActiveNav, setIsActiveNav] = useState(false)

  const onClickMenuHandler = (isActive: boolean) => {
    setIsActiveNav(isActive)
  }

  useEffect(() => {
    const textColor = `var(--text-color-${theme})`
    const descriptionTextColor = `var(--description-text-color-${theme})`
    const mainColor = `var(--main-color-${theme})`
    const noColor = `var(--noColor-${theme})`
    const borderButtonColor = `var(--border-button-${theme})`
    const shadow = `var(--shadow-${theme})`
    const meInfo = `var(--me-info-${theme})`
    const menu = `var(--menu-${theme})`

    document.body.style.setProperty('--text-color', textColor)
    document.body.style.setProperty('--description-text-color', descriptionTextColor)
    document.body.style.setProperty('--main-color', mainColor)
    document.body.style.setProperty('--noColor', noColor)
    document.body.style.setProperty('--border-button', borderButtonColor)
    document.body.style.setProperty('--shadow', shadow)
    document.body.style.setProperty('--me-info', meInfo)
    document.body.style.setProperty('--menu', menu)
  }, [theme])

  return (
    <header className={s.headerAndNavContainer}>
      <div className={s.header}>
        {
          theme === 'light'
            ?
            <img alt={'theme light'} className={s.moon} src={moon} onClick={() => setTheme('dark')}/>

            :
            <img alt={'theme dark'} className={s.sun} src={sun} onClick={() => setTheme('light')}/>

        }
        <div className={s.buttonMenu}>
          <BurgerButton onClick={() => onClickMenuHandler(true)}/>
        </div>
      </div>
      <div className={isActiveNav ? `${s.nav} ${s.show}` : s.nav} tabIndex={1}
           onBlur={() => onClickMenuHandler(false)}>
        <div className={s.links}>
          <Link smooth={true} to={'me'} onClick={() => onClickMenuHandler(false)}>Me</Link>
          <Link smooth={true} to={'skills'} onClick={() => onClickMenuHandler(false)}>Skills</Link>
          <Link smooth={true} to={'portfolio'} onClick={() => onClickMenuHandler(false)}>Portfolio</Link>
          <Link smooth={true} to={'contacts'} onClick={() => onClickMenuHandler(false)}>Contacts</Link>
        </div>
        <div className={s.closeButton}>
          <CloseButton onClick={() => onClickMenuHandler(false)}/>
        </div>
        <div className={s.myAccounts}>
          <a href="https://github.com/Stemmy287" target={'_blank'}>
            <GithubLogo/>
          </a>
          <a href="https://www.codewars.com/users/EvgenLipa" target={'_blank'}>
            <CodeWarsLogo/>
          </a>
          <a href="https://t.me/steem287" target={'_blank'}>
            <TelegramLogo/>
          </a>
          <a href="https://www.linkedin.com/in/eugene-lipatsenko-563184183" target={'_blank'}>
            <LinkedInLogo/>
          </a>
        </div>
      </div>
    </header>
  );
};

