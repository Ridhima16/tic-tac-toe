var canvas = document.getElementById('gameSpace'); // fetching canvas as a variable
var context = canvas.getContext('2d'); // everything is drawn using context
var counter = 0;
var oncewin = false;
var validmove = false;

context.beginPath();
context.rect(0,0,300,300);
context.fillStyle = "#a2b9bc";
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

window.onload=function()
{
	alert("I start first with my favourite 'O'. Try beatin' me!");
}

var a = new Array(3);
for(var i=0;i<3;i++)
{
	a[i] = new Array(3);
}

for (var i=0;i<3;i++)
{
	for (var j=0;j<3;j++)
	{
		a[i][j]=0;
	}
}

canvas.addEventListener("click",clicker);

firstturn();

function firstturn()
{
	var delay=300; //.3 seconds

	setTimeout(function()
	{
		counter+=1;
		a[0][0]++;
		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";
		context.fillText("O",15,80);		
 	}, delay); 
}

function makeOwn() {
	var delay = 200;//.2 seconds
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";
	
	if (a[0][0] == a[0][1] && a[0][0] == 1 && a[0][2] == 0) {             //1
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else if (a[0][0] == a[0][2] && a[0][0] == 1 && a[0][1] == 0) {         //2
		a[0][1]++;
		counter++;
		context.fillText("O", 115, 80);
	}

	else if (a[0][1] == a[0][2] && a[0][1] == 1 && a[0][0] == 0) {         //3
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[1][0] == a[1][1] && a[1][0] == 1 && a[1][2] == 0) {         //4
		a[1][2]++;
		counter++;
		context.fillText("O", 215, 180);
	}

	else if (a[1][0] == a[1][2] && a[1][0] == 1 && a[1][1] == 0) {         //5
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[1][2] && a[1][0] == 1 && a[1][0] == 0) {         //6
		a[1][0]++;
		counter++;
		context.fillText("O", 15, 180);
	}

	else if (a[2][0] == a[2][1] && a[2][0] == 1 && a[2][2] == 0) {         //7
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[2][0] == a[2][2] && a[2][0] == 1 && a[2][1] == 0) {         //8
		a[2][1]++;
		counter++;
		context.fillText("O", 115, 280);
	}

	else if (a[2][1] == a[2][2] && a[2][1] == 1 && a[2][0] == 0) {         //9
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][0] == a[1][0] && a[0][0] == 1 && a[2][0] == 0) {         //10
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][0] == a[2][0] && a[0][0] == 1 && a[1][0] == 0) {         //11
		a[1][0]++;
		counter++;
		context.fillText("O", 15, 180);
	}

	else if (a[1][0] == a[2][0] && a[1][0] == 1 && a[0][0] == 0) {         //12
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[0][1] == a[1][1] && a[0][1] == 1 && a[2][1] == 0) {         //13
		a[2][1]++;
		counter++;
		context.fillText("O", 115, 280);
	}

	else if (a[0][1] == a[2][1] && a[0][1] == 1 && a[1][1] == 0) {         //14
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][1] && a[1][1] == 1 && a[0][1] == 0) {         //15
		a[0][1]++;
		counter++;
		context.fillText("O", 115, 80);
	}

	else if (a[0][2] == a[1][2] && a[0][2] == 1 && a[2][2] == 0) {         //16
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[0][2] == a[2][2] && a[0][2] == 1 && a[1][2] == 0) {         //17
		a[1][2]++;
		counter++;
		context.fillText("O", 215, 180);
	}

	else if (a[1][2] == a[2][2] && a[1][2] == 1 && a[0][2] == 0) {         //18
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else if (a[0][0] == a[1][1] && a[0][0] == 1 && a[2][2] == 0) {         //19
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[0][0] == a[2][2] && a[0][0] == 1 && a[1][1] == 0) {         //20
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][2] && a[1][1] == 1 && a[0][0] == 0) {         //21
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[0][2] == a[1][1] && a[0][2] == 1 && a[2][0] == 0) {         //22
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][2] == a[2][0] && a[0][2] == 1 && a[1][1] == 0) {         //23
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][0] && a[1][1] == 1 && a[0][2] == 0) {         //24
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else {

		prevent();
	}
}

