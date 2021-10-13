// Challenge 3

//https://edabit.com/challenge/wu7DA5ud68NjPbXjb

function sumOdd( num){

  let sum = 0

  for (let i = 1; i <= num ; i++){

    if (i === 1 || i %2 === 1){

      sum = i + sum
    }

  }
  return sum
}
