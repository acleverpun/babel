using Godot;
using System;

public class player : KinematicBody2D {
	public float speed = 50F;
	public float runMod = 4F;

	private Vector2 velocity = Vector2.Zero;

	public override void _Ready() {
		GD.PrintS(this.Name, "reporting for duty");
	}

	public override void _PhysicsProcess(float delta) {
		movement(delta);
	}

	public void movement(float delta) {
		float speedMod = 1F;
		velocity = Vector2.Zero;

		if (Input.IsActionPressed("move.up")) velocity += Vector2.Up;
		if (Input.IsActionPressed("move.down")) velocity += Vector2.Down;
		if (Input.IsActionPressed("move.left")) velocity += Vector2.Left;
		if (Input.IsActionPressed("move.right")) velocity += Vector2.Right;

		if (Input.IsActionPressed("move.run")) speedMod = runMod;

		velocity = velocity.Normalized();

		MoveAndSlide(velocity * speed * speedMod);
	}
}
