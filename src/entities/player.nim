import godot
import godotapi / [kinematic_body_2d, input]

gdobj Player of KinematicBody2D:
  var speed = 50.0
  var runMod = 4.0

  var velocity: Vector2

  method ready*() =
    print(self.name, " ", "reporting for duty")

  method physicsProcess*(delta: float64) =
    self.movement(delta)

  method movement(delta: float64) {.base.} =
    var speedMod = 1.0
    self.velocity = vec2(0, 0)

    if input.isActionPressed("move.up"): self.velocity += vec2(0, -1)
    if input.isActionPressed("move.down"): self.velocity += vec2(0, 1)
    if input.isActionPressed("move.left"): self.velocity += vec2(-1, 0)
    if input.isActionPressed("move.right"): self.velocity += vec2(1, 0)

    if input.isActionPressed("move.run"): speedMod = self.runMod

    self.velocity = self.velocity.normalized()

    discard self.moveAndSlide(self.velocity * self.speed * speedMod)
