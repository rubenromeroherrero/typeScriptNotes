function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: "Rosa", apellido: "García", edad: 45 });
function mostrarCoche(pCoche) {
    if (pCoche.color) {
        console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}. Color: ${pCoche.color} `);
    }
    else {
        console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    }
}
mostrarCoche({ marca: "Renault", modelo: "Megane" });
mostrarCoche({ marca: "Renault", modelo: "Megane", color: "rojo" });
//Definimos los valores de las propiedades del objeto
let p1 = { x: 121, y: 84 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda("hola", "ola"));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.coche = pCoche;
        this.nombre = pNombre;
        this.edad = pEdad;
    }
}
