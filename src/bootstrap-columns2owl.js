$(document).ready(function(){
    $('[data-columns2owl!=""]').each(function(){
        var element = $(this);
        element.addClass("sm-slidelist");
    })

    // $(window).on('changed.zf.mediaquery', function (event, newsize, oldsize) {
    //     if (newsize == "small") {
    //         turnListsToSliders();
    //     } else {
    //         unturnListsToSliders();
    //     }
    // } );
    //
    // if (Foundation.MediaQuery.current == "small") {
    //     turnListsToSliders();
    // } else {
    //     unturnListsToSliders();
    // }

});

function turnListsToSliders() {
    $(".sm-slidelist").each(function(){
        var items = $(this).children();
        items.addClass("slidelist-item");
        items.wrapAll("<div class='slidelist'></div>");

        $(this).find(".slidelist").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            navigationText: [
                  "<i class='fa fa-chevron-left fa-2x'></i>",
                  "<i class='fa fa-chevron-right fa-2x'></i>"
                  ],
        });
    });
}

function unturnListsToSliders() {
    $(".sm-slidelist").each(function(){
        var element = $(this);
        console.log( "slidelist trovato: ", element.find(".slidelist").length);
        if (element.find(".slidelist").length > 0) {
            var items = element.find(".slidelist-item");
            element.find(".row.sm-slidelist").append(items);
            items.unwrap();
            element.find(".owl-carousel").data('owlCarousel').destroy();
            element.find(".owl-carousel").remove();
        }
    });
}
