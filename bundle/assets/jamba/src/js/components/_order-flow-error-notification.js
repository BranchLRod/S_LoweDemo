var OrderFlowErrorNotificationComponent = function(n) {
    function f() {
        n(document).on("orderflowerror.notification:show", function(i, f, e) {
            var s, o, h, c;
            t.data("id", r.data("ref"));
            s = "";
            f && (s += "<p>" + f + "<\/p>");
            o = n("<div />").append(r.html());
            o.find("[data-ref=body]").html(s);
            e && (h = o.find(".modal-title"), c = u.data("required-options-modal-title"), h.html(c), h.attr("aria-label", c));
            n(document).trigger("modal.notification:open", o.html())
        });
        n(document).on("modal.notification:opened", function() {
            if (t.data("id") === r.data("ref")) t.find("[data-ref=cancel]").on("click", function(r) {
                (r.preventDefault(), t.data("id", ""), n(document).trigger("modal.notification:close"), i) && (i.attr("data-notification-shown", ""), i = null)
            })
        });
        n(document).on("modal.notification:closed", function() {
            if (t.data("id") === r.data("ref")) {
                if (t.data("id", ""), !i) return;
                i.attr("data-notification-shown", "");
                i = null
            }
        })
    }

    function e() {
        u.length && f()
    }
    var u = n("body").find("[data-component=order-flow-error-notification]"),
        r = u.find("[data-ref=order-flow-error-notification-container]"),
        t = n("body").find("[data-component=modal-notification]"),
        i;
    return {
        init: e
    }
}(jQuery);
$(window).on("load", function() {
    OrderFlowErrorNotificationComponent.init()
})