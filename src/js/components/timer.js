function timer(id, days) {

    const deadLine = new Date().setDate(new Date().getDate() + days);


    function getRemainingTime(endtime) {
        const diff = endtime - new Date();
        const days = diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : '00';
        const hours = diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : '00';
        const minutes = diff > 0 ? Math.floor((diff / 1000 / 60) % 60) : '00';
        const seconds = diff > 0 ? Math.floor((diff / 1000) % 60) : '00';

        return {
            diff,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function declensionNum(num, words) {
        return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const daysText = timer.querySelector('#daysText');
        const hours = timer.querySelector('#hours');
        const hoursText = timer.querySelector('#hoursText');
        const minutes = timer.querySelector('#minutes');
        const minutesText = timer.querySelector('#minutesText');
        const seconds = timer.querySelector('#seconds');
        const secondsText = timer.querySelector('#secondsText');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const time = getRemainingTime(endtime);

            days.innerHTML = +time.days > 9 ? time.days : `0${time.days}`;
            hours.innerHTML = +time.hours > 9 ? time.hours : `0${time.hours}`;
            minutes.innerHTML = +time.minutes > 9 ? time.minutes : `0${time.minutes}`;
            seconds.innerHTML = +time.seconds > 9 ? time.seconds : `0${time.seconds}`;

            daysText.textContent = declensionNum(time.days, ['день', 'дня', 'дней']);
            hoursText.textContent = declensionNum(time.hours, ['час', 'часа', 'часов']);
            minutesText.textContent = declensionNum(time.minutes, ['минута', 'минуты', 'минут']);
            secondsText.textContent = declensionNum(time.seconds, ['секунда', 'секунды', 'секунд']);

            if (time <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadLine);
}

export default timer;