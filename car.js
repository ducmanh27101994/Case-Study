class Car {
    constructor(x , y ,speed) {
        this.x = x
        this.y = y
        this.speed = speed;
    }

    creatCar() {
        let myCanvas = document.getElementById('myCanvas');
        let ctx = myCanvas.getContext('2d');
        let img = new Image;
        img.onload = function () {
            ctx.drawImage(img, 200, 500);
        };
        img.src = "image/car2.png"
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
}