// Add your answer here
$(function(){
    $(".text-contents").hide();

    $(".lesson").mouseenter(function () {
        $(this).find('.text-contents').show()
    });

    $(".lesson").mouseleave(function () {
        $(this).find('.text-contents').hide()
    });

});
