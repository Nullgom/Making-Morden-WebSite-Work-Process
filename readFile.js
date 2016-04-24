// node.js - File System 모듈 호출
// 참고 URL: http://nodejs.org/api/fs.html
var fs = require('fs');
// File System - readFile() 사용
fs.readFile('files/about-nodejs.txt', 'utf8', function(err, data) {
	console.log('data: ' + data);
});