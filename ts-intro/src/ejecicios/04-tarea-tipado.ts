/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    cuidad: string;
}

const superHeroe: SuperHeroe = {
    nombre: "Virgil",
    edad: 36,
    direccion: {
        calle: "Calle 1",
        pais: "Inglaterra",
        cuidad: "Londres",
    },
    mostrarDireccion() {
        return `${this.nombre}, ${this.direccion.cuidad}, ${this.direccion.pais}`;
    },
};

console.log(superHeroe.mostrarDireccion());
