const ALL_STATUS_TASKS = { // Объект со статусом тасков. Можно дополнять итд.
  inProgress:'В прогрессе', 
  toDo: 'Todo', 
  done: 'Done', 
}

const todoList = {
  "create a task": "In Progress",
};

let changeStatus = (task, newStatusTask) => {
  if (todoList[task]) { // Проверяем если есть таск в листе.
    for(let keys in ALL_STATUS_TASKS){
      value = ALL_STATUS_TASKS[keys]
      if(value===newStatusTask){ // Есть ли статус в листе статусов.
        todoList[task] = newStatusTask
      }
    }
  } 
};

let addTask = (task)=>{
  todoList[task] = ALL_STATUS_TASKS.toDo 
}
let deleteTask = (task)=>{
  todoList[task] ? delete todoList[task] :  console.log('undefined task') // Проверяем есть ли таск в листе.
}
let printTodoList = () => {
  let resultObj=Object.assign({},ALL_STATUS_TASKS) // Копия объекта статусов тасков, в итоговой обьект для выввода
  for(let x in resultObj){ // Нужно для заполнения объекта в следующем цикле
    let value = resultObj[x]
    delete resultObj[x]
    resultObj[value] = '' 
  }
  for(let key in todoList){ 
    resultObj[todoList[key]] = {...resultObj[todoList[key]], [key]:''} // Добавлям в итогой объект таски {'In Proggress': {TASK1:'', TASK2:''}, 'To Do': {task3:''}}
  }
  for(let key in resultObj){ // Вывод итоговый объект
    console.log(key+':')
    if(resultObj[key] == ''){ //Если нет задач 
      console.log('    -')
    }
    for(let j in resultObj[key]){
      console.log('    '+ j)
    }
  }
  }

changeStatus('create a task','Done')
addTask('Buy milk')
addTask('Design a prototype')
changeStatus('Buy milk', 'In Progress')
addTask('Read the boo')
printTodoList()