import React from "react"
import style from "./MyWorks.module.css"
import {Work} from "./Work/Work";



export function MyWorks() {

  return (
    <div className={style.wrapperJobs}>
      <div className={style.container}>
        <h4 className={style.h4Wrapper} >My Works</h4>
        <div className={style.wrapperWorks} >
          <Work title={"Counter"}/>
          <Work  title={"Social Network"}/>
          <Work  title={"Todo List"}/>
        </div>
      </div>
    </div>
  );
}