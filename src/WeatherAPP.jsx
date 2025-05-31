


import {useState} from "react";

import Search from "./Search"


import InfoBox from "./InfoBox.jsx"


export default function WeatherApp(){


    const [weather,setWeather]=useState(
        {
            city:"Delhi",
            temp:45,
            tempMin:25,
            tempMax:37,
            humidity:"high",
            feels_like:"40",
            weather:"Haze",
        }
    );

    function updateInfo(result){
        setWeather(result);
    }

    return (
        <div className="appbox">

            <h2>Weather App</h2>

            <Search updateInfo={updateInfo}/>
            
            <InfoBox info={weather}/>





        </div>
    )
}