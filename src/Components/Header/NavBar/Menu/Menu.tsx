import React from 'react';
import style from './Menu.module.css'

export function Menu() {
  return (
    <div className={style.wrapperMenu}>
      <a href="">Главная</a>
      <a href="">Скилы</a>
      <a href="">Проекты</a>
      <a href="">Контакты</a>
    </div>
  );
}


