
var yyy = document.getElementById('xxx');
var ctx = yyy.getContext("2d");

autoCanvasSize(yyy);

listenToUser(yyy);

//是否使用橡皮擦
var eraserEnable = false;

eraser.onclick = function () {
    eraserEnable = true;
    eraser.classList.add('action');
    pen.classList.remove('action');
};
pen.onclick = function () {
    eraserEnable = false;
    pen.classList.add('action');
    eraser.classList.remove('action');
};

red.onclick = function () {
    ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    red.classList.add('color');
    green.classList.remove('color');
    blue.classList.remove('color');
    black.classList.remove('color');
};
green.onclick = function () {
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    green.classList.add('color');
    red.classList.remove('color');
    blue.classList.remove('color');
    black.classList.remove('color');
};
blue.onclick = function () {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "blue";
    blue.classList.add('color');
    red.classList.remove('color');
    green.classList.remove('color');
    black.classList.remove('color');
};
black.onclick = function () {
    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    black.classList.add('color');
    red.classList.remove('color');
    blue.classList.remove('color');
    green.classList.remove('color');
};
clear.onclick = function () {
    ctx.clearRect(0,0,yyy.width,yyy.height);
};
download.onclick = function () {
    var url = yyy.toDataURL("image/png");
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = "我的画";
    a.target = "_blank";
    a.click();
};

//设置画板
function autoCanvasSize(canvas) {
    function setCanvasSize(){
        var pageWidth = document.documentElement.clientWidth;   // 获取屏幕宽度
        var pageHeight = document.documentElement.clientHeight;     //获取屏幕高度

        canvas.width = pageWidth;       //画板宽等于屏幕宽度
        canvas.height = pageHeight;     //画板高等于屏幕高度
    }

    setCanvasSize();

    window.onresize = function ( ){ //改变窗口大小
        setCanvasSize();
    };
}

//监听用户鼠标事件
function listenToUser(canvas) {
    var painting = false;
    var lastPoint = {};

    if(document.body.ontouchstart !== undefined){
        canvas.ontouchstart = function (aaa) {
            console.log(aaa);
            var x = aaa.touches[0].clientX;     //console.log打印出aaa，找到里面的touches（多点触控），第一个用touches[0]
            var y = aaa.touches[0].clientY;
            painting = true;
            if(eraserEnable){
                ctx.clearRect(x-5,y-5,10,10);
            }else{
                lastPoint = {"x":x,"y":y};      //在每次动的时候把当前点和动的点连成一条线
                drawCircle(x,y,4);
            }
        };
        canvas.ontouchmove = function (aaa) {
            var x = aaa.touches[0].clientX;
            var y = aaa.touches[0].clientY;
            var newPoint = {x:x,y:y};
            if(!painting){return;}
            if(eraserEnable){
                ctx.clearRect(x-5,y-5,10,10);
            }else{
                drawCircle(x,y,4);
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,10);
                lastPoint = newPoint;           //实时更新上一个点的坐标，不然都和第一个点连接了
            }
        };

        canvas.ontouchend = function () {
            painting = false;
        }
    }else{
        //鼠标按下
        canvas.onmousedown = function (aaa) {
            var x = aaa.clientX;
            var y = aaa.clientY;
            painting = true;
            if(eraserEnable){
                ctx.clearRect(x-5,y-5,10,10);
            }else{
                lastPoint = {"x":x,"y":y};      //在每次动的时候把当前点和动的点连成一条线
                drawCircle(x,y,4);
            }
        };

        //鼠标移动
        canvas.onmousemove = function (aaa) {
            var x = aaa.clientX;
            var y = aaa.clientY;
            var newPoint = {x:x,y:y};
            if(!painting){return;}
            if(eraserEnable){
                ctx.clearRect(x-5,y-5,10,10);
            }else{
                drawCircle(x,y,4);
                drawLine(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y,10);
                lastPoint = newPoint;           //实时更新上一个点的坐标，不然都和第一个点连接了
            }
        };

        //松开鼠标
        canvas.onmouseup = function () {
            painting = false;
        };

    }
}

//画圆
function drawCircle(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2);
    ctx.fill()
}

//连线
function drawLine(x1,y1,x2,y2,lineWidth){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}
