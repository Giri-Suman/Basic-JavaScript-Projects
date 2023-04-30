const apiKey = '127c9b528a464afd3fe7cbb57ca8b442'; // Replace this with your OpenWeatherMap API key

async function getWeatherData(city) {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      return data;
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}

function displayWeatherData(data) {
   const currentWeather = document.getElementById('currentWeather');

   if (data.cod === '404') {
      currentWeather.innerHTML = `<p>City not found. Please try again.</p>`;
      return;
   }

   const html = `
    <p>City: ${data.name}, ${data.sys.country}</p>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
   currentWeather.innerHTML = html;
}

document.getElementById('getWeather').addEventListener('click', async () => {
   const city = document.getElementById('city').value;
   const weatherData = await getWeatherData(city);
   displayWeatherData(weatherData);
});

