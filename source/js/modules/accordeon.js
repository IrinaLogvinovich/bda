$(function() {
    if($('.program')[0]) {
        $('.program a').on('click', function(evt){
            evt.preventDefault();
            $(this).parent().find('div').slideToggle(400);
            // $(this).find('img').toggleClass('accordeon__arrow--down');
        })
    }
});