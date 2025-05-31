import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import "./style.css"
export default function  InfoBox({info}){


    let HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

   
    return (
        <>
        

        <div className="cardbox">
            
       

<div className="infoBox">
<Card sx={{ maxWidth: 345 }}>
<CardMedia
component="img"
alt="green iguana"
height="250"
width="300"
image={info.humidity>80? RAIN_URL: info.temp >15?HOT_URL:COLD_URL}
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
{info.humidity>80? <BeachAccessIcon/>: info.temp >15?<SunnyIcon/>:<AcUnitIcon/>} &nbsp;  {info.city.toUpperCase()}
</Typography>
<Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
  <p> Temp:{info.temp} &deg;C</p>
  <p> Max-temp:{info.tempMax} &deg;C</p>
  <p> Min-temp:{info.tempMin}&deg;C</p>
  <p> Humidity:{info.humidity}</p>
  
  <p> Weather can be discribed as <i>{info.weather}</i> and feels likes <i>{info.feels_like}&deg;C</i></p>
</Typography>
</CardContent>

</Card></div>
        </div>

        </>
    )
}