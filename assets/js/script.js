$(document).ready(function () {
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("hour-")[1];
    var currentHour = moment().hour();

    if (timeBlock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (timeBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })

  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
  });
  
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});


/*
GIVEN I am using a daily planner to create a schedule

✓✓✓✓✓  WHEN I open the planner 
✓✓✓✓✓  THEN the current day is displayed at the top of the calendar

✓✓✓✓✓  WHEN I scroll down
✓✓✓✓✓  THEN I am presented with time blocks for standard business hours

✓✓✓✓✓  WHEN I view the time blocks for that day
✓✓✓✓✓  THEN each time block is color-coded to indicate whether it is in the past, present, or future

✓✓✓✓✓  WHEN I click into a time block
✓✓✓✓✓  THEN I can enter an event

✓✓✓✓✓  WHEN I click the save button for that time block
✓✓✓✓✓  THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
*/