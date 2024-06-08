// 페이지가 로드될 때 실행
window.onload = function () {
    // 로컬 스토리지에서 할 일 목록을 가져옴
    const savedTodoList = JSON.parse(localStorage.getItem('todolist'));
    // 로컬 데이터가 존재하면 실행
    if (savedTodoList) {
        // 저장된 할 일 목록을 순회하면서 추가
        for (let i = 0; i < savedTodoList.length; i++) {
            console.log(savedTodoList[i]);
            addTodoList(savedTodoList[i]) // 저장된 할 일을 추가
        }
    }

    // 할 일 입력 필드와 추가 버튼을 선택
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    // 추가 버튼 클릭 시 할 일을 추가
    addBtn.addEventListener("click", function () {
        if (todoInput.value != "") addTodoList();
    });
}

// Enter 키를 누르면 할 일을 추가
window.onkeydown = function (todoInput) {
    if (todoInput.key == "Enter") {
        if (todoInput.value != "") addTodoList();
    }
}

// 로컬에 데이터 저장하기
function saveItems() {
    // 빈 배열 할당
    const saveItems = [];
    const listArea = document.querySelector(".listArea");
    // 목록의 각 아이템을 순회하면서 배열에 추가
    for (let node of listArea.children) {
        textNode = node.querySelector('span');
        const todoObj = {
            todo: textNode.textContent,
            check: textNode.classList.contains('check')
        };
        saveItems.push(todoObj);
    }
    console.log(JSON.stringify(saveItems));
    // 로컬 스토리지에 저장
    localStorage.setItem('todolist', JSON.stringify(saveItems));
}

// 할 일 목록에 새로운 항목을 추가
function addTodoList(savedTodo) {
    const listArea = document.querySelector(".listArea");

    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);

    // 저장된 할 일이 있으면 해당 항목을 추가
    if (savedTodo) {
        todoText.innerText = savedTodo.todo;
        // 체크 상태면 체크 표시와 스타일을 설정
        if (savedTodo.check) {
            todoText.classList.add("check");
            checkBtn.innerHTML = "✔";
        }
    } else {
        // 새로 추가된 할 일은 입력 필드의 값을 사용
        todoText.innerText = todoInput.value;
        todoInput.value = "";
    }

    // 입력 필드를 비움
    todoInput.value = "";
    delBtn.innerText = "X"

    // 클래스 추가
    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");
    // 아이템을 저장
    saveItems();

    // 체크 버튼 클릭 이벤트
    checkBtn.addEventListener("click", function () {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        } else {
            checkBtn.innerHTML = "";
        }
        // 체크 상태 토글
        todoText.classList.toggle("check");
        // 변경된 아이템 저장
        saveItems();
    })

    // 삭제 버튼 클릭 이벤트
    delBtn.addEventListener("click", function () {
        // 항목 삭제
        liNode.remove();
        // 변경된 아이템 저장
        saveItems();
    })

    // 마지막 항목 로그
    console.log(listArea.lastChild);
}
