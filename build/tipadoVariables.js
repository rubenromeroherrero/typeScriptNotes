// Para compilar el código de ts => en consola "tsc nombreArchivo.ts"
// Ejecutar la compilación del código javascript => en consola "node build/tipadoVariable.js"
//Boolean
let esValido = true;
esValido = false;
//Number
let edad = 4;
//String
let nombre = "Gustavo";
let apellido = "López";
let nombre_completo = `${nombre} ${apellido}`;
//Array
let number = [1, 2, 3, 4];
let numbers2 = [33, 123, 63];
//Tupla => array de elementos fijos
let sitio = ["casa", 28008];
//Enum => permite gestión amigable de represión de tipo númerica
var Estado;
(function (Estado) {
    // Asignamos a Offline número 0, a Indefinido número 1, Online número 2
    Estado[Estado["Offline"] = 0] = "Offline";
    Estado[Estado["Indefinido"] = 1] = "Indefinido";
    // Podemos alterar el valor asignando un número por ejemplo
    Estado[Estado["Online"] = 3] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
//Unknown => no determina el tipo de la variable [datos de servicios externos etc]
let sinTipo = "Hola";
sinTipo = 32;
sinTipo = true;
//Any
let tipoIndefinido = "Esto es un mensaje";
//podemos asignar a una nueva variable un valor de otra variable de tipo any
let nuevaCadena = tipoIndefinido;
//Void => para aquellas funciones que no devuelvan nada
function logger() {
    console.log("logger");
}
