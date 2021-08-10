#pragma strict
//EVI

public var speed : int = 9;
public var bullet : GameObject;

function Update () {

	
	rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * speed;
	
	if (Input.GetKeyDown("space") || Input.GetKeyDown("up")){
		
			Instantiate(bullet, transform.position, Quaternion.identity);
		
	}
}