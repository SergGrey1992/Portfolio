import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {mySkillsType, skillsType} from "./Redux/Store";

type PropsType = {
  skills: mySkillsType
}

function App(props: PropsType) {
  return (
    <div>
      <Header/>
      <Main />
      <Skills skills={props.skills} />
    </div>
  );
}

export default App;
