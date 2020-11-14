import React from 'react';
import style from "./NavBar.module.css"
import {Menu} from "./Menu/Menu";


export function NavBar() {
  return (
    <div className={style.navBar}>
      <Menu />
    </div>
  );
}


