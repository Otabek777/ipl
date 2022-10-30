$(".btn_burgir").click(function() {
    var thisClass = $(this);
    if(thisClass.hasClass('active')) {
        thisClass.removeClass("active");
        $(".header").removeClass("opacity");
        setTimeout(function() {
            thisClass.removeClass("one");
            $(".header").removeClass("active");
        },300);
    } else {
        $(".header").addClass("active");
        thisClass.addClass("one");
        setTimeout(function() {
            $(".header").addClass("opacity");
            thisClass.addClass("active");
        },300);
    }
});