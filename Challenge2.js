
// Challenge 2

//https://edabit.com/challenge/ip7xupP78R5z5mTmT


function squaresSum(num){

  let sum = 0

  for (let i = 1; i <= num ; i++){

    sum = Math.pow ( i, 2) + sum
  }
  return sum
}

