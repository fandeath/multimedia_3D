const express = require('express');
const app = express();
const port = 3000;

// Налаштування статичного доступу до папки з проектом
app.use(express.static('public'));

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World! FOREVER!!!!');
});