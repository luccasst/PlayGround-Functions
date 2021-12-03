// Desafio 1
function compareTrue(p1, p2) {
if (p1 === true && p2 === true) {
  return true;
} else {
  return false
}
}

// Desafio 2
function calcArea(base, height) {
let triangulo =  (base * height) /2;
return triangulo; 
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1)); 
 


// Desafio 3
function splitSentence(palavras) {
  let resultadoString = palavras.split(" ")
  return resultadoString
  
  }
  console.log(splitSentence('go', 'Trybe'));  

// Desafio 4
function concatName(nomes) {
  let resultado = nomes 
  return nomes[nomes.length-1] + ', ' + nomes[0]; 

}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); 

// Desafio 5
function footballPoints(wins, ties) {
  
    return (wins * 3) + ties
  
}
console.log(footballPoints(50)); 
// Desafio 6
function highestCount(numeros) {
  let numbers = numeros[0]
  let numbers2 = 0
  for (let index =0; index < numeros.length; index++) {
    if(numeros[index]> numbers) {
      numbers = numeros[index]
    }
  } 
   for (let index = 0; index < numeros.length; index++) {
     if(numeros[index] === numbers) {
       numbers2++
     }
   } 
   return numbers2 
}console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2 ) {
let distanciaCat1Mouse = 0
let distanciaCat2Mouse = 0
if(cat1 > mouse){
distanciaCat1Mouse = cat1 - mouse;
} else{
  distanciaCat1Mouse = mouse - cat1;
}
if(cat2 > mouse){
  distanciaCat2Mouse = cat2 - mouse;
}else{
  distanciaCat2Mouse = mouse - cat2;
}
if(distanciaCat1Mouse > distanciaCat2Mouse){
  return 'cat2'
}else if(distanciaCat2Mouse > distanciaCat1Mouse) {
  return 'cat1'
} else{
 return 'os gatos trombam e o rato foge';  
}
}

     

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
