
/*Creating global variables, stages, and staging*/

var stageCredits = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}




//Credits Sprite
var Credits = new PIXI.Texture.fromImage("CreditsB.png");
var CreditsSprite = new PIXI.Sprite(Credits);

CreditsSprite.anchor.x = 0.5;
CreditsSprite.anchor.y = 0.5;

CreditsSprite.position.x = 200;
CreditsSprite.position.y = 200;

//Container that holds my elements
stageCredits.addChild(CreditsSprite);

stageCredits.addChild(Menu);



function animateCredits() {
	requestAnimationFrame(animateCredits);
	renderer.render(stageCredits);
}
animateCredits();
