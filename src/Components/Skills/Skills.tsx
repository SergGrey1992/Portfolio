import React from "react"
import style from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";
import {Heading} from "../Heading/Heading";



export function Skills() {
  return (
    <section className={style.mainBlock}>
      <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
        <Heading title={"My Key Skills"}/>


        <div className={style.wrapperSkillBlock}>
          <Skill skills={"HTML"}/>
          <Skill skills={"CSS"}/>
          <Skill skills={"React"}/>
          <Skill skills={"Redux"}/>
          <Skill skills={"Redux-Thunk"}/>


        </div>
      </div>
    </section>
  );
}