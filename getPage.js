var http = require('follow-redirects').http;
module.exports = function(url,x,callback){
    http.get(url,function(res){
        //console.log(url);
        var data = "";
        res.on('data',function(chunk){
            data += chunk;
        });
        res.on('end',function(){
            callback(data,url,x);
        });
    }).on('error',function(){
            callback(null);
        });
};