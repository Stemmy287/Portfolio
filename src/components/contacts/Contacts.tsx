import React, {useState} from 'react';
import s from './contacts.module.scss'
import {Title} from "../common/title/title";
import {Info} from "./info/Info";
import {Input} from "../common/input/Input";

export const Contacts = () => {

    const [info, setInfo] = useState([
        {
            id: 1,
            title: 'Address',
            text: 'Belarus, Hrodna',
            icon: ''
        },
        {
            id: 2,
            title: 'Email',
            text: 'Steem287@gmail.com',
            icon: ''
        },
        {
            id: 3,
            title: 'Phone',
            text: '+375 29 287-85-05',
            icon: ''
        },
    ])

    const infoMapping = info.map(el =>
        <Info
            title={el.title}
            text={el.text}
            icon={el.icon}
        />)

    return (
        <div className={s.mainContainer}>
            <div className={s.contactsContainer}>
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
                        <Input text={'your subject'}  size={{
                            width: '100%',
                            height: '60px'
                        }}/>
                        <Input text={'your message'}  size={{
                            width: '100%',
                            height: '140px'
                        }}/>
                        <div className={s.buttons}>
                            <button>send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
