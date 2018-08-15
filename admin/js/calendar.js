
$(function () {
    $('#calendarLink').click(function () {

        $('#resultCalendarDate').append("<tr>" +
            "<td class=\"agenda-date active\" rowspan=\"2\">" +
            "<div class=\"dayofmonth ng-binding\">15</div>" +
            "<div class=\"dayofweek ng-binding\">Quinta</div>" +
            "<div class=\"shortdate text-muted ng-binding\">Dezembro, 2018</div>" +
            "</td>" +
            "</tr>" +
            "<tr id=\"resultCalendarTime\">" +
            "<td class=\"agenda-time ng-binding\">14:00</td>" +
            "<td class=\"agenda-events\">" +
            "<div class=\"agenda-event ng-binding\">FUSTSAL</div>" +
            "</td>" +
            "</tr>");
            $('#resultCalendarDate').append("<tr>" +
            "<td class=\"agenda-date active\" rowspan=\"2\">" +
            "<div class=\"dayofmonth ng-binding\">16</div>" +
            "<div class=\"dayofweek ng-binding\">Sexta</div>" +
            "<div class=\"shortdate text-muted ng-binding\">Dezembro, 2018</div>" +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td class=\"agenda-time ng-binding\">14:00</td>" +
            "<td class=\"agenda-events\">" +
            "<div class=\"agenda-event ng-binding\">FUSTSAL</div>" +
            "</td>" +
            "</tr>");




    });
});





