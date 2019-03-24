function Ellipse(x, y, r) {
    var options = {
        friction: 0.2,
        restitution: 1,
        torque: 0.2,
        timeScale: 0.4
    }
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);

    this.radius = r;
    this.color = color(random(255), random(255), random(255));

    this.draw = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0, 0, this.radius);
        stroke(0);
        fill(255);
        line(0, 0, this.radius, 0);
        pop();
    }
}