import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/MyJobs/MyWorks";
import {Contact} from "./Components/Contact/Contact";




function App() {
  return (
    <div>
      <Header/>
      <Main />
      <Skills />
      <MyWorks />
      <Contact/>
    </div>
  );
}

export default App;
