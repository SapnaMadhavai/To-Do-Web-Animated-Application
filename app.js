document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completionTime = document.createElement('span');
    completionTime.className = 'completion-time';
    completionTime.style.display = 'none'; // Initially hidden

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', function() {
        const now = new Date();
        completionTime.textContent = `Completed on: ${now.toLocaleString()}`;
        completionTime.style.display = 'block'; // Show the completion time
        deleteButton.remove(); // Remove delete button after task is completed
        updateProgress();
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(completionTime);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    document.getElementById('new-task').value = '';
    updateProgress();
    console.log('Task added:', taskText); // Debug log
});

function updateProgress() {
    const taskList = document.getElementById('task-list');
    const tasks = taskList.getElementsByTagName('li').length;
    const progressBar = document.getElementById('progress-bar');
    progressBar.value = tasks === 0 ? 0 : Math.floor((tasks / 10) * 100);
    console.log('Progress updated:', progressBar.value); // Debug log
}
