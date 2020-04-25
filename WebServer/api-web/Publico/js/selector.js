const inputField = document.querySelector('.chosen-value');
const dropdown = document.querySelector('.value-list');
const dropdownArray = [...document.querySelectorAll('li')];
console.log(typeof dropdownArray);
dropdown.classList.add('open');
inputField.focus(); // Demo purposes only
let valueArray = [];
dropdownArray.forEach(item => {
    valueArray.push(item.textContent);
});

const closeDropdown = () => {
    dropdown.classList.remove('open');
};

dropdownArray.forEach(item => {
    item.addEventListener('click', evt => {
        inputField.value = item.textContent;
        dropdownArray.forEach(dropdown => {
            dropdown.classList.add('closed');
        });
    });
});

inputField.addEventListener('focus', () => {
    dropdown.classList.add('open');
    dropdownArray.forEach(dropdown => {
        dropdown.classList.remove('closed');
    });
});

inputField.addEventListener('blur', () => {
    inputField.placeholder = 'Seleccione una capa';
    dropdown.classList.remove('open');
});

document.addEventListener('click', evt => {
    const isDropdown = dropdown.contains(evt.target);
    const isInput = inputField.contains(evt.target);
    if (!isDropdown && !isInput) {
        dropdown.classList.remove('open');
    }
});