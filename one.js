let MilliSecond = 24 * 60 * 60 * 1000;
let today = new Date();
let year;
let month;
let day;
let descript;
let count = 1;
const body = document.querySelector("body");

function DaySet(){
    year = document.getElementById("insert_year").value;
    month = document.getElementById("insert_month").value;
    day = document.getElementById("insert_day").value;
    descript = document.getElementById("insert_description").value;
    if(year === "" || month === "" || day === ""){
        alert("                              날짜를 다시 입력하세요\n                                    (yyyy-mm-dd)");
    }
    else if(year > today.getFullYear() + 10 || year < today.getFullYear()){
        alert("                       연도는 올해부터 10년까지 가능합니다.")
    }
    else if(month < 1 || month > 12){
        alert("                       월은 1월부터 12월 까지 가능합니다.")
    }
    else if(month > 7 && month % 2 === 1 && day > 30 || day < 1){
        alert("                       " + month + "월은 1일부터 30일 까지 가능합니다.");  
    }
    else if(month > 7 && month % 2 === 0 && day > 31 || day < 1){
        alert("                       " + month + "월은 1일부터 31일 까지 가능합니다.");  
    }
    else if(month == 2 && year % 4 === 0 && year % 100 !== 0 && day > 29 || day < 1){
        alert("            " + year + "년은 윤년이므로 1일부터 29일까지 가능합니다.");
    }
    else if(month == 2 && day > 28 || day < 1){
        alert("                       " + month + "월은 1일부터 28일 까지 가능합니다."); 
    }
    else if(month < 8 && month % 2 === 1 && day > 31 || day < 1){
        alert("                       " + month + "월은 1일부터 31일 까지 가능합니다."); 
    }
    else if(month < 8 && month % 2 === 0 && day > 30 || day < 1){
        alert("                       " + month + "월은 1일부터 30일 까지 가능합니다."); 
    }
    else{
        let test = document.getElementsByClassName("test" + count)[0];
        test.style.display = "block";
        D_Day();
    }
}

function DaySetDelete(){
    document.getElementById("insert_year").value = "";
    document.getElementById("insert_month").value = "";
    document.getElementById("insert_day").value = "";
    document.getElementById("insert_description").value = "이 글을 지우고 입력하세요.";
    location.href = "#close";
}

function D_Day(){
    let checkDay = new Date(year, month - 1, day);
    let theDay = Math.floor((checkDay.getTime() - today.getTime()) / 86400000) + 1;
    if(theDay <= 0){
        document.getElementById("current_date" + count).value = "D-Day";
    }
    else{
        document.getElementById("current_date" + count).value = "D - " + theDay;
    }
    
    document.getElementById("year" + count).value = year;
    document.getElementById("month" + count).value = month;
    document.getElementById("day" + count).value = day;
    document.getElementById("data" + count).value = descript;
    count++;
}

const clickSet1 = document.getElementById("settingWindow1");
clickSet1.addEventListener('click', function(){
    document.getElementById("set1").classList.toggle("active");
}, false);

const clickSet2 = document.getElementById("settingWindow2");
clickSet2.addEventListener('click', function(){
    document.getElementById("set2").classList.toggle("active");
}, false);

const clickSet3 = document.getElementById("settingWindow3");
clickSet3.addEventListener('click', function(){
    document.getElementById("set3").classList.toggle("active");
}, false);

function Spring(){
    document.getElementsByClassName("firstscreen")[0].style.background= 'linear-gradient(rgb(255,182,193),rgb(255, 201, 248))';
    document.getElementsByClassName("secondscreen")[0].style.background= 'linear-gradient(rgb(255,182,193),rgb(255, 201, 248))';
}


function Summer(){
    document.getElementsByClassName("firstscreen")[0].style.background= 'linear-gradient(rgb(120, 230, 167),rgb(120, 230, 219))';
    document.getElementsByClassName("secondscreen")[0].style.background= 'linear-gradient(rgb(120, 230, 167),rgb(120, 230, 219))';
}

function Fall(){
    document.getElementsByClassName("firstscreen")[0].style.background= 'linear-gradient(rgb(253, 198, 124),rgb(255, 178, 124))';
    document.getElementsByClassName("secondscreen")[0].style.background= 'linear-gradient(rgb(253, 198, 124),rgb(255, 178, 124))';
}

function Winter(){
    document.getElementsByClassName("firstscreen")[0].style.background= 'linear-gradient(rgb(174, 228, 245),rgb(130, 184, 219))';
    document.getElementsByClassName("secondscreen")[0].style.background= 'linear-gradient(rgb(174, 228, 245),rgb(130, 184, 219))';
}