const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist Appointment",
    isCompleted: false,
  },
];

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// for (let d of todos) {
//     console.log(d);
//   }

// todos.forEach(function (a) {
//   console.log(a.text);
// });

const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);
