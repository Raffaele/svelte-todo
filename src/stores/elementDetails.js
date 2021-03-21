import { writable } from 'svelte/store';

export const elementDetails = writable(null);
export function createElementDetails(label = '', done = false) {
    elementDetails.set({
        label,
        done,
        creationTime: (new Date()).getTime()
    });
}