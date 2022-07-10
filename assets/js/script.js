var tasks = {};


var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").html(currentDay);


var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        task: [],
        hour: []
      };
    }
  
    // loop over object properties  
    $.each(tasks, function(list, arr) {
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.hour, list);
      });
    });
  };

// var tasks = {
//     task : "THIS",
//     time: "9PM"
// }

// localStorage.setItem("tasks", JSON.stringify(tasks));