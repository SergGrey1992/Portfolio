import React from "react"
import style from "./Contact.module.css"

export const Contact = () => {
	return (
		<div className={style.wrapperContact} >
			<div className={style.container}>
				<h3>Contacts</h3>
				<form className={style.formWrapper} action="#">
					<label className={style.labelWrapp} >
						<input type="text" name="name" placeholder={"Имя"}/>
					</label>
					<label className={style.labelWrapp}>
						<input type="text" name="name" placeholder={"Фамилия"}/>
					</label>
					<label className={style.labelWrapp}>
						<input type="email" name="email" placeholder={"Email"}/>
					</label>
					<label className={style.labelWrapp}>
						<input type="tel" name="tel" placeholder={"mobile phone"}/>
					</label>
					<label className={style.labelWrapp}>
					<input type="submit" value="Отправить" />
					</label>
				</form>
			</div>
		</div>
	)
}