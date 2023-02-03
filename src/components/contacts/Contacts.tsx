import React, {useState} from 'react';
import s from './contacts.module.scss'
import {Title} from "../common/title/title";
import {Info} from "./info/Info";
import {Input} from "../common/input/Input";
import {Fade} from "react-awesome-reveal";
import BackText from "../common/backText/BackText";
import map from '../../common/icons/map-1-svgrepo-com.svg'
import envelope from '../../common/icons/envelope-svgrepo-com.svg'
import phone from '../../common/icons/phone-svgrepo-com.svg'

export const Contacts = () => {

    const [info, setInfo] = useState([
        {
            id: 1,
            title: 'Address',
            text: 'Belarus, Hrodna',
            icon: map
        },
        {
            id: 2,
            title: 'Email',
            text: 'Steem287@gmail.com',
            icon: envelope
        },
        {
            id: 3,
            title: 'Phone',
            text: '+375 29 287-85-05',
            icon: phone
        },
    ])

    const infoMapping = info.map(el =>
        <Info
            title={el.title}
            text={el.text}
            icon={el.icon}
        />)

    return (
        <div id={'contacts'} className={s.mainContainer}>
            <div className={s.contactsContainer}>
                <Fade cascade={true} triggerOnce={true}>
                    <Title title={'Contacts'} prePostTitle={`Let's`} postTitle={'Talk About Ideas'}/>
                    <div className={s.formAndInfo}>
                        <div className={s.info}>
                            {infoMapping}
                        </div>
                        <div className={s.form}>
                            <div className={s.oneFloor}>
                                <Input text={'your full name'} size={{
                                    width: '100%',
                                    height: '60px'
                                }}/>
                                <Input text={'your email address'} size={{
                                    width: '100%',
                                    height: '60px'
                                }}/>
                            </div>
                            <Input text={'your subject'} size={{
                                width: '100%',
                                height: '60px'
                            }}/>
                            <Input text={'your message'} size={{
                                width: '100%',
                                height: '140px'
                            }}/>
                            <div className={s.buttons}>
                                <button>send message</button>
                            </div>
                        </div>
                    </div>
                </Fade>
                <BackText title={'Contacts'}/>
            </div>
        </div>
    );
};
