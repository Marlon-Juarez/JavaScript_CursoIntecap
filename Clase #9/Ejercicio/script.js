function funcionEjercio_Arrays_1() {
    let filas = 5;
    let columnas = 4;
    let numeros = new Array(filas);

    // Inicializar cada fila como un array
    for (let i = 0; i < filas; i++) {
        numeros[i] = new Array(columnas);
    }

    // Llenar la matriz con valores ingresados por el usuario
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let numero = prompt(`Ingrese un número para la posición [${i+1}][${j+1}]`);

            if (!isNaN(numero) && numero !== null && numero.trim() !== "") {
                numeros[i][j] = Number(numero);
            } else {
                alert("Por favor, ingrese un número válido.");
                j--; // Decrementa j para volver a pedir el número para la misma posición en caso de una entrada invalida.
            }
        }
    }

    // Mostrar la matriz por consola
    let output = "---------------------\n";
                  
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if(numeros[i][j]>=10){
                output += "|  " + numeros[i][j] + "";
            }else{
                output += "|   " + numeros[i][j] + "";
            }
            
        }
        output += "|\n";
        output += "|    |    |    |    |\n---------------------\n";
    }
    console.log(output);
}



function funcionEjercio_Arrays_2(){
    let filas = 8;
    let columnas = 8;

    let separacion_SinTrampa = "    |";
    let separacion_ConTrampa = "   #|";

    let num_Casillas = 64;
    let numeros = new Array(filas);

    let trampas_Seccion1 = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    let trampas_Seccion2 = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    let trampas_Seccion3 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    // Inicializar cada fila como un array
    for (let i = 0; i < filas; i++) {
        numeros[i] = new Array(columnas);
    }

    // Llenar la matriz con valores ingresados por el usuario
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            numeros[i][j]=num_Casillas;
            num_Casillas--;   
        }
    }

    // Mostrar la matriz por consola
    let output = "-----------------------------------------\n";
             
    let contro_Fila;

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if(numeros[i][j]>=10){
                output += "|  " + numeros[i][j] + "";
            }else{
                output += "|   " + numeros[i][j] + "";
            }
            
        }
        contro_Fila = i;
        output += "|\n|";

        //asignar una trampa a una casilla de manera aleatoria
        for(let i = 0; i<8; i++){
            let num_R = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            
            if(contro_Fila == 6 || contro_Fila ==7){
                if(num_R>5 && trampas_Seccion1>=0){
                    output += separacion_ConTrampa;
                    trampas_Seccion1--;
                }else{
                    output += separacion_SinTrampa;
                }
            }else if(contro_Fila == 4 || contro_Fila ==5){
                if(num_R>5 && trampas_Seccion2>=0){
                    output += separacion_ConTrampa;
                    trampas_Seccion2--;
                }else{
                    output += separacion_SinTrampa;
                }
            }else if(contro_Fila == 3){
                if(num_R>5 && trampas_Seccion3>=0){
                    output += separacion_ConTrampa;
                    trampas_Seccion3--;
                }else{
                    output += separacion_SinTrampa;
                }
            }else{
                output += separacion_SinTrampa;
            } 
        }
        output += "\n-----------------------------------------\n";
    }
    console.log(output);

}