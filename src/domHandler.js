//For appending all tasks
const tasksContainer = document.querySelector('.tasks')

export function clearTasks() {
    tasksContainer.replaceChildren()
}

export function renderTasks(tasks) {
    tasks.forEach(task => {
        const singleTaskContainer = document.createElement('div')
        singleTaskContainer.classList.add('task')

        const rightSideContainer = document.createElement('div')
        rightSideContainer.classList.add('task-right-side')

        const taskCompletedSpan = document.createElement('span')
        taskCompletedSpan.classList.add('dot')

        const taskName = document.createElement('p')
        taskName.textContent = task.name

        const taskDate = document.createElement('p')
        taskDate.textContent = task.date

        rightSideContainer.appendChild(taskName)
        rightSideContainer.appendChild(taskDate)

        singleTaskContainer.appendChild(taskCompletedSpan)
        singleTaskContainer.appendChild(rightSideContainer)

        tasksContainer.appendChild(singleTaskContainer)
    });
}



