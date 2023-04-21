const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();

class Component {
    constructor(children) {
        if (!children) {
            this.children = [];
        } else {
            this.children = children;
        }

    }

    render() {
        throw new Error("Child class must implement render() method.");
    }

    renderInnerHTML() {
        for (let i = 0; i < this.children.length; i++) {
            if (typeof this.children[i] !== "STRING") {
                this.children[i].render();
            }
        }
    }
}

class Header extends Component {
    render() {
        // What is this???
        return `<header class="header" ><h1>Todo Today</h1><p>${DATE_HERE}</p></header >`;
    }
}

class TaskListItem extends Component {
    constructor(children, priority) {
        super(children);
        this.priority = priority;
    }

    render() {
        // What is this???
        if (this.priority) {
            return `<li class="tasks-item tasks-item-priority">${INNER_HTML}</li>`
        } else {
            return `<li class="tasks-item">${INNER_HTML}</li>`
        }
    }
}

class TaskList extends Component {
    constructor(children) {
        super(children);
    }

    render() {
        // What is this???
        return `<ul class="tasks">${INNER_HTML}</ul>`
    }
}

module.exports = Component;