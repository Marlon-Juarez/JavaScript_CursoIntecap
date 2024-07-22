function funcionEjercicio1(){
    alert("Hola mundo!!");
    alert("Ok no, los numeros son" + document.getElementById("campo1").value + ", y " + document.getElementById("campo2").value );
}

function funcionEjercicio2(){
    console.log("buenas noches, " + document.getElementById("nombre").value)
}

function funcionEjercicio3(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

        console.log("La suma de los numeros es: " + (numero1 + numero2));
        console.log("La resta de los numeros es: " + (numero1 - numero2));
        console.log("La multiplicacion de los numeros es: " + (numero1 * numero2));
        console.log("La division de los numeros es: " + (numero1 / numero2));
}

function funcionEjercicio4(){
    let gCentigrados = document.getElementById("gCentigrados").value;
    
    console.log( gCentigrados + " °C equivale a " + (gCentigrados*(9/5)+32) + "°F");
}
