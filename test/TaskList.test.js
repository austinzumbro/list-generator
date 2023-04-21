const TaskList = require("../lib/tasklist.js");

describe("Task List", () => {
    it("correctly renders an unordered list of tasks", () => {
        const children = ["<li>Task1</li>", "<li>Task2</li>"];
        const list = new TaskList(children);
        expect(list.render()).toBe(`<ul class="tasks"><li>Task1</li><li>Task2</li></ul>`);
    })
})