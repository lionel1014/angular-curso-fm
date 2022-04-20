/*
    ===== Código de TypeScript =====
*/

interface Pasajeros {
    nombre: string;
    mascotas?: string[];
}

const pasajero1 = {
    nombre: "iber",
};

const pasajero2 = {
    nombre: "Nick",
    mascotas: ["Azhara", "Bigotes", "Mica"],
};

const mostrarMascotas = (pasajero: Pasajeros): void => {
    const cantMascotas = pasajero.mascotas?.length || 0;

    console.log(cantMascotas);
};

mostrarMascotas(pasajero1);
