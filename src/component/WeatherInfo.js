import React from 'react'

const WeatherInfo = ({watherInfo}) => {
    let date = String(new window.Date())
    date = date.slice(3,15)
    console.log('watherInfo',watherInfo.sys)
    return (watherInfo.main)?(
        <div>
            <div className='location-box'>
                <div className="location">{watherInfo.name}, {watherInfo.sys.country}</div>
                <div className="date">{date}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                {Math.round(watherInfo.main.temp)}°c
                </div>
                <div className="weather">
                    {watherInfo.weather[0].main}
                </div>
            </div>
        </div>
    ) :(<h4 className='text'>'Search for you city weather'</h4>)
}

export default WeatherInfo
