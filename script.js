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

function ejercicioTres(ladoUno, ladoDos, ladoTres) {
  if (ladoUno == ladoDos && ladoUno == ladoTres) {
    alert("El triangulo es equilatero");
  } else if (
    (ladoUno == ladoDos && ladoUno !== ladoTres) ||
    (ladoDos == ladoTres && ladoUno != ladoDos)
  ) {
    alert("El triangulo es isóceles");
  } else if (
    ladoUno !== ladoDos &&
    ladoUno !== ladoTres &&
    ladoDos != ladoTres
  ) {
    alert("El triangulo es escaleno");
  }
}

function ejercicioCuatro(numeroUno, numeroDos) {
  let contadorUno = 0;
  let contadorDos = 0;
  for (let i = 0; i < numeroUno; i++) {
    if (numeroUno % i == 0) {
      contadorUno += i;
    }
  }
  for (let k = 0; k < numeroDos; k++) {
    if (numeroDos % k == 0) {
      contadorDos += k;
    }
  }
  if (contadorDos != numeroUno) {
    alert("Los numeros no son amigos");
  } else if (contadorUno != numeroDos) {
    alert("Los numeros no son amigos");
  } else {
    alert("Los numeros son amigos");
  }
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
      let radio = Number(prompt("Ingrese el radio del ciculo"));
      ejercicioDos(radio);
      contadorEjDos++;
      break;
    case 3:
      let ladoUno = Number(prompt("Ingrese el lado Uno"));
      let ladoDos = Number(prompt("Ingrese el lado Dos"));
      let ladoTres = Number(prompt("Ingrese el lado tres"));
      ejercicioTres(ladoUno, ladoDos, ladoTres);
      contadorEjTres++;
      break;
    case 4:
      let numeroUno = Number(prompt("Ingrese el primer numero "));
      let numeroDos = Number(prompt("Ingrese el segundo numero "));
      ejercicioCuatro(numeroUno, numeroDos);
      contadorEjCuatro++;
      break;
    case 5:
      contadorEjCinco++;
      break;
    case 6:
      let notas = [];

      contadorEjSeis++;
      break;
    default:
      alert(
        "El ejercicio eleccionado no existe, por fvor seleccione del 1 al 6."
      );
      break;
  }
  continuar = prompt("¿Desea continuar?");
}
