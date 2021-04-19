var ref = firebase.database().ref("action");

let TODO_HEAD_CONTAINER = document.getElementById("todo-head-container");
let TODO_HEAD_TEXT = document.getElementById("todo-head-text");
let TODO_HEAD_INPUT = document.getElementById("todo-head-input");
let CLEAR_TODO_HEAD_BTN = document.getElementById("clear-todo-head-btn");
let NOW_TODO_HEAD = "";

// Part 2
let TODO_LIST_CONTAINER = document.getElementById("todo-list-container")
let TODO_ITEM_INPUT = document.getElementById("todo-item-input")

const LIST_NAME = "list";
const ITEM_NAME = "l";

let DATA;
let RUN_ID;

function getData() {
    ref.orderByChild("id").on("value", (snapshot) => {
        if (snapshot.exists()) {
            fetch(snapshot.val());
        } else {
            console.log("No data available");
            DATA = "";
            setDisplayCondition();
        }
    });
}

function syncData(data) {
    DATA = data;
}

function fetch(data) {
    DATA = data;
    if (NOW_TODO_HEAD === "") setNOW_TODO_HEAD("")
    reloadContent();
}

function setNOW_TODO_HEAD(current) {
    if (DATA === null || !DATA) {
        NOW_TODO_HEAD = "";
    }
    for (let i in DATA) {
        if (current === "") {
            NOW_TODO_HEAD = i;
            break;
        }
        if (current < i) {
            NOW_TODO_HEAD = i;
            break;
        } else {
            NOW_TODO_HEAD = i;
        }
    }
}

function objectSize(object) {
    let count = 0;
    for (let i in object) {
        count++;
    }
    return count;
}

function numberFormat(number) {
    var str = "" + number;
    var pad = "000";
    var ans = pad.substring(0, pad.length - str.length) + str;
    return ans;
}

function reloadContent() {
    setDisplayCondition();
    renderTodoList(DATA);
    renderTodoListItem(DATA[NOW_TODO_HEAD])
}

function setDisplayCondition() {
    if (!DATA || objectSize(DATA) === 0) {
        CLEAR_TODO_HEAD_BTN.style.opacity = "0";
        TODO_HEAD_TEXT.innerHTML = "";
    } else {
        CLEAR_TODO_HEAD_BTN.style.opacity = "1";
    }
}

function renderTodoList(todoListHead) {
    TODO_HEAD_CONTAINER.innerHTML = "";
    for (let i in todoListHead) {
        TODO_HEAD_CONTAINER.appendChild(
            createTodoListHead({ key: i, text: todoListHead[i].title })
        );
    }
}

function createTodoListHead({ key, text }) {
    const div = document.createElement("DIV");
    const span = document.createElement("SPAN");
    span.innerHTML = text;
    div.classList.add("todo-head");
    if (key === NOW_TODO_HEAD) {
        TODO_HEAD_TEXT.innerHTML = text;
        div.classList.add("active");
    }
    div.setAttribute("onclick", `selectTodoList("${key}")`);
    div.appendChild(span);
    return div;
}


function removeTodoList() {
    ref.child(NOW_TODO_HEAD).set(null);
    const current = NOW_TODO_HEAD;
    NOW_TODO_HEAD = "";
    setNOW_TODO_HEAD(current);
    setDisplayCondition();
    reloadContent();
}

function selectTodoList(key) {
    NOW_TODO_HEAD = key;
    reloadContent();
}
// Part 2

function renderTodoListItem(todoList) {
    TODO_LIST_CONTAINER.innerHTML = ""
    // 2.1 ใช้คำสั่ง if เพื่อตรวจสอบ todoList เป็นค่าว่าง(null)หรือไม่ ถ้าไม่เป็นค่าว่างให้ทำคำสั่งต่อมา
    if(todoList === null){return}
    for (let i in todoList.todo) {
        if (!todoList.todo[i].isValid) continue
        // 2.2 ภายใน for loop ให้ใช้ตัวแปรและคำสั่ง TODO_LIST_CONTAINER.appendChild()
        //เพื่อเรียกใช้ function createTodoListItem() โดยมีการส่งค่าดังบรรทัดที่ 157 - 159
        TODO_LIST_CONTAINER.appendChild(
            createTodoListItem({ //เพื่อเรียกใช้ function createTodoListItem() โดยมีการส่งค่าดังบรรทัดที่ 157 - 159
                key: i,
                text: todoList.todo[i].text,
                isChecked: todoList.todo[i].isChecked
            })
        );
        // key: i,
        // text: todoList.todo[i].text,
        // isChecked: todoList.todo[i].isChecked

    }
}


window.onload = getData();
