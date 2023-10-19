function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return false;
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return true;
    }
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return true;
      }
    }
  
    return true;
  }
  
  const number = 17; // Change this to the number you want to check for primality
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is not a prime number.`);
  }
  