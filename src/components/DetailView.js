import React from "react";
import data from "../data.json";
import { useParams } from "react-router";
import Enumerable from "linq";
import { formatTime } from "../helpers/time-formatter";
import style from "../styles/detailview.module.css"

const DetailView = () => {
    const { id } = useParams();
    var properties = data.data.features.find(x => x.id == id).properties;
    return <div>
        <div className={style.titleContainer}>
            <div className={style.title}>
                {properties.title}
            </div>
        </div>
        <div className={style.container}>
            <ul className={style.keyName}>
                <div className={style.pad}>
                    Title
                </div>
                <div className={style.pad}>
                    Magnitude
                </div>
                <div className={style.pad}>
                    Time
                </div>
                <div className={style.pad}>
                    Status
                </div>
                <div className={style.pad}>
                    Tsunami
                </div>
                <div className={style.pad}>
                    Type
                </div>
            </ul>
            <ul className={style.value}>
                <div className={style.pad}>
                    {properties.title}
                </div>
                <div className={style.pad}>
                    {properties.mag}
                </div>
                <div className={style.pad}>
                    {formatTime(properties.time)}
                </div>
                <div className={style.pad}>
                    {properties.status}
                </div>
                <div className={style.pad}>
                    {properties.tsunami}
                </div>
                <div className={style.pad}>
                     {properties.type}
                </div>
            </ul>
        </div>
    </div>
}

export default DetailView;