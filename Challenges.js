//Juli 1

function addUpTo(num){

    let sum = 0
    
    for (let i = 1; i <= num ; i++){
      
      sum = i + sum
     
    }
     return sum
    }
    
    addUpTo(5);
    
    
// Juli 2
    
// let num = Number(prompt ("Escrbe un nùmero"))
    
    
// function sumSquare(num){
    
// let sum = 0
    
// for (let i = 1; i <= num ; i++){
      
    // sum = (i **2) + sum
    // sum = Math.pow ( i, 2) + sum
    // }
    // return sum
    // }
    
    // sumSquare(3);        
    
    
    //Juli 3
    
    // let num = Number(prompt ("Escrbe un nùmero"))
    
    
    
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