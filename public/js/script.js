$(function () {

    //NAVの表示/非表示ボタン--------------------------
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $("#gnav").stop().slideToggle();
        return false;
    });


    // Modal win.たて用-----------------------------

    $(".ga-y").click(function () {

        $("body").append("<div id='bg'>");
        $("body").append("<div id='photo'>");

        $("#bg").hide();
        $("#photo").hide();

        $("#photo").html("<img>");

        $("#photo img").attr("src", $(this).attr("href"));

        $("#bg").fadeIn();
        $("#photo").fadeIn();

        $("#bg").click(function () {

            $(this).fadeOut(function () {
                $(this).remove();
            });

            $("#photo").fadeOut(function () {
                $(this).remove();
            });
        });
        return false;
    });
    
    // Modal win.よこ用-----------------------------

    $(".ga-x").click(function () {

        $("body").append("<div id='bg'>");
        $("body").append("<div id='photo2'>");

        $("#bg").hide();
        $("#photo2").hide();

        $("#photo2").html("<img>");

        $("#photo2 img").attr("src", $(this).attr("href"));

        $("#bg").fadeIn();
        $("#photo2").fadeIn();

        $("#bg").click(function () {

            $(this).fadeOut(function () {
                $(this).remove();
            });

            $("#photo2").fadeOut(function () {
                $(this).remove();
            });
        });
        return false;
    });
    
    // Modal win.中間用-----------------------------

    $(".ga-xy").click(function () {

        $("body").append("<div id='bg'>");
        $("body").append("<div id='photo3'>");

        $("#bg").hide();
        $("#photo3").hide();

        $("#photo3").html("<img>");

        $("#photo3 img").attr("src", $(this).attr("href"));

        $("#bg").fadeIn();
        $("#photo3").fadeIn();

        $("#bg").click(function () {

            $(this).fadeOut(function () {
                $(this).remove();
            });

            $("#photo3").fadeOut(function () {
                $(this).remove();
            });
        });
        return false;
    });
});

// fullpage---------------------------------

$(document).ready(function () {
    $('.main-inner').fullpage({
        menu: "#gnav",
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        scrollOverflow: true,
        scrollOverflowReset: true,
        paddingTop: '50px',
        paddingBottom: '50px',
        responsiveWidth: 768

    });
});
