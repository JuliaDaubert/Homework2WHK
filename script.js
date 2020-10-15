//Send Mail using contact form

$(".btn").click(function () {
    console.log("Btn clicked");
    sendMail();
});

function sendMail() {
    var yourName = document.getElementById("fname").value
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    document.location.href = "mailto:bush.d.julia@gmail.com?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
};


//Click event for img

$(".holidayplanner").click(function(){
    console.log("hld click");
    redirectHolidayplanner();
});

function redirectHolidayplanner() {
    window.open("https://grahamelphick.github.io/holiday-weather-planner/")
}

$("#dayplanner").click(function(){
    console.log("hld click");
    redirectDayPlanner();
});

function redirectDayPlanner() {
    window.open("https://juliadaubert.github.io/Daily-Planner/")
}


$("#timedQuiz").click(function(){
    console.log("hld click");
    redirecttimedQuiz();
});

function redirecttimedQuiz() {
    window.open("https://juliadaubert.github.io/Timed-Quiz/")
}


