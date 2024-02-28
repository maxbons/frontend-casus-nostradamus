<template>
    <div class="todo-wrapper">
        <div class="d-flex flex-column-reverse flex-md-row gap-3">
            <button
                class="btn btn-success h-25"
                @click.prevent="checkTodo(todo)"
            >
                <i class="pi pi-check"></i>
            </button>
            <div class="todo-info">
                <strong>{{ todo.title }}</strong>
                {{ todo.description }}
                <i>{{ todo.date.toLocaleDateString() }}</i>
            </div>
        </div>
        <div
            v-if="todo.status !== Status.completed"
            class="todo-buttons"
        >
            <button
                class="btn btn-primary me-2"
                @click.prevent="updateTodo(todo)"
            >
                <i class="pi pi-file-edit"></i>
            </button>
            <button
                class="btn btn-danger"
                @click.prevent="deleteTodo(todo)"
            >
                <i class="pi pi-times"></i>
            </button>
        </div>
    </div>
    <hr />
</template>

<script lang="ts" setup>
// Imports
import { type Todo, Status } from '@/types'
import { useTodoStore } from '@/store/index'

// Props
defineProps<{
    todo: Todo
}>()

// Consts
const todoStore = useTodoStore()

// Functions
function deleteTodo(todo: Todo) {
    todoStore.deleteTodo(todo)
}
function updateTodo(todo: Todo) {
    todoStore.updateTodo(todo)
}
function checkTodo(todo: Todo) {
    todoStore.checkTodo(todo)
}
</script>

<style scoped>
.todo-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

i {
    font-size: small;
}
.todo-info {
    display: flex;
    flex-direction: column;
}
.todo-buttons {
    display: flex;
    margin-right: 2rem;
    margin-left: 1rem;
}
</style>
