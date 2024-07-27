function funcionEjercicio1(){

    let numero;

    while(true){
        numero = prompt("Ingrese un número---------[Para salir ingrese un numero negativo]");

        numero = Number(numero);

        if (!isNaN(numero) && numero >= 0) {
            alert(numero + "^2 = " + (numero ** 2));
        } else if (!isNaN(numero) && numero<0){
            alert("Vuelva pronto!!");
            break;
        }else if (numero !== 0) {
            alert("Por favor, ingrese un número válido.");
        } 

    }
}

function funcionEjercicio2(){


    let numero;

    do {
        numero = prompt("Ingrese un número---------[Para salir ingrese el numero 0]");

        numero = Number(numero);

        if (!isNaN(numero) && numero != 0) {

            if(numero>0){
                alert("El numero es positivo");
            }else{
                alert("El numero es negativo");
            }
        } else if (numero !== 0) {
            alert("Por favor, ingrese un número válido.");
        }

    } while (numero !== 0);
}

function funcionEjercicio3(){
    
    let numero;

    do {
        numero = prompt("Ingrese un número---------[Para salir ingrese el numero 0]");

        numero = Number(numero);

        if (!isNaN(numero) && numero != 0) {

            if((numero%2)==0){
                alert("El numero es par");
            }else{
                alert("El numero es impar");
            }
        } else if (numero !== 0) {
            alert("Por favor, ingrese un número válido.");
        }

    } while (numero !== 0);
}

function funcionEjercicio4(){

    let numero;
    let num_N = 15;

    do {
        numero = prompt("Trata de adivinar el numero N!!!, Ingrese un número");

        numero = Number(numero);

        if (!isNaN(numero) && numero != 15) {

            if(num_N<numero){
                alert(numero  + " es mayor al numero N");
            }else{
                alert(numero  + " es menor al numero N");
            }

        } else if (numero !== 15) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (numero !== 15);

    alert("Correcto!!! el numero es: " + num_N);
}

function funcionEjercicio5(){

    let numero=0;
    let num_Ingresado;

    do {
        num_Ingresado = prompt("Porfavor, Ingrese un número---------[Para salir ingrese el numero 0]");
        num_Ingresado = Number(num_Ingresado);

        if (!isNaN(num_Ingresado) && num_Ingresado != 0) {

                numero += num_Ingresado;

        } else if (num_Ingresado !== 0) {
            alert("Por favor, ingrese un número válido.");
        }
    } while (num_Ingresado !== 0);

    alert("La suma de los numeros es: " + numero);
}