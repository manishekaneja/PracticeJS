        var GRAVITY = 1;

        function ball(x_corr, y_corr, radius) {
            this.x_corr = x_corr;
            this.y_corr = y_corr;
            this.radius = radius;
            this.speed = 0;
            this.getX = function () {
                return this.x_corr;
            }
            this.getY = function () {
                return this.y_corr;
            }
            this.setX = function (x) {
                this.x_corr = x;
            }
            this.setY = function (y) {
                this.y_corr = y;
            }

            this.getRadius = function () {
                return this.radius;
            }
            this.move = function () {
                this.fall();
                //this.setX(this.getX() + 3);
                if (this.getX() + (this.getRadius()) >= 1448) {
                    this.setX(0);
                }
                console.log(this.getY());
            }
            this.fall = function () {
                if (this.getY() + this.speed <= 520) {
                    this.speed += GRAVITY;
                    this.setY(this.getY() + this.speed);
                } else {
                    this.setY(520);

                }
            }
            this.jump = function () {
                this.speed = -20;
            }


        }


        function building(height, width) {
            this.x_corr = 1448;
            this.y_corr = 540 - height;
            this.height = height;
            this.width = width;
            this.getX = function () {
                return this.x_corr;
            }
            this.getY = function () {
                return this.y_corr;
            }
            this.setX = function (x) {
                this.x_corr = x;
            }
            this.setY = function (y) {
                this.y_corr = y;
            }

            this.getHeight = function () {
                return this.height;
            }
            this.getWidth = function () {
                return this.width;
            }
            this.setHeight = function (x) {
                this.height = x;
            }
            this.setWidth = function (x) {
                this.width = x;
            }
            this.move = function () {
                this.setX(this.getX() - 5);
                if (this.getX() + (2 * this.getWidth()) <= 0) {
                    this.setX(1448);
                }
            }
        }



        function keyPressed() {
            c.jump();
        }

        function reduceLoad() {
            for (let a of b) {
                rect(a.getX(), a.getY(), a.getWidth(), a.getHeight());
                a.move();
                if (a.getX() + a.getWidth() < 0) {
                    b.shift();
                }

            }

            console.log("aaa");

        }



        var x = 1448;
        var y = 0;
        var height = 100;
        var width = 100;


        setInterval(function () {
            var tt = random(sample);
            b.push(new building(tt.x, tt.y));
        }, 1000);


        function setup() {
            createCanvas(1480, 720);

        }
        var sample = [{
            x: 100,
            y: 20

        }, {
            x: 200,
            y: 200

        }];
        var c = new ball(200, y, 20);
        var b = [];
        var d = new building(100, 20);

        function draw() {
            clear();
            strokeWeight(8);
            c.move();
            d.move();
            reduceLoad();
            console.log(b);
            ellipse(c.getX(), c.getY(), c.getRadius(), c.getRadius());
            rect(d.getX(), d.getY(), d.getWidth(), d.getHeight());
            line(0, 540, 1480, 540);




        }
