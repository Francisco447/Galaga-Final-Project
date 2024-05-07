// The tool I used was P5Play to create a similar game to Galaga. I used variables to initialize
// the player, borders, enemies, bullets, and the score. I used several 'if' statements 
// throughout my project to execute actions, such as the character movement and the score counter. 
// There were a also couple of intermeditate concepts that I used while
// using P5Play, including sprites and groups which are similar to arrays.
// Groups were important in my project since they work similar to arrays and made it pretty 
// easy to create several instances of an object. The group is created in the setup and the way I made 
// my project, I had it created so everytime the space button is pressed a new sprite/object 
// within that group is created. Similar to popping an element in or out of an array, I made it so 
// whenever a bullet touches an enemy it deletes those intances/object of that group
// or when a new enemy sprite touches the bottom border it is deleted and the score subtracts 2. 
// Sprites are reffered to as "ghosts", which are used to create objects, in my example
// the player and the borders. A sprites appearance can be updated in several different
// way including, just changing its color, to being able to change its image and add 
// animation to the sprite. 

// created/initialized variables 

let player;

let borderLeft;

let borderRight;

let borderBottom;

let score = 0;

let bullets;

let enemies;

function setup() {
  
  new Canvas(500, 500);
  
  // created my border and character sprites with (x,y, width, height, 'collider')
  // static makes it so the sprite cannot be moved by other sprites. The player and 
  // bottom border do not have collider values set since the player moves so it cannot
  // stay static, and any enemy that touches the bottom border is removed.

  borderLeft = new Sprite(0,450, 0, 200, 'static');
  
  borderRight = new Sprite(500,450, 0, 200, 'static');
  
  borderBottom = new Sprite(200,500,499,10,'')
  
  player = new Sprite(255,450, 45, 20, '')
  
  // created my groups which will be used to create multiple sprites of bullets and enemies.

  bullets = new Group();
  
  enemies = new Group();
  
  bullets.color = 'teal ';

  bullets.diameter = 15;
 
  // set the layer to -1 for the bullets so the bullets are drawn 
  // before the player sprite which makes the design look better. 

  bullets.layer = -1;

  player.overlaps(bullets);
  
  // if enemy overlaps the player, call the endGame function

  enemies.overlaps(player, endGame);
  
  // if the enemy overlaps the border at the bottom the player loses two points

  enemies.overlaps(borderBottom, losePoint);
  
  // if the bullet overlaps/touches the enemy the player earns a point

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
  
  // bullet are spawned at the players x and y and move upwards
  if (kb.presses('space')){
    
  let firedBullet = new bullets.Sprite(player.x,player.y);
  
  firedBullet.direction = 270;
 
  firedBullet.speed = 20; 
    
  }
  
  // enemies are spawned at a random x 15-485(to avoid the side barriers and make the shooting easier),
 //  and move downwards

  if (kb.presses('space')){
    
  let newEnemy = new enemies.Sprite()
  
    newEnemy.x = random(15,485)
    
    newEnemy.y = 0;
    
    newEnemy.direction = -270;
    
    newEnemy.speed = 2;
    
  }
  // win game after reaching 15 points, calling the gameWin function
  if (score >= 15){
    gameWin();
  }
  
}

// if an enemy hits the player, end the game/loop
function endGame(){
  text('Click to Restart', 170,160);

  noLoop();
  
}

// make it so if an enemy is hit, the enemy and bullet are removed and scores 1 point

function scorePoint(bullets, enemies){
  
  score++
  
  enemies.remove();
  
  bullets.remove();
  
}

// if the player misses an enemy and it hits the bottom border it subtracts 2 points

function losePoint(enemies){

  score -= 2

  enemies.remove();
}

// restart the game/loop when the mouse is pressed, removing the entire bullet/enemies groups,
// resets the score, and resets the player to original location

function mousePressed(){
  
  enemies.removeAll();
  
  bullets.removeAll();
  
  loop();
  
  score = 0;
  
  player.x = 255;
  
  player.y = 450;
  
}

// add win text for winning/ending the game after reaching 15 points
// (\t) tab and (\n) new line for text to fit correctly

function gameWin(){

  text('\t\t\t\t\tYou Win! \n Double Click to restart', 130, 160);

  noLoop();
  
}




    