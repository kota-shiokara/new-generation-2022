let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let body = document.getElementById('body')

//background color
c.beginPath();
c.fillStyle = 'rgb(0, 0, 0)';
c.fillRect(0, 0, body.clientWidth, body.clientHeight);


c.fillStyle = "#ffffff";
c.shadowColor = "#ffffff";
c.shadowOffsetX = 0;
c.shadowOffsetY = 0;
c.shadowBlur = 3;

var maxX = Math.floor(body.clientWidth / 10);
var maxY = Math.floor(body.clientHeight / 10);
var a = [0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 1, 1];	
for(var i = 0; i < 500; i++){
	var x = Math.random() * Math.floor(body.clientWidth);
	var y = Math.random() * Math.floor(body.clientHeight);
	var n = Math.floor(Math.random() * a.length);
	var radius = a[n];
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI*2, false);
	c.closePath();
	c.fill();
}