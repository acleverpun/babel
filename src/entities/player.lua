local class = require 'lua.class' -- Import the system class library
godot.Node = require 'godot.Node' -- Make sure to import the base class

local Player = class.extends(godot.Node) -- Create the user subclass

function Player:_ready()
	prints("lua")
end

return Player
