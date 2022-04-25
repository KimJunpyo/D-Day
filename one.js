let MilliSecond = 24 * 60 * 60 * 1000;
let today = new Date();
let year;
let month;
let day;
const body = document.querySelector("body");
function ondbclick_event(){
    alert(1);
}

function FS(){
    year = document.getElementById("insert_year").value;
    month = document.getElementById("insert_month").value;
    day = document.getElementById("insert_day").value;
    if(year === "" || month === "" || day === ""){
        alert("                              날짜를 다시 입력하세요\n                                    (yyyy-mm-dd)");
    }
    else if(year > today.getFullYear() + 10 || year < today.getFullYear()){
        alert("                       연도는 올해부터 10년까지 가능합니다.")
    }
    else{
        D_Day();
    }
}

function FS2(){
    document.getElementById("insert_year").value = "";
    document.getElementById("insert_month").value = "";
    document.getElementById("insert_day").value = "";
    location.href = "#close";
}

function D_Day(){
    let checkDay = new Date(year, month - 1, day);
    let theDay = Math.floor((checkDay.getTime() - today.getTime()) / 86400000) + 1;
    if(theDay <= 0){
        document.getElementById("current_date").value = "D-Day";
    }
    else{
        document.getElementById("current_date").value = "D - " + theDay;
    }
}

function Spring(){
    body.style.backgroundImage = 'linear-gradient(rgb(255,182,193),rgb(255, 201, 248))';
}
function Summer(){
    body.style.backgroundImage = 'linear-gradient(rgb(120, 230, 167),rgb(120, 230, 219))';
}