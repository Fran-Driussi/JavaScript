
let emailUsuario = document.getElementById('emailAddress');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');


btnLogin.addEventListener('click', () => {
    localStorage.setItem('email', JSON.stringify(emailUsuario));
    localStorage.setItem('password', JSON.stringify(password));
    alert('Bienvenido: ' + emailUsuario.value);

})

let btnVaciar = document.getElementById('btnVaciarLocalStorage');

btnVaciar.addEventListener('click', () => {
    localStorage.clear();
    alert('Se han borrado todos los datos');
})


let buy = document.querySelector("#btnBuy")


buy.addEventListener('click', () => {
    alert('Se agrego el producto al carrito');
})


















