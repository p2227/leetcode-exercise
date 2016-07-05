var fs =  require('fs');
var path = require('path');

fs.readdir(__dirname,(err,files)=>{
    files.map(file=>{
        if(!/index.js/.test(file)){
            require(path.resolve(__dirname,file));
        }
    })
});

function runtest(){

}
