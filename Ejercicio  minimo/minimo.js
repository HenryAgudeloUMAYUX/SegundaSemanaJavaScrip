'user strict'
const miArray=new Array();
let num=0;
let sum = 0;
let n = prompt("Cuantas numeros deseas registrar:");
let mod=2;
    
for(let i=1;i<=n;i++)
{
    let name = prompt("Introduce el numero : "+i);
    miArray.push(name);
}

let m = Math.min.apply(null, miArray);
console.log(m);

for (let i = 0; i < miArray.length; i++) {
    document.write("sueldo registrado: "+ miArray[i]+"<br>");
  }

document.write("el sueldo mas bajo es: "+ m);