const outputDisplay = document.getElementById("output");
const inputNumber = document.getElementById("number");
const buttonConverter = document.getElementById("convert-btn");

const displayText = (input) => {

    const inputValue = parseInt(input);

    if (input == "") 
    {
        outputDisplay.textContent = "Please enter a valid number";
        outputDisplay.classList.add('texto-error');
        outputDisplay.classList.remove('texto-correcto');
        outputDisplay.classList.remove('hidden');
    } 
    else if (inputValue < 1) 
    {
        outputDisplay.textContent = "Please enter a number greater than or equal to 1";
        outputDisplay.classList.add('texto-error');
        outputDisplay.classList.remove('texto-correcto');
        outputDisplay.classList.remove('hidden');
    } 
    else if (inputValue >= 4000) 
    {
        outputDisplay.textContent = "Please enter a number less than or equal to 3999";
        outputDisplay.classList.add('texto-error');
        outputDisplay.classList.remove('texto-correcto');
        outputDisplay.classList.remove('hidden');
    } 
    else 
    {
        //aca hacer cuando esta bien
        outputDisplay.classList.remove('texto-error');
        outputDisplay.classList.add('texto-correcto');
        outputDisplay.classList.remove('hidden');
    }
}

const romanNumeralConverter = (input) => {
    
}

buttonConverter.addEventListener("click", () => displayText(inputNumber.value));