import React from "react"
import style from "./Work.module.css"

type PropsType = {
  title:string
  img: object
}

export const Work:React.FC<PropsType> = ({title, img}) => {

  return (
    <div className={style.wrapperWork} >
      <h3 className={style.titleWork} >{title}</h3>

        <div style={img}  className={style.imgInfo} >
          <button>Watch</button>
          <button>Code</button>
        </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur, assumenda consequuntur eius, in minima, praesentium quam quidem quisquam repudiandae sit tenetur totam veritatis. Debitis delectus molestiae nobis rem vero?</p>
    </div>
  );
}