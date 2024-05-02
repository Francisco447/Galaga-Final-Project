let player;

let borderLeft;

let borderRight;

let score = 0;

let bullets = [];

function setup() {
  
  new Canvas(500, 500);
  
  borderLeft = new Sprite(0,450, 0, 20, 'static');
  
  borderRight = new Sprite(500,450, 0, 20, 'static');
  
  player = new Sprite(255,450, 75, 30, '');

  bullets = new Sprite();

  bullets.color = 'red';

  bullets.y = 450;

  bullets.x = 255;

  bullets.diameter = 15;
  
  // player.x = 255;
  
  // player.y = 450;

  player.overlaps(bullets);
  
}

function draw() {
    background('black');
     
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
  
  bullets.direction = 250;

  bullets.speed = 2; 
  }
  
  
  
}

    