const input = document.querySelector('#texto');
const boton = document.querySelector('.btn');
const resultado = document.querySelector('#resultado');

boton.addEventListener('click', function() {
    const str = input.value.trim().replaceAll(' ', '').toLowerCase();
    const reverseStr = str.split('').reverse().join('');
    str === reverseStr ? resultado.textContent = "Es palindromo" : resultado.textContent = "No es palindromo"
});