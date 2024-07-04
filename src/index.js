import "./styles.css";
import {addTask, getTasks} from "./TaskManager";
import { renderTasks, clearTasks } from "./domHandler";

let currentPage = 'inbox'

//Rendering all tasks and form
renderTasks(getTasks())

const addTaskBtn = document.querySelector('.add-task-btn') // Button
const taskForm = document.getElementById('task-form') // Form
const taskName = document.querySelector('.task-name') // Inputs
const taskDate = document.querySelector('#date')
const finalAddBtn = document.getElementById('submit')
const allTasks = document.querySelector('.tasks')

//Sidebar buttons
const inboxBtn = document.querySelector('.inbox')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addTask(taskName.value, taskDate.value) // Add task and re-render
    clearTasks()
    renderTasks(getTasks())

    taskName.value = '' //Clear the form after
    taskDate.value = ''
})


addTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'block'
    addTaskBtn.style.display = 'none'
})

finalAddBtn.addEventListener('click', () => {
    if (taskName.value == '' || taskDate.value == '') {
        alert('Please fill the task details!')
        return
    }
    taskForm.style.display = 'none'
    addTaskBtn.style.display = 'inline'
})

inboxBtn.addEventListener('click', () => {
    clearTasks()
    renderTasks(getTasks())
})



