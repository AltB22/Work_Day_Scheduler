// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var displayDateEl = $('#currentDay');
var timeBlockHour = $('.time-block');
var eventData = $('.description');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$('.saveBtn').on('click', function() {
 var textContent = $(this).siblings('.description').val();
 var key = $(this).parent().attr('id');

 localStorage.setItem(key, textContent);
//  console.log(textContent);

 
})
});
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// function getCurrentTime() {
  // console.log(timeBlockHour)
  
  // for (i = 0; i < timeBlockHour.length; i++) {
  $.each($('.time-block'), function() {
  var currentHour = dayjs().hour();
  // console.log(currentHour);
  // var currentHourBlock = [];
  // console.log(timeBlockHour[i]);
  // var hourBlock = timeBlockHour[i];
  var hourBlockId = timeBlockHour.attr('id');
  // console.log(hourBlock);
  
  if (hourBlockId < currentHour) {
  // console.log(hourBlock);
    $(this).addClass("past");
  }
  else if (hourBlockId === currentHour) {
      $(this).addClass("present");
    }
  else {
    ($(this).addClass("future"));
  }
  });
// };

// getCurrentTime();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // localStorage.getItem(textContent)

  let displayEvent = () => {
  Object.keys(localStorage).forEach((key) => {
  // for (i = 0; i < localStorage.length; i++) {
  // var key = localStorage.key;
  // console.log(key);
  var savedEvent = localStorage.getItem(key);

  if (key === )
  eventData.textContent = savedEvent;
  console.log(savedEvent);
  });
  }

displayEvent();
  //
  // TODO: Add code to display the current date in the header of the page.
// var CurrentDateAndTime = new Date();
function displayDate() {
  var CurrentDateAndTime = dayjs().format('dddd, MMMM D');
  displayDateEl.text(CurrentDateAndTime + 'th');
}

displayDate();








