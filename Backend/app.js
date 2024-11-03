const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../public')));

// DB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'DB_shop'
});

// routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
