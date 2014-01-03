var http = require("http");
var fs = require("fs");

var ws = fs.createWriteStream("t1.html");
module.exports = function(url){

    http.get(url,function(res){

        res.on('data',function(chunk){

            ws.write(chunk+"\n\n\n\n\n\n\n\n\n"+"============下一次读取============="+"\n\n\n\n\n\n\n");
        });

        res.on('end',function(){
            ws.end();
        });
    });

};