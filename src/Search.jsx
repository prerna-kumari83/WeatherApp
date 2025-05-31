
import {useState} from "react";

import './style.css'

import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Fingerprint from '@mui/icons-material/Fingerprint';
import SearchIcon from '@mui/icons-material/Search';
import InfoBox from "./InfoBox";



export default function Search({updateInfo}){
    const[city,setCity]=useState("");
    const[error,setError]=useState(false);

  const API_URL="https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY=import.meta.env.VITE_API_KEY;

let handleSubmit = async (event) => {
  try{
    event.preventDefault();
  console.log("Searching for:", city);
  setCity(""); // Clear input after submission
  let newinfo=await getWeather(); // Call the function to fetch weather data
updateInfo(newinfo);
setError(false);

  }
  catch(err){
    setError(true);
  }





};

const getWeather = async () => {
try{
  console.log("API Key:", import.meta.env.VITE_API_KEY);
  const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  console.error("API key is missing. Check your .env file.");
}

// let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
    let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result={
       city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feels_like:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       
      }
      console.log(result);
      return result;

}
  catch(err){
    throw err;

  }
};


  
  let handleChange=(event)=>{
    setCity(event.target.value);
    // console.log(event.target.value);
    
  }
  

  return (
    <>
    <div className='container'>

      
      
<form action="/" onSubmit={handleSubmit}>

<TextField id="outlined-basic" label="Search" variant="outlined" onChange={handleChange} value={city} required />
    <br /><br />
    <Button variant="contained" type='submit' > <SearchIcon/> Search</Button>
</form>
    </div>
    {error && <p style={{color:"red"}}>No such place exist!</p>}
    </>
  )
}

