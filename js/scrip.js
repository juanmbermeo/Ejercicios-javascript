/*Programa que dada la edad de una persona indique si es mayor o menor de edad*/

let edad = prompt ("ingrese su edad")
if (edad <18){
    alert("Usted es menor de edad")
} else (edad >=18);{ 
    alert("usted es mayor de edad")
}

/*Dadas las tres calificaciones que el estudiante obtuvo en curso:
a) determinar su promedio
b) indicar si el estudiante aprobo el curso
las notas deben ser de 1 a 10 y aprueba con un promedio mayor de 6.*/

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
/*Realizar una calculadora con las operaciones bassicas*/

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