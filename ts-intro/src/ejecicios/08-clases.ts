/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {
    constructor(public nombre: string, public direccion: string) {}
}

class Demonio extends PersonaNormal {
    // ?alterEgo: string;
    // ?edad: number;
    // ?nombreReal: string;

    // constructor(apodo: string) {
    //     //*el constructor se ejecuta al crear una instancia de mi clase
    //     console.log("Cree una instancia de clase", apodo);
    //     this.alterEgo = apodo;
    // }

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, "Mi casa");
    }
}

const virgil = new Demonio("virgil", 36, "blue");

console.log(virgil);
