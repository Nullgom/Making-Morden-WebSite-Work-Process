// File System 내장 모듈 호출
var fs = require('fs');
var minify = require('minify');

/**
 * combineJS 모듈 정의 및 외부로 출력
 * 모듈 내부에 전달받을 인자(배열, 문자열) 설정
 */
module.exports = function(jsSrc, exportJs, min) {
	// console.log(jsSrc, exportJs);
	var mergeCode = '',
		len = jsSrc.length - 1; // 조건 확인을 위한 len 변수
	// min 초기 값 설정
	min = min || false;
	// 배열 jsSrc를 개별적으로 접근 조작하기 위해
	// forEach 배열 매소드 사용.
	jsSrc.forEach(function(file, index){
		if(min) {
			minify(file, function(err, data) {
				// console.log(data);
				mergeCode += data;
				if(index == len) { 
					writeFile(exportJs, mergeCode);
				}
			});
		} else {
			// fs.readFileSync() 사용하여 파일 내용 읽기
			mergeCode += fs.readFileSync(file);
			if(index == len) {
				writeFile(exportJs, mergeCode);
			}
		}
		// console.log(file, index);
		//mergeCode += fs.readFileSync(file);
	});
	//console.log(mergeCode);
	//fs.writeFileSync(exportJs, mergeCode);
}
// 병합된 코드 mergeCode를 내용될 파일 생성
function writeFile(exportJs, mergeCode) {
	fs.writeFileSync(exportJs, mergeCode);
}