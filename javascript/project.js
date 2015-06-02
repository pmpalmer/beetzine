// function windowFunction() {
//     var bodyWidth = document.body.offsetWidth;
//     var content = document.getElementById("content");
//     var sidebarWidth = document.getElementById("header").offsetWidth;

//     content.style.width = ((bodyWidth - sidebarWidth) + "px");
// }


// window.onload = windowFunction;
// window.onresize = windowFunction;

$(window).resize(function() {
    
    if ($(this).width() > 1050) {
        var bodyWidth = $("body").outerWidth();
        var sidebarWidth = $("#header").outerWidth();
        $("#content").css("width", (bodyWidth - sidebarWidth)+"px");
    }
});

$(document).ready(function() {
   $(window).resize();
});

