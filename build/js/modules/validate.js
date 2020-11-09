$(function(){
    const regularPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
    let im = new Inputmask("+7 (999) 999-99-99");

    $('input[name="phone"]').each(function() {
        im.mask($(this));
    });

    $('.feedback__form').on('submit', function(evt){
        if(!regularPhone.test($(this).find('input[name="phone"]').val())) {
            evt.preventDefault();
            $(this).find('input[name="phone"]').css('border-color', 'red');
        } else {
            $(this).find('input[name="phone"]').removeAttr('style');
        }

        if (!$(this).find('input[type="checkbox"]:checked')[0]) {
            evt.preventDefault();
            $(this).find('input[type="checkbox"] + label').css('color', 'red');
        } else {
            $(this).find('input[type="checkbox"] + label').removeAttr('style');
        }
    });
   
});