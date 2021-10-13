//Challenge 1

function addUpTo(num){

  let sum = 0

  for (let i = 1; i <= num ; i++){

    sum = i + sum

  }
  return sum
}

addUpTo(5);
