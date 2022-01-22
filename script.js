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

function setStyle(t) {
    if(t === 'true') p[1].style.background = 'green';
    else p[1].style.background = 'red';
}


button.addEventListener('click', () => {
    let val = input.value;
    p[0].textContent = `is "${val}" palindrome..?`;
    p[1].textContent = (palindrome(val));
    setStyle( p[1].textContent );
    console.log(p[1].textContent );
    input.value = '';
})



