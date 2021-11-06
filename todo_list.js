const statusTask = {
  inProgress:'In Progress',
  toDo: 'Todo',
  done: 'Done'
}

const todoList = {
  "create a task": "In Progress",
};

let changeStatus = (task, newStatusTask) => {
  if (todoList[task]) {
    for(let keys in statusTask){
      value = statusTask[keys]
      if(value===newStatusTask){
        todoList[task] = newStatusTask
      }
    }
  } else {
    console.log("undefined task");
  }
};

let addTask = (task)=>{
  todoList[task] = statusTask.inProgress
}
let deleteTask = (task)=>{
  todoList[task] ? delete todoList[task] : console.log('undefined task')
}
let printTodoList = () => {
  let resultObj = {
    'Todo' : '',
    'In Progress' : '',
    'Done' : '',
  };
  for(let key in todoList){
    let value = todoList[key];
    resultObj[value] = {...resultObj[value], [key]:''}
    }
    for(let ks in resultObj){
      console.log(`${ks}:`)
      for(let x in resultObj[ks]){
        console.log(`    ${x}`)
      }
      
    }
  }
