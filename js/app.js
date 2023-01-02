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