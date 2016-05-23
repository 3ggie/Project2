
/*Creating global variables, stages, and staging*/

var stageSettings = new PIXI.Container();


var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);
Menu.on('touchstart', onDownMenu);

function onDownMenu (eventData) {
    animate();
}




//Sett Sprite
var Sett = new PIXI.Texture.fromImage("SettingsB.png");
var SettSprite = new PIXI.Sprite(Sett);

SettSprite.anchor.x = 0.5;
SettSprite.anchor.y = 0.5;

SettSprite.position.x = 200;
SettSprite.position.y = 200;

//Container that holds my elements
stageSettings.addChild(SettSprite);

stageSettings.addChild(Menu);



function animateSettings() {
	requestAnimationFrame(animateSettings);
	renderer.render(stageSettings);
}
animateSettings();
