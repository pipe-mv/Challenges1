// Challenge 3

function sumOdd( num){

  let sum = 0

  for (let i = 1; i <= num ; i++){

    if (i === 1 || i %2 === 1){

      sum = i + sum
    }

  }
  return sum
}

sumOdd(5);
