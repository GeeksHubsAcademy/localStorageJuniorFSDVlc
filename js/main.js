
//Ejemplos localStorage

//Guardado en localStorage

/*
localStorage.setItem('caja1','28/09/2021');

let variableContenedora = localStorage.getItem('caja1');

console.log(variableContenedora);

*/

//Ejemplo de guardado de objeto JS en localStorage

let Desa = {
    nombre : "Desa",
    xp_level : 32,
    ciudad : "Valencia",
    hobbies : {
        hobbie1 : "Escribir",
        hobbie2 : "Netflix",
        hobbie3 : "Programar"
    }

}

//Para guardar en localStorage objetos de JavaScript, tenemos que codificarlo a formato string

localStorage.setItem('datosDesa', JSON.stringify(Desa));

let datosDecodificados = JSON.parse(localStorage.getItem('datosDesa'));

console.log(datosDecodificados);

//Elimino un elemento en concreto del localStorage

localStorage.removeItem('caja1');

//Limpieza total del localStorage

localStorage.clear();