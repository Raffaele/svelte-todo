<script>
    import { toDoList } from '../stores/toDoList.js';
    import { elementDetails } from '../stores/elementDetails.js';

    let itemName = '';
    function onSubmit(evt) {
        evt.preventDefault();

        const newItem = {
            label: itemName,
            done: false,
            creationTime: (new Date()).getTime()
        };
        toDoList.update(completeList => [...completeList, newItem]);
        elementDetails.set(null);
    }

    function focusOnInput(element) {
        element.focus();
    }

    let item;
    elementDetails.subscribe(details => item = details);
</script>

<div class="TodoItemDetails">
    {#if item}
        <div class="background"></div>
        <form on:submit={onSubmit}>
            <label>
                <h3>Item name</h3>
                <input type="text" bind:value={itemName} use:focusOnInput />
            </label>
            <button disabled={!itemName.length}>Add</button>
            <button type="button" on:click={() => elementDetails.set(null)}>cancel</button>
        </form>
    {/if}
</div>

<style>
    .background {
        position: fixed;
        width: 100vw;
        top: 0;
        height: 100vh;
        background-color: gray;
        opacity: .4;
    }

    form {
        background-color: red;
        z-index: 2;
        width: 80vw;
        left: 10vw;
        position: absolute;
        text-align: center;
        border-radius: 5px;
        top: 5vh;
        padding: 2vw;
    }

    input {
        display: block;
        width: 80%;
        margin: 0 auto 3vh;
    }

    label {
        display: block;
        margin-bottom: 1vh;
    }
</style>