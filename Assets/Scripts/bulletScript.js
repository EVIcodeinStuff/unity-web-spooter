#pragma strict

public var rate : int = 7;

function Start () {
	rigidbody2D.velocity.y = rate;
}

function OnBecameInvisible() {
	Destroy(gameObject);
}