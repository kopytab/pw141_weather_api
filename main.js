const getWeatherData = async () => {
    let cityName = document.getElementById('cityName').value;

    let apiKey = '4f43d5cd79c4883be96d1706690a7f53'

    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
    const data = await resp.json();
    console.log(data)
    document.getElementById('temp').innerHTML = data.main.temp
    document.getElementById('minTemp').innerHTML = data.main.temp_min
    document.getElementById('maxTemp').innerHTML = data.main.temp_max
    document.getElementById('feelsLike').innerHTML = data.main.feels_like
    document.getElementById('description').innerHTML = data.weather[0].description
    document.getElementById('nameofcity').innerHTML = data.name
    let weathericon = document.getElementById('icon')
    weathericon.src = data.weather[0].icon
}


