const Header = require("../lib/header.js");

describe("Header Class", () => {
    it("returns the date string correctly", () => {
        const header = new Header();
        const headerString = header.render();
        expect(headerString).toBe('<header class="header"><h1>Todo Today</h1><p>April 5, 2023</p></header>')
    })
})

