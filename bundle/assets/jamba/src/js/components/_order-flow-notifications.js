var OrderFlowNotificationsComponent = function(n, t) {
    function o() {
        t.postBackgroundCall(r.data("action-url")).done(function() {
            s();
            f = setInterval(function() {
                var e, o, f, s, h, t, c, l, a;
                if (u) {
                    (i.data("id") === "session-already-expired-container" || i.data("id") === "session-almost-expired-container") && n(document).trigger("modal.notification:close");
                    u = !1;
                    return
                }
                if ((e = parseInt(n.cookie("basket_expired")), e) && (o = parseInt(n.cookie("basket_almost_expired")), o) && (f = (new Date).getTime() / 1e3 | 0, f)) {
                    if (s = e - f, h = o - f, h > 0) {
                        if (i.data("id") === "session-already-expired-container") {
                            document.location.href = "/";
                            return
                        }
                        i.data("id") === "session-almost-expired-container" && (i.data("id", ""), n(document).trigger("modal.notification:close"));
                        return
                    }
                    if (h <= 0 && s > 0) t = r.find("[data-ref=session-almost-expired-container]"), c = t.html();
                    else if (s <= 0) t = r.find("[data-ref=session-already-expired-container]"), c = t.html();
                    else return;
                    l = i.data("id");
                    a = t.data("ref");
                    l !== a && (i.data("id", t.data("ref")), n(document).trigger("modal.notification:open", c))
                }
            }, 15e3)
        }).fail(function() {})
    }

    function s() {
        f && (clearInterval(f), f = null)
    }

    function c() {
        function f(n) {
            e || (e = !0, t.postBackgroundCall(n).done(function() {
                document.location.href = "/";
                e = !1
            }).fail(function() {
                document.location.href = "/";
                e = !1
            }))
        }
        r.data("basket-has-products") === !0 && o();
        n(document).on("cart.product.added", function() {
            o()
        });
        n(document).on("modal.notification:opened", function() {
            if (i.data("id") === "session-almost-expired-container") {
                n(document).trigger("ga.tracking:vpv", ["session-almost-expired"]);
                i.find("[data-ref=cancel]").on("click", function(n) {
                    n.preventDefault();
                    var t = r.data("clear-basket-action-url");
                    f(t)
                });
                i.find("[data-ref=submit]").on("click", function(i) {
                    i.preventDefault();
                    n(document).trigger("modal.notification:close");
                    s();
                    u = !0;
                    t.postBackgroundCall(r.data("action-url"))
                })
            } else if (i.data("id") === "session-already-expired-container") {
                n(document).trigger("ga.tracking:vpv", ["session-already-expired"]);
                i.find("[data-ref=submit]").on("click", function() {
                    s();
                    u = !0;
                    window.localStorage && window.localStorage.setItem(h, !0);
                    var n = r.data("clear-basket-action-url");
                    f(n)
                })
            }
        });
        n(document).on("modal.notification:closed", function() {
            if (u = !0, i.data("id") === "session-almost-expired-container") i.data("id", ""), o();
            else if (i.data("id") === "session-already-expired-container") {
                var n = r.data("clear-basket-action-url");
                f(n)
            }
        })
    }

    function l() {
        r.length && c()
    }
    var r = n("body").find("[data-component=order-flow-notifications]"),
        i = n("body").find("[data-component=modal-notification]"),
        f, u = !1,
        e = !1,
        h = "start-order-flow";
    return {
        init: l
    }
}(jQuery, ServerCall);
$(window).on("load", function() {
    OrderFlowNotificationsComponent.init()
})