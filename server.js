var http = require("http");
var fs = require("fs");
var qs = require("querystring");
var getPage = require("./getPage");
var cheerio = require("cheerio");
var absPath = require("./absPath");


var stream = fs.createWriteStream('log.html');


    var server = http.createServer(function(req,res){
        var postData = "";
        var come = "";
        var paths = [];
        var file = [];
        if(req.method == "GET"){
            fs.readFile("index.html",function(err,data){
                if(err) throw err;
                res.write(data.toString());
                res.end();
            });
        }
        if(req.method == "POST"){
            req.on('data',function(chunk){
                postData += chunk;
            });
            req.on('end',function(){
                come = qs.parse(postData);
                getPage(come.pageUrl,null,function(data,url,x){
                    if(data){
                        var $ = cheerio.load(data);

                        $("div.submenu a").each(function(){
                            for(i in come.bookName ){
                                if(come.bookName[i] == $(this).text()){
                                    dir = come.saveDir+"\\"+come.bookName[i];
                                    file[i] = dir+"\\"+come.bookName[i]+".html";
                                    if(!fs.existsSync(dir)){
                                            fs.mkdir(dir);
                                    }
                                    //bendi[i] = fileName;
                                    paths[i] = absPath($(this).attr("href"));
                                    console.log(paths[i]);
//                                    getPage(paths[i],i,function(data,url,x){
//                                        fs.writeFile(file[x],data);
//                                    });
                                }
                            }

                        });
                    }
                    res.end("ok,that's done");
                });

            });


        }});

    server.listen(7000);