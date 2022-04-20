/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: DetallesCancion;
}

interface DetallesCancion {
    autor: string;
    año: number;
    album: string;
}

const reproductorCancion: Reproductor = {
    volumen: 100,
    cancion: "Devils may cry",
    segundo: 200,
    detalles: {
        autor: "nose",
        año: 2005,
        album: "dmc",
    },
};

const autor = "Nick";

const {
    volumen,
    cancion,
    segundo,
    detalles: { autor: autorPro },
} = reproductorCancion;
// const {autor} = datalles;

// console.log("El volumen es: ", volumen);
// console.log("La canción es: ", cancion);
// console.log("El segundo es: ", segundo);
// console.log("El autor es es: ", autorPro);

const dmc: string[] = ["Dante", "Virgil", "Nero"];

const [, , p3] = dmc;

// console.log("El primer personaje es -> ", p1);
// console.log("El segundo personaje es -> ", p2);
console.log("El tercer personaje es -> ", p3);
