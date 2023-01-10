
let emailUsuario = document.getElementById('emailAddress');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');
let btnVaciar = document.getElementById('btnVaciarLocalStorage');
let card = document.querySelectorAll('.card');


btnLogin.addEventListener('click', (e) => {
    localStorage.setItem('email', JSON.stringify(emailUsuario));
    localStorage.setItem('password', JSON.stringify(password));
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
    })

    e.preventDefault();



})

btnVaciar.addEventListener('click', (e) => {
    localStorage.clear();
    Swal.fire({
        title:  'Se han borrado todos los datos',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
    e.preventDefault();
})


card.forEach((card) =>{
    card.addEventListener('click',(e)=>{
        leerDatos(e.target.parentElement)
    })
})

let carrito = [];

function leerDatos(producto){
    const infoProd= {
        titulo : producto.querySelector('.card-title').textContent,
        precio: producto.querySelector('.precio').textContent,
        texto: producto.querySelector('.card-text').textContent,
        id: querySelectorAll(".btn").getAttribute,
    }
    console.log(infoProd)


carrito= [...carrito, infoProd]
carroHTML();
}

const carro = document.querySelector('#carrito')

function carroHTML(){
    carrito.forEach((producto) =>{
        const row= document.createElement('p')
        row.innerHTML = `
        <div class ="container">
        <h5>${producto.titulo}</h5>
        <p>${producto.precio}</p>
        <p>${producto.texto}</p>


        <button class="btn btn-danger" id="${producto.id}"> Eliminar </button>
        </div>
        `;
        carro.appendChild(row);
    })
}















