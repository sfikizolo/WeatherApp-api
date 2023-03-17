import React,{useState} from "react";
import axios from "axios";

function App() {

  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=45c11a32310922009298132595529fed`

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
        <p>Johannesburg</p>
      </div>
      <div className="temp">
          <h1>18°C</h1>
      </div>
      <div className="des">
          <h1>partly cloudy</h1>
      </div>
      </div>
      <div className="bottom">
      <div className="feels">
          <h1>23</h1>
          <h3>feels like</h3>
      </div>
      <div className="humidity">
          <h1>10%</h1>
          <h3>humidity</h3>
      </div>
      <div className="wind">
          <h1>12 MPH</h1>
          <h3>Wind Speed</h3>
      </div>
      </div>
     </div>

    </div>
  );
}

export default App;
