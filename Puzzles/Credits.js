
/*Creating global variables, stages, and staging*/

var stageCredits = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"black"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}



var Credits = new PIXI.Text("Credits", {font:"20px Arial", fill:"black"});
Credits.x = 85;
Credits.y = 240;

Credits.interactive = true;
Credits.on('mousedown', onDownCred);
Credits.on('touchstart', onDownCred);


function onDownCred (eventData) {

    Credits.scale.x += 0.3;
    Credits.scale.y += 0.3;
}



//Beach Sprite
var beach = new PIXI.Texture.fromImage("beach.png");
var beachSprite = new PIXI.Sprite(beach);

beachSprite.anchor.x = 0.5;
beachSprite.anchor.y = 0.5;

beachSprite.position.x = 200;
beachSprite.position.y = 200;

//Container that holds my elements
stageCredits.addChild(beachSprite);
stageCredits.addChild(Credits);
stageCredits.addChild(Menu);



function animateCredits() {
	requestAnimationFrame(animateCredits);
	renderer.render(stageCredits);
}
animateCredits();
