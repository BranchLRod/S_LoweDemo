var ChooseProductOptionModalComponent = function(n, t) {
    function u() {
        function u() {
            i.attr("role", "dialog");
            var t, r = i.find(".modal-title");
            r.length && (t = n(r.get(0)).data("label"), t || (t = n(r.get(0)).text().trim()));
            t ? i.attr("aria-label", t) : i.removeAttr("aria-label")
        }
        i.find("[data-close]").on("click", function() {
            i.modal("hide")
        });
        n(document).on("option.selection.modal:option.selected", function(n, t) {
            t && (r = t)
        });
        n(document).on("choose.product.option:modal.close", function() {
            i.modal("hide")
        });
        n(document).on("choose.product.option:modal.show", function(r, u, f) {
            var e = n(u),
                o = {};
            n.extend(!0, o, {
                id: f ? f : e.data("product-id")
            });
            t.postCallWithSimpleReload(i.data("action-url"), o, e).done(function(t) {
                n(document).trigger("choose.product.option:loaded", t)
            }).fail(function(n) {
                console.log(n)
            })
        });
        n(document).on("choose.product.option:loaded", function(t, r) {
            i.modal("show");
            i.find("[data-ref=body]").html(r);
            n(document).trigger("option.selection.modal:reinit");
            u()
        })
    }

    function f() {
        i.length && u()
    }
    var i = n("body").find("[data-component=choose-product-option-modal]"),
        r = null;
    return {
        init: f
    }
}(jQuery, ServerCall);
$(window).on("load", function() {
    ChooseProductOptionModalComponent.init()
})