export default class Javascript extends godot.Node {
	// Declare member variables here. Examples:
	a = 2;
	b = "text";

	// Called when the node enters the scene tree for the first time.
	_ready() {
		godot.print(this.name)
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {
	}
}
