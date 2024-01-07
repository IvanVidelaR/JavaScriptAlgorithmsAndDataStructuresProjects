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

checkBtn.addEventListener("click", ()=>{
    if(textInput.value == "")
    {
        alert("Please input a value");
    }
    else
    {
        resultDiv.innerHTML = "";
        // resultDiv.replaceChildren();

        const cleanInput = (textInput.value).replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        arrayPalindrome = [...cleanInput].join("");
        arrayPalindromeInvertido = [...arrayPalindrome].reverse().join("");

        if(arrayPalindrome == arrayPalindromeInvertido)
        {
            resultMsg = `<strong class="black-italic">${textInput.value}</strong> is a palindrome`;
        }
        else
        {
            resultMsg = `<strong class="black-italic">${textInput.value}</strong> is not a palindrome`;
        }

        const pTag = document.createElement('p');
        pTag.className = 'user-input';
        pTag.innerHTML = resultMsg;
        resultDiv.appendChild(pTag);

        resultDiv.classList.remove("hidden");
    }
});



