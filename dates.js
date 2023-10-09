//DT - date time
var currentDT = new Date();
var currentTimeUnix = currentDT.getTime();
var currentFullYR = currentDT.getFullYear();
var currentDay = currentDT.getDay();
var currentMonth = currentDT.getMonth();
var currenttoDateString = currentDT.toDateString();
var milliseconds = currentDT.getMilliseconds();
var TimezoneOffset = currentDT.getTimezoneOffset();
var UTCDate = currentDT.getUTCDate();
var Locale = currentDT.toLocaleDateString();


console.log(currentTimeUnix);
console.log(currentFullYR);
console.log(currentMonth);
console.log(currentDay);
console.log(currenttoDateString);
console.log(milliseconds);
console.log(TimezoneOffset);
console.log(UTCDate);
console.log(Locale);


var someDateTime = 1668536092000;
var someRandomDate = "12/10/2023";
var convertedDateTime = new Date(someRandomDate).getTime();
var convertedDateTime = new Date(1668536092000);
console.log(convertedDateTime.getDate());




//console.log(currentDT);