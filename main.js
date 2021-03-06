// intercetto il click su una voce principale del menu
$('#grid-menu > li > a').click(function() {
    // recupero il tag ul con classe dropmenu che è suo fratello
    var dropmenu = $(this).next('.dropmenu');

    // valuto se l'elemento su cui ho cliccato ha già il dropdown aperto
    if(dropmenu.is(':visible')) {
        // se sì => ho cliccato la stessa voce per chiuderlo
        dropmenu.removeClass('visibility');
    } else {
        // se no => ho cliccato una nuova voce per aprirlo
        // chiudo altri eventuali dropdown aperti in precedenza
        $('.dropmenu').removeClass('visibility');
        // visualizzo il menu dropdown cliccato
        dropmenu.addClass('visibility');
    }
});

$(document).click(function(event) {
    var target = $(event.target);

    if (!target.hasClass('fa-th') && $('.dropmenu').hasClass('visibility')) {
        $('.dropmenu').removeClass('visibility');
    }
});

$('.read').click(function() {
    $('.privacy').fadeOut();
});
