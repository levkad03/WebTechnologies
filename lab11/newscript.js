var variable = document.getElementById("MyCanvas");
var ctx = variable.getContext('2d');


ctx.strokeStyle = "red";
ctx.strokeRect(15, 15, 266, 266);

ctx.strokeRect(17.5, 17.5, 260, 260);
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.strokeRect(60, 60, 50, 50);
ctx.strokeRect(180, 60, 50, 50);
ctx.strokeRect(60, 170, 50, 60);
ctx.strokeRect(180,170, 50, 60);

ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
for (i=50; i<275; i+=25){
  ctx.strokeRect(i, 35, 2, 2);
} // горизонтальные точки

for (i=175; i<275; i+=25){
  ctx.strokeRect(i, 135, 2, 2);
} // горизонтальные точки вправо

for (i=50; i<100; i+=25){
  ctx.strokeRect(i, 135, 2, 2);
} // горизонтальные точки влево

for (i=60; i<275; i+=25){
  ctx.strokeRect(150, i, 2, 2);
} // вертикальные точки

for (i=60; i<275; i+=25){
    ctx.strokeRect(250, i, 2, 2);
} 

for (i=175; i<275; i+=25){
    ctx.strokeRect(i, 260, 2, 2);
}  
for (i=50; i<200; i+=25){
    ctx.strokeRect(i, 260, 2, 2);
}

for (i=60; i<275; i+=25){
    ctx.strokeRect(25, i, 2, 2);
  }

var gradient1 = ctx.createLinearGradient(5, 0, 50, 0);
// Добавляем два цвета
gradient1.addColorStop(0, "aqua");
gradient1.addColorStop(1, "crimson");

// pacman
ctx.beginPath();
ctx.arc(40, 37.5, 15, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(40, 37.5);
ctx.fillStyle = gradient1;
ctx.fill();
ctx.closePath();
ctx.stroke();




// ghost
var gradient2 = ctx.createLinearGradient(95, 135, 130, 135);
gradient2.addColorStop(0, "magenta");
gradient2.addColorStop(1, "aqua");

var radius = 15;
var angle = Math.PI/180;
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(112.5,135, radius, angle * 180, angle * 0, false);
ctx.lineTo(127.5, 150);
ctx.lineTo(123.75, 142);
ctx.lineTo(120, 150);
ctx.lineTo(116.25, 142);
ctx.lineTo(112.5, 150);
ctx.lineTo(108.75, 142);
ctx.lineTo(105, 150);
ctx.lineTo(101.25, 142);
ctx.lineTo(97.5, 150);
ctx.lineTo(97.5, 135);
ctx.fillStyle = gradient2;
ctx.fill();
ctx.closePath();
ctx.stroke();

// ghost eyes
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(105, 135, 3, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.arc(120, 135, 3, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();


// label
ctx.fillStyle = "navy";
ctx.font = "24px serif";
ctx.fillText("Pac-Man", 115,310);