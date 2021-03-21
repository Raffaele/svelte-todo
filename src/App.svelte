<script>
	import TodoItemDetails from './components/TodoItemDetails.svelte';
	import TodoList from './components/TodoList.svelte';
	import { toDoList } from './stores/toDoList.js';
	import { createElementDetails } from './stores/elementDetails.js';

	let _todoList;
	toDoList.subscribe(value => {
		_todoList = value;
	});

	let isNewVisible = false;

	function showAddItemPopup() {
		isNewVisible = true;
		createElementDetails();
	}

	function hideAddItemPopup() {
		isNewVisible = false;
	}

	function removeDone() {
		toDoList.update(list => list.filter(el => !el.done));
	}
</script>

<div class="App">
	{#if !_todoList.length}
		<h3>no-items</h3>
	{/if}
	<TodoList todoList = {_todoList} />
	<button on:click={removeDone}>Remove done</button>
	<button on:click={showAddItemPopup}>Add a new one</button>
	<TodoItemDetails />
	
</div>

<style>
	.App {
		padding: 10px;
	}
</style>