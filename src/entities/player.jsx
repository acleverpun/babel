export default class Player extends godot.KinematicBody2D {
		constructor() {
				super(...arguments);
				this.speed = 50.0;
				this.runMod = 4.0;
				this.velocity = godot.Vector2.ZERO;
		}
		_ready() {
				console.log(this.name, "reporting for duty");
		}
		_physics_process(delta) {
				this.movement(delta);
		}
		movement(delta) {
				var speedMod = 1.0;
				this.velocity = godot.Vector2.ZERO;
				// @ts-ignore
				if (godot.Input.is_action_pressed("move.up"))
						this.velocity += godot.Vector2.UP;
				// @ts-ignore
				if (godot.Input.is_action_pressed("move.down"))
						this.velocity += godot.Vector2.DOWN;
				// @ts-ignore
				if (godot.Input.is_action_pressed("move.left"))
						this.velocity += godot.Vector2.LEFT;
				// @ts-ignore
				if (godot.Input.is_action_pressed("move.right"))
						this.velocity += godot.Vector2.RIGHT;
				if (godot.Input.is_action_pressed("move.run"))
						speedMod = this.runMod;
				this.velocity = this.velocity.normalized();
				// @ts-ignore
				this.move_and_slide(this.velocity * this.speed * speedMod);
		}
}
//# sourceMappingURL=player.jsx.map
