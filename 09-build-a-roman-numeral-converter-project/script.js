const outputDisplay = document.getElementById("output");
const inputNumber = document.getElementById("number");
const buttonConverter = document.getElementById("convert-btn");

const displayText = (input) => {
    const inputValue = parseInt(input);

    if(isValid(inputValue))
    {
        outputDisplay.textContent = romanNumeralConverter(inputValue);
        outputDisplay.classList.remove('texto-error');
        outputDisplay.classList.add('texto-correcto');
        outputDisplay.classList.remove('hidden');
    }
}

const isValid = (input) => {
    
    if (isNaN(input)) 
    {
        outputDisplay.textContent = "Please enter a valid number";
    } 
    else if (input < 1) 
    {
        outputDisplay.textContent = "Please enter a number greater than or equal to 1";
    } 
    else if (input >= 4000) 
    {
        outputDisplay.textContent = "Please enter a number less than or equal to 3999";
    }
    else {
        return true;
    }
    
    outputDisplay.classList.add('texto-error');
    outputDisplay.classList.remove('texto-correcto');
    outputDisplay.classList.remove('hidden');

    return false;
}
const romanNumeralConverter = (input) => {
    let romanNumber = "";

    const romanNumberChart = 
    [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]

    romanNumberChart.forEach((number) => {
        while(input >= number[1])
        {
            romanNumber += number[0];
            input -= number[1];
        }
    })

    return romanNumber;
}

buttonConverter.addEventListener("click", () => displayText(inputNumber.value));