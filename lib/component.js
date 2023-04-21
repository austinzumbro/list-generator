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

module.exports = Component;