import React from "react"
import style from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css"
import {mySkillsType} from "../../Redux/Store";

type PropsType = {
  skills: mySkillsType
}

export function Skills(props: PropsType) {
  const skillsElement = props.skills.skillComponent.map(s => <div>{s.skill}</div>)

  return (
    <div className={style.mainBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.h2Style}>Skills</h2>
        <div className={style.skillsBlock} >
          {skillsElement}
        </div>


      </div>
    </div>
  );
}