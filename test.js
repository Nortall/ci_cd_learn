// Простые тесты для демонстрации
console.log("Запуск тестов...");

// Проверяем, что файлы существуют
const fs = require('fs');

if (fs.existsSync('index.html')) {
    console.log('✅ index.html существует');
} else {
    console.log('❌ index.html не найден');
    process.exit(1);
}

if (fs.existsSync('README.md')) {
    console.log('✅ README.md существует');
} else {
    console.log('❌ README.md не найден');
    process.exit(1);
}

console.log('✅ Все тесты пройдены успешно!');