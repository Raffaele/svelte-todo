<script>
	import TodoItem from './TodoItem.svelte';

    export let todoList;
</script>

<ul>
    {#each todoList as listItem}
        <TodoItem {listItem} />
    {/each}
</ul>

<style>
	ul {
        list-style-type: none;
        padding-inline-start: 0;
    }
</style>