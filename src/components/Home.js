import React from "react";
import data from "../data.json";
import style from '../styles/home.module.css';
import Earthquakes from "./Earthquakes";

const Home = () => {
    return <div>
        <div className={style.titleContainer}>
            <div className={style.title}>{data.data.metadata.title}</div>
        </div>
        <div className={style.container}>
            <Earthquakes />
        </div>
    </div>
}

export default Home;