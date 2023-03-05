const semicircles = document.querySelectorAll('.semicircle');
const timer = document.querySelector('.timer');

// input
let hr = 0;
let min = 0;
let sec = 10;

// why do i have to out this here for the function to be called and work?
changeMinValue();
console.log(min);
function changeMinValue() {
    min = 1;
  }

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const starTime = Date.now();
const futureTime = starTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();  

function countDownTimer() {
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    const angle = (remainingTime / setTime) * 360;

    // progress indicator
    if(angle > 180) {
        semicircles[2].style.display = `none`;
        semicircles[0].style.transform = `rotate(180deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicircles[2].style.display = `block`;
        semicircles[0].style.transform = `rotate(${angle}deg)`;
        semicircles[1].style.transform = `rotate(${angle}deg)`;
    } 

    // timer
    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    timer.innerHTML = 
    `<div>${hrs}</div>
    <div class = "colon">:</div>
    <div>${mins}</div>
    <div class = "colon">:</div>
    <div>${secs}</div>`;

    // 5sec-condition 
    if(remainingTime <= 6000) {
        semicircles[0].style.backgroundColor = "red";
        semicircles[1].style.backgroundColor = "red";
        timer.style.color = "red";
    }

    // end
    if(remainingTime < 0) {
        clearInterval(timerLoop);
        semicircles[0].style.display = 'none';
        semicircles[1].style.display = 'none';
        semicircles[2].style.display = 'none';
    
        timer.innerHTML = 
        `<div>00</div>
        <div class = "colon">:</div>
        <div>00</div>
        <div class = "colon">:</div>
        <div>00</div>`;

        timer.style.color = "lightgray";
    }
}

// meditation settings

function meditationCounter(click) {
    const meditationClicks = document.getElementById('meditationClicks');
    const sumvalue = parseInt(meditationClicks.innerText) + click;
    console.log(sumvalue + click);
    meditationClicks.innerText = sumvalue;
    // timer between values 0 - 5 (bells)
    if(sumvalue < 0) {
        meditationClicks.innerText = 0;
    }
    if(sumvalue > 180) {
        meditationClicks.innerText = 180;
    }
}


function intervalCounter(click) {
    const intervalClicks = document.getElementById('intervalClicks');
    const sumvalue = parseInt(intervalClicks.innerText) + click;
    console.log(sumvalue + click);
    intervalClicks.innerText = sumvalue;
    // timer between values 0 - 5 (bells)
    if(sumvalue < 0) {
        intervalClicks.innerText = 0;
    }
    if(sumvalue > 5) {
        intervalClicks.innerText = 5;
    }
}


function warmupCounter(click) {
    const totalClicksWarmup = document.getElementById('totalClicksWarmup');
    const sumvalue = parseInt(totalClicksWarmup.innerText) + click;
    console.log(sumvalue + click);
    totalClicksWarmup.innerText = sumvalue;
    // timer between values 0 - 300 (seconds)
    if(sumvalue < 0) {
        totalClicksWarmup.innerText = 0;
    }
    if(sumvalue > 300) {
        totalClicksWarmup.innerText = 300;
    }
}