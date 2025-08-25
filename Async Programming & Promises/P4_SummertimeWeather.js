
// function getWeatherWithPromise(latitude, longitude, past_days) {
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=17.72&longitude=83.30&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=auto&past_days=7`;

//     return fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             const { time, temperature_2m_max, temperature_2m_min } = data.daily;

//             const maxTemp = Math.max(...temperature_2m_max);
//             const minTemp = Math.min(...temperature_2m_min);

//             const maxDate = time[temperature_2m_max.indexOf(maxTemp)];
//             const minDate = time[temperature_2m_min.indexOf(minTemp)];

//             return {
//                 latitude,
//                 longitude,
//                 past_days,
//                 maxTemperature: `${maxTemp}°C on ${maxDate}`,
//                 minTemperature: `${minTemp}°C on ${minDate}`
//             };
//         });
// }

// async function displayWeather() {
//     try {
//         const result = await getWeatherWithPromise(17.72, 83.30, 7);
//         console.log("Weather Data:", result);
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
// }

// displayWeather();


const API = "https://api.open-meteo.com/v1/forecast?latitude=17.72&longitude=83.30&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=auto&past_days=70";

const info = fetch(API);
console.log(info);

info.then(function (data) {
    console.log(data);
})