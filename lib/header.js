const Component = require("./component.js");
const datejs = require("./date.js");

const date = new Date();
const dateFormatted = datejs.formatDate(date);

class Header extends Component {
    render() {
        // What is this???
        return `<header class="header"><h1>Todo Today</h1><p>${dateFormatted}</p></header>`;
    }
}

module.exports = Header;