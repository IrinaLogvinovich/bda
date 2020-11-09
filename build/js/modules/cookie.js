$(function(){

    function readCookie(name) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    if(readCookie('agree') !== 'yes') {
        $('.cookie').removeAttr('style');
    }

    $('.cookie a').on('click', function(evt){
        evt.preventDefault();
        $('.cookie').hide();
        document.cookie = "agree = yes; path=/"
    });

    $('.cookie__close').on('click', function(){
        $('.cookie').hide();
    });


    $('.header__search-block .search__close').on('click', function(){
        $('.header__search-block').hide(400);
    });

    $('.header__search').on('click', function(evt){
        evt.preventDefault();
        $('.header__search-block').show(400);
    });

    $('.footer__search-block .search__close').on('click', function(){
        $('.footer__search-block').hide(400);
    });

    $('.footer .button--search').on('click', function(evt){
        evt.preventDefault();
        $('.footer__search-block').show(400);
    })
})