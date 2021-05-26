const CURRENT_USER = ('CURRENT_USER');
//call this function to create a user and log them in
export function createUser(username, password) {
    //check if username is already taken/go to local storage & check if already stored
    if(localStorage.getItem(username)){
        alert('this username is not available');
    } else {
        const newUser = {
            username: username,
            password: password,
            todos: [],
        };
        saveUser(newUser);
        loginUser(username, password);
        window.location.href = '../todos';
    }
}
//check to see all good and set the CURRENT_USER in localstorage as logged in
export function loginUser(username, password) {
    const user = getUser(username);

    if(user) {
        if (user.password === password) {
            localStorage.setItem(CURRENT_USER, username);

            window.location.href = '../todos';
        } else {
            alert('username and password do not match');
        }
    } else {
        alert('no such user');
    }
}

// must pass in the username 
export function getUser(username) {
    const stringUser = localStorage.getItem(username);

    return JSON.parse(stringUser);
}

//uses the username in localstorage to 
export function getCurrentUser() {
    const currentUsername = localStorage.getItem(CURRENT_USER);

    const user = getUser(currentUsername);

    return user;
}

export function saveUser(user) {
    const stringUser = JSON.stringify(user);

    localStorage.setItem(user.username, stringUser);
    //by using user.username above, we are making a new notch in local storage for every single user (like a new cart)store name as key.
}

export function logout() {
    localStorage.removeItem(CURRENT_USER);
    window.location.href = '../';
}

export function createTodo(someTodoItem) {
    const user = getCurrentUser();

    const newTodo = {
        id: Math.ceil(Math.random() * 9999),
        message: someTodoItem,
        completed: false,
    };
    // console.log(message)
    user.todos.push(newTodo);
    saveUser(user);
}


export function toggleTodo(todoId) {
    console.log('toggletodo')
    const user = getCurrentUser();
    
    const matchingTodo = findById(user.todos, todoId);

    //if its true, make it false and visversa
    if (matchingTodo) {
        matchingTodo.completed = !matchingTodo.completed;
    
        saveUser(user);
    } else {
        alert ('That to-do does not exist');
    }
}

function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}