                                                                                                                   var Clock = {
                                                                                                                       minutes: ["00", "30"],
                                                                                                                       format: function(b, g) {
                                                                                                                           return str = 1 == b.toString().length ? "0" + b + ":" + g : b + ":" + g
                                                                                                                       },
                                                                                                                       drawTime: function(b, g) {
                                                                                                                           var e = (!b ? "10:00" : b).split(":", 2),
                                                                                                                               f = e[0],
                                                                                                                               f = parseInt(f, 10),
                                                                                                                               e = e[1],
                                                                                                                               a = "",
                                                                                                                               d;
                                                                                                                           if (g)
                                                                                                                               for (d = 0; 24 > d; d++)
                                                                                                                                   for (var c = 0; 2 > c; c++) b = this.format(d, this.minutes[c]), a = f === d && e === this.minutes[c] ? a + ('<option selected="selected" value="' + b + '">' + b + "</option>") : a + ('<option value="' + b + '">' + b + "</option>");
                                                                                                                           else {
                                                                                                                               a = 0 === f && "00" === e ? a + '<option selected="selected" value="00:00">12:00 Midnight</option>' :
                                                                                                                                   a + '<option value="00:00">12:00 Midnight</option>';
                                                                                                                               a = 0 === f && "30" === e ? a + '<option selected="selected" value="00:30">12:30 AM</option>' : a + '<option value="00:30">12:30 AM</option>';
                                                                                                                               for (d = 1; 12 > d; d++)
                                                                                                                                   for (c = 0; 2 > c; c++) b = this.format(d, this.minutes[c]), a = f === d && Number(e) == this.minutes[c] ? a + ('<option selected="selected" value="' + b + '">' + b + " AM</option>") : a + ('<option value="' + b + '">' + b + " AM</option>");
                                                                                                                               for (var a = 12 === f && "00" === e ? a + '<option selected="selected" value="12:00">12:00 Noon</option>' : a + '<option value="12:00">12:00 Noon</option>',
                                                                                                                                       a = 12 === f && "30" === e ? a + '<option selected="selected" value="00:30">12:30 PM</option>' : a + '<option value="12:30">12:30 PM</option>', h = 1; 12 > h; h++)
                                                                                                                                   for (var i = h + 12, c = 0; 2 > c; c++) b = this.format(h, this.minutes[c]), d = this.format(i, this.minutes[c]), a = f == i && e == this.minutes[c] ? a + ('<option selected="selected" value="' + d + '">' + b + " PM</option>") : a + ('<option value="' + d + '">' + b + " PM</option>")
                                                                                                                           }
                                                                                                                           return "<select>" + a + "</select>"
                                                                                                                       }
                                                                                                                   };
                                                                                                                   "function" == typeof define && define.amd && define("tools/timelist", [], function() {
                                                                                                                       return Clock
                                                                                                                   });
                                                                                                                   var Calendar = function(a) {
                                                                                                                       this.params = _.extend({
                                                                                                                           euro: !1,
                                                                                                                           increment: 1,
                                                                                                                           mode: 1,
                                                                                                                           expandable: !0
                                                                                                                       }, a);
                                                                                                                       this.init()
                                                                                                                   };
                                                                                                                   Calendar.prototype = {
                                                                                                                       header: function(a, b) {
                                                                                                                           return '<header><span class="prev arrow"><span class="icons-arrow_black_left"></span></span><span class="next arrow"><span class="icons-arrow_black_right"></span></span><h1 data-automation-id = "' + (a + 1) + '">' + this.params.monthNames[a] + " " + b + "</h1></header>"
                                                                                                                       },
                                                                                                                       daysHeader: function() {
                                                                                                                           for (var a = "<tr>", b = 0; b < this.params.headers.length; b++) a += "<th>" + this.params.headers[b] + "</th>";
                                                                                                                           return a + "</tr>"
                                                                                                                       },
                                                                                                                       drawMonth: function(a, b) {
                                                                                                                           var c = new Date(b, a, 1),
                                                                                                                               d = c.getDay(),
                                                                                                                               i = (new Date(b,
                                                                                                                                   a + 1, 0)).getDate();
                                                                                                                           (new Date(b, a, 0)).getDate();
                                                                                                                           for (var f = 0 - d, j = 0 === this.params.start.val().length ? null : this.createDate(this.params.start.val()), h = this.params.end ? 0 === this.params.end.val().length ? null : this.createDate(this.params.end.val()) : null, n = 2 === this.params.mode ? "dual" : "", e = '<table class="body" cellpadding="0" cellspacing="0" border="0">' + this.daysHeader(), g = 0; 6 > g; g++) {
                                                                                                                               for (var e = e + "<tr>", k = 0; 7 > k; k++) {
                                                                                                                                   f++;
                                                                                                                                   var l = "",
                                                                                                                                       m = "";
                                                                                                                                   0 >= f || f > i ? l = "empty" : m = f;
                                                                                                                                   e += '<td class="' + l + '">' + m + "</td>"
                                                                                                                               }
                                                                                                                               e += "</tr>"
                                                                                                                           }
                                                                                                                           e += "</table>";
                                                                                                                           if (this.today.getMonth() === a && this.today.getFullYear() === b) {
                                                                                                                               f = this.today.getDate() + d - 1;
                                                                                                                               e = this.highlight(e, f, "today");
                                                                                                                               for (g = f - 1; g >= d; g--) e = this.highlight(e, g, "past")
                                                                                                                           }
                                                                                                                           j && (j.getMonth() === a && j.getFullYear() === b) && (f = j.getDate() + d - 1, e = this.highlight(e, f, "start"));
                                                                                                                           h && (h.getMonth() === a && h.getFullYear() === b) && (f = h.getDate() + d - 1, e = this.highlight(e, f, "end"));
                                                                                                                           j && h && (e = $("<div>" + e + "</div>"), f = parseInt(e.find("td.start").text()), g = parseInt(e.find("td.end").text()), startIndex = f ? f + d - 1 : d, endIndex = g ? g + d - 1 : i + d, f ||
                                                                                                                               g ? e.find("td").slice(startIndex, endIndex).addClass("selected") : j.getTime() < c.getTime() && h.getTime() > c.getTime() && e.find("td").slice(startIndex, endIndex).addClass("selected"), e = e.html());
                                                                                                                           return '<div class="month ' + n + '"><div class="wrapper">' + this.header(a, b) + e + "</div></div>"
                                                                                                                       },
                                                                                                                       highlight: function(a, b, c) {
                                                                                                                           a = $("<div>" + a + "</div>");
                                                                                                                           $(a).find("td:eq(" + b + ")").addClass(c);
                                                                                                                           return a.html()
                                                                                                                       },
                                                                                                                       footer: function(a) {
                                                                                                                           return '<footer class="clearfix"><span class="area"><span class="close">' + a + '</span><span class="icons-close_sm"></span></span></footer>'
                                                                                                                       },
                                                                                                                       maxDate: function() {
                                                                                                                           var a = new Date(this.today.getTime());
                                                                                                                           a.setFullYear(a.getFullYear() + 1);
                                                                                                                           a.setMonth(a.getMonth() + 4);
                                                                                                                           a.setDate(0);
                                                                                                                           return a
                                                                                                                       },
                                                                                                                       calendarMonths: function() {
                                                                                                                           if (this.params.content) {
                                                                                                                               var a = this.params.content.homePage.calendarContent;
                                                                                                                               return [a.calMonthJan, a.calMonthFeb, a.calMonthMar, a.calMonthApr, a.calMonthMay, a.calMonthJun, a.calMonthJul, a.calMonthAug, a.calMonthSep, a.calMonthOct, a.calMonthNov, a.calMonthDec]
                                                                                                                           }
                                                                                                                           return htz.calendar.monthNames
                                                                                                                       },
                                                                                                                       calendarDays: function() {
                                                                                                                           if (this.params.content) {
                                                                                                                               var a =
                                                                                                                                   this.params.content.homePage.calendarContent;
                                                                                                                               return [a.calDaySun, a.calDayMon, a.calDayTues, a.calDayWed, a.calDayThur, a.calDayFri, a.calDaySat]
                                                                                                                           }
                                                                                                                           return htz.calendar.dayHeaders
                                                                                                                       },
                                                                                                                       init: function() {
                                                                                                                           var a = this,
                                                                                                                               b = a.params.start,
                                                                                                                               c = a.params.end,
                                                                                                                               d = a.params.startText || null,
                                                                                                                               i = a.params.endText || null,
                                                                                                                               f = function() {};
                                                                                                                           a.params.syncPickupAndDropoff && (f = a.params.syncPickupAndDropoff);
                                                                                                                           a.params.monthNames = a.calendarMonths();
                                                                                                                           a.params.headers = a.calendarDays();
                                                                                                                           this.params.content ? (a.params.returnBeforePickup = a.params.content.homePage.jsErrorContent.invalidDateError,
                                                                                                                               a.params.closeButton = a.params.content.links.closeButton) : (a.params.returnBeforePickup = htz.calendar.content.returnBeforePickup, a.params.closeButton = htz.calendar.content.closeText);
                                                                                                                           a.params.mode = a.params.target ? 1 : a.params.mode;
                                                                                                                           a.params.expandable = a.params.target ? !1 : a.params.expandable;
                                                                                                                           a.calendar = $('<div class="calendar"></div>');
                                                                                                                           if (b && d) d.on("click", function() {
                                                                                                                               localStorage.removeItem("PICK_UP_DATE");
                                                                                                                               if (a.active) a.close();
                                                                                                                               else {
                                                                                                                                   a.today = a.createDate();
                                                                                                                                   a.input = b;
                                                                                                                                   a.inputText = d.find(".value");
                                                                                                                                   a.dropoff = !1;
                                                                                                                                   var c = a.maxDate();
                                                                                                                                   a.currentDate = a.createDate(b.val());
                                                                                                                                   a.currentDate.setDate(1);
                                                                                                                                   2 === a.params.mode && (c.getMonth() === a.currentDate.getMonth() && c.getFullYear() === a.currentDate.getFullYear()) && a.currentDate.setMonth(a.currentDate.getMonth() - 1);
                                                                                                                                   a.show(this);
                                                                                                                                   return !1
                                                                                                                               }
                                                                                                                           });
                                                                                                                           if (c && i) i.on("click", function() {
                                                                                                                               localStorage.removeItem("DROP_OFF_DATE");
                                                                                                                               if (a.active) a.close();
                                                                                                                               else {
                                                                                                                                   a.today = a.createDate();
                                                                                                                                   a.input = c;
                                                                                                                                   a.inputText = i.find(".value");
                                                                                                                                   a.dropoff = !0;
                                                                                                                                   var f = a.maxDate();
                                                                                                                                   if (0 === c.val().length && 0 !== b.val().length) {
                                                                                                                                       var h =
                                                                                                                                           a.createDate(b.val()),
                                                                                                                                           d = (new Date(h.getFullYear(), h.getMonth() + 1, 0)).getDate();
                                                                                                                                       a.currentDate = a.createDate(b.val());
                                                                                                                                       a.params.expandable && 7 > d - h.getDate() && (a.params.mode = 2, htz.helpers.SessionHelper.setItem("calendarMode", 2))
                                                                                                                                   } else 0 !== b.val().length ? (h = a.createDate(b.val()), d = a.createDate(c.val()), d.setDate(1), d.setMonth(d.getMonth() - 1), a.currentDate = 2 === a.params.mode && h.getMonth() === d.getMonth() && h.getFullYear() === d.getFullYear() ? h : a.createDate(c.val())) : a.currentDate = a.createDate(c.val());
                                                                                                                                   a.currentDate.setDate(1);
                                                                                                                                   2 === a.params.mode && (f.getMonth() === a.currentDate.getMonth() && f.getFullYear() === a.currentDate.getFullYear()) && a.currentDate.setMonth(a.currentDate.getMonth() - 1);
                                                                                                                                   a.show(this)
                                                                                                                               }
                                                                                                                           });
                                                                                                                           a.calendar.delegate("span.next", "click", function() {
                                                                                                                               a.shuffle(1)
                                                                                                                           });
                                                                                                                           a.calendar.delegate("span.prev", "click", function() {
                                                                                                                               a.shuffle(-1)
                                                                                                                           });
                                                                                                                           a.calendar.delegate("td", "click", function() {
                                                                                                                               if (!$(this).hasClass("empty") && !$(this).hasClass("past")) {
                                                                                                                                   var b = a.inputStr(this),
                                                                                                                                       c = a.createDate(b),
                                                                                                                                       d = a.dropoff ? a.createDate(a.params.start.val()) : c,
                                                                                                                                       e = a.params.end ? a.dropoff ? c : a.createDate(a.params.end.val()) : null;
                                                                                                                                   if (a.dropoff && e.getTime() < d.getTime()) $(this).mouseout(), alert(a.params.returnBeforePickup);
                                                                                                                                   else {
                                                                                                                                       if (a.params.end && 0 !== a.params.end.val().length && d.getTime() >= e.getTime()) {
                                                                                                                                           var g = a.maxDate(),
                                                                                                                                               g = g.getFullYear() === d.getFullYear() && g.getMonth() === d.getMonth() && g.getDate() === d.getDate() ? 0 : a.params.increment,
                                                                                                                                               c = new Date(c.getTime() + 864E5 * g),
                                                                                                                                               c = a.dateToStr(c);
                                                                                                                                           a.params.end.val(c);
                                                                                                                                           a.params.end.trigger("change");
                                                                                                                                           a.params.endText.find(".value").text(c)
                                                                                                                                       }
                                                                                                                                       f(b,
                                                                                                                                           a.input.selector, g, a);
                                                                                                                                       a.input.val(b);
                                                                                                                                       a.input.trigger("change");
                                                                                                                                       a.inputText.text(b);
                                                                                                                                       a.dropoff ? localStorage.setItem("DROP_OFF_DATE", b) : localStorage.setItem("PICK_UP_DATE", b);
                                                                                                                                       a.close()
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           });
                                                                                                                           a.calendar.delegate("td", "mouseover", function() {
                                                                                                                               !$(this).hasClass("past") && !$(this).hasClass("empty") && $(this).addClass("hover")
                                                                                                                           });
                                                                                                                           a.calendar.delegate("td", "mouseout", function() {
                                                                                                                               $(this).removeClass("hover")
                                                                                                                           });
                                                                                                                           a.calendar.delegate("footer span", "click", function() {
                                                                                                                               a.close()
                                                                                                                           });
                                                                                                                           a.calendar.append(a.footer(a.params.closeButton));
                                                                                                                           this.params.calledWithinOverlay || $("body").find(".calendar").remove();
                                                                                                                           a.params.target ? (a.calendar.addClass("elastic"), $(a.params.target).wrapInner("<div>"), $(a.params.target).append(a.calendar)) : ($("body").append(a.calendar), $("body").hasClass("lt-ie7") && (a.iframe = $('<iframe class="calendar">'), $("body").append(a.iframe)))
                                                                                                                       },
                                                                                                                       close: function() {
                                                                                                                           this.calendar.hide();
                                                                                                                           this.params.target ? this.calendar.siblings().show() : this.iframe && this.iframe.hide();
                                                                                                                           this.active = !1
                                                                                                                       },
                                                                                                                       dateToStr: function(a) {
                                                                                                                           var b = parseInt(a.getMonth() +
                                                                                                                                   1),
                                                                                                                               c = parseInt(a.getDate()),
                                                                                                                               c = 10 > c ? "0" + c : c,
                                                                                                                               b = 10 > b ? "0" + b : b;
                                                                                                                           return this.params.euro ? c + "/" + b + "/" + a.getFullYear() : b + "/" + c + "/" + a.getFullYear()
                                                                                                                       },
                                                                                                                       inputStr: function(a) {
                                                                                                                           var b = $(a).text(),
                                                                                                                               a = $(a).closest(".month").index(),
                                                                                                                               c = new Date(this.currentDate.getTime());
                                                                                                                           c.setMonth(c.getMonth() + a);
                                                                                                                           c.setDate(b);
                                                                                                                           return this.dateToStr(c)
                                                                                                                       },
                                                                                                                       resize: function() {
                                                                                                                           !this.params.target && $("body").hasClass("lt-ie8") && (1 === this.params.mode ? this.calendar.width(230) : 2 === this.params.mode && this.calendar.width(460), this.iframe && (this.iframe.show(),
                                                                                                                               this.iframe.css({
                                                                                                                                   height: this.calendar.outerHeight(),
                                                                                                                                   width: this.calendar.outerWidth(),
                                                                                                                                   top: this.calendar.position().top,
                                                                                                                                   left: this.calendar.position().left
                                                                                                                               })))
                                                                                                                       },
                                                                                                                       show: function(a) {
                                                                                                                           var b = this;
                                                                                                                           b.create();
                                                                                                                           b.calendar.show();
                                                                                                                           if (b.params.target) b.calendar.siblings().hide();
                                                                                                                           else {
                                                                                                                               var c = $("#container").width(),
                                                                                                                                   d = b.calendar.width(),
                                                                                                                                   i = $(a).offset().left;
                                                                                                                               d + i > c ? b.calendar.css({
                                                                                                                                   top: $(a).offset().top + $(a).outerHeight(),
                                                                                                                                   right: $(window).width() - i - $(a).outerWidth(),
                                                                                                                                   left: ""
                                                                                                                               }) : b.calendar.css({
                                                                                                                                   top: $(a).offset().top + $(a).outerHeight(),
                                                                                                                                   left: i,
                                                                                                                                   right: ""
                                                                                                                               });
                                                                                                                               $(window).height();
                                                                                                                               a = $(window).width(); - 1 == b.calendar[0].className.indexOf("elastic") && (480 > a ? (b.calendar.css({
                                                                                                                                   right: "0"
                                                                                                                               }), b.calendar.find("div:first").css({
                                                                                                                                   width: "51%"
                                                                                                                               }), b.calendar.find("header").css({
                                                                                                                                   "margin-right": "-113%"
                                                                                                                               })) : b.calendar.find("span.area").css({
                                                                                                                                   "margin-top": "0"
                                                                                                                               }));
                                                                                                                               $(window).on("resize", function() {
                                                                                                                                   $(window).height();
                                                                                                                                   480 < $(window).width() && b.calendar.hide()
                                                                                                                               });
                                                                                                                               b.resize()
                                                                                                                           }
                                                                                                                           b.active = !0
                                                                                                                       },
                                                                                                                       create: function() {
                                                                                                                           var a = this.calendar.find("footer"),
                                                                                                                               b = this.maxDate();
                                                                                                                           this.calendar.find(".month").remove();
                                                                                                                           a.before(this.drawMonth(this.currentDate.getMonth(), this.currentDate.getFullYear()));
                                                                                                                           if (2 === this.params.mode) {
                                                                                                                               var c = new Date(this.currentDate.getTime());
                                                                                                                               c.setMonth(c.getMonth() + 1);
                                                                                                                               a.before(this.drawMonth(c.getMonth(), c.getFullYear()));
                                                                                                                               this.calendar.find("span.next:first").hide();
                                                                                                                               this.calendar.find("span.prev:last").hide();
                                                                                                                               b.setDate(0)
                                                                                                                           }
                                                                                                                           this.currentDate.getMonth() === this.today.getMonth() && this.currentDate.getFullYear() === this.today.getFullYear() && this.calendar.find("span.prev").hide();
                                                                                                                           this.currentDate.getMonth() ===
                                                                                                                               b.getMonth() && this.currentDate.getFullYear() === b.getFullYear() && this.calendar.find("span.next").hide();
                                                                                                                           $(window).height();
                                                                                                                           a = $(window).width(); - 1 == this.calendar[0].className.indexOf("elastic") && 480 > a && (this.calendar.find("div:first").css({
                                                                                                                               width: "51%"
                                                                                                                           }), this.calendar.find("header").css({
                                                                                                                               "margin-right": "-121%"
                                                                                                                           }), this.calendar.find("span.area").css({
                                                                                                                               "margin-top": "245px"
                                                                                                                           }))
                                                                                                                       },
                                                                                                                       shuffle: function(a) {
                                                                                                                           1 === this.params.mode && this.params.expandable && (this.params.mode = 2, htz.helpers.SessionHelper.setItem("calendarMode",
                                                                                                                               2), a = 0 < a ? a - 1 : a);
                                                                                                                           this.currentDate.setMonth(this.currentDate.getMonth() + a);
                                                                                                                           this.create();
                                                                                                                           this.resize()
                                                                                                                       },
                                                                                                                       createDate: function(a) {
                                                                                                                           if (!a || 0 === a.length) return a = new Date, new Date(a.getFullYear(), a.getMonth(), a.getDate());
                                                                                                                           a = a.split("/");
                                                                                                                           return newDate = this.params.euro ? new Date(a[2], a[1] - 1, a[0]) : new Date(a[2], a[0] - 1, a[1])
                                                                                                                       }
                                                                                                                   };
                                                                                                                   "function" == typeof define && define.amd && define("tools/calendar", [], function() {
                                                                                                                       return Calendar
                                                                                                                   });
                                                                                                                   addDependencies("reservation/vehicle/core/view/vehicle-page-view", "jquery underscore backbone framework/view/abstract-view config/app-config utils/utils-proxy utils/sessionhelper reservation/vehicle/core/view/vehicle-list-view reservation/rental-links/core/presenter/rental-links-presenter reservation/itinerary-info/core/presenter/itinerary-presenter reservation/rate-details/core/presenter/rate-details-presenter reservation/common/retry/core/view/retry-view reservation/common/steps/core/view/steps-view reservation/process-info/core/model/process-model reservation/config reservation/reservation-info/core/model/reservation-info-model reservation/process-config/core/reservation-constants reservation/utils/core/reservation-utils utils/gtm-tracker".split(" "));
                                                                                                                   addDependencies("reservation/vehicle/core/presenter/vehicle-presenter", "jquery json utils/utils utils/domhelper config/utilconfig utils/sessionhelper config/app-info config/app-config reservation/vehicle/core/model/vehicle-page-model reservation/vehicle/core/view/vehicle-page-view reservation/vehicle/core/view/helper/view-helper reservation/process-info/core/model/process-model utils/utils-proxy reservation/process-config/core/reservation-constants reservation/utils/core/reservation-utils".split(" "));
                                                                                                                   define("reservation/common/content-format/core/view/content-format-view", ["jquery", "backbone"], function(g, f) {
                                                                                                                       return f.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.attrs = this.options.attributes;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           formStartTag: function(a) {
                                                                                                                               if (0 < a.indexOf("@")) {
                                                                                                                                   var a = a.split("@"),
                                                                                                                                       b = null,
                                                                                                                                       c = "",
                                                                                                                                       e = -1,
                                                                                                                                       d;
                                                                                                                                   for (d in a) e++, 0 == e ? b = a[d] : c += " " + a[d];
                                                                                                                                   return "<" + b + " " + c + ">"
                                                                                                                               }
                                                                                                                               return "<" + a + ">"
                                                                                                                           },
                                                                                                                           formEndTag: function(a) {
                                                                                                                               var b = null,
                                                                                                                                   b = 0 < a.indexOf("@") ? a.split("@")[0] : a;
                                                                                                                               return "</" + b + ">"
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               for (var a in this.attrs) {
                                                                                                                                   var b =
                                                                                                                                       a,
                                                                                                                                       c = this.attrs[b];
                                                                                                                                   0 <= this.content.indexOf("{" + b + "}") ? this.content = this.content.replace("{" + b + "}", c) : 0 <= this.content.indexOf("{" + b + "_S}") && (this.content = this.content.replace("{" + b + "_S}", this.formStartTag(c)), 0 <= this.content.indexOf("{" + b + "_E}") && (this.content = this.content.replace("{" + b + "_E}", this.formEndTag(c))))
                                                                                                                               }
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/arrival-info/core/model/arrival-form-model", ["utils/restmodel", "config/app-config"], function(a, b) {
                                                                                                                       return a.extend({
                                                                                                                           defaults: {
                                                                                                                               type: "",
                                                                                                                               desc: "",
                                                                                                                               flightName: "",
                                                                                                                               flightNumber: ""
                                                                                                                           },
                                                                                                                           getErrorLocation: function() {
                                                                                                                               return "#arrival-info #error-list"
                                                                                                                           },
                                                                                                                           url: b.config.rootContext + "/rest/hertz/v2/reservations/flight"
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary-info/core/model/location-model", ["backbone"], function(a) {
                                                                                                                       return a.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               name: null,
                                                                                                                               addressLine1: null,
                                                                                                                               addressLine2: null,
                                                                                                                               city: null,
                                                                                                                               state: null,
                                                                                                                               stateCode: null,
                                                                                                                               country: null,
                                                                                                                               countryCode: null,
                                                                                                                               zip: null,
                                                                                                                               type: null,
                                                                                                                               hours: null,
                                                                                                                               phone: null,
                                                                                                                               fax: null,
                                                                                                                               lat: 0,
                                                                                                                               lon: 0,
                                                                                                                               isDelivery: !1,
                                                                                                                               isCollection: !1,
                                                                                                                               isPickup: !1,
                                                                                                                               servedByNotes: null,
                                                                                                                               directions: null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary-info/core/model/itinerary-model", ["backbone", "reservation/itinerary-info/core/model/location-model", "reservation/arrival-info/core/model/arrival-form-model", "reservation/process-info/core/model/process-model"], function(f, c, g, d) {
                                                                                                                       return f.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               editAction: null,
                                                                                                                               pickupDate: null,
                                                                                                                               dropoffDate: null,
                                                                                                                               pickupLocation: null,
                                                                                                                               dropoffLocation: null,
                                                                                                                               age: null,
                                                                                                                               discounts: null,
                                                                                                                               arrivalInfo: null,
                                                                                                                               isOneWay: !1,
                                                                                                                               page: "",
                                                                                                                               state: 0,
                                                                                                                               isItnModifiable: !0,
                                                                                                                               isArrModifiable: !1,
                                                                                                                               isReview: !1
                                                                                                                           },
                                                                                                                           url: function() {
                                                                                                                               return ""
                                                                                                                           },
                                                                                                                           parse: function(a) {
                                                                                                                               if (!a) return a;
                                                                                                                               if (a.pickupLocation) {
                                                                                                                                   var b = new c;
                                                                                                                                   b.set(a.pickupLocation);
                                                                                                                                   a.pickupLocation = b
                                                                                                                               }
                                                                                                                               if (a.dropoffLocation || a.pickupLocation) {
                                                                                                                                   b = a.dropoffLocation || a.pickupLocation;
                                                                                                                                   b.isPickup = !1;
                                                                                                                                   b.isDelivery = !1;
                                                                                                                                   var e = new c;
                                                                                                                                   e.set(b);
                                                                                                                                   a.dropoffLocation = e
                                                                                                                               }
                                                                                                                               a.arrivalInfo && (b = new g, b.set(a.arrivalInfo), a.arrivalInfo = b);
                                                                                                                               b = 0;
                                                                                                                               d.getStep() == htz.res.config.ReservationConstants.CONFIRMATION ? (a.isItnModifiable = !1, b = 1) : d.getStep() == htz.res.config.ReservationConstants.REVIEW && (b = 1, a.isReview = !0);
                                                                                                                               a.isArrModifiable = a.isReview;
                                                                                                                               a.suppressEditLink && (a.isItnModifiable = !1, a.isArrModifiable = !1);
                                                                                                                               a.state = b;
                                                                                                                               return a
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary-info/core/view/location-view", ["jquery", "underscore", "backbone", "utils/utils-proxy"], function(c, b, f, g) {
                                                                                                                       function e() {
                                                                                                                           null == d && (d = g.getLightbox());
                                                                                                                           return d
                                                                                                                       }
                                                                                                                       var d = null;
                                                                                                                       return f.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = 0 == this.options.state ? b.template(c("#itn-location-tpl").html()) : b.template(c("#itn-location-2-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.isGoldAnytimeRes = this.options.isGoldAnytimeRes;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .itn-loc-detail-link": "toggleDetail",
                                                                                                                               "click .itn-map-img": "showDirection",
                                                                                                                               "click .itn-ga-overlay": "showGoldAnytimeOverlay"
                                                                                                                           },
                                                                                                                           toggleDetail: function(a) {
                                                                                                                               if ("phone" !== htz.config.deviceGroup && !htz.config.isApp) {
                                                                                                                                   var a = c(a.target).closest("article"),
                                                                                                                                       h = a.find(".itn-location-container").html(),
                                                                                                                                       b = a.find("section");
                                                                                                                                   b.find("label").first().before(h);
                                                                                                                                   e().overlay({
                                                                                                                                       title: a.find(".itn-location-header label").html(),
                                                                                                                                       width: "625"
                                                                                                                                   }, b.html())
                                                                                                                               } else c(a.currentTarget).parent().hasClass("loc-view-link1") ? (this.$(".loc-view-link1").hide(), this.$(".loc-view-link2").show()) :
                                                                                                                                   (this.$(".loc-view-link2").hide(), this.$(".loc-view-link1").show()), this.$(".itn-loc-detail").toggleClass("hidden-item")
                                                                                                                           },
                                                                                                                           showDirection: function() {
                                                                                                                               if (0 < b.size(this.model.get("directions"))) {
                                                                                                                                   var a = null;
                                                                                                                                   b.each(this.model.get("directions"), function(b) {
                                                                                                                                       b && 0 < b.name.indexOf("mapquest.com") && (a = b.name)
                                                                                                                                   });
                                                                                                                                   a || (a = b.first(this.model.get("directions")).name);
                                                                                                                                   window.open(a)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           showGoldAnytimeOverlay: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/common/gold-anytime-overlay/core/view/gold-anytime-overlay-view"], function(b) {
                                                                                                                                   e().overlay({
                                                                                                                                       title: a.content.reservationGlobals.goldAnytime.gaOverlayTitle,
                                                                                                                                       width: "625"
                                                                                                                                   }, (new b({
                                                                                                                                       template: "#gold-anytime-overlay-tpl",
                                                                                                                                       content: a.content
                                                                                                                                   })).render().el)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               try {
                                                                                                                                   this.$el.html(this.template(c.extend(this.model.attributes, {
                                                                                                                                       content: this.content,
                                                                                                                                       state: this.options.state,
                                                                                                                                       isOneWay: this.options.isOneWay,
                                                                                                                                       isGoldAnytimeRes: this.isGoldAnytimeRes
                                                                                                                                   }))), 1 === this.options.state && 0 !== this.model.get("lat") && this.$el.find(".itn-map-img").attr("src", htz.config.rootContext + "/rest/map/lat/" + this.model.get("lat") + "/long/" + this.model.get("lon") + "/radius/5280?imageWidth=250&imageHeight=200")
                                                                                                                               } catch (a) {}
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary-info/core/view/itinerary-view", "jquery underscore reservation/itinerary-info/core/view/location-view reservation/process-info/core/model/process-model config/app-config reservation/config framework/view/abstract-view utils/utils-proxy".split(" "), function(b, e, f, d, c, g, h, i) {
                                                                                                                       return h.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = 0 == this.model.get("state") ? e.template(b("#itn-main-tpl").html()) : e.template(b("#itn-main-2-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.isGoldAnytimeRes =
                                                                                                                                   this.options.isGoldAnytimeRes
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .itn-edit-link": "showEditPage",
                                                                                                                               "click .itn-arrival-edit": "showArrivalEditPage",
                                                                                                                               "click .itn-header-icon-crtl": "handleItineraryToggle",
                                                                                                                               "click .itn-header-crtl": "handleItineraryToggle",
                                                                                                                               "click .itn-title": "handleItineraryToggle"
                                                                                                                           },
                                                                                                                           showEditPage: function() {
                                                                                                                               if (!this.model.get("isReview") && ("all" == c.config.deviceGroup || "desktop" == c.config.deviceGroup || "tablet" == c.config.deviceGroup)) i.getSpinner().spin(), require(["reservation/res-flow/core/presenter/res-flow-presenter"],
                                                                                                                                   function(a) {
                                                                                                                                       a.showResForm()
                                                                                                                                   }), "undefined" !== typeof WebTracking && WebTracking.trackPage("edit-itinerary-" + d.getStep());
                                                                                                                               else if (this.model.get("isReview")) require(["reservation/confirmation/core/view/helper/view-helper"], function(a) {
                                                                                                                                   a.editItinerary()
                                                                                                                               });
                                                                                                                               else {
                                                                                                                                   var a = htz.res.config.ReservationConstants.ITINERARY;
                                                                                                                                   d.isModify() && (a = "modify/" + a);
                                                                                                                                   g.getRotar().rotate(a)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           handleItineraryToggle: function() {
                                                                                                                               var a = this.$(".itn-header-crtl");
                                                                                                                               a && a.is(":visible") && (this.$(".itn-container").toggleClass("hidden-item"),
                                                                                                                                   this.$el.find("#expand_collapse_itn").hasClass("icons-expand_icon") ? this.$el.find("#expand_collapse_itn").removeClass("icons-expand_icon").addClass("icons-collapse_icon") : this.$el.find("#expand_collapse_itn").removeClass("icons-collapse_icon").addClass("icons-expand_icon"))
                                                                                                                           },
                                                                                                                           showArrivalEditPage: function() {
                                                                                                                               var a = this;
                                                                                                                               if (this.model.get("isReview")) require(["reservation/confirmation/core/view/helper/view-helper"], function(b) {
                                                                                                                                   b.showArrivalEditPage(a.content)
                                                                                                                               });
                                                                                                                               else {
                                                                                                                                   var b = "RYANAIR" == c.config.subSystemId ?
                                                                                                                                       htz.res.config.ReservationConstants.ITINERARY : htz.res.config.ReservationConstants.REVIEW_AND_BOOK;
                                                                                                                                   d.isModify() && (b = "modify/" + b);
                                                                                                                                   g.getRotar().rotate(b)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               return this.renderView()
                                                                                                                           },
                                                                                                                           renderYourself: function() {
                                                                                                                               this.$el.html(this.template(b.extend(!0, this.model.attributes, {
                                                                                                                                   content: this.content
                                                                                                                               })));
                                                                                                                               this.pickupView = new f({
                                                                                                                                   content: this.content,
                                                                                                                                   el: this.$(".pickup-location"),
                                                                                                                                   model: this.model.get("pickupLocation"),
                                                                                                                                   state: this.model.get("state"),
                                                                                                                                   isOneWay: this.model.get("isOneWay"),
                                                                                                                                   isGoldAnytimeRes: this.isGoldAnytimeRes
                                                                                                                               });
                                                                                                                               this.model.get("isOneWay") ? this.returnView = new f({
                                                                                                                                   content: this.content,
                                                                                                                                   el: this.$(".return-location"),
                                                                                                                                   model: this.model.get("dropoffLocation"),
                                                                                                                                   state: this.model.get("state"),
                                                                                                                                   isOneWay: this.model.get("isOneWay"),
                                                                                                                                   isGoldAnytimeRes: this.isGoldAnytimeRes
                                                                                                                               }) : this.$(".return-location").hide();
                                                                                                                               this.$("#res-itinerary").addClass("state" + this.model.get("state"))
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary-info/core/presenter/itinerary-presenter", "json utils/sessionhelper reservation/itinerary-info/core/model/itinerary-model reservation/itinerary-info/core/view/itinerary-view config/app-config reservation/process-info/core/model/process-model reservation/config reservation/process-config/core/reservation-constants".split(" "), function(i, j, h, k, l, d, e, f) {
                                                                                                                       var b, c;
                                                                                                                       return {
                                                                                                                           showItinerary: function(a, d, e, g) {
                                                                                                                               if (a) try {
                                                                                                                                   a.get("pickupLocation"), b = a
                                                                                                                               } catch (l) {
                                                                                                                                   b = new h, b.set(b.parse(a))
                                                                                                                               } else(a =
                                                                                                                                   j.getItem(f.ITINERARY_INFO_DATA)) && (a = i.parse(a)), a && (b = new h, b.set(b.parse(a)));
                                                                                                                               a = !1;
                                                                                                                               g && (a = !!g.optional);
                                                                                                                               c && $(d).off();
                                                                                                                               c = new k({
                                                                                                                                   content: e,
                                                                                                                                   el: d,
                                                                                                                                   model: b,
                                                                                                                                   isGoldAnytimeRes: g.goldAnytimeRes
                                                                                                                               });
                                                                                                                               c.setOptional(a);
                                                                                                                               c.render()
                                                                                                                           },
                                                                                                                           editItinerary: function() {
                                                                                                                               var a = f.ITINERARY;
                                                                                                                               d.isModify() && (a = "modify/" + a);
                                                                                                                               e.getRotar().rotate(a)
                                                                                                                           },
                                                                                                                           editArrivalInfo: function() {
                                                                                                                               var a = f.REVIEW_AND_BOOK;
                                                                                                                               d.isModify() && (a = "modify/" + a);
                                                                                                                               e.getRotar().rotate(a)
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               b && b.doCleanup && b.doCleanup();
                                                                                                                               c && c.doCleanup && c.doCleanup();
                                                                                                                               b =
                                                                                                                                   c = null
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/model/vehicle-model", ["backbone"], function(a) {
                                                                                                                       return a.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               sipp: "",
                                                                                                                               name: "",
                                                                                                                               unique: !1,
                                                                                                                               img: "",
                                                                                                                               collection: 0,
                                                                                                                               amenities: null,
                                                                                                                               icon: "",
                                                                                                                               bold: 0,
                                                                                                                               allNotAvailableOrSoldout: !1,
                                                                                                                               uscList: "green fun prestige adrenaline family greentravel".split(" "),
                                                                                                                               emeacList: "green fun prestige supercars family greentravel".split(" "),
                                                                                                                               clClass: "",
                                                                                                                               iconClass: "",
                                                                                                                               imgPref: "//images.hertz.com/vehicles/152x88/",
                                                                                                                               passengers: "",
                                                                                                                               luggage: "",
                                                                                                                               transmission: "",
                                                                                                                               airConditioning: "",
                                                                                                                               fuel: "",
                                                                                                                               carGroup: "",
                                                                                                                               carTypeDisplay: ""
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               0 < this.get("collection") && this.set("clClass", "icons-" + (1 == this.get("bold") ? this.get("uscList")[this.get("collection") - 1] + "_bold" : this.get("emeacList")[this.get("collection") - 1]));
                                                                                                                               this.get("icon") && this.set("iconClass", "icons-" + this.get("icon") + "_lg")
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/model/extra-model", ["backbone", "utils/utils"], function(b, c) {
                                                                                                                       return b.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               name: "",
                                                                                                                               quantity: 0,
                                                                                                                               total: 0,
                                                                                                                               currency: "",
                                                                                                                               duration: "",
                                                                                                                               img: "",
                                                                                                                               description: "",
                                                                                                                               note: "",
                                                                                                                               removable: !1
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.get("total");
                                                                                                                               0 < a ? this.set("total", c.formatPrice(a)) : this.set("total", null)
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/model/inclexcl-model", ["backbone"], function(a) {
                                                                                                                       return a.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               name: "",
                                                                                                                               value: ""
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/model/rate-model", ["backbone", "utils/utils"], function(c, b) {
                                                                                                                       return c.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               key: "",
                                                                                                                               name: "",
                                                                                                                               quantity: 0,
                                                                                                                               unitRate: 0,
                                                                                                                               total: 0,
                                                                                                                               currency: "",
                                                                                                                               duration: ""
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.get("total");
                                                                                                                               0 < a ? this.set("total", b.formatPrice(a)) : this.set("total", null);
                                                                                                                               a = this.get("unitRate");
                                                                                                                               0 < a ? this.set("unitRate", b.formatPrice(a)) : this.set("unitRate", null)
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/model/rate-details-model", "backbone reservation/rate-details/core/model/vehicle-model reservation/rate-details/core/model/inclexcl-model reservation/rate-details/core/model/rate-model utils/utils config/app-config reservation/rate-details/core/model/paynow-paylater-model reservation/rate-details/core/model/rate-info-model reservation/rate-details/core/model/general-info-model reservation/rate-details/core/model/session-model".split(" "), function(d, l, e, m, n, o, f,
                                                                                                                       g, h, p) {
                                                                                                                       var i = d.Collection.extend({
                                                                                                                               model: e
                                                                                                                           }),
                                                                                                                           j = d.Collection.extend({
                                                                                                                               model: e
                                                                                                                           }),
                                                                                                                           k = d.Collection.extend({
                                                                                                                               model: m
                                                                                                                           });
                                                                                                                       return d.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               vehicle: null,
                                                                                                                               payNow: null,
                                                                                                                               paylater: null,
                                                                                                                               inclusions: null,
                                                                                                                               exclusions: null,
                                                                                                                               optionals: null,
                                                                                                                               discounts: null,
                                                                                                                               rateInfo: null,
                                                                                                                               generalInfo: null,
                                                                                                                               session: null
                                                                                                                           },
                                                                                                                           url: function() {
                                                                                                                               var a = o.config.rootContext + "/rest/hertz/v2/reservations/" + this.getReservationId() + "/rate-details",
                                                                                                                                   d = !1,
                                                                                                                                   a = 0 == this.get("session").get("state") ? a + "/extras" : a + "/bookable",
                                                                                                                                   b = this.get("vehSipp"),
                                                                                                                                   c = this.get("quoteIndex");
                                                                                                                               b && (a += "?upsellSipp=" + b, d = !0);
                                                                                                                               c && (d ? a += "&quoteIndex=" + c : a += "?quoteIndex=" + c);
                                                                                                                               return a
                                                                                                                           },
                                                                                                                           getReservationId: function() {
                                                                                                                               return this.reservationId
                                                                                                                           },
                                                                                                                           parse: function(a, d) {
                                                                                                                               if (!n.sessionTimedOut(d)) {
                                                                                                                                   if (!a) return a;
                                                                                                                                   a.data && (a = a.data);
                                                                                                                                   if (a.vehicle) {
                                                                                                                                       var b = new l(a.vehicle);
                                                                                                                                       a.vehicle = b
                                                                                                                                   } else a.vehicle = null;
                                                                                                                                   a.payNow ? (b = new f(a.payNow), a.payNow = b, b.get("currency") && b.get("alternateCurrency") && (b.get("currency"), b.get("alternateCurrency")), a.payNow = b) : a.payNow = new f;
                                                                                                                                   a.payLater ? (b = new f(a.payLater), b.get("currency") &&
                                                                                                                                       b.get("alternateCurrency") && (b.get("currency"), b.get("alternateCurrency")), a.payLater = b) : a.payLater = new f;
                                                                                                                                   a.inclusions ? (b = new i, b.reset(a.inclusions), a.inclusions = b) : a.inclusions = new i;
                                                                                                                                   a.exclusions ? (b = new j, b.reset(a.exclusions), a.exclusions = b) : a.exclusions = new j;
                                                                                                                                   b = !1;
                                                                                                                                   a.optionals ? (b = new k, b.reset(a.optionals), a.optionals = b, b = !0) : a.optionals = new k;
                                                                                                                                   if (a.rateInfo) {
                                                                                                                                       var c = new g(a.rateInfo);
                                                                                                                                       a.rateInfo = c
                                                                                                                                   } else a.generalInfo && a.generalInfo.isTATour && (a.rateInfo = new g({
                                                                                                                                       isTATour: a.generalInfo.isTATour
                                                                                                                                   }));
                                                                                                                                   a.generalInfo ?
                                                                                                                                       (a.generalInfo.rateInfo = a.rateInfo, c = new h(a.generalInfo), a.generalInfo = c, a.generalInfo.get("milesNote1") && (c = new e, c.set({
                                                                                                                                           text: a.generalInfo.get("milesNote1")
                                                                                                                                       }), a.inclusions.add(c)), a.generalInfo.get("milesNote2") && (c = new e, c.set({
                                                                                                                                           text: a.generalInfo.get("milesNote2")
                                                                                                                                       }), a.exclusions.add(c, {
                                                                                                                                           at: 0
                                                                                                                                       }))) : a.generalInfo = new h;
                                                                                                                                   a.session = new p({
                                                                                                                                       suppressEditLink: a.generalInfo.get("suppressEditLink"),
                                                                                                                                       hasOptionals: b
                                                                                                                                   });
                                                                                                                                   return a
                                                                                                                               }
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/vehicle-view", ["jquery", "underscore", "backbone", "utils/gtm-tracker"], function(a, b, c, d) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-veh-details-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.session = this.options.session;
                                                                                                                               this.model.on("change", this.render, this);
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .rd-veh-detail-link": "showDetail"
                                                                                                                           },
                                                                                                                           showDetail: function() {
                                                                                                                               this.viewHelper.showVehicleDetail(this.model, {
                                                                                                                                   orSimilarText: this.content.bookablePage.rateDetailsView.similarVehicle,
                                                                                                                                   groupText: this.content.whatPage.whatViewVehicleInclude.groupText
                                                                                                                               });
                                                                                                                               if (!htz.config.isApp) {
                                                                                                                                   var a = {
                                                                                                                                       scenario: "productView-car"
                                                                                                                                   };
                                                                                                                                   a.payload = this.model;
                                                                                                                                   d.track(a)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               if (!this.model.get("sipp")) return this;
                                                                                                                               this.$el.html(this.template(a.extend(!0, this.model.attributes, {
                                                                                                                                   content: this.content,
                                                                                                                                   session: this.session.attributes
                                                                                                                               })));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content =
                                                                                                                                   this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/discount-view", ["jquery", "underscore", "backbone"], function(c, a, d) {
                                                                                                                       return d.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = a.template(c("#rate-details-discounts-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var b = this.model;
                                                                                                                               0 < a.size(b) ? (this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   discounts: b
                                                                                                                               })), this.$el.show()) : this.$el.hide();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/exclusive-list-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-excl-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               0 < this.collection.size() ? (this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   collection: this.collection.models
                                                                                                                               })), this.$el.show()) : this.$el.hide();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup &&
                                                                                                                                   this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/extra-detail-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-extDetail-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.html(this.template(a.extend(!0, this.model.attributes, {
                                                                                                                                   content: this.content
                                                                                                                               })));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/extras-list-view", ["jquery", "underscore", "backbone"], function(a, c, d) {
                                                                                                                       return d.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = c.template(a("#rate-details-extras-tpl").html());
                                                                                                                               this.collection = this.model;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.showExtrasEditLink = this.options.showExtrasEditLink;
                                                                                                                               this.state = this.options.state;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .rd-extras-detail-link": "showInfo",
                                                                                                                               "click .rd-extra-remove-link": "removeExtra",
                                                                                                                               "click .rd-extra-edit-link": "showEditPage"
                                                                                                                           },
                                                                                                                           showInfo: function(b) {
                                                                                                                               this.viewHelper.showExtraDetail(this.collection.get(a(b.currentTarget).attr("lang")))
                                                                                                                           },
                                                                                                                           removeExtra: function(b) {
                                                                                                                               a.publish(htz.res.config.ReservationConstants.REMOVE_EXTRAS, [this.collection.get(a(b.currentTarget).attr("lang")).get("id")])
                                                                                                                           },
                                                                                                                           showEditPage: function() {
                                                                                                                               this.viewHelper.showExtrasEditPage(this.state)
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               0 < this.collection.length ? (this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   collection: this.collection.models,
                                                                                                                                   showExtrasEditLink: this.showExtrasEditLink
                                                                                                                               })), this.$el.show()) : this.$el.hide()
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.collection = this.content = this.template = this.viewHelper = this.showExtrasEditLink = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/inclusive-list-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-incl-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.includedMiles = this.options.includedMiles;
                                                                                                                               this.showFeesAndSurchargeDiv = this.options.showFeesAndSurchargeDiv;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               0 < this.collection.size() || this.includedMiles ? (this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   collection: this.collection.models,
                                                                                                                                   isRateDisplay: this.options.isRateDisplay,
                                                                                                                                   includedMiles: this.includedMiles,
                                                                                                                                   showFeesAndSurchargeDiv: this.showFeesAndSurchargeDiv
                                                                                                                               })), this.$el.show()) : this.$el.hide();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/optionals-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-optionals-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               0 < this.collection.size() && this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   collection: this.collection.models,
                                                                                                                                   state: this.options.state
                                                                                                                               }))
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup &&
                                                                                                                                   this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/base-rate-view", ["jquery", "underscore", "backbone"], function(b, c, d) {
                                                                                                                       return d.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = c.template(b("#rate-details-base-rates-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.generalInfo = this.options.generalInfo;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a = this.model;
                                                                                                                               a && 0 < a.length && (a = a.models);
                                                                                                                               a && this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   baseRates: a,
                                                                                                                                   currency: this.model.get("currency"),
                                                                                                                                   isEMEARuleActive: this.generalInfo.get("isEMEARuleActive"),
                                                                                                                                   ccGuaranteed: this.generalInfo.get("ccGuaranteed")
                                                                                                                               }))
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/mandatory-rate-view", ["jquery", "underscore", "backbone"], function(b, c, d) {
                                                                                                                       return d.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = c.template(b("#rate-details-mandatory-rates-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.generalInfo = this.options.generalInfo;
                                                                                                                               this.showTaxFeildInsteadofFees = this.generalInfo.get("isDisplayInclusionRates");
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a = this.model;
                                                                                                                               a && 0 < a.length && (a = a.models);
                                                                                                                               a && this.$el.html(this.template({
                                                                                                                                   content: this.content,
                                                                                                                                   manRates: a,
                                                                                                                                   currency: this.model.get("currency"),
                                                                                                                                   isCalcTaxOn: this.generalInfo.get("isCalcTaxOn"),
                                                                                                                                   isEMEARuleActive: this.generalInfo.get("isEMEARuleActive"),
                                                                                                                                   isTax: this.showTaxFeildInsteadofFees
                                                                                                                               }))
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = this.generalInfo = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/taxes-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-taxes-tpl").html());
                                                                                                                               this.isSeparateTax = this.options.isSeparateTax;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.taxes = this.options.taxes ? this.options.taxes : null;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.html(this.template(a.extend(!0, this.model.attributes, {
                                                                                                                                   content: this.content,
                                                                                                                                   taxes: this.taxes.models,
                                                                                                                                   isSeparateTax: this.isSeparateTax
                                                                                                                               })));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/total-rate-view", "jquery underscore framework/view/abstract-view reservation/utils/core/reservation-utils reservation/process-info/core/model/process-model reservation/process-config/core/reservation-constants".split(" "), function(d, e, c, f, g, h) {
                                                                                                                       return c.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = d("#rate-details-total-splits-tpl");
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.payType = this.options.payType;
                                                                                                                               this.isPrepay = this.options.isPrepay;
                                                                                                                               this.rateInfo = this.options.rateInfo;
                                                                                                                               this.totalPlaceholders = {
                                                                                                                                   toBePaid: this.content.bookablePage.rateDetailsView.toBePaidTotal
                                                                                                                               };
                                                                                                                               this.approxPlaceholders = {
                                                                                                                                   toBePaid: this.content.bookablePage.rateDetailsView.toBePaid
                                                                                                                               };
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var c = g.getStep() === h.REVIEW,
                                                                                                                                   a = "payLater" == this.payType && this.model.get("total") ? this.model.get("total") : 0,
                                                                                                                                   a = {
                                                                                                                                       isPrepay: this.isPrepay,
                                                                                                                                       currency: this.rateInfo.get("currency"),
                                                                                                                                       alternateCurrency: this.rateInfo.get("alternateCurrency"),
                                                                                                                                       payLater: a
                                                                                                                                   },
                                                                                                                                   b = f.approxRateDecider(a),
                                                                                                                                   a = this.rateInfo.get("balance"),
                                                                                                                                   b = b ? this.approxPlaceholders : this.totalPlaceholders;
                                                                                                                               0 <= a ? b.creditCardBalanceText = this.content.bookablePage.rateDetailsView.yourCCWillBeCharged : (b.creditCardBalanceText = this.content.bookablePage.rateDetailsView.yourCCWillBeRefunded, a = Math.abs(a));
                                                                                                                               this.$el.empty();
                                                                                                                               this.$el.append(e.template(this.template.html(), d.extend({}, this.model.attributes, {
                                                                                                                                   content: this.content,
                                                                                                                                   placeholders: b,
                                                                                                                                   isApp: htz.config.isApp,
                                                                                                                                   isReview: c,
                                                                                                                                   payType: this.payType,
                                                                                                                                   rateInfo: this.rateInfo.attributes,
                                                                                                                                   balance: a
                                                                                                                               })));
                                                                                                                               this.postRender()
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/vehicle-detail-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b.template(a("#rate-details-vehDetail-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.html(this.template(a.extend(!0, this.model.attributes, {
                                                                                                                                   content: this.content
                                                                                                                               })));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.content = this.template = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rate-details/core/view/rate-details-view", "jquery underscore reservation/rate-details/core/view/rate-type-breakdown-view reservation/rate-details/core/view/optionals-view framework/view/abstract-view reservation/rate-details/core/view/total-rental-amount-view utils/gtm-tracker".split(" "), function(b, c, d, e, f, g, h) {
                                                                                                                       Backbone.pubSub = c.extend({}, Backbone.Events);
                                                                                                                       return f.extend({
                                                                                                                           initialize: function() {
                                                                                                                               Backbone.pubSub.on("extrasShowFullDetail", this.showFullDetail, this);
                                                                                                                               this.template = c.template(b("#rate-details-main-tpl").html());
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.model.on("change", this.render, this)
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .rd-fuel-surcharge-link": "showFuelInfo",
                                                                                                                               "click .rd-full-link": "showFullDetail",
                                                                                                                               "click .rd-view-options-link": "handleOptionalDisplay",
                                                                                                                               "click .rd-currency-converter-link": "showCurrencyConverter",
                                                                                                                               "click #rd-rate > header a": "showEditPage",
                                                                                                                               "click .rd-edit-link": "showEditPage",
                                                                                                                               "click .rd-header-crtl": "handleRatedetailToggle"
                                                                                                                           },
                                                                                                                           showFuelInfo: function() {
                                                                                                                               this.viewHelper.showFuelOptionDetail(this.model.get("locationCode"))
                                                                                                                           },
                                                                                                                           showFullDetail: c.debounce(function() {
                                                                                                                               this.viewHelper.showFullRateDetail(this.model, this.content, this.viewHelper, this.content.bookablePage.rateDetailsView.moreDetailAboutQuote)
                                                                                                                           }, 300),
                                                                                                                           handleOptionalDisplay: function(a) {
                                                                                                                               b(a.currentTarget).parent().hasClass("rd-opt-detail-link1") ? (this.$(".rd-opt-detail-link1").hide(), this.$(".rd-opt-detail-link2").show()) : (this.$(".rd-opt-detail-link2").hide(), this.$(".rd-opt-detail-link1").show());
                                                                                                                               this.$(".rd-optionals").toggleClass("hidden-item")
                                                                                                                           },
                                                                                                                           showCurrencyConverter: function() {
                                                                                                                               this.viewHelper.showCurrencyConverter(this.model)
                                                                                                                           },
                                                                                                                           showEditPage: function() {
                                                                                                                               this.viewHelper.showVehicleEditPage(this.model.get("session").get("state"));
                                                                                                                               if (!htz.config.isApp) {
                                                                                                                                   var a = {
                                                                                                                                       scenario: "removeFromCart-car"
                                                                                                                                   };
                                                                                                                                   a.payload = this.model;
                                                                                                                                   h.track(a)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           handleRatedetailToggle: function() {
                                                                                                                               var a = this.$(".rd-header-crtl");
                                                                                                                               a && a.is(":visible") && (this.$(".rd-detail, #rd-more, .rd-pending-details").toggleClass("hidden-item"), htz.config.isApp && "#res-vehicles-page-container" == location.hash && (b(".rd-edit-cont").find(".rd-edit-link").remove(), b("#rd-more").find(".rd-info").remove()),
                                                                                                                                   this.$el.find("#expand_collapse_vehicle").hasClass("icons-expand_icon") ? this.$el.find("#expand_collapse_vehicle").removeClass("icons-expand_icon").addClass("icons-collapse_icon") : this.$el.find("#expand_collapse_vehicle").removeClass("icons-collapse_icon").addClass("icons-expand_icon"))
                                                                                                                           },
                                                                                                                           formatPayNowPayLaterView: function() {
                                                                                                                               b.trim(this.$("#rd-pay-now").html()).length ? b.trim(this.$("#rd-pay-later").html()).length || (this.$("#rd-pay-later").hide(), this.$(".plus").hide(), this.$(".equals").css("visibility",
                                                                                                                                   "hidden")) : (this.$("#rd-pay-now").hide(), this.$(".plus").hide(), this.$(".equals").css("visibility", "hidden"))
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               return this.renderView()
                                                                                                                           },
                                                                                                                           renderYourself: function() {
                                                                                                                               var a = this.model.get("generalInfo"),
                                                                                                                                   a = a && a.get("isPrepay") ? a.get("isPrepay") : !1;
                                                                                                                               if (this.model.get("vehicle")) {
                                                                                                                                   var c = this;
                                                                                                                                   this.$el.html(this.template({
                                                                                                                                       content: this.content,
                                                                                                                                       session: this.model.get("session").attributes,
                                                                                                                                       rateInfo: this.model.get("rateInfo").attributes,
                                                                                                                                       generalInfo: this.model.get("generalInfo").attributes
                                                                                                                                   }));
                                                                                                                                   a &&
                                                                                                                                       (this.model.get("payNow") && 0 < this.model.get("payNow").get("total")) && (this.payNowView = new d({
                                                                                                                                           viewHelper: this.viewHelper,
                                                                                                                                           content: this.content,
                                                                                                                                           el: this.$("#rd-pay-now"),
                                                                                                                                           model: this.model,
                                                                                                                                           type: "payNow",
                                                                                                                                           isRateDisplay: this.options.isRateDisplay
                                                                                                                                       }));
                                                                                                                                   if (!a || a && this.model.get("payLater") && (0 < this.model.get("payLater").get("total") || 0 < this.model.get("payLater").get("extras").length)) this.payLaterView = new d({
                                                                                                                                       viewHelper: this.viewHelper,
                                                                                                                                       content: this.content,
                                                                                                                                       el: this.$("#rd-pay-later"),
                                                                                                                                       model: this.model,
                                                                                                                                       type: "payLater",
                                                                                                                                       isRateDisplay: this.options.isRateDisplay
                                                                                                                                   });
                                                                                                                                   this.model.get("rateInfo") && 0 < this.model.get("rateInfo").get("approxTotal") ? this.totalRentalAmountView = new g({
                                                                                                                                       content: this.content,
                                                                                                                                       el: this.$("#rd-rental-total"),
                                                                                                                                       model: this.model.get("rateInfo"),
                                                                                                                                       isPrepay: a,
                                                                                                                                       payLater: this.model.get("payLater").get("total")
                                                                                                                                   }) : this.$("#rd-rental-total").hide();
                                                                                                                                   this.optionalView = new e({
                                                                                                                                       viewHelper: this.viewHelper,
                                                                                                                                       content: this.content,
                                                                                                                                       el: this.$(".rd-optionals"),
                                                                                                                                       collection: this.model.get("optionals"),
                                                                                                                                       isOptionalsWithTax: this.model.get("generalInfo").get("isOptionalsWithTax"),
                                                                                                                                       state: this.model.get("session").get("state")
                                                                                                                                   });
                                                                                                                                   this.formatPayNowPayLaterView();
                                                                                                                                   b(document).off("click", "#rqrLookupRentalQualification").on("click", "#rqrLookupRentalQualification", function() {
                                                                                                                                       c.viewHelper.showRentalQualification(c.model.get("locationCode"))
                                                                                                                                   })
                                                                                                                               }
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.content = this.template = this.viewHelper = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define('reservation/rate-details/core/view/helper/view-helper', ['utils/utils-proxy', 'reservation/rate-details/core/model/vehicle-model',
                                                                                                                           'reservation/rate-details/core/view/rate-details-view',
                                                                                                                           'reservation/rate-details/core/view/vehicle-detail-view',
                                                                                                                           'reservation/rate-details/core/view/extra-detail-view',
                                                                                                                           'config/app-config', 'reservation/process-info/core/model/process-model',
                                                                                                                           'reservation/config', 'helpers/resource-loader', 'reservation/process-config/core/reservation-constants', 'res/res-resource-config', 'reservation/utils/core/reservation-utils'
                                                                                                                       ],
                                                                                                                       function(utilsProxy, rateDetailsModel, rateDetailsView, vehicleDetailView, extraDetailView,
                                                                                                                           appConfig, process, resConfig, ResourceLoader, ResConstants, ResourceConfig, ResUtils) {

                                                                                                                           var modelRef, viewRef, lightboxRef;

                                                                                                                           function getLightBox(isNew) {
                                                                                                                               if (isNew) {
                                                                                                                                   return new utilsProxy.getLightbox();
                                                                                                                               }
                                                                                                                               if (!lightboxRef) {
                                                                                                                                   lightboxRef = new utilsProxy.getLightbox();
                                                                                                                               } else if (lightboxRef.isInUse()) {
                                                                                                                                   return new utilsProxy.getLightbox();
                                                                                                                               }

                                                                                                                               return lightboxRef;
                                                                                                                           }


                                                                                                                           var viewHelper = {
                                                                                                                               /**
                                                                                                                               	@description It shows vehicle information in more detail in lightbox.
                                                                                                                               	@function 
                                                                                                                               	@param {object} model It's the vehicle model. 
                                                                                                                               	@param {object} content To be used for the title and "or similar" text
                                                                                                                               */
                                                                                                                               showVehicleDetail: function(model, content) {
                                                                                                                                   var overlayTitle = ResUtils.generateVehicleDetailTitle(model, content);
                                                                                                                                   getLightBox().overlay({
                                                                                                                                       title: overlayTitle,
                                                                                                                                       width: 650
                                                                                                                                   }, (new vehicleDetailView({
                                                                                                                                       model: model
                                                                                                                                   })).$el);
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It shows extras information in more detail in lightbox.
                                                                                                                               	@function 
                                                                                                                               	@param {object} model Its the extras model. 
                                                                                                                               */
                                                                                                                               showExtraDetail: function(model) {
                                                                                                                                   getLightBox().overlay({
                                                                                                                                       title: model.get("name")
                                                                                                                                   }, (new extraDetailView({
                                                                                                                                       model: model
                                                                                                                                   })).$el);
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It shows the fuel purchase options disclaimer.
                                                                                                                               	@function 
                                                                                                                               */
                                                                                                                               showFuelOptionDetail: function(loactionCode) {
                                                                                                                                   window.open(appConfig.config.rootContext + "/reservation/reviewmodifycancel/templates/rentalTerms.jsp?KEYWORD=CFPO&EOAG=" + loactionCode, "Rental_Terms", "width=700, height=500, left=200,top=100");
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It shows currency converter.
                                                                                                                               	@function 
                                                                                                                               */
                                                                                                                               showCurrencyConverter: function(modelRef) {

                                                                                                                                   var toLoad = ResourceConfig.getPageInfo(ResConstants.CURRENCY_CONVERTER);

                                                                                                                                   toLoad.callback = function(options) {
                                                                                                                                       require(['reservation/currency-converter/core/presenter/currency-converter-presenter'], function(ConverterPresenter) {
                                                                                                                                           ConverterPresenter.show({
                                                                                                                                               template: options.template,
                                                                                                                                               content: options.content
                                                                                                                                           }, modelRef);
                                                                                                                                       });
                                                                                                                                   }

                                                                                                                                   ResourceLoader.load(toLoad);
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It shows rental qualifications.
                                                                                                                               	@function 
                                                                                                                               */
                                                                                                                               showRentalQualification: function(loactionCode) {
                                                                                                                                   window.open(appConfig.config.rootContext + '/reservation/reviewmodifycancel/templates/rentalTerms.jsp?EOAG=' + loactionCode, 'Rental_Terms_and_Qualification', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=200,top=100,width=700,height=500');
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It takes user to vehicle page.
                                                                                                                               	@function 
                                                                                                                               */
                                                                                                                               showVehicleEditPage: function(state) {
                                                                                                                                   if (state == 2) {
                                                                                                                                       require(['reservation/confirmation/core/view/helper/view-helper'], function(viewHelper) {
                                                                                                                                           viewHelper.editVehicle();
                                                                                                                                       });
                                                                                                                                       return;
                                                                                                                                   }

                                                                                                                                   var toPage = htz.res.config.ReservationConstants.VEHICLES;
                                                                                                                                   if (process.isModify()) {
                                                                                                                                       toPage = 'modify/' + toPage;
                                                                                                                                   }
                                                                                                                                   resConfig.getRotar().rotate(toPage);
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It takes user to extras page.
                                                                                                                               	@function 
                                                                                                                               */
                                                                                                                               showExtrasEditPage: function(state) {
                                                                                                                                   if (state == 2) {
                                                                                                                                       require(['reservation/confirmation/core/view/helper/view-helper'], function(viewHelper) {
                                                                                                                                           viewHelper.editExtras();
                                                                                                                                       });
                                                                                                                                       return;
                                                                                                                                   }

                                                                                                                                   var toPage = htz.res.config.ReservationConstants.EXTRAS;
                                                                                                                                   if (process.isModify()) {
                                                                                                                                       toPage = 'modify/' + toPage;
                                                                                                                                   }
                                                                                                                                   resConfig.getRotar().rotate(toPage);
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It shows rate details in more detail on lightbox.
                                                                                                                               	@function 
                                                                                                                               	@param {object} model Its the rate detail model. 
                                                                                                                               */
                                                                                                                               showFullRateDetail: function(model, content, viewHelper, title) {
                                                                                                                                   var newModel = model.clone();
                                                                                                                                   newModel.get('session').set({
                                                                                                                                       'state': 3,
                                                                                                                                       'showVehEditLink': false,
                                                                                                                                       'showExtrasEditLink': false,
                                                                                                                                   }, {
                                                                                                                                       silent: true
                                                                                                                                   });
                                                                                                                                   newModel.get('generalInfo').set({
                                                                                                                                       'isEMEARuleActive': false
                                                                                                                                   }, {
                                                                                                                                       silent: true
                                                                                                                                   });

                                                                                                                                   getLightBox().overlay({
                                                                                                                                       title: title,
                                                                                                                                       width: 1000,
                                                                                                                                       top: ($(document).scrollTop() + 50)
                                                                                                                                   }, (new rateDetailsView({
                                                                                                                                       model: newModel,
                                                                                                                                       isRateDisplay: true,
                                                                                                                                       content: content,
                                                                                                                                       viewHelper: viewHelper
                                                                                                                                   })).render().$el);
                                                                                                                               },
                                                                                                                               doCleanup: function() {
                                                                                                                                   if (modelRef && modelRef.doCleanup) {
                                                                                                                                       modelRef.doCleanup();
                                                                                                                                   }
                                                                                                                                   if (viewRef && viewRef.doCleanup) {
                                                                                                                                       viewRef.doCleanup();
                                                                                                                                   }
                                                                                                                                   modelRef = viewRef = lightboxRef;
                                                                                                                               }
                                                                                                                           };

                                                                                                                           return viewHelper;
                                                                                                                       });

                                                                                                                   define('reservation/rate-details/core/presenter/rate-details-presenter', ['json', 'utils/sessionhelper', 'reservation/rate-details/core/model/rate-details-model',
                                                                                                                           'reservation/rate-details/core/view/rate-details-view',
                                                                                                                           'reservation/rate-details/core/view/helper/view-helper', 'config/app-config', 'utils/utils-proxy',
                                                                                                                           'reservation/process-info/core/model/process-model', 'reservation/process-config/core/reservation-constants', 'reservation/rate-details/core/model/vehicle-model'
                                                                                                                       ],
                                                                                                                       function(JSON, sessionHelper, rateDetailsModel, rateDetailsView, viewHelper, appConfig, utilsProxy, process, resConstants, rateVehicleModel) {

                                                                                                                           var modelRef, viewRef, listenerRef;

                                                                                                                           $.subscribe(resConstants.CHANGE_VEHICLE_IN_REVIEW_BOOK, function(_, sipp) {
                                                                                                                               presenter.reload(sipp);
                                                                                                                           });

                                                                                                                           function saveToStorage() {
                                                                                                                               try {
                                                                                                                                   if (modelRef) {
                                                                                                                                       sessionHelper.setItem(resConstants.RATE_DETAILS_DATA, JSON.stringify(modelRef.toJSON()));
                                                                                                                                   }
                                                                                                                               } catch (e) {}
                                                                                                                           }

                                                                                                                           var presenter = {
                                                                                                                               showRateDetail: function(modelInfo, target, listener, content, options) {
                                                                                                                                   if (!modelInfo) {
                                                                                                                                       var resRateDetails = sessionHelper.getItem(resConstants.RATE_DETAILS_DATA);
                                                                                                                                       if (resRateDetails) {
                                                                                                                                           resRateDetails = JSON.parse(resRateDetails);
                                                                                                                                           if (resRateDetails) {
                                                                                                                                               modelRef = new rateDetailsModel();
                                                                                                                                               modelRef.set(modelRef.parse(resRateDetails));
                                                                                                                                           } else {
                                                                                                                                               return null;
                                                                                                                                           }
                                                                                                                                       } else {
                                                                                                                                           return null;
                                                                                                                                       }
                                                                                                                                   } else {
                                                                                                                                       try {
                                                                                                                                           modelInfo.get("vehInfo");
                                                                                                                                           modelRef = modelInfo;
                                                                                                                                       } catch (e) {
                                                                                                                                           modelRef = new rateDetailsModel();

                                                                                                                                           modelRef.set(modelRef.parse(modelInfo));
                                                                                                                                           if (options.vehicleData) {
                                                                                                                                               modelRef.set('vehicle', new rateVehicleModel(options.vehicleData));
                                                                                                                                           }
                                                                                                                                           modelRef.set()
                                                                                                                                       }
                                                                                                                                   }

                                                                                                                                   if (listener) {
                                                                                                                                       listenerRef = listener;
                                                                                                                                   }

                                                                                                                                   var optional = false;

                                                                                                                                   if (options) {
                                                                                                                                       optional = !!options.optional;
                                                                                                                                   }

                                                                                                                                   if (viewRef) {
                                                                                                                                       $(target).off();
                                                                                                                                   }

                                                                                                                                   viewRef = new rateDetailsView({
                                                                                                                                       viewHelper: viewHelper,
                                                                                                                                       content: content,
                                                                                                                                       el: target,
                                                                                                                                       model: modelRef,
                                                                                                                                       isRateDisplay: false
                                                                                                                                   });
                                                                                                                                   viewRef.setOptional(optional);

                                                                                                                                   viewRef.render();

                                                                                                                                   return viewRef;
                                                                                                                               },
                                                                                                                               /**
                                                                                                                               	@description It notifies extras page about any extras removal from rate detail.
                                                                                                                               	@function 
                                                                                                                               	@param {string} vehSipp Its the vehicle sipp for which the rate detail is being reloaded. 
                                                                                                                               	@param {function} rateCallback Its trhe callback which will be called once the reload is successful. 
                                                                                                                               */
                                                                                                                               reload: function(vehSipp, callback) {
                                                                                                                                   if (modelRef) {
                                                                                                                                       if (vehSipp) {
                                                                                                                                           modelRef.set({
                                                                                                                                               "vehSipp": vehSipp
                                                                                                                                           }, {
                                                                                                                                               silent: true
                                                                                                                                           });
                                                                                                                                       }

                                                                                                                                       if (process.isModify()) {
                                                                                                                                           var confNumber = sessionHelper.getItem(resConstants.CONFIRMATION_NUMBER);

                                                                                                                                           modelRef.reservationId = confNumber;
                                                                                                                                       } else {
                                                                                                                                           var resVehicleData = sessionHelper.getItem(resConstants.VEHICLES_DATA);
                                                                                                                                           var resVehicle = JSON.parse(resVehicleData);
                                                                                                                                           var href = resVehicle["href"];
                                                                                                                                           var splited = href.split("/");
                                                                                                                                           var quoteId = splited[splited.length - 2];

                                                                                                                                           modelRef.reservationId = quoteId;
                                                                                                                                       }

                                                                                                                                       if (!appConfig.config.isApp) {
                                                                                                                                           utilsProxy.getSpinner().spin();
                                                                                                                                       }
                                                                                                                                       modelRef.fetch({
                                                                                                                                           cache: false,
                                                                                                                                           success: function(model, response) {
                                                                                                                                               if (response) {
                                                                                                                                                   saveToStorage();

                                                                                                                                                   var payNow, paylater, approxTotal, paidAmount, balance, rateInfo;

                                                                                                                                                   payNow = (response.payNow && response.payNow.get('total')) ? response.payNow.get('total') : 0;
                                                                                                                                                   payLater = (response.payLater && response.payLater.get('total')) ? response.payLater.get('total') : 0;

                                                                                                                                                   rateInfo = response.rateInfo;
                                                                                                                                                   if (rateInfo) {
                                                                                                                                                       approxTotal = rateInfo.get('approxTotal');
                                                                                                                                                       paidAmount = rateInfo.get('paidAmount');
                                                                                                                                                       balance = rateInfo.get('balance');
                                                                                                                                                   } else {
                                                                                                                                                       approxTotal = paidAmount = balance = 0;
                                                                                                                                                   }

                                                                                                                                                   $.publish(resConstants.CHANGE_RATE_IN_REVIEW_BOOK, [payNow, payLater, approxTotal, paidAmount, balance]);
                                                                                                                                                   if (callback) {
                                                                                                                                                       callback();
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                           },
                                                                                                                                           complete: function() {
                                                                                                                                               if (!appConfig.config.isApp) {
                                                                                                                                                   utilsProxy.getSpinner().stop();
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                   }
                                                                                                                               },

                                                                                                                               reloadWithResponse: function(response) {
                                                                                                                                   //This trigger on change subscribed on rate-details-view and renders
                                                                                                                                   $.publish(resConstants.CHANGE_RATE_IN_REVIEW_BOOK, [response.payNow, response.payLater, response.approxTotal, response.paidAmount, response.balance]);
                                                                                                                                   modelRef.set(modelRef.parse(response));

                                                                                                                                   saveToStorage();
                                                                                                                               },

                                                                                                                               reloadPoints: async function(vehSipp, rateCallback, quoteIndex, val1, val2) {
                                                                                                                                   if (modelRef) {
                                                                                                                                       if (vehSipp) {
                                                                                                                                           modelRef.set({
                                                                                                                                               "vehSipp": vehSipp
                                                                                                                                           }, {
                                                                                                                                               silent: true
                                                                                                                                           });
                                                                                                                                       }
                                                                                                                                       if (quoteIndex.length > -1) {
                                                                                                                                           modelRef.set({
                                                                                                                                               "quoteIndex": quoteIndex
                                                                                                                                           }, {
                                                                                                                                               silent: true
                                                                                                                                           });
                                                                                                                                       }
                                                                                                                                       await modelRef.fetch({
                                                                                                                                           cache: false,
                                                                                                                                           success: function(model, response) {
                                                                                                                                               if (response) {
                                                                                                                                                   saveToStorage();

                                                                                                                                                   if (rateCallback && (typeof rateCallback == 'function')) {
                                                                                                                                                       var approxTotal = (response.rateInfo && response.rateInfo.get('approxTotal')) ? response.rateInfo.get('approxTotal') : '',
                                                                                                                                                           totalAvailablePoints = (response.generalInfo && response.generalInfo.get('totalAvailablePoints')) ? response.generalInfo.get('totalAvailablePoints') : '';

                                                                                                                                                       rateCallback(response.payNow, response.payLater, approxTotal);
                                                                                                                                                       val1.text(approxTotal);
                                                                                                                                                       val2.text(totalAvailablePoints);
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                   }
                                                                                                                               },
                                                                                                                               doCleanup: function() {
                                                                                                                                   if (modelRef && modelRef.doCleanup) {
                                                                                                                                       modelRef.doCleanup();
                                                                                                                                   }
                                                                                                                                   if (viewRef && viewRef.doCleanup) {
                                                                                                                                       viewRef.doCleanup();
                                                                                                                                   }

                                                                                                                                   modelRef = viewRef = listenerRef = null;
                                                                                                                               }
                                                                                                                           };

                                                                                                                           return presenter;
                                                                                                                       });

                                                                                                                   define("reservation/vehicle/core/model/quote-model", ["utils/restmodel", "config/app-config"], function(a) {
                                                                                                                       return a.extend({
                                                                                                                           defaults: {
                                                                                                                               id: "",
                                                                                                                               href: "",
                                                                                                                               prepaid: 0,
                                                                                                                               rateType: 0,
                                                                                                                               price: "",
                                                                                                                               approxTotalPrice: "",
                                                                                                                               currency: "",
                                                                                                                               save: "",
                                                                                                                               vehicleIndex: 0,
                                                                                                                               quoteIndex: 0,
                                                                                                                               fee: "",
                                                                                                                               allNotAvailableOrSoldout: !1,
                                                                                                                               guarantee: "",
                                                                                                                               mileageCap: "",
                                                                                                                               isUnlimitedMiles: !1,
                                                                                                                               priced: 0,
                                                                                                                               prepaidNotice: 0,
                                                                                                                               rate: "",
                                                                                                                               guaranteed: !1,
                                                                                                                               phone: "",
                                                                                                                               vto: "",
                                                                                                                               isSpecialityVehicle: !1,
                                                                                                                               isFlightRequired: !1,
                                                                                                                               creditCardRequired: !1,
                                                                                                                               rateCode: "",
                                                                                                                               ccGuaranteed: !1,
                                                                                                                               cancelFeeModel: null
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments);
                                                                                                                               this.get("price") && this.set({
                                                                                                                                   price: parseFloat(this.get("price")).toFixed(2)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           handleSessionTimeout: function(a) {
                                                                                                                               this.trigger("session-timeout", a)
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/model/vehicle-model", ["backbone", "config/app-config", "reservation/vehicle/core/model/vehicle-collection-model", "reservation/vehicle/core/model/quote-model"], function(d, e, f, g) {
                                                                                                                       return d.Model.extend({
                                                                                                                           defaults: {
                                                                                                                               imgPrefix: "//images.hertz.com/vehicles/220x128/",
                                                                                                                               carGroup: "",
                                                                                                                               carTypeDisplay: ""
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.get("quotes"),
                                                                                                                                   b = this.get("collection"),
                                                                                                                                   c = this.get("icon");
                                                                                                                               if (a) {
                                                                                                                                   var h = d.Collection.extend({
                                                                                                                                       model: g
                                                                                                                                   });
                                                                                                                                   this.set("quotes", new h(a))
                                                                                                                               }
                                                                                                                               b && (a = "icons-" + (this.get("bold") ?
                                                                                                                                   f[b - 1].bold : f[b - 1].normal), this.set("collectionClass", a));
                                                                                                                               c && (this.set("iconsSmall", "icons-" + c + "_sm"), this.set("iconsLarge", "icons-" + c + "_lg"));
                                                                                                                               this.get("multiRate") && this.set("dualRate", "dual");
                                                                                                                               this.get("selected") && this.set("selected", "selected");
                                                                                                                               this.get("passengers") && this.set("passengersNumber", this.get("passengers").split(" ")[0]);
                                                                                                                               !e.config.isApp && "phone" === e.config.deviceGroup && this.set("hideVehicleDetails", !0);
                                                                                                                               this.set("img_url", this.get("imgPrefix") + this.get("img"))
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/model/vehicle-collection-model", [], function() {
                                                                                                                       return [{
                                                                                                                           normal: "green"
                                                                                                                       }, {
                                                                                                                           normal: "fun"
                                                                                                                       }, {
                                                                                                                           normal: "prestige",
                                                                                                                           bold: "prestige_sm"
                                                                                                                       }, {
                                                                                                                           normal: "supercars",
                                                                                                                           bold: "adrenaline_sm"
                                                                                                                       }, {
                                                                                                                           normal: "family"
                                                                                                                       }, {
                                                                                                                           normal: "greentravel",
                                                                                                                           bold: "greentravel_sm"
                                                                                                                       }]
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/model/vehicle-page-model", ["backbone", "utils/restmodel", "reservation/vehicle/core/model/vehicle-model"], function(f, g, h) {
                                                                                                                       return g.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments)
                                                                                                                           },
                                                                                                                           parse: function(b) {
                                                                                                                               var a = b.vehicles;
                                                                                                                               if (a) {
                                                                                                                                   var c = f.Collection.extend({
                                                                                                                                       model: h
                                                                                                                                   });
                                                                                                                                   b.vehicles = new c(a)
                                                                                                                               }
                                                                                                                               b.metaData = new f.Model(b.metaData);
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           doSort: function() {
                                                                                                                               var b = this.get("vehicles"),
                                                                                                                                   a = this.get("sortBy"),
                                                                                                                                   c = this.get("sortDir"),
                                                                                                                                   a = "price" === a || "size" ===
                                                                                                                                   a ? a : null,
                                                                                                                                   c = "down" === c ? -1 : 1;
                                                                                                                               b.comparator = "size" === a ? function(a) {
                                                                                                                                   return a.get("sippIndex") * c
                                                                                                                               } : "price" === a ? function(a, b) {
                                                                                                                                   var d = a.get("quotes").models[0].get("price"),
                                                                                                                                       e = b.get("quotes").models[0].get("price");
                                                                                                                                   return d && e ? (d - e) * c : d ? -1 : e ? 1 : a.get("vehicleIndex") - b.get("vehicleIndex")
                                                                                                                               } : function(a) {
                                                                                                                                   return a.get("vehicleIndex")
                                                                                                                               };
                                                                                                                               b.sort()
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/quote-view", "jquery underscore backbone utils/utils-proxy utils/sessionhelper reservation/process-config/core/reservation-constants reservation/vehicle/core/view/helper/view-helper reservation/vehicle/core/view/ratedetails-overlay-view utils/gtm-tracker reservation/common/retry/core/view/retry-view config/app-config reservation/itinerary/core/model/itinerary-model reservation/reservation-info/core/model/reservation-info-model".split(" "), function(i, p, r, g, f, h,
                                                                                                                       m, s, l, q, j, n) {
                                                                                                                       function k() {
                                                                                                                           null == o && (o = g.getLightbox());
                                                                                                                           return o
                                                                                                                       }
                                                                                                                       var o = null;
                                                                                                                       return r.View.extend({
                                                                                                                           initialize: function(a) {
                                                                                                                               this.page = a.page;
                                                                                                                               this.index = a.index;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewReferrer = this.options.viewReferrer;
                                                                                                                               this.bindEvents()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click button": "handleCDPVerification",
                                                                                                                               "click .show-rate-details": "showRateDetails",
                                                                                                                               "click #returnHomeBtn": "returnToHomePage"
                                                                                                                           },
                                                                                                                           bindEvents: function() {
                                                                                                                               this.model.on("session-timeout", this.handleSessionTimeout, this)
                                                                                                                           },
                                                                                                                           handleSessionTimeout: function(a) {
                                                                                                                               a &&
                                                                                                                                   (window.location.href = a)
                                                                                                                           },
                                                                                                                           isCDPVerificationReq: function(a) {
                                                                                                                               var c = i.Deferred(),
                                                                                                                                   b;
                                                                                                                               try {
                                                                                                                                   b = a
                                                                                                                               } catch (f) {
                                                                                                                                   b = ""
                                                                                                                               }
                                                                                                                               i.ajax({
                                                                                                                                   type: "GET",
                                                                                                                                   url: j.config.rootContext + "/rest/hertz/v2/reservations/AAA/vehicles/" + b,
                                                                                                                                   cache: !1,
                                                                                                                                   async: !1,
                                                                                                                                   dataType: "jsonp",
                                                                                                                                   success: function(a) {
                                                                                                                                       "true" == a.data ? c.resolve() : c.reject()
                                                                                                                                   },
                                                                                                                                   error: function(a, b, f) {
                                                                                                                                       console.error("error fetching isCDPVerificationReq endpoint");
                                                                                                                                       console.error(b);
                                                                                                                                       console.error(f);
                                                                                                                                       c.reject()
                                                                                                                                   }
                                                                                                                               });
                                                                                                                               return c.promise()
                                                                                                                           },
                                                                                                                           handleCDPVerification: p.debounce(function() {
                                                                                                                               var a = this,
                                                                                                                                   c, b = new n(JSON.parse(f.getItem(h.ITINERARY_DATA)));
                                                                                                                               c = b.get("metaData").get("loggedIn") ? "otherCdpIndicator" == b.get("formData").get("cdpRadioButton") ? b.get("formData").get("memberOtherCdpField") : b.get("formData").get("memberSelectedCdp") : b.get("formData").get("cdpField");
                                                                                                                               try {
                                                                                                                                   "US" == htz.config.pos ? this.isCDPVerificationReq(c).done(function() {
                                                                                                                                       function c(d) {
                                                                                                                                           d.stopPropagation();
                                                                                                                                           if ("memberValidationSuccess" == d.data.status || "memberValidationCancel" == d.data.status)
                                                                                                                                               if ("memberValidationSuccess" == d.data.status) {
                                                                                                                                                   window.removeEventListener(g, c, !1);
                                                                                                                                                   i("#aaanational-membervalidation").remove();
                                                                                                                                                   if (!htz.config.isApp) try {
                                                                                                                                                       var e = {
                                                                                                                                                           scenario: "cdp_validation",
                                                                                                                                                           payload: {}
                                                                                                                                                       };
                                                                                                                                                       e.payload.id = b.get("formData").get("cdpField");
                                                                                                                                                       e.payload.name = a.viewReferrer.metaData.get("itinerary").discounts[0];
                                                                                                                                                       e.payload.status = "validated";
                                                                                                                                                       l.track(e)
                                                                                                                                                   } catch (j) {
                                                                                                                                                       console.log("Error with AAA CDP validation." + j.message)
                                                                                                                                                   }
                                                                                                                                                   a.model.set({
                                                                                                                                                       partnerCDPVerified: 1
                                                                                                                                                   }, {
                                                                                                                                                       silent: !0
                                                                                                                                                   });
                                                                                                                                                   a.submit()
                                                                                                                                               } else {
                                                                                                                                                   if ("memberValidationCancel" == d.data.status) {
                                                                                                                                                       window.removeEventListener(g, c, !1);
                                                                                                                                                       i("#aaanational-membervalidation").remove();
                                                                                                                                                       f.setItem(h.VEHICLES_ERROR_DATA,
                                                                                                                                                           '{"messages":["' + (a.content.reservationGlobals.errorMsg.AAAValidationFailed ? a.content.reservationGlobals.errorMsg.AAAValidationFailed : "Discount code validation failed") + '"]}');
                                                                                                                                                       if (!htz.config.isApp) try {
                                                                                                                                                           e = {
                                                                                                                                                               scenario: "cdp_validation",
                                                                                                                                                               payload: {}
                                                                                                                                                           }, e.payload.id = b.get("formData").get("cdpField"), e.payload.name = a.viewReferrer.metaData.get("itinerary").discounts[0], e.payload.status = "canceled", l.track(e)
                                                                                                                                                       } catch (k) {
                                                                                                                                                           console.log("Error with AAA CDPvalidation." + k.message)
                                                                                                                                                       }
                                                                                                                                                       a.resubmitItenerary(a)
                                                                                                                                                   }
                                                                                                                                               }
                                                                                                                                           else "memberValidationLoaded" ===
                                                                                                                                               d.data.status && (window.AAAValidationLoaded = !0)
                                                                                                                                       }
                                                                                                                                       var d = document.createElement("iframe");
                                                                                                                                       d.src = "https://www.aaa.com/sharedservices/validate?vendor=hertz";
                                                                                                                                       d.style.display = "block";
                                                                                                                                       d.style.position = "fixed";
                                                                                                                                       d.style.width = "100%";
                                                                                                                                       d.style.height = "100%";
                                                                                                                                       d.style.margin = "0";
                                                                                                                                       d.style.padding = "0";
                                                                                                                                       d.style.border = "0";
                                                                                                                                       d.style.background = "transparent";
                                                                                                                                       d.style.zIndex = "100000000";
                                                                                                                                       d.id = "aaanational-membervalidation";
                                                                                                                                       var e = window.addEventListener ? "addEventListener" : "attachEvent",
                                                                                                                                           g = "attachEvent" == e ? "onmessage" : "message";
                                                                                                                                       window[e](g, c, !1);
                                                                                                                                       document.getElementsByTagName("body")[0].insertBefore(d, document.getElementsByTagName("body")[0].firstChild);
                                                                                                                                       if (!htz.config.isApp) try {
                                                                                                                                           d = {
                                                                                                                                               scenario: "cdp_validation",
                                                                                                                                               payload: {}
                                                                                                                                           }, d.payload.id = b.get("formData").get("cdpField"), d.payload.name = a.viewReferrer.metaData.get("itinerary").discounts[0], d.payload.status = "shown", l.track(d)
                                                                                                                                       } catch (j) {
                                                                                                                                           console.log("Error with AAA CDPvalidation." + j.message)
                                                                                                                                       }
                                                                                                                                       setTimeout(function() {
                                                                                                                                               window.AAAValidationLoaded || document.getElementById("aaanational-membervalidation").remove()
                                                                                                                                           },
                                                                                                                                           2E4)
                                                                                                                                   }).fail(function() {
                                                                                                                                       void 0 !== a.model.attributes.selectForQuote && 1 === a.model.attributes.selectForQuote ? (f.setItem(h.NEW_SIPP, a.model.sipp), a.resubmitQuotesCall(a)) : a.submit()
                                                                                                                                   }) : void 0 !== a.model.attributes.selectForQuote && 1 === a.model.attributes.selectForQuote ? (f.setItem(h.NEW_SIPP, a.model.sipp), a.resubmitQuotesCall(a)) : a.submit()
                                                                                                                               } catch (e) {
                                                                                                                                   console.log("error processing handleCDPVerification form vehicles page"), void 0 !== a.model.attributes.selectForQuote && 1 === a.model.attributes.selectForQuote ? (f.setItem(h.NEW_SIPP,
                                                                                                                                       a.model.sipp), a.resubmitQuotesCall(a)) : a.submit()
                                                                                                                               }
                                                                                                                           }, 1E3),
                                                                                                                           resubmitItenerary: function() {
                                                                                                                               var a = this,
                                                                                                                                   c = new n(JSON.parse(f.getItem(h.ITINERARY_DATA))),
                                                                                                                                   b = c.get("metaData"),
                                                                                                                                   e = c.get("formData");
                                                                                                                               b.get("loggedIn") ? e.set({
                                                                                                                                   corporateRate: "",
                                                                                                                                   memberSelectedCdp: "",
                                                                                                                                   memberOtherCdpField: "",
                                                                                                                                   cdpRadioButton: "",
                                                                                                                                   checkDiscount: "",
                                                                                                                                   officialTravel: ""
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               }) : e.set({
                                                                                                                                   cdpField: ""
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               e.set({
                                                                                                                                   checkDiscount: ""
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               f.setItem(h.ITINERARY_DATA, JSON.stringify(c));
                                                                                                                               e.set({
                                                                                                                                   cdpVerificationFailed: !0
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               q.saveWithRetry(e, {}, {
                                                                                                                                   url: j.config.rootContext + "/rest/hertz/v2/itinerary/vehicles",
                                                                                                                                   type: "POST",
                                                                                                                                   beforeSend: function() {
                                                                                                                                       j.config.isApp ? htz.utils.Spinner.spin() : g.getSpinner().spin()
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       a.viewReferrer.goHome();
                                                                                                                                       g.getSpinner().stop()
                                                                                                                                   },
                                                                                                                                   success: function(b, d) {
                                                                                                                                       i("#aaanational-membervalidation").remove();
                                                                                                                                       d && d.resultInfo && d.data ? (k().closeOverlay(), a.viewReferrer.handlePostAAAVerification(d.data)) : (a.viewReferrer.goHome(), g.getSpinner().stop())
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           resubmitQuotesCall: function() {
                                                                                                                               var a = this,
                                                                                                                                   c = new n(JSON.parse(f.getItem(h.ITINERARY_DATA)));
                                                                                                                               c.get("metaData");
                                                                                                                               var b = c.get("formData");
                                                                                                                               b.attributes.selectedCarType = f.getItem(h.NEW_SIPP);
                                                                                                                               i("html,body").scrollTop(0);
                                                                                                                               b.set({
                                                                                                                                   checkDiscount: ""
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               f.setItem(h.ITINERARY_DATA, JSON.stringify(c));
                                                                                                                               b.set({
                                                                                                                                   cdpVerificationFailed: !0
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               q.saveWithRetry(b, {}, {
                                                                                                                                   url: j.config.rootContext + "/rest/hertz/v2/itinerary/vehicles",
                                                                                                                                   type: "POST",
                                                                                                                                   beforeSend: function() {
                                                                                                                                       j.config.isApp ? htz.utils.Spinner.spin() : g.getSpinner().spin()
                                                                                                                                   },
                                                                                                                                   error: function(a, b) {
                                                                                                                                       Utils.displayErrorMessage(JSON.parse(b.responseText).message,
                                                                                                                                           document.querySelector("#res-vehicles-page #vehicles #error-list"));
                                                                                                                                       g.getSpinner().stop()
                                                                                                                                   },
                                                                                                                                   success: function(b, c) {
                                                                                                                                       i("#aaanational-membervalidation").remove();
                                                                                                                                       c && c.resultInfo && c.data ? (k().closeOverlay(), a.viewReferrer.handlePostAAAVerification(c.data)) : (a.viewReferrer.goHome(), g.getSpinner().stop())
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           submit: function() {
                                                                                                                               htz.config.isApp && localStorage.setItem("vehiclePageBack", !0);
                                                                                                                               var a = this,
                                                                                                                                   c = JSON.parse(f.getItem(h.ITINERARY_DATA)),
                                                                                                                                   b = c.formData,
                                                                                                                                   c = c.metaData;
                                                                                                                               a.model.get("citySpecialPrice") && ("" != b.cdpField ||
                                                                                                                                   ("" != b.pcNumber || b.cvNumber && "" != b.cvNumber || b.itNumber && "" != b.itNumber || b.typeInRateQuote && "1click" != b.typeInRateQuote) || c.loggedIn && (b.memberSelectedCdp && "" != b.memberSelectedCdp || "" != b.memberOtherCdpField || "" != b.corporateRate || "" != b.officialTravel)) ? require(["reservation/vehicle/core/view/vehicle-city-special-cdp-view"], function(b) {
                                                                                                                                   k().overlay({
                                                                                                                                       title: a.content.whatPage.whatViewOverlays.citySpecialsCdpOvlerayTitle,
                                                                                                                                       close: function() {
                                                                                                                                           m.trackCitySpecials("Close")
                                                                                                                                       }
                                                                                                                                   }, (new b({
                                                                                                                                       template: "#city-special-cdp-warning-tpl",
                                                                                                                                       handleSelect: function(b) {
                                                                                                                                           a.selectFromCitySpecialCdpView(b)
                                                                                                                                       },
                                                                                                                                       content: a.content
                                                                                                                                   })).render().el)
                                                                                                                               }) : a.viewReferrer.submitFromQuoteView(a.model);
                                                                                                                               htz.config.isApp || (b = {
                                                                                                                                   scenario: "addToCart-car",
                                                                                                                                   payload: this
                                                                                                                               }, l.track(b), b.scenario = "productClick-car", l.track(b))
                                                                                                                           },
                                                                                                                           selectFromCitySpecialCdpView: function(a) {
                                                                                                                               a.hasClass("close") ? (m.trackCitySpecials("NoButton"), k().closeOverlay()) : (m.trackCitySpecials("ContinueButton"), this.viewReferrer.submitFromQuoteView(this.model))
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               var a = f.getItem(h.SELECTED_VEHICLE_INFO),
                                                                                                                                   c = "selected" == this.options.isThisVehicleSelected,
                                                                                                                                   b, a = void 0 != a && null != a;
                                                                                                                               b = this.options.showRateDetails && !a;
                                                                                                                               this.$el.append(p.template(i("#quote-tpl").html(), {
                                                                                                                                   content: this.content,
                                                                                                                                   quote: this.model.attributes,
                                                                                                                                   page: this.page,
                                                                                                                                   index: this.index,
                                                                                                                                   isMultiRate: this.options.isMultiRate,
                                                                                                                                   showRateDetails: b,
                                                                                                                                   isVehicleSelected: a,
                                                                                                                                   isThisVehicleSelected: c
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           showRateDetails: function(a) {
                                                                                                                               a = i(a.target).attr("data-index");
                                                                                                                               this.model.set({
                                                                                                                                   img: this.options.image,
                                                                                                                                   sipp: this.options.sipp,
                                                                                                                                   carTypeDisplay: this.options.carTypeDisplay,
                                                                                                                                   carGroup: this.options.carGroup,
                                                                                                                                   name: this.options.name
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               this.lightbox || (this.lightBox = g.getLightbox());
                                                                                                                               this.lightBox.overlay({
                                                                                                                                   title: this.model.get("price") + " " + this.model.get("currency") + " " + this.model.get("rate"),
                                                                                                                                   width: 584,
                                                                                                                                   center: !0
                                                                                                                               }, (new s({
                                                                                                                                   index: a,
                                                                                                                                   template: "#rate-overlay-tpl",
                                                                                                                                   content: this.content,
                                                                                                                                   sipp: this.options.sipp,
                                                                                                                                   href: this.options.href,
                                                                                                                                   vehicle: this.model.attributes,
                                                                                                                                   quoteView: this
                                                                                                                               })).el)
                                                                                                                           },
                                                                                                                           returnToHomePage: function() {
                                                                                                                               document.location.href = htz.config.rootContext
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.page =
                                                                                                                                   this.index = this.content = this.viewReferrer = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-view", ["jquery", "underscore", "backbone", "reservation/vehicle/core/view/quote-view"], function(g, e, h, i) {
                                                                                                                       return h.View.extend({
                                                                                                                           className: "vehicle",
                                                                                                                           events: {
                                                                                                                               "click a.show-more-details": "moreDetails",
                                                                                                                               "click a.show-less-details": "lessDetails",
                                                                                                                               "click .mobile-info": "mobileDetails",
                                                                                                                               "click .more-info": "citySpecialsInfo",
                                                                                                                               "click img.car-info": "carInfo"
                                                                                                                           },
                                                                                                                           carInfo: function() {
                                                                                                                               this.viewHelper.showCarInfo(this.model, this.content);
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           citySpecialsInfo: function() {
                                                                                                                               this.viewHelper.showCitySpecialsInfo(this.content)
                                                                                                                           },
                                                                                                                           details: function() {
                                                                                                                               this.$el.find(".more-details").toggle();
                                                                                                                               this.$el.find(".links-toggle").toggle();
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           moreDetails: function() {
                                                                                                                               this.$el.find(".more-details").show();
                                                                                                                               this.$el.find(".show-link").hide();
                                                                                                                               this.$el.find(".hide-link").show();
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           lessDetails: function() {
                                                                                                                               this.$el.find(".more-details").hide();
                                                                                                                               this.$el.find(".show-link").show();
                                                                                                                               this.$el.find(".hide-link").hide();
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           mobileDetails: function() {
                                                                                                                               this.$el.find(".features").toggleClass("hidden-item");
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           initialize: function(a) {
                                                                                                                               this.page =
                                                                                                                                   a.page;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.viewReferrer = this.options.viewReferrer;
                                                                                                                               this.vehicleCollectionList = this.viewHelper.vehicleCollectionList(this.content);
                                                                                                                               this.model.on("reset", this.resetting, this)
                                                                                                                           },
                                                                                                                           resetting: function() {
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               for (var a = this, c = a.model.get("quotes"), f = !1, b = 0; b < c.models.length; b++) c.models[b].get("citySpecialPrice") && (f = !0);
                                                                                                                               a.$el.append(e.template(g(a.template).html(), {
                                                                                                                                   vehicle: this.model.toJSON(),
                                                                                                                                   page: this.page,
                                                                                                                                   content: this.content,
                                                                                                                                   vehicleCollection: this.vehicleCollectionList,
                                                                                                                                   isCitySplVehicle: f
                                                                                                                               }));
                                                                                                                               a.model.get("allNotAvailableOrSoldout") || (htz.config.isApp ? a.$el.find(".image").prepend('<img class="app-car-info" src="' + a.model.get("img_url") + '" />') : a.$el.find(".image").prepend('<img class="car-info" src="' + a.model.get("img_url") + '" />'));
                                                                                                                               e.each(c.models, function(d, b) {
                                                                                                                                   d.quotes = c;
                                                                                                                                   d.sipp = a.model.get("sipp");
                                                                                                                                   a.$el.find(".pricing .wrapper:eq(" + b + ")").append((new i({
                                                                                                                                       viewReferrer: a.viewReferrer,
                                                                                                                                       content: a.content,
                                                                                                                                       model: d,
                                                                                                                                       page: a.page,
                                                                                                                                       isMultiRate: a.model.get("multiRate"),
                                                                                                                                       sipp: a.model.get("sipp"),
                                                                                                                                       href: d.get("href"),
                                                                                                                                       image: a.model.get("img"),
                                                                                                                                       carGroup: a.model.get("carGroup"),
                                                                                                                                       carTypeDisplay: a.model.get("carTypeDisplay"),
                                                                                                                                       name: a.model.get("name"),
                                                                                                                                       index: b,
                                                                                                                                       showRateDetails: a.page.showRateDetails,
                                                                                                                                       isThisVehicleSelected: a.model.get("selected")
                                                                                                                                   })).render().el)
                                                                                                                               });
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.page = this.content = this.template = this.viewHelper = this.viewReferrer = this.vehicleCollectionList =
                                                                                                                                   this.model = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-list-view", "jquery underscore config/utilconfig framework/view/abstract-view reservation/common/content-format/core/view/content-format-view reservation/vehicle/core/view/vehicle-view config/app-config".split(" "), function(b, c, d, e, g, f, h) {
                                                                                                                       return e.extend({
                                                                                                                           events: {
                                                                                                                               "click span.sort-arrows a": "sort",
                                                                                                                               "change select": "sortDropDown",
                                                                                                                               "click button.display-count": "showAll",
                                                                                                                               "click .redeem-points-info a": "pointsOverlay"
                                                                                                                           },
                                                                                                                           showAll: function() {
                                                                                                                               htz.config.isApp && htz.utils.Spinner.spin();
                                                                                                                               this.viewReferrer.showAll()
                                                                                                                           },
                                                                                                                           sortDropDown: function(a) {
                                                                                                                               this.viewReferrer.checkSort(b(a.target))
                                                                                                                           },
                                                                                                                           sort: function(a) {
                                                                                                                               this.viewReferrer.checkSort(b(a.target));
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           initialize: function(a) {
                                                                                                                               this.page = a.page;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.viewReferrer = this.options.viewReferrer;
                                                                                                                               this.isSoldOutOverlay = this.options.isSoldOutOverlay;
                                                                                                                               this.model.off("reset", this.render);
                                                                                                                               this.model.on("reset", this.render, this)
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.preRender();
                                                                                                                               var a = this;
                                                                                                                               a.$el.empty();
                                                                                                                               if (a.isSoldOutOverlay) require(["reservation/vehicle/core/view/vehicle-friendly-msg-view"], function(b) {
                                                                                                                                   a.vehicleSoldOutFriendlyMsg = new b({
                                                                                                                                       el: a.$el,
                                                                                                                                       template: "#soldout-friendly-msg-tpl",
                                                                                                                                       content: a.content,
                                                                                                                                       viewReferrer: a,
                                                                                                                                       viewHelper: a.viewHelper,
                                                                                                                                       model: a.model,
                                                                                                                                       soldOutMsgInOverlay: !0
                                                                                                                                   })
                                                                                                                               });
                                                                                                                               else {
                                                                                                                                   a.$el.append(c.template(b(this.template).html(), {
                                                                                                                                       page: a.page,
                                                                                                                                       content: a.content
                                                                                                                                   }));
                                                                                                                                   a.page.allSoldOut && a.page.displaySoldOut && (a.$el.find(".sort").hide(), a.$el.find(".rate-message-header").hide(),
                                                                                                                                       a.page.isRedeemPoints && a.$el.find(".redeem-points-info").hide());
                                                                                                                                   var d = a.$el.find(".headers")
                                                                                                                               }
                                                                                                                               if (a.page.ageWarning) {
                                                                                                                                   var e = new g({
                                                                                                                                       content: a.content.whatPage.globalWhatPageContent.ageAdvisoryMessage,
                                                                                                                                       attributes: {
                                                                                                                                           ageLink: "a@class='ageAdvisory'@lang='AGE'"
                                                                                                                                       }
                                                                                                                                   });
                                                                                                                                   b("#age-warning").html(e.content)
                                                                                                                               }
                                                                                                                               c.each(a.model.models, function(b, c) {
                                                                                                                                   a.isSoldOutOverlay ? a.$el.append((new f({
                                                                                                                                           viewReferrer: a.viewReferrer,
                                                                                                                                           viewHelper: a.viewHelper,
                                                                                                                                           template: "#vehicle-tpl",
                                                                                                                                           model: b,
                                                                                                                                           page: a.page,
                                                                                                                                           content: a.content
                                                                                                                                       })).render().el) : a.page.numberToDisplay >
                                                                                                                                       c && d.before((new f({
                                                                                                                                           viewReferrer: a.viewReferrer,
                                                                                                                                           viewHelper: a.viewHelper,
                                                                                                                                           template: "#vehicle-tpl",
                                                                                                                                           model: b,
                                                                                                                                           page: a.page,
                                                                                                                                           content: a.content
                                                                                                                                       })).render().el)
                                                                                                                               });
                                                                                                                               a.viewReferrer.loadBanners();
                                                                                                                               a.autoShowVehicleDetails();
                                                                                                                               this.postRender();
                                                                                                                               return a
                                                                                                                           },
                                                                                                                           pointsOverlay: function() {
                                                                                                                               (new(d.getLightbox())).overlay({
                                                                                                                                   title: this.content.whatPage.whatViewOverlays.redeemPointOverlayTitle
                                                                                                                               }, c.template(b("#processing-points-vehicle-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           autoShowVehicleDetails: function() {
                                                                                                                               this.page.isAutoShowVehicleDetail &&
                                                                                                                                   !h.config.isApp && c.defer(function() {
                                                                                                                                       var a = b("a.show-more-details");
                                                                                                                                       a && 0 < a.length && a.first().trigger("click")
                                                                                                                                   })
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.page = this.content = this.template = this.viewHelper = this.viewReferrer = this.model = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rqr-overlay/core/view/rqr-overlay-view", "utils/utils-proxy jquery underscore utils/utils backbone config/app-config reservation/process-config/core/reservation-constants utils/sessionhelper reservation/utils/core/reservation-utils".split(" "), function(f, e, d, h, g, b, k, l, i) {
                                                                                                                       return g.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.policyList = this.options.policyList;
                                                                                                                               this.content = this.options.content
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "change #rqrOverlayDropDown": "updatePolicyDetails"
                                                                                                                           },
                                                                                                                           updatePolicyDetails: function(a) {
                                                                                                                               htz.config.isApp && hzm.shared.googleTagManger(e("#rqrOverlayDropDown").find("option:selected").text(), "", "", "", "");
                                                                                                                               var j = g.Model.extend({}),
                                                                                                                                   c = i.getPickupLocationCode(),
                                                                                                                                   d = this,
                                                                                                                                   a = e(a.currentTarget).val(),
                                                                                                                                   c = b.config.apiDomain + "/rest/hertz/v2/rental-policy/policyDetail/systemId/" + b.config.systemId + "/subsystemId/" + b.config.subSystemId + "/dialect/" + b.config.dialect + "/eoagCode/" + c + "/policyType/" + a;
                                                                                                                               (new j).fetch({
                                                                                                                                   dataType: "jsonp",
                                                                                                                                   url: c,
                                                                                                                                   cache: !0,
                                                                                                                                   type: "GET",
                                                                                                                                   beforeSend: function() {
                                                                                                                                       b.config.isApp ?
                                                                                                                                           htz.utils.Spinner.spin() : f.getSpinner().spin()
                                                                                                                                   },
                                                                                                                                   success: function(a) {
                                                                                                                                       (a = a.get("data")) && d.$el.find("#policyDescription").html(a.policyDescription)
                                                                                                                                   },
                                                                                                                                   complete: function() {
                                                                                                                                       f.getSpinner().stop()
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           rqrDropDown: function() {
                                                                                                                               var a = this;
                                                                                                                               a.listofOptions = [];
                                                                                                                               d.each(a.policyList, function(b) {
                                                                                                                                   var c = {};
                                                                                                                                   c.name = b.policyTitle;
                                                                                                                                   c.value = b.policyType;
                                                                                                                                   a.listofOptions.push(c)
                                                                                                                               });
                                                                                                                               a.$el.find("#rqrOverlayDropDown").append(h.buildDropdown(a.listofOptions, "", a.content.reservationGlobals.rentalTerms.chooseOne))
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(d.template(e(this.template).html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               this.rqrDropDown();
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rqr-overlay/core/presenter/rqr-overlay-presenter", "jquery config/app-config backbone utils/utils-proxy utils/domhelper reservation/rqr-overlay/core/view/rqr-overlay-view reservation/utils/core/reservation-utils helpers/resource-loader".split(" "), function(l, a, h, d, i, j, k, e) {
                                                                                                                       function f() {
                                                                                                                           null == b && (b = d.getLightbox());
                                                                                                                           return b
                                                                                                                       }
                                                                                                                       var b = null;
                                                                                                                       return {
                                                                                                                           showOverlayPopUp: function() {
                                                                                                                               var c = h.Model.extend({}),
                                                                                                                                   b = k.getPickupLocationCode(),
                                                                                                                                   g = this,
                                                                                                                                   b = a.config.apiDomain + "/rest/hertz/v2/rental-policy/policyList/systemId/" +
                                                                                                                                   a.config.systemId + "/subsystemId/" + a.config.subSystemId + "/dialect/" + a.config.dialect + "/eoagCode/" + b;
                                                                                                                               (new c).fetch({
                                                                                                                                   dataType: "jsonp",
                                                                                                                                   url: b,
                                                                                                                                   cache: !0,
                                                                                                                                   type: "GET",
                                                                                                                                   beforeSend: function() {
                                                                                                                                       a.config.isApp ? htz.utils.Spinner.spin() : d.getSpinner().spin()
                                                                                                                                   },
                                                                                                                                   success: function(b) {
                                                                                                                                       var c = b.get("data");
                                                                                                                                       c ? e.load({
                                                                                                                                           content: a.config.apiDomain + "/rest/content/" + a.config.subSystemId + "/" + a.config.dialect + "/all/reservation/rqr-overlay/rqr-overlays",
                                                                                                                                           template: a.config.rootContext + "/assets/" + a.config.buildId + "/html/all/reservation/rqr-overlay/rqr-overlays.html",
                                                                                                                                           callback: function(a) {
                                                                                                                                               var b = a.content;
                                                                                                                                               i.addTemplate("rqr-overlay", a.template);
                                                                                                                                               f().overlay({
                                                                                                                                                   title: b.reservationGlobals.rentalTerms.rentalQualRequire,
                                                                                                                                                   width: 700
                                                                                                                                               }, (new j({
                                                                                                                                                   template: "#rqr-overlay-tpl",
                                                                                                                                                   policyList: c,
                                                                                                                                                   content: b
                                                                                                                                               })).render().el)
                                                                                                                                           }
                                                                                                                                       }) : g.loadRqrErrorMsg()
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       g.loadRqrErrorMsg()
                                                                                                                                   },
                                                                                                                                   complete: function() {
                                                                                                                                       d.getSpinner().stop()
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           loadRqrErrorMsg: function() {
                                                                                                                               e.load({
                                                                                                                                   content: a.config.apiDomain + "/rest/content/" + a.config.subSystemId + "/" + a.config.dialect + "/all/reservation/rqr-overlay/rqr-overlays",
                                                                                                                                   callback: function(a) {
                                                                                                                                       f().overlay({
                                                                                                                                           title: a.content.reservationGlobals.rentalTerms.rentalQualRequire,
                                                                                                                                           width: 500
                                                                                                                                       }, a.content.reservationGlobals.rentalTerms.policyInfoError)
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   window.checkHertzNameSpace("htz.res.common");
                                                                                                                   var retryView = function() {
                                                                                                                       return {
                                                                                                                           submit: function(b, a, c, d, h) {
                                                                                                                               var e = !1,
                                                                                                                                   f = 0,
                                                                                                                                   i = this;
                                                                                                                               $.ajax({
                                                                                                                                   url: a,
                                                                                                                                   type: "POST",
                                                                                                                                   headers: {
                                                                                                                                       "cache-control": "no-cache"
                                                                                                                                   },
                                                                                                                                   data: JSON.stringify(c),
                                                                                                                                   dataType: "json",
                                                                                                                                   contentType: "application/json",
                                                                                                                                   success: function(g) {
                                                                                                                                       g && g.resultInfo ? "retry" === g.resultInfo.result ? (0 === b ? c = {
                                                                                                                                               qpRetryFail: !0
                                                                                                                                           } : (--b, f = g.data.retryInterval), setTimeout(function() {
                                                                                                                                               i.submit(b, a, c, d, h)
                                                                                                                                           }, f)) : process.getStep() === htz.res.config.ReservationConstants.VEHICLES || process.getStep() === htz.res.config.ReservationConstants.EXTRAS ?
                                                                                                                                           h.setSessionData(g, d) : e = !0 : e = !0
                                                                                                                                   },
                                                                                                                                   error: function() {
                                                                                                                                       e = !0
                                                                                                                                   },
                                                                                                                                   complete: function() {
                                                                                                                                       e && utilProxy.getSpinner().stop()
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           handleRetryResponse: function(b, a, c) {
                                                                                                                               b && b.resultInfo ? "retry" === b.resultInfo.result ? (a.firstRetry && (0 < b.data.maxRetries ? (a.maxRetries = b.data.maxRetries - 1, a.retryInterval = b.data.retryInterval) : (a.maxRetries = 0, data = {
                                                                                                                                       qpRetryFail: !0
                                                                                                                                   }), a.firstRetry = !1, a.retryCount = 0), a.maxRetries -= 1, a.retryInterval = b.data.retryInterval, a.retryCount++, setTimeout(function() {
                                                                                                                                       c.retry(a)
                                                                                                                                   }, a.retryInterval)) : c.success() :
                                                                                                                                   c.success()
                                                                                                                           },
                                                                                                                           saveWithRetry: function(b, a, c) {
                                                                                                                               var d = this,
                                                                                                                                   h = c.success,
                                                                                                                                   e = b.toJSON(),
                                                                                                                                   f = function(g) {
                                                                                                                                       g ? (newOptions = _.extend(c, {
                                                                                                                                           data: JSON.stringify({
                                                                                                                                               retryCount: g.retryCount
                                                                                                                                           }),
                                                                                                                                           contentType: "application/json"
                                                                                                                                       }), b.save({}, newOptions)) : b.save(a, c)
                                                                                                                                   },
                                                                                                                                   i = {
                                                                                                                                       maxRetries: null,
                                                                                                                                       retryInterval: 0,
                                                                                                                                       firstRetry: !0
                                                                                                                                   };
                                                                                                                               c.success = function(b, a) {
                                                                                                                                   d.handleRetryResponse(a, i, {
                                                                                                                                       retry: function(a) {
                                                                                                                                           d.restorePrevData(b, e);
                                                                                                                                           f(a)
                                                                                                                                       },
                                                                                                                                       success: function() {
                                                                                                                                           h(b, a)
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           d.restorePrevData(b, e);
                                                                                                                                           c.error(b, a, i.retryCount)
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               };
                                                                                                                               f()
                                                                                                                           },
                                                                                                                           ajaxWithRetry: function(b) {
                                                                                                                               var a =
                                                                                                                                   this,
                                                                                                                                   c = b.success,
                                                                                                                                   d = function(a) {
                                                                                                                                       a && (b.data = JSON.stringify({
                                                                                                                                           retryCount: a.retryCount
                                                                                                                                       }));
                                                                                                                                       $.ajax(b)
                                                                                                                                   },
                                                                                                                                   h = {
                                                                                                                                       maxRetries: null,
                                                                                                                                       retryInterval: 0,
                                                                                                                                       firstRetry: !0
                                                                                                                                   };
                                                                                                                               b.success = function(e, f, i) {
                                                                                                                                   Utils.sessionTimedOut(i) || a.handleRetryResponse(e, h, {
                                                                                                                                       retry: function(a) {
                                                                                                                                           d(a)
                                                                                                                                       },
                                                                                                                                       success: function() {
                                                                                                                                           c(e)
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           b.error(e)
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               };
                                                                                                                               d()
                                                                                                                           },
                                                                                                                           fetchWithRetry: function(b, a) {
                                                                                                                               var c = this,
                                                                                                                                   d = a.success,
                                                                                                                                   h = {
                                                                                                                                       maxRetries: null,
                                                                                                                                       retryInterval: 0,
                                                                                                                                       firstRetry: !0
                                                                                                                                   };
                                                                                                                               a.success = function(e, f) {
                                                                                                                                   c.handleRetryResponse(f, h, {
                                                                                                                                       retry: function() {
                                                                                                                                           b.fetch(a)
                                                                                                                                       },
                                                                                                                                       success: function() {
                                                                                                                                           d(f)
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           a.error(f)
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               };
                                                                                                                               b.fetch(a)
                                                                                                                           },
                                                                                                                           saveChangedWithRetry: function(b, a, c) {
                                                                                                                               var d = this,
                                                                                                                                   h = c.success,
                                                                                                                                   e = b.toJSON(),
                                                                                                                                   f = function(g) {
                                                                                                                                       g ? (newOptions = _.extend(c, {
                                                                                                                                           data: JSON.stringify({
                                                                                                                                               retryCount: g.retryCount
                                                                                                                                           }),
                                                                                                                                           contentType: "application/json"
                                                                                                                                       }), b.save({}, newOptions)) : b.saveChanged(a, c)
                                                                                                                                   },
                                                                                                                                   i = {
                                                                                                                                       maxRetries: null,
                                                                                                                                       retryInterval: null,
                                                                                                                                       firstRetry: !0
                                                                                                                                   };
                                                                                                                               c.success = function(a, b) {
                                                                                                                                   d.handleRetryResponse(b, i, {
                                                                                                                                       retry: function(b) {
                                                                                                                                           d.restorePrevData(a, e);
                                                                                                                                           f(b)
                                                                                                                                       },
                                                                                                                                       success: function() {
                                                                                                                                           h(a, b)
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           d.restorePrevData(a, e);
                                                                                                                                           c.error(a,
                                                                                                                                               b)
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               };
                                                                                                                               f()
                                                                                                                           },
                                                                                                                           restorePrevData: function(b, a) {
                                                                                                                               b.clear({
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               b.set(a, {
                                                                                                                                   silent: !0
                                                                                                                               })
                                                                                                                           }
                                                                                                                       }
                                                                                                                   }();
                                                                                                                   "function" == typeof define && define.amd && define("reservation/common/retry/core/view/retry-view", ["jquery", "json", "utils/utils-proxy", "utils/utils", "reservation/process-info/core/model/process-model"], function() {
                                                                                                                       return retryView
                                                                                                                   });
                                                                                                                   htz.res.common.RetryView = retryView;
                                                                                                                   define("reservation/common/steps/core/view/steps-view", ["jquery", "underscore", "backbone", "reservation/process-info/core/model/process-model", "reservation/config"], function(b, c, d, e, f) {
                                                                                                                       return d.View.extend({
                                                                                                                           events: {
                                                                                                                               "click a": "step",
                                                                                                                               "click #home": "resetCarType"
                                                                                                                           },
                                                                                                                           step: function(c) {
                                                                                                                               var a = "";
                                                                                                                               switch (b(c.target).closest("li").index()) {
                                                                                                                                   case 0:
                                                                                                                                       a = htz.res.config.ReservationConstants.ITINERARY;
                                                                                                                                       break;
                                                                                                                                   case 1:
                                                                                                                                       a = htz.res.config.ReservationConstants.VEHICLES;
                                                                                                                                       break;
                                                                                                                                   case 2:
                                                                                                                                       a = htz.res.config.ReservationConstants.EXTRAS;
                                                                                                                                       break;
                                                                                                                                   case 3:
                                                                                                                                       a = htz.res.config.ReservationConstants.REVIEW_AND_BOOK;
                                                                                                                                       break;
                                                                                                                                   default:
                                                                                                                                       a = htz.res.config.ReservationConstants.ITINERARY
                                                                                                                               }
                                                                                                                               e.isModify() && (a = "modify/" + a);
                                                                                                                               f.getRotar().rotate(a);
                                                                                                                               try {
                                                                                                                                   setTimeout(function() {
                                                                                                                                       b(".adDisplayBlock").html("");
                                                                                                                                       gptBannerAds.clean();
                                                                                                                                       gptBannerAds.render();
                                                                                                                                       gptBannerAds.refreshAds()
                                                                                                                                   }, 800)
                                                                                                                               } catch (d) {}
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           resetCarType: function() {
                                                                                                                               htz.helpers.SessionHelper.setItem("resetCarType", "true")
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(c.template(b("#steps-tpl").html(), {
                                                                                                                                   header: this.model.attributes,
                                                                                                                                   editLink: htz.content.editLink
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-gold-anytime-view", ["jquery", "underscore", "backbone", "utils/utils-proxy"], function(a, d, e, f) {
                                                                                                                       var b = null;
                                                                                                                       return e.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .icons": "showGoldAnyTimeOverlay",
                                                                                                                               "click .ga-info": "showGoldAnyTimeOverlay"
                                                                                                                           },
                                                                                                                           showGoldAnyTimeOverlay: function() {
                                                                                                                               var c = this;
                                                                                                                               c.options.isGaBannerForOveraly || require(["reservation/common/gold-anytime-overlay/core/view/gold-anytime-overlay-view"],
                                                                                                                                   function(a) {
                                                                                                                                       null == b && (b = f.getLightbox());
                                                                                                                                       b.overlay({
                                                                                                                                           title: c.content.reservationGlobals.goldAnytime.gaOverlayTitle,
                                                                                                                                           width: "625"
                                                                                                                                       }, (new a({
                                                                                                                                           template: "#gold-anytime-overlay-tpl",
                                                                                                                                           content: c.content
                                                                                                                                       })).render().el)
                                                                                                                                   })
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(d.template(a(this.template).html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-page-view", getDependencies("reservation/vehicle/core/view/vehicle-page-view"), function(h, n, s, t, k, l, i, u, v, w, x, r, y, m, o, A, d, z, p) {
                                                                                                                       function j() {
                                                                                                                           null == q && (q = l.getLightbox());
                                                                                                                           return q
                                                                                                                       }
                                                                                                                       var q = null;
                                                                                                                       return t.extend({
                                                                                                                           events: {
                                                                                                                               "click a.optOut": "handleOptOut",
                                                                                                                               "click a.show-all": "showAll",
                                                                                                                               "click a.reset": "resetAll",
                                                                                                                               "click a.ageAdvisory": "showAgeWarning",
                                                                                                                               "click .similar-info": "showFleet"
                                                                                                                           },
                                                                                                                           resetAll: function() {
                                                                                                                               var a = d.VEHICLES;
                                                                                                                               m.isModify() && (a = "modify/" + a);
                                                                                                                               o.getRotar().rotate(a,
                                                                                                                                   "sort/original");
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           goHome: function() {
                                                                                                                               var a = d.ITINERARY;
                                                                                                                               m.isModify() && (a = "modify/" + a);
                                                                                                                               o.getRotar().rotate(a);
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           handleOptOutSuccess: function(a) {
                                                                                                                               var b = a.model;
                                                                                                                               a.itinerary && (i.setItem(d.ITINERARY_INFO_DATA, JSON.stringify(a.itinerary)), b && (b.metaData || (b.metaData = {}), b.metaData.itinerary = a.itinerary));
                                                                                                                               a.rateDetails && i.setItem(d.RATE_DETAILS_DATA, JSON.stringify(a.rateDetails));
                                                                                                                               b && (i.setItem(d.VEHICLES_DATA, JSON.stringify(b)), this.model.set(this.model.parse(b)), this.refresh(), htz.config.isApp &&
                                                                                                                                   (this.appHeader(), h("body #header-container").css("overflow", "revert"), h("#res-vehicles-page").css("overflow", "scroll"), h(".km-root #res-vehicles-page-container #vehicles .optout-container").css("display", "block")), l.getSpinner().stop())
                                                                                                                           },
                                                                                                                           appHeader: function() {
                                                                                                                               var a = h('<header id="header-container" data-role="header" class="km-header"><div class="header-box"><div data-role="navbar" class="navbar km-widget km-navbar"><div class="km-rightitem"><a onclick="hzm.shared.doJump();" data-role="button" data-align="right" data-icon="home" class="button-app button-nav button-menu offline-enabled km-widget km-button"> <span class="km-icon km-home km-notext"></span></a></div> <div class="km-leftitem"> <a onclick="hzm.shared.navigateBackVehicle()" data-role="button" data-align="left" data-icon="history-back" class="button-app button-nav button-back vehicles offline-enabled km-widget km-button" style="display: block;"> <span class="km-icon km-history-back km-notext"></span>  </a><a onclick="hzm.shared.navigateBack()" data-align="left" class="button-app button-nav button-back main offline-enabled km-widget km-button km-back" style="display: none;"><span class="km-icon km-history-back km-notext"></span></a> <a onclick="hzm.shared.gtmBackButton()" data-role="button" data-align="left" data-icon="history-back" class="button-app button-nav button-back page-back offline-enabled km-widget km-button" style="display: none;"><span class="km-icon km-history-back km-notext"></span></a><a onclick="hzm.shared.onWebviewBack();" data-role="button" data-align="left" data-icon="history-back" class="button-app button-nav button-back alt offline-enabled km-widget km-button" style="display: none;"><span class="km-icon km-history-back km-notext"></span> </a></div><div class="km-view-title"> <h3><text>Select Vehicle</text></h3></div></div></div></header>');
                                                                                                                               h("#res-vehicles-page").before(a)
                                                                                                                           },
                                                                                                                           handlePostAAAVerification: function(a) {
                                                                                                                               var b = a.model;
                                                                                                                               a.itinerary && (i.setItem(d.ITINERARY_INFO_DATA, JSON.stringify(a.itinerary)), b && (b.metaData || (b.metaData = {}), b.metaData.itinerary = a.itinerary));
                                                                                                                               a.rateDetails && i.setItem(d.RATE_DETAILS_DATA, JSON.stringify(a.rateDetails));
                                                                                                                               b && (i.setItem(d.VEHICLES_DATA, JSON.stringify(b)), this.model.set(this.model.parse(b)), this.refresh(), htz.config.isApp && (this.appHeader(), h("body #header-container").css("overflow", "revert"), h("#res-vehicles-page").css("overflow",
                                                                                                                                   "scroll"), localStorage.setItem("quotesCheck", !0)), l.getSpinner().stop())
                                                                                                                           },
                                                                                                                           capitaliseFirstLetter: function(a) {
                                                                                                                               return a.charAt(0).toUpperCase() + a.slice(1)
                                                                                                                           },
                                                                                                                           handleOptOut: function() {
                                                                                                                               if (this.preSubmit()) {
                                                                                                                                   this.resetErrors();
                                                                                                                                   var a = this,
                                                                                                                                       b = this.model.get("optOutLinkUrl");
                                                                                                                                   if (b) {
                                                                                                                                       var b = k.config.rootContext + "/rest/hertz/v2" + b,
                                                                                                                                           c = null;
                                                                                                                                       m.isModify() ? (c = "POST", b += "/" + i.getItem(d.CONFIRMATION_NUMBER)) : c = "POST";
                                                                                                                                       var e = this.model.get("optOutAction"),
                                                                                                                                           f = "optOut" + this.capitaliseFirstLetter(e) + "Ind",
                                                                                                                                           g = this.model.get(f),
                                                                                                                                           h = {};
                                                                                                                                       h.optOutAction = e;
                                                                                                                                       h[f] = g;
                                                                                                                                       h.isOptOut = "y";
                                                                                                                                       l.getSpinner().spin();
                                                                                                                                       r.ajaxWithRetry({
                                                                                                                                           url: b,
                                                                                                                                           type: c,
                                                                                                                                           cache: !1,
                                                                                                                                           dataType: "json",
                                                                                                                                           contentType: "application/json",
                                                                                                                                           data: JSON.stringify(h),
                                                                                                                                           success: function(b) {
                                                                                                                                               b && b.resultInfo && b.data ? (j().closeOverlay(), a.handleOptOutSuccess(b.data)) : (a.goHome(), l.getSpinner().stop())
                                                                                                                                           },
                                                                                                                                           error: function() {
                                                                                                                                               a.goHome();
                                                                                                                                               l.getSpinner().stop()
                                                                                                                                           }
                                                                                                                                       });
                                                                                                                                       return !1
                                                                                                                                   }
                                                                                                                               }
                                                                                                                           },
                                                                                                                           showAll: function() {
                                                                                                                               var a = d.VEHICLES;
                                                                                                                               m.isModify() && (a = "modify/" + a);
                                                                                                                               o.getRotar().rotate(a, "display/all");
                                                                                                                               htz.config.isApp && setTimeout(function() {
                                                                                                                                       htz.utils.Spinner.stop()
                                                                                                                                   },
                                                                                                                                   2E3);
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           showAgeWarning: function(a) {
                                                                                                                               this.viewHelper.showAgeWarning(a)
                                                                                                                           },
                                                                                                                           showFleet: function() {
                                                                                                                               this.viewHelper.showFleet(this.content)
                                                                                                                           },
                                                                                                                           closeOverlay: function() {
                                                                                                                               j().closeOverlay()
                                                                                                                           },
                                                                                                                           selectFromNoShowView: function(a, b) {
                                                                                                                               var c = b.sipp;
                                                                                                                               a.hasClass("close") ? (this.viewHelper.track("noShow" + c + "Decline", c, "noShowOverlayDecline"), j().params.close = null, j().closeOverlay()) : (this.viewHelper.track("noShow" + c + "Accept", c, "noShowOverlayAccept"), this.submit(b))
                                                                                                                           },
                                                                                                                           displayNoShow: function(a) {
                                                                                                                               var b = this,
                                                                                                                                   c = a.sipp,
                                                                                                                                   e = function() {
                                                                                                                                       b.viewHelper.track("noShow" +
                                                                                                                                           c + "Close", c, "noShowOverlayClose")
                                                                                                                                   };
                                                                                                                               b.viewHelper.track("noShow" + c + "Open", c, "noShowOverlayOpen");
                                                                                                                               require(["reservation/no-show-warning/core/view/no-show-warning-view"], function(c) {
                                                                                                                                   j().overlay({
                                                                                                                                       title: b.content.whatPage.whatViewOverlays.noShowOverlayTitle,
                                                                                                                                       close: e
                                                                                                                                   }, (new c({
                                                                                                                                       model: a,
                                                                                                                                       handleSelect: function(a, c) {
                                                                                                                                           b.selectFromNoShowView(a, c)
                                                                                                                                       },
                                                                                                                                       content: b.content,
                                                                                                                                       showGaBanner: b.model.get("goldAnytimeRes")
                                                                                                                                   })).render().el)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           displayPrepayNotification: function(a) {
                                                                                                                               var b = this;
                                                                                                                               require(["reservation/vehicle/core/view/prepay-notification-view"],
                                                                                                                                   function(c) {
                                                                                                                                       j().overlay({
                                                                                                                                           title: b.content.whatPage.whatViewOverlays.prepaidOverlayTitle
                                                                                                                                       }, (new c({
                                                                                                                                           model: a.quotes,
                                                                                                                                           prepaidModify: b.model.get("prepaidModify"),
                                                                                                                                           handleQuoteSelect: function(a) {
                                                                                                                                               b.submitFromPrepaidView(a)
                                                                                                                                           },
                                                                                                                                           content: b.content,
                                                                                                                                           showGaBanner: b.model.get("goldAnytimeRes")
                                                                                                                                       })).render().el)
                                                                                                                                   })
                                                                                                                           },
                                                                                                                           selectFromCancelFeeView: function(a, b) {
                                                                                                                               a.hasClass("close") ? j().closeOverlay() : this.submit(b)
                                                                                                                           },
                                                                                                                           submitFromQuoteView: function(a) {
                                                                                                                               var b = this;
                                                                                                                               a.get("allNotAvailableOrSoldout") || (!a.get("ccGuaranteed") && a.get("priced") &&
                                                                                                                                   a.get("prepaid") && (a.get("prepaidNotice") || m.isModify()) ? b.displayPrepayNotification(a) : a.get("noShowNotice") ? b.displayNoShow(a) : a.get("offsell") ? require([k.config.apiDomain + "/rest/content/" + k.config.subSystemId + "/" + k.config.dialect + "/" + k.config.pos + "/all/reservation/contact-info/contact-info/contexts;howToReachUs=HTRU?callback=define", "text!" + k.config.rootContext + "/assets/" + k.config.buildId + "/html/all/reservation/contact-info/contact-info.html"], function(c, e) {
                                                                                                                                       h("body").append(e);
                                                                                                                                       b.content.howtoreachus =
                                                                                                                                           c.howtoreachus;
                                                                                                                                       j().overlay({
                                                                                                                                           title: b.content.whatPage.whatViewOverlays.offsellOverlayTitle,
                                                                                                                                           width: 700,
                                                                                                                                           height: 200
                                                                                                                                       }, n.template(h("#offsell-tpl").html(), {
                                                                                                                                           content: b.content,
                                                                                                                                           quote: a.attributes
                                                                                                                                       }));
                                                                                                                                       var f = j().getDataContainer();
                                                                                                                                       f && f.find(".offsell-overlay").append(n.template(h("#contact-info-tpl").html(), {
                                                                                                                                           content: b.content,
                                                                                                                                           quote: a.attributes
                                                                                                                                       }))
                                                                                                                                   }) : (a.get("ccGuaranteed"), this.submit(a)))
                                                                                                                           },
                                                                                                                           submitFromPrepaidView: function(a) {
                                                                                                                               a.get("noShowNotice") ? this.displayNoShow(a) : a.get("optOut") ? this.handleOptOut() : this.submit(a)
                                                                                                                           },
                                                                                                                           updateVehicleSelection: function(a) {
                                                                                                                               var b = this.model.get("vehicles");
                                                                                                                               if (b && 0 < b.length)
                                                                                                                                   for (var c = null, e = 0; e < b.length; e++)(c = b.at(e)) && (c.get("vehicleIndex") == a ? c.set("selected", "selected") : c.set("selected", ""))
                                                                                                                           },
                                                                                                                           submit: function(a) {
                                                                                                                               if (this.preSubmit()) {
                                                                                                                                   this.resetErrors();
                                                                                                                                   a.off("message");
                                                                                                                                   a.on("message", this.renderErrors, this);
                                                                                                                                   var b = this,
                                                                                                                                       c = !1;
                                                                                                                                   k.config.isApp ? htz.utils.Spinner.spin("", "Processing...") : l.getSpinner().spin();
                                                                                                                                   var e = a.toJSON();
                                                                                                                                   this.updateVehicleSelection(a.get("vehicleIndex"));
                                                                                                                                   var f = i.getItem(d.VEHICLES_DATA);
                                                                                                                                   f && (f = JSON.parse(f));
                                                                                                                                   var g = JSON.parse(i.getItem(d.ITINERARY_DATA)) || {};
                                                                                                                                   g.formData = g.formData || {};
                                                                                                                                   g.formData.selectedCarType = a.sipp;
                                                                                                                                   a.get("citySpecialPrice") ? (a.set("isCitySpecialSelected", !0), f.isCitySpecialSelected = !0, "on" === g.formData.checkDiscount ? (g.formData.pcNumber = "", g.formData.cvNumber = "", g.formData.itNumber = "", g.metaData.loggedIn ? (g.formData.memberSelectedCdp = "", g.formData.memberOtherCdpField = "", g.formData.cdpRadioButton = "profileCdpIndicator", g.formData.corporateRate = "", g.formData.officialTravel =
                                                                                                                                       "") : g.formData.cdpField = "") : g.formData.checkDiscount = "on", g.formData.typeInRateQuote = f.citySpecialDiscountCode) : f.isCitySpecialSelected = !1;
                                                                                                                                   i.setItem(d.ITINERARY_DATA, JSON.stringify(g));
                                                                                                                                   i.setItem(d.VEHICLES_DATA, JSON.stringify(f));
                                                                                                                                   f = {};
                                                                                                                                   f.quoteType = a.get("quoteIndex");
                                                                                                                                   f.id = a.get("id").split("-")[0];
                                                                                                                                   i.setItem(d.SELECTED_VEHICLE_INFO, JSON.stringify(f));
                                                                                                                                   f = null;
                                                                                                                                   f = i.getItem(d.CONFIRMATION_NUMBER);
                                                                                                                                   f = m.isModify() ? htz.config.rootContext + "/rest/hertz/v2/reservations/" + f : htz.config.rootContext + "/rest/hertz/v2/reservations/";
                                                                                                                                   r.saveWithRetry(a, {}, {
                                                                                                                                       url: f,
                                                                                                                                       type: "POST",
                                                                                                                                       error: function(a, b) {
                                                                                                                                           a.trigger("error", a, b);
                                                                                                                                           j().inUse && j().closeOverlay();
                                                                                                                                           c = !0
                                                                                                                                       },
                                                                                                                                       success: function(f, d) {
                                                                                                                                           a.trigger("sync", f, d);
                                                                                                                                           if (d && d.resultInfo) {
                                                                                                                                               if (j().closeOverlay(), a.clear({
                                                                                                                                                       silent: !0
                                                                                                                                                   }), a.set(e, {
                                                                                                                                                       silent: !0
                                                                                                                                                   }), d.data.href.split("/"), b.viewHelper.setSessionData(d, JSON.stringify(b.model)), !htz.config.isApp) {
                                                                                                                                                   var g = {
                                                                                                                                                       scenario: "impressions-addOn"
                                                                                                                                                   };
                                                                                                                                                   g.payload = d.data.model.categories;
                                                                                                                                                   p.track(g)
                                                                                                                                               }
                                                                                                                                           } else WebTracking && WebTracking.setError("debug-vehicle-quote-failure-" + z.getResponseText(d) +
                                                                                                                                               "-" + Utils.browserDeviceType(), "vehicle"), c = !0
                                                                                                                                       },
                                                                                                                                       complete: function() {
                                                                                                                                           c && (k.config.isApp ? htz.utils.Spinner.stop() : l.getSpinner().stop())
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               }
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               this.preInitialize();
                                                                                                                               this.el = this.options.el;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.metaData = this.model.get("metaData");
                                                                                                                               this.omniture();
                                                                                                                               this.postInitialize()
                                                                                                                           },
                                                                                                                           omniture: function() {
                                                                                                                               var a = "";
                                                                                                                               n.each(this.model.get("vehicles").models, function(b) {
                                                                                                                                   a += ";" + b.get("sipp") + ';;;;evar9="",'
                                                                                                                               });
                                                                                                                               this.model.set("omnitureProducts", a)
                                                                                                                           },
                                                                                                                           omnitureProducts: function() {
                                                                                                                               return this.model.get("omnitureProducts")
                                                                                                                           },
                                                                                                                           display: function(a) {
                                                                                                                               a = "all" === a ? this.model.get("vehicles").length : a;
                                                                                                                               this.model.set("numberToDisplay", a, {
                                                                                                                                   silent: !0
                                                                                                                               });
                                                                                                                               this.model.get("vehicles").trigger("reset")
                                                                                                                           },
                                                                                                                           renderBreadCrumb: function() {
                                                                                                                               this.stepsView && (this.stepsView = null);
                                                                                                                               this.stepsView = new y({
                                                                                                                                   model: new s.Model({
                                                                                                                                       step: 2,
                                                                                                                                       content: htz.step.content,
                                                                                                                                       linkable: !0
                                                                                                                                   }),
                                                                                                                                   el: this.$("#steps")
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderErrors: function(a, b) {
                                                                                                                               if (a, b) {
                                                                                                                                   if (b.systemErrors && !htz.config.isApp) {
                                                                                                                                       var c = {
                                                                                                                                           scenario: "system-errordata-tracking"
                                                                                                                                       };
                                                                                                                                       c.payload = b.systemErrors;
                                                                                                                                       p.track(c)
                                                                                                                                   }
                                                                                                                                   Utils.displayAllErrors(b, this.$el.find("#error-list"))
                                                                                                                               } else {
                                                                                                                                   var e = i.getItem(d.VEHICLES_ERROR_DATA);
                                                                                                                                   e && (e = JSON.parse(e), e.messages && !htz.config.isApp && (c = {
                                                                                                                                       scenario: "system-errordata-tracking"
                                                                                                                                   }, c.payload = e.messages, p.track(c)), Utils.displayAllErrors(e, this.$el.find("#error-list")), i.removeItem(d.VEHICLES_ERROR_DATA))
                                                                                                                               }
                                                                                                                           },
                                                                                                                           resetErrors: function() {
                                                                                                                               Utils.clearErrorMessage(this.$el.find("#error-list"))
                                                                                                                           },
                                                                                                                           renderPage: function() {
                                                                                                                               this.model.get("isHod24X7Enabled") &&
                                                                                                                                   !this.model.get("goldAnytimeRes") && !this.metaData.get("itinerary").isOneWay && !k.config.rmc ? this.handleHertz24X7Scenarios() : this.renderRegularPage()
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               try {
                                                                                                                                   return this.preRender(), this.$el.children(":not(script)").remove(), this.$el.append(n.template(h(this.template).html(), {
                                                                                                                                       page: this.model.attributes,
                                                                                                                                       content: this.content
                                                                                                                                   })), this.renderBreadCrumb(), this.renderPage(), this.renderErrors(), this.postRender(), this
                                                                                                                               } catch (a) {
                                                                                                                                   h.publish(d.HANDLE_RENDER_FAIL, a.message)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           renderRegularPage: function() {
                                                                                                                               this.renderHertzVehiclePage();
                                                                                                                               this.showAfterHours()
                                                                                                                           },
                                                                                                                           renderItinerary: function() {
                                                                                                                               w.showItinerary(null, this.$el.find("#itinerary-content"), this.content, {
                                                                                                                                   optional: !0,
                                                                                                                                   goldAnytimeRes: this.model.get("goldAnytimeRes")
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderRateDetails: function() {
                                                                                                                               x.showRateDetail(null, this.$el.find("#rate-details-content"), null, this.content, {
                                                                                                                                   optional: !0
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderHertzVehiclePage: function() {
                                                                                                                               var a = this.model.get("vehicles");
                                                                                                                               if (this.model.get("allSoldOut")) this.renderSoldOutAdvisoryMsg();
                                                                                                                               else {
                                                                                                                                   if (!a || 0 == a.length) {
                                                                                                                                       try {
                                                                                                                                           var b = i.getItem(d.VEHICLES_FALLBACK_ERROR_DATA),
                                                                                                                                               b = JSON.parse(b);
                                                                                                                                           htz.homepage.json.message = b
                                                                                                                                       } catch (c) {}
                                                                                                                                       this.goHome();
                                                                                                                                       return
                                                                                                                                   }
                                                                                                                                   this.renderGoldAnytimeBanner();
                                                                                                                                   this.renderOneClickBanner();
                                                                                                                                   this.renderVehiclesList()
                                                                                                                               }
                                                                                                                               this.$("#vehicles").addClass("hertzVehicles");
                                                                                                                               this.renderItinerary();
                                                                                                                               this.renderRateDetails();
                                                                                                                               this.renderRentalLinks()
                                                                                                                           },
                                                                                                                           renderSoldOutAdvisoryMsg: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/vehicle/core/view/vehicle-friendly-msg-view"], function(b) {
                                                                                                                                   a.vehicleSoldOutFriendlyMsg = new b({
                                                                                                                                       el: "#vehicles-list",
                                                                                                                                       template: "#soldout-friendly-msg-tpl",
                                                                                                                                       content: a.content,
                                                                                                                                       viewReferrer: a,
                                                                                                                                       viewHelper: a.viewHelper,
                                                                                                                                       model: a.model,
                                                                                                                                       soldOutMsgInOverlay: !1
                                                                                                                                   })
                                                                                                                               });
                                                                                                                               a.$el.find(".rate-message").hide()
                                                                                                                           },
                                                                                                                           renderVehiclesList: function() {
                                                                                                                               this.vehiclesListView = new u({
                                                                                                                                   viewReferrer: this,
                                                                                                                                   viewHelper: this.viewHelper,
                                                                                                                                   el: "#vehicles-list",
                                                                                                                                   template: "#vehicles-list-tpl",
                                                                                                                                   model: this.model.get("vehicles"),
                                                                                                                                   page: this.model.attributes,
                                                                                                                                   content: this.content
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderGoldAnytimeBanner: function() {
                                                                                                                               var a = this;
                                                                                                                               a.model.get("goldAnytimeRes") && require(["reservation/vehicle/core/view/vehicle-gold-anytime-view"], function(b) {
                                                                                                                                   a.vehicleGoldAnytimeView =
                                                                                                                                       new b({
                                                                                                                                           el: "#gold-anytime",
                                                                                                                                           template: "#vehicle-gold-anytime-tpl",
                                                                                                                                           content: a.content
                                                                                                                                       })
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderOneClickBanner: function() {
                                                                                                                               var a = this;
                                                                                                                               !a.model.get("goldAnytimeRes") && (!m.isModify() && !k.config.rmc && this.model.get("citySpecialFound") && !this.model.get("isCitySpecialsShown") && (!this.model.get("multiRate") || this.model.get("multiRate") && 1 === this.model.get("rateType"))) && require(["reservation/vehicle/core/view/vehicle-one-click-banner-view"], function(b) {
                                                                                                                                   a.oneClickBanner = new b({
                                                                                                                                       el: "#city-specials-banner",
                                                                                                                                       template: "#one-click-banner-tpl",
                                                                                                                                       viewReferrer: a,
                                                                                                                                       viewHelper: a.viewHelper,
                                                                                                                                       content: a.content,
                                                                                                                                       pickupLoc: a.metaData.get("itinerary").pickupLocation.name,
                                                                                                                                       model: a.model
                                                                                                                                   })
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderRentalLinks: function() {
                                                                                                                               v.showRentalLinks(this.model.get("carRentalGuideDisplay"), this.model.get("showRentalAgreement"), this.model.get("showEvRentalAgreement"), this.content, this.$el.find("#rental-links"))
                                                                                                                           },
                                                                                                                           showAfterHours: function() {
                                                                                                                               var a = this,
                                                                                                                                   b = htz.config.isApp ? "app" : "core";
                                                                                                                               a.model.get("afterHours") && require(["reservation/after-hours/" + b + "/presenter/after-hours-presenter"],
                                                                                                                                   function(b) {
                                                                                                                                       b.showAfterHours({
                                                                                                                                           referrer: a,
                                                                                                                                           title: a.content.whatPage.afterHoursReturnOverlay.afterHoursTitle,
                                                                                                                                           data: n.extend(a.metaData.get("itinerary"), {
                                                                                                                                               informationForRedirection: a.model.get("informationForRedirection")
                                                                                                                                           })
                                                                                                                                       })
                                                                                                                                   })
                                                                                                                           },
                                                                                                                           closeAfterHours: function() {
                                                                                                                               j().closeOverlay()
                                                                                                                           },
                                                                                                                           renderHodPage: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/vehicle/core/view/hod-vehicle-list-view"], function(b) {
                                                                                                                                   a.hodVehicleView = new b({
                                                                                                                                       iframeUrl: a.model.get("iframeUrlForHod24X7"),
                                                                                                                                       el: "#hod-vehicles"
                                                                                                                                   })
                                                                                                                               })
                                                                                                                           },
                                                                                                                           showHODBanner: function(a, b) {
                                                                                                                               var c =
                                                                                                                                   this;
                                                                                                                               ("hodPage" === a || "mapPage" === a) && this.$("#vehicles").addClass("hodVehicles");
                                                                                                                               require(["reservation/hod-banner/core/view/hod-banner-view"], function(d) {
                                                                                                                                   this.hodBannerView = new d({
                                                                                                                                       el: "#hod-banner",
                                                                                                                                       template: "#hod-banner-tpl",
                                                                                                                                       scenario: a,
                                                                                                                                       content: c.content,
                                                                                                                                       iframeUrl: c.model.get("iframeUrlForHod24X7"),
                                                                                                                                       hodContent: b,
                                                                                                                                       hodSiteUrl: c.model.get("hodSiteUrl")
                                                                                                                                   })
                                                                                                                               })
                                                                                                                           },
                                                                                                                           handleHertz24X7Scenarios: function() {
                                                                                                                               var a = this,
                                                                                                                                   b = a.model.get("locationClosed"),
                                                                                                                                   c = i.getItem(d.HOD_VEHICLES),
                                                                                                                                   e = c ? c : "";
                                                                                                                               if ("true" === e && a.model.get("iframeUrlForHod24X7") &&
                                                                                                                                   !a.model.get("showHodOverlay") && !a.model.get("showHodMapView")) a.showHODBanner("hodPage", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodVehiclePageBanner.hodVehicleBannerList), a.renderHodPage();
                                                                                                                               else if (a.model.get("showHod24X7Vehicles") && b) a.showHODBanner("hodPage", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodVehiclePageBanner.hodVehicleBannerList), a.renderHodPage();
                                                                                                                               else if (a.model.get("showHodOverlay") && (!a.model.get("hod24X7VehicleAvailabilityServiceLink") || "true" === e)) a.renderRegularPage(),
                                                                                                                                   a.showHODBanner("hertzWithHodOverlay", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hertzOpenHodEnabled.hertzOpenBannerList);
                                                                                                                               else if (a.model.get("hod24X7VehicleAvailabilityServiceLink")) {
                                                                                                                                   if (!b && (a.renderRegularPage(), !a.model.get("checkHodVehiclesAvailability"))) {
                                                                                                                                       a.showHODBanner("hertzWithHodOverlay", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hertzOpenHodEnabled.hertzOpenBannerList);
                                                                                                                                       return
                                                                                                                                   }
                                                                                                                                   "true" !== e && "false" !== e && h.ajax({
                                                                                                                                       url: a.model.get("hod24X7VehicleAvailabilityServiceLink"),
                                                                                                                                       dataType: "jsonp",
                                                                                                                                       jsonpCallback: "callback",
                                                                                                                                       contentType: "application/json",
                                                                                                                                       timeout: 1E4,
                                                                                                                                       success: function(c) {
                                                                                                                                           "true" === c ? (e = "true", !a.model.get("showHodOverlay") && b ? (a.showHODBanner("hodPage", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodVehiclePageBanner.hodVehicleBannerList), a.renderHodPage()) : a.showHODBanner("hertzWithHodOverlay", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hertzOpenHodEnabled.hertzOpenBannerList)) : (e = "false", b && a.model.get("afterHours") && a.renderRegularPage());
                                                                                                                                           i.setItem(d.HOD_VEHICLES,
                                                                                                                                               e)
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           b && a.model.get("afterHours") && a.renderRegularPage()
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               } else a.model.get("showHodMapView") && a.model.get("iframeUrlForHod24X7") ? (a.showHODBanner("mapPage", a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodMapPage.hodMapPageBannerList), a.renderHodPage(), require(["reservation/hod-banner/core/view/hod-banner-view"], function(b) {
                                                                                                                                   a.hodBannerView = new b({
                                                                                                                                       scenario: "mapOverlay",
                                                                                                                                       template: "#hod-banner-tpl",
                                                                                                                                       hodContent: a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodMapOverlay.hodMapOverlayList,
                                                                                                                                       hodSiteUrl: a.model.get("hodSiteUrl"),
                                                                                                                                       lightBox: j(),
                                                                                                                                       content: a.content
                                                                                                                                   })
                                                                                                                               })) : a.renderRegularPage()
                                                                                                                           },
                                                                                                                           refresh: function() {
                                                                                                                               this.metaData = this.model.get("metaData");
                                                                                                                               this.render();
                                                                                                                               this.model.get("vehicles").trigger("reset")
                                                                                                                           },
                                                                                                                           showBannerAds: function() {
                                                                                                                               return this.model.get("displayBannerAds") && "phone" !== k.config.deviceGroup
                                                                                                                           },
                                                                                                                           loadBanners: function() {
                                                                                                                               var a = this;
                                                                                                                               a.showBannerAds() && a.viewHelper.getBanner({
                                                                                                                                   data: {
                                                                                                                                       inList: a.model.get("displayBannerInList") ? !0 : !1,
                                                                                                                                       discountAd: a.model.get("discountAd"),
                                                                                                                                       leftAd: a.model.get("leftAd"),
                                                                                                                                       rightAd: a.model.get("rightAd")
                                                                                                                                   },
                                                                                                                                   success: function(b, c, d) {
                                                                                                                                       Utils.sessionTimedOut(d) || (a.model.get("displayBannerInList") && a.$el.find(".vehicle").length > a.model.get("bannerPosition") ? a.$el.find(".vehicle:eq(" + a.model.get("bannerPosition") + ")").after(b) : a.$el.find(".vehicle:last").after(b), gptBannerAds.clean(), gptBannerAds.render())
                                                                                                                                   }
                                                                                                                               })
                                                                                                                           },
                                                                                                                           checkSort: function(a) {
                                                                                                                               if ("select" === a.get(0).nodeName.toLowerCase()) switch (a.val()) {
                                                                                                                                   case "0":
                                                                                                                                       url = "sort/original";
                                                                                                                                       break;
                                                                                                                                   case "1":
                                                                                                                                       url = "sort/price/up";
                                                                                                                                       break;
                                                                                                                                   case "2":
                                                                                                                                       url =
                                                                                                                                           "sort/price/down";
                                                                                                                                       break;
                                                                                                                                   case "3":
                                                                                                                                       url = "sort/size/up";
                                                                                                                                       break;
                                                                                                                                   case "4":
                                                                                                                                       url = "sort/size/down"
                                                                                                                               } else newDir = "up" === this.model.get("sortDir") ? "down" : "up", a.hasClass("price") ? (this.model.set("sortBy", "price", {
                                                                                                                                   silent: !0
                                                                                                                               }), url = "sort/price/" + newDir) : a.hasClass("size") ? (this.model.set("sortBy", "size", {
                                                                                                                                   silent: !0
                                                                                                                               }), url = "sort/size/" + newDir) : url = "sort/original";
                                                                                                                               url && (htz.config.isApp || (a = {
                                                                                                                                   scenario: "filter-sort-vehicles"
                                                                                                                               }, a.payload = url, p.track(a)), a = d.VEHICLES, m.isModify() && (a = "modify/" + a), o.getRotar().rotate(a, url))
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.viewHelper.doCleanup && this.viewHelper.doCleanup();
                                                                                                                               this.stepsView && this.stepsView.doCleanup && this.stepsView.doCleanup();
                                                                                                                               this.rentalLinksView && this.rentalLinksView.doCleanup && this.rentalLinksView.doCleanup();
                                                                                                                               this.content = this.viewHelper = this.template = this.metaData = this.stepsView = this.rentalLinksView = this.model = q = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/helper/view-helper", "jquery config/app-config utils/utils-proxy utils/sessionhelper json reservation/process-info/core/model/process-model reservation/config reservation/process-config/core/reservation-constants reservation/utils/core/reservation-utils".split(" "), function(n, o, r, k, j, p, q, f, s) {
                                                                                                                       function l() {
                                                                                                                           null == m && (m = r.getLightbox());
                                                                                                                           return m
                                                                                                                       }
                                                                                                                       var m = null;
                                                                                                                       return {
                                                                                                                           showCarInfo: function(a, e) {
                                                                                                                               require(["reservation/rate-details/core/view/vehicle-detail-view", "reservation/rate-details/core/model/vehicle-model"],
                                                                                                                                   function(c, b) {
                                                                                                                                       var f = new b(a.attributes),
                                                                                                                                           d = s.generateVehicleDetailTitle(f, e.whatPage.whatViewVehicleInclude);
                                                                                                                                       f.set("content", e);
                                                                                                                                       l().overlay({
                                                                                                                                           title: d,
                                                                                                                                           width: 650
                                                                                                                                       }, (new c({
                                                                                                                                           model: f
                                                                                                                                       })).$el)
                                                                                                                                   })
                                                                                                                           },
                                                                                                                           showRQRDetails: function(a) {
                                                                                                                               l().overlay({
                                                                                                                                   title: a.attr("title"),
                                                                                                                                   height: 300,
                                                                                                                                   url: o.config.rootContext + "/reservation/gaq/templates/common/rqrLookup.jsp?KEYWORD=" + a.attr("lang")
                                                                                                                               })
                                                                                                                           },
                                                                                                                           setSessionData: function(a, e) {
                                                                                                                               e = j.parse(e);
                                                                                                                               if (!p.isModify()) {
                                                                                                                                   var c = k.getItem(f.VEHICLES_DATA);
                                                                                                                                   if (c && (c = j.parse(c), c.isCitySpecialsShown)) {
                                                                                                                                       e.isCitySpecialSelected =
                                                                                                                                           c.isCitySpecialSelected;
                                                                                                                                       e.isCitySpecialsShown = c.isCitySpecialsShown;
                                                                                                                                       for (var b = e.vehicles, c = c.vehicles, l = !1, d = 0; d < c.length; d++)
                                                                                                                                           for (var h = 0; h < c[d].quotes.length; h++)
                                                                                                                                               if (c[d].quotes[h] && c[d].quotes[h].citySpecialPrice)
                                                                                                                                                   for (var l = !0, g = 0; g < b.length; g++)
                                                                                                                                                       if (c[d].sipp === b[g].sipp)
                                                                                                                                                           for (var i = 0; i < b[g].quotes.length; i++)
                                                                                                                                                               if (b[g].quotes[i] && b[g].quotes[i].price && (!b[g].multiRate || b[g].multiRate && 1 === b[g].quotes[i].rateType && !b[g].quotes[i].prepaid)) b[g].quotes[i].citySpecialPrice = c[d].quotes[h].citySpecialPrice,
                                                                                                                                                                   b[g].quotes[i].approxTotalPrice = c[d].quotes[h].approxTotalPrice, b[g].quotes[i].href = c[d].quotes[h].href, b[g].quotes[i].id = c[d].quotes[h].id, b[g].quotes[i].quoteIndex = c[d].quotes[h].quoteIndex, prepaid = b[d].multiRate && 0 === h ? 1 : 0, b[d].quotes[prepaid] && b[d].quotes[prepaid].save && (b[d].quotes[h].conversionPrice ? (delete b[d].quotes[prepaid].save, delete b[d].quotes[h].conversionPrice) : b[d].quotes[prepaid].save = (parseFloat(b[d].quotes[prepaid].price) - parseFloat(b[d].quotes[h].citySpecialPrice)).toFixed(2) +
                                                                                                                                                                       " " + b[d].quotes[prepaid].currency);
                                                                                                                                       l && (e.vehicles = b)
                                                                                                                                   }
                                                                                                                               }
                                                                                                                               k.setItem(f.VEHICLES_DATA, j.stringify(e));
                                                                                                                               k.setItem(f.ITINERARY_INFO_DATA, j.stringify(a.data.itinerary));
                                                                                                                               k.setItem(f.RATE_DETAILS_DATA, j.stringify(a.data.rateDetails));
                                                                                                                               b = f.EXTRAS;
                                                                                                                               c = a.message;
                                                                                                                               if (a.data.model && a.data.model.categories) {
                                                                                                                                   if (k.setItem(f.EXTRAS_DATA, j.stringify(a.data.model)), c) try {
                                                                                                                                       k.setItem(f.EXTRAS_ERROR_DATA, j.stringify(c))
                                                                                                                                   } catch (m) {}
                                                                                                                               } else if (b = f.REVIEW_AND_BOOK, k.setItem(f.REVIEW_AND_BOOK_DATA, j.stringify(a.data.model)), c) try {
                                                                                                                                   k.setItem(f.REVIEW_AND_BOOK_ERROR_DATA,
                                                                                                                                       j.stringify(c))
                                                                                                                               } catch (n) {}
                                                                                                                               p.isModify() && (b = "modify/" + b);
                                                                                                                               q.getRotar().rotate(b)
                                                                                                                           },
                                                                                                                           vehicleCollectionList: function(a) {
                                                                                                                               return [a.whatPage.whatViewVehicleInclude.greenExtraText, a.whatPage.whatViewVehicleInclude.funExtraText, a.whatPage.whatViewVehicleInclude.prestigeExtraText, a.whatPage.whatViewVehicleInclude.adrenalineExtraText, a.whatPage.whatViewVehicleInclude.familyExtraText, a.whatPage.whatViewVehicleInclude.greenTravelerExtraText]
                                                                                                                           },
                                                                                                                           getBanner: function(a) {
                                                                                                                               var e = {
                                                                                                                                       cache: !1,
                                                                                                                                       url: o.config.rootContext + "/templates/reservation/vehicle/vehicleBannerAd.jsp",
                                                                                                                                       dataType: "html"
                                                                                                                                   },
                                                                                                                                   e = n.extend(e, a);
                                                                                                                               n.ajax(e)
                                                                                                                           },
                                                                                                                           showAgeWarning: function(a) {
                                                                                                                               a = n(a.target);
                                                                                                                               l().overlay({
                                                                                                                                   title: a.text(),
                                                                                                                                   height: 300,
                                                                                                                                   url: o.config.rootContext + "/reservation/gaq/templates/common/rqrLookup.jsp?KEYWORD=" + a.attr("lang")
                                                                                                                               });
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           goHome: function() {
                                                                                                                               var a = f.ITINERARY;
                                                                                                                               p.isModify() && (a = "modify/" + a);
                                                                                                                               q.getRotar().rotate(a);
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           showFleet: function(a) {
                                                                                                                               require(["reservation/fleet/core/view/fleet-view"], function(e) {
                                                                                                                                   l().overlay({
                                                                                                                                       title: a.whatPage.whatViewOverlays.fleetOverlayTitle
                                                                                                                                   }, (new e({
                                                                                                                                       content: a
                                                                                                                                   })).render().el)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           showCitySpecialsInfo: function(a) {
                                                                                                                               l().overlay({
                                                                                                                                   title: a.whatPage.whatViewOverlays.citySpecialsOverlayTitle
                                                                                                                               }, a.whatPage.whatViewOverlays.citySpecialsOverlayText)
                                                                                                                           },
                                                                                                                           track: function(a, e, c) {
                                                                                                                               "undefined" !== typeof WebTracking && WebTracking.sendTrackingRequest(a, {
                                                                                                                                   linkTrackVars: "pageName,products,eVar28",
                                                                                                                                   linkTrackEvents: "None",
                                                                                                                                   pageName: "noShowFeeVehicleOverlay",
                                                                                                                                   products: e,
                                                                                                                                   eVar28: c
                                                                                                                               })
                                                                                                                           },
                                                                                                                           trackCitySpecials: function(a) {
                                                                                                                               "undefined" !== typeof WebTracking && WebTracking.sendTrackingData("City Specials " + a, {
                                                                                                                                   linkTrackVars: "pageName",
                                                                                                                                   pageName: "citySpecials" + a
                                                                                                                               }, !0)
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               m = null
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/hod-vehicle-list-view", ["jquery", "underscore", "backbone", "config/app-config"], function(b, g, c, f) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.iframeUrl = this.options.iframeUrl;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           loadIFrame: function() {
                                                                                                                               this.$el.append('<iframe id="iframe-hod" src="' + f.config.protocol + ":" + this.iframeUrl + '" frameBorder="0"></iframe>')
                                                                                                                           },
                                                                                                                           getDomain: function() {
                                                                                                                               return this.iframeUrl.split("/")[2]
                                                                                                                           },
                                                                                                                           setMessageHandler: function() {
                                                                                                                               var c = f.config.protocol + "://" + this.getDomain(),
                                                                                                                                   d, e;
                                                                                                                               b(window).on("message", function(a) {
                                                                                                                                   a.preventDefault();
                                                                                                                                   d = a.originalEvent;
                                                                                                                                   e = d.data;
                                                                                                                                   d.origin === c && ("widgetScroll" === e ? (a = b("#iframe-hod").offset(), window.scrollTo(0, a.top)) : (a = parseInt((e + "").split(":")[1], 10), 0 < a && b("#iframe-hod").css("minHeight", a + "px")))
                                                                                                                               })
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.loadIFrame();
                                                                                                                               this.setMessageHandler()
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.iframeUrl = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/hod-banner/core/view/hod-banner-view", "jquery underscore backbone config/app-config utils/utils-proxy routers/res-rotar reservation/vehicle/core/view/hod-vehicle-list-view reservation/process-info/core/model/process-model".split(" "), function(e, f, g, h, d, i, j, k) {
                                                                                                                       var b = g.View.extend({
                                                                                                                           events: {
                                                                                                                               "click #show-hod": "showHodOverlay",
                                                                                                                               "click .icons-calendar_lg": "goToHomePage",
                                                                                                                               "click .edit-res": "goToHomePage",
                                                                                                                               "click .icons-search": "goToLocationsPage",
                                                                                                                               "click #find-locations": "showHodLocations",
                                                                                                                               "click .search-location": "goToLocationsPage",
                                                                                                                               "click .hod-24X7-img": "goToHodSite"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               this.scenario = this.options.scenario;
                                                                                                                               this.iframeUrl = this.options.iframeUrl;
                                                                                                                               this.hodSiteUrl = this.options.hodSiteUrl;
                                                                                                                               this.hodContent = this.options.hodContent;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.captureElem = !1;
                                                                                                                               "mapOverlay" === this.scenario ? this.showHodMapOverlay() : this.render()
                                                                                                                           },
                                                                                                                           showHodOverlay: function() {
                                                                                                                               var a = this;
                                                                                                                               a.lightbox || (a.lightBox = d.getLightbox());
                                                                                                                               a.lightBox.overlay({
                                                                                                                                   title: a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodVehicleOverlay.overlayTitle,
                                                                                                                                   width: 990,
                                                                                                                                   dismiss: !1,
                                                                                                                                   close: function() {
                                                                                                                                       a.trackHod("hodOverlayVehicleListClose", "eVar64", "HOD Overlay Vehicle List Close")
                                                                                                                                   }
                                                                                                                               }, (new b({
                                                                                                                                   scenario: "hodOverlay",
                                                                                                                                   content: this.content,
                                                                                                                                   template: "#hod-banner-tpl",
                                                                                                                                   hodContent: a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodVehicleOverlay.hodVehicleOverlayList,
                                                                                                                                   hodSiteUrl: this.hodSiteUrl
                                                                                                                               })).el);
                                                                                                                               var c = a.lightBox.getDataContainer();
                                                                                                                               c && c.append((new j({
                                                                                                                                   iframeUrl: this.iframeUrl
                                                                                                                               })).el);
                                                                                                                               a.trackHod("hodVehicleBannerGO", "eVar57", "HOD Vehicle Banner GO")
                                                                                                                           },
                                                                                                                           showHodMapOverlay: function() {
                                                                                                                               var a =
                                                                                                                                   this;
                                                                                                                               a.lightbox || (a.lightBox = d.getLightbox());
                                                                                                                               a.lightBox.overlay({
                                                                                                                                   title: a.content.hertzOnDemand.Hod24x7VehiclePageTopBanner.hodMapOverlay.overlayTitle,
                                                                                                                                   width: 580,
                                                                                                                                   dismiss: !1,
                                                                                                                                   close: function() {
                                                                                                                                       a.captureElem ? a.trackHod("hodOverlayFind24/7Loc", "eVar60", "HOD Overlay Find 24/7 Loc") : a.trackHod("hodOverlay24/7InfoClose", "eVar65", "HOD Overlay 24/7 Info Close")
                                                                                                                                   }
                                                                                                                               }, this.render().el)
                                                                                                                           },
                                                                                                                           showHodLocations: function() {
                                                                                                                               this.captureElem = !0;
                                                                                                                               this.lightBox && this.lightBox.closeOverlay()
                                                                                                                           },
                                                                                                                           goToHomePage: function() {
                                                                                                                               "mapOverlay" ===
                                                                                                                               this.scenario ? this.trackHod("hodOverlayEditRes", "eVar61", "HOD Overlay Edit Res") : this.trackHod("hodVehicleBannerEditRes", "eVar58", "HOD Vehicle Banner Edit Res");
                                                                                                                               var a = "itinerary";
                                                                                                                               k.isModify() && (a = "modify/" + a);
                                                                                                                               i.rotate(a)
                                                                                                                           },
                                                                                                                           goToLocationsPage: function() {
                                                                                                                               "mapOverlay" === this.scenario ? this.trackHod("hodOverlayKeepLooking", "eVar62", "HOD Overlay Keep Looking") : this.trackHod("hodVehicleBannerKeepLooking", "eVar59", "HOD Vehicle Banner Keep Looking");
                                                                                                                               window.location.href = h.config.rootContext + "/location"
                                                                                                                           },
                                                                                                                           trackHod: function(a,
                                                                                                                               c, d) {
                                                                                                                               var b = {
                                                                                                                                   linkTrackVars: c,
                                                                                                                                   linkTrackEvents: "None",
                                                                                                                                   pageName: "hodBanner"
                                                                                                                               };
                                                                                                                               b[c] = d;
                                                                                                                               try {
                                                                                                                                   WebTracking.sendTrackingRequest(a, b)
                                                                                                                               } catch (e) {}
                                                                                                                           },
                                                                                                                           goToHodSite: function() {
                                                                                                                               window.open(this.hodSiteUrl, "_blank")
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(f.template(e(this.template).html(), {
                                                                                                                                   scenario: this.scenario,
                                                                                                                                   hodContent: this.hodContent,
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       });
                                                                                                                       return b
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/presenter/vehicle-presenter", getDependencies("reservation/vehicle/core/presenter/vehicle-presenter"), function(u, j, B, v, C, i, D, w, E, F, G, x, y, d, H) {
                                                                                                                       function z(d, g) {
                                                                                                                           for (var h = [], c = 0; c < d.length; c++)
                                                                                                                               for (var e = d[c].quotes.length, i, j = 0; j < e; j++) {
                                                                                                                                   var l = d[c].quotes[j];
                                                                                                                                   1 == e && (l && l.soldout || l && l.unavailable || null === l) && h.push(c);
                                                                                                                                   2 == e && (0 == j ? i = l : (null === i && null === l || i && i.unavailable && l && l.unavailable) && h.push(c))
                                                                                                                               }
                                                                                                                           if (g) {
                                                                                                                               c = d;
                                                                                                                               for (e = h.length - 1; 0 <= e; e--) c.splice(h[e], 1);
                                                                                                                               return c
                                                                                                                           }
                                                                                                                           return h.length
                                                                                                                       }
                                                                                                                       var h, o, t = d.VEHICLES;
                                                                                                                       return {
                                                                                                                           show: function(I, g) {
                                                                                                                               var r;
                                                                                                                               a: {
                                                                                                                                   var c = i.getItem(d.ITINERARY_DATA);
                                                                                                                                   try {
                                                                                                                                       var c = j.parse(c),
                                                                                                                                           e = 0,
                                                                                                                                           e = w.config.isApp ? j.parse(i.getItem(d.APP_MEMBER_INFO)).isLoggedIn : htz.homepage.json.data.model.metaData.loggedIn;
                                                                                                                                       if (c.metaData.loggedIn !== e) {
                                                                                                                                           window.location.reload();
                                                                                                                                           r = !1;
                                                                                                                                           break a
                                                                                                                                       }
                                                                                                                                   } catch (B) {}
                                                                                                                                   r = !0
                                                                                                                               }
                                                                                                                               if (r) {
                                                                                                                                   r = I.content;
                                                                                                                                   a: {
                                                                                                                                       var s = null,
                                                                                                                                           l = null,
                                                                                                                                           A = null;
                                                                                                                                       if (x.hasProcessStarted() && (s = i.getItem(d.VEHICLES_DATA), l = i.getItem(d.ITINERARY_INFO_DATA), s && l)) {
                                                                                                                                           c = [j.parse(s), j.parse(l)];
                                                                                                                                           break a
                                                                                                                                       }
                                                                                                                                       y.getSpinner().spin();
                                                                                                                                       u.ajax({
                                                                                                                                           async: !1,
                                                                                                                                           cache: !1,
                                                                                                                                           url: w.config.rootContext + "/rest/hertz/v2/reservations/vehicles/1",
                                                                                                                                           success: function(a) {
                                                                                                                                               a && a.data && (a.data.model && (s = a.data.model), a.data.itinerary && (l = a.data.itinerary), a.data.rateDetails && (A = a.data.rateDetails))
                                                                                                                                           },
                                                                                                                                           complete: function() {
                                                                                                                                               y.getSpinner().stop()
                                                                                                                                           }
                                                                                                                                       });c = [s, l, A];
                                                                                                                                       if (e = c[0]) {
                                                                                                                                           for (var J = e, a = e.vehicles, q = 1, b = 0; b < a.length; b++) {
                                                                                                                                               var p = a[b].quotes.length;
                                                                                                                                               if (2 < p && a[b].quotes[p - 1]) {
                                                                                                                                                   for (var k = 0; k < p; k++) a[b].quotes[k] && (!a[b].quotes[k].prepaid && 1 === a[b].quotes[k].rateType && a[b].quotes[k].price &&
                                                                                                                                                       a[b].quotes[p - 1].price && a[b].quotes[k].rate === a[b].quotes[p - 1].rate && parseFloat(a[b].quotes[k].price) > parseFloat(a[b].quotes[p - 1].price)) && (a[b].quotes[k].citySpecialPrice = a[b].quotes[p - 1].price, a[b].quotes[k].approxTotalPrice = a[b].quotes[p - 1].approxTotalPrice, a[b].quotes[k].id = a[b].sipp + "-3", a[b].quotes[k].quoteIndex = 3, a[b].quotes[k].href = a[b].quotes[p - 1].href, a[b].multiRate && (q = 0 === k ? 1 : 0, a[b].quotes[q] && a[b].quotes[q].save && (a[b].quotes[k].conversionPrice ? (delete a[b].quotes[q].save, delete a[b].quotes[k].conversionPrice) :
                                                                                                                                                       a[b].quotes[q].save = (parseFloat(a[b].quotes[q].price) - parseFloat(a[b].quotes[k].citySpecialPrice)).toFixed(2) + " " + a[b].quotes[q].currency)));
                                                                                                                                                   a[b].quotes.pop()
                                                                                                                                               }
                                                                                                                                           }
                                                                                                                                           J.vehicles = a;
                                                                                                                                           e = j.stringify(e);
                                                                                                                                           i.setItem(d.VEHICLES_DATA, e)
                                                                                                                                       }
                                                                                                                                       if (e = c[1]) e = j.stringify(e),
                                                                                                                                       i.setItem(d.ITINERARY_INFO_DATA, e);
                                                                                                                                       if (c = c[2]) c = j.stringify(c),
                                                                                                                                       i.setItem(d.RATE_DETAILS_DATA, c);c = [s, l]
                                                                                                                                   }
                                                                                                                                   e = c;
                                                                                                                                   try {
                                                                                                                                       var f, n, m = i.getItem(d.RATE_DETAILS_DATA);
                                                                                                                                       if (m && (m = j.parse(m)) && m.rateInfo && m.rateInfo.approxTotal) f = m.rateInfo.currency, n = m.rateInfo.alternateCurrency;
                                                                                                                                       H.updateReservationInfo({
                                                                                                                                           dialect: w.config.dialect,
                                                                                                                                           pickupLocationCode: e[1].pickupLocation.locationOAGCode,
                                                                                                                                           currency: f,
                                                                                                                                           alternateCurrency: n
                                                                                                                                       })
                                                                                                                                   } catch (D) {}
                                                                                                                                   if (c[0]) {
                                                                                                                                       u.publish(d.RENDER_PREPARE_PRESENTER, g);
                                                                                                                                       i.removeItem(d.VEHICLES_FALLBACK_ERROR_DATA);
                                                                                                                                       if (htz && htz.homepage && htz.homepage.json && htz.homepage.json.message) {
                                                                                                                                           try {
                                                                                                                                               i.setItem(d.VEHICLES_ERROR_DATA, j.stringify(htz.homepage.json.message)), i.setItem(d.VEHICLES_FALLBACK_ERROR_DATA, j.stringify(htz.homepage.json.message))
                                                                                                                                           } catch (K) {}
                                                                                                                                           htz.homepage.json.message =
                                                                                                                                               null
                                                                                                                                       }
                                                                                                                                       x.setStep(t);
                                                                                                                                       f = c[0];
                                                                                                                                       n = c[1];
                                                                                                                                       f && n && (f.metaData || (f.metaData = {}), f.metaData.itinerary = n);
                                                                                                                                       f.displaySoldOut ? (n = z(f.vehicles, !1), f.allSoldOut = n === f.vehicles.length ? !0 : !1) : (f.vehicles = z(f.vehicles, !0), f.allSoldOut = f.vehicles.length ? !1 : !0);
                                                                                                                                       n = v.getPageId(t);
                                                                                                                                       m = v.isPageAdded(t);
                                                                                                                                       c = !0;
                                                                                                                                       if (m) {
                                                                                                                                           if (!g || !g.sortBy && !g.sortDir && !g.number) h.clear({
                                                                                                                                               silent: !0
                                                                                                                                           }), h.set(h.parse(f)), o.refresh(), c = !1
                                                                                                                                       } else v.addPage(t, "page"), h = new E, h.set(h.parse(f)), o = new F({
                                                                                                                                           viewHelper: G,
                                                                                                                                           template: "#vehicle-page-tpl",
                                                                                                                                           el: "#" + n,
                                                                                                                                           model: h,
                                                                                                                                           content: r
                                                                                                                                       });
                                                                                                                                       if (g && g.number) m || o.render(), o.display(g.number), c = !1;
                                                                                                                                       else if (g && (g.sortBy || g.sortDir)) m || o.render(), h.set({
                                                                                                                                           sortBy: g && g.sortBy ? sortBy = g.sortBy : "original"
                                                                                                                                       }), g && g.sortDir && h.set("sortDir", g.sortDir), h.doSort(), c = !1;
                                                                                                                                       c && o.refresh();
                                                                                                                                       u.publish(d.NAVIGATE_PREPARE_PRESENTER);
                                                                                                                                       C.getNavigator().navigate("#" + n);
                                                                                                                                       if (f = i.getItem(d.ITINERARY_INFO_DATA)) {
                                                                                                                                           n = !1;
                                                                                                                                           if (m = i.getItem(d.ITINERARY_DATA)) try {
                                                                                                                                               f = j.parse(f), m = j.parse(m), f && m && f.pickupLocation.name != m.formData.pickupLocation && (n = !0)
                                                                                                                                           } catch (L) {} else n = !0;
                                                                                                                                           n && require(["reservation/itinerary/core/presenter/itinerary-presenter"],
                                                                                                                                               function(a) {
                                                                                                                                                   a.updateData()
                                                                                                                                               })
                                                                                                                                       }
                                                                                                                                       u.publish(d.RENDER_DONE_PRESENTER, {
                                                                                                                                           step: t,
                                                                                                                                           page: g && g.sortBy ? null : d.LEGACY_VEHICLES,
                                                                                                                                           content: r
                                                                                                                                       })
                                                                                                                                   } else u.publish(d.RENDER_FAILED_PRESENTER)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               h && h.doCleanup && h.doCleanup();
                                                                                                                               o && o.doCleanup && o.doCleanup();
                                                                                                                               v.removePage(t);
                                                                                                                               h = o = null
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("reservation/itinerary/core/model/itinerary-model", "backbone json utils/restmodel utils/utils reservation/itinerary/core/model/itinerary-form-model utils/sessionhelper config/app-config".split(" "), function(f, i, h, j, g, k, e) {
                                                                                                                       return h.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments);
                                                                                                                               var c = this.get("formData"),
                                                                                                                                   d = this.get("metaData"),
                                                                                                                                   b, a;
                                                                                                                               c && (b = new g(c), this.set("formData", b));
                                                                                                                               d && (a = new f.Model(d), this.set("metaData", a));
                                                                                                                               b && a && (a.set({
                                                                                                                                   blockAds: e.config.isApp
                                                                                                                               }, {
                                                                                                                                   silent: !0
                                                                                                                               }), b.metaData = a, this.prepareCarType())
                                                                                                                           },
                                                                                                                           prepareCarType: function() {
                                                                                                                               var c = this.get("metaData"),
                                                                                                                                   d = this.get("formData"),
                                                                                                                                   b = c.get("nvpVehicleGroupSipps");
                                                                                                                               if (b && 0 < b.length)
                                                                                                                                   for (var a = 0; a < b.length; a++)
                                                                                                                                       if (b[a].value === d.get("selectedCarType")) {
                                                                                                                                           c.set({
                                                                                                                                               selectedCarLabel: b[a].name
                                                                                                                                           }, {
                                                                                                                                               silent: !0
                                                                                                                                           });
                                                                                                                                           break
                                                                                                                                       }
                                                                                                                           },
                                                                                                                           parseModel: function(c) {
                                                                                                                               var d = c.formData,
                                                                                                                                   c = c.metaData,
                                                                                                                                   b, a;
                                                                                                                               d && (b = new g(d), this.set("formData", b));
                                                                                                                               c && (a = new f.Model(c), this.set("metaData", a));
                                                                                                                               b && a && (a.set({
                                                                                                                                       blockAds: e.config.isApp
                                                                                                                                   }, {
                                                                                                                                       silent: !0
                                                                                                                                   }), b.metaData =
                                                                                                                                   a, this.prepareCarType())
                                                                                                                           },
                                                                                                                           url: e.config.rootContext + "/rest/hertz/v2/reservations/itinerary"
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/itinerary/core/model/itinerary-form-model", ["utils/restmodel", "config/app-config", "reservation/utils/core/reservation-utils"], function(c, f, d) {
                                                                                                                       return c.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments)
                                                                                                                           },
                                                                                                                           validate: function(a, b) {
                                                                                                                               if (this.metaData.get("enablePickupDropdown")) {
                                                                                                                                   if (!this.get("pickupCountry") || "" === this.get("pickupCountry")) return "pickupCountry";
                                                                                                                                   if (!this.get("pickupHiddenEOAG") || "" === this.get("pickupHiddenEOAG")) return "pickupLocation";
                                                                                                                                   if ("on" === this.get("returnAtDifferentLocationCheckbox") && (!this.get("dropoffCountry") || "" === this.get("dropoffCountry"))) return "dropoffCountry";
                                                                                                                                   if ("on" === this.get("returnAtDifferentLocationCheckbox") && (!this.get("dropoffHiddenEOAG") || "" === this.get("dropoffHiddenEOAG"))) return "dropoffLocation"
                                                                                                                               }
                                                                                                                               if (!this.get("pickupDay") || "" === this.get("pickupDay")) return "pickupDay";
                                                                                                                               if (!this.get("dropoffDay") || "" === this.get("dropoffDay")) return "dropoffDay";
                                                                                                                               if (!this.metaData.get("bookAsMember") && this.metaData.get("showAgeDropdown") &&
                                                                                                                                   (!this.get("ageSelector") || "" === this.get("ageSelector") || "0" === this.get("ageSelector")) && "none" != $("#itn-age").css("display")) return "ageSelector";
                                                                                                                               if (b && b.stepValidation) return !1;
                                                                                                                               if ("0" !== this.get("cdpField") && "" != this.get("cdpField") || "otherCdpIndicator" === this.get("cdpRadioButton") && "0" !== this.get("memberOtherCdpField") && "" !== this.get("memberOtherCdpField") || "profileCdpIndicator" === this.get("cdpRadioButton") && this.get("memberSelectedCdp") && "0" !== this.get("memberSelectedCdp") && "" !== this.get("memberSelectedCdp")) return this.metaData.get("isIncludeCDPOptions") &&
                                                                                                                                   !this.metaData.get("applicant") && this.metaData.get("isIncludeDiscountSection") && ("L" !== this.metaData.get("travelType") && "B" !== this.metaData.get("travelType") || "B" == this.metaData.get("travelType") && this.metaData.get("allowContractRate") && "yes" !== this.get("corpRate") && "no" !== this.get("corpRate")) ? "cdpDiscounts" : !1;
                                                                                                                               if (!this.metaData.get("enablePickupDropdown") && ("" !== this.get("pickupHiddenEOAG") || "" !== this.get("dropoffHiddenEOAG"))) {
                                                                                                                                   if (("Y" === this.get("inpPickupIsServedBy") || !0 == this.get("inpPickupIsServedBy") ||
                                                                                                                                           "Y" === this.get("inpPickupHasSpecialInstruction") || !0 == this.get("inpPickupHasSpecialInstruction")) && !0 !== this.metaData.get("pickupLocPopup")) return "pickupHasSpecialInstruction";
                                                                                                                                   if (this.get("pickupHiddenEOAG") !== this.get("dropoffHiddenEOAG") && "on" === this.get("returnAtDifferentLocationCheckbox") && ("Y" === this.get("inpDropoffHasSpecialInstruction") || "Y" === this.get("inpDropoffIsServedBy")) && !0 !== this.metaData.get("dropoffLocPopup")) return "dropoffHasSpecialInstruction"
                                                                                                                               }
                                                                                                                           },
                                                                                                                           url: function() {
                                                                                                                               var a = this.get("href");
                                                                                                                               return a && 0 <= a.indexOf("/rest/home") ? (a = a.split("/rest/home"), a[0] + "/rest/home/v2" + a[1]) : a
                                                                                                                           },
                                                                                                                           set: function(a, b, e) {
                                                                                                                               a = c.prototype.set.call(this, a, b, e);
                                                                                                                               b = this.get("militaryClock");
                                                                                                                               this.changed.pickupDay && (this.attributes.pickupDayStandard = d.standardizeDate(this.attributes.pickupDay, b));
                                                                                                                               this.changed.dropoffDay && (this.attributes.dropoffDayStandard = d.standardizeDate(this.attributes.dropoffDay, b));
                                                                                                                               return a
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-one-click-banner-view", "jquery underscore backbone config/app-config utils/sessionhelper utils/utils-proxy reservation/itinerary/core/model/itinerary-model reservation/process-info/core/model/process-model reservation/common/retry/core/view/retry-view reservation/vehicle/core/view/vehicle-list-view reservation/vehicle/core/model/vehicle-page-model reservation/process-config/core/reservation-constants reservation/rate-details/core/presenter/rate-details-presenter".split(" "),
                                                                                                                       function(j, o, p, k, l, n, q, u, r, s, v, m, t) {
                                                                                                                           return p.View.extend({
                                                                                                                               events: {
                                                                                                                                   "click .more-info": "citySpecialsMoreInfo",
                                                                                                                                   "click #city-specials-btn": "showCitySpecialVehicles",
                                                                                                                                   "click .city-special-info": "showCitySpecialVehicles"
                                                                                                                               },
                                                                                                                               initialize: function() {
                                                                                                                                   this.template = this.options.template;
                                                                                                                                   this.viewHelper = this.options.viewHelper;
                                                                                                                                   this.viewReferrer = this.options.viewReferrer;
                                                                                                                                   this.content = this.options.content;
                                                                                                                                   this.pickupLoc = this.options.pickupLoc;
                                                                                                                                   this.render()
                                                                                                                               },
                                                                                                                               citySpecialsMoreInfo: function() {
                                                                                                                                   this.viewHelper.showCitySpecialsInfo(this.content)
                                                                                                                               },
                                                                                                                               showCitySpecialVehicles: function() {
                                                                                                                                   this.viewHelper.trackCitySpecials("BannerClick");
                                                                                                                                   var k = new q(JSON.parse(l.getItem(m.ITINERARY_DATA))),
                                                                                                                                       c = JSON.parse(l.getItem(m.VEHICLES_DATA));
                                                                                                                                   this.itnFormData = k.get("formData");
                                                                                                                                   this.itnFormData.set({
                                                                                                                                       isCitySpecialRequested: "Y",
                                                                                                                                       citySpecialDiscountCode: c.citySpecialDiscountCode,
                                                                                                                                       citySpecialDiscountType: c.citySpecialDiscountType
                                                                                                                                   });
                                                                                                                                   this.getCitySpecialsList(this.itnFormData)
                                                                                                                               },
                                                                                                                               render: function() {
                                                                                                                                   this.$el.append(o.template(j(this.template).html(), {
                                                                                                                                       content: this.content,
                                                                                                                                       pickupLoc: this.pickupLoc
                                                                                                                                   }));
                                                                                                                                   return this
                                                                                                                               },
                                                                                                                               getCitySpecialsList: function(j) {
                                                                                                                                   var c = this;
                                                                                                                                   r.saveWithRetry(j, {}, {
                                                                                                                                       url: k.config.rootContext + "/rest/hertz/v2/itinerary/vehicles",
                                                                                                                                       type: "POST",
                                                                                                                                       beforeSend: function() {
                                                                                                                                           k.config.isApp ? htz.utils.Spinner.spin() : n.getSpinner().spin()
                                                                                                                                       },
                                                                                                                                       error: function() {
                                                                                                                                           k.config.isApp ? htz.utils.Spinner.stop() : n.getSpinner().stop();
                                                                                                                                           c.viewReferrer.$el.find("#city-specials-banner").remove();
                                                                                                                                           c.viewReferrer.$el.find("#error-list").text(c.content.whatPage.whatViewCitySpecialsBanner.citySpecialsErrorMsg).show()
                                                                                                                                       },
                                                                                                                                       success: function(j) {
                                                                                                                                           c.prevVehiclesData =
                                                                                                                                               JSON.parse(l.getItem(m.VEHICLES_DATA));
                                                                                                                                           for (var f = j.get("model").vehicles, a = c.prevVehiclesData.vehicles, g = !1, i, b = 0; b < a.length; b++)
                                                                                                                                               for (var d = 0; d < a[b].quotes.length; d++)
                                                                                                                                                   if (a[b].quotes[d] && a[b].quotes[d].price && (!a[b].multiRate || a[b].multiRate && 1 === a[b].quotes[d].rateType && !a[b].quotes[d].prepaid))
                                                                                                                                                       for (var e = 0; e < f.length; e++)
                                                                                                                                                           if (f[e].sipp === a[b].sipp)
                                                                                                                                                               for (var h = 0; h < f[e].quotes.length; h++) f[e].quotes[h] && (f[e].quotes[h].price && f[e].quotes[h].rate === a[b].quotes[d].rate && parseFloat(f[e].quotes[h].price) < parseFloat(a[b].quotes[d].price)) &&
                                                                                                                                                                   (a[b].quotes[d].citySpecialPrice = f[e].quotes[h].price, a[b].quotes[d].approxTotalPrice = f[e].quotes[h].approxTotalPrice, a[b].quotes[d].id = f[e].sipp + "-3", a[b].quotes[d].quoteIndex = 3, g = a[b].quotes[d].href, g = g.split("/"), g = g[g.length - 1], a[b].quotes[d].href = k.config.rootContext + "/rest/vehicles/vehicle/" + f[e].sipp + "/rate-type/3/rate-quote/" + g, g = !0, a[b].multiRate && (i = 0 === d ? 1 : 0, a[b].quotes[i] && a[b].quotes[i].save && (a[b].quotes[d].conversionPrice ? (delete a[b].quotes[i].save, delete a[b].quotes[d].conversionPrice) :
                                                                                                                                                                       a[b].quotes[i].save = (parseFloat(a[b].quotes[i].price) - parseFloat(a[b].quotes[d].citySpecialPrice)).toFixed(2) + " " + a[b].quotes[i].currency)));
                                                                                                                                           g ? (c.prevVehiclesData.vehicles = a, c.prevVehiclesData.isCitySpecialsShown = !0, c.model.set(c.model.parse(c.prevVehiclesData)), c.discountVehiclesList = (new s({
                                                                                                                                               viewReferrer: c.viewReferrer,
                                                                                                                                               viewHelper: c.viewHelper,
                                                                                                                                               el: "#vehicles-list",
                                                                                                                                               template: "#vehicles-list-tpl",
                                                                                                                                               model: c.model.get("vehicles"),
                                                                                                                                               page: c.model.attributes,
                                                                                                                                               content: c.content
                                                                                                                                           })).render(), t.showRateDetail(j.get("rateDetails"),
                                                                                                                                               c.viewReferrer.$el.find("#rate-details-content"), null, c.content), l.setItem(m.VEHICLES_DATA, JSON.stringify(c.model))) : (c.viewReferrer.$el.find("#error-list").text(c.content.whatPage.whatViewCitySpecialsBanner.citySpecialsErrorMsg).show(), c.viewHelper.trackCitySpecials("NoneFoundError"));
                                                                                                                                           c.viewReferrer.$el.find("#city-specials-banner").remove();
                                                                                                                                           n.getSpinner().stop()
                                                                                                                                       }
                                                                                                                                   })
                                                                                                                               }
                                                                                                                           })
                                                                                                                       });
                                                                                                                   define("reservation/utils/core/reservation-utils", "jquery json reservation/process-info/core/model/process-model utils/utils config/app-config utils/sessionhelper reservation/config utils/utils-proxy utils/domhelper reservation/process-config/core/reservation-constants res/res-resource-config-manager".split(" "), function(h, f, k, m, i, e, g, o, s, d, t) {
                                                                                                                       function p() {
                                                                                                                           null == n && (n = o.getLightbox());
                                                                                                                           return n
                                                                                                                       }
                                                                                                                       var n = null,
                                                                                                                           l = {},
                                                                                                                           j;
                                                                                                                       return {
                                                                                                                           getResponseText: function(a) {
                                                                                                                               var b = "",
                                                                                                                                   a = a.responseText;
                                                                                                                               try {
                                                                                                                                   f.parse(a)
                                                                                                                               } catch (c) {
                                                                                                                                   a &&
                                                                                                                                       (0 < a.length && (a = a.replace(/(\r\n|\n|\r)/gm, ""), 100 < a.length && (a = a.substring(0, 100))), b += a)
                                                                                                                               }
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           trackError: function(a, b) {
                                                                                                                               try {
                                                                                                                                   if ("undefined" !== typeof WebTracking) {
                                                                                                                                       var c = k.getStep(),
                                                                                                                                           b = this.getErrorType(c, a),
                                                                                                                                           d = k.getFlow();
                                                                                                                                       b || (b = "error");
                                                                                                                                       WebTracking.setError("debug-runtime-" + b + "" + (d ? "-" + d : "") + "-" + c + "-" + a + "-" + b + "-" + i.config.dialect + "-" + i.config.pos + "-" + m.browserDeviceType(), c)
                                                                                                                                   }
                                                                                                                               } catch (e) {}
                                                                                                                           },
                                                                                                                           handleRenderFail: function(a) {
                                                                                                                               try {
                                                                                                                                   if (o.getSpinner().stop(), !i.config.isApp) {
                                                                                                                                       var b = k.getStep(),
                                                                                                                                           c = this.getErrorType(b,
                                                                                                                                               a);
                                                                                                                                       this.showResubmitOverlay(b, a, c)
                                                                                                                                   }
                                                                                                                               } catch (d) {
                                                                                                                                   alert(htz.homepage.content.reservationErrors.genericErrorContent.technicalDifficulties)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           getResubmitCount: function(a) {
                                                                                                                               return !h.isEmptyObject(l) && l[a] ? l[a] : 0
                                                                                                                           },
                                                                                                                           resetResubmitCount: function(a) {
                                                                                                                               a && (l[j] = 0)
                                                                                                                           },
                                                                                                                           incrementResubmitCount: function(a) {
                                                                                                                               if (a) {
                                                                                                                                   var b = this.getResubmitCount(a);
                                                                                                                                   l[a] = 0 < b ? b + 1 : 1
                                                                                                                               }
                                                                                                                           },
                                                                                                                           resetPrevStep: function(a) {
                                                                                                                               j && j !== a && this.resetResubmitCount(j)
                                                                                                                           },
                                                                                                                           updatePrevState: function(a) {
                                                                                                                               a && (j = a)
                                                                                                                           },
                                                                                                                           getErrorType: function(a, b) {
                                                                                                                               var c = ""; - 1 < ("" + b).indexOf("content.") ?
                                                                                                                                   c = "CONTENT-ERROR" : (c = t.getPageInfo(a).checkElmId || "undefined", c = "TEMPLATE-ERROR-" + c + "-" + (h("#" + c).length ? "exists" : "missing"));
                                                                                                                               return c
                                                                                                                           },
                                                                                                                           showResubmitOverlay: function(a, b, c) {
                                                                                                                               var d, e, f, g = !1;
                                                                                                                               e = this.getResubmitCount(a);
                                                                                                                               var k = "text!" + i.config.rootContext + "/assets/" + i.config.buildId + "/html/all/reservation/common/resubmit-overlay.html",
                                                                                                                                   l = i.config.apiDomain + "/rest/content/" + htz.config.subSystemId + "/" + htz.config.dialect + "/all/reservation/common/resubmit-overlay?callback=define",
                                                                                                                                   j = p();
                                                                                                                               j.inUse && j.closeOverlay();
                                                                                                                               1 > e ? (f = "#resubmit-overlay-tpl", e = "resubmit-" + e, this.resetPrevStep(a), this.incrementResubmitCount(a), this.updatePrevState(a)) : (f = "#contact-us-overlay-tpl", e = "contact-us", g = !0);
                                                                                                                               d = m.getUniqueErrorKey();
                                                                                                                               require(["reservation/page-resubmit/core/view/page-resubmit-view", k, l], function(b, e, r) {
                                                                                                                                   e && s.addTemplate("resubmit", e);
                                                                                                                                   p().overlay({
                                                                                                                                       title: r.reservationPopups.resubmitOverlay.resubmitOverlayTitle,
                                                                                                                                       dismiss: !1
                                                                                                                                   }, (new b({
                                                                                                                                       errorKey: d,
                                                                                                                                       step: a,
                                                                                                                                       template: h(f).html(),
                                                                                                                                       errorType: c,
                                                                                                                                       lBoxRef: j,
                                                                                                                                       content: r,
                                                                                                                                       isContactUs: g
                                                                                                                                   })).render().el)
                                                                                                                               });
                                                                                                                               this.trackRuntimeError(b, a, c, e, d)
                                                                                                                           },
                                                                                                                           trackRuntimeError: function(a, b, c, d, e) {
                                                                                                                               if ("undefined" !== typeof WebTracking) {
                                                                                                                                   var f = k.getFlow(),
                                                                                                                                       f = f ? "-" + f : "",
                                                                                                                                       g = this.getPickupLocationCode(),
                                                                                                                                       g = g ? "-" + g : "",
                                                                                                                                       h = m.isPrivateMode();
                                                                                                                                   WebTracking.setError("debug-runtime-error-" + e + f + "-" + b + "-" + a + "-" + c + "-" + d + "-" + i.config.dialect + "-" + i.config.pos + g + (h ? "-" + h : "") + "-" + m.browserDeviceType(), b)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           trackWarning: function(a) {
                                                                                                                               if (a && "undefined" !== typeof WebTracking) {
                                                                                                                                   var b = [];
                                                                                                                                   b.push("debug-runtime-warning");
                                                                                                                                   var c = k.getFlow();
                                                                                                                                   c && b.push(c);
                                                                                                                                   (c =
                                                                                                                                       k.getStep()) && b.push(c);
                                                                                                                                   a.warning && b.push(a.warning);
                                                                                                                                   b.push(i.config.dialect);
                                                                                                                                   b.push(i.config.pos);
                                                                                                                                   (a = this.getPickupLocationCode()) && b.push(a);
                                                                                                                                   (a = this.getResData("pickupDate")) && b.push(a);
                                                                                                                                   (a = this.getResData("pickupTime")) && b.push(a);
                                                                                                                                   (a = this.getResData("returnDate")) && b.push(a);
                                                                                                                                   (a = this.getResData("returnTime")) && b.push(a);
                                                                                                                                   b.push(m.browserDeviceType());
                                                                                                                                   WebTracking.setError(b.join("-"), c)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           buildErrorMessage: function(a, b) {
                                                                                                                               if (!b) return "";
                                                                                                                               var c = e.getItem(d.RESERVATION_ERROR_LIST);
                                                                                                                               if (c) c = f.parse(c);
                                                                                                                               else if (a) {
                                                                                                                                   for (var c = {}, q, g = 0; g < a.length; g++)
                                                                                                                                       if (q = a[g].errorCode) c[h.trim(q)] = a[g].errorMessage;
                                                                                                                                   e.setItem(d.RESERVATION_ERROR_LIST, f.stringify(c))
                                                                                                                               }
                                                                                                                               b = h.trim(b);
                                                                                                                               return c[b] + " [" + b + "]"
                                                                                                                           },
                                                                                                                           rqrOverlay: function() {
                                                                                                                               var a = Modernizr && Modernizr.touch ? "touchstart" : "click",
                                                                                                                                   b = this;
                                                                                                                               h(document).off(a, ".rqr-policy").on(a, ".rqr-policy", function(a) {
                                                                                                                                   b.openRQRLink(a);
                                                                                                                                   return !1
                                                                                                                               })
                                                                                                                           },
                                                                                                                           openRQRLink: function(a) {
                                                                                                                               require(["reservation/policy-details-overlay/core/presenter/policy-details-overlay-presenter"], function(b) {
                                                                                                                                   b.showOverlayPopUp(a)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           checkForReferrerUrl: function() {
                                                                                                                               var a =
                                                                                                                                   e.getItem(d.ITINERARY_DATA),
                                                                                                                                   b;
                                                                                                                               if (a) try {
                                                                                                                                   a = f.parse(a), b = a.metaData.referrerUrl
                                                                                                                               } catch (c) {
                                                                                                                                   b = htz.homepage.json.data.model.metaData.referrerUrl
                                                                                                                               } else b = htz.homepage.json.data.model.metaData.referrerUrl;
                                                                                                                               b && e.setItem(d.REFERRER_URL, b)
                                                                                                                           },
                                                                                                                           keepTrackOfGeoPrefLocation: function(a) {
                                                                                                                               try {
                                                                                                                                   if (a) {
                                                                                                                                       var b = e.getItem(d.ITINERARY_SC_DATA);
                                                                                                                                       if (b)
                                                                                                                                           if (b = f.parse(b), h.isArray(b) && 0 < b.length) {
                                                                                                                                               if (0 <= h.inArray(a, b)) return;
                                                                                                                                               b.push(a)
                                                                                                                                           } else b = [a];
                                                                                                                                       else b = [a];
                                                                                                                                       e.setItem(d.ITINERARY_SC_DATA, f.stringify(b))
                                                                                                                                   }
                                                                                                                               } catch (c) {}
                                                                                                                           },
                                                                                                                           checkIfGeoPrefLocation: function(a) {
                                                                                                                               try {
                                                                                                                                   if (a) {
                                                                                                                                       var b =
                                                                                                                                           e.getItem(d.ITINERARY_SC_DATA);
                                                                                                                                       if (b && (b = f.parse(b), h.isArray(b) && 0 < b.length)) return 0 <= h.inArray(a, b)
                                                                                                                                   }
                                                                                                                               } catch (c) {}
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           getResData: function(a) {
                                                                                                                               if (!a) return null;
                                                                                                                               try {
                                                                                                                                   var b = e.getItem(d.RESERVATION_INFORMATION_DATA);
                                                                                                                                   if (b) return b = f.parse(b), b[a]
                                                                                                                               } catch (c) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           getPickupLocationCode: function() {
                                                                                                                               try {
                                                                                                                                   var a = e.getItem(d.RESERVATION_INFORMATION_DATA);
                                                                                                                                   if (a) return a = f.parse(a), a.pickupLocationCode
                                                                                                                               } catch (b) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           getCurrency: function() {
                                                                                                                               try {
                                                                                                                                   var a = e.getItem(d.RESERVATION_INFORMATION_DATA);
                                                                                                                                   if (a) return a =
                                                                                                                                       f.parse(a), a.currency
                                                                                                                               } catch (b) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           getAlternateCurrency: function() {
                                                                                                                               try {
                                                                                                                                   var a = e.getItem(d.RESERVATION_INFORMATION_DATA);
                                                                                                                                   if (a) return a = f.parse(a), a.alternateCurrency
                                                                                                                               } catch (b) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           getApproxTotal: function() {
                                                                                                                               try {
                                                                                                                                   var a = e.getItem(d.RESERVATION_INFORMATION_DATA);
                                                                                                                                   if (a) return a = f.parse(a), a.approxTotal
                                                                                                                               } catch (b) {}
                                                                                                                               return null
                                                                                                                           },
                                                                                                                           updateReservationInfo: function(a) {
                                                                                                                               try {
                                                                                                                                   if (a) {
                                                                                                                                       var b = e.getItem(d.RESERVATION_INFORMATION_DATA),
                                                                                                                                           b = b ? f.parse(b) : {},
                                                                                                                                           c = !1;
                                                                                                                                       a.dialect && (b.dialect = a.dialect, c = !0);
                                                                                                                                       a.pickupLocationCode &&
                                                                                                                                           (b.pickupLocationCode = a.pickupLocationCode, c = !0);
                                                                                                                                       a.currency ? (b.currency = a.currency, c = !0) : delete b.currency;
                                                                                                                                       a.alternateCurrency ? (b.alternateCurrency = a.alternateCurrency, c = !0) : delete b.alternateCurrency;
                                                                                                                                       a.approxTotal ? (b.approxTotal = a.approxTotal, c = !0) : delete b.approxTotal;
                                                                                                                                       a.pickupDate && (b.pickupDate = a.pickupDate, c = !0);
                                                                                                                                       a.pickupTime && (b.pickupTime = a.pickupTime, c = !0);
                                                                                                                                       a.returnDate && (b.returnDate = a.returnDate, c = !0);
                                                                                                                                       a.returnTime && (b.returnTime = a.returnTime, c = !0);
                                                                                                                                       c && e.setItem(d.RESERVATION_INFORMATION_DATA,
                                                                                                                                           f.stringify(b))
                                                                                                                                   }
                                                                                                                               } catch (g) {}
                                                                                                                           },
                                                                                                                           approxRateDecider: function(a) {
                                                                                                                               if (a.isPrepay && a.currency && a.alternateCurrency && 0 < a.payLater) {
                                                                                                                                   var b = a.currency === a.alternateCurrency,
                                                                                                                                       c = 0 < a.payLater ? !0 : !1;
                                                                                                                                   return a.isPrepay && !b && c
                                                                                                                               }
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           formatDate: function(a, b) {
                                                                                                                               isNaN(a.getDate()) && (a = new Date);
                                                                                                                               var c = a.getDate(),
                                                                                                                                   d = a.getMonth() + 1,
                                                                                                                                   c = 10 > c ? "0" + c : c,
                                                                                                                                   d = 10 > d ? "0" + d : d,
                                                                                                                                   e = a.getFullYear();
                                                                                                                               return b ? [c, d, e].join("/") : [d, c, e].join("/")
                                                                                                                           },
                                                                                                                           standardizeDate: function(a, b) {
                                                                                                                               var c = a.split("/"),
                                                                                                                                   d = c[2],
                                                                                                                                   e;
                                                                                                                               b ? (e = c[1], c = c[0]) : (e = c[0], c = c[1]);
                                                                                                                               return [d,
                                                                                                                                   e, c
                                                                                                                               ].join("/")
                                                                                                                           },
                                                                                                                           goToPageFromResData: function(a) {
                                                                                                                               if (a) {
                                                                                                                                   var b = a.get("data"),
                                                                                                                                       a = a.get("message"),
                                                                                                                                       c = k.isModify();
                                                                                                                                   if (b)
                                                                                                                                       if (b.model && b.model.categories) {
                                                                                                                                           e.setItem(d.EXTRAS_DATA, f.stringify(b.model));
                                                                                                                                           e.setItem(d.ITINERARY_INFO_DATA, f.stringify(b.itinerary));
                                                                                                                                           e.setItem(d.RATE_DETAILS_DATA, f.stringify(b.rateDetails));
                                                                                                                                           if (a) try {
                                                                                                                                               e.setItem(d.EXTRAS_ERROR_DATA, f.stringify(a))
                                                                                                                                           } catch (h) {}
                                                                                                                                           c ? g.getRotar().rotate(d.MODIFY_EXTRAS) : g.getRotar().rotate(d.EXTRAS)
                                                                                                                                       } else if (b.model && b.model.vehicles) {
                                                                                                                                       if (a) try {
                                                                                                                                           e.setItem(d.VEHICLES_ERROR_DATA,
                                                                                                                                               f.stringify(a))
                                                                                                                                       } catch (i) {}
                                                                                                                                       e.setItem(d.VEHICLES_DATA, f.stringify(b.model));
                                                                                                                                       e.setItem(d.ITINERARY_INFO_DATA, f.stringify(b.itinerary));
                                                                                                                                       e.setItem(d.RATE_DETAILS_DATA, f.stringify(b.rateDetails));
                                                                                                                                       c ? g.getRotar().rotate(d.MODIFY_VEHICLES) : g.getRotar().rotate(d.VEHICLES)
                                                                                                                                   } else if (b.model && b.itinerary && b.rateDetails) {
                                                                                                                                       if (a) try {
                                                                                                                                           e.setItem(d.REVIEW_AND_BOOK_ERROR_DATA, f.stringify(a))
                                                                                                                                       } catch (j) {}
                                                                                                                                       e.setItem(d.REVIEW_AND_BOOK_DATA, f.stringify(b.model));
                                                                                                                                       e.setItem(d.ITINERARY_INFO_DATA, f.stringify(b.itinerary));
                                                                                                                                       e.setItem(d.RATE_DETAILS_DATA,
                                                                                                                                           f.stringify(b.rateDetails));
                                                                                                                                       c ? g.getRotar().rotate(d.MODIFY_REVIEW_AND_BOOK) : g.getRotar().rotate(d.REVIEW_AND_BOOK)
                                                                                                                                   } else if (b.model) {
                                                                                                                                       if (a) try {
                                                                                                                                           e.setItem(d.ITINERARY_ERROR_DATA, f.stringify(a)), e.setItem(d.ERRORS, f.stringify(a))
                                                                                                                                       } catch (l) {}
                                                                                                                                       c ? (e.getItem(d.CONFIRMATION_NUMBER) && e.setItem(d.ITINERARY_DATA, f.stringify(b.model)), g.getRotar().rotate(d.MODIFY_ITINERARY)) : (e.setItem(d.ITINERARY_DATA, f.stringify(b.model)), g.getRotar().rotate(d.ITINERARY))
                                                                                                                                   } else this.goToItineraryPage(c);
                                                                                                                                   else this.goToItineraryPage(c)
                                                                                                                               }
                                                                                                                           },
                                                                                                                           goToItineraryPage: function(a) {
                                                                                                                               a ? g.getRotar().rotate(d.MODIFY_ITINERARY) : g.getRotar().rotate(d.ITINERARY)
                                                                                                                           },
                                                                                                                           generateVehicleDetailTitle: function(a, b) {
                                                                                                                               var c = a.get("carGroup"),
                                                                                                                                   d = b.orSimilar || b.orSimilarText || "or similar",
                                                                                                                                   e = b.groupText || "Group",
                                                                                                                                   d = a.get("unique") ? "" : " <small>" + d + "</small>";
                                                                                                                               return (c ? "(" + e + " " + c + ") " : "") + a.get("name") + d
                                                                                                                           },
                                                                                                                           getShowMeLinkIndex: function(a) {
                                                                                                                               var b = 0;
                                                                                                                               h.each(a.reservationPopups.carTypeDetailsPopupContent.carTypeDetails, function(a, d) {
                                                                                                                                   "ACAR" == d.carSipp && (b = a)
                                                                                                                               });
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           clearSessionStorage: function(a) {
                                                                                                                               for (var b =
                                                                                                                                       0; b < a.length; b++) e.removeItem(a[b])
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/view/rental-agreement-view", ["underscore", "jquery", "framework/view/abstract-view"], function(a, b, c) {
                                                                                                                       return c.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = b("#rental-agreement-tpl").html();
                                                                                                                               this.content = this.options.content
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.empty();
                                                                                                                               this.$el.append(a.template(this.template, {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/common/gold-anytime-overlay/core/view/gold-anytime-overlay-view", ["jquery", "underscore", "backbone"], function(a, b, c) {
                                                                                                                       return c.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.content = this.options.content
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(b.template(a(this.template).html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/presenter/rental-links-presenter", "jquery config/app-config backbone utils/utils-proxy reservation/rental-links/core/view/rental-links-view reservation/rental-links/core/model/rental-links-list-model utils/sessionhelper reservation/process-config/core/reservation-constants reservation/utils/core/reservation-utils".split(" "), function(m, i, t, v, n, r, o, p, u) {
                                                                                                                       function s(a, f, g, h, j, c, d, e) {
                                                                                                                           c = new r(c);
                                                                                                                           i.config.isApp ? (a = (new n({
                                                                                                                               template: "#rental-links-base-tpl",
                                                                                                                               isShowRentalAgreement: f,
                                                                                                                               isShowEvRentalAgreement: g,
                                                                                                                               content: h,
                                                                                                                               model: c,
                                                                                                                               isShowCarRentalGuide: a,
                                                                                                                               locationEoag: d
                                                                                                                           })).render().el, a = m(a), a.kendoMobileModalView({
                                                                                                                               width: "100%",
                                                                                                                               height: "100%"
                                                                                                                           }), a.data("kendoMobileModalView").open()) : (a = new n({
                                                                                                                               el: j,
                                                                                                                               template: "#rental-links-base-tpl",
                                                                                                                               isShowRentalAgreement: f,
                                                                                                                               isShowEvRentalAgreement: g,
                                                                                                                               content: h,
                                                                                                                               model: c,
                                                                                                                               referrer: e,
                                                                                                                               isShowCarRentalGuide: a,
                                                                                                                               locationEoag: d
                                                                                                                           }), a.setOptional(!0), a.render())
                                                                                                                       }
                                                                                                                       return {
                                                                                                                           showRentalLinks: function(a, f, g, h, j, c) {
                                                                                                                               try {
                                                                                                                                   var d = o.getItem(p.ITINERARY_INFO_DATA),
                                                                                                                                       e = "";
                                                                                                                                   try {
                                                                                                                                       d ? (d = JSON.parse(d),
                                                                                                                                           e = d.pickupLocation.locationOAGCode) : e = u.getPickupLocationCode()
                                                                                                                                   } catch (n) {}
                                                                                                                                   var q = i.config.apiDomain + "/rest/hertz/v2/rental-policy/policy-list-by-group/dialect/" + i.config.dialect + "/country/" + i.config.pos + "/location-code/" + e,
                                                                                                                                       k = o.getItem(p.RENTAL_LINKS_DATA),
                                                                                                                                       b;
                                                                                                                                   try {
                                                                                                                                       k && (k = JSON.parse(k), b = k[q]);
                                                                                                                                       var l = m.Deferred();
                                                                                                                                       b ? l.resolve(b) : m.ajax({
                                                                                                                                           url: q,
                                                                                                                                           timeout: 5E3,
                                                                                                                                           dataType: "jsonp",
                                                                                                                                           crossDomain: !0,
                                                                                                                                           success: function(a) {
                                                                                                                                               b = a && null != a.data ? {
                                                                                                                                                   data: a.data
                                                                                                                                               } : {
                                                                                                                                                   data: ""
                                                                                                                                               };
                                                                                                                                               a = {};
                                                                                                                                               a[q] = b;
                                                                                                                                               o.setItem(p.RENTAL_LINKS_DATA, JSON.stringify(a));
                                                                                                                                               l.resolve(b)
                                                                                                                                           },
                                                                                                                                           error: function() {
                                                                                                                                               b = {
                                                                                                                                                   data: ""
                                                                                                                                               };
                                                                                                                                               l.reject(b)
                                                                                                                                           }
                                                                                                                                       })
                                                                                                                                   } catch (r) {}
                                                                                                                                   l.promise().done(function(b) {
                                                                                                                                       s(a, f, g, h, j, b, e, c)
                                                                                                                                   }).fail(function(b) {
                                                                                                                                       s(a, f, g, h, j, b, e, c)
                                                                                                                                   })
                                                                                                                               } catch (t) {}
                                                                                                                           }
                                                                                                                       }
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/view/rental-links-view", "jquery underscore framework/view/abstract-view utils/utils-proxy helpers/resource-loader res/res-resource-config reservation/process-config/core/reservation-constants config/app-config reservation/utils/core/reservation-utils reservation/process-info/core/model/process-model utils/sessionhelper reservation/process-config/core/reservation-constants".split(" "), function(c, d, l, m, n, o, e, i, g, f) {
                                                                                                                       function j() {
                                                                                                                           null == h && (h = m.getLightbox());
                                                                                                                           return h
                                                                                                                       }
                                                                                                                       var h = null;
                                                                                                                       return l.extend({
                                                                                                                           events: {
                                                                                                                               "click a#currency-link": "openCurrencyConverterLink",
                                                                                                                               "click #rental-agreement-link": "openRentalAgreementLink",
                                                                                                                               "click #ev-rental-agreement-link": "openEvRentalAgreementLink",
                                                                                                                               "click #privacy-policy": "openPrivacyPolicy",
                                                                                                                               "click .policy-group": "showPolicyGroup",
                                                                                                                               "click .rental-links-header": "showRentalLinks",
                                                                                                                               "click #car-rental-guide": "showCarRentalGuide"
                                                                                                                           },
                                                                                                                           initialize: function() {
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.isShowRentalAgreement =
                                                                                                                                   this.options.isShowRentalAgreement;
                                                                                                                               this.isShowEvRentalAgreement = this.options.isShowEvRentalAgreement;
                                                                                                                               this.isShowCarRentalGuide = this.options.isShowCarRentalGuide;
                                                                                                                               this.locationEoag = this.options.locationEoag;
                                                                                                                               this.referrer = this.options.referrer
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               return this.renderView()
                                                                                                                           },
                                                                                                                           renderYourself: function() {
                                                                                                                               this.$el.html(d.template(c(this.template).html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               this.parentEle = this.$el.find("#rental-policy-links");
                                                                                                                               if (f.getStep() == e.CONFIRMATION || f.getStep() == e.REVIEW) this.$el.find("#expand-collapse-rental-links").toggleClass("icons-collapse_icon").toggleClass("icons-expand_icon"),
                                                                                                                                   this.$el.find("#rental-policy-links").toggleClass("hidden-item");
                                                                                                                               this.renderPolicyGroups();
                                                                                                                               this.renderOtherPolicyLinks();
                                                                                                                               this.renderPolicyDisclaimerMsg();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           handleRenderFailure: function(a) {
                                                                                                                               g.trackError(a, "warning")
                                                                                                                           },
                                                                                                                           renderPolicyGroups: function() {
                                                                                                                               "" !== this.model.get("data") && this.renderPolicyGroupItems()
                                                                                                                           },
                                                                                                                           renderPolicyGroupItems: function() {
                                                                                                                               var a = this.buildGroupLists();
                                                                                                                               this.parentEle.append(c(a))
                                                                                                                           },
                                                                                                                           buildGroupLists: function() {
                                                                                                                               var a = this,
                                                                                                                                   b = "";
                                                                                                                               if (a.model.get("data") && a.model.get("data").models) {
                                                                                                                                   if (0 <
                                                                                                                                       a.model.get("data").models.length) var k = '<ul class="rental-policy-groups">',
                                                                                                                                       e = a.model.get("data").models.length - 1,
                                                                                                                                       b = b + k;
                                                                                                                                   d.each(a.model.get("data").models, function(g, f) {
                                                                                                                                       b += "<li>";
                                                                                                                                       b += d.template(c("#rental-policy-group-item-tpl").html(), {
                                                                                                                                           policyGroup: g
                                                                                                                                       });
                                                                                                                                       var h = a.buildPolicyLists(g);
                                                                                                                                       b += h;
                                                                                                                                       b += "</li>";
                                                                                                                                       if (4 === f || f === e) b += "</ul>", f !== e && (b += k)
                                                                                                                                   })
                                                                                                                               }
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           buildPolicyLists: function(a) {
                                                                                                                               var b = "";
                                                                                                                               if ((a = a.get("policies")) && a.models && 0 < a.models.length) b += '<ul class="policy-links hidden-item">', d.each(a.models, function(a) {
                                                                                                                                   b +=
                                                                                                                                       d.template(c("#rental-policy-item-tpl").html(), {
                                                                                                                                           policy: a
                                                                                                                                       })
                                                                                                                               }), b += "</ul>";
                                                                                                                               return b
                                                                                                                           },
                                                                                                                           renderOtherPolicyLinks: function() {
                                                                                                                               var a = this.buildOtherPolicyLinks();
                                                                                                                               this.parentEle.append(c(a));
                                                                                                                               this.renderCurrencyConverterLink()
                                                                                                                           },
                                                                                                                           buildOtherPolicyLinks: function() {
                                                                                                                               var a;
                                                                                                                               a = '<ul class="rental-policy-groups" id="misc-rental-links">' + this.renderRentalAgreementLink();
                                                                                                                               a += this.renderEvRentalAgreementLink();
                                                                                                                               a += this.renderCarRentalGuideLink();
                                                                                                                               a += this.renderPrivacyPolicyLink();
                                                                                                                               return a + "</ul>"
                                                                                                                           },
                                                                                                                           renderCarRentalGuideLink: function() {
                                                                                                                               return this.isShowCarRentalGuide ?
                                                                                                                                   d.template(c("#car-rental-guide-link-tpl").html(), {
                                                                                                                                       content: this.content
                                                                                                                                   }) : ""
                                                                                                                           },
                                                                                                                           renderRentalAgreementLink: function() {
                                                                                                                               return this.isShowRentalAgreement ? d.template(c("#rental-agreement-link-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }) : ""
                                                                                                                           },
                                                                                                                           renderEvRentalAgreementLink: function() {
                                                                                                                               return this.isShowEvRentalAgreement ? d.template(c("#ev-rental-agreement-link-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }) : ""
                                                                                                                           },
                                                                                                                           renderPrivacyPolicyLink: function() {
                                                                                                                               return d.template(c("#privacy-policy-link-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               })
                                                                                                                           },
                                                                                                                           renderCurrencyConverterLink: function() {
                                                                                                                               var a =
                                                                                                                                   g.getCurrency(),
                                                                                                                                   b = g.getAlternateCurrency();
                                                                                                                               a && b && a !== b && this.parentEle.find("#misc-rental-links").append(d.template(c("#currency-converter-link-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }))
                                                                                                                           },
                                                                                                                           renderPolicyDisclaimerMsg: function() {
                                                                                                                               this.parentEle.append(d.template(c("#rental-policy-disclaimer-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }))
                                                                                                                           },
                                                                                                                           showCarRentalGuide: function() {
                                                                                                                               this.openWindow(i.config.rootContext + "/misc/simpleIndex.jsp?targetPage=rentalGuide.jsp&locationCode=" + this.locationEoag)
                                                                                                                           },
                                                                                                                           showRentalLinks: function() {
                                                                                                                               600 >
                                                                                                                                   window.innerWidth && (this.$el.find("#expand-collapse-rental-links").toggleClass("icons-collapse_icon").toggleClass("icons-expand_icon"), this.$el.find("#rental-policy-links").toggleClass("hidden-item"))
                                                                                                                           },
                                                                                                                           openPrivacyPolicy: function() {
                                                                                                                               htz.config.isApp && hzm.shared.googleTagManger("Hertz Car Rental Locations", "", "", "", -1);
                                                                                                                               this.openWindow(i.config.rootContext + "/privacypolicy/index.jsp?targetPage=privacyPolicyView.jsp")
                                                                                                                           },
                                                                                                                           showPolicyGroup: function(a) {
                                                                                                                               a = c(a.currentTarget);
                                                                                                                               a.siblings(".expand-collapse-icon").toggleClass("icons-arrow-blue-right").toggleClass("icons-arrow-blue-down");
                                                                                                                               a.parent().siblings(".policy-links").toggleClass("hidden-item");
                                                                                                                               this.handleEstaraReposition()
                                                                                                                           },
                                                                                                                           handleEstaraReposition: function() {
                                                                                                                               f.getStep() == e.REVIEW_AND_BOOK && this.referrer && (htz.utils.Global.removeEstara(), c(".tmplLayoutLeftColumn").show(), this.referrer.renderEstara())
                                                                                                                           },
                                                                                                                           openCurrencyConverterLink: function() {
                                                                                                                               var a = o.getPageInfo(e.CURRENCY_CONVERTER);
                                                                                                                               a.callback = function(a) {
                                                                                                                                   require(["reservation/currency-converter/core/presenter/currency-converter-presenter"], function(c) {
                                                                                                                                       c.show({
                                                                                                                                           template: a.template,
                                                                                                                                           content: a.content
                                                                                                                                       })
                                                                                                                                   })
                                                                                                                               };
                                                                                                                               n.load(a);
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           openRentalAgreementLink: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/rental-links/core/view/rental-agreement-view"], function(b) {
                                                                                                                                   b = new b({
                                                                                                                                       content: a.content,
                                                                                                                                       referrer: a
                                                                                                                                   });
                                                                                                                                   j().overlay({
                                                                                                                                       center: !0,
                                                                                                                                       height: 400,
                                                                                                                                       title: a.content.reservationGlobals.rentalAgreement.rentalAgreementTitle
                                                                                                                                   }, b.render().el)
                                                                                                                               });
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           openEvRentalAgreementLink: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/rental-links/core/view/ev-rental-agreement-view"], function(b) {
                                                                                                                                   b = new b({
                                                                                                                                       content: a.content,
                                                                                                                                       referrer: a
                                                                                                                                   });
                                                                                                                                   j().overlay({
                                                                                                                                       center: !0,
                                                                                                                                       height: 400,
                                                                                                                                       title: a.content.reservationGlobals.evrentalAgreement.evrentalAgreementTitle
                                                                                                                                   }, b.render().el)
                                                                                                                               });
                                                                                                                               return !1
                                                                                                                           },
                                                                                                                           openWindow: function(a) {
                                                                                                                               window.open(a, "_blank")
                                                                                                                           },
                                                                                                                           showRentalQualificationsOverlay: function() {
                                                                                                                               require(["reservation/rqr-overlay/core/presenter/rqr-overlay-presenter"], function(a) {
                                                                                                                                   a.showOverlayPopUp()
                                                                                                                               })
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/model/rental-links-list-model", ["backbone", "reservation/rental-links/core/model/rental-link-model"], function(a, b) {
                                                                                                                       var c = a.Collection.extend({
                                                                                                                           model: b
                                                                                                                       });
                                                                                                                       return a.Model.extend({
                                                                                                                           initialize: function() {
                                                                                                                               var a = this.get("data");
                                                                                                                               a && this.set("data", new c(a))
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/model/rental-link-model", ["backbone", "utils/restmodel", "reservation/rental-links/core/model/rental-policy-model"], function(b, c, d) {
                                                                                                                       var e = b.Collection.extend({
                                                                                                                           model: d
                                                                                                                       });
                                                                                                                       return c.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments);
                                                                                                                               var a = this.get("policies");
                                                                                                                               a && this.set("policies", new e(a))
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/rental-links/core/model/rental-policy-model", ["utils/restmodel"], function(a) {
                                                                                                                       return a.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.constructor.__super__.initialize.apply(this, arguments)
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/vehicle-friendly-msg-view", "jquery underscore backbone config/app-config utils/utils-proxy reservation/process-info/core/model/process-model reservation/config".split(" "), function(f, g, h, b, d, i, j) {
                                                                                                                       function e() {
                                                                                                                           null == c && (c = d.getLightbox());
                                                                                                                           return c
                                                                                                                       }
                                                                                                                       var c = null;
                                                                                                                       return h.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.viewReferrer = this.options.viewReferrer;
                                                                                                                               this.viewHelper = this.options.viewHelper;
                                                                                                                               this.soldOutMsgInOverlay =
                                                                                                                                   this.options.soldOutMsgInOverlay;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .amendSearch": "showResForm",
                                                                                                                               "click .show-soldout-vehicles": "renderSoldOutVechiles"
                                                                                                                           },
                                                                                                                           showResForm: function() {
                                                                                                                               var a = e();
                                                                                                                               a.inUse && a.closeOverlay();
                                                                                                                               "all" == b.config.deviceGroup || "desktop" == b.config.deviceGroup || "tablet" == b.config.deviceGroup ? (d.getSpinner().spin(), require(["reservation/res-flow/core/presenter/res-flow-presenter"], function(a) {
                                                                                                                                   a.showResForm()
                                                                                                                               })) : (a = htz.res.config.ReservationConstants.ITINERARY, i.isModify() && (a = "modify/" + a), j.getRotar().rotate(a))
                                                                                                                           },
                                                                                                                           renderSoldOutVechiles: function() {
                                                                                                                               var a = this;
                                                                                                                               require(["reservation/vehicle/core/view/vehicle-list-view"], function(b) {
                                                                                                                                   e().overlay({
                                                                                                                                       title: a.content.whatPage.soldOut.soldOutHeader,
                                                                                                                                       width: 800
                                                                                                                                   }, (new b({
                                                                                                                                       viewReferrer: a.viewReferrer,
                                                                                                                                       viewHelper: a.viewHelper,
                                                                                                                                       template: "#vehicles-list-tpl",
                                                                                                                                       model: a.model.get("vehicles"),
                                                                                                                                       page: a.model.attributes,
                                                                                                                                       content: a.content,
                                                                                                                                       isSoldOutOverlay: !0
                                                                                                                                   })).render().el)
                                                                                                                               })
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.prepend(g.template(f(this.template).html(), {
                                                                                                                                   content: this.content,
                                                                                                                                   isApp: b.config.isApp,
                                                                                                                                   showSoldOutLink: this.model.get("displaySoldOut"),
                                                                                                                                   soldOutMsgInOverlay: this.soldOutMsgInOverlay
                                                                                                                               }));
                                                                                                                               this.soldOutMsgInOverlay && this.$el.addClass("vehicles-list-cont sold-out-msg-in-overlay")
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/vehicle/core/view/ratedetails-overlay-view", "jquery underscore backbone utils/utils-proxy utils/sessionhelper reservation/process-config/core/reservation-constants reservation/vehicle/core/view/helper/view-helper reservation/rate-details/core/presenter/rate-details-presenter reservation/process-info/core/model/process-model config/app-config".split(" "), function(d, f, g, l, h, i, m, j, k, e) {
                                                                                                                       return g.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.index = this.options.index;
                                                                                                                               this.template = this.options.template;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.quoteView = this.options.quoteView;
                                                                                                                               this.render()
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click .submit-vehicle": "submitVehilcePage"
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(f.template(d(this.template).html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               this.getRateDetails();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           getRateDetails: function() {
                                                                                                                               var b = this,
                                                                                                                                   a = this.options.href.split("/"),
                                                                                                                                   a = a[a.length - 1],
                                                                                                                                   c = null,
                                                                                                                                   c = h.getItem(i.CONFIRMATION_NUMBER),
                                                                                                                                   c = k.isModify() ? e.config.rootContext + "/rest/hertz/v2/reservations/" + c + "/rate-details/sipp/" + this.options.sipp +
                                                                                                                                   "/rate-idx/" + this.index : e.config.rootContext + "/rest/hertz/v2/reservations/" + a + "/rate-details/sipp/" + this.options.sipp + "/rate-idx/" + this.index;
                                                                                                                               d.ajax({
                                                                                                                                   contentType: "application/json",
                                                                                                                                   url: c,
                                                                                                                                   cache: !1,
                                                                                                                                   dataType: "json",
                                                                                                                                   type: "GET",
                                                                                                                                   success: function(a) {
                                                                                                                                       "undefined" != typeof a && j.showRateDetail(a, b.$el.find("#rate-details-content"), null, b.content, {
                                                                                                                                           optional: !0,
                                                                                                                                           vehicleData: b.options.vehicle
                                                                                                                                       })
                                                                                                                                   },
                                                                                                                                   error: function() {}
                                                                                                                               })
                                                                                                                           },
                                                                                                                           submitVehilcePage: function(b) {
                                                                                                                               this.quoteView.lightBox.closeOverlay(!0);
                                                                                                                               this.quoteView.submit(b)
                                                                                                                           },
                                                                                                                           doCleanup: function() {
                                                                                                                               this.page = this.index = this.content = this.viewReferrer = null
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/cancel-fee/core/view/cancel-fee-view", ["jquery", "underscore", "backbone", "reservation/vehicle/core/view/prepay-quote-view", "reservation/cancel-fee/core/view/cancel-fee-grid-view"], function(b, c, d, e, f) {
                                                                                                                       return d.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.cancelFeeModel = this.options.cancelFeeModel;
                                                                                                                               this.handleSelect = this.options.handleSelect;
                                                                                                                               this.showGaBanner = this.options.showGaBanner;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.currency = this.options.currency;
                                                                                                                               this.prepaidModify = this.options.prepaidModify
                                                                                                                           },
                                                                                                                           events: {
                                                                                                                               "click button": "select"
                                                                                                                           },
                                                                                                                           select: function(a) {
                                                                                                                               this.handleSelect && "function" === typeof this.handleSelect && this.handleSelect(b(a.target), this.model)
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.$el.append(c.template(b("#cancel-fee-tpl").html(), {
                                                                                                                                   content: this.content,
                                                                                                                                   quote: this.model.attributes,
                                                                                                                                   cancelFeeModel: this.cancelFeeModel,
                                                                                                                                   prepaid: this.model.get("prepaid"),
                                                                                                                                   prepaidModify: this.prepaidModify
                                                                                                                               }));
                                                                                                                               this.cancelFeeModel && this.$el.find("#cancel-fee-grid").append((new f({
                                                                                                                                   cancelFeeModel: this.cancelFeeModel,
                                                                                                                                   content: this.content,
                                                                                                                                   currency: this.currency,
                                                                                                                                   prepaid: this.model.get("prepaid")
                                                                                                                               })).render().el);
                                                                                                                               if (this.model.get("prepaid") && this.prepaidModify) {
                                                                                                                                   var a = (new e({
                                                                                                                                       model: this.model.attributes,
                                                                                                                                       handleQuoteSelect: this.handleQuoteSelect,
                                                                                                                                       prepaidModify: this.prepaidModify,
                                                                                                                                       content: this.content
                                                                                                                                   })).render().el;
                                                                                                                                   this.$el.find(".decision").append(a)
                                                                                                                               }
                                                                                                                               this.renderGaBanner();
                                                                                                                               return this
                                                                                                                           },
                                                                                                                           renderGaBanner: function() {
                                                                                                                               var a = this;
                                                                                                                               a.showGaBanner && require(["reservation/vehicle/core/view/vehicle-gold-anytime-view"], function(b) {
                                                                                                                                   new b({
                                                                                                                                       content: a.content,
                                                                                                                                       template: "#vehicle-gold-anytime-tpl",
                                                                                                                                       el: "#ga-banner-in-overlay",
                                                                                                                                       isGaBannerForOveraly: !0
                                                                                                                                   })
                                                                                                                               })
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });
                                                                                                                   define("reservation/cancel-fee/core/view/cancel-fee-grid-view", ["jquery", "underscore", "backbone"], function(g, d, o) {
                                                                                                                       return o.View.extend({
                                                                                                                           initialize: function() {
                                                                                                                               this.cancelFeeModel = this.options.cancelFeeModel;
                                                                                                                               this.content = this.options.content;
                                                                                                                               this.currency = this.options.currency;
                                                                                                                               this.prepaid = this.options.prepaid
                                                                                                                           },
                                                                                                                           buildCancelFeeTable: function() {
                                                                                                                               var a = this,
                                                                                                                                   j = "";
                                                                                                                               d.each(this.cancelFeeModel, function(b, d) {
                                                                                                                                   var f = "",
                                                                                                                                       h = "",
                                                                                                                                       c = b.beginTime,
                                                                                                                                       e = b.endTime,
                                                                                                                                       i = b.cancelPeriod,
                                                                                                                                       k = b.cancelAmount,
                                                                                                                                       l = b.chargeType,
                                                                                                                                       g = a.timePeriodContent(c,
                                                                                                                                           i),
                                                                                                                                       m = a.timePeriodContent(m, i),
                                                                                                                                       i = b.cancelDayFee,
                                                                                                                                       n = d < a.cancelFeeModel.length - 1 ? d + 1 : a.cancelFeeModel.length - 1;
                                                                                                                                   9999 == e ? (c = a.cancelFeeModel[n].endTime, f = a.content.reservationGlobals.creditCardGuarantee.moreThanBeforeContent + " " + c + g + a.content.reservationGlobals.creditCardGuarantee.moreThanAfterContent) : 1 < c && 9999 > e ? (c = a.cancelFeeModel[n].endTime, f = a.content.reservationGlobals.creditCardGuarantee.betweenBeforeContent + " " + c + g + " - " + e + m + a.content.reservationGlobals.creditCardGuarantee.betweenAfterContent) :
                                                                                                                                       1 === c && 1 <= e ? f = a.content.reservationGlobals.creditCardGuarantee.lessThanBeforeContent + " " + e + m + a.content.reservationGlobals.creditCardGuarantee.lessThanAfterContent : 0 === c && 0 === e ? f = a.content.reservationGlobals.creditCardGuarantee.noShow : 0 === c && 1 <= e && (f = a.content.reservationGlobals.creditCardGuarantee.lessThanDefaultContent);
                                                                                                                                   "F" == l ? h = k + " " + a.currency : "P" == l ? h = 0 === c && 0 === e && 100 == k ? a.prepaid ? a.content.reservationGlobals.creditCardGuarantee.totalPrepaidAmount : a.content.reservationGlobals.creditCardGuarantee.totalPayLaterAmount :
                                                                                                                                       k + "%" : "D" == l && (h = i + " " + a.currency);
                                                                                                                                   j += "<tr><td>" + f + "</td><td>" + h + "</td></tr>"
                                                                                                                               });
                                                                                                                               return j
                                                                                                                           },
                                                                                                                           timePeriodContent: function(a, d) {
                                                                                                                               var b = "";
                                                                                                                               "H" == d ? b = 1 === a ? this.content.reservationGlobals.creditCardGuarantee.hour : this.content.reservationGlobals.creditCardGuarantee.hours : "D" == d && (b = 1 === a ? this.content.reservationGlobals.creditCardGuarantee.day : this.content.reservationGlobals.creditCardGuarantee.days);
                                                                                                                               return " " + b + " "
                                                                                                                           },
                                                                                                                           render: function() {
                                                                                                                               this.prepaid ? this.$el.append(d.template(g("#cancel-fee-grid-prepay-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               })) : this.$el.append(d.template(g("#cancel-fee-grid-tpl").html(), {
                                                                                                                                   content: this.content
                                                                                                                               }));
                                                                                                                               this.cancelFeeModel && this.$el.find("table").append(this.buildCancelFeeTable());
                                                                                                                               return this
                                                                                                                           }
                                                                                                                       })
                                                                                                                   });






































































                                                                                                                   /* EOF */