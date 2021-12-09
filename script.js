const numbers = ["+","-","&times;","&divide;","7","8","9","4","5","6","1","2","3","0",".","c",]

const operatorAndNumber = document.querySelector('.operatorAndNumber');

for (let i = 0; i < numbers.length; i++) {
    const number = document.createElement('div');
    number.classList.add('center','eff','noAndOperators');
    number.innerHTML = numbers[i];
    operatorAndNumber.append(number);

    number.addEventListener('click',() => {
        const inputTag = document.querySelector('.input');
        inputTag.innerHTML += number.innerHTML;
    })
}  // ---> making number buttons /



