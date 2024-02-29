<template>
    <div class="row gx-3 gy-3">
        <div class="col-md-6">
            <ActiveTodos />
        </div>
        <div class="col-md-6">
            <CompletedTodos />
        </div>
    </div>
</template>

<script lang="ts" setup>
// // Imports
import ActiveTodos from './ActiveTodos.vue'
import CompletedTodos from './CompletedTodos.vue'
</script>
