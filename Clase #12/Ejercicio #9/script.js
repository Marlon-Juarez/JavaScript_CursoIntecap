//Clase para definir las cuentas Bancarias
class CuentaBancaria {
    constructor(numeroDeCuenta, nombre, saldo) {
      this.numeroDeCuenta = numeroDeCuenta;
      this.nombre = nombre;
      this.saldo = saldo;
    }

    depositar(deposito){
        let depos = Number(deposito);
        if( depos>0){
            this.saldo += depos;
        }else{
            alert("Error, el deposito debe ser mayor a 0")
        }
    }

    debitar(retiro){
        let reti = Number(retiro);
        if( reti>0 && (this.saldo-reti)>=0){
            this.saldo -= reti;
        }else{
            alert("Error, retiro invalido, verifique el saldo de la cuenta o la cantidad ingresada")
        }
    }

    //------------Metodos get------------

    get_NumeroDeCuenta(){
        return this.numeroDeCuenta;
    }

    get_Nombre(){
        return this.nombre;
    }

    get_Saldo(){
        return this.saldo;
    }

}

let cuenta1, cuenta2;

//Sirve para inicializar la cuenta1 y cuenta2 con sus valores iniciales
function inicializar() {
  cuenta1 = new CuentaBancaria(1001, "Juan Pérez", 3500);
  cuenta2 = new CuentaBancaria(1002, "Roberto Mario", 500);

  // Mostrar información de las cuentas en la página
  mostrarInfoCuenta(cuenta1, 1);
  mostrarInfoCuenta(cuenta2, 2);
}



function mostrarInfoCuenta(cuenta, numeroCuenta) {
  document.getElementById(`numeroCuenta${numeroCuenta}`).textContent = `No. ${cuenta.get_NumeroDeCuenta()}`;
  document.getElementById(`Nombre${numeroCuenta}`).textContent = `-- Nombre: ${cuenta.get_Nombre()}`;
  document.getElementById(`Saldo${numeroCuenta}`).textContent = `Saldo disponible Q ${cuenta.get_Saldo()}`;
}


function manejarDeposito(numeroCuenta) {
  let cantidad = prompt("Ingrese la cantidad a depositar:");
  if (numeroCuenta === 1) {
    cuenta1.depositar(cantidad);
    mostrarInfoCuenta(cuenta1, 1);
  } else {
    cuenta2.depositar(cantidad);
    mostrarInfoCuenta(cuenta2, 2);
  }
}

function manejarRetiro(numeroCuenta) {
  let cantidad = prompt("Ingrese la cantidad a debitar:");
  if (numeroCuenta === 1) {
    cuenta1.debitar(cantidad);
    mostrarInfoCuenta(cuenta1, 1);
  } else {
    cuenta2.debitar(cantidad);
    mostrarInfoCuenta(cuenta2, 2);
  }
}

//Añadir los eventos de los botones con su respectiva accion
document.addEventListener('DOMContentLoaded', () => {
  //----------------------[Botones cuenta 1]----------------------
  document.getElementById('btnDepositar1').addEventListener('click', () => manejarDeposito(1));
  document.getElementById('btnDebitar1').addEventListener('click', () => manejarRetiro(1));

  //----------------------[Botones cuenta 2]----------------------
  document.getElementById('btnDepositar2').addEventListener('click', () => manejarDeposito(2));
  document.getElementById('btnDebitar2').addEventListener('click', () => manejarRetiro(2));
});