function getWeatherWithCallback(latitude, longitude, past_days, callback) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&past_days=${past_days}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const { time, temperature_2m_max, temperature_2m_min } = data.daily;

            const maxTemp = Math.max(...temperature_2m_max);
            const minTemp = Math.min(...temperature_2m_min);

            const maxDate = time[temperature_2m_max.indexOf(maxTemp)];
            const minDate = time[temperature_2m_min.indexOf(minTemp)];

            callback(null, {
                latitude,
                longitude,
                past_days,
                maxTemperature: `${maxTemp}°C on ${maxDate}`,
                minTemperature: `${minTemp}°C on ${minDate}`
            });
        })
        .catch(error => callback(error, null));
}



getWeatherWithCallback(17.72, 83.30, 17, (error, result) => {
    if (error) {
        console.error("Callback Error:", error);
    } else {
        console.log("Callback Weather Data:", result);
    }
});

