using Godot;
using System;

public class csharp : Node {
	// private int a = 2;
	// private string b = "text";

	public override void _Ready() {
		GD.Print(this.Name);
	}
}
