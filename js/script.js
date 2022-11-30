
function ingresar() {
    let nombreUsuario = prompt("Ingrese su nombre de usuario");
    console.log( "Nombre de usuario" + nombreUsuario);

 
    let password1 = parseInt(prompt("Ingrese su contraseña"));
    console.log( "contraseña:  " +password1);
    
    if ( ( nombreUsuario == "Pepe") && ( password1 == "1234")) {
        alert("Bienvenido al sistema Pepe");
    }
    else {
        alert("Usuario o contraseña incorrectos");
    }


}

function productos() {
    let producto = prompt("Ingrese los productos que le gustaria que vendamos ('s' para salir)");

    while (producto != "s") {
        console.log("Quiero que vendan: " +producto);
        producto = prompt("Ingrese los productos que le gustaria que vendamos  ('s' para salir)");
    }

}

function calcularIva(precio) {
    
    for(let i=0;i<3;i++){
    let totalConIva = precio * 1.21;
    console.log("El precio total con iva es: " + totalConIva);
    precioProd = parseFloat(prompt("Ingresa el precio sin iva "));
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

console.log(calculadora(10, 5, "+"));










