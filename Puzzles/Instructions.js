
/*Creating global variables, stages, and staging*/

var stageInstructions = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}



var Instructions = new PIXI.Text("Instructions:" + "\n" + "You must rearrange and move the letters into the cells" + "\n" + "Figure out what the series of letters spell that make up" + "\n" + "the actual word.", {font:"15px Arial", fill:"white"});
Instructions.x = 15;
Instructions.y = 220;



//Beach Sprite
var beach = new PIXI.Texture.fromImage("Instructions.png");
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
