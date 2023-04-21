const Component = require("../index.js");

describe('Component Class', () => {
    it("throws an error if render() is called directly on the Component class", () => {
        const children = ["1", "2", "3"];
        const component = new Component(children);
        const cb = () => { component.render() }
        expect(cb).toThrow();
    })
})