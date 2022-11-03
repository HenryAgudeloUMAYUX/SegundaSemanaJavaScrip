'user strict'
const miArray=new Array();
var num;
let sum = 0;
let n = prompt("Cuantas notas deseas registrar:");
    
for(let i=1;i<=n;i++)
{
    let name = prompt("Introduce la nota numero : "+i);
    miArray.push(name);
}

document.write("Las notas registradas son: "+ miArray);

