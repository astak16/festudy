
var yyy = document.getElementById('xxx');
var ctx = yyy.getContext("2d");

var painting = false;
var lastPoint = {};

function drawCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill()
}

function drawLine(x1,y1,x2,y2,lineWidth){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}



function xxx(){
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    yyy.width = pageWidth;
    yyy.height = pageHeight;
}
xxx();

window.onresize = function ( ){
    xxx();
};

yyy.onmousedown = function (aaa) {
    painting = true;
    var x = aaa.clientX;
    var y = aaa.clientY;
    lastPoint = {"x":x,"y":y};      //在每次动的时候把当前点和动的点连成一条线
    drawCircle(x,y,4);
};

yyy.onmousemove = function (aaa) {
    if(painting){
        var x = aaa.clientX;
        var y = aaa.clientY;
        var newPoint = {x:x,y:y};
        drawCircle(x,y,4);
        drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,10);
        lastPoint = newPoint;           //实时更新上一个点的坐标，不然都和第一个点连接了
    }
};

yyy.onmouseup = function (aaa) {
    painting = false;
};