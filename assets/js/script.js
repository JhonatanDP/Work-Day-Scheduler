var tasks = {};


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

