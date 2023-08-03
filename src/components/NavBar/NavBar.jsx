import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"

const SideBar = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={style.sideBar}>
            <NavLink to={path}>{props.img}{props.name}</NavLink>
        </div>
    )
}

const NavBar = (props) => {
    let barMap = props.state.favorites.map(n => <SideBar id={n.id} img={n.img} />)
    return (

        <div className={style.nav}>

            <div>
                <div className={style.item}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </div>
            <div className={style.bar}>
                {barMap}
            </div>
        </div >
    )
}

export default NavBar;