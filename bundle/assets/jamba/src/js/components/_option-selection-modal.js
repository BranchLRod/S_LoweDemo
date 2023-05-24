var OptionSelectionModalComponent = function(n) {
    function s() {
        var i = t.find("[data-ref=continue]"),
            u;
        i.addClass("disabled");
        u = t.find("[data-ref=option-input]");
        u.length && u.each(function() {
            var t = n(this);
            t.prop("checked") && (t.addClass("selected"), i.removeClass("disabled"))
        });
        t.find("[data-ref=close]").on("click", function(t) {
            t.preventDefault();
            n(document).trigger("choose.product.option:modal.close")
        });
        i.on("click", function() {
            if (r) {
                var t = n(this);
                t.hasClass("disabled") || n(document).trigger("add.product.cart:option.selected", [r, t])
            }
        });
        t.find("[data-ref=option]").off().on("click keydown", function(i) {
            var r = n(this),
                u, f;
            if (i.type === "click" || i.which === 13 || i.which === 32) e(r.data("option")), t.find("[data-ref=continue]").removeClass("disabled"), r.attr("aria-checked", "true"), r.attr("tabindex", "0"), r.siblings("label").attr("aria-checked", "false"), r.siblings("label").attr("tabindex", "-1"), r.prev().prop("checked", "true").trigger("click");
            else if (i.which === 37 || i.which === 39) {
                if (i.which === 37 ? (u = r.prevAll("label"), f = r.prevAll("input")) : (u = r.nextAll("label"), f = r.nextAll("input")), !u.length) return;
                r.attr("aria-checked", "false");
                r.attr("tabindex", "-1");
                e(u.data("option"));
                u.attr("aria-checked", "true");
                u.focus();
                u.attr("tabindex", "0");
                f.prop("checked", "true").trigger("click");
                t.find("[data-ref=continue]").removeClass("disabled")
            }
        })
    }

    function e(n) {
        if (n && i.length) {
            var t = i.find(function(t) {
                return t.id === n
            });
            h(t)
        }
    }

    function h(i) {
        i && (r = i, t.find("[data-ref=continue]").attr("data-food-option", r.title), n(document).trigger("option.selection.modal:option.selected", r))
    }

    function c() {
        f.length && u && (f.find("[data-ref=close]").each(function() {
            var t = n(this),
                r;
            (t.attr("data-product-name", u), t.find("img").attr("data-product-name", u), i) && (r = i.map(function(n) {
                return n.title
            }), t.attr("data-options", r.join("|")), t.find("img").attr("data-options", r.join("|")))
        }), f.find("[data-ref=continue]").each(function() {
            var t = n(this);
            t.attr("data-product-name", u);
            t.find("img").attr("data-product-name", u)
        }))
    }

    function o() {
        var r, n;
        t.length && (r = t.find("[data-ref=settings]"), r.length > 0 && (n = JSON.parse(r.html()), n && (u = n.productName), n && n.options && (i = n.options)), c(), s())
    }
    var t = n("body").find("[data-component=option-selection-modal-component]"),
        f = n("body").find("[data-component=choose-product-option-modal]"),
        i = [],
        r = null,
        u = null;
    n(document).on("option.selection.modal:reinit", function() {
        t = n("body").find("[data-component=option-selection-modal-component]");
        i = [];
        r = null;
        o()
    });
    return {
        init: o
    }
}(jQuery);
$(window).on("load", function() {
    OptionSelectionModalComponent.init()
})