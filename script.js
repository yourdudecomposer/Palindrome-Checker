function palindrome(str) {
    let freeStr = str.replace(/_|\W/g, '');
    return freeStr.toLowerCase() === freeStr.split('')
        .reverse()
        .join('')
        .toLowerCase();
}


let input = document.querySelector('input');
let p = document.querySelector('p');
let button = document.querySelector('button');

function setStyleP(t) {
    if (t === 'true') p.style.background = 'green';
    else p.style.background = 'red';
}
function setButtomStyle() {
    button.textContent = 'Enter something';
    p.textContent = '';
    p.style.background = 'none';
    button.style.background = 'red'
}
button.addEventListener('click', () => {
    if (input.value === '') {
        setButtomStyle()
        return
    };
    button.textContent = 'Check';
    button.style.background = 'burlywood'

    let val = input.value;
    p.textContent = (palindrome(val));
    setStyleP(p.textContent);
    console.log(p.textContent);
    input.value = '';
})



