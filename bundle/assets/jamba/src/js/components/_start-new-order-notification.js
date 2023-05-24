var StartNewOrderNotificationComponent = function(n) {
    function u() {
        n(document).on("startneworder.notification:show", function(r) {
            console.log(r);
            t.data("id", i.data("ref"));
            n(document).trigger("modal.notification:open", i.html())
        });
        n(document).on("modal.notification:opened", function() {
            if (t.data("id") === i.data("ref")) {
                t.find("[data-ref=cancel]").on("click", function(i) {
                    i.preventDefault();
                    t.data("id", "");
                    n(document).trigger("modal.notification:close")
                });
                t.find("[data-ref=submit]").on("click", function(t) {
                    t.preventDefault();
                    n(document).trigger("modal.notification:close");
                    n(document).trigger("orderflow.startneworder:confirmed")
                })
            }
        });
        n(document).on("modal.notification:closed", function() {
            t.data("id") === i.data("ref") && t.data("id", "")
        })
    }

    function f() {
        r.length && u()
    }
    var r = n("body").find("[data-component=start-new-order-notification]"),
        i = r.find("[data-ref=start-new-order-notification-container]"),
        t = n("body").find("[data-component=modal-notification]");
    return {
        init: f
    }
}(jQuery);
$(window).on("load", function() {
    StartNewOrderNotificationComponent.init()
})