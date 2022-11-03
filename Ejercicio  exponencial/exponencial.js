'user strict'

let num=1;
let b = 0;
let e = 0;
b = prompt("Ingresa la base:");
e = prompt("Ingresa el exponente:");

    
for(let i=1;i<=e;i++)
{
  num=num*b;  
}



document.write(b+" elevado a "+e+" es: "+ num);