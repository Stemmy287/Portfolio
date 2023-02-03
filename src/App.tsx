import React from 'react';
import './App.css';
import {Me} from "./components/me/me";
import {Skills} from "./components/skills/skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contacts} from "./components/contacts/Contacts";
import {Header} from "./components/header/Header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className={'App'}>
        <Header/>
        <Me/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
    </div>
  );
}

export default App;
