import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getDigitSum, getFunFact, getProperties, isPerfect, isPrime } from "./src/helpers/classifyNumber.js";

dotenv.config();
const PORT = process.env.PORT || 3040;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({message:'Welcome to the Number Classification API!', instruction: "navigate to /api/classify-number?number=1"});
})

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }
  const num = parseInt(number, 10);
    const properties = getProperties(num);
    const funFact = await getFunFact(num);

    return res.json({
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: getDigitSum(num),
      fun_fact: funFact,
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/classify-number`);
});
