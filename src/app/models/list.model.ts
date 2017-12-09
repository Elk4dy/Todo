import { Todo } from '../models/todo.model';

export class List {
    id: number;
    name: string;
    todos: Todo[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
