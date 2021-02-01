import React from "react"
import style from "./Contact.module.css"
import {Heading} from "../Heading/Heading";

export const Contact = () => {
	return (
		<div className={style.wrapperContact}>
			<div className={style.container}>
				<div>
					<Heading title={"Contacts"}/>
				</div>
				<form className={style.formWrapper} >
						<label className={style.labelWrapp}>
							<input type="text" name="name" placeholder={"Имя"}/></label>
					<label className={style.labelWrapp}>
						<input type="text" name="name" placeholder={"Фамилия"}/>
					</label>
					<label className={style.labelWrapp}>
						<input type="email" name="email" placeholder={"Email"}/>
					</label>
					<label className={style.labelWrapp}>
						<input type="tel" name="tel" placeholder={"mobile phone"}/>
					</label>
					<textarea/>
					<label className={style.labelWrapp}>
						<input type="submit" value="Отправить"/>
					</label>
				</form>
			</div>
		</div>
	)
}