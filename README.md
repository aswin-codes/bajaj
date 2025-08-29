# BFHL REST API

A REST API built with Express.js that processes data arrays and returns categorized results according to BFHL specifications.

## 🚀 Features

- **Data Processing**: Handles arrays containing numbers, alphabets, and special characters
- **Number Categorization**: Separates odd and even numbers
- **Alphabet Processing**: Converts alphabets to uppercase
- **Mathematical Operations**: Calculates sum of all numbers
- **String Manipulation**: Creates concatenated string with alternating case in reverse order
- **Error Handling**: Graceful error handling with proper HTTP status codes
- **CORS Support**: Cross-origin resource sharing enabled

## 📋 API Specification

### Base URL
- Local: `http://localhost:3000`
- Production: `https://bajaj-aswin.vercel.app/`

### Endpoints

#### POST /bfhl
Processes the input data array and returns categorized results.

**Request:**
- Method: `POST`
- Content-Type: `application/json`
- Body:
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response (200 OK):**
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

#### GET /bfhl
Returns operation code for the API.

**Response (200 OK):**
```json
{
  "operation_code": 1
}
```

## 🔧 Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aswin-codes/bajaj.git
   cd bajaj
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure user details in `index.js`:**
   ```javascript
   const USER_DETAILS = {
       user_id: "aswinraaj_ps", // Format: {full_name_ddmmyyyy}
       email: "aswinraaj.ps2022@vitstudent.ac.in",
       roll_number: "22BCE1621"
   };
   ```

4. **Start the server:**
   ```bash
   # Production mode
   npm start
   
   # Development mode (with nodemon)
   npm run dev
   ```

5. **Test the API:**
   The server will run on `http://localhost:3000`



## 📝 Logic Explanation

### Data Processing Logic:
1. **Numbers**: Identified using `!isNaN()` check, separated into odd/even arrays
2. **Alphabets**: Identified using regex `/^[a-zA-Z]+$/`, converted to uppercase
3. **Special Characters**: Everything that's not a number or alphabet
4. **Sum Calculation**: All numbers are summed and returned as a string
5. **Concatenation**: Alphabetic characters are reversed and alternated between upper/lower case

### Concatenation Algorithm:
- Collect all alphabetic characters from input
- Reverse the order
- Apply alternating case (even index = uppercase, odd index = lowercase)

## 🛠️ Project Structure

```
bajaj/
├── index.js          # Main application file
├── package.json      # Dependencies and scripts
├── vercel.json       # Vercel deployment configuration
├── README.md         # Project documentation
└── .gitignore        # Git ignore rules
```

## 🔍 Error Handling

The API handles various error scenarios:
- Invalid input format (400 Bad Request)
- Missing data array (400 Bad Request)
- Server errors (500 Internal Server Error)
- All errors return `is_success: false`

## 📋 Requirements Checklist

- ✅ POST /bfhl endpoint
- ✅ Array processing for numbers, alphabets, special characters
- ✅ Odd/even number separation
- ✅ Alphabet uppercase conversion
- ✅ Sum calculation (returned as string)
- ✅ Concatenation with alternating case in reverse order
- ✅ User ID format: {full_name_ddmmyyyy}
- ✅ Status code 200 for successful requests
- ✅ Error handling with is_success flag
- ✅ Numbers returned as strings
- ✅ Ready for deployment on Vercel/Railway/Render

