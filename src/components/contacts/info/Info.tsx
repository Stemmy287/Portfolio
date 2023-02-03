import React, {FC} from 'react';
import s from './info.module.scss'

type InfoPropsType = {
    title: string
    text: string
    icon: string
}

export const Info: FC<InfoPropsType> = ({
                                            title,
                                            text,
                                            icon
                                        }) => {
    return (
        <div className={s.infoItem}>
            <div className={s.icon}>
                <img src={icon} alt=""/>
            </div>
            <div className={s.desc}>
                <div className={s.title}>
                    <span>{title}</span>
                </div>
                <div className={s.text}>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};

