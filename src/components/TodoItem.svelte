<script>
    import { toDoList } from '../stores/toDoList.js';
    export let listItem;

    function switchTodo() {
        toDoList.update(list => list.map(el => el !== listItem ? el : {
            ...el,
            done: !el.done
        }));
    }

    function deleteItem() {
        toDoList.update(list => list.filter(el => el !== listItem));
    }
</script>
<li class="TodoItem">
    <div class="item-label">{listItem.label}</div>
    <div class="cmd">
        <button>EDIT</button>
        <button on:click={switchTodo}>
            {#if listItem.done}
            TO DO
            {:else}
            DONE
            {/if}
        </button>
        <button on:click={deleteItem}>DELETE</button>
    </div>
    
</li>

<style>
    .TodoItem {
        border: 1px red solid;
        margin-bottom: 5px;
        padding: 2vw;
        border-radius: 3px;
    }

    .cmd {
        text-align: center;
    }

    .item-label {
        background-color: lightgray;
        border-radius: 3px;
        padding: 3px;
        margin-bottom: 8px;
    }
    button {
        margin: 0;
    }
</style>
