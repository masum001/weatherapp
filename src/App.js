import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Search from './component/Search';
import WeatherInfo from './component/WeatherInfo';

const api = {
  key : '14b208e3082263a6e61e0a31a5234580',
  baseURL : 'api.openweathermap.org/data/2.5/'
}

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=14b208e3082263a6e61e0a31a5234580'


function App() {

  const [query, setQuery] = useState('')
  const [ watherInfo, setWeatherInfo ] = useState([]) 

  useEffect(()=>{
    const getData=async()=>{
      const {data} =await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query},&units=metric&APPID=14b208e3082263a6e61e0a31a5234580`)
      console.log(data)
      setWeatherInfo(data)
      setQuery('')
    }
    getData()

  },[query])

  
  return (
    <div className="App">
      <main>
        <Search setQuery={setQuery} query={query}/>
        <WeatherInfo watherInfo={watherInfo}/>
      </main>
    </div>
  );
}

export default App;
