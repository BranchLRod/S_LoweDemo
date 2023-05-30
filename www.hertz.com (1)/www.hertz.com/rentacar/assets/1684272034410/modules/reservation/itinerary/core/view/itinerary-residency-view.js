define("reservation/itinerary/core/view/itinerary-residency-view", ["jquery", "underscore", "backbone", "utils/utils-proxy"], function(a, c, d, e) {
    return d.View.extend({
        events: {
            "click #residencyChange": "handleResidency",
            "change #residenceCountry": "selectedCountry"
        },
        initialize: function() {
            this.template = this.options.template;
            this.content = this.options.content;
            this.residencyData = htz.template.topNavJson.data.topNavigationInfo;
            this.metaData = this.model.get("metaData");
            this.formData = this.model.get("formData")
        },
        handleResidency: function() {
            a("#customerCurrentResidency").css("display",
                "none");
            a("#residency-dropdown").css("display", "");
            a("#customer-residency").css("margin-bottom", "5px")
        },
        selectedCountry: function() {
            var b;
            b = a("#residenceCountry").val();
            a.ajax({
                type: "post",
                url: htz.config.rootContext + "/PointOfSaleHandler",
                data: "" != b ? "selectedPOS=" + b : "",
                success: function(b) {
                    e.getSpinner().spin();
                    a("#residencyLanguage").empty().html(b);
                    a("#residencyForm").submit()
                },
                error: function() {
                    alert(htz.content.ajaxFail)
                }
            })
        },
        render: function() {
            this.$el.append(c.template(this.template, {
                content: this.content,
                residencyData: this.residencyData
            }));
            a("#returnURL").val(window.location.pathname);
            return this
        },
        doCleanup: function() {
            this.template = this.content = this.metaData = this.formData = lightbox = null
        }
    })
});