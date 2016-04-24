var fs = require('fs');

// 파일 변경 내용을 계속 관찰(Watch File) 하기
fs.watchFile('files/style.css', function(cur, prv) {
	console.log('파일이 변경되었습니다.');
});