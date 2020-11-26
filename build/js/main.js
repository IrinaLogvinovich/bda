$(function() {
    if($('.program')[0]) {
        $('.program a').on('click', function(evt){
            evt.preventDefault();
            $(this).parent().find('div').slideToggle(400);
            // $(this).find('img').toggleClass('accordeon__arrow--down');
        })
    }
});
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
$(function(){
  const data = {
    '2017': [
      ['001', '001', '001', '001', '001'],
      ['002', '002', '002', '002', '002'],
      ['003', '003', '003', '003', '003'],
      ['004', '004', '004', '004', '004'],
      ['005', '005', '005', '005', '005'],
      ['006', '006', '006', '006', '006'],
      ['007', '007', '007', '007', '007'],
      ['008', '008', '008', '008', '008'],
      ['009', '009', '009', '009', '009'],
      ['010', '010', '010', '010', '010'],
      ['011', '011', '011', '011', '011'],
      ['012', '012', '012', '012', '012']
    ],
    '2018': [
      ['101', '101', '101', '101', '101'],
      ['102', '102', '102', '102', '102'],
      ['103', '103', '103', '103', '103'],
      ['104', '104', '104', '104', '104'],
      ['105', '105', '105', '105', '105'],
      ['106', '106', '106', '106', '106'],
      ['107', '107', '107', '107', '107'],
      ['108', '108', '108', '108', '108'],
      ['109', '109', '109', '109', '109'],
      ['110', '110', '110', '110', '110'],
      ['111', '111', '111', '111', '111'],
      ['112', '112', '112', '112', '112']
    ],
    '2019': [
      ['201', '201', '201', '201', '201'],
      ['202', '202', '202', '202', '202'],
      ['203', '203', '203', '203', '203'],
      ['204', '204', '204', '204', '204'],
      ['205', '205', '205', '205', '205'],
      ['206', '206', '206', '206', '206'],
      ['207', '207', '207', '207', '207'],
      ['208', '208', '208', '208', '208'],
      ['209', '209', '209', '209', '209'],
      ['210', '210', '210', '210', '210'],
      ['211', '211', '211', '211', '211'],
      ['212', '212', '212', '212', '212']
    ],
    '2020': [
      ['301', '301', '301', '301', '301'],
      ['302', '302', '302', '302', '302'],
      ['303', '303', '303', '303', '303'],
      ['304', '304', '304', '304', '304'],
      ['305', '305', '305', '305', '305'],
      ['306', '306', '306', '306', '306'],
      ['307', '307', '307', '307', '307'],
      ['308', '308', '308', '308', '308'],
      ['309', '309', '309', '309', '309'],
      ['310', '310', '310', '310', '310'],
      ['311', '311', '311', '311', '311'],
      ['312', '312', '312', '312', '312']
    ],
  }
    let statistic = new Swiper('.statistic__slider', {
        slidesPerView: 1,
        effect: 'fade',
        navigation: {
          nextEl: '.statistic__prev',
          prevEl: '.statistic__next',
        },
      });

      let months = new Swiper('.statistic__months', {
        slidesPerView: 'auto',
        direction: 'vertical',
        loop: true,
        spaceBetween: 12,
        centeredSlides: true,
      });

      function updateData () {
        let currentYear = $('.statistic__slide')[statistic.realIndex].getAttribute('data-year');
        let currentMonth = months.realIndex;
        let currentYearSlide = $('.statistic__slide[data-year="' + currentYear + '"]');
        for (i = 0; i < 5; i++) {
          currentYearSlide.find('.statistic__info li')[i].querySelector('span:last-child').textContent = data[currentYear][currentMonth][i];
        }
      }

      updateData();

      statistic.on('slideChange', function () {
        updateData();
      });

      months.on('slideChange', function () {
        updateData();
      });

      $('.statistic__month').on('click', function(evt){
        months.slideTo(months.clickedIndex);
        updateData();
      });
});
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