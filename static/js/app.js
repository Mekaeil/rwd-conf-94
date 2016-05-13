/*------------------------------------------------------*\
     _ _ _ _____ _____ _____ _____ _____ _____ __      _____ _____ _____ 
    | | | |   __|   __|     |  |  |     |     |  |    |     | __  |   __|
    | | | |__   |__   |   --|     |  |  |  |  |  |__ _|  |  |    -|  |  |
    |_____|_____|_____|_____|__|__|_____|_____|_____|_|_____|__|__|_____|

\*------------------------------------------------------*/

var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : false;

}());

var touch = (function(){
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
}());

/**
 * Add Helper Classes
 */
if( ie && ie < 9 ) {
    $('body').addClass('ie');
}

if( touch ) {
    $('body').addClass('touch');
}
/**
 * Add Map
 */
if( $('.map-container').length > 0 )
{   
    var $map = $('.map-container'),

    mapOptions = {
        center                  : new google.maps.LatLng(35.70373821780,51.41098954741),
        mapTypeId               : google.maps.MapTypeId.ROADMAP,
        zoom                    : 15,
        disableDefaultUI        : true,
        scrollwheel             : false,
        zoomControl             : false,
        scaleControl            : false,
        draggable               : false,  
        scrollwheel             : false, 
        disableDoubleClickZoom  : true,
        zoomControlOptions : {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_LEFT
        }   
    },

    iconMap = new google.maps.MarkerImage("http://conf.wsschool.org/rwd/static/img/pointer.png"),
    map     = new google.maps.Map($map[0], mapOptions),
    marker  = new google.maps.Marker({
        position : new google.maps.LatLng(35.703728, 51.409689),
        map      : map,
        title    : 'RWD Conference',
        icon     : iconMap
    });
}


$(document).ready(function(){
    /***
     Set Menu to Fix top
    ***/
    $(window).scroll(function () {
        var $nav = $('.fixNav'),
            $wrapper = $('.main-wrapper'),
            wOffset = $wrapper.offset();
        if ($(this).scrollTop() > (wOffset.top) )
        {
            $nav.addClass("goToFix");
            //$nav.css('position','fixed');
        }else{
            $nav.removeClass("goToFix");
            // $nav.css('position','absolute');
        }
    });
    /****
    Animate Scroll Menu
    ***/
    $('a[href^="#"]').click(function(){
        var element = $(this).attr('href'),
            offset  = $(element).offset().top;

        $('html,body').animate({scrollTop: offset}, 1000, 'swing');
       return false;
    });

    /***
    Responsive Menu
    ***/
    $('#NavMobile').bind('click', function(){
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active');
            $('.fixNav ul').removeClass('is-open');
        }
        else{
            $(this).addClass('is-active');
            $('.fixNav ul').addClass('is-open');
        }
    });

});        
