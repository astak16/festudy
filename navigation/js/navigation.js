
//初始化数据
var keys  = {
    0 : {0:"q",1:"w",2:"e",3:"r",4:"t",5:"y",6:"u",7:"i",8:"o",9:"p",length:10},
    1 : {0:"a",1:"s",2:"d",3:"f",4:"g",5:"h",6:"j",7:"k",8:"l",length:9},
    2 : {0:"z",1:"x",2:"c",3:"v",4:"b",5:"n",6:"m",length:7},
    length : 3
};

var hash = {
    q: 'baidu.com', //ffggfvs
    w: 'weibo.com',
    e: 'ele.me',
    y: 'youtube.com'
};

var hashInlocalstorage = JSON.parse(localStorage.getItem('zzz' || 'null'));
if(hashInlocalstorage){
    hash = hashInlocalstorage;
}

//生成变量
for(var i = 0; i < keys.length; i++) {
    var div = document.createElement('div');
    div.className= "row";
    main.appendChild(div);
    var row = keys[i];

    for(var j = 0;j < row.length; j++){
        var kbd = document.createElement('kbd');
        var span = document.createElement("span");
        span.textContent = row[j];
        span.className = "text";
        kbd.appendChild(span);
        kbd.className = 'key';

        var bottom = document.createElement('bottom');
        bottom.textContent = "e";
        bottom.id = row[j];
        var img = document.createElement("img");
        if(hash[row[j]]){
            img.src = "https://" + hash[row[j]] + "/favicon.ico";
        }else{
            img.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
        }
        img.onerror = function (xxx) {
            xxx.target.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
        };
        bottom.onclick = function (key1) {
            var bottom2 = key1.target;
            var img2 = bottom2.previousSibling;

            var key = bottom2.id;
            var x = prompt("请输入一个网址");
            hash[key]= x;
            img2.src = "https://" + x + "/favicon.ico";
            img2.onerror = function (xxx) {
                xxx.target.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
            };
            localStorage.setItem('zzz',JSON.stringify(hash))
        };
        kbd.appendChild(img);
        kbd.appendChild(bottom);
        div.appendChild(kbd);
    }
    }


//监听键盘
document.onkeypress = function (key1) {
    var keyboard = key1.key;
    // location.href = "https://"+ hash[keyboard];
    window.open("https://"+ hash[keyboard],'_blank');
};


































