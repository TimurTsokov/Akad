$(document).ready(function () {
    var isotope = $('.images').isotope({ // для фильтрации картинок по типу data-filter
        itemSelector: '.image',
        percentPosition: true,
        // layoutMode: 'masonry'
        masonry: {
            columnWidth: '.col-lg-4'
            // gutter: 30
        }
    });
    $('.navbar-nav a').on('click', function () {
        $('.navbar-nav li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.switchers a').on('click', function (e) {
        $('.switchers li').removeClass('switcher__active');
        $(this).parent().addClass('switcher__active');
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        filter = filter == '*' ? filter : '.' + filter;
        isotope.isotope({
            filter: filter
        })
    });
    $('.carousel').carousel();
});