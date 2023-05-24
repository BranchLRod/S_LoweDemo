var OrderLimitReachedNotificationComponent = function(n) {
    function u() {
        n(document).on("orderlimitreached.notification:show", function() {
            i.data("id", t.data("ref"));
            n(document).trigger("modal.notification:open", t.html())
        });
        n(document).on("modal.notification:opened", function() {
            i.data("id") === t.data("ref")
        });
        n(document).on("modal.notification:closed", function() {
            i.data("id") === t.data("ref") && i.data("id", "")
        })
    }

    function f() {
        r.length && u()
    }
    var r = n("body").find("[data-component=order-limit-reached-notification]"),
        t = r.find("[data-ref=order-limit-reached-notification-container]"),
        i = n("body").find("[data-component=modal-notification]");
    return {
        init: f
    }
}(jQuery);
$(window).on("load", function() {
    OrderLimitReachedNotificationComponent.init()
})