$(function () {

    //NAVの表示/非表示ボタン--------------------------
    $(".menu-trigger").click(function () {
        $(this).toggleClass("active");
        $("#gnav").stop().slideToggle();
        return false;
    })

    // スムーススクロール-----------------------------

    $("#gnav li a").click(function () {
        var target = $($(this).attr("href")).offset().top;
        $("html,body").stop().animate({
            scrollTop: target
        }, 400);
        return false;
    });

    $(".btn-top").click(function () {
        var target = $($(this).attr("href")).offset().top;
        $("html,body").stop().animate({
            scrollTop: target
        }, 400);
        return false;
    });
    
    $(".btn-top-320").click(function () {
        var target = $($(this).attr("href")).offset().top;
        $("html,body").stop().animate({
            scrollTop: target
        }, 400);
        return false;
    });

    // Modal win.---------------------------------

    $("#gallery a").click(function () {

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

    
});
