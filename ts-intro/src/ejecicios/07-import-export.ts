import { calcularISV, Producto } from "./06-deses-funcion";
/*
    ===== Código de TypeScript =====
*/

const carrito: Producto = {
    desc: "muchas cosas",
    precio: 2000,
};

const carritoDeCompras: Producto[] = [
    carrito,
    {
        desc: "telefono",
        precio: 100,
    },
    {
        desc: "tele",
        precio: 400,
    },
    {
        desc: "papa",
        precio: 30,
    },
];

const [total, impuestoSV] = calcularISV(carritoDeCompras);

console.log("El precio total es: ", total);
console.log("El ISV es: ", impuestoSV);
