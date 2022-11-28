// Updates current day.
currentDay = moment();
$("#currentDay").text(currentDay.format("[Today is] dddd, MMMM Do"));

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        let note = $(this).siblings('.text-area').val();
        let time = $(this).parent().attr('id');
        localStorage.setItem(time, note);
    });

    // Checks current time and parses past, present, and future attributes accordingly.
    function validateTime() {
        let currentTime = moment().format('k');
        $('.time-section').each(function () {
            let time = parseInt($(this).attr('id').split('-')[1]);
            if(time < currentTime) {
                $(this).addClass('past');
            } else if (time > currentTime) {
                    $(this).addClass('future');
            } else {
                $(this).addClass('present');
            }
        });
    }
    validateTime();

    // Iterates through local storage, finds key value is stored under.
    function fetchLocalStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            let savedKey = localStorage.key(i);
            let savedValue = localStorage.getItem(savedKey);
            $('.time-section').each(function () {
                let time = $(this).attr('id');
                if (time == savedKey) {
                    $(this).find(".text-area").val(savedValue);
                    return false;
                } else {
                    return;
                }
            }
            
        )};
    }
    fetchLocalStorage();
});