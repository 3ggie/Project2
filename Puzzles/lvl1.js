
/*Creating global variables, stages, and staging*/

var stage1 = new PIXI.Container();



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
    animatePlay();
}



var level = new PIXI.Text("LEVEL 1", {font:"20px Arial", fill:"white"});

level.x = 150;
level.y = 100;


var next = new PIXI.Text("Next LEVEL", {font:"20px Arial", fill:"white"});
next.x = 290;


next.interactive = true;
next.on('mousedown', nextlevel);


function nextlevel (eventData) {
  traverse.play();
    animatelvl2();
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
  .add("MoveLetters.wav")
  .add("Select.wav")
  .add("Level.wav")
  .add("Traverse.wav")
  .add("Menu.wav")
  .load(ready);


var sound;
var sound1;
var sound2;
var traverse;
var menu
function ready() {
  sound = PIXI.audioManager.getAudio("MoveLetters.wav");
  sound1 = PIXI.audioManager.getAudio("Select.wav");
  sound2 = PIXI.audioManager.getAudio("Level.wav");
  traverse = PIXI.audioManager.getAudio("Traverse.wav");
  menu = PIXI.audioManager.getAudio("Menu.wav");



   var letterh = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet8.png'), 100, 100);

   letterh.anchor.x = 1;
   letterh.anchor.y = 1;
   letterh.position.x = 250;
   letterh.position.y = 350;
   var letteri = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet9.png'), 100, 100);
   letteri.anchor.x = 1;
   letteri.anchor.y = 1;
   letteri.position.x = 200;
   letteri.position.y = 350;

   stage1.addChild(letterh);
   stage1.addChild(letteri);

   function mouseHandler(e) {



     createjs.Tween.get(letterh.position).to({x: 100, y: 200}, 1000, createjs.Ease.bounceOut);
     sound.play();


   }

   letterh.interactive = true;
   letterh.on('mousedown', mouseHandler);



   function moveT(e){

      createjs.Tween.get(letteri.position).to({x: 150, y: 200}, 1000, createjs.Ease.bounceOut);
      sound.play();
   }

   letteri.interactive = true;
   letteri.on('mousedown', moveT);

}









/*  for (var i=1; i<=26; i++) {
    var letter = new PIXI.Sprite(PIXI.Texture.fromFrame('alphabet' + i + '.png'), 100, 100);
    letter.position.x = 200;
    letter.position.y = 350;
    alphaArray.push(letter);
    stage1.addChild(letter);
  }*/







//Container that holds my elements
stage1.addChild(playSprite);
stage1.addChild(Menu);
stage1.addChild(level);
stage1.addChild(next);
stage1.addChild(back);



function animatelvl1() {
	requestAnimationFrame(animatelvl1);
	renderer.render(stage1);
}
animatelvl1();
