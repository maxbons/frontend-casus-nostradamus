<template>
    <div
        v-if="completedTodos.length"
        class="card shadow-lg p-0"
    >
        <div class="card-header">
            <h4>Completed tasks</h4>
        </div>
        <div class="card-body">
            <ul>
                <li
                    v-for="todo in completedTodos"
                    :key="todo.id"
                    class="d-flex justify-content-between mb-1"
                >
                    <p>{{ todo.title }}</p>
                    <button
                        class="btn btn-danger"
                        @click.prevent="unCheckTodo(todo)"
                        tooltip="uncheck item"
                    >
                        <i class="pi pi-check"></i>
                    </button>
                </li>
            </ul>
        </div>
        <div class="card-footer">
            <button
                class="btn btn-danger"
                @click.prevent="clearCompleted()"
            >
                Clear
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Imports
import { ref, onMounted } from 'vue'
import type { Todo } from '@/types'
import { useTodoStore } from '@/store/index'

// Consts & Lets
const todoStore = useTodoStore()
const completedTodos = ref<Todo[]>([])

// Hooks
onMounted(() => {
    completedTodos.value = todoStore.completedTodos
})

// Functions
function clearCompleted() {
    todoStore.clearCompleted()
    completedTodos.value = todoStore.completedTodos
}
function unCheckTodo(todo: Todo) {
    todoStore.unCheckTodo(todo)
}
</script>

<style scoped lang="scss">
ul {
    list-style: none;
    padding: 0;

    p {
        text-decoration: line-through;
        inline-size: 250px;
        overflow-wrap: break-word;

        @media (min-width: 992px) {
            inline-size: 350px;
        }
    }

    button {
        width: 40px;
        height: 40px;
    }
}
</style>
