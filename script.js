$(document).ready (function() {
console.log();
});

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime)

var hour9 = $("#9:00am");
var hour10 = $("#10:00am");
var hour11 = $("#11:00am");
var hour12 = $("#12:00pm");
var hour13 = $("#1:00pm");
var hour14 = $("#2:00pm");
var hour15 = $("#3:00pm");
var hour16 = $("#4:00pm");
var hour17 = $("#5:00pm");

var everyHour = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
('#dateTime').text(everyHour);

function scheduleEvents() {
  var event9 = JSON.parse(localStorage.getItem("9:00 AM"));
  hour9.val(event9);
  var event10 = JSON.parse(localStorage.getItem("10:00 AM"));
  hour10.val(event10);
  var event11 = JSON.parse(localStorage.getItem("11:00 AM"));
  hour11.val(event11);
  var event12 = JSON.parse(localStorage.getItem("12:00 PM"));
  hour12.val(event12);
  var event13 = JSON.parse(localStorage.getItem("1:00 PM"));
  hour13.val(event13);
  var event14 = JSON.parse(localStorage.getItem("2:00 PM"));
  hour14.val(event14);
  var event15 = JSON.parse(localStorage.getItem("3:00 PM"));
  hour15.val(event15);
  var event16 = JSON.parse(localStorage.getItem("4:00 PM"));
  hour16.val(event16);
  var event17 = JSON.parse(localStorage.getItem("5:00 PM"));
  hour17.val(event17);
}

function backgroundColor () {
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
};

$(document).ready(function(){
  scheduleEvents()
  backgroundColor()
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, userInput);
    })
});