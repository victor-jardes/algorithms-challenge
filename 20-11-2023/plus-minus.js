const formatResponse = (arrayWithNumbers, arr) => {
  const calc = arrayWithNumbers.length / arr.length
  return calc.toFixed(6)
}

function plusMinus(arr) {
  const positiveNumbers = []
  const numbersZeros = []
  const negativeNumbers = []

  for(let i = 0; i < arr.length; i +=1) {
    if(arr[i] > 0) {
      positiveNumbers.push(arr[i])
    } else if(arr[i] < 0) {
      negativeNumbers.push(arr[i])
    } else {
      numbersZeros.push(arr[i])
    };
  }
  
  console.log(`${formatResponse(positiveNumbers,arr)} \n${formatResponse(negativeNumbers, arr)} \n${formatResponse(numbersZeros, arr)}`)
}

const arrayForExemple = [-4, 3, -9, 0, 4, 1]

plusMinus(arrayForExemple)

