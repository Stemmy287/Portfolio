import React, {useState} from 'react';
import s from './portfolio.module.scss'
import {Title} from "../common/title/title";
import {Project} from "./project/Project";

export const Portfolio = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Social Network',
            description: 'Lorem ipsum dolor sit amet,\n' +
                'consectetur adipiscing elit,\n' +
                'sed do eiusmod tempor incididunt ut labore et dolore.',
            img: ''
        },
        {
            id: 2,
            title: 'TodoList',
            description: 'Lorem ipsum dolor sit amet,\n' +
                'consectetur adipiscing elit,\n' +
                'sed do eiusmod tempor incididunt ut labore et dolore.',
            img: ''
        },
        {
            id: 3,
            title: 'Blogger',
            description: 'Lorem ipsum dolor sit amet,\n' +
                'consectetur adipiscing elit,\n' +
                'sed do eiusmod tempor incididunt ut labore et dolore.',
            img: ''
        },

    ])

    const projectsMapping = projects.map(el =>
        <Project
            title={el.title}
            description={el.description}
            img={el.img}
        />
    )

    return (
        <div className={s.mainContainer}>
            <div className={s.portfolioContainer}>
                <Title title={'Portfolio'} prePostTitle={'My'} postTitle={'Cases'}/>
                <div className={s.projects}>
                    {projectsMapping}
                </div>
            </div>
        </div>
    );
};

