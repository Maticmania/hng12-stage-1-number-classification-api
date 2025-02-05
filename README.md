# Number Classifier API 🚀

This is a simple API that classifies a given number and returns its mathematical properties, along with a fun fact fetched from the Numbers API.

## Features 🌟
- Determines if a number is **prime**, **perfect**, or **Armstrong**.
- Identifies if a number is **odd** or **even**.
- Calculates the **sum of its digits**.
- Fetches a **fun fact** about the number from [Numbers API](http://numbersapi.com/).
- Handles **CORS** for cross-origin requests.
- Returns JSON responses with appropriate **HTTP status codes**.

## API Specification 📜
### Endpoint:
``` js
GET /api/classify-number?number=<integer>
```
### Example Request:
```js
GET /api/classify-number?number=371
```
### Success Response (`200 OK`)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Tech Stack 🛠
- Node.js (Express.js)
- Axios (for external API calls)
- CORS (for cross-origin support)
- Dotenv (for environment variables)


  ## Installation & Running Locally 🚀
1. Clone the repository:
   ```
   git clone https://github.com/maticmania/hng12-stage-1-number-classification-api.git number-classification-api
   ```

2. Navigate to the project directory:
   ```
   cd number-classification-api
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add any necessary environment variables.
```sh
PORT=3030
NUMBERS_API_URL=http://numbersapi.com
```
5. Start the server:
```sh
node index.js
```
The server will run on `http://localhost:3030`.

## License 📜
This project is open-source and available under the MIT License.


***🚀 Happy Coding!***



