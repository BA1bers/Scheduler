//Targets the jquerry as the page loads
$(document).ready(function() {

    //displays the current day's date
    var today = moment().format('LLLL');
    $('#currentDay').text(today);

    var workHour = moment().hours()

    //Function created for timeblock, dayHours is set to the id for each hour
    $('.timeBlock').each(function() {
        var dayHours = parseInt(
            $(this).attr('id')
        )
        if(dayHours < workHour) {
            $(this).children('.description').addClass('past');
        } else if
        (dayHours === workHour) {
            $(this).children('.description').addClass('present');
        } else {
            $(this).children('.description').addClass('future');
        }
    })

    //allows the save button to save a task to local storage
    $(".saveBtn").on('click', function() {
        var saveTask = $(this).siblings('.description').val();
        var taskText = $(this).parent().attr('id');
        localStorage.setItem(taskText, saveTask);
        console.log(saveTask, taskText);
    });

    //Each hour is set as the key and the description in the timebox is set as the value
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#13pm .description").val(localStorage.getItem("1pm"));
    $("#14pm .description").val(localStorage.getItem("2pm"));
    $("#15pm .description").val(localStorage.getItem("3pm"));
    $("#16pm .description").val(localStorage.getItem("4pm"));
    $("#17pm .description").val(localStorage.getItem("5pm"));
    
});
