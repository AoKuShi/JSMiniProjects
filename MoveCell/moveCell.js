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

    // 테이블의 중앙 좌표를 계산
    const x = Math.floor(inNum / 2);
    const y = x;

    // 중앙 좌표에서 시작하여 셀 이동을 처리하는 함수 호출
    func2(inNum, x, y);
}

// 테이블에서 셀을 이동시키는 함수
function func2(inNum, x, y) {
    // 생성된 테이블 요소를 가져옴
    const table = document.getElementById('table1');
    // 현재 위치의 셀을 가져옴
    const cell = table.rows[y].cells[x];

    // 현재 위치의 셀 배경색을 변경
    cell.style.backgroundColor = 'lightgray';

    // 키보드 이벤트 리스너를 추가하여 셀 이동을 처리
    document.addEventListener('keydown', function keyB(event) {
        // 방향키에 따라 x와 y 좌표를 업데이트
        switch (event.key) {
            case 'ArrowLeft':
                x = x <= 0 ? inNum - 1 : x - 1;
                break;
            case 'ArrowRight':
                x = x >= inNum - 1 ? 0 : x + 1;
                break;
            case 'ArrowUp':
                y = y <= 0 ? inNum - 1 : y - 1;
                break;
            case 'ArrowDown':
                y = y >= inNum - 1 ? 0 : y + 1;
                break;
            default:
                return;
        }

        // 이전 위치의 셀 배경색을 초기화
        cell.style.backgroundColor = '';
        // 이벤트 리스너를 제거
        document.removeEventListener('keydown', keyB);
        // 새로운 위치에서 함수 호출
        func2(inNum, x, y);
    });
}
