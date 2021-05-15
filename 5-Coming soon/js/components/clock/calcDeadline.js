function calcDeadline (targetDate) {

const clock = new Date();
const currentYear = clock.getFullYear();
const now = Date.now();

let fullCurrentDate = `${currentYear}-${targetDate}`
let turgetClock = new Date(fullCurrentDate);
let timeInMiliseconds = turgetClock.getTime();


if (timeInMiliseconds < now) {
    fullCurrentDate = `${currentYear + 1}-${targetDate}`
    turgetClock = new Date(fullCurrentDate);
    timeInMiliseconds = turgetClock.getTime();
}

const timeLeftMiliseconds = timeInMiliseconds - now; 
let timeInSeconds = Math.floor(timeLeftMiliseconds / 1000)

const days = Math.floor(timeInSeconds / 60 / 60 / 24);
timeInSeconds -= days * 60 * 60 * 24;

const hours = Math.floor(timeInSeconds / 60 / 60);
timeInSeconds -= hours * 60 * 60;

const minutes = Math.floor(timeInSeconds / 60);
timeInSeconds -= minutes * 60

const seconds = timeInSeconds;


    return [days, hours, minutes, seconds];
}

export{calcDeadline};