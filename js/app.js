// Enemies our player must avoid
const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
//    this.velocity = Math.random() * 250 * velocity;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(this.x > 504) {
      this.x = -103;
    }
    //check collision between player & enemy
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
  		console.log('COLLISION');
      player.x = 200;
      player.y = 405;
    }
    if(player.y < 0) {
      showModal();
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function Player() {
  this.img = 'images/char-boy.png';
  this.x = 200;
  this.y = 405;
}
Player.prototype.update = function() {
}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.img), this.x, this.y);
}
Player.prototype.handleInput = function(move) {
  if(move === 'left' && this.x > 0) {
    this.x -= 101;
  }
  if(move === 'right' && this.x < 400) {
    this.x += 101;
  }
  if(move === 'up' && this.y > 0) {
    this.y -= 83;
  }
  if(move === 'down' && this.y < 400) {
    this.y += 83;
  }
//console.log to see the position of the Player
console.log("Player x: ", this.x, "Player y:", this.y)
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let enemy1 = new Enemy(-100, 63, 400);
let enemy2 = new Enemy(-100, 146, 300);
let enemy3 = new Enemy(-100, 229, 200);
let enemy4 = new Enemy(-100, 312, 100);
let allEnemies = [enemy1, enemy2, enemy3, enemy4];
let player = new Player('');
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
//winner Modal
function showModal() {
    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    //open the modal
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    //this is not working yet, need to update funcationality for closing modal
    span.onclick = function() {
       modal.style.display = "none";
       // When the user clicks anywhere outside of the modal, close it
       window.onclick = function(event) {
           if (event.target == modal) {
               modal.style.display = "none";
           }
       }
     }
}
