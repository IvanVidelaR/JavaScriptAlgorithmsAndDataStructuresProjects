const palindromeTextDefinition = document.getElementById("palindrome-definition-text");
const palindromeBulbDefinition = document.getElementById("palindrome-definition-bulb");
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
let resultMsg;

palindromeBulbDefinition.addEventListener("click", ()=>{
    palindromeTextDefinition.classList.remove('hidden');
    palindromeBulbDefinition.classList.remove('show-font');
});

const palindromeChecker = (input) => {
    if(input == "")
    {
        alert("Please input a value");
    }
    else
    {
        resultDiv.innerHTML = "";
        // resultDiv.replaceChildren();

        const cleanInput = (input).replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        const arrayPalindrome = [...cleanInput].join("");
        const arrayPalindromeInvertido = [...arrayPalindrome].reverse().join("");

        if(arrayPalindrome == arrayPalindromeInvertido)
        {
            resultMsg = `<strong class="black-italic">${input}</strong> is a palindrome`;
        }
        else
        {
            resultMsg = `<strong class="black-italic">${input}</strong> is not a palindrome`;
        }

        const pTag = document.createElement('p');
        pTag.className = 'user-input';
        pTag.innerHTML = resultMsg;
        resultDiv.appendChild(pTag);

        resultDiv.classList.remove("hidden");
    }
}

checkBtn.addEventListener("click", () => {
    palindromeChecker(textInput.value);
});

textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        palindromeChecker(textInput.value);
        textInput.value = '';
    }
});




