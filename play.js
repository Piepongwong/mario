var canvas = document.getElementById("mario")
var ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
function background(img, speed, canvas, ctx) {

    this.speed = speed
    this.x = 0

    this.move = () => {
        this.x += this.speed;
        this.x %= img.width;
    }

    this.draw = () => {
        ctx.clearRect(0, 0, img.width, img.height)
        ctx.drawImage(img, this.x, 0)
        if (this.x < 0) {
            ctx.drawImage(img, this.x + img.width, 0);
        } else {
           ctx.drawImage(img, this.x - img.width, 0);
        }
    }
}
var img = new Image()
img.src = "./images/background.png"
var bg
img.onload = function () {

    canvas.width = img.width
    bg = new background(img, -1, canvas, ctx)

   function updateMario() {
        bg.move()
        bg.draw()
        requestAnimationFrame(updateMario)
    }
    updateMario()
}




