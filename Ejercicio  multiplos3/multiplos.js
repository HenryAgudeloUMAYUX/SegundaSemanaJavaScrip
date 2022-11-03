'user strict'
let i=1;
let mod=3;
let n=0;
while(i<=50){
  console.log("numero: "+i);
  if(i%mod==0){
   
    n++;
  }
  i++;
}
console.log("la cantidad de numeros multiplos de 3 es: "+n)