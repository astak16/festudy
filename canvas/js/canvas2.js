
var yyy = document.getElementById('xxx');
var ctx = yyy.getContext("2d");

autoCanvasSize(yyy);

listenToMouse(yyy);

//是否使用橡皮擦
var eraserEnable = false;
eraser.onclick = function () {
    eraserEnable = true;
    actions.className = "actions x";
};
brush.onclick = function () {
    eraserEnable = false;
    actions.className = "actions";
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

    window.onresize = function ( ){ //改变屏幕大小
        setCanvasSize();
    };
}

//监听用户鼠标事件
function listenToMouse(canvas) {
    var painting = false;
    var lastPoint = {};


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