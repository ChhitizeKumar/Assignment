// script.js

const taskList = document.getElementById('tasks');

// Event listener for task completion using event delegation
taskList.addEventListener('click', function (event) {
  const clickedElement = event.target;

  // Check if the clicked element is a task item (li)
  if (clickedElement.tagName === 'LI') {
    // Toggle the 'completed' class to mark/unmark the task as completed
    clickedElement.classList.toggle('completed');
  }
});

// Additional code for adding tasks to the list (not focused on event delegation)
const newTaskInput = document.getElementById('newTask');
newTaskInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
    // Create a new task item and append it to the task list
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = newTaskInput.value;
    taskList.appendChild(newTaskItem);

    // Clear the input field
    newTaskInput.value = '';
  }
});
