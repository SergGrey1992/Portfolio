import React from "react"
import style from "./Work.module.css"

type PropsType = {
  title:string
}

export function Work(props: PropsType) {

  return (
    <div className={style.wrapperWork} >
      <img src="http://placehold.it/300x170/" alt=""/>
      <h3 className={style.titleWork} >{props.title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, assumenda consequuntur eius, in minima, praesentium quam quidem quisquam repudiandae sit tenetur totam veritatis. Debitis delectus molestiae nobis rem vero?</p>
    </div>
  );
}