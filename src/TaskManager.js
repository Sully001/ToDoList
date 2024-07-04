//Stores tasks in an array and converts to JSON string
export function addTask(name, date, project = 'inbox', completed = false) {
    const tasks = getTasks()
    const newTask = {project, name, date, completed}
    tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//Returns a parsed array of tasks or an empty array if none are present
export function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || []
}

//Find the index of the task in the array and splice it
export function removeTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}




