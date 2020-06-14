class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    // creatEnemy() {
//     //     let myCanvas = document.getElementById('myCanvas');
//     //     let ctx = myCanvas.getContext('2d');
//     //     let img = new Image;
//     //     img.onload = function () {
//     //         ctx.drawImage(img, 100, 200);
//     //     };
//     //     img.src = "image/stone.png";
//     // }

    draw(canvas) {
        let img = document.getElementById('img1');
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.drawImage(img, this.x, this.y, 50, 50);
        pen.fill();
    }

    move() {
        this.y += this.speed;
    }
}