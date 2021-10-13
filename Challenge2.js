
// Challenge 2

let num = Number(prompt ("Escrbe un nùmero"))


function sumSquare(num){

  let sum = 0

  for (let i = 1; i <= num ; i++){

    sum = (i **2) + sum
    sum = Math.pow ( i, 2) + sum
  }
  return sum
}

sumSquare(3);
