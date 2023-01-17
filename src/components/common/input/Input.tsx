import React, {FC} from 'react';
import s from './input.module.scss'

type InputPropsType = {
    text: string
    size: {
        width: string
        height: string
    }
}

export const Input: FC<InputPropsType> = ({
                                              text,
                                              size
                                          }) => {
    return (
        <div style={size} className={s.inputContainer}>
            <div className={s.groupForm}>
                <span>
                    {text} <b>*</b>
                </span>
                <input style={size} type="text"/>
            </div>
        </div>
    );
};

