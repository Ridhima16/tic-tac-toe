var canvas = document.getElementById('gameSpace'); // fetching canvas as a variable
var context = canvas.getContext('2d'); // everything is drawn using context
var counter = 0;
var oncewin = false;

context.beginPath();
context.rect(0,0,300,300);
context.fillStyle = "#606060";
context.fill();
context.closePath();

context.beginPath();
context.moveTo(100,0);
context.lineTo(100,300);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(200,0);
context.lineTo(200,300);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(0,100);
context.lineTo(300,100);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.moveTo(0,200);
context.lineTo(300,200);
context.lineWidth = "8";
context.stroke();
context.strokeStyle = "#101010";
context.closePath();