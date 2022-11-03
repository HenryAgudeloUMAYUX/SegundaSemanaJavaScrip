'user strict'
const miArray=new Array();
var num;
let sum = 0;
let n = prompt("Ingresar un valor impar para el tamaño del arreglo:");
while( n %2==0){
    alert("EL NUMERO INGRESADO DEBE SER IMPAR")
     n = prompt("2 de que tamaño quiere el arreglo:");
} 

for(let i=1;i<=n;i++)
{
    let name = i* 2 ;
    miArray.push(name);
}

console.log("el arreglo es: "+ miArray);


