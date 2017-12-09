export class Todo {
    id: number;
    content: string;
    created_at: Date;
    list_id: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
        this.created_at = new Date();
    }
}
