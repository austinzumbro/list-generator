// TODO: Import your Header, TaskList, and TaskListItem
const Header = require("./header.js");
const TaskList = require("./tasklist.js");
const TaskListItem = require("./tasklistitem.js");

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  const header = new Header();
  const taskItemArr = [];

  // TODO: Create new TaskListItems from the provided tasks
  for (let i = 0; i < tasks.length; i++) {
    let taskItem = new TaskListItem([], tasks[i].text, tasks[i].priority);
    taskItemArr.push(taskItem.render());
  }

  // TODO: Add TaskListItems to a new TaskList
  const taskList = new TaskList(taskItemArr);

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
        ${header}
        ${taskList.render()}
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
