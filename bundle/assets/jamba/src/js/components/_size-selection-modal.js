var SizeSelectionModalComponent = function(n) {
    function s() {
        var i = t.find("[data-ref=continue]"),
            u;
        i.addClass("disabled");
        u = t.find("[data-ref=size-input]");
        u.length && u.each(function() {
            n(this).prop("checked") && i.removeClass("disabled")
        });
        t.find("[data-ref=close]").on("click", function(t) {
            t.preventDefault();
            n(document).trigger("choose.product.size:modal.close")
        });
        i.on("click", function(t) {
            if (t.preventDefault(), r) {
                var i = n(this);
                i.hasClass("disabled") || n(document).trigger("add.product.cart:size.selected", [r, i])
            }
        });
        t.find("[data-ref=size]").off().on("click", function() {
            (h(n(this).data("size")), r) && t.find("[data-ref=continue]").removeClass("disabled")
        })
    }

    function h(n) {
        if (n && i.length) {
            var t = i.find(function(t) {
                return t.key === n
            });
            e(t)
        }
    }

    function e(i) {
        i && (r = i, t.find("[data-ref=continue]").attr("data-food-size", r.key), n(document).trigger("size.selection.modal:size.selected", r))
    }

    function c() {
        f.length && u && (f.find("[data-ref=close]").each(function() {
            var t = n(this),
                r;
            (t.attr("data-product-name", u), t.find("img").attr("data-product-name", u), i) && (r = i.map(function(n) {
                return n.key
            }), t.attr("data-sizes", r.join("|")), t.find("img").attr("data-sizes", r.join("|")))
        }), f.find("[data-ref=continue]").each(function() {
            var t = n(this);
            t.attr("data-product-name", u);
            t.find("img").attr("data-product-name", u)
        }))
    }

    function o() {
        var f, n, r;
        t.length && (f = t.find("[data-ref=settings]"), f.length > 0 && (n = JSON.parse(f.html()), n && (u = n.productName), n && n.sizes && (i = n.sizes)), c(), s(), r = i.find(function(n) {
            return n.default === !0
        }), !r && i.length && (r = i[0]), e(r))
    }
    var t = n("body").find("[data-component=size-selection-modal-component]"),
        f = n("body").find("[data-component=choose-product-size-modal]"),
        i = [],
        r = null,
        u = null;
    n(document).on("size.selection.modal:reinit", function() {
        t = n("body").find("[data-component=size-selection-modal-component]");
        i = [];
        r = null;
        o()
    });
    return {
        init: o
    }
}(jQuery);
$(window).on("load", function() {
    SizeSelectionModalComponent.init()
})