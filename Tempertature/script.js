function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const tempUnit = document.getElementById("tempUnit").value;
    let result;

    if (tempUnit === "celsius") {
        result = (inputTemp * 9 / 5) + 32;
    } else {
        result = (inputTemp - 32) * 5 / 9;
    }

    document.getElementById("result").textContent = `Converted temperature: ${result.toFixed(2)} ${tempUnit === "celsius" ? "Fahrenheit" : "Celsius"}`;

    updateseasonImage(inputTemp);
}

function updateseasonImage(temperature) {
    let seasonImage = "spring.jpg";

    if (temperature >= 30) {
        seasonImage = "summer.jpg";
    } else if (temperature < 0) {
        seasonImage = "winter.jpg";
    } else if (temperature >= 10) {
        seasonImage = "autymn.jpg";
    }

    // Get the seasonImage element by its ID and update its src attribute
    const imageElement = document.getElementById("seasonImage");
    imageElement.src = seasonImage;
    imageElement.alt = "seasonImage";
}

