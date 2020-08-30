export default class JavaScript extends godot.Node {
	a = 2;
	b = "text";

	_ready() {
		godot.print(this.name)
	}
}
