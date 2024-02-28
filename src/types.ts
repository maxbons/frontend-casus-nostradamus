import { v4 as uuidv4 } from "uuid"
import * as faker from 'faker'

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

export function createDummyTodo(): Todo {
    return {
      id: uuidv4(),
      title: faker.lorem.sentence(),
      description: faker.lorem.words(),
      date: faker.date.future(),
      status: Status.active
    };
  }