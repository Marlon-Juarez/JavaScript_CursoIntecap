function funcionEjercicio1(){
    let numero1 = document.getElementById("n1_Eje1").value;
    let numero2 = document.getElementById("n2_Eje1").value;

    if(numero1 == numero2){
        alert("Los numeros son iguales");
    } else {
        alert("Los numeros no son iguales")
    }
}

function funcionEjercicio2(){
    let numero1 = document.getElementById("n1_Eje2").value;
    if(numero1>=0){
        alert("El numero es positivo")
    }else{
        alert("El numero es negativo")
    }
}

function funcionEjercicio3(){
    let numero1 = document.getElementById("n1_Eje3").value;
    let numero2 = document.getElementById("n2_Eje3").value;

    if(numero1==numero2){
        alert(numero1 + "=" + numero2)
    }else if (numero1>numero2){
        alert(numero1 + ">" + numero2)
    }else{
        alert(numero2 + ">" + numero1)
    }

}

function funcionEjercicio4(){

    let numero1 = document.getElementById("n1_Eje4").value;
    let numero2 = document.getElementById("n2_Eje4").value;
    let numero3 = document.getElementById("n3_Eje4").value;
    let numeros_Ordenados = [];


        if(numero1>numero2 && numero1>numero3 ){
            numeros_Ordenados.push(numero1);

            if(numero2>numero3){
                numeros_Ordenados.push(numero2);
                numeros_Ordenados.push(numero3);
            }else{
                numeros_Ordenados.push(numero3);
                numeros_Ordenados.push(numero2);
            }
        }else if(numero2>numero1 && numero2>numero3 ){
            numeros_Ordenados.push(numero2);

            if(numero1>numero3){
                numeros_Ordenados.push(numero1);
                numeros_Ordenados.push(numero3);
            }else{
                numeros_Ordenados.push(numero3);
                numeros_Ordenados.push(numero1);
            }
        }else{
            numeros_Ordenados.push(numero3);

            if(numero1>numero2){
                numeros_Ordenados.push(numero1);
                numeros_Ordenados.push(numero2);
            }else{
                numeros_Ordenados.push(numero2);
                numeros_Ordenados.push(numero1);
            }
        }

    alert(numeros_Ordenados[0] + ">" + numeros_Ordenados[1] + ">" + numeros_Ordenados[2])
}