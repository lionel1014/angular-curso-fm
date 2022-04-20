/*
    ===== Código de TypeScript =====
*/
let skills: string[] = ["steal","punch","jump"];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    age?: string | number;
}

const character: Character = {
    name: 'Dante',
    hp: 100,
    skills: [...skills],
}

character.age = "muchos";

console.table(character);