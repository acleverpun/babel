from godot import exposed, export
from godot import KinematicBody2D


@exposed
class player(KinematicBody2D):
		# member variables here, example:
		a = export(int)
		b = export(str, default='foo')

		def _ready(self):
				"""
				Called every time the node is added to the scene.
				Initialization here.
				"""
		pass
