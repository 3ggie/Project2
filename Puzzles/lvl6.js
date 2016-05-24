
/*Creating global variables, stages, and staging*/

var stage6 = new PIXI.Container();

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
  menu.play();
    animate();
}


var back = new PIXI.Text("Go Back", {font:"20px Arial", fill:"white"});
back.x = 0;
back.y = 50;

back.interactive = true;
back.on('mousedown', backlevel);


function backlevel (eventData) {
    traverse.play();
    animatelvl5();
}



var level = new PIXI.Text("LEVEL 6", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;


var t = new PIXI.Texture.fromImage("alpha/alphabet20.png");
var tSprite = new PIXI.Sprite(t);

tSprite.anchor.x = 1;
tSprite.anchor.y = 1;
tSprite.position.x = 200;
tSprite.position.y = 350;


var o = new PIXI.Texture.fromImage("alpha/alphabet15.png");
var o6Sprite = new PIXI.Sprite(o);

o6Sprite.anchor.x = 1;
o6Sprite.anchor.y = 1;
o6Sprite.position.x = 50;
o6Sprite.position.y = 350;

var e = new PIXI.Texture.fromImage("alpha/alphabet5.png");
var e6Sprite = new PIXI.Sprite(e);

e6Sprite.anchor.x = 1;
e6Sprite.anchor.y = 1;
e6Sprite.position.x = 400;
e6Sprite.position.y = 350;

var n = new PIXI.Texture.fromImage("alpha/alphabet14.png");
n6Sprite = new PIXI.Sprite(n);

n6Sprite.anchor.x = 1;
n6Sprite.anchor.y = 1;
n6Sprite.position.x = 250;
n6Sprite.position.y = 350;

var a = new PIXI.Texture.fromImage("alpha/alphabet1.png");
var a6Sprite = new PIXI.Sprite(a);

a6Sprite.anchor.x = 1;
a6Sprite.anchor.y = 1;
a6Sprite.position.x = 350;
a6Sprite.position.y = 350;

var i = new PIXI.Texture.fromImage("alpha/alphabet9.png");
var i6Sprite = new PIXI.Sprite(i);

i6Sprite.anchor.x = 1;
i6Sprite.anchor.y = 1;
i6Sprite.position.x = 100;
i6Sprite.position.y = 350;


var l = new PIXI.Texture.fromImage("alpha/alphabet12.png");
var l6Sprite = new PIXI.Sprite(l);

l6Sprite.anchor.x = 1;
l6Sprite.anchor.y = 1;
l6Sprite.position.x = 150;
l6Sprite.position.y = 350;



var s = new PIXI.Texture.fromImage("alpha/alphabet19.png");
var s6Sprite = new PIXI.Sprite(s);

s6Sprite.anchor.x = 1;
s6Sprite.anchor.y = 1;
s6Sprite.position.x = 300;
s6Sprite.position.y = 350;








//Container that holds my elements
stage6.addChild(playSprite);
stage6.addChild(Menu);
stage6.addChild(level);
stage6.addChild(tSprite);
stage6.addChild(o6Sprite);
stage6.addChild(e6Sprite);
stage6.addChild(n6Sprite);
stage6.addChild(a6Sprite);
stage6.addChild(i6Sprite);
stage6.addChild(l6Sprite);
stage6.addChild(s6Sprite);
stage6.addChild(back);


function movet(e){
  sound.play();
   createjs.Tween.get(tSprite.position).to({x: 50, y: 200}, 1000, createjs.Ease.bounceOut);
}

tSprite.interactive = true;
tSprite.on('mousedown', movet);

function moveo(e){
  sound.play();
   createjs.Tween.get(o6Sprite.position).to({x: 100, y: 200}, 1000, createjs.Ease.bounceOut);
}

o6Sprite.interactive = true;
o6Sprite.on('mousedown', moveo);

function movee(e){
  sound.play();
   createjs.Tween.get(e6Sprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
}

e6Sprite.interactive = true;
e6Sprite.on('mousedown', movee);

function moven(e){
  sound.play();
   createjs.Tween.get(n6Sprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
}

n6Sprite.interactive = true;
n6Sprite.on('mousedown', moven);

function movea(e){
  sound.play();
   createjs.Tween.get(a6Sprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
}

a6Sprite.interactive = true;
a6Sprite.on('mousedown', movea);


function movei(e){
  sound.play();
   createjs.Tween.get(i6Sprite.position).to({x: 300, y: 200}, 1000, createjs.Ease.bounceOut);
}

i6Sprite.interactive = true;
i6Sprite.on('mousedown', movei);

function movel(e){
  sound.play();
   createjs.Tween.get(l6Sprite.position).to({x: 350, y: 200}, 1000, createjs.Ease.bounceOut);
}

l6Sprite.interactive = true;
l6Sprite.on('mousedown', movel);

function moves(e){
  sound.play();
   createjs.Tween.get(s6Sprite.position).to({x: 400, y: 200}, 1000, createjs.Ease.bounceOut);
}

s6Sprite.interactive = true;
s6Sprite.on('mousedown', moves);




function animatelvl6() {
	requestAnimationFrame(animatelvl6);
	renderer.render(stage6);
}
animatelvl6();
