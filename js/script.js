
function ingresar() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    console.log("Nombre de usuario " + nombreUsuario);


    let password1 = parseInt(prompt("Ingrese su contraseña"));
    console.log("contraseña:  " + password1);

    if ((nombreUsuario == "fran") && (password1 == "1234")) {
        alert("Bienvenido al sistema Fran");
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }


}

function productos() {
    let producto = prompt("Ingrese los productos que le gustaria que vendamos ('s' para salir)");

    while (producto != "s") {
        console.log("Quiero que vendan: " + producto);
        producto = prompt("Ingrese los productos que le gustaria que vendamos  ('s' para salir)");
    }

}

function calcularIva(precio) {

    for (let i = 0; i < 2; i++) {
        let totalConIva = precio * 1.21;
        console.log("El precio total con iva es: " + totalConIva);
        precioProd = parseFloat(prompt("Ingresa el precio sin iva del producto deseado"));
    }
}
//calculadora
function calculadora(num1, num2, operacion) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break
        case "/":
            return num1 / num2;
            break;
        default:
            return 0;
            break;
    }
}




ingresar();
productos();

let precioProd = parseFloat(prompt("Ingresa el precio sin iva del producto deseado "));
calcularIva(precioProd);

let num1 = parseInt(prompt("Ingrese un numero para la calculadora"));
let num2 = parseInt(prompt("Ingrese otro numero para la calculadora"));
let operacion = prompt("Ingrese la opreacion deseada: '+' , '-', '*' , '/'")
alert (calculadora(num1, num2, operacion));


//class 

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toLowerCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

let nombre = prompt("Ingres el nombre del producto que desea comprar");
let precio = parseFloat(prompt("Ingrese el precio del mismo producto"));


const producto1 = new Producto(nombre, precio);
producto1.sumaIva();
producto1.vender();

console.log (producto1);

for (const prop in producto1) {
    console.log(prop);
    console.log(producto1[prop]);
}














