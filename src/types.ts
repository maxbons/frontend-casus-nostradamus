export enum Status {
    active = 'Active',
    completed = 'Completed'
}

export interface Todo {
    id: string
    title: string
    description: string
    date: Date;
    status: Status
}

export const initialState = {
    id: '',
    title: '',
    description: '',
    date: null,
    status: Status.active
}