const eldays = document.getElementById("days");
const elhours = document.getElementById("hours");
const elminutes = document.getElementById("minutes");
const elseconds = document.getElementById("seconds");

function countDown(){
    const bDay = new Date('27 Nov 2023');
    const currentDate = new Date();
    const totalSeconds = (bDay - currentDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %  24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    eldays.innerHTML = format(days);
    elhours.innerHTML = format(hours);
    elminutes.innerHTML = format(minutes);
    elseconds.innerHTML = format(seconds);
}

function format(time){
    return time < 10 ? `0${time}` : time;
}

//initial call
countDown();

setInterval(countDown, 1000);

// 361 minutes remaining / 60 = 6 hours 
// 361 minutes remaining % 60 = 1 minute 
// q = 6 hours
// r = 1 minute 

// 241 hours remaining / 24 = days
// 241 hours remaining % 24 = hours
// q = 100 days
// r = 1 hours 