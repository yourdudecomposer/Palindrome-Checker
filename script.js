

function palindrome(str) {
    let freeStr = str.replace(/_|\W/g, '');
    return freeStr.toLowerCase() === freeStr.split('')
        .reverse()
        .join('')
        .toLowerCase();
}


let input = document.querySelector('input');
let p = document.querySelectorAll('p');
let button = document.querySelector('button');

function setStyleP(t) {
    if (t === 'true') {
        p[0].style.background = 'green';
        p[1].textContent = `"${input.value}" is a Palindrome`
    }
    else {
        p[0].style.background = 'red';
        p[1].textContent = `"${input.value}" is NOT Palindrome`
    }
}
function setButtomStyle() {
    button.textContent = 'Enter something';
    p[0].textContent = '';
    p[1].textContent = '';
    p[0].style.background = 'none';
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
    p[0].textContent = (palindrome(val));
    setStyleP(p[0].textContent);
    input.value = '';
})



