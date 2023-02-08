import React, {FC} from 'react';
import s from './info.module.scss'
import {SvgPropUtil} from "../../../common/utils/svgPropUtil";

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
              {SvgPropUtil(icon)}
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

