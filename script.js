//クリックイベント
$(document).ready(function() {
 $(".hidden").on("click", function() {
  $(this).next().toggleClass("hidden");
});

});

$(document).ready(function() {
 $(".toggle").on("click", function() {
   $(".hidden").slideToggle(1000);

    $(".toggle").off("click", function() {
   $(".hidden").slideToggle(1000);
   });
});

});





$(document).ready(function() {
 $(".calendar").on("click", function() {
   $(".container-calendar").slideToggle(1000);

    $(".calendar").off("click", function() {
   $(".container-calendar").show();
   });
});

});

$(document).ready(function() {
$(".sample-help").click(function(){
  alert("現在調整中ですしばらくお待ち下さい");
});

});


//テキストAnimation
const animation = document.querySelectorAll('.textAnimation');

for(let i = 0; i < animation.length; i++){
  const targetEleme = animation[i];
  texts = targetEleme.textContent,
  textsArray = [""];

  targetEleme.textContent = "";

  for(let h = 0; h < texts.split("").length; h++){
  const space = texts.split("")[h];
  
  if(space === " "){
     textsArray.push(" ");
   } else {
      textsArray.push('<span><span style="animation-delay: ' + ((h * .1) + .1) + 's;">' + space + '</span></span>')
    }

  }
for(let j = 0; j < textsArray.length; j++){

  targetEleme.innerHTML += textsArray[j];
 }

};




const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

// onkeyup event
inputBox.onkeyup = ()=>{
  let userEnteredValue = inputBox.value; //ユーザーが入力した値を取得する
  if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  }else{
    addBtn.classList.remove("active"); //unactive the add button
  }
}

showTasks(); //showTask functionを呼ぶ

addBtn.onclick = ()=>{ //プラスアイコンボタンをクリックしたとき
  let userEnteredValue = inputBox.value; //入力フィールド値を取得
  let getLocalStorageData = localStorage.getItem("New Todo"); //localstorageを取得
  if(getLocalStorageData == null){ //if localstorageのデータがない場合
    listArray = []; //空白の配列を作成する
  }else{
    listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
  }
  listArray.push(userEnteredValue); //pushing or adding new value in array
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
  showTasks(); //showTask関数を呼び出す
  addBtn.classList.remove("active"); //タスクが追加されたら、追加ボタンを無効にする
}

function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
  if(getLocalStorageData == null){
    listArray = [];
  }else{
    listArray = JSON.parse(getLocalStorageData); 
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; //保留中のタスクで配列の長さを渡す
  if(listArray.length > 0){ //if 配列の長さ 0
    deleteAllBtn.classList.add("active"); // delete button
  }else{
    deleteAllBtn.classList.remove("active"); // delete button
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span><input   class ="newCheck" type="checkbox"></li>`;
  });
  todoList.innerHTML = newLiTag; //liタグ
  inputBox.value = ""; //タスクを追加したら、入力フィールドを空白のままにする
todoList.className = "listLi";//liにクラス追加

// Check Box追加
let newCheck = "";
  listArray.forEach((element, index) => {
    newCheck += `${element}<class="newCheck" type="checkbox(${index})"> `;
  });
  
  
   
}


// タスク削除機能

function deleteTask(index){
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1); //delete or remove the li
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); // showTasksを呼ぶ
}

// すべてのタスクを削除する機能
deleteAllBtn.onclick = ()=>{
var res = confirm("全て空になりますが本当によろしいですか？※復元不可能です");
if( res == true ) { //trueを返す
alert("全て削除しました。");
  listArray = []; //配列を空にする
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //set the item in localstorage
  showTasks(); // showTasksを呼ぶ
}else {
        // キャンセルならアラートボックスを表示
        alert("キャンセルしました");
    }
}


//カウントボタンを取得する
let btn = document.getElementById("btn");

//チェック済みのチェックボックスの数を返す
let getCheckedCount = () => {

    let count = 0;

     var inputElems = document.getElementsByTagName("input")

    for (let i = 0; i < inputElems.length; i++) {
        if (inputElems[i].checked === true) {
            count++;
        }

    }
alert(count + "  Check");

};

//ボタンをクリックした時に「getCheckedCount()」を呼びだす
btn.addEventListener("click", getCheckedCount, false);





 
$(document).ready(function() {
 $(".togglebutton").on("click", function() {
   $(".contents").slideToggle(1000);

    $(".togglebutton").off("click", function() {
   $(".contents").slideToggle(1000);
   });
});

}); 




//保存の呼び出し
document.getElementById("sample-load").onclick = function(){

    if(localStorage.getItem('New Todo') === null){
        alert('内容が保存されていません。');
        return false;
    }
    var text = localStorage.getItem('New Todo');
    document.getElementById("todo-id").value = text;
    alert('保存内容を呼び出しました。');
};

//保存ボタンの処理
document.getElementById("sample-save").onclick = function(){
    var text = document.getElementById("todo-id").value;

    if(!text){
        alert('内容が入力されていません。');
        return false;
    }
    localStorage.setItem('todo-id', text);
    alert('内容を保存しました。');
};

//削除ボタンの処理
document.getElementById("sample-delete").onclick = function(){

    if(localStorage.getItem('todo-id') === null){
        alert('内容が保存されていません。');
        return false;
    }
    localStorage.removeItem('todo-id');
    alert('保存内容を削除しました。');
};


//カレンダー

function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
      years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");

var createYear = generate_year_range(1970, 2200);

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
var days = ["日", "月", "火", "水", "木", "金", "土"];

var dayHeader = "<tr>";
for (day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

  var firstDay = ( new Date( year, month ) ).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for ( var i = 0; i < 6; i++ ) {
      var row = document.createElement("tr");

      for ( var j = 0; j < 7; j++ ) {
          if ( i === 0 && j < firstDay ) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          } else if (date > daysInMonth(month, year)) {
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + date + "</span>";

              if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                  cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
          }
      }

      tbl.appendChild(row);
  }

}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}
