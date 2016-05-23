
/*Creating global variables, stages, and staging*/

var stage4 = new PIXI.Container();

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


var level = new PIXI.Text("LEVEL 4", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;


var g = new PIXI.Texture.fromImage("alpha/alphabet7.png");
var gSprite = new PIXI.Sprite(g);

gSprite.anchor.x = 1;
gSprite.anchor.y = 1;
gSprite.position.x = 150;
gSprite.position.y = 350;

var y = new PIXI.Texture.fromImage("alpha/alphabet8.png");
var ySprite = new PIXI.Sprite(y);

ySprite.anchor.x = 1;
ySprite.anchor.y = 1;
ySprite.position.x = 150;
ySprite.position.y = 350;

var o = new PIXI.Texture.fromImage("alpha/alphabet8.png");
varohSprite = new PIXI.Sprite(o);

oSprite.anchor.x = 1;
oSprite.anchor.y = 1;
oSprite.position.x = 150;
oSprite.position.y = 350;

var z = new PIXI.Texture.fromImage("alpha/alphabet8.png");
var zSprite = new PIXI.Sprite(z);

zSprite.anchor.x = 1;
zSprite.anchor.y = 1;
zSprite.position.x = 150;
zSprite.position.y = 350;

var a = new PIXI.Texture.fromImage("alpha/alphabet8.png");
var aSprite = new PIXI.Sprite();

aSprite.anchor.x = 1;
aSprite.anchor.y = 1;
aSprite.position.x = 150;
aSprite.position.y = 350;






//Container that holds my elements
stage4.addChild(playSprite);
stage4.addChild(Menu);
stage4.addChild(level);
stage4.addChild(gSprite);
stage4.addChild(ySprite);
stage4.addChild(oSprite);
stage4.addChild(zSprite);
stage4.addChild(aSprite);





function animatelvl4() {
	requestAnimationFrame(animatelvl4);
	renderer.render(stage4);
}
animatelvl4();
