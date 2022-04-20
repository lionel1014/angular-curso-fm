/*
    ===== Código de TypeScript =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}

class MiSuperClase {
    public miPropiedad: string = "123adcb";

    imprimir() {
        console.log("Hola mundo");
    }
}

console.log(MiSuperClase);

const claseProbando = new MiSuperClase();

console.log(claseProbando.imprimir);
