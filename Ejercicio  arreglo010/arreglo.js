'user strict'
const miArray=new Array();
var num;
let sum = 0;
let n = prompt("de que tamaño quiere el arreglo:");
    
for(let i=1;i<=n;i++)
{
    let name = Math.floor(Math.random() * 2) ;
    miArray.push(name);
}

console.log("el arreglo es: "+ miArray);

