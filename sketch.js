var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

var engine = Engine.create();
var world = engine.world;

var ellipses = [];
var ground;

function setup() {
  createCanvas(800, 800);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(400, 800, 800, 100, options);
  platform = Bodies.rectangle(300, 300, 500, 20, options);
  Matter.Body.rotate(platform, 120)
  World.add(world, ground);
  World.add(world, platform);
  Engine.run(engine);
  console.log(ground);
}

function mouseClicked() {
  ellipses.push(new Ellipse(mouseX, mouseY, random(10, 15)));
}

function mouseDragged() {
  ellipses.push(new Ellipse(mouseX, mouseY, random(10, 15)));
}

function draw() {
  background(60);
  for (var i = 0; i < ellipses.length; i++) {
    ellipses[i].draw();
  }
  push();
  fill(170);
  translate(ground.position.x, ground.position.y);
  noStroke();
  rectMode(CENTER);
  rect(0, 0, 800, 100);
  pop();

  push();
  fill(170);
  noStroke(255);
  rectMode(CENTER)
  translate(platform.position.x, platform.position.y);
  rotate(platform.angle)
  rect(0, 0, 500, 20);
  pop();
  Engine.update(engine);
}