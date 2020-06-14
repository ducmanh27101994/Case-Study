class Enemy {
    constructor(a,b,speed) {
        this.a = a;
        this.b = b;
        this.speed = speed;
    }
    // creatEnemy() {
    //     let myCanvas = document.getElementById('myCanvas');
    //     let ctx = myCanvas.getContext('2d');
    //     let img = new Image;
    //     img.onload = function () {
    //         ctx.drawImage(img, 100, 200);
    //     };
    //     img.src = "image/stone.png";
    // }

    move() {
        this.y += this.speed;
    }
    draw(canvas) {
        let img = document.getElementById('img1');
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.drawImage(img, this.a, this.b, 50, 50);
        pen.fill();
    }
}

function createEnemy() {
    let speed = Math.floor(Math.random() * 5 + 5);
    let x = Math.random() * window.innerWidth;
    let y = 0;

    let enemy = new Enemy(x, y, speed);
    enemy.draw(canvas);
    enemys.push(enemy);
}

function main() {
    pen.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < enemys.length; i++) {
        enemy[i].move();
        enemys[i].draw(canvas);
    }
    requestAnimationFrame(main);
}
