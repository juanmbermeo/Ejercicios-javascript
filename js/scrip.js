//Actividad
// Actividad 1


let edad = prompt("Ingresa tu edad: ");

if (edad < 18) {
  alert("Eres menor de edad.");
} else {
  alert("Eres mayor de edad."); 
}

// Actividad 2 

let cal1 = prompt("ingrese la primera calificacion");
let cal2 = prompt("ingrese la segunda calificacion");
let cal3 = prompt("ingrese la tercera calificacion");
let sum = parseInt(cal1)+ parseInt(cal2)+ parseInt(cal3);
let prom = parseInt(sum/3);
alert("El promedio de su nota es " + prom)
if (prom <6){
    alert("usted desaprobó")
} else (prom >=6);{
    alert("Usted aprobó")
}
// Actividad 3
let a = prompt("Ingresa el primer número: ");
let b = prompt("Ingresa el segundo número: ");

a = parseInt(a);
b = parseInt(b);

if (a > b) {

  alert("a es mayor que b.");
} else if (a < b) {

  alert("a es menor que b.");
} else {

  alert("a es igual que b.");
} 

// Actividad 4
let numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(prompt("Ingresa un número: "));
}

numeros.sort((a, b) => a - b);

for (let numero of numeros) {
  alert(numero);
}

//Actividad 5


let peso = prompt("Ingresa tu peso: ");


peso = parseInt(peso);

if (peso <= 40) {

  alert("Persona baja de peso.");
} else if (peso >= 41 && peso <= 70) {

  alert("Persona con peso promedio.");
} else {
  alert("Persona con sobrepeso.");
}


// Actividad 6
let dia = prompt("Ingresa un número entre 1 y 7: ");

dia = parseInt(dia);

if (dia < 1 || dia > 7) {
 
  alert("Escribiste un número fuera del rango. Escribe un número entre 1 y 7.");
} else {

  switch (dia) {
    case 1:
      alert("Día 1: lunes");
      break;
    case 2:
      alert("Día 2: martes");
      break;
    case 3:
      alert("Día 3: miércoles");
      break;
    case 4:
      alert("Día 4: jueves");
      break;
    case 5:
      alert("Día 5: viernes");
      break;
    case 6:
      alert("Día 6: sábado");
      break;
    case 7:
      alert("Día 7: domingo");
      break;
  }
} 

// Actividad 7
let compra = prompt("Ingresa el valor de tu compra: ");

compra = parseInt(compra);

if (compra >= 1000) {

  descuento = 0.2 * compra;
} else {

  descuento = 0.05 * compra;
}

total = compra - descuento;

alert("El total a pagar es de " + total + " pesos.");

// Actividad 8
let horasTrabajadas = prompt("Ingresa las horas trabajadas: ");

horasTrabajadas = parseInt(horasTrabajadas);

if (horasTrabajadas <= 40) {

  salario = horasTrabajadas * 16000;
} else {

  salario = 40 * 16000 + (horasTrabajadas - 40) * 20000;
}

alert("El salario semanal es de " + salario + " pesos.");

// Actividad 9
let nombre1 = prompt("Ingresa el nombre de la primera persona: ");
let edad1 = prompt("Ingresa la edad de la primera persona: ");
let nombre2 = prompt("Ingresa el nombre de la segunda persona: ");
let edad2 = prompt("Ingresa la edad de la segunda persona: ");

edad1 = parseInt(edad1);
edad2 = parseInt(edad2);

if (edad1 > edad2) {

  alert("La persona con más edad es " + nombre1 + " con " + edad1 + " años.");
} else {

  alert("La persona con más edad es " + nombre2 + " con " + edad2 + " años.");
}

// Actividad 10
let precio = prompt("Ingresa el precio de la camisa: ");
let cantidad = prompt("Ingresa la cantidad de camisas compradas: ");

precio = parseInt(precio);

totalSinDescuento = cantidad * precio;

if (cantidad >= 3) {

  descuento = 0.2 * totalSinDescuento;
} else {

  descuento = 0.1 * totalSinDescuento;
}

total = totalSinDescuento - descuento;

alert("El total a pagar es de " + total + " pesos.");
// Actividad 11

let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 == numero2) {

  alert("Los números son iguales y su producto es " + numero1 * numero2);
} else if (numero1 > numero2) {

    alert("El primer número es mayor y su diferencia es " + numero1 - numero2);
} else {

    alert("El segundo número es mayor y su suma es " + numero1 + numero2);
} 

// Actividad 12. Realizar una calculadora con las operaciones bassicas

let opcion = prompt("1. suma 2. resta 3. division 4. multiplcacion");
let nume1 = prompt("digite el numero 1");
let nume2 = prompt("digite el numero 2");

if (opcion==1){
    suma=parseInt(nume1)+parseInt(nume2);
    alert(suma);
} else if(opcion==2){
    resta=parseInt(nume1)-parseInt(nume2);
    alert(resta);
} else if(opcion==3){
    division=parseInt(nume1)/parseInt(nume2);
    alert(division);
} else {
    multiplicacion=parseInt(nume1)*parseInt(nume2);
    alert(multiplicacion);
}