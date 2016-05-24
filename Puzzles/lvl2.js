
/*Creating global variables, stages, and staging*/

var stage2 = new PIXI.Container();

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



var next = new PIXI.Text("Next LEVEL", {font:"20px Arial", fill:"white"});
next.x = 290;


next.interactive = true;
next.on('mousedown', nextlevel);


function nextlevel (eventData) {
  traverse.play();
    animatelvl3();
}


var back = new PIXI.Text("Go Back", {font:"20px Arial", fill:"white"});
back.x = 0;
back.y = 50;

back.interactive = true;
back.on('mousedown', backlevel);


function backlevel (eventData) {
  traverse.play();
    animatelvl1();
}




var level = new PIXI.Text("LEVEL 2", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;




var i = new PIXI.Texture.fromImage("alpha/alphabet9.png");
var iSprite = new PIXI.Sprite(i);

iSprite.anchor.x = 1;
iSprite.anchor.y = 1;
iSprite.position.x = 300;
iSprite.position.y = 350;

var b1 = new PIXI.Texture.fromImage("alpha/alphabet2.png");
var b1Sprite = new PIXI.Sprite(b1);

b1Sprite.anchor.x = 1;
b1Sprite.anchor.y = 1;
b1Sprite.position.x = 250;
b1Sprite.position.y = 350;


var g1 = new PIXI.Texture.fromImage("alpha/alphabet7.png");
var g1Sprite = new PIXI.Sprite(g1);

g1Sprite.anchor.x = 1;
g1Sprite.anchor.y = 1;
g1Sprite.position.x = 200;
g1Sprite.position.y = 350;



//Container that holds my elements
stage2.addChild(playSprite);
stage2.addChild(Menu);
stage2.addChild(level);
stage2.addChild(iSprite);
stage2.addChild(b1Sprite);
stage2.addChild(g1Sprite);
stage2.addChild(next);
stage2.addChild(back);

   function movei(e){
     sound.play();
      createjs.Tween.get(iSprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   iSprite.interactive = true;
   iSprite.on('mousedown', movei);



   function moveg1(e){
     sound.play();
      createjs.Tween.get(g1Sprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   g1Sprite.interactive = true;
   g1Sprite.on('mousedown', moveg1);

   function moveb1(e){
     sound.play();
      createjs.Tween.get(b1Sprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   b1Sprite.interactive = true;
   b1Sprite.on('mousedown', moveb1);





function animatelvl2() {
	requestAnimationFrame(animatelvl2);
	renderer.render(stage2);
}
animatelvl2();
