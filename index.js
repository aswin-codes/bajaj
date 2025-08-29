const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// User details - Replace with your actual details
const USER_DETAILS = {
    user_id: "aswinraaj_ps",
    email: "aswinraaj.ps2022@vitstudent.ac.in",
    roll_number: "22BCE1621"
};

// Helper function to process data array
function processData(dataArray) {
    const result = {
        is_success: true,
        ...USER_DETAILS,
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };

    let numSum = 0;
    let alphabetChars = [];

    try {
        dataArray.forEach(item => {
            const str = String(item);
            
            // Check if it's a number
            if (!isNaN(str) && str.trim() !== '') {
                const num = parseInt(str);
                numSum += num;
                
                if (num % 2 === 0) {
                    result.even_numbers.push(str);
                } else {
                    result.odd_numbers.push(str);
                }
            }
            // Check if it's alphabetic
            else if (/^[a-zA-Z]+$/.test(str)) {
                result.alphabets.push(str.toUpperCase());
                // Store individual characters for concatenation
                for (let char of str) {
                    alphabetChars.push(char);
                }
            }
            // Special characters
            else {
                result.special_characters.push(str);
            }
        });

        result.sum = String(numSum);
        
        // Create concatenation string in reverse order with alternating caps
        if (alphabetChars.length > 0) {
            const reversedChars = alphabetChars.reverse();
            let concatString = '';
            
            for (let i = 0; i < reversedChars.length; i++) {
                if (i % 2 === 0) {
                    concatString += reversedChars[i].toUpperCase();
                } else {
                    concatString += reversedChars[i].toLowerCase();
                }
            }
            result.concat_string = concatString;
        }

    } catch (error) {
        result.is_success = false;
    }

    return result;
}

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array"
            });
        }

        const result = processData(data);
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// GET /bfhl endpoint for operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "BFHL API is running",
        endpoints: {
            "POST /bfhl": "Process data array",
            "GET /bfhl": "Get operation code"
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;