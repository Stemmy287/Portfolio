import React, {useState} from 'react';
import s from './skills.module.scss'
import {Title} from "../common/title/title";
import {Skill} from "./skill/skill";
import BackText from "../common/backText/BackText";
import {Fade} from "react-awesome-reveal";

export const Skills = () => {

    const [skills, setSkills] = useState([
        {
            id: 1, title: 'React', description: 'is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.'
        },
        {
            id: 2, title: 'Redux', description: 'is a library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application'
        },
        {
            id: 3, title: 'TypeScript', description: ' is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'
        },
        {
            id: 4, title: 'Rest API', description: 'is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services'
        },
        {
            id: 5, title: 'CSS3', description: 'is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices'
        },
        {
            id: 6, title: 'HTML5', description: 'is the most basic building block of the Web. It defines the structure of web content. Other technologies besides are generally used to describe a web page appearance or functionality'
        },

    ])

    const mappedSkills = skills.map(el => <Skill key={el.id} title={el.title} description={el.description}/>)

    return (
        <div id={'skills'} className={s.mainContainer}>
            <div className={s.skillsContainer}>
                <Fade cascade={true} triggerOnce={true}>
                    <Title title={'Skills'} prePostTitle={'My'} postTitle={'Talent'}/>
                    <div className={s.skills}>
                        {mappedSkills}
                    </div>
                </Fade>
                <BackText title={'Skills'}/>
            </div>
        </div>
    );
};

