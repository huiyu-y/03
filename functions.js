$(document).ready(function() {
    var divWidth = $(".vertical").width();

    $(".vertical").mouseenter(function(){
        $(this).animate({
            width: "50%"
        });
    }).mouseleave(function(){
        $(this).animate({
            width: divWidth
        });
    });
});
