function power(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 === 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

// console.log(power(4));
// big O = O(logn)

// bitWise
function power(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

// big O = O(1)
