// A recursive function

function sum(arr, n) {
    // Only change code below this line
      if (n <= 0) {
        return 0;
      }
      else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
  }

  console.log(sum([1], 0));
  console.log(sum([1], 1));
  console.log(sum([1, 4, 5, 8], 2));
  console.log(sum([1, 9, 8], 3));