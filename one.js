let MilliSecond = 24 * 60 * 60 * 1000;
let today = new Date();
let year;
let month;
let day;
function ondbclick_event(){
    alert(1);
}
function enterKey(e){
    if(e.KeyCode == 13){
        alert("asd");
        document.location.href="#close";
    }
        
}

function FS(){
    year = document.getElementById("insert_year").value;
    month = document.getElementById("insert_month").value;
    day = document.getElementById("insert_day").value;
    D_Day();
}

function D_Day(){
    let checkDay = new Date(year, month - 1, day);
    let theDay = Math.floor((checkDay.getTime() - today.getTime()) / 86400000) + 1;
    if(theDay <= 0){
        document.getElementById("current_date").value = "D-Day";
    }
    else{
        document.getElementById("current_date").value = theDay;
    }
}