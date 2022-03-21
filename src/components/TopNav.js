import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import style from "../styles/topnav.module.css";

const TopNav = () => {
    return <div className={style.topnav}>
        <Link to="/" className={style.logo}>
            <img src={data.site.logoImage} className={style.logoimage}/>
        </Link>
        <div className={style.titlecontainer}>
            <div className={style.title}>{data.site.title}</div>
        </div>
        <Link to={`/profileview/${data.profile.firstName}`} className={style.user}>
            <div>Welcome {data.profile.firstName}</div>
        </Link>
    </div>
}

export default TopNav;