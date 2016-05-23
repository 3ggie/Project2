
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();




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
lvl2.on('mousedown', onDownlvl2);


function onDownlvl2 (eventData) {
    animatelvl2();
}

var lvl3 = new PIXI.Text("lvl3", {font:"20px Arial", fill:"white"});
lvl3.x = 150;
lvl3.y = 100;

lvl3.interactive = true;
lvl3.on('mousedown', onDownlvl3);


function onDownlvl3 (eventData) {
    animatelvl3();
}

var lvl4 = new PIXI.Text("lvl4", {font:"20px Arial", fill:"white"});
lvl4.x = 200;
lvl4.y = 100;

lvl4.interactive = true;
lvl4.on('mousedown', onDownlvl4);


function onDownlvl4 (eventData) {
    animatelvl4();
}

var lvl5 = new PIXI.Text("lvl5", {font:"20px Arial", fill:"white"});
lvl5.x = 250;
lvl5.y = 100;

lvl5.interactive = true;
lvl5.on('mousedown', onDownlvl5);


function onDownlvl5 (eventData) {
    animatelvl5();
}

var lvl6 = new PIXI.Text("lvl6", {font:"20px Arial", fill:"white"});
lvl6.x = 50;
lvl6.y = 150;

lvl6.interactive = true;
lvl6.on('mousedown', onDownlvl6);


function onDownlvl6 (eventData) {
    animatelvl6();
}

var lvl7 = new PIXI.Text("lvl7", {font:"20px Arial", fill:"white"});
lvl7.x = 100;
lvl7.y = 150;

lvl7.interactive = true;
lvl7.on('mousedown', onDownlvl7);


function onDownlvl7 (eventData) {
    animatelvl7();
}

var lvl8 = new PIXI.Text("lvl8", {font:"20px Arial", fill:"white"});
lvl8.x = 150;
lvl8.y = 150;

lvl8.interactive = true;
lvl8.on('mousedown', onDownlvl8);


function onDownlvl8 (eventData) {
    animatelvl8();
}

var lvl9 = new PIXI.Text("lvl9", {font:"20px Arial", fill:"white"});
lvl9.x = 200;
lvl9.y = 150;

lvl9.interactive = true;
lvl9.on('mousedown', onDownlvl9);


function onDownlvl9 (eventData) {
    animatelvl9();
}

var lvl10 = new PIXI.Text("lvl10", {font:"20px Arial", fill:"white"});
lvl10.x = 250;
lvl10.y = 150;

lvl10.interactive = true;
lvl10.on('mousedown', onDownlvl10);


function onDownlvl10 (eventData) {
    animatelvl10();
}












//play Sprite
var play = new PIXI.Texture.fromImage("PlayB.png");
var playSprite = new PIXI.Sprite(play);

playSprite.anchor.x = 0.5;
playSprite.anchor.y = 0.5;

playSprite.position.x = 200;
playSprite.position.y = 200;




/*  for (var i=1; i<=26; i++) {
    var letter = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet' + i + '.png'), 100, 100);
    letter.position.x = 200;
    letter.position.y = 350;
    alphaArray.push(letter);
    stagePlay.addChild(letter);
  }*/







//Container that holds my elements
stagePlay.addChild(playSprite);
stagePlay.addChild(Menu);
stagePlay.addChild(lvl1);
stagePlay.addChild(lvl2);
stagePlay.addChild(lvl3);
stagePlay.addChild(lvl4);
stagePlay.addChild(lvl5);
stagePlay.addChild(lvl6);
stagePlay.addChild(lvl7);
stagePlay.addChild(lvl8);
stagePlay.addChild(lvl9);
stagePlay.addChild(lvl10);


function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
}
animatePlay();
