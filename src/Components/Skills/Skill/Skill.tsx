import React from "react"
import style from "./Skill.module.css"

type PropsType = {
  skills:string
}

export function Skill(props:PropsType) {
  return (
    <div className={style.wrapperSkill}>
      <div className={style.icon}>1</div>
      <h3 className={style.titleH3} >{ props.skills }</h3>
      <p className={style.wrapperText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque impedit qui repudiandae velit. Ab blanditiis commodi fugit impedit ipsum iusto maiores maxime modi mollitia officiis perferendis praesentium quam, voluptate. Dolorum eligendi ex fugit labore laudantium, nulla odit possimus reiciendis.</p>
    </div>
  );
}