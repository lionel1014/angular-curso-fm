/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
};

// primero los obligatorios, segundo los opcionales, tercero los definidos
function multiplicar(primero: number, segundo?: number, tercerdo: number = 10) {
    return primero * tercerdo;
}

interface PersonajeDMC {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

const heal = (personaje: PersonajeDMC, curarX: number): void => {
    personaje.pv += curarX;

    console.log(personaje);
};

const dante: PersonajeDMC = {
    nombre: "Dante",
    pv: 75,
    mostrarPv() {
        console.log("Esto son tus puntos de vida -> ", this.pv);
    },
};

dante.mostrarPv();

heal(dante, 25);

// const resultado = sumar(10, 20);
// const resultado2 = sumarFlecha(100, 20);
// const resultado3 = multiplicar(100, 20);
// console.log(resultado3);
