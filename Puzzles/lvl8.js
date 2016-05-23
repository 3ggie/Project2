
/*Creating global variables, stages, and staging*/

var stage8 = new PIXI.Container();

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
stage8.addChild(playSprite);
stage8.addChild(Menu);




function animatelvl8() {
	requestAnimationFrame(animatelvl8);
	renderer.render(stage8);
}
animatelvl8();
