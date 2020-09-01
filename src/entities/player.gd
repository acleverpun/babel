extends KinematicBody2D

export var speed = 50.0
export var runMod = 4.0

var velocity := Vector2.ZERO

func _ready():
	prints(self.name, "reporting for duty")

func _physics_process(dt):
	movement(dt)

func movement(dt):
	var speedMod = 1.0
	velocity = Vector2.ZERO

	if Input.is_action_pressed("move.up"): velocity += Vector2.UP
	if Input.is_action_pressed("move.down"): velocity += Vector2.DOWN
	if Input.is_action_pressed("move.left"): velocity += Vector2.LEFT
	if Input.is_action_pressed("move.right"): velocity += Vector2.RIGHT

	if Input.is_action_pressed("move.run"): speedMod = runMod

	velocity = velocity.normalized()

	move_and_slide(velocity * speed * speedMod)
