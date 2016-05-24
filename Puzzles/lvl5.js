
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



var next = new PIXI.Text("Next LEVEL", {font:"20px Arial", fill:"white"});
next.x = 290;


next.interactive = true;
next.on('mousedown', nextlevel);


function nextlevel (eventData) {
    animatelvl6();
}


var back = new PIXI.Text("Go Back", {font:"20px Arial", fill:"white"});
back.x = 0;
back.y = 50;

back.interactive = true;
back.on('mousedown', backlevel);


function backlevel (eventData) {
    animatelvl4();
}



var level = new PIXI.Text("LEVEL 5", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;



var a = new PIXI.Texture.fromImage("alpha/alphabet1.png");
var aSprite = new PIXI.Sprite(a);

aSprite.anchor.x = 1;
aSprite.anchor.y = 1;
aSprite.position.x = 250;
aSprite.position.y = 350;


var b = new PIXI.Texture.fromImage("alpha/alphabet2.png");
var bSprite = new PIXI.Sprite(b);

bSprite.anchor.x = 1;
bSprite.anchor.y = 1;
bSprite.position.x = 100;
bSprite.position.y = 350;

var j = new PIXI.Texture.fromImage("alpha/alphabet10.png");
var jSprite = new PIXI.Sprite(j);

jSprite.anchor.x = 1;
jSprite.anchor.y = 1;
jSprite.position.x = 200;
jSprite.position.y = 350;

var u = new PIXI.Texture.fromImage("alpha/alphabet21.png");
uSprite = new PIXI.Sprite(u);

uSprite.anchor.x = 1;
uSprite.anchor.y = 1;
uSprite.position.x = 150;
uSprite.position.y = 350;

var r = new PIXI.Texture.fromImage("alpha/alphabet18.png");
var rSprite = new PIXI.Sprite(r);

rSprite.anchor.x = 1;
rSprite.anchor.y = 1;
rSprite.position.x = 350;
rSprite.position.y = 350;

var e = new PIXI.Texture.fromImage("alpha/alphabet5.png");
var eSprite = new PIXI.Sprite(e);

eSprite.anchor.x = 1;
eSprite.anchor.y = 1;
eSprite.position.x = 300;
eSprite.position.y = 350;







//Container that holds my elements
stage5.addChild(playSprite);
stage5.addChild(Menu);
stage5.addChild(level);
stage5.addChild(aSprite);
stage5.addChild(bSprite);
stage5.addChild(jSprite);
stage5.addChild(uSprite);
stage5.addChild(rSprite);
stage5.addChild(eSprite);
stage5.addChild(next);
stage5.addChild(back);


function movea(e){
   createjs.Tween.get(aSprite.position).to({x: 100, y: 200}, 1000, createjs.Ease.bounceOut);
}

aSprite.interactive = true;
aSprite.on('mousedown', movea);

function moveb(e){
   createjs.Tween.get(bSprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
}

bSprite.interactive = true;
bSprite.on('mousedown', moveb);

function movej(e){
   createjs.Tween.get(jSprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
}

jSprite.interactive = true;
jSprite.on('mousedown', movej);

function moveu(e){
   createjs.Tween.get(uSprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
}

uSprite.interactive = true;
uSprite.on('mousedown', moveu);

function mover(e){
   createjs.Tween.get(rSprite.position).to({x: 300, y: 200}, 1000, createjs.Ease.bounceOut);
}

rSprite.interactive = true;
rSprite.on('mousedown', mover);


function movee(e){
   createjs.Tween.get(eSprite.position).to({x: 350, y: 200}, 1000, createjs.Ease.bounceOut);
}

eSprite.interactive = true;
eSprite.on('mousedown', movee);






function animatelvl5() {
	requestAnimationFrame(animatelvl5);
	renderer.render(stage5);
}
animatelvl5();
