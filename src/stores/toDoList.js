import { writable } from 'svelte/store';

const defaultTodoList = [{
    label: 'Learn svelte',
    done: false,
    creationTime: 123
}, {
    label: 'Create a svelte project',
    done: false,
    creationTime: 2312
}, {
    label: 'Be the best',
    done: false,
    creationTime: 43234
}];

export const toDoList = writable(defaultTodoList);