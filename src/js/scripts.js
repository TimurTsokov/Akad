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
    $('.switchers a').on('click', function (e) {
        $('.switchers li').removeClass('active');
        $(this).parent().addClass('active');
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        filter = filter == '*' ? filter : '.' + filter;
        isotope.isotope({
            filter: filter
        })
    })
});