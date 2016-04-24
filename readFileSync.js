// node.js - File System 모듈 호출
// 참고 URL: http://nodejs.org/api/fs.html
var fs = require('fs');
console.log("파일 읽기 프로세스 시작...");

// File System - readFileSync() 사용
var data= fs.readFileSync('files/user.json');
var json2obj = JSON.parse(data);
console.log('데이터: ' + json2obj.nickname);

console.log("파일 읽기 프로세스 끝.");