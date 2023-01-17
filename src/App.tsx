import React from 'react';
import './App.css';
import {Me} from "./components/me/me";
import {Skills} from "./components/skills/skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contacts} from "./components/contacts/Contacts";

function App() {
  return (
    <div>
        <Me/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
    </div>
  );
}

export default App;
