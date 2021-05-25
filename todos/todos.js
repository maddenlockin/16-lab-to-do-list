import { getCurrentUser, toggleTodo } from "../local-storage-utils";

const nameDiv = document.querySelector('#user');
const logout = document.querySelector('#logout');

if (!currentUserOnLoad) {
    window.location.href = '../';
};
nameDiv.textContent = currentUserOnLoad.username;

const form = document.querySelector('form');
form.addE('submit', (e) => {
    e.preventDefault  
    const formData = new FormData(form);

    createTodo(formData.get('todo'));

    renderTodos();
    form.reset();
});

const ul = document.querySelector('ul');

export function renderTodos() {
    const user= getCurrentUser();
    ul.textContent = '';

    user.todos.forEach(todo => {
        const li = document.createElement('li');

        li.textContent = todo.message;

        if(todo.complete) {
            li.style.textDecoration = 'line-through';
        }
        li.addEventListener('click', () => {
            toggleTodo(todo.id);
            renderTodos();
        });
        ul.append(li);
    });
}