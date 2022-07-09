$(window).scroll(function() {
    if($(window).scrollTop()) {
        $("nav").addClass("#6E85B7");
    } else {
        $("nav").remove("#6E85B7");
    }
});

$(document).ready(function() {
    $("i").click(function() {
        $("nav-item").toggle("i");
    })
})