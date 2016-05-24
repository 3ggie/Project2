var gameport = document.getElementById("gameport");
//Refresh rate of browser
//Size of game
var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

/*Creating global variables, stages, and staging*/

var stage = new PIXI.Container();


var Play = new PIXI.Text("Play", {font:"30px Arial", fill:"white"});
Play.position.x = 100;
Play.position.y = 200;

var Instructions = new PIXI.Text("How To Play", {font:"30px Arial", fill:"white"});
Instructions.x = 100;
Instructions.y = 250;

var Credits = new PIXI.Text("Credits", {font:"30px Arial", fill:"white"});
Credits.x = 100;
Credits.y = 300;




Play.interactive = true;
Play.on('mousedown', onDownPlay);
Play.on('touchstart', onDownPlay);


function onDownPlay (eventData) {
    sound1.play();
  	animatePlay();
}


Instructions.interactive = true;
Instructions.on('mousedown', onDownInst);
Instructions.on('touchstart', onDownInst);


function onDownInst (eventData) {
    sound1.play();
	  animateInstructions();
}

Credits.interactive = true;
Credits.on('mousedown', onDownCred);
Credits.on('touchstart', onDownCred);


function onDownCred (eventData) {
    sound1.play();
  	animateCredits();
}





//orange Sprite
var orange = new PIXI.Texture.fromImage("swagaram.png");
var orangeSprite = new PIXI.Sprite(orange);

orangeSprite.anchor.x = 0.5;
orangeSprite.anchor.y = 0.5;

orangeSprite.position.x = 200;
orangeSprite.position.y = 200;

//Container that holds my elements
stage.addChild(orangeSprite);
stage.addChild(Play);
stage.addChild(Instructions);
stage.addChild(Credits);



function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();
