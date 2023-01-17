import React, {FC} from 'react';
import s from "./backText.module.scss";

type BackTextPropsType = {
    title: string
}

const BackText:FC<BackTextPropsType> = ({title}) => {
    return (
        <div className={s.backText}>
            <span>{title}</span>
        </div>
    );
};

export default BackText;