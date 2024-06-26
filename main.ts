import inquirer from "inquirer";

let todos: string[] = [];

let todosQ;

do {
  todosQ = await inquirer.prompt({
    name: "Task",
    type: "confirm",
    message: "Do you want to add any task",
  });

  if (todosQ.Task) {
    let addtask = await inquirer.prompt({
      name: "Tasktoadd",
      type: "input",
      message: "Please type in your task here: ",
    });
    todos.push(addtask.Tasktoadd);
  } 
  else {
    let todosQ = await inquirer.prompt({
      name: "delete",
      type: "confirm",
      message: "Do you want to delete any task?",
    });

    if (todosQ.delete) {
      let deleteQues = await inquirer.prompt({
        type: "list",
        choices: todos,
        message: "Select any task to delete: ",
        name: "deleteTask",
      });

      if (todos.includes(deleteQues.deleteTask)) {
        let i: number = todos.indexOf(deleteQues.deleteTask);
        todos.splice(i, 1);
        console.log("Your task has been successfully deleted.");
      }
    }
  }
  console.log("Here is your todo list: ");
  for (let todo of todos){
     console.log(todo );
    }
} while (todosQ.Task);









