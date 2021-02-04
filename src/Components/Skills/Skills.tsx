import React from "react"
import style from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Heading} from "../Heading/Heading";
import html from "../../assets/IconsSkills/html.svg"
import css from "../../assets/IconsSkills/css3.svg"
import react from "../../assets/IconsSkills/react.svg"
import redux from "../../assets/IconsSkills/redux.svg"
import ts from "../../assets/IconsSkills/ts.svg"
import js from "../../assets/IconsSkills/js.svg"
import git from "../../assets/IconsSkills/git.svg"



export function Skills() {
  const skills = [
    {skills: "HTML", progressValue: "90", icon: html},
    {skills: "CSS", progressValue: "90", icon: css},
    {skills: "JS_es6", progressValue: "90", icon: js},
    {skills: "TypeScript", progressValue: "80", icon: ts},
    {skills: "React", progressValue: "85", icon: react},
    {skills: "Redux", progressValue: "90", icon: redux},
    {skills: "Git", progressValue: "90", icon: git},
  ]
  const skillMap = skills.map( (s,index )=> <Skill key={index} skills={s.skills} progressValue={s.progressValue} icon={s.icon}/> )

  return (
    <section className={style.mainBlock}>
      <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
        <Heading title={"My Key Skills"}/>
        <div className={style.wrapperSkillBlock}>
          {skillMap}
          {/*<Skill skills={"HTML"} progressValue={'90'}/>
          <Skill skills={"CSS"} progressValue={'65'}/>
          <Skill skills={"React"} progressValue={'85'}/>
          <Skill skills={"Redux"} progressValue={'85'}/>
          <Skill skills={"Redux-Thunk"} progressValue={'70'}/>*/}

        </div>
      </div>
    </section>
  );
}