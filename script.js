document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const taskInput = document.getElementById('taskInput');

        if (event.shiftKey) {
            event.preventDefault(); 
            const start = taskInput.selectionStart;
            const end = taskInput.selectionEnd;
            taskInput.value = taskInput.value.substring(0, start) + "\n" + taskInput.value.substring(end);
            taskInput.selectionStart = taskInput.selectionEnd = start + 1;
        } else {
            event.preventDefault();
            showLoader();
            setTimeout(() => {
                addTask();
                hideLoader();
            }, 500); 
        }
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
        showLoader();
        setTimeout(() => {
            outputList.innerHTML = '';

            Array.from(taskList.children).forEach((taskItem, index) => {
                const outputItem = document.createElement('div');
                outputItem.className = 'output-item';
                outputItem.innerText = `${index + 1}. ${taskItem.innerText.slice(taskItem.innerText.indexOf('.') + 2)}`;
                outputList.appendChild(outputItem);
            });

            taskList.innerHTML = '';
            document.getElementById('taskInput').focus();
            hideLoader();
        }, 1000); 
    }
}

function showLoader() {
    const loader = document.getElementById('loader');
    loader.classList.remove('fade-out');
    loader.style.display = 'flex';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000); 
}
