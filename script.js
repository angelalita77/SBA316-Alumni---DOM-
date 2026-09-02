//  Variables to Cache Elements
const todoForm = document.getElementById('todo-form') //☑️ select ElementByID Cache
const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('#todo-list') //☑️ querySelector
const errorMessage = document.querySelector('#error-message');
const todoCount = document.getElementById('todo-count');

const testText = "Task"

// Helper Function - Create Todo Item
function createTodoItem(text){
    const li = document.createElement('li')
    console.log(li)
}

createTodoItem(testText)