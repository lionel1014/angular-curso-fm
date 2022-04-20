/*
    ===== Código de TypeScript =====
*/

const queTipoSoy = <T>(parametro: T) => {
    return parametro;
};

// function queTipoSoy<T> (parametro : T) {
//     return parametro
// }

let soySting = queTipoSoy("hola pepe");
let soyNumero = queTipoSoy(25);
let objeto = queTipoSoy({ pepe: 2, hola: 3 });
let arreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let explicito = queTipoSoy<string>("Hola mundo");
