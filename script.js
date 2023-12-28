document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the default form submission
    convertInput();
});

/*document.getElementById('inputDegree').addEventListener('input', convertInput);
------------------ without the click button--------------------------*/


/* --------------------with click button -----------------------------*/
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault(); // prevent the default button click behavior
    convertInput();
});

function convertInput() {
    let inputDegreeElement = document.getElementById('inputDegree');
    let inputDegree = parseFloat(inputDegreeElement.value);
    let celsius = Math.round((inputDegree - 32) * (5 / 9));

    let resultElement = document.getElementById('result');
    if (resultElement) {
    resultElement.value = celsius;
    }

    return celsius;
}
