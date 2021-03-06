export default class Player extends godot.KinematicBody2D {
	speed = 50.0;
	runMod = 4.0;

	velocity = godot.Vector2.ZERO;

	_ready() {
		console.log(this.name, "reporting for duty");
	}

	_physics_process(delta: number) {
		this.movement(delta);
	}

	movement(_delta: number) {
		var speedMod = 1.0;
		this.velocity = godot.Vector2.ZERO;

		if (godot.Input.is_action_pressed("move.up")) (this.velocity as any) += godot.Vector2.UP;
		if (godot.Input.is_action_pressed("move.down")) (this.velocity as any) += godot.Vector2.DOWN;
		if (godot.Input.is_action_pressed("move.left")) (this.velocity as any) += godot.Vector2.LEFT;
		if (godot.Input.is_action_pressed("move.right")) (this.velocity as any) += godot.Vector2.RIGHT;

		if (godot.Input.is_action_pressed("move.run")) speedMod = this.runMod;

		this.velocity = this.velocity.normalized();

		// @ts-ignore
		this.move_and_slide(this.velocity * this.speed * speedMod);
	}
}
