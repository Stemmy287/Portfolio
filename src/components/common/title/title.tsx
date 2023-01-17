import React, {FC} from 'react';
import s from './title.module.scss'

type TitleType = {
    title: string
    postTitle: string
    prePostTitle: string
}

export const Title: FC<TitleType> = ({
                                         title,
                                         postTitle,
                                         prePostTitle
                                     }) => {
    return (
        <div className={s.titleContainer}>
            <h2>
                <span className={s.title}>{title}</span>
            </h2>
            <div>
                <span className={s.my}>{prePostTitle}</span>
                <b>
                    <span className={s.postTitle}>{postTitle}</span>
                </b>
            </div>
        </div>
    );
};

