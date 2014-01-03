var fs = require("fs");
var getPage = require("./getPage");

var getPage2 = require("./getPage2");
var arr = ["http://www.baidu.com","http://www.google.com.hk/webhp?hl=zh-CN&sourceid=cnhp","http://www.sina.com.cn"];


//var deel = function(can){
//    if(can > 0){return can}
//};

//var len = arr.length;
//var bi = arr.length;
//var count = function()
//{
//    if(bi>0)bi--;
//    return arr[bi];
//};



getPage("http://www.symfony.com/doc/2.4/reference/index.html",null,function(data,url,x){
    fs.writeFile("11.html",data);
});

//for(x in arr)
//{
//    getPage(arr[x],x,function(data,url,x){
//        fs.writeFile(x+x+".html",data.toString());
//    });
//    // [x]+".txt",arr[x]);
//}