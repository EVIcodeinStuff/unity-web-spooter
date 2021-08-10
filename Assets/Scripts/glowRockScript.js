#pragma strict

public var moveRate : int = -7;

function Start () {
	rigidbody2D.velocity.y = moveRate;
	
	rigidbody2D.angularVelocity = Random.Range(-200, 200);

	Destroy(gameObject, 3);
}

function OnTriggerEnter2D(obj:Collider2D){
	var name = obj.gameObject.name;
	
	if (name == "bullet(Clone)") {
		Destroy(gameObject);
		Destroy(obj.gameObject);
	}
	
	if (name == "spaceship"){
		Destroy(gameObject);
	}
}