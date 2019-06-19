(function() {
let NOW_DATE =  new Date();
let currentMonth =NOW_DATE.getMonth();
let currentYear = NOW_DATE.getFullYear();
let temp = new Date(currentYear,currentMonth+1,0);
let lastDay = temp.getDate();
const increaseButton = document.querySelector('.increase_table').addEventListener('click',increaseMonth);
const reduceButton = document.querySelector('.reduce_table').addEventListener('click',reduceMonth);
let caption_monthValue = document.querySelector('.caption_month');
let calendarTable = document.getElementById('table_id');
let hidenForm = document.querySelector('.prompt_form_container');
let form = document.querySelector('.prompt_form');
createTable();
calendarTable.addEventListener('click',addClickOnTable);

function createTable(){

    let d = new Date(currentYear,currentMonth,1);
    let t = d.getDay() - 1;
    if(t < 0){
        t = 6;
    }
     let a = 0;
        while(d.getMonth() == currentMonth){
            let tr = document.createElement('tr');
            i=0;
        while(i < 7){
            let td = document.createElement('td');
            if(a == 0){
                if(i < t){
                    td.innerHTML='';
                }else{
                    td.innerHTML = d.getDate();
                    d.setDate(d.getDate() + 1);
                }if(d.getDate() == lastDay){
                    break;
                }}else{
                    td.innerHTML = d.getDate();
                    d.setDate(d.getDate() + 1);
                }
                tr.appendChild(td);
                i++;
                
            }
            calendarTable.appendChild(tr);
        a++;
        } 
        changeNameMonth();
    }

function increaseMonth(e){
    e.preventDefault();
    let  newDateReduce = new Date(currentYear,currentMonth +1);
    NOW_DATE = new Date(newDateReduce);
    currentMonth =NOW_DATE.getMonth();
    currentYear = NOW_DATE.getFullYear();
    temp = new Date(currentYear,currentMonth+1,0);
    lastDay = temp.getDate();
    clearTable();
   return createTable();
}

function reduceMonth(e){
    e.preventDefault();
    let  newDateReduce = new Date(currentYear,currentMonth -1);
    NOW_DATE = new Date(newDateReduce);
    currentMonth =NOW_DATE.getMonth();
    currentYear = NOW_DATE.getFullYear();
    temp = new Date(currentYear,currentMonth+1,0);
    lastDay = temp.getDate();
    clearTable();
    createTable();
}

function clearTable(){
    let elmtTable = document.getElementById('table_id');
    let tableRows = elmtTable.getElementsByTagName('tr');
    let rowCount = tableRows.length;
        for (let x=rowCount-1; x>0; x--) {
            elmtTable.removeChild(tableRows[x])}
}

function changeNameMonth(){
        let date = NOW_DATE;
        let month = date.toLocaleString('ru', { month: 'long' });
        caption_monthValue.innerHTML = month;
}


function addClickOnTable(e){
    e.preventDefault();
    let target = e.target;
    if(target.tagName != 'TD') return;
    target.classList.toggle("active");
     showPrompt(target);
}

function showPrompt(target){
    
    hidenForm.classList.remove("none_form");
    showCover();
    let text_event = document.querySelector('.text_event')
   let submit_button = document.querySelector('.submit_button').addEventListener
   let cancle_button = document.querySelector('.cancle_button');
    getValueOfEvent(text_event,submit_button,cancle_button);
   
    

}
function hideCover() {
    document.body.removeChild(document.getElementById('cover-div'));
  }

function showCover() {
    var coverDiv = document.createElement('div');
    coverDiv.id = 'cover_div';
    document.body.appendChild(coverDiv);
  }
function getValueOfEvent(text_event,submit_button,cancle_button){
   
}

}());