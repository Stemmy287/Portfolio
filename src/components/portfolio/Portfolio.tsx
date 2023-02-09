import React, {useState} from 'react';
import s from './portfolio.module.scss'
import {Title} from "../common/title/title";
import {Project} from "./project/Project";
import {Fade} from "react-awesome-reveal";
import BackText from "../common/backText/BackText";

export const Portfolio = () => {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Social Network',
      description: 'Lorem ipsum dolor sit amet,\n' +
        'consectetur adipiscing elit,\n' +
        'sed do eiusmod tempor incididunt ut labore et dolore.',
      img: 'socNet',
      link: 'https://stemmy287.github.io/samurai-way/'
    },
    {
      id: 2,
      title: 'TodoList',
      description: 'Lorem ipsum dolor sit amet,\n' +
        'consectetur adipiscing elit,\n' +
        'sed do eiusmod tempor incididunt ut labore et dolore.',
      img: 'todoList',
      link: 'https://stemmy287.github.io/Todo-List/'
    },
    {
      id: 3,
      title: 'Blogger',
      description: 'Lorem ipsum dolor sit amet,\n' +
        'consectetur adipiscing elit,\n' +
        'sed do eiusmod tempor incididunt ut labore et dolore.',
      img: 'blogger',
      link: 'https://stemmy287.github.io/blogger/'
    },

  ])

  const projectsMapping = projects.map(el =>
    <Project
      key={el.id}
      title={el.title}
      description={el.description}
      img={el.img}
      link={el.link}
    />
  )

  return (

    <div id={'portfolio'} className={s.mainContainer}>
      <div className={s.portfolioContainer}>
        <Fade cascade={true} triggerOnce={true}>
          <Title title={'Portfolio'} prePostTitle={'My'} postTitle={'Cases'}/>
          <div className={s.projects}>
            {projectsMapping}
          </div>
        </Fade>
        <BackText title={'Portfolio'} style={{bottom: '150px'}}/>
      </div>

    </div>

  );
};

