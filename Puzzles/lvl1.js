
/*Creating global variables, stages, and staging*/

var stagelvl1 = new PIXI.Container();




var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);


function onDownMenu (eventData) {
    animate();
}

var lvl1 = new PIXI.Text("lvl1", {font:"20px Arial", fill:"white"});
lvl1.x = 50;
lvl1.y = 100;

lvl1.interactive = true;
lvl1.on('mousedown', onDownlvl1);


function onDownlvl1 (eventData) {
    animatelvl1();

}

var lvl2 = new PIXI.Text("lvl2", {font:"20px Arial", fill:"white"});
lvl2.x = 100;
lvl2.y = 100;

lvl2.interactive = true;
lvl2.on('mousedown', onDownMenu);


function onDownlvl2 (eventData) {
    animate();
}

var lvl3 = new PIXI.Text("lvl3", {font:"20px Arial", fill:"white"});
lvl3.x = 150;
lvl3.y = 100;

lvl3.interactive = true;
lvl3.on('mousedown', onDownMenu);


function onDownlvl3 (eventData) {
    animate();
}

var lvl4 = new PIXI.Text("lvl4", {font:"20px Arial", fill:"white"});
lvl4.x = 200;
lvl4.y = 100;

lvl4.interactive = true;
lvl4.on('mousedown', onDownMenu);


function onDownlvl4 (eventData) {
    animate();
}

var lvl5 = new PIXI.Text("lvl5", {font:"20px Arial", fill:"white"});
lvl5.x = 250;
lvl5.y = 100;

lvl5.interactive = true;
lvl5.on('mousedown', onDownMenu);


function onDownlvl5 (eventData) {
    animate();
}

var lvl6 = new PIXI.Text("lvl6", {font:"20px Arial", fill:"white"});
lvl6.x = 50;
lvl6.y = 150;

lvl6.interactive = true;
lvl6.on('mousedown', onDownMenu);


function onDownlvl6 (eventData) {
    animate();
}

var lvl7 = new PIXI.Text("lvl7", {font:"20px Arial", fill:"white"});
lvl7.x = 100;
lvl7.y = 150;

lvl7.interactive = true;
lvl7.on('mousedown', onDownMenu);


function onDownlvl7 (eventData) {
    animate();
}

var lvl8 = new PIXI.Text("lvl8", {font:"20px Arial", fill:"white"});
lvl8.x = 150;
lvl8.y = 150;

lvl8.interactive = true;
lvl8.on('mousedown', onDownMenu);


function onDownlvl8 (eventData) {
    animate();
}

var lvl9 = new PIXI.Text("lvl9", {font:"20px Arial", fill:"white"});
lvl9.x = 200;
lvl9.y = 150;

lvl9.interactive = true;
lvl9.on('mousedown', onDownMenu);


function onDownlvl9 (eventData) {
    animate();
}

var lvl10 = new PIXI.Text("lvl10", {font:"20px Arial", fill:"white"});
lvl10.x = 250;
lvl10.y = 150;

lvl10.interactive = true;
lvl10.on('mousedown', onDownMenu);


function onDownlvl10 (eventData) {
    animate();
}












//play Sprite
var play = new PIXI.Texture.fromImage("PlayB.png");
var playSprite = new PIXI.Sprite(play);

playSprite.anchor.x = 0.5;
playSprite.anchor.y = 0.5;

playSprite.position.x = 200;
playSprite.position.y = 200;








PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("assets.json")
  .load(ready);

function ready() {

   var letteri = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet9.png'), 100, 100);

   letteri.anchor.x = 1;
   letteri.anchor.y = 1;
   letteri.position.x = 250;
   letteri.position.y = 350;
   var lettert = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet20.png'), 100, 100);
   lettert.anchor.x = 1;
   lettert.anchor.y = 1;
   lettert.position.x = 200;
   lettert.position.y = 350;

   stagelvl1.addChild(letteri);
   stagelvl1.addChild(lettert);

   function mouseHandler(e) {


     createjs.Tween.get(letteri.position).to({x: 100, y: 150}, 1000, createjs.Ease.bounceOut);


   }

   letteri.interactive = true;
   letteri.on('mousedown', mouseHandler);



   function moveT(e){
      createjs.Tween.get(lettert.position).to({x: 150, y: 150}, 1000, createjs.Ease.bounceOut);
   }

   lettert.interactive = true;
   lettert.on('mousedown', moveT);

}









/*  for (var i=1; i<=26; i++) {
    var letter = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet' + i + '.png'), 100, 100);
    letter.position.x = 200;
    letter.position.y = 350;
    alphaArray.push(letter);
    stagelvl1.addChild(letter);
  }*/







//Container that holds my elements
stagelvl1.addChild(playSprite);
stagelvl1.addChild(Menu);
stagelvl1.addChild(lvl1);
stagelvl1.addChild(lvl2);
stagelvl1.addChild(lvl3);
stagelvl1.addChild(lvl4);
stagelvl1.addChild(lvl5);
stagelvl1.addChild(lvl6);
stagelvl1.addChild(lvl7);
stagelvl1.addChild(lvl8);
stagelvl1.addChild(lvl9);
stagelvl1.addChild(lvl10);


function animatelvl1() {
	requestAnimationFrame(animatelvl1);
	renderer.render(stagelvl1);
}
animatelvl1();
