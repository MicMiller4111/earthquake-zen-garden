import React from "react";
import data from "../data.json";
import style from '../styles/profileview.module.css';

const ProfileView = () => {    
    return <div>
        <div className={style.titlecontainer}>
            <h1 className={style.title}>Profile</h1>
        </div>
        <div className={style.container}>
            <img src={data.profile.avatarImage} className={style.avatar} />
            <ul className={style.keyName}>
                <li>
                    First Name
                </li>
                <li>
                    Lase Name
                </li>
                <li>
                    Phone
                </li>
                <li>
                    Email
                </li>
                <li>
                   Bio
                </li>
            </ul>
            <ul className={style.value}>
                <li>
                    {data.profile.firstName}
                </li>
                <li>
                    {data.profile.lastName}
                </li>
                <li>
                    {data.profile.phone}
                </li>
                <li>
                    {data.profile.email}
                </li>
                <li>
                    {data.profile.bio}
                </li>
            </ul>
            <div></div>
        </div>
    </div>
}

export default ProfileView;