const main = document.createElement('div');
document.body.append(main);

const userLocationForm = document.createElement('form');
const latLabel = document.createElement('label');
latLabel.textContent = 'Latitude: ';
const latInput = document.createElement('input');
latInput.type = 'number';
latInput.placeholder = 'Enter your latitude';
const longLabel = document.createElement('label');
longLabel.textContent = 'Longitude: '
const longInput = document.createElement('input');
longInput.type = 'number';
longInput.placeholder = 'Enter your longitude';
const submitButton = document.createElement('button');
submitButton.innerText = 'Get Weather';

userLocationForm.append(
  latLabel, 
  latInput, 
  longLabel, 
  longInput,
  submitButton 
);
main.append(userLocationForm);

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(latInput.value && longInput.value){
    localWeatherData(latInput.value, longInput.value, localStorage.getItem('apiKey'));
  }else{
    alert('You must supply valid latitude and longitude!');
  }
});

async function localWeatherData(latitude, longitude, apiKey){
     
  const resolve = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`, 
  { mode: 'cors' });
  let data = await resolve.json();

  const weatherDisplayContainer = document.createElement('div');
  const today = document.createElement('div');
  today.innerText = `Weather for ${new Date(data.current.dt*1000)}`;
  const looksLike = document.createElement('div');
  looksLike.innerText = `Looks like ${data.current.weather[0].description} today`;
  const currentTemp = document.createElement('div');
  currentTemp.innerText = `Current temp: ${data.current.temp} F`;
  const feelsLike = document.createElement('div');
  feelsLike.innerText = `Feels like ${data.current.feels_like} F`;
  
  weatherDisplayContainer.append(
    today,
    looksLike,
    currentTemp,
    feelsLike
  );
  main.removeChild(userLocationForm);
  main.append(weatherDisplayContainer);
  
  console.log(`Weather for ${new Date(data.current.dt*1000)}`);
  console.log(`Looks like ${data.current.weather[0].description} today`);  
  console.log(`Current temp: ${data.current.temp} F`);
  console.log(`Feels like ${data.current.feels_like} F`);     
}