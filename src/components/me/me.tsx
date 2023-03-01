import React from 'react';
import s from './me.module.scss';
import {Fade} from "react-awesome-reveal";
import BackText from "../common/backText/BackText";
import photo from '../../common/icons/photo_2022-04-28_22-02-17-removebg.png'
import CV from '../../common/docs/EugeneLipasenka.pdf'
import {ReactComponent as GithubLogo} from "../../common/icons/github-svgrepo-com.svg";
import {ReactComponent as CodeWarsLogo} from "../../common/icons/codewars-svgrepo-com.svg";
import {ReactComponent as TelegramLogo} from "../../common/icons/telegram-svgrepo-com.svg";
import {ReactComponent as LinkedInLogo} from "../../common/icons/linkedin-linked-in-svgrepo-com.svg";

export const Me = () => {
  return (
    <div id={'me'} className={s.mainContainer}>
      <div className={s.meContainer}>
        <Fade cascade={true} triggerOnce={true}>
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
                <p>I'm a front-end developer with experience in creating SPA, using
                  React/Redux/TypeScript. Now I am improving my skills in this direction
                  and expanding them with new technologies. My free time I play with
                  the code on Codewars and improve my own English Open to your
                  suggestions!</p>
              </div>
              <div className={s.links}>
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
            <div className={s.buttons}>
              <a href={CV} download>
                <button>download cv</button>
              </a>
              <a href={CV} download className={s.mySkills}>my skills</a>
            </div>
          </div>
          <div className={s.photo}>
            <div className={s.circle}>
              <img src={photo} alt=""/>
            </div>
          </div>
        </Fade>
        <BackText title={'Web Developer'}/>
      </div>
    </div>
  );
};

