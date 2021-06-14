$(".whf-1").on("click", function() {
    $(".content-whf-1").css("display", "block");
    $(".whf-1").css("backgroundColor", "#c10909");
    $(".whf-2").css("backgroundColor", "#ea252c");
    $(".whf-3").css("backgroundColor", "#ea252c");
    $(".content-whf-2").css("display", "none");
    $(".content-whf-3").css("display", "none");
});

$(".whf-2").on("click", function() {
    $(".content-whf-1").css("display", "none");
    $(".content-whf-2").css("display", "block");
    $(".whf-2").css("backgroundColor", "#c10909");
    $(".whf-1").css("backgroundColor", "#ea252c");
    $(".whf-3").css("backgroundColor", "#ea252c");
    $(".content-whf-3").css("display", "none");
});

$(".whf-3").on("click", function() {
    $(".content-whf-1").css("display", "none");
    $(".content-whf-2").css("display", "none");
    $(".content-whf-3").css("display", "block");
    $(".whf-1").css("backgroundColor", "#ea252c");
    $(".whf-2").css("backgroundColor", "#ea252c");
    $(".whf-3").css("backgroundColor", "#c10909");
});