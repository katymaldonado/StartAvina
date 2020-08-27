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

    //EJERCICIO 3  
    console.log("EJERCICIO 3 - JS ARRAY");
    function MenorNumero(array) {

      var MenorNumero=array[0];

      for(var i = 0; i < array.length; i++){
        
        if(array[i] < MenorNumero){
          
          MenorNumero = array[i]; 
        }

      }
      console.log("El menor numero del array es : " + MenorNumero);  
    }
    
    var numeros = [5,4,8,2,6,1,10];
    MenorNumero(numeros)

    //EJERCICIO 4
    console.log("EJERCICIO 4 - JS ARRAY");
    function MayorNumero(array) {
     
      var MayorNumero=array[0];

      for(var i = 0; i < array.length; i++){
        
        if(array[i] > MayorNumero){
          
          MayorNumero = array[i]; 
        }

      }
      console.log("El mayor numero del array es : " + MayorNumero);  
    }
    
    MayorNumero(numeros)

    //EJERCICIO 5
    console.log("EJERCICIO 5 - JS ARRAY");
    function BuscarEnIndice(array,index){

      console.log(array[index - 1]);

    }
    console.log(classAge);

    BuscarEnIndice(classAge,1);

    //EJERCICIO 6
    console.log("EJERCICIO 6 - JS ARRAY");
    var SoloNumRepetidos = []

    var repetidos = [];

    function NumRepetidos(array) {
      
    

      for(let i = 0; i < array.length; i++){

        SoloNumRepetidos = array[i];

        for(let j = i + 1; j < array.length; j++){

           if (SoloNumRepetidos == array[j]){
          
            repetidos.push(SoloNumRepetidos);

           }

        }
      }

      console.log("Los numeros repetidos son " + repetidos);
    }
    
    
    var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 

    NumRepetidos(array);


    //EJERCICIO 7
    console.log("EJERCICIO 7 - JS ARRAY");
    function ArrayToString(array) {

      var Colores = "";

      for(let i = 0; i < array.length; i++){

         if(i != array.length - 1){
           
          Colores += `"${array[i]}",`; 

         }
         else if(i == array.length - 1){

          Colores += `"${array[i]}"`;

         }
       

      }
      
      console.log(Colores);
    }
    myColor = ["Red", "Green", "White", "Black"];

    ArrayToString(myColor);



    //JS STRINGS FUNTIONS
    
    //EJERCICIO 1 - JS STRINGS
    console.log("EJERCICIO 1 - JS STRING");
       function ReverseNumber(input){
        var NumberReverse = [];

         var array = input.split("");
         
         for (var i = array.length; i >= 0; i--) {
           
          NumberReverse.push(array[i])
           
         }
         return NumberReverse.join("");
       }

       console.log(ReverseNumber("32443"))

    //EJERCICIO 2 - JS STRINGS
    console.log("EJERCICIO 2 - JS STRING")

      function StringAlphabetical(input){

        var string = "" + input; 
        var array = string.split("");
        var alphabetical = array.sort();
        
        return alphabetical.join(""); 
      
      }
      
      console.log(StringAlphabetical("webmaster"));

      //EJERCICIO 3 - JS STRING
    console.log("EJERCICIO 3 - JS STRING")
    function ConMayuscula(string){
      
      var separarfrase = string.split(" ");

      var fraseconMay = [];
      
      for (var i = 0; i < separarfrase.length; i++) {
      
        fraseconMay.push(separarfrase[i].charAt(0).toUpperCase() + separarfrase[i].slice(1).toLowerCase());
      
    }
    return  fraseconMay.join(" ")
    }
    console.log(ConMayuscula("prince of persia"))

    //EJERCICIO 4 - JS STRING
    console.log("EJERCICIO 4 - JS STRING")

    function PalabraLarga(string) {
      var separarfrase = string.split(" ");

      var cont = 0;

      var palabra = "";

      for (var i = 0; i < separarfrase.length; i++) {

        if (separarfrase[i].length > cont) {

          cont = separarfrase[i].length;
          palabra = separarfrase[i];
        }

      }

      return palabra

    }

    console.log(PalabraLarga("Tutorial de desarrollo web"));