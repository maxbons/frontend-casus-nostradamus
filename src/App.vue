<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
    <main class="gradient-bg">
        <div class="logo">
            <img
                class="rounded"
                src="./assets/nostradamus-logo.png"
                alt="nostradamus logo"
            />
        </div>
        <div class="container p-5">
            <TodoList />
        </div>
    </main>
</template>

<style scoped>
main {
    min-height: 100vh;
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
    background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
}

.logo {
    text-align: center;
}

.logo img {
    margin-top: 2rem;
}
</style>
