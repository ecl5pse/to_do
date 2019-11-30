'use strict';
const tasks = [];

const taskInput = document.getElementById('taskInput');

const createTaskButtonElem = document.getElementById("addButton");

const taskList = document.getElementById('taskList');



createTaskButtonElem.addEventListener('click',onCreateTaskButtonClick);



function onCreateTaskButtonClick(event) {

    createTask(event);
};




function createTask(event) {
    const {value} = taskInput;
    if (value) {
        tasks.push(value);
        taskList.append(
            createTaskListItem({
                id: tasks.length - 1,
                value: taskInput.value[0].toUpperCase() + taskInput.value.slice(1)
            })
        );
        taskInput.value = "";
    }
}



function createTaskListItem(task) {
    const taskListItem = document.createElement("li");
    taskListItem.classList.add('task');
    taskListItem.innerText = task.value;


    return taskListItem;
}