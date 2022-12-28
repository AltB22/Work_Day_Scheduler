//Assignemt:
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Each of the below global variable uses jquery ($) to call attributes from index.html.
var displayDateEl = $('#currentDay'); //uses jquery to correspond the id of the p elemnent within the header in html.
var timeBlockEl = $('.time-block');// class of each parent div for every time block row
var eventDescription = $('.description');//text area content in eachn hour block

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

$('.saveBtn').on('click', function() { //listener for class of saveBtn on click executes the below

 var textContent = $(this).siblings('.description').val();//traverses from saveBtn to the value of its sibling text area element (class of description)
 var key = $(this).parent().attr('id');//sets the key var as being equal to the parent element (div) for each time block

 localStorage.setItem(key, textContent); //saves key and textContent as pairs in local storage.

})
});
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  $.each($('.time-block'), function () {//timeoutHourBlock//iterates through each time block
   
  let currentHour = dayjs().hour(); //uses dayjs to get the current hour of the day (in 24hr time)

  let currentHourBlock = $(this).attr('id');//sets var currentHourBlock equal to the id ('9', '10','11, etc..) of each time block it iterates through.
  
  if (currentHourBlock < currentHour) {  //if currentHourBlock is less than the currentHour...
      $(this).addClass("past"); //then add class of 'past' (which will style the text area grey)
    }
  else if (currentHourBlock == currentHour) {  //if currentHourBlock is equal in value to the currentHour...
      $(this).addClass("present"); //then add class of 'present' (which will style the text area red)
    }
  //  }
  else  
      ($(this).addClass("future")); //otherwise add class of 'future' (which will style the text area green)
      
   } 
);


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
  Object.keys(localStorage).forEach(function(key) { //itereates through the object in localStorage reqpresented by the (key, value) pairs that may exist there from on click event (setItem) function above

  $(`#${String(key)} .description`).val(localStorage.getItem(key)); //sets the text content (getItem) of each text area (class = description using jquery) to be equal to the value of the corresponding key in local storage.
  });

  // TODO: Add code to display the current date in the header of the page.

function displayDate() {
  var currentDate = dayjs().format('dddd, MMMM D');//uses dayjs to get the current date in format ex: December 21, 2022
  
//Below if else if series adds 'st', 'rd', 'nd', or 'th' appropriapely to the end of each date of the month created by dayjs.  Note..I tried using esle rather than list the rest out...but it stayed stuck on 'rd'.  I also tried switch case (see commented out on line 111 this code is unfinished just sample left over) but returned undefined.  Will research this for more streamlined solution.
  if (currentDate == 1, 21, 31) {
    displayDateEl.text(currentDate + 'st');
  }
  else if (currentDate == 2, 22) {
    displayDateEl.text(currentDate + 'nd');
  }
  else if (currentDate == 3, 23) {
    displayDateEl.text(currentDate + 'rd');
  }
  else if (currentDate == 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,28,29,30);{
  displayDateEl.text(currentDate + 'th');
  };
};

displayDate(); //calls the above function.



//let currentDay = (new Date().getDate())

// switch(currentDay){
  
//   // case 1,21,31:
//   //   daySuffix = 'st';
//   //   break;
//   // case 2,22:
//   //   daySuffix = 'nd';
//   //   break;
//      case 3,23:
//      daySuffix = 'th';
//     // break;
// //   default:
// //     daySuffix = 'th';
// }


