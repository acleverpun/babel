export default class Player extends godot.Node {
	foo = "bar";

	_ready() {
		godot.print(this.name);
		godot.print(this.foo);
	}
}
