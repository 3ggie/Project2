
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
    animate();
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

var b = new PIXI.Texture.fromImage("alpha/alphabet2.png");
var bSprite = new PIXI.Sprite(b);

bSprite.anchor.x = 1;
bSprite.anchor.y = 1;
bSprite.position.x = 250;
bSprite.position.y = 350;


var g = new PIXI.Texture.fromImage("alpha/alphabet7.png");
var gSprite = new PIXI.Sprite(g);

gSprite.anchor.x = 1;
gSprite.anchor.y = 1;
gSprite.position.x = 200;
gSprite.position.y = 350;



//Container that holds my elements
stage2.addChild(playSprite);
stage2.addChild(Menu);
stage2.addChild(level);
stage2.addChild(iSprite);
stage2.addChild(bSprite);
stage2.addChild(gSprite);

   function movei(e){
      createjs.Tween.get(iSprite.position).to({x: 200, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   iSprite.interactive = true;
   iSprite.on('mousedown', movei);



   function moveg(e){
      createjs.Tween.get(gSprite.position).to({x: 250, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   gSprite.interactive = true;
   gSprite.on('mousedown', moveg);

   function moveb(e){
      createjs.Tween.get(bSprite.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
   }

   bSprite.interactive = true;
   bSprite.on('mousedown', moveb);





function animatelvl2() {
	requestAnimationFrame(animatelvl2);
	renderer.render(stage2);
}
animatelvl2();
