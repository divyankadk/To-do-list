document.addEventListener('DOMContentLoaded', function() {
    let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    let taskList = document.getElementById('completedTaskList');
    completedTasks.forEach(function(task) {
        let li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
});
