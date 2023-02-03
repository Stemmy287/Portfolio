import React, {FC} from 'react';
import s from "./backText.module.scss";

type BackTextPropsType = {
    title: string
    style?: {}
}

const BackText:FC<BackTextPropsType> = ({
                                            title,
                                            style
}) => {
    return (
        <div className={s.backText} style={style}>
            <span>{title}</span>
        </div>
    );
};

export default BackText;