//Using Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1)
      numbers.push(endNum)
      return numbers
    }
    
  };

  console.log(rangeOfNumbers(10, 20));