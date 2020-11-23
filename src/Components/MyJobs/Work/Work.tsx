import React from "react"
import style from "./Works.module.css"

type PropsType = {
  title:string
}

export function Work(props: PropsType) {

  return (
    <div>
      <img src="http://placehold.it/300x170/" alt=""></img>
      <p>{props.title}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, assumenda consequuntur eius, in minima, praesentium quam quidem quisquam repudiandae sit tenetur totam veritatis. Debitis delectus molestiae nobis rem vero?</p>
    </div>
  );
}