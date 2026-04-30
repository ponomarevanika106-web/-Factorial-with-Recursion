const factorial = (x) => {
  if (typeof x !== "number" || !Number.isFinite(x) || x < 0) {
    throw new Error("Invalid input");
  }

  if (x === 0 || x === 1) {
    return 1;
  }

  return x * factorial(x - 1);
};

console.log(factorial(5)); 