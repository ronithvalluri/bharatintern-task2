document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const resultCelsius = document.getElementById("result-celsius");
    const resultFahrenheit = document.getElementById("result-fahrenheit");
    const convertButtonCelsius = document.getElementById("convert-celsius");
    const convertButtonFahrenheit = document.getElementById("convert-fahrenheit");

    convertButtonCelsius.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultCelsius.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultCelsius.textContent = "Please enter a valid temperature in Celsius.";
        }
    });

    convertButtonFahrenheit.addEventListener("click", function () {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            resultFahrenheit.textContent = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;
        } else {
            resultFahrenheit.textContent = "Please enter a valid temperature in Fahrenheit.";
        }
    });
});
