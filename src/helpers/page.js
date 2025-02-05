import axios from "axios";
export function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function isPerfect(n) {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n && n !== 1;
}

export const getProperties = (n) => {
  const properties = [];
  const digits = n.toString().split("").map(Number);
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

  if (sum === n) properties.push("armstrong");
  if (n % 2 === 0) properties.push("even");
  else properties.push("odd");
  return properties;
};

export function getDigitSum(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
}

export async function getFunFact(n) {
  try {
    const response = await axios.get(`${process.env.API_URL}/${n}?json`);
    return response.data.text;
  } catch (error) {
    return "Could not fetch fun fact.";
  }
}
