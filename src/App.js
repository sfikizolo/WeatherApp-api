import React,{useState} from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=45c11a32310922009298132595529fed`

  const getLocation = (event) =>{
    if(event.key =='Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')

    }
   
  }
  return (
    <div className="app">
      <div className="EnterLocation">
      <input value={location}
             onChange={event => setLocation(event.target.value)}
             onKeyDown = {getLocation}
             placeholder = "Enter a location"
             type ="text"/>
      </div>
     <div className="container">
      <div className="top">
      <div className="location">
        <p>{data.name}</p>
      </div>
      <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1>:null}

      </div>
      <div className="des">
          {data.weather ? <h1>{data.weather[0].description}</h1>:null}
      </div>
      </div>
      {data.name !=undefined && <div className="bottom">
      <div className="Pressure">
          {data.main ? <h1>{data.main.pressure}</h1>:null}
          <h3>Pressure</h3>
      </div>
      <div className="humidity">
          {data.main ? <h1>{data.main.humidity}%</h1>:null}
          <h3>humidity</h3>
      </div>
      <div className="wind">
          {data.wind ? <h1>{data.wind.speed}km/h</h1>:null}
          <h3>Wind Speed</h3>
      </div>
      </div>}
      
     </div>

    </div>
  );
}

export default App;
