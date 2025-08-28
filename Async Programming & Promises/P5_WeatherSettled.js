function fetchCurrentWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchWeather = true;
            if (fetchWeather) {
                resolve({ temperature: 25, condition: "Sunny" })
            } else {
                reject("Failed to fetch current weather");
            }
        }, 1000);
    });
}

function fetchWeatherForecast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchWeather = false;
            if (fetchWeather) {
                resolve({ forecast: ["Sunny", "Cloudy", "Rainy", "Sunny", "Sunny", "Thunderstorm", "Rainy"], })
            } else {
                reject("Failed to fetch weather forecast");
            }
        }, 2000);
    });
}

function fetchAirQuality() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fetchWeather = true;
            if (fetchWeather) {
                resolve({ aqi: 42, category: "Good" })
            } else {
                reject("Failed to fetch air quality");
            }
        }, 3000);
    });
}

function fetchDashboardData() {
    Promise.allSettled([
        fetchCurrentWeather(),
        fetchWeatherForecast(),
        fetchAirQuality(),
    ]).then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
            } else {
                console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    });
}


fetchDashboardData();
