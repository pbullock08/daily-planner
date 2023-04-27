//variables for the code below in the order that they appear 
var today = dayjs();
var date = $('#currentDay');
var timeEl = $('.time-block');
var buttonEl = $('.saveBtn');
var msgEl = $('.displayMsg');
var inputEl = $('textarea');

// code is wrapped in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html
$(function () {

  // code to display the current date in the header of the page
  function setDate() {
    if (today.$D === 4 || today.$D === 5 || today.$D === 6 || today.$D === 7 || today.$D === 8 || today.$D === 9 || today.$D === 10 || today.$D === 11 || today.$D === 12 || today.$D === 13 || today.$D === 14 || today.$D === 15 || today.$D === 16 || today.$D === 17 || today.$D === 18 || today.$D === 19 || today.$D === 20 || today.$D === 24 || today.$D === 25 || today.$D === 26 || today.$D === 27 || today.$D === 28 || today.$D === 29 || today.$D === 30) {
      date.text(today.format('dddd, MMMM D') + 'th');
    } else if (today.$D === 1 || today.$D === 21 || today.$D === 31) {
      date.text(today.format('dddd, MMMM D') + 'st');
    } else if (today.$D === 2 || today.$D === 22) {
      date.text(today.format('dddd, MMMM D') + 'nd');
    } else {
      date.text(today.format('dddd, MMMM D') + 'rd');
    }
  };

  setDate();

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
  };

  setClass();

  // event listener on the save button to call the function to push the to-dos into local storage and display them on the webpage
  buttonEl.on("click", function (event) {
    event.preventDefault();

    var localItem = $(this).parent().attr('id');
    var item = $(this).siblings('textarea').val();
    localStorage.setItem(localItem, item);

    //display message once to-do is saved 
    var saveMsg = $('<p>');
    saveMsg.text('Appointment added to localStorage ✔');
    saveMsg.addClass('msg');
    msgEl.append(saveMsg);

    setTimeout(function () {
      $('.msg').css('display', 'none');
    }, 3000);
  });

  // code to set any user input that was saved in localStorage as the values of the corresponding textarea elements
  $('#9').children('textarea').val(localStorage.getItem(9));
  $('#10').children('textarea').val(localStorage.getItem(10));
  $('#11').children('textarea').val(localStorage.getItem(11));
  $('#12').children('textarea').val(localStorage.getItem(12));
  $('#13').children('textarea').val(localStorage.getItem(13));
  $('#14').children('textarea').val(localStorage.getItem(14));
  $('#15').children('textarea').val(localStorage.getItem(15));
  $('#16').children('textarea').val(localStorage.getItem(16));
  $('#17').children('textarea').val(localStorage.getItem(17));

  // //click event to remove previous event when you click in the text area 
  $.each(inputEl, function (i, textBox) {
    textBox.addEventListener('click', function (event) {
      textBox.value = '';
    });
  });
});
