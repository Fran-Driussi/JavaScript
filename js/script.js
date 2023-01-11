
let emailUsuario = document.getElementById('emailAddress');
let password = document.getElementById('password');
let btnLogin = document.querySelector('#btnLogin');
let btnVaciar = document.getElementById('btnVaciarLocalStorage');
let card = document.querySelectorAll('.card');
let compra = document.querySelector('#procesarCompra');

if (btnLogin) {
    btnLogin.addEventListener('click', () => {
        localStorage.setItem('email', JSON.stringify(emailUsuario.value));
        localStorage.setItem('password', JSON.stringify(password.value));
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
            title: 'Logeado correctamente'
        })

        ;

      
        
        

    })
}
if(location.href == 'http://127.0.0.1:5500/index.html'){
    let user = document.querySelector('#user');
    user.innerText = localStorage.getItem('email') || 'Iniciar sesion'
}

if (btnVaciar) {
    btnVaciar.addEventListener('click', (e) => {
        localStorage.clear();
        Swal.fire({
            title: 'Se han borrado todos los datos',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        e.preventDefault();
    })
}



card.forEach((card) => {
    card.addEventListener('click', (e) => {
        leerDatosProd(e.target.parentElement);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Agregaste el producto al carrito'
        })

    })
})

let carrito = [];

function leerDatosProd(producto) {
    const infoProd = {
        titulo: producto.querySelector('.card-title').textContent,
        precio: producto.querySelector('.precio').textContent,
        texto: producto.querySelector('.card-text').textContent,
        id: producto.querySelector('.btn').getAttribute('id'),
    }
    console.log(infoProd)
    carrito = [...carrito, infoProd];
    carroHTML();

}

const carro = document.querySelector('#carrito')

function carroHTML() {
    limpiarHTML();

    carrito.forEach((producto) => {
        const row = document.createElement('p')
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

function limpiarHTML(){
    carro.innerHTML="";
}

 compra.addEventListener('click', (e) =>{
    
        Swal.fire({
            title: 'Compra realizada con exito',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        e.preventDefault();
        limpiarHTML();
    
        localStorage.setItem('compra', JSON.stringify(carrito.value));
})


carro.addEventListener('click',(e) =>{
    /*if(e.target.classList.contains('btn-danger')){
        let prodId = e.target.getAttribute('id');
        carrito = carrito.filter(
            (producto) => producto.id !== prodId
        )
        
        

    }
*/

let productId = e.target.getAttribute('id');
carrito= carrito.find(producto => producto.id === productId);
            if(productId != null)  {
                carrito.splice(producto.indexOf(productId), 1)
            }

})


















