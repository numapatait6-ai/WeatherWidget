import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city:"Delhi",
            feelsLike: 25.0,
            temp:24.45,
            tempMin:25.02,
            tempMax: 25.05,
            humidity:47.0,
            weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };


    return (
        <div>
            <h2>Weather  App</h2>
            <SearchBox  updateInfo={updateInfo}/>  <br /> 
            <InfoBox info={weatherInfo}/>
        </div>
    )
}