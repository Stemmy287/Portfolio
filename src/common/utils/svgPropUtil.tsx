import React from "react";
import socNet from '../icons/social-network-app.png'
import todoList from '../icons/feature-pic-todo-list-blog.png'
import cards from '../icons/Learning.jpg.webp'
import {ReactComponent as EnvelopeLogo} from "../../common/icons/envelope-svgrepo-com.svg";
import {ReactComponent as PhoneLogo} from "../../common/icons/phone-svgrepo-com.svg";
import {ReactComponent as MapLogo} from "../../common/icons/map-svgrepo-com.svg";

export const SvgPropUtil = (svgName: string) => {
  return (
    (svgName === 'map' && <MapLogo/>) || (svgName === 'envelope' && <EnvelopeLogo/>) || (svgName === 'phone' && <PhoneLogo/>)
  )
}

export const imagePropUtil = (imageName: string) => {
  return (
    (imageName === 'socNet' &&
        <img src={socNet} alt=""/>) ||
    (imageName === 'todoList' &&
        <img src={todoList} alt=""/>) ||
    (imageName === 'cards' &&
        <img src={cards} alt=""/>)
  )
}