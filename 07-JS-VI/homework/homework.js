// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // // como la cadena es como un array extraigo el valor alfabetico que esta posicion 0 y le aplico el metodo de convertir en mayuscula' y el metodo slice me devuelve el restante de la cadena desde
  // el indice 1 hasta el fin aunque puedo decirle hasta donde tambien.

  return nombre[0].toUpperCase() + nombre.slice(1);
 
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
   return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var sum = 0;
  for (var i=0; i < numeros.length; i++){
      sum = sum +  numeros[i];
  }
   return cb(sum);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 
   array.forEach(function(valor) {cb(valor);});

  // for (var i=0; i < array.length; i++){
  //     cb(array[i]);
  // }
 }


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  
  var nuevoArray = [];
  nuevoArray = array.map(function(valor) {
     return cb(valor);
    }
  );
  return nuevoArray;

  // var nuevoArray = [];
  // for (var i = 0; i < array.length; i++) {
  //     //nuevoArray.push(cb(array[i]));
  //      nuevoArray[i] = cb(array[i]);
  //   }
  //   return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 
  // var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   if (array[i][0] === "a") {
  //      nuevoArray.push(array[i])
  //   }
  // }
  // return nuevoArray;

   var nuevoArray = array.filter((valor) => valor.substring(0,1) === "a");
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
