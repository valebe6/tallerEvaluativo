let continuar = "si";

let contadorEjUno = 0;
let contadorEjDos = 0;
let contadorEjTres = 0;
let contadorEjCuatro = 0;
let contadorEjCinco = 0;
let contadorEjSeis = 0;

function ejercicioUno(primerNumero, segundoNumero, tercerNumero) {
  if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
    if (segundoNumero > tercerNumero) {
      alert(
        `Los numero de Mayor a Menor son ${primerNumero}, ${segundoNumero}, ${tercerNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${tercerNumero}, ${segundoNumero}, ${primerNumero}`
      );
    } else {
      alert(
        `Los numero de Mayor a Menor son ${primerNumero}, ${tercerNumero}, ${segundoNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${segundoNumero}, ${tercerNumero}, ${primerNumero}`
      );
    }
  } else if (segundoNumero > tercerNumero) {
    if (primerNumero > tercerNumero) {
      alert(
        `Los numero de Mayor a Menor son ${segundoNumero}, ${tercerNumero}, ${primerNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${primerNumero}, ${tercerNumero}, ${segundoNumero}`
      );
    } else {
      alert(
        `Los numero de Mayor a Menor son ${segundoNumero}, ${tercerNumero}, ${primerNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${tercerNumero}, ${primerNumero}, ${segundoNumero}`
      );
    }
  } else {
    if (primerNumero > segundoNumero) {
      alert(
        `Los numero de Mayor a Menor son ${tercerNumero}, ${primerNumero}, ${segundoNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${segundoNumero}, ${primerNumero}, ${tercerNumero}`
      );
    } else {
      alert(
        `Los numero de Mayor a Menor son ${tercerNumero}, ${segundoNumero}, ${primerNumero}`
      );
      alert(
        `Los numero de Menor a Mayor son ${primerNumero}, ${segundoNumero}, ${tercerNumero}`
      );
    }
  }
}

function ejercicioDos(radio) {
  alert("El area del circulo es " + 3.1416 * (radio * radio));
}

while (continuar == "si") {
    let menu = Number(
      prompt(
        "Ingrese el numero del ejercicio que desea ver \nEjercicio 1\nEjercicio 2\nEjercicio 3\nEjercicio 4\nEjercicio 5\nEjercicio 6"
      )
    );
    switch (menu) {
      case 1:
        let primerNumero = Number(prompt("Ingrese el primer numero"));
        let segundoNumero = Number(prompt("Ingrese el segundo numero"));
        let tercerNumero = Number(prompt("Ingrese el tercer numero"));
        ejercicioUno(primerNumero, segundoNumero, tercerNumero);
        contadorEjUno++;
        break;
      case 2:

        contadorEjDos++;
        break;
      case 3:

        contadorEjTres++;
        break;
      case 4:


        contadorEjCuatro++;
        break;
      case 5:

        contadorEjCinco++;
        break;
      case 6:

        contadorEjSeis++;
        break;
      default:
        alert("El ejercicio seleccionado no existe, por favor seleccione del 1 al 6.")
        break;
    }
    continuar = prompt("¿Desea continuar?");
  }
