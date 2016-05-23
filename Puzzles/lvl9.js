
/*Creating global variables, stages, and staging*/

var stage9 = new PIXI.Container();

//play Sprite
var play = new PIXI.Texture.fromImage("PlayB.png");
var playSprite = new PIXI.Sprite(play);

playSprite.anchor.x = 0.5;
playSprite.anchor.y = 0.5;

playSprite.position.x = 200;
playSprite.position.y = 200;

var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);


function onDownMenu (eventData) {
    animate();
}










//Container that holds my elements
stage9.addChild(playSprite);
stage9.addChild(Menu);




function animatelvl9() {
	requestAnimationFrame(animatelvl9);
	renderer.render(stage9);
}
animatelvl9();
