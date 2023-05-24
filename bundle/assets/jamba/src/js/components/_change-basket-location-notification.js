var ChangeLocationNotificationComponent = function(n) {
    function f() {
        n(document).on("changelocation.notification:show", function(t) {
            console.log(t);
            i.data("id", r.data("ref"));
            n(document).trigger("modal.notification:open", r.html())
        });
        n(document).on("modal.notification:opened", function() {
            if (i.data("id") === r.data("ref")) {
                i.find("[data-ref=cancel]").on("click", function(r) {
                    (r.preventDefault(), i.data("id", ""), n(document).trigger("modal.notification:close"), t) && (t.attr("data-notification-shown", ""), t = null)
                });
                i.find("[data-ref=submit]").on("click", function(i) {
                    i.preventDefault();
                    t ? t.click() : (n(document).trigger("modal.notification:close"), n(document).trigger("orderflow.changelocation:confirmed"))
                })
            }
        });
        n(document).on("modal.notification:closed", function() {
            if (i.data("id") === r.data("ref")) {
                if (i.data("id", ""), !t) return;
                t.attr("data-notification-shown", "");
                t = null
            }
        });
        n(document).on("click", "[data-ref-notification=change-basket-location-notification]", function(i) {
            t = n(this);
            console.log(i);
            var r = t.attr("data-notification-shown");
            if (r) {
                console.log(t.attr("href"));
                window.location.href = t.attr("href");
                return
            }
            i.preventDefault();
            t.attr("data-notification-shown", "true");
            n(document).trigger("changelocation.notification:show")
        })
    }

    function e() {
        u.length && f()
    }
    var u = n("body").find("[data-component=change-basket-location-notification]"),
        r = u.find("[data-ref=change-basket-location-notification-container]"),
        i = n("body").find("[data-component=modal-notification]"),
        t;
    return {
        init: e
    }
}(jQuery);
$(window).on("load", function() {
    ChangeLocationNotificationComponent.init()
})