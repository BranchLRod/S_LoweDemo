var ProductAddedToCartModalComponent = function(n) {
    function r() {
        function r() {
            try {
                var r = t.find("[data-ref=body]").find("[data-ref=json-product]").html(),
                    i = JSON.parse(r) || {};
                window.localStorage.getItem(AddToBasketResultConstants.ADDING_UPSELL_PRODUCT) && n.extend(!0, i, {
                    upSell: !0
                });
                n(document).trigger("ga.tracking:addtocart", [i])
            } catch (u) {
                console.log(u)
            }
            window.localStorage.removeItem(AddToBasketResultConstants.ADDING_UPSELL_PRODUCT)
        }

        function u() {
            t.attr("role", "dialog");
            var i, r = t.find(".modal-title");
            r.length && (i = n(r.get(0)).data("label"), i || (i = n(r.get(0)).text().trim()));
            i ? t.attr("aria-label", i) : t.removeAttr("aria-label")
        }
        t.find("[data-close]").on("click", function() {
            t.modal("hide")
        });
        n(document).on("cart.product.added", function(f, e) {
            var o, s;
            e && (t.find("[data-ref=body]").html(e), o = n(e).find("[data-modal]"), o ? (s = o.data("modal"), t.find(".footer-cta a").attr("data-modal", s)) : t.find(".footer-cta a").attr("data-modal", ""), r(), i.length ? location.reload(!0) : (t.modal("show"), u()))
        })
    }

    function u() {
        t.length && r()
    }
    var t = n("body").find("[data-component=product-added-to-cart-modal]"),
        i = n("body").find("[data-component=cart-manager]");
    return {
        init: u
    }
}(jQuery);
$(window).on("load", function() {
    ProductAddedToCartModalComponent.init()
})