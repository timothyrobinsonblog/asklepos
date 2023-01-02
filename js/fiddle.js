function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    // timer between values 0 - 180 (minutes)
    if(sumvalue < 0) {
        totalClicks.innerText = 0;
    }
    if(sumvalue > 180) {
        totalClicks.innerText = 180;
    }
}