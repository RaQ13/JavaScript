const orderId = document.querySelector('#orderId');
const item = document.querySelector('#item');
const quanity = document.querySelector('#quantity');
const addBtn = document.querySelector('#add');
const row = document.querySelector('tbody tr');
const tableBody = document.querySelector('tbody');

function addItem() {
    let clonedRow = row.cloneNode(true);
    if (orderId.value !== "" && item.value !== "" && quanity.value !== "") {
        clonedRow.firstElementChild.innerText = orderId.value;
        clonedRow.firstElementChild.nextElementSibling.innerText = item.value;
        clonedRow.firstElementChild.nextElementSibling.nextElementSibling.innerText = quanity.value;
        tableBody.appendChild(clonedRow);
    } else alert("Pola formularza nie mogą być puste");
}

addBtn.addEventListener('click', addItem);
