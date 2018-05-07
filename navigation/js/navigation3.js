
//初始化数据
var keys  = {
    0 : {0:"q",1:"w",2:"e",3:"r",4:"t",5:"y",6:"u",7:"i",8:"o",9:"p",length:10},
    1 : {0:"a",1:"s",2:"d",3:"f",4:"g",5:"h",6:"j",7:"k",8:"l",length:9},
    2 : {0:"z",1:"x",2:"c",3:"v",4:"b",5:"n",6:"m",length:7},
    length : 3
};

var hash = {
    q: 'baidu.com',
    w: 'weibo.com',
    e: 'ele.me',
    y: 'youtube.com'
};

//取出localStorage中的'zzz' 对应的hash，要把空字符串变成null
var hashInlocalstorage = JSON.parse(localStorage.getItem('zzz' || 'null'));
if(hashInlocalstorage){     //如果这个hash 是存在的，就用他覆盖之前的hash
    hash = hashInlocalstorage;
}


//生成变量
for(var i = 0; i < keys.length; i++) {
    var div = document.createElement('div');
    div.className = 'row';
    main.appendChild(div);
    
    var row = keys[i];

    for(var j = 0;j < row.length; j++){
        var span = createSpan(row[j]);

        var bottom = createBottom(row[j]);

        var img = createImg(hash[row[j]]);

        var kbd = document.createElement('kbd');
        kbd.className = 'key';

        kbd.appendChild(span);
        kbd.appendChild(img);
        kbd.appendChild(bottom);
        div.appendChild(kbd);
    }
}


//监听键盘接收一个参数——这个参数无所谓
document.onkeypress = function(key1) {//onkeypress是键盘监听事件
    var keyboard = key1.key;    //key在浏览器里面，获取到key就可以知道用户按下什么键了
    console.log(key1);          //可用console.log打印出这个参数里面的所有内容
    // location.href = "https://"+ hash[keyboard];
    window.open("https://"+ hash[keyboard],'_blank');   //在新窗口打开对应网址
};

//创建span标签函数，接受一个参数——键盘的每个键
function createSpan(textContent) {
    var span = document.createElement("span");  //创建一个span 标签
    span.textContent = textContent;     //在span 标签里依次添加到每个键上的字母，用于调整键上字母大小
    span.className = "text";        //给span 标签添加class
    return span;
}

//创建button标签，接受一个参数——键盘的每个键
function createBottom(id1) {
    var bottom = document.createElement('bottom');  //创建一个button标签
    bottom.textContent = "e";   //把e 标签添加到每个键上面，用于编辑网址

    bottom.id = id1;    //设置button 的id
    bottom.onclick = function (key11) { //onclick是点击监听事件，接收一个参数——这个参数里不能知道用户点击了哪个键
        var bottom2 = key11.target;     //这里用target，意思是被用户点击的按钮（目标）
        console.log(key11);     //可用console.log打印出这个参数里面的所有内容，但不知道用户点了哪个键
        var img2 = bottom2.previousSibling;

        var key = bottom2.id;   //获取用户点击键的id值
        var x = prompt("请输入一个网址");
        hash[key]= x;       //把网址赋值给hash，并存储到对应的键中（浏览器一刷新就没了）；所以hash一变更，就要存储

        //没有办法让js 变量在下一个页面继续出现，让hash 逃离js，
        localStorage.setItem('zzz',JSON.stringify(hash));/* setItem 只能存字符串，但hash 不是字符串，所以用JSON.stringify 把hash变成字符串，存到zzz 中，
         可在控制台Application — Local Storage 中看到*/

        img2.src = "https://" + x + "/favicon.ico";
        img2.onerror = function (xxx) {
            xxx.target.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
        };
    };
    return bottom;
}

function createImg(domain) {
    var img = document.createElement("img");
    if(domain){
        img.src = "https://" + domain + "/favicon.ico";
    }else{
        img.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
    }
    img.onerror = function (xxx) {
        xxx.target.src = "//i.loli.net/2018/05/05/5aed21e8294e6.png"
    };
    return img;
}