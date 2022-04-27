//1-Interfaz => es como una clase que tiene unas propiedades y métodos propias
interface Persona {
  //Propiedades que tienen que implementar los objetos que utilicen la interfaz Persona
  nombre: string;
  apellido: string;
  edad: number;
}

function mostrarPersona(pPersona: Persona) {
  console.log(pPersona);
}

mostrarPersona({ nombre: "Rosa", apellido: "García", edad: 45 });

//2-Propiedades opcionales
interface Coche {
  marca: string;
  modelo: string;
  // El interrogante hace que una propiedad sea opcional y no obligatoria
  color?: string;
}

function mostrarCoche(pCoche: Coche) {
  if (pCoche.color) {
    console.log(
      `Marca: ${pCoche.marca}. Model: ${pCoche.modelo}. Color: ${pCoche.color} `
    );
  } else {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
  }
}

mostrarCoche({ marca: "Renault", modelo: "Megane" });
mostrarCoche({ marca: "Renault", modelo: "Megane", color: "rojo" });

//3-Propiedades de solo lectura => propiedades no modificables posteriormente de crearlas
interface Punto {
  readonly x: number;
  readonly y: number;
}

//Definimos los valores de las propiedades del objeto
let p1: Punto = { x: 121, y: 84 };
//Una vez ya hemos asignado un valor al objeto p1: Punto => no podemos cambiarle el valor
// p1.x = 32;

//4-Definir una función dentro de la interfaz
interface Busqueda {
  //Cualquier objeto que sea de tipo Busqueda, tiene que implementar si o si esta función
  (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
  const result = v.search(b);
  return result > -1;
};

console.log(miBusqueda("hola", "ola"));

//5-Interfaz en una clase
interface Humano {
  nombre: string;
  edad: number;
}

class Adulto implements Humano {
  nombre: string;
  edad: number;
  // Añadimos una propiedad nueva que sólo va a tener la clase adulto pero que tira de interfaz Humano
  coche: boolean;

  constructor(pNombre: string, pEdad: number, pCoche: boolean) {
    this.coche = pCoche;
    this.nombre = pNombre;
    this.edad = pEdad;
  }
}
