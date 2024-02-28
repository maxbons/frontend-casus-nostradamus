// Imports
import { defineStore } from "pinia";
import { type Todo, createDummyTodo, Status } from '@/types'

// Store
export const useTodoStore = defineStore({
    id: 'TodoStore',

    state: () => ({
        activeTodos: [] as Todo[],
        completedTodos: [] as Todo[],
    }),

    actions: ({
        addTodo(todo: Todo) {
            if(!todo) return 
            this.activeTodos.push(todo)
        },
        checkTodo(todo: Todo) {
            if (!todo) return
            const index = this.findIndexById(todo.id)

            if (index !== -1) {
                this.activeTodos[index].status = Status.completed;
                this.activeTodos.splice(index, 1)
                this.completedTodos.push(todo)
            }
        },
        updateTodo(todo: Todo) {
            if (!todo) return

            const index = this.findIndexById(todo.id)
            
            if (index !== -1) {
              this.activeTodos[index] = createDummyTodo()
            }
        },
        deleteTodo(todo: Todo) {
            const index = this.findIndexById(todo.id)
      
            if (index === -1) return
      
            this.activeTodos.splice(index, 1)
        },
        clearCompleted() {
            this.completedTodos = [] as Todo[]
        },
        findIndexById(id: string) {
            return this.activeTodos.findIndex((todo) => todo.id === id)
        },
    }),
})