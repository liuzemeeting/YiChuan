$(function(){
    $('.js-m').each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
        } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.9) {
            _this.addClass('animate');
        }
    });
    $(window).scroll(function() {
        $('.js-m').each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.9) {
                _this.addClass('animate');
            }
        });
    });
});