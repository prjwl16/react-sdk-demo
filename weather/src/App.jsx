import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState('india')
  const [text, setText] = useState('Please enter the location')

  const getData=async ()=>{
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=current&key=HCQKD6HKWGTUT87A29L4KTT2U&contentType=json`,
        headers: {}
      };
      const response = await axios.request(config);
      setWeather(response.data)
    }catch (e){
      setText('Invalid location!')
      setWeather({})
    }
  }

  useEffect(() => {
    getData();
  }, [location]);



  return (
    <div id={"weather"} className={"m-2 p-4 w-max flex flex-col justify-center align-center border-2 text-center gap-4"} >
      <p className={"bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"}>
        Hello from weather component!
      </p>
      <h2>
        <input
          className={'w-40 text-center rounded-md border-0 py-1.5  text-gray-900 ring-1 placeholder:text-gray-400 focus:ring-indigo-100'}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
      </h2>
      <p className={"bg-gradient-to-r from-blue-600 via-orange-500 to-yellow-400 inline-block text-transparent bg-clip-text"}>
        {location ? weather?.currentConditions?.conditions || text : 'Please enter the location'}
      </p>
    </div>
  )
}

export default App
