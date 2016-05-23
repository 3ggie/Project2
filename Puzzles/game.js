var gameport = document.getElementById("gameport");
//Refresh rate of browser
//Size of game
var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

/*Creating global variables, stages, and staging*/

var stage = new PIXI.Container();


PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("assets.json")
  .load(ready);

function ready() {

  var standing = new PIXI.Sprite(PIXI.Texture.fromFrame("alpha/alphabet1.png"));
  standing.scale.x = 4;
  standing.scale.y = 4;
  standing.position.x = 50;
  standing.position.y = 200;
  stage.addChild(standing);

  var frames = [];

  for (var i=1; i<=5; i++) {
    frames.push(PIXI.Texture.fromFrame('alpha/alphabet' + i + '.png'));
  }

  runner = new PIXI.extras.MovieClip(frames);
  runner.scale.x = 4;
  runner.scale.y = 4;
  runner.position.x = 200;
  runner.position.y = 200;
  runner.animationSpeed = 0.1;
  runner.play();
  stage.addChild(runner);
}





var Play = new PIXI.Text("Play", {font:"20px Arial", fill:"white"});
Play.position.x = 65;
Play.position.y = 200;

var Instructions = new PIXI.Text("How To Play", {font:"20px Arial", fill:"white"});
Instructions.x = 75;
Instructions.y = 220;

var Credits = new PIXI.Text("Credits", {font:"20px Arial", fill:"white"});
Credits.x = 85;
Credits.y = 240;

var Settings = new PIXI.Text("Settings", {font:"20px Arial", fill:"white"});
Settings.x = 95;
Settings.y = 260;



Play.interactive = true;
Play.on('mousedown', onDownPlay);
Play.on('touchstart', onDownPlay);


function onDownPlay (eventData) {
  	animatePlay();
}


Instructions.interactive = true;
Instructions.on('mousedown', onDownInst);
Instructions.on('touchstart', onDownInst);


function onDownInst (eventData) {

	  animateInstructions();
}

Credits.interactive = true;
Credits.on('mousedown', onDownCred);
Credits.on('touchstart', onDownCred);


function onDownCred (eventData) {

  	animateCredits();
}

Settings.interactive = true;
Settings.on('mousedown', onDownSett);
Settings.on('touchstart', onDownSett);


function onDownSett (eventData) {

    Settings.scale.x += 0.3;
  	Settings.scale.y += 0.3;
}





//orange Sprite
var orange = new PIXI.Texture.fromImage("orange.png");
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
stage.addChild(Settings);


function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();
