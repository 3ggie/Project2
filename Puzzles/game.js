var gameport = document.getElementById("gameport");
//Refresh rate of browser
//Size of game
var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);

/*Creating global variables, stages, and staging*/

var stage = new PIXI.Container();




var Play = new PIXI.Text("Play", {font:"20px Arial", fill:"black"});
Play.position.x = 65;
Play.position.y = 200;

var Instructions = new PIXI.Text("How To Play", {font:"20px Arial", fill:"black"});
Instructions.x = 75;
Instructions.y = 220;

var Credits = new PIXI.Text("Credits", {font:"20px Arial", fill:"black"});
Credits.x = 85;
Credits.y = 240;

var Settings = new PIXI.Text("Settings", {font:"20px Arial", fill:"black"});
Settings.x = 95;
Settings.y = 260;





//Beach Sprite
var beach = new PIXI.Texture.fromImage("beach.png");
var beachSprite = new PIXI.Sprite(beach);

beachSprite.anchor.x = 0.5;
beachSprite.anchor.y = 0.5;

beachSprite.position.x = 200;
beachSprite.position.y = 200;

//Container that holds my elements
stage.addChild(beachSprite);
stage.addChild(Play);
stage.addChild(Instructions);
stage.addChild(Credits);
stage.addChild(Settings);

animate();
function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
