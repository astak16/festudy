
var key2 ={0:"esc",1:"F1",2:"F2",3:"F3",4:"F4",5:"F5",6:"F6",7:"F7",8:"F8",9:"F9",10:"F10",11:"F11",12:"F12",13:"Delete",14:"Power",length:15}

var keys  = {
    0 : {0:"`",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"0",11:"-",12:"=",length:13},
    1 : {0:"q",1:"w",2:"e",3:"r",4:"t",5:"y",6:"u",7:"i",8:"o",9:"p",10:"[",11:"]",12:"\\",length:13},
    2 : {0:"a",1:"s",2:"d",3:"f",4:"g",5:"h",6:"j",7:"k",8:"l",9:";",10:"'",length:11},
    3 : {0:"z",1:"x",2:"c",3:"v",4:"b",5:"n",6:"m",7:",",8:".",9:"/",length:10},
    length : 4
};

var divElement1 = document.createElement("div");        //创建一个div标签
key.appendChild(divElement1);   //把div标签添加到id为key的标签下



// //每一行键创建一个数组添加到页面中
// for(var i = 0; i < keys.length; i++){   //遍历数组，添加到页面中
//     var divElement = document.createElement("div");        //创建一个div标签
//     key.append(divElement);   //把div标签添加到id为key的标签下
//
//     for(var j = 0; j < keys[i].length; j++){    //遍历数组，把每个键添加到页面中
//         var keyElement = document.createElement("kbd");     //创建一个kbd 标签
//         keyElement.textContent = keys[i][j];        //给没个键添加文本
//         divElement.appendChild(keyElement);     //把kbd标签添加到上面创建的div标签下
//     }
//
// }

