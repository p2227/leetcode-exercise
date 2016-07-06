var fs =  require('fs');
var path = require('path');

var matchReg = /094/

fs.readdir(__dirname,(err,files)=>{
    files.map(file=>{
        if(matchReg.test(file)){
            require(path.resolve(__dirname,file));
        }
    })
});

function testArr(result,expect){
    var b = result.toString() === expect.toString();
    console[b ? 'log' : 'error'](`expect ${result}===${expect}; ${b ? 'accept' : 'failure'}`)
}

exports.testArr = testArr;

function test(result,expect){
    var b = result === expect;
    console[b ? 'log' : 'error'](`expect ${result}===${expect}; ${b ? 'accept' : 'failure'}`)
}
exports.test = test;