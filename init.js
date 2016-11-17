var yDirection = 2
var xDirection = 2
var rectHeight = 35
var rectWidth = 35
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
var ctx = canvas.getContext('2d');
var loopTime;


var colorScheme;
var colorSchemeTotal = 2


var crazyMode;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init(){
	canvas = document.getElementById("canvas");
	canvas.width = pageWidth
	canvas.height = pageHeight;
	
	ctx.font = "100px Verdana"
	ctx.textAlign = "center"
	ctx.fillText("Tap Me", pageWidth/2, pageHeight/2)
}

init()

//Draw Button Click
document.getElementById("canvas").onclick = function(){
	rectHeight = getRandomInt(1, 100)
	rectWidth = rectHeight
	
	clearScreen();
	var coordinates = [getRandomInt(pageWidth/2 - pageWidth * .3, pageWidth/2 + pageWidth*.3), getRandomInt(pageHeight/2 - pageHeight*.3, pageHeight/2 + pageHeight*.3)]
	draw(coordinates[0], coordinates[1]);
	
	colorScheme = getRandomInt(0, colorSchemeTotal);
	crazyMode = getRandomInt(0, 1)
}

function draw(x, y){
	var canvas = document.getElementById('canvas');
	
	var colorSchemes = [
	//"rgba(" + String(getRandomInt(0, 255)) + ","+ String(getRandomInt(0, 255)) + "," + String(getRandomInt(0, 255)) + ",1)",
	"rgba(" + String(getRandomInt(0, 255)) + ","+ String(getRandomInt(0, 255)) + ",255,1)",
	"rgba(" + String(getRandomInt(0, 255)) + ",255," + String(getRandomInt(0, 255)) + ",1)",
	"rgba(255,"+ String(getRandomInt(0, 255)) + "," + String(getRandomInt(0, 255)) + ",1)",
]

	
	var lineColor = colorSchemes[colorScheme]

	ctx.save();
	ctx.fillStyle = lineColor; //style for green box
	ctx.fillRect (x, y, rectHeight, rectWidth) //draws the rectangle
	ctx.restore();
	x += xDirection;
	y += yDirection;
	
	if (y > canvas.height - rectHeight){
		yDirection *= -1;
	}else if (y < 0){
		yDirection *= -1
	}else if (x > canvas.width - rectWidth){
		xDirection *= -1
	}else if (x < 0){
		xDirection *= -1
	}
	
	if (crazyMode == 1){
		if (y > canvas.height - rectHeight || y < 0 || x > canvas.width - rectWidth || x < 0){
			colorScheme = getRandomInt(0, colorSchemeTotal);
		}
	}
	
	loopTime = setTimeout('draw('+x+', '+y+')', .1);
}
function clearScreen(){
	ctx.clearRect(0, 0, pageWidth, pageHeight)
	clearTimeout(loopTime)	
}
