(function ($) {

    $.fn.extend({

        watermark: function (opts) {

            var defaults = {
                txt: 'Text Here',
                cssclass: 'watermark'
            }

            opts = $.extend(defaults, opts);

            return this.each(function () {

                var elm = $(this);

                elm.addClass(opts.cssclass).val(opts.txt);

                elm.focus(function () {

                    if (elm.val() == opts.txt) {

                        elm.removeClass(opts.cssclass).val('');
                    }
                });

                elm.blur(function () {

                    if (elm.val() == '') {

                        elm.addClass(opts.cssclass).val(opts.txt);
                    }
                });
            });
        }
    });

})(jQuery);