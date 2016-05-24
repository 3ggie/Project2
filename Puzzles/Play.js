
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();




var Menu = new PIXI.Text("Menu", {font:"20px Arial", fill:"white"});
Menu.x = 0;
Menu.y = 0;

Menu.interactive = true;
Menu.on('mousedown', onDownMenu);


function onDownMenu (eventData) {
    menu.play();
    animate();
}

var lvl1 = new PIXI.Text("LEVEL 1", {font:"25px Arial", fill:"white"});
lvl1.x = 50;
lvl1.y = 100;

lvl1.interactive = true;
lvl1.on('mousedown', onDownlvl1);


function onDownlvl1 (eventData) {
    sound2.play();
    animatelvl1();

}

var lvl2 = new PIXI.Text("LEVEL 2", {font:"25px Arial", fill:"white"});
lvl2.x = 50;
lvl2.y = 150;

lvl2.interactive = true;
lvl2.on('mousedown', onDownlvl2);


function onDownlvl2 (eventData) {
     sound2.play();
    animatelvl2();
}

var lvl3 = new PIXI.Text("LEVEL 3", {font:"25px Arial", fill:"white"});
lvl3.x = 50;
lvl3.y = 200;

lvl3.interactive = true;
lvl3.on('mousedown', onDownlvl3);


function onDownlvl3 (eventData) {
    sound2.play();
    animatelvl3();
}

var lvl4 = new PIXI.Text("LEVEL 4", {font:"25px Arial", fill:"white"});
lvl4.x = 50;
lvl4.y = 250;

lvl4.interactive = true;
lvl4.on('mousedown', onDownlvl4);


function onDownlvl4 (eventData) {
    sound2.play();
    animatelvl4();
}

var lvl5 = new PIXI.Text("LEVEL 5", {font:"25px Arial", fill:"white"});
lvl5.x = 50;
lvl5.y = 300;

lvl5.interactive = true;
lvl5.on('mousedown', onDownlvl5);


function onDownlvl5 (eventData) {
    sound2.play();
    animatelvl5();
}

var lvl6 = new PIXI.Text("LEVEL 6", {font:"25px Arial", fill:"white"});
lvl6.x = 50;
lvl6.y = 350;

lvl6.interactive = true;
lvl6.on('mousedown', onDownlvl6);


function onDownlvl6 (eventData) {
    sound2.play();
    animatelvl6();
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



function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
}
animatePlay();
