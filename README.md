# BFHL REST API

A REST API built with Express.js that processes data arrays and returns categorized results.

## Features

- Processes arrays containing numbers, alphabets, and special characters
- Separates odd and even numbers
- Converts alphabets to uppercase
- Calculates sum of all numbers
- Creates concatenated string with alternating case in reverse order
- Handles errors gracefully

## API Endpoints

### POST /bfhl
Processes the input data array and returns categorized results.

**Request Body:**
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

### GET /bfhl
Returns operation code.

**Response:**
```json
{
  "operation_code": 1
}
```

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update user details in `index.js`:
   - Replace `user_id` with your format: `{full_name_ddmmyyyy}`
   - Replace `email` with your email
   - Replace `roll_number` with your roll number

4. Run locally:
   ```bash
   npm start
   ```
   or for development:
   ```bash
   npm run dev
   ```

## Deployment

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Railway
1. Connect your GitHub repository to Railway
2. Deploy automatically

### Render
1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`

## Testing

Test the API using curl or Postman:

```bash
curl -X POST https://your-api-url/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

## Examples

See the examples in the main documentation for various input/output scenarios.