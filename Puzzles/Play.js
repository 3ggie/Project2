
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"black"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}



var Play = new PIXI.Text("Play", {font:"20px Arial", fill:"black"});
Play.position.x = 65;
Play.position.y = 200;




Play.interactive = true;
Play.on('mousedown', onDownPlay);
Play.on('touchstart', onDownPlay);


function onDownPlay (eventData) {
  	animatePlay();
}




//Beach Sprite
var beach = new PIXI.Texture.fromImage("beach.png");
var beachSprite = new PIXI.Sprite(beach);

beachSprite.anchor.x = 0.5;
beachSprite.anchor.y = 0.5;

beachSprite.position.x = 200;
beachSprite.position.y = 200;

//Container that holds my elements
stagePlay.addChild(beachSprite);
stagePlay.addChild(Play);
stagePlay.addChild(Menu);



function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
}
animatePlay();
