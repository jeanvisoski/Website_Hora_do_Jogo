$(function () {
    $('#dashboardLink').click(function (i) {
        $('.calendar').removeClass('displayFlex');
        $('#calendarLink').removeClass('active');
        $('.calendar').addClass('displayNone');
        $('#dashboard').removeClass('displayNone');
        $('.games').addClass('displayNone');
        $('#dashboard').addClass('displayFlex');
        $('#dashboardLink').addClass('active');

    });
});

$(function () {
    $('#calendarLink').click(function (i) {
        $('#dashboard').removeClass('displayFlex');
        $('#dashboardLink').removeClass('active');
        $('#dashboard').addClass('displayNone');
        $('.games').addClass('displayNone');
        $('.calendar').removeClass('displayNone');
        $('#calendarLink').addClass('active');

    });
});

$(function () {
    $('#gamesLink').click(function (i) {
        $('#dashboard').removeClass('displayFlex');
        $('#dashboardLink').removeClass('active');
        $('#dashboard').addClass('displayNone');
        $('.games').removeClass('displayNone');
        $('#gamesLink').addClass('active');
        $('.calendar').addClass('displayNone');

    });
});

