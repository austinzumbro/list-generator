const Component = require("./component.js");

class TaskListItem extends Component {
    constructor(children, task, priority) {
        super(children);
        this.task = task;
        this.priority = priority;
    }

    render() {
        // What is this???
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${this.task}</li>`
        } else {
            return `<li class="tasks-item">${this.task}</li>`
        }
    }
}

module.exports = TaskListItem;