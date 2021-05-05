let input = document.getElementById('input');
let button = document.getElementById('button');
let i;

function increaser() {
    let money = document.getElementById('amount').textContent;
    let amount = parseInt(money, 10);
    i = parseInt(input.value, 10);
    if (isNaN(i)) {
        i = 0;
    }
    document.getElementById(`amount`).innerHTML = amount + i;
    amount = amount + i;
}

button.addEventListener('click', increaser);