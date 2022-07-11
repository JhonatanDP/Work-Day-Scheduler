# Work-Day-Scheduler

- Project Repository address: https://github.com/JhonatanDP/Work-Day-Scheduler
- Project live web page: https://jhonatandp.github.io/Work-Day-Scheduler/

## Full Site
![_Users_jhonatandiaz_Desktop_Bootcamp_Modules_Module-05_Challenge_work-day-scheduler_index html](https://user-images.githubusercontent.com/106892660/178174969-c0925ee6-db88-484f-9bf3-5666fc648ce9.png)
## Descripton

- This project is about creating work day scheduler from 9am to 5pm and saving task in localStorage


### Acceptance Criteria

- GIVEN I am using a daily planner to create a schedule
- WHEN I open the planner
- THEN the current day is displayed at the top of the calendar
- WHEN I scroll down
- THEN I am presented with time blocks for standard business hours
- WHEN I view the time blocks for that day
- THEN each time block is color-coded to indicate whether it is in the past, present, or future
- WHEN I click into a time block
- THEN I can enter an event
- WHEN I click the save button for that time block
- THEN the text for that event is saved in local storage
- WHEN I refresh the page
- THEN the saved events persist


## Work done to complete the challenge
- I designed a web page and reuse giving CSS style.
- I divided the html container section in 8 div.
- I created a section in each div for the hour, text or task and the save buttom.
- I added more classes and id.
- I used bootstrap grid system (row and col) to organize the view of my application.
- I added classes for icons.
- I declared a variable and used moment with format to show the current day at the top of the application.
- I used JQuery to add a event listening to all child inside the container section by the class .saveBtn.
- I declared two variables for the time and the task (description) to be save in the localstorage.  
- I added an unique id class for every hour so I can save it in the localStorage and when I stracted for the localStorage
  I can check where it needs to be save in the schedule.
- I check the localStorage for any save data for each hour.
- I declare variable with number value for each hour so I can use it to compare.
- I used moment to save the current hour.
- I compare the current hour with each hour during the work day to be able to apply the different css classes giving.
