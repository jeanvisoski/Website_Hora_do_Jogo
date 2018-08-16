$(document).ready(function () {
    $('#calendarTable').DataTable({
        "language": {
            "lengthMenu": "Exibir _MENU_ registros por página",
            "zeroRecords": "Nada encontrado - desculpe :(",
            "info": "Mostrando página _PAGE_ de _PAGES_",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(filtrado do total de registros _MAX_)"
        }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('#newGame').on('shown.bs.modal', function () {
        $('#newGameBotton').trigger('focus')
    })
    $('#editGame').on('shown.bs.modal', function () {
        $('#editGameBotton').trigger('focus')
    })
});