function prevent() {
	
	context.font = "90px Verdana";
	context.fillStyle = "#ff0000";
	
	if (a[0][0] == a[0][1] && a[0][0] == 2 && a[0][2] == 0) {             //1
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else if (a[0][0] == a[0][2] && a[0][0] == 2 && a[0][1] == 0) {         //2
		a[0][1]++;
		counter++;
		context.fillText("O", 115, 80);
	}

	else if (a[0][1] == a[0][2] && a[0][1] == 2 && a[0][0] == 0) {         //3
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[1][0] == a[1][1] && a[1][0] == 2 && a[1][2] == 0) {         //4
		a[1][2]++;
		counter++;
		context.fillText("O", 215, 180);
	}

	else if (a[1][0] == a[1][2] && a[1][0] == 2 && a[1][1] == 0) {         //5
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[1][2] && a[1][0] == 2 && a[1][0] == 0) {         //6
		a[1][0]++;
		counter++;
		context.fillText("O", 15, 180);
	}

	else if (a[2][0] == a[2][1] && a[2][0] == 2 && a[2][2] == 0) {         //7
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[2][0] == a[2][2] && a[2][0] == 2 && a[2][1] == 0) {         //8
		a[2][1]++;
		counter++;
		context.fillText("O", 115, 280);
	}

	else if (a[2][1] == a[2][2] && a[2][1] == 2 && a[2][0] == 0) {         //9
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][0] == a[1][0] && a[0][0] == 2 && a[2][0] == 0) {         //10
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][0] == a[2][0] && a[0][0] == 2 && a[1][0] == 0) {         //11
		a[1][0]++;
		counter++;
		context.fillText("O", 15, 180);
	}

	else if (a[1][0] == a[2][0] && a[1][0] == 2 && a[0][0] == 0) {         //12
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[0][1] == a[1][1] && a[0][1] == 2 && a[2][1] == 0) {         //13
		a[2][1]++;
		counter++;
		context.fillText("O", 115, 280);
	}

	else if (a[0][1] == a[2][1] && a[0][1] == 2 && a[1][1] == 0) {         //14
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][1] && a[1][1] == 2 && a[0][1] == 0) {         //15
		a[0][1]++;
		counter++;
		context.fillText("O", 115, 80);
	}

	else if (a[0][2] == a[1][2] && a[0][2] == 2 && a[2][2] == 0) {         //16
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[0][2] == a[2][2] && a[0][2] == 2 && a[1][2] == 0) {         //17
		a[1][2]++;
		counter++;
		context.fillText("O", 215, 180);
	}

	else if (a[1][2] == a[2][2] && a[1][2] == 2 && a[0][2] == 0) {         //18
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else if (a[0][0] == a[1][1] && a[0][0] == 2 && a[2][2] == 0) {         //19
		a[2][2]++;
		counter++;
		context.fillText("O", 215, 280);
	}

	else if (a[0][0] == a[2][2] && a[0][0] == 2 && a[1][1] == 0) {         //20
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][2] && a[1][1] == 2 && a[0][0] == 0) {         //21
		a[0][0]++;
		counter++;
		context.fillText("O", 15, 80);
	}

	else if (a[0][2] == a[1][1] && a[0][2] == 2 && a[2][0] == 0) {         //22
		a[2][0]++;
		counter++;
		context.fillText("O", 15, 280);
	}

	else if (a[0][2] == a[2][0] && a[0][2] == 2 && a[1][1] == 0) {         //23
		a[1][1]++;
		counter++;
		context.fillText("O", 115, 180);
	}

	else if (a[1][1] == a[2][0] && a[1][1] == 2 && a[0][2] == 0) {         //24
		a[0][2]++;
		counter++;
		context.fillText("O", 215, 80);
	}

	else {

		randomMove();
	}
}

function randomMove() {
	
	for (var i = 0; i < 3 ; i++) {
		for (var j = 0; j < 3; j++) {
			if(a[i][j] == 0) {
				a[i][j]++;
				counter++;	
				context.fillText("O", 15+(j*100), 80+(i*100)); 
				i=3;
				j=3;
			}
		}
	}
}

