function updateTime() {
    document.getElementById(hours);
    document.getElementById(minutes);
    document.getElementById(seconds);
    

    const clock = new Date();
    dateObj.getHours()
    dateObj.getMinutes()
    dateObj.getSeconds()
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}
setInterval(func, 1000)
