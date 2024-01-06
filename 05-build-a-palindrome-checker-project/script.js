const palindromeTextDefinition = document.getElementById("palindrome-definition-text");
const palindromeBulbDefinition = document.getElementById("palindrome-definition-bulb");
const button = document.getElementById("check-btn");
let contador = 0;

palindromeBulbDefinition.addEventListener("click", ()=>{
    if(contador % 2 == 0)
    {
        palindromeTextDefinition.classList.remove('hidden');
    }
    else
    {
        palindromeTextDefinition.classList.add('hidden');
    }
    contador++;
})

