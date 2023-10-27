const date = new Date();
console.log(date)
let month = date.getMonth();
let monthWord = "";
// get the corrent month into a string to send back to the calender
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
// Varible monthWord contains the current Month
console.log("MonthWord " + monthWord);
//document.dom.title() = monthword;
let displayElement = document.querySelector("#title");
displayElement.innerHTML = monthWord;
