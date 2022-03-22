import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import style from "../styles/earthquakes.module.css"
import { formatTime } from "../helpers/time-formatter";

const Earthquakes = () => {
    const [sortConfig, setSortConfig] = useState({ "key": "place", "dir": "asc"})
    const features = [];
    data.data.features.forEach(feature => {
        var temp = feature.properties;
        temp["id"] = feature.id
        features.push(temp)
    })

    useMemo(() => {
        if (sortConfig.key !== null) {
          features.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'asc' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'asc' ? 1 : -1;
            }
            return 0;
          });
        }
        return features;
      }, [features, sortConfig]);

      const requestSort = key => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
          direction = 'desc';
        }
        setSortConfig({ key, direction });
      }

    console.log(features)
    return <div className={style.container}>
        <table>
            <tr className={style.titleList}>
                <th>
                    <button onClick={() => requestSort('place')}>
                        Title
                    </button>
                </th>
                <th>
                    <button onClick={() => requestSort('mag')}>
                        Magnitude
                    </button>
                </th>
                <th>
                    <button onClick={() => requestSort('time')}>
                        Time
                    </button>
                </th>
            </tr>
            {features.map((quake, index) => (
                <tr key={index}>
                    <td className={style.titleList}>
                        <Link to={`/detailview/${quake.id}`}>
                            <div>{quake.place}</div>
                        </Link>
                    </td>
                    <td className={style.magList}>
                        <div className={style.mag}>{quake.mag}</div>
                    </td>
                    <td className={style.timeList}>
                        <div>{formatTime(quake.time)}</div>
                    </td>
                </tr>
            ))}
        </table>
    </div>
}

export default Earthquakes;