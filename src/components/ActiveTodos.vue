<template>
    <div class="card shadow-lg p-0">
        <div class="card-header">
            <h4>To do</h4>
        </div>
        <div class="card-body">
            <ul>
                <li
                    v-for="todo in activeTodos"
                    :key="todo.id"
                >
                    <TodoItem
                        :todo="todo"
                        @update-todo="updateTodo($event)"
                    />
                </li>
            </ul>
        </div>
        <div class="card-footer">
            <form @submit.prevent="addTodo()">
                <div class="form-group mt-1">
                    <label for="title">Title</label>
                    <input
                        id="title"
                        v-model="newTodo.title"
                        class="form-control"
                        type="text"
                        required
                    />
                </div>
                <div class="form-group mt-1">
                    <label for="description">Description</label>
                    <input
                        id="description"
                        v-model="newTodo.description"
                        class="form-control"
                        type="text"
                        required
                    />
                </div>
                <div class="form-group mt-1">
                    <label for="date">Date</label>
                    <VueDatePicker
                        id="date"
                        v-model="newTodo.date"
                        locale="nl"
                        required
                    />
                </div>
                <button
                    class="btn btn-success mt-3"
                    type="submit"
                >
                    <i class="pi pi-plus"></i>
                    Add task
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Imports
import { reactive, ref, onMounted, toRaw } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { type Todo, initialState } from '@/types'
import { useTodoStore } from '@/store/index'
import TodoItem from '@/components/TodoItem.vue'

// Consts & Lets
const todoStore = useTodoStore()
const activeTodos = ref<Todo[]>([])
let newTodo = reactive<Todo>({
    ...initialState,
    id: uuidv4(),
    date: new Date()
})

// Hooks
onMounted(() => {
    activeTodos.value = todoStore.activeTodos
})

// Functions
function addTodo() {
    todoStore.addTodo(newTodo)
    newTodo = reactive<Todo>({
        ...initialState,
        id: uuidv4(),
        date: new Date()
    })
}
function updateTodo(selectedTodo: Todo) {
    todoStore.deleteTodo(selectedTodo)
    newTodo = toRaw(selectedTodo)
}
</script>

<style scoped lang="scss">
h4 {
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}
</style>
