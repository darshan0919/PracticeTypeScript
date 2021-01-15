interface Todo {
  title: string;
  text: string;
}

function printTodo(todo: Todo) {
  console.log(todo.title, " : ", todo.text);
}

let myTodo = { title: "Today", text: "React and typescript" };

printTodo(myTodo);
