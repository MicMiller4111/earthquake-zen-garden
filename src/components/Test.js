import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import style from "../styles/earthquakes.module.css"
import { formatTime } from "../helpers/time-formatter";

const Earthquakes = () => {
    const [sortedfeatures, setSortedFeatures] = useState(data.data.features)
    return <div className={style.container}>
        <table>
            <tr className={style.titleList}>
                <th>Title</th>
                <th>Magnitude</th>
                <th>Time</th>
            </tr>
            {sortedfeatures.map((quake, index) => (
                <tr key={index}>
                    <td className={style.titleList}>
                        <Link to={`/detailview/${quake.id}`}>
                            <div>{quake.properties.place}</div>
                        </Link>
                    </td>
                    <td className={style.magList}>
                        <div className={style.mag}>{quake.properties.mag}</div>
                    </td>
                    <td className={style.timeList}>
                        <div>{formatTime(quake.properties.time)}</div>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default Earthquakes;