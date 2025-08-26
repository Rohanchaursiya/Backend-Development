function fetchCurrentWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve({ temperature: 25, condition: "Sunny" })
                : reject("Failed to fetch current weather");
        }, 1000);
    });
}

function fetchWeatherForecast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve({ forecast: ["Sunny", "Cloudy", "Rainy", "Sunny", "Sunny", "Thunderstorm", "Rainy"], })
                : reject("Failed to fetch weather forecast");
        }, 2000);
    });
}

function fetchAirQuality() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve({ aqi: 42, category: "Good" })
                : reject("Failed to fetch air quality");
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
                console.log(
                    `Promise ${index + 1} fulfilled with value:`,
                    result.value
                );
            } else {
                console.log(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    });
}


fetchDashboardData();
