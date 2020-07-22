// JS BASIC
// EJERCICIO 1 (crear una variable  nombre y imprimir)
console.log("EJERCICIO 1 - JS BASIC");
var myName = "Katy";

console.log("Mi nombre es " + myName);

// EJERCICIO 2 (crear una variable edad y imprimir)
console.log("EJERCICIO 2 - JS BASIC");
var edad = 21;

console.log("Tengo "+ edad + " años");

// EJERCICIO 3 (Imprimir la diferencia entre ignasiAge y edad)
console.log("EJERCICIO 3 - JS BASIC");
var ignasiAge = 32;

var ageDiff = edad - ignasiAge;

console.log("La diferencia de edad con Ignasi es de" + ageDiff);

// EJERCICIO 4 (Comparar edad con 21 y imprimir si es mayor o menor a 21)
console.log("EJERCICIO 4 - JS BASIC");
if(edad >= 21){
    console.log("Tiene más de 21 años");
}

else{
    console.log("No tiene más de 21 años");
}

// EJERCICIO 5 (comparar ignasiAge y edad e imprimir si es mayor, menor o igual)
console.log("EJERCICIO 5 - JS BASIC");
if(ignasiAge > edad){
    console.log("Ignasi es mayor que usted");
}

else if(ignasiAge < edad){
    console.log("Ignasi es menor que usted ");   
}

else{
    console.log(" Tiene la misma edad que Ignasi ");
}

//JS ARRAY FUNTIONS 
   //EJERCICIO 1 (crear un array con los nombres de la clase y:)
   console.log("EJERCICIO 1 - JS ARRAY");

    var classname = ["Nicole", "Flor", "Malena", "Vicky", "Melissa",
     "Janneth", "Andrea", "Yennyfer", "Rodrigo", "Branko", "Carla",
      "Yael", "Nadine", "Luz", "Maca"];
     
      // a - ORDENAR ALFABETICAMENTE
        classname.sort();
    
      // b - IMPRIMIR EL PRIMER NOMBRE DE LA LISTA
        console.log("La primera de la lista es " + classname[0]);
    
      // c - IMPRIMIR EL ULTIMO NOMBRE DE LA LISTA
        console.log("La ultimo de la lista es " + classname[classname.length - 1]);

      // d - IMPRIMIR LA LISTA CON UN FOR
        console.log("Imprimir la lista oredenada y usar un FOR")
        
        for(var i = 0; i < classname.length; i++){

          console.log(classname[i]);
        }

    //EJERCICIO 2 (crear una array de edades de la clase y imprimir solo los pares usando while y for )
    console.log("EJERCICIO 2 - JS ARRAY");
    var classAge = [18,20,22,17,24,20,21,19,26,32,49,22,18,19,20]

      // IMPRIMIR EDADES PARES CON WHILE
      console.log("Edades pares usando WHILE");
        var i = 0;
     
        while(i < classAge.length){

           if((classAge[i] % 2) == 0){

              console.log(classAge[i]);
            
            }

            i++
        }

      console.log("Edades pares usando FOR");
      for(var i = 0; i < classAge.length; i++){
        if((classAge[i] % 2) == 0){
            console.log(classAge[i]);
        }
    }
