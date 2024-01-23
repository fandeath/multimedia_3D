const cors = require('cors');
app.use(cors()); // Це дозволить доступ до вашого API з будь-якого джерела


const mysql = require('mysql');

const dbConnection = mysql.createPool({
    host: 'localhost', // або інша адреса сервера бази даних
    user: 'root', // ваше ім'я користувача для MySQL
    password: '12345', // ваш пароль
    database: 'teddy' // назва вашої бази даних
});

module.exports = dbConnection;
