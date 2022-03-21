import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import style from "../styles/earthquakes.module.css"
import { formatTime } from "../helpers/time-formatter";

const Earthquakes = () => {
    let features = data.data.features;
    const [sortConfig, setSortConfig] = useState(null);
    if (sortConfig !== null) {
        console.log(`Sorting list by ${sortConfig.key}\t${sortConfig.dir}`)
        features.sort((a,b) => {
            if (a.properties[sortConfig.key] < b.properties[sortConfig.key]) {
                return sortConfig.dir === "asc" ? -1 : 1;
            }
            if (a.properties[sortConfig.key] > b.properties[sortConfig.key]) {
                return sortConfig.dir === "desc" ? 1 :-1;
            }
            return 0;
        })
    }

    const requestSort = key => {
        let dir = "asc";
        if (sortConfig == null){
            setSortConfig({ key, dir })
        }
        else if (sortConfig.key === key && sortConfig.dir === "asc") {
            dir = "desc"
        }
        setSortConfig({ key, dir })
    }

    return <div className={style.container}>
        <table>
            <thead>
                <tr className={style.titleList}>
                    <th>
                        <button onClick={() => requestSort("place")}>
                            Title
                        </button>
                    </th>
                    <th>
                        <button onClick={() => requestSort("mag")}>
                            Magnitude
                        </button>
                    </th>
                    <th>
                        <button onClick={() => requestSort("time")}>
                            Time
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {features.map((quake) => (
                    <tr key={quake.id}>
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
            </tbody>
        </table>
    </div>
}

export default Earthquakes;