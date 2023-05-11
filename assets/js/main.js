const rightButton = document.querySelector('#arrow-right');
const leftButton = document.querySelector('#arrow-left');
const tableCurrency = document.querySelector('#currency');
const tableCommissions = document.querySelector('#commissions');

rightButton.addEventListener('click', showCommission);
leftButton.addEventListener('click', showCurrency);

function showCommission(){
    tableCurrency.classList.add('inactive');
    tableCommissions.classList.toggle('inactive');
}
function showCurrency(){
    tableCommissions.classList.add('inactive');
    tableCurrency.classList.toggle('inactive');
}