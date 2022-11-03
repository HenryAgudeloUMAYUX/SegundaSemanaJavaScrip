'user strict'
const miArray=new Array();
var num;
let sum = 0;
let i=1;
let n =1;
while( n <=100){
   
     if(i %2==0){
        miArray.push(i);
        n++;
        sum=sum+i;
     }
     i++;
} 
console.log("el arreglo es: "+ miArray);
console.log("la suma es: "+ sum);


