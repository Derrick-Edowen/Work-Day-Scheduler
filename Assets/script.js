var timeDisplayElement = $('#time-display');
function displayTime() {
    var currentTime = moment().format('h:mm:ss a [on] MMMM DD, YYYY ');
    timeDisplayElement.text(currentTime);
}
setInterval(displayTime,  1000);

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })

        function hours() {
        var timeBlock = moment().hour();
        $('.time-block').each(function() {
            var rowTime = parseInt($(this).attr('id').split('hour')[1]);
            if (rowTime < timeBlock) {
                $(this).addClass('past');
            } else if (rowTime === timeBlock) {
                $(this).addClass('present');
            } else {
                $(this).addClass('future');
            }
        })
    }

    $('hour9 .description').val(localStorage.getItem('hour9'));
    $('hour10 .description').val(localStorage.getItem('hour10'));
    $('hour11 .description').val(localStorage.getItem('hour11'));
    $('hour12 .description').val(localStorage.getItem('hour12'));
    $('hour13 .description').val(localStorage.getItem('hour13'));
    $('hour14 .description').val(localStorage.getItem('hour14'));
    $('hour15 .description').val(localStorage.getItem('hour15'));
    $('hour16 .description').val(localStorage.getItem('hour16'));
    $('hour17 .description').val(localStorage.getItem('hour17'));

    hours()

 
})

