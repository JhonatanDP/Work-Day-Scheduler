
var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").html(currentDay);


$(".saveBtn").on("click", function() {

    var task = $(this).siblings(".task-text").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time,task);
});

//load data from localStorage 

//load data for 9am
$("#9am-row .task-text").val(localStorage.getItem("9am-row"));
//load data for 10am
$("#10am-row .task-text").val(localStorage.getItem("10am-row"));
//load data for 11am
$("#11am-row .task-text").val(localStorage.getItem("11am-row"));
//load data for 12pm
$("#12pm-row .task-text").val(localStorage.getItem("12pm-row"));
//load data for 1pm
$("#1pm-row .task-text").val(localStorage.getItem("1pm-row"));
//load data for 2pm
$("#2pm-row .task-text").val(localStorage.getItem("2pm-row"));
//load data for 3pm
$("#3pm-row .task-text").val(localStorage.getItem("3pm-row"));
//load data for 4pm
$("#4pm-row .task-text").val(localStorage.getItem("4pm-row"));
//load data for 5pm
$("#5pm-row .task-text").val(localStorage.getItem("5pm-row"));

// converting time and display

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('H');

// 9am 
if (currentHour < hour9) {
    $("#9am-task").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-task").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-task").addClass("present");
}

// 10am 
if (currentHour < hour10) {
    $("#10am-task").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-task").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-task").addClass("present");
}

// 11am
if (currentHour < hour11) {
    $("#11am-task").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-task").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-task").addClass("present");
}

// 12pm
if (currentHour < hour12) {
    $("#12pm-task").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-task").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-task").addClass("present");
}

// 1pm
if (currentHour < hour1) {
    $("#1pm-task").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-task").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-task").addClass("present");
}

// 2pm
if (currentHour < hour2) {
    $("#2pm-task").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-task").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-task").addClass("present");
}

// 3pm
if (currentHour < hour3) {
    $("#3pm-task").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-task").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-task").addClass("present");
}

// 4pm
if (currentHour < hour4) {
    $("#4pm-task").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-task").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-task").addClass("present");
}

// 5pm
if (currentHour < hour5) {
    $("#5pm-task").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-task").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-task").addClass("present");
}
