const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCVV = document.getElementById('card-cvv');

cardNumber.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});

cardMonth.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[/\d]/g, '');
});

cardYear.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '');
});

cardCVV.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '');
});