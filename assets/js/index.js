'use strict';

const taskInput = document.getElementById('taskInput');

const createTaskButtonElem = document.getElementById("addButton");

const taskList = document.getElementById('taskList');












createTaskButtonElem.addEventListener('click',onCreateTaskButtonClickHandler);







function onCreateTaskButtonClickHandler(even) {

    let arrInput = [taskInput.value];
    taskList.appendChild(create())


}

function create(arrInput) {

    arrInput.toString();
    const viewTable = document.createElement('span')
    viewTable.innerText = arrInput;

    return viewTable;

}





