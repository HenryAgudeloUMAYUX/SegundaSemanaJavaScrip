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

for (let i = 0; i < miArray.length; i++) {
    if(miArray[i]<0){
   
        num++;
      }
      else{
        sum++;
      }
  }
document.write("Las numeros registrados son: "+ miArray+"<br>");
document.write("los negativos son: "+ num);
document.write(" y los positivos son: "+ sum);