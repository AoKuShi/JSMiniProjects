// 구구단을 출력하는 함수
function func1() {
    // 입력된 숫자를 가져옴
    const dan = document.getElementById('dan').value;
    // 결과를 표시할 div 요소를 가져옴
    const resultDiv = document.getElementById('result');
    // 결과 div의 내용을 초기화
    resultDiv.innerHTML = '';
    let p = '';

    // 입력값이 1보다 작거나 9보다 크면 오류 메시지 표시 후 종료
    if (dan < 1 || dan > 9) {
        resultDiv.innerHTML = '잘못된 입력입니다.';
        return;
    }

    // 구구단 제목을 추가
    p += '<br>&nbsp;&nbsp;<' + dan + '단><br>';
    // 구구단 계산 결과를 추가
    for (let i = 1; i <= 9; i++) {
        p += `${dan} x ${i} = ${dan * i}<br>`;
    }
    // 결과 div에 구구단 결과를 삽입
    resultDiv.innerHTML = p;
}
