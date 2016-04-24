var fs = require('fs');
console.log("문서 쓰기 프로세서 시작...");

var cssDoc = '#nodejs { margin:0 }';
fs.writeFile('files/style.css', cssDoc, function(err) {
	if(err) return console.error(err);
	console.log('It\'s saved!');
});

console.log("문서 쓰기 프로세서 끝.");