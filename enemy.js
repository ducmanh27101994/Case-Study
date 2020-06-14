class Enemy {
    constructor(a,b,speed) {
        this.a = a;
        this.b = b;
        this.speed = speed;
    }
    creatEnemy() {
        let myCanvas = document.getElementById('myCanvas');
        let ctx = myCanvas.getContext('2d');
        let img = new Image;
        img.onload = function () {
            ctx.drawImage(img, 100, 200);
        };
        img.src = "image/stone.png";

    }
    move() {
        this.y += this.speed;
    }
}