const array = ['name', 'John', 'lastname', 'Black', 'age', '23'];
const obj = {};

for (let i = 0; i < array.length; i += 2) {
    const key = array[i];
    const value = array[i + 1];
    obj[key] = value;
}

console.log(obj);



function average() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

console.log(average(10, 20, 30, 40, 50)); // Выведет 30



function getDataType(value) {
    const type = typeof value;
    console.log(type);
}


getDataType(false); // Выведет 'boolean'
getDataType('hello world!'); // Выведет 'string'
getDataType(42); // Выведет 'number'



const btnPlus = document.querySelector('#btnPlus'),
    btnMinus = document.querySelector('#btnMinus'),
    h2 = document.querySelector('.h2')

let valueSchet = 0

btnPlus.onclick = () => {
    h2.textContent = valueSchet++
}
btnMinus.onclick = () => {
    h2.textContent = valueSchet--
}

