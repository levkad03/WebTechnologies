var example = document.getElementById("MyCanvas");
var ctx = example.getContext('2d');
example.width = 300;
example.height = 300;
ctx.strokeStyle = 'black';
ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(18, 18, 260, 260);
ctx.fillStyle = 'black';
ctx.fillRect(20, 20, 256, 256);
for (i=0; i<8; i+=2){
    for (j=0; j<8; j+=2) {
            ctx.clearRect(20+i*32, 20+j*32, 32, 32);
            ctx.clearRect(20+(i+1)*32, 20+(j+1)*32, 32, 32);
        }
}


