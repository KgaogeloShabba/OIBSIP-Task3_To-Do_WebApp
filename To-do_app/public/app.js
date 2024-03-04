document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById('todo-form');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    // Load tasks from local storage on page load
    loadTasks();

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = taskTitleInput.value.trim();
        const taskDescription = taskDescriptionInput.value.trim();
        if (taskTitle !== '') {
            const timestamp = new Date().toLocaleString(); // Get current date and time
            const taskItem = createTaskItem(taskTitle, taskDescription, 'pending', timestamp);
            pendingList.appendChild(taskItem);
            saveTask(taskTitle, taskDescription, 'pending', timestamp);
            taskTitleInput.value = '';
            taskDescriptionInput.value = '';
        }
    });

    function createTaskItem(taskTitle, taskDescription, status, addedTimestamp, completedTimestamp) {
        const li = document.createElement('li');
        const titlePara = document.createElement('p');
        titlePara.textContent = 'Title: ' + taskTitle;
        titlePara.classList.add('task-title');
        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = 'Description: ' + taskDescription;
        descriptionPara.classList.add('task-description');
        li.appendChild(titlePara);
        li.appendChild(descriptionPara);
    
        const addedTimestampPara = document.createElement('p');
        addedTimestampPara.textContent = 'Added on: ' + addedTimestamp;
        addedTimestampPara.classList.add('timestamp');
        li.appendChild(addedTimestampPara);
    
        if (status === 'completed') {
            const completedTimestampPara = document.createElement('p');
            completedTimestampPara.textContent = 'Completed on: ' + completedTimestamp;
            completedTimestampPara.classList.add('timestamp');
            li.appendChild(completedTimestampPara);
        }
    
        if (status === 'pending') {
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', function() {
                li.remove();
                const completedTask = createTaskItem(taskTitle, taskDescription, 'completed', addedTimestamp, new Date().toLocaleString());
                completedList.appendChild(completedTask);
                saveTask(taskTitle, taskDescription, 'completed', addedTimestamp, new Date().toLocaleString());
                deleteTask(taskTitle, 'pending');
            });
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.innerHTML = '&#10005;';
            deleteButton.addEventListener('click', function() {
                li.remove();
                deleteTask(taskTitle, 'pending');
            });
            li.appendChild(completeButton);
            li.appendChild(deleteButton);
        } else {
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.innerHTML = '&#10005;';
            deleteButton.addEventListener('click', function() {
                li.remove();
                deleteTask(taskTitle, 'completed');
            });
            li.appendChild(deleteButton);
        }
    
        return li;
    }
    
    
    

    function saveTask(taskTitle, taskDescription, status, timestamp) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || { pending: [], completed: [] };
        tasks[status].push({ title: taskTitle, description: taskDescription, timestamp: timestamp });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(taskTitle, status) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || { pending: [], completed: [] };
        tasks[status] = tasks[status].filter(task => task.title !== taskTitle);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || { pending: [], completed: [] };
        tasks.pending.forEach(task => {
            const taskItem = createTaskItem(task.title, task.description, 'pending', task.timestamp);
            pendingList.appendChild(taskItem);
        });
        tasks.completed.forEach(task => {
            const completedTask = createTaskItem(task.title, task.description, 'completed', task.timestamp);
            completedList.appendChild(completedTask);
        });
    }
});
