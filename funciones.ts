// FUNCION TIPO 1 [POCO UTILIZADA]
const suma1: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b;
};

// FUNCION TIPO 2 [POCO UTILIZADA]
const suma2: (a: number, b: number) => number = function (a, b) {
  return a + b;
};

// FUNCION TIPO 3 [MUY UTILIZADA!!]
const suma3 = function sumar(a: number, b: number): number {
  return a + b;
};

suma3(1, 2);

//1-Parámetros opcionales
function nombreCompleto(nombre: string = "Enrique", apellido?: string): string {
  if (apellido) return nombre + " " + apellido;
  else return nombre;
}

console.log(nombreCompleto("Felipe"));
console.log(nombreCompleto("Felipe", "Romero"));

//2-Parámetros por defecto
function nombreCompleto2(
  nombre: string,
  apellido: string = "Rodriguez"
): string {
  return nombre + " " + apellido;
}

// Te pone el valor por defecto del apellido en el caso de no meterlo
console.log(nombreCompleto2("Cristiano"));

//3-Parámetros tipo REST
//operador spread => ...restoApellidos [indicamos que podemos poner todos los que queramos]
function nombreCompleto3(
  nombre: string,
  ...restoNombre: Array<string>
): string {
  // join para juntar todos los valores del array separando entre espacio
  return nombre + " " + restoNombre.join(" ");
}

console.log(nombreCompleto3("Ana", "Rodriguez", "Dos Santos"));
