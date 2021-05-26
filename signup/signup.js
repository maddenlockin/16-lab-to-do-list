import { createUser } from "../local-storage-utils.js";

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get('password'));
    debugger;
    createUser(formData.get('username'), formData.get('password'));
});