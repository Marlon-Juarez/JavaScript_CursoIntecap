function funcionEjercio_Arrays(){

    let numbers = [1, 2, 3, 4, 5];

    console.log("Se ha creado el Array llamado \"numbers\" que contiene los numero [1, 2, 3, 4, 5]");

    numbers.push(6);

    console.log("Se añadio el numero \"6\" a \"numbers\"");


    //splice(index de inicio, no. elementos eliminados);
    numbers.splice(0, 1);

    console.log("Se elimino el elemento de index 0, en este caso es el numero \"1\"");

    console.log("\n\nEntonces, los numero contenidos en \"numbers\" es:");

    for(let i=0; i<numbers.length; i++){
        console.log("index " + i + ".---   " + numbers[i]);
    }

}