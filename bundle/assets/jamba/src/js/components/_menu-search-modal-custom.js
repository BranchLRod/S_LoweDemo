var MenuSearchModalComponent = function(n) {
    function s() {
        function c(n) {
            var r = t.find("[data-ref=submit]"),
                i;
            r.length && r.attr("data-foodSearchTerm", n);
            i = t.find("[data-ref=submit-image]");
            i.length && i.attr("data-foodSearchTerm", n)
        }

        function l() {
            var t = n("body").find("span, li");
            t.each(function(i) {
                var r = window.getComputedStyle(t[i], "::after").content !== "none",
                    u = window.getComputedStyle(t[i], "::before").content !== "none";
                (r || u) && (n(this).attr("aria-hidden", "true"), f.push(this))
            });
            f.push(n("main"), n(".modal-component .close"));
            n("main, .modal-component .close").attr("aria-hidden", "true")
        }

        function a() {
            n(f).each(function(t) {
                n(f[t]).removeAttr("aria-hidden")
            })
        }

        function s() {
            var r = t.data("action-url"),
                i = "",
                f = t.find("[data-ref=searchTerm]");
            if (f && (i = f.val()), r += "?searchTerm=" + i, u && u.readyState !== 4 && u.abort(), c(i), i.length < 3) {
                t.find("[data-ref=results]").html("");
                t.find("[data-ref=footer]").removeClass("d-none");
                return
            }
            u = n.ajax({
                url: r,
                method: "GET"
            }).done(function(r) {
                var f = n("<div><\/div>").html(r),
                    u;
                t.find("[data-ref=results]").html(r);
                u = f.find("[data-ref=no-results]");
                u.length ? (n(document).trigger("ga.tracking:food.automenu.send", i), t.find("[data-ref=footer]").removeClass("d-none")) : t.find("[data-ref=footer]").addClass("d-none")
            }).fail(function(n) {
                console.log(n)
            })
        }
        i.on("click", function(u) {
            function f() {
                var r = n("[data-open=menu-search-modal]").position().left - t.outerWidth() + i.outerWidth();
                n(window).width() > 850 ? t.css("left", r) : t.css("left", "0")
            }
            u.stopPropagation();
            o = n(this);
            u.preventDefault();
            typeof MegaMenuComponent != "undefined" && MegaMenuComponent.close();
            typeof MobileDropNavComponent != "undefined" && n(window).width() < 769 && MobileDropNavComponent.close();
            l();
            t.toggleClass("open").attr("aria-modal", "true").attr("aria-hidden", "false");
            var e = t.find("input:visible").first();
            if (e.focus(), r.toggleClass("fcs-active"), h(), n(this).data("type") !== "mobile") {
                f();
                i.toggleClass("fcs-nav-active");
                n(window).on("resize", function() {
                    f()
                })
            }
        });
        e.on("click keypress", function(n) {
            (n.which == 13 || n.type == "keypress") && o && o.focus();
            t.toggleClass("open").attr("aria-modal", "false").attr("aria-hidden", "true");
            r.hasClass("fcs-active") && r.removeClass("fcs-active");
            i.removeClass("fcs-nav-active");
            a()
        });
        n("body").on("click", function(u) {
            t.hasClass("open") && n(u.target).is(".menu-search-component") === !1 && n(u.target).is("#menuSearchForm") === !1 && n(u.target).is(".footer-cta") === !1 && (t.removeClass("open"), r.hasClass("fcs-active") && r.removeClass("fcs-active"), i.removeClass("fcs-nav-active"))
        });
        t.find("[data-ref=advanced-search]").on("click", function() {
            n(this).addClass("d-none");
            t.find("[data-ref=advanced-search-options]").addClass("d-block")
        });
        t.find("form").on("submit", function() {
            var i = "",
                r = t.find("[data-ref=searchTerm]");
            r && (i = r.val());
            n(document).trigger("ga.tracking:food.search.send", i)
        });
        t.find("[data-ref=searchTerm]").on("keyup", n.debounce(1e3, function(t) {
            t.preventDefault();
            var i = n(this);
            i.val()[0] == " " && i.val(i.val().trim());
            i.val(i.val().replace(/\s\s+/g, " "));
            s()
        }));
        n(".menu-search-submit").on("click", function(t) {
            t.stopPropagation();
            var i = n(this);
            i.val()[0] == " " && i.val(i.val().trim());
            i.val(i.val().replace(/\s\s+/g, " "));
            s()
        })
    }

    function h() {
        t.on("keydown", function(n) {
            var i = t.find('button:visible, [href]:visible, input:visible, select:visible, textarea:visible, [tabindex]:not([tabindex="-1"])').last();
            i.is(":focus") && (n.which !== 9 || n.shiftKey || (n.preventDefault(), e.focus()));
            e.is(":focus") && n.which === 9 && n.shiftKey && (n.preventDefault(), i.focus())
        })
    }

    function c() {
        t.length && s()
    }

    function l() {
        t.removeClass("open");
        i.removeClass("fcs-active")
    }
    var t = n("body").find(".menu-search-component"),
        e = t.find(".close"),
        r = n("body").find(".search-wrapper"),
        u, i = n("body").find("[data-open=menu-search-modal]"),
        o = null,
        f = [];
    return {
        init: c,
        close: l
    }
}(jQuery);
$(window).on("load", function() {
    MenuSearchModalComponent.init()
})