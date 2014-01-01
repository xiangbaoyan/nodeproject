var http = require("http");
var fs = require("fs");
var url = "http://symfony.com/doc/current/index.html";
var destName = "C:/Users/Administrator/Desktop/test/ttt.html";



function getPage(url,callback){
    http.get(url,function(res){
        var data = null;
        res.on('data',function(chunk){
            data += chunk;
        });
        res.on('end',function(){
            callback(data);
        });
    }).on('error',function(){
            callback(null);
        });
}



    getPage(url,function(data){
        fs.writeFile(destName,data,function(err){
            if(err) throw err;
            console.log("保存了这份文件");
        });
    });

