import React from 'react';
import style from "./Footer.module.css"
import inst from "../../assets/IconsFooter/instagram.svg"
import linked from "../../assets/IconsFooter/linkedin.svg"
import telegram from "../../assets/IconsFooter/telegram.svg"
import phone from "../../assets/IconsFooter/whatsapp.svg"

export const Footer = () => {
	const item = [
		{id:1, link: "https://www.instagram.com/sereja_diatkovi4/", icon: inst},
		{id:2, link: "https://www.linkedin.com/in/sergey-dziatkovich-6006651b8/", icon: linked},
		{id:3, link: "tg://resolve?domain=@SergDia", icon: telegram},
		{id:4, link: "tel:+375291577837", icon: phone},
	]
	const itemsMap = item.map( i => <div key={i.id}><a key={i.id} href={i.link}><img key={i.id} src={i.icon} alt="#"/></a></div> )
	return (
		<div className={style.wrapperFooter}>
			<div className={style.container} >
				{itemsMap}
			</div>
		</div>
	)
}