function maxAndMinNumber(arr) {
  const maxNumber = arr.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return -0;
  })[0];

  const minNumber = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return -0;
  })[0];

  return { maxNumber, minNumber };
}

function sumNumbers(arr, number) {
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] !== number ? (result += arr[i]) : result;
  }

  return result;
}

function miniMaxSum(arr) {
  const { maxNumber, minNumber } = maxAndMinNumber(arr);

  if (maxNumber === minNumber) {
    arr.length = arr.length - 1;
    var sum = arr.reduce((acc, value) => (acc += value), 0);

    console.log(`${sum} ${sum}`);
  } else {
    const sumMin = sumNumbers(arr, maxNumber);
    const sumMax = sumNumbers(arr, minNumber);

    console.log(`${sumMin} ${sumMax}`);
  }
}

const arrayForTest = [1, 2, 3, 4, 5];

// FOR OTHER EXEMPLE
// const arrayForTest = [5, 5, 5, 5, 5];

miniMaxSum(arrayForTest);
