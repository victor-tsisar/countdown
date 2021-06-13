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
    
    const days = document.querySelector('.day');
    const hours = document.querySelector('.hour');
    const minutes = document.querySelector('.minute');
    const seconds = document.querySelector('.second');

    days.innerHTML = formatTime(textDay);
    textDay === 1 ? days.nextElementSibling.textContent = 'Day' : days.nextElementSibling.textContent = 'Days';

    hours.innerHTML = formatTime(textHour);
    textHour === 1 ? hours.nextElementSibling.textContent = 'Hour' : hours.nextElementSibling.textContent = 'Hours';
    
    minutes.innerHTML = formatTime(textMinute);
    textMinute === 1 ? minutes.nextElementSibling.textContent = 'Minute' : minutes.nextElementSibling.textContent = 'Minutes';

    seconds.innerHTML = formatTime(textSecond);
    textSecond === 1 ? seconds.nextElementSibling.textContent = 'Second' : seconds.nextElementSibling.textContent = 'Seconds'

    if (gap < 0) {
        newYear = `December 31, ${(new Date().getFullYear()) + 1} 00:00:00`;
    }
};

setInterval(countdown, 1000);
