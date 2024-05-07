let player;

let borderLeft;

let borderRight;

let borderBottom;

let score = 0;

let bullets;

let enemies;

function setup() {
  
  new Canvas(500, 500);
  
  borderLeft = new Sprite(0,450, 0, 200, 'static');
  
  borderRight = new Sprite(500,450, 0, 200, 'static');
  
  borderBottom = new Sprite(200,500,499,10,'')
  
  player = new Sprite(255,450, 45, 20, '')
  
  bullets = new Group();
  
  enemies = new Group();
  
  bullets.color = 'teal ';

  bullets.diameter = 15;
 
  bullets.layer = -1;
  
  player.overlaps(bullets);
  
  enemies.overlaps(player, endGame);
  
  enemies.overlaps(borderBottom, losePoint);
  
  bullets.overlaps(enemies, scorePoint);
  
  enemies.diameter = 20;
  
  enemies.color = 'red';
  
}

function draw() {
    background('black');
  
    textSize(25);
  
    fill("purple");
  
    text('Score: '+ score,10,30);
  
  // player movement and speed 

    player.speed = 15;
  
  if (kb.pressing('left')){
    player.direction = 180;
    
  } 
  else if (kb.pressing('right')){
    player.direction = 0
    
  } 
  else {
    player.speed = 0;
    
  } 
  
  // bullet shooting and enemy spawning
  if (kb.presses('space')){
    
  let firedBullet = new bullets.Sprite(player.x,player.y);
  
  firedBullet.direction = 270;
 
  firedBullet.speed = 20; 
    
  }
  
  if (kb.presses('space')){
    
  let newEnemy = new enemies.Sprite()
  
    newEnemy.x = random(15,485)
    
    newEnemy.y = 0;
    
    newEnemy.direction = -270;
    
    newEnemy.speed = 2;
    
  }
  // win game after reaching 15 points
  if (score >= 15){
    gameWin();
  }
  
}

// if an enemy hits the player, end the game/loop
function endGame(){
  text('Click to Restart', 170,160);

  noLoop();
  
}

// make it so if an enemy is hit the enemy and bullet is removed and scores 1 point

function scorePoint(bullets, enemies){
  
  score++
  
  enemies.remove();
  
  bullets.remove();
  
}

// if the player misses an enemy it subtracts 2 points

function losePoint(enemies){
  score -= 2
  enemies.remove();
}

// restart the game

function mousePressed(){
  
  enemies.removeAll();
  
  bullets.removeAll();
  
  loop();
  
  score = 0;
  
  player.x = 255;
  
  player.y = 450;
  
}

// add win text for winning the game after 15 points

function gameWin(){
  text('\t\t\t\t\tYou Win! \n Double Click to restart', 130, 160);
  noLoop();
  
}




    