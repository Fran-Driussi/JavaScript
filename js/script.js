//DOM
let emailUsuario = document.getElementById('emailAddress');
let password = document.getElementById('password');
let btnLogin = document.querySelector('#btnLogin');
let btnVaciar = document.getElementById('btnVaciarLocalStorage');
let card = document.querySelectorAll('.card');
let compra = document.querySelector('#procesarCompra');
// inicio login
if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
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
        e.preventDefault()
    })

}
if (location.href == 'http://127.0.0.1:5500/index.html') {
    let user = document.querySelector('#user');
    user.innerText = localStorage.getItem('email') || 'Iniciar sesion'
}
if (location.href == 'https://fran-driussi.github.io') {
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



// inicio catalogo

let carrito = [];

function leerDatosProd(producto) {
    const infoProd = {
        titulo: producto.querySelector('.card-title').textContent,
        precio: producto.querySelector('.precio').textContent,
        texto: producto.querySelector('.card-text').textContent,
        id: producto.querySelector('.btn').getAttribute('data-id'),
    }
    carrito = [...carrito, infoProd];;
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

function limpiarHTML() {
    carro.innerHTML = "";
}

if (compra !== null) {
    compra.addEventListener('click', (e) => {

        Swal.fire({
            title: 'Compra realizada con exito',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
        e.preventDefault();
        limpiarHTML();
        localStorage.setItem('Compra', JSON.stringify(carrito));
    })
}


carro.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        let prodId = e.target.getAttribute('id');
        carrito = carrito.filter(
            (producto) => producto.id !== prodId
        );
        carroHTML();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'error',
            title: 'Eliminaste el producto del carrito'
        })
    }
})

const componentes = document.querySelector('#componentes')

fetch("/data.json")
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach((prod) => {
            const sec = document.createElement('p')
            sec.innerHTML = `
        <section class="pos-card">
                <div class=" row ">
                    <article class="card col-xl-3 col-md-4 col-sm-6 col-xs-12 ">
                        <div>
                            <img class="card-img-top "  src=${prod.img} alt="">
                        </div>
                        <div class="card-body">
                            <h2 class="card-title"> ${prod.nombre} </h2>
                            <p class="precio"><b>$${prod.precio}</b></p>
                            <div class="card-text">
                                <p>${prod.texto}</p>
                            </div>
                            <button class="btn btn-primary " data-id=${prod.id}> Comprar </button>
                        </div>
                    </article>
        `
            componentes.append(sec)
            sec.addEventListener('click', (e) => {
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

    })


















