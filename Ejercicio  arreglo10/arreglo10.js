'user strict'
const miArray=new Array();
var num;
// ciclo del 1 al 10
for(let i=0;i<=9;i++)
{
    let name = prompt("Introduce un numero");
    miArray.push(name);
}
//document.write(miArray);
console.log("Los números leidos son: "+ miArray);


let array = miArray; //este es otro arreglo para ver si se podia copiar
console.log("Este es mi otro arreglo: "+ array); //esta es la prueba de que si lo hace

let sum = 0;
for (let i = 0; i < array.length; i++) {
    num= parseInt(array[i]);
    sum=sum+num;
}
console.log("Los 10 productos cuestan: " +sum);
