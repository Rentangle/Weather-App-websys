// weather.js
document
  .getElementById("get-weather-btn")
  .addEventListener("click", function () {
    const city = document.querySelector('input[type="text"]').value;
    const apiKey = "845db170357c6ded8d7e89b02e2b7f41"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const temp = data.main.temp;
          const condition = data.weather[0].description;

          document.getElementById(
            "temperature"
          ).textContent = `Temperature: ${temp}°C`;
          document.getElementById(
            "condition"
          ).textContent = `Condition: ${condition}`;
        } else {
          document.getElementById(
            "temperature"
          ).textContent = `Temperature: --`;
          document.getElementById(
            "condition"
          ).textContent = `Condition: City not found`;
        }
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        document.getElementById("temperature").textContent = `Temperature: --`;
        document.getElementById(
          "condition"
        ).textContent = `Condition: Error fetching data`;
      });
  });

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("get-weather-btn").click();
  }
});
