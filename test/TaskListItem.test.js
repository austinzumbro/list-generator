const TaskListItem = require("../lib/tasklistitem.js");

describe("Task List Item Rendering", () => {
    it("creates the html string as expected", () => {
        const children = [];
        const task = "This is a task.";
        const priority = false;
        const item = new TaskListItem(children, task, priority);
        expect(item.render()).toBe(`<li class="tasks-item">This is a task.</li>`)
    })

    it("adjusts class declaration if task is a priority", () => {
        const children = [];
        const task = "This is a task.";
        const priority = true;
        const item = new TaskListItem(children, task, priority);
        expect(item.render()).toBe(`<li class="tasks-item tasks-item-priority">This is a task.</li>`)
    })


})