// Imports
import { defineStore } from "pinia";
import { type Todo, Status } from '@/types'

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
            const index = this.findIndexById(Status.active, todo.id)

            if (index !== -1) {
                this.activeTodos[index].status = Status.completed;
                this.completedTodos.push(todo)
                this.activeTodos.splice(index, 1)
            }
        },
        unCheckTodo(todo: Todo) {
            if(!todo) return

            if (!todo) return
            const index = this.findIndexById(Status.completed, todo.id)

            if (index !== -1) {
                this.completedTodos[index].status = Status.active;
                this.completedTodos.splice(index, 1)
                this.activeTodos.push(todo)
            }
        },
        deleteTodo(todo: Todo) {
            const index = this.findIndexById(Status.active, todo.id)
      
            if (index === -1) return
      
            this.activeTodos.splice(index, 1)
        },
        clearCompleted() {
            this.completedTodos = [] as Todo[]
        },
        findIndexById(status: Status, id: string) {
            const statusArray = (status === Status.active)
                ? this.activeTodos
                : this.completedTodos

            return statusArray.findIndex((todo) => todo.id === id)
        },
    }),
})