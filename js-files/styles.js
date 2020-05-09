$(document).ready(function () {
    $('.modal').modal();
    $('.modal').modal('open');

    $(function () {
        $('.modal-close').click(function () {
            $("h1").fadeIn(1000);
            $(".container").fadeIn(1000);
        });
    });
    $(".change").on("click", function () {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $(".change").text("OFF");
            $("p").css('color', '#303a2d');
            $("h1").css('color', '#303a2d');
            $(".card-title").css('color', '#303a2d');
            $(".ultitle").css('color', '#303a2d');
            $("img").css("opacity", "1.0");
        } else {
            $("body").addClass("dark");
            $(".change").text("ON");
            $("p").css('color', 'white');
            $("h1").css('color', 'white');
            $(".card-title").css('color', 'white');
            $(".ultitle").css('color', 'white');
            $("li").css('color', 'white');
            $("i").css('color', 'white');
            $(".drink-name").css('color', 'white');
            $("img").css("opacity", "0.7");
            $(function () {
                $(document).tooltip();
            });
        }


    });

});
