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
        // console.log(this.getY());
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
