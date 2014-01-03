frontPage = "http://www.symfony.com";

module.exports = function(path){

    if(path.match(/^\//)){
        path = frontPage + path;
    }
    return path;
};


