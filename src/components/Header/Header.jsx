import React from "react";
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <div className={style.header}>
            <img className={style.img} src="https://phonoteka.org/uploads/posts/2021-04/thumbs/1618475945_16-phonoteka_org-p-fon-dlya-shapki-saita-23.jpg"></img>
        </div>
    )
}

export default Header;