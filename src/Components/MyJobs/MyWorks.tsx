import React from "react"
import style from "./MyWorks.module.css"
import {Work} from "./Work/Work";
import {Heading} from "../Heading/Heading";



export function MyWorks() {

  return (
    <div className={style.wrapperJobs}>
      <div className={style.container}>
        <div>
        <Heading title={"My Works"}/>
        </div>
        <div className={style.wrapperWorks} >
          <Work title={"Counter"}/>
          <Work  title={"Social Network"}/>
          <Work  title={"Todo List"}/>
        </div>
      </div>
    </div>
  );
}