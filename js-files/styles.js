$(document).ready(function () {
    $('.modal').modal();
    $('.modal').modal('open');

    $(function () {
        $('.modal-close').click(function () {
            $("h1").fadeIn(1000);
            $(".container").fadeIn(1000);
        });
    });


    $("#hi").bind("keyup", function (e) {
    });
});
