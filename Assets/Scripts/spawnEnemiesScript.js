#pragma strict

public var enemyOne : GameObject;
public var enemyTwo : GameObject;

public var spawnTimerForEnemy1 : float = 2;
public var spawnTimerForEnemy2 : float = 5;


function Start () {
	InvokeRepeating("addEnemyOne", spawnTimerForEnemy1, spawnTimerForEnemy1);
	InvokeRepeating("addEnemyTwo", spawnTimerForEnemy1, spawnTimerForEnemy2);
}

function addEnemyOne () {
	var x1 = transform.position.x - renderer.bounds.size.x/2;
	var x2 = transform.position.x + renderer.bounds.size.x/2;
	
	//pick random spawn point
	var spawnPosition = new Vector2(Random.Range(x1,x2), transform.position.y);
	
	Instantiate(enemyOne, spawnPosition, Quaternion.identity);
}

function addEnemyTwo () {
	var x1 = transform.position.x - renderer.bounds.size.x/2;
	var x2 = transform.position.x + renderer.bounds.size.x/2;
	
	//pick random spawn point
	var spawnPosition = new Vector2(Random.Range(x1,x2), transform.position.y);
	
	Instantiate(enemyTwo, spawnPosition, Quaternion.identity);
}