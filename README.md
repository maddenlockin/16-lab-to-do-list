# Plan

### signup page: 
    html
        username input/ password input/ submit button
    event
        put initial user in local storage/ sent to '/todos'

### login page:
    html
        username input/ password input/ submit button
    event
        look at username and password input/see if input matches localstorage/grab user from local storage OR launch an error/
        send user to '/todos'
        STRETCH: 
### todos page:
    html
        input and a button to add new todo/ a ul to inject todo 'li's into
    events
        1. click on todo
            update the todo in local storage --> figure out which todo the user clicks and find it in local storage and toggle the completed/save todos/rerender page with new state

        2. submit new todo
            takes input and injects into local storage(with a random id between 0 and 10,000)/ rerender the page with new state


FIRST- create users
2- create todos
    why? bc todos live on the user object
3- complete todos
4- log in user
