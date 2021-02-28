import React from "react"
import style from "./MyWorks.module.css"
import {Work} from "./Work/Work";
import {Heading} from "../Heading/Heading";
import todoList from "../../assets/images/TodoList.png"
import social from "../../assets/images/Social.png"
import counter from "../../assets/images/Counter.png"


export function MyWorks() {
	const todoListsImg = {
		backgroundImage: 'url(' + todoList + ')',
	};
	const socialImg = {
		backgroundImage: 'url(' + social + ')',
	};
	const counterImg = {
		backgroundImage: 'url(' + counter + ')',
	};

	return (
		<div className={style.wrapperJobs} id={'2'}>
			<div className={style.container}>
				<div>
					<Heading title={"My Works"}/>
				</div>
				<div className={style.wrapperWorks}>
					<Work title={"Counter"} img={counterImg}/>
					<Work title={"Social Network"} img={socialImg}/>
					<Work title={"Todo List"} img={todoListsImg}/>
				</div>
			</div>
		</div>
	);
}