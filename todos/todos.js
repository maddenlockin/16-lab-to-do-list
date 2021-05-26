import { getCurrentUser, toggleTodo, createTodo, logout } from "../local-storage-utils.js";

const currentUserOnLoad = getCurrentUser();
if (!currentUserOnLoad) {
    window.location.href = '../';
};

const todoDiv = document.querySelector('#user');
todoDiv.textContent = currentUserOnLoad.username;

const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', () => {
    logout();
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();  

    const formData = new FormData(form);

    createTodo(formData.get('todo'));
    
    renderTodos();
    form.reset();
});

const ul = document.querySelector('ul');

export function renderTodos() {
    console.log('rendertodo');
    const user= getCurrentUser();

    ul.textContent = '';

    user.todos.forEach(todo => {
        const li = document.createElement('li');

        li.textContent = todo.message;

        if(todo.completed) {
            
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            toggleTodo(todo.id);
            console.log('clicked?');
            renderTodos();
        });
        ul.append(li);
    });
}
renderTodos();