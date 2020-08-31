export default class Player extends godot.Node {
    constructor() {
        super(...arguments);
        this.foo = "bar";
    }
    _ready() {
        godot.print(this.name);
        godot.print(this.foo);
    }
}
//# sourceMappingURL=player.jsx.map