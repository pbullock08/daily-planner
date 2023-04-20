var buttonEl = $('.saveBtn');
var inputEl = $('textarea');
var timeEl = $('.time-block');
var today = dayjs();
var date = $('#currentDay');

// Wrap code in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  buttonEl.on("click", function(event){
    //console.log(event.target);
    event.preventDefault();

    $.each(inputEl, function(i, inputText) {
      
    });

  }); 
    
  //inputText.value;
  // // var toDo = $()

  //code to apply the past, present, or future class to each time block by comparing the id to the current hour
  function setClass() {
    $.each(timeEl, function (i, timeBlock) {
      if (parseInt(timeBlock.attributes[0].value) === today.$H) {
        timeBlock.classList.add('present');
      } else if (parseInt(timeBlock.attributes[0].value) < today.$H) {
        timeBlock.classList.add('past');
      } else {
        timeBlock.classList.add('future');
      }
    });
  }

  setClass();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // code to display the current date in the header of the page
  function setDate() {
    if (today.$D === 4 ||today.$D === 5 || today.$D === 6 || today.$D === 7 || today.$D === 8 || today.$D === 9 || today.$D === 10 || today.$D === 11 || today.$D === 12 || today.$D === 13 || today.$D === 14 || today.$D === 15 || today.$D === 16 || today.$D === 17 || today.$D === 18 || today.$D === 19 || today.$D === 20 || today.$D === 24 || today.$D === 25 || today.$D === 26 || today.$D === 27 || today.$D === 28 || today.$D === 29 || today.$D === 30) {
      date.text(today.format('dddd, MMMM D') + 'th')
    }  else if (today.$D === 1 ||  today.$D === 21 || today.$D === 31) {
      date.text(today.format('dddd, MMMM D') + 'st')
    } else if (today.$D === 2 || today.$D === 22) {
      date.text(today.format('dddd, MMMM D') + 'nd')
    } else {
      date.text(today.format('dddd, MMMM D') + 'rd')
    }
  } 

  setDate();
});
