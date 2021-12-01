const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

// Routes
app.post('/register', (req, res) => {
    res.send({
        message: 'Hello World, Register!',
        ...req.body,
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server started on port ${process.env.PORT || 3001}`);
});
