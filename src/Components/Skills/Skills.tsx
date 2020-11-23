import React from "react"
import style from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css"
import {Skill} from "./Skill/Skill";



export function Skills() {
  return (
    <div className={style.mainBlock}>
      <div className={`${styleContainer.container}  ${style.skillsContainer}`}>
        <h2 className={style.h2Style}>Skills</h2>
        <div className={style.wrapperSkillBlock}>
          <Skill skills={"HTML"}/>
          <Skill skills={"CSS"}/>
          <Skill skills={"React"}/>
          <Skill skills={"React"}/>
          <Skill skills={"React"}/>
          <Skill skills={"React"}/>
          <Skill skills={"React"}/>
        </div>
      </div>
    </div>
  );
}