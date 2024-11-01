document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const location = document.getElementById('location').value;
    getWeather(location);
});

async function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf9229a8fb791852af74e20d5840d271&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weather-result').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    weatherResult.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${temperature} °C</p>
        <p>Condition: ${description}</p>
    `;
}
