import React, {FC} from 'react';
import s from './skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: FC<SkillPropsType> = ({
                                              title,
                                              description
                                          }) => {
    return (
        <div className={s.skill}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.circle}></div>
            <p className={s.description}>{description}</p>
            <div className={s.line}></div>
        </div>
    );
};

