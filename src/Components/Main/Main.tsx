import React from 'react';
import style from "./Main.module.css"



export function Main() {
  return (
    <div className={style.mainBlock}>
      <div className={style.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <h1>I am Serg Dziatkovich</h1>
          <p>Front-end Developed</p>
        </div>
        <div className={style.photo}>1</div>
      </div>
    </div>
  );
}


