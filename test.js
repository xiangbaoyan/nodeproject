var http = require("http");

var url = "http://symfony.com/doc/current/index.html";
function download(url,callback){

    http.get(url,function(res){
        var data = "";
        res.on('data',function(chunk){
            data += chunk;
        });
        res.on('end',function(){
            callback(data);
        });
    }).on("error",function(){
            callback(null);
        });
}



download(url,function(data){
    console.log(data);
});