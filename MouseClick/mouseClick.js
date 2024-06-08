// 사용자가 입력한 숫자에 따라 테이블을 생성하는 함수
function func1() {
    // 입력된 숫자를 가져옴
    const inNum = document.getElementById('inNum').value;
    // 결과를 표시할 div 요소를 가져옴
    const div1 = document.getElementById('result');
    // 테이블을 생성하기 위한 HTML 문자열을 초기화
    p = '<table id="table1" border="1"><tbody>';

    // 입력값이 2보다 작거나 20보다 크면 오류 메시지 표시 후 종료
    if (inNum < 2 || inNum > 20) {
        div1.innerHTML = '잘못된 입력입니다.';
        return;
    }

    // 입력된 숫자에 따라 테이블의 행과 열을 생성
    for (let i = 1; i <= inNum; i++) {
        p += '<tr>';
        for (let j = 1; j <= inNum; j++) {
            p += '<td></td>';
        }
        p += '</tr>';
    }
    p += '</tbody></table>';

    // 생성된 테이블을 결과 div에 삽입
    div1.innerHTML = p;

    // 테이블에 랜덤한 위치에 클릭 이벤트를 설정하는 함수 호출
    func2(inNum);
}

// 테이블에 랜덤한 위치에 'Click!' 텍스트를 추가하고 클릭 이벤트를 설정하는 함수
function func2(inNum) {
    // 생성된 테이블 요소를 가져옴
    const table = document.getElementById('table1');
    // 랜덤한 행과 열의 인덱스를 생성
    const x = Math.floor(Math.random() * inNum);
    const y = Math.floor(Math.random() * inNum);

    // 랜덤한 위치의 셀을 가져옴
    const cell = table.rows[y].cells[x];

    // 셀에 'Click!' 텍스트를 추가
    cell.innerHTML = 'Click!';

    // 셀에 클릭 이벤트 리스너를 추가하여 클릭 시 func1 함수를 호출
    cell.addEventListener('click', function cl() {
        func1();
    });
}
