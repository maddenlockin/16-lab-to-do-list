CURRENT_USER = 'CURRENT_USER';
//call this function to create a user and log them in
export function createUser(username, password) {
    //check if username is already taken/go to local storage & check if already stored
    if(localStroage.getItem(username)){
        alert('this username is taken');
    } else {
        const newUser = {
            username: username,
            password: password,
            todos: [],
        };
        saveUser(newUser);
        loginUser(username, password);
    }
}
//check to see all good and set the CURRENT_USER in localstorage as logged in
export function loginUser(username, password) {
    const user = getUser(username);

    if(user) {
        if (user.password === password) {
            localStroage.setItem(CURRENT_USER, username);

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

//uses the username in localstroage to 
export function getCurrentUser() {
    const currentUsername = localStorge.getItem(CURRENT_USER);

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
        id: Math.ceil(Math.random() *9999),
        message: SomeTodoItem,
        completed: false,
    };

    user.todos.push(newTodo);
    saveUser(user);
}

export function toggleTodo(todoId) {
    const user = getCurrentUser();

    const matchingTodo = findById(user.todos, todoId);

    //if its true, make it false and visversa
    if (matchingTodo) {
        matchingTodo.completed = !matchingTodo.campleted;
    
        saveUser(user);
    } else {
        alert ('That To-do does not exist');
    }
}

function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}