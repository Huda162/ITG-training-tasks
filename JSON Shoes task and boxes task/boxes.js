$(document).ready(function () {
    $("#move-to-left").click(function () {
        var lastBox = $("#right-container .box:last");
        lastBox.appendTo("#left-container");
    });
    $("#move-to-right").click(function (){
        var lastBox = $("#left-container .box:last");
        lastBox.appendTo("#right-container");
    });
});

