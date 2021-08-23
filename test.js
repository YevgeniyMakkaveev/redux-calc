const calcIt = (n1, n2, action) => {
  let res;
  switch (action) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n1 / n2;
      break;
    default:
      res = n1 + n2;
  }
  return res;
};

console.log(calcIt(1, 2, "+"));
