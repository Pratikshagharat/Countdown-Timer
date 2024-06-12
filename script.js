let countdown;
let countdownDate;
function startTimer()
{
    const dateInput=document.getElementById('date').value;
    const timeInput=document.getElementById('time').value;
    if(!dateInput || !timeInput)
        {
            alert('Please enter both date and time');
            return;
        }
        const dateTimeString =`${dateInput}T${timeInput}:00`;
        countdownDate=new Date(dateTimeString).getTime();
        updateTimer();
        clearInterval(countdown);
        countdown = setInterval(updateTimer,1000);
}
function resetTimer()
{
    clearInterval(countdown);
    document.getElementById('date').value='';
    document.getElementById('time').value='';
    document.getElementById('days').innerHTML='00';
    document.getElementById('hours').innerHTML='00';
    document.getElementById('minutes').innerHTML='00';
    document.getElementById('seconds').innerHTML='00';
}
function restartTimer()
{
    if(!countdownDate)
        {
            alert('Please start the timer first');
            return;
        }
        clearInterval(countdown);
        updateTimer();
        countdown=setInterval(updateTimer,1000);
}
function updateTimer()
{
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if(distance<0)
        {
            clearInterval(countdown);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
            alert('Countdown finished');
            return;
        }
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/1000);
        document.getElementById('days').innerHTML=String(days).padStart(2,'0');
        document.getElementById('hours').innerHTML=String(hours).padStart(2,'0');
        document.getElementById('minutes').innerHTML=String(minutes).padStart(2,'0');
        document.getElementById('seconds').innerHTML=String(seconds).padStart(2,'0');
}