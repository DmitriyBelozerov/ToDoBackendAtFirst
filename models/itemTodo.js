const mongoose = require('mongoose');

const itemTodoSchema = new mongoose.Schema({
    name: { // у пользователя есть имя — опишем требования к имени в схеме:
      type: String, // имя — это строка
      required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
      minlength: 1, // минимальная длина имени — 2 символа
      maxlength: 30, // а максимальная — 30 символов
    },
  }); 

  module.exports = mongoose.model('itemTodo', itemTodoSchema);