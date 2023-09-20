/*Programa que dada la edad de una persona indique si es mayor o menor de edad*/

let edad = prompt ("ingrese su edad")
if (edad <18){
    alert("Usted es menor de edad")
} else (edad >=18);{ 
    alert("usted es mayor de edad")
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