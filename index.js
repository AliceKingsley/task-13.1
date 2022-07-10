function askName() {
    let name;
    name = document.querySelector('input').value;
    return name;
}

function showMessage() {
    let div = document.querySelector('.message');
    div.textContent = (`Привет, ${askName()}!`);
}