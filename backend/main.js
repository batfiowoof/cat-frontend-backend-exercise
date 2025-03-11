const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let cats = []; // 🐱 In-memory база от данни

// 📍 Стъпка 4: Добави GET маршрут, който връща всички котки.
// 💡 Подсказка: Използвай res.json() за да върнеш масива cats.

// 📍 Стъпка 5: Добави POST маршрут, който създава нова котка.
// 💡 Подсказка: Провери дали name, age и breed са подадени в req.body.
// 💡 Генерирай уникално ID с uuidv4().

// 📍 Стъпка 6: Добави PUT маршрут, който обновява котка по ID.
// 💡 Подсказка: Намери котката по id и промени нейните данни.

// 📍 Стъпка 7: Добави DELETE маршрут, който премахва котка по ID.
// 💡 Подсказка: Използвай .filter() за да премахнеш котката от cats.

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
