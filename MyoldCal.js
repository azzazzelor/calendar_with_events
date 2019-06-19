let nowDate = new Date();
let today = nowDate.getDate();
let currentMonth =nowDate.getMonth();
let currentYear = nowDate.getFullYear();
let temp = new Date(currentYear,currentMonth+1,0);
let lastDay = temp.getDate();

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
        document.getElementById('t').appendChild(tr);
        a++;
        }
    }


    /////////HTML 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div class="calendar_wrap">
        <div class="calendar_header">
            <p>year</p>
            <p>month</p>
        </div>
        <div class="calendar_table">
            <table id="t">
            <caption>today</caption>
            <tr>
                <th>пн</th>
                <th>вт</th>
                <th>ср</th>
                <th>чт</th>
                <th>птн</th>
                <th>сб</th>
                <th>вс</th>
            </tr>
            </table>
        </div>
    </div>
    <script src="./calendar.js"></script>
</body>
</html>