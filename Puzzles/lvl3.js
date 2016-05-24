
/*Creating global variables, stages, and staging*/

var stage3 = new PIXI.Container();

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
    animatelvl4();
}

var back = new PIXI.Text("Go Back", {font:"20px Arial", fill:"white"});
back.x = 0;
back.y = 50;

back.interactive = true;
back.on('mousedown', backlevel);


function backlevel (eventData) {
    animatelvl2();
}



var level = new PIXI.Text("LEVEL 3", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;




var h = new PIXI.Texture.fromImage("alpha/alphabet8.png");
var hSprite = new PIXI.Sprite(h);

hSprite.anchor.x = 1;
hSprite.anchor.y = 1;
hSprite.position.x = 150;
hSprite.position.y = 350;

var e = new PIXI.Texture.fromImage("alpha/alphabet5.png");
var e3Sprite = new PIXI.Sprite(e);

e3Sprite.anchor.x = 1;
e3Sprite.anchor.y = 1;
e3Sprite.position.x = 250;
e3Sprite.position.y = 350;

var l = new PIXI.Texture.fromImage("alpha/alphabet12.png");
var lSprite = new PIXI.Sprite(l);

lSprite.anchor.x = 1;
lSprite.anchor.y = 1;
lSprite.position.x = 100;
lSprite.position.y = 350;

var l2 = new PIXI.Texture.fromImage("alpha/alphabet12.png");
var l2Sprite = new PIXI.Sprite(l2);

l2Sprite.anchor.x = 1;
l2Sprite.anchor.y = 1;
l2Sprite.position.x = 200;
l2Sprite.position.y = 350;


var o = new PIXI.Texture.fromImage("alpha/alphabet15.png");
var o3Sprite = new PIXI.Sprite(o);

o3Sprite.anchor.x = 1;
o3Sprite.anchor.y = 1;
o3Sprite.position.x = 300;
o3Sprite.position.y = 350;



//Container that holds my elements
stage3.addChild(playSprite);
stage3.addChild(Menu);
stage3.addChild(level);
stage3.addChild(hSprite);
stage3.addChild(e3Sprite);
stage3.addChild(lSprite);
stage3.addChild(l2Sprite);
stage3.addChild(o3Sprite);
stage3.addChild(next);
stage3.addChild(back);



function moveh(e){
   createjs.Tween.get(hSprite.position).to({x: 100, y: 200}, 1000, createjs.Ease.bounceOut);
}

hSprite.interactive = true;
hSprite.on('mousedown', moveh);



function movee(e){
   createjs.Tween.get(e3Sprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
}
e3Sprite.interactive = true;
e3Sprite.on('mousedown', movee);

function movel(e){
   createjs.Tween.get(lSprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
}
lSprite.interactive = true;
lSprite.on('mousedown', movel);


function movel2(e){
   createjs.Tween.get(l2Sprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
}
l2Sprite.interactive = true;
l2Sprite.on('mousedown', movel2);


function moveo(e){
   createjs.Tween.get(o3Sprite.position).to({x: 300, y: 200}, 1000, createjs.Ease.bounceOut);
}
o3Sprite.interactive = true;
o3Sprite.on('mousedown', moveo);




function animatelvl3() {
	requestAnimationFrame(animatelvl3);
	renderer.render(stage3);
}
animatelvl3();
