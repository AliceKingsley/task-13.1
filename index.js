function askName() {
    let name;
    name = prompt('Введите ваше имя');
    return name;
}

function showMessage() {
    alert(`Привет, ${askName()}!`);
}