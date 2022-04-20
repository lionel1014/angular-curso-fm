/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const papitas: Producto = {
    desc: "Papas fritas",
    precio: 20,
};

const papas: Producto = {
    desc: "Papas Ligth",
    precio: 40,
};

export const calcularISV = (productos: Producto[]): [number, number] => {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * 0.35];
};

const articulos = [papas, papitas];
const [precioTotal, isv] = calcularISV(articulos);

// console.log("El precio total es: ", precioTotal);
// console.log("El impuesto sobre venta es: ", isv);
