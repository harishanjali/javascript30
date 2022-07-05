
let timeLeftContainer = document.querySelector('.display-time-left');
let endTime = document.querySelector('.display-end-time');
let timeButtons = document.querySelectorAll('[data-time]');
let countdown;

function timer(seconds){
    clearInterval(countdown);// clearing interval if already running
    let now  = Date.now();
    let then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then);
    countdown = setInterval(()=>{// making a interval of time for particualar time
        const secondsLeft = Math.round((then-Date.now())/1000);// getting current milliseconds and dividing
        if(secondsLeft<=0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    },1000);
}
function displayTimeLeft(seconds){
    // for displaying time on elements
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds%60;
    
    let display = `${minutes}:${remainderSeconds < 10 ? '0' : ""}${remainderSeconds}`
    timeLeftContainer.textContent = display;
    document.title = display;
}

function displayEndTime(timeStamp){
    //end time on document
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    //template literal for text of end time used ternary operator
    endTime.textContent = `Be Back At ${hour>12?hour-12:hour}:${minutes<10 ? '0' : ''}${minutes}`
}

function startTimer(){
    const seconds = parseInt(this.dataset.time)
    timer(seconds);
}

timeButtons.forEach(button=>button.addEventListener('click',startTimer));
document.customForm.addEventListener("submit",function(e){
    //submitting the input form
    e.preventDefault();
    const minutes = this.minutes.value;
    
    let seconds = minutes * 60;

    timer(seconds);
    this.reset();
})
