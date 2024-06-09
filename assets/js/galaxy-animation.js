"use strict";

Object.defineProperty(Element.prototype, 'outerHeight', {
    'get': function(){
        var height = this.clientHeight;
        var computedStyle = window.getComputedStyle(this);
        height += parseInt(computedStyle.marginTop, 10);
        height += parseInt(computedStyle.borderTopWidth, 10);
        height += parseInt(computedStyle.borderBottomWidth, 10);
        return height;
    }
});

let canvas = document.getElementById('canvas');
let banner =  document.getElementById('home-banner')

let ctx = canvas.getContext('2d');
let w;
let h;

let stars = [];
let count = 0;

const hue = 260;
const maxStars = 200;
const background = "black";

// Cache gradient
let canvas2 = document.createElement('canvas');
let ctx2 = canvas2.getContext('2d');

canvas2.width =  100;
canvas2.height = 100;

let half = canvas2.width/2;
let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

gradient2.addColorStop(0.025, '#fff');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 100%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 0%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function setSize() {
    w = canvas.width = document.getElementsByTagName("html")[0].clientWidth;
    h = canvas.height = banner.outerHeight;
}

setSize();

function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        let hold = max;
        max = min;
        min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x,y) {
    let max = Math.max(x,y),
        diameter = Math.round(Math.sqrt(max*max + max*max));
    return diameter/2;
}

let Star = function() {

    this.orbitRadius = random(maxOrbit(w/1.75,h/1.75));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 1000000;
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
}

Star.prototype.draw = function() {
    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}

for (let i = 0; i < maxStars; i++) {
    new Star();
}

function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
    };

    window.requestAnimationFrame(animation);
}

animation();

window.addEventListener('resize', () => {
    setSize();
    stars = [];
    count = 0;
    for (let i = 0; i < maxStars; i++) {
        new Star();
    }
});