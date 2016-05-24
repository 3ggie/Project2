
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



var next = new PIXI.Text("Next LEVEL", {font:"20px Arial", fill:"white"});
next.x = 290;


next.interactive = true;
next.on('mousedown', nextlevel);


function nextlevel (eventData) {
    animatelvl5();
}


var back = new PIXI.Text("Go Back", {font:"20px Arial", fill:"white"});
back.x = 0;
back.y = 50;

back.interactive = true;
back.on('mousedown', backlevel);


function backlevel (eventData) {
    animatelvl3();
}



var level = new PIXI.Text("LEVEL 4", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;


var g = new PIXI.Texture.fromImage("alpha/alphabet7.png");
var gSprite = new PIXI.Sprite(g);

gSprite.anchor.x = 1;
gSprite.anchor.y = 1;
gSprite.position.x = 200;
gSprite.position.y = 350;

var y = new PIXI.Texture.fromImage("alpha/alphabet25.png");
var ySprite = new PIXI.Sprite(y);

ySprite.anchor.x = 1;
ySprite.anchor.y = 1;
ySprite.position.x = 300;
ySprite.position.y = 350;

var o = new PIXI.Texture.fromImage("alpha/alphabet15.png");
oSprite = new PIXI.Sprite(o);

oSprite.anchor.x = 1;
oSprite.anchor.y = 1;
oSprite.position.x = 150;
oSprite.position.y = 350;

var z = new PIXI.Texture.fromImage("alpha/alphabet26.png");
var zSprite = new PIXI.Sprite(z);

zSprite.anchor.x = 1;
zSprite.anchor.y = 1;
zSprite.position.x = 100;
zSprite.position.y = 350;

var a = new PIXI.Texture.fromImage("alpha/alphabet1.png");
var a4Sprite = new PIXI.Sprite(a);

a4Sprite.anchor.x = 1;
a4Sprite.anchor.y = 1;
a4Sprite.position.x = 250;
a4Sprite.position.y = 350;






//Container that holds my elements
stage4.addChild(playSprite);
stage4.addChild(Menu);
stage4.addChild(level);
stage4.addChild(gSprite);
stage4.addChild(ySprite);
stage4.addChild(oSprite);
stage4.addChild(zSprite);
stage4.addChild(a4Sprite);
stage4.addChild(next);
stage4.addChild(back);



function moveg(e){
   createjs.Tween.get(gSprite.position).to({x: 100, y: 200}, 1000, createjs.Ease.bounceOut);
}

gSprite.interactive = true;
gSprite.on('mousedown', moveg);

function movey(e){
   createjs.Tween.get(ySprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
}

ySprite.interactive = true;
ySprite.on('mousedown', movey);

function moveo(e){
   createjs.Tween.get(oSprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
}

oSprite.interactive = true;
oSprite.on('mousedown', moveo);

function movez(e){
   createjs.Tween.get(zSprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
}

zSprite.interactive = true;
zSprite.on('mousedown', movez);

function movea(e){
   createjs.Tween.get(a4Sprite.position).to({x: 300, y: 200}, 1000, createjs.Ease.bounceOut);
}

a4Sprite.interactive = true;
a4Sprite.on('mousedown', movea);










function animatelvl4() {
	requestAnimationFrame(animatelvl4);
	renderer.render(stage4);
}
animatelvl4();
