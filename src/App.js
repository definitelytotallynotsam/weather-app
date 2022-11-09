import './App.css';
import React, {useState} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=905e02e7cd64a8efba4c139545869599`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className='App'>
      <div className="card bg-transparent text-light font-weight-bold">
      <div className="search">
        <input 
        className='bg-transparent text-center'
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
         type="text" />
      </div>
        <div className="top1">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <h3>{data.weather[0].main}</h3> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;