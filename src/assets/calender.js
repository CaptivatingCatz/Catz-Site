const date = new Date();
console.log(date)
let month = date.getMonth();
let day = date.getDay();
let currentDay = date.getDate();
let currentYear = date.getFullYear();

//<!--add one to account for zero as 1 -->
//console.log(month + 1);
let monthWord = "";
let dayWord = "";
//<!-- get the corrent month into a string to send back to the calender -->
switch (date.getMonth()) {
  case 0:
    monthWord = "January";
    break;
  case 1:
    monthWord = "Febuary";
    break;
  case 2:
     monthWord = "March";
    break;
  case 3:
   monthWord = "April";
    break;
  case 4:
    monthWord = "May";
    break;
  case 5:
    monthWord = "June";
    break;
  case 6:
    monthWord = "July";
  case 7:
    monthWord = "August";
    break;
  case 8:
    monthWord = "September";
    break;
  case 9:
    monthWord = "October";
    break;
   case 10:
    monthWord = "November";
    break;
  case 11:
    monthWord = "December";
    break;
}

switch (date.getDay()) {
  case 0:
    dayWord = "Sunday";
    break;
  case 1:
    dayWord = "Monday";
    break;
  case 2:
     dayWord = "Tuesday";
    break;
  case 3:
   dayWord = "Wednesday";
    break;
  case 4:
    dayWord = "Thursday";
    break;
  case 5:
    dayWord = "Friday";
    break;
  case 6:
    dayWord = "Saturday";
    break;
}
//console outputs
console.log("DayWord: " + dayWord);
console.log("MonthWord: " + monthWord);
console.log("CurrentDay: " + currentDay);
console.log("CurrentYear: " + currentYear);
//console.log("Day: " + day);


//document.dom.title() = monthword;
let monthElement = document.querySelector("#title");
monthElement.innerHTML = monthWord;

let dayElement = document.querySelector("#weekDay");
dayElement.innerHTML = dayWord;
