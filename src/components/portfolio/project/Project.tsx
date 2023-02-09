import React, {FC} from 'react';
import s from './project.module.scss'
import {imagePropUtil} from "../../../common/utils/svgPropUtil";

type ProjectPropsType = {
  title: string
  description: string
  img: string
  link: string
}

export const Project: FC<ProjectPropsType> = ({
                                                title,
                                                description,
                                                img,
                                                link
                                              }) => {
  return (
    <div className={s.project}>
      <div className={s.image}>
        <a href={link} target={'_blank'}>
          {imagePropUtil(img)}
        </a>
      </div>
      <div className={s.description}>
        <h5 className={s.name}>{title}</h5>
        <div className={s.text}>
          <p>{description}</p>
        </div>
        <a href={link} target={'_blank'} className={s.link}>See Project</a>
      </div>
    </div>
  );
};

