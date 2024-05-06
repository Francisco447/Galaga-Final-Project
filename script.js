let player;

let borderLeft;

let borderRight;

let score = 0;

let bullets;

let enemies;


function setup() {
  
  new Canvas(500, 500);
  
  borderLeft = new Sprite(0,450, 0, 200, 'static');
  
  borderRight = new Sprite(500,450, 0, 200, 'static');
  
  player = new Sprite(255,450, 45, 20, '')
  
  bullets = new Group();
  
  enemies = new Group();
  
  bullets.color = 'teal ';

  bullets.diameter = 15;
 
  bullets.layer = -1;
  
  player.overlaps(bullets);
  
  enemies.x = 200;
  
  enemies.y = 200;
  
  enemies.diameter = 20;
  
  // enemies.y -= 5;
  
  enemies.color = 'red';
  
}

function draw() {
    background('white');
     
    textSize(25);
  
    fill("purple");
  
    text('Score: '+ score,10,30);
  
    player.speed = 15;
  
  if (kb.pressing('left')){
    player.direction = 180;
    
  } else if (kb.pressing('right')){
    player.direction = 0
    
  } else {
    player.speed = 0;
    
  }
      
  if (kb.presses('space')){
    
  let firedBullet = new bullets.Sprite(player.x,player.y);
  
  firedBullet.direction = 270;
 
  firedBullet.speed = 20; 
    
  // bullets.life = 5;
  }
  
  if (kb.presses('space')){
  let newEnemy = new enemies.Sprite()
    newEnemy.x = random(0,500)
    newEnemy.y = 0
    newEnemy.direction = -270;
    newEnemy.speed = 2;
    
  }
  
 
  
  
  
  
  
  
  
  // if (enemies.overlaps(player)){
  //   gameOver()
  // }
}



    