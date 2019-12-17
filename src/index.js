function CountDown(){
var moment = require('moment')
var endDate = "2019-12-25"
var timeLeft = moment(endDate) - moment()
timeLeft = moment.duration(timeLeft, "milliseconds")
console.log("left:",timeLeft.days(), timeLeft.hours(), timeLeft.minutes(),timeLeft.seconds())

document.querySelector(".countdown-days").innerHTML = "Days : " + timeLeft.days();
document.querySelector(".countdown-hours").innerHTML= "Hours : " + timeLeft.hours();
document.querySelector(".countdown-minutes").innerHTML = "Minutes : " + timeLeft.minutes();
document.querySelector(".countdown-seconds").innerHTML = "Seconds : " + timeLeft.seconds();
};
setInterval(CountDown,1000);