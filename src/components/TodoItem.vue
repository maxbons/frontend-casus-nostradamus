<template>
    <div class="todo-wrapper">
        <div class="todo-content">
            <strong>{{ todo.title }}</strong>
            {{ todo.description }}
            <i>
                {{ todo.date.toLocaleDateString() }} -
                {{ todo.date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) }}
            </i>
        </div>
        <div class="d-flex">
            <button
                class="btn btn-success me-2"
                @click.prevent="checkTodo(todo)"
            >
                <i class="pi pi-check"></i>
            </button>
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
import { type Todo } from '@/types'
import { useTodoStore } from '@/store/index'

// Props
defineProps<{
    todo: Todo
}>()

// Consts
const todoStore = useTodoStore()
const emit = defineEmits(['updateTodo'])

// Functions
function deleteTodo(todo: Todo) {
    todoStore.deleteTodo(todo)
}
function updateTodo(todo: Todo) {
    emit('updateTodo', todo)
}
function checkTodo(todo: Todo) {
    todoStore.checkTodo(todo)
}
</script>

<style lang="scss">
.todo-wrapper {
    @extend .d-flex;
    @extend .flex-column;
    @extend .flex-lg-row;
    @extend .justify-content-between;
    @extend .align-items-start;
    @extend .gap-3;

    .todo-content {
        @extend .d-flex;
        @extend .flex-column;

        inline-size: 250px;
        overflow-wrap: break-word;

        @media (min-width: 992px) {
            inline-size: 300px;
        }
    }

    i {
        font-size: small;
    }

    button {
        width: 40px;
        height: 40px;
    }
}
</style>
