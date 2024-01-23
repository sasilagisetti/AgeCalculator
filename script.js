let d = new Date();
let presentDate = d.getDate();
let presentMonth = 1 + d.getMonth();
let presentYear = d.getFullYear();
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let resultYear = document.getElementById("r-year");
let resultMonth = document.getElementById("r-month");
let resultDay = document.getElementById("r-day");
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

document.getElementById("s-btn").addEventListener("click",function(e){
    e.preventDefault();
    if(day.value>presentDate){
        presentDate = presentDate + monthDays[presentMonth - 1];
        presentMonth = presentMonth - 1;
    }
    if(month.value>presentMonth){
        presentMonth = presentMonth + 12;
        presentYear = presentYear - 1;
    }

    let dd = presentDate - day.value;
    let mm = presentMonth - month.value;
    let yy = presentYear - year.value;
    if(day.value >= 1 && day.value <= 31){
        // console.log(d.getDate() - day.value);
        resultDay.innerHTML = dd;
        document.getElementById("day-extra").innerHTML = "";
        day.style.border = "2px solid rgba(0, 0, 0, 0.1)";

    }
    else{
        // preventDefault();
        day.style.border = "1px solid red";
        document.getElementById("day-extra").innerHTML = "<p>Must be Valid Date</p>";
    }
    if(month.value >= 1 && month.value <= 12){
        // console.log((-1)*(1+d.getMonth() - month.value));
        resultMonth.innerHTML = mm;
        document.getElementById("month-extra").innerHTML = "";
        month.style.border = "2px solid rgba(0, 0, 0, 0.1)";
    }
    else{
        month.style.border = "1px solid red";
        document.getElementById("month-extra").innerHTML = "<p>Must be Valid month</p>";
    }
    if(year.value >= 1940 && year.value <= 2024){
        // console.log(d.getFullYear() - year.value);
        resultYear.innerHTML = yy;
        document.getElementById("year-extra").innerHTML = "";
        year.style.border = "2px solid rgba(0, 0, 0, 0.1)";
    }
    else{
        year.style.border = "1px solid red";
        document.getElementById("year-extra").innerHTML = "<p>Must be Valid year</p>";
    }

    

    // console.log(dd, mm, yy);
});