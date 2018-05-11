// //按下鼠标事件
// document.onmousedown = function (x) {
//     console.log(x);
// };
// //动鼠标
// document.onmousemove = function (x) {
//     console.log(x);
// };
//
// //松开鼠标
// document.onmouseup = function (x) {
//     console.log(x);
// };


var div = document.getElementById("canvas");
var painting = false;           //用于开启画画，默认关闭，当鼠标按下去之后开启画画
div.onmousedown = function (a) {
    painting = true;
    var x = a.clientX;
    var y = a.clientY;
    console.log(x,y);
    var divA = document.createElement("div");
    divA.style = "width:6px;height:6px;"+
        "background:black;border-radius:3px;"+
        "position:absolute;left:"+(x-3)+"px;"+"top:"+(y-3)+"px;";   //x-3是让鼠标向右移3个单位，让鼠标和圆心重合，y-3同理
    div.appendChild(divA);
};

div.onmousemove = function (a) {
    if(painting){         //检查是否在画画
        var x = a.clientX;
        var y = a.clientY;
        console.log(x,y);
        var divA = document.createElement("div");
        divA.style = "width:6px;height:6px;"+
            "background:black;border-radius:3px;"+
            "position:absolute;left:"+(x-3)+"px;"+"top:"+(y-3)+"px;";
        div.appendChild(divA);
    }

};

div.onmouseup = function (a) {
    painting = false;
};


















