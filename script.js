$(document).ready (function() {
console.log();
});

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
console.log(dateTime)

$("#clearFieldsBtn").click(function(event) {
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});