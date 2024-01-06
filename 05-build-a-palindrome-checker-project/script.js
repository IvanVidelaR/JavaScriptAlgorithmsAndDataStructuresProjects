const palindromeTextDefinition = document.getElementById("palindrome-definition-text");
const palindromeBulbDefinition = document.getElementById("palindrome-definition-bulb");
const button = document.getElementById("check-btn");

palindromeBulbDefinition.addEventListener("click", ()=>{
    palindromeTextDefinition.classList.remove('hidden');
    palindromeBulbDefinition.classList.remove('show-font');
})

