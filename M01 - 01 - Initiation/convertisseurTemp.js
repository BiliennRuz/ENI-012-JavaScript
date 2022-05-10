let tempCelsius1 = 0;
let tempCelsius2 = 25;
let tempCelsius3 = 100;
let tempFahren4 = 100;
let OFFSET_CELCIUS_TO_FAHRENHEIT = 32;
let FACTOR_CELCIUS_TO_FAHRENHEIT = 9/5;

function CelsiusToFahrenheit(tempCelcius) {
    return tempCelcius * FACTOR_CELCIUS_TO_FAHRENHEIT + OFFSET_CELCIUS_TO_FAHRENHEIT;
}

function FahrenheitToCelsius(tempFahren) {
    return ((tempFahren - OFFSET_CELCIUS_TO_FAHRENHEIT) / FACTOR_CELCIUS_TO_FAHRENHEIT).toFixed(2);
    // .toFixed(2) limite le nombre de décimale
}

function AfficherTemp(tempCelsius, tempFahren) {
    console.log(tempCelsius + " °C = " + tempFahren + " °F");
}

AfficherTemp(tempCelsius1, CelsiusToFahrenheit(tempCelsius1));
AfficherTemp(tempCelsius2, CelsiusToFahrenheit(tempCelsius2));
AfficherTemp(tempCelsius3, CelsiusToFahrenheit(tempCelsius3));
AfficherTemp(FahrenheitToCelsius(tempFahren4), tempFahren4);