function clicker (event)
{
	if (oncewin==false && counter%2!=0)
	{
		var rect = canvas.getBoundingClientRect();
		var cx = event.clientX - rect.left;
		var cy = event.clientY - rect.top;

		context.font = "90px Verdana";
		context.fillStyle = "#ff0000";

		if (cx<100 && cx>0)
		{
			if (cy>0 && cy<100 && a[0][0]==0)
			{
				counter  += 1;
				a[0][0]++;
				context.fillText("X",15,80);
				a[0][0]++;
				validmove = true;

			}

			if (cy>100 && cy<200 && a[1][0]==0)
			{
				counter  += 1;
				a[1][0]++;
				context.fillText("X",15,180);
				a[1][0]++;
				validmove = true;
			}

			if (cy>200 && cy<300 && a[2][0]==0)
			{
				counter  += 1;
				a[2][0]++;
				context.fillText("X",15,280);
				a[2][0]++;
				validmove = true;
			}
		}

		if (cx<200 && cx>100)
		{
			if (cy>0 && cy<100 && a[0][1]==0)
			{
				counter  += 1;
				a[0][1]++;
				context.fillText("X",115,80);
				a[0][1]++;
				validmove = true;
			}

			if (cy>100 && cy<200 && a[1][1]==0)
			{
				counter  += 1;
				a[1][1]++;
				context.fillText("X",115,180);
				a[1][1]++;
				validmove = true;
			}

			if (cy>200 && cy<300  && a[2][1]==0)
			{
				counter  += 1;
				a[2][1]++;
				context.fillText("X",115,280);
				a[2][1]++;
				validmove = true;
			}
		}

		if (cx<300 && cx >200)
		{
			if (cy>0 && cy<100 && a[0][2]==0)
			{
				counter  += 1;
				a[0][2]++;
				context.fillText("X",215,80);
				a[0][2]++;
				validmove = true;
			}

			if (cy>100 && cy<200 && a[1][2]==0)
			{
				counter  += 1;
				a[1][2]++;
				context.fillText("X",215,180);
				a[1][2]++;
				validmove = true;
			}

			if (cy>200 && cy<300 && a[2][2]==0)
			{
				counter  += 1;
				a[2][2]++;
				context.fillText("X",215,280);
				a[2][2]++;
				validmove = true;
			}
		}
		check();

		if (!oncewin && validmove)
		{
			validmove = false;
			makeOwn();
		}
		check();
	}
}

function check(event)
{
	if (!oncewin)
	{
		var bool = false;
		if (a[0][0]==a[0][1] && a[0][1]==a[0][2])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true;  
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (a[1][0]==a[1][1] && a[1][1]==a[1][2])
		{
			if (a[1][0]==1)
			{
				alert("You Lose!");
				bool = true;
				oncewin = true;
			}
			else if(a[1][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[2][0]==a[2][1] && a[2][1]==a[2][2])
		{
			if (a[2][0]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[2][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][0] && a[1][0]==a[2][0])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true;
				 oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][1]==a[1][1] && a[1][1]==a[2][1])
		{
			if (a[0][1]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][1]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][2] && a[1][2]==a[2][2])
		{
			if (a[0][2]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				alert("You Win!");
				bool = true; 
				oncewin = true;
			}
		}

		if (a[0][0]==a[1][1] && a[1][1]==a[2][2])
		{
			if (a[0][0]==1)
			{
				alert("You Lose!");
				bool = true; 
				oncewin = true;
			}
			else if(a[0][0]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (a[0][2]==a[1][1] && a[1][1]==a[2][0])
		{
			if (a[0][2]==1)
			{
				alert("You Lose!");
				bool = true;
				oncewin = true;
			}
			else if(a[0][2]==2)
			{
				alert("You Win!");
				bool = true;
				oncewin = true;
			}
		}

		if (counter == 9 && bool == false)
		{
			alert("Match results in a draw. Press refresh to start again.");
		}
	}
}