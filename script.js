document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addButton = document.getElementById("addButton");
  const taskList = document.getElementById("taskList");

  // Add task function
  addButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();

      if (taskText !== "") {
          // Create a new list item
          const li = document.createElement("li");
          li.textContent = taskText;

          // Create a delete button
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "X";
          deleteButton.addEventListener("click", function() {
              taskList.removeChild(li);
          });

          // Append the delete button and task text to the list item
          li.appendChild(deleteButton);

          // Add the new task to the list
          taskList.appendChild(li);

          // Clear the input field
          taskInput.value = "";
      } else {
          alert("Please enter a task.");
      }
  });

  // Allow pressing "Enter" to add task
  taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
          addButton.click();
      }
  });
});
