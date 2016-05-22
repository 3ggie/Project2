
/*Creating global variables, stages, and staging*/

var stageInstructions = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"black"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}



var Instructions = new PIXI.Text("How To Play", {font:"20px Arial", fill:"black"});
Instructions.x = 75;
Instructions.y = 220;

Instructions.interactive = true;
Instructions.on('mousedown', onDownInst);
Instructions.on('touchstart', onDownInst);


function onDownInst (eventData) {

	  animateInstructions();
}



//Beach Sprite
var beach = new PIXI.Texture.fromImage("beach.png");
var beachSprite = new PIXI.Sprite(beach);

beachSprite.anchor.x = 0.5;
beachSprite.anchor.y = 0.5;

beachSprite.position.x = 200;
beachSprite.position.y = 200;

//Container that holds my elements
stageInstructions.addChild(beachSprite);
stageInstructions.addChild(Instructions);
stageInstructions.addChild(Menu);



function animateInstructions() {
	requestAnimationFrame(animateInstructions);
	renderer.render(stageInstructions);
}
animateInstructions();
