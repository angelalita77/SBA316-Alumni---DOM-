//  Variables to Cache Elements
const todoForm = document.getElementById('todo-form') //☑️ select ElementByID Cache
const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('#todo-list') //☑️ querySelector
const errorMessage = document.querySelector('#error-message');
const todoCount = document.getElementById('todo-count');

const testText = "Task Entered"

// Helper Function - Create Todo Item
// Output: <li> 
//             <span>text</span> <button class="delete-btn">DELETE</button> 
//         </li>
function createTodoItem(text){

    // Create <li> element
    const li = document.createElement('li'); //☑️ createElement
    console.log(li);

    // Create <span> element
    const span = document.createElement("span"); // <span> is created to isolate styling only written task text
    span.textContent = text; //☑️Use textContent
    console.log(span);

    // Creating the delete button with a class name
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.className = "delete-btn";
    console.log(deleteBtn);

    
    li.appendChild(span);
    li.appendChild(deleteBtn);
}

createTodoItem(testText);