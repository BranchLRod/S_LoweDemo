                                                                                                                   window.checkHertzNameSpace = function() {
                                                                                                                       var a = arguments,
                                                                                                                           b = 0,
                                                                                                                           c = 0,
                                                                                                                           d = null,
                                                                                                                           e = null,
                                                                                                                           f = null;
                                                                                                                       ref = [];
                                                                                                                       for (b = 0; b < a.length; b++) {
                                                                                                                           d = window;
                                                                                                                           e = a[b].split(".");
                                                                                                                           for (c = 0; c < e.length; c++) f = e[c], d[f] = d[f] || {}, d = d[f];
                                                                                                                           ref[b] = d
                                                                                                                       }
                                                                                                                       return ref
                                                                                                                   };
                                                                                                                   window.checkHertzNameSpace("htz.utils");
                                                                                                                   var Utils = Utils || function() {
                                                                                                                       return {
                                                                                                                           exportToNameSpace: function(a, b) {
                                                                                                                               a && b && (checkHertzNameSpace(a)[0] = b)
                                                                                                                           },
                                                                                                                           isIE8: function() {
                                                                                                                               return $("body").hasClass("lt-ie9") && !$("body").hasClass("lt-ie8")
                                                                                                                           },
                                                                                                                           isIE: function() {
                                                                                                                               ua = navigator.userAgent;
                                                                                                                               return -1 < ua.indexOf("MSIE ") || -1 < ua.indexOf("Trident/")
                                                                                                                           },
                                                                                                                           isUseStoragePolyfill: function() {
                                                                                                                               return $("body").hasClass("lt-ie8")
                                                                                                                           },
                                                                                                                           storeItemIE: function(a, b, c) {
                                                                                                                               var d = new Backbone.Model({
                                                                                                                                   id: a
                                                                                                                               });
                                                                                                                               d.url = htz.config.rootContext + "/rest/home/save-ie/" + a;
                                                                                                                               a = {};
                                                                                                                               c && (a = $.extend(a, c));
                                                                                                                               a.type =
                                                                                                                                   "POST";
                                                                                                                               d.save(b, a)
                                                                                                                           },
                                                                                                                           fetchItemIE: function(a, b) {
                                                                                                                               var c = new Backbone.Model;
                                                                                                                               c.url = htz.config.rootContext + "/rest/home/retrieve-ie/" + a;
                                                                                                                               var d = {};
                                                                                                                               b && (d = $.extend(d, b));
                                                                                                                               d.type = "POST";
                                                                                                                               c.fetch(d)
                                                                                                                           },
                                                                                                                           removeItemIE: function(a) {
                                                                                                                               var b = new Backbone.Model({
                                                                                                                                   id: a
                                                                                                                               });
                                                                                                                               b.url = htz.config.rootContext + "/rest/home/clear-ie/" + a;
                                                                                                                               b.save({}, {
                                                                                                                                   type: "POST"
                                                                                                                               })
                                                                                                                           },
                                                                                                                           showSelects: function() {
                                                                                                                               -1 != navigator.userAgent.toLowerCase().indexOf("msie") && "6.0" == navigator.appVersion && $("select").each(function(a, b) {
                                                                                                                                   $(b).css({
                                                                                                                                       visibility: "visible"
                                                                                                                                   })
                                                                                                                               })
                                                                                                                           },
                                                                                                                           hideSelects: function() {
                                                                                                                               -1 !=
                                                                                                                                   navigator.userAgent.toLowerCase().indexOf("msie") && "6.0" == navigator.appVersion && ($("select").each(function(a, b) {
                                                                                                                                       $(this).hasClass("noHide") || $(b).css({
                                                                                                                                           visibility: "hidden"
                                                                                                                                       })
                                                                                                                                   }), $("#lboxDivLBContent") && $("#lboxDivLBContent select").each(function(a, b) {
                                                                                                                                       $(this).hasClass("noHide") || $(b).css({
                                                                                                                                           visibility: "visible"
                                                                                                                                       })
                                                                                                                                   }))
                                                                                                                           },
                                                                                                                           sessionTimedOut: function(a) {
                                                                                                                               return this.hasSessionTimedOut(a, null) ? (window.location.href = a.getResponseHeader("Location"), !0) : !1
                                                                                                                           },
                                                                                                                           hasSessionTimedOut: function(a) {
                                                                                                                               return a && "true" == a.getResponseHeader("Ajax-Session-Timeout") &&
                                                                                                                                   a.getResponseHeader("Location")
                                                                                                                           },
                                                                                                                           displayBootStrappedErrors: function(a) {
                                                                                                                               if (a && a.message && (a.message.fieldErrors || a.message.messages || a.message.systemErrors || a.message.errorData)) Utils.trackError(a.message), htz.helpers.SessionHelper.setItem("errors", JSON.stringify(a.message))
                                                                                                                           },
                                                                                                                           displayErrorMessage: function(a, b) {
                                                                                                                               var c = this.buildNonFieldErrors(a);
                                                                                                                               c && (c = "<ul>" + c + "</ul>", htz.config.isApp ? Utils.showErrors(c, b) : b ? $(b).html(c).show() : $("#error-list").html(c).show())
                                                                                                                           },
                                                                                                                           displayFieldErrors: function(a, b) {
                                                                                                                               var c =
                                                                                                                                   this.buildFieldErrors(a);
                                                                                                                               c && (c = '<ul><pre style="font-family:Avenir, Verdana, sans-serif; font-size: 13px">' + c + "</pre></ul>", b ? $(b).html(c).show() : $("#error-list").html(c).show())
                                                                                                                           },
                                                                                                                           displayAllErrors: function(a, b) {
                                                                                                                               if (a) {
                                                                                                                                   var c = this.buildNonFieldErrors(a),
                                                                                                                                       d = this.buildFieldErrors(a.fieldErrors);
                                                                                                                                   if (c || d) {
                                                                                                                                       var e = "<ul>";
                                                                                                                                       c && (e += c);
                                                                                                                                       d && (e += d);
                                                                                                                                       e += "</ul>";
                                                                                                                                       htz.config.isApp ? Utils.showErrors(e, b) : b ? $(b).html(e).show() : $("#error-list").html(e).show()
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           },
                                                                                                                           buildNonFieldErrors: function(a) {
                                                                                                                               if (!a.messages && !a.systemErrors) return null;
                                                                                                                               var b = "";
                                                                                                                               if (a.messages)
                                                                                                                                   for (var c = 0; c < a.messages.length; c++) b += '<li><pre style="font-family:Avenir, Verdana, sans-serif; font-size: 13px">' + a.messages[c] + "</pre></li>";
                                                                                                                               if (a.systemErrors)
                                                                                                                                   for (c = 0; c < a.systemErrors.length; c++) b += '<li><pre style="font-family:Avenir, Verdana, sans-serif; font-size: 13px">' + a.systemErrors[c] + "</pre></li>";
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           buildFieldErrors: function(a) {
                                                                                                                               if (!a || 0 == a.length) return null;
                                                                                                                               var b = [],
                                                                                                                                   c = "";
                                                                                                                               try {
                                                                                                                                   for (var d in a)
                                                                                                                                       for (var e in a[d][1]) b[a[d][1][e]] = ""
                                                                                                                               } catch (f) {}
                                                                                                                               for (var g in b) c +=
                                                                                                                                   "<li>" + g + "</li>";
                                                                                                                               return c
                                                                                                                           },
                                                                                                                           clearErrorMessage: function(a) {
                                                                                                                               a || (a = "#error-list");
                                                                                                                               $(a).empty().hide()
                                                                                                                           },
                                                                                                                           showErrorFromSession: function() {
                                                                                                                               var a = htz.helpers.SessionHelper.getItem("errors");
                                                                                                                               a && (Utils.displayAllErrors(JSON.parse(a)), htz.helpers.SessionHelper.removeItem("errors"))
                                                                                                                           },
                                                                                                                           findErrorCodes: function(a) {
                                                                                                                               if (!a) return "";
                                                                                                                               var b = "",
                                                                                                                                   c = "",
                                                                                                                                   d;
                                                                                                                               for (d in a)
                                                                                                                                   if (a.fieldErrors)
                                                                                                                                       for (var e in a[d])
                                                                                                                                           if ("string" == typeof a[d][e]) c = a[d][e], b += c.substring(c.lastIndexOf("[") + 1, c.lastIndexOf("]")) + ",";
                                                                                                                                           else
                                                                                                                                               for (var f in a[d][e][1]) c =
                                                                                                                                                   a[d][e][1][f], b += c.substring(c.lastIndexOf("[") + 1, c.lastIndexOf("]")) + ",";
                                                                                                                               else
                                                                                                                                   for (f in a[d]) "string" == typeof a[d][f] ? (c = a[d][f], b += c.substring(c.lastIndexOf("[") + 1, c.lastIndexOf("]")) + ",") : (c = a[d][f].errorCode, b += c + ",");
                                                                                                                               0 < b.length && (b = b.substring(0, b.length - 1));
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           trackError: function(a, b) {
                                                                                                                               var c = this.findErrorCodes(a);
                                                                                                                               c && "undefined" !== typeof WebTracking && WebTracking.setError(c, b)
                                                                                                                           },
                                                                                                                           clearReservationSession: function() {
                                                                                                                               htz.helpers.SessionHelper.removeItem("homeModel")
                                                                                                                           },
                                                                                                                           isHexColorCode: function(a) {
                                                                                                                               return /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(a)
                                                                                                                           },
                                                                                                                           getUrlVars: function() {
                                                                                                                               for (var a = [], b, c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) b = c[d].split("="), a.push(b[0]), a[b[0]] = decodeURIComponent(b[1]);
                                                                                                                               return a
                                                                                                                           },
                                                                                                                           getUrlVar: function(a) {
                                                                                                                               return Utils.getUrlVars()[a]
                                                                                                                           },
                                                                                                                           formatPrice: function(a, b) {
                                                                                                                               if (!a && 0 !== a) return "";
                                                                                                                               if (!b || 0 > b) b = 2;
                                                                                                                               var c;
                                                                                                                               (c = "string" == typeof a ? parseFloat(a).toFixed(b) : a.toFixed(b)) && 0 == c.indexOf(".") && (c = "0" + c);
                                                                                                                               return c
                                                                                                                           },
                                                                                                                           padNumber: function(a, b, c) {
                                                                                                                               if (!a) return "";
                                                                                                                               a += "";
                                                                                                                               return a.length >= b ? a : Array(b -
                                                                                                                                   a.length + 1).join(c || "0") + a
                                                                                                                           },
                                                                                                                           mergeErrors: function(a, b) {
                                                                                                                               if (!a || !a.message) return b;
                                                                                                                               if (!b || !b.message) return a;
                                                                                                                               var c = {
                                                                                                                                   message: {}
                                                                                                                               };
                                                                                                                               if (a.message.messages || b.message.messages) c.message.messages = [], a.message.messages && (c.message.messages = $.merge(c.message.messages, a.message.messages)), b.message.messages && (c.message.messages = $.merge(c.message.messages, b.message.messages));
                                                                                                                               if (a.message.systemErrors || b.message.systemErrors) c.message.systemErrors = [], a.message.systemErrors && (c.message.systemErrors = $.merge(c.message.systemErrors,
                                                                                                                                   a.message.systemErrors)), b.message.systemErrors && (c.message.systemErrors = $.merge(c.message.systemErrors, b.message.systemErrors));
                                                                                                                               if (a.message.fieldErrors || b.message.fieldErrors) c.message.fieldErrors = [], a.message.fieldErrors && (c.message.fieldErrors = $.merge(c.message.fieldErrors, a.message.fieldErrors)), b.message.fieldErrors && (c.message.fieldErrors = $.merge(c.message.fieldErrors, b.message.fieldErrors));
                                                                                                                               return c
                                                                                                                           },
                                                                                                                           buildDropdown: function(a, b, c) {
                                                                                                                               var d = "";
                                                                                                                               c && (d += '<option value="">' + c + "</option>");
                                                                                                                               if (0 < a.length)
                                                                                                                                   for (var e in a) d =
                                                                                                                                       a[e].value === b ? d + ('<option selected="selected" value="' + a[e].value + '">' + a[e].name + "</option>") : d + ('<option value="' + a[e].value + '">' + a[e].name + "</option>");
                                                                                                                               return d
                                                                                                                           },
                                                                                                                           createElm: function(a, b, c, d, e) {
                                                                                                                               d = d ? $("#" + d) : $("body");
                                                                                                                               b || (b = "div");
                                                                                                                               var f = d.find("#" + a);
                                                                                                                               if (0 == f.length) {
                                                                                                                                   a = $("<" + b + "/>").attr("id", a);
                                                                                                                                   if (e)
                                                                                                                                       for (var g in e) val = e[g], a.attr(g, val);
                                                                                                                                   c && a.hide();
                                                                                                                                   d.append(a);
                                                                                                                                   return a
                                                                                                                               }
                                                                                                                               return f.eq(0)
                                                                                                                           },
                                                                                                                           touchScrollElem: function(a) {
                                                                                                                               if (Modernizr && Modernizr.touch) {
                                                                                                                                   var b = navigator.userAgent,
                                                                                                                                       c = !1;
                                                                                                                                   if (0 <= b.indexOf("Android")) 2.3 >=
                                                                                                                                       parseFloat(b.slice(b.indexOf("Android") + 8)) && (c = !0);
                                                                                                                                   else if (0 <= b.indexOf("Silk")) c = !0;
                                                                                                                                   else return;
                                                                                                                                   if (c) {
                                                                                                                                       var d = 0,
                                                                                                                                           e = 0;
                                                                                                                                       $("body").on("touchstart", a, function(a) {
                                                                                                                                           d = this.scrollTop + a.originalEvent.touches[0].pageY;
                                                                                                                                           e = this.scrollLeft + a.originalEvent.touches[0].pageX
                                                                                                                                       });
                                                                                                                                       $("body").on("touchmove", a, function(a) {
                                                                                                                                           (this.scrollTop < this.scrollHeight - this.offsetHeight && this.scrollTop + a.originalEvent.touches[0].pageY < d - 5 || 0 != this.scrollTop && this.scrollTop + a.originalEvent.touches[0].pageY > d + 5) && a.preventDefault();
                                                                                                                                           (this.scrollLeft <
                                                                                                                                               this.scrollWidth - this.offsetWidth && this.scrollLeft + a.originalEvent.touches[0].pageX < e - 5 || 0 != this.scrollLeft && this.scrollLeft + a.originalEvent.touches[0].pageX > e + 5) && a.preventDefault();
                                                                                                                                           this.scrollTop = d - a.originalEvent.touches[0].pageY;
                                                                                                                                           this.scrollLeft = e - a.originalEvent.touches[0].pageX
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           },
                                                                                                                           browserDeviceType: function() {
                                                                                                                               var a = "Other",
                                                                                                                                   b = "Unknown",
                                                                                                                                   c = "Other",
                                                                                                                                   d = "Other OS",
                                                                                                                                   e, f = navigator.userAgent.toLowerCase();
                                                                                                                               try {
                                                                                                                                   a = -1 != f.indexOf("msie") ? "IE" : -1 != f.indexOf("firefox") ? "Mozilla" : window.opera || -1 != f.indexOf("opr") ?
                                                                                                                                       "Opera" : /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? "Webkit" : "Other", b = navigator.appVersion, e = navigator.userAgent, -1 != e.indexOf("Win") ? (c = e.slice(e.indexOf("Windows NT")).split(" "), d = "Windows NT " + c[2]) : -1 != e.indexOf("Mac") ? (c = e.slice(e.indexOf("Mac OS X")).split(" "), d = "MacOSX " + c[3]) : -1 != e.indexOf("x11") ? d = "UNIX" : -1 != e.indexOf("linux") && (d = "Linux")
                                                                                                                               } catch (g) {}
                                                                                                                               return htz.config.deviceGroup + "-" + a + "-" + b + "-" + d
                                                                                                                           },
                                                                                                                           getUniqueErrorKey: function() {
                                                                                                                               try {
                                                                                                                                   var a = new Date;
                                                                                                                                   return "UE-" + this.padNumber(a.getUTCMonth() +
                                                                                                                                       1, 2) + "" + this.padNumber(a.getUTCDate(), 2) + "" + this.padNumber(a.getUTCHours(), 2) + "" + this.padNumber(a.getUTCMinutes(), 2) + "-" + a.getTimezoneOffset() + "-" + a.getSeconds() + "-" + a.getMilliseconds() * (Math.floor(100 * Math.random()) + 1)
                                                                                                                               } catch (b) {
                                                                                                                                   return ""
                                                                                                                               }
                                                                                                                           },
                                                                                                                           isPrivateMode: function() {
                                                                                                                               try {
                                                                                                                                   sessionStorage.setItem("private-mode", "test"), sessionStorage.removeItem("private-mode")
                                                                                                                               } catch (a) {
                                                                                                                                   return !0
                                                                                                                               }
                                                                                                                               return !1
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   "function" == typeof define && define.amd && define("utils/utils", [], function() {
                                                                                                                       return Utils
                                                                                                                   });
                                                                                                                   htz.utils.Utils = Utils;
                                                                                                                   define("config/app-config", ["utils/sessionhelper", "json", "reservation/process-config/core/reservation-constants"], function(a, c, b) {
                                                                                                                       if (htz && htz.config) try {
                                                                                                                           a.getItem(b.APP_CONFIG) || a.setItem(b.APP_CONFIG, c.stringify(htz.config))
                                                                                                                       } catch (d) {}
                                                                                                                       return htz
                                                                                                                   });
                                                                                                                   define("config/app-info", ["config/app-config"], function() {
                                                                                                                       var a = footerRef = null;
                                                                                                                       return {
                                                                                                                           setHeader: function(b) {
                                                                                                                               a = b
                                                                                                                           },
                                                                                                                           getHeader: function() {
                                                                                                                               return a
                                                                                                                           },
                                                                                                                           setFooter: function(a) {
                                                                                                                               footerRef = a
                                                                                                                           },
                                                                                                                           getFooter: function() {
                                                                                                                               return footerRef
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               a = footerRef = null
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   window.checkHertzNameSpace("htz.framework");
                                                                                                                   htz.framework.DependencyManager = function() {
                                                                                                                       var b = [];
                                                                                                                       return {
                                                                                                                           addDependencies: function(a, c) {
                                                                                                                               a && (c && 0 < c.length) && (b[a] = c)
                                                                                                                           },
                                                                                                                           removeDependencies: function(a) {
                                                                                                                               a && (b[a] = null)
                                                                                                                           },
                                                                                                                           getDependencies: function(a) {
                                                                                                                               return a ? b[a] : null
                                                                                                                           },
                                                                                                                           reset: function() {
                                                                                                                               b = []
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   getDependencies = htz.framework.DependencyManager.getDependencies;
                                                                                                                   addDependencies = htz.framework.DependencyManager.addDependencies;
                                                                                                                   "function" == typeof define && define.amd && define("framework/dependency-injection/dependency-manager", [], function() {
                                                                                                                       return htz.framework.DependencyManager
                                                                                                                   });
                                                                                                                   define("framework/view/abstract-view", ["backbone"], function(c) {
                                                                                                                       return c.View.extend({
                                                                                                                           optional: !1,
                                                                                                                           preInitialize: function() {},
                                                                                                                           postInitialize: function() {},
                                                                                                                           preSubmit: function() {
                                                                                                                               return !0
                                                                                                                           },
                                                                                                                           preRender: function() {},
                                                                                                                           postRender: function() {},
                                                                                                                           doCleanup: function() {},
                                                                                                                           refresh: function() {},
                                                                                                                           renderView: function(a) {
                                                                                                                               try {
                                                                                                                                   return this.preRender(), this.renderYourself(a), this.postRender(), this
                                                                                                                               } catch (b) {
                                                                                                                                   if (this.isOptional()) this.handleRenderFailure(b, a);
                                                                                                                                   else throw b;
                                                                                                                               }
                                                                                                                           },
                                                                                                                           renderYourself: function() {},
                                                                                                                           handleRenderFailure: function() {},
                                                                                                                           setOptional: function(a) {
                                                                                                                               this.optional = a
                                                                                                                           },
                                                                                                                           isOptional: function() {
                                                                                                                               return this.optional
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("utils/utils-proxy", ["config/utilconfig"], function(c) {
                                                                                                                       var e = {};
                                                                                                                       return {
                                                                                                                           getLightbox: function() {
                                                                                                                               var a = e.lightbox;
                                                                                                                               a || (a = [], e.lightbox = a);
                                                                                                                               for (var b = null, d = 0; d < a.length; d++)
                                                                                                                                   if (b = a[d], null != b && !b.isInUse()) return b;
                                                                                                                               b = new(c.getLightbox());
                                                                                                                               a.push(b);
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           getSpinner: function() {
                                                                                                                               return c.getSpinner()
                                                                                                                           },
                                                                                                                           getNotifier: function() {
                                                                                                                               return c.getNotifier()
                                                                                                                           },
                                                                                                                           getSlider: function() {
                                                                                                                               return c.getSlider()
                                                                                                                           },
                                                                                                                           getAciveLightboxes: function() {
                                                                                                                               var a = e.lightbox,
                                                                                                                                   b = [];
                                                                                                                               if (a && 0 < a.length)
                                                                                                                                   for (var d = null, c = 0; c < a.length; c++) d = a[c],
                                                                                                                                       null != d && d.isInUse() && b.push(d);
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               e = {}
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("utils/cc-tools", [], function() {
                                                                                                                       return {
                                                                                                                           unMaskCC: function(a, b, c) {
                                                                                                                               a = $(a.target);
                                                                                                                               b ? a.val(b.get("creditCardNumber")) : a.val(c)
                                                                                                                           },
                                                                                                                           get3DCardType: function(a, b, c) {
                                                                                                                               a = $(a.target);
                                                                                                                               b ? a.val(b.get("creditCardType")) : a.val(c)
                                                                                                                           },
                                                                                                                           displayLastFourDigits: function(a, b) {
                                                                                                                               var c = $(a.target),
                                                                                                                                   d = b.substr(b.length - 4),
                                                                                                                                   e = c.val().substr(0, b.length - 4);
                                                                                                                               c.val(e + d)
                                                                                                                           },
                                                                                                                           maskCC: function(a, b, c) {
                                                                                                                               if (a.ctrlKey) return !1;
                                                                                                                               var d = $(a.target),
                                                                                                                                   e = d.val(),
                                                                                                                                   b = /^[0-9]*$/i.test(b + a.key) ? b + a.key : e;
                                                                                                                               d.val(e.replace(/[\w]/g, "*"));
                                                                                                                               c && c.set({
                                                                                                                                   creditCardNumber: b
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               return b
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("utils/tracker", [], function() {
                                                                                                                       return {
                                                                                                                           track: function(a) {
                                                                                                                               a && (Global && "function" === typeof Global.track) && Global.track(a)
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   //dtc4102//PRC91530//Google Data Layer

                                                                                                                   define('utils/gtm-tracker', [], function() {
                                                                                                                       var gtmTracker = {
                                                                                                                           findFilter: function(str, key) {
                                                                                                                               var fields = str.split('/');

                                                                                                                               try {
                                                                                                                                   if (key == "category") {
                                                                                                                                       return fields[1];
                                                                                                                                   } else if (key == "selection") {
                                                                                                                                       return fields[2];
                                                                                                                                   }
                                                                                                                               } catch (e) {
                                                                                                                                   return "";
                                                                                                                               }

                                                                                                                           },
                                                                                                                           clearField: function() {
                                                                                                                               window.dataLayer.push({
                                                                                                                                   'ecommerce': null
                                                                                                                               });
                                                                                                                           },
                                                                                                                           calculate: function(what, value1, value2) {
                                                                                                                               switch (what) {

                                                                                                                                   case 'rentalDays':
                                                                                                                                       var pickupDate = Date.parse(value1);
                                                                                                                                       var dropOffDate = Date.parse(value2);

                                                                                                                                       var diff = dropOffDate - pickupDate;
                                                                                                                                       var diffDays = diff / (24 * 60 * 60 * 1000);

                                                                                                                                       return diffDays;

                                                                                                                                       break;

                                                                                                                               }
                                                                                                                           },
                                                                                                                           track: function(options) {
                                                                                                                               var self = this;
                                                                                                                               var scenario = options.scenario;
                                                                                                                               var trackingObjectArray = [];

                                                                                                                               switch (scenario) {

                                                                                                                                   //dtc4102/accept PTU impression
                                                                                                                                   case 'select_promotion':
                                                                                                                                       var payload = options.payload;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'select_promotion',
                                                                                                                                               'ecommerce': {
                                                                                                                                                   'promoClick': {
                                                                                                                                                       'promotions': [{
                                                                                                                                                           'id': payload.attributes.confirmationSummaryInfo.attributes.extrasDetailModel.id,
                                                                                                                                                           'name': payload.attributes.confirmationSummaryInfo.attributes.extrasDetailModel.name,
                                                                                                                                                           'creative': 'PTU',
                                                                                                                                                           'position': 1,
                                                                                                                                                           'promoAmount': payload.attributes.confirmationSummaryInfo.attributes.extrasDetailModel.price
                                                                                                                                                       }]
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                           });

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with PTU impression." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //dtc4102/accept PTU impression
                                                                                                                                   case 'view_promotion':
                                                                                                                                       var payload = options.payload;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'view_promotion',
                                                                                                                                               'ecommerce': {
                                                                                                                                                   'promoView': {
                                                                                                                                                       'promotions': [{
                                                                                                                                                           'id': payload.attributes.confirmationSummaryInfo.attributes.extrasDetailModel.id,
                                                                                                                                                           'name': payload.attributes.confirmationSummaryInfo.attributes.extrasDetailModel.name,
                                                                                                                                                           'creative': 'PTU',
                                                                                                                                                           'position': 1
                                                                                                                                                       }]
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                           });

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with PTU impression." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //dtc4102//AAA CDP validation
                                                                                                                                       //IRAC-4849
                                                                                                                                   case 'cdp_validation':
                                                                                                                                       var payload = options.payload;
                                                                                                                                       var CDP = "";

                                                                                                                                       try {
                                                                                                                                           var split_string = payload.name.split("-->");
                                                                                                                                           var CDP_Index = split_string[1].indexOf("AAA");
                                                                                                                                           var CDP_end_Index = split_string[1].indexOf("<!--");
                                                                                                                                           CDP = split_string[1].substring(CDP_Index - 1, CDP_end_Index);
                                                                                                                                       } catch (e) {
                                                                                                                                           CDP = payload.name;
                                                                                                                                       }

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'cdp_validation',
                                                                                                                                               'cdp_id': payload.id,
                                                                                                                                               'cdp_name': CDP,
                                                                                                                                               'cdp_status': payload.status
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with AAA CDPvalidation." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //Rental Search
                                                                                                                                   case 'rental-search':
                                                                                                                                       try {
                                                                                                                                           var formData = options.payload[0]; //dtc4102//IRAC-5349 Recommendation Engine Tracking
                                                                                                                                           var isRecommendationEngine = (options.payload[1]) ? options.payload[1] : "undefined";

                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'rental_search',
                                                                                                                                               'pickUpLocationCode': (formData != undefined) ? formData.pickupHiddenEOAG : "undefined",
                                                                                                                                               'dropoffLocationCode': (formData != undefined) ? formData.dropoffHiddenEOAG : "undefined",
                                                                                                                                               'pickupCity': (formData.itinerary) ? ((formData.itinerary.pickupLocation != undefined) ? formData.itinerary.pickupLocation.city : "undefined") : "undefined",
                                                                                                                                               'dropoffCity': (formData.itinerary) ? ((formData.itinerary.dropoffLocation != undefined) ? formData.itinerary.dropoffLocation.city : "undefined") : "undefined",
                                                                                                                                               'pickupDate_mmddyy': (formData != undefined) ? formData.pickupDay : "undefined",
                                                                                                                                               'dropoffDate_mmddyy': (formData != undefined) ? formData.dropoffDay : "undefined",
                                                                                                                                               'pickupCountryCode': (formData.itinerary) ? ((formData.itinerary.pickupLocation != undefined) ? formData.itinerary.pickupLocation.countryCode : "undefined") : "undefined",
                                                                                                                                               'dropoffCountryCode': (formData.itinerary.dropoffLocation != undefined) ? formData.itinerary.dropoffLocation.countryCode : "undefined",
                                                                                                                                               'pickupDoW': "",
                                                                                                                                               'dropoffDoW': "",
                                                                                                                                               'pickupMonth_mm': "",
                                                                                                                                               'dropoffMonth_mm': "",
                                                                                                                                               'pickupState': (formData != undefined) ? formData.inpPickupStateCode : "undefined",
                                                                                                                                               'dropoffState': (formData.itinerary) ? ((formData.itinerary.dropoffLocation != undefined) ? formData.itinerary.dropoffLocation.state : "undefined") : "undefined",
                                                                                                                                               'pickupTime24HR': (formData != undefined) ? formData.pickupTime : "undefined",
                                                                                                                                               'dropoffTime24HR': (formData != undefined) ? formData.dropoffTime : "undefined",
                                                                                                                                               'pickupYear_yyyy': "",
                                                                                                                                               'dropoffYear_yyyy': "",
                                                                                                                                               'pickupOAGCode': (formData != undefined) ? formData.pickupHiddenEOAG : "undefined",
                                                                                                                                               'dropoffOAGCode': (formData != undefined) ? formData.dropoffHiddenEOAG : "undefined",
                                                                                                                                               'rentalDays': self.calculate("rentalDays", formData.pickupDay, formData.dropoffDay),
                                                                                                                                               'reservationLocationType': "",
                                                                                                                                               'isDomestic': "",
                                                                                                                                               'isOneWay': (formData.itinerary != undefined) ? formData.itinerary.isOneWay : "undefined",
                                                                                                                                               'bookingWindow': "",
                                                                                                                                               'ageRange': (formData.itinerary != undefined) ? formData.itinerary.age : "undefined",
                                                                                                                                               'isRecommendationEngine': isRecommendationEngine
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Rental Search." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //dtc4102//IRAC-5349 Recommendation Engine Tracking
                                                                                                                                   case 'recommendation-engine':
                                                                                                                                       var payload = options.payload;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'recommendation_engine',
                                                                                                                                               'recommendation_type': 'vehicles',
                                                                                                                                               'recommendation_sipp': (payload.recommendationSipp != undefined) ? payload.recommendationSipp : "undefined",
                                                                                                                                               'recommendation_weight': (payload.recommendationWeight != undefined) ? payload.recommendationWeight : "undefined"
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Rental Search." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //Look up reservation
                                                                                                                                   case 'lookup-reservation':
                                                                                                                                       var payload = options.payload;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'lookup_reservation',
                                                                                                                                               'lookup_status': payload.response,
                                                                                                                                               'lookup_code': payload.code
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Look up reservation." + e.message);
                                                                                                                                       }
                                                                                                                                       break;


                                                                                                                                       // Email Sign Up
                                                                                                                                   case 'email-sign-up':
                                                                                                                                       var location = options.payload;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'email_signup',
                                                                                                                                               'notification_signup_location': location
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Email Sign Up." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       // SMS Sign Up
                                                                                                                                   case 'sms-sign-up':
                                                                                                                                       var location = options.payload;
                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'sms_signup',
                                                                                                                                               'notification_signup_location': location
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with SMS Sign Up." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       // Error-Tracking
                                                                                                                                   case 'system-errordata-tracking':
                                                                                                                                       var defaultValue = options.payload;
                                                                                                                                       if (defaultValue) {
                                                                                                                                           for (i = 0; i < defaultValue.length; i++) {
                                                                                                                                               var errorDetail = defaultValue[i].match(/\[(.*?)\]/);
                                                                                                                                               if (errorDetail) {
                                                                                                                                                   var errorType = errorDetail[1];
                                                                                                                                                   var errorMsg = errorDetail.input.replace(/ *\[[^\]]*]/, '');
                                                                                                                                                   var cleanErrorMsg = errorMsg.replace(/<[^>]*>/g, '');
                                                                                                                                               }

                                                                                                                                               try {
                                                                                                                                                   window.dataLayer.push({
                                                                                                                                                       'event': 'error',
                                                                                                                                                       'error_type': errorType,
                                                                                                                                                       'error_message': cleanErrorMsg
                                                                                                                                                   });
                                                                                                                                               } catch (e) {
                                                                                                                                                   console.log("Error with tracking form errors." + e.message);
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                   case 'submit-reservation-tracking':
                                                                                                                                       var defaultValue = options.payload;
                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'submit_reservation',
                                                                                                                                               'status': defaultValue
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with submit-reservation-tracking" + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                   case 'error-message-tracking':
                                                                                                                                       var defaultValue = options.payload;
                                                                                                                                       if (defaultValue != undefined) {
                                                                                                                                           var errorDetail = defaultValue.match(/\[(.*?)\]/);
                                                                                                                                           if (errorDetail != undefined) {
                                                                                                                                               var errorType = errorDetail[1];
                                                                                                                                               var errorMsg = errorDetail.input.replace(/ *\[[^\]]*]/, '');
                                                                                                                                               var cleanErrorMsg = errorMsg.replace(/<[^>]*>/g, '');
                                                                                                                                           }

                                                                                                                                           try {
                                                                                                                                               window.dataLayer.push({
                                                                                                                                                   'event': 'error',
                                                                                                                                                   'error_type': errorType,
                                                                                                                                                   'error_message': cleanErrorMsg
                                                                                                                                               });
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with tracking form errors." + e.message);
                                                                                                                                           }
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       // Filter & Sort Vehicles
                                                                                                                                   case 'filter-sort-vehicles':
                                                                                                                                       var filter = options.payload;
                                                                                                                                       var category = self.findFilter(filter, "category");
                                                                                                                                       var selection = self.findFilter(filter, "selection");
                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'filter_vehicle_list',
                                                                                                                                               'filter_category': category,
                                                                                                                                               'filter_selection': selection
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Filter & Sort Vehicles." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //Apply Discount
                                                                                                                                   case 'apply-discount':
                                                                                                                                       var discount = options.payload;
                                                                                                                                       var discountType = discount.discountType;
                                                                                                                                       var discountCode = discount.discountCode;

                                                                                                                                       try {
                                                                                                                                           window.dataLayer.push({
                                                                                                                                               'event': 'apply_discount',
                                                                                                                                               'discount_type': discountType,
                                                                                                                                               'discount_code': discountCode
                                                                                                                                           });
                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Apply Discount." + e.message);
                                                                                                                                       }
                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Impressions - Product Data Car
                                                                                                                                   case 'impressions-car':
                                                                                                                                       var vehicles = options.payload;

                                                                                                                                       for (i in vehicles) {
                                                                                                                                           var price;
                                                                                                                                           if (vehicles[i].quotes.length > 1) {

                                                                                                                                               vehicles[i]["availability"] = "vehicle list – available";

                                                                                                                                               if (vehicles[i].quotes[0] != null && vehicles[i].quotes[1] != null) {
                                                                                                                                                   if (vehicles[i].quotes[0].cannotBeQuoted != undefined && vehicles[i].quotes[1].cannotBeQuoted != undefined &&
                                                                                                                                                       vehicles[i].quotes[0].cannotBeQuoted == '1' && vehicles[i].quotes[1].cannotBeQuoted == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list – cannot be quoted";
                                                                                                                                                   } else if (vehicles[i].quotes[0].unavailable != undefined && vehicles[i].quotes[1].unavailable != undefined &&
                                                                                                                                                       vehicles[i].quotes[0].unavailable == '1' && vehicles[i].quotes[1].unavailable == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list – no rate available";
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                               if (vehicles[i].quotes[0] == null && vehicles[i].quotes[1] == null) {
                                                                                                                                                   vehicles[i]["availability"] = "vehicle list – no rate available";
                                                                                                                                               }

                                                                                                                                               for (j in vehicles[i].quotes) {

                                                                                                                                                   if (vehicles[i].quotes[j] == null) {
                                                                                                                                                       j++;
                                                                                                                                                       price = vehicles[i].quotes[j].approxTotalPrice ? vehicles[i].quotes[j].approxTotalPrice : vehicles[i].quotes[j].price;
                                                                                                                                                       break;
                                                                                                                                                   } else if (vehicles[i].quotes[j].prepaid == 0) {
                                                                                                                                                       price = vehicles[i].quotes[j].approxTotalPrice ? vehicles[i].quotes[j].approxTotalPrice : vehicles[i].quotes[j].price;
                                                                                                                                                       break;
                                                                                                                                                   }
                                                                                                                                               }

                                                                                                                                           } else {
                                                                                                                                               if (vehicles[i].quotes[0] != null) {
                                                                                                                                                   if (vehicles[i].quotes[0].selectForQuote != undefined && vehicles[i].quotes[0].selectForQuote == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list – select for quote";
                                                                                                                                                   } else if (vehicles[i].quotes[0].soldout != undefined && vehicles[i].quotes[0].soldout == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list – sold out";
                                                                                                                                                   } else if (vehicles[i].quotes[0].call != undefined && vehicles[i].quotes[0].call == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list - call to book";
                                                                                                                                                   } else if (vehicles[i].quotes[0].unavailable != undefined && vehicles[i].quotes[0].unavailable == '1') {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list - Rate Not Available";
                                                                                                                                                   } else {
                                                                                                                                                       vehicles[i]["availability"] = "vehicle list – available";
                                                                                                                                                   }
                                                                                                                                                   price = vehicles[i].quotes[0].approxTotalPrice;

                                                                                                                                                   if (isNaN(price) == true) {
                                                                                                                                                       price = vehicles[i].quotes[0].price;
                                                                                                                                                   }
                                                                                                                                               } else {
                                                                                                                                                   vehicles[i]["availability"] = "vehicle list – no rate available";
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': vehicles[i].sipp,
                                                                                                                                                   'name': vehicles[i].name,
                                                                                                                                                   'category': vehicles[i].carTypeDisplay,
                                                                                                                                                   'brand': "car",
                                                                                                                                                   'variant': vehicles[i].passengers,
                                                                                                                                                   'price': parseInt(price), //dtc4102//IRAC-4952//added condition to check quote[1] if quote[0] is null for european region
                                                                                                                                                   'position': vehicles[i].vehicleIndex + 1,
                                                                                                                                                   'list': vehicles[i].availability
                                                                                                                                               }
                                                                                                                                               if (vehicles[i].allNotAvailableOrSoldout != undefined && !vehicles[i].allNotAvailableOrSoldout) {
                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               }
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Impressions - Product Data Car." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'view_item_list',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'impressions': trackingObjectArray
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Impressions - Product Data Add on	Extras
                                                                                                                                   case 'impressions-addOn':
                                                                                                                                       var categories = options.payload;

                                                                                                                                       for (i in categories) {
                                                                                                                                           for (j in categories[i].extras) {
                                                                                                                                               try {
                                                                                                                                                   var currentObj = {
                                                                                                                                                       'id': categories[i].extras[j].id,
                                                                                                                                                       'name': categories[i].extras[j].name,
                                                                                                                                                       'category': categories[i].name,
                                                                                                                                                       'brand': "add-on",
                                                                                                                                                       'variant': '',
                                                                                                                                                       'price': parseInt(categories[i].extras[j].price),
                                                                                                                                                       'unit': categories[i].extras[j].periodText,
                                                                                                                                                       'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined",
                                                                                                                                                       'position': parseInt(j) + 1,
                                                                                                                                                       'list': 'add on list'
                                                                                                                                                   }

                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               } catch (e) {
                                                                                                                                                   console.log("Error with Impressions - Product Data Add on Extras." + e.message);
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'view_item_list',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'impressions': trackingObjectArray
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Product View - Car
                                                                                                                                   case 'productView-car':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.get("sipp"),
                                                                                                                                               'name': details.get("name"),
                                                                                                                                               'category': details.get("carTypeDisplay"),
                                                                                                                                               'brand': "car",
                                                                                                                                               'variant': details.get("passengers"),
                                                                                                                                               'price': '', //need price
                                                                                                                                               'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Product View - Car ." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'view_item',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'currencyCode': htz.tracking.common.currencyCode,
                                                                                                                                               'detail': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'list': 'vehicle list'
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Add to Cart - Car
                                                                                                                                   case 'addToCart-car':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.model.id,
                                                                                                                                               'name': details.options.name,
                                                                                                                                               'category': details.options.carTypeDisplay,
                                                                                                                                               'brand': "car",
                                                                                                                                               'variant': '',
                                                                                                                                               'price': parseInt(details.model.get("approxTotalPrice")),
                                                                                                                                               'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Add to Cart - Car ." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'add_to_cart',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'currencyCode': details.model.get("currency"),
                                                                                                                                               'add': {
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Product Click - Car
                                                                                                                                   case 'productClick-car':
                                                                                                                                       var details = options.payload.model.toJSON();
                                                                                                                                       if (details != undefined && details != null) {
                                                                                                                                           if (details.prepaid == '0' && details.price != "" && details.selectForQuote != "1" &&
                                                                                                                                               details.call != '1') {
                                                                                                                                               var propValue = 'pay later';
                                                                                                                                           } else if (details.prepaid == '1' && details.price != "" && details.selectForQuote != "1" &&
                                                                                                                                               details.call != '1') {
                                                                                                                                               var propValue = 'pay now';
                                                                                                                                           } else if (details.selectForQuote == '1' && details.call != '1') {
                                                                                                                                               var propValue = 'select for quote';
                                                                                                                                           } else if (details.call == '1' && details.selectForQuote != '1') {
                                                                                                                                               var propValue = 'call to book';
                                                                                                                                           } else {
                                                                                                                                               var propValue = 'undefined';
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.id,
                                                                                                                                               'name': '',
                                                                                                                                               'category': '',
                                                                                                                                               'brand': "car",
                                                                                                                                               'variant': '',
                                                                                                                                               'price': parseInt(details.approxTotalPrice),
                                                                                                                                               'position': parseInt(details.quoteIndex),
                                                                                                                                               'availability': propValue
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Product Click - Car." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'select_item',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'click': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'list': 'vehicle list-' + propValue
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Remove from Cart-Car
                                                                                                                                   case 'removeFromCart-car':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.get("vehicle").get("sipp"),
                                                                                                                                               'name': details.get("vehicle").get("name"),
                                                                                                                                               'category': details.get("vehicle").get("carTypeDisplay"),
                                                                                                                                               'brand': "car",
                                                                                                                                               'variant': details.get("vehicle").get("passengers"),
                                                                                                                                               'price': parseInt(details.get("rateInfo").get("approxTotal")),
                                                                                                                                               'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Remove from Cart-Car." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'remove_from_cart',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'currencyCode': htz.tracking.common.currencyCode,
                                                                                                                                               'remove': {
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Add to Cart - Add on Extras 
                                                                                                                                   case 'addToCart-addOnExtras':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.get("id"),
                                                                                                                                               'name': details.get("name"),
                                                                                                                                               'category': '',
                                                                                                                                               'brand': "add-on",
                                                                                                                                               'variant': '',
                                                                                                                                               'price': parseInt(details.get("price")),
                                                                                                                                               'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Add to Cart - Add on Extras." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'add_to_cart',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'currencyCode': htz.tracking.common.currencyCode,
                                                                                                                                               'add': {
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Product Click - Add on Extras
                                                                                                                                   case 'productClick-addOnExtras':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.get("id"),
                                                                                                                                               'name': details.get("name"),
                                                                                                                                               'category': '',
                                                                                                                                               'brand': "add-on",
                                                                                                                                               'variant': '',
                                                                                                                                               'price': parseInt(details.get("price")),
                                                                                                                                               'position': ''
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Product Click - Car." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'select_item',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'click': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'list': 'add on list'
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //ENHANCED ECOMMERCE Setup//Remove from Cart-Add on Extras 
                                                                                                                                   case 'removeFromCart-addOnExtras':
                                                                                                                                       var details = options.payload;

                                                                                                                                       try {
                                                                                                                                           var currentObj = {
                                                                                                                                               'id': details.get("id"),
                                                                                                                                               'name': details.get("name"),
                                                                                                                                               'category': '',
                                                                                                                                               'brand': "add-on",
                                                                                                                                               'variant': '',
                                                                                                                                               'price': parseInt(details.get("price")),
                                                                                                                                               'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                           }

                                                                                                                                           trackingObjectArray.push(currentObj);

                                                                                                                                       } catch (e) {
                                                                                                                                           console.log("Error with Remove from Cart-Add on Extras." + e.message);
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'remove_from_cart',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'currencyCode': htz.tracking.common.currencyCode,
                                                                                                                                               'remove': {
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel//	Step 1 - Choose your vehicle
                                                                                                                                   case 'begin_checkout':
                                                                                                                                       var vehicles = options.payload;

                                                                                                                                       for (i in vehicles) {
                                                                                                                                           for (j in vehicles[i].quotes) {
                                                                                                                                               try {
                                                                                                                                                   var currentObj = {
                                                                                                                                                       'id': vehicles[i].quotes[j].id,
                                                                                                                                                       'name': vehicles[i].name,
                                                                                                                                                       'category': vehicles[i].carTypeDisplay,
                                                                                                                                                       'brand': "car",
                                                                                                                                                       'variant': vehicles[i].passengers,
                                                                                                                                                       'price': parseInt(vehicles[i].quotes[j].approxTotalPrice),
                                                                                                                                                       'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined",
                                                                                                                                                       'position': vehicles[i].quotes[j].vehicleIndex + 1,
                                                                                                                                                       'list': 'vehicle list'
                                                                                                                                                   }

                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               } catch (e) {
                                                                                                                                                   console.log("Error with Checkout Funnel-Step 1 - Choose your vehicle" + e.message);
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'begin_checkout',
                                                                                                                                           'step_name': '1 - choose your vehicle',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'checkout': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'step': 1
                                                                                                                                                   }
                                                                                                                                               },
                                                                                                                                               'impressions': trackingObjectArray
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel- Step 2 - Choose your vehicle
                                                                                                                                   case 'checkout_add-ons-step':
                                                                                                                                       var categories = options.payload.optionals;
                                                                                                                                       var vehicle = options.payload.vehicle;
                                                                                                                                       var rateInfo = options.payload.rateInfo;

                                                                                                                                       for (i in categories) {
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': '',
                                                                                                                                                   'name': categories[i].name,
                                                                                                                                                   'category': categories[i].key,
                                                                                                                                                   'brand': "add-on",
                                                                                                                                                   'variant': '',
                                                                                                                                                   'price': parseInt(categories[i].unitRate),
                                                                                                                                                   'quantity': categories[i].quantity,
                                                                                                                                                   'position': '', //need position
                                                                                                                                                   'list': 'add on list'
                                                                                                                                               }

                                                                                                                                               trackingObjectArray.push(currentObj);
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Checkout Funnel- Step 2 - Choose your vehicle." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'checkout_add-ons-step',
                                                                                                                                           'step_name': '2 - choose add-ons',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'checkout': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'step': 2
                                                                                                                                                   },
                                                                                                                                                   'products': [{
                                                                                                                                                       'name': vehicle.name,
                                                                                                                                                       'id': vehicle.sipp,
                                                                                                                                                       'price': parseInt(rateInfo.approxTotal),
                                                                                                                                                       'brand': 'car',
                                                                                                                                                       'category': vehicle.carTypeDisplay,
                                                                                                                                                       'variant': vehicle.passengers,
                                                                                                                                                       'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"

                                                                                                                                                   }],
                                                                                                                                               },
                                                                                                                                               'impressions': trackingObjectArray
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel- Step 3 - Checkout & Payment
                                                                                                                                   case 'add_payment_info':
                                                                                                                                       var categories = options.payload.optionals;
                                                                                                                                       var vehicle = options.payload.vehicle;
                                                                                                                                       var rateInfo = options.payload.rateInfo;

                                                                                                                                       var selectedVehicle = {
                                                                                                                                           'name': vehicle.name,
                                                                                                                                           'id': vehicle.sipp,
                                                                                                                                           'price': parseInt(rateInfo.approxTotal),
                                                                                                                                           'brand': 'car',
                                                                                                                                           'category': vehicle.carTypeDisplay,
                                                                                                                                           'variant': vehicle.passengers,
                                                                                                                                           'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                       }
                                                                                                                                       trackingObjectArray.push(selectedVehicle);

                                                                                                                                       for (i in categories) {
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': '',
                                                                                                                                                   'name': categories[i].name,
                                                                                                                                                   'category': categories[i].key,
                                                                                                                                                   'brand': "add-on",
                                                                                                                                                   'variant': '',
                                                                                                                                                   'price': parseInt(categories[i].unitRate),
                                                                                                                                                   'quantity': categories[i].quantity
                                                                                                                                               }
                                                                                                                                               if (categories[i].quantity > 0) {
                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               }
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Checkout Funnel- Step 2 - Choose your vehicle." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'add_payment_info',
                                                                                                                                           'step_name': '3 - review and book',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'checkout': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'step': 3
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel- Purchase / Booking confirmation
                                                                                                                                   case 'purchase':
                                                                                                                                       var confirmationSummaryInfo = options.payload.confirmationSummaryInfo;
                                                                                                                                       var vehicle = options.payload.model.get("rateDetails").get("vehicle");
                                                                                                                                       var rateInfo = options.payload.model.get("rateDetails").get("rateInfo");
                                                                                                                                       var categories = options.payload.model.get("rateDetails").get("optionals");

                                                                                                                                       var selectedVehicle = {
                                                                                                                                           'name': vehicle.get("name"),
                                                                                                                                           'id': vehicle.get("sipp"),
                                                                                                                                           'price': parseInt(rateInfo.get("approxTotal")),
                                                                                                                                           'brand': 'car',
                                                                                                                                           'category': vehicle.get("carTypeDisplay"),
                                                                                                                                           'variant': vehicle.get("passengers"),
                                                                                                                                           'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                       }
                                                                                                                                       trackingObjectArray.push(selectedVehicle);

                                                                                                                                       for (i in categories) {
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': '',
                                                                                                                                                   'name': categories.get("name"),
                                                                                                                                                   'category': categories.get("key"),
                                                                                                                                                   'brand': "add-on",
                                                                                                                                                   'variant': '',
                                                                                                                                                   'price': parseInt(categories.get("unitRate")),
                                                                                                                                                   'quantity': parseInt(categories.get("quantity"))
                                                                                                                                               }
                                                                                                                                               if (categories[i].quantity > 0) {
                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               }
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Checkout Funnel- Purchase / Booking confirmation." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'checkout_funnel_type': 'regular',
                                                                                                                                           'discountAmount': '',
                                                                                                                                           'reservationDaysOut': '',
                                                                                                                                           'rentalDays': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined",
                                                                                                                                           'carRevenue': parseInt(rateInfo.get("approxTotal")), //car revenue
                                                                                                                                           'extrasAmount': '',
                                                                                                                                           'event': 'purchase',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'purchase': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'id': confirmationSummaryInfo.confirmationNumber,
                                                                                                                                                       'affiliation': '', //payment type: pay now or later
                                                                                                                                                       'revenue': parseInt(rateInfo.get("approxTotal")),
                                                                                                                                                       'tax': '',
                                                                                                                                                       'coupon': '' //coupon code applied to booking
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel- Step 4 - Modify Reservation
                                                                                                                                   case 'checkout_modify_reservation':
                                                                                                                                       var vehicle = options.payload.get("rateDetails").get("vehicle");
                                                                                                                                       var rateInfo = options.payload.get("rateDetails").get("rateInfo");
                                                                                                                                       var categories = options.payload.get("rateDetails").get("optionals");

                                                                                                                                       var selectedVehicle = {
                                                                                                                                           'name': vehicle.get("name"),
                                                                                                                                           'id': vehicle.get("sipp"),
                                                                                                                                           'price': parseInt(rateInfo.get("approxTotal")),
                                                                                                                                           'brand': 'car',
                                                                                                                                           'category': vehicle.get("carTypeDisplay"),
                                                                                                                                           'variant': vehicle.get("passengers"),
                                                                                                                                           'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                       }
                                                                                                                                       trackingObjectArray.push(selectedVehicle);

                                                                                                                                       for (i in categories) {
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': '',
                                                                                                                                                   'name': categories.get("name"),
                                                                                                                                                   'category': categories.get("key"),
                                                                                                                                                   'brand': "add-on",
                                                                                                                                                   'variant': '',
                                                                                                                                                   'price': parseInt(categories.get("unitRate")),
                                                                                                                                                   'quantity': categories.get("quantity")
                                                                                                                                               }
                                                                                                                                               if (categories[i].quantity > 0) {
                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               }
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Step 4 - Modify Reservation." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'checkout_modify_reservation',
                                                                                                                                           'step_name': '4 - modify reservation',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'checkout': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'step': 4
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Custom Events//Modify Reservation
                                                                                                                                   case 'modify_reservation':
                                                                                                                                       var confNumber = options.payload.confNumber;
                                                                                                                                       var modificationType = options.payload.modificationType;

                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'modify_reservation',
                                                                                                                                           'modification_type': modificationType,
                                                                                                                                           'confirmation_code': confNumber
                                                                                                                                       });

                                                                                                                                       break;

                                                                                                                                       //Checkout Funnel- Step 5 - Save Modification
                                                                                                                                   case 'modify_reservation_saved':
                                                                                                                                       var confirmationSummaryInfo = options.payload.confirmationSummaryInfo;
                                                                                                                                       var vehicle = options.payload.model.get("rateDetails").get("vehicle");
                                                                                                                                       var rateInfo = options.payload.model.get("rateDetails").get("rateInfo");
                                                                                                                                       var categories = options.payload.model.get("rateDetails").get("optionals");

                                                                                                                                       var selectedVehicle = {
                                                                                                                                           'name': vehicle.get("name"),
                                                                                                                                           'id': vehicle.get("sipp"),
                                                                                                                                           'price': parseInt(rateInfo.get("approxTotal")),
                                                                                                                                           'brand': 'car',
                                                                                                                                           'category': vehicle.get("carTypeDisplay"),
                                                                                                                                           'variant': vehicle.get("passengers"),
                                                                                                                                           'quantity': (htz.tracking != undefined) ? parseInt(htz.tracking.common.rentalDays) : "undefined"
                                                                                                                                       }
                                                                                                                                       trackingObjectArray.push(selectedVehicle);

                                                                                                                                       for (i in categories) {
                                                                                                                                           try {
                                                                                                                                               var currentObj = {
                                                                                                                                                   'id': '',
                                                                                                                                                   'name': categories.get("name"),
                                                                                                                                                   'category': categories.get("key"),
                                                                                                                                                   'brand': "add-on",
                                                                                                                                                   'variant': '',
                                                                                                                                                   'price': parseInt(categories.get("unitRate")),
                                                                                                                                                   'quantity': categories.get("quantity")
                                                                                                                                               }
                                                                                                                                               if (categories[i].quantity > 0) {
                                                                                                                                                   trackingObjectArray.push(currentObj);
                                                                                                                                               }
                                                                                                                                           } catch (e) {
                                                                                                                                               console.log("Error with Checkout Funnel- Step 5 - Save Modification." + e.message);
                                                                                                                                           }
                                                                                                                                       }

                                                                                                                                       self.clearField();
                                                                                                                                       window.dataLayer.push({
                                                                                                                                           'event': 'modify_reservation_saved',
                                                                                                                                           'step_name': '5 - save modification',
                                                                                                                                           'ecommerce': {
                                                                                                                                               'checkout': {
                                                                                                                                                   'actionField': {
                                                                                                                                                       'step': 5
                                                                                                                                                   },
                                                                                                                                                   'products': trackingObjectArray
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });

                                                                                                                                       break;
                                                                                                                               }


                                                                                                                           }
                                                                                                                       }

                                                                                                                       return gtmTracker;
                                                                                                                   });

                                                                                                                   (function() {
                                                                                                                       navigator.cookieEnabled || (window.location.href = htz.config.rootContext + "/errors/jsCookieErrorPage?noCookie=true")
                                                                                                                   })();
                                                                                                                   var RestModel = Backbone.Model.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.on("error", this.syncError, this);
                                                                                                                           this.on("sync", this.syncSuccess, this)
                                                                                                                       },
                                                                                                                       parse: function(a, b) {
                                                                                                                           if (Utils.hasSessionTimedOut(b, null)) this.trackSessionTimeout(), this.handleSessionTimeout(b.getResponseHeader("Location"));
                                                                                                                           else return a ? a.data ? this.parseModel(a.data) : this.parseModel(a) : this.parseModel({})
                                                                                                                       },
                                                                                                                       parseModel: function(a) {
                                                                                                                           return a
                                                                                                                       },
                                                                                                                       syncSuccess: function(a, b) {
                                                                                                                           b && (b.message && (b.message.fieldErrors || b.message.messages || b.message.systemErrors) ?
                                                                                                                               (Utils.trackError(b.message, this.getPage()), this.get("preventErrorStorage") || (htz.helpers.SessionHelper.setItem("errors", JSON.stringify(b.message)), Utils.isUseStoragePolyfill() && Utils.storeItemIE("ieErrors", b.message))) : this.get("preventErrorStorage") || htz.helpers.SessionHelper.removeItem("errors"))
                                                                                                                       },
                                                                                                                       getErrors: function(a) {
                                                                                                                           try {
                                                                                                                               return "string" == typeof a ? null : JSON.parse(a.responseText)
                                                                                                                           } catch (b) {
                                                                                                                               try {
                                                                                                                                   var c = window.location.hash,
                                                                                                                                       c = c ? c.substring(1) : "itinerary",
                                                                                                                                       d = "" + a.responseText;
                                                                                                                                   0 < d.length && (d = d.replace(/(\r\n|\n|\r)/gm,
                                                                                                                                       ""), 100 < d.length && (d = d.substring(0, 100)));
                                                                                                                                   WebTracking.setError("debug-error-" + Utils.browserDeviceType() + "-" + c + "-" + this.get("href") + "-" + d + "-" + b.message, c)
                                                                                                                               } catch (e) {}
                                                                                                                               return null
                                                                                                                           }
                                                                                                                       },
                                                                                                                       syncError: function(a, b, c) {
                                                                                                                           a = b && b.status ? b.status : null;
                                                                                                                           htz.helpers.SessionHelper.removeItem("errors");
                                                                                                                           this.handleStatus(a, b, c);
                                                                                                                           Loader.hideLoader()
                                                                                                                       },
                                                                                                                       handleStatus: function(a, b, c) {
                                                                                                                           if (htz.config.isApp && (500 == a || 403 == a)) try {
                                                                                                                               $.publish("error-" + a)
                                                                                                                           } catch (d) {} else 500 === a ? this.handleError500() : 403 === a ? this.handleError403() : this.checkForErrors(this.getErrors(b),
                                                                                                                               c)
                                                                                                                       },
                                                                                                                       handleError500: function() {
                                                                                                                           window.location.href = htz.config.rootContext + "/error/index.jsp"
                                                                                                                       },
                                                                                                                       handleError403: function() {
                                                                                                                           window.location.href = htz.config.rootContext + "/reservation/"
                                                                                                                       },
                                                                                                                       handleSessionTimeout: function(a) {
                                                                                                                           a && (window.location.href = a)
                                                                                                                       },
                                                                                                                       checkForErrors: function(a, b) {
                                                                                                                           if (a) {
                                                                                                                               if (a.message) {
                                                                                                                                   this.trigger("message", this, a.message);
                                                                                                                                   a.message.fieldErrors && this.trigger("fieldError", this, a.message.fieldErrors, b);
                                                                                                                                   if (a.message.messages || a.message.systemErrors || a.message.errorData) {
                                                                                                                                       "phone" === htz.config.deviceGroup ?
                                                                                                                                           window.scrollTo(0, 60) : window.scrollTo(0, 0);
                                                                                                                                       var c = b || this.get("errorLocation") || this.getErrorLocation();
                                                                                                                                       Utils.displayErrorMessage(a.message, c);
                                                                                                                                       a.message.messages ? this.trigger("messages", this, a.message.messages) : this.trigger("systemErrors", this, a.message.systemErrors);
                                                                                                                                       a.message.errorData && this.trigger("errorData", this, a.message.errorData)
                                                                                                                                   }
                                                                                                                                   Utils.trackError(a.message, this.getPage())
                                                                                                                               }
                                                                                                                               a.data && this.trigger("errordata", this, a.data)
                                                                                                                           }
                                                                                                                       },
                                                                                                                       saveChanged: function(a, b, c) {
                                                                                                                           var d;
                                                                                                                           _.isObject(a) || null == a ? (d = a, c = b) : (d = {},
                                                                                                                               d[a] = b);
                                                                                                                           a = this.changedAttributes() ? _.extend(this.changedAttributes(), d) : d;
                                                                                                                           a = this.isNew() ? a : _.extend(a, {
                                                                                                                               id: this.get("id")
                                                                                                                           });
                                                                                                                           c = c ? _.clone(c) : {};
                                                                                                                           c = _.extend(c, {
                                                                                                                               data: JSON.stringify(a),
                                                                                                                               contentType: "application/json"
                                                                                                                           });
                                                                                                                           this.save(d, c)
                                                                                                                       },
                                                                                                                       url: function() {
                                                                                                                           return this.get("href")
                                                                                                                       },
                                                                                                                       getPage: function() {
                                                                                                                           return null
                                                                                                                       },
                                                                                                                       getErrorLocation: function() {
                                                                                                                           return null
                                                                                                                       },
                                                                                                                       trackSessionTimeout: function() {
                                                                                                                           try {
                                                                                                                               "undefined" !== typeof WebTracking && WebTracking.trackData({
                                                                                                                                   eVar22: "NZX305"
                                                                                                                               })
                                                                                                                           } catch (a) {}
                                                                                                                       }
                                                                                                                   });
                                                                                                                   "function" == typeof define && define.amd && define("utils/restmodel", ["backbone"], function() {
                                                                                                                       return RestModel
                                                                                                                   });
                                                                                                                   /**
                                                                                                                       @description  jQuery Cookie plugin - https://github.com/carhartl/jquery-cookie. 
                                                                                                                       Dual licensed under the MIT and GPL licenses:
                                                                                                                    	http://www.opensource.org/licenses/mit-license.php
                                                                                                                   	http://www.gnu.org/licenses/gpl.html
                                                                                                                       @requires Jquery
                                                                                                                    */
                                                                                                                   (function(g) {
                                                                                                                       g.cookie = function(h, b, a) {
                                                                                                                           if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(b)) || null === b || void 0 === b)) {
                                                                                                                               a = g.extend({}, a);
                                                                                                                               if (null === b || void 0 === b) a.expires = -1;
                                                                                                                               if ("number" === typeof a.expires) {
                                                                                                                                   var d = a.expires,
                                                                                                                                       c = a.expires = new Date;
                                                                                                                                   c.setDate(c.getDate() + d)
                                                                                                                               }
                                                                                                                               b = "" + b;
                                                                                                                               return document.cookie = [encodeURIComponent(h), "=", a.raw ? b : encodeURIComponent(b), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" :
                                                                                                                                   ""
                                                                                                                               ].join("")
                                                                                                                           }
                                                                                                                           for (var a = b || {}, d = a.raw ? function(a) {
                                                                                                                                   return a
                                                                                                                               } : decodeURIComponent, c = document.cookie.split("; "), e = 0, f; f = c[e] && c[e].split("="); e++)
                                                                                                                               if (d(f[0]) === h) return d(f[1] || "");
                                                                                                                           return null
                                                                                                                       }
                                                                                                                   })(jQuery);
                                                                                                                   window.checkHertzNameSpace("htz.utils");
                                                                                                                   var LightBox = LightBox || function() {
                                                                                                                       var c = function() {
                                                                                                                           c.OVERLAYSEQUENCE += 1;
                                                                                                                           this.id = "light-box-" + c.OVERLAYSEQUENCE;
                                                                                                                           this.zIndex += 10 * c.OVERLAYSEQUENCE;
                                                                                                                           c.INSTANCES.push(this)
                                                                                                                       };
                                                                                                                       c.OVERLAYSEQUENCE = 0;
                                                                                                                       c.INSTANCES = [];
                                                                                                                       c.adjust = function() {
                                                                                                                           for (var a = 0; a < c.INSTANCES.length; a++) {
                                                                                                                               var b = c.INSTANCES[a];
                                                                                                                               b && b.isInUse() && b.adjustBackground()
                                                                                                                           }
                                                                                                                       };
                                                                                                                       var e = null;
                                                                                                                       c.prototype = {
                                                                                                                           inUse: !1,
                                                                                                                           zIndex: 1050,
                                                                                                                           backBreak: 600,
                                                                                                                           avlWidth: 0,
                                                                                                                           pageContainer: null,
                                                                                                                           id: "",
                                                                                                                           background: null,
                                                                                                                           foreground: null,
                                                                                                                           dataContainer: null,
                                                                                                                           orginalWidth: 0,
                                                                                                                           setDefaults: function() {
                                                                                                                               this.params = {
                                                                                                                                   url: "",
                                                                                                                                   top: 0,
                                                                                                                                   left: 0,
                                                                                                                                   width: 500,
                                                                                                                                   height: "auto",
                                                                                                                                   hCenter: !0,
                                                                                                                                   vCenter: !1,
                                                                                                                                   scroll: !1,
                                                                                                                                   darkness: 0.8,
                                                                                                                                   dismiss: !0,
                                                                                                                                   complete: null,
                                                                                                                                   error: null,
                                                                                                                                   close: null,
                                                                                                                                   zIndex: 0,
                                                                                                                                   closeLabel: null,
                                                                                                                                   title: null,
                                                                                                                                   footNote: null,
                                                                                                                                   sourceElement: null,
                                                                                                                                   sourceElementOffset: null,
                                                                                                                                   bgSourceElement: null,
                                                                                                                                   plain: !1,
                                                                                                                                   referrer: null,
                                                                                                                                   hMargin: 80,
                                                                                                                                   backButton: !0,
                                                                                                                                   showBackButton: !0,
                                                                                                                                   suppressClose: !1,
                                                                                                                                   autoScrollAdjust: !0,
                                                                                                                                   noPadding: !1,
                                                                                                                                   suppressHeader: !1,
                                                                                                                                   allowOverflow: !1
                                                                                                                               }
                                                                                                                           },
                                                                                                                           getDisplayWidth: function() {
                                                                                                                               return $("body").width()
                                                                                                                           },
                                                                                                                           ajaxError: function(a) {
                                                                                                                               try {
                                                                                                                                   this.showContent(htz.content.ajaxFail)
                                                                                                                               } catch (b) {}
                                                                                                                               "function" ==
                                                                                                                               typeof this.params.error && this.params.error(a)
                                                                                                                           },
                                                                                                                           ajaxComplete: function(a) {
                                                                                                                               "function" == typeof this.params.complete && this.params.complete(a)
                                                                                                                           },
                                                                                                                           renderTemplate: function() {
                                                                                                                               var a = [];
                                                                                                                               a.push('<div class="lb-background"></div>');
                                                                                                                               a.push('<div class="lb-foreground">');
                                                                                                                               this.params.backButton && (this.params.showBackButton && !htz.config.isApp) && a.push('<div class="lb-back lb-close"><div><div class="icons-back_icon"></div></div><div>' + this.params.backLabel + "</div></div>");
                                                                                                                               a.push('<div class="lb-foreground-cont" role="dialog" aria-label="' +
                                                                                                                                   this.params.title + '" tabindex="0">');
                                                                                                                               if (!this.params.plain)
                                                                                                                                   if (this.params.suppressClose) this.params.title && a.push('<header class="lb-header clearfix"><span class="swoosh multiline"><section>' + this.params.title + '</section></span><span class="lb-close lb-deny"></span></header>');
                                                                                                                                   else if (this.params.title && this.params.closeLabel) {
                                                                                                                                   if (a.push('<header class="lb-header clearfix"><span class="swoosh multiline"><section>' + this.params.title + '</section></span><span class="lb-close lb-deny" role="button" tabindex="0" >' +
                                                                                                                                           this.params.closeLabel.toUpperCase() + '<div class="icons-ic_close_x lb-close-icon"></div></span></header>'), htz.config.isApp) {
                                                                                                                                       var b = localStorage.getItem("itineraryPageBack"),
                                                                                                                                           c = localStorage.getItem("vehiclePageBack"),
                                                                                                                                           d = $("#location-popup h1").text();
                                                                                                                                       b ? (a.push("<a id=\"lbBackButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" + d + "', 'Back', '-1');\"><span></span></a>"), a.push("<a id=\"lbCloseButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" +
                                                                                                                                           d + "', 'X', '-1');\"><span></span></a>")) : c ? (a.push("<a id=\"lbBackButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Select Vehicle', '', '', '', '');\"><span></span></a>"), a.push("<a id=\"lbCloseButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Select Vehicle', '', '', '', '');\"><span></span></a>")) : (a.push("<a id=\"lbBackButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" +
                                                                                                                                           d + "', 'Back', '-1');\"><span></span></a>"), a.push("<a id=\"lbCloseButton\" onclick=\"$(&apos;.lb-back&apos;).trigger(&apos;click&apos;); hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" + d + "', 'X', '-1');\"><span></span></a>"))
                                                                                                                                   }
                                                                                                                               } else this.params.closeLabel && this.backBreak <= this.avlWidth && a.push('<header class="lb-header-plain clearfix"><span class="lb-close lb-deny">' + this.params.closeLabel.toUpperCase() + '<div class="icons-ic_close_x lb-close-icon"></div></span></header>');
                                                                                                                               this.params.noPadding ? a.push('<div class="lb-content-box-no-padding"></div>') : a.push('<div class="lb-content-box"></div>');
                                                                                                                               this.params.footNote && a.push('<footer class="lb-footer">' + this.params.footNote + "</footer>");
                                                                                                                               a.push("</div>");
                                                                                                                               this.params.backButton && (this.params.showBackButton && htz.config.isApp) && (b = localStorage.getItem("itineraryPageBack"), c = localStorage.getItem("vehiclePageBack"), b ? (a.push("<div class=\"lb-back lb-close\"><div class=\"lb-back-btn\" onclick=\"hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" +
                                                                                                                                   d + "', 'Back', '-1');\"><div><div class=\"icons-back_icon\"></div></div><div>" + this.params.backLabel + "</div></div></div>"), localStorage.removeItem("itineraryPageBack")) : c ? (a.push("<div class=\"lb-back lb-close\"><div class=\"lb-back-btn\" onclick=\"hzm.shared.googleTagManger('Select Vehicle', '', '', '', '');\"><div><div class=\"icons-back_icon\"></div></div><div>" + this.params.backLabel + "</div></div></div>"), localStorage.removeItem("vehiclePageBack")) : a.push("<div class=\"lb-back lb-close\"><div class=\"lb-back-btn\" onclick=\"hzm.shared.googleTagManger('Hertz Car Rental Locations', 'Reservation Flow','" +
                                                                                                                                   d + "', 'Back', '-1');\"><div><div class=\"icons-back_icon\"></div></div><div>" + this.params.backLabel + "</div></div></div>"));
                                                                                                                               a.push("</div>");
                                                                                                                               $(".tmplPageContainer :visible").addClass("disabled").attr("tabindex", -1);
                                                                                                                               $("#container :visible").addClass("disabled").attr("tabindex", -1);
                                                                                                                               return a.join("")
                                                                                                                           },
                                                                                                                           initTemplate: function() {
                                                                                                                               this.params.backLabel = this.params.closeLabel;
                                                                                                                               if (!this.params.closeLabel) try {
                                                                                                                                   this.params.closeLabel = htz.content.close, this.params.backLabel = htz.content.back
                                                                                                                               } catch (a) {}
                                                                                                                               this.params.closeLabel ||
                                                                                                                                   (this.params.dismiss = !0);
                                                                                                                               0 < this.params.zIndex && (this.zIndex = this.params.zIndex);
                                                                                                                               var b = this.renderTemplate();
                                                                                                                               0 == $("#" + this.id).length ? (0 < $(".tmplPageContainer").length ? this.pageContainer = $(".tmplPageContainer") : 0 < $("#container").length && (this.pageContainer = $("#container")), this.pageContainer.after($("<div />").attr("id", this.id).html(b))) : $("#" + this.id).html(b);
                                                                                                                               this.background = $("#" + this.id + " .lb-background").css({
                                                                                                                                   "z-index": this.zIndex
                                                                                                                               });
                                                                                                                               this.foreground = $("#" + this.id + " .lb-foreground").css({
                                                                                                                                   "z-index": this.zIndex +
                                                                                                                                       5
                                                                                                                               });
                                                                                                                               this.dataContainer = this.params.noPadding ? $("#" + this.id + " .lb-content-box-no-padding") : $("#" + this.id + " .lb-content-box");
                                                                                                                               0 == this.params.darkness ? this.foreground.addClass("lb-foreground-shadow") : this.foreground.removeClass("lb-foreground-shadow");
                                                                                                                               htz.config.isApp && $("#" + this.id).show();
                                                                                                                               this.adjustBackground()
                                                                                                                           },
                                                                                                                           closeOverlay: function(a) {
                                                                                                                               this.isInUse() && ($(".tmplPageContainer").find("*").removeClass("disabled").removeAttr("tabindex"), $("#container").find("*").removeClass("disabled").removeAttr("tabindex"), !a && "function" == typeof this.params.close && (this.params.referrer ? this.params.close.call(this.params.referrer) : this.params.close()), this.hide(), htz.config.isApp && ($("#" + this.id).hide(), "Select for Quote" == localStorage.getItem("selectQuote") && "Continue with Pay Later" == $(".lb-foreground .lb-content-box #cancel-fee-overlay button.secondary").text() && (this.stop(), localStorage.removeItem("selectQuote"))))
                                                                                                                           },
                                                                                                                           makeRequest: function() {
                                                                                                                               var a = this;
                                                                                                                               a.showLightbox();
                                                                                                                               a.showProgress();
                                                                                                                               $.ajax({
                                                                                                                                   type: "post",
                                                                                                                                   url: a.params.url,
                                                                                                                                   success: function(b, c, d) {
                                                                                                                                       "undefined" != typeof Utils && Utils.sessionTimedOut(d) || a.showContent(b)
                                                                                                                                   },
                                                                                                                                   error: function(b, c, d) {
                                                                                                                                       a.ajaxError(d)
                                                                                                                                   },
                                                                                                                                   complete: function(b) {
                                                                                                                                       a.ajaxComplete(b)
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           adjustScroll: function() {
                                                                                                                               e && (window.scrollTo(e.x, e.y), e = null)
                                                                                                                           },
                                                                                                                           hide: function() {
                                                                                                                               this.foreground.hide();
                                                                                                                               this.background.hide();
                                                                                                                               this.pageContainer.show();
                                                                                                                               "undefined" != typeof Utils && Utils.showSelects();
                                                                                                                               this.unbindEvents();
                                                                                                                               this.inUse = !1;
                                                                                                                               "phone" === htz.config.deviceGroup && this.params.autoScrollAdjust && this.adjustScroll()
                                                                                                                           },
                                                                                                                           show: function(a) {
                                                                                                                               this.showLightbox();
                                                                                                                               this.showContent(a)
                                                                                                                           },
                                                                                                                           showLightbox: function() {
                                                                                                                               this.params.backButton && this.avlWidth < this.backBreak ? (this.pageContainer.hide(), this.background.css({
                                                                                                                                   opacity: this.params.darkness
                                                                                                                               })) : ("undefined" != typeof Utils && Utils.hideSelects(), this.background.css({
                                                                                                                                   opacity: this.params.darkness
                                                                                                                               }).show());
                                                                                                                               this.foreground.show();
                                                                                                                               "phone" === htz.config.deviceGroup && window.scrollTo(0, 0)
                                                                                                                           },
                                                                                                                           showProgress: function() {
                                                                                                                               this.dataContainer.html($("<div />").addClass("lb-progress"))
                                                                                                                           },
                                                                                                                           showContent: function(a) {
                                                                                                                               this.isInUse() ? ("auto" ===
                                                                                                                                   this.params.height ? this.params.allowOverflow ? this.dataContainer.css({
                                                                                                                                       "overflow-y": "visible"
                                                                                                                                   }) : this.dataContainer.css({
                                                                                                                                       "overflow-y": "auto"
                                                                                                                                   }) : this.dataContainer.css({
                                                                                                                                       height: this.params.height,
                                                                                                                                       "overflow-y": "scroll"
                                                                                                                                   }), this.dataContainer.html(a)) : this.dataContainer.html("")
                                                                                                                           },
                                                                                                                           setPosition: function() {
                                                                                                                               "phone" === htz.config.deviceGroup && (this.params.autoScrollAdjust && !e) && (e = {
                                                                                                                                   x: void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
                                                                                                                                   y: void 0 !==
                                                                                                                                       window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
                                                                                                                               });
                                                                                                                               this.avlWidth = this.getDisplayWidth();
                                                                                                                               if (this.params.backButton && this.avlWidth < this.backBreak) this.params.width = this.avlWidth - 20, this.pageContainer.hide(), this.background.hide(), this.foreground.css({
                                                                                                                                   top: 0,
                                                                                                                                   left: 0,
                                                                                                                                   width: this.params.width
                                                                                                                               }), htz.config.isApp && this.foreground.css("max-width", this.params.width + 20);
                                                                                                                               else {
                                                                                                                                   this.pageContainer.show();
                                                                                                                                   this.background.show();
                                                                                                                                   this.params.backButton ||
                                                                                                                                       (this.foreground.addClass("fullWidth"), this.params.hMargin = 10);
                                                                                                                                   this.params.width = this.avlWidth - this.params.hMargin < this.orginalWidth ? this.avlWidth - this.params.hMargin : this.orginalWidth;
                                                                                                                                   0 < this.params.left ? this.params.left + this.params.width > this.avlWidth && (this.params.hCenter = !0) : this.params.hCenter = !0;
                                                                                                                                   if (this.params.sourceElement) {
                                                                                                                                       var a = $(this.params.sourceElement).offset();
                                                                                                                                       this.params.left = this.params.hCenter ? Math.round((this.avlWidth - this.params.width) / 2) : $("body").width() > a.left + this.params.width +
                                                                                                                                           25 ? a.left + 25 : a.left > this.params.width + 5 ? a.left - this.params.width - 5 : a.left - this.params.width / 2;
                                                                                                                                       this.params.top = this.params.sourceElementOffset ? a.top + this.params.sourceElementOffset : a.top;
                                                                                                                                       this.params.dismiss && this.background.removeClass("lb-close-ncursor")
                                                                                                                                   } else this.params.hCenter && (this.params.left = Math.round((this.avlWidth - this.params.width) / 2)), 0 == this.params.top && (this.params.top = $(document).scrollTop() + 100), this.params.dismiss && this.background.addClass("lb-close-ncursor");
                                                                                                                                   this.background.css({
                                                                                                                                       width: $(document).width(),
                                                                                                                                       height: $(document).height()
                                                                                                                                   });
                                                                                                                                   this.foreground.css({
                                                                                                                                       width: this.params.width,
                                                                                                                                       top: this.params.top,
                                                                                                                                       left: this.params.left
                                                                                                                                   });
                                                                                                                                   htz.config.isApp && hzm.utils.isIPAD() && ($("#light-box-2 .lb-foreground.fullWidth").css("left", "0px"), $("#light-box-2 .lb-foreground.fullWidth").css("top", "0px"))
                                                                                                                               }
                                                                                                                           },
                                                                                                                           adjustBackground: function() {
                                                                                                                               this.params.bgSourceElement ? this.background.css({
                                                                                                                                   width: $(document).width(),
                                                                                                                                   height: $(document).height(),
                                                                                                                                   top: $(this.params.sourceElement).offset().top
                                                                                                                               }) : this.background.css({
                                                                                                                                   width: $(document).width(),
                                                                                                                                   height: $(document).height()
                                                                                                                               })
                                                                                                                           },
                                                                                                                           showPageData: function() {
                                                                                                                               var a = "string" == typeof this.params.url ? $("#" + this.params.url).get(0) : this.params.url;
                                                                                                                               this.show($(a).html())
                                                                                                                           },
                                                                                                                           bindEvents: function() {
                                                                                                                               var a = this;
                                                                                                                               a.params.hCenter && ($(window).on("resize.lightBox", function() {
                                                                                                                                   a.setPosition();
                                                                                                                                   a.params.bgSourceElement && a.adjustBackground()
                                                                                                                               }), $(window).on("orientationchange.lightBox", function() {
                                                                                                                                   a.setPosition();
                                                                                                                                   a.params.bgSourceElement && a.adjustBackground()
                                                                                                                               }));
                                                                                                                               a.params.scroll && $(window).bind("scroll.lightBox", function() {
                                                                                                                                   a.setPosition()
                                                                                                                               });
                                                                                                                               a.params.dismiss && $(document).bind("keyup.lightBox", function(b) {
                                                                                                                                   27 == b.keyCode && a.closeOverlay()
                                                                                                                               });
                                                                                                                               a.params.dismiss ? a.background.addClass("lb-close-ncursor") : a.background.removeClass("lb-close-ncursor");
                                                                                                                               $("#" + a.id + " .lb-close, #" + a.id + " .lb-close-ncursor").bind("click", function() {
                                                                                                                                   a.closeOverlay()
                                                                                                                               });
                                                                                                                               $("#" + a.id + " .lb-close, #" + a.id + " .lb-close-ncursor").bind("keydown.lightBox", function(b) {
                                                                                                                                   if (32 == b.keyCode) return b.preventDefault(), a.closeOverlay(), !1
                                                                                                                               })
                                                                                                                           },
                                                                                                                           unbindEvents: function() {
                                                                                                                               $(window).off(".lightBox");
                                                                                                                               this.background.off("click");
                                                                                                                               $(document).off("keyup.lightBox");
                                                                                                                               $("#" + this.id + " .lb-close, #" + this.id + " .lb-close-ncursor").off("click")
                                                                                                                           },
                                                                                                                           init: function() {
                                                                                                                               this.avlWidth = this.getDisplayWidth();
                                                                                                                               this.orginalWidth = this.params.width;
                                                                                                                               this.initTemplate();
                                                                                                                               this.bindEvents();
                                                                                                                               this.setPosition()
                                                                                                                           },
                                                                                                                           getDataContainer: function() {
                                                                                                                               return this.dataContainer
                                                                                                                           },
                                                                                                                           isInUse: function() {
                                                                                                                               return this.inUse
                                                                                                                           },
                                                                                                                           overlay: function(a, b) {
                                                                                                                               this.inUse = !0;
                                                                                                                               this.setDefaults();
                                                                                                                               this.params = $.extend(this.params, a);
                                                                                                                               this.init();
                                                                                                                               b ? this.show(b) : "string" ==
                                                                                                                                   typeof this.params.url && 0 <= this.params.url.indexOf("/") ? this.makeRequest() : this.showPageData()
                                                                                                                           }
                                                                                                                       };
                                                                                                                       return c
                                                                                                                   }();
                                                                                                                   htz.utils.LightBox = LightBox;
                                                                                                                   "function" == typeof define && define.amd && define("utils/lightbox", [], function() {
                                                                                                                       return LightBox
                                                                                                                   });
                                                                                                                   var LazyLoad = function() {
                                                                                                                       var a = [],
                                                                                                                           c = [];
                                                                                                                       return {
                                                                                                                           init: function() {
                                                                                                                               a = a.concat(c);
                                                                                                                               a.length && function(b) {
                                                                                                                                   var e = arguments.callee,
                                                                                                                                       d = a[b],
                                                                                                                                       c = d.complete;
                                                                                                                                   d.complete = function(d, f) {
                                                                                                                                       c && c(d, f);
                                                                                                                                       b + 1 < a.length && e(b + 1)
                                                                                                                                   };
                                                                                                                                   $.ajax(d)
                                                                                                                               }(0)
                                                                                                                           },
                                                                                                                           queueJS: function(b, e) {
                                                                                                                               "high" == e ? a.push(b) : c.push(b)
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   window.checkHertzNameSpace("htz.utils");
                                                                                                                   var Loader = Loader || function() {
                                                                                                                       function d(a, e) {
                                                                                                                           var b = $("body").width(),
                                                                                                                               c = $(window).height();
                                                                                                                           htz && htz.config && "desktop" === htz.config.deviceGroup ? a.css({
                                                                                                                               left: b / 2,
                                                                                                                               top: $(document).scrollTop() + 100
                                                                                                                           }) : a.css({
                                                                                                                               left: b / 2,
                                                                                                                               top: $(document).scrollTop() + (c - 40) / 2
                                                                                                                           });
                                                                                                                           e.css({
                                                                                                                               opacity: 0.4,
                                                                                                                               background: "#000",
                                                                                                                               "z-index": 99999,
                                                                                                                               position: "fixed",
                                                                                                                               top: 0,
                                                                                                                               left: 0,
                                                                                                                               right: 0,
                                                                                                                               bottom: 0
                                                                                                                           })
                                                                                                                       }
                                                                                                                       var c, b;
                                                                                                                       $(document).ready(function() {
                                                                                                                           $("input[type='submit'], button.submit").on("click", function() {
                                                                                                                               Loader.showLoader()
                                                                                                                           });
                                                                                                                           $(window).on("resize.loader",
                                                                                                                               Loader.resize);
                                                                                                                           window.onorientationchange = function() {
                                                                                                                               Loader.resize()
                                                                                                                           }
                                                                                                                       });
                                                                                                                       return {
                                                                                                                           resize: function() {
                                                                                                                               var a = $("#loading-fg"),
                                                                                                                                   b = $("#loading_bg");
                                                                                                                               a.length && b.length && d(a, b)
                                                                                                                           },
                                                                                                                           spin: function(a) {
                                                                                                                               a || (a = {});
                                                                                                                               a.timeout || (a.timeout = 25E3);
                                                                                                                               this.showLoader(a)
                                                                                                                           },
                                                                                                                           showLoader: function(a) {
                                                                                                                               Loader.reset();
                                                                                                                               var b = $("<div />").attr("id", "loading_bg"),
                                                                                                                                   c = $("<div />").attr("id", "loading-fg").addClass("loading-fg");
                                                                                                                               d(c, b);
                                                                                                                               b.appendTo($("body")).show();
                                                                                                                               c.appendTo($("body")).show();
                                                                                                                               Loader.setTimer(a)
                                                                                                                           },
                                                                                                                           setTimer: function(a) {
                                                                                                                               a && a.timeout &&
                                                                                                                                   (b && window.clearTimeout(b), b = window.setTimeout(Loader.hideLoader, a.timeout), (a = a.callback) && "function" == typeof a && (c = a))
                                                                                                                           },
                                                                                                                           reset: function() {
                                                                                                                               c = null;
                                                                                                                               this.resetTimer();
                                                                                                                               Loader.hideLoader()
                                                                                                                           },
                                                                                                                           resetTimer: function() {
                                                                                                                               b && window.clearTimeout(b);
                                                                                                                               b = null
                                                                                                                           },
                                                                                                                           stop: function() {
                                                                                                                               this.hideLoader()
                                                                                                                           },
                                                                                                                           hideLoader: function() {
                                                                                                                               try {
                                                                                                                                   this.resetTimer()
                                                                                                                               } catch (a) {}
                                                                                                                               $("#loading_bg, #loading-fg").remove();
                                                                                                                               c && (c(), c = null)
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   htz.utils.Spinner = Loader;
                                                                                                                   "function" == typeof define && define.amd && define("utils/loader", [], function() {
                                                                                                                       return htz.utils.Spinner
                                                                                                                   });
                                                                                                                   if (typeof window.localStorage == "undefined" || typeof window.sessionStorage == "undefined")(function() {
                                                                                                                       var e = function(e) {
                                                                                                                           function t(e, t, n) {
                                                                                                                               var r, i;
                                                                                                                               if (n) {
                                                                                                                                   r = new Date;
                                                                                                                                   r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
                                                                                                                                   i = "; expires=" + r.toGMTString()
                                                                                                                               } else {
                                                                                                                                   i = ""
                                                                                                                               }
                                                                                                                               document.cookie = e + "=" + t + i + "; path=/"
                                                                                                                           }

                                                                                                                           function n(e) {
                                                                                                                               var t = e + "=",
                                                                                                                                   n = document.cookie.split(";"),
                                                                                                                                   r, i;
                                                                                                                               for (r = 0; r < n.length; r++) {
                                                                                                                                   i = n[r];
                                                                                                                                   while (i.charAt(0) == " ") {
                                                                                                                                       i = i.substring(1, i.length)
                                                                                                                                   }
                                                                                                                                   if (i.indexOf(t) == 0) {
                                                                                                                                       return i.substring(t.length, i.length)
                                                                                                                                   }
                                                                                                                               }
                                                                                                                               return null
                                                                                                                           }

                                                                                                                           function r(n) {
                                                                                                                               var r = [],
                                                                                                                                   i, s, o;
                                                                                                                               for (o in n) {
                                                                                                                                   i = n[o];
                                                                                                                                   s = typeof i;
                                                                                                                                   if (s == "string") {
                                                                                                                                       r.push("'" + o + "':" + String(i))
                                                                                                                                   }
                                                                                                                               }
                                                                                                                               n = "{" + String(r) + "}";
                                                                                                                               if (e == "session") {
                                                                                                                                   window.name = n
                                                                                                                               } else {
                                                                                                                                   t("localStorage", n, 365)
                                                                                                                               }
                                                                                                                           }

                                                                                                                           function i() {
                                                                                                                               if (e == "session") {
                                                                                                                                   window.name = ""
                                                                                                                               } else {
                                                                                                                                   t("localStorage", "", 365)
                                                                                                                               }
                                                                                                                           }

                                                                                                                           function s() {
                                                                                                                               var t = e == "session" ? window.name : n("localStorage");
                                                                                                                               try {
                                                                                                                                   var r = jQuery.parseJSON(t);
                                                                                                                                   return r != null ? r : {}
                                                                                                                               } catch (i) {
                                                                                                                                   return {}
                                                                                                                               }
                                                                                                                           }
                                                                                                                           var o = s();
                                                                                                                           return {
                                                                                                                               length: 0,
                                                                                                                               clear: function() {
                                                                                                                                   o = {};
                                                                                                                                   this.length = 0;
                                                                                                                                   i()
                                                                                                                               },
                                                                                                                               getItem: function(e) {
                                                                                                                                   return o[e] === undefined ? null : o[e]
                                                                                                                               },
                                                                                                                               key: function(e) {
                                                                                                                                   var t = 0;
                                                                                                                                   for (var n in o) {
                                                                                                                                       if (t == e) return n;
                                                                                                                                       else t++
                                                                                                                                   }
                                                                                                                                   return null
                                                                                                                               },
                                                                                                                               removeItem: function(e) {
                                                                                                                                   delete o[e];
                                                                                                                                   this.length--;
                                                                                                                                   r(o)
                                                                                                                               },
                                                                                                                               setItem: function(e, t) {
                                                                                                                                   o[e] = t + "";
                                                                                                                                   this.length++;
                                                                                                                                   r(o)
                                                                                                                               }
                                                                                                                           }
                                                                                                                       };
                                                                                                                       if (typeof window.localStorage == "undefined") window.localStorage = new e("local");
                                                                                                                       if (typeof window.sessionStorage == "undefined") window.sessionStorage = new e("session")
                                                                                                                   })();
                                                                                                                   var HStorage = function(e, t) {
                                                                                                                       var n = [];
                                                                                                                       return {
                                                                                                                           setItem: function(r, i, s, o) {
                                                                                                                               var u;
                                                                                                                               if (s) {
                                                                                                                                   u = '{"data":"' + i + '", "exp":' + ((new Date).getTime() + s * 24 * 60 * 60 * 1e3) + "}"
                                                                                                                               } else {
                                                                                                                                   u = '{"data":"' + i + '"}'
                                                                                                                               }
                                                                                                                               if (o == "s") {
                                                                                                                                   if (typeof e != "undefined") {
                                                                                                                                       try {
                                                                                                                                           e.setItem(r, u)
                                                                                                                                       } catch (a) {
                                                                                                                                           n[r] = u
                                                                                                                                       }
                                                                                                                                   } else {
                                                                                                                                       n[r] = u
                                                                                                                                   }
                                                                                                                               } else {
                                                                                                                                   if (typeof t != "undefined") {
                                                                                                                                       try {
                                                                                                                                           t.setItem(r, u)
                                                                                                                                       } catch (a) {}
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           },
                                                                                                                           removeItem: function(r, i) {
                                                                                                                               if (i == "s") {
                                                                                                                                   if (typeof e != "undefined") {
                                                                                                                                       try {
                                                                                                                                           e.removeItem(r);
                                                                                                                                           n[r] = null
                                                                                                                                       } catch (s) {
                                                                                                                                           n[r] = null
                                                                                                                                       }
                                                                                                                                   } else {
                                                                                                                                       n[r] = null
                                                                                                                                   }
                                                                                                                               } else {
                                                                                                                                   if (typeof t != "undefined") {
                                                                                                                                       try {
                                                                                                                                           t.removeItem(r)
                                                                                                                                       } catch (s) {}
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           },
                                                                                                                           getItem: function(r, i) {
                                                                                                                               if (i == "s") {
                                                                                                                                   if (typeof e != "undefined") {
                                                                                                                                       var s = null;
                                                                                                                                       try {
                                                                                                                                           s = e.getItem(r);
                                                                                                                                           if (!s) {
                                                                                                                                               s = n[r]
                                                                                                                                           }
                                                                                                                                       } catch (o) {
                                                                                                                                           s = n[r]
                                                                                                                                       }
                                                                                                                                       if (s != null) {
                                                                                                                                           try {
                                                                                                                                               return JSON.parse(s).data
                                                                                                                                           } catch (o) {
                                                                                                                                               return null
                                                                                                                                           }
                                                                                                                                       } else {
                                                                                                                                           return null
                                                                                                                                       }
                                                                                                                                   } else {
                                                                                                                                       if (n[r] != null) {
                                                                                                                                           try {
                                                                                                                                               return jQuery.parseJSON(n[r]).data
                                                                                                                                           } catch (o) {
                                                                                                                                               return null
                                                                                                                                           }
                                                                                                                                       } else {
                                                                                                                                           return null
                                                                                                                                       }
                                                                                                                                   }
                                                                                                                               } else {
                                                                                                                                   if (typeof t != "undefined") {
                                                                                                                                       try {
                                                                                                                                           var u = t.getItem(r);
                                                                                                                                           var a = JSON.parse(u || "null");
                                                                                                                                           if (a && a.exp) {
                                                                                                                                               if ((new Date).getTime() > a.exp) {
                                                                                                                                                   HStorage.removeItem(r);
                                                                                                                                                   return null
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                           return a != null ? a.data : null
                                                                                                                                       } catch (o) {
                                                                                                                                           return null
                                                                                                                                       }
                                                                                                                                   } else {
                                                                                                                                       return null
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }(window.sessionStorage, window.localStorage)
                                                                                                                   window.checkHertzNameSpace("htz.utils");
                                                                                                                   htz.utils.Tracking = function() {
                                                                                                                       function f(a) {
                                                                                                                           var g = {
                                                                                                                                   cache: !1,
                                                                                                                                   dataType: "html",
                                                                                                                                   success: function(b, d, c) {
                                                                                                                                       if (!htz.utils.Utils.sessionTimedOut(c)) {
                                                                                                                                           d = $("#web-tracking-container");
                                                                                                                                           0 < d.length ? d.unbind().empty() : (d = $("<div/>").attr("id", "web-tracking-container").hide(), $("body").append(d));
                                                                                                                                           try {
                                                                                                                                               d.html(b)
                                                                                                                                           } catch (e) {}
                                                                                                                                           try {
                                                                                                                                               "Y" == a.dataonly && "N" != a.omniture && htz.utils.OmnitureHelper.track(htz.omniture, d)
                                                                                                                                           } catch (f) {}
                                                                                                                                       }
                                                                                                                                   }
                                                                                                                               },
                                                                                                                               b = [];
                                                                                                                           a && (a.bt && b.push("bt=" + a.bt), a.ga && b.push("ga=" + a.ga), a.tags && b.push("tags=" + a.tags), a.omniture &&
                                                                                                                               b.push("omniture=" + a.omniture), a.dataonly && b.push("dataonly=" + a.dataonly));
                                                                                                                           0 < b.length ? (b = b.join("&"), b = "&" + b) : b = "";
                                                                                                                           var c = a && a.step ? a.step : document.location.hash;
                                                                                                                           try {
                                                                                                                               c && 0 <= c.indexOf("#") && (c = c.substring(c.indexOf("#") + 1))
                                                                                                                           } catch (f) {}
                                                                                                                           var e = "webTracking.jsp";
                                                                                                                           try {
                                                                                                                               "Y" == a.dataonly && "N" != a.omniture && (e = "omnitureTracking.jsp")
                                                                                                                           } catch (h) {}
                                                                                                                           e = a.rootContext + "/templates/framework/" + e + "?";
                                                                                                                           e += "targetPage=" + a.targetPage + b + "&hashValue=" + c + "&originatingUrl=" + document.location.href;
                                                                                                                           g.url = e;
                                                                                                                           return g
                                                                                                                       }
                                                                                                                       return {
                                                                                                                           track: function(a) {
                                                                                                                               a &&
                                                                                                                                   (a.isApp && (a.bt = a.ga = a.tags = "N", a.dataonly = "Y"), $.ajax(f(a)))
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   window.checkHertzNameSpace("htz.utils");
                                                                                                                   var Global = htz.utils.Global = function() {
                                                                                                                       function d(a) {
                                                                                                                           a || (a = {});
                                                                                                                           a.rootContext = htz.config.rootContext;
                                                                                                                           a.isApp = htz.config.isApp;
                                                                                                                           var b = "",
                                                                                                                               b = a && a.targetPage ? a.targetPage : htz.config.legacyPage && "" !== htz.config.legacyPage ? htz.config.legacyPage : htz.config.targetPage;
                                                                                                                           a.targetPage = b;
                                                                                                                           htz.utils.Tracking.track(a)
                                                                                                                       }
                                                                                                                       document.addEventListener ? document.addEventListener("touchstart", function() {}, !1) : document.attachEvent && document.attachEvent("touchstart", function() {});
                                                                                                                       try {
                                                                                                                           $.subscribe("resource-load-failure", function(a,
                                                                                                                               b) {
                                                                                                                               htz.utils.Global.trackResourceLoadFailure(b)
                                                                                                                           })
                                                                                                                       } catch (f) {}
                                                                                                                       var e = function() {
                                                                                                                           -1 === window.location.href.indexOf("manage-cookies") && (this.cookieOverlay = new LightBox, require(["common/cookie/cookieOverlay-view"], function(a) {
                                                                                                                               this.cookieOverlay.overlay({
                                                                                                                                   center: !0,
                                                                                                                                   dismiss: !1,
                                                                                                                                   width: "80%",
                                                                                                                                   hcenter: !0,
                                                                                                                                   suppressClose: !0,
                                                                                                                                   plain: !0
                                                                                                                               }, (new a({
                                                                                                                                   referrer: this,
                                                                                                                                   template: "#cookie-overlay-tpl"
                                                                                                                               })).render().el);
                                                                                                                               $("#cookiePopup-tpl").closest(".lb-foreground-cont").addClass("lb-cookie-bottom");
                                                                                                                               $("#cookiePopup-tpl").closest(".lb-content-box").css({
                                                                                                                                   padding: "0px"
                                                                                                                               })
                                                                                                                           }));
                                                                                                                           $("body").bind("euCookieSaved", function() {
                                                                                                                               d()
                                                                                                                           })
                                                                                                                       };
                                                                                                                       return {
                                                                                                                           initiateTracking: function(a) {
                                                                                                                               htz.config.isOmnitureToLoad && (!htz.config.isCountryinEuropeUnion || htz.config.isCountryinEuropeUnion && -1 != document.cookie.indexOf("cookie_pref")) && d(a)
                                                                                                                           },
                                                                                                                           track: function(a) {
                                                                                                                               this.initiateTracking(a)
                                                                                                                           },
                                                                                                                           loadManifest: function() {
                                                                                                                               "IRAC" === htz.config.subSystemId && -1 != !navigator.userAgent.toLowerCase().indexOf("firefox") && $("<iframe />", {
                                                                                                                                   id: "cache-manifest",
                                                                                                                                   src: htz.config.rootContext + "/templates/manifest.jsp?deviceGroup=" + htz.config.orgDeviceGroup
                                                                                                                               }).appendTo("body")
                                                                                                                           },
                                                                                                                           showEstara: function(a, b) {
                                                                                                                               if (!htz.config.isApp && a.length && "phone" !== htz.config.deviceGroup && "tablet" !== htz.config.deviceGroup) {
                                                                                                                                   var c = {
                                                                                                                                       cache: !1,
                                                                                                                                       dataType: "script"
                                                                                                                                   };
                                                                                                                                   b || (b = htz.eStara.url);
                                                                                                                                   c.url = htz.config.protocol + "://" + b;
                                                                                                                                   window.eStaraText = a;
                                                                                                                                   $(".tmplLayoutLeftColumn").empty().append('<div id="eStaraDiv" style="height:88px;margin-top:10px;"></div>');
                                                                                                                                   $.ajax(c)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           removeEstara: function() {
                                                                                                                               $(".tmplLayoutLeftColumn").empty().hide();
                                                                                                                               var a = this.getEstaraId();
                                                                                                                               a && $("#" + a).remove();
                                                                                                                               $("#estara-text").remove()
                                                                                                                           },
                                                                                                                           getEstaraId: function() {
                                                                                                                               try {
                                                                                                                                   return wv_vars.timeout336323_layerid
                                                                                                                               } catch (a) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           initiateFooterMisc: function() {
                                                                                                                               if (0 < $("#footer-container").length) {
                                                                                                                                   var a = {
                                                                                                                                       cache: !1,
                                                                                                                                       dataType: "html",
                                                                                                                                       success: function() {
                                                                                                                                           htz.integrated.footer.controller.FooterController.showFooterPage()
                                                                                                                                       },
                                                                                                                                       complete: function() {
                                                                                                                                           LightBox.adjust()
                                                                                                                                       }
                                                                                                                                   };
                                                                                                                                   a.url = htz.config.rootContext + "/framework/globalLazyLoad.jsp?targetPage=" + htz.config.targetPage;
                                                                                                                                   LazyLoad.queueJS(a, "high")
                                                                                                                               }
                                                                                                                           },
                                                                                                                           handleCookieLaw: function() {
                                                                                                                               htz.config.isCountryinEuropeUnion && -1 == document.cookie.indexOf("cookie_pref") && e()
                                                                                                                           },
                                                                                                                           initiate: function() {
                                                                                                                               this.bindRequireJSListener();
                                                                                                                               htz.config.isApp ? (Utils.showErrorFromSession(), setTimeout("LazyLoad.init()", 1)) : (this.handleCookieLaw(), this.loadManifest(), this.showEstara(htz.eStara.text, htz.eStara.url), this.initiateFooterMisc(), htz.config.isSPP || this.initiateTracking(), setTimeout("LazyLoad.init()", 1), "Y" != htz.browser.upgradeWarningShown && (Modernizr.mq("only all") || (new LightBox).overlay({
                                                                                                                                   url: htz.config.rootContext + "/customersupport/templates/browserUpgradeWarningView.jsp",
                                                                                                                                   width: 560,
                                                                                                                                   center: !0,
                                                                                                                                   scroll: !1,
                                                                                                                                   screen: 70
                                                                                                                               })), Utils.showErrorFromSession())
                                                                                                                           },
                                                                                                                           trackResourceLoadFailure: function(a) {
                                                                                                                               try {
                                                                                                                                   var b = Utils.browserDeviceType(),
                                                                                                                                       c = window.location.hash,
                                                                                                                                       c = c ? c.substring(1) : "itinerary";
                                                                                                                                   a.requireModules && WebTracking.setError("debug-resource-failure-" + (a.requireType || "unknown") + "-" + (b + "-" + c + "-" + a), c)
                                                                                                                               } catch (d) {}
                                                                                                                           },
                                                                                                                           bindRequireJSListener: function() {
                                                                                                                               var a = Utils.browserDeviceType();
                                                                                                                               try {
                                                                                                                                   if ("undefined" === typeof requirejs || null === requirejs) {
                                                                                                                                       WebTracking.setError("debug-resource-requirejs-missing-" + a);
                                                                                                                                       return
                                                                                                                                   }
                                                                                                                               } catch (b) {}
                                                                                                                               requirejs.onError = htz.utils.Global.trackResourceLoadFailure
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   $(window).on("load", function() {
                                                                                                                       htz.utils.Global.initiate()
                                                                                                                   });
                                                                                                                   var ErrorHelper = function() {
                                                                                                                       function v(b) {
                                                                                                                           if (!b) return null;
                                                                                                                           var a = null,
                                                                                                                               d;
                                                                                                                           for (d in b) {
                                                                                                                               if (b = d.match(/\[(.*?)\]/)) {
                                                                                                                                   var h = b[1],
                                                                                                                                       e = b.input.replace(/ *\[[^\]]*]/, ""),
                                                                                                                                       b = window.dataLayer;
                                                                                                                                   for (i = 0; i < b.length; i++)
                                                                                                                                       if (void 0 != b[i].error_type && b[i].error_type == h) {
                                                                                                                                           delete b[i].event;
                                                                                                                                           delete b[i].error_type;
                                                                                                                                           delete b[i].error_message;
                                                                                                                                           break
                                                                                                                                       }
                                                                                                                               }
                                                                                                                               window.dataLayer = window.dataLayer || [];
                                                                                                                               window.dataLayer.push({
                                                                                                                                   event: "error",
                                                                                                                                   error_type: h,
                                                                                                                                   error_message: e
                                                                                                                               });
                                                                                                                               null == a && (a = "");
                                                                                                                               a += '<li aria-label="' + d + '" tabindex="0">' + d + "</li>"
                                                                                                                           }
                                                                                                                           a && (a =
                                                                                                                               "<ul class='" + o + "' tabindex='0' aria-label='error-list'>" + a + "</ul>");
                                                                                                                           return a
                                                                                                                       }
                                                                                                                       var o = "field-error-list",
                                                                                                                           m = [],
                                                                                                                           s = [],
                                                                                                                           p = [],
                                                                                                                           k = null,
                                                                                                                           l = null,
                                                                                                                           t = [],
                                                                                                                           u = !0,
                                                                                                                           q = null;
                                                                                                                       return {
                                                                                                                           displayErrors: function(b, a) {
                                                                                                                               if (b) {
                                                                                                                                   var d;
                                                                                                                                   a && a.context ? this.reset(a.context) : this.reset();
                                                                                                                                   a && (d = a.mappings, k = a.context, l = a.allErrTarget, "undefined" != typeof a.showErrorWithField && (u = a.showErrorWithField), q = a.genericError);
                                                                                                                                   if (d && 0 != d.length)
                                                                                                                                       for (var h = 0; h < d.length; h++)
                                                                                                                                           for (var e = d[h], f = e.target, e = e.fields.split(","), n = 0; n < e.length; n++) t[e[n]] = f;
                                                                                                                                   for (d =
                                                                                                                                       0; d < b.length; d++)
                                                                                                                                       if ((f = b[d]) && 0 < f.length) {
                                                                                                                                           h = f[0];
                                                                                                                                           e = null;
                                                                                                                                           1 < f.length && (e = f[1]);
                                                                                                                                           f = e;
                                                                                                                                           e = u;
                                                                                                                                           n = l;
                                                                                                                                           if (e && f && 0 < f.length) {
                                                                                                                                               var j = t[h];
                                                                                                                                               j || (j = h + "_ut-err");
                                                                                                                                               var r = m[j];
                                                                                                                                               r || (r = [], m[j] = r);
                                                                                                                                               for (j = 0; j < f.length; j++) e && (r[f[j]] = ""), !q && n && (p[f[j]] = "")
                                                                                                                                           }
                                                                                                                                           q && (p[q] = "");
                                                                                                                                           s[h] = ""
                                                                                                                                       }
                                                                                                                                   var c;
                                                                                                                                   k && (c = "string" == typeof k ? $(k).eq(0) : k);
                                                                                                                                   c || $(document);
                                                                                                                                   for (var g in m)(c = v(m[g])) && (0 < g.indexOf("_ut-err") ? $("#" + g.substring(0, g.length - 7)).closest("label").prepend(c) : $("#" + g).html(c).show());
                                                                                                                                   for (var o in s) g = null, c = $("#" + o), 0 < c.length && (g = c.eq(0)),
                                                                                                                                       g && ((c = g.parent("label")) && 0 < c.length ? c.addClass("error") : (c = g.prop("tagName").toLowerCase(), ("input" == c || "select" == c || "textarea" == c) && g.addClass("error-input")));
                                                                                                                                   l && (c = v(p)) && $(l).html(c).show()
                                                                                                                               } else this.reset()
                                                                                                                           },
                                                                                                                           reset: function(b) {
                                                                                                                               var a;
                                                                                                                               b ? a = b : k && (a = k);
                                                                                                                               a && (a = "string" == typeof a ? $(a).eq(0) : a);
                                                                                                                               a || (a = $(document));
                                                                                                                               a.find(".error").removeClass("error");
                                                                                                                               a.find(".error-input").removeClass("error-input");
                                                                                                                               a.find("." + o).remove();
                                                                                                                               b = $(l);
                                                                                                                               0 < b.length && b.eq(0).empty().hide();
                                                                                                                               m = [];
                                                                                                                               s = [];
                                                                                                                               p = [];
                                                                                                                               k = l = null;
                                                                                                                               t = [];
                                                                                                                               u = !0
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   "function" == typeof define && define.amd && define("utils/errorutil", [], function() {
                                                                                                                       return ErrorHelper
                                                                                                                   });
                                                                                                                   var faq = function(a) {
                                                                                                                       path = "&searchTerm=";
                                                                                                                       "function" == typeof LightBox && htz.faq.display && (lbFaq = new LightBox, domain = htz.faq.URL, url = domain + path + a.value, a = '<iframe id="ifrFaq" style="border:0px;" frameborder="0" width="760" height="460" src="' + url + '"></iframe>', lbFaq.overlay({
                                                                                                                           width: "780",
                                                                                                                           title: htz.faq.overlayTitle
                                                                                                                       }, a))
                                                                                                                   };
                                                                                                                   window.checkHertzNameSpace("htz.helpers");
                                                                                                                   htz.helpers.SessionHelper = function(d) {
                                                                                                                       var c = [];
                                                                                                                       return {
                                                                                                                           getItem: function(a) {
                                                                                                                               if ("undefined" != typeof d) {
                                                                                                                                   var b = null;
                                                                                                                                   try {
                                                                                                                                       (b = d.getItem(a)) || (b = c[a])
                                                                                                                                   } catch (e) {
                                                                                                                                       b = c[a]
                                                                                                                                   }
                                                                                                                                   return b
                                                                                                                               }
                                                                                                                               return c[a]
                                                                                                                           },
                                                                                                                           setItem: function(a, b) {
                                                                                                                               if ("undefined" != typeof d) try {
                                                                                                                                   d.setItem(a, b)
                                                                                                                               } catch (e) {
                                                                                                                                   c[a] = b
                                                                                                                               } else c[a] = b
                                                                                                                           },
                                                                                                                           removeItem: function(a) {
                                                                                                                               if ("undefined" != typeof d) try {
                                                                                                                                   d.removeItem(a), c[a] = null
                                                                                                                               } catch (b) {
                                                                                                                                   c[a] = null
                                                                                                                               } else c[a] = null
                                                                                                                           },
                                                                                                                           removeListedItems: function(a) {
                                                                                                                               if (a && 0 != a.length)
                                                                                                                                   for (var b = 0; b < a.length; b++) this.removeItem(a[b])
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }(window.sessionStorage);
                                                                                                                   "function" == typeof define && define.amd && define("utils/sessionhelper", [], function() {
                                                                                                                       return htz.helpers.SessionHelper
                                                                                                                   });
                                                                                                                   window.checkHertzNameSpace("htz.helpers");
                                                                                                                   htz.helpers.ResourceLoader = function(i, o, l) {
                                                                                                                       function m(a, c, b) {
                                                                                                                           for (var e, d = 0; d < c.length; d++)
                                                                                                                               if (e = c[d], e === u) a[d] ? b.css = a[d] : delete b.css;
                                                                                                                               else if (e === n) {
                                                                                                                               e = a[d];
                                                                                                                               try {
                                                                                                                                   i.setItem(b.content, l.stringify(e))
                                                                                                                               } catch (f) {}
                                                                                                                               b.content = e
                                                                                                                           } else e === p ? b.template = a[d] : e === q && (a[d] ? b.js = a[d] : delete b.js);
                                                                                                                           b.callback && b.callback(b)
                                                                                                                       }

                                                                                                                       function r(a) {
                                                                                                                           for (var a = a.requireModules, c = 0; c < a.length - 1; c++) requirejs.undef(a[c])
                                                                                                                       }

                                                                                                                       function j(a, c) {
                                                                                                                           a && c && (c[a] = null, c["is" + a + "loaderror"] = !0)
                                                                                                                       }

                                                                                                                       function s(a, c, b) {
                                                                                                                           require(a.toLoad, function(b, d, f) {
                                                                                                                               m(arguments,
                                                                                                                                   a.order, c)
                                                                                                                           }, function(e) {
                                                                                                                               r(e);
                                                                                                                               if (b) {
                                                                                                                                   var d = e.requireModules;
                                                                                                                                   if (d)
                                                                                                                                       for (var f = a.toLoad, i = a.order, g = 0; g <= d.length - 1; g++)
                                                                                                                                           for (var h = 0; h <= f.length - 1; h++)
                                                                                                                                               if (0 <= f[h].indexOf(d[g])) {
                                                                                                                                                   f.splice(h, 1);
                                                                                                                                                   h = i.splice(h, 1);
                                                                                                                                                   j(h, c);
                                                                                                                                                   break
                                                                                                                                               }
                                                                                                                                   0 < a.toLoad.length ? require(a.toLoad, function(b, d, e) {
                                                                                                                                       m(arguments, a.order, c)
                                                                                                                                   }, function(b) {
                                                                                                                                       r(b);
                                                                                                                                       for (var b = a.order, d = 0; d < b.length - 1; d++) j(b[d], c);
                                                                                                                                       c.callback && c.callback(c)
                                                                                                                                   }) : t(c);
                                                                                                                                   try {
                                                                                                                                       o.publish("resource-load-failure", e)
                                                                                                                                   } catch (k) {}
                                                                                                                               } else window.setTimeout(function() {
                                                                                                                                   s(a, c, !0)
                                                                                                                               }, v)
                                                                                                                           })
                                                                                                                       }

                                                                                                                       function t(a) {
                                                                                                                           if (a) {
                                                                                                                               if (a.content) {
                                                                                                                                   var c =
                                                                                                                                       i.getItem(a.content);
                                                                                                                                   if (c) try {
                                                                                                                                       c = l.parse(c), a.content = c
                                                                                                                                   } catch (b) {
                                                                                                                                       i.removeItem(a.content), a.content = null, j(n, a)
                                                                                                                                   }
                                                                                                                               }
                                                                                                                               a.callback && a.callback(a)
                                                                                                                           }
                                                                                                                       }
                                                                                                                       var u = "css",
                                                                                                                           q = "js",
                                                                                                                           p = "template",
                                                                                                                           n = "content",
                                                                                                                           v = 500;
                                                                                                                       return {
                                                                                                                           load: function(a) {
                                                                                                                               if (a) {
                                                                                                                                   if (a.css) {
                                                                                                                                       var c = a.css,
                                                                                                                                           b = document.getElementsByTagName("head").item(0),
                                                                                                                                           e = o(b).find("link"),
                                                                                                                                           d = !1;
                                                                                                                                       e.each(function(a) {
                                                                                                                                           if (c == e.eq(a).attr("href")) return d = !0, !1
                                                                                                                                       });
                                                                                                                                       if (!d) {
                                                                                                                                           var f = document.createElement("link");
                                                                                                                                           f.setAttribute("href", c);
                                                                                                                                           f.setAttribute("type", "text/css");
                                                                                                                                           f.setAttribute("rel", "stylesheet");
                                                                                                                                           b.appendChild(f)
                                                                                                                                       }
                                                                                                                                       delete a.css
                                                                                                                                   }
                                                                                                                                   b = [];
                                                                                                                                   if (a) {
                                                                                                                                       var f = [],
                                                                                                                                           j = a.template,
                                                                                                                                           g = a.content,
                                                                                                                                           h = a.js;
                                                                                                                                       if (g) {
                                                                                                                                           var k = i.getItem(g);
                                                                                                                                           if (k) try {
                                                                                                                                               a.content = l.parse(k)
                                                                                                                                           } catch (m) {
                                                                                                                                               i.removeItem(g), k = null
                                                                                                                                           }
                                                                                                                                           k || (g = 0 < g.indexOf("?") ? g + "&callback=define" : g + "?callback=define", f.push(n), b.push(g))
                                                                                                                                       }
                                                                                                                                       j && (f.push(p), b.push("text!" + j));
                                                                                                                                       h && (f.push(q), b.push(h));
                                                                                                                                       b = {
                                                                                                                                           toLoad: b,
                                                                                                                                           order: f
                                                                                                                                       }
                                                                                                                                   } else b = {
                                                                                                                                       toLoad: b
                                                                                                                                   };
                                                                                                                                   0 < b.toLoad.length ? s(b, a, !1) : t(a)
                                                                                                                               }
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }(htz.helpers.SessionHelper, $, JSON);
                                                                                                                   "function" == typeof define && define.amd && define("helpers/resource-loader", [], function() {
                                                                                                                       return htz.helpers.ResourceLoader
                                                                                                                   });
                                                                                                                   window.checkHertzNameSpace("htz.utils.config");
                                                                                                                   htz.utils.config.UtilConfig = function() {
                                                                                                                       var b, c, d, e, f, g, h, i, j;
                                                                                                                       return {
                                                                                                                           configure: function(a) {
                                                                                                                               a.spinner && (b = a.spinner);
                                                                                                                               a.lightBox && (c = a.lightBox);
                                                                                                                               a.networkHelper && (d = a.networkHelper);
                                                                                                                               a.navigator && (e = a.navigator);
                                                                                                                               a.rotar && (f = a.rotar);
                                                                                                                               a.domHelper && (g = a.domHelper);
                                                                                                                               a.router && (h = a.router);
                                                                                                                               a.notifier && (i = a.notifier);
                                                                                                                               a.slider && (j = a.slider)
                                                                                                                           },
                                                                                                                           getSpinner: function() {
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           getLightbox: function() {
                                                                                                                               return c
                                                                                                                           },
                                                                                                                           getNetworkHelper: function() {
                                                                                                                               return d
                                                                                                                           },
                                                                                                                           getNavigator: function() {
                                                                                                                               return e
                                                                                                                           },
                                                                                                                           getRotar: function() {
                                                                                                                               return f
                                                                                                                           },
                                                                                                                           getDomHelper: function() {
                                                                                                                               return g
                                                                                                                           },
                                                                                                                           getRouter: function() {
                                                                                                                               return h
                                                                                                                           },
                                                                                                                           getNotifier: function() {
                                                                                                                               return i
                                                                                                                           },
                                                                                                                           getSlider: function() {
                                                                                                                               return j
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   "function" == typeof define && define.amd && define("config/utilconfig", [], function() {
                                                                                                                       return htz.utils.config.UtilConfig
                                                                                                                   });
                                                                                                                   var Tooltip = function() {};
                                                                                                                   Tooltip.prototype = {
                                                                                                                       defaults: {
                                                                                                                           height: 200,
                                                                                                                           width: 300,
                                                                                                                           contentBgcolor: "#FEFED9",
                                                                                                                           border: "3px solid #FFD60D",
                                                                                                                           scroll: !1,
                                                                                                                           closeLabel: !0,
                                                                                                                           footerBgcolor: "#FFD60D",
                                                                                                                           close: !0,
                                                                                                                           closeLabel: htz.content.close
                                                                                                                       },
                                                                                                                       id: null,
                                                                                                                       els: {},
                                                                                                                       config: {},
                                                                                                                       inUse: !1,
                                                                                                                       show: function(a) {
                                                                                                                           this.inUse = !0;
                                                                                                                           var b = $(a),
                                                                                                                               a = b.parent().find(".tooltip-link:eq(0)"),
                                                                                                                               b = b.parent().find(".tooltip-container:eq(0)");
                                                                                                                           b.is(":hidden") ? ($(".tooltip-container").hide(), this.displayTooltip(b, a)) : this.hide(b);
                                                                                                                           return this
                                                                                                                       },
                                                                                                                       hide: function(a) {
                                                                                                                           $(a).hide()
                                                                                                                       },
                                                                                                                       create: function(a) {
                                                                                                                           this.config =
                                                                                                                               $.extend(!0, {}, this.defaults, a);
                                                                                                                           a = [];
                                                                                                                           a.push('<div class="tooltip-container">');
                                                                                                                           a.push('<div class="tooltip-content">');
                                                                                                                           a.push('<div class="user-content">');
                                                                                                                           a.push("</div> ");
                                                                                                                           a.push("</div>");
                                                                                                                           this.config.close && (a.push('<div class="tooltip-footer learnMoreLink"> <span class="icons-close_lg close-pointer"> </span> <span class="close-pointer">'), this.config.closeLabel && a.push(this.config.closeLabel), a.push("</span></div>"));
                                                                                                                           a.push("</div>");
                                                                                                                           a.join("");
                                                                                                                           a = (a + "").replace(/\,/g, "");
                                                                                                                           this.els.container = $(a).appendTo("#" +
                                                                                                                               this.config.containerID);
                                                                                                                           this.els.tooltipContainer = this.els.container.find(".tooltip-container");
                                                                                                                           this.els.innerContainer = this.els.container.find(".tooltip-content");
                                                                                                                           this.els.close = this.els.container.find(".close-pointer");
                                                                                                                           this.els.content = this.els.container.find(".user-content");
                                                                                                                           this.els.content.append("" == this.config.content ? defaults.content : this.config.content);
                                                                                                                           this.els.overylay = this.els.container.find(".tooltip-container");
                                                                                                                           this.els.footer = this.els.container.find(".tooltip-footer");
                                                                                                                           this.els.innerContainer.css({
                                                                                                                               width: "" ==
                                                                                                                                   this.config.width ? defaults.width : this.config.width,
                                                                                                                               height: "" == this.config.height ? defaults.height : this.config.height,
                                                                                                                               backgroundColor: "" == this.config.contentBgcolor ? defaults.contentBgcolor : this.config.contentBgcolor,
                                                                                                                               overflow: "hidden",
                                                                                                                               border: "" == this.config.border ? defaults.border : this.config.border,
                                                                                                                               "overflow-y": !0 == this.config.scroll ? "scroll" : "hidden"
                                                                                                                           });
                                                                                                                           this.els.footer.css({
                                                                                                                               backgroundColor: "" == this.config.footerBgcolor ? defaults.footerBgcolor : this.config.footerBgcolor,
                                                                                                                               width: "" == this.config.width ? defaults.width : this.config.width
                                                                                                                           });
                                                                                                                           this.bindEvents();
                                                                                                                           return this
                                                                                                                       },
                                                                                                                       displayTooltip: function(a, b) {
                                                                                                                           var a = $(a),
                                                                                                                               b = $(b),
                                                                                                                               f = b.offset().top,
                                                                                                                               g = b.offset().left,
                                                                                                                               h = $(window).height(),
                                                                                                                               c = $(window).width(),
                                                                                                                               d = b.position().top,
                                                                                                                               e = b.position().left,
                                                                                                                               d = f + a.height() > h + $(window).scrollTop() ? b.position().top - a.height() : b.position().top + b.height(),
                                                                                                                               e = 600 <= c + $(window).scrollLeft() ? g + a.width() + 50 > c + $(window).scrollLeft() ? b.position().left - a.width() : b.position().left + b.width() : 50;
                                                                                                                           a.css({
                                                                                                                               top: d,
                                                                                                                               left: e
                                                                                                                           });
                                                                                                                           a.show();
                                                                                                                           return this
                                                                                                                       },
                                                                                                                       bindEvents: function() {
                                                                                                                           var a =
                                                                                                                               this;
                                                                                                                           this.els.close.bind("click", function(b) {
                                                                                                                               target = $(b.target);
                                                                                                                               b = target.closest(".tooltip-container");
                                                                                                                               a.hide(b)
                                                                                                                           })
                                                                                                                       },
                                                                                                                       isInUse: function() {
                                                                                                                           return this.inUse
                                                                                                                       }
                                                                                                                   };
                                                                                                                   var googletag = googletag || {};
                                                                                                                   googletag.cmd = googletag.cmd || [];
                                                                                                                   var gptBannerAds = {
                                                                                                                       init: function() {
                                                                                                                           var a = this;
                                                                                                                           this.render();
                                                                                                                           $(window).on("resize", function() {
                                                                                                                               a.refreshAds()
                                                                                                                           })
                                                                                                                       },
                                                                                                                       getCookie: function(a) {
                                                                                                                           for (var a = a + "=", c = decodeURIComponent(document.cookie).split(";"), d = 0; d < c.length; d++) {
                                                                                                                               for (var b = c[d];
                                                                                                                                   " " == b.charAt(0);) b = b.substring(1);
                                                                                                                               if (0 == b.indexOf(a)) return b.substring(a.length, b.length)
                                                                                                                           }
                                                                                                                           return ""
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           var a = this.getCookie("cookie_pref");
                                                                                                                           if (!0 == htz.config.isCountryinEuropeUnion && ("" == a || "" != a && 0 > a.indexOf("_4"))) return 0;
                                                                                                                           var c = this;
                                                                                                                           c.gptAdSlots = [];
                                                                                                                           $(".gptAdBlock:visible,.gptAdBlock.gblFloatLeft").each(function() {
                                                                                                                               var a =
                                                                                                                                   $(this).find(".adDisplayBlock"),
                                                                                                                                   b = a.attr("data-item"),
                                                                                                                                   f = parseInt(a.attr("width")),
                                                                                                                                   g = parseInt(a.attr("height")),
                                                                                                                                   e = a.attr("id"),
                                                                                                                                   a = "/rentacar/rest/banner/style/" + b + "?v=" + Math.floor(100 * Math.random());
                                                                                                                               "/htv" == htz.config.rootContext && (a = "/htv/BannerAdHandler?style=" + b);
                                                                                                                               $.ajax({
                                                                                                                                   type: "GET",
                                                                                                                                   url: a,
                                                                                                                                   dataType: "json",
                                                                                                                                   async: !1,
                                                                                                                                   success: function(a) {
                                                                                                                                       c.generateAd(e, a.data, b, f, g)
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       console.log("Unable to Receive Response from GPT Webservice")
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           })
                                                                                                                       },
                                                                                                                       generateAd: function(a, c, d, b, f) {
                                                                                                                           var g = this;
                                                                                                                           googletag.cmd.push(function() {
                                                                                                                               var e =
                                                                                                                                   "hertz.irac";
                                                                                                                               "/htv" == htz.config.rootContext && (e = "hertz.trucks");
                                                                                                                               e = googletag.defineSlot("/5246/" + e + "/" + d, [b, f], a).addService(googletag.pubads());
                                                                                                                               g.gptAdSlots.push(e);
                                                                                                                               for (gptItem in c) e.setTargeting(gptItem, c[gptItem]);
                                                                                                                               googletag.enableServices();
                                                                                                                               googletag.display(a)
                                                                                                                           })
                                                                                                                       },
                                                                                                                       createAd: function(a, c, d, b) {
                                                                                                                           var f = "banner_gpt" + $(".gptAdBlock").length;
                                                                                                                           a.addClass("gptAdBlock").append("<div id='banner_gpt" + f + "' class='adDisplayBlock' data-item='" + c + "' width='" + d + "' height='" + b + "'></div>")
                                                                                                                       },
                                                                                                                       refreshAds: function() {
                                                                                                                           googletag.pubadsReady &&
                                                                                                                               googletag.pubads().refresh()
                                                                                                                       },
                                                                                                                       clean: function() {
                                                                                                                           googletag.destroySlots()
                                                                                                                       }
                                                                                                                   };
                                                                                                                   googletag.cmd.push(function() {
                                                                                                                       gptBannerAds.init()
                                                                                                                   });
                                                                                                                   (function() {
                                                                                                                       var a = document.createElement("script");
                                                                                                                       a.async = !0;
                                                                                                                       a.type = "text/javascript";
                                                                                                                       a.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
                                                                                                                       var c = document.getElementsByTagName("script")[0];
                                                                                                                       c.parentNode.insertBefore(a, c)
                                                                                                                   })();
                                                                                                                   window.checkHertzNameSpace('htz.utils');

                                                                                                                   /**
                                                                                                                   @description Various functions for cookies for GDPR requirements 
                                                                                                                   @class Utils
                                                                                                                   @requires JQuery
                                                                                                                   */

                                                                                                                   htz.utils.termsAndConditions = (function() {
                                                                                                                       return {

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function is loaded when the base page loads and checks if a cookie is present or not at the root level.
                                                                                                                           If the cookie is not present, the given element pops up.
                                                                                                                            */
                                                                                                                           checkCookie: function(cookieName, elementID, systemID) {

                                                                                                                               var expression = new RegExp(cookieName + "=([^;]+)");
                                                                                                                               var cookieValue = expression.exec(document.cookie);
                                                                                                                               var result = (cookieValue != null) ? unescape(cookieValue[1]) : null;

                                                                                                                               if (systemID === "IRAC") {
                                                                                                                                   this.fetchTandCcontent(); //IRAC uses web service to fetch the content.This web service is different than the usual content web service.
                                                                                                                               }

                                                                                                                               //if no cookie is present
                                                                                                                               if (result == null) {
                                                                                                                                   var startDate = new Date(this.getDate("startDate", "hiddenStartDate"));

                                                                                                                                   var endDate = new Date(this.getDate("endDate", "hiddenEndDate"));
                                                                                                                                   endDate.setHours(23, 59, 59);

                                                                                                                                   var todaysDate = new Date();

                                                                                                                                   //requirement to not show the popup till the start date is reached or if the start day has already passed
                                                                                                                                   if (((startDate.toDateString() === todaysDate.toDateString()) || (startDate < todaysDate)) && (todaysDate < endDate)) {
                                                                                                                                       $("#" + elementID).show();
                                                                                                                                   }
                                                                                                                               } else {
                                                                                                                                   //if a cookie is present, check to see if the startDate or endDates have changed and proceed accordingly
                                                                                                                                   this.handleCookieDates(cookieName, elementID, result);
                                                                                                                               }
                                                                                                                           },

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function checks to see if the startDate or endDate for a cookie/legal TandC has changed and proceed accordingly.
                                                                                                                            */
                                                                                                                           handleCookieDates: function(cookieName, elementID, cookieSetDate) {

                                                                                                                               var todaysDate = new Date();
                                                                                                                               var startDate = new Date(this.getDate("startDate", "hiddenStartDate"));
                                                                                                                               var endDate = new Date(this.getDate("endDate", "hiddenEndDate"));
                                                                                                                               var cookieStartDate = new Date(cookieSetDate);

                                                                                                                               if ((startDate.toDateString() != cookieStartDate.toDateString()) && (startDate.toDateString() === todaysDate.toDateString())) {
                                                                                                                                   document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;Path = /;";
                                                                                                                                   $("#" + elementID).show(); //remove the cookie and display the popup	    		
                                                                                                                               } else {
                                                                                                                                   this.updateCookieExpDate(cookieName); //update the expiry date on the cookie
                                                                                                                               }
                                                                                                                           },

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function updates the expiry date on the cookie.
                                                                                                                            */
                                                                                                                           updateCookieExpDate: function(cookieName) {
                                                                                                                               this.storeCookie(cookieName);
                                                                                                                           },

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function stores the cookie with the given name..The expiry date comes from the hidden interwoven field.
                                                                                                                            */
                                                                                                                           storeCookie: function(cookieName) {

                                                                                                                               var cookieExpirationDate = new Date(this.getDate("endDate", "hiddenEndDate"));
                                                                                                                               cookieExpirationDate.setHours(23, 59, 59);
                                                                                                                               var expiring = cookieExpirationDate.toUTCString();

                                                                                                                               document.cookie = cookieName + "=" + new Date() + ";expires=" + expiring + "; Path = /;";
                                                                                                                           },

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function gets the date form the HTML elment/interwoven field.
                                                                                                                            */
                                                                                                                           getDate: function(type, elementID) {
                                                                                                                               /*var dateHTML=$("#"+ elementID).html();
			
                                                                                                                               var day = dateHTML.split("/")[1];
                                                                                                                               var month = (dateHTML.split("/")[0])-1;
                                                                                                                               var year = dateHTML.split("/")[2];
			
                                                                                                                               if(type =="endDate"){
                                                                                                                               	var date = new Date();
                                                                                                                               	return new Date(year,month,day,date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds());	
                                                                                                                               }
                                                                                                                               else if(type=="startDate"){
                                                                                                                               	return new Date(year,month,day);
                                                                                                                               }*/
                                                                                                                           },

                                                                                                                           /**
                                                                                                                           @description 
                                                                                                                           This function fetches the content for the legal pop up and fills the HTML.
                                                                                                                            */
                                                                                                                           fetchTandCcontent: function() {
                                                                                                                               $.ajax({
                                                                                                                                   url: htz.config.apiDomain + "/rest/policy-notification/" + htz.config.systemId + "/" + htz.config.dialect + "/" + htz.config.pos,
                                                                                                                                   type: "GET",
                                                                                                                                   async: false,
                                                                                                                                   dataType: "json",
                                                                                                                                   success: function(response) {

                                                                                                                                       var content = response.popupContent;
                                                                                                                                       var startDate = response.startDate;
                                                                                                                                       var endDate = response.endDate;

                                                                                                                                       $("#TandC-content-text").html(content);
                                                                                                                                       $("#hiddenStartDate").html(startDate);
                                                                                                                                       $("#hiddenEndDate").html(endDate);

                                                                                                                                   },
                                                                                                                                   error: function(data, status) {
                                                                                                                                       console.log(data);
                                                                                                                                   }
                                                                                                                               });
                                                                                                                           }
                                                                                                                       }
                                                                                                                   })();
                                                                                                                   $(function() {
                                                                                                                       window.checkHertzNameSpace("htz.integrated.header.views");
                                                                                                                       htz.integrated.header.views.HeaderView = Backbone.View.extend({
                                                                                                                           el: $("header"),
                                                                                                                           events: {
                                                                                                                               "click .logo-box": "logoClick",
                                                                                                                               "click .ra-logo-large": "raLogoClick",
                                                                                                                               "click .ra-logo-small": "raLogoClick",
                                                                                                                               "click .change-list": "changePos",
                                                                                                                               "submit .pos-box form": "submitPos",
                                                                                                                               "change #pos": "selectedCountry",
                                                                                                                               "keyup #pos": "pressedCountry",
                                                                                                                               "focus #search-input": "searchOnFocus",
                                                                                                                               "blur #search-input": "searchOnBlur",
                                                                                                                               "keydown #search-input": "searchOnKeyPress",
                                                                                                                               "click .search-trigger": "openSearchOverlay",
                                                                                                                               "click #search-button-trigger": "searchBtnClick",
                                                                                                                               "click #mob-navigation-trigger": "mobMenuBtnOnClick",
                                                                                                                               "click #nav-close-trigger": "mobMenuBtnOnClick",
                                                                                                                               "click .mob-sub-menu": "mobSubMenuOnClick",
                                                                                                                               "click .mob-back": "mobBackToMenu",
                                                                                                                               "click #nav-container": "trackNavigation",
                                                                                                                               "click .new-open-nav": "openMobileNav",
                                                                                                                               "click .new-close-nav": "closeMobileNav",
                                                                                                                               "click .rental-container": "scrollToRentalContainer"
                                                                                                                           },
                                                                                                                           scrollToRentalContainer: function() {
                                                                                                                               window.scrollTo("1200", "1200");
                                                                                                                               document.getElementById("rental-links").scrollIntoView(!1);
                                                                                                                               navigator.userAgent.toLowerCase().match(/(iPhone|iPod|iPad|blackberry|android|htc|kindle|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone)/i) && $("#rental-policy-links").show()
                                                                                                                           },
                                                                                                                           closeMobileNav: function() {
                                                                                                                               $(".new-close-nav").addClass("new-hide");
                                                                                                                               $(".new-header-content-mobile .new-open-nav").removeClass("new-hide");
                                                                                                                               $(".new-header-content-dropdown").addClass("new-hide")
                                                                                                                           },
                                                                                                                           openMobileNav: function() {
                                                                                                                               $(".new-open-nav").addClass("new-hide");
                                                                                                                               $(".new-header-content-mobile .new-close-nav").removeClass("new-hide");
                                                                                                                               $(".new-header-content-dropdown").removeClass("new-hide")
                                                                                                                           },
                                                                                                                           trackNavigation: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               a = $(event.target).html();
                                                                                                                               window.dataLayer.push({
                                                                                                                                   event: "navigation",
                                                                                                                                   menu_location: "navigation",
                                                                                                                                   menu_button: a
                                                                                                                               })
                                                                                                                           },
                                                                                                                           logoClick: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               var a = ["vehicles", "extras", "review-and-book"],
                                                                                                                                   b = !1,
                                                                                                                                   c;
                                                                                                                               for (c in a)
                                                                                                                                   if (0 < window.location.href.indexOf("#" + a[c])) {
                                                                                                                                       b = !0;
                                                                                                                                       break
                                                                                                                                   }
                                                                                                                               window.location.href = !0 == b ? htz.config.protocol + "://" + htz.config.startURL + htz.config.context + "/reservation/?resetSipp=T" : htz.navigation.homeURL
                                                                                                                           },
                                                                                                                           raLogoClick: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               window.location.href = "www.ryanair.com"
                                                                                                                           },
                                                                                                                           changePos: function(a) {
                                                                                                                               a.stopImmediatePropagation();
                                                                                                                               $(".pos-tab").is(":visible") ? ($("#navArrowGtm").addClass("pointer-triangle-pos"), $(".pos-box").slideUp("1000", function() {
                                                                                                                                   $(a.target).closest("li").removeClass("pos-tab");
                                                                                                                                   $($("#pos-change").find("span")[0]).addClass("icons-ic_globe");
                                                                                                                                   $($("#pos-change").find("span")[0]).removeClass("icons-ic_globe_black")
                                                                                                                               })) : ($(a.target).closest("li").addClass("pos-tab"), $(".pos-box").slideDown("1000", function() {
                                                                                                                                   $($("#pos-change").find("span")[0]).addClass("icons-ic_globe")
                                                                                                                               }));
                                                                                                                               $(".pos-box #pos").val(htz.config.pos);
                                                                                                                               $(".pos-tab").is(":visible") && htz.config.pos != $(".pos-box #pos").val() && this.selectedCountry()
                                                                                                                           },
                                                                                                                           submitPos: function() {
                                                                                                                               0 < navigator.appVersion.indexOf("MSIE 9") && (gptBannerAds.clean(), gptBannerAds.render())
                                                                                                                           },
                                                                                                                           pressedCountry: function(a) {
                                                                                                                               13 ==
                                                                                                                                   a.keyCode && this.selectedCountry()
                                                                                                                           },
                                                                                                                           selectedCountry: function() {
                                                                                                                               var a;
                                                                                                                               a = $("#pos").val();
                                                                                                                               $.ajax({
                                                                                                                                   type: "post",
                                                                                                                                   url: htz.config.rootContext + "/PointOfSaleHandler",
                                                                                                                                   data: "" != a ? "selectedPOS=" + a : "",
                                                                                                                                   success: function(a) {
                                                                                                                                       $("#language").empty().html(a)
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       alert(htz.content.ajaxFail)
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           unbindBodyClick: function(a) {
                                                                                                                               $(".pos-tab").is(":visible") && !$.contains($(".pos-tab").get(0), a.target) && $("#header-container .pos-box").slideUp("1000", function() {
                                                                                                                                   $("#header-container .change-link").removeClass("pos-tab");
                                                                                                                                   $($("#pos-change").find("span")[0]).addClass("icons-ic_globe");
                                                                                                                                   $($("#pos-change").find("span")[0]).removeClass("icons-ic_globe_black")
                                                                                                                               })
                                                                                                                           },
                                                                                                                           searchOnFocus: function() {
                                                                                                                               $("#search-input").addClass("highlight");
                                                                                                                               $("#search-input").val() == $("#default-search").val() ? $("#search-input").val("") : $("#search-input").val(this.value)
                                                                                                                           },
                                                                                                                           searchOnBlur: function() {
                                                                                                                               "" == $("#search-input").val() && ($("#search-input").removeClass("highlight"), $("#search-input").val($("#default-search").val()))
                                                                                                                           },
                                                                                                                           searchOnKeyPress: function(a) {
                                                                                                                               searchString =
                                                                                                                                   $(".lb-foreground-cont #search-input").val();
                                                                                                                               safeSearchString = searchString.replace(/["<>'\[\]\{\}|\\^%&:;=?@#$\/]/gi, "");
                                                                                                                               finalSearchString = encodeURI(safeSearchString);
                                                                                                                               if (13 == a.keyCode) return window.location.href = "" != finalSearchString ? htz.config.rootContext + "/customersupport/index.jsp?targetPage=faq.jsp&search=" + finalSearchString : htz.config.rootContext + "/customersupport/index.jsp?targetPage=faq.jsp", !1
                                                                                                                           },
                                                                                                                           searchBtnClick: function() {
                                                                                                                               $(".lb-foreground-cont #search-input").first().val() == $(".lb-foreground-cont #default-search").val() &&
                                                                                                                                   $(".lb-foreground-cont #search-input").first().val("");
                                                                                                                               searchString = $(".lb-foreground-cont #search-input").val();
                                                                                                                               safeSearchString = searchString.replace(/["<>'\[\]\{\}|\\^%&:;=?@#$\/]/gi, "");
                                                                                                                               finalSearchString = encodeURI(safeSearchString);
                                                                                                                               window.location.href = "" != finalSearchString ? htz.config.rootContext + "/customersupport/index.jsp?targetPage=faq.jsp&search=" + finalSearchString : htz.config.rootContext + "/customersupport/index.jsp?targetPage=faq.jsp";
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           openSearchOverlay: function(a) {
                                                                                                                               a = $(a.target);
                                                                                                                               this.lightbox =
                                                                                                                                   void 0 === this.lightbox ? new LightBox : this.lightbox;
                                                                                                                               this.lightbox.overlay({
                                                                                                                                   dismiss: !0,
                                                                                                                                   width: 1248,
                                                                                                                                   noPadding: !0,
                                                                                                                                   suppressClose: !0,
                                                                                                                                   suppressHeader: !0,
                                                                                                                                   sourceElement: a,
                                                                                                                                   sourceElementOffset: 50,
                                                                                                                                   allowOverflow: !0,
                                                                                                                                   close: this.closeSearchInterfaceCallback()
                                                                                                                               }, $("#searchBoxOverlayContainer").html());
                                                                                                                               this.openSearchInterfaceUtil()
                                                                                                                           },
                                                                                                                           openSearchInterfaceUtil: function() {
                                                                                                                               var a = this;
                                                                                                                               $(document).on("mouseup click", "#search-button-trigger", function() {
                                                                                                                                   a.searchBtnClick()
                                                                                                                               });
                                                                                                                               $(document).on("keyup", "#search-input", function(b) {
                                                                                                                                   a.searchOnKeyPress(b)
                                                                                                                               });
                                                                                                                               $(".lb-foreground-cont #search-input").trigger("focus");
                                                                                                                               $(document).on("mouseup click", ".icons-ic_close_search", function() {
                                                                                                                                   a.lightbox.closeOverlay()
                                                                                                                               })
                                                                                                                           },
                                                                                                                           closeSearchInterfaceCallback: function() {
                                                                                                                               $("#search-button-trigger").off("mouseup click");
                                                                                                                               $("#search-input").off("keypress");
                                                                                                                               $(".icons-ic_close_search").off("mouseup click")
                                                                                                                           },
                                                                                                                           hideMemberFeature: function() {
                                                                                                                               this.$el.find(".emember-container").hide()
                                                                                                                           },
                                                                                                                           showRentalQualificationLink: function() {
                                                                                                                               this.$el.find(".rental-container").show()
                                                                                                                           },
                                                                                                                           hideRentalQualification: function() {
                                                                                                                               this.$el.find(".rental-container").hide()
                                                                                                                           },
                                                                                                                           showMemberFeature: function() {
                                                                                                                               this.$el.find(".emember-container").show()
                                                                                                                           },
                                                                                                                           hidePosFeature: function() {
                                                                                                                               this.$el.find(".pos-container").hide();
                                                                                                                               this.$el.find(".mob-nav").hide()
                                                                                                                           },
                                                                                                                           hideMenu: function() {
                                                                                                                               this.$el.find(".nav-menu").hide()
                                                                                                                           },
                                                                                                                           showMenu: function() {
                                                                                                                               this.$el.find(".nav-menu").show()
                                                                                                                           },
                                                                                                                           showPosFeature: function() {
                                                                                                                               this.$el.find(".pos-container .change-link").show()
                                                                                                                           },
                                                                                                                           showDesktopPos: function() {
                                                                                                                               this.$el.find(".pos-container").show()
                                                                                                                           },
                                                                                                                           showSearchMini: function() {},
                                                                                                                           showSearchFull: function() {
                                                                                                                               this.$el.find(".search-box #search-input").show()
                                                                                                                           },
                                                                                                                           navMenuTouchEnd: function() {
                                                                                                                               var a = $(this);
                                                                                                                               "undefined" != typeof a.attr("href") && "" != a.attr("href") && (a = a.attr("href"), window.location = a)
                                                                                                                           },
                                                                                                                           navMenuMouseEnter: function() {
                                                                                                                               $(this).find("dl").addClass("menu-show");
                                                                                                                               $(this).find("> a").addClass("menu-hover");
                                                                                                                               $(this).find("> span").addClass("menu-hover");
                                                                                                                               $(this).find("> article").addClass("pointer-triangle");
                                                                                                                               $(this).find("dd").first().children().addClass("no-pipe");
                                                                                                                               var a = $(this).width() - 1,
                                                                                                                                   b = $(this).find("dl").outerWidth();
                                                                                                                               a >= b && null != b && $(this).find("dl").width(a)
                                                                                                                           },
                                                                                                                           navMenuEnter: function(a) {
                                                                                                                               target = a.keyCode;
                                                                                                                               if (32 == target || 40 == target) {
                                                                                                                                   a.preventDefault();
                                                                                                                                   $(this).find("dl").addClass("menu-show");
                                                                                                                                   $(this).find("> a").addClass("menu-hover");
                                                                                                                                   $(this).find("> span").addClass("menu-hover");
                                                                                                                                   $(this).find("dd").first().children().addClass("no-pipe");
                                                                                                                                   var a = $(this).width() - 1,
                                                                                                                                       b = $(this).find("dl").outerWidth();
                                                                                                                                   a >= b && null != b && $(this).find("dl").width(a)
                                                                                                                               }
                                                                                                                               40 == target && $(this).closest("td").find("dl").find("dd").first().children().focus()
                                                                                                                           },
                                                                                                                           navMenuMouseLeave: function() {
                                                                                                                               $(this).find("dl").removeClass("menu-show");
                                                                                                                               $(this).find("dl").removeClass("last-menu-show");
                                                                                                                               $(this).find("> a").removeClass("menu-hover");
                                                                                                                               $(this).find("> span").removeClass("menu-hover");
                                                                                                                               $(this).find("dl").removeAttr("class");
                                                                                                                               $(this).find("> a").removeAttr("class");
                                                                                                                               $(this).find("> span").removeAttr("class");
                                                                                                                               $(this).find("> article").removeAttr("class")
                                                                                                                           },
                                                                                                                           navMenuEscape: function(a) {
                                                                                                                               target = a.keyCode;
                                                                                                                               if (27 == target || 38 == target || 35 == target || 46 == target || 8 == target) a.preventDefault(), $(this).find("dl").removeClass("menu-show"), $(this).find("dl").removeClass("last-menu-show"),
                                                                                                                                   $(this).find("> a").removeClass("menu-hover"), $(this).find("> span").removeClass("menu-hover"), $(this).find("dl").removeAttr("class"), $(this).find("> a").removeAttr("class"), $(this).find("> span").removeAttr("class")
                                                                                                                           },
                                                                                                                           navMenuMouseEnterIE: function() {
                                                                                                                               $(this).find("dl").addClass("menu-show");
                                                                                                                               $(this).find("> a").addClass("menu-hover");
                                                                                                                               $(this).find("> span").addClass("menu-hover");
                                                                                                                               $(this).find("> a").closest("td").addClass("menu-hover");
                                                                                                                               $(this).find("> span").closest("td").addClass("menu-hover");
                                                                                                                               $(this).find("dd").first().children().addClass("no-pipe");
                                                                                                                               var a = navigator.userAgent.toLowerCase(); - 1 != a.indexOf("msie") && 7 >= parseInt(a.split("msie")[1]) && ($("#container").outerHeight(), $("#page").outerHeight(), $("#container > footer").outerHeight(), $(this).closest(".nav-menu").css("position", "static"), $("#nav-container").css("position", "static"));
                                                                                                                               var a = $(this).width() - 1,
                                                                                                                                   b = $(this).find("dl").outerWidth();
                                                                                                                               a >= b && null != b && $(this).find("dl").width(a);
                                                                                                                               a = $(this).find("dl").width();
                                                                                                                               $(this).find("dl dd").width(a)
                                                                                                                           },
                                                                                                                           navMenuMouseLeaveIE: function() {
                                                                                                                               $(this).find("dl").removeClass("menu-show");
                                                                                                                               $(this).removeClass("menu-hover");
                                                                                                                               $(this).find("dl").removeAttr("class");
                                                                                                                               $(this).removeAttr("class");
                                                                                                                               $(this).find("> a").removeAttr("class");
                                                                                                                               $(this).find("> span").removeAttr("class")
                                                                                                                           },
                                                                                                                           navMenuOnClickIE: function() {
                                                                                                                               0 < !$(this).find("dl").length && 0 < $(this).find("> a").length && (window.location.href = $(this).find("> a").attr("href"))
                                                                                                                           },
                                                                                                                           mobMenuBtnOnClick: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               var b = $(".mob-menu div").outerHeight() + $("#mobile-nav-menu-top").outerHeight();
                                                                                                                               $(".mob-nav-menu div").slideToggle(700, "swing",
                                                                                                                                   function() {
                                                                                                                                       a.currentTarget.setAttribute("aria-expanded", "false");
                                                                                                                                       if ($(this).is(":hidden")) $(".mob-nav-menu").height(0), $(".mob-menu").height(0);
                                                                                                                                       else {
                                                                                                                                           a.currentTarget.setAttribute("aria-expanded", "true");
                                                                                                                                           $(".mob-nav-menu").height(b);
                                                                                                                                           var c = document.body,
                                                                                                                                               d = document.documentElement,
                                                                                                                                               c = Math.max(c.scrollHeight, c.offsetHeight, d.clientHeight, d.scrollHeight, d.offsetHeight);
                                                                                                                                           $(".mob-menu").height(c)
                                                                                                                                       }
                                                                                                                                   });
                                                                                                                               $("#mobile-nav-menu-top").css("display", "flex");
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           mobSubMenuOnClick: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               a = $("#container").width();
                                                                                                                               $(this).closest(".mob-menu").animate({
                                                                                                                                   left: "-" + a + "px"
                                                                                                                               }, "1000", function() {});
                                                                                                                               $(".mob-sub-menu ul").hide();
                                                                                                                               $(".mob-nav-menu").height($(this).children("ul").outerHeight());
                                                                                                                               var b = $(this).offset().top - $(".mob-menu div").offset().top,
                                                                                                                                   a = a - 10;
                                                                                                                               $(this).children("ul").show().width($(this).parent().width()).css({
                                                                                                                                   top: "-" + b + "px",
                                                                                                                                   left: a + "px"
                                                                                                                               })
                                                                                                                           },
                                                                                                                           mobBackToMenu: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               $("#container").width();
                                                                                                                               a = $(".mob-menu div").outerHeight();
                                                                                                                               $(this).closest(".mob-menu").animate({
                                                                                                                                       left: 0
                                                                                                                                   },
                                                                                                                                   "1000",
                                                                                                                                   function() {});
                                                                                                                               $(".mob-nav-menu").height(a);
                                                                                                                               $(".mob-sub-menu ul").hide()
                                                                                                                           },
                                                                                                                           navigationItems: function(a) {
                                                                                                                               function b(a) {
                                                                                                                                   var c = [];
                                                                                                                                   _.each(a, function(a) {
                                                                                                                                       var d = {};
                                                                                                                                       d.displayText = a.displayText;
                                                                                                                                       d.url = a.url;
                                                                                                                                       a.subMenus && 0 < a.subMenus.length ? (d.subMenus = b(a.subMenus), d.isLeaf = !1) : d.isLeaf = !0;
                                                                                                                                       c.push(d)
                                                                                                                                   });
                                                                                                                                   return c
                                                                                                                               }
                                                                                                                               var c = htz.template.topNavJson.data.navigationInfoMap,
                                                                                                                                   d = [];
                                                                                                                               $.each(a ? c.navigationItemsMobile : c.navigationItems, function(a, c) {
                                                                                                                                   d = d.concat(b(c.subMenus))
                                                                                                                               });
                                                                                                                               return d
                                                                                                                           },
                                                                                                                           isLoggedIn: function() {
                                                                                                                               var a = !1,
                                                                                                                                   b = htz.template.topNavJson.data.navigationInfoMap;
                                                                                                                               b.navigationItems && b.navigationItems[0] ? a = b.navigationItems[0].loggedIn : b.navigationItemsMobile && b.navigationItemsMobile[0] && (a = b.navigationItemsMobile[0].loggedIn);
                                                                                                                               return a
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               topNavInitialized = !0;
                                                                                                                               var a = this.navigationItems(),
                                                                                                                                   b = this.navigationItems(!0),
                                                                                                                                   c = this.isLoggedIn();
                                                                                                                               this.data = {
                                                                                                                                   navigation: htz.template.topNavJson.data.content.navigation,
                                                                                                                                   topNav: htz.template.topNavJson.data.topNavigationInfo,
                                                                                                                                   member: htz.template.topNavJson.data,
                                                                                                                                   menuItems: a,
                                                                                                                                   menuItemsMobile: b,
                                                                                                                                   loggedIn: c
                                                                                                                               };
                                                                                                                               htz.config.renderHtml &&
                                                                                                                                   this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a, b, c = {};
                                                                                                                               !0 == RegExp("&search=", "g").test(location.href) && ($.each(document.location.search.substr(1).split("&"), function(a, b) {
                                                                                                                                   var e = b.split("=");
                                                                                                                                   c[e[0].toString()] = e[1].toString()
                                                                                                                               }), $("#search-input").val(c.search));
                                                                                                                               b = this.data.topNav;
                                                                                                                               b.rootContext = htz.config.rootContext;
                                                                                                                               b.headerImageUrl = htz.config.protocol + "://images.hertz.com" + b.logoUrl;
                                                                                                                               b.ryanairHeaderImage = htz.config.protocol + "://images.hertz.com" + b.raLargeLogoUrl;
                                                                                                                               b.ryanairHeaderImageSmall = htz.config.protocol +
                                                                                                                                   "://images.hertz.com" + b.raSmallLogoUrl;
                                                                                                                               b.nvpLanguageSelected = b.nvpLanguageSelected.toUpperCase();
                                                                                                                               b.pos = b.pos.toUpperCase();
                                                                                                                               $.each(b.nvpCountries, function(a, c) {
                                                                                                                                   if (c.value === htz.config.pos) return b.countrySelectedName = c.name, -1
                                                                                                                               });
                                                                                                                               $.each(b.nvpLanguages, function(a, c) {
                                                                                                                                   if (c.value === b.nvpLanguageSelected) return b.languageSelectedName = c.name, -1
                                                                                                                               });
                                                                                                                               $("#nav-container").empty().append(_.template($("#nav-tpl").html(), this.data));
                                                                                                                               a = _.template($("#header-tpl").html());
                                                                                                                               $("#header-container").html(a(this.data));
                                                                                                                               memNavloginModel =
                                                                                                                                   new sdlLoginModel;
                                                                                                                               memNavloginView = new sdlLoginView({
                                                                                                                                   el: "header",
                                                                                                                                   model: memNavloginModel
                                                                                                                               });
                                                                                                                               if (Modernizr && Modernizr.touch) $(".nav-menu a").on("touchend", this.navMenuTouchEnd);
                                                                                                                               a = navigator.userAgent.toLowerCase(); - 1 != a.indexOf("msie") && 8 >= parseInt(a.split("msie")[1]) ? ($(".nav-menu td").on("mouseenter", this.navMenuMouseEnterIE), $(".nav-menu td").on("mouseleave", this.navMenuMouseLeaveIE), $(".nav-menu td").on("click", this.navMenuOnClickIE)) : ($(".nav-menu td").on("mouseenter", this.navMenuMouseEnter), $(".nav-menu td").on("mouseleave",
                                                                                                                                   this.navMenuMouseLeave), $(".nav-menu td").on("keydown", this.navMenuEnter), $(".nav-menu td").on("keydown", this.navMenuEscape));
                                                                                                                               $("body, html").on("click", this.unbindBodyClick);
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       });
                                                                                                                       var f = new htz.integrated.header.views.HeaderView;
                                                                                                                       "function" == typeof define && ("function" == typeof require && define.amd) && require(["config/app-info"], function(a) {
                                                                                                                           a.setHeader(f)
                                                                                                                       })
                                                                                                                   });
                                                                                                                   var sdlLoginModel = Backbone.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               loggedIn: !1,
                                                                                                                               firstInit: "",
                                                                                                                               firstName: "",
                                                                                                                               lastName: "",
                                                                                                                               prefix: "",
                                                                                                                               suffix: "",
                                                                                                                               memberNumber: "",
                                                                                                                               memberType: "",
                                                                                                                               legacyPage: htz.config.legacyPage,
                                                                                                                               fullContext: htz.config.fullContext
                                                                                                                           },
                                                                                                                           url: htz.config.rootContext + "/member/authentication"
                                                                                                                       }),
                                                                                                                       sdlLoginView = Backbone.View.extend({
                                                                                                                           events: {
                                                                                                                               "click #loginLink": "toggleLoginForm",
                                                                                                                               "click #arrowDropdown": "toggleLoginForm",
                                                                                                                               "click #cookieLink": "toggleLoginForm",
                                                                                                                               "click .switchProfileLink": "handleSwitchProfile",
                                                                                                                               "click #loginButton": "homePageloginSubmit",
                                                                                                                               "click #logOut": "logOut",
                                                                                                                               "click #forgotMemberNumberLink": "forgotMemberNumberLink",
                                                                                                                               "click #forgotPwdLink": "forgotPwdLink",
                                                                                                                               "click .learnMoreLink": "infoOverlay",
                                                                                                                               "mouseover #loginButton": "lockBlack",
                                                                                                                               "mouseout #loginButton": "lockWhite",
                                                                                                                               "touchstart #loginButton": "lockWhite",
                                                                                                                               "touchend #loginButton": "lockWhite",
                                                                                                                               "mousedown #loginButton": "lockBlack",
                                                                                                                               "mouseup #loginButton": "lockWhite",
                                                                                                                               "click #loginCreateUserId": "loginCreateUserId",
                                                                                                                               "keypress #loginFormContainer ": "onEnterLogin",
                                                                                                                               "mouseover .loginLink": "yellowChange",
                                                                                                                               "mouseout .loginLink": "blueChange",
                                                                                                                               "touchstart .loginLink": "yellowChange",
                                                                                                                               "click #upgradeToGold": "upgradeToGold",
                                                                                                                               "click #mobile-nav-member-info": "showMemberDropdown",
                                                                                                                               "click #loggedInTravelAgent": "toggleLogOutMenu"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "renderTopNav", "isCookied", "renderLogin", "toggleLoginForm", "showLogin", "hideLogin", "homePageloginSubmit", "logOut", "forgotPwdLink", "forgotMemberNumberLink", "loginCreateUserId");
                                                                                                                               this.isCookied();
                                                                                                                               this.useridInfo = new Tooltip;
                                                                                                                               this.utilsProxy = this.lightbox =
                                                                                                                                   null;
                                                                                                                               var a = this;
                                                                                                                               requirejs(["utils/utils-proxy"], function(b) {
                                                                                                                                   if (!htz.utils.config.UtilConfig.getLightbox()) {
                                                                                                                                       var c = {};
                                                                                                                                       c.lightBox = htz.utils.LightBox;
                                                                                                                                       htz.utils.config.UtilConfig.configure(c)
                                                                                                                                   }
                                                                                                                                   a.utilsProxy = b
                                                                                                                               })
                                                                                                                           },
                                                                                                                           onEnterLogin: function(a) {
                                                                                                                               target = a.keyCode;
                                                                                                                               13 == target && (a.preventDefault(), $("#loginButton").trigger("click"))
                                                                                                                           },
                                                                                                                           isCookied: function() {
                                                                                                                               var a = this;
                                                                                                                               $.ajax({
                                                                                                                                   url: htz.config.rootContext + "/member/top/navigation",
                                                                                                                                   dataType: "json",
                                                                                                                                   cache: !1,
                                                                                                                                   contentType: "application/json",
                                                                                                                                   beforeSend: function() {},
                                                                                                                                   success: function(b) {
                                                                                                                                       a.model.set({
                                                                                                                                           prefix: b.data.prefix,
                                                                                                                                           firstName: b.data.firstName,
                                                                                                                                           lastName: b.data.lastName,
                                                                                                                                           suffix: b.data.suffix,
                                                                                                                                           loggedIn: b.data.loggedIn,
                                                                                                                                           memberNumber: b.data.memberNumber,
                                                                                                                                           memberType: b.data.memberType,
                                                                                                                                           cookieLaw: htz.config.isCountryinEuropeUnion
                                                                                                                                       });
                                                                                                                                       null != a.model.get("firstName") && "" != a.model.get("firstName") && a.model.set("firstInit", a.model.get("firstName").substring(0, 1));
                                                                                                                                       b.data.displayLogin && (a.renderTopNav(), a.renderLogin());
                                                                                                                                       "N" == b.data.displayJoin && ($("#logIn").parent().css("display", "none"), $("#loginLink").css("border-right", "none"));
                                                                                                                                       "t" == a.getParameterByName("mN") && (a.model.attributes.lastName ? $("#cookieLink").trigger("click") : $("#loginLink").trigger("click"))
                                                                                                                                   },
                                                                                                                                   error: function() {}
                                                                                                                               })
                                                                                                                           },
                                                                                                                           hideDropdowns: function() {
                                                                                                                               $("#loginFormContainer").hide();
                                                                                                                               $(".loginLink, .myaccount, .cookieLink").removeClass("loginActive").addClass("loginInActive");
                                                                                                                               $(".loginLink") && ($(".loginLink").trigger("blur"), $(".loginLink").addClass("topNavPrimary"))
                                                                                                                           },
                                                                                                                           renderTopNav: function() {
                                                                                                                               -1 != window.location.pathname.indexOf("hertzlink/index.jsp") ? (this.templateNav = _.template($("#topNavLinks").html()),
                                                                                                                                   this.$(".pos-container").html(this.templateNav(this.model.attributes)), $(window).on("resize", function() {
                                                                                                                                       var a = $(this);
                                                                                                                                       768 > a.width() && $("#nav-container").css("display", "none");
                                                                                                                                       768 < a.width() && $("#nav-container").css("display", "contents")
                                                                                                                                   })) : (this.templateNav = _.template($("#topNavLinks").html()), this.$(".emember-container").html(this.templateNav(this.model.attributes)));
                                                                                                                               this.templateMobileNavInfo = _.template($("#mobileWebtopNavMemberInfo").html());
                                                                                                                               this.$("#mobile-nav-member-info").html(this.templateMobileNavInfo(this.model.attributes));
                                                                                                                               this.templateMobileNavDetails = _.template($("#mobileWebtopNavLinks").html());
                                                                                                                               this.$("#mobile-nav-member-menu").html(this.templateMobileNavDetails(this.model.attributes));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           showMemberDropdown: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               $("#mobileWebMemberInfoUL>li>a[href$='/rentacar/emember/modify/profile.do?']").parent().remove();
                                                                                                                               $("#mobileWebArrowDropdown").toggleClass("mobileWebArrowOpen").toggleClass("mobileWebArrowClose");
                                                                                                                               $("#mobile-nav-member-info").toggleClass("border-bottom");
                                                                                                                               $("#mobile-nav-member-info-more").toggleClass("border-bottom");
                                                                                                                               $("#mobile-nav-member-menu").slideToggle(700, "swing", function() {
                                                                                                                                   var a = $("#mobile-nav-member-info-more").outerHeight() + $("#mobileWebMemberInfoUL").outerHeight();
                                                                                                                                   $("#mobile-nav-member-menu").height(a)
                                                                                                                               });
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           handleSwitchProfile: function(a) {
                                                                                                                               a.stopPropagation()
                                                                                                                           },
                                                                                                                           toggleLogOutMenu: function() {
                                                                                                                               $(".new-agent-logout").hasClass("new-hide") ? $(".new-agent-logout").removeClass("new-hide") : $(".new-agent-logout").addClass("new-hide")
                                                                                                                           },
                                                                                                                           renderLogin: function() {
                                                                                                                               var a = this;
                                                                                                                               this.template = _.template($("#sdlLoginFromTemplate").html());
                                                                                                                               this.$("#loginFormContainer").html(this.template(this.model.attributes));
                                                                                                                               this.model.attributes.loggedIn && $.ajax({
                                                                                                                                   url: htz.config.rootContext + "/member/account/navigation",
                                                                                                                                   dataType: "json",
                                                                                                                                   cache: !1,
                                                                                                                                   contentType: "application/json",
                                                                                                                                   beforeSend: function() {},
                                                                                                                                   success: function(b) {
                                                                                                                                       var c = !1;
                                                                                                                                       if ("undefined" !== typeof b.data) {
                                                                                                                                           "1" != b.data.clubType && "express" != b.data.clubType && $("#upgradeToGold").hide();
                                                                                                                                           "goldnotallowed" == b.data.goldPermission && $("#upgradeToGold").hide();
                                                                                                                                           clubType = b.data.clubType;
                                                                                                                                           clubTier = b.data.clubTier;
                                                                                                                                           switch (clubType) {
                                                                                                                                               case "G":
                                                                                                                                                   c = !0;
                                                                                                                                                   "PC" == clubTier ? ($("#memberNavClubHeaderName").html($("#numberOneClubPresidentCircle").html()), $("#mobileWebMemberInfo-clubtier").html($("#numberOneClubPresidentCircle").html())) : "FS" == clubTier ? ($("#memberNavClubHeaderName").html($("#numberOneClubFiveStar").html()), $("#mobileWebMemberInfo-clubtier").html($("#numberOneClubFiveStar").html())) : ($("#memberNavClubHeaderName").html($("#numberOneClubGold").html()), $("#mobileWebMemberInfo-clubtier").html($("#numberOneClubGold").html()));
                                                                                                                                                   break;
                                                                                                                                               case "P":
                                                                                                                                                   c = !0;
                                                                                                                                                   $("#memberNavClubHeaderName").html($("#numberOneClubPlatinum").html());
                                                                                                                                                   $("#mobileWebMemberInfo-clubtier").html($("#numberOneClubPlatinum").html());
                                                                                                                                                   break;
                                                                                                                                               case "1":
                                                                                                                                                   c = !0;
                                                                                                                                                   $("#memberNavClubHeaderName").html($("#numberOneClub").html());
                                                                                                                                                   $("#mobileWebMemberInfo-clubtier").html($("#numberOneClub").html());
                                                                                                                                                   break;
                                                                                                                                               case "TA":
                                                                                                                                                   b.data.displayExactlyRewardsLink && $(".taNavLink").attr("href", b.data.hertzPartnersLink).html(b.data.hertzPartnersText).show(), $("#loggedInMember").hide(), $("#loggedInTravelAgent").show()
                                                                                                                                           }
                                                                                                                                           $("#memberNavClubHeaderPoints").html(b.data.rewardsPoints +
                                                                                                                                               "&nbsp;pts");
                                                                                                                                           $("#memberNavClubHeaderMemberNo span").html(a.model.attributes.memberNumber);
                                                                                                                                           $("#mobileWebMemberInfo-points").html(b.data.rewardsPoints + "&nbsp;pts");
                                                                                                                                           $("#mobileWebMemberInfo-memberNumber span").html(a.model.attributes.memberNumber);
                                                                                                                                           0 == b.data.rewardsPoints ? $("#mobileNavAwards").hide() : $("#mobileGoldPoints").html(b.data.rewardsPoints);
                                                                                                                                           "IRAC" != htz.config.subSystemId && $("#mobileNavAwards").hide();
                                                                                                                                           for (i = 0; i < b.data.items.length; i++) $("#loggedUserDetails").append("<li><a href=" + htz.config.rootContext +
                                                                                                                                               b.data.items[i].url + ">" + b.data.items[i].displayText + "</a></li>"), $("#mobileWebMemberInfoUL").append("<li><a href=" + htz.config.rootContext + b.data.items[i].url + ">" + b.data.items[i].displayText + "</a></li>");
                                                                                                                                           $("#loggedUserDetails").append('<li id="logOut"> <a href="' + htz.config.rootContext + '/emember/submitLogout.do">Logout</a></li>');
                                                                                                                                           c && $("#myaccount").show()
                                                                                                                                       } else $("#myaccount").hide()
                                                                                                                                   },
                                                                                                                                   error: function() {}
                                                                                                                               });
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           lockWhite: function() {
                                                                                                                               $("#loginButton span").addClass("icons-white_lock").removeClass("icons-lock")
                                                                                                                           },
                                                                                                                           lockBlack: function() {
                                                                                                                               $("#loginButton span").removeClass("icons-white_lock").addClass("icons-lock")
                                                                                                                           },
                                                                                                                           yellowChange: function() {
                                                                                                                               $(".loginLink").hasClass("topNavPrimary") && $(".loginLink").addClass("topNavPrimaryHover");
                                                                                                                               var a = this;
                                                                                                                               if ("ontouchstart" in document.documentElement) $("body").on("touchmove", function(b) {
                                                                                                                                   !$("#loginFormContainer").is(":visible") && $(".loginLink").hasClass("topNavPrimaryHover") && (a.blueChange(), $("body").off(b))
                                                                                                                               })
                                                                                                                           },
                                                                                                                           blueChange: function() {
                                                                                                                               $(".loginLink").hasClass("topNavPrimary") && $(".loginLink").removeClass("topNavPrimaryHover")
                                                                                                                           },
                                                                                                                           toggleLoginForm: _.debounce(function(a) {
                                                                                                                               a.preventDefault();
                                                                                                                               a.stopPropagation();
                                                                                                                               var b = this;
                                                                                                                               if ("https" === htz.config.protocol) {
                                                                                                                                   var c = "ontouchstart" in document.documentElement ? "touchstart" : "click";
                                                                                                                                   if ($("#loginFormContainer").is(":visible")) b.hideLogin(), $("#arrowDropdown").removeClass("arrowClose").addClass("arrowOpen");
                                                                                                                                   else {
                                                                                                                                       var d = $(a.target);
                                                                                                                                       !b.model.get("loggedIn") && (null != b.model.get("lastName") && "" != b.model.get("lastName")) && (d = d.closest("#cookieLink"));
                                                                                                                                       b.showLogin(d);
                                                                                                                                       $("#pos-change").on("click", function() {
                                                                                                                                           b.hideLogin()
                                                                                                                                       });
                                                                                                                                       $(window).on("resize", function() {
                                                                                                                                           clearTimeout(this.resizeEventHandler);
                                                                                                                                           resizeEventHandler = setTimeout(function() {
                                                                                                                                               $("#loginFormContainer").is(":visible") && b.showLogin(d)
                                                                                                                                           }, 100)
                                                                                                                                       });
                                                                                                                                       $("body").not(a.currentTarget).not("#loginFormContainer").on(c, {
                                                                                                                                           originEle: a.currentTarget.id
                                                                                                                                       }, function(a) {
                                                                                                                                           var c = $("#" + a.data.originEle);
                                                                                                                                           $("#loginFormContainer").is(":visible") && (0 == c.has(a.target).length && a.target.id != a.data.originEle && 0 == $("#loginFormContainer").has(a.target).length) && (b.hideLogin(), $("body").off(a))
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               } else {
                                                                                                                                   "ontouchstart" in
                                                                                                                                   document.documentElement && $(".loginLink") && b.blueChange();
                                                                                                                                   var a = location.hash,
                                                                                                                                       c = document.URL.split(a)[0],
                                                                                                                                       e = -1 == document.URL.indexOf("?") ? "?" : "&";
                                                                                                                                   window.location.href = c.replace("http:", "https:") + e + "mN=t" + a
                                                                                                                               }
                                                                                                                           }, 500),
                                                                                                                           showLogin: function(a) {
                                                                                                                               var b = this;
                                                                                                                               $("#loggedUserDetails>li>a[href$='/rentacar/emember/modify/profile.do?']").parent().remove();
                                                                                                                               $("#arrowDropdown").removeClass("arrowOpen").addClass("arrowClose");
                                                                                                                               if ($("#loginLink")) {
                                                                                                                                   $(".tmplPageContainer").length && $(".tmplPageContainer").css({
                                                                                                                                       position: "static"
                                                                                                                                   });
                                                                                                                                   !a.is(":visible") && $(".loginActive:visible") && (a = $(".loginActive:visible"));
                                                                                                                                   var c = a.offset(),
                                                                                                                                       d = a.outerWidth();
                                                                                                                                   a.outerHeight();
                                                                                                                                   var e = $("#loginFormContainer").outerWidth(),
                                                                                                                                       c = c.left + d + 10 - e;
                                                                                                                                   this.$("#loginFormContainer").css({
                                                                                                                                       left: c
                                                                                                                                   });
                                                                                                                                   $(".loginLink") && $(".loginLink").removeClass("topNavPrimary").removeClass("topNavPrimaryHover");
                                                                                                                                   a.removeClass("loginInActive").addClass("loginActive");
                                                                                                                                   this.$("#loginFormContainer").slideDown("1000")
                                                                                                                               } else $overlayStub = $("#hp-overlays"), $overlayStub.length || ($overlayStub = $('<div id="member-login-response-container" class="hidden"></div>'),
                                                                                                                                   $("body").append($overlayStub)), $.ajax({
                                                                                                                                   url: htz.config.rootContext + "/member/login/overlay",
                                                                                                                                   cache: !1,
                                                                                                                                   dataType: "html",
                                                                                                                                   success: function(a) {
                                                                                                                                       $($overlayStub).append(a);
                                                                                                                                       window.scrollTo(0, 0);
                                                                                                                                       b.utilsProxy.getLightbox().overlay({
                                                                                                                                           title: "<img src=" + htz.localLoyaltyLogo.hertzGoldPlusImage + " alt='' class='gold-plus-lightbox-logo' />",
                                                                                                                                           dismiss: !0,
                                                                                                                                           width: 762,
                                                                                                                                           noPadding: !0
                                                                                                                                       }, $("#homePageloginBox"));
                                                                                                                                       a = new loginModel;
                                                                                                                                       new loginView({
                                                                                                                                           el: "#homePageloginBox",
                                                                                                                                           model: a,
                                                                                                                                           isRes: !1,
                                                                                                                                           isInLightBox: !0,
                                                                                                                                           metaModel: b.model.get("metaData"),
                                                                                                                                           referrer: b
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           hideLogin: function() {
                                                                                                                               this.$("#loginFormContainer").slideUp("1000", function() {
                                                                                                                                   $("#arrowDropdown").removeClass("arrowClose").addClass("arrowOpen");
                                                                                                                                   $(".loginLink, .myaccount, .cookieLink").removeClass("loginActive").addClass("loginInActive");
                                                                                                                                   $(".loginLink") && ($(".loginLink").trigger("blur"), $(".loginLink").addClass("topNavPrimary"))
                                                                                                                               })
                                                                                                                           },
                                                                                                                           logOut: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               Utils.clearReservationSession()
                                                                                                                           },
                                                                                                                           forgotMemberNumberLink: function() {
                                                                                                                               window.location.href = htz.config.rootContext +
                                                                                                                                   "/emember/reset/memberNumberRetrieval.do"
                                                                                                                           },
                                                                                                                           forgotPwdLink: function() {
                                                                                                                               $("#loginForgotPasswordNav").val("forgotPassword");
                                                                                                                               this.homePageloginSubmit()
                                                                                                                           },
                                                                                                                           loginCreateUserId: function() {
                                                                                                                               $("#loginCreateUserId").val("true");
                                                                                                                               this.homePageloginSubmit()
                                                                                                                           },
                                                                                                                           infoOverlay: function(a) {
                                                                                                                               a = $(a.target);
                                                                                                                               this.useridInfo.isInUse() || this.useridInfo.create({
                                                                                                                                   containerID: "userid-info",
                                                                                                                                   content: this.$("#username-desc").html(),
                                                                                                                                   width: "inherit"
                                                                                                                               });
                                                                                                                               this.useridInfo.show(a)
                                                                                                                           },
                                                                                                                           homePageloginSubmit: function() {
                                                                                                                               Loader.showLoader();
                                                                                                                               var a = this;
                                                                                                                               this.model.attributes.lastName ?
                                                                                                                                   (this.model.clear(), this.model.set({
                                                                                                                                       cookieMemberOnLogin: !0,
                                                                                                                                       loginId: "cookie",
                                                                                                                                       password: $("#homePagePassword").val(),
                                                                                                                                       loginForgotPassword: $("#loginForgotPasswordNav").val()
                                                                                                                                   })) : (this.model.clear(), this.model.set({
                                                                                                                                       loginCreateUserID: $("#loginCreateUserId").val(),
                                                                                                                                       loginId: $("#homePageloginId").val(),
                                                                                                                                       password: $("#homePagePassword").val(),
                                                                                                                                       cookieMemberOnLogin: $("#cookieMemberOnLogin").is(":checked"),
                                                                                                                                       loginForgotPassword: $("#loginForgotPasswordNav").val()
                                                                                                                                   }));
                                                                                                                               this.model.save(this.model.attributes, {
                                                                                                                                   success: function(a,
                                                                                                                                       c) {
                                                                                                                                       var d = c.resultInfo.result;
                                                                                                                                       Loader.hideLoader();
                                                                                                                                       "input" == d || "login" == d ? window.location.href = -1 != c.resultInfo.url.indexOf(htz.config.rootContext) ? c.resultInfo.url : htz.config.rootContext + c.resultInfo.url : "success" === d ? 0 < window.location.href.indexOf("join") || 0 < window.location.href.indexOf("legacy") || 0 < window.location.href.indexOf("reset") || 0 < window.location.href.indexOf("enrollment") ? window.location.href = c.resultInfo.url : window.location.reload() : "success_to_profile" == d || "success_to_upgrade" == d ? window.location.href = -1 != c.resultInfo.url.indexOf(htz.config.rootContext) ? c.resultInfo.url + "?curPage=" + c.resultInfo.result : htz.config.rootContext + c.resultInfo.url + "?curPage=" + c.resultInfo.result : null != c.resultInfo.url && void 0 !== c.resultInfo.url ? window.location.href = -1 != c.resultInfo.url.indexOf(htz.config.rootContext) ? c.resultInfo.url + "?curPage=" + c.resultInfo.result : htz.config.rootContext + c.resultInfo.url + "?curPage=" + c.resultInfo.result : window.location.hreg = htz.config.rootContext + "?curPage=" + c.resultInfo.result
                                                                                                                                   },
                                                                                                                                   error: function(b,
                                                                                                                                       c) {
                                                                                                                                       var d = $.parseJSON(c.responseText).message;
                                                                                                                                       Utils.isUseStoragePolyfill() ? Utils.storeItemIE("ieLoginError", d) : (d = JSON.stringify(d), htz.helpers.SessionHelper.setItem("errorData", d));
                                                                                                                                       b.set({
                                                                                                                                           errorLocation: "#homePageloginBox #error-list"
                                                                                                                                       }, {
                                                                                                                                           silent: !0
                                                                                                                                       });
                                                                                                                                       a.model.trigger("error", b, c);
                                                                                                                                       Loader.hideLoader();
                                                                                                                                       d = $.parseJSON(c.responseText);
                                                                                                                                       window.location.href = null != d.resultInfo.url && void 0 !== d.resultInfo.url ? htz.config.rootContext + d.resultInfo.url + "?curPage=" + d.resultInfo.result : htz.config.rootContext + "?curPage=" +
                                                                                                                                           d.resultInfo.result
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           getParameterByName: function(a) {
                                                                                                                               a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                                                                                                                               a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.search);
                                                                                                                               return null == a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
                                                                                                                           },
                                                                                                                           upgradeToGold: function() {
                                                                                                                               $.ajax({
                                                                                                                                   url: htz.config.rootContext + "/rest/member/upgrade/gold",
                                                                                                                                   dataType: "json",
                                                                                                                                   cache: !1,
                                                                                                                                   contentType: "application/json",
                                                                                                                                   beforeSend: function() {},
                                                                                                                                   success: function(a) {
                                                                                                                                       window.location.href = "https://" + window.location.hostname + htz.config.rootContext + a.resultInfo.url
                                                                                                                                   },
                                                                                                                                   error: function() {}
                                                                                                                               })
                                                                                                                           }
                                                                                                                       });
                                                                                                                   $(document).ready(function() {
                                                                                                                       void 0 === window.topNavInitialized && (memNavloginModel = new sdlLoginModel, memNavloginView = new sdlLoginView({
                                                                                                                           el: "header",
                                                                                                                           model: memNavloginModel
                                                                                                                       }))
                                                                                                                   });
                                                                                                                   memberViewUtil = Backbone.View.extend({
                                                                                                                       events: {},
                                                                                                                       initialize: function() {
                                                                                                                           _.bindAll(this, "infoMessage", "closeOverlay", "displayOverlay", "hideLightBoxCloseBtn")
                                                                                                                       },
                                                                                                                       hideLightBoxCloseBtn: function() {
                                                                                                                           $(".lb-close").hide()
                                                                                                                       },
                                                                                                                       infoMessage: function(a) {
                                                                                                                           var b = $(a),
                                                                                                                               a = b.closest(".overlayPopup").find(".overlayPopupLink:eq(0)"),
                                                                                                                               b = b.closest(".overlayPopup").find(".overlayPopupContent:eq(0)");
                                                                                                                           b.is(":hidden") ? ($(".overlayPopupContent").hide(), this.displayOverlay(b, a, !1)) : this.closeOverlay(b, !1)
                                                                                                                       },
                                                                                                                       displayOverlay: function(a, b,
                                                                                                                           c) {
                                                                                                                           var a = $(a),
                                                                                                                               b = $(b),
                                                                                                                               d = navigator.userAgent.toLowerCase(); - 1 != d.indexOf("msie") && 6 == parseInt(d.split("msie")[1]) && $("select").css("visibility", "hidden");
                                                                                                                           var d = $(document).width(),
                                                                                                                               e = $(document).height(),
                                                                                                                               h = b.offset().top,
                                                                                                                               j = b.offset().left,
                                                                                                                               k = $(window).height(),
                                                                                                                               l = $(window).width(),
                                                                                                                               f = b.position().top,
                                                                                                                               g = b.position().left,
                                                                                                                               f = h + a.height() > k + $(window).scrollTop() ? b.position().top - a.height() : b.position().top + b.height(),
                                                                                                                               g = j + a.width() + 50 > l + $(window).scrollLeft() ? b.position().left - a.width() : b.position().left + b.width();
                                                                                                                           a.css({
                                                                                                                               top: f,
                                                                                                                               left: g
                                                                                                                           });
                                                                                                                           c && (b = $("#overlayScreen"), 0 == b.length && (b = $("<div>").attr("id", "overlayScreen").css({
                                                                                                                               width: d,
                                                                                                                               height: e
                                                                                                                           }).addClass("overlayScreen").appendTo(document.body)), b.show());
                                                                                                                           a.show()
                                                                                                                       },
                                                                                                                       closeOverlay: function(a, b) {
                                                                                                                           var c = navigator.userAgent.toLowerCase(); - 1 != c.indexOf("msie") && 6 == parseInt(c.split("msie")[1]) && $("select").css("visibility", "visible");
                                                                                                                           b && ($(".overlayPopupContent").hide(), $("#overlayScreen").hide());
                                                                                                                           $(a).hide()
                                                                                                                       }
                                                                                                                   });
                                                                                                                   window.memUtil = new memberViewUtil({
                                                                                                                       el: "body"
                                                                                                                   });

                                                                                                                   function loginAndCreateUserIdSubmit(a) {
                                                                                                                       a.prop("method", "post");
                                                                                                                       a.prop("action", htz.config.rootContext + "/emember/submitLogin");
                                                                                                                       $("#loginCreateUserID").val("true");
                                                                                                                       a.submit()
                                                                                                                   };
                                                                                                                   var passwordStrengthView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.template = this.options.template;
                                                                                                                           this.content = this.options.content;
                                                                                                                           this.setElement(this.options.el)
                                                                                                                       },
                                                                                                                       render: function(a) {
                                                                                                                           var b = _.template($(this.template).html(), {
                                                                                                                               content: this.content
                                                                                                                           });
                                                                                                                           $(this.options.el).html(b);
                                                                                                                           this.display(this.getPasswordStrength(a))
                                                                                                                       },
                                                                                                                       display: function(a) {
                                                                                                                           0 <= a ? ($(this.options.el).show(), 7 == a ? ($(this.options.el).closest(".password-div").find(".passwordVerify").removeAttr("disabled"), $(this.options.el).closest(".password-div").find(".passwordVerifyBox").removeClass("disabled")) :
                                                                                                                               ($(this.options.el).closest(".password-div").find(".passwordVerify").attr("disabled", "true"), $(this.options.el).closest(".password-div").find(".passwordVerifyBox").addClass("disabled"))) : $(this.options.el).hide()
                                                                                                                       },
                                                                                                                       handleCheckmark: function(a, b, c) {
                                                                                                                           a ? (b.addClass("checkmark"), c++) : b.removeClass("checkmark").addClass("crossmark");
                                                                                                                           return c
                                                                                                                       },
                                                                                                                       getSpecialCharFlag: function(a) {
                                                                                                                           return /[#\$%\^&!@]/.test(a) && !1 === /[^a-zA-Z0-9#$%\\^&!@]/.test(a) ? !0 : !1
                                                                                                                       },
                                                                                                                       getPasswordStrength: function(a) {
                                                                                                                           var b = 0;
                                                                                                                           if (0 != a.length) {
                                                                                                                               var c =
                                                                                                                                   /[0-9]/.test(a),
                                                                                                                                   d = this.getSpecialCharFlag(a),
                                                                                                                                   e = /[A-Z]/.test(a),
                                                                                                                                   f = 8 <= a.length ? !0 : !1,
                                                                                                                                   g = 30 >= a.length ? !0 : !1,
                                                                                                                                   h = /[a-z]/.test(a),
                                                                                                                                   i = /\b(\w*password\w*)\b/.test(a.toLowerCase()),
                                                                                                                                   a = /(.)\1{3,}/.test(a),
                                                                                                                                   b = this.handleCheckmark(c, $("li#passStrenghtNums"), b),
                                                                                                                                   b = this.handleCheckmark(d, $("li#passSymbols"), b),
                                                                                                                                   b = this.handleCheckmark(e, $("li#passStrenghtUpper"), b),
                                                                                                                                   b = this.handleCheckmark(h, $("li#passStrenghtLower"), b),
                                                                                                                                   b = this.handleCheckmark(!i, $("li#passPassword"), b),
                                                                                                                                   b = this.handleCheckmark(!a, $("li#passRepeat"), b);
                                                                                                                               f &&
                                                                                                                                   g ? ($("li#passStrenghtMinChars").addClass("checkmark"), b++) : $("li#passStrenghtMinChars").removeClass("checkmark").addClass("crossmark");
                                                                                                                               return 7 == b ? 7 : 1
                                                                                                                           }
                                                                                                                           return -1
                                                                                                                       },
                                                                                                                       checkPasswordMatch: function(a) {
                                                                                                                           var a = $(a.target),
                                                                                                                               b = a.closest(".password-div").find("#password").val(),
                                                                                                                               c = a.val();
                                                                                                                           7 == this.getPasswordStrength(b) && setTimeout(function() {
                                                                                                                               $(".password-strength-div").empty()
                                                                                                                           }, 300);
                                                                                                                           b === c ? a.closest(".password-div").find("#errorPasswordMismatch").hide() : a.closest(".password-div").find("#errorPasswordMismatch").show()
                                                                                                                       }
                                                                                                                   });
                                                                                                                   var resetConfirmationView = Backbone.View.extend({
                                                                                                                           events: {
                                                                                                                               "click #home-btn": "redirectHome",
                                                                                                                               "click #profile-btn": "gotoProfile",
                                                                                                                               "click #continue-res": "continueRes",
                                                                                                                               "click #oci-review-ok": "handleOCIandReview"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "renderResetConfirmation", "redirectHome", "gotoProfile");
                                                                                                                               this.renderResetConfirmation()
                                                                                                                           },
                                                                                                                           renderResetConfirmation: function() {
                                                                                                                               var a = _.template($("#pinResetConfirmationTemplate").html(), {});
                                                                                                                               $(this.el).html(a);
                                                                                                                               isRes || isOCI || isResReview ? ($("#profile-btn, #home-btn").hide(),
                                                                                                                                   $("#pinResetConfirmationSection").css("width", "auto"), $(".containerTableThickBorder, .containerTableBorder").css("border", "none"), isOCI || isResReview ? $("#continue-res").hide() : $("#oci-review-ok").hide(), memUtil.hideLightBoxCloseBtn()) : ($("#navLogout").css("display", "block"), $("#navLogin").hide(), $("#continue-res, #oci-review-ok").hide(), memNavloginView.isCookied())
                                                                                                                           },
                                                                                                                           redirectHome: function() {
                                                                                                                               document.location.href = htz.config.rootContext + "/reservation/"
                                                                                                                           },
                                                                                                                           gotoProfile: function() {
                                                                                                                               document.location.href =
                                                                                                                                   htz.config.rootContext + "/emember/modify/profile"
                                                                                                                           },
                                                                                                                           continueRes: function() {
                                                                                                                               HomePage.bookAsMemberSubmitRes()
                                                                                                                           },
                                                                                                                           handleOCIandReview: function() {
                                                                                                                               if (isOCI) window.location.reload();
                                                                                                                               else if (isResReview) {
                                                                                                                                   var a = this.handleMemberRes || handleMemberRes;
                                                                                                                                   a && "function" === typeof a ? a() : window.location.href = htz.config.rootContext + "/reservation/"
                                                                                                                               }
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       resetPwdModel = RestModel.extend({
                                                                                                                           url: htz.config.rootContext + "/member/reset/password"
                                                                                                                       }),
                                                                                                                       resetPwdView = Backbone.View.extend({
                                                                                                                           defaults: {
                                                                                                                               isRes: !1,
                                                                                                                               isOCI: !1,
                                                                                                                               isResReview: !1,
                                                                                                                               clearError: !1
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click #resetSubmit": "resetPwdSubmit",
                                                                                                                               "keyup #password": "checkPassword",
                                                                                                                               "click .learnMoreLink": "learnMoreoverlay",
                                                                                                                               "click .bookAsGuest,#bookAsGuest": "bookAsGuestFromresetPage",
                                                                                                                               "click #strong-password-info": "showStrongPasswordInformation",
                                                                                                                               "blur #password": "hideStrongPasswordInformation",
                                                                                                                               "focusout #passwordVerify": "checkPasswordMatch"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "renderResetPwd", "resetPwdSubmit", "checkPassword", "learnMoreoverlay");
                                                                                                                               this.renderResetPwd();
                                                                                                                               this.resetPassTooltip = new LightBox;
                                                                                                                               this.model.on("fieldError", this.highlight, this);
                                                                                                                               this.passwordStrengthView = new passwordStrengthView({
                                                                                                                                   el: "#membershipDetailsPasswordIndicatorSection",
                                                                                                                                   template: "#password-strength-indicator"
                                                                                                                               })
                                                                                                                           },
                                                                                                                           checkPasswordMatch: function(a) {
                                                                                                                               this.passwordStrengthView.checkPasswordMatch(a)
                                                                                                                           },
                                                                                                                           renderResetPwd: function() {
                                                                                                                               var a = _.template($("#pinResetSectionTemplate").html(), {
                                                                                                                                   deviceGroup: htz.config.deviceGroup
                                                                                                                               });
                                                                                                                               $(this.el).html(a);
                                                                                                                               if (isRes || isOCI || isResReview)
                                                                                                                                   if ($("#pinResetSection").css("width", "550px"), $(".containerTableThickBorder, .containerTableBorder").css("border",
                                                                                                                                           "6px solid #EDEDED"), $(".overlayPopup").hide(), isOCI || isResReview) $(".bookAsGuest").hide(), $("#bookAsGuest").hide();
                                                                                                                               this.IsUserClosed = this.IsUserExpanded = this.collapsed = this.isClickedOutside = !1
                                                                                                                           },
                                                                                                                           bookAsGuestFromresetPage: function(a) {
                                                                                                                               $(a.target).closest(".lb-close").triggerHandler("click");
                                                                                                                               HomePage.bookAsGuestSubmitRes()
                                                                                                                           },
                                                                                                                           learnMoreoverlay: function() {
                                                                                                                               this.resetPassTooltip.isInUse() || this.resetPassTooltip.overlay({
                                                                                                                                   title: this.$("#password-tooltip-label").html()
                                                                                                                               }, this.$("#instruction-content").html())
                                                                                                                           },
                                                                                                                           resetPwdSubmit: function() {
                                                                                                                               var a = this;
                                                                                                                               a.hidePasswordIndicator();
                                                                                                                               Loader.showLoader();
                                                                                                                               clearError && this.model.clear();
                                                                                                                               this.model.set({
                                                                                                                                   password: $("#password").val(),
                                                                                                                                   passwordVerify: $("#passwordVerify").val()
                                                                                                                               });
                                                                                                                               this.model.save(this.model.attributes, {
                                                                                                                                   success: function(a, e) {
                                                                                                                                       clearError = !1;
                                                                                                                                       var f = e.resultInfo.result;
                                                                                                                                       "success" == f ? $.ajax({
                                                                                                                                           url: htz.config.rootContext + e.resultInfo.url,
                                                                                                                                           cache: !1,
                                                                                                                                           beforeSend: function() {},
                                                                                                                                           success: function(a) {
                                                                                                                                               isRes || isOCI || isResReview ? $(".lb-content-box-no-padding").html("").html(a) : $(".sectionWidthSmall").html("").html(a);
                                                                                                                                               (a = sessionStorage.getItem("platinum")) ? (sessionStorage.removeItem("platinum"), sessionStorage.setItem("resetPasswordConfirmationMessage", !0), document.location.href = htz.config.rootContext + a) : new resetConfirmationView({
                                                                                                                                                   el: "#pinResetConfirmationSection"
                                                                                                                                               })
                                                                                                                                           },
                                                                                                                                           error: function() {}
                                                                                                                                       }) : "success_platinum" == f && (sessionStorage.setItem("resetPasswordConfirmationMessage", !0), window.location.href = htz.config.rootContext + e.resultInfo.url);
                                                                                                                                       Loader.hideLoader()
                                                                                                                                   },
                                                                                                                                   error: function(b, e) {
                                                                                                                                       clearError = !0;
                                                                                                                                       a.model.clear();
                                                                                                                                       b.set({
                                                                                                                                           errorLocation: "#pinResetSection .error-list"
                                                                                                                                       }, {
                                                                                                                                           silent: !0
                                                                                                                                       });
                                                                                                                                       a.model.trigger("error", b, e);
                                                                                                                                       Loader.hideLoader()
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           checkPassword: function(a) {
                                                                                                                               a = $(a.target).val();
                                                                                                                               this.passwordStrengthView.render(a);
                                                                                                                               this.checkIndicatorStatus()
                                                                                                                           },
                                                                                                                           highlight: function(a, b) {
                                                                                                                               ErrorHelper.reset();
                                                                                                                               ErrorHelper.displayErrors(b, {
                                                                                                                                   mappings: [{
                                                                                                                                       fields: "password",
                                                                                                                                       target: "errorPassword"
                                                                                                                                   }, {
                                                                                                                                       fields: "passwordVerify",
                                                                                                                                       target: "errorPasswordVerify"
                                                                                                                                   }],
                                                                                                                                   allErrTarget: "#pinResetSection .error-list"
                                                                                                                               })
                                                                                                                           },
                                                                                                                           showStrongPasswordInformation: function(a) {
                                                                                                                               a = $(a.target);
                                                                                                                               this.isClickedOutside ? this.isClickedOutside = !1 : (this.$(".password-info").slideToggle(), a.hasClass("icons-blue-plus-box") ? (a.addClass("icons-grey-minus-box").removeClass("icons-blue-plus-box"), this.IsUserExpanded = !0, this.IsUserClosed = !1) : (a.removeClass("icons-grey-minus-box").addClass("icons-blue-plus-box"), this.IsUserClosed = !0, this.IsUserExpanded = !1))
                                                                                                                           },
                                                                                                                           hideStrongPasswordInformation: function() {
                                                                                                                               this.collapsed || ($(".password-info").slideToggle(), $("#strong-password-info").removeClass("icons-grey-minus-box").addClass("icons-blue-plus-box"), this.isClickedOutside =
                                                                                                                                   this.collapsed = !0);
                                                                                                                               this.bindClickEvent()
                                                                                                                           },
                                                                                                                           checkIndicatorStatus: function() {
                                                                                                                               if (this.collapsed && !this.IsUserExpanded || this.collapsed && this.IsUserClosed) $(".password-info").slideToggle(), $("#strong-password-info").removeClass("icons-grey-minus-box").addClass("icons-blue-plus-box"), $(".password-info").hide()
                                                                                                                           },
                                                                                                                           hidePasswordIndicator: function() {
                                                                                                                               var a = $("#strong-password-info");
                                                                                                                               a.hasClass("icons-grey-minus-box") && ($(".password-info").slideToggle(), a.removeClass("icons-grey-minus-box").addClass("icons-blue-plus-box"),
                                                                                                                                   $(".password-info").hide())
                                                                                                                           },
                                                                                                                           bindClickEvent: function() {
                                                                                                                               var a = this;
                                                                                                                               $("body").bind("click", function(b) {
                                                                                                                                   $(b.target);
                                                                                                                                   a.isClickedOutside = !1;
                                                                                                                                   $("body").unbind("click")
                                                                                                                               })
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       CardType = Backbone.Model.extend(),
                                                                                                                       CardTypes = Backbone.Collection.extend({
                                                                                                                           url: htz.config.rootContext + "/rest/member/creditcard-list",
                                                                                                                           model: CardType
                                                                                                                       }),
                                                                                                                       CardTypeView = Backbone.View.extend({
                                                                                                                           tagName: "option",
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "render")
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               $(this.el).attr("value", this.model.value).html(this.model.name);
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       CardTypesView = Backbone.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.collection.model.length;
                                                                                                                               for (i = 0; i < a; i++) this.addOne(this.collection.model[i]);
                                                                                                                               _.bindAll(this, "addOne", "addAll")
                                                                                                                           },
                                                                                                                           addOne: function(a) {
                                                                                                                               $(this.el).append((new CardTypeView({
                                                                                                                                   model: a
                                                                                                                               })).render().el)
                                                                                                                           },
                                                                                                                           addAll: function() {
                                                                                                                               this.collection.each(this.addOne)
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       Country = Backbone.Model.extend(),
                                                                                                                       Countries = Backbone.Collection.extend({
                                                                                                                           url: htz.config.rootContext + "/rest/member-drivers-license/country-list",
                                                                                                                           model: Country
                                                                                                                       }),
                                                                                                                       CountryView = Backbone.View.extend({
                                                                                                                           tagName: "option",
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "render")
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               $(this.el).attr("value", this.model.value).html(this.model.name);
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       CountriesView = Backbone.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.collection.model.length;
                                                                                                                               for (i = 0; i < a; i++) this.addOne(this.collection.model[i]);
                                                                                                                               _.bindAll(this, "addOne", "addAll")
                                                                                                                           },
                                                                                                                           addOne: function(a) {
                                                                                                                               $(this.el).append((new CountryView({
                                                                                                                                   model: a
                                                                                                                               })).render().el)
                                                                                                                           },
                                                                                                                           addAll: function() {
                                                                                                                               this.collection.each(this.addOne)
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       FPModel = RestModel.extend({
                                                                                                                           defaults: {},
                                                                                                                           url: htz.config.rootContext +
                                                                                                                               "/member/reset/authentication"
                                                                                                                       }),
                                                                                                                       forgotPasswordView = Backbone.View.extend({
                                                                                                                           defaults: {
                                                                                                                               isRes: !1,
                                                                                                                               isOCI: !1,
                                                                                                                               isResReview: !1,
                                                                                                                               isInLightBox: !1,
                                                                                                                               clearError: !1
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click #fpSubmit": "fpSubmit",
                                                                                                                               "click #forgotPasswordSection input": "memberAuthentication",
                                                                                                                               "change #forgotPasswordSection select": "memberAuthentication",
                                                                                                                               "click .captchaRefresh": "getImage",
                                                                                                                               "click .learnMoreLink": "learnMoreoverlay",
                                                                                                                               "click .bookAsGuest,#bookAsGuest": "bookAsGuestFromFp",
                                                                                                                               "focusout #cardNumber": "maskCC",
                                                                                                                               "focusin #cardNumber": "unMaskCC"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "renderFP", "fpSubmit");
                                                                                                                               this.options.attempts = 0;
                                                                                                                               this.options.limit = 10;
                                                                                                                               this.forgotPasswordTooltip = new LightBox;
                                                                                                                               this.renderFP();
                                                                                                                               this.model.on("fieldError", this.highlight, this)
                                                                                                                           },
                                                                                                                           unMaskCC: function(a) {
                                                                                                                               var b = this;
                                                                                                                               require(["utils/cc-tools"], function(e) {
                                                                                                                                   e.unMaskCC(a, null, b.finalCC)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           maskCC: function(a) {
                                                                                                                               a.stopImmediatePropagation();
                                                                                                                               var b = this;
                                                                                                                               require(["utils/cc-tools"], function(e) {
                                                                                                                                   b.finalCC = e.maskCC(a, b.finalCC);
                                                                                                                                   e.displayLastFourDigits(a, b.finalCC)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderFP: function() {
                                                                                                                               var a =
                                                                                                                                   _.template($("#forgotPasswordTemplate").html(), {});
                                                                                                                               $(this.el).html(a);
                                                                                                                               if (isRes || isOCI || isResReview || isInLightBox)
                                                                                                                                   if ($("#forgotPasswordContainer .sectionWidthSmall").css("width", "auto"), $(".containerTableThickBorder, .containerTableBorder").css("border", "none"), isOCI || isResReview) $(".bookAsGuest").hide(), $("#bookAsGuest").hide();
                                                                                                                               (new Countries).fetch({
                                                                                                                                   success: function(a, e) {
                                                                                                                                       new CountriesView({
                                                                                                                                           el: $("#driversLicenseCountryState"),
                                                                                                                                           collection: e.data
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               });
                                                                                                                               (new CardTypes).fetch({
                                                                                                                                   success: function(a, e) {
                                                                                                                                       new CardTypesView({
                                                                                                                                           el: $("#cardType"),
                                                                                                                                           collection: e.data
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           fpSubmit: function() {
                                                                                                                               var a, b = null;
                                                                                                                               0 < $("#captchaDiv").length && "block" == $("#captchaDiv").css("display").toLowerCase() ? (a = "true", b = grecaptcha.enterprise.getResponse()) : a = "false";
                                                                                                                               var e = this;
                                                                                                                               Loader.showLoader();
                                                                                                                               clearError && this.model.clear();
                                                                                                                               this.model.set({
                                                                                                                                   resetMemberNumber: $("#resetMemberNumber").val(),
                                                                                                                                   authenticationType: $("input:radio[name=authenticationType]:checked").val(),
                                                                                                                                   driversLicense: $("#driversLicense").val(),
                                                                                                                                   driversLicenseCountryState: $("#driversLicenseCountryState").val(),
                                                                                                                                   cardNumber: this.finalCC,
                                                                                                                                   cardType: $("#cardType").val(),
                                                                                                                                   captchaCode: $("#captchaCode").val(),
                                                                                                                                   isCaptchaDisplayed: a,
                                                                                                                                   captchaString: b
                                                                                                                               });
                                                                                                                               this.model.save(this.model.attributes, {
                                                                                                                                   success: function(a, d) {
                                                                                                                                       clearError = !1;
                                                                                                                                       var b = d.resultInfo.result;
                                                                                                                                       if ("success" == b) $.ajax({
                                                                                                                                           url: htz.config.rootContext + d.resultInfo.url + "/overlay",
                                                                                                                                           cache: !1,
                                                                                                                                           beforeSend: function() {},
                                                                                                                                           success: function(a) {
                                                                                                                                               isRes || isOCI || isResReview ? $(".lb-content-box-no-padding").html("").html(a) : $(".sectionWidthSmall").html("").html(a);
                                                                                                                                               a = new resetPwdModel;
                                                                                                                                               new resetPwdView({
                                                                                                                                                   el: "#pinResetSection",
                                                                                                                                                   model: a,
                                                                                                                                                   passwordLevel: ""
                                                                                                                                               })
                                                                                                                                           },
                                                                                                                                           error: function() {}
                                                                                                                                       });
                                                                                                                                       else if ("locked" == b) e.getLockedPage();
                                                                                                                                       else if ("login" == b || "login_platinum" == b) window.location.href = htz.config.rootContext + d.resultInfo.url;
                                                                                                                                       Loader.hideLoader();
                                                                                                                                       $("#captchaCode").val("")
                                                                                                                                   },
                                                                                                                                   error: function(a, b) {
                                                                                                                                       if (b && b.responseText) {
                                                                                                                                           var c = JSON.parse(b.responseText);
                                                                                                                                           c && c.data && (c.data.resetMemberNumber && $("#resetMemberNumber").val(c.data.resetMemberNumber), c.data.driversLicense && $("#driversLicense").val(c.data.driversLicense), c.data.cardNumber && $("#cardNumber").val(c.data.cardNumber))
                                                                                                                                       }
                                                                                                                                       0 <
                                                                                                                                           $("#captchaDiv").length && "block" == $("#captchaDiv").css("display").toLowerCase() ? grecaptcha.enterprise.reset() : (grecaptcha.enterprise.render("captchaDiv", {
                                                                                                                                               sitekey: "6LfyIHggAAAAALoocsT3gRhcyu5VkXrV2--E4Je1"
                                                                                                                                           }), $("#captchaDiv").css("display", "block"));
                                                                                                                                       clearError = !0;
                                                                                                                                       e.model.clear();
                                                                                                                                       a.set({
                                                                                                                                           errorLocation: "#forgotPasswordContainer .error-list"
                                                                                                                                       }, {
                                                                                                                                           silent: !0
                                                                                                                                       });
                                                                                                                                       e.model.trigger("error", a, b);
                                                                                                                                       Loader.hideLoader()
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           getLockedPage: function() {
                                                                                                                               $.ajax({
                                                                                                                                   url: htz.config.rootContext + "/member/locked/overlay",
                                                                                                                                   cache: !1,
                                                                                                                                   beforeSend: function() {},
                                                                                                                                   success: function(a) {
                                                                                                                                       isRes || isOCI || isResReview ? $(".lb-content-box-no-padding").html("").html(a) : $(".sectionWidthSmall").html("").html(a);
                                                                                                                                       new lockedView({
                                                                                                                                           el: "#lockedSection"
                                                                                                                                       })
                                                                                                                                   },
                                                                                                                                   error: function() {}
                                                                                                                               })
                                                                                                                           },
                                                                                                                           memberAuthentication: function(a) {
                                                                                                                               a = $(a.target);
                                                                                                                               $(a).closest(".memberAuthenticationRadioRow").find(".memberAuthenticationRadioInput:eq(0)").prop("checked", !0)
                                                                                                                           },
                                                                                                                           getImage: function() {
                                                                                                                               attempts = this.options.attempts++;
                                                                                                                               limit = this.options.limit;
                                                                                                                               attempts < limit ? $("#memberAuthenticationCaptchaImage").attr("src", $("#memberAuthenticationWebContextRoot").html() +
                                                                                                                                   "/emember/displayCaptcha.do?img=" + (new Date).getTime() + ".jpg") : this.getLockedPage()
                                                                                                                           },
                                                                                                                           learnMoreoverlay: function() {
                                                                                                                               this.forgotPasswordTooltip.isInUse() || this.forgotPasswordTooltip.overlay({
                                                                                                                                   title: this.$("#captcha-tooltip-title").html()
                                                                                                                               }, this.$("#imagedec-content").html())
                                                                                                                           },
                                                                                                                           bookAsGuestFromFp: function(a) {
                                                                                                                               $(a.target).closest(".lb-close").triggerHandler("click");
                                                                                                                               HomePage.bookAsGuestSubmitRes()
                                                                                                                           },
                                                                                                                           highlight: function(a, b) {
                                                                                                                               ErrorHelper.reset();
                                                                                                                               ErrorHelper.displayErrors(b, {
                                                                                                                                   mappings: [{
                                                                                                                                       fields: "resetMemberNumber",
                                                                                                                                       target: "errorresetMemberNumber"
                                                                                                                                   }, {
                                                                                                                                       fields: "driversLicense",
                                                                                                                                       target: "errorDriversLicense"
                                                                                                                                   }, {
                                                                                                                                       fields: "driversLicenseCountryState",
                                                                                                                                       target: "errorDriversLicenseCountryState"
                                                                                                                                   }, {
                                                                                                                                       fields: "cardNumber",
                                                                                                                                       target: "errorCardNumber"
                                                                                                                                   }, {
                                                                                                                                       fields: "cardType",
                                                                                                                                       target: "errorCardType"
                                                                                                                                   }, {
                                                                                                                                       fields: "captchaCode",
                                                                                                                                       target: "errorCaptchaCode"
                                                                                                                                   }, {
                                                                                                                                       fields: "personalAddress1",
                                                                                                                                       target: "errorPersonalAddress1"
                                                                                                                                   }, {
                                                                                                                                       fields: "personalZipCode",
                                                                                                                                       target: "errorPersonalZipCode"
                                                                                                                                   }],
                                                                                                                                   allErrTarget: "#forgotPasswordContainer .error-list"
                                                                                                                               })
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       confMsgView = Backbone.View.extend({
                                                                                                                           events: {
                                                                                                                               "click #close>img": "closeMsg"
                                                                                                                           },
                                                                                                                           initialize: function(a) {
                                                                                                                               this.model = a;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a = _.template($("#confirmation-msg-div").html());
                                                                                                                               $(".loginSectionInnner").before(a(this.model.attributes));
                                                                                                                               "resetError" == this.model.get("confirmationMsgCode") && $("#loginSection").find("#reset-error-list").css("display", "block")
                                                                                                                           },
                                                                                                                           closeMsg: function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               a.target.closest("#confirmationDiv").remove()
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       loginModel = RestModel.extend({
                                                                                                                           defaults: {
                                                                                                                               loggedIn: !1,
                                                                                                                               firstName: "",
                                                                                                                               lastName: "",
                                                                                                                               prefix: "",
                                                                                                                               suffix: "",
                                                                                                                               cookieLaw: htz.config.isCountryinEuropeUnion,
                                                                                                                               memberNumberDisplay: ""
                                                                                                                           },
                                                                                                                           url: htz.config.rootContext + "/member/authentication"
                                                                                                                       });
                                                                                                                   loginView = Backbone.View.extend({
                                                                                                                       defaults: {
                                                                                                                           isRes: !1,
                                                                                                                           isOCI: !1,
                                                                                                                           isResReview: !1,
                                                                                                                           isInLightBox: !1,
                                                                                                                           clearError: !1
                                                                                                                       },
                                                                                                                       events: {
                                                                                                                           "click #loginBtn": "loginSubmit",
                                                                                                                           "click #forgotPasswordLink": "forgotPassword",
                                                                                                                           "click #forgotMemberNumberLink": "forgotMembernumber",
                                                                                                                           "click #bookAsGuest": "bookAsGuest",
                                                                                                                           "click #inPageUserIDTooltipLink": "infoOverlay",
                                                                                                                           "mouseover #loginBtn": "lockBlack",
                                                                                                                           "mouseout #loginBtn": "lockWhite",
                                                                                                                           "touchstart #loginBtn": "lockWhite",
                                                                                                                           "touchend #loginBtn": "lockWhite",
                                                                                                                           "mouseup #loginBtn": "lockWhite",
                                                                                                                           "mousedown #loginBtn": "lockBlack",
                                                                                                                           "click #loginCreate": "loginCreate",
                                                                                                                           "keydown #loginBox ": "onEnterLogin",
                                                                                                                           "click .captchaLearnMoreLink": "learnMoreoverlay",
                                                                                                                           "click .captchaRefresh": "getImage"
                                                                                                                       },
                                                                                                                       initialize: function(a) {
                                                                                                                           _.bindAll(this, "render", "loginSubmit", "createBlocker", "href", "forgotPassword", "forgotMembernumber", "bookAsGuest", "isCookied", "infoOverlay", "loginCreate", "onEnterLogin", "learnMoreoverlay", "getImage");
                                                                                                                           isRes = this.options.isRes;
                                                                                                                           isOCI = this.options.isOCI;
                                                                                                                           isInLightBox = this.options.isInLightBox;
                                                                                                                           isResReview = this.options.isResReview;
                                                                                                                           this.loginTooltip = new LightBox;
                                                                                                                           clearError = !1;
                                                                                                                           this.options.attempts = 0;
                                                                                                                           this.options.limit = 7;
                                                                                                                           this.memberLoginTooltip = new LightBox;
                                                                                                                           handleMemberRes = this.handleMemberRes = a.handleMemberRes;
                                                                                                                           this.isCookied();
                                                                                                                           "phone" === htz.config.deviceGroup && ($(".lb-foreground-cont, .lb-content-box").css("background", "none"), $("header.lb-header").hide());
                                                                                                                           this.model.on("fieldError", this.highlight, this);
                                                                                                                           a = window.location.toString().split("=")[1];
                                                                                                                           if ("reset_locked" == a || "reset_platinum_clublink_locked" == a) new lockedView({
                                                                                                                               el: "#lockedSection"
                                                                                                                           });
                                                                                                                           else if ("reset_question" == a || "reset_platinum_clublink_question" == a) new forgotPasswordView({
                                                                                                                               el: "#forgotPasswordContainer",
                                                                                                                               model: new FPModel,
                                                                                                                               limit: 10,
                                                                                                                               attempts: 0
                                                                                                                           });
                                                                                                                           else if ("input" === a || "login" === a) Utils.isUseStoragePolyfill() ? this.showErrorsFromSession(!1, !1, !0) : htz.helpers.SessionHelper.getItem("errorData") && this.showErrorsFromSession(!1, !1, !0)
                                                                                                                       },
                                                                                                                       onEnterLogin: function(a) {
                                                                                                                           target = a.keyCode;
                                                                                                                           13 == target && (a.preventDefault(), $("#loginBtn").trigger("click"))
                                                                                                                       },
                                                                                                                       lockWhite: function() {
                                                                                                                           $("#loginBtn span").addClass("icons-white_lock").removeClass("icons-lock")
                                                                                                                       },
                                                                                                                       lockBlack: function() {
                                                                                                                           $("#loginBtn span").removeClass("icons-white_lock").addClass("icons-lock")
                                                                                                                       },
                                                                                                                       isCookied: function() {
                                                                                                                           var a = this;
                                                                                                                           $.ajax({
                                                                                                                               url: htz.config.rootContext + "/member/top/navigation",
                                                                                                                               dataType: "json",
                                                                                                                               cache: !1,
                                                                                                                               contentType: "application/json",
                                                                                                                               beforeSend: function() {},
                                                                                                                               success: function(b) {
                                                                                                                                   a.model.set({
                                                                                                                                       prefix: b.data.prefix,
                                                                                                                                       firstName: b.data.firstName,
                                                                                                                                       lastName: b.data.lastName,
                                                                                                                                       suffix: b.data.suffix,
                                                                                                                                       loggedIn: b.data.loggedIn,
                                                                                                                                       memberNumberDisplay: b.data.memberNumberDisplay,
                                                                                                                                       displayConfirmationMsg: b.data.displayConfirmationMsg,
                                                                                                                                       confirmationMsgCode: b.data.confirmationMsgCode,
                                                                                                                                       email: b.data.email,
                                                                                                                                       errorMessage: b.data.errMsg
                                                                                                                                   });
                                                                                                                                   isUserCookied = "" != b.data.lastName && "undefined" != typeof b.data.lastName ? !0 : !1;
                                                                                                                                   a.render()
                                                                                                                               },
                                                                                                                               error: function() {}
                                                                                                                           })
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           $("#homePageloginTemplate").length && (this.template = _.template($("#homePageloginTemplate").html()), $(this.el).html(this.template(this.model.attributes)), !0 == this.model.get("displayConfirmationMsg") && (new confMsgView(this.model), $("#close>img").on("click", function(a) {
                                                                                                                               a.stopPropagation();
                                                                                                                               a.target.closest("#confirmationDiv").remove()
                                                                                                                           })));
                                                                                                                           isUserCookied && ("tablet" == htz.config.deviceGroup || "desktop" == htz.config.deviceGroup || "all" == htz.config.deviceGroup) && $(".loginBoxColumn1").css("float", "none");
                                                                                                                           0 < $.trim(this.model.get("memberNumberDisplay")).length && $("#loginId").val(this.model.get("memberNumberDisplay"));
                                                                                                                           isRes ? $("#bookAsGuest").show() : $("#bookAsGuest").hide();
                                                                                                                           document.cookie && $(".rememberMe").removeClass("mobileHide")
                                                                                                                       },
                                                                                                                       getImage: function() {
                                                                                                                           attempts = this.options.attempts++;
                                                                                                                           limit = this.options.limit;
                                                                                                                           attempts < limit ? $("#memberAuthenticationCaptchaImage").attr("src", htz.config.protocol + "://" + htz.config.startURL + htz.config.rootContext + "/emember/displayCaptcha.do?img=" + (new Date).getTime() + ".jpg") : this.getLockedPage()
                                                                                                                       },
                                                                                                                       learnMoreoverlay: function() {
                                                                                                                           this.memberLoginTooltip.isInUse() || this.memberLoginTooltip.overlay({
                                                                                                                               title: this.$("#captcha-tooltip-title").html()
                                                                                                                           }, this.$("#imagedec-content").html())
                                                                                                                       },
                                                                                                                       isLINK: function() {
                                                                                                                           return -1 < window.location.href.indexOf("/rentacar/link/clear/about")
                                                                                                                       },
                                                                                                                       loginSubmit: function() {
                                                                                                                           var a =
                                                                                                                               null,
                                                                                                                               b;
                                                                                                                           0 < $("#showCaptcha").length && "block" == $("#showCaptcha").css("display").toLowerCase() ? (b = "true", a = grecaptcha.enterprise.getResponse()) : b = "false";
                                                                                                                           var e = this;
                                                                                                                           Utils.clearReservationSession();
                                                                                                                           Loader.showLoader();
                                                                                                                           clearError && this.model.clear();
                                                                                                                           this.model.attributes.lastName ? (this.model.clear(), this.model.set({
                                                                                                                               cookieMemberOnLogin: !0,
                                                                                                                               loginId: "cookie",
                                                                                                                               password: $("#password").val(),
                                                                                                                               loginForgotPassword: $("#loginForgotPassword").val(),
                                                                                                                               isCaptchaDisplayed: b
                                                                                                                           })) : (this.model.clear(), $("#cookieMemberOnLoginInPage").is(":hidden") ?
                                                                                                                               this.model.set({
                                                                                                                                   loginCreateUserID: $("#loginCreateUserID").val(),
                                                                                                                                   enteredcaptcha: a,
                                                                                                                                   loginId: $("#loginId").val(),
                                                                                                                                   password: $("#password").val(),
                                                                                                                                   cookieMemberOnLogin: !1,
                                                                                                                                   loginForgotPassword: $("#loginForgotPassword").val(),
                                                                                                                                   isLINK: this.isLINK(),
                                                                                                                                   isCaptchaDisplayed: b
                                                                                                                               }) : this.model.set({
                                                                                                                                   loginCreateUserID: $("#loginCreateUserID").val(),
                                                                                                                                   enteredcaptcha: a,
                                                                                                                                   loginId: $("#loginId").val(),
                                                                                                                                   password: $("#password").val(),
                                                                                                                                   cookieMemberOnLogin: $("#cookieMemberOnLoginInPage").is(":checked"),
                                                                                                                                   loginForgotPassword: $("#loginForgotPassword").val(),
                                                                                                                                   isLINK: this.isLINK(),
                                                                                                                                   isCaptchaDisplayed: b
                                                                                                                               }));
                                                                                                                           this.model.save(this.model.attributes, {
                                                                                                                               success: function(a, b) {
                                                                                                                                   var c = b.resultInfo.result;
                                                                                                                                   clearError = !1;
                                                                                                                                   window.dataLayer = window.dataLayer || [];
                                                                                                                                   window.dataLayer.push({
                                                                                                                                       event: "login"
                                                                                                                                   });
                                                                                                                                   if ("reset_locked" == c || "reset_platinum_clublink_question" == c || "reset_platinum_clublink_locked" == c || "session_locked" == c) $.ajax({
                                                                                                                                       url: htz.config.rootContext + b.resultInfo.url + "/overlay",
                                                                                                                                       cache: !1,
                                                                                                                                       beforeSend: function() {},
                                                                                                                                       success: function(a) {
                                                                                                                                           isRes || isOCI || isResReview || isInLightBox ? $(".lb-content-box-no-padding").html("").html(a) :
                                                                                                                                               $("#loginSection").html("").html(a);
                                                                                                                                           if ("reset_question" == c || "reset_platinum_clublink_question" == c) FPm = new FPModel, new forgotPasswordView({
                                                                                                                                               el: "#forgotPasswordContainer",
                                                                                                                                               model: FPm,
                                                                                                                                               limit: 10,
                                                                                                                                               attempts: 0
                                                                                                                                           }), Loader.hideLoader();
                                                                                                                                           if ("reset_locked" == c || "reset_platinum_clublink_locked" == c || "session_locked" == c) new lockedView({
                                                                                                                                               el: "#lockedSection"
                                                                                                                                           }), Loader.hideLoader()
                                                                                                                                       },
                                                                                                                                       error: function() {}
                                                                                                                                   }), Loader.hideLoader();
                                                                                                                                   else if ("reset_question" == c) window.location.href = htz.config.protocol + "://" + htz.config.startURL + htz.config.rootContext +
                                                                                                                                       b.resultInfo.url;
                                                                                                                                   else if ("request_success" == c) window.location.href = htz.config.protocol + "://" + htz.config.startURL + htz.config.rootContext + "/member/reset-confirmation";
                                                                                                                                   else if ("phone" == htz.config.deviceGroup)
                                                                                                                                       if ("success_econsent_required" == c || "success_to_profile" == c || "success_to_erenewal" == c || "login_sms_failed" == c || "success" == c || "success_to_upgrade" == c)
                                                                                                                                           if (isRes) HomePage.bookAsMemberSubmitRes(b.data.firstName);
                                                                                                                                           else if (isOCI) window.location.reload();
                                                                                                                                   else if (isResReview) {
                                                                                                                                       var g = e.handleMemberRes || handleMemberRes;
                                                                                                                                       g && "function" === typeof g ? g() : window.location.href = htz.config.rootContext + b.resultInfo.url
                                                                                                                                   } else window.location.href = -1 < b.resultInfo.url.indexOf("/rentacar/") ? b.resultInfo.url : htz.config.rootContext + b.resultInfo.url;
                                                                                                                                   else window.location.href = htz.config.rootContext + b.resultInfo.url;
                                                                                                                                   else "success" == c && (isRes || isOCI || isResReview) ? (memNavloginModel = new sdlLoginModel, memNavloginView = new sdlLoginView({
                                                                                                                                           el: "header",
                                                                                                                                           model: memNavloginModel
                                                                                                                                       }), isRes ? HomePage.bookAsMemberSubmitRes(b.data.firstName) : isResReview ?
                                                                                                                                       (g = e.handleMemberRes || handleMemberRes) && "function" === typeof g ? g() : window.location.href = htz.config.rootContext + "/reservation/" : window.location.reload()) : window.location.href = -1 != b.resultInfo.url.indexOf(htz.config.rootContext) ? b.resultInfo.url : htz.config.rootContext + b.resultInfo.url
                                                                                                                               },
                                                                                                                               error: function(a, b) {
                                                                                                                                   JSON.parse(b.responseText);
                                                                                                                                   clearError = !0;
                                                                                                                                   e.model.clear();
                                                                                                                                   if (isUserCookied) e.showErrorsFromSession(a, b, !1);
                                                                                                                                   else {
                                                                                                                                       var c = $("#ca").val();
                                                                                                                                       sessionStorage.setItem("captchaOn", !0);
                                                                                                                                       a.set({
                                                                                                                                           errorLocation: "#homePageloginBox .error-list"
                                                                                                                                       }, {
                                                                                                                                           silent: !0
                                                                                                                                       });
                                                                                                                                       e.model.trigger("error", a, b);
                                                                                                                                       c && $(".captchaRefresh").eq(0).trigger("click")
                                                                                                                                   }
                                                                                                                                   0 < $("#showCaptcha").length && "block" == $("#showCaptcha").css("display").toLowerCase() ? grecaptcha.enterprise.reset() : (grecaptcha.enterprise.render("showCaptcha", {
                                                                                                                                       sitekey: "6LfyIHggAAAAALoocsT3gRhcyu5VkXrV2--E4Je1"
                                                                                                                                   }), $("#showCaptcha").css("display", "block"));
                                                                                                                                   $("#loginId").val("");
                                                                                                                                   $("#password").val("");
                                                                                                                                   $("#captchaSwitchOn").val(!0);
                                                                                                                                   Loader.hideLoader()
                                                                                                                               }
                                                                                                                           })
                                                                                                                       },
                                                                                                                       showErrorsFromSession: function(a, b, e) {
                                                                                                                           var f = "",
                                                                                                                               d = "";
                                                                                                                           e || (b = $.parseJSON(b.responseText).message,
                                                                                                                               Utils.isUseStoragePolyfill() ? Utils.storeItemIE("ieLoginError", b) : (b = JSON.stringify(b), htz.helpers.SessionHelper.setItem("errorData", b)), this.initialize(a));
                                                                                                                           loadLogin = function() {
                                                                                                                               if (0 < $("#loginId").length) {
                                                                                                                                   if (Utils.isUseStoragePolyfill()) $.ajax({
                                                                                                                                       url: htz.config.rootContext + "/rest/home/retrieve-ie/ieLoginError",
                                                                                                                                       cache: !1,
                                                                                                                                       type: "POST",
                                                                                                                                       beforeSend: function() {},
                                                                                                                                       success: function(a, b, c) {
                                                                                                                                           d = $.parseJSON(c.responseText);
                                                                                                                                           if (null != d && "" != d) {
                                                                                                                                               if (d.fieldErrors && "undefined" !== typeof d.fieldErrors)
                                                                                                                                                   for (i = 0; i < d.fieldErrors.length; i++) f +=
                                                                                                                                                       "<li>" + d.fieldErrors[i][1] + "</li>";
                                                                                                                                               if (d.systemErrors && "undefined" !== typeof d.systemErrors && "" != d)
                                                                                                                                                   for (j = 0; j < d.systemErrors.length; j++) f += "<li>" + d.systemErrors[j] + "</li>";
                                                                                                                                               $("<ul></ul>").append(f).appendTo(".error-list");
                                                                                                                                               $("#homePageloginBox .error-list").show()
                                                                                                                                           }
                                                                                                                                       },
                                                                                                                                       error: function() {}
                                                                                                                                   }), Utils.removeItemIE("ieLoginError");
                                                                                                                                   else {
                                                                                                                                       var a = htz.helpers.SessionHelper.getItem("errorData");
                                                                                                                                       d = JSON.parse(a);
                                                                                                                                       if (null != d && "" != d) {
                                                                                                                                           if (d.fieldErrors && "undefined" !== typeof d.fieldErrors)
                                                                                                                                               for (i = 0; i < d.fieldErrors.length; i++) f +=
                                                                                                                                                   "<li>" + d.fieldErrors[i][1] + "</li>";
                                                                                                                                           if (d.systemErrors && "undefined" !== typeof d.systemErrors && "" != d)
                                                                                                                                               for (j = 0; j < d.systemErrors.length; j++) f += "<li>" + d.systemErrors[j] + "</li>";
                                                                                                                                           $("<ul></ul>").append(f).appendTo(".error-list");
                                                                                                                                           $("#homePageloginBox .error-list").show();
                                                                                                                                           htz.helpers.SessionHelper.removeItem("errorData")
                                                                                                                                       }
                                                                                                                                   }
                                                                                                                                   clearInterval(c)
                                                                                                                               }
                                                                                                                           };
                                                                                                                           var c = setInterval(loadLogin, 100)
                                                                                                                       },
                                                                                                                       bookAsGuest: function(a) {
                                                                                                                           $(a.target).closest(".lb-close").triggerHandler("click");
                                                                                                                           $("#redeem").prop("checked", !1);
                                                                                                                           this.options.metaModel.set({
                                                                                                                               isRedeemPoints: !1
                                                                                                                           });
                                                                                                                           HomePage.bookAsGuestSubmitRes()
                                                                                                                       },
                                                                                                                       createBlocker: function(a) {
                                                                                                                           a = $(a).trigger("blur");
                                                                                                                           $("<div></div>").addClass("formSubmitterOverlay").css({
                                                                                                                               width: a.outerWidth() + 25,
                                                                                                                               height: a.outerHeight() + 10,
                                                                                                                               top: a.offset().top - 5,
                                                                                                                               left: a.offset().left - 10
                                                                                                                           }).appendTo("body")
                                                                                                                       },
                                                                                                                       href: function(a, b) {
                                                                                                                           this.createBlocker(a);
                                                                                                                           location.href = b
                                                                                                                       },
                                                                                                                       loginCreate: function() {
                                                                                                                           $("#loginCreateUserID").val("true");
                                                                                                                           this.loginSubmit()
                                                                                                                       },
                                                                                                                       forgotPassword: function() {
                                                                                                                           Loader.showLoader();
                                                                                                                           clearError && (clearError = !1, this.model.clear());
                                                                                                                           $("#loginForgotPassword").val("forgotPassword");
                                                                                                                           this.loginSubmit()
                                                                                                                       },
                                                                                                                       forgotMembernumber: function(a) {
                                                                                                                           this.createBlocker($(a.target));
                                                                                                                           this.href($(a.target), htz.config.rootContext + "/emember/reset/memberNumberRetrieval.do")
                                                                                                                       },
                                                                                                                       infoOverlay: function() {
                                                                                                                           this.loginTooltip.isInUse() || this.loginTooltip.overlay({
                                                                                                                               title: this.$("#userIdTitleContent").html()
                                                                                                                           }, this.$("#inPage-useridInfo").html())
                                                                                                                       },
                                                                                                                       highlight: function(a, b) {
                                                                                                                           ErrorHelper.reset();
                                                                                                                           ErrorHelper.displayErrors(b, {
                                                                                                                               mappings: [{
                                                                                                                                   fields: "loginId",
                                                                                                                                   target: "errorLoginId"
                                                                                                                               }, {
                                                                                                                                   fields: "password",
                                                                                                                                   target: "errorPassword"
                                                                                                                               }, {
                                                                                                                                   fields: "captchaCode",
                                                                                                                                   target: "errorCaptchaCode"
                                                                                                                               }],
                                                                                                                               allErrTarget: "#homePageloginBox .error-list"
                                                                                                                           })
                                                                                                                       }
                                                                                                                   });
                                                                                                                   var warningView = Backbone.View.extend({
                                                                                                                           el: "#loginSection",
                                                                                                                           events: {
                                                                                                                               "click button#warningButton": "hideMe"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "render", "hideMe");
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               memNavloginModel = new sdlLoginModel;
                                                                                                                               memNavloginView = new sdlLoginView({
                                                                                                                                   el: "header",
                                                                                                                                   model: memNavloginModel
                                                                                                                               });
                                                                                                                               $("#navLogin").hide();
                                                                                                                               $("#navLogout").css("display", "block");
                                                                                                                               var a = _.template($("#warningMessageTemplate").html(), {});
                                                                                                                               Loader.hideLoader();
                                                                                                                               $(this.el).html(a)
                                                                                                                           },
                                                                                                                           hideMe: function() {
                                                                                                                               Loader.showLoader();
                                                                                                                               window.location.href =
                                                                                                                                   htz.config.rootContext + "/reservation/"
                                                                                                                           }
                                                                                                                       }),
                                                                                                                       lockedView = Backbone.View.extend({
                                                                                                                           events: {
                                                                                                                               "click #forgotPassword": "gotoForgotPassword",
                                                                                                                               "click .bookAsGuest, #bookAsGuest": "bookAsGuestFromlockPage"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               _.bindAll(this, "render", "gotoForgotPassword");
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a = _.template($("#lockedSectionTemplate").html(), {});
                                                                                                                               $(this.el).html(a);
                                                                                                                               if (isRes || isOCI || isResReview) {
                                                                                                                                   if ($("#lockedSection").css("width", "auto"), $(".containerTableThickBorder, .containerTableBorder").css("border",
                                                                                                                                           "none"), $("#bookAsGuest").show(), isOCI || isResReview) $(".bookAsGuest").hide(), $("#bookAsGuest").hide()
                                                                                                                               } else $("#bookAsGuest").hide()
                                                                                                                           },
                                                                                                                           bookAsGuestFromlockPage: function(a) {
                                                                                                                               $(a.target).closest(".lb-close").triggerHandler("click");
                                                                                                                               HomePage.bookAsGuestSubmitRes()
                                                                                                                           },
                                                                                                                           gotoForgotPassword: function() {
                                                                                                                               Loader.hideLoader();
                                                                                                                               window.location.href = htz.config.protocol + "://" + htz.config.startURL + htz.config.rootContext + "/member/password-reset-request"
                                                                                                                           }
                                                                                                                       });


                                                                                                                   window.checkHertzNameSpace("htz.integrated.footer.model");
                                                                                                                   htz.integrated.footer.model.FooterModel = RestModel.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.constructor.__super__.initialize.apply(this, arguments)
                                                                                                                       },
                                                                                                                       defaults: {
                                                                                                                           taLoggedIn: !1,
                                                                                                                           isDisplayExternalFooter: !1,
                                                                                                                           isIncludeExternalFooter: !1,
                                                                                                                           isIncludeHertzLinkFooter: !1,
                                                                                                                           externalFooterHeight: 0,
                                                                                                                           footerContentHTML: "",
                                                                                                                           twitterUserInfo: {
                                                                                                                               followersCount: ""
                                                                                                                           },
                                                                                                                           footerContent: {
                                                                                                                               "footer.footerHide": "",
                                                                                                                               "footer.copyRightLine": "",
                                                                                                                               "footer.mobFooter.footerHide": "",
                                                                                                                               "footer.mobFooter.head": [{
                                                                                                                                   sublinks: [{
                                                                                                                                       footerLinks: "",
                                                                                                                                       footerUrl: ""
                                                                                                                                   }],
                                                                                                                                   footerHeader: ""
                                                                                                                               }],
                                                                                                                               "footer.mobFooter.footerMore": "",
                                                                                                                               "footer.column": [{
                                                                                                                                   link: [{
                                                                                                                                       link: [{
                                                                                                                                           url: "",
                                                                                                                                           label: ""
                                                                                                                                       }],
                                                                                                                                       header: ""
                                                                                                                                   }]
                                                                                                                               }],
                                                                                                                               "footer.footerMore": "",
                                                                                                                               "footer.mobSite": ""
                                                                                                                           },
                                                                                                                           seoPageFooter: "",
                                                                                                                           seoPageTitle: ""
                                                                                                                       },
                                                                                                                       url: htz.config.partnerId ? htz.config.rootContext + "/rest/footer/pos/" + htz.config.pos + "/dialect/" + htz.config.dialect + "/id/" + htz.config.partnerId + "?systemId=" + htz.config.systemId + "&subSystemId=" + htz.config.subSystemId : htz.config.rootContext + "/rest/footer/pos/" + htz.config.pos + "/dialect/" + htz.config.dialect + "?systemId=" + htz.config.systemId +
                                                                                                                           "&subSystemId=" + htz.config.subSystemId
                                                                                                                   });
                                                                                                                   window.checkHertzNameSpace("htz.integrated.footer.views");
                                                                                                                   htz.integrated.footer.views.FooterView = Backbone.View.extend({
                                                                                                                       el: "#footer-container",
                                                                                                                       events: {
                                                                                                                           "click #bttnClick": "clickRevokeBttn",
                                                                                                                           "click #title-links .tab": "tabToggleLinks",
                                                                                                                           "click #mob-links .tab": "mobToggleLinks",
                                                                                                                           "click #social-bar button": "emailSignUpButton",
                                                                                                                           "focus #social-email": "emailSignUpFocus",
                                                                                                                           "blur #social-email": "emailSignUpBlur",
                                                                                                                           "keydown #social-email": "emailSignUpKeyPress",
                                                                                                                           "click #social-bar>ul>li": "trackSocial"
                                                                                                                       },
                                                                                                                       tabToggleLinks: function(a) {
                                                                                                                           if ($(a.target) !== $(".tab")) {
                                                                                                                               $(a.target).closest(".tab").toggleClass("highlight");
                                                                                                                               $(a.target).closest(".tab").siblings("dl").slideToggle("1000");
                                                                                                                               var b = $(a.currentTarget).hasClass("highlight");
                                                                                                                               992 > $(window).width() && ($(a.target).hasClass("icons-ft_arrow_down") || b) && $(a.target).parent().closest("div").siblings("ul").css({
                                                                                                                                   display: "contents"
                                                                                                                               });
                                                                                                                               ($(a.target).hasClass("icons-ft_arrow_up") || !b) && $(a.target).parent().closest("div").siblings("ul").css({
                                                                                                                                   display: "none"
                                                                                                                               })
                                                                                                                           } else $(a.target).toggleClass("highlight"), $(a.target).siblings("dl").slideToggle("1000");
                                                                                                                           return !1
                                                                                                                       },
                                                                                                                       mobToggleLinks: function(a) {
                                                                                                                           $(a.target) !=
                                                                                                                               $(".tab") ? ($(a.target).closest(".tab").toggleClass("highlight"), $(a.target).closest(".tab").siblings("dl").slideToggle("1000")) : ($(a.target).toggleClass("highlight"), $(a.target).siblings("dl").slideToggle("1000"));
                                                                                                                           return !1
                                                                                                                       },
                                                                                                                       trackSocial: function(a) {
                                                                                                                           a = $(a.currentTarget).find("img").attr("alt");
                                                                                                                           window.dataLayer = window.dataLayer || [];
                                                                                                                           window.dataLayer.push({
                                                                                                                               event: "select_social",
                                                                                                                               social_network: a
                                                                                                                           })
                                                                                                                       },
                                                                                                                       emailSignUpButton: function() {
                                                                                                                           var a, b;
                                                                                                                           a = htz.config.dialect;
                                                                                                                           b = $.trim($("#social-email").val());
                                                                                                                           b == HStorage.getItem("signUpVal",
                                                                                                                               "s") && (b = "");
                                                                                                                           a = "//email.hertz.com/apps/JoinMarketing?lang=" + a.substring(0, 2) + "&pos=" + htz.config.pos + ("" !== b ? "&email=" + b : b);
                                                                                                                           $("#social-bar form").attr("target", "_blank");
                                                                                                                           $("#social-bar form").attr("method", "POST");
                                                                                                                           $("#social-bar form").attr("action", a);
                                                                                                                           $("#social-bar form").trigger("submit");
                                                                                                                           window.dataLayer = window.dataLayer || [];
                                                                                                                           window.dataLayer.push({
                                                                                                                               event: "email_signup",
                                                                                                                               notification_signup_location: "footer"
                                                                                                                           });
                                                                                                                           return !1
                                                                                                                       },
                                                                                                                       clickRevokeBttn: function() {
                                                                                                                           $("#bttn-revoke").trigger("click")
                                                                                                                       },
                                                                                                                       emailSignUpFocus: function() {
                                                                                                                           $("#social-email").addClass("highlight");
                                                                                                                           $("#social-email").val("")
                                                                                                                       },
                                                                                                                       emailSignUpBlur: function() {
                                                                                                                           "" == $("#social-email").val() && ($("#social-email").removeClass("highlight"), $("#social-email").val(HStorage.getItem("signUpVal", "s")))
                                                                                                                       },
                                                                                                                       emailSignUpKeyPress: function(a) {
                                                                                                                           if (13 === a.keyCode) {
                                                                                                                               var b, a = htz.config.dialect;
                                                                                                                               b = $.trim($("#social-email").val());
                                                                                                                               b == HStorage.getItem("signUpVal", "s") && (b = "");
                                                                                                                               a = "//email.hertz.com/apps/JoinMarketing?lang=" + a.substring(0, 2) + "&pos=" + htz.config.pos + ("" !== b ? "&email=" + b : b);
                                                                                                                               $("#social-bar form").attr("target", "_blank");
                                                                                                                               $("#social-bar form").attr("method", "POST");
                                                                                                                               $("#social-bar form").attr("action", a);
                                                                                                                               $("#social-bar form").submit();
                                                                                                                               return !1
                                                                                                                           }
                                                                                                                       },
                                                                                                                       resizeDocument: function() {
                                                                                                                           $(window).on("resize", function() {
                                                                                                                               var a = $("#container").width();
                                                                                                                               992 <= a && ($("#title-links dl").show(), $("#title-links .tab").addClass("highlight"), $("#title-links").find("ul").find("ul").css({
                                                                                                                                   display: "contents"
                                                                                                                               }));
                                                                                                                               600 <= a && 992 > a && ($("#title-links dl").hide(), $("#title-links .tab").removeClass("highlight"), $("#title-links").find("ul").find("ul").css({
                                                                                                                                   display: "none"
                                                                                                                               }));
                                                                                                                               600 > a && ($("#title-links").find("ul").find("ul").css({
                                                                                                                                   display: "none"
                                                                                                                               }), $("#title-links .tab").removeClass("highlight"))
                                                                                                                           })
                                                                                                                       },
                                                                                                                       initialize: function() {
                                                                                                                           this.template = this.options.template;
                                                                                                                           this.data = this.options.model;
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           var a = this;
                                                                                                                           "IRAC" === htz.config.subSystemId && (a.footerContentView = new htz.integrated.footer.views.FooterContentView({
                                                                                                                                   el: "#footer-container",
                                                                                                                                   template: "#footer-tpl",
                                                                                                                                   data: a.data.get("footerContentHTML")
                                                                                                                               }), HStorage.setItem("signUpVal", $("#social-email").val(), "", "s"),
                                                                                                                               $("#bottom-links li:last-child").addClass("no-pipe"), $("#title-links span.coln:last-child").append($('<div id="feedback-footer-container" class="parsys"><ul></ul></div>')), a.intervalId = setInterval(function() {
                                                                                                                                   var b = $("#feedback-tab");
                                                                                                                                   0 < b.length && (clearInterval(a.intervalId), $("#feedback-footer-container ul").append(b.html()))
                                                                                                                               }, 1E3), a.resizeDocument());
                                                                                                                           if ("RYANAIR" === htz.config.subSystemId) {
                                                                                                                               var b = this.data.get("footerContent");
                                                                                                                               a.footerDesktopView = new htz.integrated.footer.views.FooterDesktopView({
                                                                                                                                   el: "#title-links",
                                                                                                                                   template: "#desk-tpl",
                                                                                                                                   data: b["footer.column"],
                                                                                                                                   more: b["footer.footerMore"],
                                                                                                                                   hide: b["footer.footerHide"]
                                                                                                                               });
                                                                                                                               a.footerMobileView = new htz.integrated.footer.views.FooterMobileView({
                                                                                                                                   el: "#mob-links",
                                                                                                                                   template: "#mob-tpl",
                                                                                                                                   data: b["footer.mobFooter.head"],
                                                                                                                                   more: b["footer.mobFooter.footerMore"],
                                                                                                                                   hide: b["footer.mobFooter.footerHide"]
                                                                                                                               });
                                                                                                                               a.footerCopyrightView = new htz.integrated.footer.views.FooterCopyrightView({
                                                                                                                                   el: "#copyright-content",
                                                                                                                                   template: "#copyright-tpl",
                                                                                                                                   copyright: b["footer.copyRightLine"]
                                                                                                                               });
                                                                                                                               a.footerSeoView = new htz.integrated.footer.views.FooterSeoView({
                                                                                                                                   el: "#mixed-content",
                                                                                                                                   template: "#mixed-tpl",
                                                                                                                                   data: a.data.attributes.data
                                                                                                                               })
                                                                                                                           }
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.FooterContentView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       iconMouseEnter: function() {
                                                                                                                           this.src = this.src.replace("origin", "hover")
                                                                                                                       },
                                                                                                                       iconMouseLeave: function() {
                                                                                                                           this.src = this.src.replace("hover", "origin")
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           try {
                                                                                                                               this.$el.append(_.template($(this.options.template).html(), {
                                                                                                                                   footerContent: this.options.data
                                                                                                                               }))
                                                                                                                           } catch (a) {}
                                                                                                                           var b = $("#social-bar li img");
                                                                                                                           "reservationOnHomepage.jsp" !== htz.config.legacyPage && $("#footer-container #seo-content").empty().hide();
                                                                                                                           b.length && (b.on("mouseenter", this.iconMouseEnter), b.on("mouseleave", this.iconMouseLeave));
                                                                                                                           if ("" != htz.config.securitiId && ("IRAC" == htz.config.systemId && !htz.config.isApp && null != htz.config.securitiId && "null" != htz.config.securitiId) && 0 < $("#copyright-content").length) {
                                                                                                                               var b = $("#copyright-content").find(".address span:first").find("> a:last").attr("data-dcs-inspected"),
                                                                                                                                   c = $("#copyright-content").find(".address span:first").find("> a:last").attr("href");
                                                                                                                               "undefined" == b && -1 < c.indexOf("undefined") && ($("#copyright-content").find(".address span:first").find("> a:last").attr("id",
                                                                                                                                   "bttnClick"), $("#copyright-content").find(".address span:first").find("> a:last").removeAttr("href data-dcs-inspected"))
                                                                                                                           }
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.FooterDesktopView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           this.$el.append(_.template($(this.options.template).html(), {
                                                                                                                               deskList: this.options.data,
                                                                                                                               more: this.options.more,
                                                                                                                               hide: this.options.hide
                                                                                                                           }));
                                                                                                                           var a = $("#title-links a"),
                                                                                                                               b = this;
                                                                                                                           a.each(function(c) {
                                                                                                                               -1 != $(a).eq(c).attr("href").search("lightBox") || -1 != $(a).eq(c).attr("href").search("openPopup") ? (b.$el.find(a).eq(c).attr("name", $(a).eq(c).attr("href")), b.$el.find(a).eq(c).attr("href", "javascript: void(0);")) :
                                                                                                                                   (-1 != $(a).eq(c).attr("href").search("legalView.jsp") || -1 != $(a).eq(c).attr("href").search("privacyPolicyView.jsp")) && b.$el.find(a).eq(c).attr("target", "_blank")
                                                                                                                           });
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.FooterMobileView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           this.$el.append(_.template($(this.options.template).html(), {
                                                                                                                               mobList: this.options.data,
                                                                                                                               more: this.options.more,
                                                                                                                               hide: this.options.hide
                                                                                                                           }));
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.FooterCopyrightView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           this.$el.append(_.template($(this.options.template).html(), {
                                                                                                                               copyright: this.options.copyright
                                                                                                                           }));
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.FooterSeoView = Backbone.View.extend({
                                                                                                                       initialize: function() {
                                                                                                                           this.render()
                                                                                                                       },
                                                                                                                       render: function() {
                                                                                                                           this.$el.append(_.template($(this.options.template).html(), {
                                                                                                                               data: this.options.data
                                                                                                                           }));
                                                                                                                           return this
                                                                                                                       }
                                                                                                                   });
                                                                                                                   htz.integrated.footer.views.footerUtilityView = Backbone.View.extend({
                                                                                                                       el: "#footer-container",
                                                                                                                       initialize: function() {
                                                                                                                           this.template = this.options.template
                                                                                                                       },
                                                                                                                       openLightBox: function(a, b) {
                                                                                                                           lbFooter = new LightBox;
                                                                                                                           lbFooter.overlay({
                                                                                                                               width: 600,
                                                                                                                               url: a,
                                                                                                                               title: b,
                                                                                                                               center: !0
                                                                                                                           })
                                                                                                                       },
                                                                                                                       openPopUp: function(a, b) {
                                                                                                                           wo = window.open(a, b, "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=480,height=440,left=" + (window.screen.width / 2 - 240));
                                                                                                                           wo.focus()
                                                                                                                       }
                                                                                                                   });
                                                                                                                   Footer = new htz.integrated.footer.views.footerUtilityView;
                                                                                                                   window.checkHertzNameSpace("htz.integrated.footer.controller");
                                                                                                                   htz.integrated.footer.controller.FooterController = function() {
                                                                                                                       return {
                                                                                                                           showFooterPage: function() {
                                                                                                                               var b = $.Deferred(),
                                                                                                                                   c = new htz.integrated.footer.model.FooterModel;
                                                                                                                               c.fetch({
                                                                                                                                   cache: !1,
                                                                                                                                   dataType: "json",
                                                                                                                                   success: function(a) {
                                                                                                                                       b.resolve(a)
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       new htz.integrated.footer.views.FooterView({
                                                                                                                                           model: c
                                                                                                                                       })
                                                                                                                                   }
                                                                                                                               });
                                                                                                                               $.when(b).done(function(a) {
                                                                                                                                   new htz.integrated.footer.views.FooterView({
                                                                                                                                       model: a
                                                                                                                                   });
                                                                                                                                   !1 == htz.config.digitalWalletFooter.displayMasterpassLogo && $('img[title="masterpass"]').css({
                                                                                                                                       display: "none"
                                                                                                                                   });
                                                                                                                                   !0 == htz.config.hideSocialMediaLinks &&
                                                                                                                                       ($("#tweet-count").remove(), $("#fb-count").remove(), $("$gplus-count").remove())
                                                                                                                               })
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();


                                                                                                                   var Slider = function() {
                                                                                                                       function h() {
                                                                                                                           if ($(window).width() > k) {
                                                                                                                               l.find(".pagination-prev, .pagination-next").hide();
                                                                                                                               for (var a = 0; a < b.length; a++) b[a].pageCont.show()
                                                                                                                           } else if (!(0 > g || g > b.length - 1))
                                                                                                                               for (a = 0; a < b.length; a++) a == g ? (b[a].pageCont.show(), b[a].pageCont.find(".pagination-prev, .pagination-next").show(), window.scrollTo(0, 0)) : b[a].pageCont.hide()
                                                                                                                       }

                                                                                                                       function e(a) {
                                                                                                                           if (!b || 1 >= b.length || 0 > a || a > b.length - 1) return !1;
                                                                                                                           g = a;
                                                                                                                           return !0
                                                                                                                       }
                                                                                                                       var g = 0,
                                                                                                                           b = null,
                                                                                                                           k = 480,
                                                                                                                           l = null,
                                                                                                                           n = k;
                                                                                                                       return {
                                                                                                                           goTo: function(a) {
                                                                                                                               e(a) && h()
                                                                                                                           },
                                                                                                                           previous: function() {
                                                                                                                               var a =
                                                                                                                                   b[g],
                                                                                                                                   c = a.handler;
                                                                                                                               c && "function" == typeof c ? c(a.pageCont, "P") && e(g - 1) && h() : e(g - 1) && h()
                                                                                                                           },
                                                                                                                           next: function() {
                                                                                                                               var a = b[g],
                                                                                                                                   c = a.handler;
                                                                                                                               c && "function" == typeof c ? c(a.pageCont, "N") && e(g + 1) && h() : e(g + 1) && h()
                                                                                                                           },
                                                                                                                           first: function() {
                                                                                                                               e(0) && h()
                                                                                                                           },
                                                                                                                           last: function() {
                                                                                                                               e(b.length - 1) && h()
                                                                                                                           },
                                                                                                                           currentSlide: function() {
                                                                                                                               return b && 0 < b.length && $(window).width() <= k ? b[g] : null
                                                                                                                           },
                                                                                                                           checkWidth: function() {
                                                                                                                               var a = $(window).width();
                                                                                                                               if (n >= k && a <= k || n <= k && a >= k) n = a, h()
                                                                                                                           },
                                                                                                                           startWithConfig: function(a, c) {
                                                                                                                               if (a && !(1 >= a.length || Modernizr && !Modernizr.mq("only screen and (min-width: 0px)"))) {
                                                                                                                                   c &&
                                                                                                                                       (c.context && (l = "string" == typeof c.context ? $(c.context).eq(0) : c.context), c.maxWidth && (n = k = c.maxWidth));
                                                                                                                                   l || (l = $("body").eq(0));
                                                                                                                                   for (var i = [], e = 0; e < a.length; e++) {
                                                                                                                                       var f = a[e],
                                                                                                                                           d = l.find("#" + f.id);
                                                                                                                                       0 < d.length && (f.cont = d.eq(0), i.push(f))
                                                                                                                                   }
                                                                                                                                   if (i && !(1 >= i.length)) {
                                                                                                                                       g = 0;
                                                                                                                                       b = [];
                                                                                                                                       for (var e = i.length, j, m, f = 0; f < e; f++) {
                                                                                                                                           j = i[f];
                                                                                                                                           0 == f ? (d = null, m = i[f + 1]) : f == e - 1 ? (d = i[f - 1], m = null) : (d = i[f - 1], m = i[f + 1]);
                                                                                                                                           d && (j.prevLabel = d.title ? d.title : htz.content.previous);
                                                                                                                                           m && (j.nextLabel = m.title ? m.title : htz.content.next);
                                                                                                                                           if (d = j) d.prevLabel && $("<div />").addClass("pagination-prev").html("<div><div class='icons-ft_arrow_left'></div></div><div>" +
                                                                                                                                               d.prevLabel + "</div>").prependTo(d.cont).hide(), d.nextLabel && $("<div />").addClass("pagination-next").html("<div>" + d.nextLabel + "</div><div><div class='icons-ft_arrow_right'></div></div>").appendTo(d.cont).hide();
                                                                                                                                           b[b.length] = j.handler ? {
                                                                                                                                               pageCont: j.cont,
                                                                                                                                               handler: j.handler
                                                                                                                                           } : {
                                                                                                                                               pageCont: j.cont
                                                                                                                                           };
                                                                                                                                           j.isActive && (g = f)
                                                                                                                                       }
                                                                                                                                       0 < b.length && ($(window).on("resize.slider", Slider.checkWidth), l.find(".pagination-prev").on("click", function() {
                                                                                                                                           Slider.previous()
                                                                                                                                       }), l.find(".pagination-next").on("click", function() {
                                                                                                                                           Slider.next()
                                                                                                                                       }), h())
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   window.checkHertzNameSpace("htz.utils.helpers");
                                                                                                                   htz.utils.helpers.NetworkHelper = function() {
                                                                                                                       return {
                                                                                                                           isOnline: function() {
                                                                                                                               return !0
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   window.checkHertzNameSpace("htz.utils.web.helpers");
                                                                                                                   htz.utils.web.helpers.Navigator = function(b) {
                                                                                                                       var a;
                                                                                                                       return {
                                                                                                                           navigate: function(c) {
                                                                                                                               var d = b(c);
                                                                                                                               0 < d.length && (a && b(a).hide(), d.show(), a = c)
                                                                                                                           },
                                                                                                                           getCurrentPage: function() {
                                                                                                                               return a
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }($);
                                                                                                                   window.checkHertzNameSpace("htz.utils.web.helpers");
                                                                                                                   htz.utils.web.helpers.Rotar = function(b) {
                                                                                                                       return {
                                                                                                                           rotateTo: function(a) {
                                                                                                                               a && (b.href = a)
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }(window.location);
                                                                                                                   window.checkHertzNameSpace("htz.utils.web");
                                                                                                                   htz.utils.web.DOMHelper = function(a) {
                                                                                                                       return {
                                                                                                                           createPageElm: function(b, c, d) {
                                                                                                                               return a.createElm(c + "-" + b + "-page-container", "div", !0, d)
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }(htz.utils.Utils);
                                                                                                                   (function(a) {
                                                                                                                       a.configure({
                                                                                                                           spinner: htz.utils.Spinner,
                                                                                                                           lightBox: htz.utils.LightBox,
                                                                                                                           networkHelper: htz.utils.helpers.NetworkHelper,
                                                                                                                           navigator: htz.utils.web.helpers.Navigator,
                                                                                                                           rotar: htz.utils.web.helpers.Rotar,
                                                                                                                           domHelper: htz.utils.web.DOMHelper,
                                                                                                                           notifier: window,
                                                                                                                           slider: Slider
                                                                                                                       })
                                                                                                                   })(htz.utils.config.UtilConfig);


















































































                                                                                                                   /* EOF */