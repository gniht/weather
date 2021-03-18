apiKey = '';

/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */

// Portland, OR 45.5051 N, 122.6750 W

async function localWeather(latitude, longitude, apiKey){
  //hit the api and grab the data for the given coordinates
  let resolve = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}`, 
  { mode: 'cors' });
  let data = await resolve.json();
  console.log(data); 
}
localWeather(45.5051, -122.6750);



