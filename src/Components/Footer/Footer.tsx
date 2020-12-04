import React from 'react';
import style from "./Footer.module.css"

export const Footer = () => {
	return (
		<div className={style.wrapperFooter}>
			<div className={style.container} >
				<div>Teleg</div>
				<div>Viber</div>
				<div>Link</div>
				<div>Inst</div>
			</div>
		</div>
	)
}