const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const checkValidNumber = (input) => {
    if(input === "")
    {
        alert("Please provide a phone number");
        return;
    }
    const countryCode = "^(1\\s?)?"
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spaceDashes = "[\\s\\-]?"
    const cellphone = `[0-9]{3}${spaceDashes}[0-9]{4}$` 
    
    const regex = new RegExp(countryCode + areaCode + spaceDashes + cellphone);
    
    const resultsPTag = document.createElement("p");
    resultsDiv.appendChild(resultsPTag);
    
    regex.test(input) ? (resultsPTag.style.color = "green") : (resultsPTag.style.color = "red");
    
    resultsPTag.textContent = `${regex.test(input) ? "Valid" : "Invalid"} US number: ${input}`;
}

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);
    userInput.value = "";
})

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
})

userInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter")
    {
        checkValidNumber(userInput.value);
        userInput.value = "";
    }
})