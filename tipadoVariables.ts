// Para compilar el código de ts => en consola "tsc nombreArchivo.ts"
// Ejecutar la compilación del código javascript => en consola "node build/tipadoVariable.js"
// IMPORTANTE: Siempre que hagamos cualquier cambio en el archivo TS hay que compilar para ejecutar el js

//Boolean
let esValido: boolean = true;
esValido = false;

//Number
let edad: number = 4;

//String
let nombre: string = "Gustavo";
let apellido: string = "López";

let nombre_completo: string = `${nombre} ${apellido}`;

//Array
let number: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [33, 123, 63];

//Tupla => array de elementos fijos
let sitio: [string, number] = ["casa", 28008];

//Enum => permite gestión amigable de represión de tipo númerica
enum Estado {
  // Asignamos a Offline número 0, a Indefinido número 1, Online número 2
  Offline,
  Indefinido,
  // Podemos alterar el valor asignando un número por ejemplo
  Online = 3,
}

let stat: Estado = Estado.Online;
console.log(stat);

//Unknown => no determina el tipo de la variable [datos de servicios externos etc]
let sinTipo: unknown = "Hola";
sinTipo = 32;
sinTipo = true;

//Any
let tipoIndefinido: any = "Esto es un mensaje";
//podemos asignar a una nueva variable un valor de otra variable de tipo any
let nuevaCadena: string = tipoIndefinido;

//Void => para aquellas funciones que no devuelvan nada
function logger(): void {
  console.log("logger");
}
