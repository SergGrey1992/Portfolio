import React from 'react';
import style from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
	return (
		<div className={style.wrapperFooter}>
			<div className={style.container} >
				<div><FontAwesomeIcon icon={faReact}/></div>
				<div>Viber</div>
				<div>Link</div>
				<div>Inst</div>
			</div>
		</div>
	)
}