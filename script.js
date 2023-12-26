// script.js
//alert("Hello, this is JavaScript!");
const menu = document.querySelector('.java-script')
const menuLinks = document.querySelector('#converter')

menu.addEventListener('click', function(celsius) {
    let celsius = 0;
    let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
});
