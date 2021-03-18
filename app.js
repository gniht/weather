

/* https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} */

// Portland, OR 45.5051 N, 122.6750 W

let main = document.createElement('div');

async function localWeatherData(latitude, longitude, apiKey){
  //hit the api and grab the data for the given coordinates
  let resolve = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`, 
  { mode: 'cors' });
  let data = await resolve.json();
  console.log(data);
  console.log(`Weather for: ${new Date(data.current.dt)}`);
  console.log(`Looks like we'll have ${data.current.weather[0].description} today`);  
  console.log(`Current temp: ${data.current.temp} F`);  
  console.log(`Daily: ${data['daily']}`);
  return data;   
}
 
localWeatherData(45.5051, -122.6750, '');