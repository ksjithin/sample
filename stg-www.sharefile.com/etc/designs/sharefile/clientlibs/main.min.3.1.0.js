! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b : b(jQuery)
}(function(v) {
    function u(z) {
        var y = z || window.event,
            x = n.call(arguments, 1),
            w = 0,
            k = 0,
            i = 0,
            f = 0,
            e = 0,
            d = 0;
        if (z = v.event.fix(y), z.type = "mousewheel", "detail" in y && (i = -1 * y.detail), "wheelDelta" in y && (i = y.wheelDelta), "wheelDeltaY" in y && (i = y.wheelDeltaY), "wheelDeltaX" in y && (k = -1 * y.wheelDeltaX), "axis" in y && y.axis === y.HORIZONTAL_AXIS && (k = -1 * i, i = 0), w = 0 === i ? k : i, "deltaY" in y && (i = -1 * y.deltaY, w = i), "deltaX" in y && (k = y.deltaX, 0 === i && (w = -1 * k)), 0 !== i || 0 !== k) {
            if (1 === y.deltaMode) {
                var c = v.data(this, "mousewheel-line-height");
                w *= c, i *= c, k *= c
            } else {
                if (2 === y.deltaMode) {
                    var a = v.data(this, "mousewheel-page-height");
                    w *= a, i *= a, k *= a
                }
            }
            if (f = Math.max(Math.abs(i), Math.abs(k)), (!q || q > f) && (q = f, s(y, f) && (q /= 40)), s(y, f) && (w /= 40, k /= 40, i /= 40), w = Math[w >= 1 ? "floor" : "ceil"](w / q), k = Math[k >= 1 ? "floor" : "ceil"](k / q), i = Math[i >= 1 ? "floor" : "ceil"](i / q), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var A = this.getBoundingClientRect();
                e = z.clientX - A.left, d = z.clientY - A.top
            }
            return z.deltaX = k, z.deltaY = i, z.deltaFactor = q, z.offsetX = e, z.offsetY = d, z.deltaMode = 0, x.unshift(z, w, k, i), r && clearTimeout(r), r = setTimeout(t, 200), (v.event.dispatch || v.event.handle).apply(this, x)
        }
    }

    function t() {
        q = null
    }

    function s(d, c) {
        return l.settings.adjustOldDeltas && "mousewheel" === d.type && c % 120 === 0
    }
    var r, q, p = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        n = Array.prototype.slice;
    if (v.event.fixHooks) {
        for (var m = p.length; m;) {
            v.event.fixHooks[p[--m]] = v.event.mouseHooks
        }
    }
    var l = v.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener) {
                for (var a = o.length; a;) {
                    this.addEventListener(o[--a], u, !1)
                }
            } else {
                this.onmousewheel = u
            }
            v.data(this, "mousewheel-line-height", l.getLineHeight(this)), v.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = o.length; a;) {
                    this.removeEventListener(o[--a], u, !1)
                }
            } else {
                this.onmousewheel = null
            }
            v.removeData(this, "mousewheel-line-height"), v.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(a) {
            var d = v(a)["offsetParent" in v.fn ? "offsetParent" : "parent"]();
            return d.length || (d = v("body")), parseInt(d.css("fontSize"), 10)
        },
        getPageHeight: function(a) {
            return v(a).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    v.fn.extend({
        mousewheel: function(b) {
            return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
        },
        unmousewheel: function(b) {
            return this.unbind("mousewheel", b)
        }
    })
});
(function(w, s, r, A) {
    var z = "mCustomScrollbar",
        D = "mCS",
        t = ".mCustomScrollbar",
        y = {
            setWidth: false,
            setHeight: false,
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: true,
            autoHideScrollbar: false,
            autoExpandScrollbar: false,
            alwaysShowScrollbar: 0,
            snapAmount: null,
            snapOffset: 0,
            mouseWheel: {
                enable: true,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: false,
                deltaFactor: "auto",
                normalizeDelta: false,
                invert: false,
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                enable: false,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: true,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            advanced: {
                autoExpandHorizontalScroll: false,
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: true,
                updateOnImageLoad: true,
                updateOnSelectorChange: false
            },
            theme: "light",
            callbacks: {
                onScrollStart: false,
                onScroll: false,
                onTotalScroll: false,
                onTotalScrollBack: false,
                whileScrolling: false,
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: true
            },
            live: false,
            liveSelector: null
        },
        u = 0,
        p = {},
        B = function(a) {
            if (p[a]) {
                clearTimeout(p[a]);
                x._delete.call(null, p[a])
            }
        },
        v = (s.attachEvent && !s.addEventListener) ? 1 : 0,
        q = false,
        C = {
            init: function(c) {
                var c = w.extend(true, {}, y, c),
                    d = x._selector.call(this);
                if (c.live) {
                    var a = c.liveSelector || this.selector || t,
                        b = w(a);
                    if (c.live === "off") {
                        B(a);
                        return
                    }
                    p[a] = setTimeout(function() {
                        b.mCustomScrollbar(c);
                        if (c.live === "once" && b.length) {
                            B(a)
                        }
                    }, 500)
                } else {
                    B(a)
                }
                c.setWidth = (c.set_width) ? c.set_width : c.setWidth;
                c.setHeight = (c.set_height) ? c.set_height : c.setHeight;
                c.axis = (c.horizontalScroll) ? "x" : x._findAxis.call(null, c.axis);
                c.scrollInertia = c.scrollInertia < 17 ? 17 : c.scrollInertia;
                if (typeof c.mouseWheel !== "object" && c.mouseWheel == true) {
                    c.mouseWheel = {
                        enable: true,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: false,
                        deltaFactor: "auto",
                        normalizeDelta: false,
                        invert: false
                    }
                }
                c.mouseWheel.scrollAmount = !c.mouseWheelPixels ? c.mouseWheel.scrollAmount : c.mouseWheelPixels;
                c.mouseWheel.normalizeDelta = !c.advanced.normalizeMouseWheelDelta ? c.mouseWheel.normalizeDelta : c.advanced.normalizeMouseWheelDelta;
                c.scrollButtons.scrollType = x._findScrollButtonsType.call(null, c.scrollButtons.scrollType);
                x._theme.call(null, c);
                return w(d).each(function() {
                    var h = w(this);
                    if (!h.data(D)) {
                        h.data(D, {
                            idx: ++u,
                            opt: c,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            bindEvents: false,
                            tweenRunning: false,
                            sequential: {},
                            langDir: h.css("direction"),
                            cbOffsets: null,
                            trigger: null
                        });
                        var f = h.data(D).opt,
                            g = h.data("mcs-axis"),
                            i = h.data("mcs-scrollbar-position"),
                            e = h.data("mcs-theme");
                        if (g) {
                            f.axis = g
                        }
                        if (i) {
                            f.scrollbarPosition = i
                        }
                        if (e) {
                            f.theme = e;
                            x._theme.call(null, f)
                        }
                        x._pluginMarkup.call(this);
                        C.update.call(null, h)
                    }
                })
            },
            update: function(a) {
                var b = a || x._selector.call(this);
                return w(b).each(function() {
                    var f = w(this);
                    if (f.data(D)) {
                        var d = f.data(D),
                            e = d.opt,
                            h = w("#mCSB_" + d.idx + "_container"),
                            g = [w("#mCSB_" + d.idx + "_dragger_vertical"), w("#mCSB_" + d.idx + "_dragger_horizontal")];
                        if (!h.length) {
                            return
                        }
                        if (d.tweenRunning) {
                            x._stop.call(null, f)
                        }
                        if (f.hasClass("mCS_disabled")) {
                            f.removeClass("mCS_disabled")
                        }
                        if (f.hasClass("mCS_destroyed")) {
                            f.removeClass("mCS_destroyed")
                        }
                        x._maxHeight.call(this);
                        x._expandContentHorizontally.call(this);
                        if (e.axis !== "y" && !e.advanced.autoExpandHorizontalScroll) {
                            h.css("width", x._contentWidth(h.children()))
                        }
                        d.overflowed = x._overflowed.call(this);
                        x._scrollbarVisibility.call(this);
                        if (e.autoDraggerLength) {
                            x._setDraggerLength.call(this)
                        }
                        x._scrollRatio.call(this);
                        x._bindEvents.call(this);
                        var c = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)];
                        if (e.axis !== "x") {
                            if (!d.overflowed[0]) {
                                x._resetContentPosition.call(this);
                                if (e.axis === "y") {
                                    x._unbindEvents.call(this)
                                } else {
                                    if (e.axis === "yx" && d.overflowed[1]) {
                                        x._scrollTo.call(this, f, c[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                }
                            } else {
                                if (g[0].height() > g[0].parent().height()) {
                                    x._resetContentPosition.call(this)
                                } else {
                                    x._scrollTo.call(this, f, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    })
                                }
                            }
                        }
                        if (e.axis !== "y") {
                            if (!d.overflowed[1]) {
                                x._resetContentPosition.call(this);
                                if (e.axis === "x") {
                                    x._unbindEvents.call(this)
                                } else {
                                    if (e.axis === "yx" && d.overflowed[0]) {
                                        x._scrollTo.call(this, f, c[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                }
                            } else {
                                if (g[1].width() > g[1].parent().width()) {
                                    x._resetContentPosition.call(this)
                                } else {
                                    x._scrollTo.call(this, f, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    })
                                }
                            }
                        }
                        x._autoUpdate.call(this)
                    }
                })
            },
            scrollTo: function(a, b) {
                if (typeof a == "undefined" || a == null) {
                    return
                }
                var c = x._selector.call(this);
                return w(c).each(function() {
                    var g = w(this);
                    if (g.data(D)) {
                        var d = g.data(D),
                            e = d.opt,
                            f = {
                                trigger: "external",
                                scrollInertia: e.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: false,
                                callbacks: true,
                                onStart: true,
                                onUpdate: true,
                                onComplete: true
                            },
                            i = w.extend(true, {}, f, b),
                            j = x._arr.call(this, a),
                            h = i.scrollInertia < 17 ? 17 : i.scrollInertia;
                        j[0] = x._to.call(this, j[0], "y");
                        j[1] = x._to.call(this, j[1], "x");
                        if (i.moveDragger) {
                            j[0] *= d.scrollRatio.y;
                            j[1] *= d.scrollRatio.x
                        }
                        i.dur = h;
                        setTimeout(function() {
                            if (j[0] !== null && typeof j[0] !== "undefined" && e.axis !== "x" && d.overflowed[0]) {
                                i.dir = "y";
                                i.overwrite = "all";
                                x._scrollTo.call(this, g, j[0].toString(), i)
                            }
                            if (j[1] !== null && typeof j[1] !== "undefined" && e.axis !== "y" && d.overflowed[1]) {
                                i.dir = "x";
                                i.overwrite = "none";
                                x._scrollTo.call(this, g, j[1].toString(), i)
                            }
                        }, 60)
                    }
                })
            },
            stop: function() {
                var a = x._selector.call(this);
                return w(a).each(function() {
                    var b = w(this);
                    if (b.data(D)) {
                        x._stop.call(null, b)
                    }
                })
            },
            disable: function(a) {
                var b = x._selector.call(this);
                return w(b).each(function() {
                    var e = w(this);
                    if (e.data(D)) {
                        var c = e.data(D),
                            d = c.opt;
                        x._autoUpdate.call(this, "remove");
                        x._unbindEvents.call(this);
                        if (a) {
                            x._resetContentPosition.call(this)
                        }
                        x._scrollbarVisibility.call(this, true);
                        e.addClass("mCS_disabled")
                    }
                })
            },
            destroy: function() {
                var a = x._selector.call(this);
                return w(a).each(function() {
                    var e = w(this);
                    if (e.data(D)) {
                        var c = e.data(D),
                            d = c.opt,
                            g = w("#mCSB_" + c.idx),
                            f = w("#mCSB_" + c.idx + "_container"),
                            b = w(".mCSB_" + c.idx + "_scrollbar");
                        if (d.live) {
                            B(a)
                        }
                        x._autoUpdate.call(this, "remove");
                        x._unbindEvents.call(this);
                        x._resetContentPosition.call(this);
                        e.removeData(D);
                        x._delete.call(null, this.mcs);
                        b.remove();
                        g.replaceWith(f.contents());
                        e.removeClass(z + " _" + D + "_" + c.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                    }
                })
            }
        },
        x = {
            _selector: function() {
                return (typeof w(this) !== "object" || w(this).length < 1) ? t : this
            },
            _theme: function(c) {
                var d = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    e = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    f = ["minimal", "minimal-dark"],
                    a = ["minimal", "minimal-dark"],
                    b = ["minimal", "minimal-dark"];
                c.autoDraggerLength = w.inArray(c.theme, d) > -1 ? false : c.autoDraggerLength;
                c.autoExpandScrollbar = w.inArray(c.theme, e) > -1 ? false : c.autoExpandScrollbar;
                c.scrollButtons.enable = w.inArray(c.theme, f) > -1 ? false : c.scrollButtons.enable;
                c.autoHideScrollbar = w.inArray(c.theme, a) > -1 ? true : c.autoHideScrollbar;
                c.scrollbarPosition = w.inArray(c.theme, b) > -1 ? "outside" : c.scrollbarPosition
            },
            _findAxis: function(a) {
                return (a === "yx" || a === "xy" || a === "auto") ? "yx" : (a === "x" || a === "horizontal") ? "x" : "y"
            },
            _findScrollButtonsType: function(a) {
                return (a === "stepped" || a === "pixels" || a === "step" || a === "click") ? "stepped" : "stepless"
            },
            _pluginMarkup: function() {
                var g = w(this),
                    h = g.data(D),
                    a = h.opt,
                    l = a.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "",
                    d = ["<div id='mCSB_" + h.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + h.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_vertical" + l + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + h.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + h.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + h.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_horizontal" + l + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + h.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    k = a.axis === "yx" ? "mCSB_vertical_horizontal" : a.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                    i = a.axis === "yx" ? d[0] + d[1] : a.axis === "x" ? d[1] : d[0],
                    j = a.axis === "yx" ? "<div id='mCSB_" + h.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    m = a.autoHideScrollbar ? " mCS-autoHide" : "",
                    c = (a.axis !== "x" && h.langDir === "rtl") ? " mCS-dir-rtl" : "";
                if (a.setWidth) {
                    g.css("width", a.setWidth)
                }
                if (a.setHeight) {
                    g.css("height", a.setHeight)
                }
                a.setLeft = (a.axis !== "y" && h.langDir === "rtl") ? "989999px" : a.setLeft;
                g.addClass(z + " _" + D + "_" + h.idx + m + c).wrapInner("<div id='mCSB_" + h.idx + "' class='mCustomScrollBox mCS-" + a.theme + " " + k + "'><div id='mCSB_" + h.idx + "_container' class='mCSB_container' style='position:relative; top:" + a.setTop + "; left:" + a.setLeft + ";' dir=" + h.langDir + " /></div>");
                var b = w("#mCSB_" + h.idx),
                    f = w("#mCSB_" + h.idx + "_container");
                if (a.axis !== "y" && !a.advanced.autoExpandHorizontalScroll) {
                    f.css("width", x._contentWidth(f.children()))
                }
                if (a.scrollbarPosition === "outside") {
                    if (g.css("position") === "static") {
                        g.css("position", "relative")
                    }
                    g.css("overflow", "visible");
                    b.addClass("mCSB_outside").after(i)
                } else {
                    b.addClass("mCSB_inside").append(i);
                    f.wrap(j)
                }
                x._scrollButtons.call(this);
                var e = [w("#mCSB_" + h.idx + "_dragger_vertical"), w("#mCSB_" + h.idx + "_dragger_horizontal")];
                e[0].css("min-height", e[0].height());
                e[1].css("min-width", e[1].width())
            },
            _contentWidth: function(a) {
                return Math.max.apply(Math, a.map(function() {
                    return w(this).outerWidth(true)
                }).get())
            },
            _expandContentHorizontally: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    d = w("#mCSB_" + a.idx + "_container");
                if (b.advanced.autoExpandHorizontalScroll && b.axis !== "y") {
                    d.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: (Math.ceil(d[0].getBoundingClientRect().right + 0.4) - Math.floor(d[0].getBoundingClientRect().left)),
                        position: "relative"
                    }).unwrap()
                }
            },
            _scrollButtons: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    e = w(".mCSB_" + a.idx + "_scrollbar:first"),
                    d = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],
                    f = [(b.axis === "x" ? d[2] : d[0]), (b.axis === "x" ? d[3] : d[1]), d[2], d[3]];
                if (b.scrollButtons.enable) {
                    e.prepend(f[0]).append(f[1]).next(".mCSB_scrollTools").prepend(f[2]).append(f[3])
                }
            },
            _maxHeight: function() {
                var d = w(this),
                    a = d.data(D),
                    b = a.opt,
                    f = w("#mCSB_" + a.idx),
                    g = d.css("max-height"),
                    e = g.indexOf("%") !== -1,
                    h = d.css("box-sizing");
                if (g !== "none") {
                    var c = e ? d.parent().height() * parseInt(g) / 100 : parseInt(g);
                    if (h === "border-box") {
                        c -= ((d.innerHeight() - d.height()) + (d.outerHeight() - d.innerHeight()))
                    }
                    f.css("max-height", Math.round(c))
                }
            },
            _setDraggerLength: function() {
                var g = w(this),
                    i = g.data(D),
                    c = w("#mCSB_" + i.idx),
                    f = w("#mCSB_" + i.idx + "_container"),
                    d = [w("#mCSB_" + i.idx + "_dragger_vertical"), w("#mCSB_" + i.idx + "_dragger_horizontal")],
                    h = [c.height() / f.outerHeight(false), c.width() / f.outerWidth(false)],
                    b = [parseInt(d[0].css("min-height")), Math.round(h[0] * d[0].parent().height()), parseInt(d[1].css("min-width")), Math.round(h[1] * d[1].parent().width())],
                    a = v && (b[1] < b[0]) ? b[0] : b[1],
                    e = v && (b[3] < b[2]) ? b[2] : b[3];
                d[0].css({
                    height: a,
                    "max-height": (d[0].parent().height() - 10)
                }).find(".mCSB_dragger_bar").css({
                    "line-height": b[0] + "px"
                });
                d[1].css({
                    width: e,
                    "max-width": (d[1].parent().width() - 10)
                })
            },
            _scrollRatio: function() {
                var c = w(this),
                    a = c.data(D),
                    f = w("#mCSB_" + a.idx),
                    e = w("#mCSB_" + a.idx + "_container"),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")],
                    b = [e.outerHeight(false) - f.height(), e.outerWidth(false) - f.width()],
                    g = [b[0] / (d[0].parent().height() - d[0].height()), b[1] / (d[1].parent().width() - d[1].width())];
                a.scrollRatio = {
                    y: g[0],
                    x: g[1]
                }
            },
            _onDragClasses: function(d, b, e) {
                var c = e ? "mCSB_dragger_onDrag_expanded" : "",
                    f = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"],
                    a = d.closest(".mCSB_scrollTools");
                if (b === "active") {
                    d.toggleClass(f[0] + " " + c);
                    a.toggleClass(f[1]);
                    d[0]._draggable = d[0]._draggable ? 0 : 1
                } else {
                    if (!d[0]._draggable) {
                        if (b === "hide") {
                            d.removeClass(f[0]);
                            a.removeClass(f[1])
                        } else {
                            d.addClass(f[0]);
                            a.addClass(f[1])
                        }
                    }
                }
            },
            _overflowed: function() {
                var b = w(this),
                    a = b.data(D),
                    e = w("#mCSB_" + a.idx),
                    c = w("#mCSB_" + a.idx + "_container"),
                    d = a.overflowed == null ? c.height() : c.outerHeight(false),
                    f = a.overflowed == null ? c.width() : c.outerWidth(false);
                return [d > e.height(), f > e.width()]
            },
            _resetContentPosition: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    f = w("#mCSB_" + a.idx),
                    e = w("#mCSB_" + a.idx + "_container"),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")];
                x._stop(c);
                if ((b.axis !== "x" && !a.overflowed[0]) || (b.axis === "y" && a.overflowed[0])) {
                    d[0].add(e).css("top", 0)
                }
                if ((b.axis !== "y" && !a.overflowed[1]) || (b.axis === "x" && a.overflowed[1])) {
                    var g = dx = 0;
                    if (a.langDir === "rtl") {
                        g = f.width() - e.outerWidth(false);
                        dx = Math.abs(g / a.scrollRatio.x)
                    }
                    e.css("left", g);
                    d[1].css("left", dx)
                }
            },
            _bindEvents: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt;
                if (!a.bindEvents) {
                    x._draggable.call(this);
                    if (b.contentTouchScroll) {
                        x._contentDraggable.call(this)
                    }
                    if (b.mouseWheel.enable) {
                        function d() {
                            e = setTimeout(function() {
                                if (!w.event.special.mousewheel) {
                                    d()
                                } else {
                                    clearTimeout(e);
                                    x._mousewheel.call(c[0])
                                }
                            }, 1000)
                        }
                        var e;
                        d()
                    }
                    x._draggerRail.call(this);
                    x._wrapperScroll.call(this);
                    if (b.advanced.autoScrollOnFocus) {
                        x._focus.call(this)
                    }
                    if (b.scrollButtons.enable) {
                        x._buttons.call(this)
                    }
                    if (b.keyboard.enable) {
                        x._keyboard.call(this)
                    }
                    a.bindEvents = true
                }
            },
            _unbindEvents: function() {
                var c = w(this),
                    b = c.data(D),
                    f = D + "_" + b.idx,
                    a = ".mCSB_" + b.idx + "_scrollbar",
                    d = w("#mCSB_" + b.idx + ",#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper," + a + " .mCSB_draggerContainer,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal," + a + ">a"),
                    e = w("#mCSB_" + b.idx + "_container");
                if (b.bindEvents) {
                    w(r).unbind("." + f);
                    d.each(function() {
                        w(this).unbind("." + f)
                    });
                    clearTimeout(c[0]._focusTimeout);
                    x._delete.call(null, c[0]._focusTimeout);
                    clearTimeout(b.sequential.step);
                    x._delete.call(null, b.sequential.step);
                    clearTimeout(e[0].onCompleteTimeout);
                    x._delete.call(null, e[0].onCompleteTimeout);
                    b.bindEvents = false
                }
            },
            _scrollbarVisibility: function(g) {
                var d = w(this),
                    b = d.data(D),
                    c = b.opt,
                    h = w("#mCSB_" + b.idx + "_container_wrapper"),
                    f = h.length ? h : w("#mCSB_" + b.idx + "_container"),
                    a = [w("#mCSB_" + b.idx + "_scrollbar_vertical"), w("#mCSB_" + b.idx + "_scrollbar_horizontal")],
                    e = [a[0].find(".mCSB_dragger"), a[1].find(".mCSB_dragger")];
                if (c.axis !== "x") {
                    if (b.overflowed[0] && !g) {
                        a[0].add(e[0]).add(a[0].children("a")).css("display", "block");
                        f.removeClass("mCS_no_scrollbar_y mCS_y_hidden")
                    } else {
                        if (c.alwaysShowScrollbar) {
                            if (c.alwaysShowScrollbar !== 2) {
                                e[0].add(a[0].children("a")).css("display", "none")
                            }
                            f.removeClass("mCS_y_hidden")
                        } else {
                            a[0].css("display", "none");
                            f.addClass("mCS_y_hidden")
                        }
                        f.addClass("mCS_no_scrollbar_y")
                    }
                }
                if (c.axis !== "y") {
                    if (b.overflowed[1] && !g) {
                        a[1].add(e[1]).add(a[1].children("a")).css("display", "block");
                        f.removeClass("mCS_no_scrollbar_x mCS_x_hidden")
                    } else {
                        if (c.alwaysShowScrollbar) {
                            if (c.alwaysShowScrollbar !== 2) {
                                e[1].add(a[1].children("a")).css("display", "none")
                            }
                            f.removeClass("mCS_x_hidden")
                        } else {
                            a[1].css("display", "none");
                            f.addClass("mCS_x_hidden")
                        }
                        f.addClass("mCS_no_scrollbar_x")
                    }
                }
                if (!b.overflowed[0] && !b.overflowed[1]) {
                    d.addClass("mCS_no_scrollbar")
                } else {
                    d.removeClass("mCS_no_scrollbar")
                }
            },
            _coordinates: function(b) {
                var c = b.type;
                switch (c) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return [b.originalEvent.pageY, b.originalEvent.pageX];
                        break;
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var a = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0];
                        return [a.pageY, a.pageX];
                        break;
                    default:
                        return [b.pageY, b.pageX]
                }
            },
            _draggable: function() {
                var j = w(this),
                    l = j.data(D),
                    c = l.opt,
                    a = D + "_" + l.idx,
                    k = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    i = w("#mCSB_" + l.idx + "_container"),
                    h = w("#" + k[0] + ",#" + k[1]),
                    d, f, e;
                h.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, function(o) {
                    o.stopImmediatePropagation();
                    o.preventDefault();
                    if (!x._mouseBtnLeft(o)) {
                        return
                    }
                    q = true;
                    if (v) {
                        r.onselectstart = function() {
                            return false
                        }
                    }
                    g(false);
                    x._stop(j);
                    d = w(this);
                    var n = d.offset(),
                        m = x._coordinates(o)[0] - n.top,
                        J = x._coordinates(o)[1] - n.left,
                        H = d.height() + n.top,
                        I = d.width() + n.left;
                    if (m < H && m > 0 && J < I && J > 0) {
                        f = m;
                        e = J
                    }
                    x._onDragClasses(d, "active", c.autoExpandScrollbar)
                }).bind("touchmove." + a, function(o) {
                    o.stopImmediatePropagation();
                    o.preventDefault();
                    var n = d.offset(),
                        m = x._coordinates(o)[0] - n.top,
                        F = x._coordinates(o)[1] - n.left;
                    b(f, e, m, F)
                });
                w(r).bind("mousemove." + a + " pointermove." + a + " MSPointerMove." + a, function(o) {
                    if (d) {
                        var n = d.offset(),
                            m = x._coordinates(o)[0] - n.top,
                            F = x._coordinates(o)[1] - n.left;
                        if (f === m) {
                            return
                        }
                        b(f, e, m, F)
                    }
                }).add(h).bind("mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a, function(m) {
                    if (d) {
                        x._onDragClasses(d, "active", c.autoExpandScrollbar);
                        d = null
                    }
                    q = false;
                    if (v) {
                        r.onselectstart = null
                    }
                    g(true)
                });

                function g(o) {
                    var n = i.find("iframe");
                    if (!n.length) {
                        return
                    }
                    var m = !o ? "none" : "auto";
                    n.css("pointer-events", m)
                }

                function b(H, o, m, J) {
                    i[0].idleTimer = c.scrollInertia < 233 ? 250 : 0;
                    if (d.attr("id") === k[1]) {
                        var I = "x",
                            n = ((d[0].offsetLeft - o) + J) * l.scrollRatio.x
                    } else {
                        var I = "y",
                            n = ((d[0].offsetTop - H) + m) * l.scrollRatio.y
                    }
                    x._scrollTo(j, n.toString(), {
                        dir: I,
                        drag: true
                    })
                }
            },
            _contentDraggable: function() {
                var f = w(this),
                    c = f.data(D),
                    h = c.opt,
                    m = D + "_" + c.idx,
                    l = w("#mCSB_" + c.idx),
                    d = w("#mCSB_" + c.idx + "_container"),
                    j = [w("#mCSB_" + c.idx + "_dragger_vertical"), w("#mCSB_" + c.idx + "_dragger_horizontal")],
                    o, k, b, a, R = [],
                    P = [],
                    i, V, n, N, e, g, Q = 0,
                    T, O = h.axis === "yx" ? "none" : "all";
                d.bind("touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(F) {
                    if (!x._pointerTouch(F) || q) {
                        return
                    }
                    var E = d.offset();
                    o = x._coordinates(F)[0] - E.top;
                    k = x._coordinates(F)[1] - E.left
                }).bind("touchmove." + m + " pointermove." + m + " MSPointerMove." + m, function(J) {
                    if (!x._pointerTouch(J) || q) {
                        return
                    }
                    J.stopImmediatePropagation();
                    V = x._getTime();
                    var K = l.offset(),
                        H = x._coordinates(J)[0] - K.top,
                        F = x._coordinates(J)[1] - K.left,
                        I = "mcsLinearOut";
                    R.push(H);
                    P.push(F);
                    if (c.overflowed[0]) {
                        var L = j[0].parent().height() - j[0].height(),
                            G = ((o - H) > 0 && (H - o) > -(L * c.scrollRatio.y))
                    }
                    if (c.overflowed[1]) {
                        var M = j[1].parent().width() - j[1].width(),
                            E = ((k - F) > 0 && (F - k) > -(M * c.scrollRatio.x))
                    }
                    if (G || E) {
                        J.preventDefault()
                    }
                    g = h.axis === "yx" ? [(o - H), (k - F)] : h.axis === "x" ? [null, (k - F)] : [(o - H), null];
                    d[0].idleTimer = 250;
                    if (c.overflowed[0]) {
                        S(g[0], Q, I, "y", "all", true)
                    }
                    if (c.overflowed[1]) {
                        S(g[1], Q, I, "x", O, true)
                    }
                });
                l.bind("touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(F) {
                    if (!x._pointerTouch(F) || q) {
                        return
                    }
                    F.stopImmediatePropagation();
                    x._stop(f);
                    i = x._getTime();
                    var E = l.offset();
                    b = x._coordinates(F)[0] - E.top;
                    a = x._coordinates(F)[1] - E.left;
                    R = [];
                    P = []
                }).bind("touchend." + m + " pointerup." + m + " MSPointerUp." + m, function(L) {
                    if (!x._pointerTouch(L) || q) {
                        return
                    }
                    L.stopImmediatePropagation();
                    n = x._getTime();
                    var X = l.offset(),
                        H = x._coordinates(L)[0] - X.top,
                        F = x._coordinates(L)[1] - X.left;
                    if ((n - V) > 30) {
                        return
                    }
                    e = 1000 / (n - i);
                    var K = "mcsEaseOut",
                        J = e < 2.5,
                        E = J ? [R[R.length - 2], P[P.length - 2]] : [0, 0];
                    N = J ? [(H - E[0]), (F - E[1])] : [H - b, F - a];
                    var M = [Math.abs(N[0]), Math.abs(N[1])];
                    e = J ? [Math.abs(N[0] / 4), Math.abs(N[1] / 4)] : [e, e];
                    var G = [Math.abs(d[0].offsetTop) - (N[0] * U((M[0] / e[0]), e[0])), Math.abs(d[0].offsetLeft) - (N[1] * U((M[1] / e[1]), e[1]))];
                    g = h.axis === "yx" ? [G[0], G[1]] : h.axis === "x" ? [null, G[1]] : [G[0], null];
                    T = [(M[0] * 4) + h.scrollInertia, (M[1] * 4) + h.scrollInertia];
                    var I = parseInt(h.contentTouchScroll) || 0;
                    g[0] = M[0] > I ? g[0] : 0;
                    g[1] = M[1] > I ? g[1] : 0;
                    if (c.overflowed[0]) {
                        S(g[0], T[0], K, "y", O, false)
                    }
                    if (c.overflowed[1]) {
                        S(g[1], T[1], K, "x", O, false)
                    }
                });

                function U(E, G) {
                    var F = [G * 1.5, G * 2, G / 1.5, G / 2];
                    if (E > 90) {
                        return G > 4 ? F[0] : F[3]
                    } else {
                        if (E > 60) {
                            return G > 3 ? F[3] : F[2]
                        } else {
                            if (E > 30) {
                                return G > 8 ? F[1] : G > 6 ? F[0] : G > 4 ? G : F[2]
                            } else {
                                return G > 8 ? G : F[3]
                            }
                        }
                    }
                }

                function S(H, F, E, I, J, G) {
                    if (!H) {
                        return
                    }
                    x._scrollTo(f, H.toString(), {
                        dur: F,
                        scrollEasing: E,
                        dir: I,
                        overwrite: J,
                        drag: G
                    })
                }
            },
            _mousewheel: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    e = D + "_" + a.idx,
                    f = w("#mCSB_" + a.idx),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")];
                f.bind("mousewheel." + e, function(k, g) {
                    x._stop(c);
                    if (x._disableMousewheel(c, k.target)) {
                        return
                    }
                    var i = b.mouseWheel.deltaFactor !== "auto" ? parseInt(b.mouseWheel.deltaFactor) : (v && k.deltaFactor < 100) ? 100 : k.deltaFactor < 40 ? 40 : k.deltaFactor || 100;
                    if (b.axis === "x" || b.mouseWheel.axis === "x") {
                        var n = "x",
                            h = [Math.round(i * a.scrollRatio.x), parseInt(b.mouseWheel.scrollAmount)],
                            l = b.mouseWheel.scrollAmount !== "auto" ? h[1] : h[0] >= f.width() ? f.width() * 0.9 : h[0],
                            F = Math.abs(w("#mCSB_" + a.idx + "_container")[0].offsetLeft),
                            j = d[1][0].offsetLeft,
                            m = d[1].parent().width() - d[1].width(),
                            o = k.deltaX || k.deltaY || g
                    } else {
                        var n = "y",
                            h = [Math.round(i * a.scrollRatio.y), parseInt(b.mouseWheel.scrollAmount)],
                            l = b.mouseWheel.scrollAmount !== "auto" ? h[1] : h[0] >= f.height() ? f.height() * 0.9 : h[0],
                            F = Math.abs(w("#mCSB_" + a.idx + "_container")[0].offsetTop),
                            j = d[0][0].offsetTop,
                            m = d[0].parent().height() - d[0].height(),
                            o = k.deltaY || g
                    }
                    if ((n === "y" && !a.overflowed[0]) || (n === "x" && !a.overflowed[1])) {
                        return
                    }
                    if (b.mouseWheel.invert) {
                        o = -o
                    }
                    if (b.mouseWheel.normalizeDelta) {
                        o = o < 0 ? -1 : 1
                    }
                    if ((o > 0 && j !== 0) || (o < 0 && j !== m) || b.mouseWheel.preventDefault) {
                        k.stopImmediatePropagation();
                        k.preventDefault()
                    }
                    x._scrollTo(c, (F - (o * l)).toString(), {
                        dir: n
                    })
                })
            },
            _disableMousewheel: function(c, a) {
                var e = a.nodeName.toLowerCase(),
                    d = c.data(D).opt.mouseWheel.disableOver,
                    b = ["select", "textarea"];
                return w.inArray(e, d) > -1 && !(w.inArray(e, b) > -1 && !w(a).is(":focus"))
            },
            _draggerRail: function() {
                var c = w(this),
                    b = c.data(D),
                    e = D + "_" + b.idx,
                    d = w("#mCSB_" + b.idx + "_container"),
                    a = d.parent(),
                    f = w(".mCSB_" + b.idx + "_scrollbar .mCSB_draggerContainer");
                f.bind("touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(g) {
                    q = true
                }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function(g) {
                    q = false
                }).bind("click." + e, function(k) {
                    if (w(k.target).hasClass("mCSB_draggerContainer") || w(k.target).hasClass("mCSB_draggerRail")) {
                        x._stop(c);
                        var i = w(this),
                            l = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!b.overflowed[1]) {
                                return
                            }
                            var j = "x",
                                h = k.pageX > l.offset().left ? -1 : 1,
                                g = Math.abs(d[0].offsetLeft) - (h * (a.width() * 0.9))
                        } else {
                            if (!b.overflowed[0]) {
                                return
                            }
                            var j = "y",
                                h = k.pageY > l.offset().top ? -1 : 1,
                                g = Math.abs(d[0].offsetTop) - (h * (a.height() * 0.9))
                        }
                        x._scrollTo(c, g.toString(), {
                            dir: j,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            _focus: function() {
                var d = w(this),
                    b = d.data(D),
                    c = b.opt,
                    f = D + "_" + b.idx,
                    e = w("#mCSB_" + b.idx + "_container"),
                    a = e.parent();
                e.bind("focusin." + f, function(g) {
                    var h = w(r.activeElement),
                        j = e.find(".mCustomScrollBox").length,
                        i = 0;
                    if (!h.is(c.advanced.autoScrollOnFocus)) {
                        return
                    }
                    x._stop(d);
                    clearTimeout(d[0]._focusTimeout);
                    d[0]._focusTimer = j ? (i + 17) * j : 0;
                    d[0]._focusTimeout = setTimeout(function() {
                        var m = [h.offset().top - e.offset().top, h.offset().left - e.offset().left],
                            n = [e[0].offsetTop, e[0].offsetLeft],
                            l = [(n[0] + m[0] >= 0 && n[0] + m[0] < a.height() - h.outerHeight(false)), (n[1] + m[1] >= 0 && n[0] + m[1] < a.width() - h.outerWidth(false))],
                            k = (c.axis === "yx" && !l[0] && !l[1]) ? "none" : "all";
                        if (c.axis !== "x" && !l[0]) {
                            x._scrollTo(d, m[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: k,
                                dur: i
                            })
                        }
                        if (c.axis !== "y" && !l[1]) {
                            x._scrollTo(d, m[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: k,
                                dur: i
                            })
                        }
                    }, d[0]._focusTimer)
                })
            },
            _wrapperScroll: function() {
                var c = w(this),
                    b = c.data(D),
                    d = D + "_" + b.idx,
                    a = w("#mCSB_" + b.idx + "_container").parent();
                a.bind("scroll." + d, function(e) {
                    a.scrollTop(0).scrollLeft(0)
                })
            },
            _buttons: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    h = a.sequential,
                    f = D + "_" + a.idx,
                    d = w("#mCSB_" + a.idx + "_container"),
                    e = ".mCSB_" + a.idx + "_scrollbar",
                    g = w(e + ">a");
                g.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f + " mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f + " mouseout." + f + " pointerout." + f + " MSPointerOut." + f + " click." + f, function(j) {
                    j.preventDefault();
                    if (!x._mouseBtnLeft(j)) {
                        return
                    }
                    var k = w(this).attr("class");
                    h.type = b.scrollButtons.scrollType;
                    switch (j.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if (h.type === "stepped") {
                                return
                            }
                            q = true;
                            a.tweenRunning = false;
                            i("on", k);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if (h.type === "stepped") {
                                return
                            }
                            q = false;
                            if (h.dir) {
                                i("off", k)
                            }
                            break;
                        case "click":
                            if (h.type !== "stepped" || a.tweenRunning) {
                                return
                            }
                            i("on", k);
                            break
                    }

                    function i(l, m) {
                        h.scrollAmount = b.snapAmount || b.scrollButtons.scrollAmount;
                        x._sequentialScroll.call(this, c, l, m)
                    }
                })
            },
            _keyboard: function() {
                var g = w(this),
                    h = g.data(D),
                    b = h.opt,
                    d = h.sequential,
                    i = D + "_" + h.idx,
                    a = w("#mCSB_" + h.idx),
                    e = w("#mCSB_" + h.idx + "_container"),
                    c = e.parent(),
                    f = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                a.attr("tabindex", "0").bind("blur." + i + " keydown." + i + " keyup." + i, function(l) {
                    switch (l.type) {
                        case "blur":
                            if (h.tweenRunning && d.dir) {
                                o("off", null)
                            }
                            break;
                        case "keydown":
                        case "keyup":
                            var j = l.keyCode ? l.keyCode : l.which,
                                F = "on";
                            if ((b.axis !== "x" && (j === 38 || j === 40)) || (b.axis !== "y" && (j === 37 || j === 39))) {
                                if (((j === 38 || j === 40) && !h.overflowed[0]) || ((j === 37 || j === 39) && !h.overflowed[1])) {
                                    return
                                }
                                if (l.type === "keyup") {
                                    F = "off"
                                }
                                if (!w(r.activeElement).is(f)) {
                                    l.preventDefault();
                                    l.stopImmediatePropagation();
                                    o(F, j)
                                }
                            } else {
                                if (j === 33 || j === 34) {
                                    if (h.overflowed[0] || h.overflowed[1]) {
                                        l.preventDefault();
                                        l.stopImmediatePropagation()
                                    }
                                    if (l.type === "keyup") {
                                        x._stop(g);
                                        var n = j === 34 ? -1 : 1;
                                        if (b.axis === "x" || (b.axis === "yx" && h.overflowed[1] && !h.overflowed[0])) {
                                            var m = "x",
                                                k = Math.abs(e[0].offsetLeft) - (n * (c.width() * 0.9))
                                        } else {
                                            var m = "y",
                                                k = Math.abs(e[0].offsetTop) - (n * (c.height() * 0.9))
                                        }
                                        x._scrollTo(g, k.toString(), {
                                            dir: m,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else {
                                    if (j === 35 || j === 36) {
                                        if (!w(r.activeElement).is(f)) {
                                            if (h.overflowed[0] || h.overflowed[1]) {
                                                l.preventDefault();
                                                l.stopImmediatePropagation()
                                            }
                                            if (l.type === "keyup") {
                                                if (b.axis === "x" || (b.axis === "yx" && h.overflowed[1] && !h.overflowed[0])) {
                                                    var m = "x",
                                                        k = j === 35 ? Math.abs(c.width() - e.outerWidth(false)) : 0
                                                } else {
                                                    var m = "y",
                                                        k = j === 35 ? Math.abs(c.height() - e.outerHeight(false)) : 0
                                                }
                                                x._scrollTo(g, k.toString(), {
                                                    dir: m,
                                                    scrollEasing: "mcsEaseInOut"
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                            break
                    }

                    function o(H, E) {
                        d.type = b.keyboard.scrollType;
                        d.scrollAmount = b.snapAmount || b.keyboard.scrollAmount;
                        if (d.type === "stepped" && h.tweenRunning) {
                            return
                        }
                        x._sequentialScroll.call(this, g, H, E)
                    }
                })
            },
            _sequentialScroll: function(a, h, j) {
                var f = a.data(D),
                    b = f.opt,
                    d = f.sequential,
                    e = w("#mCSB_" + f.idx + "_container"),
                    c = d.type === "stepped" ? true : false;
                switch (h) {
                    case "on":
                        d.dir = [(j === "mCSB_buttonRight" || j === "mCSB_buttonLeft" || j === 39 || j === 37 ? "x" : "y"), (j === "mCSB_buttonUp" || j === "mCSB_buttonLeft" || j === 38 || j === 37 ? -1 : 1)];
                        x._stop(a);
                        if (x._isNumeric(j) && d.type === "stepped") {
                            return
                        }
                        i(c);
                        break;
                    case "off":
                        g();
                        if (c || (f.tweenRunning && d.dir)) {
                            i(true)
                        }
                        break
                }

                function i(o) {
                    var O = d.type !== "stepped",
                        K = !o ? 1000 / 60 : O ? b.scrollInertia / 1.5 : b.scrollInertia,
                        m = !o ? 2.5 : O ? 7.5 : 40,
                        L = [Math.abs(e[0].offsetTop), Math.abs(e[0].offsetLeft)],
                        P = [f.scrollRatio.y > 10 ? 10 : f.scrollRatio.y, f.scrollRatio.x > 10 ? 10 : f.scrollRatio.x],
                        l = d.dir[0] === "x" ? L[1] + (d.dir[1] * (P[1] * m)) : L[0] + (d.dir[1] * (P[0] * m)),
                        M = d.dir[0] === "x" ? L[1] + (d.dir[1] * parseInt(d.scrollAmount)) : L[0] + (d.dir[1] * parseInt(d.scrollAmount)),
                        N = d.scrollAmount !== "auto" ? M : l,
                        k = !o ? "mcsLinear" : O ? "mcsLinearOut" : "mcsEaseInOut",
                        n = !o ? false : true;
                    if (o && K < 17) {
                        N = d.dir[0] === "x" ? L[1] : L[0]
                    }
                    x._scrollTo(a, N.toString(), {
                        dir: d.dir[0],
                        scrollEasing: k,
                        dur: K,
                        onComplete: n
                    });
                    if (o) {
                        d.dir = false;
                        return
                    }
                    clearTimeout(d.step);
                    d.step = setTimeout(function() {
                        i()
                    }, K)
                }

                function g() {
                    clearTimeout(d.step);
                    x._stop(a)
                }
            },
            _arr: function(a) {
                var b = w(this).data(D).opt,
                    c = [];
                if (typeof a === "function") {
                    a = a()
                }
                if (!(a instanceof Array)) {
                    c[0] = a.y ? a.y : a.x || b.axis === "x" ? null : a;
                    c[1] = a.x ? a.x : a.y || b.axis === "y" ? null : a
                } else {
                    c = a.length > 1 ? [a[0], a[1]] : b.axis === "x" ? [null, a[0]] : [a[0], null]
                }
                if (typeof c[0] === "function") {
                    c[0] = c[0]()
                }
                if (typeof c[1] === "function") {
                    c[1] = c[1]()
                }
                return c
            },
            _to: function(k, j) {
                if (k == null || typeof k == "undefined") {
                    return
                }
                var d = w(this),
                    e = d.data(D),
                    l = e.opt,
                    a = w("#mCSB_" + e.idx + "_container"),
                    b = a.parent(),
                    m = typeof k;
                if (!j) {
                    j = l.axis === "x" ? "x" : "y"
                }
                var c = j === "x" ? a.outerWidth(false) : a.outerHeight(false),
                    i = j === "x" ? a.offset().left : a.offset().top,
                    o = j === "x" ? a[0].offsetLeft : a[0].offsetTop,
                    g = j === "x" ? "left" : "top";
                switch (m) {
                    case "function":
                        return k();
                        break;
                    case "object":
                        if (k.nodeType) {
                            var f = j === "x" ? w(k).offset().left : w(k).offset().top
                        } else {
                            if (k.jquery) {
                                if (!k.length) {
                                    return
                                }
                                var f = j === "x" ? k.offset().left : k.offset().top
                            }
                        }
                        return f - i;
                        break;
                    case "string":
                    case "number":
                        if (x._isNumeric.call(null, k)) {
                            return Math.abs(k)
                        } else {
                            if (k.indexOf("%") !== -1) {
                                return Math.abs(c * parseInt(k) / 100)
                            } else {
                                if (k.indexOf("-=") !== -1) {
                                    return Math.abs(o - parseInt(k.split("-=")[1]))
                                } else {
                                    if (k.indexOf("+=") !== -1) {
                                        var n = (o + parseInt(k.split("+=")[1]));
                                        return n >= 0 ? 0 : Math.abs(n)
                                    } else {
                                        if (k.indexOf("px") !== -1 && x._isNumeric.call(null, k.split("px")[0])) {
                                            return Math.abs(k.split("px")[0])
                                        } else {
                                            if (k === "top" || k === "left") {
                                                return 0
                                            } else {
                                                if (k === "bottom") {
                                                    return Math.abs(b.height() - a.outerHeight(false))
                                                } else {
                                                    if (k === "right") {
                                                        return Math.abs(b.width() - a.outerWidth(false))
                                                    } else {
                                                        if (k === "first" || k === "last") {
                                                            var h = a.find(":" + k),
                                                                f = j === "x" ? w(h).offset().left : w(h).offset().top;
                                                            return f - i
                                                        } else {
                                                            if (w(k).length) {
                                                                var f = j === "x" ? w(k).offset().left : w(k).offset().top;
                                                                return f - i
                                                            } else {
                                                                a.css(g, k);
                                                                C.update.call(null, d[0]);
                                                                return
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break
                }
            },
            _autoUpdate: function(J) {
                var k = w(this),
                    h = k.data(D),
                    a = h.opt,
                    g = w("#mCSB_" + h.idx + "_container");
                if (J) {
                    clearTimeout(g[0].autoUpdate);
                    x._delete.call(null, g[0].autoUpdate);
                    return
                }
                var l = g.parent(),
                    L = [w("#mCSB_" + h.idx + "_scrollbar_vertical"), w("#mCSB_" + h.idx + "_scrollbar_horizontal")],
                    m = function() {
                        return [L[0].is(":visible") ? L[0].outerHeight(true) : 0, L[1].is(":visible") ? L[1].outerWidth(true) : 0]
                    },
                    j = b(),
                    c, i = [g.outerHeight(false), g.outerWidth(false), l.height(), l.width(), m()[0], m()[1]],
                    d, I = f(),
                    e;
                o();

                function o() {
                    clearTimeout(g[0].autoUpdate);
                    g[0].autoUpdate = setTimeout(function() {
                        if (a.advanced.updateOnSelectorChange) {
                            c = b();
                            if (c !== j) {
                                n();
                                j = c;
                                return
                            }
                        }
                        if (a.advanced.updateOnContentResize) {
                            d = [g.outerHeight(false), g.outerWidth(false), l.height(), l.width(), m()[0], m()[1]];
                            if (d[0] !== i[0] || d[1] !== i[1] || d[2] !== i[2] || d[3] !== i[3] || d[4] !== i[4] || d[5] !== i[5]) {
                                n();
                                i = d
                            }
                        }
                        if (a.advanced.updateOnImageLoad) {
                            e = f();
                            if (e !== I) {
                                g.find("img").each(function() {
                                    K(this.src)
                                });
                                I = e
                            }
                        }
                        if (a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) {
                            o()
                        }
                    }, 60)
                }

                function f() {
                    var E = 0;
                    if (a.advanced.updateOnImageLoad) {
                        E = g.find("img").length
                    }
                    return E
                }

                function K(E) {
                    var H = new Image();

                    function F(P, O) {
                        return function() {
                            return O.apply(P, arguments)
                        }
                    }

                    function G() {
                        this.onload = null;
                        n()
                    }
                    H.onload = F(H, G);
                    H.src = E
                }

                function b() {
                    if (a.advanced.updateOnSelectorChange === true) {
                        a.advanced.updateOnSelectorChange = "*"
                    }
                    var F = 0,
                        E = g.find(a.advanced.updateOnSelectorChange);
                    if (a.advanced.updateOnSelectorChange && E.length > 0) {
                        E.each(function() {
                            F += w(this).height() + w(this).width()
                        })
                    }
                    return F
                }

                function n() {
                    clearTimeout(g[0].autoUpdate);
                    C.update.call(null, k[0])
                }
            },
            _snapAmount: function(a, c, b) {
                return (Math.round(a / c) * c - b)
            },
            _stop: function(c) {
                var a = c.data(D),
                    b = w("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal");
                b.each(function() {
                    x._stopTween.call(this)
                })
            },
            _scrollTo: function(R, M, m) {
                var f = R.data(D),
                    o = f.opt,
                    N = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: false,
                        dur: o.scrollInertia,
                        overwrite: "all",
                        callbacks: true,
                        onStart: true,
                        onUpdate: true,
                        onComplete: true
                    },
                    m = w.extend(N, m),
                    j = [m.dur, (m.drag ? 0 : m.dur)],
                    k = w("#mCSB_" + f.idx),
                    Q = w("#mCSB_" + f.idx + "_container"),
                    b = o.callbacks.onTotalScrollOffset ? x._arr.call(R, o.callbacks.onTotalScrollOffset) : [0, 0],
                    T = o.callbacks.onTotalScrollBackOffset ? x._arr.call(R, o.callbacks.onTotalScrollBackOffset) : [0, 0];
                f.trigger = m.trigger;
                if (o.snapAmount) {
                    M = x._snapAmount(M, o.snapAmount, o.snapOffset)
                }
                switch (m.dir) {
                    case "x":
                        var g = w("#mCSB_" + f.idx + "_dragger_horizontal"),
                            c = "left",
                            O = Q[0].offsetLeft,
                            i = [k.width() - Q.outerWidth(false), g.parent().width() - g.width()],
                            P = [M, (M / f.scrollRatio.x)],
                            a = b[1],
                            e = T[1],
                            S = a > 0 ? a / f.scrollRatio.x : 0,
                            h = e > 0 ? e / f.scrollRatio.x : 0;
                        break;
                    case "y":
                        var g = w("#mCSB_" + f.idx + "_dragger_vertical"),
                            c = "top",
                            O = Q[0].offsetTop,
                            i = [k.height() - Q.outerHeight(false), g.parent().height() - g.height()],
                            P = [M, (M / f.scrollRatio.y)],
                            a = b[0],
                            e = T[0],
                            S = a > 0 ? a / f.scrollRatio.y : 0,
                            h = e > 0 ? e / f.scrollRatio.y : 0;
                        break
                }
                if (P[1] < 0) {
                    P = [0, 0]
                } else {
                    if (P[1] >= i[1]) {
                        P = [i[0], i[1]]
                    } else {
                        P[0] = -P[0]
                    }
                }
                clearTimeout(Q[0].onCompleteTimeout);
                if (!f.tweenRunning && ((O === 0 && P[0] >= 0) || (O === i[0] && P[0] <= i[0]))) {
                    return
                }
                x._tweenTo.call(null, g[0], c, Math.round(P[1]), j[1], m.scrollEasing);
                x._tweenTo.call(null, Q[0], c, Math.round(P[0]), j[0], m.scrollEasing, m.overwrite, {
                    onStart: function() {
                        if (m.callbacks && m.onStart && !f.tweenRunning) {
                            if (n("onScrollStart")) {
                                l();
                                o.callbacks.onScrollStart.call(R[0])
                            }
                            f.tweenRunning = true;
                            x._onDragClasses(g);
                            f.cbOffsets = d()
                        }
                    },
                    onUpdate: function() {
                        if (m.callbacks && m.onUpdate) {
                            if (n("whileScrolling")) {
                                l();
                                o.callbacks.whileScrolling.call(R[0])
                            }
                        }
                    },
                    onComplete: function() {
                        if (m.callbacks && m.onComplete) {
                            if (o.axis === "yx") {
                                clearTimeout(Q[0].onCompleteTimeout)
                            }
                            var E = Q[0].idleTimer || 0;
                            Q[0].onCompleteTimeout = setTimeout(function() {
                                if (n("onScroll")) {
                                    l();
                                    o.callbacks.onScroll.call(R[0])
                                }
                                if (n("onTotalScroll") && P[1] >= i[1] - S && f.cbOffsets[0]) {
                                    l();
                                    o.callbacks.onTotalScroll.call(R[0])
                                }
                                if (n("onTotalScrollBack") && P[1] <= h && f.cbOffsets[1]) {
                                    l();
                                    o.callbacks.onTotalScrollBack.call(R[0])
                                }
                                f.tweenRunning = false;
                                Q[0].idleTimer = 0;
                                x._onDragClasses(g, "hide")
                            }, E)
                        }
                    }
                });

                function n(E) {
                    return f && o.callbacks[E] && typeof o.callbacks[E] === "function"
                }

                function d() {
                    return [o.callbacks.alwaysTriggerOffsets || O >= i[0] + a, o.callbacks.alwaysTriggerOffsets || O <= -e]
                }

                function l() {
                    var F = [Q[0].offsetTop, Q[0].offsetLeft],
                        E = [g[0].offsetTop, g[0].offsetLeft],
                        H = [Q.outerHeight(false), Q.outerWidth(false)],
                        G = [k.height(), k.width()];
                    R[0].mcs = {
                        content: Q,
                        top: F[0],
                        left: F[1],
                        draggerTop: E[0],
                        draggerLeft: E[1],
                        topPct: Math.round((100 * Math.abs(F[0])) / (Math.abs(H[0]) - G[0])),
                        leftPct: Math.round((100 * Math.abs(F[1])) / (Math.abs(H[1]) - G[1])),
                        direction: m.dir
                    }
                }
            },
            _tweenTo: function(L, k, n, N, P, m, b) {
                var b = b || {},
                    h = b.onStart || function() {},
                    M = b.onUpdate || function() {},
                    g = b.onComplete || function() {},
                    a = x._getTime(),
                    e, i = 0,
                    o = L.offsetTop,
                    l = L.style;
                if (k === "left") {
                    o = L.offsetLeft
                }
                var c = n - o;
                L._mcsstop = 0;
                if (m !== "none") {
                    K()
                }
                O();

                function d() {
                    if (L._mcsstop) {
                        return
                    }
                    if (!i) {
                        h.call()
                    }
                    i = x._getTime() - a;
                    j();
                    if (i >= L._mcstime) {
                        L._mcstime = (i > L._mcstime) ? i + e - (i - L._mcstime) : i + e - 1;
                        if (L._mcstime < i + 1) {
                            L._mcstime = i + 1
                        }
                    }
                    if (L._mcstime < N) {
                        L._mcsid = _request(d)
                    } else {
                        g.call()
                    }
                }

                function j() {
                    if (N > 0) {
                        L._mcscurrVal = f(L._mcstime, o, c, N, P);
                        l[k] = Math.round(L._mcscurrVal) + "px"
                    } else {
                        l[k] = n + "px"
                    }
                    M.call()
                }

                function O() {
                    e = 1000 / 60;
                    L._mcstime = i + e;
                    _request = (!s.requestAnimationFrame) ? function(E) {
                        j();
                        return setTimeout(E, 0.01)
                    } : s.requestAnimationFrame;
                    L._mcsid = _request(d)
                }

                function K() {
                    if (L._mcsid == null) {
                        return
                    }
                    if (!s.requestAnimationFrame) {
                        clearTimeout(L._mcsid)
                    } else {
                        s.cancelAnimationFrame(L._mcsid)
                    }
                    L._mcsid = null
                }

                function f(R, E, G, H, J) {
                    switch (J) {
                        case "linear":
                        case "mcsLinear":
                            return G * R / H + E;
                            break;
                        case "mcsLinearOut":
                            R /= H;
                            R--;
                            return G * Math.sqrt(1 - R * R) + E;
                            break;
                        case "easeInOutSmooth":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * R * R + E
                            }
                            R--;
                            return -G / 2 * (R * (R - 2) - 1) + E;
                            break;
                        case "easeInOutStrong":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * Math.pow(2, 10 * (R - 1)) + E
                            }
                            R--;
                            return G / 2 * (-Math.pow(2, -10 * R) + 2) + E;
                            break;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * R * R * R + E
                            }
                            R -= 2;
                            return G / 2 * (R * R * R + 2) + E;
                            break;
                        case "easeOutSmooth":
                            R /= H;
                            R--;
                            return -G * (R * R * R * R - 1) + E;
                            break;
                        case "easeOutStrong":
                            return G * (-Math.pow(2, -10 * R / H) + 1) + E;
                            break;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var I = (R /= H) * R,
                                F = I * R;
                            return E + G * (0.499999999999997 * F * I + -2.5 * I * I + 5.5 * F + -6.5 * I + 4 * R)
                    }
                }
            },
            _getTime: function() {
                if (s.performance && s.performance.now) {
                    return s.performance.now()
                } else {
                    if (s.performance && s.performance.webkitNow) {
                        return s.performance.webkitNow()
                    } else {
                        if (Date.now) {
                            return Date.now()
                        } else {
                            return new Date().getTime()
                        }
                    }
                }
            },
            _stopTween: function() {
                var a = this;
                if (a._mcsid == null) {
                    return
                }
                if (!s.requestAnimationFrame) {
                    clearTimeout(a._mcsid)
                } else {
                    s.cancelAnimationFrame(a._mcsid)
                }
                a._mcsid = null;
                a._mcsstop = 1
            },
            _delete: function(a) {
                try {
                    delete a
                } catch (b) {
                    a = null
                }
            },
            _mouseBtnLeft: function(a) {
                return !(a.which && a.which !== 1)
            },
            _pointerTouch: function(a) {
                var b = a.originalEvent.pointerType;
                return !(b && b !== "touch" && b !== 2)
            },
            _isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }
        };
    w.fn[z] = function(a) {
        if (C[a]) {
            return C[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return C.init.apply(this, arguments)
            } else {
                w.error("Method " + a + " does not exist")
            }
        }
    };
    w[z] = function(a) {
        if (C[a]) {
            return C[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return C.init.apply(this, arguments)
            } else {
                w.error("Method " + a + " does not exist")
            }
        }
    };
    w[z].defaults = y;
    s[z] = true;
    w(s).load(function() {
        w(t)[z]()
    })
})(jQuery, window, document);
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b : b(jQuery)
}(function(v) {
    function u(z) {
        var y = z || window.event,
            x = n.call(arguments, 1),
            w = 0,
            k = 0,
            i = 0,
            f = 0,
            e = 0,
            d = 0;
        if (z = v.event.fix(y), z.type = "mousewheel", "detail" in y && (i = -1 * y.detail), "wheelDelta" in y && (i = y.wheelDelta), "wheelDeltaY" in y && (i = y.wheelDeltaY), "wheelDeltaX" in y && (k = -1 * y.wheelDeltaX), "axis" in y && y.axis === y.HORIZONTAL_AXIS && (k = -1 * i, i = 0), w = 0 === i ? k : i, "deltaY" in y && (i = -1 * y.deltaY, w = i), "deltaX" in y && (k = y.deltaX, 0 === i && (w = -1 * k)), 0 !== i || 0 !== k) {
            if (1 === y.deltaMode) {
                var c = v.data(this, "mousewheel-line-height");
                w *= c, i *= c, k *= c
            } else {
                if (2 === y.deltaMode) {
                    var a = v.data(this, "mousewheel-page-height");
                    w *= a, i *= a, k *= a
                }
            }
            if (f = Math.max(Math.abs(i), Math.abs(k)), (!q || q > f) && (q = f, s(y, f) && (q /= 40)), s(y, f) && (w /= 40, k /= 40, i /= 40), w = Math[w >= 1 ? "floor" : "ceil"](w / q), k = Math[k >= 1 ? "floor" : "ceil"](k / q), i = Math[i >= 1 ? "floor" : "ceil"](i / q), l.settings.normalizeOffset && this.getBoundingClientRect) {
                var A = this.getBoundingClientRect();
                e = z.clientX - A.left, d = z.clientY - A.top
            }
            return z.deltaX = k, z.deltaY = i, z.deltaFactor = q, z.offsetX = e, z.offsetY = d, z.deltaMode = 0, x.unshift(z, w, k, i), r && clearTimeout(r), r = setTimeout(t, 200), (v.event.dispatch || v.event.handle).apply(this, x)
        }
    }

    function t() {
        q = null
    }

    function s(d, c) {
        return l.settings.adjustOldDeltas && "mousewheel" === d.type && c % 120 === 0
    }
    var r, q, p = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        n = Array.prototype.slice;
    if (v.event.fixHooks) {
        for (var m = p.length; m;) {
            v.event.fixHooks[p[--m]] = v.event.mouseHooks
        }
    }
    var l = v.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener) {
                for (var a = o.length; a;) {
                    this.addEventListener(o[--a], u, !1)
                }
            } else {
                this.onmousewheel = u
            }
            v.data(this, "mousewheel-line-height", l.getLineHeight(this)), v.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var a = o.length; a;) {
                    this.removeEventListener(o[--a], u, !1)
                }
            } else {
                this.onmousewheel = null
            }
            v.removeData(this, "mousewheel-line-height"), v.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(a) {
            var d = v(a)["offsetParent" in v.fn ? "offsetParent" : "parent"]();
            return d.length || (d = v("body")), parseInt(d.css("fontSize"), 10)
        },
        getPageHeight: function(a) {
            return v(a).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    v.fn.extend({
        mousewheel: function(b) {
            return b ? this.bind("mousewheel", b) : this.trigger("mousewheel")
        },
        unmousewheel: function(b) {
            return this.unbind("mousewheel", b)
        }
    })
});
(function(w, s, r, A) {
    var z = "mCustomScrollbar",
        D = "mCS",
        t = ".mCustomScrollbar",
        y = {
            setWidth: false,
            setHeight: false,
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: true,
            autoHideScrollbar: false,
            autoExpandScrollbar: false,
            alwaysShowScrollbar: 0,
            snapAmount: null,
            snapOffset: 0,
            mouseWheel: {
                enable: true,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: false,
                deltaFactor: "auto",
                normalizeDelta: false,
                invert: false,
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                enable: false,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: true,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            advanced: {
                autoExpandHorizontalScroll: false,
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: true,
                updateOnImageLoad: true,
                updateOnSelectorChange: false
            },
            theme: "light",
            callbacks: {
                onScrollStart: false,
                onScroll: false,
                onTotalScroll: false,
                onTotalScrollBack: false,
                whileScrolling: false,
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: true
            },
            live: false,
            liveSelector: null
        },
        u = 0,
        p = {},
        B = function(a) {
            if (p[a]) {
                clearTimeout(p[a]);
                x._delete.call(null, p[a])
            }
        },
        v = (s.attachEvent && !s.addEventListener) ? 1 : 0,
        q = false,
        C = {
            init: function(c) {
                var c = w.extend(true, {}, y, c),
                    d = x._selector.call(this);
                if (c.live) {
                    var a = c.liveSelector || this.selector || t,
                        b = w(a);
                    if (c.live === "off") {
                        B(a);
                        return
                    }
                    p[a] = setTimeout(function() {
                        b.mCustomScrollbar(c);
                        if (c.live === "once" && b.length) {
                            B(a)
                        }
                    }, 500)
                } else {
                    B(a)
                }
                c.setWidth = (c.set_width) ? c.set_width : c.setWidth;
                c.setHeight = (c.set_height) ? c.set_height : c.setHeight;
                c.axis = (c.horizontalScroll) ? "x" : x._findAxis.call(null, c.axis);
                c.scrollInertia = c.scrollInertia < 17 ? 17 : c.scrollInertia;
                if (typeof c.mouseWheel !== "object" && c.mouseWheel == true) {
                    c.mouseWheel = {
                        enable: true,
                        scrollAmount: "auto",
                        axis: "y",
                        preventDefault: false,
                        deltaFactor: "auto",
                        normalizeDelta: false,
                        invert: false
                    }
                }
                c.mouseWheel.scrollAmount = !c.mouseWheelPixels ? c.mouseWheel.scrollAmount : c.mouseWheelPixels;
                c.mouseWheel.normalizeDelta = !c.advanced.normalizeMouseWheelDelta ? c.mouseWheel.normalizeDelta : c.advanced.normalizeMouseWheelDelta;
                c.scrollButtons.scrollType = x._findScrollButtonsType.call(null, c.scrollButtons.scrollType);
                x._theme.call(null, c);
                return w(d).each(function() {
                    var h = w(this);
                    if (!h.data(D)) {
                        h.data(D, {
                            idx: ++u,
                            opt: c,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            bindEvents: false,
                            tweenRunning: false,
                            sequential: {},
                            langDir: h.css("direction"),
                            cbOffsets: null,
                            trigger: null
                        });
                        var f = h.data(D).opt,
                            g = h.data("mcs-axis"),
                            i = h.data("mcs-scrollbar-position"),
                            e = h.data("mcs-theme");
                        if (g) {
                            f.axis = g
                        }
                        if (i) {
                            f.scrollbarPosition = i
                        }
                        if (e) {
                            f.theme = e;
                            x._theme.call(null, f)
                        }
                        x._pluginMarkup.call(this);
                        C.update.call(null, h)
                    }
                })
            },
            update: function(a) {
                var b = a || x._selector.call(this);
                return w(b).each(function() {
                    var f = w(this);
                    if (f.data(D)) {
                        var d = f.data(D),
                            e = d.opt,
                            h = w("#mCSB_" + d.idx + "_container"),
                            g = [w("#mCSB_" + d.idx + "_dragger_vertical"), w("#mCSB_" + d.idx + "_dragger_horizontal")];
                        if (!h.length) {
                            return
                        }
                        if (d.tweenRunning) {
                            x._stop.call(null, f)
                        }
                        if (f.hasClass("mCS_disabled")) {
                            f.removeClass("mCS_disabled")
                        }
                        if (f.hasClass("mCS_destroyed")) {
                            f.removeClass("mCS_destroyed")
                        }
                        x._maxHeight.call(this);
                        x._expandContentHorizontally.call(this);
                        if (e.axis !== "y" && !e.advanced.autoExpandHorizontalScroll) {
                            h.css("width", x._contentWidth(h.children()))
                        }
                        d.overflowed = x._overflowed.call(this);
                        x._scrollbarVisibility.call(this);
                        if (e.autoDraggerLength) {
                            x._setDraggerLength.call(this)
                        }
                        x._scrollRatio.call(this);
                        x._bindEvents.call(this);
                        var c = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)];
                        if (e.axis !== "x") {
                            if (!d.overflowed[0]) {
                                x._resetContentPosition.call(this);
                                if (e.axis === "y") {
                                    x._unbindEvents.call(this)
                                } else {
                                    if (e.axis === "yx" && d.overflowed[1]) {
                                        x._scrollTo.call(this, f, c[1].toString(), {
                                            dir: "x",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                }
                            } else {
                                if (g[0].height() > g[0].parent().height()) {
                                    x._resetContentPosition.call(this)
                                } else {
                                    x._scrollTo.call(this, f, c[0].toString(), {
                                        dir: "y",
                                        dur: 0,
                                        overwrite: "none"
                                    })
                                }
                            }
                        }
                        if (e.axis !== "y") {
                            if (!d.overflowed[1]) {
                                x._resetContentPosition.call(this);
                                if (e.axis === "x") {
                                    x._unbindEvents.call(this)
                                } else {
                                    if (e.axis === "yx" && d.overflowed[0]) {
                                        x._scrollTo.call(this, f, c[0].toString(), {
                                            dir: "y",
                                            dur: 0,
                                            overwrite: "none"
                                        })
                                    }
                                }
                            } else {
                                if (g[1].width() > g[1].parent().width()) {
                                    x._resetContentPosition.call(this)
                                } else {
                                    x._scrollTo.call(this, f, c[1].toString(), {
                                        dir: "x",
                                        dur: 0,
                                        overwrite: "none"
                                    })
                                }
                            }
                        }
                        x._autoUpdate.call(this)
                    }
                })
            },
            scrollTo: function(a, b) {
                if (typeof a == "undefined" || a == null) {
                    return
                }
                var c = x._selector.call(this);
                return w(c).each(function() {
                    var g = w(this);
                    if (g.data(D)) {
                        var d = g.data(D),
                            e = d.opt,
                            f = {
                                trigger: "external",
                                scrollInertia: e.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: false,
                                callbacks: true,
                                onStart: true,
                                onUpdate: true,
                                onComplete: true
                            },
                            i = w.extend(true, {}, f, b),
                            j = x._arr.call(this, a),
                            h = i.scrollInertia < 17 ? 17 : i.scrollInertia;
                        j[0] = x._to.call(this, j[0], "y");
                        j[1] = x._to.call(this, j[1], "x");
                        if (i.moveDragger) {
                            j[0] *= d.scrollRatio.y;
                            j[1] *= d.scrollRatio.x
                        }
                        i.dur = h;
                        setTimeout(function() {
                            if (j[0] !== null && typeof j[0] !== "undefined" && e.axis !== "x" && d.overflowed[0]) {
                                i.dir = "y";
                                i.overwrite = "all";
                                x._scrollTo.call(this, g, j[0].toString(), i)
                            }
                            if (j[1] !== null && typeof j[1] !== "undefined" && e.axis !== "y" && d.overflowed[1]) {
                                i.dir = "x";
                                i.overwrite = "none";
                                x._scrollTo.call(this, g, j[1].toString(), i)
                            }
                        }, 60)
                    }
                })
            },
            stop: function() {
                var a = x._selector.call(this);
                return w(a).each(function() {
                    var b = w(this);
                    if (b.data(D)) {
                        x._stop.call(null, b)
                    }
                })
            },
            disable: function(a) {
                var b = x._selector.call(this);
                return w(b).each(function() {
                    var e = w(this);
                    if (e.data(D)) {
                        var c = e.data(D),
                            d = c.opt;
                        x._autoUpdate.call(this, "remove");
                        x._unbindEvents.call(this);
                        if (a) {
                            x._resetContentPosition.call(this)
                        }
                        x._scrollbarVisibility.call(this, true);
                        e.addClass("mCS_disabled")
                    }
                })
            },
            destroy: function() {
                var a = x._selector.call(this);
                return w(a).each(function() {
                    var e = w(this);
                    if (e.data(D)) {
                        var c = e.data(D),
                            d = c.opt,
                            g = w("#mCSB_" + c.idx),
                            f = w("#mCSB_" + c.idx + "_container"),
                            b = w(".mCSB_" + c.idx + "_scrollbar");
                        if (d.live) {
                            B(a)
                        }
                        x._autoUpdate.call(this, "remove");
                        x._unbindEvents.call(this);
                        x._resetContentPosition.call(this);
                        e.removeData(D);
                        x._delete.call(null, this.mcs);
                        b.remove();
                        g.replaceWith(f.contents());
                        e.removeClass(z + " _" + D + "_" + c.idx + " mCS-autoHide mCS-dir-rtl mCS_no_scrollbar mCS_disabled").addClass("mCS_destroyed")
                    }
                })
            }
        },
        x = {
            _selector: function() {
                return (typeof w(this) !== "object" || w(this).length < 1) ? t : this
            },
            _theme: function(c) {
                var d = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    e = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    f = ["minimal", "minimal-dark"],
                    a = ["minimal", "minimal-dark"],
                    b = ["minimal", "minimal-dark"];
                c.autoDraggerLength = w.inArray(c.theme, d) > -1 ? false : c.autoDraggerLength;
                c.autoExpandScrollbar = w.inArray(c.theme, e) > -1 ? false : c.autoExpandScrollbar;
                c.scrollButtons.enable = w.inArray(c.theme, f) > -1 ? false : c.scrollButtons.enable;
                c.autoHideScrollbar = w.inArray(c.theme, a) > -1 ? true : c.autoHideScrollbar;
                c.scrollbarPosition = w.inArray(c.theme, b) > -1 ? "outside" : c.scrollbarPosition
            },
            _findAxis: function(a) {
                return (a === "yx" || a === "xy" || a === "auto") ? "yx" : (a === "x" || a === "horizontal") ? "x" : "y"
            },
            _findScrollButtonsType: function(a) {
                return (a === "stepped" || a === "pixels" || a === "step" || a === "click") ? "stepped" : "stepless"
            },
            _pluginMarkup: function() {
                var g = w(this),
                    h = g.data(D),
                    a = h.opt,
                    l = a.autoExpandScrollbar ? " mCSB_scrollTools_onDrag_expand" : "",
                    d = ["<div id='mCSB_" + h.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + h.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_vertical" + l + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + h.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + h.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + h.idx + "_scrollbar mCS-" + a.theme + " mCSB_scrollTools_horizontal" + l + "'><div class='mCSB_draggerContainer'><div id='mCSB_" + h.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    k = a.axis === "yx" ? "mCSB_vertical_horizontal" : a.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                    i = a.axis === "yx" ? d[0] + d[1] : a.axis === "x" ? d[1] : d[0],
                    j = a.axis === "yx" ? "<div id='mCSB_" + h.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    m = a.autoHideScrollbar ? " mCS-autoHide" : "",
                    c = (a.axis !== "x" && h.langDir === "rtl") ? " mCS-dir-rtl" : "";
                if (a.setWidth) {
                    g.css("width", a.setWidth)
                }
                if (a.setHeight) {
                    g.css("height", a.setHeight)
                }
                a.setLeft = (a.axis !== "y" && h.langDir === "rtl") ? "989999px" : a.setLeft;
                g.addClass(z + " _" + D + "_" + h.idx + m + c).wrapInner("<div id='mCSB_" + h.idx + "' class='mCustomScrollBox mCS-" + a.theme + " " + k + "'><div id='mCSB_" + h.idx + "_container' class='mCSB_container' style='position:relative; top:" + a.setTop + "; left:" + a.setLeft + ";' dir=" + h.langDir + " /></div>");
                var b = w("#mCSB_" + h.idx),
                    f = w("#mCSB_" + h.idx + "_container");
                if (a.axis !== "y" && !a.advanced.autoExpandHorizontalScroll) {
                    f.css("width", x._contentWidth(f.children()))
                }
                if (a.scrollbarPosition === "outside") {
                    if (g.css("position") === "static") {
                        g.css("position", "relative")
                    }
                    g.css("overflow", "visible");
                    b.addClass("mCSB_outside").after(i)
                } else {
                    b.addClass("mCSB_inside").append(i);
                    f.wrap(j)
                }
                x._scrollButtons.call(this);
                var e = [w("#mCSB_" + h.idx + "_dragger_vertical"), w("#mCSB_" + h.idx + "_dragger_horizontal")];
                e[0].css("min-height", e[0].height());
                e[1].css("min-width", e[1].width())
            },
            _contentWidth: function(a) {
                return Math.max.apply(Math, a.map(function() {
                    return w(this).outerWidth(true)
                }).get())
            },
            _expandContentHorizontally: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    d = w("#mCSB_" + a.idx + "_container");
                if (b.advanced.autoExpandHorizontalScroll && b.axis !== "y") {
                    d.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: (Math.ceil(d[0].getBoundingClientRect().right + 0.4) - Math.floor(d[0].getBoundingClientRect().left)),
                        position: "relative"
                    }).unwrap()
                }
            },
            _scrollButtons: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    e = w(".mCSB_" + a.idx + "_scrollbar:first"),
                    d = ["<a href='#' class='mCSB_buttonUp' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonDown' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonLeft' oncontextmenu='return false;' />", "<a href='#' class='mCSB_buttonRight' oncontextmenu='return false;' />"],
                    f = [(b.axis === "x" ? d[2] : d[0]), (b.axis === "x" ? d[3] : d[1]), d[2], d[3]];
                if (b.scrollButtons.enable) {
                    e.prepend(f[0]).append(f[1]).next(".mCSB_scrollTools").prepend(f[2]).append(f[3])
                }
            },
            _maxHeight: function() {
                var d = w(this),
                    a = d.data(D),
                    b = a.opt,
                    f = w("#mCSB_" + a.idx),
                    g = d.css("max-height"),
                    e = g.indexOf("%") !== -1,
                    h = d.css("box-sizing");
                if (g !== "none") {
                    var c = e ? d.parent().height() * parseInt(g) / 100 : parseInt(g);
                    if (h === "border-box") {
                        c -= ((d.innerHeight() - d.height()) + (d.outerHeight() - d.innerHeight()))
                    }
                    f.css("max-height", Math.round(c))
                }
            },
            _setDraggerLength: function() {
                var g = w(this),
                    i = g.data(D),
                    c = w("#mCSB_" + i.idx),
                    f = w("#mCSB_" + i.idx + "_container"),
                    d = [w("#mCSB_" + i.idx + "_dragger_vertical"), w("#mCSB_" + i.idx + "_dragger_horizontal")],
                    h = [c.height() / f.outerHeight(false), c.width() / f.outerWidth(false)],
                    b = [parseInt(d[0].css("min-height")), Math.round(h[0] * d[0].parent().height()), parseInt(d[1].css("min-width")), Math.round(h[1] * d[1].parent().width())],
                    a = v && (b[1] < b[0]) ? b[0] : b[1],
                    e = v && (b[3] < b[2]) ? b[2] : b[3];
                d[0].css({
                    height: a,
                    "max-height": (d[0].parent().height() - 10)
                }).find(".mCSB_dragger_bar").css({
                    "line-height": b[0] + "px"
                });
                d[1].css({
                    width: e,
                    "max-width": (d[1].parent().width() - 10)
                })
            },
            _scrollRatio: function() {
                var c = w(this),
                    a = c.data(D),
                    f = w("#mCSB_" + a.idx),
                    e = w("#mCSB_" + a.idx + "_container"),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")],
                    b = [e.outerHeight(false) - f.height(), e.outerWidth(false) - f.width()],
                    g = [b[0] / (d[0].parent().height() - d[0].height()), b[1] / (d[1].parent().width() - d[1].width())];
                a.scrollRatio = {
                    y: g[0],
                    x: g[1]
                }
            },
            _onDragClasses: function(d, b, e) {
                var c = e ? "mCSB_dragger_onDrag_expanded" : "",
                    f = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag"],
                    a = d.closest(".mCSB_scrollTools");
                if (b === "active") {
                    d.toggleClass(f[0] + " " + c);
                    a.toggleClass(f[1]);
                    d[0]._draggable = d[0]._draggable ? 0 : 1
                } else {
                    if (!d[0]._draggable) {
                        if (b === "hide") {
                            d.removeClass(f[0]);
                            a.removeClass(f[1])
                        } else {
                            d.addClass(f[0]);
                            a.addClass(f[1])
                        }
                    }
                }
            },
            _overflowed: function() {
                var b = w(this),
                    a = b.data(D),
                    e = w("#mCSB_" + a.idx),
                    c = w("#mCSB_" + a.idx + "_container"),
                    d = a.overflowed == null ? c.height() : c.outerHeight(false),
                    f = a.overflowed == null ? c.width() : c.outerWidth(false);
                return [d > e.height(), f > e.width()]
            },
            _resetContentPosition: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    f = w("#mCSB_" + a.idx),
                    e = w("#mCSB_" + a.idx + "_container"),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")];
                x._stop(c);
                if ((b.axis !== "x" && !a.overflowed[0]) || (b.axis === "y" && a.overflowed[0])) {
                    d[0].add(e).css("top", 0)
                }
                if ((b.axis !== "y" && !a.overflowed[1]) || (b.axis === "x" && a.overflowed[1])) {
                    var g = dx = 0;
                    if (a.langDir === "rtl") {
                        g = f.width() - e.outerWidth(false);
                        dx = Math.abs(g / a.scrollRatio.x)
                    }
                    e.css("left", g);
                    d[1].css("left", dx)
                }
            },
            _bindEvents: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt;
                if (!a.bindEvents) {
                    x._draggable.call(this);
                    if (b.contentTouchScroll) {
                        x._contentDraggable.call(this)
                    }
                    if (b.mouseWheel.enable) {
                        function d() {
                            e = setTimeout(function() {
                                if (!w.event.special.mousewheel) {
                                    d()
                                } else {
                                    clearTimeout(e);
                                    x._mousewheel.call(c[0])
                                }
                            }, 1000)
                        }
                        var e;
                        d()
                    }
                    x._draggerRail.call(this);
                    x._wrapperScroll.call(this);
                    if (b.advanced.autoScrollOnFocus) {
                        x._focus.call(this)
                    }
                    if (b.scrollButtons.enable) {
                        x._buttons.call(this)
                    }
                    if (b.keyboard.enable) {
                        x._keyboard.call(this)
                    }
                    a.bindEvents = true
                }
            },
            _unbindEvents: function() {
                var c = w(this),
                    b = c.data(D),
                    f = D + "_" + b.idx,
                    a = ".mCSB_" + b.idx + "_scrollbar",
                    d = w("#mCSB_" + b.idx + ",#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper," + a + " .mCSB_draggerContainer,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal," + a + ">a"),
                    e = w("#mCSB_" + b.idx + "_container");
                if (b.bindEvents) {
                    w(r).unbind("." + f);
                    d.each(function() {
                        w(this).unbind("." + f)
                    });
                    clearTimeout(c[0]._focusTimeout);
                    x._delete.call(null, c[0]._focusTimeout);
                    clearTimeout(b.sequential.step);
                    x._delete.call(null, b.sequential.step);
                    clearTimeout(e[0].onCompleteTimeout);
                    x._delete.call(null, e[0].onCompleteTimeout);
                    b.bindEvents = false
                }
            },
            _scrollbarVisibility: function(g) {
                var d = w(this),
                    b = d.data(D),
                    c = b.opt,
                    h = w("#mCSB_" + b.idx + "_container_wrapper"),
                    f = h.length ? h : w("#mCSB_" + b.idx + "_container"),
                    a = [w("#mCSB_" + b.idx + "_scrollbar_vertical"), w("#mCSB_" + b.idx + "_scrollbar_horizontal")],
                    e = [a[0].find(".mCSB_dragger"), a[1].find(".mCSB_dragger")];
                if (c.axis !== "x") {
                    if (b.overflowed[0] && !g) {
                        a[0].add(e[0]).add(a[0].children("a")).css("display", "block");
                        f.removeClass("mCS_no_scrollbar_y mCS_y_hidden")
                    } else {
                        if (c.alwaysShowScrollbar) {
                            if (c.alwaysShowScrollbar !== 2) {
                                e[0].add(a[0].children("a")).css("display", "none")
                            }
                            f.removeClass("mCS_y_hidden")
                        } else {
                            a[0].css("display", "none");
                            f.addClass("mCS_y_hidden")
                        }
                        f.addClass("mCS_no_scrollbar_y")
                    }
                }
                if (c.axis !== "y") {
                    if (b.overflowed[1] && !g) {
                        a[1].add(e[1]).add(a[1].children("a")).css("display", "block");
                        f.removeClass("mCS_no_scrollbar_x mCS_x_hidden")
                    } else {
                        if (c.alwaysShowScrollbar) {
                            if (c.alwaysShowScrollbar !== 2) {
                                e[1].add(a[1].children("a")).css("display", "none")
                            }
                            f.removeClass("mCS_x_hidden")
                        } else {
                            a[1].css("display", "none");
                            f.addClass("mCS_x_hidden")
                        }
                        f.addClass("mCS_no_scrollbar_x")
                    }
                }
                if (!b.overflowed[0] && !b.overflowed[1]) {
                    d.addClass("mCS_no_scrollbar")
                } else {
                    d.removeClass("mCS_no_scrollbar")
                }
            },
            _coordinates: function(b) {
                var c = b.type;
                switch (c) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return [b.originalEvent.pageY, b.originalEvent.pageX];
                        break;
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var a = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0];
                        return [a.pageY, a.pageX];
                        break;
                    default:
                        return [b.pageY, b.pageX]
                }
            },
            _draggable: function() {
                var j = w(this),
                    l = j.data(D),
                    c = l.opt,
                    a = D + "_" + l.idx,
                    k = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    i = w("#mCSB_" + l.idx + "_container"),
                    h = w("#" + k[0] + ",#" + k[1]),
                    d, f, e;
                h.bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a, function(o) {
                    o.stopImmediatePropagation();
                    o.preventDefault();
                    if (!x._mouseBtnLeft(o)) {
                        return
                    }
                    q = true;
                    if (v) {
                        r.onselectstart = function() {
                            return false
                        }
                    }
                    g(false);
                    x._stop(j);
                    d = w(this);
                    var n = d.offset(),
                        m = x._coordinates(o)[0] - n.top,
                        J = x._coordinates(o)[1] - n.left,
                        H = d.height() + n.top,
                        I = d.width() + n.left;
                    if (m < H && m > 0 && J < I && J > 0) {
                        f = m;
                        e = J
                    }
                    x._onDragClasses(d, "active", c.autoExpandScrollbar)
                }).bind("touchmove." + a, function(o) {
                    o.stopImmediatePropagation();
                    o.preventDefault();
                    var n = d.offset(),
                        m = x._coordinates(o)[0] - n.top,
                        F = x._coordinates(o)[1] - n.left;
                    b(f, e, m, F)
                });
                w(r).bind("mousemove." + a + " pointermove." + a + " MSPointerMove." + a, function(o) {
                    if (d) {
                        var n = d.offset(),
                            m = x._coordinates(o)[0] - n.top,
                            F = x._coordinates(o)[1] - n.left;
                        if (f === m) {
                            return
                        }
                        b(f, e, m, F)
                    }
                }).add(h).bind("mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a, function(m) {
                    if (d) {
                        x._onDragClasses(d, "active", c.autoExpandScrollbar);
                        d = null
                    }
                    q = false;
                    if (v) {
                        r.onselectstart = null
                    }
                    g(true)
                });

                function g(o) {
                    var n = i.find("iframe");
                    if (!n.length) {
                        return
                    }
                    var m = !o ? "none" : "auto";
                    n.css("pointer-events", m)
                }

                function b(H, o, m, J) {
                    i[0].idleTimer = c.scrollInertia < 233 ? 250 : 0;
                    if (d.attr("id") === k[1]) {
                        var I = "x",
                            n = ((d[0].offsetLeft - o) + J) * l.scrollRatio.x
                    } else {
                        var I = "y",
                            n = ((d[0].offsetTop - H) + m) * l.scrollRatio.y
                    }
                    x._scrollTo(j, n.toString(), {
                        dir: I,
                        drag: true
                    })
                }
            },
            _contentDraggable: function() {
                var f = w(this),
                    c = f.data(D),
                    h = c.opt,
                    m = D + "_" + c.idx,
                    l = w("#mCSB_" + c.idx),
                    d = w("#mCSB_" + c.idx + "_container"),
                    j = [w("#mCSB_" + c.idx + "_dragger_vertical"), w("#mCSB_" + c.idx + "_dragger_horizontal")],
                    o, k, b, a, R = [],
                    P = [],
                    i, V, n, N, e, g, Q = 0,
                    T, O = h.axis === "yx" ? "none" : "all";
                d.bind("touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(F) {
                    if (!x._pointerTouch(F) || q) {
                        return
                    }
                    var E = d.offset();
                    o = x._coordinates(F)[0] - E.top;
                    k = x._coordinates(F)[1] - E.left
                }).bind("touchmove." + m + " pointermove." + m + " MSPointerMove." + m, function(J) {
                    if (!x._pointerTouch(J) || q) {
                        return
                    }
                    J.stopImmediatePropagation();
                    V = x._getTime();
                    var K = l.offset(),
                        H = x._coordinates(J)[0] - K.top,
                        F = x._coordinates(J)[1] - K.left,
                        I = "mcsLinearOut";
                    R.push(H);
                    P.push(F);
                    if (c.overflowed[0]) {
                        var L = j[0].parent().height() - j[0].height(),
                            G = ((o - H) > 0 && (H - o) > -(L * c.scrollRatio.y))
                    }
                    if (c.overflowed[1]) {
                        var M = j[1].parent().width() - j[1].width(),
                            E = ((k - F) > 0 && (F - k) > -(M * c.scrollRatio.x))
                    }
                    if (G || E) {
                        J.preventDefault()
                    }
                    g = h.axis === "yx" ? [(o - H), (k - F)] : h.axis === "x" ? [null, (k - F)] : [(o - H), null];
                    d[0].idleTimer = 250;
                    if (c.overflowed[0]) {
                        S(g[0], Q, I, "y", "all", true)
                    }
                    if (c.overflowed[1]) {
                        S(g[1], Q, I, "x", O, true)
                    }
                });
                l.bind("touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(F) {
                    if (!x._pointerTouch(F) || q) {
                        return
                    }
                    F.stopImmediatePropagation();
                    x._stop(f);
                    i = x._getTime();
                    var E = l.offset();
                    b = x._coordinates(F)[0] - E.top;
                    a = x._coordinates(F)[1] - E.left;
                    R = [];
                    P = []
                }).bind("touchend." + m + " pointerup." + m + " MSPointerUp." + m, function(L) {
                    if (!x._pointerTouch(L) || q) {
                        return
                    }
                    L.stopImmediatePropagation();
                    n = x._getTime();
                    var X = l.offset(),
                        H = x._coordinates(L)[0] - X.top,
                        F = x._coordinates(L)[1] - X.left;
                    if ((n - V) > 30) {
                        return
                    }
                    e = 1000 / (n - i);
                    var K = "mcsEaseOut",
                        J = e < 2.5,
                        E = J ? [R[R.length - 2], P[P.length - 2]] : [0, 0];
                    N = J ? [(H - E[0]), (F - E[1])] : [H - b, F - a];
                    var M = [Math.abs(N[0]), Math.abs(N[1])];
                    e = J ? [Math.abs(N[0] / 4), Math.abs(N[1] / 4)] : [e, e];
                    var G = [Math.abs(d[0].offsetTop) - (N[0] * U((M[0] / e[0]), e[0])), Math.abs(d[0].offsetLeft) - (N[1] * U((M[1] / e[1]), e[1]))];
                    g = h.axis === "yx" ? [G[0], G[1]] : h.axis === "x" ? [null, G[1]] : [G[0], null];
                    T = [(M[0] * 4) + h.scrollInertia, (M[1] * 4) + h.scrollInertia];
                    var I = parseInt(h.contentTouchScroll) || 0;
                    g[0] = M[0] > I ? g[0] : 0;
                    g[1] = M[1] > I ? g[1] : 0;
                    if (c.overflowed[0]) {
                        S(g[0], T[0], K, "y", O, false)
                    }
                    if (c.overflowed[1]) {
                        S(g[1], T[1], K, "x", O, false)
                    }
                });

                function U(E, G) {
                    var F = [G * 1.5, G * 2, G / 1.5, G / 2];
                    if (E > 90) {
                        return G > 4 ? F[0] : F[3]
                    } else {
                        if (E > 60) {
                            return G > 3 ? F[3] : F[2]
                        } else {
                            if (E > 30) {
                                return G > 8 ? F[1] : G > 6 ? F[0] : G > 4 ? G : F[2]
                            } else {
                                return G > 8 ? G : F[3]
                            }
                        }
                    }
                }

                function S(H, F, E, I, J, G) {
                    if (!H) {
                        return
                    }
                    x._scrollTo(f, H.toString(), {
                        dur: F,
                        scrollEasing: E,
                        dir: I,
                        overwrite: J,
                        drag: G
                    })
                }
            },
            _mousewheel: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    e = D + "_" + a.idx,
                    f = w("#mCSB_" + a.idx),
                    d = [w("#mCSB_" + a.idx + "_dragger_vertical"), w("#mCSB_" + a.idx + "_dragger_horizontal")];
                f.bind("mousewheel." + e, function(k, g) {
                    x._stop(c);
                    if (x._disableMousewheel(c, k.target)) {
                        return
                    }
                    var i = b.mouseWheel.deltaFactor !== "auto" ? parseInt(b.mouseWheel.deltaFactor) : (v && k.deltaFactor < 100) ? 100 : k.deltaFactor < 40 ? 40 : k.deltaFactor || 100;
                    if (b.axis === "x" || b.mouseWheel.axis === "x") {
                        var n = "x",
                            h = [Math.round(i * a.scrollRatio.x), parseInt(b.mouseWheel.scrollAmount)],
                            l = b.mouseWheel.scrollAmount !== "auto" ? h[1] : h[0] >= f.width() ? f.width() * 0.9 : h[0],
                            F = Math.abs(w("#mCSB_" + a.idx + "_container")[0].offsetLeft),
                            j = d[1][0].offsetLeft,
                            m = d[1].parent().width() - d[1].width(),
                            o = k.deltaX || k.deltaY || g
                    } else {
                        var n = "y",
                            h = [Math.round(i * a.scrollRatio.y), parseInt(b.mouseWheel.scrollAmount)],
                            l = b.mouseWheel.scrollAmount !== "auto" ? h[1] : h[0] >= f.height() ? f.height() * 0.9 : h[0],
                            F = Math.abs(w("#mCSB_" + a.idx + "_container")[0].offsetTop),
                            j = d[0][0].offsetTop,
                            m = d[0].parent().height() - d[0].height(),
                            o = k.deltaY || g
                    }
                    if ((n === "y" && !a.overflowed[0]) || (n === "x" && !a.overflowed[1])) {
                        return
                    }
                    if (b.mouseWheel.invert) {
                        o = -o
                    }
                    if (b.mouseWheel.normalizeDelta) {
                        o = o < 0 ? -1 : 1
                    }
                    if ((o > 0 && j !== 0) || (o < 0 && j !== m) || b.mouseWheel.preventDefault) {
                        k.stopImmediatePropagation();
                        k.preventDefault()
                    }
                    x._scrollTo(c, (F - (o * l)).toString(), {
                        dir: n
                    })
                })
            },
            _disableMousewheel: function(c, a) {
                var e = a.nodeName.toLowerCase(),
                    d = c.data(D).opt.mouseWheel.disableOver,
                    b = ["select", "textarea"];
                return w.inArray(e, d) > -1 && !(w.inArray(e, b) > -1 && !w(a).is(":focus"))
            },
            _draggerRail: function() {
                var c = w(this),
                    b = c.data(D),
                    e = D + "_" + b.idx,
                    d = w("#mCSB_" + b.idx + "_container"),
                    a = d.parent(),
                    f = w(".mCSB_" + b.idx + "_scrollbar .mCSB_draggerContainer");
                f.bind("touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(g) {
                    q = true
                }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function(g) {
                    q = false
                }).bind("click." + e, function(k) {
                    if (w(k.target).hasClass("mCSB_draggerContainer") || w(k.target).hasClass("mCSB_draggerRail")) {
                        x._stop(c);
                        var i = w(this),
                            l = i.find(".mCSB_dragger");
                        if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!b.overflowed[1]) {
                                return
                            }
                            var j = "x",
                                h = k.pageX > l.offset().left ? -1 : 1,
                                g = Math.abs(d[0].offsetLeft) - (h * (a.width() * 0.9))
                        } else {
                            if (!b.overflowed[0]) {
                                return
                            }
                            var j = "y",
                                h = k.pageY > l.offset().top ? -1 : 1,
                                g = Math.abs(d[0].offsetTop) - (h * (a.height() * 0.9))
                        }
                        x._scrollTo(c, g.toString(), {
                            dir: j,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            _focus: function() {
                var d = w(this),
                    b = d.data(D),
                    c = b.opt,
                    f = D + "_" + b.idx,
                    e = w("#mCSB_" + b.idx + "_container"),
                    a = e.parent();
                e.bind("focusin." + f, function(g) {
                    var h = w(r.activeElement),
                        j = e.find(".mCustomScrollBox").length,
                        i = 0;
                    if (!h.is(c.advanced.autoScrollOnFocus)) {
                        return
                    }
                    x._stop(d);
                    clearTimeout(d[0]._focusTimeout);
                    d[0]._focusTimer = j ? (i + 17) * j : 0;
                    d[0]._focusTimeout = setTimeout(function() {
                        var m = [h.offset().top - e.offset().top, h.offset().left - e.offset().left],
                            n = [e[0].offsetTop, e[0].offsetLeft],
                            l = [(n[0] + m[0] >= 0 && n[0] + m[0] < a.height() - h.outerHeight(false)), (n[1] + m[1] >= 0 && n[0] + m[1] < a.width() - h.outerWidth(false))],
                            k = (c.axis === "yx" && !l[0] && !l[1]) ? "none" : "all";
                        if (c.axis !== "x" && !l[0]) {
                            x._scrollTo(d, m[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: k,
                                dur: i
                            })
                        }
                        if (c.axis !== "y" && !l[1]) {
                            x._scrollTo(d, m[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: k,
                                dur: i
                            })
                        }
                    }, d[0]._focusTimer)
                })
            },
            _wrapperScroll: function() {
                var c = w(this),
                    b = c.data(D),
                    d = D + "_" + b.idx,
                    a = w("#mCSB_" + b.idx + "_container").parent();
                a.bind("scroll." + d, function(e) {
                    a.scrollTop(0).scrollLeft(0)
                })
            },
            _buttons: function() {
                var c = w(this),
                    a = c.data(D),
                    b = a.opt,
                    h = a.sequential,
                    f = D + "_" + a.idx,
                    d = w("#mCSB_" + a.idx + "_container"),
                    e = ".mCSB_" + a.idx + "_scrollbar",
                    g = w(e + ">a");
                g.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f + " mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f + " mouseout." + f + " pointerout." + f + " MSPointerOut." + f + " click." + f, function(j) {
                    j.preventDefault();
                    if (!x._mouseBtnLeft(j)) {
                        return
                    }
                    var k = w(this).attr("class");
                    h.type = b.scrollButtons.scrollType;
                    switch (j.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if (h.type === "stepped") {
                                return
                            }
                            q = true;
                            a.tweenRunning = false;
                            i("on", k);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if (h.type === "stepped") {
                                return
                            }
                            q = false;
                            if (h.dir) {
                                i("off", k)
                            }
                            break;
                        case "click":
                            if (h.type !== "stepped" || a.tweenRunning) {
                                return
                            }
                            i("on", k);
                            break
                    }

                    function i(l, m) {
                        h.scrollAmount = b.snapAmount || b.scrollButtons.scrollAmount;
                        x._sequentialScroll.call(this, c, l, m)
                    }
                })
            },
            _keyboard: function() {
                var g = w(this),
                    h = g.data(D),
                    b = h.opt,
                    d = h.sequential,
                    i = D + "_" + h.idx,
                    a = w("#mCSB_" + h.idx),
                    e = w("#mCSB_" + h.idx + "_container"),
                    c = e.parent(),
                    f = "input,textarea,select,datalist,keygen,[contenteditable='true']";
                a.attr("tabindex", "0").bind("blur." + i + " keydown." + i + " keyup." + i, function(l) {
                    switch (l.type) {
                        case "blur":
                            if (h.tweenRunning && d.dir) {
                                o("off", null)
                            }
                            break;
                        case "keydown":
                        case "keyup":
                            var j = l.keyCode ? l.keyCode : l.which,
                                F = "on";
                            if ((b.axis !== "x" && (j === 38 || j === 40)) || (b.axis !== "y" && (j === 37 || j === 39))) {
                                if (((j === 38 || j === 40) && !h.overflowed[0]) || ((j === 37 || j === 39) && !h.overflowed[1])) {
                                    return
                                }
                                if (l.type === "keyup") {
                                    F = "off"
                                }
                                if (!w(r.activeElement).is(f)) {
                                    l.preventDefault();
                                    l.stopImmediatePropagation();
                                    o(F, j)
                                }
                            } else {
                                if (j === 33 || j === 34) {
                                    if (h.overflowed[0] || h.overflowed[1]) {
                                        l.preventDefault();
                                        l.stopImmediatePropagation()
                                    }
                                    if (l.type === "keyup") {
                                        x._stop(g);
                                        var n = j === 34 ? -1 : 1;
                                        if (b.axis === "x" || (b.axis === "yx" && h.overflowed[1] && !h.overflowed[0])) {
                                            var m = "x",
                                                k = Math.abs(e[0].offsetLeft) - (n * (c.width() * 0.9))
                                        } else {
                                            var m = "y",
                                                k = Math.abs(e[0].offsetTop) - (n * (c.height() * 0.9))
                                        }
                                        x._scrollTo(g, k.toString(), {
                                            dir: m,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else {
                                    if (j === 35 || j === 36) {
                                        if (!w(r.activeElement).is(f)) {
                                            if (h.overflowed[0] || h.overflowed[1]) {
                                                l.preventDefault();
                                                l.stopImmediatePropagation()
                                            }
                                            if (l.type === "keyup") {
                                                if (b.axis === "x" || (b.axis === "yx" && h.overflowed[1] && !h.overflowed[0])) {
                                                    var m = "x",
                                                        k = j === 35 ? Math.abs(c.width() - e.outerWidth(false)) : 0
                                                } else {
                                                    var m = "y",
                                                        k = j === 35 ? Math.abs(c.height() - e.outerHeight(false)) : 0
                                                }
                                                x._scrollTo(g, k.toString(), {
                                                    dir: m,
                                                    scrollEasing: "mcsEaseInOut"
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                            break
                    }

                    function o(H, E) {
                        d.type = b.keyboard.scrollType;
                        d.scrollAmount = b.snapAmount || b.keyboard.scrollAmount;
                        if (d.type === "stepped" && h.tweenRunning) {
                            return
                        }
                        x._sequentialScroll.call(this, g, H, E)
                    }
                })
            },
            _sequentialScroll: function(a, h, j) {
                var f = a.data(D),
                    b = f.opt,
                    d = f.sequential,
                    e = w("#mCSB_" + f.idx + "_container"),
                    c = d.type === "stepped" ? true : false;
                switch (h) {
                    case "on":
                        d.dir = [(j === "mCSB_buttonRight" || j === "mCSB_buttonLeft" || j === 39 || j === 37 ? "x" : "y"), (j === "mCSB_buttonUp" || j === "mCSB_buttonLeft" || j === 38 || j === 37 ? -1 : 1)];
                        x._stop(a);
                        if (x._isNumeric(j) && d.type === "stepped") {
                            return
                        }
                        i(c);
                        break;
                    case "off":
                        g();
                        if (c || (f.tweenRunning && d.dir)) {
                            i(true)
                        }
                        break
                }

                function i(o) {
                    var O = d.type !== "stepped",
                        K = !o ? 1000 / 60 : O ? b.scrollInertia / 1.5 : b.scrollInertia,
                        m = !o ? 2.5 : O ? 7.5 : 40,
                        L = [Math.abs(e[0].offsetTop), Math.abs(e[0].offsetLeft)],
                        P = [f.scrollRatio.y > 10 ? 10 : f.scrollRatio.y, f.scrollRatio.x > 10 ? 10 : f.scrollRatio.x],
                        l = d.dir[0] === "x" ? L[1] + (d.dir[1] * (P[1] * m)) : L[0] + (d.dir[1] * (P[0] * m)),
                        M = d.dir[0] === "x" ? L[1] + (d.dir[1] * parseInt(d.scrollAmount)) : L[0] + (d.dir[1] * parseInt(d.scrollAmount)),
                        N = d.scrollAmount !== "auto" ? M : l,
                        k = !o ? "mcsLinear" : O ? "mcsLinearOut" : "mcsEaseInOut",
                        n = !o ? false : true;
                    if (o && K < 17) {
                        N = d.dir[0] === "x" ? L[1] : L[0]
                    }
                    x._scrollTo(a, N.toString(), {
                        dir: d.dir[0],
                        scrollEasing: k,
                        dur: K,
                        onComplete: n
                    });
                    if (o) {
                        d.dir = false;
                        return
                    }
                    clearTimeout(d.step);
                    d.step = setTimeout(function() {
                        i()
                    }, K)
                }

                function g() {
                    clearTimeout(d.step);
                    x._stop(a)
                }
            },
            _arr: function(a) {
                var b = w(this).data(D).opt,
                    c = [];
                if (typeof a === "function") {
                    a = a()
                }
                if (!(a instanceof Array)) {
                    c[0] = a.y ? a.y : a.x || b.axis === "x" ? null : a;
                    c[1] = a.x ? a.x : a.y || b.axis === "y" ? null : a
                } else {
                    c = a.length > 1 ? [a[0], a[1]] : b.axis === "x" ? [null, a[0]] : [a[0], null]
                }
                if (typeof c[0] === "function") {
                    c[0] = c[0]()
                }
                if (typeof c[1] === "function") {
                    c[1] = c[1]()
                }
                return c
            },
            _to: function(k, j) {
                if (k == null || typeof k == "undefined") {
                    return
                }
                var d = w(this),
                    e = d.data(D),
                    l = e.opt,
                    a = w("#mCSB_" + e.idx + "_container"),
                    b = a.parent(),
                    m = typeof k;
                if (!j) {
                    j = l.axis === "x" ? "x" : "y"
                }
                var c = j === "x" ? a.outerWidth(false) : a.outerHeight(false),
                    i = j === "x" ? a.offset().left : a.offset().top,
                    o = j === "x" ? a[0].offsetLeft : a[0].offsetTop,
                    g = j === "x" ? "left" : "top";
                switch (m) {
                    case "function":
                        return k();
                        break;
                    case "object":
                        if (k.nodeType) {
                            var f = j === "x" ? w(k).offset().left : w(k).offset().top
                        } else {
                            if (k.jquery) {
                                if (!k.length) {
                                    return
                                }
                                var f = j === "x" ? k.offset().left : k.offset().top
                            }
                        }
                        return f - i;
                        break;
                    case "string":
                    case "number":
                        if (x._isNumeric.call(null, k)) {
                            return Math.abs(k)
                        } else {
                            if (k.indexOf("%") !== -1) {
                                return Math.abs(c * parseInt(k) / 100)
                            } else {
                                if (k.indexOf("-=") !== -1) {
                                    return Math.abs(o - parseInt(k.split("-=")[1]))
                                } else {
                                    if (k.indexOf("+=") !== -1) {
                                        var n = (o + parseInt(k.split("+=")[1]));
                                        return n >= 0 ? 0 : Math.abs(n)
                                    } else {
                                        if (k.indexOf("px") !== -1 && x._isNumeric.call(null, k.split("px")[0])) {
                                            return Math.abs(k.split("px")[0])
                                        } else {
                                            if (k === "top" || k === "left") {
                                                return 0
                                            } else {
                                                if (k === "bottom") {
                                                    return Math.abs(b.height() - a.outerHeight(false))
                                                } else {
                                                    if (k === "right") {
                                                        return Math.abs(b.width() - a.outerWidth(false))
                                                    } else {
                                                        if (k === "first" || k === "last") {
                                                            var h = a.find(":" + k),
                                                                f = j === "x" ? w(h).offset().left : w(h).offset().top;
                                                            return f - i
                                                        } else {
                                                            if (w(k).length) {
                                                                var f = j === "x" ? w(k).offset().left : w(k).offset().top;
                                                                return f - i
                                                            } else {
                                                                a.css(g, k);
                                                                C.update.call(null, d[0]);
                                                                return
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        break
                }
            },
            _autoUpdate: function(J) {
                var k = w(this),
                    h = k.data(D),
                    a = h.opt,
                    g = w("#mCSB_" + h.idx + "_container");
                if (J) {
                    clearTimeout(g[0].autoUpdate);
                    x._delete.call(null, g[0].autoUpdate);
                    return
                }
                var l = g.parent(),
                    L = [w("#mCSB_" + h.idx + "_scrollbar_vertical"), w("#mCSB_" + h.idx + "_scrollbar_horizontal")],
                    m = function() {
                        return [L[0].is(":visible") ? L[0].outerHeight(true) : 0, L[1].is(":visible") ? L[1].outerWidth(true) : 0]
                    },
                    j = b(),
                    c, i = [g.outerHeight(false), g.outerWidth(false), l.height(), l.width(), m()[0], m()[1]],
                    d, I = f(),
                    e;
                o();

                function o() {
                    clearTimeout(g[0].autoUpdate);
                    g[0].autoUpdate = setTimeout(function() {
                        if (a.advanced.updateOnSelectorChange) {
                            c = b();
                            if (c !== j) {
                                n();
                                j = c;
                                return
                            }
                        }
                        if (a.advanced.updateOnContentResize) {
                            d = [g.outerHeight(false), g.outerWidth(false), l.height(), l.width(), m()[0], m()[1]];
                            if (d[0] !== i[0] || d[1] !== i[1] || d[2] !== i[2] || d[3] !== i[3] || d[4] !== i[4] || d[5] !== i[5]) {
                                n();
                                i = d
                            }
                        }
                        if (a.advanced.updateOnImageLoad) {
                            e = f();
                            if (e !== I) {
                                g.find("img").each(function() {
                                    K(this.src)
                                });
                                I = e
                            }
                        }
                        if (a.advanced.updateOnSelectorChange || a.advanced.updateOnContentResize || a.advanced.updateOnImageLoad) {
                            o()
                        }
                    }, 60)
                }

                function f() {
                    var E = 0;
                    if (a.advanced.updateOnImageLoad) {
                        E = g.find("img").length
                    }
                    return E
                }

                function K(E) {
                    var H = new Image();

                    function F(P, O) {
                        return function() {
                            return O.apply(P, arguments)
                        }
                    }

                    function G() {
                        this.onload = null;
                        n()
                    }
                    H.onload = F(H, G);
                    H.src = E
                }

                function b() {
                    if (a.advanced.updateOnSelectorChange === true) {
                        a.advanced.updateOnSelectorChange = "*"
                    }
                    var F = 0,
                        E = g.find(a.advanced.updateOnSelectorChange);
                    if (a.advanced.updateOnSelectorChange && E.length > 0) {
                        E.each(function() {
                            F += w(this).height() + w(this).width()
                        })
                    }
                    return F
                }

                function n() {
                    clearTimeout(g[0].autoUpdate);
                    C.update.call(null, k[0])
                }
            },
            _snapAmount: function(a, c, b) {
                return (Math.round(a / c) * c - b)
            },
            _stop: function(c) {
                var a = c.data(D),
                    b = w("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal");
                b.each(function() {
                    x._stopTween.call(this)
                })
            },
            _scrollTo: function(R, M, m) {
                var f = R.data(D),
                    o = f.opt,
                    N = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: false,
                        dur: o.scrollInertia,
                        overwrite: "all",
                        callbacks: true,
                        onStart: true,
                        onUpdate: true,
                        onComplete: true
                    },
                    m = w.extend(N, m),
                    j = [m.dur, (m.drag ? 0 : m.dur)],
                    k = w("#mCSB_" + f.idx),
                    Q = w("#mCSB_" + f.idx + "_container"),
                    b = o.callbacks.onTotalScrollOffset ? x._arr.call(R, o.callbacks.onTotalScrollOffset) : [0, 0],
                    T = o.callbacks.onTotalScrollBackOffset ? x._arr.call(R, o.callbacks.onTotalScrollBackOffset) : [0, 0];
                f.trigger = m.trigger;
                if (o.snapAmount) {
                    M = x._snapAmount(M, o.snapAmount, o.snapOffset)
                }
                switch (m.dir) {
                    case "x":
                        var g = w("#mCSB_" + f.idx + "_dragger_horizontal"),
                            c = "left",
                            O = Q[0].offsetLeft,
                            i = [k.width() - Q.outerWidth(false), g.parent().width() - g.width()],
                            P = [M, (M / f.scrollRatio.x)],
                            a = b[1],
                            e = T[1],
                            S = a > 0 ? a / f.scrollRatio.x : 0,
                            h = e > 0 ? e / f.scrollRatio.x : 0;
                        break;
                    case "y":
                        var g = w("#mCSB_" + f.idx + "_dragger_vertical"),
                            c = "top",
                            O = Q[0].offsetTop,
                            i = [k.height() - Q.outerHeight(false), g.parent().height() - g.height()],
                            P = [M, (M / f.scrollRatio.y)],
                            a = b[0],
                            e = T[0],
                            S = a > 0 ? a / f.scrollRatio.y : 0,
                            h = e > 0 ? e / f.scrollRatio.y : 0;
                        break
                }
                if (P[1] < 0) {
                    P = [0, 0]
                } else {
                    if (P[1] >= i[1]) {
                        P = [i[0], i[1]]
                    } else {
                        P[0] = -P[0]
                    }
                }
                clearTimeout(Q[0].onCompleteTimeout);
                if (!f.tweenRunning && ((O === 0 && P[0] >= 0) || (O === i[0] && P[0] <= i[0]))) {
                    return
                }
                x._tweenTo.call(null, g[0], c, Math.round(P[1]), j[1], m.scrollEasing);
                x._tweenTo.call(null, Q[0], c, Math.round(P[0]), j[0], m.scrollEasing, m.overwrite, {
                    onStart: function() {
                        if (m.callbacks && m.onStart && !f.tweenRunning) {
                            if (n("onScrollStart")) {
                                l();
                                o.callbacks.onScrollStart.call(R[0])
                            }
                            f.tweenRunning = true;
                            x._onDragClasses(g);
                            f.cbOffsets = d()
                        }
                    },
                    onUpdate: function() {
                        if (m.callbacks && m.onUpdate) {
                            if (n("whileScrolling")) {
                                l();
                                o.callbacks.whileScrolling.call(R[0])
                            }
                        }
                    },
                    onComplete: function() {
                        if (m.callbacks && m.onComplete) {
                            if (o.axis === "yx") {
                                clearTimeout(Q[0].onCompleteTimeout)
                            }
                            var E = Q[0].idleTimer || 0;
                            Q[0].onCompleteTimeout = setTimeout(function() {
                                if (n("onScroll")) {
                                    l();
                                    o.callbacks.onScroll.call(R[0])
                                }
                                if (n("onTotalScroll") && P[1] >= i[1] - S && f.cbOffsets[0]) {
                                    l();
                                    o.callbacks.onTotalScroll.call(R[0])
                                }
                                if (n("onTotalScrollBack") && P[1] <= h && f.cbOffsets[1]) {
                                    l();
                                    o.callbacks.onTotalScrollBack.call(R[0])
                                }
                                f.tweenRunning = false;
                                Q[0].idleTimer = 0;
                                x._onDragClasses(g, "hide")
                            }, E)
                        }
                    }
                });

                function n(E) {
                    return f && o.callbacks[E] && typeof o.callbacks[E] === "function"
                }

                function d() {
                    return [o.callbacks.alwaysTriggerOffsets || O >= i[0] + a, o.callbacks.alwaysTriggerOffsets || O <= -e]
                }

                function l() {
                    var F = [Q[0].offsetTop, Q[0].offsetLeft],
                        E = [g[0].offsetTop, g[0].offsetLeft],
                        H = [Q.outerHeight(false), Q.outerWidth(false)],
                        G = [k.height(), k.width()];
                    R[0].mcs = {
                        content: Q,
                        top: F[0],
                        left: F[1],
                        draggerTop: E[0],
                        draggerLeft: E[1],
                        topPct: Math.round((100 * Math.abs(F[0])) / (Math.abs(H[0]) - G[0])),
                        leftPct: Math.round((100 * Math.abs(F[1])) / (Math.abs(H[1]) - G[1])),
                        direction: m.dir
                    }
                }
            },
            _tweenTo: function(L, k, n, N, P, m, b) {
                var b = b || {},
                    h = b.onStart || function() {},
                    M = b.onUpdate || function() {},
                    g = b.onComplete || function() {},
                    a = x._getTime(),
                    e, i = 0,
                    o = L.offsetTop,
                    l = L.style;
                if (k === "left") {
                    o = L.offsetLeft
                }
                var c = n - o;
                L._mcsstop = 0;
                if (m !== "none") {
                    K()
                }
                O();

                function d() {
                    if (L._mcsstop) {
                        return
                    }
                    if (!i) {
                        h.call()
                    }
                    i = x._getTime() - a;
                    j();
                    if (i >= L._mcstime) {
                        L._mcstime = (i > L._mcstime) ? i + e - (i - L._mcstime) : i + e - 1;
                        if (L._mcstime < i + 1) {
                            L._mcstime = i + 1
                        }
                    }
                    if (L._mcstime < N) {
                        L._mcsid = _request(d)
                    } else {
                        g.call()
                    }
                }

                function j() {
                    if (N > 0) {
                        L._mcscurrVal = f(L._mcstime, o, c, N, P);
                        l[k] = Math.round(L._mcscurrVal) + "px"
                    } else {
                        l[k] = n + "px"
                    }
                    M.call()
                }

                function O() {
                    e = 1000 / 60;
                    L._mcstime = i + e;
                    _request = (!s.requestAnimationFrame) ? function(E) {
                        j();
                        return setTimeout(E, 0.01)
                    } : s.requestAnimationFrame;
                    L._mcsid = _request(d)
                }

                function K() {
                    if (L._mcsid == null) {
                        return
                    }
                    if (!s.requestAnimationFrame) {
                        clearTimeout(L._mcsid)
                    } else {
                        s.cancelAnimationFrame(L._mcsid)
                    }
                    L._mcsid = null
                }

                function f(R, E, G, H, J) {
                    switch (J) {
                        case "linear":
                        case "mcsLinear":
                            return G * R / H + E;
                            break;
                        case "mcsLinearOut":
                            R /= H;
                            R--;
                            return G * Math.sqrt(1 - R * R) + E;
                            break;
                        case "easeInOutSmooth":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * R * R + E
                            }
                            R--;
                            return -G / 2 * (R * (R - 2) - 1) + E;
                            break;
                        case "easeInOutStrong":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * Math.pow(2, 10 * (R - 1)) + E
                            }
                            R--;
                            return G / 2 * (-Math.pow(2, -10 * R) + 2) + E;
                            break;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            R /= H / 2;
                            if (R < 1) {
                                return G / 2 * R * R * R + E
                            }
                            R -= 2;
                            return G / 2 * (R * R * R + 2) + E;
                            break;
                        case "easeOutSmooth":
                            R /= H;
                            R--;
                            return -G * (R * R * R * R - 1) + E;
                            break;
                        case "easeOutStrong":
                            return G * (-Math.pow(2, -10 * R / H) + 1) + E;
                            break;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var I = (R /= H) * R,
                                F = I * R;
                            return E + G * (0.499999999999997 * F * I + -2.5 * I * I + 5.5 * F + -6.5 * I + 4 * R)
                    }
                }
            },
            _getTime: function() {
                if (s.performance && s.performance.now) {
                    return s.performance.now()
                } else {
                    if (s.performance && s.performance.webkitNow) {
                        return s.performance.webkitNow()
                    } else {
                        if (Date.now) {
                            return Date.now()
                        } else {
                            return new Date().getTime()
                        }
                    }
                }
            },
            _stopTween: function() {
                var a = this;
                if (a._mcsid == null) {
                    return
                }
                if (!s.requestAnimationFrame) {
                    clearTimeout(a._mcsid)
                } else {
                    s.cancelAnimationFrame(a._mcsid)
                }
                a._mcsid = null;
                a._mcsstop = 1
            },
            _delete: function(a) {
                try {
                    delete a
                } catch (b) {
                    a = null
                }
            },
            _mouseBtnLeft: function(a) {
                return !(a.which && a.which !== 1)
            },
            _pointerTouch: function(a) {
                var b = a.originalEvent.pointerType;
                return !(b && b !== "touch" && b !== 2)
            },
            _isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            }
        };
    w.fn[z] = function(a) {
        if (C[a]) {
            return C[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return C.init.apply(this, arguments)
            } else {
                w.error("Method " + a + " does not exist")
            }
        }
    };
    w[z] = function(a) {
        if (C[a]) {
            return C[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return C.init.apply(this, arguments)
            } else {
                w.error("Method " + a + " does not exist")
            }
        }
    };
    w[z].defaults = y;
    s[z] = true;
    w(s).load(function() {
        w(t)[z]()
    })
})(jQuery, window, document);
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(c) {
    c.extend(c.fn, {
        validate: function(d) {
            if (!this.length) {
                if (d && d.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.")
                }
                return
            }
            var e = c.data(this[0], "validator");
            if (e) {
                return e
            }
            this.attr("novalidate", "novalidate");
            e = new c.validator(d, this[0]);
            c.data(this[0], "validator", e);
            if (e.settings.onsubmit) {
                this.on("click.validate", ":submit", function(f) {
                    e.submitButton = f.currentTarget;
                    if (c(this).hasClass("cancel")) {
                        e.cancelSubmit = true
                    }
                    if (c(this).attr("formnovalidate") !== undefined) {
                        e.cancelSubmit = true
                    }
                });
                this.on("submit.validate", function(f) {
                    if (e.settings.debug) {
                        f.preventDefault()
                    }

                    function g() {
                        var i, h;
                        if (e.submitButton && (e.settings.submitHandler || e.formSubmitted)) {
                            i = c("<input type='hidden'/>").attr("name", e.submitButton.name).val(c(e.submitButton).val()).appendTo(e.currentForm)
                        }
                        if (e.settings.submitHandler) {
                            h = e.settings.submitHandler.call(e, e.currentForm, f);
                            if (i) {
                                i.remove()
                            }
                            if (h !== undefined) {
                                return h
                            }
                            return false
                        }
                        return true
                    }
                    if (e.cancelSubmit) {
                        e.cancelSubmit = false;
                        return g()
                    }
                    if (e.form()) {
                        if (e.pendingRequest) {
                            e.formSubmitted = true;
                            return false
                        }
                        return g()
                    } else {
                        e.focusInvalid();
                        return false
                    }
                })
            }
            return e
        },
        valid: function() {
            var e, d, f;
            if (c(this[0]).is("form")) {
                e = this.validate().form()
            } else {
                f = [];
                e = true;
                d = c(this[0].form).validate();
                this.each(function() {
                    e = d.element(this) && e;
                    if (!e) {
                        f = f.concat(d.errorList)
                    }
                });
                d.errorList = f
            }
            return e
        },
        rules: function(g, d) {
            var i = this[0],
                f, k, l, h, e, j;
            if (i == null) {
                return
            }
            if (!i.form && i.hasAttribute("contenteditable")) {
                i.form = this.closest("form")[0];
                i.name = this.attr("name")
            }
            if (i.form == null) {
                return
            }
            if (g) {
                f = c.data(i.form, "validator").settings;
                k = f.rules;
                l = c.validator.staticRules(i);
                switch (g) {
                    case "add":
                        c.extend(l, c.validator.normalizeRule(d));
                        delete l.messages;
                        k[i.name] = l;
                        if (d.messages) {
                            f.messages[i.name] = c.extend(f.messages[i.name], d.messages)
                        }
                        break;
                    case "remove":
                        if (!d) {
                            delete k[i.name];
                            return l
                        }
                        j = {};
                        c.each(d.split(/\s/), function(m, n) {
                            j[n] = l[n];
                            delete l[n]
                        });
                        return j
                }
            }
            h = c.validator.normalizeRules(c.extend({}, c.validator.classRules(i), c.validator.attributeRules(i), c.validator.dataRules(i), c.validator.staticRules(i)), i);
            if (h.required) {
                e = h.required;
                delete h.required;
                h = c.extend({
                    required: e
                }, h)
            }
            if (h.remote) {
                e = h.remote;
                delete h.remote;
                h = c.extend(h, {
                    remote: e
                })
            }
            return h
        }
    });
    c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(d) {
            return !c.trim("" + c(d).val())
        },
        filled: function(d) {
            var e = c(d).val();
            return e !== null && !!c.trim("" + e)
        },
        unchecked: function(d) {
            return !c(d).prop("checked")
        }
    });
    c.validator = function(d, e) {
        this.settings = c.extend(true, {}, c.validator.defaults, d);
        this.currentForm = e;
        this.init()
    };
    c.validator.format = function(d, e) {
        if (arguments.length === 1) {
            return function() {
                var f = c.makeArray(arguments);
                f.unshift(d);
                return c.validator.format.apply(this, f)
            }
        }
        if (e === undefined) {
            return d
        }
        if (arguments.length > 2 && e.constructor !== Array) {
            e = c.makeArray(arguments).slice(1)
        }
        if (e.constructor !== Array) {
            e = [e]
        }
        c.each(e, function(f, g) {
            d = d.replace(new RegExp("\\{" + f + "\\}", "g"), function() {
                return g
            })
        });
        return d
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(d) {
                this.lastActive = d;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, d, this.settings.errorClass, this.settings.validClass)
                    }
                    this.hideThese(this.errorsFor(d))
                }
            },
            onfocusout: function(d) {
                if (!this.checkable(d) && (d.name in this.submitted || !this.optional(d))) {
                    this.element(d)
                }
            },
            onkeyup: function(e, f) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                if (f.which === 9 && this.elementValue(e) === "" || c.inArray(f.keyCode, d) !== -1) {
                    return
                } else {
                    if (e.name in this.submitted || e.name in this.invalid) {
                        this.element(e)
                    }
                }
            },
            onclick: function(d) {
                if (d.name in this.submitted) {
                    this.element(d)
                } else {
                    if (d.parentNode.name in this.submitted) {
                        this.element(d.parentNode)
                    }
                }
            },
            highlight: function(f, d, e) {
                if (f.type === "radio") {
                    this.findByName(f.name).addClass(d).removeClass(e)
                } else {
                    c(f).addClass(d).removeClass(e)
                }
            },
            unhighlight: function(f, d, e) {
                if (f.type === "radio") {
                    this.findByName(f.name).removeClass(d).addClass(e)
                } else {
                    c(f).removeClass(d).addClass(e)
                }
            }
        },
        setDefaults: function(d) {
            c.extend(c.validator.defaults, d)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var d = (this.groups = {}),
                    f;
                c.each(this.settings.groups, function(g, h) {
                    if (typeof h === "string") {
                        h = h.split(/\s/)
                    }
                    c.each(h, function(j, i) {
                        d[i] = g
                    })
                });
                f = this.settings.rules;
                c.each(f, function(g, h) {
                    f[g] = c.validator.normalizeRule(h)
                });

                function e(j) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = c(this).closest("form")[0];
                        this.name = c(this).attr("name")
                    }
                    var h = c.data(this.form, "validator"),
                        g = "on" + j.type.replace(/^validate/, ""),
                        i = h.settings;
                    if (i[g] && !c(this).is(i.ignore)) {
                        i[g].call(h, this, j)
                    }
                }
                c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
                if (this.settings.invalidHandler) {
                    c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                }
            },
            form: function() {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                if (!this.valid()) {
                    c(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var d = 0, e = (this.currentElements = this.elements()); e[d]; d++) {
                    this.check(e[d])
                }
                return this.valid()
            },
            element: function(h) {
                var i = this.clean(h),
                    g = this.validationTargetFor(i),
                    f = this,
                    d = true,
                    e, j;
                if (g === undefined) {
                    delete this.invalid[i.name]
                } else {
                    this.prepareElement(g);
                    this.currentElements = c(g);
                    j = this.groups[g.name];
                    if (j) {
                        c.each(this.groups, function(l, k) {
                            if (k === j && l !== g.name) {
                                i = f.validationTargetFor(f.clean(f.findByName(l)));
                                if (i && i.name in f.invalid) {
                                    f.currentElements.push(i);
                                    d = f.check(i) && d
                                }
                            }
                        })
                    }
                    e = this.check(g) !== false;
                    d = d && e;
                    if (e) {
                        this.invalid[g.name] = false
                    } else {
                        this.invalid[g.name] = true
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers)
                    }
                    this.showErrors();
                    c(h).attr("aria-invalid", !e)
                }
                return d
            },
            showErrors: function(e) {
                if (e) {
                    var d = this;
                    c.extend(this.errorMap, e);
                    this.errorList = c.map(this.errorMap, function(g, f) {
                        return {
                            message: g,
                            element: d.findByName(f)[0]
                        }
                    });
                    this.successList = c.grep(this.successList, function(f) {
                        return !(f.name in e)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function() {
                if (c.fn.resetForm) {
                    c(this.currentForm).resetForm()
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var d = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(d)
            },
            resetElements: function(e) {
                var d;
                if (this.settings.unhighlight) {
                    for (d = 0; e[d]; d++) {
                        this.settings.unhighlight.call(this, e[d], this.settings.errorClass, "");
                        this.findByName(e[d].name).removeClass(this.settings.validClass)
                    }
                } else {
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(f) {
                var e = 0,
                    d;
                for (d in f) {
                    if (f[d] !== undefined && f[d] !== null && f[d] !== false) {
                        e++
                    }
                }
                return e
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(d) {
                d.not(this.containers).text("");
                this.addWrapper(d).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (d) {}
                }
            },
            findLastActive: function() {
                var d = this.lastActive;
                return d && c.grep(this.errorList, function(e) {
                    return e.element.name === d.name
                }).length === 1 && d
            },
            elements: function() {
                var e = this,
                    d = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var f = this.name || c(this).attr("name");
                    if (!f && e.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.hasAttribute("contenteditable")) {
                        this.form = c(this).closest("form")[0];
                        this.name = f
                    }
                    if (f in d || !e.objectLength(c(this).rules())) {
                        return false
                    }
                    d[f] = true;
                    return true
                })
            },
            clean: function(d) {
                return c(d)[0]
            },
            errors: function() {
                var d = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + d, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([])
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(d) {
                this.reset();
                this.toHide = this.errorsFor(d)
            },
            elementValue: function(f) {
                var e = c(f),
                    g = f.type,
                    h, d;
                if (g === "radio" || g === "checkbox") {
                    return this.findByName(f.name).filter(":checked").val()
                } else {
                    if (g === "number" && typeof f.validity !== "undefined") {
                        return f.validity.badInput ? "NaN" : e.val()
                    }
                }
                if (f.hasAttribute("contenteditable")) {
                    h = e.text()
                } else {
                    h = e.val()
                }
                if (g === "file") {
                    if (h.substr(0, 12) === "C:\\fakepath\\") {
                        return h.substr(12)
                    }
                    d = h.lastIndexOf("/");
                    if (d >= 0) {
                        return h.substr(d + 1)
                    }
                    d = h.lastIndexOf("\\");
                    if (d >= 0) {
                        return h.substr(d + 1)
                    }
                    return h
                }
                if (typeof h === "string") {
                    return h.replace(/\r/g, "")
                }
                return h
            },
            check: function(h) {
                h = this.validationTargetFor(this.clean(h));
                var l = c(h).rules(),
                    j = c.map(l, function(o, e) {
                        return e
                    }).length,
                    m = false,
                    f = this.elementValue(h),
                    n, d, k, g;
                if (typeof l.normalizer === "function") {
                    g = l.normalizer
                } else {
                    if (typeof this.settings.normalizer === "function") {
                        g = this.settings.normalizer
                    }
                }
                if (g) {
                    f = g.call(h, f);
                    if (typeof f !== "string") {
                        throw new TypeError("The normalizer should return a string value.")
                    }
                    delete l.normalizer
                }
                for (d in l) {
                    k = {
                        method: d,
                        parameters: l[d]
                    };
                    try {
                        n = c.validator.methods[d].call(this, f, h, k.parameters);
                        if (n === "dependency-mismatch" && j === 1) {
                            m = true;
                            continue
                        }
                        m = false;
                        if (n === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(h));
                            return
                        }
                        if (!n) {
                            this.formatAndAdd(h, k);
                            return false
                        }
                    } catch (i) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + h.id + ", check the '" + k.method + "' method.", i)
                        }
                        if (i instanceof TypeError) {
                            i.message += ".  Exception occurred when checking element " + h.id + ", check the '" + k.method + "' method."
                        }
                        throw i
                    }
                }
                if (m) {
                    return
                }
                if (this.objectLength(l)) {
                    this.successList.push(h)
                }
                return true
            },
            customDataMessage: function(d, e) {
                return c(d).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(d).data("msg")
            },
            customMessage: function(e, f) {
                var d = this.settings.messages[e];
                return d && (d.constructor === String ? d : d[f])
            },
            findDefined: function() {
                for (var d = 0; d < arguments.length; d++) {
                    if (arguments[d] !== undefined) {
                        return arguments[d]
                    }
                }
                return undefined
            },
            defaultMessage: function(e, g) {
                if (typeof g === "string") {
                    g = {
                        method: g
                    }
                }
                var f = this.findDefined(this.customMessage(e.name, g.method), this.customDataMessage(e, g.method), !this.settings.ignoreTitle && e.title || undefined, c.validator.messages[g.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    d = /\$?\{(\d+)\}/g;
                if (typeof f === "function") {
                    f = f.call(this, g.parameters, e)
                } else {
                    if (d.test(f)) {
                        f = c.validator.format(f.replace(d, "{$1}"), g.parameters)
                    }
                }
                return f
            },
            formatAndAdd: function(d, f) {
                var e = this.defaultMessage(d, f);
                this.errorList.push({
                    message: e,
                    element: d,
                    method: f.method
                });
                this.errorMap[d.name] = e;
                this.submitted[d.name] = e
            },
            addWrapper: function(d) {
                if (this.settings.wrapper) {
                    d = d.add(d.parent(this.settings.wrapper))
                }
                return d
            },
            defaultShowErrors: function() {
                var e, f, d;
                for (e = 0; this.errorList[e]; e++) {
                    d = this.errorList[e];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, d.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(d.element, d.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (e = 0; this.successList[e]; e++) {
                        this.showLabel(this.successList[e])
                    }
                }
                if (this.settings.unhighlight) {
                    for (e = 0, f = this.validElements(); f[e]; e++) {
                        this.settings.unhighlight.call(this, f[e], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(g, l) {
                var e, j, f, k, h = this.errorsFor(g),
                    i = this.idOrName(g),
                    d = c(g).attr("aria-describedby");
                if (h.length) {
                    h.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    h.html(l)
                } else {
                    h = c("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(l || "");
                    e = h;
                    if (this.settings.wrapper) {
                        e = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(e)
                    } else {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement.call(this, e, c(g))
                        } else {
                            e.insertAfter(g)
                        }
                    }
                    if (h.is("label")) {
                        h.attr("for", i)
                    } else {
                        if (h.parents("label[for='" + this.escapeCssMeta(i) + "']").length === 0) {
                            f = h.attr("id");
                            if (!d) {
                                d = f
                            } else {
                                if (!d.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b"))) {
                                    d += " " + f
                                }
                            }
                            c(g).attr("aria-describedby", d);
                            j = this.groups[g.name];
                            if (j) {
                                k = this;
                                c.each(k.groups, function(n, m) {
                                    if (m === j) {
                                        c("[name='" + k.escapeCssMeta(n) + "']", k.currentForm).attr("aria-describedby", h.attr("id"))
                                    }
                                })
                            }
                        }
                    }
                }
                if (!l && this.settings.success) {
                    h.text("");
                    if (typeof this.settings.success === "string") {
                        h.addClass(this.settings.success)
                    } else {
                        this.settings.success(h, g)
                    }
                }
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(f) {
                var e = this.escapeCssMeta(this.idOrName(f)),
                    g = c(f).attr("aria-describedby"),
                    d = "label[for='" + e + "'], label[for='" + e + "'] *";
                if (g) {
                    d = d + ", #" + this.escapeCssMeta(g).replace(/\s+/g, ", #")
                }
                return this.errors().filter(d)
            },
            escapeCssMeta: function(d) {
                return d.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(d) {
                return this.groups[d.name] || (this.checkable(d) ? d.name : d.id || d.name)
            },
            validationTargetFor: function(d) {
                if (this.checkable(d)) {
                    d = this.findByName(d.name)
                }
                return c(d).not(this.settings.ignore)[0]
            },
            checkable: function(d) {
                return (/radio|checkbox/i).test(d.type)
            },
            findByName: function(d) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(d) + "']")
            },
            getLength: function(e, d) {
                switch (d.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", d).length;
                    case "input":
                        if (this.checkable(d)) {
                            return this.findByName(d.name).filter(":checked").length
                        }
                }
                return e.length
            },
            depend: function(e, d) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, d) : true
            },
            dependTypes: {
                "boolean": function(d) {
                    return d
                },
                string: function(e, d) {
                    return !!c(e, d.form).length
                },
                "function": function(e, d) {
                    return e(d)
                }
            },
            optional: function(d) {
                var e = this.elementValue(d);
                return !c.validator.methods.required.call(this, e, d) && "dependency-mismatch"
            },
            startRequest: function(d) {
                if (!this.pending[d.name]) {
                    this.pendingRequest++;
                    c(d).addClass(this.settings.pendingClass);
                    this.pending[d.name] = true
                }
            },
            stopRequest: function(d, e) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[d.name];
                c(d).removeClass(this.settings.pendingClass);
                if (e && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    if (this.submitButton) {
                        c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove()
                    }
                    this.formSubmitted = false
                } else {
                    if (!e && this.pendingRequest === 0 && this.formSubmitted) {
                        c(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function(d, e) {
                e = typeof e === "string" && e || "remote";
                return c.data(d, "previousValue") || c.data(d, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(d, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm();
                c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(d, e) {
            if (d.constructor === String) {
                this.classRuleSettings[d] = e
            } else {
                c.extend(this.classRuleSettings, d)
            }
        },
        classRules: function(e) {
            var f = {},
                d = c(e).attr("class");
            if (d) {
                c.each(d.split(" "), function() {
                    if (this in c.validator.classRuleSettings) {
                        c.extend(f, c.validator.classRuleSettings[this])
                    }
                })
            }
            return f
        },
        normalizeAttributeRule: function(f, d, g, e) {
            if (/min|max|step/.test(g) && (d === null || /number|range|text/.test(d))) {
                e = Number(e);
                if (isNaN(e)) {
                    e = undefined
                }
            }
            if (e || e === 0) {
                f[g] = e
            } else {
                if (d === g && d !== "range") {
                    f[g] = true
                }
            }
        },
        attributeRules: function(e) {
            var h = {},
                d = c(e),
                f = e.getAttribute("type"),
                i, g;
            for (i in c.validator.methods) {
                if (i === "required") {
                    g = e.getAttribute(i);
                    if (g === "") {
                        g = true
                    }
                    g = !!g
                } else {
                    g = d.attr(i)
                }
                this.normalizeAttributeRule(h, f, i, g)
            }
            if (h.maxlength && /-1|2147483647|524288/.test(h.maxlength)) {
                delete h.maxlength
            }
            return h
        },
        dataRules: function(e) {
            var h = {},
                d = c(e),
                f = e.getAttribute("type"),
                i, g;
            for (i in c.validator.methods) {
                g = d.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase());
                this.normalizeAttributeRule(h, f, i, g)
            }
            return h
        },
        staticRules: function(e) {
            var f = {},
                d = c.data(e.form, "validator");
            if (d.settings.rules) {
                f = c.validator.normalizeRule(d.settings.rules[e.name]) || {}
            }
            return f
        },
        normalizeRules: function(e, d) {
            c.each(e, function(h, g) {
                if (g === false) {
                    delete e[h];
                    return
                }
                if (g.param || g.depends) {
                    var f = true;
                    switch (typeof g.depends) {
                        case "string":
                            f = !!c(g.depends, d.form).length;
                            break;
                        case "function":
                            f = g.depends.call(d, d);
                            break
                    }
                    if (f) {
                        e[h] = g.param !== undefined ? g.param : true
                    } else {
                        c.data(d.form, "validator").resetElements(c(d));
                        delete e[h]
                    }
                }
            });
            c.each(e, function(f, g) {
                e[f] = c.isFunction(g) && f !== "normalizer" ? g(d) : g
            });
            c.each(["minlength", "maxlength"], function() {
                if (e[this]) {
                    e[this] = Number(e[this])
                }
            });
            c.each(["rangelength", "range"], function() {
                var f;
                if (e[this]) {
                    if (c.isArray(e[this])) {
                        e[this] = [Number(e[this][0]), Number(e[this][1])]
                    } else {
                        if (typeof e[this] === "string") {
                            f = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            e[this] = [Number(f[0]), Number(f[1])]
                        }
                    }
                }
            });
            if (c.validator.autoCreateRanges) {
                if (e.min != null && e.max != null) {
                    e.range = [e.min, e.max];
                    delete e.min;
                    delete e.max
                }
                if (e.minlength != null && e.maxlength != null) {
                    e.rangelength = [e.minlength, e.maxlength];
                    delete e.minlength;
                    delete e.maxlength
                }
            }
            return e
        },
        normalizeRule: function(e) {
            if (typeof e === "string") {
                var d = {};
                c.each(e.split(/\s/), function() {
                    d[this] = true
                });
                e = d
            }
            return e
        },
        addMethod: function(d, f, e) {
            c.validator.methods[d] = f;
            c.validator.messages[d] = e !== undefined ? e : c.validator.messages[d];
            if (f.length < 3) {
                c.validator.addClassRules(d, c.validator.normalizeRule(d))
            }
        },
        methods: {
            required: function(e, d, g) {
                if (!this.depend(g, d)) {
                    return "dependency-mismatch"
                }
                if (d.nodeName.toLowerCase() === "select") {
                    var f = c(d).val();
                    return f && f.length > 0
                }
                if (this.checkable(d)) {
                    return this.getLength(e, d) > 0
                }
                return e.length > 0
            },
            email: function(e, d) {
                return this.optional(d) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, d) {
                return this.optional(d) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: function(e, d) {
                return this.optional(d) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, d) {
                return this.optional(d) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, d) {
                return this.optional(d) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, d) {
                return this.optional(d) || /^\d+$/.test(e)
            },
            minlength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || e >= g
            },
            maxlength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || e <= g
            },
            rangelength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || (e >= g[0] && e <= g[1])
            },
            min: function(e, d, f) {
                return this.optional(d) || e >= f
            },
            max: function(e, d, f) {
                return this.optional(d) || e <= f
            },
            range: function(e, d, f) {
                return this.optional(d) || (e >= f[0] && e <= f[1])
            },
            step: function(n, h, f) {
                var m = c(h).attr("type"),
                    l = "Step attribute on input type " + m + " is not supported.",
                    k = ["text", "number", "range"],
                    o = new RegExp("\\b" + m + "\\b"),
                    i = m && !o.test(k.join()),
                    g = function(q) {
                        var p = ("" + q).match(/(?:\.(\d+))?$/);
                        if (!p) {
                            return 0
                        }
                        return p[1] ? p[1].length : 0
                    },
                    j = function(p) {
                        return Math.round(p * Math.pow(10, e))
                    },
                    d = true,
                    e;
                if (i) {
                    throw new Error(l)
                }
                e = g(f);
                if (g(n) > e || j(n) % j(f) !== 0) {
                    d = false
                }
                return this.optional(h) || d
            },
            equalTo: function(e, d, g) {
                var f = c(g);
                if (this.settings.onfocusout && f.not(".validate-equalTo-blur").length) {
                    f.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        c(d).valid()
                    })
                }
                return e === f.val()
            },
            remote: function(i, e, j, k) {
                if (this.optional(e)) {
                    return "dependency-mismatch"
                }
                k = typeof k === "string" && k || "remote";
                var f = this.previousValue(e, k),
                    d, h, g;
                if (!this.settings.messages[e.name]) {
                    this.settings.messages[e.name] = {}
                }
                f.originalMessage = f.originalMessage || this.settings.messages[e.name][k];
                this.settings.messages[e.name][k] = f.message;
                j = typeof j === "string" && {
                    url: j
                } || j;
                g = c.param(c.extend({
                    data: i
                }, j.data));
                if (f.old === g) {
                    return f.valid
                }
                f.old = g;
                d = this;
                this.startRequest(e);
                h = {};
                h[e.name] = i;
                c.ajax(c.extend(true, {
                    mode: "abort",
                    port: "validate" + e.name,
                    dataType: "json",
                    data: h,
                    context: d.currentForm,
                    success: function(m) {
                        var o = m === true || m === "true",
                            p, n, l;
                        d.settings.messages[e.name][k] = f.originalMessage;
                        if (o) {
                            l = d.formSubmitted;
                            d.resetInternals();
                            d.toHide = d.errorsFor(e);
                            d.formSubmitted = l;
                            d.successList.push(e);
                            d.invalid[e.name] = false;
                            d.showErrors()
                        } else {
                            p = {};
                            n = m || d.defaultMessage(e, {
                                method: k,
                                parameters: i
                            });
                            p[e.name] = f.message = n;
                            d.invalid[e.name] = true;
                            d.showErrors(p)
                        }
                        f.valid = o;
                        d.stopRequest(e, o)
                    }
                }, j));
                return "pending"
            }
        }
    });
    var a = {},
        b;
    if (c.ajaxPrefilter) {
        c.ajaxPrefilter(function(f, e, g) {
            var d = f.port;
            if (f.mode === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = g
            }
        })
    } else {
        b = c.ajax;
        c.ajax = function(e) {
            var f = ("mode" in e ? e : c.ajaxSettings).mode,
                d = ("port" in e ? e : c.ajaxSettings).port;
            if (f === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = b.apply(this, arguments);
                return a[d]
            }
            return b.apply(this, arguments)
        }
    }
    return c
}));
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(c) {
    c.extend(c.fn, {
        validate: function(d) {
            if (!this.length) {
                if (d && d.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.")
                }
                return
            }
            var e = c.data(this[0], "validator");
            if (e) {
                return e
            }
            this.attr("novalidate", "novalidate");
            e = new c.validator(d, this[0]);
            c.data(this[0], "validator", e);
            if (e.settings.onsubmit) {
                this.on("click.validate", ":submit", function(f) {
                    e.submitButton = f.currentTarget;
                    if (c(this).hasClass("cancel")) {
                        e.cancelSubmit = true
                    }
                    if (c(this).attr("formnovalidate") !== undefined) {
                        e.cancelSubmit = true
                    }
                });
                this.on("submit.validate", function(f) {
                    if (e.settings.debug) {
                        f.preventDefault()
                    }

                    function g() {
                        var i, h;
                        if (e.submitButton && (e.settings.submitHandler || e.formSubmitted)) {
                            i = c("<input type='hidden'/>").attr("name", e.submitButton.name).val(c(e.submitButton).val()).appendTo(e.currentForm)
                        }
                        if (e.settings.submitHandler) {
                            h = e.settings.submitHandler.call(e, e.currentForm, f);
                            if (i) {
                                i.remove()
                            }
                            if (h !== undefined) {
                                return h
                            }
                            return false
                        }
                        return true
                    }
                    if (e.cancelSubmit) {
                        e.cancelSubmit = false;
                        return g()
                    }
                    if (e.form()) {
                        if (e.pendingRequest) {
                            e.formSubmitted = true;
                            return false
                        }
                        return g()
                    } else {
                        e.focusInvalid();
                        return false
                    }
                })
            }
            return e
        },
        valid: function() {
            var e, d, f;
            if (c(this[0]).is("form")) {
                e = this.validate().form()
            } else {
                f = [];
                e = true;
                d = c(this[0].form).validate();
                this.each(function() {
                    e = d.element(this) && e;
                    if (!e) {
                        f = f.concat(d.errorList)
                    }
                });
                d.errorList = f
            }
            return e
        },
        rules: function(g, d) {
            var i = this[0],
                f, k, l, h, e, j;
            if (i == null) {
                return
            }
            if (!i.form && i.hasAttribute("contenteditable")) {
                i.form = this.closest("form")[0];
                i.name = this.attr("name")
            }
            if (i.form == null) {
                return
            }
            if (g) {
                f = c.data(i.form, "validator").settings;
                k = f.rules;
                l = c.validator.staticRules(i);
                switch (g) {
                    case "add":
                        c.extend(l, c.validator.normalizeRule(d));
                        delete l.messages;
                        k[i.name] = l;
                        if (d.messages) {
                            f.messages[i.name] = c.extend(f.messages[i.name], d.messages)
                        }
                        break;
                    case "remove":
                        if (!d) {
                            delete k[i.name];
                            return l
                        }
                        j = {};
                        c.each(d.split(/\s/), function(m, n) {
                            j[n] = l[n];
                            delete l[n]
                        });
                        return j
                }
            }
            h = c.validator.normalizeRules(c.extend({}, c.validator.classRules(i), c.validator.attributeRules(i), c.validator.dataRules(i), c.validator.staticRules(i)), i);
            if (h.required) {
                e = h.required;
                delete h.required;
                h = c.extend({
                    required: e
                }, h)
            }
            if (h.remote) {
                e = h.remote;
                delete h.remote;
                h = c.extend(h, {
                    remote: e
                })
            }
            return h
        }
    });
    c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(d) {
            return !c.trim("" + c(d).val())
        },
        filled: function(d) {
            var e = c(d).val();
            return e !== null && !!c.trim("" + e)
        },
        unchecked: function(d) {
            return !c(d).prop("checked")
        }
    });
    c.validator = function(d, e) {
        this.settings = c.extend(true, {}, c.validator.defaults, d);
        this.currentForm = e;
        this.init()
    };
    c.validator.format = function(d, e) {
        if (arguments.length === 1) {
            return function() {
                var f = c.makeArray(arguments);
                f.unshift(d);
                return c.validator.format.apply(this, f)
            }
        }
        if (e === undefined) {
            return d
        }
        if (arguments.length > 2 && e.constructor !== Array) {
            e = c.makeArray(arguments).slice(1)
        }
        if (e.constructor !== Array) {
            e = [e]
        }
        c.each(e, function(f, g) {
            d = d.replace(new RegExp("\\{" + f + "\\}", "g"), function() {
                return g
            })
        });
        return d
    };
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(d) {
                this.lastActive = d;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, d, this.settings.errorClass, this.settings.validClass)
                    }
                    this.hideThese(this.errorsFor(d))
                }
            },
            onfocusout: function(d) {
                if (!this.checkable(d) && (d.name in this.submitted || !this.optional(d))) {
                    this.element(d)
                }
            },
            onkeyup: function(e, f) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                if (f.which === 9 && this.elementValue(e) === "" || c.inArray(f.keyCode, d) !== -1) {
                    return
                } else {
                    if (e.name in this.submitted || e.name in this.invalid) {
                        this.element(e)
                    }
                }
            },
            onclick: function(d) {
                if (d.name in this.submitted) {
                    this.element(d)
                } else {
                    if (d.parentNode.name in this.submitted) {
                        this.element(d.parentNode)
                    }
                }
            },
            highlight: function(f, d, e) {
                if (f.type === "radio") {
                    this.findByName(f.name).addClass(d).removeClass(e)
                } else {
                    c(f).addClass(d).removeClass(e)
                }
            },
            unhighlight: function(f, d, e) {
                if (f.type === "radio") {
                    this.findByName(f.name).removeClass(d).addClass(e)
                } else {
                    c(f).removeClass(d).addClass(e)
                }
            }
        },
        setDefaults: function(d) {
            c.extend(c.validator.defaults, d)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = c(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm);
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var d = (this.groups = {}),
                    f;
                c.each(this.settings.groups, function(g, h) {
                    if (typeof h === "string") {
                        h = h.split(/\s/)
                    }
                    c.each(h, function(j, i) {
                        d[i] = g
                    })
                });
                f = this.settings.rules;
                c.each(f, function(g, h) {
                    f[g] = c.validator.normalizeRule(h)
                });

                function e(j) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = c(this).closest("form")[0];
                        this.name = c(this).attr("name")
                    }
                    var h = c.data(this.form, "validator"),
                        g = "on" + j.type.replace(/^validate/, ""),
                        i = h.settings;
                    if (i[g] && !c(this).is(i.ignore)) {
                        i[g].call(h, this, j)
                    }
                }
                c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e);
                if (this.settings.invalidHandler) {
                    c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                }
            },
            form: function() {
                this.checkForm();
                c.extend(this.submitted, this.errorMap);
                this.invalid = c.extend({}, this.errorMap);
                if (!this.valid()) {
                    c(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var d = 0, e = (this.currentElements = this.elements()); e[d]; d++) {
                    this.check(e[d])
                }
                return this.valid()
            },
            element: function(h) {
                var i = this.clean(h),
                    g = this.validationTargetFor(i),
                    f = this,
                    d = true,
                    e, j;
                if (g === undefined) {
                    delete this.invalid[i.name]
                } else {
                    this.prepareElement(g);
                    this.currentElements = c(g);
                    j = this.groups[g.name];
                    if (j) {
                        c.each(this.groups, function(l, k) {
                            if (k === j && l !== g.name) {
                                i = f.validationTargetFor(f.clean(f.findByName(l)));
                                if (i && i.name in f.invalid) {
                                    f.currentElements.push(i);
                                    d = f.check(i) && d
                                }
                            }
                        })
                    }
                    e = this.check(g) !== false;
                    d = d && e;
                    if (e) {
                        this.invalid[g.name] = false
                    } else {
                        this.invalid[g.name] = true
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers)
                    }
                    this.showErrors();
                    c(h).attr("aria-invalid", !e)
                }
                return d
            },
            showErrors: function(e) {
                if (e) {
                    var d = this;
                    c.extend(this.errorMap, e);
                    this.errorList = c.map(this.errorMap, function(g, f) {
                        return {
                            message: g,
                            element: d.findByName(f)[0]
                        }
                    });
                    this.successList = c.grep(this.successList, function(f) {
                        return !(f.name in e)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function() {
                if (c.fn.resetForm) {
                    c(this.currentForm).resetForm()
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var d = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(d)
            },
            resetElements: function(e) {
                var d;
                if (this.settings.unhighlight) {
                    for (d = 0; e[d]; d++) {
                        this.settings.unhighlight.call(this, e[d], this.settings.errorClass, "");
                        this.findByName(e[d].name).removeClass(this.settings.validClass)
                    }
                } else {
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(f) {
                var e = 0,
                    d;
                for (d in f) {
                    if (f[d] !== undefined && f[d] !== null && f[d] !== false) {
                        e++
                    }
                }
                return e
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(d) {
                d.not(this.containers).text("");
                this.addWrapper(d).hide()
            },
            valid: function() {
                return this.size() === 0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (d) {}
                }
            },
            findLastActive: function() {
                var d = this.lastActive;
                return d && c.grep(this.errorList, function(e) {
                    return e.element.name === d.name
                }).length === 1 && d
            },
            elements: function() {
                var e = this,
                    d = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var f = this.name || c(this).attr("name");
                    if (!f && e.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.hasAttribute("contenteditable")) {
                        this.form = c(this).closest("form")[0];
                        this.name = f
                    }
                    if (f in d || !e.objectLength(c(this).rules())) {
                        return false
                    }
                    d[f] = true;
                    return true
                })
            },
            clean: function(d) {
                return c(d)[0]
            },
            errors: function() {
                var d = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + d, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = c([]);
                this.toHide = c([])
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(d) {
                this.reset();
                this.toHide = this.errorsFor(d)
            },
            elementValue: function(f) {
                var e = c(f),
                    g = f.type,
                    h, d;
                if (g === "radio" || g === "checkbox") {
                    return this.findByName(f.name).filter(":checked").val()
                } else {
                    if (g === "number" && typeof f.validity !== "undefined") {
                        return f.validity.badInput ? "NaN" : e.val()
                    }
                }
                if (f.hasAttribute("contenteditable")) {
                    h = e.text()
                } else {
                    h = e.val()
                }
                if (g === "file") {
                    if (h.substr(0, 12) === "C:\\fakepath\\") {
                        return h.substr(12)
                    }
                    d = h.lastIndexOf("/");
                    if (d >= 0) {
                        return h.substr(d + 1)
                    }
                    d = h.lastIndexOf("\\");
                    if (d >= 0) {
                        return h.substr(d + 1)
                    }
                    return h
                }
                if (typeof h === "string") {
                    return h.replace(/\r/g, "")
                }
                return h
            },
            check: function(h) {
                h = this.validationTargetFor(this.clean(h));
                var l = c(h).rules(),
                    j = c.map(l, function(o, e) {
                        return e
                    }).length,
                    m = false,
                    f = this.elementValue(h),
                    n, d, k, g;
                if (typeof l.normalizer === "function") {
                    g = l.normalizer
                } else {
                    if (typeof this.settings.normalizer === "function") {
                        g = this.settings.normalizer
                    }
                }
                if (g) {
                    f = g.call(h, f);
                    if (typeof f !== "string") {
                        throw new TypeError("The normalizer should return a string value.")
                    }
                    delete l.normalizer
                }
                for (d in l) {
                    k = {
                        method: d,
                        parameters: l[d]
                    };
                    try {
                        n = c.validator.methods[d].call(this, f, h, k.parameters);
                        if (n === "dependency-mismatch" && j === 1) {
                            m = true;
                            continue
                        }
                        m = false;
                        if (n === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(h));
                            return
                        }
                        if (!n) {
                            this.formatAndAdd(h, k);
                            return false
                        }
                    } catch (i) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + h.id + ", check the '" + k.method + "' method.", i)
                        }
                        if (i instanceof TypeError) {
                            i.message += ".  Exception occurred when checking element " + h.id + ", check the '" + k.method + "' method."
                        }
                        throw i
                    }
                }
                if (m) {
                    return
                }
                if (this.objectLength(l)) {
                    this.successList.push(h)
                }
                return true
            },
            customDataMessage: function(d, e) {
                return c(d).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(d).data("msg")
            },
            customMessage: function(e, f) {
                var d = this.settings.messages[e];
                return d && (d.constructor === String ? d : d[f])
            },
            findDefined: function() {
                for (var d = 0; d < arguments.length; d++) {
                    if (arguments[d] !== undefined) {
                        return arguments[d]
                    }
                }
                return undefined
            },
            defaultMessage: function(e, g) {
                if (typeof g === "string") {
                    g = {
                        method: g
                    }
                }
                var f = this.findDefined(this.customMessage(e.name, g.method), this.customDataMessage(e, g.method), !this.settings.ignoreTitle && e.title || undefined, c.validator.messages[g.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    d = /\$?\{(\d+)\}/g;
                if (typeof f === "function") {
                    f = f.call(this, g.parameters, e)
                } else {
                    if (d.test(f)) {
                        f = c.validator.format(f.replace(d, "{$1}"), g.parameters)
                    }
                }
                return f
            },
            formatAndAdd: function(d, f) {
                var e = this.defaultMessage(d, f);
                this.errorList.push({
                    message: e,
                    element: d,
                    method: f.method
                });
                this.errorMap[d.name] = e;
                this.submitted[d.name] = e
            },
            addWrapper: function(d) {
                if (this.settings.wrapper) {
                    d = d.add(d.parent(this.settings.wrapper))
                }
                return d
            },
            defaultShowErrors: function() {
                var e, f, d;
                for (e = 0; this.errorList[e]; e++) {
                    d = this.errorList[e];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, d.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(d.element, d.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (e = 0; this.successList[e]; e++) {
                        this.showLabel(this.successList[e])
                    }
                }
                if (this.settings.unhighlight) {
                    for (e = 0, f = this.validElements(); f[e]; e++) {
                        this.settings.unhighlight.call(this, f[e], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(g, l) {
                var e, j, f, k, h = this.errorsFor(g),
                    i = this.idOrName(g),
                    d = c(g).attr("aria-describedby");
                if (h.length) {
                    h.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    h.html(l)
                } else {
                    h = c("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(l || "");
                    e = h;
                    if (this.settings.wrapper) {
                        e = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(e)
                    } else {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement.call(this, e, c(g))
                        } else {
                            e.insertAfter(g)
                        }
                    }
                    if (h.is("label")) {
                        h.attr("for", i)
                    } else {
                        if (h.parents("label[for='" + this.escapeCssMeta(i) + "']").length === 0) {
                            f = h.attr("id");
                            if (!d) {
                                d = f
                            } else {
                                if (!d.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b"))) {
                                    d += " " + f
                                }
                            }
                            c(g).attr("aria-describedby", d);
                            j = this.groups[g.name];
                            if (j) {
                                k = this;
                                c.each(k.groups, function(n, m) {
                                    if (m === j) {
                                        c("[name='" + k.escapeCssMeta(n) + "']", k.currentForm).attr("aria-describedby", h.attr("id"))
                                    }
                                })
                            }
                        }
                    }
                }
                if (!l && this.settings.success) {
                    h.text("");
                    if (typeof this.settings.success === "string") {
                        h.addClass(this.settings.success)
                    } else {
                        this.settings.success(h, g)
                    }
                }
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(f) {
                var e = this.escapeCssMeta(this.idOrName(f)),
                    g = c(f).attr("aria-describedby"),
                    d = "label[for='" + e + "'], label[for='" + e + "'] *";
                if (g) {
                    d = d + ", #" + this.escapeCssMeta(g).replace(/\s+/g, ", #")
                }
                return this.errors().filter(d)
            },
            escapeCssMeta: function(d) {
                return d.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(d) {
                return this.groups[d.name] || (this.checkable(d) ? d.name : d.id || d.name)
            },
            validationTargetFor: function(d) {
                if (this.checkable(d)) {
                    d = this.findByName(d.name)
                }
                return c(d).not(this.settings.ignore)[0]
            },
            checkable: function(d) {
                return (/radio|checkbox/i).test(d.type)
            },
            findByName: function(d) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(d) + "']")
            },
            getLength: function(e, d) {
                switch (d.nodeName.toLowerCase()) {
                    case "select":
                        return c("option:selected", d).length;
                    case "input":
                        if (this.checkable(d)) {
                            return this.findByName(d.name).filter(":checked").length
                        }
                }
                return e.length
            },
            depend: function(e, d) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, d) : true
            },
            dependTypes: {
                "boolean": function(d) {
                    return d
                },
                string: function(e, d) {
                    return !!c(e, d.form).length
                },
                "function": function(e, d) {
                    return e(d)
                }
            },
            optional: function(d) {
                var e = this.elementValue(d);
                return !c.validator.methods.required.call(this, e, d) && "dependency-mismatch"
            },
            startRequest: function(d) {
                if (!this.pending[d.name]) {
                    this.pendingRequest++;
                    c(d).addClass(this.settings.pendingClass);
                    this.pending[d.name] = true
                }
            },
            stopRequest: function(d, e) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[d.name];
                c(d).removeClass(this.settings.pendingClass);
                if (e && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    c(this.currentForm).submit();
                    if (this.submitButton) {
                        c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove()
                    }
                    this.formSubmitted = false
                } else {
                    if (!e && this.pendingRequest === 0 && this.formSubmitted) {
                        c(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function(d, e) {
                e = typeof e === "string" && e || "remote";
                return c.data(d, "previousValue") || c.data(d, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(d, {
                        method: e
                    })
                })
            },
            destroy: function() {
                this.resetForm();
                c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(d, e) {
            if (d.constructor === String) {
                this.classRuleSettings[d] = e
            } else {
                c.extend(this.classRuleSettings, d)
            }
        },
        classRules: function(e) {
            var f = {},
                d = c(e).attr("class");
            if (d) {
                c.each(d.split(" "), function() {
                    if (this in c.validator.classRuleSettings) {
                        c.extend(f, c.validator.classRuleSettings[this])
                    }
                })
            }
            return f
        },
        normalizeAttributeRule: function(f, d, g, e) {
            if (/min|max|step/.test(g) && (d === null || /number|range|text/.test(d))) {
                e = Number(e);
                if (isNaN(e)) {
                    e = undefined
                }
            }
            if (e || e === 0) {
                f[g] = e
            } else {
                if (d === g && d !== "range") {
                    f[g] = true
                }
            }
        },
        attributeRules: function(e) {
            var h = {},
                d = c(e),
                f = e.getAttribute("type"),
                i, g;
            for (i in c.validator.methods) {
                if (i === "required") {
                    g = e.getAttribute(i);
                    if (g === "") {
                        g = true
                    }
                    g = !!g
                } else {
                    g = d.attr(i)
                }
                this.normalizeAttributeRule(h, f, i, g)
            }
            if (h.maxlength && /-1|2147483647|524288/.test(h.maxlength)) {
                delete h.maxlength
            }
            return h
        },
        dataRules: function(e) {
            var h = {},
                d = c(e),
                f = e.getAttribute("type"),
                i, g;
            for (i in c.validator.methods) {
                g = d.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase());
                this.normalizeAttributeRule(h, f, i, g)
            }
            return h
        },
        staticRules: function(e) {
            var f = {},
                d = c.data(e.form, "validator");
            if (d.settings.rules) {
                f = c.validator.normalizeRule(d.settings.rules[e.name]) || {}
            }
            return f
        },
        normalizeRules: function(e, d) {
            c.each(e, function(h, g) {
                if (g === false) {
                    delete e[h];
                    return
                }
                if (g.param || g.depends) {
                    var f = true;
                    switch (typeof g.depends) {
                        case "string":
                            f = !!c(g.depends, d.form).length;
                            break;
                        case "function":
                            f = g.depends.call(d, d);
                            break
                    }
                    if (f) {
                        e[h] = g.param !== undefined ? g.param : true
                    } else {
                        c.data(d.form, "validator").resetElements(c(d));
                        delete e[h]
                    }
                }
            });
            c.each(e, function(f, g) {
                e[f] = c.isFunction(g) && f !== "normalizer" ? g(d) : g
            });
            c.each(["minlength", "maxlength"], function() {
                if (e[this]) {
                    e[this] = Number(e[this])
                }
            });
            c.each(["rangelength", "range"], function() {
                var f;
                if (e[this]) {
                    if (c.isArray(e[this])) {
                        e[this] = [Number(e[this][0]), Number(e[this][1])]
                    } else {
                        if (typeof e[this] === "string") {
                            f = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                            e[this] = [Number(f[0]), Number(f[1])]
                        }
                    }
                }
            });
            if (c.validator.autoCreateRanges) {
                if (e.min != null && e.max != null) {
                    e.range = [e.min, e.max];
                    delete e.min;
                    delete e.max
                }
                if (e.minlength != null && e.maxlength != null) {
                    e.rangelength = [e.minlength, e.maxlength];
                    delete e.minlength;
                    delete e.maxlength
                }
            }
            return e
        },
        normalizeRule: function(e) {
            if (typeof e === "string") {
                var d = {};
                c.each(e.split(/\s/), function() {
                    d[this] = true
                });
                e = d
            }
            return e
        },
        addMethod: function(d, f, e) {
            c.validator.methods[d] = f;
            c.validator.messages[d] = e !== undefined ? e : c.validator.messages[d];
            if (f.length < 3) {
                c.validator.addClassRules(d, c.validator.normalizeRule(d))
            }
        },
        methods: {
            required: function(e, d, g) {
                if (!this.depend(g, d)) {
                    return "dependency-mismatch"
                }
                if (d.nodeName.toLowerCase() === "select") {
                    var f = c(d).val();
                    return f && f.length > 0
                }
                if (this.checkable(d)) {
                    return this.getLength(e, d) > 0
                }
                return e.length > 0
            },
            email: function(e, d) {
                return this.optional(d) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, d) {
                return this.optional(d) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: function(e, d) {
                return this.optional(d) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, d) {
                return this.optional(d) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, d) {
                return this.optional(d) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, d) {
                return this.optional(d) || /^\d+$/.test(e)
            },
            minlength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || e >= g
            },
            maxlength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || e <= g
            },
            rangelength: function(f, d, g) {
                var e = c.isArray(f) ? f.length : this.getLength(f, d);
                return this.optional(d) || (e >= g[0] && e <= g[1])
            },
            min: function(e, d, f) {
                return this.optional(d) || e >= f
            },
            max: function(e, d, f) {
                return this.optional(d) || e <= f
            },
            range: function(e, d, f) {
                return this.optional(d) || (e >= f[0] && e <= f[1])
            },
            step: function(n, h, f) {
                var m = c(h).attr("type"),
                    l = "Step attribute on input type " + m + " is not supported.",
                    k = ["text", "number", "range"],
                    o = new RegExp("\\b" + m + "\\b"),
                    i = m && !o.test(k.join()),
                    g = function(q) {
                        var p = ("" + q).match(/(?:\.(\d+))?$/);
                        if (!p) {
                            return 0
                        }
                        return p[1] ? p[1].length : 0
                    },
                    j = function(p) {
                        return Math.round(p * Math.pow(10, e))
                    },
                    d = true,
                    e;
                if (i) {
                    throw new Error(l)
                }
                e = g(f);
                if (g(n) > e || j(n) % j(f) !== 0) {
                    d = false
                }
                return this.optional(h) || d
            },
            equalTo: function(e, d, g) {
                var f = c(g);
                if (this.settings.onfocusout && f.not(".validate-equalTo-blur").length) {
                    f.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        c(d).valid()
                    })
                }
                return e === f.val()
            },
            remote: function(i, e, j, k) {
                if (this.optional(e)) {
                    return "dependency-mismatch"
                }
                k = typeof k === "string" && k || "remote";
                var f = this.previousValue(e, k),
                    d, h, g;
                if (!this.settings.messages[e.name]) {
                    this.settings.messages[e.name] = {}
                }
                f.originalMessage = f.originalMessage || this.settings.messages[e.name][k];
                this.settings.messages[e.name][k] = f.message;
                j = typeof j === "string" && {
                    url: j
                } || j;
                g = c.param(c.extend({
                    data: i
                }, j.data));
                if (f.old === g) {
                    return f.valid
                }
                f.old = g;
                d = this;
                this.startRequest(e);
                h = {};
                h[e.name] = i;
                c.ajax(c.extend(true, {
                    mode: "abort",
                    port: "validate" + e.name,
                    dataType: "json",
                    data: h,
                    context: d.currentForm,
                    success: function(m) {
                        var o = m === true || m === "true",
                            p, n, l;
                        d.settings.messages[e.name][k] = f.originalMessage;
                        if (o) {
                            l = d.formSubmitted;
                            d.resetInternals();
                            d.toHide = d.errorsFor(e);
                            d.formSubmitted = l;
                            d.successList.push(e);
                            d.invalid[e.name] = false;
                            d.showErrors()
                        } else {
                            p = {};
                            n = m || d.defaultMessage(e, {
                                method: k,
                                parameters: i
                            });
                            p[e.name] = f.message = n;
                            d.invalid[e.name] = true;
                            d.showErrors(p)
                        }
                        f.valid = o;
                        d.stopRequest(e, o)
                    }
                }, j));
                return "pending"
            }
        }
    });
    var a = {},
        b;
    if (c.ajaxPrefilter) {
        c.ajaxPrefilter(function(f, e, g) {
            var d = f.port;
            if (f.mode === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = g
            }
        })
    } else {
        b = c.ajax;
        c.ajax = function(e) {
            var f = ("mode" in e ? e : c.ajaxSettings).mode,
                d = ("port" in e ? e : c.ajaxSettings).port;
            if (f === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = b.apply(this, arguments);
                return a[d]
            }
            return b.apply(this, arguments)
        }
    }
    return c
}));
! function(G, A) {
    function m(f, h, u) {
        var g = f.children(),
            s = !1;
        f.empty();
        for (var c = 0, p = g.length; p > c; c++) {
            var a = g.eq(c);
            if (f.append(a), u && f.append(u), D(f, h)) {
                a.remove(), s = !0;
                break
            }
            u && u.detach()
        }
        return s
    }

    function b(o, t, g, p, a) {
        var h = !1,
            r = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
            f = "script";
        return o.contents().detach().each(function() {
            var c = this,
                d = G(c);
            if ("undefined" == typeof c || 3 == c.nodeType && 0 == G.trim(c.data).length) {
                return !0
            }
            if (d.is(f)) {
                o.append(d)
            } else {
                if (h) {
                    return !0
                }
                o.append(d), a && o[o.is(r) ? "after" : "append"](a), D(g, p) && (h = 3 == c.nodeType ? k(d, t, g, p, a) : b(d, t, g, p, a), h || (d.detach(), h = !0)), h || a && a.detach()
            }
        }), h
    }

    function k(L, s, a, l, M) {
        var N = L[0];
        if (!N) {
            return !1
        }
        var I = H(N),
            K = -1 !== I.indexOf(" ") ? " " : "　",
            i = "letter" == l.wrap ? "" : K,
            J = I.split(i),
            S = -1,
            R = -1,
            P = 0,
            O = J.length - 1;
        for (l.fallbackToLetter && 0 == P && 0 == O && (i = "", J = I.split(i), O = J.length - 1); O >= P && (0 != P || 0 != O);) {
            var t = Math.floor((P + O) / 2);
            if (t == R) {
                break
            }
            R = t, q(N, J.slice(0, R + 1).join(i) + l.ellipsis), D(a, l) ? (O = R, l.fallbackToLetter && 0 == P && 0 == O && (i = "", J = J[0].split(i), S = -1, R = -1, P = 0, O = J.length - 1)) : (S = R, P = R)
        }
        if (-1 == S || 1 == J.length && 0 == J[0].length) {
            var Q = L.parent();
            L.detach();
            var u = M && M.closest(Q).length ? M.length : 0;
            Q.contents().length > u ? N = F(Q.contents().eq(-1 - u), s) : (N = F(Q, s, !0), u || Q.detach()), N && (I = w(H(N), l), q(N, I), u && M && G(N).parent().append(M))
        } else {
            I = w(J.slice(0, S + 1).join(i), l), q(N, I)
        }
        return !0
    }

    function D(a, c) {
        return a.innerHeight() > c.maxHeight
    }

    function w(a, c) {
        for (; G.inArray(a.slice(-1), c.lastCharacter.remove) > -1;) {
            a = a.slice(0, -1)
        }
        return G.inArray(a.slice(-1), c.lastCharacter.noEllipsis) < 0 && (a += c.ellipsis), a
    }

    function B(a) {
        return {
            width: a.innerWidth(),
            height: a.innerHeight()
        }
    }

    function q(a, c) {
        a.innerText ? a.innerText = c : a.nodeValue ? a.nodeValue = c : a.textContent && (a.textContent = c)
    }

    function H(a) {
        return a.innerText ? a.innerText : a.nodeValue ? a.nodeValue : a.textContent ? a.textContent : ""
    }

    function C(a) {
        do {
            a = a.previousSibling
        } while (a && 1 !== a.nodeType && 3 !== a.nodeType);
        return a
    }

    function F(f, h, d) {
        var g, c = f && f[0];
        if (c) {
            if (!d) {
                if (3 === c.nodeType) {
                    return c
                }
                if (G.trim(f.text())) {
                    return F(f.contents().last(), h)
                }
            }
            for (g = C(c); !g;) {
                if (f = f.parent(), f.is(h) || !f.length) {
                    return !1
                }
                g = C(f[0])
            }
            if (g) {
                return F(G(g), h)
            }
        }
        return !1
    }

    function x(a, c) {
        return a ? "string" == typeof a ? (a = G(a, c), a.length ? a : !1) : a.jquery ? a : !1 : !1
    }

    function z(d) {
        for (var g = d.innerHeight(), i = ["paddingTop", "paddingBottom"], f = 0, h = i.length; h > f; f++) {
            var c = parseInt(d.css(i[f]), 10);
            isNaN(c) && (c = 0), g -= c
        }
        return g
    }
    if (!G.fn.dotdotdot) {
        G.fn.dotdotdot = function(p) {
            if (0 == this.length) {
                return G.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this
            }
            if (this.length > 1) {
                return this.each(function() {
                    G(this).dotdotdot(p)
                })
            }
            var r = this;
            r.data("dotdotdot") && r.trigger("destroy.dot"), r.data("dotdotdot-style", r.attr("style") || ""), r.css("word-wrap", "break-word"), "nowrap" === r.css("white-space") && r.css("white-space", "normal"), r.bind_events = function() {
                return r.bind("update.dot", function(i, l) {
                    i.preventDefault(), i.stopPropagation(), a.maxHeight = "number" == typeof a.height ? a.height : z(r), a.maxHeight += a.tolerance, "undefined" != typeof l && (("string" == typeof l || l instanceof HTMLElement) && (l = G("<div />").append(l).contents()), l instanceof G && (f = l)), n = r.wrapInner('<div class="dotdotdot" />').children(), n.contents().detach().end().append(f.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var o = !1,
                        g = !1;
                    return h.afterElement && (o = h.afterElement.clone(!0), o.show(), h.afterElement.detach()), D(n, a) && (g = "children" == a.wrap ? m(n, a, o) : b(n, r, n, a, o)), n.replaceWith(n.contents()), n = null, G.isFunction(a.callback) && a.callback.call(r[0], g, f), h.isTruncated = g, g
                }).bind("isTruncated.dot", function(c, g) {
                    return c.preventDefault(), c.stopPropagation(), "function" == typeof g && g.call(r[0], h.isTruncated), h.isTruncated
                }).bind("originalContent.dot", function(c, g) {
                    return c.preventDefault(), c.stopPropagation(), "function" == typeof g && g.call(r[0], f), f
                }).bind("destroy.dot", function(c) {
                    c.preventDefault(), c.stopPropagation(), r.unwatch().unbind_events().contents().detach().end().append(f).attr("style", r.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }), r
            }, r.unbind_events = function() {
                return r.unbind(".dot"), r
            }, r.watch = function() {
                if (r.unwatch(), "window" == a.watch) {
                    var g = G(window),
                        i = g.width(),
                        c = g.height();
                    g.bind("resize.dot" + h.dotId, function() {
                        i == g.width() && c == g.height() && a.windowResizeFix || (i = g.width(), c = g.height(), d && clearInterval(d), d = setTimeout(function() {
                            r.trigger("update.dot")
                        }, 10))
                    })
                } else {
                    t = B(r), d = setInterval(function() {
                        var e = B(r);
                        (t.width != e.width || t.height != e.height) && (r.trigger("update.dot"), t = B(r))
                    }, 100)
                }
                return r
            }, r.unwatch = function() {
                return G(window).unbind("resize.dot" + h.dotId), d && clearInterval(d), r
            };
            var f = r.contents(),
                a = G.extend(!0, {}, G.fn.dotdotdot.defaults, p),
                h = {},
                t = {},
                d = null,
                n = null;
            return a.lastCharacter.remove instanceof Array || (a.lastCharacter.remove = G.fn.dotdotdot.defaultArrays.lastCharacter.remove), a.lastCharacter.noEllipsis instanceof Array || (a.lastCharacter.noEllipsis = G.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), h.afterElement = x(a.after, r), h.isTruncated = !1, h.dotId = j++, r.data("dotdotdot", !0).bind_events().trigger("update.dot"), a.watch && r.watch(), r
        }, G.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, G.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        }, G.fn.dotdotdot.debug = function() {};
        var j = 1,
            y = G.fn.html;
        G.fn.html = function(a) {
            return a != A && !G.isFunction(a) && this.data("dotdotdot") ? this.trigger("update", [a]) : y.apply(this, arguments)
        };
        var E = G.fn.text;
        G.fn.text = function(a) {
            return a != A && !G.isFunction(a) && this.data("dotdotdot") ? (a = G("<div />").text(a).html(), this.trigger("update", [a])) : E.apply(this, arguments)
        }
    }
}(jQuery);
! function(G, A) {
    function m(f, h, u) {
        var g = f.children(),
            s = !1;
        f.empty();
        for (var c = 0, p = g.length; p > c; c++) {
            var a = g.eq(c);
            if (f.append(a), u && f.append(u), D(f, h)) {
                a.remove(), s = !0;
                break
            }
            u && u.detach()
        }
        return s
    }

    function b(o, t, g, p, a) {
        var h = !1,
            r = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",
            f = "script";
        return o.contents().detach().each(function() {
            var c = this,
                d = G(c);
            if ("undefined" == typeof c || 3 == c.nodeType && 0 == G.trim(c.data).length) {
                return !0
            }
            if (d.is(f)) {
                o.append(d)
            } else {
                if (h) {
                    return !0
                }
                o.append(d), a && o[o.is(r) ? "after" : "append"](a), D(g, p) && (h = 3 == c.nodeType ? k(d, t, g, p, a) : b(d, t, g, p, a), h || (d.detach(), h = !0)), h || a && a.detach()
            }
        }), h
    }

    function k(L, s, a, l, M) {
        var N = L[0];
        if (!N) {
            return !1
        }
        var I = H(N),
            K = -1 !== I.indexOf(" ") ? " " : "　",
            i = "letter" == l.wrap ? "" : K,
            J = I.split(i),
            S = -1,
            R = -1,
            P = 0,
            O = J.length - 1;
        for (l.fallbackToLetter && 0 == P && 0 == O && (i = "", J = I.split(i), O = J.length - 1); O >= P && (0 != P || 0 != O);) {
            var t = Math.floor((P + O) / 2);
            if (t == R) {
                break
            }
            R = t, q(N, J.slice(0, R + 1).join(i) + l.ellipsis), D(a, l) ? (O = R, l.fallbackToLetter && 0 == P && 0 == O && (i = "", J = J[0].split(i), S = -1, R = -1, P = 0, O = J.length - 1)) : (S = R, P = R)
        }
        if (-1 == S || 1 == J.length && 0 == J[0].length) {
            var Q = L.parent();
            L.detach();
            var u = M && M.closest(Q).length ? M.length : 0;
            Q.contents().length > u ? N = F(Q.contents().eq(-1 - u), s) : (N = F(Q, s, !0), u || Q.detach()), N && (I = w(H(N), l), q(N, I), u && M && G(N).parent().append(M))
        } else {
            I = w(J.slice(0, S + 1).join(i), l), q(N, I)
        }
        return !0
    }

    function D(a, c) {
        return a.innerHeight() > c.maxHeight
    }

    function w(a, c) {
        for (; G.inArray(a.slice(-1), c.lastCharacter.remove) > -1;) {
            a = a.slice(0, -1)
        }
        return G.inArray(a.slice(-1), c.lastCharacter.noEllipsis) < 0 && (a += c.ellipsis), a
    }

    function B(a) {
        return {
            width: a.innerWidth(),
            height: a.innerHeight()
        }
    }

    function q(a, c) {
        a.innerText ? a.innerText = c : a.nodeValue ? a.nodeValue = c : a.textContent && (a.textContent = c)
    }

    function H(a) {
        return a.innerText ? a.innerText : a.nodeValue ? a.nodeValue : a.textContent ? a.textContent : ""
    }

    function C(a) {
        do {
            a = a.previousSibling
        } while (a && 1 !== a.nodeType && 3 !== a.nodeType);
        return a
    }

    function F(f, h, d) {
        var g, c = f && f[0];
        if (c) {
            if (!d) {
                if (3 === c.nodeType) {
                    return c
                }
                if (G.trim(f.text())) {
                    return F(f.contents().last(), h)
                }
            }
            for (g = C(c); !g;) {
                if (f = f.parent(), f.is(h) || !f.length) {
                    return !1
                }
                g = C(f[0])
            }
            if (g) {
                return F(G(g), h)
            }
        }
        return !1
    }

    function x(a, c) {
        return a ? "string" == typeof a ? (a = G(a, c), a.length ? a : !1) : a.jquery ? a : !1 : !1
    }

    function z(d) {
        for (var g = d.innerHeight(), i = ["paddingTop", "paddingBottom"], f = 0, h = i.length; h > f; f++) {
            var c = parseInt(d.css(i[f]), 10);
            isNaN(c) && (c = 0), g -= c
        }
        return g
    }
    if (!G.fn.dotdotdot) {
        G.fn.dotdotdot = function(p) {
            if (0 == this.length) {
                return G.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this
            }
            if (this.length > 1) {
                return this.each(function() {
                    G(this).dotdotdot(p)
                })
            }
            var r = this;
            r.data("dotdotdot") && r.trigger("destroy.dot"), r.data("dotdotdot-style", r.attr("style") || ""), r.css("word-wrap", "break-word"), "nowrap" === r.css("white-space") && r.css("white-space", "normal"), r.bind_events = function() {
                return r.bind("update.dot", function(i, l) {
                    i.preventDefault(), i.stopPropagation(), a.maxHeight = "number" == typeof a.height ? a.height : z(r), a.maxHeight += a.tolerance, "undefined" != typeof l && (("string" == typeof l || l instanceof HTMLElement) && (l = G("<div />").append(l).contents()), l instanceof G && (f = l)), n = r.wrapInner('<div class="dotdotdot" />').children(), n.contents().detach().end().append(f.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var o = !1,
                        g = !1;
                    return h.afterElement && (o = h.afterElement.clone(!0), o.show(), h.afterElement.detach()), D(n, a) && (g = "children" == a.wrap ? m(n, a, o) : b(n, r, n, a, o)), n.replaceWith(n.contents()), n = null, G.isFunction(a.callback) && a.callback.call(r[0], g, f), h.isTruncated = g, g
                }).bind("isTruncated.dot", function(c, g) {
                    return c.preventDefault(), c.stopPropagation(), "function" == typeof g && g.call(r[0], h.isTruncated), h.isTruncated
                }).bind("originalContent.dot", function(c, g) {
                    return c.preventDefault(), c.stopPropagation(), "function" == typeof g && g.call(r[0], f), f
                }).bind("destroy.dot", function(c) {
                    c.preventDefault(), c.stopPropagation(), r.unwatch().unbind_events().contents().detach().end().append(f).attr("style", r.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }), r
            }, r.unbind_events = function() {
                return r.unbind(".dot"), r
            }, r.watch = function() {
                if (r.unwatch(), "window" == a.watch) {
                    var g = G(window),
                        i = g.width(),
                        c = g.height();
                    g.bind("resize.dot" + h.dotId, function() {
                        i == g.width() && c == g.height() && a.windowResizeFix || (i = g.width(), c = g.height(), d && clearInterval(d), d = setTimeout(function() {
                            r.trigger("update.dot")
                        }, 10))
                    })
                } else {
                    t = B(r), d = setInterval(function() {
                        var e = B(r);
                        (t.width != e.width || t.height != e.height) && (r.trigger("update.dot"), t = B(r))
                    }, 100)
                }
                return r
            }, r.unwatch = function() {
                return G(window).unbind("resize.dot" + h.dotId), d && clearInterval(d), r
            };
            var f = r.contents(),
                a = G.extend(!0, {}, G.fn.dotdotdot.defaults, p),
                h = {},
                t = {},
                d = null,
                n = null;
            return a.lastCharacter.remove instanceof Array || (a.lastCharacter.remove = G.fn.dotdotdot.defaultArrays.lastCharacter.remove), a.lastCharacter.noEllipsis instanceof Array || (a.lastCharacter.noEllipsis = G.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), h.afterElement = x(a.after, r), h.isTruncated = !1, h.dotId = j++, r.data("dotdotdot", !0).bind_events().trigger("update.dot"), a.watch && r.watch(), r
        }, G.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, G.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        }, G.fn.dotdotdot.debug = function() {};
        var j = 1,
            y = G.fn.html;
        G.fn.html = function(a) {
            return a != A && !G.isFunction(a) && this.data("dotdotdot") ? this.trigger("update", [a]) : y.apply(this, arguments)
        };
        var E = G.fn.text;
        G.fn.text = function(a) {
            return a != A && !G.isFunction(a) && this.data("dotdotdot") ? (a = G("<div />").text(a).html(), this.trigger("update", [a])) : E.apply(this, arguments)
        }
    }
}(jQuery);
(function(b, d) {
    var c = function() {
        var e = this;
        e.selector = ".topNav_container";
        e.searchEl = ".topNav_search";
        e.searchBox = d(".search-box", d(e.selector));
        e.searchField = d("input.primary", d(e.selector));
        e.prefix = d("html").hasClass("aem-rm-author") ? "/content/sf/en_US" : "";
        e.results = d(".results", e.searchEl);
        e.seeMoreLink = d(".see-more", e.searchEl);
        e.term
    };
    c.prototype.search = function() {
        var f = this;
        var e = f.prefix + "/search/_jcr_content/content-par/results.searchResults.json?qs=" + f.term;
        var g = d.ajax({
            url: e,
            success: function(h) {
                f.loadResults(h)
            },
            error: function() {
                f.noResults()
            },
            complete: function() {
                f.searchBox.removeClass("searching")
            },
            async: false
        })
    };
    c.prototype.noResults = function() {
        var e = this;
        e.searchBox.removeClass("results").addClass("no-results").removeClass("has-more")
    };
    c.prototype.loadResults = function(f) {
        var e = this;
        e.results.html("");
        (f.resultHits > 0) ? g(): e.noResults();

        function g() {
            e.searchBox.removeClass("no-results").addClass("results").removeClass("has-more");
            var j = '<a href="{path}" class="rel">{title}</a>',
                k = 0,
                i = "";
            d.each(f.searchResults, function(m, l) {
                i += j.replace("{path}", l.path).replace("{title}", h(l.title));
                k++;
                if (k == 4) {
                    return false
                }
            });
            e.results.html(i);
            d("a", e.results).dotdotdot({});
            if (f.totalMatches > 4) {
                e.searchBox.addClass("has-more");
                e.seeMoreLink.attr("href", e.prefix + "/search#qs=" + e.term)
            }

            function h(l) {
                return d("<textarea/>").html(l).text()
            }
        }
    };
    c.prototype.initListeners = function() {
        var e = this;
        e.searchBox.on("doSearch", function() {
            e.searchBox.addClass("searching");
            e.term = e.searchField.val();
            e.search()
        });
        e.searchBox.on("clearSearch", function() {
            e.searchBox.removeClass("results").removeClass("no-results").removeClass("searching");
            e.results.html("")
        })
    };
    c.prototype.init = function() {
        var e = this;
        e.initListeners()
    };
    c.prototype.temp = function() {
        var e = this
    };
    var a = b.sf || {};
    a.topNavSearch = a.topNavSearch || {
        init: function() {
            return new c().init()
        }
    };
    b.sf = a
})(window, jQuery);
(function(d, e) {
    var a = function() {
        var f = this;
        f.selector = ".topNav_container";
        f.mainContent = ".mainContent";
        f.primary = ".topNav .navTopBar";
        f.sidebar = "#slidebar";
        f.slideBarClose = "#slidebar-close";
        f.slideBarContainer = "#body-overlay";
        f.slideBarClick = ".topNav .menu-bt";
        f.slideBarMenu = "#slidebar-menu";
        f.slideBarTimer = 500;
        f.slideBarRight = "-335px";
        f.bpEl = ".topnav-bp";
        f.searchBox = e(".search-box", e(f.selector));
        f.searchBtn = e(".search-btn", e(f.selector));
        f.searchForm = e(".search-form", e(f.selector));
        f.searchField = e(".search", e(f.selector));
        f.windowWidth = e(d).width();
        f.smallNav = false
    };
    var b;
    a.prototype.init = function() {
        var f = this;
        f.setState();
        f.initListeners();
        f.setHeight();
        f.searchToggle();
        f.scrollEvent();
        f.slideBar();
        f.initMenus()
    };
    a.prototype.setState = function() {
        var g = this;
        var f = e(g.bpEl, g.selector);
        switch (f.css("text-align")) {
            case "left":
                g.smallNav = true;
                break;
            default:
                g.smallNav = false;
                break
        }
    };
    a.prototype.setHeight = function() {
        var f = this;
        e(f.selector).addClass("sticky").parent().height(e(f.selector).height())
    };
    a.prototype.initMenus = function() {
        var f = this,
            i = e(".hasChild > a", f.slideBarMenu),
            g = e(".primaryList .hasChild", f.selector);
        i.click(function() {
            var j = e(this).parent();
            h(j, false)
        });
        g.hover(function() {
            var j = e(this);
            h(j, "open")
        }, function() {
            var j = e(this);
            h(j, "close")
        });

        function h(j, l) {
            var n = e(".dropdown", j);
            if (l) {
                (l == "open") ? k(): m();
                return
            }
            if (j.hasClass("open")) {
                m()
            } else {
                k()
            }

            function k() {
                j.addClass("open");
                n.stop().slideDown()
            }

            function m() {
                j.removeClass("open");
                n.stop().slideUp()
            }
        }
    };
    a.prototype.searchToggle = function() {
        var f = this;
        f.searchBtn.click(function() {
            if (!f.searchBox.hasClass("active")) {
                f.searchBox.addClass("active")
            }
            f.searchField.focus()
        });
        e("button.icon-search", f.searchForm).click(function() {
            f.searchField.focus()
        });
        f.searchField.blur(function() {
            if (!(b.attr("class") === "icon-search") && (b.attr("class").indexOf("rel") < 0)) {
                f.searchBox.removeClass("active")
            }
        });
        f.searchForm.submit(function(h) {
            h.preventDefault();
            var g = e(this);
            var i = e(".search", g).val();
            if (i.length > 2) {
                d.location.href = g.attr("action") + "#qs=" + i
            }
        })
    };
    a.prototype.scrollEvent = function() {
        var g = this;
        var h = 0,
            i = false;
        e(d).scroll(e.throttle(50, function() {
            setTimeout(function() {
                var j = e(d).scrollTop();
                if (j > h) {
                    i = "down"
                } else {
                    if (j < h) {
                        i = "up"
                    } else {
                        i = false
                    }
                }
                h = j
            }, 50);
            if (i) {
                (!g.smallNav) ? f(i): false
            }
        }));

        function f(j) {
            if (j === "down") {
                e(g.primary).slideUp(200)
            } else {
                e(g.primary).slideDown(200)
            }
        }
    };
    a.prototype.slideBar = function() {
        var f = this;
        e(f.slideBarClick).click(function() {
            e(f.slideBarContainer).fadeIn();
            e(f.sidebar).animate({
                right: "0"
            }, f.slideBarTimer);
            e("html").addClass("panel-open")
        });
        e(f.slideBarClose).click(function() {
            e(f.slideBarContainer).fadeOut();
            e(f.sidebar).animate({
                right: f.slideBarRight
            }, f.slideBarTimer);
            e("html").removeClass("panel-open")
        });
        e(f.slideBarContainer).click(function(g) {
            e(f.slideBarContainer).fadeOut();
            e(f.sidebar).animate({
                right: f.slideBarRight
            }, f.slideBarTimer);
            e("html").removeClass("panel-open")
        });
        e(f.slideBarMenu).mCustomScrollbar({
            theme: "light",
            mouseWheel: {
                preventDefault: true
            },
            contentTouchScroll: 100,
            scrollInertia: 100
        })
    };
    a.prototype.reset = function() {
        var f = this;
        f.setState();
        e("html").removeClass("panel-open");
        e(f.primary).removeAttr("style");
        f.setHeight();
        f.windowWidth = e(d).width()
    };
    a.prototype.initListeners = function() {
        var g = this,
            f;
        e(document).mousedown(function(h) {
            b = e(h.target)
        });
        e(d).on("debouncedresize", function() {
            if (g.windowWidth != e(d).width()) {
                g.reset()
            }
        });
        g.searchField.on("keyup", function() {
            var h = e(this);
            clearTimeout(f);
            f = setTimeout(function() {
                if (h.val().length >= 3) {
                    g.searchBox.trigger("doSearch")
                } else {
                    g.searchBox.trigger("clearSearch")
                }
            }, 350)
        })
    };
    var c = d.sf || {};
    c.topNav = c.topNav || {
        init: function() {
            return new a().init()
        }
    };
    d.sf = c
})(window, jQuery);
(function(b, c) {
    var d = function() {
        var e = this;
        e.form = "#supportKCsearch";
        return e
    };
    d.prototype.init = function() {
        var e = this;
        e.iosRemoveTarget()
    };
    d.prototype.iosRemoveTarget = function() {
        var e = this;
        if (a.siteUtil.mobile == "apple") {
            c(e.form).removeAttr("target")
        }
    };
    var a = b.sf || {};
    a.supportKCsearch = {
        init: function() {
            return new d().init()
        }
    };
    b.sf = a
})(window, jQuery);
(function(c, d) {
    var a = function() {
        var e = this;
        e.el = ".kc-share";
        e.isSticky = false;
        e.inline = false
    };
    a.prototype.setVars = function() {
        var f = this;
        addthis_share.url = c.location.href;
        addthis_share.media = c.location.protocol + "//" + c.location.host + e();

        function e() {
            return (f.inline) ? d(f.el).data("share-img") : g()
        }

        function g() {
            if (d(".kc-image img").length > 0) {
                return d(".kc-image img").attr("src")
            } else {
                return ("/content/dam/sf/articles/articles_banner_" + (Math.floor(Math.random() * 6) + 1) + ".png")
            }
        }
    };
    a.prototype.getSticky = function() {
        var e = this;
        return (d(e.el).css("bottom") == "0px") ? false : true
    };
    a.prototype.initListeners = function() {
        var e = this;
        d(c).on("debouncedresize", function() {
            e.isSticky = e.getSticky();
            e.setPosition()
        });
        d(c).scroll(d.throttle(20, function() {
            if (e.isSticky) {
                e.sticky.checkScroll(d(e.el))
            }
        }))
    };
    a.prototype.sticky = {
        init: function(e) {
            e.css({
                left: d(".kc-image").offset().left - 50,
                top: d(".kc-image").offset().top
            })
        },
        remove: function(e) {
            e.attr("style", "")
        },
        checkScroll: function(i) {
            var g = d(c).scrollTop();
            var j = (i.offset().top + i.height()) - g,
                h = d("#ctx-footer").offset().top - g,
                f = d(".kc-image").offset().top - g,
                e = i.offset().top - g;
            if (f > e) {
                i.css("top", f)
            } else {
                if (j > h) {
                    i.css("top", h - i.height())
                } else {
                    d(".kc-image").offset().top
                }
            }
        }
    };
    a.prototype.setPosition = function() {
        var e = this;
        (e.isSticky) ? e.sticky.init(d(e.el)): e.sticky.remove(d(e.el))
    };
    a.prototype.init = function() {
        var e = this;
        if (d(e.el).length > 0) {
            if (d(".kc-article").length == 0) {
                e.inline = true;
                d(e.el).addClass("inline")
            }
            if (!e.inline) {
                e.isSticky = e.getSticky();
                e.setPosition();
                e.initListeners()
            }
            e.setVars();
            d(e.el).addClass("init")
        }
    };
    var b = c.sf || {};
    b.kcShare = b.kcShare || {
        init: function() {
            return new a().init()
        }
    };
    c.sf = b
})(window, jQuery);
(function(b, d) {
    var c = function() {
        var e = this;
        e.el = d(".search-results");
        e.searchBtn = ".search-btn";
        e.form = "#searchResultsForm";
        e.resultContainer = ".result-container";
        e.searchField = "#searchField";
        e.clearBtn = ".clear-button";
        e.searchFiltersBtn = ".search-filters-btn", e.searchFilters = ".search-filters", e.slot = ".slot";
        e.paginationContainer = ".pagination";
        e.hash = false;
        e.results = false;
        e.searchTerm = "";
        e.searchCategory = "";
        e.prefix = d("html").hasClass("aem-rm-author") ? "/content/sf/en_US" : "";
        e.base = b.location.pathname
    };
    c.prototype.search = function() {
        var f = this;
        if (f.isValidHash()) {
            d(f.resultContainer).addClass("loading");
            var e = f.prefix + f.base + "/_jcr_content/content-par/results.searchResults.json?" + d.param(f.hash);
            var g = d.ajax({
                url: e,
                success: function(h) {
                    f.results = h;
                    if (f.searchTerm != h.searchText) {
                        f.searchTerm = h.searchText;
                        f.loadFilters()
                    }
                    f.loadResults()
                },
                error: function() {
                    d(f.slot).html("");
                    f.noResults()
                },
                complete: function() {
                    d(f.resultContainer).removeClass("loading")
                },
                async: false
            })
        }
    };
    c.prototype.noResults = function() {
        var e = this;
        d(e.resultContainer).removeClass("showing-results");
        d(e.paginationContainer).html("")
    };
    c.prototype.loadFilters = function() {
        var f = this;
        var g = f.results.topics,
            e = f.results.industries;
        d(".filters-tag li a").attr("data-count", 0).find("span").text("0");
        d.each(g, function(i, j) {
            var h = d(".filters-topic a[data-filter='" + j.tagId + "']");
            h.attr("data-count", j.resultCount).find("span").text(j.resultCount)
        });
        d.each(e, function(i, j) {
            var h = d(".filters-industry a[data-filter='" + j.tagId + "']");
            h.attr("data-count", j.resultCount).find("span").text(j.resultCount)
        })
    };
    c.prototype.loadResults = function() {
        var g = this;
        var i = d(g.slot, g.el);
        i.html("");
        (g.results.resultHits > 0) ? h(): g.noResults();

        function h() {
            g.noResults();
            var k = '<div class="card item search-result"><h4><a href="{path}">{title}</a></h4>{excerpt}</div>';
            var j = '<div class="result-header"><div>Found ' + g.results.totalMatches + " results</div><div>" + g.results.startCount + "-" + g.results.endCount + " of " + g.results.totalMatches + " results</div></div>";
            d.each(g.results.searchResults, function(m, l) {
                j += k.replace("{path}", l.path).replace("{title}", l.title).replace("{excerpt}", f(l.excerpt))
            });
            d(g.searchField).val(g.results.searchText);
            i.html(j);
            setTimeout(function() {
                d(g.resultContainer).addClass("showing-results")
            }, 50);
            g.pagination();
            d(".filters-tag a").removeClass("active");
            d(".filters-tag a[data-filter='" + g.searchCategory + "']").addClass("active");
            (g.searchCategory != "") ? d(g.searchFilters).addClass("filtered"): d(g.searchFilters).removeClass("filtered")
        }

        function f(j) {
            return (j !== "") ? "<p>" + e(j) + "</p>" : ""
        }

        function e(j) {
            return d("<textarea/>").html(j).text()
        }
    };
    c.prototype.pagination = function() {
        var g = this,
            e = d(g.paginationContainer, g.el);
        var i = function() {
            if (g.results.resultHits >= 0) {
                var k = h(g.results.currentPage, g.results.totalPages);
                f(k)
            }
        };

        function f(k) {
            var o = "",
                p, q = (g.searchCategory != "") ? "&category=" + g.searchCategory : "";
            d.each(k, function(r, s) {
                o += '<a href="' + m(s) + '" class="' + n(s) + '">' + s + "</a>"
            });
            e.html(l(o));

            function n(r) {
                if (d.isNumeric(r)) {
                    return (r == g.results.currentPage) ? "active" : ""
                } else {
                    return "disabled"
                }
            }

            function m(r) {
                if (d.isNumeric(r) && (r != g.results.currentPage)) {
                    return "#qs=" + g.results.searchText + q + "&pageNum=" + r
                } else {
                    return "javascript:void(0);"
                }
            }

            function l(u) {
                var v = "disabled",
                    t = "disabled",
                    s = "javascript:void(0);",
                    r = "javascript:void(0);";
                if (g.results.currentPage > 1) {
                    v = "enabled";
                    s = "#qs=" + g.results.searchText + q + "&pageNum=" + (g.results.currentPage - 1)
                }
                if (g.results.currentPage < g.results.totalPages) {
                    t = "enabled";
                    r = "#qs=" + g.results.searchText + q + "&pageNum=" + (g.results.currentPage + 1)
                }
                u += '<a href="' + s + '" class="previous ' + v + '"></a><a href="' + r + '" class="next ' + t + '"></a>';
                return u
            }
        }

        function h(s, k) {
            var r = 2,
                o = [],
                q = [],
                n;
            o.push(1);
            for (var p = s - r; p <= s + r; p++) {
                if (p < k && p > 1) {
                    o.push(p)
                }
            }
            if (k != 1) {
                o.push(k)
            }
            d.each(o, function(m, l) {
                if (n) {
                    if (l - n === 2) {
                        q.push(n + 1)
                    } else {
                        if (l - n !== 1) {
                            q.push("...")
                        }
                    }
                }
                q.push(l);
                n = l
            });
            return q
        }
        var j = function() {
            e.html("");
            i()
        };
        j()
    };
    c.prototype.setHash = function(e) {
        b.location.hash = e
    };
    c.prototype.getHash = function() {
        var f = this,
            i = b.location.hash.replace("#", "");
        if (i === "") {
            return false
        }
        var e = i.split("&"),
            g = {},
            j = ["qs", "pageNum", "category"];
        if (e.length > 0) {
            d.each(e, function(k, m) {
                var l = m.split("=");
                if (d.inArray(l[0], j) >= 0) {
                    g[l[0]] = l[1]
                }
            })
        } else {
            var h = e.split("=");
            g[h[0]] = h[1]
        }
        f.hash = g
    };
    c.prototype.isValidHash = function() {
        var e = this;
        if (e.hash.hasOwnProperty("qs") && e.hash.qs != "") {
            d(e.searchField).val(e.hash.qs);
            return true
        } else {
            e.setHash("");
            return false
        }
    };
    c.prototype.bindEvents = function() {
        var e = this;
        d(e.form).submit(function(f) {
            f.preventDefault();
            e.setHash("qs=" + d(e.searchField, e.el).val())
        });
        d(e.clearBtn, e.el).click(function() {
            d(e.searchField, e.el).val("").focus()
        });
        d(document).on("click", ".filter-clear", function() {
            e.searchCategory = "";
            e.setHash("qs=" + d(e.searchField, e.el).val());
            if (d("html").hasClass("lb-open")) {
                d("document").ctxLightbox().closeLightbox()
            }
        });
        d(e.searchFiltersBtn).click(function() {
            d(".ctx-lightbox-content").addClass("inverted")
        });
        d(document).on("click", ".filters-tag a", function(f) {
            if (d(this).attr("data-count") > 0) {
                e.searchCategory = d(this).data("filter");
                e.setHash("qs=" + d(e.searchField, e.el).val() + "&category=" + e.searchCategory);
                if (d("html").hasClass("lb-open")) {
                    d("document").ctxLightbox().closeLightbox()
                }
            }
        });
        d(document).on("click", e.paginationContainer + " a:not(.active):not(.disabled)", function() {
            d("html, body").animate({
                scrollTop: e.el.offset().top - 50
            }, 500)
        });
        d(b).on("hashchange", function() {
            e.getHash();
            e.search()
        })
    };
    c.prototype.init = function() {
        var e = this;
        e.bindEvents();
        e.getHash();
        if (e.hash) {
            e.search()
        }
    };
    var a = b.sf || {};
    a.kcSearch = a.kcSearch || {
        init: function() {
            return new c().init()
        }
    };
    b.sf = a
})(window, jQuery);
(function(c, d) {
    var a = function() {
        var e = this;
        e.el = ".progressiveNav";
        e.proNav = d(".pro_nav", d(e.el));
        e.topNav = ".topNav .topNav_container";
        e.slider = d(".active_slider", d(e.el));
        e.position = false;
        e.activeItem = false
    };
    a.prototype.init = function() {
        var e = this;
        if (d(e.el).length > 0) {
            e.moveIntoNav();
            e.checkPosition();
            e.initListeners();
            e.setActive()
        }
    };
    a.prototype.moveIntoNav = function() {
        var e = this;
        d(".navBottomBar.pn-target", d(e.topNav)).after(d(e.el))
    };
    a.prototype.getPosition = function() {
        return (b.siteUtil.getBreakpoint() === "large") ? "top" : "bottom"
    };
    a.prototype.checkPosition = function() {
        var f = this;
        var e = f.getPosition();
        if (e !== f.position) {
            f.position = f.getPosition();
            f.changePosition()
        }
    };
    a.prototype.changePosition = function() {
        var e = this;
        e.proNav.removeClass("top").removeClass("bottom");
        e.proNav.addClass(e.position)
    };
    a.prototype.initListeners = function() {
        var e = this;
        d(c).on("debouncedresize", function() {
            e.checkPosition();
            e.setActive()
        });
        d(c).scroll(d.throttle(100, function() {
            e.setActive()
        }))
    };
    a.prototype.updateSlider = function(h) {
        var e = this,
            f, g;
        f = (e.position === "top") ? h.width() : h.width() + 30;
        g = h.position().left + 12;
        e.slider.width(f).css("margin-left", g)
    };
    a.prototype.setActive = function() {
        var f = this;
        var e = d("li a", f.proNav),
            h = 0,
            g;
        var i = (b.siteUtil.getBreakpoint() === "large") ? 60 : 80;
        d.each(e, function(j, k) {
            var l = d(d(k).attr("href"));
            if (l.length > 0) {
                if (l.offset().top > (d(c).scrollTop() + (d(f.topNav).height() + i))) {
                    h = (j > 0) ? (j - 1) : 0;
                    return false
                } else {
                    h = j
                }
            }
        });
        g = d(e[h]);
        e.removeClass("active");
        g.addClass("active").blur();
        f.updateSlider(g)
    };
    var b = c.sf || {};
    b.proNav = b.proNav || {
        init: function() {
            return new a().init()
        }
    };
    c.sf = b
})(window, jQuery);
(function(c, d) {
    var a = function(g, f) {
        var e = this;
        var h = {};
        e.element = g;
        e.$element = d(g);
        e.settings = d.extend({}, h, f);
        e.stickyPlans = d(".sticky-pricing-plans");
        e.topNav = ".topNav .topNav_container";
        return e
    };
    a.prototype.init = function() {
        var e = this;
        e.getElements();
        e.udpateTryButtons();
        if (d("[data-pricing]").hasClass("home")) {
            e.staggerTiles();
            d(c).on("debouncedresize", function() {
                if ((b.siteUtil.getBreakpoint() === "large") || (b.siteUtil.getBreakpoint() === "medium")) {
                    e.staggerTiles()
                }
            })
        } else {
            e.featureCounter()
        }
        e.elements.toggleSwitch.on("change", function(f) {
            e.toggleModels()
        });
        e.elements.toggleButtons.on("click", function(g) {
            var f = d(g.target);
            if (f.is(".annually")) {
                e.elements.toggleSwitch.prop("checked", true)
            } else {
                e.elements.toggleSwitch.prop("checked", false)
            }
            e.elements.toggleSwitch.change()
        });
        e.elements.toggleSwitch.change();
        if (e.stickyPlans.length > 0) {
            e.moveIntoNav();
            e.scrollFunctions()
        }
        return e
    };
    a.prototype.getElements = function() {
        var e = this;
        e.elements = {};
        e.elements.toggleMenu = e.$element.find(".toggle-menu");
        e.elements.toggleButtons = e.elements.toggleMenu.find(".option");
        e.elements.toggleSwitch = e.elements.toggleMenu.find(".switch input");
        e.elements.pricingTiles = e.$element.find("[data-even-height-item]");
        e.elements.winningFeatures = e.$element.find(".winning-features");
        return e
    };
    a.prototype.toggleModels = function() {
        var e = this;
        e.$element.trigger("change.pricing");
        if (e.elements.toggleSwitch.is(":checked")) {
            e.$element.trigger("showAnnual.pricing");
            e.$element.removeClass("monthly");
            e.$element.addClass("annually")
        } else {
            e.$element.trigger("showMonthly.pricing");
            e.$element.removeClass("annually");
            e.$element.addClass("monthly")
        }
        return e
    };
    a.prototype.staggerTiles = function() {
        var e = this;
        e.elements.pricingTiles.each(function(f, g) {
            var g = d(g);
            if (f == 0) {
                g.css("margin-top", "20px")
            } else {
                if (f == 1) {
                    g.css("margin-top", "10px");
                    g.css("padding-top", "50px")
                } else {
                    g.css("padding-top", "60px")
                }
            }
        })
    };
    a.prototype.featureCounter = function() {
        var e = this;
        e.elements.winningFeatures.each(function(h, j) {
            var k = d("li", j).length;
            var g = d("li.checked", j).length;
            var f = d(j).siblings(".winning-features-mobile").find(".feature-count");
            f.text(g + "/" + k)
        })
    };
    a.prototype.udpateTryButtons = function() {
        var e = this;
        if (b.siteUtil.country == "") {
            setTimeout(function() {
                e.udpateTryButtons()
            }.bind(e), 200)
        } else {
            if (b.siteUtil.country != "US" && b.siteUtil.country != "PR" && b.siteUtil.country != "CA") {
                d(".pricing.default a[href*='/trial'], .pricing a[href*='/virtual-data-room']").each(function() {
                    if (d(this).hasClass("sf-blue")) {
                        d(this).removeClass("tertiary").removeClass("secondary").addClass("primary")
                    } else {
                        d(this).removeClass("tertiary").removeClass("sf-grey").addClass("secondary")
                    }
                })
            }
        }
    };
    a.prototype.moveIntoNav = function() {
        var e = this;
        d(".navBottomBar.pn-target", d(e.topNav)).after(d(e.stickyPlans))
    };
    a.prototype.scrollFunctions = function() {
        var f, e = this;
        c.addEventListener("scroll", function(g) {
            if (f) {
                c.cancelAnimationFrame(f)
            }
            f = c.requestAnimationFrame(function() {
                e.hideShowStickyPlans()
            })
        }, false)
    };
    a.prototype.hideShowStickyPlans = function() {
        var e = this;
        e.allPlansInclude = d(".plans-include");
        if (e.elementVisible(e.allPlansInclude)) {
            e.stickyPlans.slideDown(200)
        } else {
            e.stickyPlans.slideUp(200)
        }
    };
    a.prototype.elementVisible = function(h) {
        var f = d(h).offset().top;
        var i = f + d(h).outerHeight();
        var e = d(c).scrollTop();
        var g = e + d(c).height();
        return i > e && f < g
    };
    d.fn.pricing = function(e) {
        return this.each(function(g, f) {
            return new a(f, e).init()
        })
    };
    var b = c.sf || {};
    b.pricing = {
        init: function() {
            d("[data-pricing]").pricing()
        }
    };
    c.sf = b
})(window, jQuery);
(function(c, d) {
    var a = function(g, f) {
        var e = this;
        var h = {};
        e.element = g;
        e.settings = d.extend({}, h, f, true);
        e.SPEED_MAP = Object.freeze({
            "default": 60,
            fast: 80,
            slow: 40
        });
        return e
    };
    a.prototype.init = function() {
        var e = this;
        var f;
        e.getLayers();
        e.positionLayers();
        d(c).on("scroll", function(g) {
            e.positionLayers()
        });
        return e
    };
    a.prototype.getLayers = function() {
        var e = this;
        var f = d(e.element).find("[data-parallax-layer]");
        e.layers = [];
        f.each(function(h, g) {
            e.layers[h] = {
                element: g,
                speed: e.getLayerSpeed(g)
            }
        });
        return e
    };
    a.prototype.getLayerSpeed = function(g) {
        var f = this;
        var e = d(g).data("speed") || d(g).attr("[data-speed]");
        var h;
        if (f.SPEED_MAP[e]) {
            h = f.SPEED_MAP[e]
        } else {
            if (/^\d+$/.test(e) && e > 0) {
                h = e
            } else {
                h = f.SPEED_MAP["default"]
            }
        }
        return h
    };
    a.prototype.positionLayers = function() {
        var e = this;
        var f = e.element.getBoundingClientRect().top;
        d(e.layers).each(function(h, g) {
            d(g.element).css({
                top: (f * (g.speed / 100)) + "px"
            })
        });
        return e
    };
    d.fn.parallaxScroller = function(e) {
        return this.each(function(g, f) {
            return new a(f, e).init()
        })
    };
    var b = c.sf || {};
    b.parallaxScroller = {
        init: function() {
            d("[data-parallax]").parallaxScroller()
        }
    };
    c.sf = b
})(window, jQuery);
(function(b, c) {
    var a = b.sf || {};
    a.rsForm = a.rsForm || {
        init: function() {
            c("#rs-form input#phone").focus(function() {
                optin.hideShowOptinError("email")
            });
            c("#rs-form input#phone").blur(function() {
                optin.hideShowOptinError("phone")
            })
        }
    };
    b.sf = a
})(window, jQuery);
(function(b, c) {
    var a = b.sf || {};
    a.partnerForm = a.partnerForm || {
        init: function() {
            c("#partner-form input#phone").focus(function() {
                c("#partner-form .captchaWrapper").slideDown(500)
            });
            c("#partner-form input#phone").focus(function() {
                optin.hideShowOptinError("email")
            });
            c("#partner-form input#company").focus(function() {
                optin.hideShowOptinError("phone")
            })
        }
    };
    b.sf = a
})(window, jQuery);
(function(b, c) {
    var a = b.sf || {};
    a.events = a.events || {
        upcoming: ".events .upcoming",
        previous: ".events .previous",
        dateAttribute: "data-date",
        init: function() {
            var f = this;
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var d = new Date();
            d = new Date(e[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear());
            c(f.upcoming).each(function() {
                var h = c(this).children("div.columns").length;
                var g = 0;
                c(this).children("div.columns").each(function() {
                    var i = new Date(c(this).attr(f.dateAttribute));
                    i = new Date(e[i.getMonth()] + " " + i.getDate() + " " + i.getFullYear());
                    if (i < d) {
                        c(this).hide();
                        g++
                    }
                });
                if (h == g) {
                    c(this).find(".no-events").show()
                }
            });
            c(f.previous).each(function() {
                var h = c(this).children("div.columns").length;
                var g = 0;
                c(this).children("div.columns").each(function() {
                    var i = new Date(c(this).attr(f.dateAttribute));
                    i = new Date(e[i.getMonth()] + " " + i.getDate() + " " + i.getFullYear());
                    if (i < d) {
                        c(this).find(".signup, .date").hide();
                        c(this).find(".ondemand, .watchnow").show()
                    } else {
                        c(this).hide();
                        g++
                    }
                });
                if (h == g) {
                    c(this).find(".no-events").show()
                }
            })
        }
    };
    b.sf = a
})(window, jQuery);
(function(c, d) {
    var a = function() {
        var e = this;
        e.el = ".marketo-form-content"
    };
    a.prototype.rewrite = function() {
        var e = this,
            f = d(e.el);
        f.parents(".marketo-form").addClass("enterprise-marketo");
        d(".mktField", f).each(function() {
            d(this).addClass("form-field")
        });
        d("#mktFrmSubmit", f).addClass("cta ctx-button primary ctx-blue ctx-medium-btn");
        d("#FirstName").parents(".form-field").addClass("column-50 col-left");
        d("#LastName").parents(".form-field").addClass("column-50 col-right");
        d("input, select", f).each(function() {
            var g = d(this);
            if (g.val() != "") {
                e.markDirty(d(this), false)
            }
        });
        d("select", f).each(function() {
            var g = d(this);
            g.parents(".form-field").addClass("form-select")
        })
    };
    a.prototype.bindEvents = function() {
        var e = this;
        d(".form-field input", d(e.el)).focus(function() {
            e.markDirty(d(this), false)
        });
        d(".form-field select", d(e.el)).click(function() {
            e.markDirty(d(this), true)
        });
        d(".form-field label", d(e.el)).click(function() {
            d(this).parent().find("input").focus()
        });
        d(".form-field #Country").click(function() {
            d(".form-field #State").parents("li").find("label").addClass("dirty")
        });
        e.setInputPoll()
    };
    a.prototype.setInputPoll = function() {
        var e = this;
        setInterval(function() {
            d("select:visible, input:visible", d(e.el)).each(function() {
                var f = d(this);
                if (f.val() != "") {
                    e.markDirty(f, false)
                }
            })
        }, 1500)
    };
    a.prototype.markDirty = function(f, e) {
        f.parents(".form-field").find("label").addClass("dirty");
        (e) ? f.addClass("dirty").focus(): ""
    };
    a.prototype.init = function() {
        var e = this;
        if (d(e.el).length > 0) {
            e.rewrite();
            e.bindEvents()
        }
    };
    var b = c.sf || {};
    b.marketoFormEnterprise = b.marketoFormEnterprise || {
        init: function() {
            return new a().init()
        }
    };
    c.sf = b
})(window, jQuery);
(function(c, d, b, a) {
    CTX.utils.animate.getScrollOffset = function(e) {
        var g = c(".sticky");
        var f = (g.length > 0) ? (e - (g.height())) : e;
        return f
    }
})(jQuery, $CQ, window, jQuery(document));
(function(b, c) {
    var a = b.sf || {};
    a.siteUtil = a.siteUtil || {
        isAuthor: c("html").hasClass("aem-author"),
        isProd: c("body").data("prod"),
        wcmmode: "",
        debug: "",
        mobile: "",
        today: new Date,
        nextYearToday: "",
        navigator: b.navigator.userAgent,
        navigatorAppVersion: b.navigator.appVersion,
        osName: "",
        browserType: "",
        browserVersion: "",
        country: "",
        countryName: "",
        akCountry: false,
        ip_address: "",
        gdprCountries: ["Canada", "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "United Kingdom"],
        gdprCountryCodes: ["CA", "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "CH", "GB"],
        emeaCountries: ["AD", "AE", "AF", "AL", "AM", "AO", "AQ", "AT", "AX", "AZ", "BA", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BV", "BW", "BY", "CD", "CF", "CG", "CH", "CI", "CK", "CM", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DZ", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GW", "HM", "HR", "HU", "IE", "IL", "IM", "IQ", "IR", "IS", "IT", "JE", "JO", "KE", "KG", "KM", "KW", "KZ", "LB", "LI", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MK", "ML", "MQ", "MR", "MT", "MU", "MW", "MZ", "NA", "NC", "NE", "NG", "NL", "NO", "OM", "PF", "PL", "PM", "PS", "PT", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SC", "SD", "SE", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SM", "SS", "ST", "SX", "SY", "SZ", "TD", "TF", "TG", "TJ", "TM", "TN", "TR", "TZ", "UA", "UG", "UZ", "VA", "WF", "YE", "YT", "ZA", "ZM", "ZW"],
        init: function() {
            var d = this;
            d.wcmmode = d.getURLParameter("wcmmode");
            d.debug = d.getURLParameter("test");
            d.nextYearToday = d.today.setFullYear(d.today.getFullYear() + 1);
            d.detectDevice();
            d.getBrowserOSInfo();
            d.getCountryIP(d.getAkamaiData)
        },
        getBreakpoint: function() {
            var e = "";
            var d = c(".sf-bp").css("text-align");
            switch (d) {
                case "left":
                    e = "small";
                    break;
                case "center":
                    e = "medium";
                    break;
                case "right":
                    e = "large";
                    break
            }
            return e
        },
        getCookie: function(e) {
            var f = " " + document.cookie;
            var g = f.indexOf(" " + e + "=");
            if (g == -1) {
                f = null
            } else {
                g = f.indexOf("=", g) + 1;
                var d = f.indexOf(";", g);
                if (d == -1) {
                    d = f.length
                }
                f = unescape(f.substring(g, d))
            }
            return f
        },
        getDomainName: function(d) {
            return d.replace(/\./g, "")
        },
        getFullDomainName: function(f) {
            var g = 7;
            var e = "";
            if (f.startsWith("https://")) {
                g++
            }
            f = f.substring(g);
            var d = f.indexOf("?");
            if (f.indexOf("/") > -1) {
                d = f.indexOf("/")
            }
            if (d > 0) {
                f = f.substring(0, d)
            }
            return f
        },
        getUrlNoQS: function(e) {
            var d = e.indexOf("?");
            if (d > 0) {
                e = e.substring(0, d)
            }
            return e
        },
        getURLParameter: function(d) {
            return decodeURIComponent((new RegExp("[?|&]" + d + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [, ""])[1].replace(/\+/g, "%20")) || null
        },
        getUU: function() {
            var d = this;
            if (d.getCookie("uuid") == null) {
                var e;
                if (d.getCookie("__utma")) {
                    if (d.debug) {
                        console.log("Found __utma cookie: " + JSON.stringify(d.getCookie("__utma")))
                    }
                    e = d.getCookie("__utma").split(".")[1] + d.getCookie("__utma").split(".")[2]
                } else {
                    if (d.getCookie("_ga")) {
                        if (d.debug) {
                            console.log("Found _ga cookie: " + JSON.stringify(d.getCookie("_ga")))
                        }
                        e = d.getCookie("_ga").split(".")[2] + d.getCookie("_ga").split(".")[3]
                    }
                }
                if (typeof(e) == "undefined") {
                    e = d.generateUUID()
                }
                document.cookie = "uuid=" + e + ";expires=" + d.today + ";path=/"
            }
            return d.getCookie("uuid")
        },
        generateUUID: function() {
            var f = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var d = new Date();
            var h = (Math.floor(Math.random() * 10000000000) + d.getTime()) + "";
            for (var g = 0; g < 7; g++) {
                var e = Math.floor(Math.random() * 62);
                h = h + f[e]
            }
            return h
        },
        getHostName: function(f) {
            var d = "";
            var e = f.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            if (e != null && e.length > 2 && typeof e[2] === "string" && e[2].length > 0) {
                d = e[2]
            }
            return d
        },
        getDomain: function(e) {
            console.log("getDomain URL is:" + e);
            var d = this;
            var h = d.getHostName(e);
            var f = h;
            if (h != null) {
                var g = h.split(".").reverse();
                if (g != null && g.length > 1) {
                    f = g[1] + "." + g[0];
                    if (h.toLowerCase().indexOf(".co.uk") != -1 && g.length > 2) {
                        f = g[2] + "." + f
                    }
                }
            }
            return f
        },
        generateSessionId: function() {
            var g = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var f = "0123456789abcdef";
            var e = 0;
            var h = "";
            for (var d = 0; d < 36; d++) {
                if (g[d] === "x") {
                    e = Math.random() * 16 | 0;
                    h += f[e]
                } else {
                    if (g[d] === "y") {
                        e = Math.random() * 16 | 0;
                        e &= 3;
                        e |= 8;
                        h += f[e]
                    } else {
                        h += g[d]
                    }
                }
            }
            return h
        },
        getSessionId: function() {
            var d = this;
            var e = "";
            if (d.getCookie("sessionId")) {
                e = d.getCookie("sessionId")
            } else {
                e = d.generateSessionId();
                document.cookie = "sessionId=" + e + "; path=/"
            }
            return e
        },
        detectDevice: function() {
            var d = this;
            var e = RegExp(".*(iphone|ipad|ipod).*");
            var f = d.navigator.toLowerCase();
            if (e.test(f)) {
                d.mobile = "apple"
            } else {
                if (f.indexOf("android") > 1) {
                    d.mobile = "android"
                } else {
                    if (f.indexOf("iemobile") > 1) {
                        d.mobile = "ieMobile"
                    } else {
                        if (f.indexOf("blackberry") > 1) {
                            d.mobile = "blackberry"
                        } else {
                            d.mobile = false
                        }
                    }
                }
            }
        },
        getBrowserOSInfo: function() {
            var g = this;
            var d, f, e;
            var i = "" + parseFloat(g.navigatorAppVersion);
            var h = /msie\s|trident\/|edge\//i.test(g.navigator) && !!(document.uniqueID || b.MSInputMethodContext);
            g.browserVersion = parseInt(g.navigatorAppVersion, 10);
            if ((f = g.navigator.indexOf("Opera")) != -1) {
                g.browserType = "Opera";
                i = g.navigator.substring(f + 6);
                if ((f = g.navigator.indexOf("Version")) != -1) {
                    i = g.navigator.substring(f + 8)
                }
            } else {
                if (h) {
                    g.browserType = "Microsoft Internet Explorer";
                    i = (h && +(/(edge\/|rv:|msie\s)([\d.]+)/i.exec(g.navigator)[2])) || NaN
                } else {
                    if ((f = g.navigator.indexOf("Chrome")) != -1) {
                        g.browserType = "Chrome";
                        i = g.navigator.substring(f + 7)
                    } else {
                        if ((f = g.navigator.indexOf("Safari")) != -1) {
                            g.browserType = "Safari";
                            i = g.navigator.substring(f + 7);
                            if ((f = g.navigator.indexOf("Version")) != -1) {
                                i = g.navigator.substring(f + 8)
                            }
                        } else {
                            if ((f = g.navigator.indexOf("Firefox")) != -1) {
                                g.browserType = "Firefox";
                                i = g.navigator.substring(f + 8)
                            } else {
                                if ((d = g.navigator.lastIndexOf(" ") + 1) < (f = g.navigator.lastIndexOf("/"))) {
                                    g.browserType = g.navigator.substring(d, f);
                                    i = g.navigator.substring(f + 1);
                                    if (g.browserType.toLowerCase() == g.browserType.toUpperCase()) {
                                        g.browserType = navigator.appName
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!h) {
                if ((e = i.indexOf(";")) != -1) {
                    i = i.substring(0, e)
                }
                if ((e = i.indexOf(" ")) != -1) {
                    i = i.substring(0, e)
                }
            }
            g.browserVersion = parseInt("" + i, 10);
            if (isNaN(g.browserVersion)) {
                g.browserVersion = "" + parseFloat(navigator.appVersion)
            }
            if (g.navigatorAppVersion.indexOf("Win") != -1) {
                g.osName = "Windows"
            } else {
                if (g.navigatorAppVersion.indexOf("Mac") != -1) {
                    g.osName = "MacOS"
                } else {
                    if (g.navigatorAppVersion.indexOf("X11") != -1) {
                        g.osName = "UNIX"
                    } else {
                        if (g.navigatorAppVersion.indexOf("Linux") != -1) {
                            g.osName = "Linux"
                        }
                    }
                }
            }
        },
        getCountryIP: function(e) {
            var d = this;
            c.ajax({
                type: "GET",
                async: false,
                url: "https://api.company-target.com/api/v2/ip.json?key=2e20d13c99d694bce9b270b930b24fa41f05e6de",
                contentType: "application/json",
                dataType: "jsonp",
                success: function(f) {
                    if (!d.akCountry) {
                        d.country = f.registry_country_code
                    }
                    d.countryName = f.registry_country;
                    d.ip_address = f.ip
                }
            });
            if (b.location.hostname.indexOf("www.sharefile.com") != -1) {
                e(d)
            }
        },
        getAkamaiData: function(d) {
            var e = d,
                f = b.location.origin,
                g = f + "/bin/citrix/personalization/geo";
            c.ajax({
                type: "GET",
                async: false,
                url: g,
                contentType: "application/json",
                dataType: "json",
                success: function(h) {
                    e.akCountry = true;
                    e.country = h.country_code
                }
            })
        }
    };
    b.sf = a
})(window, jQuery);
(function(c, d) {
    var a = function(f) {
        var e = this;
        e.element = f;
        e.buyLink = d(f).attr("data-buy")
    };
    a.prototype.init = function() {
        var e = this;
        if (b.siteUtil.country == "") {
            setTimeout(function() {
                e.init()
            }.bind(e), 200)
        } else {
            if (b.siteUtil.country == "US" || b.siteUtil.country == "PR" || b.siteUtil.country == "CA") {
                d(e.element).attr("href", e.buyLink).removeAttr("data-buy")
            }
        }
    };
    d.fn.handleBuyNow = function() {
        d(this).each(function(e, f) {
            return new a(f).init()
        })
    };
    var b = c.sf || {};
    b.buyNow = b.buyNow || {
        init: function() {
            d("a[data-buy]").handleBuyNow()
        }
    };
    c.sf = b
})(window, jQuery);
(function(c) {
    function a(g, f, d) {
        var e;
        return function() {
            var k = this,
                j = arguments;
            var i = function() {
                e = null;
                if (!d) {
                    g.apply(k, j)
                }
            };
            var h = d && !e;
            clearTimeout(e);
            e = setTimeout(i, f);
            if (h) {
                g.apply(k, j)
            }
        }
    }
    var b = c.sf || {};
    b.debounce = a;
    c.sf = b
})(window);
(function(c, d) {
    var a = function(g, f) {
        var e = this;
        e.element = g;
        e.metadata = d(g).data();
        e.settings = d.extend({}, e.metadata, f, true)
    };
    a.prototype.init = function() {
        var e = this;
        d(e.element).dotdotdot(e.settings)
    };
    d.fn.dotdotdotAssign = function(e) {
        d(this).each(function(f, g) {
            return new a(g, e).init()
        })
    };
    var b = c.sf || {};
    b.dotDotDot = b.dotDotDot || {
        init: function() {
            d(document).ready(function() {
                d("[data-dotdotdot]").dotdotdotAssign()
            })
        }
    };
    c.sf = b
})(window, jQuery);
var formUrlParam = formUrlParam || {
    domainName: "",
    referrer: "",
    referrerHostName: "",
    urlParam: "",
    allSources: "",
    allSourcesInput: "",
    inputStr: "",
    paramString: "",
    cat: "",
    src: "direct",
    cookieDate: "",
    sourcesCaptured: false,
    currentPage: "",
    paramRegEx: /(^|\&)src=/i,
    setCat: function() {
        if (sf.siteUtil.getURLParameter("cat")) {
            var a = new Date();
            a.setDate(a.getDate() + 1);
            document.cookie = "cat=" + sf.siteUtil.getURLParameter("cat") + ";expires=" + a + ";path=/"
        }
        if (!sf.siteUtil.getURLParameter("cat") && sf.siteUtil.getCookie("cat") != null) {
            this.cat = "&cat=" + sf.siteUtil.getCookie("cat")
        }
    },
    setSrc: function() {
        if (this.referrer && this.referrer.indexOf(this.domainName) < 0) {
            this.src = sf.siteUtil.getDomainName(this.referrerHostName)
        }
        if (sf.siteUtil.getURLParameter("src")) {
            this.src = sf.siteUtil.getURLParameter("src")
        }
    },
    getAllURLParam: function() {
        if (this.paramString) {
            this.urlParam = this.paramString
        }
        if (!this.urlParam) {
            this.urlParam = "src=" + this.src
        } else {
            if (!this.paramRegEx.test(this.urlParam)) {
                this.urlParam = "src=" + this.src + "&" + this.urlParam
            }
        }
        this.inputStr = "";
        var d = this.urlParam;
        var a = d.split("&");
        for (var b = 0; b < a.length; b++) {
            var c = a[b].split("=");
            if (c[1]) {
                this.inputStr += "<input type='hidden' value='" + c[1] + "' name='" + c[0] + "'>"
            }
        }
    },
    getAllSources: function() {
        this.allSources = sf.siteUtil.getCookie("allSources") != null ? sf.siteUtil.getCookie("allSources") : "";
        var a = "";
        var b = false;
        if (this.allSources) {
            a = ",";
            if (this.src == this.allSources.substring(this.allSources.lastIndexOf(",") + 1)) {
                b = true
            }
        }
        if (this.src && !this.sourcesCaptured && this.referrer.indexOf(this.domainName) < 0 && !b) {
            this.allSources += (a + this.src);
            document.cookie = "allSources=" + this.allSources + ";expires=" + this.cookieDate + ";path=/"
        }
        if (this.allSources) {
            this.allSourcesInput = "<input type='hidden' value='" + this.allSources + "' name='AllSources'>"
        }
    },
    appendPramsToLinks: function() {
        $("a[href*='/buy/?'],a[href$='/buy'],a[href*='/trial/cq/p1n.aspx/?'],a[href$='/trial/cq/p1n.aspx']").each(function() {
            var b = $(this).attr("href");
            var c = "";
            var a = "?";
            var f = formUrlParam.urlParam ? formUrlParam.urlParam + "&" : "";
            var d = sf.siteUtil.getCookie("allSources") ? "&AllSources=" + sf.siteUtil.getCookie("allSources") : "";
            var e = sf.siteUtil.getCookie("sessionId") ? "&SessionId=" + sf.siteUtil.getSessionId() : "";
            if (b.indexOf("?") > 0) {
                a = "&";
                c = b.substring(b.indexOf("?") + 1)
            }
            f += "UserId=" + sf.siteUtil.getUU() + d + e + formUrlParam.cat;
            if (!formUrlParam.paramRegEx.test(c)) {
                $(this).attr("href", b + a + f)
            }
        })
    },
    setData: function() {
        this.referrer = sf.siteUtil.getUrlNoQS(document.referrer);
        this.referrerHostName = sf.siteUtil.getHostName(this.referrer);
        this.domainName = document.domain;
        this.paramString = location.search.substring(1);
        this.cookieDate = sf.siteUtil.nextYearToday;
        this.setCat();
        this.setSrc();
        this.currentPage = $(location).attr("href");
        this.getAllURLParam()
    },
    init: function() {
        if (!sf.siteUtil.isAuthor || sf.siteUtil.debug) {
            this.setData();
            this.getAllSources();
            this.sourcesCaptured = true;
            $(document).ready(function() {
                if (!$("form").parent().hasClass("ignore-params")) {
                    $("form").append("<input type='hidden' value='" + sf.siteUtil.getUU() + "' name='UserId'>");
                    $("form").append("<input type='hidden' value='" + sf.siteUtil.getSessionId() + "' name='SessionId'>");
                    $("form").append(formUrlParam.inputStr + formUrlParam.allSourcesInput)
                }
                setTimeout(function() {
                    formUrlParam.appendPramsToLinks(this.urlParam)
                }, 1000)
            })
        }
    }
};
formUrlParam.init();
! function(a, b) {
    "object" == typeof exports && "undefined" != typeof module ? b() : "function" == typeof define && define.amd ? define(b) : b()
}(0, function() {
    function j() {}

    function d(c) {
        if (!(this instanceof d)) {
            throw new TypeError("Promises must be constructed via new")
        }
        if ("function" != typeof c) {
            throw new TypeError("not a function")
        }
        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], h(c, this)
    }

    function m(f, c) {
        for (; 3 === f._state;) {
            f = f._value
        }
        0 !== f._state ? (f._handled = !0, d._immediateFn(function() {
            var o = 1 === f._state ? c.onFulfilled : c.onRejected;
            if (null !== o) {
                var e;
                try {
                    e = o(f._value)
                } catch (i) {
                    return void g(c.promise, i)
                }
                b(c.promise, e)
            } else {
                (1 === f._state ? b : g)(c.promise, f._value)
            }
        })) : f._deferreds.push(c)
    }

    function b(i, f) {
        try {
            if (f === i) {
                throw new TypeError("A promise cannot be resolved with itself.")
            }
            if (f && ("object" == typeof f || "function" == typeof f)) {
                var n = f.then;
                if (f instanceof d) {
                    return i._state = 3, i._value = f, void a(i)
                }
                if ("function" == typeof n) {
                    return void h(function(o, p) {
                        return function() {
                            o.apply(p, arguments)
                        }
                    }(n, f), i)
                }
            }
            i._state = 1, i._value = f, a(i)
        } catch (c) {
            g(i, c)
        }
    }

    function g(c, f) {
        c._state = 2, c._value = f, a(c)
    }

    function a(f) {
        2 === f._state && 0 === f._deferreds.length && d._immediateFn(function() {
            f._handled || d._unhandledRejectionFn(f._value)
        });
        for (var n = 0, c = f._deferreds.length; c > n; n++) {
            m(f, f._deferreds[n])
        }
        f._deferreds = null
    }

    function h(i, o) {
        var c = !1;
        try {
            i(function(n) {
                c || (c = !0, b(o, n))
            }, function(n) {
                c || (c = !0, g(o, n))
            })
        } catch (f) {
            if (c) {
                return
            }
            c = !0, g(o, f)
        }
    }
    var l = setTimeout;
    d.prototype["catch"] = function(c) {
        return this.then(null, c)
    }, d.prototype.then = function(f, e) {
        var c = new this.constructor(j);
        return m(this, new function(o, p, i) {
            this.onFulfilled = "function" == typeof o ? o : null, this.onRejected = "function" == typeof p ? p : null, this.promise = i
        }(f, e, c)), c
    }, d.all = function(c) {
        return new d(function(v, p) {
            function u(o, n) {
                try {
                    if (n && ("object" == typeof n || "function" == typeof n)) {
                        var i = n.then;
                        if ("function" == typeof i) {
                            return void i.call(n, function(f) {
                                u(o, f)
                            }, p)
                        }
                    }
                    e[o] = n, 0 == --q && v(e)
                } catch (r) {
                    p(r)
                }
            }
            if (!c || "undefined" == typeof c.length) {
                throw new TypeError("Promise.all accepts an array")
            }
            var e = Array.prototype.slice.call(c);
            if (0 === e.length) {
                return v([])
            }
            for (var q = e.length, s = 0; e.length > s; s++) {
                u(s, e[s])
            }
        })
    }, d.resolve = function(c) {
        return c && "object" == typeof c && c.constructor === d ? c : new d(function(e) {
            e(c)
        })
    }, d.reject = function(c) {
        return new d(function(f, e) {
            e(c)
        })
    }, d.race = function(c) {
        return new d(function(q, f) {
            for (var p = 0, e = c.length; e > p; p++) {
                c[p].then(q, f)
            }
        })
    }, d._immediateFn = "function" == typeof setImmediate && function(c) {
        setImmediate(c)
    } || function(c) {
        l(c, 0)
    }, d._unhandledRejectionFn = function(c) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", c)
    };
    var k = function() {
        if ("undefined" != typeof self) {
            return self
        }
        if ("undefined" != typeof window) {
            return window
        }
        if (void 0 !== k) {
            return k
        }
        throw Error("unable to locate global object")
    }();
    k.Promise || (k.Promise = d)
});
(function(c, d) {
    var a = function(h, g) {
        var f = this;
        var i = {};
        f.formPoll = d(".sf-form");
        f.element = h;
        f.$element = d(h);
        f.inputs = d(h).find("input, textarea, select");
        f.buttons = d(h).find("button");
        f.metadata = d(h).data("form-options");
        f.settings = d.extend({}, i, g, f.metadata, true);
        return f
    };
    a.prototype.init = function() {
        var f = this;
        f.inputs.removeAttr("placeholder");
        f.settings.onkeyup = function(h, g) {
            d(h).trigger("validate");
            this.element(h)
        };
        f.validator = f.$element.validate(f.settings);
        f.addStyles();
        f.toggleSubmitButton();
        f.setInputPoll();
        return f
    };
    a.prototype.setInputPoll = function() {
        var f = this;
        setInterval(function() {
            g()
        }, 1500);

        function g() {
            d("select:visible, input:visible", d(f.formPoll)).each(function() {
                var h = d(this);
                if (h.val() != "") {
                    f.markDirty(h, false)
                }
            })
        }
    };
    a.prototype.markDirty = function(g, f) {
        g.parents(".form-field").find("label").addClass("dirty");
        (f) ? g.addClass("dirty").focus(): ""
    };
    a.prototype.addStyles = function() {
        var h = this;

        function i(j, k) {
            if (j && k && !d(j).hasClass(k)) {
                d(j).addClass(k)
            }
        }

        function g(j, k) {
            i(j, k);
            i(j.wrapperElem, k);
            i(j.fieldLabels, k)
        }

        function f(j, k) {
            d(j).removeClass(k);
            d(j.wrapperElem).removeClass(k);
            d(j.fieldLabels).removeClass(k)
        }
        h.inputs.each(function(k, j) {
            this.isRequired = (d(j).is(":required") || (d(j).prop("required") == true) || d(j).is("[type=password]"));
            this.wrapperElem = d(j).closest(".form-field");
            this.helperText = d(j).siblings(".field-helper");
            this.fieldLabels = d(j).siblings("label");
            this.clearButtons = d(j).siblings("[data-clear-field]");
            this.clearButtons.on("click", function(l) {
                d(j).change(function(m) {
                    d(j).valid()
                }).val("").change()
            });
            if (this.isRequired) {
                i(this.wrapperElem, "required")
            }
            if (d(j).val()) {
                g(j, "dirty")
            }
            if (d(j).is("select")) {
                i(this.wrapperElem, "selectbox");
                if (d(j).find("option:selected")) {
                    g(j, "dirty")
                }
            } else {
                switch (d(j).attr("type")) {
                    case "checkbox":
                        i(this.wrapperElem, "checkbox");
                        break;
                    case "radio":
                        i(this.wrapperElem, "radio");
                        break;
                    default:
                        i(this.wrapperElem, "default")
                }
            }
        });
        h.inputs.on("validate.highlight", function(j) {
            g(d(j.target)[0], "error");
            d(j.target).context.helperText.hide()
        }).on("validate.unhighlight", function(j) {
            f(d(j.target)[0], "error");
            d(j.target).context.helperText.show()
        }).on("focus", function(j) {
            g(d(j.target)[0], "focus");
            g(d(j.target)[0], "dirty")
        }).on("focusout", function(j) {
            f(d(j.target)[0], "focus")
        });
        d("label").click(function(j) {
            d(this).siblings("input").focus();
            g(d(j.target)[0], "focus");
            g(d(j.target)[0], "dirty")
        });
        return h
    };
    a.prototype.toggleSubmitButton = function() {
        var g = this;
        var f;
        g.buttons.each(function(j, h) {
            f = (d(h).attr("type") === "submit");
            if (f) {
                g.$element.on("validate", function(i) {
                    d(h).prop("disabled", !g.validator.checkForm())
                })
            }
        });
        return g
    };
    d.fn.formValidation = function(f) {
        d(this).each(function(g, h) {
            return new a(h, f).init()
        })
    };
    var e = function(g) {
        var f = this;
        var h = {
            onfocusout: function(j, i) {
                d(j).trigger("validate");
                this.element(j)
            },
            onclick: function(j, i) {
                d(j).trigger("validate");
                this.element(j)
            },
            highlight: function(k, i, j) {
                d(k).trigger("validate.highlight")
            },
            unhighlight: function(k, i, j) {
                d(k).trigger("validate.unhighlight")
            },
            errorElement: "i",
            errorPlacement: function(i, k) {
                if (!k.is("select")) {
                    if (!i.hasClass("field-helper")) {
                        i.addClass("field-helper")
                    }
                    if (!i.hasClass("has-tip")) {
                        i.addClass("has-tip")
                    }
                    i.attr("data-tooltip", true).attr("data-options", "position: right; templateClasses: error;").insertAfter(k);
                    f.errorIconClick();
                    try {
                        i.foundation()
                    } catch (j) {}
                }
            },
            rules: {
                password: {
                    password: true,
                    minlength: 8,
                    required: true
                },
                firstname: {
                    maxlength: 150,
                    nospchar: true
                },
                FirstName: {
                    maxlength: 150,
                    nospchar: true
                },
                lastname: {
                    maxlength: 150,
                    nospchar: true
                },
                LastName: {
                    maxlength: 150,
                    nospchar: true
                },
                email: {
                    maxlength: 150
                },
                Email: {
                    maxlength: 150
                },
                Phone: {
                    maxlength: 20,
                    phone: true
                },
                company: {
                    maxlength: 150,
                    nospchar: true
                },
                Company: {
                    maxlength: 150,
                    nospchar: true
                },
                comments: {
                    maxlength: 250,
                    nospcharcomments: true
                }
            },
            messages: {
                contact: "Please enter a valid email address or phone number",
                date: "Please enter a valid date",
                email: "Please enter a valid email address",
                eventId: "Please enter a valid event ID",
                password: "Please enter a valid password",
                phone: "Please enter a valid phone number",
                firstname: "Please enter a valid name",
                lastname: "Please enter a valid name",
                company: "Please enter a valid company name",
                comments: "Invalid entry"
            }
        };
        f.settings = d.extend({}, h, g, true);
        return f
    };
    e.prototype.init = function() {
        var f = this;
        f.overrideMethods();
        f.addMethods();
        d.validator.setDefaults(f.settings);
        return f
    };
    e.prototype.overrideMethods = function() {
        d.validator.methods.email = function(h, g) {
            var f = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return (f.test(h) || this.optional(g))
        }
    };
    e.prototype.addMethods = function() {
        d.validator.addMethod("email", function(h, g) {
            var f = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return (f.test(h) || this.optional(g))
        }, "Invalid email (expected format: valid email)");
        d.validator.addMethod("contact", function(g, f) {
            return (d.validator.methods.email.call(this, g, f) || d.validator.methods.phone.call(this, g, f) || this.optional(f))
        }, "Invalid contact (expected format: valid email or phone number as #-###-###-####");
        d.validator.addMethod("date", function(h, g) {
            var f = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
            return (f.test(h) || this.optional(g))
        }, "Invalid date (expected format: dd/mm/yyyy)");
        d.validator.addMethod("eventId", function(h, g) {
            var f = /^\d{9}$/;
            return (f.test(h.replace(/-/g, "")) || this.optional(g))
        }, "Invalid event ID (expected format: #########)");
        d.validator.addMethod("phone", function(h, g) {
            var f = /^([\d\+\-\(\.\)\s]{7,20})*$/;
            return (f.test(h) || this.optional(g))
        }, "Invalid phone number (expected format: #-###-###-####)");
        d.validator.addMethod("password", function(h, g) {
            var f = /^(?=.{8,})(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).*$/;
            return (f.test(h) || this.optional(g))
        }, "Invalid password");
        d.validator.addMethod("captcha", function(g, f) {
            var h = c.captchaResp && typeof c.captchaResp.success !== "undefined" ? c.captchaResp.success : false;
            return h
        }, "Invalid captcha");
        d.validator.addMethod("nospchar", function(h, g) {
            var f = /^([0-9a-zA-Z\s-.,'])+$/;
            return (f.test(h) || this.optional(g))
        }, "Please Fill Correct Value in Field.");
        d.validator.addMethod("nospcharcomments", function(h, g) {
            var f = /^([0-9a-zA-Z\s-.,@!&"'?:])+$/;
            return (f.test(h) || this.optional(g))
        }, "Please Fill Correct Value in Field.")
    };
    c.recaptchaCallback = function() {
        c.captchaResp = {};
        if (grecaptcha && grecaptcha.getResponse()) {
            var f = function() {
                return Promise.resolve(d.get("/bin/citrix/validateCaptcha", {
                    response: grecaptcha.getResponse()
                }))
            };
            f().then(function(g) {
                c.captchaResp = JSON.parse(g);
                d("[data-rule-captcha]").valid();
                d("[data-rule-captcha]").trigger("validate")
            }, function(g) {
                console.log(g)
            })
        }
    };
    e.prototype.hideShowFieldError = function(f) {
        if (d(f).find(".field-error:visible").length) {
            d(f).find(".field-error").hide()
        } else {
            if (d(f).hasClass("error")) {
                d(f).find(".field-error").show()
            }
        }
    };
    e.prototype.hideShowOptinError = function(i) {
        if (i == "email") {
            var f = d("form .email-optin");
            var h = d("input[name='mktgoptin']:checked").val();
            if (h == null) {
                f.addClass("error")
            } else {
                f.removeClass("error")
            }
        } else {
            if (i == "phone") {
                var j = d("form .phone-optin");
                var g = d("input[name='mktgphoneoptin']:checked").val();
                if (g == null) {
                    j.addClass("error")
                } else {
                    j.removeClass("error")
                }
            }
        }
    };
    e.prototype.errorIconClick = function() {
        var f = this;
        d(".form-field.error .field-helper").click(function() {
            f.hideShowFieldError(d(this).parent())
        })
    };
    var b = c.sf || {};
    b.formValidation = {
        init: function() {
            var f = new e({}).init();
            d("form").formValidation()
        }
    }
})(window, jQuery);
(function(c, d) {
    var a = function() {
        var e = this;
        e.active = ".countryList > a span";
        e.country = ".countryList .ddown a";
        e.localeStr = "locale";
        e.cookie = "SFLocale";
        e.currentLocale = b.siteUtil.getCookie(e.cookie)
    };
    a.prototype.init = function() {
        var e = this;
        var f = (e.currentLocale) ? "flag " + e.currentLocale.split("_")[1].toLowerCase() : "flag us";
        d(e.active).attr("class", f);
        d(e.country).click(function(h) {
            h.preventDefault();
            var i = b.siteUtil.today;
            i.setTime(i.getTime() + (7 * 24 * 60 * 60 * 1000));
            var g = c.location.host;
            document.cookie = e.cookie + "=" + d(this).data(e.localeStr) + ";expires=" + i.toUTCString() + ";path=/;domain=." + g;
            if (b.siteUtil.getCookie(e.cookie) != e.currentLocale) {
                location.reload()
            }
        })
    };
    var b = c.sf || {};
    b.countrySelector = b.countrySelector || {
        init: function() {
            return new a().init()
        }
    };
    c.sf = b
})(window, jQuery);
(function(b, c) {
    var d = function() {
        var e = this;
        e.topNavPhone = ".topNav_container .navBottomBar .phone";
        e.pricingCallCTA = ".pricing-call-cta";
        e.vdrCallCTA = ".vdr-call-cta";
        e.trySpecialistCTA = "#try-support-options";
        e.pricingVdrUsersMon = ".pricing .virtual-data-room .users .monthly";
        e.pricingVdrUsersAnn = ".pricing .virtual-data-room .users .annually";
        e.pricingIntString = "5 Employee Users<br>(online only - call 1.919.745.6111<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if you need more users or storage)"
    };
    d.prototype.init = function() {
        var e = this;
        if (a.siteUtil.country == "") {
            setTimeout(function() {
                e.init()
            }.bind(e), 200)
        } else {
            if (c.inArray(a.siteUtil.country, a.siteUtil.emeaCountries) >= 0) {
                c(e.topNavPhone).hide();
                if (c(e.pricingCallCTA).length) {
                    c(e.pricingCallCTA).hide()
                }
                if (c(e.vdrCallCTA).length) {
                    c(e.vdrCallCTA).hide()
                }
                if (c(e.trySpecialistCTA).length) {
                    c(e.trySpecialistCTA).find(".columns.large-6").first().hide();
                    c(e.trySpecialistCTA).find(".columns.large-6").last().addClass("large-12").removeClass("large-6");
                    c(e.trySpecialistCTA).find(".row.bordered").removeClass("bordered")
                }
                if (c(e.pricingVdrUsersAnn).length) {
                    c(e.pricingVdrUsersAnn).html(e.pricingIntString);
                    c(e.pricingVdrUsersMon).html(e.pricingIntString)
                }
            }
        }
    };
    var a = b.sf || {};
    a.hideInEmea = a.hideInEmea || {
        init: function() {
            return new d().init()
        }
    };
    b.sf = a
})(window, jQuery);
(function(b, c) {
    var a = b.sf || {};
    a.emailForm = a.emailForm || {
        init: function() {
            var d = "";
            c(".emailForm").on("submit", function(g) {
                g.preventDefault();
                if (a.emailForm.checkCookie()) {
                    c("input[type=text], input[type=radio]:checked, input[type=checkbox]:checked, textarea, select", this).each(function() {
                        if (c(this).val()) {
                            d += c(this).attr("data-label") + " - " + c(this).val() + "\n\n"
                        }
                    });
                    var f = new FormData(this);
                    f.append("emailMessage", d);
                    a.emailForm.sendEmail(f)
                } else {
                    c(".max-lb-trigger").click()
                }
            })
        },
        sendEmail: function(d) {
            c.ajax({
                type: "POST",
                url: "/bin/citrix/sharefileSendMail",
                processData: false,
                contentType: false,
                data: d,
                success: function(g) {
                    var f = jQuery.parseJSON(g);
                    var e = f.status;
                    if (e == "success") {
                        b.location = c(".emailForm").attr("data-success")
                    } else {
                        if (!c("html").hasClass("lb-open")) {
                            c(".error-lb-trigger").click()
                        }
                    }
                }
            })
        },
        getCookie: function(f) {
            var d = "; " + document.cookie;
            var e = d.split("; " + f + "=");
            if (e.length == 2) {
                return e.pop().split(";").shift()
            }
        },
        checkCookie: function() {
            var e = b.location.href;
            var d = this.getCookie(e);
            if (d != "" && d < 3) {
                d++;
                document.cookie = e + "=" + d + "; " + 1;
                return true
            } else {
                if (d != "" && d > 2) {
                    return false
                } else {
                    d = 1;
                    e = b.location.href;
                    if (d != "" && d != null) {
                        document.cookie = e + "=" + d + "; " + 1
                    }
                    return true
                }
            }
        }
    };
    var a = b.sf || {};
    b.sf = a
})(window, jQuery);
(function(b, c) {
    var d = function() {
        var e = this;
        e.countryDropDown = "select#Country";
        e.countryClean = "";
        e.mktgOptIn = c(":radio[name='mktgoptin'][value='true']").add(":radio[name='mktgphoneoptin'][value='true']");
        e.countryMap = {
            "Czech Republic": "Czechia"
        }
    };
    d.prototype.init = function() {
        var e = this;
        if (a.siteUtil.country == "" && a.siteUtil.countryName == "") {
            setTimeout(function() {
                e.init()
            }.bind(e), 200)
        } else {
            if (a.siteUtil.country || a.siteUtil.countryName) {
                e.updateDropDown();
                e.countryCheck()
            }
        }
        e.countryChangeEvent()
    };
    d.prototype.updateDropDown = function() {
        var e = this;
        if (a.siteUtil.akCountry) {
            c(e.countryDropDown + " option[data-country-code='" + a.siteUtil.country + "']").prop("selected", true)
        } else {
            if (a.siteUtil.country != "") {
                e.countryClean = (e.countryMap[a.siteUtil.countryName]) ? e.countryMap[a.siteUtil.countryName] : a.siteUtil.countryName;
                c(e.countryDropDown).val(e.countryClean)
            }
        }
    };
    d.prototype.countryCheck = function() {
        var e = this;
        if ((a.siteUtil.akCountry && c.inArray(a.siteUtil.country, a.siteUtil.gdprCountryCodes) >= 0) || (a.siteUtil.countryName != "" && c.inArray(a.siteUtil.countryName, a.siteUtil.gdprCountries) >= 0) || (e.countryClean && c.inArray(e.countryClean, a.siteUtil.gdprCountries) >= 0)) {
            c("form").addClass("gdpr");
            e.mktgOptIn.removeAttr("checked")
        } else {
            e.mktgOptIn.prop("checked", true)
        }
    };
    d.prototype.countryChangeEvent = function() {
        var e = this;
        c(e.countryDropDown).change(function() {
            var f = c("option:selected", this);
            if (c.inArray(f.val(), a.siteUtil.gdprCountries) >= 0) {
                c("form").addClass("gdpr");
                e.mktgOptIn.removeAttr("checked")
            } else {
                c("form").removeClass("gdpr");
                e.mktgOptIn.prop("checked", true)
            }
        })
    };
    var a = b.sf || {};
    a.gdpr = a.gdpr || {
        init: function() {
            return new d().init()
        }
    };
    b.sf = a
})(window, jQuery);
var optin = optin || {
    hideShowOptinError: function(d) {
        if (d == "email") {
            var a = $("form .email-optin");
            var c = $("input[name='mktgoptin']:checked").val();
            if (c == null) {
                a.addClass("error")
            } else {
                a.removeClass("error")
            }
        } else {
            if (d == "phone") {
                var e = $("form .phone-optin");
                var b = $("input[name='mktgphoneoptin']:checked").val();
                if (b == null) {
                    e.addClass("error")
                } else {
                    e.removeClass("error")
                }
            }
        }
    },
    init: function() {
        $("form input[name='mktgoptin']").change(function() {
            optin.hideShowOptinError("email")
        });
        $("form input[name='mktgphoneoptin']").change(function() {
            optin.hideShowOptinError("phone")
        })
    }
};
optin.init();
(function(c, d) {
    var a = function(g, f) {
        var e = this;
        var h = {
            marketoEndpoint: b.siteUtil.isProd ? "//app-sjp.marketo.com" : "//app-sj16.marketo.com",
            munchkinid: b.siteUtil.isProd ? "027-LMP-993" : "960-QVL-486",
            formID: d(g).data("marketoForm"),
            formElem: "",
            gate: true
        };
        e.element = g;
        e.metadata = d(g).data();
        e.settings = d.extend({}, h, e.metadata, f, true);
        return e
    };
    a.prototype.init = function() {
        var e = this;
        if (e.settings.formID) {
            e.getForm().then(function(f) {
                e.formElem = f.getFormElem();
                e.initForm(e.formElem)
            }, function(f) {
                console.log(f)
            })
        } else {
            console.log("Error: Marketo form id undefined")
        }
        return e
    };
    a.prototype.getForm = function() {
        var e = this;
        var f = new Promise(function(h, g) {
            if (c.MktoForms2) {
                c.MktoForms2.loadForm(e.settings.marketoEndpoint, e.settings.munchkinid, e.settings.formID, function(i) {
                    h(i);
                    d(".marketo-form form").removeClass("loading")
                })
            } else {
                g("Marketo API not loaded")
            }
        });
        return f
    };
    a.prototype.initForm = function(e) {
        var f = this;
        e.width("auto").addClass("sf-form").removeAttr("style");
        d("#mktoForms2BaseStyle, #mktoForms2ThemeStyle + style, #mktoForms2ThemeStyle").remove();
        d(".mktoButtonWrap").addClass("ctx-button-wrap").removeAttr("style");
        d(".mktoButtonWrap button").removeClass("mktoButton").addClass("ctx-button primary ctx-blue ctx-medium-btn").attr("disabled", "disabled");
        f.formatFields();
        d(e).formValidation()
    };
    a.prototype.formatFields = function() {
        var f = this;
        var g = d(".mktoFormRow:not(.form-field)"),
            e;
        g.each(function() {
            var i = d(this),
                h, j;
            if (d(".mktoPlaceholder", i).length == 0) {
                e = d("select", i);
                h = d("input, select, textarea", i);
                j = d("input[type='checkbox']", i);
                h.removeAttr("style").after(d("[data-error='" + h.attr("id") + "']", ".mkto-error-repo"));
                d(".mktoRequiredField", i).closest(".mktoFormRow ").addClass("required");
                d("input, select, textarea", d(".mktoRequiredField", i)).attr("required", "required");
                e.before('<span class="marketo-dd-icon icon-sf-dropdown"></span>').closest(".mktoFormRow").addClass("selectbox");
                j.after(j.parents(".mktoFieldWrap").find(".mktoLabel"));
                e.change(function() {
                    f.formatFields();
                    var k = d(".mktoFormRow select:not(.dirty)").closest(".form-field");
                    d("label, select", k).addClass("dirty");
                    d(f.formElem).formValidation();
                    d(this).blur()
                });
                i.addClass("form-field")
            }
        })
    };
    a.prototype.initGdpr = function(g) {
        var f = this;
        var h = d(".mktoFormRow:not(.form-field)"),
            e;
        h.each(function() {
            var i = d(this);
            if (d(".mktoPlaceholder", i).length == 0) {
                e = d("select", i);
                d("input, select, textarea", i).removeAttr("style");
                d(".mktoRequiredField", i).closest(".mktoFormRow ").addClass("required");
                d("input, select, textarea", d(".mktoRequiredField", i)).attr("required", "required");
                e.before('<span class="marketo-dd-icon icon-sf-dropdown"></span>').closest(".mktoFormRow").addClass("selectbox");
                e.change(function() {
                    f.formatFields();
                    var j = d(".mktoFormRow select:not(.dirty)").closest(".form-field");
                    d("label, select", j).addClass("dirty");
                    d(f.formElem).formValidation();
                    d(this).blur()
                });
                i.addClass("form-field")
            }
        })
    };
    d.fn.marketoForm = function(e) {
        return this.each(function(f, g) {
            return new a(g, e).init()
        })
    };
    var b = c.sf || {};
    b.marketoForm = {
        init: function() {
            if (c.MktoForms2) {
                d("[data-marketo-form]").marketoForm()
            }
        }
    };
    c.sf = b
})(window, jQuery);
(function(c, d) {
    var a = function() {
        var e = this;
        e.contactMeForm = "form#mktoForm_212";
        e.zIndex = 500
    };
    a.prototype.init = function() {
        var e = this;
        if (d(e.contactMeForm).length) {
            f()
        }

        function f(i, h) {
            if (d(".mktoButtonRow", d(e.contactMeForm)).length > 0) {
                g(".mktoFormRow:eq(0), .mktoFormRow:eq(1)");
                g(".mktoFormRow:eq(2), .mktoFormRow:eq(3)");
                g(".mktoFormRow:eq(4), .mktoFormRow:eq(5)")
            } else {
                setTimeout(function() {
                    f(i, e)
                }, i)
            }
        }

        function g(i, h) {
            d(i, h, d(e.contactMeForm)).wrapAll("<div class='row' style='z-index: " + e.zIndex + "' />").each(function() {
                d(this).wrap("<div class='columns large-6' style='z-index: " + e.zIndex + "' />");
                e.zIndex -= 1
            })
        }
    };
    var b = c.sf || {};
    b.contactMe = b.contactMe || {
        init: function() {
            return new a().init()
        }
    };
    c.sf = b
})(window, jQuery);
(function(c, d) {
    var a = function(g, f) {
        var e = this;
        var h = {
            mediaQuery: ""
        };
        e.element = g;
        e.$element = d(g);
        e.metadata = d(g).data();
        e.settings = d.extend({}, h, e.metadata, f, true);
        return e
    };
    a.prototype.init = function() {
        var e = this;
        e.getItems();
        e.getMaxHeight().setMinHeight();
        d(c).resize(b.debounce(function(f) {
            e.getMaxHeight().setMinHeight()
        }, 250));
        return e
    };
    a.prototype.getItems = function() {
        var e = this;
        e.items = e.$element.find("[data-even-height-item]");
        return e
    };
    a.prototype.getMaxHeight = function() {
        var e = this;
        var f;
        e.items.css({
            minHeight: 0
        });
        e.maxHeight = 0;
        e.items.each(function(g, h) {
            f = parseInt(d(h).height(), 10);
            if (f > e.maxHeight) {
                e.maxHeight = f
            }
        });
        return e
    };
    a.prototype.setMinHeight = function() {
        var e = this;
        if (!e.settings.mediaQuery || b.siteUtil.getBreakpoint() === "large" || b.siteUtil.getBreakpoint() === "medium") {
            e.items.css({
                minHeight: e.maxHeight
            })
        } else {
            e.items.css({
                minHeight: 0
            })
        }
        return e
    };
    d.fn.evenHeight = function(e) {
        return this.each(function(g, f) {
            return new a(f, e).init()
        })
    };
    var b = c.sf || {};
    b.evenHeight = {
        init: function() {
            d("[data-even-height]").evenHeight()
        }
    };
    c.sf = b
})(window, jQuery);
(function(b, c) {
    var d = function(f) {
        var e = this;
        e.element = f;
        e.ddown = c(f).find(".ddown")
    };
    d.prototype.init = function() {
        var e = this;
        c(e.element).hover(function() {
            c(e.ddown).addClass("open").stop().slideDown()
        }, function() {
            c(e.ddown).stop().slideUp(function() {
                c(this).removeAttr("style").removeClass("open")
            })
        })
    };
    c.fn.expandList = function() {
        c(this).each(function(e, f) {
            return new d(f).init()
        })
    };
    var a = b.sf || {};
    a.listExpand = a.listExpand || {
        init: function() {
            c(".listExpand").expandList()
        }
    };
    b.sf = a
})(window, jQuery);
(function(e, f) {
    var d = e.sf || {};
    var b = d.siteUtil.isAuthor;
    var c = e.formUrlParam;
    var a = function() {
        var g = this;
        var h = "/bin/citrix/shareFileWebHit";
        g.init = function() {
            var i = "click";
            var k = ".sfEvent";
            var j = (e.performance && performance.navigation.type === 1);
            if ((!b || d.siteUtil.debug)) {
                if (d.siteUtil.ip_address != "") {
                    g.sendData();
                    f(document).on(i, k, function(l) {
                        g.sendData(l.target)
                    })
                } else {
                    setTimeout(function() {
                        g.init()
                    }.bind(g), 200)
                }
            }
        };
        g.getData = function(j) {
            var l = {};
            var k = e.location.href;
            var i = d.siteUtil.getURLParameter("kw") ? d.siteUtil.getURLParameter("kw") : "";
            if (j) {
                console.log(j);
                k += "+" + j
            }
            l = {
                UserID: d.siteUtil.getUU(),
                SessionID: d.siteUtil.getSessionId(),
                Page: k,
                ReferrerDomain: d.siteUtil.getHostName(document.referrer),
                ReferrerRaw: d.siteUtil.getUrlNoQS(document.referrer),
                BrowserType: d.siteUtil.browserType,
                BrowserVersion: d.siteUtil.browserVersion,
                OS: d.siteUtil.osName,
                IPAddress: d.siteUtil.ip_address || "not available",
                SearchKeywords: i
            };
            if (d.siteUtil.debug) {
                console.log("data: " + JSON.stringify(l))
            }
            return l
        };
        g.sendData = function(j) {
            var k = j ? g.getData(j.innerHTML.replace(/[^A-z0-9]+/g, "")) : g.getData();

            function l(m) {
                if (d.siteUtil.debug) {
                    console.log("Success: " + JSON.stringify(m))
                }
            }

            function i(m) {
                if (d.siteUtil.debug) {
                    console.log("error: " + JSON.stringify(m))
                }
            }
            if (!b) {
                return Promise.resolve(f.post(h, k)).then(l, i)
            } else {
                return Promise.resolve(k).then(l, i)
            }
        };
        return g
    };
    d.webStats = new a();
    e.sf = d
})(window, jQuery);
(function(b, c) {
    var a = b.sf || {};
    a.init = function() {
        a.siteUtil.init();
        if (!a.siteUtil.isAuthor) {
            a.proNav.init();
            a.listExpand.init();
            a.topNav.init();
            a.topNavSearch.init()
        }
        a.gdpr.init();
        a.contactMe.init();
        a.countrySelector.init();
        a.dotDotDot.init();
        a.evenHeight.init();
        a.events.init();
        a.formValidation.init();
        a.marketoForm.init();
        a.parallaxScroller.init();
        a.emailForm.init();
        a.pricing.init();
        a.supportKCsearch.init();
        a.partnerForm.init();
        a.rsForm.init();
        a.marketoFormEnterprise.init();
        a.hideInEmea.init();
        a.buyNow.init();
        if (isSFWebHitEnabled) {
            a.webStats.init()
        }
    };
    c(function() {
        a.init()
    })
})(window, jQuery);