
/*Creating global variables, stages, and staging*/

var stage5 = new PIXI.Container();

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

var level = new PIXI.Text("LEVEL 5", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;









//Container that holds my elements
stage5.addChild(playSprite);
stage5.addChild(Menu);
stage5.addChild(level);




function animatelvl5() {
	requestAnimationFrame(animatelvl5);
	renderer.render(stage5);
}
animatelvl5();
