"use strict";
let newYear = 'December 31, 2021 00:00:00';

const countdown = () => {
    const currentDate = new Date(newYear).getTime();

    const now = new Date().getTime();
    const gap = currentDate - now;
    const time = {
        second: 1000,
        minute: 60000,
        hour: 3600000,
        day: 86400000,
    }

    const textDay = Math.floor(gap / time.day);
    const textHour = Math.floor(gap % time.day / time.hour);
    const textMinute = Math.floor(gap % time.hour / time.minute);
    const textSecond = Math.floor(gap % time.minute / time.second);

    const formatTime = (time) => {
        return time < 10 ? (`0${time}`) : time;
    }

    document.querySelector('.day').innerHTML = formatTime(textDay);
    document.querySelector('.hour').innerHTML = formatTime(textHour);
    document.querySelector('.minute').innerHTML = formatTime(textMinute);
    document.querySelector('.second').innerHTML = formatTime(textSecond);

    if (gap < 0) {
        newYear = `December 31, ${(new Date().getFullYear()) + 1} 00:00:00`;
    }
};

setInterval(countdown, 1000);
