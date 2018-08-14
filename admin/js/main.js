$(function(){
    $('#dashboardLink').click(function(i){
        $('#calendar').removeClass('displayFlex');
        $('#calendar').addClass('displayNone');
        $('#dashboard').removeClass('displayNone');
        $('#dashboard').addClass('displayFlex');
        
    });
});

$(function(){
    $('#calendarLink').click(function(i){
        $('#dashboard').removeClass('displayFlex');
        $('#dashboard').addClass('displayNone');
        $('#calendar').removeClass('displayNone');
        $('#calendar').addClass('displayFlex');
        
    });
});

