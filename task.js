document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let taskInput = document.getElementById('taskInput').value;
        if (taskInput.trim() !== '') {
            let taskList = document.getElementById('taskList');
            let li = document.createElement('li');
            let markButton = document.createElement('button');
            markButton.textContent = 'Mark as Completed';
            markButton.classList.add('mark-button');
            li.textContent = taskInput;
            li.appendChild(markButton);
            taskList.appendChild(li);
            document.getElementById('taskInput').value = '';

            // Add event listener to mark button
            markButton.addEventListener('click', function() {
                li.remove(); // Remove the completed task from the task list

                // Store completed tasks data in localStorage
                let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
                completedTasks.push(taskInput);
                localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
            });
        }
    });

    document.getElementById('completedTasksButton').addEventListener('click', function() {
        window.location.href = 'completed_task.html';
    });
});
