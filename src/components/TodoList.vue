<template>
    <div class="row gx-3 gy-3">
        <div class="col-md-6">
            <div class="bg-light p-3 rounded">
                <h4>To do List:</h4>
                <ul>
                    <li
                        v-for="todo in activeTodos"
                        :key="todo.id"
                    >
                        <ListItem :todo="todo" />
                    </li>
                </ul>
                <button
                    class="btn btn-success"
                    @click.prevent="addTodo()"
                >
                    <i class="pi pi-plus"></i>
                    Add todo
                </button>
            </div>
        </div>
        <div
            v-if="completedTodos.length"
            class="col-md-6"
        >
            <div class="bg-light p-3 rounded">
                <h4>Completed</h4>
                <ul>
                    <li
                        v-for="todo in completedTodos"
                        :key="todo.id"
                    >
                        <p>{{ todo.title }}</p>
                    </li>
                </ul>
                <button
                    class="btn btn-danger"
                    @click.prevent="clearCompleted()"
                >
                    Clear
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// Imports
import { ref, onMounted } from 'vue'
import { type Todo, createDummyTodo } from '@/types'
import { useTodoStore } from '@/store/index'
import ListItem from '@/components/ListItem.vue'

// Consts
const activeTodos = ref<Todo[]>([])
const completedTodos = ref<Todo[]>([])
const todoStore = useTodoStore()

// Hooks
onMounted(() => {
    activeTodos.value = todoStore.activeTodos
    completedTodos.value = todoStore.completedTodos
})

// Functions
function addTodo() {
    todoStore.addTodo(createDummyTodo())
}
function clearCompleted() {
    todoStore.clearCompleted()
    completedTodos.value = todoStore.completedTodos
}
</script>

<style scoped>
h4 {
    margin-bottom: 1rem;
}

ul {
    list-style: none;
    padding: 0;
}

p {
    text-decoration: line-through;
}
</style>
