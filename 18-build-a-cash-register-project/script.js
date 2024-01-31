let price = 3.26;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const inputCash = document.getElementById("cash");
const displayChangeDue = document.getElementById("change-due");
const purchaseButton = document.getElementById("purchase-btn");
const priceScreen = document.querySelector(".price-screen");
const cashRegisterList = document.querySelector(".cash-register-list");

priceScreen.textContent = `Total: $${price}`;

const updateUI = () => {
    const currencyChange = {
        PENNY: 'Pennies',
        NICKEL: 'Nickels',
        DIME: 'Dimes',
        QUARTER: 'Quarters',
        ONE: 'Ones',
        FIVE: 'Fives',
        TEN: 'Tens',
        TWENTY: 'Twenties',
        'ONE HUNDRED': 'Hundreds'
    };

    cashRegisterList.innerHTML = "";
    cid.forEach((currency) => cashRegisterList.innerHTML += `<li>${currencyChange[currency[0]]}: $${currency[1].toFixed(2)}</li>`);

    cash.value = "";

    console.log(cid);
    console.log(displayChangeDue);
}

updateUI();

const checkCashRegister = () => {
    if(inputCash.value < price) {
        alert("Customer does not have enough money to purchase the item");
        inputCash.value = "";
        return;
    }

    if(inputCash.value == price) {
        displayChangeDue.innerText = "No change due - customer paid with exact cash";
        inputCash.value = "";
        return;
    }

    debugger;

    let changeDue = (Number(inputCash.value) * 100) - (price * 100);
    let denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
    let cidReverse = [...cid].reverse();
    let change = [];
    let availableFunds = 0;

    for(let i = 0; i < cid.length; i++) {
        availableFunds += cid[i][1];
    }

    if (changeDue / 100 > availableFunds) {
        return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
    }

    if (changeDue / 100 === availableFunds) {
        displayChangeDue.innerHTML = '<p>Status: CLOSED</p>';
    }

    for(let i = 0; i < cidReverse.length; i++)
    {
        contador = 0;
        flagWhile = false;

        while(changeDue >= denominations[i] && cidReverse[i][1] * 100 >= denominations[i])
        { 
            changeDue -= denominations[i];
            cidReverse[i][1] -= denominations[i] / 100;
            contador++;
            flagWhile = true;
        }
        if(flagWhile)
        {
            change.push([cidReverse[i][0], denominations[i] / 100 * contador]);
        }
    }
    if (changeDue / 100 > 0) {
        return (displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>');
    }
    else {
        displayChangeDue.innerHTML = '<p>Status: OPEN</p>'
    }

    change.map((currency) => {
        displayChangeDue.innerHTML += `<p>${currency[0]}: $${currency[1]}</p>`
    })

    updateUI();
}


purchaseButton.addEventListener("click", checkCashRegister)

inputCash.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            checkCashRegister();
        }
    });