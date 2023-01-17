import React, {useEffect, useState} from 'react';
import s from './skills.module.scss'
import {Title} from "../common/title/title";
import {Skill} from "./skill/skill";
import BackText from "../common/backText/BackText";

export const Skills = () => {

    const [skills, setSkills] = useState([
        {
            id: 1, title: 'TypeScript', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },
        {
            id: 2, title: 'React', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },
        {
            id: 3, title: 'Redux', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },
        {
            id: 4, title: 'Rest API', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },
        {
            id: 5, title: 'CSS3', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },
        {
            id: 6, title: 'HTML5', description: 'Lorem ipsum dolor sit amet, ' +
                'consectetur adipiscing elit, ' +
                'sed do eiusmod tempor incididunt ut ' +
                'labore et dolore magna aliqua.'
        },

    ])

    const mappedSkills = skills.map(el => <Skill key={el.id} title={el.title} description={el.description}/>)

    return (
        <div className={s.mainContainer}>
            <div className={s.skillsContainer}>
                <Title title={'Skills'} prePostTitle={'My'} postTitle={'Talent'}/>
                <div className={s.skills}>
                    {mappedSkills}

                </div>
            </div>

        </div>
    );
};

