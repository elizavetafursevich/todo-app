import { httpRequest } from "./apiHelper.js";

export const setToDo = await httpRequest
    .get('todos')
    .then(response => {
        return response.data.todos;
    })
    .catch(errors => {
        console.log(errors);
    });