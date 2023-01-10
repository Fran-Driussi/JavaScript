
let emailUsuario = document.getElementById('emailAddress');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');
let btnVaciar = document.getElementById('btnVaciarLocalStorage');
let buy = document.getElementById('btnBuy');


btnLogin.addEventListener('click', () => {
    localStorage.setItem('email', JSON.stringify(emailUsuario));
    localStorage.setItem('password', JSON.stringify(password));
    alert('Bienvenido: ' + emailUsuario.value);

})

btnVaciar.addEventListener('click', () => {
    localStorage.clear();
    alert('Se han borrado todos los datos');
})


buy.onclick = () => {
    localStorage.setItem('compra', buy.value);
    alert('Se agrego el producto al carrito');
}


















