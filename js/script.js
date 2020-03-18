$(document).ready(function(){
    $("#btn-start").click(function(){
        console.log("add style");
        $(".container").css({
            "display":"none"
        });
        $(".container2").css({
            "display":"block"
        });
    });
});

$(document).ready(function(){
    $(".faq__answers_el").click(function(){
        $(".faq__answers_text").animate({right: "0%"}, 200);
    });

    $(".faq__answers_close").click(function(){
        $(".faq__answers_text").animate({right: "-100%"}, 200);
    });
});