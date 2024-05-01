let player;

let borderLeft;

let borderRight;

let score = 0;

function setup() {
  
  new Canvas(500, 500);
  
  borderLeft = new Sprite(0,450, 0, 20, 'static');
  
  borderRight = new Sprite(500,450, 0, 20, 'static');
  
  player = new Sprite();
  
  player.x = 255;
  
  player.y = 450;
  
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
  if (player.collides(borderLeft)){
    player.speed = 0;
  }
  if (player.collides(borderRight)){
    player.speed = 0;
  }
      
    
  
  
  // 
  // if(player.overlaps(border1){
  //    player.speed = 0;
  //    }
  
  
  
}

    