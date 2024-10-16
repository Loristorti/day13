// Define the API URL
const API_URL = "http://localhost:3000/api/v1/todo";
// Function to get tasks from the API
async function getTasks() {
    try {
        const response = await fetch(API_URL);
        console.log(response)
        const tasks = await response.json();
        
        // Select the ul element
        const taskList = document.querySelector('ul');
        taskList.innerHTML = ''; // Clear any existing tasks

        // Loop through the tasks and add them to the list
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;  // Assuming task has a 'name' property

            // Add Edit and Delete buttons
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Call getTasks when the page loads
// document.addEventListener('DOMContentLoaded', getTasks);

const fetchTodo = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
}
document.addEventListener('DOMContentLoaded', fetchTodo);

