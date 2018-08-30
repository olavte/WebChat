var W = window.innerWidth;
var H = window.innerHeight;

var canvas = document.getElementById("matrix");
var canvasCtx = canvas.getContext("2d");
canvas.width = W;
canvas.height = H;

var alphabeth = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLOMNOPQRSTUVWXYZÆØÅ123456789=+-*!?";

//max particles
var mp = 120;
var list = [];
for(var i = 0; i < mp; i++) {
    list.push({
        x: Math.random() * W,
        y: Math.random() * H,
        l: alphabeth.charAt(Math.round(Math.random() * alphabeth.length))
    });
}

function matrixAnimationLoop() {
    canvasCtx.beginPath();
    canvasCtx.fillStyle = "rgba(0,0,0,0.1)";
    canvasCtx.fillRect(0,0,W,H);
    for (var i = 0; i < mp; i++) {
        var p = list[i];
        canvasCtx.fillStyle = "#20C20E";
        canvasCtx.font = "16px Verdana";
        canvasCtx.fillText(p.l, p.x, p.y);
        p.y += 15;
        p.l = alphabeth.charAt(Math.round(Math.random() * alphabeth.length));
        if(p.y > H) {
            p.y = Math.random() * H - H;
        }
    }
}

var loop = setInterval(matrixAnimationLoop, 50);