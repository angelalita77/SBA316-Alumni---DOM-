//  Variables to Cache Elements
const todoForm = document.getElementById('todo-form') //☑️ select ElementByID Cache
const todoInput = document.getElementById('todo-input');
const todoList = document.querySelector('#todo-list') //☑️ querySelector
const errorMessage = document.querySelector('#error-message');
const todoCount = document.getElementById('todo-count');
const ulEl = document.getElementById("ul");


// Helper Function - Create Todo Item
// Output: <li> 
//             <span>text</span> <button class="delete-btn">DELETE</button> 
//         </li>
function createTodoItem(text) {
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

    // deleteBtn.addEventListener('click', function () {
    //     li.parentNode.removeChild();                    // ☑️  parent-child navigation (parentNode)
    // });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

todoForm.addEventListener('submit', function(event) {
    event.preventDefault;

    const value = todoInput.value.trim(); // strip the whitespace from the text typed
    
    // DOM-event-based validation
    // If the word is less than two characters, toggle error message
    if(value.length < 2) {
        errorMessage.classList.remove('hidden'); //☑️ classList modification on interaction
        todoInput.setAttribute('aria-invalid', 'true'); //☑️ attribute modification on interation
        return;
    }

    errorMessage.classList.add('hidden');
    todoInput.removeAttribute('aria-invalid');

    // Use helper function to create a todo item
    // and then append item to the list
    const newItem = createTodoItem(value);
    todoList.appendChild(newItem);

    todoInput.value = '';

})

