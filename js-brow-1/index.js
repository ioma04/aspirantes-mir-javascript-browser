const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
input.addEventListener('input', function() {
    // const texto = input.value;
    // resultado.textContent = texto;
});

const boton = document.querySelector('.btn');
const result = document.querySelector('#resultadoMayusculas')
boton.addEventListener('click', function() {
    const texto = input.value.toUpperCase();
    result.textContent = texto;
})