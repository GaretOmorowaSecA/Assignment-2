document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerText = `${taskList.children.length + 1}. ${taskText}`;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus(); 
    }
}

function finishTasks() {
    const taskList = document.getElementById('taskList');
    const outputList = document.getElementById('outputList');
    const confirmNewList = confirm("Your TO-DO LIST HAS BEEN SAVED. Create a new one?");
    
    if (confirmNewList) {
       
        outputList.innerHTML = '';
        Array.from(taskList.children).forEach((taskItem, index) => {
            const outputItem = document.createElement('div');
            outputItem.className = 'output-item';
            outputItem.innerText = `${index + 1}. ${taskItem.innerText.slice(taskItem.innerText.indexOf('.') + 2)}`;
            outputList.appendChild(outputItem);
        });
        
        taskList.innerHTML = ''; 
        document.getElementById('taskInput').focus(); 
    }
}
