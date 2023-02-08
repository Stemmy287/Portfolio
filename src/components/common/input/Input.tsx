import React, {FC} from 'react';
import s from './input.module.scss'
import {FieldInputProps} from "formik/dist/types";

type InputPropsType = {
  formikProps: FieldInputProps<string>
  text: string
  size: {
    width: string
    height: string
  }
}

export const Input: FC<InputPropsType> = ({
                                            text,
                                            size,
                                            formikProps
                                          }) => {
  return (
    <div style={size} className={s.inputContainer}>
      <div className={s.groupForm}>
                <span>
                    {text} <b>*</b>
                </span>
        <input style={size} type="text" {...formikProps}/>
      </div>
    </div>
  );
};

