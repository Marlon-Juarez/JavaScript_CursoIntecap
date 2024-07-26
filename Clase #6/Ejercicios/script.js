function funcionEjercicio1(){
    let num_Mes = document.getElementById("mes").value;
   
    switch(Number(num_Mes)){
        case 1:
            alert("Es el mes de enero");
            break;
        case 2:
            alert("Es el mes de febrero");
            break;
        case 3:
            alert("Es el mes de marzo");
            break;
        case 4:
            alert("Es el mes de abril");
            break;
        case 5:
            alert("Es el mes de mayo");
            break;
        case 6:
            alert("Es el mes de junio");
            break;
        case 7:
            alert("Es el mes de julio");
            break;
        case 8:
            alert("Es el mes de agosto");
            break;
        case 9:
            alert("Es el mes de septiembre");
            break;
        case 10:
            alert("Es el mes de octubre");
            break;
        case 11:
            alert("Es el mes de noviembre");
            break;
        case 12:
            alert("Es el mes de diciembre");
            break;
        default:
            alert("Opcion no valida, intente denuevo")
            break;
    }

}

function funcionEjercicio2(){
    let usuario_guard ="Usuario1";
    let contrasenia_guard = "Contraseña1";


    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;

    if(usuario.toLowerCase() == usuario_guard.toLowerCase() && contrasenia.toLowerCase() == contrasenia_guard.toLowerCase()){
        alert("Bienvenido!!!");
    }else{
        alert("Error, credenciales invidas!!!");
    }

}

function funcionEjercicio3(){
    const numero1 = prompt("Ingrese un numero ");
    const numero2 = prompt("Ingrese otro numero");
    
    console.log("|------------------------|");
    console.log("|1. Suma                 |");
    console.log("|2. Resta                |");
    console.log("|3. Multiplicacion       |");
    console.log("|4. Division             |");
    console.log("|------------------------|");
    const opcion = prompt("Ingrese el numero de la opcion");



    switch(Number(opcion)){
        case 1:
            console.log("La suma de los numeros es: " + (numero1 + numero2));
            break;
        case 2:
            console.log("La resta de los numeros es: " + (numero1 - numero2));
            break;
        case 3:
            console.log("La multiplicacion de los numeros es: " + (numero1 * numero2));
            break;
        case 4:
            console.log("La division de los numeros es: " + (numero1 / numero2));
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}

function funcionEjercicio4(){
    let edad = document.getElementById("edad").value;
    
    if(edad>=18){
        alert("Eres mayor de edad");
    }else{
        alert("Eres menor de edad");
    }

}

function funcionEjercicio5(){
    let numero = document.getElementById("num_").value;
    
    if((numero%2) == 0){
        alert("Es un numero par");
    }else{
        alert("Es un numero impar");
    }

}

function funcionEjercicio6(){
    console.log("|------------------------|");
    console.log("|1. Suma                 |");
    console.log("|2. Resta                |");
    console.log("|3. Multiplicacion       |");
    console.log("|4. Division             |");
    console.log("|------------------------|");
    const opcion = prompt("Ingrese el numero de la opcion");

    if(Number(opcion)<=4 && Number(opcion)>=1 ){
        const numero1 = prompt("Ingrese un numero ");
        const numero2 = prompt("Ingrese otro numero");
    
        switch(Number(opcion)){
            case 1:
                console.log("La suma de los numeros es: " + (numero1 + numero2));
                break;
            case 2:
                console.log("La resta de los numeros es: " + (numero1 - numero2));
                break;
            case 3:
                console.log("La multiplicacion de los numeros es: " + (numero1 * numero2));
                break;
            case 4:
                console.log("La division de los numeros es: " + (numero1 / numero2));
                break;
            default:
                console.log("Opcion no valida");
                break;
        }
    }else{
        alert("Opcion no valida")
    }


     
        
}

