export class TodoItem {
    constructor(todo) {
        this.todo = todo;
    }
    format() {
        const day = this.todo.createdAt.toLocaleString("en-US", { day: "numeric" });
        const month = this.todo.createdAt.toLocaleString("en-US", { month: "long" });
        const year = this.todo.createdAt.getFullYear();
        return `Complete ${this.todo.title.toUpperCase()}-${this.todo.body} on this date ${month} ${day}, ${year}`;
    }
}
