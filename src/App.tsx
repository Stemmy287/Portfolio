import React, {useEffect, useState} from 'react';
import './App.css';
import {Me} from "./components/me/me";
import {Skills} from "./components/skills/skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contacts} from "./components/contacts/Contacts";
import {Header} from "./components/header/Header";
import {Preloader} from "./components/Preloader/Preloader";

function App() {

  const [theme, setTheme] = useState<ThemeType>('light')

  useEffect(() => {
    const theme = localStorage.getItem('theme') as ThemeType
    if (theme) {
      setTheme(theme)
    }
  }, [])

  const themeHandler = (theme: ThemeType) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
  }

  return (
    <div>
        <Preloader/>
        <Header theme={theme} setTheme={themeHandler}/>
        <Me/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
    </div>
  );
}

export default App;

export type ThemeType = 'dark' | 'light'
