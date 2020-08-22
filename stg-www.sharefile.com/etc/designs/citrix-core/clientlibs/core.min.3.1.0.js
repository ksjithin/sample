(function() {
    function a() {
        var b;
        var c = function() {
            var g = $(window).width();
            var f = (g <= 600) ? ".ctx-animated.full" : ".ctx-animated";
            $(f).each(function() {
                var h = $(this);
                if ((h.offset().top - $(window).scrollTop()) < ($(window).height() - 100)) {
                    h.attr("class", h.attr("data-animation"))
                }
            })
        };
        var d = function() {
            $(window).on("debouncedresize", function() {
                c()
            });
            $(window).scroll($.throttle(50, function() {
                c()
            }))
        };
        this.init = function() {
            d();
            c()
        }
    }
    $(document).ready(function() {
        if ($(".ctx-animated").length > 0 && !$("html").hasClass("aem-author")) {
            var b = new a();
            b.init()
        }
    })
})($);
(function(a) {
    a.fn.visible = function(j) {
        var h = a(this),
            f = a("body"),
            d = f.scrollTop(),
            g = d + f.height(),
            k = h.offset().top,
            i = k + h.height(),
            c = j === true ? i : k,
            b = j === true ? k : i;
        return ((b <= g) && (c >= d))
    }
})(jQuery);
(function(d) {
    var b = d.event,
        a, c;
    a = b.special.debouncedresize = {
        setup: function() {
            d(this).on("resize", a.handler)
        },
        teardown: function() {
            d(this).off("resize", a.handler)
        },
        handler: function(j, f) {
            var i = this,
                h = arguments,
                g = function() {
                    j.type = "debouncedresize";
                    b.dispatch.apply(i, h)
                };
            if (c) {
                clearTimeout(c)
            }
            f ? g() : c = setTimeout(g, a.threshold)
        },
        threshold: 150
    }
})($CQ);
/*! VelocityJS.org (1.1.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
;
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
;
! function(h) {
    function k(m) {
        var a = m.length,
            i = f.type(m);
        return "function" === i || f.isWindow(m) ? !1 : 1 === m.nodeType && a ? !0 : "array" === i || 0 === a || "number" == typeof a && a > 0 && a - 1 in m
    }
    if (!h.jQuery) {
        var f = function(i, a) {
            return new f.fn.init(i, a)
        };
        f.isWindow = function(a) {
            return null != a && a == a.window
        }, f.type = function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[c.call(a)] || "object" : typeof a
        }, f.isArray = Array.isArray || function(a) {
            return "array" === f.type(a)
        }, f.isPlainObject = function(m) {
            var a;
            if (!m || "object" !== f.type(m) || m.nodeType || f.isWindow(m)) {
                return !1
            }
            try {
                if (m.constructor && !d.call(m, "constructor") && !d.call(m.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (i) {
                return !1
            }
            for (a in m) {}
            return void 0 === a || d.call(m, a)
        }, f.each = function(u, t, m) {
            var w, v = 0,
                p = u.length,
                q = k(u);
            if (m) {
                if (q) {
                    for (; p > v && (w = t.apply(u[v], m), w !== !1); v++) {}
                } else {
                    for (v in u) {
                        if (w = t.apply(u[v], m), w === !1) {
                            break
                        }
                    }
                }
            } else {
                if (q) {
                    for (; p > v && (w = t.call(u[v], v, u[v]), w !== !1); v++) {}
                } else {
                    for (v in u) {
                        if (w = t.call(u[v], v, u[v]), w === !1) {
                            break
                        }
                    }
                }
            }
            return u
        }, f.data = function(p, m, i) {
            if (void 0 === i) {
                var r = p[f.expando],
                    q = r && b[r];
                if (void 0 === m) {
                    return q
                }
                if (q && m in q) {
                    return q[m]
                }
            } else {
                if (void 0 !== m) {
                    var r = p[f.expando] || (p[f.expando] = ++f.uuid);
                    return b[r] = b[r] || {}, b[r][m] = i, i
                }
            }
        }, f.removeData = function(o, m) {
            var i = o[f.expando],
                p = i && b[i];
            p && f.each(m, function(n, a) {
                delete p[a]
            })
        }, f.extend = function() {
            var x, A, m, y, q, p, w = arguments[0] || {},
                B = 1,
                v = arguments.length,
                z = !1;
            for ("boolean" == typeof w && (z = w, w = arguments[B] || {}, B++), "object" != typeof w && "function" !== f.type(w) && (w = {}), B === v && (w = this, B--); v > B; B++) {
                if (null != (q = arguments[B])) {
                    for (y in q) {
                        x = w[y], m = q[y], w !== m && (z && m && (f.isPlainObject(m) || (A = f.isArray(m))) ? (A ? (A = !1, p = x && f.isArray(x) ? x : []) : p = x && f.isPlainObject(x) ? x : {}, w[y] = f.extend(z, p, m)) : void 0 !== m && (w[y] = m))
                    }
                }
            }
            return w
        }, f.queue = function(p, m, i) {
            function s(t, o) {
                var n = o || [];
                return null != t && (k(Object(t)) ? ! function(x, v) {
                    for (var w = +v.length, u = 0, y = x.length; w > u;) {
                        x[y++] = v[u++]
                    }
                    if (w !== w) {
                        for (; void 0 !== v[u];) {
                            x[y++] = v[u++]
                        }
                    }
                    return x.length = y, x
                }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
            }
            if (p) {
                m = (m || "fx") + "queue";
                var q = f.data(p, m);
                return i ? (!q || f.isArray(i) ? q = f.data(p, m, s(i)) : q.push(i), q) : q || []
            }
        }, f.dequeue = function(i, a) {
            f.each(i.nodeType ? [i] : i, function(p, o) {
                a = a || "fx";
                var m = f.queue(o, a),
                    q = m.shift();
                "inprogress" === q && (q = m.shift()), q && ("fx" === a && m.unshift("inprogress"), q.call(o, function() {
                    f.dequeue(o, a)
                }))
            })
        }, f.fn = f.prototype = {
            init: function(a) {
                if (a.nodeType) {
                    return this[0] = a, this
                }
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var a = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: a.top + (h.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: a.left + (h.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function o() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) {
                        a = a.offsetParent
                    }
                    return a || document
                }
                var m = this[0],
                    o = o.apply(m),
                    n = this.offset(),
                    i = /^(?:body|html)$/i.test(o.nodeName) ? {
                        top: 0,
                        left: 0
                    } : f(o).offset();
                return n.top -= parseFloat(m.style.marginTop) || 0, n.left -= parseFloat(m.style.marginLeft) || 0, o.style && (i.top += parseFloat(o.style.borderTopWidth) || 0, i.left += parseFloat(o.style.borderLeftWidth) || 0), {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        };
        var b = {};
        f.expando = "velocity" + (new Date).getTime(), f.uuid = 0;
        for (var j = {}, d = j.hasOwnProperty, c = j.toString, g = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < g.length; l++) {
            j["[object " + g[l] + "]"] = g[l].toLowerCase()
        }
        f.fn.init.prototype = f.fn, h.Velocity = {
            Utilities: f
        }
    }
}(window),
function(a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function() {
    return function(O, C, E, U) {
        function H(f) {
            for (var c = -1, d = f ? f.length : 0, b = [];
                ++c < d;
            ) {
                var g = f[c];
                g && b.push(g)
            }
            return b
        }

        function G(a) {
            return M.isWrapped(a) ? a = [].slice.call(a) : M.isNode(a) && (a = [a]), a
        }

        function K(b) {
            var a = k.data(b, "velocity");
            return null === a ? U : a
        }

        function D(a) {
            return function(b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function J(aq, ag, av, aj) {
            function ai(b, a) {
                return 1 - 3 * a + 3 * b
            }

            function am(b, a) {
                return 3 * a - 6 * b
            }

            function ae(a) {
                return 3 * a
            }

            function al(c, a, b) {
                return ((ai(a, b) * c + am(a, b)) * c + ae(a)) * c
            }

            function ad(c, a, b) {
                return 3 * ai(a, b) * c * c + 2 * am(a, b) * c + ae(a)
            }

            function at(b, c) {
                for (var f = 0; ak > f;
                    ++f) {
                    var d = ad(c, aq, av);
                    if (0 === d) {
                        return c
                    }
                    var a = al(c, aq, av) - b;
                    c -= a / d
                }
                return c
            }

            function ah() {
                for (var a = 0; au > a;
                    ++a) {
                    ab[a] = al(a * aa, aq, av)
                }
            }

            function ap(b, d, g) {
                var f, a, c = 0;
                do {
                    a = d + (g - d) / 2, f = al(a, aq, av) - b, f > 0 ? g = a : d = a
                } while (Math.abs(f) > an && ++c < ac);
                return a
            }

            function ar(c) {
                for (var f = 0, h = 1, g = au - 1; h != g && ab[h] <= c;
                    ++h) {
                    f += aa
                }--h;
                var b = (c - ab[h]) / (ab[h + 1] - ab[h]),
                    d = f + b * aa,
                    a = ad(d, aq, av);
                return a >= Z ? at(c, d) : 0 == a ? d : ap(c, f, f + aa)
            }

            function ao() {
                t = !0, (aq != ag || av != aj) && ah()
            }
            var ak = 4,
                Z = 0.001,
                an = 1e-7,
                ac = 10,
                au = 11,
                aa = 1 / (au - 1),
                X = "Float32Array" in C;
            if (4 !== arguments.length) {
                return !1
            }
            for (var Y = 0; 4 > Y;
                ++Y) {
                if ("number" != typeof arguments[Y] || isNaN(arguments[Y]) || !isFinite(arguments[Y])) {
                    return !1
                }
            }
            aq = Math.min(aq, 1), av = Math.min(av, 1), aq = Math.max(aq, 0), av = Math.max(av, 0);
            var ab = X ? new Float32Array(au) : new Array(au),
                t = !1,
                af = function(a) {
                    return t || ao(), aq === ag && av === aj ? a : 0 === a ? 0 : 1 === a ? 1 : al(ar(a), ag, aj)
                };
            af.getControlPoints = function() {
                return [{
                    x: aq,
                    y: ag
                }, {
                    x: av,
                    y: aj
                }]
            };
            var W = "generateBezier(" + [aq, ag, av, aj] + ")";
            return af.toString = function() {
                return W
            }, af
        }

        function B(c, a) {
            var b = c;
            return M.isString(c) ? A.Easings[c] || (b = !1) : b = M.isArray(c) && 1 === c.length ? D.apply(null, c) : M.isArray(c) && 2 === c.length ? T.apply(null, c.concat([a])) : M.isArray(c) && 4 === c.length ? J.apply(null, c) : !1, b === !1 && (b = A.Easings[A.defaults.easing] ? A.defaults.easing : L), b
        }

        function R(ai) {
            if (ai) {
                for (var W = (new Date).getTime(), Z = 0, ac = A.State.calls.length; ac > Z; Z++) {
                    if (A.State.calls[Z]) {
                        var ab = A.State.calls[Z],
                            X = ab[0],
                            ae = ab[2],
                            x = ab[3],
                            ah = !!x;
                        x || (x = A.State.calls[Z][3] = W - 16);
                        for (var aj = Math.min((W - x) / ae.duration, 1), ad = 0, i = X.length; i > ad; ad++) {
                            var ag = X[ad],
                                ak = ag.element;
                            if (K(ak)) {
                                var g = !1;
                                if (ae.display !== U && null !== ae.display && "none" !== ae.display) {
                                    if ("flex" === ae.display) {
                                        var p = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        k.each(p, function(d, b) {
                                            z.setPropertyValue(ak, "display", b)
                                        })
                                    }
                                    z.setPropertyValue(ak, "display", ae.display)
                                }
                                ae.visibility !== U && "hidden" !== ae.visibility && z.setPropertyValue(ak, "visibility", ae.visibility);
                                for (var a in ag) {
                                    if ("element" !== a) {
                                        var Y = ag[a],
                                            c, af = M.isString(Y.easing) ? A.Easings[Y.easing] : Y.easing;
                                        if (1 === aj) {
                                            c = Y.endValue
                                        } else {
                                            if (c = Y.startValue + (Y.endValue - Y.startValue) * af(aj), !ah && c === Y.currentValue) {
                                                continue
                                            }
                                        }
                                        if (Y.currentValue = c, z.Hooks.registered[a]) {
                                            var aa = z.Hooks.getRoot(a),
                                                v = K(ak).rootPropertyValueCache[aa];
                                            v && (Y.rootPropertyValue = v)
                                        }
                                        var P = z.setPropertyValue(ak, a, Y.currentValue + (0 === parseFloat(c) ? "" : Y.unitType), Y.rootPropertyValue, Y.scrollData);
                                        z.Hooks.registered[a] && (K(ak).rootPropertyValueCache[aa] = z.Normalizations.registered[aa] ? z.Normalizations.registered[aa]("extract", null, P[1]) : P[1]), "transform" === P[0] && (g = !0)
                                    }
                                }
                                ae.mobileHA && K(ak).transformCache.translate3d === U && (K(ak).transformCache.translate3d = "(0px, 0px, 0px)", g = !0), g && z.flushTransformCache(ak)
                            }
                        }
                        ae.display !== U && "none" !== ae.display && (A.State.calls[Z][2].display = !1), ae.visibility !== U && "hidden" !== ae.visibility && (A.State.calls[Z][2].visibility = !1), ae.progress && ae.progress.call(ab[1], ab[1], aj, Math.max(0, x + ae.duration - W), x), 1 === aj && F(Z)
                    }
                }
            }
            A.State.isTicking && q(R)
        }

        function F(S, Y) {
            if (!A.State.calls[S]) {
                return !1
            }
            for (var a = A.State.calls[S][0], i = A.State.calls[S][1], h = A.State.calls[S][2], Z = A.State.calls[S][4], x = !1, X = 0, W = a.length; W > X; X++) {
                var b = a[X].element;
                if (Y || h.loop || ("none" === h.display && z.setPropertyValue(b, "display", h.display), "hidden" === h.visibility && z.setPropertyValue(b, "visibility", h.visibility)), h.loop !== !0 && (k.queue(b)[1] === U || !/\.velocityQueueEntryFlag/i.test(k.queue(b)[1])) && K(b)) {
                    K(b).isAnimating = !1, K(b).rootPropertyValueCache = {};
                    var P = !1;
                    k.each(z.Lists.transforms3D, function(f, c) {
                        var d = /^scale/.test(c) ? 1 : 0,
                            g = K(b).transformCache[c];
                        K(b).transformCache[c] !== U && new RegExp("^\\(" + d + "[^.]").test(g) && (P = !0, delete K(b).transformCache[c])
                    }), h.mobileHA && (P = !0, delete K(b).transformCache.translate3d), P && z.flushTransformCache(b), z.Values.removeClass(b, "velocity-animating")
                }
                if (!Y && h.complete && !h.loop && X === W - 1) {
                    try {
                        h.complete.call(i, i)
                    } catch (V) {
                        setTimeout(function() {
                            throw V
                        }, 1)
                    }
                }
                Z && h.loop !== !0 && Z(i), h.loop !== !0 || Y || (k.each(K(b).tweensContainer, function(d, c) {
                    /^rotate/.test(d) && 360 === parseFloat(c.endValue) && (c.endValue = 0, c.startValue = 360)
                }), A(b, "reverse", {
                    loop: !0,
                    delay: h.delay
                })), h.queue !== !1 && k.dequeue(b, h.queue)
            }
            A.State.calls[S] = !1;
            for (var y = 0, v = A.State.calls.length; v > y; y++) {
                if (A.State.calls[y] !== !1) {
                    x = !0;
                    break
                }
            }
            x === !1 && (A.State.isTicking = !1, delete A.State.calls, A.State.calls = [])
        }
        var N = function() {
                if (E.documentMode) {
                    return E.documentMode
                }
                for (var b = 7; b > 4; b--) {
                    var a = E.createElement("div");
                    if (a.innerHTML = "<!--[if IE " + b + "]><span></span><![endif]-->", a.getElementsByTagName("span").length) {
                        return a = null, b
                    }
                }
                return U
            }(),
            Q = function() {
                var a = 0;
                return C.webkitRequestAnimationFrame || C.mozRequestAnimationFrame || function(c) {
                    var d = (new Date).getTime(),
                        b;
                    return b = Math.max(0, 16 - (d - a)), a = d + b, setTimeout(function() {
                        c(d + b)
                    }, b)
                }
            }(),
            M = {
                isString: function(a) {
                    return "string" == typeof a
                },
                isArray: Array.isArray || function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                },
                isFunction: function(a) {
                    return "[object Function]" === Object.prototype.toString.call(a)
                },
                isNode: function(a) {
                    return a && a.nodeType
                },
                isNodeList: function(a) {
                    return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== U && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
                },
                isWrapped: function(a) {
                    return a && (a.jquery || C.Zepto && C.Zepto.zepto.isZ(a))
                },
                isSVG: function(a) {
                    return C.SVGElement && a instanceof C.SVGElement
                },
                isEmptyObject: function(b) {
                    for (var a in b) {
                        return !1
                    }
                    return !0
                }
            },
            k, I = !1;
        if (O.fn && O.fn.jquery ? (k = O, I = !0) : k = C.Velocity.Utilities, 8 >= N && !I) {
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
        }
        if (7 >= N) {
            return void(jQuery.fn.velocity = jQuery.fn.animate)
        }
        var w = 400,
            L = "swing",
            A = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: C.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: E.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: k,
                Redirects: {},
                Easings: {},
                Promise: C.Promise,
                defaults: {
                    queue: "",
                    duration: w,
                    easing: L,
                    begin: U,
                    complete: U,
                    progress: U,
                    display: U,
                    visibility: U,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(a) {
                    k.data(a, "velocity", {
                        isSVG: M.isSVG(a),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 1,
                    patch: 0
                },
                debug: !1
            };
        C.pageYOffset !== U ? (A.State.scrollAnchor = C, A.State.scrollPropertyLeft = "pageXOffset", A.State.scrollPropertyTop = "pageYOffset") : (A.State.scrollAnchor = E.documentElement || E.body.parentNode || E.body, A.State.scrollPropertyLeft = "scrollLeft", A.State.scrollPropertyTop = "scrollTop");
        var T = function() {
            function f(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function c(h, i, g) {
                var l = {
                    x: h.x + g.dx * i,
                    v: h.v + g.dv * i,
                    tension: h.tension,
                    friction: h.friction
                };
                return {
                    dx: l.v,
                    dv: f(l)
                }
            }

            function d(v, h) {
                var y = {
                        dx: v.v,
                        dv: f(v)
                    },
                    x = c(v, 0.5 * h, y),
                    p = c(v, 0.5 * h, x),
                    t = c(v, h, p),
                    g = 1 / 6 * (y.dx + 2 * (x.dx + p.dx) + t.dx),
                    m = 1 / 6 * (y.dv + 2 * (x.dv + p.dv) + t.dv);
                return v.x = v.x + g * h, v.v = v.v + m * h, v
            }
            return function b(x, S, h) {
                var g = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    r = [0],
                    V = 0,
                    m = 0.0001,
                    P = 0.016,
                    y, a, v;
                for (x = parseFloat(x) || 500, S = parseFloat(S) || 20, h = h || null, g.tension = x, g.friction = S, y = null !== h, y ? (V = b(x, S), a = V / h * P) : a = P;;) {
                    if (v = d(v || g, a), r.push(1 + v.x), V += 16, !(Math.abs(v.x) > m && Math.abs(v.v) > m)) {
                        break
                    }
                }
                return y ? function(i) {
                    return r[i * (r.length - 1) | 0]
                } : V
            }
        }();
        A.Easings = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2
            },
            spring: function(a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, k.each([
            ["ease", [0.25, 0.1, 0.25, 1]],
            ["ease-in", [0.42, 0, 1, 1]],
            ["ease-out", [0, 0, 0.58, 1]],
            ["ease-in-out", [0.42, 0, 0.58, 1]],
            ["easeInSine", [0.47, 0, 0.745, 0.715]],
            ["easeOutSine", [0.39, 0.575, 0.565, 1]],
            ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
            ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
            ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
            ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
            ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
            ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
            ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
            ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
            ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
            ["easeInOutQuart", [0.77, 0, 0.175, 1]],
            ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
            ["easeOutQuint", [0.23, 1, 0.32, 1]],
            ["easeInOutQuint", [0.86, 0, 0.07, 1]],
            ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
            ["easeOutExpo", [0.19, 1, 0.22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
            ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
            ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
        ], function(b, a) {
            A.Easings[a[0]] = J.apply(null, a[1])
        });
        var z = A.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var h = 0; h < z.Lists.colors.length; h++) {
                        var d = "color" === z.Lists.colors[h] ? "0 0 0 1" : "255 255 255 1";
                        z.Hooks.templates[z.Lists.colors[h]] = ["Red Green Blue Alpha", d]
                    }
                    var g, b, m;
                    if (N) {
                        for (g in z.Hooks.templates) {
                            b = z.Hooks.templates[g], m = b[0].split(" ");
                            var l = b[1].match(z.RegEx.valueSplit);
                            "Color" === m[0] && (m.push(m.shift()), l.push(l.shift()), z.Hooks.templates[g] = [m.join(" "), l.join(" ")])
                        }
                    }
                    for (g in z.Hooks.templates) {
                        b = z.Hooks.templates[g], m = b[0].split(" ");
                        for (var h in m) {
                            var c = g + m[h],
                                f = h;
                            z.Hooks.registered[c] = [g, f]
                        }
                    }
                },
                getRoot: function(b) {
                    var a = z.Hooks.registered[b];
                    return a ? a[0] : b
                },
                cleanRootPropertyValue: function(b, a) {
                    return z.RegEx.valueUnwrap.test(a) && (a = a.match(z.RegEx.valueUnwrap)[1]), z.Values.isCSSNullValue(a) && (a = z.Hooks.templates[b][1]), a
                },
                extractValue: function(f, c) {
                    var d = z.Hooks.registered[f];
                    if (d) {
                        var b = d[0],
                            g = d[1];
                        return c = z.Hooks.cleanRootPropertyValue(b, c), c.toString().match(z.RegEx.valueSplit)[g]
                    }
                    return c
                },
                injectValue: function(h, d, g) {
                    var b = z.Hooks.registered[h];
                    if (b) {
                        var m = b[0],
                            l = b[1],
                            c, f;
                        return g = z.Hooks.cleanRootPropertyValue(m, g), c = g.toString().match(z.RegEx.valueSplit), c[l] = d, f = c.join(" ")
                    }
                    return g
                }
            },
            Normalizations: {
                registered: {
                    clip: function(f, c, d) {
                        switch (f) {
                            case "name":
                                return "clip";
                            case "extract":
                                var b;
                                return z.RegEx.wrappedValueAlreadyExtracted.test(d) ? b = d : (b = d.toString().match(z.RegEx.valueUnwrap), b = b ? b[1].replace(/,(\s+)?/g, " ") : d), b;
                            case "inject":
                                return "rect(" + d + ")"
                        }
                    },
                    blur: function(f, c, d) {
                        switch (f) {
                            case "name":
                                return "-webkit-filter";
                            case "extract":
                                var b = parseFloat(d);
                                if (!b && 0 !== b) {
                                    var g = d.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    b = g ? g[1] : 0
                                }
                                return b;
                            case "inject":
                                return parseFloat(d) ? "blur(" + d + ")" : "none"
                        }
                    },
                    opacity: function(f, c, d) {
                        if (8 >= N) {
                            switch (f) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var b = d.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return d = b ? b[1] / 100 : 1;
                                case "inject":
                                    return c.style.zoom = 1, parseFloat(d) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(d), 10) + ")"
                            }
                        } else {
                            switch (f) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return d;
                                case "inject":
                                    return d
                            }
                        }
                    }
                },
                register: function() {
                    9 >= N || A.State.isGingerbread || (z.Lists.transformsBase = z.Lists.transformsBase.concat(z.Lists.transforms3D));
                    for (var a = 0; a < z.Lists.transformsBase.length; a++) {
                        ! function() {
                            var b = z.Lists.transformsBase[a];
                            z.Normalizations.registered[b] = function(d, c, g) {
                                switch (d) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return K(c) === U || K(c).transformCache[b] === U ? /^scale/i.test(b) ? 1 : 0 : K(c).transformCache[b].replace(/[()]/g, "");
                                    case "inject":
                                        var f = !1;
                                        switch (b.substr(0, b.length - 1)) {
                                            case "translate":
                                                f = !/(%|px|em|rem|vw|vh|\d)$/i.test(g);
                                                break;
                                            case "scal":
                                            case "scale":
                                                A.State.isAndroid && K(c).transformCache[b] === U && 1 > g && (g = 1), f = !/(\d)$/i.test(g);
                                                break;
                                            case "skew":
                                                f = !/(deg|\d)$/i.test(g);
                                                break;
                                            case "rotate":
                                                f = !/(deg|\d)$/i.test(g)
                                        }
                                        return f || (K(c).transformCache[b] = "(" + g + ")"), K(c).transformCache[b]
                                }
                            }
                        }()
                    }
                    for (var a = 0; a < z.Lists.colors.length; a++) {
                        ! function() {
                            var b = z.Lists.colors[a];
                            z.Normalizations.registered[b] = function(g, f, l) {
                                switch (g) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        var h;
                                        if (z.RegEx.wrappedValueAlreadyExtracted.test(l)) {
                                            h = l
                                        } else {
                                            var c, d = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(l) ? c = d[l] !== U ? d[l] : d.black : z.RegEx.isHex.test(l) ? c = "rgb(" + z.Values.hexToRgb(l).join(" ") + ")" : /^rgba?\(/i.test(l) || (c = d.black), h = (c || l).toString().match(z.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= N || 3 !== h.split(" ").length || (h += " 1"), h;
                                    case "inject":
                                        return 8 >= N ? 4 === l.split(" ").length && (l = l.split(/\s+/).slice(0, 3).join(" ")) : 3 === l.split(" ").length && (l += " 1"), (8 >= N ? "rgb" : "rgba") + "(" + l.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                    }
                }
            },
            Names: {
                camelCase: function(a) {
                    return a.replace(/-(\w)/g, function(c, b) {
                        return b.toUpperCase()
                    })
                },
                SVGAttribute: function(b) {
                    var a = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (N || A.State.isAndroid && !A.State.isChrome) && (a += "|transform"), new RegExp("^(" + a + ")$", "i").test(b)
                },
                prefixCheck: function(f) {
                    if (A.State.prefixMatches[f]) {
                        return [A.State.prefixMatches[f], !0]
                    }
                    for (var c = ["", "Webkit", "Moz", "ms", "O"], d = 0, b = c.length; b > d; d++) {
                        var g;
                        if (g = 0 === d ? f : c[d] + f.replace(/^\w/, function(a) {
                                return a.toUpperCase()
                            }), M.isString(A.State.prefixElement.style[g])) {
                            return A.State.prefixMatches[f] = g, [g, !0]
                        }
                    }
                    return [f, !1]
                }
            },
            Values: {
                hexToRgb: function(f) {
                    var c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                        b;
                    return f = f.replace(c, function(l, h, i, g) {
                        return h + h + i + i + g + g
                    }), b = d.exec(f), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                },
                getUnitType: function(a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                },
                getDisplayType: function(b) {
                    var a = b && b.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(a) ? "inline" : /^(li)$/i.test(a) ? "list-item" : /^(tr)$/i.test(a) ? "table-row" : "block"
                },
                addClass: function(b, a) {
                    b.classList ? b.classList.add(a) : b.className += (b.className.length ? " " : "") + a
                },
                removeClass: function(b, a) {
                    b.classList ? b.classList.remove(a) : b.className = b.className.toString().replace(new RegExp("(^|\\s)" + a.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(i, a, g, f) {
                function x(V, o) {
                    function y() {
                        Y && z.setPropertyValue(V, "display", "none")
                    }
                    var P = 0;
                    if (8 >= N) {
                        P = k.css(V, o)
                    } else {
                        var Y = !1;
                        if (/^(width|height)$/.test(o) && 0 === z.getPropertyValue(V, "display") && (Y = !0, z.setPropertyValue(V, "display", z.Values.getDisplayType(V))), !f) {
                            if ("height" === o && "border-box" !== z.getPropertyValue(V, "boxSizing").toString().toLowerCase()) {
                                var X = V.offsetHeight - (parseFloat(z.getPropertyValue(V, "borderTopWidth")) || 0) - (parseFloat(z.getPropertyValue(V, "borderBottomWidth")) || 0) - (parseFloat(z.getPropertyValue(V, "paddingTop")) || 0) - (parseFloat(z.getPropertyValue(V, "paddingBottom")) || 0);
                                return y(), X
                            }
                            if ("width" === o && "border-box" !== z.getPropertyValue(V, "boxSizing").toString().toLowerCase()) {
                                var s = V.offsetWidth - (parseFloat(z.getPropertyValue(V, "borderLeftWidth")) || 0) - (parseFloat(z.getPropertyValue(V, "borderRightWidth")) || 0) - (parseFloat(z.getPropertyValue(V, "paddingLeft")) || 0) - (parseFloat(z.getPropertyValue(V, "paddingRight")) || 0);
                                return y(), s
                            }
                        }
                        var W;
                        W = K(V) === U ? C.getComputedStyle(V, null) : K(V).computedStyle ? K(V).computedStyle : K(V).computedStyle = C.getComputedStyle(V, null), (N || A.State.isFirefox) && "borderColor" === o && (o = "borderTopColor"), P = 9 === N && "filter" === o ? W.getPropertyValue(o) : W[o], ("" === P || null === P) && (P = V.style[o]), y()
                    }
                    if ("auto" === P && /^(top|right|bottom|left)$/i.test(o)) {
                        var S = x(V, "position");
                        ("fixed" === S || "absolute" === S && /top|left/i.test(o)) && (P = k(V).position()[o] + "px")
                    }
                    return P
                }
                var h;
                if (z.Hooks.registered[a]) {
                    var v = a,
                        t = z.Hooks.getRoot(v);
                    g === U && (g = z.getPropertyValue(i, z.Names.prefixCheck(t)[0])), z.Normalizations.registered[t] && (g = z.Normalizations.registered[t]("extract", i, g)), h = z.Hooks.extractValue(v, g)
                } else {
                    if (z.Normalizations.registered[a]) {
                        var b, m;
                        b = z.Normalizations.registered[a]("name", i), "transform" !== b && (m = x(i, z.Names.prefixCheck(b)[0]), z.Values.isCSSNullValue(m) && z.Hooks.templates[a] && (m = z.Hooks.templates[a][1])), h = z.Normalizations.registered[a]("extract", i, m)
                    }
                }
                return /^[\d-]/.test(h) || (h = K(i) && K(i).isSVG && z.Names.SVGAttribute(a) ? /^(height|width)$/i.test(a) ? i.getBBox()[a] : i.getAttribute(a) : x(i, z.Names.prefixCheck(a)[0])), z.Values.isCSSNullValue(h) && (h = 0), A.debug >= 2 && console.log("Get " + a + ": " + h), h
            },
            setPropertyValue: function(h, b, m, f, d) {
                var t = b;
                if ("scroll" === b) {
                    d.container ? d.container["scroll" + d.direction] = m : "Left" === d.direction ? C.scrollTo(m, d.alternateValue) : C.scrollTo(d.alternateValue, m)
                } else {
                    if (z.Normalizations.registered[b] && "transform" === z.Normalizations.registered[b]("name", h)) {
                        z.Normalizations.registered[b]("inject", h, m), t = "transform", m = K(h).transformCache[b]
                    } else {
                        if (z.Hooks.registered[b]) {
                            var g = b,
                                p = z.Hooks.getRoot(b);
                            f = f || z.getPropertyValue(h, p), m = z.Hooks.injectValue(g, m, f), b = p
                        }
                        if (z.Normalizations.registered[b] && (m = z.Normalizations.registered[b]("inject", h, m), b = z.Normalizations.registered[b]("name", h)), t = z.Names.prefixCheck(b)[0], 8 >= N) {
                            try {
                                h.style[t] = m
                            } catch (i) {
                                A.debug && console.log("Browser does not support [" + m + "] for [" + t + "]")
                            }
                        } else {
                            K(h) && K(h).isSVG && z.Names.SVGAttribute(b) ? h.setAttribute(b, m) : h.style[t] = m
                        }
                        A.debug >= 2 && console.log("Set " + b + " (" + t + "): " + m)
                    }
                }
                return [t, m]
            },
            flushTransformCache: function(f) {
                function c(a) {
                    return parseFloat(z.getPropertyValue(f, a))
                }
                var d = "";
                if ((N || A.State.isAndroid && !A.State.isChrome) && K(f).isSVG) {
                    var b = {
                        translate: [c("translateX"), c("translateY")],
                        skewX: [c("skewX")],
                        skewY: [c("skewY")],
                        scale: 1 !== c("scale") ? [c("scale"), c("scale")] : [c("scaleX"), c("scaleY")],
                        rotate: [c("rotateZ"), 0, 0]
                    };
                    k.each(K(f).transformCache, function(a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), b[a] && (d += a + "(" + b[a].join(" ") + ") ", delete b[a])
                    })
                } else {
                    var h, g;
                    k.each(K(f).transformCache, function(a) {
                        return h = K(f).transformCache[a], "transformPerspective" === a ? (g = h, !0) : (9 === N && "rotateZ" === a && (a = "rotate"), void(d += a + h + " "))
                    }), g && (d = "perspective" + g + " " + d)
                }
                z.setPropertyValue(f, "transform", d)
            }
        };
        z.Hooks.register(), z.Normalizations.register(), A.hook = function(c, a, b) {
            var d = U;
            return c = G(c), k.each(c, function(g, h) {
                if (K(h) === U && A.init(h), b === U) {
                    d === U && (d = A.CSS.getPropertyValue(h, a))
                } else {
                    var f = A.CSS.setPropertyValue(h, a, b);
                    "transform" === f[0] && A.CSS.flushTransformCache(h), d = f
                }
            }), d
        };
        var j = function() {
            function ae() {
                return ad ? aa.promise || null : af
            }

            function y() {
                function h(aB) {
                    function aA(aG, aE) {
                        var aF = U,
                            aH = U,
                            aD = U;
                        return M.isArray(aG) ? (aF = aG[0], !M.isArray(aG[1]) && /^[\d-]/.test(aG[1]) || M.isFunction(aG[1]) || z.RegEx.isHex.test(aG[1]) ? aD = aG[1] : (M.isString(aG[1]) && !z.RegEx.isHex.test(aG[1]) || M.isArray(aG[1])) && (aH = aE ? aG[1] : B(aG[1], d.duration), aG[2] !== U && (aD = aG[2]))) : aF = aG, aE || (aH = aH || d.easing), M.isFunction(aF) && (aF = aF.call(m, a, u)), M.isFunction(aD) && (aD = aD.call(m, a, u)), [aF || 0, aH, aD]
                    }

                    function aC(aG, aE) {
                        var aF, aD;
                        return aD = (aE || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(aH) {
                            return aF = aH, ""
                        }), aF || (aF = z.Values.getUnitType(aG)), [aD, aF]
                    }

                    function ay() {
                        var aH = {
                                myParent: m.parentNode || E.body,
                                position: z.getPropertyValue(m, "position"),
                                fontSize: z.getPropertyValue(m, "fontSize")
                            },
                            aE = aH.position === p.lastPosition && aH.myParent === p.lastParent,
                            aI = aH.fontSize === p.lastFontSize;
                        p.lastParent = aH.myParent, p.lastPosition = aH.position, p.lastFontSize = aH.fontSize;
                        var aG = 100,
                            aD = {};
                        if (aI && aE) {
                            aD.emToPx = p.lastEmToPx, aD.percentToPxWidth = p.lastPercentToPxWidth, aD.percentToPxHeight = p.lastPercentToPxHeight
                        } else {
                            var aF = K(m).isSVG ? E.createElementNS("http://www.w3.org/2000/svg", "rect") : E.createElement("div");
                            A.init(aF), aH.myParent.appendChild(aF), k.each(["overflow", "overflowX", "overflowY"], function(aK, aJ) {
                                A.CSS.setPropertyValue(aF, aJ, "hidden")
                            }), A.CSS.setPropertyValue(aF, "position", aH.position), A.CSS.setPropertyValue(aF, "fontSize", aH.fontSize), A.CSS.setPropertyValue(aF, "boxSizing", "content-box"), k.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(aK, aJ) {
                                A.CSS.setPropertyValue(aF, aJ, aG + "%")
                            }), A.CSS.setPropertyValue(aF, "paddingLeft", aG + "em"), aD.percentToPxWidth = p.lastPercentToPxWidth = (parseFloat(z.getPropertyValue(aF, "width", null, !0)) || 1) / aG, aD.percentToPxHeight = p.lastPercentToPxHeight = (parseFloat(z.getPropertyValue(aF, "height", null, !0)) || 1) / aG, aD.emToPx = p.lastEmToPx = (parseFloat(z.getPropertyValue(aF, "paddingLeft")) || 1) / aG, aH.myParent.removeChild(aF)
                        }
                        return null === p.remToPx && (p.remToPx = parseFloat(z.getPropertyValue(E.body, "fontSize")) || 16), null === p.vwToPx && (p.vwToPx = parseFloat(C.innerWidth) / 100, p.vhToPx = parseFloat(C.innerHeight) / 100), aD.remToPx = p.remToPx, aD.vwToPx = p.vwToPx, aD.vhToPx = p.vhToPx, A.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(aD), m), aD
                    }
                    if (d.begin && 0 === a) {
                        try {
                            d.begin.call(ac, ac)
                        } catch (an) {
                            setTimeout(function() {
                                throw an
                            }, 1)
                        }
                    }
                    if ("scroll" === X) {
                        var ah = /^x$/i.test(d.axis) ? "Left" : "Top",
                            av = parseFloat(d.offset) || 0,
                            V, ar, at;
                        d.container ? M.isWrapped(d.container) || M.isNode(d.container) ? (d.container = d.container[0] || d.container, V = d.container["scroll" + ah], at = V + k(m).position()[ah.toLowerCase()] + av) : d.container = null : (V = A.State.scrollAnchor[A.State["scrollProperty" + ah]], ar = A.State.scrollAnchor[A.State["scrollProperty" + ("Left" === ah ? "Top" : "Left")]], at = k(m).offset()[ah.toLowerCase()] + av), b = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: V,
                                currentValue: V,
                                endValue: at,
                                unitType: "",
                                easing: d.easing,
                                scrollData: {
                                    container: d.container,
                                    direction: ah,
                                    alternateValue: ar
                                }
                            },
                            element: m
                        }, A.debug && console.log("tweensContainer (scroll): ", b.scroll, m)
                    } else {
                        if ("reverse" === X) {
                            if (!K(m).tweensContainer) {
                                return void k.dequeue(m, d.queue)
                            }
                            "none" === K(m).opts.display && (K(m).opts.display = "auto"), "hidden" === K(m).opts.visibility && (K(m).opts.visibility = "visible"), K(m).opts.loop = !1, K(m).opts.begin = null, K(m).opts.complete = null, i.easing || delete d.easing, i.duration || delete d.duration, d = k.extend({}, K(m).opts, d);
                            var az = k.extend(!0, {}, K(m).tweensContainer);
                            for (var ap in az) {
                                if ("element" !== ap) {
                                    var ak = az[ap].startValue;
                                    az[ap].startValue = az[ap].currentValue = az[ap].endValue, az[ap].endValue = ak, M.isEmptyObject(i) || (az[ap].easing = d.easing), A.debug && console.log("reverse tweensContainer (" + ap + "): " + JSON.stringify(az[ap]), m)
                                }
                            }
                            b = az
                        } else {
                            if ("start" === X) {
                                var az;
                                K(m).tweensContainer && K(m).isAnimating === !0 && (az = K(m).tweensContainer), k.each(ag, function(aJ, aM) {
                                    if (RegExp("^" + z.Lists.colors.join("$|^") + "$").test(aJ)) {
                                        var aD = aA(aM, !0),
                                            aG = aD[0],
                                            aF = aD[1],
                                            aI = aD[2];
                                        if (z.RegEx.isHex.test(aG)) {
                                            for (var aN = ["Red", "Green", "Blue"], aH = z.Values.hexToRgb(aG), aL = aI ? z.Values.hexToRgb(aI) : U, aK = 0; aK < aN.length; aK++) {
                                                var aE = [aH[aK]];
                                                aF && aE.push(aF), aL !== U && aE.push(aL[aK]), ag[aJ + aN[aK]] = aE
                                            }
                                            delete ag[aJ]
                                        }
                                    }
                                });
                                for (var aj in ag) {
                                    var am = aA(ag[aj]),
                                        ax = am[0],
                                        al = am[1],
                                        ao = am[2];
                                    aj = z.Names.camelCase(aj);
                                    var aw = z.Hooks.getRoot(aj),
                                        P = !1;
                                    if (K(m).isSVG || z.Names.prefixCheck(aw)[1] !== !1 || z.Normalizations.registered[aw] !== U) {
                                        (d.display !== U && null !== d.display && "none" !== d.display || d.visibility !== U && "hidden" !== d.visibility) && /opacity|filter/.test(aj) && !ao && 0 !== ax && (ao = 0), d._cacheValues && az && az[aj] ? (ao === U && (ao = az[aj].endValue + az[aj].unitType), P = K(m).rootPropertyValueCache[aw]) : z.Hooks.registered[aj] ? ao === U ? (P = z.getPropertyValue(m, aw), ao = z.getPropertyValue(m, aj, P)) : P = z.Hooks.templates[aw][1] : ao === U && (ao = z.getPropertyValue(m, aj));
                                        var aq, au, s, l = !1;
                                        if (aq = aC(aj, ao), ao = aq[0], s = aq[1], aq = aC(aj, ax), ax = aq[0].replace(/^([+-\/*])=/, function(aE, aD) {
                                                return l = aD, ""
                                            }), au = aq[1], ao = parseFloat(ao) || 0, ax = parseFloat(ax) || 0, "%" === au && (/^(fontSize|lineHeight)$/.test(aj) ? (ax /= 100, au = "em") : /^scale/.test(aj) ? (ax /= 100, au = "") : /(Red|Green|Blue)$/i.test(aj) && (ax = ax / 100 * 255, au = "")), /[\/*]/.test(l)) {
                                            au = s
                                        } else {
                                            if (s !== au && 0 !== ao) {
                                                if (0 === ax) {
                                                    au = s
                                                } else {
                                                    f = f || ay();
                                                    var ai = /margin|padding|left|right|width|text|word|letter/i.test(aj) || /X$/.test(aj) || "x" === aj ? "x" : "y";
                                                    switch (s) {
                                                        case "%":
                                                            ao *= "x" === ai ? f.percentToPxWidth : f.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            ao *= f[s + "ToPx"]
                                                    }
                                                    switch (au) {
                                                        case "%":
                                                            ao *= 1 / ("x" === ai ? f.percentToPxWidth : f.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            ao *= 1 / f[au + "ToPx"]
                                                    }
                                                }
                                            }
                                        }
                                        switch (l) {
                                            case "+":
                                                ax = ao + ax;
                                                break;
                                            case "-":
                                                ax = ao - ax;
                                                break;
                                            case "*":
                                                ax = ao * ax;
                                                break;
                                            case "/":
                                                ax = ao / ax
                                        }
                                        b[aj] = {
                                            rootPropertyValue: P,
                                            startValue: ao,
                                            currentValue: ao,
                                            endValue: ax,
                                            unitType: au,
                                            easing: al
                                        }, A.debug && console.log("tweensContainer (" + aj + "): " + JSON.stringify(b[aj]), m)
                                    } else {
                                        A.debug && console.log("Skipping [" + aw + "] due to a lack of browser support.")
                                    }
                                }
                                b.element = m
                            }
                        }
                    }
                    b.element && (z.Values.addClass(m, "velocity-animating"), g.push(b), "" === d.queue && (K(m).tweensContainer = b, K(m).opts = d), K(m).isAnimating = !0, a === u - 1 ? (A.State.calls.length > 10000 && (A.State.calls = H(A.State.calls)), A.State.calls.push([g, ac, d, null, aa.resolver]), A.State.isTicking === !1 && (A.State.isTicking = !0, R())) : a++)
                }
                var m = this,
                    d = k.extend({}, A.defaults, i),
                    b = {},
                    f;
                switch (K(m) === U && A.init(m), parseFloat(d.delay) && d.queue !== !1 && k.queue(m, d.queue, function(l) {
                    A.velocityQueueEntryFlag = !0, K(m).delayTimer = {
                        setTimeout: setTimeout(l, parseFloat(d.delay)),
                        next: l
                    }
                }), d.duration.toString().toLowerCase()) {
                    case "fast":
                        d.duration = 200;
                        break;
                    case "normal":
                        d.duration = w;
                        break;
                    case "slow":
                        d.duration = 600;
                        break;
                    default:
                        d.duration = parseFloat(d.duration) || 1
                }
                A.mock !== !1 && (A.mock === !0 ? d.duration = d.delay = 1 : (d.duration *= parseFloat(A.mock) || 1, d.delay *= parseFloat(A.mock) || 1)), d.easing = B(d.easing, d.duration), d.begin && !M.isFunction(d.begin) && (d.begin = null), d.progress && !M.isFunction(d.progress) && (d.progress = null), d.complete && !M.isFunction(d.complete) && (d.complete = null), d.display !== U && null !== d.display && (d.display = d.display.toString().toLowerCase(), "auto" === d.display && (d.display = A.CSS.Values.getDisplayType(m))), d.visibility !== U && null !== d.visibility && (d.visibility = d.visibility.toString().toLowerCase()), d.mobileHA = d.mobileHA && A.State.isMobile && !A.State.isGingerbread, d.queue === !1 ? d.delay ? setTimeout(h, d.delay) : h() : k.queue(m, d.queue, function(l, s) {
                    return s === !0 ? (aa.promise && aa.resolver(ac), !0) : (A.velocityQueueEntryFlag = !0, void h(l))
                }), "" !== d.queue && "fx" !== d.queue || "inprogress" === k.queue(m)[0] || k.dequeue(m)
            }
            var Z = arguments[0] && (k.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || M.isString(arguments[0].properties)),
                ad, af, Y, ac, ag, i;
            if (M.isWrapped(this) ? (ad = !1, Y = 0, ac = this, af = this) : (ad = !0, Y = 1, ac = Z ? arguments[0].elements : arguments[0]), ac = G(ac)) {
                Z ? (ag = arguments[0].properties, i = arguments[0].options) : (ag = arguments[Y], i = arguments[Y + 1]);
                var u = ac.length,
                    a = 0;
                if ("stop" !== ag && !k.isPlainObject(i)) {
                    var S = Y + 1;
                    i = {};
                    for (var c = S; c < arguments.length; c++) {
                        M.isArray(arguments[c]) || !/^(fast|normal|slow)$/i.test(arguments[c]) && !/^\d/.test(arguments[c]) ? M.isString(arguments[c]) || M.isArray(arguments[c]) ? i.easing = arguments[c] : M.isFunction(arguments[c]) && (i.complete = arguments[c]) : i.duration = arguments[c]
                    }
                }
                var aa = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                ad && A.Promise && (aa.promise = new A.Promise(function(d, b) {
                    aa.resolver = d, aa.rejecter = b
                }));
                var X;
                switch (ag) {
                    case "scroll":
                        X = "scroll";
                        break;
                    case "reverse":
                        X = "reverse";
                        break;
                    case "stop":
                        k.each(ac, function(d, b) {
                            K(b) && K(b).delayTimer && (clearTimeout(K(b).delayTimer.setTimeout), K(b).delayTimer.next && K(b).delayTimer.next(), delete K(b).delayTimer)
                        });
                        var v = [];
                        return k.each(A.State.calls, function(d, b) {
                            b && k.each(b[1], function(f, l) {
                                var h = M.isString(i) ? i : "";
                                return i !== U && b[2].queue !== h ? !0 : void k.each(ac, function(m, s) {
                                    s === l && (i !== U && (k.each(k.queue(s, h), function(V, P) {
                                        M.isFunction(P) && P(null, !0)
                                    }), k.queue(s, h, [])), K(s) && "" === h && k.each(K(s).tweensContainer, function(V, P) {
                                        P.endValue = P.currentValue
                                    }), v.push(d))
                                })
                            })
                        }), k.each(v, function(d, b) {
                            F(b, !0)
                        }), aa.promise && aa.resolver(ac), ae();
                    default:
                        if (!k.isPlainObject(ag) || M.isEmptyObject(ag)) {
                            if (M.isString(ag) && A.Redirects[ag]) {
                                var x = k.extend({}, i),
                                    ab = x.duration,
                                    t = x.delay || 0;
                                return x.backwards === !0 && (ac = k.extend(!0, [], ac).reverse()), k.each(ac, function(d, b) {
                                    parseFloat(x.stagger) ? x.delay = t + parseFloat(x.stagger) * d : M.isFunction(x.stagger) && (x.delay = t + x.stagger.call(b, d, u)), x.drag && (x.duration = parseFloat(ab) || (/^(callout|transition)/.test(ag) ? 1000 : w), x.duration = Math.max(x.duration * (x.backwards ? 1 - d / u : (d + 1) / u), 0.75 * x.duration, 200)), A.Redirects[ag].call(b, b, x || {}, d, u, ac, aa.promise ? aa : U)
                                }), ae()
                            }
                            var o = "Velocity: First argument (" + ag + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return aa.promise ? aa.rejecter(new Error(o)) : console.log(o), ae()
                        }
                        X = "start"
                }
                var p = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    g = [];
                k.each(ac, function(d, b) {
                    M.isNode(b) && y.call(b)
                });
                var x = k.extend({}, A.defaults, i),
                    n;
                if (x.loop = parseInt(x.loop), n = 2 * x.loop - 1, x.loop) {
                    for (var r = 0; n > r; r++) {
                        var W = {
                            delay: x.delay,
                            progress: x.progress
                        };
                        r === n - 1 && (W.display = x.display, W.visibility = x.visibility, W.complete = x.complete), j(ac, "reverse", W)
                    }
                }
                return ae()
            }
        };
        A = k.extend(j, A), A.animate = j;
        var q = C.requestAnimationFrame || Q;
        return A.State.isMobile || E.hidden === U || E.addEventListener("visibilitychange", function() {
            E.hidden ? (q = function(a) {
                return setTimeout(function() {
                    a(!0)
                }, 16)
            }, R()) : q = C.requestAnimationFrame || Q
        }), O.Velocity = A, O !== C && (O.fn.velocity = j, O.fn.velocity.defaults = A.defaults), k.each(["Down", "Up"], function(b, a) {
            A.Redirects["slide" + a] = function(y, d, m, h, v, V) {
                var t = k.extend({}, d),
                    S = t.begin,
                    P = t.complete,
                    g = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    x = {};
                t.display === U && (t.display = "Down" === a ? "inline" === A.CSS.Values.getDisplayType(y) ? "inline-block" : "block" : "none"), t.begin = function() {
                    S && S.call(v, v);
                    for (var f in g) {
                        x[f] = y.style[f];
                        var c = A.CSS.getPropertyValue(y, f);
                        g[f] = "Down" === a ? [c, 0] : [0, c]
                    }
                    x.overflow = y.style.overflow, y.style.overflow = "hidden"
                }, t.complete = function() {
                    for (var c in x) {
                        y.style[c] = x[c]
                    }
                    P && P.call(v, v), V && V.resolver(v)
                }, A(y, g, t)
            }
        }), k.each(["In", "Out"], function(b, a) {
            A.Redirects["fade" + a] = function(p, d, g, f, m, x) {
                var h = k.extend({}, d),
                    v = {
                        opacity: "In" === a ? 1 : 0
                    },
                    t = h.complete;
                h.complete = g !== f - 1 ? h.begin = null : function() {
                    t && t.call(m, m), x && x.resolver(m)
                }, h.display === U && (h.display = "In" === a ? "auto" : "none"), A(this, v, h)
            }
        }), A
    }(window.jQuery || window.Zepto || window, window, document)
});
/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function(f, g, k, j) {
        var i, d = 0;
        if (typeof g !== "boolean") {
            j = k;
            k = g;
            g = c
        }

        function h() {
            var p = this,
                n = +new Date() - d,
                o = arguments;

            function m() {
                d = +new Date();
                k.apply(p, o)
            }

            function l() {
                i = c
            }
            if (j && !i) {
                m()
            }
            i && clearTimeout(i);
            if (j === c && n > f) {
                m()
            } else {
                if (g !== true) {
                    i = setTimeout(j ? l : m, j === c ? f - n : f)
                }
            }
        }
        if ($.guid) {
            h.guid = k.guid = k.guid || $.guid++
        }
        return h
    };
    $.debounce = function(d, f, g) {
        return g === c ? a(d, f, false) : a(d, g, f !== false)
    }
})(this);
(function(a) {
    a.fn.ctxLightbox = function(d) {
        var b = '<div class="ctx-lightbox-overlay"></div><div class="ctx-lightbox"><div class="ctx-lightbox-close"><span class="icon-decline"></span></div><div class="ctx-lightbox-content"></div></div>';
        d = a.extend({
            overlay: ".ctx-lightbox-overlay",
            contentBox: ".ctx-lightbox-content",
            lightbox: ".ctx-lightbox",
            x: "",
            y: "",
            data: "",
            closeLightbox: function(k) {
                a(d.contentBox).html("");
                a("html").addClass("lb-loading").removeClass("lb-open");
                a(d.overlay).velocity({
                    scale: 1
                }, 400, function() {
                    a("html").addClass("lb-closed").removeClass("lb-loading");
                    a(d.overlay).removeAttr("style");
                    a(d.lightbox).removeAttr("style");
                    a(document).trigger("ctx:lightbox-closed", [k])
                })
            },
            openLightbox: function(l) {
                a("html").addClass("lb-loading");
                i(d.data.type);
                var m = g(d.x, d.y, a(d.lightbox).height(), a(d.lightbox).width()),
                    k = a(d.overlay).width() / 2;
                a("html").removeClass("lb-closed");
                a(d.overlay).css({
                    left: (d.x - k) + "px",
                    top: (d.y - k) + "px",
                    transform: "translateX(0px) scale(1)",
                    visibility: "visible"
                });
                a(d.overlay).velocity({
                    scale: m
                }, 400, function() {
                    a("html").addClass("lb-open").removeClass("lb-loading")
                });
                a(document).trigger("ctx:lightbox-opened", [l])
            },
            getOverlay: function() {
                return a(d.overlay)
            },
            resizeOverlay: function() {
                var l = g(d.x, d.y, a(d.lightbox).height(), a(d.lightbox).width()),
                    k = a(d.overlay).width() / 2;
                a(d.overlay).css({
                    left: (d.x - k) + "px",
                    top: (d.y - k) + "px"
                });
                a(d.overlay).velocity({
                    scale: l
                }, 400)
            }
        }, d);
        a.fn.ctxLightbox.settings = d;
        var g = function(l, q, p, n) {
            var o = (l > n / 2) ? l : (n - l),
                m = (q > p / 2) ? q : (p - q),
                k = a(d.overlay).width() / 2;
            return Math.ceil(Math.sqrt(Math.pow(o, 2) + Math.pow(m, 2)) / k) + 7
        };
        var c = function(l) {
            if (l) {
                var k = "";
                l = l.split(";");
                a.each(l, function(n, o) {
                    var m = (n > 0) ? "," : "";
                    k += m + '"' + o.replace(":", '":"') + '"'
                });
                return a.parseJSON("{" + k + "}")
            } else {
                return ""
            }
        };
        var i = function(l) {
            if (l.indexOf("youtube") >= 0) {
                var k = '<div class="flex-video"><iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/' + d.data.videoId + '?autoplay=0&amp;rel=0&amp;modestbranding=1&amp;showinfo=1&amp;wmode=transparent&amp;enablejsapi=1" type="text/html" id="' + d.data.videoId + '"></iframe></div>';
                a(d.contentBox).html(k)
            } else {
                if (l.indexOf("content") >= 0) {
                    var k = a(".data", d.data.id).html();
                    a(d.contentBox).html(k)
                }
            }
        };
        var f = function(m) {
            var l = (m.pageX !== undefined) ? m.pageX : (a(window).width() / 2);
            var k = (m.pageY !== undefined) ? m.pageY : ((a(window).height() / 2) + a(document).scrollTop());
            d.x = l;
            d.y = k - a(document).scrollTop();
            d.openLightbox(m)
        };
        var j = function() {
            a(document).on("click", ".ctx-modal-link", function(k) {
                d.data = c(a(this).attr("data-options"));
                f(k);
                k.preventDefault()
            });
            a(document).on("click", "[href^='#lightbox-']", function(k) {
                d.data = c("type:content;id:" + a(this).attr("href").replace(".html", ""));
                f(k);
                k.preventDefault()
            });
            a(".ctx-lightbox-close").click(function(k) {
                d.closeLightbox(k)
            });
            a(document).click(function(k) {
                if (a("html").hasClass("lb-open") && (a(window).width() >= 960)) {
                    if (a(k.target).hasClass("ctx-lightbox-content")) {
                        d.closeLightbox(k)
                    }
                }
            });
            a(document).keyup(function(k) {
                if (k.keyCode == 27) {
                    d.closeLightbox(k)
                }
            })
        };
        var h = function() {
            if (a(".ctx-lightbox").length === 0) {
                a("body").append(b);
                j();
                a(document).ready(function() {
                    a(window).on("debouncedresize", function() {
                        if (a("html").hasClass("lb-open")) {
                            d.x = a(d.lightbox).width() / 2;
                            d.y = a(d.lightbox).height() / 2;
                            d.resizeOverlay()
                        }
                    })
                })
            }
        };
        h();
        return a.fn.ctxLightbox.settings
    };
    a(document).ctxLightbox()
})(jQuery);
(function(a) {
    a.fn.ctxSticky = function(d) {
        d = a.extend({
            stickyItem: a(".ctx-sticky").parent(),
            placeholder: "",
            bp: "",
            disableSmall: false
        }, d);
        a.fn.ctxSticky.settings = d;
        var c = function() {
            var j = d.stickyItem;
            d.bp = (a(window).width() <= 500) ? "small" : "";
            var i = (d.bp === "small") ? d.placeholder.offset().top + a(".ctx-sticky", j).height() : d.placeholder.offset().top;
            j.data("top", i).data("bottom", i + j.height()).data("height", j.height());
            d.placeholder.height(j.height())
        };
        var f = function() {
            return a(window).scrollTop()
        };
        var h = function() {
            var j = d.stickyItem;
            var i = 0;
            a(window).scroll(a.throttle(50, function() {
                var k = a(this).scrollTop();
                if (k > i) {
                    d.scrollDirection = "down"
                } else {
                    d.scrollDirection = "up"
                }
                i = k;
                b()
            }));
            a(window).on("debouncedresize", function() {
                c()
            })
        };
        var b = function() {
            var i = d.stickyItem;
            if (d.bp === "small") {
                if (d.scrollDirection == "up") {
                    if (f() > i.data("bottom")) {
                        if (!d.disableSmall) {
                            k()
                        }
                    } else {
                        j()
                    }
                } else {
                    if (f() > i.data("top")) {
                        i.removeClass("init-sticky").removeAttr("style")
                    }
                }
            } else {
                if (f() > i.data("top")) {
                    k()
                } else {
                    j()
                }
            }

            function k() {
                if (!i.hasClass("init-sticky")) {
                    i.css("margin-top", "-" + i.data("height") + "px");
                    var l = (d.bp === "small") ? "-" + (d.placeholder.height() - a(".ctx-sticky", i).height()) + "px" : "0";
                    var m = (d.bp === "small") ? 300 : 0;
                    i.velocity({
                        marginTop: l
                    }, {
                        duration: m,
                        easing: "swing"
                    })
                }
                i.addClass("init-sticky")
            }

            function j() {
                if (f() < i.data("top")) {
                    i.removeClass("init-sticky").removeAttr("style")
                }
            }
        };
        var g = function() {
            if (d.stickyItem.length > 0) {
                d.stickyItem.wrap("<div class='ctx-sticky-placeholder' />");
                d.placeholder = a(".ctx-sticky-placeholder");
                d.disableSmall = (a(".ctx-sticky").hasClass("disable-sticky-small")) ? true : false;
                setTimeout(function() {
                    c()
                }, 200);
                h()
            }
        };
        g();
        return a.fn.ctxSticky.settings
    };
    a(document).ready(function() {
        a(document).ctxSticky()
    })
})(jQuery);
(function(g) {
    function d() {}

    function w(G) {
        c = [G]
    }

    function p(I, G, H) {
        return I && I.apply(G.context || G, H)
    }

    function o(G) {
        return /\?/.test(G) ? "&" : "?"
    }
    var q = "async",
        u = "charset",
        s = "",
        E = "error",
        v = "insertBefore",
        t = "_jqjsp",
        B = "on",
        h = B + "click",
        l = B + E,
        r = B + "load",
        z = B + "readystatechange",
        b = "readyState",
        D = "removeChild",
        k = "<script>",
        A = "success",
        C = "timeout",
        f = window,
        a = g.Deferred,
        i = g("head")[0] || document.documentElement,
        y = {},
        n = 0,
        c, m = {
            callback: t,
            url: location.href
        },
        x = f.opera,
        j = !!g("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;

    function F(L) {
        L = g.extend({}, m, L);
        var J = L.success,
            Q = L.error,
            I = L.complete,
            Z = L.dataFilter,
            ab = L.callbackParameter,
            R = L.callback,
            aa = L.cache,
            H = L.pageCache,
            K = L.charset,
            M = L.url,
            ad = L.data,
            T = L.timeout,
            P, X = 0,
            V = d,
            S, O, G, ac, N, W;
        a && a(function(ae) {
            ae.done(J).fail(Q);
            J = ae.resolve;
            Q = ae.reject
        }).promise(L);
        L.abort = function() {
            !(X++) && V()
        };
        if (p(L.beforeSend, L, [L]) === !1 || X) {
            return L
        }
        M = M || s;
        ad = ad ? ((typeof ad) == "string" ? ad : g.param(ad, L.traditional)) : s;
        M += ad ? (o(M) + ad) : s;
        ab && (M += o(M) + encodeURIComponent(ab) + "=?");
        !aa && !H && (M += o(M) + "_" + (new Date()).getTime() + "=");
        M = M.replace(/=\?(&|$)/, "=" + R + "$1");

        function Y(ae) {
            if (!(X++)) {
                V();
                H && (y[M] = {
                    s: [ae]
                });
                Z && (ae = Z.apply(L, [ae]));
                p(J, L, [ae, A, L]);
                p(I, L, [L, A])
            }
        }

        function U(ae) {
            if (!(X++)) {
                V();
                H && ae != C && (y[M] = ae);
                p(Q, L, [L, ae]);
                p(I, L, [L, ae])
            }
        }
        if (H && (P = y[M])) {
            P.s ? Y(P.s[0]) : U(P)
        } else {
            f[R] = w;
            ac = g(k)[0];
            ac.id = t + n++;
            if (K) {
                ac[u] = K
            }
            x && x.version() < 11.6 ? ((N = g(k)[0]).text = "document.getElementById('" + ac.id + "')." + l + "()") : (ac[q] = q);
            if (j) {
                ac.htmlFor = ac.id;
                ac.event = h
            }
            ac[r] = ac[l] = ac[z] = function(ae) {
                if (!ac[b] || !/i/.test(ac[b])) {
                    try {
                        ac[h] && ac[h]()
                    } catch (af) {}
                    ae = c;
                    c = 0;
                    ae ? Y(ae[0]) : U(E)
                }
            };
            ac.src = M;
            V = function(ae) {
                W && clearTimeout(W);
                ac[z] = ac[r] = ac[l] = null;
                i[D](ac);
                N && i[D](N)
            };
            i[v](ac, (G = i.firstChild));
            N && i[v](N, G);
            W = T > 0 && setTimeout(function() {
                U(C)
            }, T)
        }
        return L
    }
    F.setup = function(G) {
        g.extend(m, G)
    };
    g.jsonp = F
})(jQuery);
/*!
 * Javascript Cookie v1.5.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(a) {
    var f;
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            try {
                f = require("jquery")
            } catch (d) {}
            module.exports = a(f)
        } else {
            var c = window.Cookies;
            var b = window.Cookies = a(window.jQuery);
            b.noConflict = function() {
                window.Cookies = c;
                return b
            }
        }
    }
}(function(h) {
    var f = /\+/g;

    function j(l) {
        return i.raw ? l : encodeURIComponent(l)
    }

    function a(l) {
        return i.raw ? l : decodeURIComponent(l)
    }

    function g(l) {
        return j(i.json ? JSON.stringify(l) : String(l))
    }

    function c(l) {
        if (l.indexOf('"') === 0) {
            l = l.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            l = decodeURIComponent(l.replace(f, " "));
            return i.json ? JSON.parse(l) : l
        } catch (m) {}
    }

    function b(m, l) {
        var n = i.raw ? m : c(m);
        return d(l) ? l(n) : n
    }

    function k() {
        var o, m;
        var n = 0;
        var l = {};
        for (; n < arguments.length; n++) {
            m = arguments[n];
            for (o in m) {
                l[o] = m[o]
            }
        }
        return l
    }

    function d(l) {
        return Object.prototype.toString.call(l) === "[object Function]"
    }
    var i = function(s, r, x) {
        if (arguments.length > 1 && !d(r)) {
            x = k(i.defaults, x);
            if (typeof x.expires === "number") {
                var u = x.expires,
                    w = x.expires = new Date();
                w.setMilliseconds(w.getMilliseconds() + u * 86400000)
            }
            return (document.cookie = [j(s), "=", g(r), x.expires ? "; expires=" + x.expires.toUTCString() : "", x.path ? "; path=" + x.path : "", x.domain ? "; domain=" + x.domain : "", x.secure ? "; secure" : ""].join(""))
        }
        var y = s ? undefined : {},
            v = document.cookie ? document.cookie.split("; ") : [],
            q = 0,
            o = v.length;
        for (; q < o; q++) {
            var p = v[q].split("="),
                m = a(p.shift()),
                n = p.join("=");
            if (s === m) {
                y = b(n, r);
                break
            }
            if (!s && (n = b(n)) !== undefined) {
                y[m] = n
            }
        }
        return y
    };
    i.get = i.set = i;
    i.defaults = {};
    i.remove = function(m, l) {
        i(m, "", k(l, {
            expires: -1
        }));
        return !i(m)
    };
    if (h) {
        h.cookie = i;
        h.removeCookie = i.remove
    }
    return i
}));
(function(c, b, d, a) {
    b.CTX = {
        cache: {},
        init: function() {},
        libs: {},
        temp: {},
        utils: {
            homepagePath: "",
            currentPagePath: "",
            isAuthor: null,
            isEditMode: function() {
                return c("[data-layer=Edit]").hasClass("is-selected")
            },
            isPreviewMode: function() {
                return c("[data-layer=Preview]").hasClass("is-selected")
            },
            getRelativePath: function(g) {
                if (b.CTX.utils.isAuthor != "true") {
                    var j = b.CTX.utils.homepagePath.split("/");
                    var f = j[3];
                    var i = "";
                    if (f != "en_us") {
                        i = "/" + f
                    }
                    var h = g;
                    if (g && g.indexOf(b.CTX.utils.homepagePath) == 0) {
                        h = i + g.replace(b.CTX.utils.homepagePath, "")
                    }
                    return h
                }
                return g
            },
            randomString: function(g, f) {
                if (f) {
                    return new Array(g).join().replace(/(.|$)/g, function() {
                        return ((Math.random() * 36) | 0).toString(36)[Math.random() < 0.5 ? "toString" : "toUpperCase"]()
                    })
                }
                return new Array(5).join().replace(/(.|$)/g, function() {
                    return ((Math.random() * 36) | 0).toString(36)
                })
            },
            hash: function(k) {
                var j = 0,
                    g, h, f;
                if (k.length == 0) {
                    return j
                }
                for (g = 0, f = k.length; g < f; g++) {
                    h = k.charCodeAt(g);
                    j = ((j << 5) - j) + h;
                    j |= 0
                }
                return j
            },
            wh: this,
            globalMsg: {
                allowedHosts: {},
                languageMapping: {},
                confirmedCookie: "",
                languageCookie: "",
                popupMsgSelector: "global-lang-msg",
                isAllowedHost: function(f) {
                    return c.inArray(f, b.CTX.utils.globalMsg.allowedHosts) > -1 ? true : false
                },
                getLanguage: function() {
                    var f = b.CTX.utils.globalMsg;
                    var i = function(k) {
                        if (k != undefined && k != null) {
                            if (f.languageMapping.hasOwnProperty(k)) {
                                return f.languageMapping[k]
                            }
                        }
                        return ""
                    };
                    if (c.cookie(f.languageCookie)) {
                        var g = c.cookie(f.languageCookie).toLowerCase();
                        return i(g)
                    }
                    var h = navigator.languages;
                    var j = navigator.language;
                    if (h != undefined && h != null && h.length > 0) {
                        var g = h[0].toLowerCase();
                        return i(g)
                    } else {
                        if (j.length > 0) {
                            if (j === "en" || j === "en-US") {
                                return null
                            }
                            return j
                        }
                    }
                    return null
                },
                popupConfirmed: function() {
                    if (c.cookie(b.CTX.utils.globalMsg.confirmedCookie)) {
                        return true
                    }
                    return false
                },
                getMsgRequest: function(h) {
                    var g = null;
                    var f = "/products." + b.CTX.utils.globalMsg.popupMsgSelector;
                    if (h != null && h != undefined) {
                        f += "." + h
                    } else {
                        g = {
                            _: Date.now()
                        }
                    }
                    f += "/";
                    return c.get(f, g)
                }
            },
            dialog: {
                get: function(f) {
                    if (f !== undefined) {
                        return c(f)
                    }
                    return c("form.foundation-form")
                },
                getFields: function(f) {
                    var g = {};
                    c("[name]", f).each(function(h, i) {
                        g[c(i).attr("name").replace("./", "")] = c(i)
                    });
                    return g
                },
                getValue: function(f, g) {
                    var g = g.replace(/(:|\.|\[|\]|,)/g, "\\$1");
                    return c("[name=\\.\\/" + g + "]", f).val()
                },
                getValues: function(f) {
                    var g = {};
                    c("[name]", f).each(function(h, i) {
                        g[c(i).attr("name").replace("./", "")] = c(i).val()
                    });
                    return g
                },
                setValue: function(f, h) {
                    var g = c('[name="./' + f + '"]', "form.foundation-form");
                    g.val(h);
                    return g
                },
                getMultiValue: function(i, h) {
                    var g = [],
                        f = {};
                    c('input[name="./' + i + '"]', "form.foundation-form .coral-Multifield").each(function(k, j) {
                        var j = c(j);
                        g.push({
                            el: j,
                            val: j.val()
                        });
                        f[j.val()] = ""
                    });
                    if (!h) {
                        return g
                    } else {
                        return f
                    }
                },
                createMultiField: function(g, h) {
                    var f = html = endHtml = output = "";
                    h.forEach(function(j) {
                        var l = j,
                            k = g.sectionId(l);
                        html += '<li class="js-coral-Multifield-input coral-Multifield-input">';
                        html += '<section class="coral-Form-fieldset" data-name="' + g.itemSeparator + '" data-section-id="' + k + '">';
                        html += g.sectionChild(l);
                        html += "<div>";
                        g.fields.forEach(function(n, m) {
                            var o = g.fields[m].value(l);
                            html += '<div class="' + g.fields[m]["wrapperClass"] + '">';
                            html += '<label class="' + g.fields[m]["labelClass"] + '">' + g.fields[m]["fieldLabel"] + "</label>";
                            html += "<" + g.fields[m]["field"] + ' class="' + g.fields[m]["class"] + '" type="' + g.fields[m]["type"] + '" name="' + g.fields[m]["jcrName"] + '" value="' + o + '">';
                            if ((g.fields[m]["invisible"] != true) && (g.fields[m]["type"] != "checkbox")) {
                                html += "<span data-" + g.fields[m]["type"] + ' class="coral-Form-fieldinfo coral-Icon coral-Icon--infoCircle coral-Icon--sizeS" data-init="quicktip" data-quicktip-type="info" data-quicktip-arrow="right" data-quicktip-content="" aria-label="" tabindex="0"></span>'
                            }
                            if (g.fields[m]["type"] === "checkbox") {
                                html += '<span class="coral-Checkbox-checkmark"></span>';
                                html += '<span class="coral-Checkbox-description"> </span><input type="hidden" name="' + g.fields[m]["jcrName"] + '@Delete">'
                            }
                            html += "</div>"
                        });
                        html += "</div>";
                        html += "</section>";
                        html += '<button type="button" class="js-coral-Multifield-remove coral-Multifield-remove coral-Button coral-Button--square coral-Button--quiet">';
                        html += '<i class="coral-Icon coral-Icon--sizeS coral-Icon--delete coral-Button-icon"></i></button>';
                        html += '<button type="button" class="js-coral-Multifield-move coral-Multifield-move coral-Button coral-Button--square coral-Button--quiet">';
                        html += '<i class="coral-Icon coral-Icon--sizeS coral-Icon--moveUpDown coral-Button-icon"></i></button>';
                        html += "</li>"
                    });
                    return f + html + endHtml
                },
                createHiddenField: function(g, j, f, h, i) {
                    var f = f || "",
                        h = h || "hidden",
                        i = i || "",
                        m = c("form.foundation-form"),
                        k = c(h + '[name="./' + g + '"]', m),
                        l = '<input type="' + h + '" class="' + i + '" ' + f + ' name="./' + g + '" value="' + j + '" style="display:none">';
                    if (k.length === 0) {
                        m.append(l)
                    } else {
                        k.replaceWith(l);
                        console.log("field length greater than 0", k.length)
                    }
                    return
                },
                getComponentName: function(g) {
                    var h = this.getValue(g, "sling:resourceType");
                    if (h == null) {
                        return
                    }
                    var f = h.lastIndexOf("/");
                    return h.substr(++f)
                },
                hasField: function(f, g) {
                    return c("[name=\\.\\/" + g + "]").length > 0
                },
                hasValue: function(f, g) {
                    return !!CTX.utils.dialog.getValue(f, g)
                },
                getPath: function(f) {
                    self = b.CTX.utils.dialog;
                    if (f !== undefined) {
                        return self.get(f).attr("action")
                    }
                    return self.get().attr("action")
                },
                getSubmitBtn: function() {
                    return (".cq-dialog-submit")
                },
                getCancelBtn: function() {
                    return ".cq-dialog-cancel"
                },
                getBasicEvent: function(k, h, m, l) {
                    var i = (typeof k == undefined || k == null) ? d : k;
                    var f = (typeof k == undefined || h == null) ? "click" : h;
                    var g = (typeof m == undefined || m == null) ? ".cq-dialog-submit" : m;
                    var j = (typeof m == undefined || m == null) ? null : l;
                    return {
                        container: i,
                        trigger: f,
                        selector: g,
                        func: j
                    }
                },
                getMultiFieldAddBtn: function() {
                    return c(".js-coral-Multifield-add")
                },
                getMultiFieldRemoveBtn: function() {
                    return c(".js-coral-Multifield-remove")
                },
                getMultiFieldCount: function() {
                    return c(".js-coral-Multifield-input").length
                },
                getMultiFieldList: function() {
                    return c("form.foundation-form .coral-Multifield-list .coral-Multifield-input")
                },
                unbindEvents: function(j) {
                    if (j != null && j.length > 0) {
                        for (var h in j) {
                            var k = j[h];
                            var g = !(typeof k.func == undefined || k.func == null);
                            var f = !(typeof k.selector == undefined || k.selector == null);
                            if (!g && !f) {
                                c(k.container).off(k.trigger)
                            } else {
                                if (g && f) {
                                    c(k.container).off(k.trigger, k.selector, k.func)
                                } else {
                                    if (g && !f) {
                                        c(k.container).off(k.trigger, k.func)
                                    } else {
                                        c(k.container).off(k.trigger, k.selector)
                                    }
                                }
                            }
                        }
                    }
                }
            },
            editableToolbar: {
                appendButton: function(g) {
                    var f = d;
                    b.setTimeout(function() {
                        var h = '<button class="coral-Button coral-Button--quiet" title="' + g.text + '" data-action="' + g.text + '"><i class="coral-Icon ' + g.icon + ' coral-Icon--sizeS" title="' + g.text + '"></i></button>';
                        c("#EditableToolbar").append(h);
                        f.off("click", '[data-action="' + g.text + '"]');
                        f.on("click", '[data-action="' + g.text + '"]', g.handler)
                    }, 25)
                },
                hideOverlays: function(f) {
                    Granite.author.store.forEach(function(g) {
                        if (g.path.match(f)) {
                            g.overlay.setVisible(false);
                            g.getChildren().forEach(function(h) {
                                h.overlay.setVisible(false)
                            })
                        }
                    })
                }
            },
            video: {
                writeVideoLinks: function(k, g) {
                    var j = k;
                    var f = [];
                    var h = false;
                    var l = new RegExp("<a(\\s+href=['|\"]http(?:s:|:)//www\\.youtube\\.com/watch\\?v=.*?</a>)", "g");
                    n(j);

                    function i(p) {
                        if (p.match(l) != null) {
                            p.match(l).map(function(D, A, x, w) {
                                var y = D;
                                var s = y.match(/href="(.*?)"/)[0];
                                var r = s.match(/["|'](.+?)["|']/)[1];
                                if (CTX.utils.video.isValidVideoUrl(r)) {
                                    var B = s.match(/v=(.*)"/).slice(1, 2)[0];
                                    p = p.replace("<a " + s, '<a class="ctx-modal-link" data-ctx-modal="1" href="' + r + '" data-options="videoId:' + B + ';type:youtubes"');
                                    var C = /videoId:([^;]*)(?:[^>]*)>([^<]*)/g;
                                    var v;
                                    var q;
                                    var u;
                                    var z;
                                    var t;
                                    while ((v = C.exec(p)) !== null) {
                                        if (v.index === C.lastIndex) {
                                            C.lastIndex++
                                        }
                                        if (x.length > 1 && A == 0) {
                                            continue
                                        }
                                        z = v[0];
                                        q = v[1];
                                        capturedLinkTxt = v[2];
                                        if (!/<span(.*?)>/.test(z) && !/data\-ts/.test(z)) {
                                            t = z.replace(">" + capturedLinkTxt, 'data-ts="1"><span class="vi icon-play">&nbsp;</span><span class="vt">' + capturedLinkTxt + "</span> (" + q + ")");
                                            p = p.replace(z, t);
                                            f.push(q)
                                        }
                                    }
                                }
                            });
                            m(p)
                        } else {
                            g(p)
                        }
                    }

                    function m(p) {
                        var q = 0;
                        while (q < f.length) {
                            (function(r) {
                                CTX.services.getVideoDataAsync(f[r], function(s) {
                                    var t = s.ytduration;
                                    p = p.replace("(" + f[r] + ")", '<span class="vd">(' + t + ")</span>");
                                    if (r == f.length - 1) {
                                        b.setTimeout(function() {
                                            g(p)
                                        }, 500)
                                    }
                                })
                            })(q);
                            q++
                        }
                    }

                    function n(r) {
                        if (f.length < 1) {
                            var q = /www\.youtube\.com\/watch\?v=(.*?)".*?videoId:(.*?);.*?class="vd">\((.*?)\)/g;
                            var v = 0;
                            if (r.match(q) != null) {
                                v = r.match(q).length
                            }
                            var t = 0;
                            var u;
                            var p = r;
                            var s = 0;
                            r.replace(q, function(x, w, z, y) {
                                if (w != z) {
                                    s++
                                }
                            });
                            r.replace(q, function(x, w, z, y) {
                                if (w != z) {
                                    (function(B, A, D, C) {
                                        CTX.services.getVideoDataAsync(A, function(E) {
                                            ++B;
                                            var F = E.ytduration;
                                            u = x.replace(D, A).replace(C, F);
                                            p = p.replace(x, u);
                                            if (B == s) {
                                                i(p)
                                            }
                                        })
                                    })(t, w, z, y)
                                }
                            });
                            if (s == 0) {
                                i(p)
                            }
                        }
                    }

                    function o(p) {}
                },
                getVideoLinkData: function(h, g, i) {
                    g = g || "";
                    var f = h.match(/v=(.*)/).slice(1, 2)[0];
                    CTX.services.getVideoDataAsync(f, function(l) {
                        var n = l.ytduration,
                            k = l.yttitle,
                            m = {
                                vidId: f,
                                vidTitle: k,
                                duration: n
                            };
                        if (g !== "") {
                            var j = 'data-ctx-modal="1" href="#javascript:void(0);" data-options="videoId:' + f + ';type:youtube"';
                            var o = '<span class="vi icon-play">&nbsp;</span><span class="vt">' + g + '</span><span class="vd">(' + n + ")</span>".replace(/"/g, "&quot;");
                            j = j.replace(/"/g, "&quot;");
                            o = o.replace(/"/g, "&quot;");
                            m.attr = j;
                            m.text = o
                        }
                        i(m)
                    })
                },
                isValidVideoUrl: function(f) {
                    if (/youtube\.com/.test(f)) {
                        return /http(s:|:)\/\/www\.youtube\.com\/watch\?v=.+/g.test(f)
                    }
                    return false
                },
                getTransformedLink: function(f) {
                    if (CTX.utils.video.isValidVideoUrl(f)) {
                        return f
                    }
                    if (f.indexOf("://") === -1 && f.indexOf("/") === -1 && f.charAt(0) != "#") {
                        return "https://www.youtube.com/watch?v=" + f
                    }
                    return f
                }
            },
            getDurationFromISO8601: function(r) {
                var n = /PT(\d+H)?(\d+M)?(\d+S)?/;
                var h = n.exec(r);
                if (h != null) {
                    var q = typeof h[1];
                    var m = typeof h[2];
                    var l = typeof h[3];
                    var o = 0;
                    var g = 0;
                    var p = 0;
                    if ((q != "undefined")) {
                        var j = h[1].slice(0, -1);
                        o = parseInt(j)
                    }
                    if ((m != "undefined")) {
                        var i = h[2].slice(0, -1);
                        g = parseInt(i)
                    }
                    if ((l != "undefined")) {
                        var k = h[3].slice(0, -1);
                        p = parseInt(k)
                    }
                    var f = "";
                    if (o > 0) {
                        f = o + ":"
                    }
                    if (g > 9 && o > 0) {
                        f = f + g + ":"
                    } else {
                        if (g > 0 && o > 0) {
                            f = f + "0" + g + ":"
                        } else {
                            if (g > 0) {
                                f = g + ":"
                            } else {
                                if (o > 0) {
                                    f = f + "00:"
                                } else {
                                    f = g + ":"
                                }
                            }
                        }
                    }
                    if (p > 9) {
                        f = f + p
                    } else {
                        if (p > 0) {
                            f = f + "0" + p
                        } else {
                            f = f + "00"
                        }
                    }
                    return f
                }
                return r
            },
            text: {
                formatTables: function(h) {
                    var f = c("<div>").append(h);
                    var g = f.find("table");
                    g.each(function() {
                        var j = c(this),
                            i = j.parents(".ctx-table-container");
                        (i.length === 0) ? j.wrap('<div class="ctx-table-container"></div>'): false;
                        j.css("max-width", c(this).attr("width"))
                    });
                    return f.html()
                },
                handleAnchorLinks: function() {
                    var f = "a[href^='#video-'], a[href^='#lightbox-'], a[href^='#tab-']";
                    var g = "a[href^='#']:not(" + f + ")";
                    d.on("click", g, function(j) {
                        var i = c(this).attr("href").replace("#", "");
                        var h = c("[name='" + i + "'], [id='" + i + "']");
                        if (h.length > 0) {
                            j.preventDefault();
                            var k = c("[name='" + i + "'], [id='" + i + "']").offset().top;
                            c("html, body").animate({
                                scrollTop: CTX.utils.animate.getScrollOffset(k)
                            }, 1000)
                        }
                    })
                }
            },
            animate: {
                getScrollOffset: function(g) {
                    var i = c(".ctx-sticky"),
                        f = (c(b).width() <= 500) ? "small" : "";
                    var h = (i.length > 0) ? (g - (i.parent().height())) : g;
                    return (f === "small") ? g : h
                }
            },
            refreshEditor: function() {
                console.log("Refreshing editor...");
                a.overlayManager.teardown();
                a.overlayManager.setup();
                a.overlayManager.reposition(true)
            }
        },
        services: {
            saveVideoData: function(g, o, j) {
                var p = b.CTX,
                    i = /youtube/.test(g),
                    n = /youtu.be/.test(g),
                    f, m, l = p.services.vars.youTubeApiKey,
                    h = p.services.vars.youTubeApiUrl + "videos";
                if (i) {
                    f = g.match(/v=(.*)/).slice(1, 2)[0]
                } else {
                    if (n) {
                        f = g.match(/be\/(.*)/).slice(1, 2)[0]
                    }
                }
                if (f === "") {
                    var m = true;
                    console.warn("Invalid Youtube URL: " + e)
                }
                if (!m && o !== undefined) {
                    jQuery.jsonp({
                        type: "GET",
                        url: h + "?id=" + f + "&part=snippet,contentDetails&key=" + l,
                        cache: false,
                        timeout: 10000,
                        dataType: "jsonp",
                        callbackParameter: "callback",
                        error: function(q) {
                            c(b).adaptTo("foundation-ui").alert("There was a problem", "Please ensure that the Youtube video ID or URL is correct.")
                        },
                        success: function(s) {
                            var v = o;
                            var r = s.items[0];
                            var u = p.utils.getDurationFromISO8601(r.contentDetails.duration);
                            var q = {
                                ytthumbsrc: r.snippet.thumbnails.high.url,
                                ytduration: u,
                                ytdescription: k(r.snippet.description.replace(/\n/g, "<br/>") + "<br/>"),
                                yttitle: r.snippet.title
                            };
                            if ((j != undefined) && /ytthumbsrc|ytduration|ytdescription|yttitle/.test(j)) {
                                var t = {};
                                q = t[j] = q[j]
                            }
                            jQuery.ajax({
                                type: "post",
                                url: v,
                                cache: false,
                                data: q,
                                dataType: "text",
                                success: function() {},
                                fail: function() {
                                    c(b).adaptTo("foundation-ui").alert("There was a problem", "There was an error while saving the youtube video data.")
                                }
                            });
                            return q
                        }
                    })
                } else {
                    return f
                }

                function k(s) {
                    var q = "For more information";
                    var t = "Learn more at";
                    var r = "Read more at";
                    if (s.indexOf(q) > 0) {
                        s = s.replace(s.substr(s.indexOf(q), s.length - 1), "")
                    }
                    if (s.indexOf(t) > 0) {
                        s = s.replace(s.substr(s.indexOf(t), s.length - 1), "")
                    }
                    if (s.indexOf(r) > 0) {
                        s = s.replace(s.substr(s.indexOf(r), s.length - 1), "")
                    }
                    return s
                }
            },
            getVideoDataAsync: function(h, j) {
                var f = b.CTX,
                    i = f.services.vars.youTubeApiKey,
                    g = f.services.vars.youTubeApiUrl + "videos";
                if (f.utils.video.isValidVideoUrl(h)) {
                    h = h.match(/v=(.*)/).slice(1, 2)[0]
                }
                jQuery.jsonp({
                    type: "GET",
                    url: g + "?id=" + h + "&part=snippet,contentDetails&key=" + i,
                    cache: false,
                    timeout: 10000,
                    dataType: "jsonp",
                    callbackParameter: "callback",
                    error: function(k) {
                        console.log(k);
                        c(b).adaptTo("foundation-ui").alert("There was a problem", "Please ensure that the Youtube video ID or URL is correct.")
                    },
                    success: function(m) {
                        var l = m.items[0],
                            k = "https://i.ytimg.com/vi/no/no.jpg";
                        if (m.items.length > 0) {
                            var n = f.utils.getDurationFromISO8601(l.contentDetails.duration);
                            l = {
                                ytthumbsrcD: "default" in l.snippet.thumbnails ? l.snippet.thumbnails["default"].url : k,
                                ytthumbsrc: "high" in l.snippet.thumbnails ? l.snippet.thumbnails.high.url : k,
                                ytthumbsrcH: "high" in l.snippet.thumbnails ? l.snippet.thumbnails.high.url : k,
                                ytthumbsrcM: "medium" in l.snippet.thumbnails ? l.snippet.thumbnails.medium.url : k,
                                ytthumbsrcS: "standard" in l.snippet.thumbnails ? l.snippet.thumbnails.standard.url : k,
                                ytduration: n,
                                ytdescription: l.snippet.description.replace(/\n/g, "<br/>") + "<br/>",
                                yttitle: l.snippet.title
                            };
                            j(l)
                        } else {
                            l = {
                                error: "Error with video id: " + h
                            };
                            j(l)
                        }
                    }
                })
            },
            getVideoPlaylist: function(j, f) {
                var h = b.CTX,
                    k = h.services.vars.youTubeApiKey,
                    i = h.services.vars.youTubeApiUrl + "playlistItems",
                    g = 50;
                jQuery.jsonp({
                    type: "GET",
                    url: i + "?maxResults=" + g + "&part=snippet&playlistId=" + j + "&key=" + k,
                    cache: false,
                    timeout: 10000,
                    dataType: "jsonp",
                    callbackParameter: "callback",
                    error: function(l) {
                        c(b).adaptTo("foundation-ui").alert("There was a problem", "Please ensure that the Youtube video ID or URL is correct.")
                    },
                    success: function(l) {
                        b.ytt = l;
                        console.log(l);
                        f(l)
                    }
                })
            },
            getJcrNode: function(h, g) {
                var f = ".json";
                h += f;
                var i = (g === undefined) ? "" : g;
                c.ajax(h, {
                    success: function(j) {
                        return j[i]
                    },
                    error: function() {}
                })
            },
            setJcrNode: function(g, f) {
                jQuery.ajax({
                    type: "post",
                    url: g,
                    cache: false,
                    data: f,
                    dataType: "text",
                    success: function(h) {},
                    fail: function(h) {}
                })
            },
            deleteJcrNode: function(g, f) {
                jQuery.ajax({
                    type: "post",
                    url: g.replace("_jcr_content", "jcr:content"),
                    cache: false,
                    data: {
                        ":operation": "delete"
                    },
                    dataType: "text",
                    success: function(h) {
                        console.log("Success deleting: " + g);
                        f(h)
                    },
                    fail: function(h) {
                        console.log("Error deleting: " + g);
                        f(h)
                    }
                })
            },
            moveJcrNode: function(g, j, h, f) {
                j = j.replace("_jcr_content", "jcr:content");
                h = h.replace("_jcr_content", "jcr:content");
                var i = new FormData();
                i.append(g + "@MoveFrom", j);
                jQuery.ajax({
                    url: h,
                    data: i,
                    cache: false,
                    contentType: false,
                    processData: false,
                    type: "POST",
                    success: function(k) {
                        console.log("Successfully moved JCR node");
                        f(k)
                    },
                    failure: function(k) {
                        console.log("Could not move JCR node");
                        f(k)
                    }
                })
            },
            renameJcrNode: function(i, g, f) {
                var h = i.substr(0, i.lastIndexOf("/"));
                CTX.services.moveJcrNode(g, i, h, f)
            },
            vars: {
                youTubeApiKey: "AIzaSyAcCTCMaI56qYrNSPUPqCiO0yXML817xQw",
                youTubeApiUrl: "https://www.googleapis.com/youtube/v3/"
            }
        }
    }
})(jQuery, window, jQuery(document), Granite.author);
var ctx = {} || ctx;
ctx.navbar = {
    settings: {}
};
ctx.navbar.settings.offcanvas = "";
ctx.navbar.settings.offCanvasNavButton = ".nav-btn-oc";
$(document).ready(function() {
    var a = jQuery("#nav1").data("content-container");
    if (a != undefined && $("#nav1").hasClass("vertical oc") && ctx.navbar.settings.offCanvasNavButton != undefined) {
        origMargin = $(a).css("marginLeft");
        $(a).css("transition", "transform 0.5s");
        css = ".oc-nav " + a + "{ position:relative;transform:translate3d(42%, 0, 0)} .oc-nav .ctx-navbar.vertical.oc {transform:translate3d(0, 0, 0);} body{overflow-x:hidden;}";
        $('<style type="text/css" id="nav-oc">' + css + "</style>").appendTo("head");
        document.querySelector("style").textContent += "@media screen and (min-width:667px) {" + a + ", .oc-nav " + a + " { margin-left: " + origMargin + "; } .oc-nav .ctx-navbar{width:100%;position:inherit;height:inherit} .oc-nav .ctx-navbar .navbar-wrap{height:inherit;background-color:gray;}}";
        $(navbar.settings.offCanvasNavButton).on("click", function() {
            jQuery("html").toggleClass("oc-nav")
        })
    }
    $(".dropdown a").on("click", function() {
        jQuery(this).next("ul.dropdown-menu").toggleClass("open")
    });
    $(".hamburger").on("click", function() {
        jQuery(".navbar-nav").toggleClass("open")
    })
});
var CTX_Layout_Tool = {
    handleAnchorContent: function() {
        $(".ctx-columns.ctx-has-anchor").each(function() {
            var a = 0;
            $(".ctx-anchored-content", $(this)).each(function() {
                var c = $(this).height();
                if (c > a) {
                    a = c
                }
            });
            var b = $(".ctx-anchored-content", $(this)).show().prev();
            if (b.parent().hasClass("has-column-bg")) {
                a = a + 25
            }
            b.css("padding-bottom", a + "px")
        })
    }
};
CTX_Layout_Tool.handleAnchorContent();
$(document).ready(function() {
    $(window).on("debouncedresize", function() {
        CTX_Layout_Tool.handleAnchorContent()
    });
    if ($(".ctx-anchored-content .ctx-image")) {
        $(window).load(function() {
            CTX_Layout_Tool.handleAnchorContent()
        })
    }
});
var CTX_Dynamic_Nav = function(a) {
    var o = {
        nav: $(a),
        navClass: a,
        baseLevel: 0,
        bp: "small",
        windowWidth: $("body").width(),
        moreMenu: $(".more", $(a))
    };
    var d = function() {
        o.windowWidth = $("body").width();
        var p = $(".ctx-nav-bp", o.nav).css("text-align");
        switch (p) {
            case "left":
                o.bp = "small";
                break;
            case "center":
                o.bp = "medium";
                break;
            case "right":
                o.bp = "large";
                break
        }
        o.nav.attr("data-size", o.bp)
    };
    var g = function() {
        $(document).on("click", o.navClass + " .has-child > a", function(q) {
            q.stopPropagation();
            var p = $(this).parent();
            j($(this));
            p.hasClass("open") ? k(p) : l(p)
        });
        $(document).click(function() {
            if (o.nav.hasClass("vertical")) {
                if (o.bp != "large") {
                    k($(".nav-level-1 > li.open", o.nav))
                }
            } else {
                k($(".nav-level-1 > li.open", o.nav))
            }
        });
        $(document).keyup(function(p) {
            if (p.keyCode == 27) {
                k($(".nav-level-1 > li.open", o.nav))
            }
        });
        $(document).ready(function() {
            d();
            h();
            c()
        });
        $(window).on("debouncedresize", function() {
            d();
            h()
        })
    };
    var h = function() {
        $(".nav-level-1 > li", o.nav).not(".more").removeClass("inactive").removeClass("move-before").removeClass("move-after");
        $("ul", o.moreMenu).html("");
        o.moreMenu.removeClass("active");
        var q = $(".nav-level-1 > li:first").offset().top;
        var r = 0,
            p = 0;
        $(".nav-level-1 > li", o.nav).not(".more").each(function() {
            r = $(this).offset().top;
            if (r > q) {
                $(this).addClass("move-after");
                p++
            }
        });
        i($(".move-after", o.nav), true);
        if (p > 0) {
            $(".nav-level-1 > li.inactive:first", o.nav).prev().addClass("move-before");
            p++
        }
        i($(".move-before", o.nav), false);
        (p > 0) ? o.moreMenu.addClass("has-child"): o.moreMenu.removeClass("has-child")
    };
    var i = function(q, p) {
        (p) ? $("ul:first", o.moreMenu).append(q.removeAttr("style").clone()): $("ul:first", o.moreMenu).prepend(q.removeAttr("style").clone());
        q.addClass("inactive");
        if (q.hasClass("active")) {
            o.moreMenu.addClass("active")
        }
    };
    var l = function(p) {
        var r = $("ul:first", p),
            s = p.parentsUntil(o.nav).length,
            q = 0;
        p.addClass("open");
        if (o.bp != "small") {
            (f(r)) ? m(r): "";
            q = 600
        }
        if (s == o.baseLevel) {
            o.nav.addClass("open");
            r.velocity({
                opacity: 1
            }, {
                duration: q,
                easing: "easeOutQuart"
            })
        } else {
            r.velocity("slideDown", {
                duration: 300
            })
        }
    };
    var k = function(p) {
        var q = $("ul:first", p),
            r = p.parentsUntil(o.nav).length;
        p.removeClass("open").removeAttr("style");
        b(p);
        if (r == o.baseLevel) {
            o.nav.removeClass("open");
            q.removeAttr("style")
        } else {
            q.velocity("slideUp", {
                duration: 200
            }, function() {
                q.removeAttr("style")
            })
        }
    };
    var b = function(p) {
        $("li.open", p).each(function() {
            k($(this))
        })
    };
    var j = function(p) {
        k($(".nav-level-1 > li.open", o.nav).not(p.parents("li")))
    };
    var f = function(p) {
        return ((p.offset().left + p.width()) > o.windowWidth) ? true : false
    };
    var m = function(q) {
        var p = q.width() - q.parent().width();
        q.css("left", "-" + p + "px")
    };
    var c = function() {
        if (o.nav.hasClass("vertical") && o.bp == "large") {
            l($(".nav-level-1 > li.active.has-child", o.nav))
        }
    };
    var n = function() {
        o.baseLevel = $("ul:first > li", o.nav).parentsUntil(o.nav).length;
        g();
        new CTX_Dynamic_Nav_Key_Controls(a)
    };
    if (o.nav.length > 0) {
        n()
    }
};
var CTX_Dynamic_Nav_Key_Controls = function(b) {
    $(document).on("keydown", b + " a:focus", function(d) {
        var c = $(this).parent();
        switch (d.keyCode) {
            case 13:
                if (c.hasClass("has-child")) {
                    d.preventDefault();
                    c.find("a:first").click();
                    if (c.hasClass("open")) {
                        c.find("ul:first li:first > a").focus()
                    }
                } else {
                    return true
                }
                break;
            case 37:
                d.preventDefault();
                if (c.hasClass("open")) {
                    c.find("a:first").click()
                }
                c.prevAll("li").not(".inactive").first().find("a:first").focus();
                break;
            case 38:
                d.preventDefault();
                a(c);
                break;
            case 39:
            case 9:
                d.preventDefault();
                if (d.shiftKey) {
                    a(c)
                } else {
                    if (c.hasClass("open")) {
                        c.find("a:first").click()
                    }
                    c.nextAll("li").not(".inactive").first().find("a:first").focus()
                }
                break;
            case 40:
                d.preventDefault();
                if (c.hasClass("has-child")) {
                    if (c.hasClass("open")) {
                        c.find("ul:first li:first > a").focus()
                    } else {
                        c.find("a:first").click();
                        c.find("ul:first li:first > a").focus()
                    }
                } else {
                    if (c.is(":last-child")) {
                        c.parents(".has-child").next().find("a:first").focus()
                    } else {
                        c.nextAll("li").not(".inactive").first().find("a:first").focus()
                    }
                }
                break
        }
        return false
    });
    var a = function(c) {
        if (c.hasClass("has-child") && c.hasClass("open")) {
            c.find("a:first").click()
        } else {
            (c.is(":first-child")) ? c.parents(".has-child").find("a:first").focus(): c.prevAll("li").not(".inactive").first().find("a:first").focus()
        }
    }
};
$(document).ready(function() {
    var a = new CTX_Dynamic_Nav(".ctx-dynamic-nav")
});
(function(d) {
    var b = d.event,
        a, c;
    a = b.special.debouncedresize = {
        setup: function() {
            d(this).on("resize", a.handler)
        },
        teardown: function() {
            d(this).off("resize", a.handler)
        },
        handler: function(j, f) {
            var i = this,
                h = arguments,
                g = function() {
                    j.type = "debouncedresize";
                    b.dispatch.apply(i, h)
                };
            if (c) {
                clearTimeout(c)
            }
            f ? g() : c = setTimeout(g, a.threshold)
        },
        threshold: 150
    }
})($CQ);
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
window.matchMedia = window.matchMedia || (function(f, g) {
    var c, a = f.documentElement,
        b = a.firstElementChild || a.firstChild,
        d = f.createElement("body"),
        h = f.createElement("div");
    h.id = "mq-test-1";
    h.style.cssText = "position:absolute;top:-100em";
    d.style.background = "none";
    d.appendChild(h);
    return function(i) {
        h.innerHTML = '&shy;<style media="' + i + '"> #mq-test-1 { width: 42px; }</style>';
        a.insertBefore(d, b);
        c = h.offsetWidth === 42;
        a.removeChild(d);
        return {
            matches: c,
            media: i
        }
    }
}(document));
(function(b, a) {
    a.picturefill = function(c) {
        var d;
        if (c === d) {
            c = b("body")
        }
        b("div[data-picture]", c).each(function() {
            var f = b("html").hasClass("lt-ie9");
            var h = this;
            var i = [];
            b("div[data-media]", h).each(function() {
                var k = b(this).attr("data-media");
                if (!k || (a.matchMedia && a.matchMedia(k).matches)) {
                    i.push(this)
                }
            });
            if (f) {
                var g = b("img", h).first();
                if (g.size() === 0) {
                    var j = b(h);
                    g = b("<img />").attr("alt", j.attr("data-alt")).attr("style", "max-width: " + j.attr("data-maxWidth") + ";max-height: " + j.attr("data-maxHeight")).attr("title", j.attr("data-title")).appendTo(j)
                }
                g.attr("src", b(".data-src-ie8", h).attr("data-src"))
            } else {
                var g = b("img", h).first();
                if (i.length) {
                    if (g.size() === 0) {
                        var j = b(h);
                        g = b("<img />").attr("alt", j.attr("data-alt")).attr("style", "max-width: " + j.attr("data-maxWidth") + ";max-height: " + j.attr("data-maxHeight")).attr("title", j.attr("data-title")).appendTo(j)
                    }
                    g.attr("src", i.pop().getAttribute("data-src"))
                } else {
                    g.remove()
                }
            }
        })
    };
    b(function() {
        a.picturefill()
    });
    b(a).on("debouncedresize", function() {
        a.picturefill()
    });
    b(document).on("target-dom-loaded", function(d, c) {
        b(document).trigger("debouncedresize")
    })
}($CQ, this));
jQuery(document).ready(function() {
    if (jQuery(".ctx-lightbox-zoom-icon-wrap").length > 0) {
        jQuery(".ctx-lightbox-zoom-icon-wrap").css("display", "block")
    }
});
var CTX_Tabs = function() {
    this.openTab = function(k, j) {
        var l = k.attr("data-tab");
        if (j == "v") {
            var m = k.parents(d.wrapper);
            $(d.tab, m).removeClass("open");
            $(d.tabContent, m).hide();
            k.addClass("open").trigger("open");
            m.find(d.tabContent + "[data-tab-content='" + l + "']").first().velocity("fadeIn", {
                duration: 600
            })
        } else {
            k.addClass("open").trigger("open");
            $(d.tabContent + ":first", k).velocity("slideDown", {
                duration: 400
            })
        }
    };
    this.closeTab = function(k, j) {
        if (j == "a") {
            k.removeClass("open").trigger("close");
            $(".open", k).removeClass("open");
            $(d.tabContent, k).velocity("slideUp", {
                duration: 400
            })
        }
    };
    var d = {
        tabLabel: ".ctx-tabs .tab-label",
        wrapper: ".ctx-tabs",
        tab: ".ctx-tab",
        expandAll: ".ctx-expand-all a",
        tabContent: ".tab-content",
        tabContainer: ".ctx-tab-container",
        hashLink: "a[href^='#tab-']",
        openTab: this.openTab,
        closeTab: this.closeTab
    };
    var h = {
        expandAll: "Expand all",
        collapseAll: "Collapse all"
    };
    var i = function() {
        $(document).on("click", d.tabLabel, function() {
            $("a", $(this)).focus();
            var j = $(this).parent().attr("data-tab");
            var k = $(this).parents(d.wrapper).find("[data-tab='" + j + "']");
            if (k.hasClass("open")) {
                d.closeTab(k, $(this).parent().attr("data-type"))
            } else {
                d.openTab(k, $(this).parent().attr("data-type"))
            }
        });
        $(document).on("click", d.expandAll, function() {
            var j = $(this).closest(d.wrapper);
            if (j.hasClass("open")) {
                $(d.tab, j).each(function() {
                    d.closeTab($(this), "a")
                });
                j.removeClass("open");
                $(this).text(h.expandAll)
            } else {
                $(d.tab, j).each(function() {
                    d.openTab($(this), "a")
                });
                j.addClass("open").find(d.wrapper).addClass("open");
                $(d.expandAll, j).text(h.collapseAll)
            }
        });
        g();
        $(window).on("debouncedresize", function() {
            g()
        });
        $(document).on("click", d.hashLink, function() {
            c($(this).attr("href"))
        });
        $(document).ready(function() {
            h.expandAll = Granite.I18n.get("Expand all");
            h.collapseAll = Granite.I18n.get("Collapse all");
            setTimeout(function() {
                c()
            }, 500)
        })
    };
    var g = function() {
        $(".verticaltabs, .horizontaltabs").each(function() {
            var l = $(".tab-content:visible", $(this)).length;
            if ($(d.tabContainer).is(":visible") && (l == 0 || l > 1)) {
                k($(this));
                j($(this))
            }
        });

        function k(l) {
            l.find(d.tabContent).first().hide();
            l.find(d.tab).first().removeClass("open")
        }

        function j(m) {
            var l = $(".ctx-tab-content:first .ctx-tab:first", m);
            m.find("[data-tab='" + l.attr("data-tab") + "']").first().addClass("open");
            l.find(d.tabContent).first().show()
        }
    };
    var a = function() {
        return (/^#tab-\d{4,5}$/.test(location.hash)) ? location.hash : ""
    };
    var c = function(l) {
        var l = (typeof l === "undefined") ? a() : l;
        if (l.indexOf("#tab-") >= 0) {
            var l = $("<div>" + l.replace("#tab-", "") + "</div>").text();
            var k = $("[data-tab='" + l + "']:first").parents(".ctx-tabs");
            var j = $("[data-tab='" + l + "']", k);
            d.openTab(j, j.attr("data-type"));
            b(l)
        }
    };
    var b = function(l) {
        var k = $(".ctx-tab-content [data-tab='" + l + "']");
        var m = k.closest(".ctx-tabs").hasClass("horizontaltabs");
        var j = ($(window).width() <= 800) ? "small" : "";
        if (m && j != "small") {
            k = $(".ctx-tab-container [data-tab='" + l + "']")
        }
        $("html, body").animate({
            scrollTop: CTX.utils.animate.getScrollOffset(k.offset().top)
        }, 1000)
    };
    var f = function() {
        i();
        new CTX_Tabs_Key_Controls(d.tab)
    };
    f()
};
var CTX_Tabs_Key_Controls = function(a) {
    $(document).on("keydown", a + " .tab-label a:focus", function(g) {
        var d = $(this).parent();
        switch (g.keyCode) {
            case 13:
                g.preventDefault();
                d.click();
                break;
            case 9:
                if (g.shiftKey) {
                    if (d.parent().prev().is(".ctx-vert-divider")) {
                        var f = d.parents(".ctx-tabs").find(".ctx-expand-all a");
                        if (f.length > 0) {
                            g.preventDefault();
                            f.focus()
                        } else {
                            return true
                        }
                    } else {
                        g.preventDefault();
                        var c = $(".tab-label a", d.parent().prev(".ctx-tab")).focus()
                    }
                } else {
                    var b = $(".tab-label a", d.parent().next(".ctx-tab"));
                    if (b.length > 0) {
                        g.preventDefault();
                        b.focus()
                    } else {
                        return true
                    }
                }
                break
        }
    })
};
var ctxTabs = new CTX_Tabs();
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports !== "undefined") {
            module.exports = a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(a) {
    var b = window.Slick || {};
    b = (function() {
        var c = 0;

        function d(h, i) {
            var g = this,
                f;
            g.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: a(h),
                appendDots: a(h),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(k, j) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (j + 1) + "</button>"
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnDotsHover: false,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: false,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };
            g.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };
            a.extend(g, g.initials);
            g.activeBreakpoint = null;
            g.animType = null;
            g.animProp = null;
            g.breakpoints = [];
            g.breakpointSettings = [];
            g.cssTransitions = false;
            g.hidden = "hidden";
            g.paused = false;
            g.positionProp = null;
            g.respondTo = null;
            g.rowCount = 1;
            g.shouldClick = true;
            g.$slider = a(h);
            g.$slidesCache = null;
            g.transformType = null;
            g.transitionType = null;
            g.visibilityChange = "visibilitychange";
            g.windowWidth = 0;
            g.windowTimer = null;
            f = a(h).data("slick") || {};
            g.options = a.extend({}, g.defaults, f, i);
            g.currentSlide = g.options.initialSlide;
            g.originalSettings = g.options;
            if (typeof document.mozHidden !== "undefined") {
                g.hidden = "mozHidden";
                g.visibilityChange = "mozvisibilitychange"
            } else {
                if (typeof document.webkitHidden !== "undefined") {
                    g.hidden = "webkitHidden";
                    g.visibilityChange = "webkitvisibilitychange"
                }
            }
            g.autoPlay = a.proxy(g.autoPlay, g);
            g.autoPlayClear = a.proxy(g.autoPlayClear, g);
            g.changeSlide = a.proxy(g.changeSlide, g);
            g.clickHandler = a.proxy(g.clickHandler, g);
            g.selectHandler = a.proxy(g.selectHandler, g);
            g.setPosition = a.proxy(g.setPosition, g);
            g.swipeHandler = a.proxy(g.swipeHandler, g);
            g.dragHandler = a.proxy(g.dragHandler, g);
            g.keyHandler = a.proxy(g.keyHandler, g);
            g.autoPlayIterator = a.proxy(g.autoPlayIterator, g);
            g.instanceUid = c++;
            g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            g.registerBreakpoints();
            g.init(true);
            g.checkResponsive(true)
        }
        return d
    }());
    b.prototype.addSlide = b.prototype.slickAdd = function(c, f, g) {
        var d = this;
        if (typeof(f) === "boolean") {
            g = f;
            f = null
        } else {
            if (f < 0 || (f >= d.slideCount)) {
                return false
            }
        }
        d.unload();
        if (typeof(f) === "number") {
            if (f === 0 && d.$slides.length === 0) {
                a(c).appendTo(d.$slideTrack)
            } else {
                if (g) {
                    a(c).insertBefore(d.$slides.eq(f))
                } else {
                    a(c).insertAfter(d.$slides.eq(f))
                }
            }
        } else {
            if (g === true) {
                a(c).prependTo(d.$slideTrack)
            } else {
                a(c).appendTo(d.$slideTrack)
            }
        }
        d.$slides = d.$slideTrack.children(this.options.slide);
        d.$slideTrack.children(this.options.slide).detach();
        d.$slideTrack.append(d.$slides);
        d.$slides.each(function(h, i) {
            a(i).attr("data-slick-index", h)
        });
        d.$slidesCache = d.$slides;
        d.reinit()
    };
    b.prototype.animateHeight = function() {
        var d = this;
        if (d.options.slidesToShow === 1 && d.options.adaptiveHeight === true && d.options.vertical === false) {
            var c = d.$slides.eq(d.currentSlide).outerHeight(true);
            d.$list.animate({
                height: c
            }, d.options.speed)
        }
    };
    b.prototype.animateSlide = function(g, f) {
        var d = {},
            c = this;
        c.animateHeight();
        if (c.options.rtl === true && c.options.vertical === false) {
            g = -g
        }
        if (c.transformsEnabled === false) {
            if (c.options.vertical === false) {
                c.$slideTrack.animate({
                    left: g
                }, c.options.speed, c.options.easing, f)
            } else {
                c.$slideTrack.animate({
                    top: g
                }, c.options.speed, c.options.easing, f)
            }
        } else {
            if (c.cssTransitions === false) {
                if (c.options.rtl === true) {
                    c.currentLeft = -(c.currentLeft)
                }
                a({
                    animStart: c.currentLeft
                }).animate({
                    animStart: g
                }, {
                    duration: c.options.speed,
                    easing: c.options.easing,
                    step: function(h) {
                        h = Math.ceil(h);
                        if (c.options.vertical === false) {
                            d[c.animType] = "translate(" + h + "px, 0px)";
                            c.$slideTrack.css(d)
                        } else {
                            d[c.animType] = "translate(0px," + h + "px)";
                            c.$slideTrack.css(d)
                        }
                    },
                    complete: function() {
                        if (f) {
                            f.call()
                        }
                    }
                })
            } else {
                c.applyTransition();
                g = Math.ceil(g);
                if (c.options.vertical === false) {
                    d[c.animType] = "translate3d(" + g + "px, 0px, 0px)"
                } else {
                    d[c.animType] = "translate3d(0px," + g + "px, 0px)"
                }
                c.$slideTrack.css(d);
                if (f) {
                    setTimeout(function() {
                        c.disableTransition();
                        f.call()
                    }, c.options.speed)
                }
            }
        }
    };
    b.prototype.asNavFor = function(f) {
        var d = this,
            c = d.options.asNavFor;
        if (c && c !== null) {
            c = a(c).not(d.$slider)
        }
        if (c !== null && typeof c === "object") {
            c.each(function() {
                var g = a(this).slick("getSlick");
                if (!g.unslicked) {
                    g.slideHandler(f, true)
                }
            })
        }
    };
    b.prototype.applyTransition = function(c) {
        var d = this,
            f = {};
        if (d.options.fade === false) {
            f[d.transitionType] = d.transformType + " " + d.options.speed + "ms " + d.options.cssEase
        } else {
            f[d.transitionType] = "opacity " + d.options.speed + "ms " + d.options.cssEase
        }
        if (d.options.fade === false) {
            d.$slideTrack.css(f)
        } else {
            d.$slides.eq(c).css(f)
        }
    };
    b.prototype.autoPlay = function() {
        var c = this;
        if (c.autoPlayTimer) {
            clearInterval(c.autoPlayTimer)
        }
        if (c.slideCount > c.options.slidesToShow && c.paused !== true) {
            c.autoPlayTimer = setInterval(c.autoPlayIterator, c.options.autoplaySpeed)
        }
    };
    b.prototype.autoPlayClear = function() {
        var c = this;
        if (c.autoPlayTimer) {
            clearInterval(c.autoPlayTimer)
        }
    };
    b.prototype.autoPlayIterator = function() {
        var c = this;
        if (c.options.infinite === false) {
            if (c.direction === 1) {
                if ((c.currentSlide + 1) === c.slideCount - 1) {
                    c.direction = 0
                }
                c.slideHandler(c.currentSlide + c.options.slidesToScroll)
            } else {
                if ((c.currentSlide - 1 === 0)) {
                    c.direction = 1
                }
                c.slideHandler(c.currentSlide - c.options.slidesToScroll)
            }
        } else {
            c.slideHandler(c.currentSlide + c.options.slidesToScroll)
        }
    };
    b.prototype.buildArrows = function() {
        var c = this;
        if (c.options.arrows === true) {
            c.$prevArrow = a(c.options.prevArrow).addClass("slick-arrow");
            c.$nextArrow = a(c.options.nextArrow).addClass("slick-arrow");
            if (c.slideCount > c.options.slidesToShow) {
                c.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                c.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                if (c.htmlExpr.test(c.options.prevArrow)) {
                    c.$prevArrow.prependTo(c.options.appendArrows)
                }
                if (c.htmlExpr.test(c.options.nextArrow)) {
                    c.$nextArrow.appendTo(c.options.appendArrows)
                }
                if (c.options.infinite !== true) {
                    c.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
                }
            } else {
                c.$prevArrow.add(c.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                })
            }
        }
    };
    b.prototype.buildDots = function() {
        var d = this,
            f, c;
        if (d.options.dots === true && d.slideCount > d.options.slidesToShow) {
            c = '<ul class="' + d.options.dotsClass + '">';
            for (f = 0; f <= d.getDotCount(); f += 1) {
                c += "<li>" + d.options.customPaging.call(this, d, f) + "</li>"
            }
            c += "</ul>";
            d.$dots = a(c).appendTo(d.options.appendDots);
            d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    b.prototype.buildOut = function() {
        var c = this;
        c.$slides = c.$slider.children(c.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
        c.slideCount = c.$slides.length;
        c.$slides.each(function(d, f) {
            a(f).attr("data-slick-index", d).data("originalStyling", a(f).attr("style") || "")
        });
        c.$slidesCache = c.$slides;
        c.$slider.addClass("slick-slider");
        c.$slideTrack = (c.slideCount === 0) ? a('<div class="slick-track"/>').appendTo(c.$slider) : c.$slides.wrapAll('<div class="slick-track"/>').parent();
        c.$list = c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        c.$slideTrack.css("opacity", 0);
        if (c.options.centerMode === true || c.options.swipeToSlide === true) {
            c.options.slidesToScroll = 1
        }
        a("img[data-lazy]", c.$slider).not("[src]").addClass("slick-loading");
        c.setupInfinite();
        c.buildArrows();
        c.buildDots();
        c.updateDots();
        c.setSlideClasses(typeof c.currentSlide === "number" ? c.currentSlide : 0);
        if (c.options.draggable === true) {
            c.$list.addClass("draggable")
        }
    };
    b.prototype.buildRows = function() {
        var n = this,
            m, l, j, d, k, i, f;
        d = document.createDocumentFragment();
        i = n.$slider.children();
        if (n.options.rows > 1) {
            f = n.options.slidesPerRow * n.options.rows;
            k = Math.ceil(i.length / f);
            for (m = 0; m < k; m++) {
                var g = document.createElement("div");
                for (l = 0; l < n.options.rows; l++) {
                    var o = document.createElement("div");
                    for (j = 0; j < n.options.slidesPerRow; j++) {
                        var h = (m * f + ((l * n.options.slidesPerRow) + j));
                        if (i.get(h)) {
                            o.appendChild(i.get(h))
                        }
                    }
                    g.appendChild(o)
                }
                d.appendChild(g)
            }
            n.$slider.html(d);
            n.$slider.children().children().children().css({
                width: (100 / n.options.slidesPerRow) + "%",
                display: "inline-block"
            })
        }
    };
    b.prototype.checkResponsive = function(i, k) {
        var l = this,
            j, c, f, g = false;
        var h = l.$slider.width();
        var d = window.innerWidth || a(window).width();
        if (l.respondTo === "window") {
            f = d
        } else {
            if (l.respondTo === "slider") {
                f = h
            } else {
                if (l.respondTo === "min") {
                    f = Math.min(d, h)
                }
            }
        }
        if (l.options.responsive && l.options.responsive.length && l.options.responsive !== null) {
            c = null;
            for (j in l.breakpoints) {
                if (l.breakpoints.hasOwnProperty(j)) {
                    if (l.originalSettings.mobileFirst === false) {
                        if (f < l.breakpoints[j]) {
                            c = l.breakpoints[j]
                        }
                    } else {
                        if (f > l.breakpoints[j]) {
                            c = l.breakpoints[j]
                        }
                    }
                }
            }
            if (c !== null) {
                if (l.activeBreakpoint !== null) {
                    if (c !== l.activeBreakpoint || k) {
                        l.activeBreakpoint = c;
                        if (l.breakpointSettings[c] === "unslick") {
                            l.unslick(c)
                        } else {
                            l.options = a.extend({}, l.originalSettings, l.breakpointSettings[c]);
                            if (i === true) {
                                l.currentSlide = l.options.initialSlide
                            }
                            l.refresh(i)
                        }
                        g = c
                    }
                } else {
                    l.activeBreakpoint = c;
                    if (l.breakpointSettings[c] === "unslick") {
                        l.unslick(c)
                    } else {
                        l.options = a.extend({}, l.originalSettings, l.breakpointSettings[c]);
                        if (i === true) {
                            l.currentSlide = l.options.initialSlide
                        }
                        l.refresh(i)
                    }
                    g = c
                }
            } else {
                if (l.activeBreakpoint !== null) {
                    l.activeBreakpoint = null;
                    l.options = l.originalSettings;
                    if (i === true) {
                        l.currentSlide = l.options.initialSlide
                    }
                    l.refresh(i);
                    g = c
                }
            }
            if (!i && g !== false) {
                l.$slider.trigger("breakpoint", [l, g])
            }
        }
    };
    b.prototype.changeSlide = function(h, k) {
        var f = this,
            c = a(h.target),
            j, g, i;
        if (c.is("a")) {
            h.preventDefault()
        }
        if (!c.is("li")) {
            c = c.closest("li")
        }
        i = (f.slideCount % f.options.slidesToScroll !== 0);
        j = i ? 0 : (f.slideCount - f.currentSlide) % f.options.slidesToScroll;
        switch (h.data.message) {
            case "previous":
                g = j === 0 ? f.options.slidesToScroll : f.options.slidesToShow - j;
                if (f.slideCount > f.options.slidesToShow) {
                    f.slideHandler(f.currentSlide - g, false, k)
                }
                break;
            case "next":
                g = j === 0 ? f.options.slidesToScroll : j;
                if (f.slideCount > f.options.slidesToShow) {
                    f.slideHandler(f.currentSlide + g, false, k)
                }
                break;
            case "index":
                var d = h.data.index === 0 ? 0 : h.data.index || c.index() * f.options.slidesToScroll;
                f.slideHandler(f.checkNavigable(d), false, k);
                c.children().trigger("focus");
                break;
            default:
                return
        }
    };
    b.prototype.checkNavigable = function(d) {
        var c = this,
            f, g;
        f = c.getNavigableIndexes();
        g = 0;
        if (d > f[f.length - 1]) {
            d = f[f.length - 1]
        } else {
            for (var h in f) {
                if (d < f[h]) {
                    d = g;
                    break
                }
                g = f[h]
            }
        }
        return d
    };
    b.prototype.cleanUpEvents = function() {
        var c = this;
        if (c.options.dots && c.$dots !== null) {
            a("li", c.$dots).off("click.slick", c.changeSlide);
            if (c.options.pauseOnDotsHover === true && c.options.autoplay === true) {
                a("li", c.$dots).off("mouseenter.slick", a.proxy(c.setPaused, c, true)).off("mouseleave.slick", a.proxy(c.setPaused, c, false))
            }
        }
        if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
            c.$prevArrow && c.$prevArrow.off("click.slick", c.changeSlide);
            c.$nextArrow && c.$nextArrow.off("click.slick", c.changeSlide)
        }
        c.$list.off("touchstart.slick mousedown.slick", c.swipeHandler);
        c.$list.off("touchmove.slick mousemove.slick", c.swipeHandler);
        c.$list.off("touchend.slick mouseup.slick", c.swipeHandler);
        c.$list.off("touchcancel.slick mouseleave.slick", c.swipeHandler);
        c.$list.off("click.slick", c.clickHandler);
        a(document).off(c.visibilityChange, c.visibility);
        c.$list.off("mouseenter.slick", a.proxy(c.setPaused, c, true));
        c.$list.off("mouseleave.slick", a.proxy(c.setPaused, c, false));
        if (c.options.accessibility === true) {
            c.$list.off("keydown.slick", c.keyHandler)
        }
        if (c.options.focusOnSelect === true) {
            a(c.$slideTrack).children().off("click.slick", c.selectHandler)
        }
        a(window).off("orientationchange.slick.slick-" + c.instanceUid, c.orientationChange);
        a(window).off("resize.slick.slick-" + c.instanceUid, c.resize);
        a("[draggable!=true]", c.$slideTrack).off("dragstart", c.preventDefault);
        a(window).off("load.slick.slick-" + c.instanceUid, c.setPosition);
        a(document).off("ready.slick.slick-" + c.instanceUid, c.setPosition)
    };
    b.prototype.cleanUpRows = function() {
        var d = this,
            c;
        if (d.options.rows > 1) {
            c = d.$slides.children().children();
            c.removeAttr("style");
            d.$slider.html(c)
        }
    };
    b.prototype.clickHandler = function(d) {
        var c = this;
        if (c.shouldClick === false) {
            d.stopImmediatePropagation();
            d.stopPropagation();
            d.preventDefault()
        }
    };
    b.prototype.destroy = function(d) {
        var c = this;
        c.autoPlayClear();
        c.touchObject = {};
        c.cleanUpEvents();
        a(".slick-cloned", c.$slider).detach();
        if (c.$dots) {
            c.$dots.remove()
        }
        if (c.options.arrows === true) {
            if (c.$prevArrow && c.$prevArrow.length) {
                c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                if (c.htmlExpr.test(c.options.prevArrow)) {
                    c.$prevArrow.remove()
                }
            }
            if (c.$nextArrow && c.$nextArrow.length) {
                c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                if (c.htmlExpr.test(c.options.nextArrow)) {
                    c.$nextArrow.remove()
                }
            }
        }
        if (c.$slides) {
            c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            });
            c.$slideTrack.children(this.options.slide).detach();
            c.$slideTrack.detach();
            c.$list.detach();
            c.$slider.append(c.$slides)
        }
        c.cleanUpRows();
        c.$slider.removeClass("slick-slider");
        c.$slider.removeClass("slick-initialized");
        c.unslicked = true;
        if (!d) {
            c.$slider.trigger("destroy", [c])
        }
    };
    b.prototype.disableTransition = function(c) {
        var d = this,
            f = {};
        f[d.transitionType] = "";
        if (d.options.fade === false) {
            d.$slideTrack.css(f)
        } else {
            d.$slides.eq(c).css(f)
        }
    };
    b.prototype.fadeSlide = function(d, f) {
        var c = this;
        if (c.cssTransitions === false) {
            c.$slides.eq(d).css({
                zIndex: c.options.zIndex
            });
            c.$slides.eq(d).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, f)
        } else {
            c.applyTransition(d);
            c.$slides.eq(d).css({
                opacity: 1,
                zIndex: c.options.zIndex
            });
            if (f) {
                setTimeout(function() {
                    c.disableTransition(d);
                    f.call()
                }, c.options.speed)
            }
        }
    };
    b.prototype.fadeSlideOut = function(d) {
        var c = this;
        if (c.cssTransitions === false) {
            c.$slides.eq(d).animate({
                opacity: 0,
                zIndex: c.options.zIndex - 2
            }, c.options.speed, c.options.easing)
        } else {
            c.applyTransition(d);
            c.$slides.eq(d).css({
                opacity: 0,
                zIndex: c.options.zIndex - 2
            })
        }
    };
    b.prototype.filterSlides = b.prototype.slickFilter = function(d) {
        var c = this;
        if (d !== null) {
            c.unload();
            c.$slideTrack.children(this.options.slide).detach();
            c.$slidesCache.filter(d).appendTo(c.$slideTrack);
            c.reinit()
        }
    };
    b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var c = this;
        return c.currentSlide
    };
    b.prototype.getDotCount = function() {
        var d = this;
        var g = 0;
        var c = 0;
        var f = 0;
        if (d.options.infinite === true) {
            while (g < d.slideCount) {
                ++f;
                g = c + d.options.slidesToShow;
                c += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow
            }
        } else {
            if (d.options.centerMode === true) {
                f = d.slideCount
            } else {
                while (g < d.slideCount) {
                    ++f;
                    g = c + d.options.slidesToShow;
                    c += d.options.slidesToScroll <= d.options.slidesToShow ? d.options.slidesToScroll : d.options.slidesToShow
                }
            }
        }
        return f - 1
    };
    b.prototype.getLeft = function(g) {
        var d = this,
            i, f, c = 0,
            h;
        d.slideOffset = 0;
        f = d.$slides.first().outerHeight(true);
        if (d.options.infinite === true) {
            if (d.slideCount > d.options.slidesToShow) {
                d.slideOffset = (d.slideWidth * d.options.slidesToShow) * -1;
                c = (f * d.options.slidesToShow) * -1
            }
            if (d.slideCount % d.options.slidesToScroll !== 0) {
                if (g + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow) {
                    if (g > d.slideCount) {
                        d.slideOffset = ((d.options.slidesToShow - (g - d.slideCount)) * d.slideWidth) * -1;
                        c = ((d.options.slidesToShow - (g - d.slideCount)) * f) * -1
                    } else {
                        d.slideOffset = ((d.slideCount % d.options.slidesToScroll) * d.slideWidth) * -1;
                        c = ((d.slideCount % d.options.slidesToScroll) * f) * -1
                    }
                }
            }
        } else {
            if (g + d.options.slidesToShow > d.slideCount) {
                d.slideOffset = ((g + d.options.slidesToShow) - d.slideCount) * d.slideWidth;
                c = ((g + d.options.slidesToShow) - d.slideCount) * f
            }
        }
        if (d.slideCount <= d.options.slidesToShow) {
            d.slideOffset = 0;
            c = 0
        }
        if (d.options.centerMode === true && d.options.infinite === true) {
            d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2) - d.slideWidth
        } else {
            if (d.options.centerMode === true) {
                d.slideOffset = 0;
                d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2)
            }
        }
        if (d.options.vertical === false) {
            i = ((g * d.slideWidth) * -1) + d.slideOffset
        } else {
            i = ((g * f) * -1) + c
        }
        if (d.options.variableWidth === true) {
            if (d.slideCount <= d.options.slidesToShow || d.options.infinite === false) {
                h = d.$slideTrack.children(".slick-slide").eq(g)
            } else {
                h = d.$slideTrack.children(".slick-slide").eq(g + d.options.slidesToShow)
            }
            i = h[0] ? h[0].offsetLeft * -1 : 0;
            if (d.options.centerMode === true) {
                if (d.options.infinite === false) {
                    h = d.$slideTrack.children(".slick-slide").eq(g)
                } else {
                    h = d.$slideTrack.children(".slick-slide").eq(g + d.options.slidesToShow + 1)
                }
                i = h[0] ? h[0].offsetLeft * -1 : 0;
                i += (d.$list.width() - h.outerWidth()) / 2
            }
        }
        return i
    };
    b.prototype.getOption = b.prototype.slickGetOption = function(d) {
        var c = this;
        return c.options[d]
    };
    b.prototype.getNavigableIndexes = function() {
        var g = this,
            h = 0,
            d = 0,
            f = [],
            c;
        if (g.options.infinite === false) {
            c = g.slideCount
        } else {
            h = g.options.slidesToScroll * -1;
            d = g.options.slidesToScroll * -1;
            c = g.slideCount * 2
        }
        while (h < c) {
            f.push(h);
            h = d + g.options.slidesToScroll;
            d += g.options.slidesToScroll <= g.options.slidesToShow ? g.options.slidesToScroll : g.options.slidesToShow
        }
        return f
    };
    b.prototype.getSlick = function() {
        return this
    };
    b.prototype.getSlideCount = function() {
        var f = this,
            d, g, c;
        c = f.options.centerMode === true ? f.slideWidth * Math.floor(f.options.slidesToShow / 2) : 0;
        if (f.options.swipeToSlide === true) {
            f.$slideTrack.find(".slick-slide").each(function(i, h) {
                if (h.offsetLeft - c + (a(h).outerWidth() / 2) > (f.swipeLeft * -1)) {
                    g = h;
                    return false
                }
            });
            d = Math.abs(a(g).attr("data-slick-index") - f.currentSlide) || 1;
            return d
        } else {
            return f.options.slidesToScroll
        }
    };
    b.prototype.goTo = b.prototype.slickGoTo = function(c, f) {
        var d = this;
        d.changeSlide({
            data: {
                message: "index",
                index: parseInt(c)
            }
        }, f)
    };
    b.prototype.init = function(c) {
        var d = this;
        if (!a(d.$slider).hasClass("slick-initialized")) {
            a(d.$slider).addClass("slick-initialized");
            d.buildRows();
            d.buildOut();
            d.setProps();
            d.startLoad();
            d.loadSlider();
            d.initializeEvents();
            d.updateArrows();
            d.updateDots()
        }
        if (c) {
            d.$slider.trigger("init", [d])
        }
        if (d.options.accessibility === true) {
            d.initADA()
        }
    };
    b.prototype.initArrowEvents = function() {
        var c = this;
        if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
            c.$prevArrow.on("click.slick", {
                message: "previous"
            }, c.changeSlide);
            c.$nextArrow.on("click.slick", {
                message: "next"
            }, c.changeSlide)
        }
    };
    b.prototype.initDotEvents = function() {
        var c = this;
        if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
            a("li", c.$dots).on("click.slick", {
                message: "index"
            }, c.changeSlide)
        }
        if (c.options.dots === true && c.options.pauseOnDotsHover === true && c.options.autoplay === true) {
            a("li", c.$dots).on("mouseenter.slick", a.proxy(c.setPaused, c, true)).on("mouseleave.slick", a.proxy(c.setPaused, c, false))
        }
    };
    b.prototype.initializeEvents = function() {
        var c = this;
        c.initArrowEvents();
        c.initDotEvents();
        c.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, c.swipeHandler);
        c.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, c.swipeHandler);
        c.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, c.swipeHandler);
        c.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, c.swipeHandler);
        c.$list.on("click.slick", c.clickHandler);
        a(document).on(c.visibilityChange, a.proxy(c.visibility, c));
        c.$list.on("mouseenter.slick", a.proxy(c.setPaused, c, true));
        c.$list.on("mouseleave.slick", a.proxy(c.setPaused, c, false));
        if (c.options.accessibility === true) {
            c.$list.on("keydown.slick", c.keyHandler)
        }
        if (c.options.focusOnSelect === true) {
            a(c.$slideTrack).children().on("click.slick", c.selectHandler)
        }
        a(window).on("orientationchange.slick.slick-" + c.instanceUid, a.proxy(c.orientationChange, c));
        a(window).on("resize.slick.slick-" + c.instanceUid, a.proxy(c.resize, c));
        a("[draggable!=true]", c.$slideTrack).on("dragstart", c.preventDefault);
        a(window).on("load.slick.slick-" + c.instanceUid, c.setPosition);
        a(document).on("ready.slick.slick-" + c.instanceUid, c.setPosition)
    };
    b.prototype.initUI = function() {
        var c = this;
        if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
            c.$prevArrow.show();
            c.$nextArrow.show()
        }
        if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
            c.$dots.show()
        }
        if (c.options.autoplay === true) {
            c.autoPlay()
        }
    };
    b.prototype.keyHandler = function(d) {
        var c = this;
        if (!d.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
            if (d.keyCode === 37 && c.options.accessibility === true) {
                c.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            } else {
                if (d.keyCode === 39 && c.options.accessibility === true) {
                    c.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }
            }
        }
    };
    b.prototype.lazyLoad = function() {
        var f = this,
            c, i, h, g;

        function d(j) {
            a("img[data-lazy]", j).each(function() {
                var l = a(this),
                    m = a(this).attr("data-lazy"),
                    k = document.createElement("img");
                k.onload = function() {
                    l.animate({
                        opacity: 0
                    }, 100, function() {
                        l.attr("src", m).animate({
                            opacity: 1
                        }, 200, function() {
                            l.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                };
                k.src = m
            })
        }
        if (f.options.centerMode === true) {
            if (f.options.infinite === true) {
                h = f.currentSlide + (f.options.slidesToShow / 2 + 1);
                g = h + f.options.slidesToShow + 2
            } else {
                h = Math.max(0, f.currentSlide - (f.options.slidesToShow / 2 + 1));
                g = 2 + (f.options.slidesToShow / 2 + 1) + f.currentSlide
            }
        } else {
            h = f.options.infinite ? f.options.slidesToShow + f.currentSlide : f.currentSlide;
            g = h + f.options.slidesToShow;
            if (f.options.fade === true) {
                if (h > 0) {
                    h--
                }
                if (g <= f.slideCount) {
                    g++
                }
            }
        }
        c = f.$slider.find(".slick-slide").slice(h, g);
        d(c);
        if (f.slideCount <= f.options.slidesToShow) {
            i = f.$slider.find(".slick-slide");
            d(i)
        } else {
            if (f.currentSlide >= f.slideCount - f.options.slidesToShow) {
                i = f.$slider.find(".slick-cloned").slice(0, f.options.slidesToShow);
                d(i)
            } else {
                if (f.currentSlide === 0) {
                    i = f.$slider.find(".slick-cloned").slice(f.options.slidesToShow * -1);
                    d(i)
                }
            }
        }
    };
    b.prototype.loadSlider = function() {
        var c = this;
        c.setPosition();
        c.$slideTrack.css({
            opacity: 1
        });
        c.$slider.removeClass("slick-loading");
        c.initUI();
        if (c.options.lazyLoad === "progressive") {
            c.progressiveLazyLoad()
        }
    };
    b.prototype.next = b.prototype.slickNext = function() {
        var c = this;
        c.changeSlide({
            data: {
                message: "next"
            }
        })
    };
    b.prototype.orientationChange = function() {
        var c = this;
        c.checkResponsive();
        c.setPosition()
    };
    b.prototype.pause = b.prototype.slickPause = function() {
        var c = this;
        c.autoPlayClear();
        c.paused = true
    };
    b.prototype.play = b.prototype.slickPlay = function() {
        var c = this;
        c.paused = false;
        c.autoPlay()
    };
    b.prototype.postSlide = function(d) {
        var c = this;
        c.$slider.trigger("afterChange", [c, d]);
        c.animating = false;
        c.setPosition();
        c.swipeLeft = null;
        if (c.options.autoplay === true && c.paused === false) {
            c.autoPlay()
        }
        if (c.options.accessibility === true) {
            c.initADA()
        }
    };
    b.prototype.prev = b.prototype.slickPrev = function() {
        var c = this;
        c.changeSlide({
            data: {
                message: "previous"
            }
        })
    };
    b.prototype.preventDefault = function(c) {
        c.preventDefault()
    };
    b.prototype.progressiveLazyLoad = function() {
        var d = this,
            c, f;
        c = a("img[data-lazy]", d.$slider).length;
        if (c > 0) {
            f = a("img[data-lazy]", d.$slider).first();
            f.attr("src", f.attr("data-lazy")).removeClass("slick-loading").load(function() {
                f.removeAttr("data-lazy");
                d.progressiveLazyLoad();
                if (d.options.adaptiveHeight === true) {
                    d.setPosition()
                }
            }).error(function() {
                f.removeAttr("data-lazy");
                d.progressiveLazyLoad()
            })
        }
    };
    b.prototype.refresh = function(c) {
        var d = this,
            f = d.currentSlide;
        d.destroy(true);
        a.extend(d, d.initials, {
            currentSlide: f
        });
        d.init();
        if (!c) {
            d.changeSlide({
                data: {
                    message: "index",
                    index: f
                }
            }, false)
        }
    };
    b.prototype.registerBreakpoints = function() {
        var f = this,
            d, g, c, h = f.options.responsive || null;
        if (a.type(h) === "array" && h.length) {
            f.respondTo = f.options.respondTo || "window";
            for (d in h) {
                c = f.breakpoints.length - 1;
                g = h[d].breakpoint;
                if (h.hasOwnProperty(d)) {
                    while (c >= 0) {
                        if (f.breakpoints[c] && f.breakpoints[c] === g) {
                            f.breakpoints.splice(c, 1)
                        }
                        c--
                    }
                    f.breakpoints.push(g);
                    f.breakpointSettings[g] = h[d].settings
                }
            }
            f.breakpoints.sort(function(j, i) {
                return (f.options.mobileFirst) ? j - i : i - j
            })
        }
    };
    b.prototype.reinit = function() {
        var c = this;
        c.$slides = c.$slideTrack.children(c.options.slide).addClass("slick-slide");
        c.slideCount = c.$slides.length;
        if (c.currentSlide >= c.slideCount && c.currentSlide !== 0) {
            c.currentSlide = c.currentSlide - c.options.slidesToScroll
        }
        if (c.slideCount <= c.options.slidesToShow) {
            c.currentSlide = 0
        }
        c.registerBreakpoints();
        c.setProps();
        c.setupInfinite();
        c.buildArrows();
        c.updateArrows();
        c.initArrowEvents();
        c.buildDots();
        c.updateDots();
        c.initDotEvents();
        c.checkResponsive(false, true);
        if (c.options.focusOnSelect === true) {
            a(c.$slideTrack).children().on("click.slick", c.selectHandler)
        }
        c.setSlideClasses(0);
        c.setPosition();
        c.$slider.trigger("reInit", [c]);
        if (c.options.autoplay === true) {
            c.focusHandler()
        }
    };
    b.prototype.resize = function() {
        var c = this;
        if (a(window).width() !== c.windowWidth) {
            clearTimeout(c.windowDelay);
            c.windowDelay = window.setTimeout(function() {
                c.windowWidth = a(window).width();
                c.checkResponsive();
                if (!c.unslicked) {
                    c.setPosition()
                }
            }, 50)
        }
    };
    b.prototype.removeSlide = b.prototype.slickRemove = function(d, g, f) {
        var c = this;
        if (typeof(d) === "boolean") {
            g = d;
            d = g === true ? 0 : c.slideCount - 1
        } else {
            d = g === true ? --d : d
        }
        if (c.slideCount < 1 || d < 0 || d > c.slideCount - 1) {
            return false
        }
        c.unload();
        if (f === true) {
            c.$slideTrack.children().remove()
        } else {
            c.$slideTrack.children(this.options.slide).eq(d).remove()
        }
        c.$slides = c.$slideTrack.children(this.options.slide);
        c.$slideTrack.children(this.options.slide).detach();
        c.$slideTrack.append(c.$slides);
        c.$slidesCache = c.$slides;
        c.reinit()
    };
    b.prototype.setCSS = function(d) {
        var f = this,
            g = {},
            c, h;
        if (f.options.rtl === true) {
            d = -d
        }
        c = f.positionProp == "left" ? Math.ceil(d) + "px" : "0px";
        h = f.positionProp == "top" ? Math.ceil(d) + "px" : "0px";
        g[f.positionProp] = d;
        if (f.transformsEnabled === false) {
            f.$slideTrack.css(g)
        } else {
            g = {};
            if (f.cssTransitions === false) {
                g[f.animType] = "translate(" + c + ", " + h + ")";
                f.$slideTrack.css(g)
            } else {
                g[f.animType] = "translate3d(" + c + ", " + h + ", 0px)";
                f.$slideTrack.css(g)
            }
        }
    };
    b.prototype.setDimensions = function() {
        var c = this;
        if (c.options.vertical === false) {
            if (c.options.centerMode === true) {
                c.$list.css({
                    padding: ("0px " + c.options.centerPadding)
                })
            }
        } else {
            c.$list.height(c.$slides.first().outerHeight(true) * c.options.slidesToShow);
            if (c.options.centerMode === true) {
                c.$list.css({
                    padding: (c.options.centerPadding + " 0px")
                })
            }
        }
        c.listWidth = c.$list.width();
        c.listHeight = c.$list.height();
        if (c.options.vertical === false && c.options.variableWidth === false) {
            c.slideWidth = Math.ceil(c.listWidth / c.options.slidesToShow);
            c.$slideTrack.width(Math.ceil((c.slideWidth * c.$slideTrack.children(".slick-slide").length)))
        } else {
            if (c.options.variableWidth === true) {
                c.$slideTrack.width(5000 * c.slideCount)
            } else {
                c.slideWidth = Math.ceil(c.listWidth);
                c.$slideTrack.height(Math.ceil((c.$slides.first().outerHeight(true) * c.$slideTrack.children(".slick-slide").length)))
            }
        }
        var d = c.$slides.first().outerWidth(true) - c.$slides.first().width();
        if (c.options.variableWidth === false) {
            c.$slideTrack.children(".slick-slide").width(c.slideWidth - d)
        }
    };
    b.prototype.setFade = function() {
        var c = this,
            d;
        c.$slides.each(function(f, g) {
            d = (c.slideWidth * f) * -1;
            if (c.options.rtl === true) {
                a(g).css({
                    position: "relative",
                    right: d,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            } else {
                a(g).css({
                    position: "relative",
                    left: d,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }
        });
        c.$slides.eq(c.currentSlide).css({
            zIndex: c.options.zIndex - 1,
            opacity: 1
        })
    };
    b.prototype.setHeight = function() {
        var d = this;
        if (d.options.slidesToShow === 1 && d.options.adaptiveHeight === true && d.options.vertical === false) {
            var c = d.$slides.eq(d.currentSlide).outerHeight(true);
            d.$list.css("height", c)
        }
    };
    b.prototype.setOption = b.prototype.slickSetOption = function(g, i, f) {
        var d = this,
            c, h;
        if (g === "responsive" && a.type(i) === "array") {
            for (h in i) {
                if (a.type(d.options.responsive) !== "array") {
                    d.options.responsive = [i[h]]
                } else {
                    c = d.options.responsive.length - 1;
                    while (c >= 0) {
                        if (d.options.responsive[c].breakpoint === i[h].breakpoint) {
                            d.options.responsive.splice(c, 1)
                        }
                        c--
                    }
                    d.options.responsive.push(i[h])
                }
            }
        } else {
            d.options[g] = i
        }
        if (f === true) {
            d.unload();
            d.reinit()
        }
    };
    b.prototype.setPosition = function() {
        var c = this;
        c.setDimensions();
        c.setHeight();
        if (c.options.fade === false) {
            c.setCSS(c.getLeft(c.currentSlide))
        } else {
            c.setFade()
        }
        c.$slider.trigger("setPosition", [c])
    };
    b.prototype.setProps = function() {
        var d = this,
            c = document.body.style;
        d.positionProp = d.options.vertical === true ? "top" : "left";
        if (d.positionProp === "top") {
            d.$slider.addClass("slick-vertical")
        } else {
            d.$slider.removeClass("slick-vertical")
        }
        if (c.WebkitTransition !== undefined || c.MozTransition !== undefined || c.msTransition !== undefined) {
            if (d.options.useCSS === true) {
                d.cssTransitions = true
            }
        }
        if (d.options.fade) {
            if (typeof d.options.zIndex === "number") {
                if (d.options.zIndex < 3) {
                    d.options.zIndex = 3
                }
            } else {
                d.options.zIndex = d.defaults.zIndex
            }
        }
        if (c.OTransform !== undefined) {
            d.animType = "OTransform";
            d.transformType = "-o-transform";
            d.transitionType = "OTransition";
            if (c.perspectiveProperty === undefined && c.webkitPerspective === undefined) {
                d.animType = false
            }
        }
        if (c.MozTransform !== undefined) {
            d.animType = "MozTransform";
            d.transformType = "-moz-transform";
            d.transitionType = "MozTransition";
            if (c.perspectiveProperty === undefined && c.MozPerspective === undefined) {
                d.animType = false
            }
        }
        if (c.webkitTransform !== undefined) {
            d.animType = "webkitTransform";
            d.transformType = "-webkit-transform";
            d.transitionType = "webkitTransition";
            if (c.perspectiveProperty === undefined && c.webkitPerspective === undefined) {
                d.animType = false
            }
        }
        if (c.msTransform !== undefined) {
            d.animType = "msTransform";
            d.transformType = "-ms-transform";
            d.transitionType = "msTransition";
            if (c.msTransform === undefined) {
                d.animType = false
            }
        }
        if (c.transform !== undefined && d.animType !== false) {
            d.animType = "transform";
            d.transformType = "transform";
            d.transitionType = "transition"
        }
        d.transformsEnabled = (d.animType !== null && d.animType !== false)
    };
    b.prototype.setSlideClasses = function(g) {
        var f = this,
            c, d, i, h;
        d = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        f.$slides.eq(g).addClass("slick-current");
        if (f.options.centerMode === true) {
            c = Math.floor(f.options.slidesToShow / 2);
            if (f.options.infinite === true) {
                if (g >= c && g <= (f.slideCount - 1) - c) {
                    f.$slides.slice(g - c, g + c + 1).addClass("slick-active").attr("aria-hidden", "false")
                } else {
                    i = f.options.slidesToShow + g;
                    d.slice(i - c + 1, i + c + 2).addClass("slick-active").attr("aria-hidden", "false")
                }
                if (g === 0) {
                    d.eq(d.length - 1 - f.options.slidesToShow).addClass("slick-center")
                } else {
                    if (g === f.slideCount - 1) {
                        d.eq(f.options.slidesToShow).addClass("slick-center")
                    }
                }
            }
            f.$slides.eq(g).addClass("slick-center")
        } else {
            if (g >= 0 && g <= (f.slideCount - f.options.slidesToShow)) {
                f.$slides.slice(g, g + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
            } else {
                if (d.length <= f.options.slidesToShow) {
                    d.addClass("slick-active").attr("aria-hidden", "false")
                } else {
                    h = f.slideCount % f.options.slidesToShow;
                    i = f.options.infinite === true ? f.options.slidesToShow + g : g;
                    if (f.options.slidesToShow == f.options.slidesToScroll && (f.slideCount - g) < f.options.slidesToShow) {
                        d.slice(i - (f.options.slidesToShow - h), i + h).addClass("slick-active").attr("aria-hidden", "false")
                    } else {
                        d.slice(i, i + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
                    }
                }
            }
        }
        if (f.options.lazyLoad === "ondemand") {
            f.lazyLoad()
        }
    };
    b.prototype.setupInfinite = function() {
        var c = this,
            d, g, f;
        if (c.options.fade === true) {
            c.options.centerMode = false
        }
        if (c.options.infinite === true && c.options.fade === false) {
            g = null;
            if (c.slideCount > c.options.slidesToShow) {
                if (c.options.centerMode === true) {
                    f = c.options.slidesToShow + 1
                } else {
                    f = c.options.slidesToShow
                }
                for (d = c.slideCount; d > (c.slideCount - f); d -= 1) {
                    g = d - 1;
                    a(c.$slides[g]).clone(true).attr("id", "").attr("data-slick-index", g - c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
                }
                for (d = 0; d < f; d += 1) {
                    g = d;
                    a(c.$slides[g]).clone(true).attr("id", "").attr("data-slick-index", g + c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
                }
                c.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }
    };
    b.prototype.setPaused = function(d) {
        var c = this;
        if (c.options.autoplay === true && c.options.pauseOnHover === true) {
            c.paused = d;
            if (!d) {
                c.autoPlay()
            } else {
                c.autoPlayClear()
            }
        }
    };
    b.prototype.selectHandler = function(g) {
        var f = this;
        var d = a(g.target).is(".slick-slide") ? a(g.target) : a(g.target).parents(".slick-slide");
        var c = parseInt(d.attr("data-slick-index"));
        if (!c) {
            c = 0
        }
        if (f.slideCount <= f.options.slidesToShow) {
            f.setSlideClasses(c);
            f.asNavFor(c);
            return
        }
        f.slideHandler(c)
    };
    b.prototype.slideHandler = function(f, i, d) {
        var c, l, h, j, g = null,
            k = this;
        i = i || false;
        if (k.animating === true && k.options.waitForAnimate === true) {
            return
        }
        if (k.options.fade === true && k.currentSlide === f) {
            return
        }
        if (k.slideCount <= k.options.slidesToShow) {
            return
        }
        if (i === false) {
            k.asNavFor(f)
        }
        c = f;
        g = k.getLeft(c);
        j = k.getLeft(k.currentSlide);
        k.currentLeft = k.swipeLeft === null ? j : k.swipeLeft;
        if (k.options.infinite === false && k.options.centerMode === false && (f < 0 || f > k.getDotCount() * k.options.slidesToScroll)) {
            if (k.options.fade === false) {
                c = k.currentSlide;
                if (d !== true) {
                    k.animateSlide(j, function() {
                        k.postSlide(c)
                    })
                } else {
                    k.postSlide(c)
                }
            }
            return
        } else {
            if (k.options.infinite === false && k.options.centerMode === true && (f < 0 || f > (k.slideCount - k.options.slidesToScroll))) {
                if (k.options.fade === false) {
                    c = k.currentSlide;
                    if (d !== true) {
                        k.animateSlide(j, function() {
                            k.postSlide(c)
                        })
                    } else {
                        k.postSlide(c)
                    }
                }
                return
            }
        }
        if (k.options.autoplay === true) {
            clearInterval(k.autoPlayTimer)
        }
        if (c < 0) {
            if (k.slideCount % k.options.slidesToScroll !== 0) {
                l = k.slideCount - (k.slideCount % k.options.slidesToScroll)
            } else {
                l = k.slideCount + c
            }
        } else {
            if (c >= k.slideCount) {
                if (k.slideCount % k.options.slidesToScroll !== 0) {
                    l = 0
                } else {
                    l = c - k.slideCount
                }
            } else {
                l = c
            }
        }
        k.animating = true;
        k.$slider.trigger("beforeChange", [k, k.currentSlide, l]);
        h = k.currentSlide;
        k.currentSlide = l;
        k.setSlideClasses(k.currentSlide);
        k.updateDots();
        k.updateArrows();
        if (k.options.fade === true) {
            if (d !== true) {
                k.fadeSlideOut(h);
                k.fadeSlide(l, function() {
                    k.postSlide(l)
                })
            } else {
                k.postSlide(l)
            }
            k.animateHeight();
            return
        }
        if (d !== true) {
            k.animateSlide(g, function() {
                k.postSlide(l)
            })
        } else {
            k.postSlide(l)
        }
    };
    b.prototype.startLoad = function() {
        var c = this;
        if (c.options.arrows === true && c.slideCount > c.options.slidesToShow) {
            c.$prevArrow.hide();
            c.$nextArrow.hide()
        }
        if (c.options.dots === true && c.slideCount > c.options.slidesToShow) {
            c.$dots.hide()
        }
        c.$slider.addClass("slick-loading")
    };
    b.prototype.swipeDirection = function() {
        var c, g, f, h, d = this;
        c = d.touchObject.startX - d.touchObject.curX;
        g = d.touchObject.startY - d.touchObject.curY;
        f = Math.atan2(g, c);
        h = Math.round(f * 180 / Math.PI);
        if (h < 0) {
            h = 360 - Math.abs(h)
        }
        if ((h <= 45) && (h >= 0)) {
            return (d.options.rtl === false ? "left" : "right")
        }
        if ((h <= 360) && (h >= 315)) {
            return (d.options.rtl === false ? "left" : "right")
        }
        if ((h >= 135) && (h <= 225)) {
            return (d.options.rtl === false ? "right" : "left")
        }
        if (d.options.verticalSwiping === true) {
            if ((h >= 35) && (h <= 135)) {
                return "left"
            } else {
                return "right"
            }
        }
        return "vertical"
    };
    b.prototype.swipeEnd = function(f) {
        var d = this,
            c;
        d.dragging = false;
        d.shouldClick = (d.touchObject.swipeLength > 10) ? false : true;
        if (d.touchObject.curX === undefined) {
            return false
        }
        if (d.touchObject.edgeHit === true) {
            d.$slider.trigger("edge", [d, d.swipeDirection()])
        }
        if (d.touchObject.swipeLength >= d.touchObject.minSwipe) {
            switch (d.swipeDirection()) {
                case "left":
                    c = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount();
                    d.slideHandler(c);
                    d.currentDirection = 0;
                    d.touchObject = {};
                    d.$slider.trigger("swipe", [d, "left"]);
                    break;
                case "right":
                    c = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount();
                    d.slideHandler(c);
                    d.currentDirection = 1;
                    d.touchObject = {};
                    d.$slider.trigger("swipe", [d, "right"]);
                    break
            }
        } else {
            if (d.touchObject.startX !== d.touchObject.curX) {
                d.slideHandler(d.currentSlide);
                d.touchObject = {}
            }
        }
    };
    b.prototype.swipeHandler = function(d) {
        var c = this;
        if ((c.options.swipe === false) || ("ontouchend" in document && c.options.swipe === false)) {
            return
        } else {
            if (c.options.draggable === false && d.type.indexOf("mouse") !== -1) {
                return
            }
        }
        c.touchObject.fingerCount = d.originalEvent && d.originalEvent.touches !== undefined ? d.originalEvent.touches.length : 1;
        c.touchObject.minSwipe = c.listWidth / c.options.touchThreshold;
        if (c.options.verticalSwiping === true) {
            c.touchObject.minSwipe = c.listHeight / c.options.touchThreshold
        }
        switch (d.data.action) {
            case "start":
                c.swipeStart(d);
                break;
            case "move":
                c.swipeMove(d);
                break;
            case "end":
                c.swipeEnd(d);
                break
        }
    };
    b.prototype.swipeMove = function(g) {
        var f = this,
            k = false,
            i, d, h, c, j;
        j = g.originalEvent !== undefined ? g.originalEvent.touches : null;
        if (!f.dragging || j && j.length !== 1) {
            return false
        }
        i = f.getLeft(f.currentSlide);
        f.touchObject.curX = j !== undefined ? j[0].pageX : g.clientX;
        f.touchObject.curY = j !== undefined ? j[0].pageY : g.clientY;
        f.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(f.touchObject.curX - f.touchObject.startX, 2)));
        if (f.options.verticalSwiping === true) {
            f.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(f.touchObject.curY - f.touchObject.startY, 2)))
        }
        d = f.swipeDirection();
        if (d === "vertical") {
            return
        }
        if (g.originalEvent !== undefined && f.touchObject.swipeLength > 4) {
            g.preventDefault()
        }
        c = (f.options.rtl === false ? 1 : -1) * (f.touchObject.curX > f.touchObject.startX ? 1 : -1);
        if (f.options.verticalSwiping === true) {
            c = f.touchObject.curY > f.touchObject.startY ? 1 : -1
        }
        h = f.touchObject.swipeLength;
        f.touchObject.edgeHit = false;
        if (f.options.infinite === false) {
            if ((f.currentSlide === 0 && d === "right") || (f.currentSlide >= f.getDotCount() && d === "left")) {
                h = f.touchObject.swipeLength * f.options.edgeFriction;
                f.touchObject.edgeHit = true
            }
        }
        if (f.options.vertical === false) {
            f.swipeLeft = i + h * c
        } else {
            f.swipeLeft = i + (h * (f.$list.height() / f.listWidth)) * c
        }
        if (f.options.verticalSwiping === true) {
            f.swipeLeft = i + h * c
        }
        if (f.options.fade === true || f.options.touchMove === false) {
            return false
        }
        if (f.animating === true) {
            f.swipeLeft = null;
            return false
        }
        f.setCSS(f.swipeLeft)
    };
    b.prototype.swipeStart = function(d) {
        var c = this,
            f;
        if (c.touchObject.fingerCount !== 1 || c.slideCount <= c.options.slidesToShow) {
            c.touchObject = {};
            return false
        }
        if (d.originalEvent !== undefined && d.originalEvent.touches !== undefined) {
            f = d.originalEvent.touches[0]
        }
        c.touchObject.startX = c.touchObject.curX = f !== undefined ? f.pageX : d.clientX;
        c.touchObject.startY = c.touchObject.curY = f !== undefined ? f.pageY : d.clientY;
        c.dragging = true
    };
    b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var c = this;
        if (c.$slidesCache !== null) {
            c.unload();
            c.$slideTrack.children(this.options.slide).detach();
            c.$slidesCache.appendTo(c.$slideTrack);
            c.reinit()
        }
    };
    b.prototype.unload = function() {
        var c = this;
        a(".slick-cloned", c.$slider).remove();
        if (c.$dots) {
            c.$dots.remove()
        }
        if (c.$prevArrow && c.htmlExpr.test(c.options.prevArrow)) {
            c.$prevArrow.remove()
        }
        if (c.$nextArrow && c.htmlExpr.test(c.options.nextArrow)) {
            c.$nextArrow.remove()
        }
        c.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    };
    b.prototype.unslick = function(d) {
        var c = this;
        c.$slider.trigger("unslick", [c, d]);
        c.destroy()
    };
    b.prototype.updateArrows = function() {
        var d = this,
            c;
        c = Math.floor(d.options.slidesToShow / 2);
        if (d.options.arrows === true && d.slideCount > d.options.slidesToShow && !d.options.infinite) {
            d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
            if (d.currentSlide === 0) {
                d.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                d.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
            } else {
                if (d.currentSlide >= d.slideCount - d.options.slidesToShow && d.options.centerMode === false) {
                    d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                    d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                } else {
                    if (d.currentSlide >= d.slideCount - 1 && d.options.centerMode === true) {
                        d.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        d.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    }
                }
            }
        }
    };
    b.prototype.updateDots = function() {
        var c = this;
        if (c.$dots !== null) {
            c.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true");
            c.$dots.find("li").eq(Math.floor(c.currentSlide / c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")
        }
    };
    b.prototype.visibility = function() {
        var c = this;
        if (document[c.hidden]) {
            c.paused = true;
            c.autoPlayClear()
        } else {
            if (c.options.autoplay === true) {
                c.paused = false;
                c.autoPlay()
            }
        }
    };
    b.prototype.initADA = function() {
        var c = this;
        c.$slides.add(c.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        });
        c.$slideTrack.attr("role", "listbox");
        c.$slides.not(c.$slideTrack.find(".slick-cloned")).each(function(d) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + c.instanceUid + d + ""
            })
        });
        if (c.$dots !== null) {
            c.$dots.attr("role", "tablist").find("li").each(function(d) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + c.instanceUid + d + "",
                    id: "slick-slide" + c.instanceUid + d + ""
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar")
        }
        c.activateADA()
    };
    b.prototype.activateADA = function() {
        var c = this,
            d = c.$slider.find("*").is(":focus");
        c.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false",
            tabindex: "0"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
        (d) && c.$slideTrack.find(".slick-active").focus()
    };
    b.prototype.focusHandler = function() {
        var c = this;
        c.$slider.on("focus.slick blur.slick", "*", function(f) {
            f.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                if (c.isPlay) {
                    if (d.is(":focus")) {
                        c.autoPlayClear();
                        c.paused = true
                    } else {
                        c.paused = false;
                        c.autoPlay()
                    }
                }
            }, 0)
        })
    };
    a.fn.slick = function() {
        var g = this,
            j = arguments[0],
            f = Array.prototype.slice.call(arguments, 1),
            c = g.length,
            h = 0,
            d;
        for (h; h < c; h++) {
            if (typeof j == "object" || typeof j == "undefined") {
                g[h].slick = new b(g[h], j)
            } else {
                d = g[h].slick[j].apply(g[h].slick, f)
            }
            if (typeof d != "undefined") {
                return d
            }
        }
        return g
    }
}));
jQuery(document).ready(function() {
    var c = (/^#cs.{12}$/.test(location.hash)) ? location.hash : "",
        d = c.match(/cs\.(.*)\.(.*)/),
        g, b = [],
        h = [];
    var a = function() {
        h = d[1];
        b = d[2];
        if (!!h.length && !!b.length) {
            g = $("#" + h + " .slide-" + b + ".slick-slide").data("slick-index");
            $("#" + h).slick("slickGoTo", g, true);
            $("html, body").animate({
                scrollTop: CTX.utils.animate.getScrollOffset(($("#" + h).offset().top) - 1)
            }, 1000)
        }
    };
    var f = function() {
        jQuery.expr[":"].parents = function(k, l, j) {
            return jQuery(k).parents(j[3]).length < 1
        };
        $(".ctx-carousel").filter(":parents(.ctx-content-lightbox)").slick({
            adaptiveHeight: true,
            slidesToShow: 1,
            customPaging: function(k, j) {
                return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0"><span class="mdot"></span>1</button>'
            }
        });
        if (Array.isArray(d)) {
            setTimeout(function() {
                a()
            }, 500)
        }
    };
    if (jQuery("head").data("wcmmode") === "DISABLED") {
        f();
        $(document).on("target-dom-loaded", function() {
            setTimeout(function() {
                f()
            }, 100)
        })
    }
    $(document).on("ctx:lightbox-opened", function(i, j) {
        $(".ctx-lightbox-content .ctx-carousel").slick({
            adaptiveHeight: true,
            slidesToShow: 1,
            customPaging: function(l, k) {
                return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0"><span class="mdot"></span>1</button>'
            }
        })
    })
});
"use strict";
var player;
var isPlaying = false;
var playlistItem = jQuery(".ctx-video-playlist-yt a");
var currentActiveItem = playlistItem.first();
var firstId = playlistItem.attr("yt-player-id");
window.onYouTubeIframeAPIReady = function() {
    return createYTPlayer(firstId)
};
var ytApiLoadedInterval = setInterval(tryLoadingYtApi, 200);

function tryLoadingYtApi() {
    if (typeof YT === "object" && typeof YT.Player === "function" && !player) {
        clearInterval(ytApiLoadedInterval);
        window.onYouTubeIframeAPIReady()
    }
}
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function changeYTPlayer(b, d) {
    var c = jQuery(this);
    var a = c.attr("yt-player-id");
    playlistItem.removeClass("active");
    c.hasClass("active") ? c.removeClass("active") : c.addClass("active");
    if (!d) {
        b.stopImmediatePropagation()
    }
    if (currentActiveItem[0] === c[0]) {
        if (isPlaying) {
            player.pauseVideo()
        } else {
            player.playVideo()
        }
    } else {
        currentActiveItem.removeClass("playing");
        currentActiveItem = c;
        player.loadVideoById(a)
    }
    return false
}

function onPlayerReady(a) {
    var b = new CTX_Video_Playlists()
}

function onPlayerStateChange(a) {
    if (a.data == YT.PlayerState.PLAYING && !isPlaying) {
        isPlaying = true;
        currentActiveItem.addClass("playing")
    } else {
        isPlaying = false;
        currentActiveItem.removeClass("playing")
    }
}

function createYTPlayer(a) {
    a = a || "";
    player = new YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: a,
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}
playlistItem.on("click", changeYTPlayer);
var CTX_Video_Playlists = function() {
    var c = {
        hashLink: "a[href^='#video-']"
    };
    var h = function() {
        $(document).on("click", c.hashLink, function() {
            f($(this).attr("href"))
        })
    };
    var a = function() {
        return (/^#video-.{11}$/.test(location.hash)) ? location.hash : ""
    };
    var f = function(j) {
        var j = (typeof j === "undefined") ? a() : j;
        if (j.indexOf("#video-") >= 0) {
            var j = j.replace("#video-", "");
            var i = $("[yt-player-id='" + j + "']:first");
            if (i.length > 0) {
                b(i, i.parents(".ctx-video-playlist-container"))
            }
        }
    };
    var b = function(j, i) {
        $("html, body").animate({
            scrollTop: CTX.utils.animate.getScrollOffset(i.offset().top)
        }, 1000, function() {
            d(j)
        })
    };
    var d = function(i) {
        i.click();
        player.stopVideo()
    };
    var g = function() {
        h();
        $(document).ready(function() {
            setTimeout(function() {
                f()
            }, 500)
        })
    };
    g()
};

function handleLightbox(b, c, a) {
    b(document).ready(function() {
        if (b(".lightbox-content .ctx-video-playlist-container").length <= 0) {
            return
        }
        b(document).on("ctx:lightbox-opened", function(i) {
            a.playlistItem = b(".ctx-lightbox-content .ctx-video-playlist-yt a");
            var f = i.target.activeElement.hash;
            var h = a.playlistItem.attr("yt-player-id");
            var g = c.utils.randomString();
            var d = g + "b";
            b(f + " .ctx-video-playlist-container iframe").attr("id", g);
            b(".ctx-lightbox-content .ctx-video-playlist-container iframe").attr("id", d);
            a.playlistItem.on("click", changeYTPlayer);
            a.player = new YT.Player(d, {
                height: "100%",
                width: "100%",
                videoId: h,
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        })
    })
}
handleLightbox(jQuery, window.CTX, window);
$.fn.imgLoad = function(a) {
    return this.each(function() {
        if (a) {
            if (this.complete || (this.readyState === 4) || (this.readyState === "complete")) {
                a.apply(this)
            } else {
                $(this).one("load.imgCallback", function() {
                    a.apply(this)
                })
            }
        }
    })
};

function CardLayout(o, b) {
    this.filter = "*";
    var k = $(o);
    var h = k.data("cardheight");
    var j = k.data("cardwidth");
    var n = k.data("gutter");
    var a = k.data("fitwidth");
    var g = "default";
    var i = function() {
        return ($(window).width() <= 500)
    };
    var f = function() {
        var p = $(window).width();
        return (p > 500 && p < 960)
    };
    var c = function(q, p) {
        if (q) {
            k.isotope("destroy")
        }
        k.isotope({
            itemSelector: ".ctx-card",
            isInitLayout: q,
            filter: this.filter,
            getSortData: b,
            masonry: {
                columnWidth: j,
                isFitWidth: p,
                gutter: n
            }
        });
        if (q) {
            setTimeout(function() {
                k.isotope("layout")
            }, 500)
        }
    };
    var d = function() {
        $(window).on("debouncedresize", function() {
            var q = i();
            var p = f();
            if (q && g != "mobile") {
                $(".ctx-card", k).height("auto");
                $(".ctx-card .metadata", k).css("visibility", "visible");
                $(".ctx-card .truncate-wrapper", k).trigger("destroy");
                g = "mobile";
                c(true, true)
            } else {
                if (p && g != "tablet") {
                    if (g == "mobile") {
                        $(".ctx-card", k).height(h);
                        $(".ctx-card .truncate-wrapper", k).each(m)
                    }
                    c(true, true);
                    g = "tablet"
                } else {
                    if ((!q && !p) && g != "default") {
                        if (g == "mobile") {
                            $(".ctx-card", k).height(h);
                            $(".ctx-card .truncate-wrapper", k).each(m)
                        }
                        c(true, a);
                        g = "default"
                    }
                }
            }
        })
    };
    var m = function() {
        var q = h - $(this).position().top;
        if (q > 0) {
            q -= 25;
            var p = $(this).next();
            if (p.hasClass("metadata")) {
                q -= 22
            }
            $(this).dotdotdot({
                height: q
            });
            if ($(this).html().trim() == "...") {
                $(this).html("")
            }
        }
    };
    var l = function() {
        var t = i();
        var s = f();
        if (t) {
            c(false, true);
            g = "mobile"
        } else {
            $(".ctx-card", k).height(h);
            var q = a;
            if (s) {
                q = true;
                g = "tablet"
            }
            c(false, q)
        }
        var p = $(".ctx-card img", k).length;
        var r = 0;
        $(".ctx-card img", k).imgLoad(function() {
            r++;
            if (!t) {
                var v = $(this).closest(".ctx-card");
                v.find(".truncate-wrapper").each(m);
                var u = $(".metadata", v);
                if (u.length > 0 && u.position().top >= 283) {
                    u.css("visibility", "hidden")
                }
            }
            if (r == p) {
                k.isotope("layout")
            }
        });
        k.one("layoutComplete", function(v, u) {
            k.css("visibility", "visible");
            $(".ctx-card", k).css("overflow", "hidden")
        });
        if (!t) {
            $(".ctx-card .truncate-wrapper", k).each(m)
        }
        k.isotope();
        d()
    };
    l()
}
CardLayout.prototype.setFilter = function(a) {
    this.filter = a
};
$(document).ready(function() {
    $(".ctx-card-layout.active").each(function() {
        new CardLayout(this, {})
    })
});
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function(c) {
    var d = Array.prototype.slice;

    function b() {}

    function a(g) {
        if (!g) {
            return
        }

        function i(j) {
            if (j.prototype.option) {
                return
            }
            j.prototype.option = function(k) {
                if (!g.isPlainObject(k)) {
                    return
                }
                this.options = g.extend(true, this.options, k)
            }
        }
        var f = typeof console === "undefined" ? b : function(j) {
            console.error(j)
        };

        function h(j, k) {
            g.fn[j] = function(o) {
                if (typeof o === "string") {
                    var n = d.call(arguments, 1);
                    for (var p = 0, m = this.length; p < m; p++) {
                        var r = this[p];
                        var l = g.data(r, j);
                        if (!l) {
                            f("cannot call methods on " + j + " prior to initialization; attempted to call '" + o + "'");
                            continue
                        }
                        if (!g.isFunction(l[o]) || o.charAt(0) === "_") {
                            f("no such method '" + o + "' for " + j + " instance");
                            continue
                        }
                        var q = l[o].apply(l, n);
                        if (q !== undefined) {
                            return q
                        }
                    }
                    return this
                } else {
                    return this.each(function() {
                        var s = g.data(this, j);
                        if (s) {
                            s.option(o);
                            s._init()
                        } else {
                            s = new k(this, o);
                            g.data(this, j, s)
                        }
                    })
                }
            }
        }
        g.bridget = function(j, k) {
            i(k);
            h(j, k)
        };
        return g.bridget
    }
    if (typeof define === "function" && define.amd) {
        define("jquery-bridget/jquery.bridget", ["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(c.jQuery)
        }
    }
})(window);
/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */
(function(f) {
    var b = document.documentElement;
    var g = function() {};

    function a(i) {
        var h = f.event;
        h.target = h.target || h.srcElement || i;
        return h
    }
    if (b.addEventListener) {
        g = function(j, i, h) {
            j.addEventListener(i, h, false)
        }
    } else {
        if (b.attachEvent) {
            g = function(j, i, h) {
                j[i + h] = h.handleEvent ? function() {
                    var k = a(j);
                    h.handleEvent.call(h, k)
                } : function() {
                    var k = a(j);
                    h.call(j, k)
                };
                j.attachEvent("on" + i, j[i + h])
            }
        }
    }
    var d = function() {};
    if (b.removeEventListener) {
        d = function(j, i, h) {
            j.removeEventListener(i, h, false)
        }
    } else {
        if (b.detachEvent) {
            d = function(k, i, h) {
                k.detachEvent("on" + i, k[i + h]);
                try {
                    delete k[i + h]
                } catch (j) {
                    k[i + h] = undefined
                }
            }
        }
    }
    var c = {
        bind: g,
        unbind: d
    };
    if (typeof define === "function" && define.amd) {
        define("eventie/eventie", c)
    } else {
        if (typeof exports === "object") {
            module.exports = c
        } else {
            f.eventie = c
        }
    }
})(window);
/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */
;
(function() {
    function c() {}
    var m = c.prototype;
    var w = this;
    var y = w.EventEmitter;

    function i(A, B) {
        var z = A.length;
        while (z--) {
            if (A[z].listener === B) {
                return z
            }
        }
        return -1
    }

    function k(z) {
        return function A() {
            return this[z].apply(this, arguments)
        }
    }
    m.getListeners = function u(z) {
        var C = this._getEvents();
        var A;
        var B;
        if (z instanceof RegExp) {
            A = {};
            for (B in C) {
                if (C.hasOwnProperty(B) && z.test(B)) {
                    A[B] = C[B]
                }
            }
        } else {
            A = C[z] || (C[z] = [])
        }
        return A
    };
    m.flattenListeners = function s(B) {
        var z = [];
        var A;
        for (A = 0; A < B.length; A += 1) {
            z.push(B[A].listener)
        }
        return z
    };
    m.getListenersAsObject = function f(z) {
        var B = this.getListeners(z);
        var A;
        if (B instanceof Array) {
            A = {};
            A[z] = B
        }
        return A || B
    };
    m.addListener = function g(z, C) {
        var B = this.getListenersAsObject(z);
        var D = typeof C === "object";
        var A;
        for (A in B) {
            if (B.hasOwnProperty(A) && i(B[A], C) === -1) {
                B[A].push(D ? C : {
                    listener: C,
                    once: false
                })
            }
        }
        return this
    };
    m.on = k("addListener");
    m.addOnceListener = function a(z, A) {
        return this.addListener(z, {
            listener: A,
            once: true
        })
    };
    m.once = k("addOnceListener");
    m.defineEvent = function q(z) {
        this.getListeners(z);
        return this
    };
    m.defineEvents = function r(z) {
        for (var A = 0; A < z.length; A += 1) {
            this.defineEvent(z[A])
        }
        return this
    };
    m.removeListener = function b(z, D) {
        var C = this.getListenersAsObject(z);
        var A;
        var B;
        for (B in C) {
            if (C.hasOwnProperty(B)) {
                A = i(C[B], D);
                if (A !== -1) {
                    C[B].splice(A, 1)
                }
            }
        }
        return this
    };
    m.off = k("removeListener");
    m.addListeners = function n(z, A) {
        return this.manipulateListeners(false, z, A)
    };
    m.removeListeners = function t(z, A) {
        return this.manipulateListeners(true, z, A)
    };
    m.manipulateListeners = function h(A, B, D) {
        var C;
        var E;
        var F = A ? this.removeListener : this.addListener;
        var z = A ? this.removeListeners : this.addListeners;
        if (typeof B === "object" && !(B instanceof RegExp)) {
            for (C in B) {
                if (B.hasOwnProperty(C) && (E = B[C])) {
                    if (typeof E === "function") {
                        F.call(this, C, E)
                    } else {
                        z.call(this, C, E)
                    }
                }
            }
        } else {
            C = D.length;
            while (C--) {
                F.call(this, B, D[C])
            }
        }
        return this
    };
    m.removeEvent = function p(z) {
        var C = typeof z;
        var B = this._getEvents();
        var A;
        if (C === "string") {
            delete B[z]
        } else {
            if (z instanceof RegExp) {
                for (A in B) {
                    if (B.hasOwnProperty(A) && z.test(A)) {
                        delete B[A]
                    }
                }
            } else {
                delete this._events
            }
        }
        return this
    };
    m.removeAllListeners = k("removeEvent");
    m.emitEvent = function v(z, B) {
        var E = this.getListenersAsObject(z);
        var F;
        var D;
        var C;
        var A;
        for (C in E) {
            if (E.hasOwnProperty(C)) {
                D = E[C].length;
                while (D--) {
                    F = E[C][D];
                    if (F.once === true) {
                        this.removeListener(z, F.listener)
                    }
                    A = F.listener.apply(this, B || []);
                    if (A === this._getOnceReturnValue()) {
                        this.removeListener(z, F.listener)
                    }
                }
            }
        }
        return this
    };
    m.trigger = k("emitEvent");
    m.emit = function l(z) {
        var A = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(z, A)
    };
    m.setOnceReturnValue = function j(z) {
        this._onceReturnValue = z;
        return this
    };
    m._getOnceReturnValue = function o() {
        if (this.hasOwnProperty("_onceReturnValue")) {
            return this._onceReturnValue
        } else {
            return true
        }
    };
    m._getEvents = function d() {
        return this._events || (this._events = {})
    };
    c.noConflict = function x() {
        w.EventEmitter = y;
        return c
    };
    if (typeof define === "function" && define.amd) {
        define("eventEmitter/EventEmitter", [], function() {
            return c
        })
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = c
        } else {
            w.EventEmitter = c
        }
    }
}.call(this));
/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */
(function(c) {
    var d = "Webkit Moz ms Ms O".split(" ");
    var b = document.documentElement.style;

    function a(j) {
        if (!j) {
            return
        }
        if (typeof b[j] === "string") {
            return j
        }
        j = j.charAt(0).toUpperCase() + j.slice(1);
        var g;
        for (var h = 0, f = d.length; h < f; h++) {
            g = d[h] + j;
            if (typeof b[g] === "string") {
                return g
            }
        }
    }
    if (typeof define === "function" && define.amd) {
        define("get-style-property/get-style-property", [], function() {
            return a
        })
    } else {
        if (typeof exports === "object") {
            module.exports = a
        } else {
            c.getStyleProperty = a
        }
    }
})(window);
/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */
(function(f, h) {
    function b(k) {
        var j = parseFloat(k);
        var l = k.indexOf("%") === -1 && !isNaN(j);
        return l && j
    }

    function d() {}
    var c = typeof console === "undefined" ? d : function(j) {
        console.error(j)
    };
    var a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];

    function g() {
        var l = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var k = 0, j = a.length; k < j; k++) {
            var m = a[k];
            l[m] = 0
        }
        return l
    }

    function i(p) {
        var n = false;
        var l, m, o;

        function k() {
            if (n) {
                return
            }
            n = true;
            var t = f.getComputedStyle;
            l = (function() {
                var w = t ? function(x) {
                    return t(x, null)
                } : function(x) {
                    return x.currentStyle
                };
                return function v(y) {
                    var x = w(y);
                    if (!x) {
                        c("Style returned " + x + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1")
                    }
                    return x
                }
            })();
            m = p("boxSizing");
            if (m) {
                var u = document.createElement("div");
                u.style.width = "200px";
                u.style.padding = "1px 2px 3px 4px";
                u.style.borderStyle = "solid";
                u.style.borderWidth = "1px 2px 3px 4px";
                u.style[m] = "border-box";
                var r = document.body || document.documentElement;
                r.appendChild(u);
                var s = l(u);
                o = b(s.width) === 200;
                r.removeChild(u)
            }
        }

        function q(G) {
            k();
            if (typeof G === "string") {
                G = document.querySelector(G)
            }
            if (!G || typeof G !== "object" || !G.nodeType) {
                return
            }
            var E = l(G);
            if (E.display === "none") {
                return g()
            }
            var x = {};
            x.width = G.offsetWidth;
            x.height = G.offsetHeight;
            var F = x.isBorderBox = !!(m && E[m] && E[m] === "border-box");
            for (var B = 0, C = a.length; B < C; B++) {
                var z = a[B];
                var A = E[z];
                A = j(G, A);
                var r = parseFloat(A);
                x[z] = !isNaN(r) ? r : 0
            }
            var D = x.paddingLeft + x.paddingRight;
            var w = x.paddingTop + x.paddingBottom;
            var I = x.marginLeft + x.marginRight;
            var u = x.marginTop + x.marginBottom;
            var H = x.borderLeftWidth + x.borderRightWidth;
            var t = x.borderTopWidth + x.borderBottomWidth;
            var s = F && o;
            var v = b(E.width);
            if (v !== false) {
                x.width = v + (s ? 0 : D + H)
            }
            var y = b(E.height);
            if (y !== false) {
                x.height = y + (s ? 0 : w + t)
            }
            x.innerWidth = x.width - (D + H);
            x.innerHeight = x.height - (w + t);
            x.outerWidth = x.width + I;
            x.outerHeight = x.height + u;
            return x
        }

        function j(u, v) {
            if (f.getComputedStyle || v.indexOf("%") === -1) {
                return v
            }
            var t = u.style;
            var w = t.left;
            var s = u.runtimeStyle;
            var r = s && s.left;
            if (r) {
                s.left = u.currentStyle.left
            }
            t.left = v;
            v = t.pixelLeft;
            t.left = w;
            if (r) {
                s.left = r
            }
            return v
        }
        return q
    }
    if (typeof define === "function" && define.amd) {
        define("get-size/get-size", ["get-style-property/get-style-property"], i)
    } else {
        if (typeof exports === "object") {
            module.exports = i(require("desandro-get-style-property"))
        } else {
            f.getSize = i(f.getStyleProperty)
        }
    }
})(window);
/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */
(function(f) {
    var b = f.document;
    var a = [];

    function d(i) {
        if (typeof i !== "function") {
            return
        }
        if (d.isReady) {
            i()
        } else {
            a.push(i)
        }
    }
    d.isReady = false;

    function h(j) {
        var i = j.type === "readystatechange" && b.readyState !== "complete";
        if (d.isReady || i) {
            return
        }
        c()
    }

    function c() {
        d.isReady = true;
        for (var k = 0, j = a.length; k < j; k++) {
            var l = a[k];
            l()
        }
    }

    function g(i) {
        if (b.readyState === "complete") {
            c()
        } else {
            i.bind(b, "DOMContentLoaded", h);
            i.bind(b, "readystatechange", h);
            i.bind(f, "load", h)
        }
        return d
    }
    if (typeof define === "function" && define.amd) {
        define("doc-ready/doc-ready", ["eventie/eventie"], g)
    } else {
        if (typeof exports === "object") {
            module.exports = g(require("eventie"))
        } else {
            f.docReady = g(f.eventie)
        }
    }
})(window);
(function(i) {
    var g = (function() {
        if (i.matches) {
            return "matches"
        }
        if (i.matchesSelector) {
            return "matchesSelector"
        }
        var n = ["webkit", "moz", "ms", "o"];
        for (var l = 0, k = n.length; l < k; l++) {
            var m = n[l];
            var o = m + "MatchesSelector";
            if (i[o]) {
                return o
            }
        }
    })();

    function d(l, k) {
        return l[g](k)
    }

    function h(l) {
        if (l.parentNode) {
            return
        }
        var k = document.createDocumentFragment();
        k.appendChild(l)
    }

    function f(o, l) {
        h(o);
        var m = o.parentNode.querySelectorAll(l);
        for (var n = 0, k = m.length; n < k; n++) {
            if (m[n] === o) {
                return true
            }
        }
        return false
    }

    function c(l, k) {
        h(l);
        return d(l, k)
    }
    var j;
    if (g) {
        var a = document.createElement("div");
        var b = d(a, "div");
        j = b ? d : c
    } else {
        j = f
    }
    if (typeof define === "function" && define.amd) {
        define("matches-selector/matches-selector", [], function() {
            return j
        })
    } else {
        if (typeof exports === "object") {
            module.exports = j
        } else {
            window.matchesSelector = j
        }
    }
})(Element.prototype);
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(d, c) {
            return a(b, d, c)
        })
    } else {
        if (typeof exports == "object") {
            module.exports = a(b, require("doc-ready"), require("desandro-matches-selector"))
        } else {
            b.fizzyUIUtils = a(b, b.docReady, b.matchesSelector)
        }
    }
}(window, function factory(g, f, d) {
    var b = {};
    b.extend = function(k, j) {
        for (var l in j) {
            k[l] = j[l]
        }
        return k
    };
    b.modulo = function(j, k) {
        return ((j % k) + k) % k
    };
    var a = Object.prototype.toString;
    b.isArray = function(j) {
        return a.call(j) == "[object Array]"
    };
    b.makeArray = function(m) {
        var l = [];
        if (b.isArray(m)) {
            l = m
        } else {
            if (m && typeof m.length == "number") {
                for (var k = 0, j = m.length; k < j; k++) {
                    l.push(m[k])
                }
            } else {
                l.push(m)
            }
        }
        return l
    };
    b.indexOf = Array.prototype.indexOf ? function(j, k) {
        return j.indexOf(k)
    } : function(l, m) {
        for (var k = 0, j = l.length; k < j; k++) {
            if (l[k] === m) {
                return k
            }
        }
        return -1
    };
    b.removeFrom = function(k, l) {
        var j = b.indexOf(k, l);
        if (j != -1) {
            k.splice(j, 1)
        }
    };
    b.isElement = (typeof HTMLElement == "function" || typeof HTMLElement == "object") ? function i(j) {
        return j instanceof HTMLElement
    } : function h(j) {
        return j && typeof j == "object" && j.nodeType == 1 && typeof j.nodeName == "string"
    };
    b.setText = (function() {
        var k;

        function j(l, m) {
            k = k || (document.documentElement.textContent !== undefined ? "textContent" : "innerText");
            l[k] = m
        }
        return j
    })();
    b.getParent = function(k, j) {
        while (k != document.body) {
            k = k.parentNode;
            if (d(k, j)) {
                return k
            }
        }
    };
    b.getQueryElement = function(j) {
        if (typeof j == "string") {
            return document.querySelector(j)
        }
        return j
    };
    b.handleEvent = function(j) {
        var k = "on" + j.type;
        if (this[k]) {
            this[k](j)
        }
    };
    b.filterFindElements = function(k, m) {
        k = b.makeArray(k);
        var p = [];
        for (var o = 0, q = k.length; o < q; o++) {
            var l = k[o];
            if (!b.isElement(l)) {
                continue
            }
            if (m) {
                if (d(l, m)) {
                    p.push(l)
                }
                var r = l.querySelectorAll(m);
                for (var n = 0, s = r.length; n < s; n++) {
                    p.push(r[n])
                }
            } else {
                p.push(l)
            }
        }
        return p
    };
    b.debounceMethod = function(m, l, j) {
        var n = m.prototype[l];
        var k = l + "Timeout";
        m.prototype[l] = function() {
            var p = this[k];
            if (p) {
                clearTimeout(p)
            }
            var o = arguments;
            var q = this;
            this[k] = setTimeout(function() {
                n.apply(q, o);
                delete q[k]
            }, j || 100)
        }
    };
    b.toDashed = function(j) {
        return j.replace(/(.)([A-Z])/g, function(l, k, m) {
            return k + "-" + m
        }).toLowerCase()
    };
    var c = g.console;
    b.htmlInit = function(j, k) {
        f(function() {
            var r = b.toDashed(k);
            var l = document.querySelectorAll(".js-" + r);
            var s = "data-" + r + "-options";
            for (var n = 0, o = l.length; n < o; n++) {
                var m = l[n];
                var p = m.getAttribute(s);
                var v;
                try {
                    v = p && JSON.parse(p)
                } catch (q) {
                    if (c) {
                        c.error("Error parsing " + s + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + q)
                    }
                    continue
                }
                var t = new j(m, v);
                var u = g.jQuery;
                if (u) {
                    u.data(m, k, t)
                }
            }
        })
    };
    return b
}));
(function(b, a) {
    if (typeof define === "function" && define.amd) {
        define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(f, g, d, c) {
            return a(b, f, g, d, c)
        })
    } else {
        if (typeof exports === "object") {
            module.exports = a(b, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils"))
        } else {
            b.Outlayer = {};
            b.Outlayer.Item = a(b, b.EventEmitter, b.getSize, b.getStyleProperty, b.fizzyUIUtils)
        }
    }
}(window, function factory(k, j, d, l, t) {
    var r = k.getComputedStyle;
    var h = r ? function(v) {
        return r(v, null)
    } : function(v) {
        return v.currentStyle
    };

    function i(v) {
        for (var w in v) {
            return false
        }
        w = null;
        return true
    }
    var s = l("transition");
    var o = l("transform");
    var q = s && o;
    var m = !!l("perspective");
    var a = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[s];
    var f = ["transform", "transition", "transitionDuration", "transitionProperty"];
    var p = (function() {
        var w = {};
        for (var x = 0, v = f.length; x < v; x++) {
            var z = f[x];
            var y = l(z);
            if (y && y !== z) {
                w[z] = y
            }
        }
        return w
    })();

    function c(v, w) {
        if (!v) {
            return
        }
        this.element = v;
        this.layout = w;
        this.position = {
            x: 0,
            y: 0
        };
        this._create()
    }
    t.extend(c.prototype, j.prototype);
    c.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        })
    };
    c.prototype.handleEvent = function(v) {
        var w = "on" + v.type;
        if (this[w]) {
            this[w](v)
        }
    };
    c.prototype.getSize = function() {
        this.size = d(this.element)
    };
    c.prototype.css = function(x) {
        var v = this.element.style;
        for (var y in x) {
            var w = p[y] || y;
            v[w] = x[y]
        }
    };
    c.prototype.getPosition = function() {
        var v = h(this.element);
        var F = this.layout.options;
        var D = F.isOriginLeft;
        var E = F.isOriginTop;
        var z = v[D ? "left" : "right"];
        var A = v[E ? "top" : "bottom"];
        var w = this.layout.size;
        var C = z.indexOf("%") != -1 ? (parseFloat(z) / 100) * w.width : parseInt(z, 10);
        var B = A.indexOf("%") != -1 ? (parseFloat(A) / 100) * w.height : parseInt(A, 10);
        C = isNaN(C) ? 0 : C;
        B = isNaN(B) ? 0 : B;
        C -= D ? w.paddingLeft : w.paddingRight;
        B -= E ? w.paddingTop : w.paddingBottom;
        this.position.x = C;
        this.position.y = B
    };
    c.prototype.layoutPosition = function() {
        var z = this.layout.size;
        var H = this.layout.options;
        var w = {};
        var F = H.isOriginLeft ? "paddingLeft" : "paddingRight";
        var A = H.isOriginLeft ? "left" : "right";
        var B = H.isOriginLeft ? "right" : "left";
        var E = this.position.x + z[F];
        w[A] = this.getXValue(E);
        w[B] = "";
        var C = H.isOriginTop ? "paddingTop" : "paddingBottom";
        var G = H.isOriginTop ? "top" : "bottom";
        var v = H.isOriginTop ? "bottom" : "top";
        var D = this.position.y + z[C];
        w[G] = this.getYValue(D);
        w[v] = "";
        this.css(w);
        this.emitEvent("layout", [this])
    };
    c.prototype.getXValue = function(w) {
        var v = this.layout.options;
        return v.percentPosition && !v.isHorizontal ? ((w / this.layout.size.width) * 100) + "%" : w + "px"
    };
    c.prototype.getYValue = function(w) {
        var v = this.layout.options;
        return v.percentPosition && v.isHorizontal ? ((w / this.layout.size.height) * 100) + "%" : w + "px"
    };
    c.prototype._transitionTo = function(G, F) {
        this.getPosition();
        var w = this.position.x;
        var v = this.position.y;
        var E = parseInt(G, 10);
        var D = parseInt(F, 10);
        var C = E === this.position.x && D === this.position.y;
        this.setPosition(G, F);
        if (C && !this.isTransitioning) {
            this.layoutPosition();
            return
        }
        var B = G - w;
        var A = F - v;
        var z = {};
        z.transform = this.getTranslate(B, A);
        this.transition({
            to: z,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        })
    };
    c.prototype.getTranslate = function(w, z) {
        var v = this.layout.options;
        w = v.isOriginLeft ? w : -w;
        z = v.isOriginTop ? z : -z;
        if (m) {
            return "translate3d(" + w + "px, " + z + "px, 0)"
        }
        return "translate(" + w + "px, " + z + "px)"
    };
    c.prototype.goTo = function(v, w) {
        this.setPosition(v, w);
        this.layoutPosition()
    };
    c.prototype.moveTo = q ? c.prototype._transitionTo : c.prototype.goTo;
    c.prototype.setPosition = function(v, w) {
        this.position.x = parseInt(v, 10);
        this.position.y = parseInt(w, 10)
    };
    c.prototype._nonTransition = function(v) {
        this.css(v.to);
        if (v.isCleaning) {
            this._removeStyles(v.to)
        }
        for (var w in v.onTransitionEnd) {
            v.onTransitionEnd[w].call(this)
        }
    };
    c.prototype._transition = function(v) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(v);
            return
        }
        var x = this._transn;
        for (var y in v.onTransitionEnd) {
            x.onEnd[y] = v.onTransitionEnd[y]
        }
        for (y in v.to) {
            x.ingProperties[y] = true;
            if (v.isCleaning) {
                x.clean[y] = true
            }
        }
        if (v.from) {
            this.css(v.from);
            var w = this.element.offsetHeight;
            w = null
        }
        this.enableTransition(v.to);
        this.css(v.to);
        this.isTransitioning = true
    };

    function g(v) {
        return v.replace(/([A-Z])/g, function(w) {
            return "-" + w.toLowerCase()
        })
    }
    var n = "opacity," + g(p.transform || "transform");
    c.prototype.enableTransition = function() {
        if (this.isTransitioning) {
            return
        }
        this.css({
            transitionProperty: n,
            transitionDuration: this.layout.options.transitionDuration
        });
        this.element.addEventListener(a, this, false)
    };
    c.prototype.transition = c.prototype[s ? "_transition" : "_nonTransition"];
    c.prototype.onwebkitTransitionEnd = function(v) {
        this.ontransitionend(v)
    };
    c.prototype.onotransitionend = function(v) {
        this.ontransitionend(v)
    };
    var u = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    c.prototype.ontransitionend = function(y) {
        if (y.target !== this.element) {
            return
        }
        var x = this._transn;
        var v = u[y.propertyName] || y.propertyName;
        delete x.ingProperties[v];
        if (i(x.ingProperties)) {
            this.disableTransition()
        }
        if (v in x.clean) {
            this.element.style[y.propertyName] = "";
            delete x.clean[v]
        }
        if (v in x.onEnd) {
            var w = x.onEnd[v];
            w.call(this);
            delete x.onEnd[v]
        }
        this.emitEvent("transitionEnd", [this])
    };
    c.prototype.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(a, this, false);
        this.isTransitioning = false
    };
    c.prototype._removeStyles = function(w) {
        var v = {};
        for (var x in w) {
            v[x] = ""
        }
        this.css(v)
    };
    var b = {
        transitionProperty: "",
        transitionDuration: ""
    };
    c.prototype.removeTransitionStyles = function() {
        this.css(b)
    };
    c.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ""
        });
        this.emitEvent("remove", [this])
    };
    c.prototype.remove = function() {
        if (!s || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return
        }
        var v = this;
        this.once("transitionEnd", function() {
            v.removeElem()
        });
        this.hide()
    };
    c.prototype.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ""
        });
        var w = this.layout.options;
        var x = {};
        var v = this.getHideRevealTransitionEndProperty("visibleStyle");
        x[v] = this.onRevealTransitionEnd;
        this.transition({
            from: w.hiddenStyle,
            to: w.visibleStyle,
            isCleaning: true,
            onTransitionEnd: x
        })
    };
    c.prototype.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent("reveal")
        }
    };
    c.prototype.getHideRevealTransitionEndProperty = function(w) {
        var v = this.layout.options[w];
        if (v.opacity) {
            return "opacity"
        }
        for (var x in v) {
            return x
        }
    };
    c.prototype.hide = function() {
        this.isHidden = true;
        this.css({
            display: ""
        });
        var w = this.layout.options;
        var x = {};
        var v = this.getHideRevealTransitionEndProperty("hiddenStyle");
        x[v] = this.onHideTransitionEnd;
        this.transition({
            from: w.visibleStyle,
            to: w.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: x
        })
    };
    c.prototype.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: "none"
            });
            this.emitEvent("hide")
        }
    };
    c.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    };
    return c
}));
/*!
 * Outlayer v1.4.2
 * the brains and guts of a layout library
 * MIT license
 */
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(d, g, h, c, f) {
            return a(b, d, g, h, c, f)
        })
    } else {
        if (typeof exports == "object") {
            module.exports = a(b, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"))
        } else {
            b.Outlayer = a(b, b.eventie, b.EventEmitter, b.getSize, b.fizzyUIUtils, b.Outlayer.Item)
        }
    }
}(window, function factory(g, i, m, k, h, b) {
    var c = g.console;
    var l = g.jQuery;
    var j = function() {};
    var f = 0;
    var a = {};

    function d(p, o) {
        var n = h.getQueryElement(p);
        if (!n) {
            if (c) {
                c.error("Bad element for " + this.constructor.namespace + ": " + (n || p))
            }
            return
        }
        this.element = n;
        if (l) {
            this.$element = l(this.element)
        }
        this.options = h.extend({}, this.constructor.defaults);
        this.option(o);
        var q = ++f;
        this.element.outlayerGUID = q;
        a[q] = this;
        this._create();
        if (this.options.isInitLayout) {
            this.layout()
        }
    }
    d.namespace = "outlayer";
    d.Item = b;
    d.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: true,
        isOriginLeft: true,
        isOriginTop: true,
        isResizeBound: true,
        isResizingContainer: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    h.extend(d.prototype, m.prototype);
    d.prototype.option = function(n) {
        h.extend(this.options, n)
    };
    d.prototype._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        h.extend(this.element.style, this.options.containerStyle);
        if (this.options.isResizeBound) {
            this.bindResize()
        }
    };
    d.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    };
    d.prototype._itemize = function(p) {
        var s = this._filterFindItemElements(p);
        var q = this.constructor.Item;
        var o = [];
        for (var r = 0, n = s.length; r < n; r++) {
            var u = s[r];
            var t = new q(u, this);
            o.push(t)
        }
        return o
    };
    d.prototype._filterFindItemElements = function(n) {
        return h.filterFindElements(n, this.options.itemSelector)
    };
    d.prototype.getItemElements = function() {
        var o = [];
        for (var p = 0, n = this.items.length; p < n; p++) {
            o.push(this.items[p].element)
        }
        return o
    };
    d.prototype.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var n = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, n);
        this._isLayoutInited = true
    };
    d.prototype._init = d.prototype.layout;
    d.prototype._resetLayout = function() {
        this.getSize()
    };
    d.prototype.getSize = function() {
        this.size = k(this.element)
    };
    d.prototype._getMeasurement = function(p, n) {
        var o = this.options[p];
        var q;
        if (!o) {
            this[p] = 0
        } else {
            if (typeof o === "string") {
                q = this.element.querySelector(o)
            } else {
                if (h.isElement(o)) {
                    q = o
                }
            }
            this[p] = q ? k(q)[n] : o
        }
    };
    d.prototype.layoutItems = function(n, o) {
        n = this._getItemsForLayout(n);
        this._layoutItems(n, o);
        this._postLayout()
    };
    d.prototype._getItemsForLayout = function(o) {
        var r = [];
        for (var p = 0, n = o.length; p < n; p++) {
            var q = o[p];
            if (!q.isIgnored) {
                r.push(q)
            }
        }
        return r
    };
    d.prototype._layoutItems = function(q, t) {
        this._emitCompleteOnItems("layout", q);
        if (!q || !q.length) {
            return
        }
        var p = [];
        for (var r = 0, o = q.length; r < o; r++) {
            var s = q[r];
            var n = this._getItemLayoutPosition(s);
            n.item = s;
            n.isInstant = t || s.isLayoutInstant;
            p.push(n)
        }
        this._processLayoutQueue(p)
    };
    d.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    };
    d.prototype._processLayoutQueue = function(o) {
        for (var p = 0, n = o.length; p < n; p++) {
            var q = o[p];
            this._positionItem(q.item, q.x, q.y, q.isInstant)
        }
    };
    d.prototype._positionItem = function(o, n, q, p) {
        if (p) {
            o.goTo(n, q)
        } else {
            o.moveTo(n, q)
        }
    };
    d.prototype._postLayout = function() {
        this.resizeContainer()
    };
    d.prototype.resizeContainer = function() {
        if (!this.options.isResizingContainer) {
            return
        }
        var n = this._getContainerSize();
        if (n) {
            this._setContainerMeasure(n.width, true);
            this._setContainerMeasure(n.height, false)
        }
    };
    d.prototype._getContainerSize = j;
    d.prototype._setContainerMeasure = function(n, o) {
        if (n === undefined) {
            return
        }
        var p = this.size;
        if (p.isBorderBox) {
            n += o ? p.paddingLeft + p.paddingRight + p.borderLeftWidth + p.borderRightWidth : p.paddingBottom + p.paddingTop + p.borderTopWidth + p.borderBottomWidth
        }
        n = Math.max(n, 0);
        this.element.style[o ? "width" : "height"] = n + "px"
    };
    d.prototype._emitCompleteOnItems = function(r, v) {
        var t = this;

        function n() {
            t.dispatchEvent(r + "Complete", null, [v])
        }
        var u = v.length;
        if (!v || !u) {
            n();
            return
        }
        var o = 0;

        function q() {
            o++;
            if (o === u) {
                n()
            }
        }
        for (var p = 0, s = v.length; p < s; p++) {
            var w = v[p];
            w.once(r, q)
        }
    };
    d.prototype.dispatchEvent = function(q, r, o) {
        var p = r ? [r].concat(o) : o;
        this.emitEvent(q, p);
        if (l) {
            this.$element = this.$element || l(this.element);
            if (r) {
                var n = l.Event(r);
                n.type = q;
                this.$element.trigger(n, o)
            } else {
                this.$element.trigger(q, o)
            }
        }
    };
    d.prototype.ignore = function(o) {
        var n = this.getItem(o);
        if (n) {
            n.isIgnored = true
        }
    };
    d.prototype.unignore = function(o) {
        var n = this.getItem(o);
        if (n) {
            delete n.isIgnored
        }
    };
    d.prototype.stamp = function(o) {
        o = this._find(o);
        if (!o) {
            return
        }
        this.stamps = this.stamps.concat(o);
        for (var p = 0, n = o.length; p < n; p++) {
            var q = o[p];
            this.ignore(q)
        }
    };
    d.prototype.unstamp = function(o) {
        o = this._find(o);
        if (!o) {
            return
        }
        for (var p = 0, n = o.length; p < n; p++) {
            var q = o[p];
            h.removeFrom(this.stamps, q);
            this.unignore(q)
        }
    };
    d.prototype._find = function(n) {
        if (!n) {
            return
        }
        if (typeof n === "string") {
            n = this.element.querySelectorAll(n)
        }
        n = h.makeArray(n);
        return n
    };
    d.prototype._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return
        }
        this._getBoundingRect();
        for (var p = 0, n = this.stamps.length; p < n; p++) {
            var o = this.stamps[p];
            this._manageStamp(o)
        }
    };
    d.prototype._getBoundingRect = function() {
        var n = this.element.getBoundingClientRect();
        var o = this.size;
        this._boundingRect = {
            left: n.left + o.paddingLeft + o.borderLeftWidth,
            top: n.top + o.paddingTop + o.borderTopWidth,
            right: n.right - (o.paddingRight + o.borderRightWidth),
            bottom: n.bottom - (o.paddingBottom + o.borderBottomWidth)
        }
    };
    d.prototype._manageStamp = j;
    d.prototype._getElementOffset = function(q) {
        var n = q.getBoundingClientRect();
        var p = this._boundingRect;
        var o = k(q);
        var r = {
            left: n.left - p.left - o.marginLeft,
            top: n.top - p.top - o.marginTop,
            right: p.right - n.right - o.marginRight,
            bottom: p.bottom - n.bottom - o.marginBottom
        };
        return r
    };
    d.prototype.handleEvent = function(n) {
        var o = "on" + n.type;
        if (this[o]) {
            this[o](n)
        }
    };
    d.prototype.bindResize = function() {
        if (this.isResizeBound) {
            return
        }
        i.bind(g, "resize", this);
        this.isResizeBound = true
    };
    d.prototype.unbindResize = function() {
        if (this.isResizeBound) {
            i.unbind(g, "resize", this)
        }
        this.isResizeBound = false
    };
    d.prototype.onresize = function() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout)
        }
        var o = this;

        function n() {
            o.resize();
            delete o.resizeTimeout
        }
        this.resizeTimeout = setTimeout(n, 100)
    };
    d.prototype.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return
        }
        this.layout()
    };
    d.prototype.needsResizeLayout = function() {
        var o = k(this.element);
        var n = this.size && o;
        return n && o.innerWidth !== this.size.innerWidth
    };
    d.prototype.addItems = function(o) {
        var n = this._itemize(o);
        if (n.length) {
            this.items = this.items.concat(n)
        }
        return n
    };
    d.prototype.appended = function(o) {
        var n = this.addItems(o);
        if (!n.length) {
            return
        }
        this.layoutItems(n, true);
        this.reveal(n)
    };
    d.prototype.prepended = function(o) {
        var n = this._itemize(o);
        if (!n.length) {
            return
        }
        var p = this.items.slice(0);
        this.items = n.concat(p);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(n, true);
        this.reveal(n);
        this.layoutItems(p)
    };
    d.prototype.reveal = function(o) {
        this._emitCompleteOnItems("reveal", o);
        var n = o && o.length;
        for (var p = 0; n && p < n; p++) {
            var q = o[p];
            q.reveal()
        }
    };
    d.prototype.hide = function(o) {
        this._emitCompleteOnItems("hide", o);
        var n = o && o.length;
        for (var p = 0; n && p < n; p++) {
            var q = o[p];
            q.hide()
        }
    };
    d.prototype.revealItemElements = function(o) {
        var n = this.getItems(o);
        this.reveal(n)
    };
    d.prototype.hideItemElements = function(o) {
        var n = this.getItems(o);
        this.hide(n)
    };
    d.prototype.getItem = function(q) {
        for (var o = 0, n = this.items.length; o < n; o++) {
            var p = this.items[o];
            if (p.element === q) {
                return p
            }
        }
    };
    d.prototype.getItems = function(p) {
        p = h.makeArray(p);
        var o = [];
        for (var q = 0, n = p.length; q < n; q++) {
            var s = p[q];
            var r = this.getItem(s);
            if (r) {
                o.push(r)
            }
        }
        return o
    };
    d.prototype.remove = function(o) {
        var q = this.getItems(o);
        this._emitCompleteOnItems("remove", q);
        if (!q || !q.length) {
            return
        }
        for (var p = 0, n = q.length; p < n; p++) {
            var r = q[p];
            r.remove();
            h.removeFrom(this.items, r)
        }
    };
    d.prototype.destroy = function() {
        var p = this.element.style;
        p.height = "";
        p.position = "";
        p.width = "";
        for (var o = 0, n = this.items.length; o < n; o++) {
            var q = this.items[o];
            q.destroy()
        }
        this.unbindResize();
        var r = this.element.outlayerGUID;
        delete a[r];
        delete this.element.outlayerGUID;
        if (l) {
            l.removeData(this.element, this.constructor.namespace)
        }
    };
    d.data = function(n) {
        n = h.getQueryElement(n);
        var o = n && n.outlayerGUID;
        return o && a[o]
    };
    d.create = function(q, o) {
        function p() {
            d.apply(this, arguments)
        }
        if (Object.create) {
            p.prototype = Object.create(d.prototype)
        } else {
            h.extend(p.prototype, d.prototype)
        }
        p.prototype.constructor = p;
        p.defaults = h.extend({}, d.defaults);
        h.extend(p.defaults, o);
        p.prototype.settings = {};
        p.namespace = q;
        p.data = d.data;
        p.Item = function n() {
            b.apply(this, arguments)
        };
        p.Item.prototype = new b();
        h.htmlInit(p, q);
        if (l && l.bridget) {
            l.bridget(q, p)
        }
        return p
    };
    d.Item = b;
    return d
}));
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("isotope/js/item", ["outlayer/outlayer"], a)
    } else {
        if (typeof exports == "object") {
            module.exports = a(require("outlayer"))
        } else {
            b.Isotope = b.Isotope || {};
            b.Isotope.Item = a(b.Outlayer)
        }
    }
}(window, function factory(c) {
    function b() {
        c.Item.apply(this, arguments)
    }
    b.prototype = new c.Item();
    b.prototype._create = function() {
        this.id = this.layout.itemGUID++;
        c.Item.prototype._create.call(this);
        this.sortData = {}
    };
    b.prototype.updateSortData = function() {
        if (this.isIgnored) {
            return
        }
        this.sortData.id = this.id;
        this.sortData["original-order"] = this.id;
        this.sortData.random = Math.random();
        var f = this.layout.options.getSortData;
        var g = this.layout._sorters;
        for (var d in f) {
            var h = g[d];
            this.sortData[d] = h(this.element, this)
        }
    };
    var a = b.prototype.destroy;
    b.prototype.destroy = function() {
        a.apply(this, arguments);
        this.css({
            display: ""
        })
    };
    return b
}));
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], a)
    } else {
        if (typeof exports == "object") {
            module.exports = a(require("get-size"), require("outlayer"))
        } else {
            b.Isotope = b.Isotope || {};
            b.Isotope.LayoutMode = a(b.getSize, b.Outlayer)
        }
    }
}(window, function factory(c, b) {
    function a(d) {
        this.isotope = d;
        if (d) {
            this.options = d.options[this.namespace];
            this.element = d.element;
            this.items = d.filteredItems;
            this.size = d.size
        }
    }(function() {
        var g = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"];
        for (var h = 0, d = g.length; h < d; h++) {
            var f = g[h];
            a.prototype[f] = j(f)
        }

        function j(i) {
            return function() {
                return b.prototype[i].apply(this.isotope, arguments)
            }
        }
    })();
    a.prototype.needsVerticalResizeLayout = function() {
        var f = c(this.isotope.element);
        var d = this.isotope.size && f;
        return d && f.innerHeight != this.isotope.size.innerHeight
    };
    a.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    };
    a.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    };
    a.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    };
    a.prototype.getSegmentSize = function(i, g) {
        var h = i + g;
        var d = "outer" + g;
        this._getMeasurement(h, d);
        if (this[h]) {
            return
        }
        var f = this.getFirstItemSize();
        this[h] = f && f[d] || this.isotope.size["inner" + g]
    };
    a.prototype.getFirstItemSize = function() {
        var d = this.isotope.filteredItems[0];
        return d && d.element && c(d.element)
    };
    a.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    };
    a.prototype.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size
    };
    a.modes = {};
    a.create = function(f, d) {
        function g() {
            a.apply(this, arguments)
        }
        g.prototype = new a();
        if (d) {
            g.options = d
        }
        g.prototype.namespace = f;
        a.modes[f] = g;
        return g
    };
    return a
}));
/*!
 * Masonry v3.3.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(b, a) {
    if (typeof define === "function" && define.amd) {
        define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a(require("outlayer"), require("get-size"), require("fizzy-ui-utils"))
        } else {
            b.Masonry = a(b.Outlayer, b.getSize, b.fizzyUIUtils)
        }
    }
}(window, function factory(c, d, a) {
    var b = c.create("masonry");
    b.prototype._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        var f = this.cols;
        this.colYs = [];
        while (f--) {
            this.colYs.push(0)
        }
        this.maxY = 0
    };
    b.prototype.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var l = this.items[0];
            var h = l && l.element;
            this.columnWidth = h && d(h).outerWidth || this.containerWidth
        }
        var j = this.columnWidth += this.gutter;
        var i = this.containerWidth + this.gutter;
        var k = i / j;
        var f = j - i % j;
        var g = f && f < 1 ? "round" : "floor";
        k = Math[g](k);
        this.cols = Math.max(k, 1)
    };
    b.prototype.getContainerWidth = function() {
        var f = this.options.isFitWidth ? this.element.parentNode : this.element;
        var g = d(f);
        this.containerWidth = g && g.innerWidth
    };
    b.prototype._getItemLayoutPosition = function(q) {
        q.getSize();
        var p = q.size.outerWidth % this.columnWidth;
        var l = p && p < 1 ? "round" : "ceil";
        var m = Math[l](q.size.outerWidth / this.columnWidth);
        m = Math.min(m, this.cols);
        var f = this._getColGroup(m);
        var g = Math.min.apply(Math, f);
        var n = a.indexOf(f, g);
        var k = {
            x: this.columnWidth * n,
            y: g
        };
        var o = g + q.size.outerHeight;
        var h = this.cols + 1 - f.length;
        for (var j = 0; j < h; j++) {
            this.colYs[n + j] = o
        }
        return k
    };
    b.prototype._getColGroup = function(h) {
        if (h < 2) {
            return this.colYs
        }
        var j = [];
        var k = this.cols + 1 - h;
        for (var f = 0; f < k; f++) {
            var g = this.colYs.slice(f, f + h);
            j[f] = Math.max.apply(Math, g)
        }
        return j
    };
    b.prototype._manageStamp = function(f) {
        var m = d(f);
        var k = this._getElementOffset(f);
        var j = this.options.isOriginLeft ? k.left : k.right;
        var g = j + m.outerWidth;
        var o = Math.floor(j / this.columnWidth);
        o = Math.max(0, o);
        var h = Math.floor(g / this.columnWidth);
        h -= g % this.columnWidth ? 0 : 1;
        h = Math.min(this.cols - 1, h);
        var n = (this.options.isOriginTop ? k.top : k.bottom) + m.outerHeight;
        for (var l = o; l <= h; l++) {
            this.colYs[l] = Math.max(n, this.colYs[l])
        }
    };
    b.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var f = {
            height: this.maxY
        };
        if (this.options.isFitWidth) {
            f.width = this._getContainerFitWidth()
        }
        return f
    };
    b.prototype._getContainerFitWidth = function() {
        var g = 0;
        var f = this.cols;
        while (--f) {
            if (this.colYs[f] !== 0) {
                break
            }
            g++
        }
        return (this.cols - g) * this.columnWidth - this.gutter
    };
    b.prototype.needsResizeLayout = function() {
        var f = this.containerWidth;
        this.getContainerWidth();
        return f !== this.containerWidth
    };
    return b
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], a)
    } else {
        if (typeof exports == "object") {
            module.exports = a(require("../layout-mode"), require("masonry-layout"))
        } else {
            a(b.Isotope.LayoutMode, b.Masonry)
        }
    }
}(window, function factory(f, i) {
    function h(l, k) {
        for (var m in k) {
            l[m] = k[m]
        }
        return l
    }
    var j = f.create("masonry");
    var a = j.prototype._getElementOffset;
    var g = j.prototype.layout;
    var b = j.prototype._getMeasurement;
    h(j.prototype, i.prototype);
    j.prototype._getElementOffset = a;
    j.prototype.layout = g;
    j.prototype._getMeasurement = b;
    var d = j.prototype.measureColumns;
    j.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        d.call(this)
    };
    var c = j.prototype._manageStamp;
    j.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft;
        this.options.isOriginTop = this.isotope.options.isOriginTop;
        c.apply(this, arguments)
    };
    return j
}));
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], a)
    } else {
        if (typeof exports == "object") {
            module.exports = a(require("../layout-mode"))
        } else {
            a(b.Isotope.LayoutMode)
        }
    }
}(window, function factory(b) {
    var a = b.create("fitRows");
    a.prototype._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement("gutter", "outerWidth")
    };
    a.prototype._getItemLayoutPosition = function(d) {
        d.getSize();
        var g = d.size.outerWidth + this.gutter;
        var f = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && g + this.x > f) {
            this.x = 0;
            this.y = this.maxY
        }
        var c = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + d.size.outerHeight);
        this.x += g;
        return c
    };
    a.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    };
    return a
}));
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define("isotope/js/layout-modes/vertical", ["../layout-mode"], a)
    } else {
        if (typeof exports == "object") {
            module.exports = a(require("../layout-mode"))
        } else {
            a(b.Isotope.LayoutMode)
        }
    }
}(window, function factory(b) {
    var a = b.create("vertical", {
        horizontalAlignment: 0
    });
    a.prototype._resetLayout = function() {
        this.y = 0
    };
    a.prototype._getItemLayoutPosition = function(d) {
        d.getSize();
        var c = (this.isotope.size.innerWidth - d.size.outerWidth) * this.options.horizontalAlignment;
        var f = this.y;
        this.y += d.size.outerHeight;
        return {
            x: c,
            y: f
        }
    };
    a.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    };
    return a
}));
/*!
 * Isotope v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
(function(b, a) {
    if (typeof define == "function" && define.amd) {
        define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(h, i, d, c, f, g) {
            return a(b, h, i, d, c, f, g)
        })
    } else {
        if (typeof exports == "object") {
            module.exports = a(b, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical"))
        } else {
            b.Isotope = a(b, b.Outlayer, b.getSize, b.matchesSelector, b.fizzyUIUtils, b.Isotope.Item, b.Isotope.LayoutMode)
        }
    }
}(window, function factory(h, g, n, p, j, c, f) {
    var o = h.jQuery;
    var b = String.prototype.trim ? function(q) {
        return q.trim()
    } : function(q) {
        return q.replace(/^\s+|\s+$/g, "")
    };
    var a = document.documentElement;
    var m = a.textContent ? function(q) {
        return q.textContent
    } : function(q) {
        return q.innerText
    };
    var i = g.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: true,
        sortAscending: true
    });
    i.Item = c;
    i.LayoutMode = f;
    i.prototype._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        g.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ["original-order"];
        for (var q in f.modes) {
            this._initLayoutMode(q)
        }
    };
    i.prototype.reloadItems = function() {
        this.itemGUID = 0;
        g.prototype.reloadItems.call(this)
    };
    i.prototype._itemize = function() {
        var r = g.prototype._itemize.apply(this, arguments);
        for (var s = 0, q = r.length; s < q; s++) {
            var t = r[s];
            t.id = this.itemGUID++
        }
        this._updateItemsSortData(r);
        return r
    };
    i.prototype._initLayoutMode = function(q) {
        var r = f.modes[q];
        var s = this.options[q] || {};
        this.options[q] = r.options ? j.extend(r.options, s) : s;
        this.modes[q] = new r(this)
    };
    i.prototype.layout = function() {
        if (!this._isLayoutInited && this.options.isInitLayout) {
            this.arrange();
            return
        }
        this._layout()
    };
    i.prototype._layout = function() {
        var q = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, q);
        this._isLayoutInited = true
    };
    i.prototype.arrange = function(s) {
        this.option(s);
        this._getIsInstant();
        var q = this._filter(this.items);
        this.filteredItems = q.matches;
        var t = this;

        function r() {
            t.reveal(q.needReveal);
            t.hide(q.needHide)
        }
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(r)
        } else {
            r()
        }
        this._sort();
        this._layout()
    };
    i.prototype._init = i.prototype.arrange;
    i.prototype._getIsInstant = function() {
        var q = this.options.isLayoutInstant !== undefined ? this.options.isLayoutInstant : !this._isLayoutInited;
        this._isInstant = q;
        return q
    };
    i.prototype._bindArrangeComplete = function() {
        var q, u, r;
        var t = this;

        function s() {
            if (q && u && r) {
                t.dispatchEvent("arrangeComplete", null, [t.filteredItems])
            }
        }
        this.once("layoutComplete", function() {
            q = true;
            s()
        });
        this.once("hideComplete", function() {
            u = true;
            s()
        });
        this.once("revealComplete", function() {
            r = true;
            s()
        })
    };
    i.prototype._filter = function(y) {
        var r = this.options.filter;
        r = r || "*";
        var t = [];
        var u = [];
        var q = [];
        var x = this._getFilterTest(r);
        for (var s = 0, v = y.length; s < v; s++) {
            var z = y[s];
            if (z.isIgnored) {
                continue
            }
            var w = x(z);
            if (w) {
                t.push(z)
            }
            if (w && z.isHidden) {
                u.push(z)
            } else {
                if (!w && !z.isHidden) {
                    q.push(z)
                }
            }
        }
        return {
            matches: t,
            needReveal: u,
            needHide: q
        }
    };
    i.prototype._getFilterTest = function(q) {
        if (o && this.options.isJQueryFiltering) {
            return function(r) {
                return o(r.element).is(q)
            }
        }
        if (typeof q == "function") {
            return function(r) {
                return q(r.element)
            }
        }
        return function(r) {
            return p(r.element, q)
        }
    };
    i.prototype.updateSortData = function(r) {
        var q;
        if (r) {
            r = j.makeArray(r);
            q = this.getItems(r)
        } else {
            q = this.items
        }
        this._getSorters();
        this._updateItemsSortData(q)
    };
    i.prototype._getSorters = function() {
        var r = this.options.getSortData;
        for (var q in r) {
            var s = r[q];
            this._sorters[q] = d(s)
        }
    };
    i.prototype._updateItemsSortData = function(r) {
        var q = r && r.length;
        for (var s = 0; q && s < q; s++) {
            var t = r[s];
            t.updateSortData()
        }
    };
    var d = (function() {
        function r(y) {
            if (typeof y != "string") {
                return y
            }
            var u = b(y).split(" ");
            var w = u[0];
            var v = w.match(/^\[(.+)\]$/);
            var s = v && v[1];
            var t = q(s, w);
            var x = i.sortDataParsers[u[1]];
            y = x ? function(z) {
                return z && x(t(z))
            } : function(z) {
                return z && t(z)
            };
            return y
        }

        function q(s, u) {
            var t;
            if (s) {
                t = function(v) {
                    return v.getAttribute(s)
                }
            } else {
                t = function(v) {
                    var w = v.querySelector(u);
                    return w && m(w)
                }
            }
            return t
        }
        return r
    })();
    i.sortDataParsers = {
        parseInt: function(q) {
            return parseInt(q, 10)
        },
        parseFloat: function(q) {
            return parseFloat(q)
        }
    };
    i.prototype._sort = function() {
        var s = this.options.sortBy;
        if (!s) {
            return
        }
        var q = [].concat.apply(s, this.sortHistory);
        var r = l(q, this.options.sortAscending);
        this.filteredItems.sort(r);
        if (s != this.sortHistory[0]) {
            this.sortHistory.unshift(s)
        }
    };

    function l(r, q) {
        return function s(A, y) {
            for (var u = 0, v = r.length; u < v; u++) {
                var B = r[u];
                var z = A.sortData[B];
                var w = y.sortData[B];
                if (z > w || z < w) {
                    var t = q[B] !== undefined ? q[B] : q;
                    var x = t ? 1 : -1;
                    return (z > w ? 1 : -1) * x
                }
            }
            return 0
        }
    }
    i.prototype._mode = function() {
        var r = this.options.layoutMode;
        var q = this.modes[r];
        if (!q) {
            throw new Error("No layout mode: " + r)
        }
        q.options = this.options[r];
        return q
    };
    i.prototype._resetLayout = function() {
        g.prototype._resetLayout.call(this);
        this._mode()._resetLayout()
    };
    i.prototype._getItemLayoutPosition = function(q) {
        return this._mode()._getItemLayoutPosition(q)
    };
    i.prototype._manageStamp = function(q) {
        this._mode()._manageStamp(q)
    };
    i.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    };
    i.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    };
    i.prototype.appended = function(r) {
        var q = this.addItems(r);
        if (!q.length) {
            return
        }
        var s = this._filterRevealAdded(q);
        this.filteredItems = this.filteredItems.concat(s)
    };
    i.prototype.prepended = function(r) {
        var q = this._itemize(r);
        if (!q.length) {
            return
        }
        this._resetLayout();
        this._manageStamps();
        var s = this._filterRevealAdded(q);
        this.layoutItems(this.filteredItems);
        this.filteredItems = s.concat(this.filteredItems);
        this.items = q.concat(this.items)
    };
    i.prototype._filterRevealAdded = function(q) {
        var r = this._filter(q);
        this.hide(r.needHide);
        this.reveal(r.matches);
        this.layoutItems(r.matches, true);
        return r.matches
    };
    i.prototype.insert = function(t) {
        var s = this.addItems(t);
        if (!s.length) {
            return
        }
        var u, v;
        var q = s.length;
        for (u = 0; u < q; u++) {
            v = s[u];
            this.element.appendChild(v.element)
        }
        var r = this._filter(s).matches;
        for (u = 0; u < q; u++) {
            s[u].isLayoutInstant = true
        }
        this.arrange();
        for (u = 0; u < q; u++) {
            delete s[u].isLayoutInstant
        }
        this.reveal(r)
    };
    var k = i.prototype.remove;
    i.prototype.remove = function(r) {
        r = j.makeArray(r);
        var t = this.getItems(r);
        k.call(this, r);
        var q = t && t.length;
        if (!q) {
            return
        }
        for (var s = 0; s < q; s++) {
            var u = t[s];
            j.removeFrom(this.filteredItems, u)
        }
    };
    i.prototype.shuffle = function() {
        for (var r = 0, q = this.items.length; r < q; r++) {
            var s = this.items[r];
            s.sortData.random = Math.random()
        }
        this.options.sortBy = "random";
        this._sort();
        this._layout()
    };
    i.prototype._noTransition = function(s) {
        var q = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var r = s.call(this);
        this.options.transitionDuration = q;
        return r
    };
    i.prototype.getFilteredItemElements = function() {
        var r = [];
        for (var s = 0, q = this.filteredItems.length; s < q; s++) {
            r.push(this.filteredItems[s].element)
        }
        return r
    };
    return i
}));
/*!
 * cellsByColumn layout mode for Isotope
 * v1.1.2
 * http://isotope.metafizzy.co/layout-modes/cellsbycolumn.html
 */
(function(a) {
    function b(d) {
        var c = d.create("cellsByColumn");
        c.prototype._resetLayout = function() {
            this.itemIndex = 0;
            this.getColumnWidth();
            this.getRowHeight();
            this.rows = Math.floor(this.isotope.size.innerHeight / this.rowHeight);
            this.rows = Math.max(this.rows, 1)
        };
        c.prototype._getItemLayoutPosition = function(h) {
            h.getSize();
            var g = Math.floor(this.itemIndex / this.rows);
            var i = this.itemIndex % this.rows;
            var f = (g + 0.5) * this.columnWidth - h.size.outerWidth / 2;
            var j = (i + 0.5) * this.rowHeight - h.size.outerHeight / 2;
            this.itemIndex++;
            return {
                x: f,
                y: j
            }
        };
        c.prototype._getContainerSize = function() {
            return {
                width: Math.ceil(this.itemIndex / this.rows) * this.columnWidth
            }
        };
        c.prototype.needsResizeLayout = function() {
            return this.needsVerticalResizeLayout()
        };
        return c
    }
    if (typeof define === "function" && define.amd) {
        define(["isotope/js/layout-mode"], b)
    } else {
        if (typeof exports === "object") {
            module.exports = b(require("isotope-layout/js/layout-mode"))
        } else {
            b(a.Isotope.LayoutMode)
        }
    }
})(window);
/*!
 * fitColumns layout mode for Isotope
 * v1.1.2
 * http://isotope.metafizzy.co/layout-modes/fitcolumns.html
 */
(function(b) {
    function a(c) {
        var d = c.create("fitColumns");
        d.prototype._resetLayout = function() {
            this.x = 0;
            this.y = 0;
            this.maxX = 0
        };
        d.prototype._getItemLayoutPosition = function(g) {
            g.getSize();
            if (this.y !== 0 && g.size.outerHeight + this.y > this.isotope.size.innerHeight) {
                this.y = 0;
                this.x = this.maxX
            }
            var f = {
                x: this.x,
                y: this.y
            };
            this.maxX = Math.max(this.maxX, this.x + g.size.outerWidth);
            this.y += g.size.outerHeight;
            return f
        };
        d.prototype._getContainerSize = function() {
            return {
                width: this.maxX
            }
        };
        d.prototype.needsResizeLayout = function() {
            return this.needsVerticalResizeLayout()
        };
        return d
    }
    if (typeof define === "function" && define.amd) {
        define(["isotope/js/layout-mode"], a)
    } else {
        if (typeof exports === "object") {
            module.exports = a(require("isotope-layout/js/layout-mode"))
        } else {
            a(b.Isotope.LayoutMode)
        }
    }
})(window);
(function(k, d) {
    if (k.fn.dotdotdot) {
        return
    }
    k.fn.dotdotdot = function(y) {
        if (this.length == 0) {
            k.fn.dotdotdot.debug('No element found for "' + this.selector + '".');
            return this
        }
        if (this.length > 1) {
            return this.each(function() {
                k(this).dotdotdot(y)
            })
        }
        var u = this;
        var z = u.contents();
        if (u.data("dotdotdot")) {
            u.trigger("destroy.dot")
        }
        u.data("dotdotdot-style", u.attr("style") || "");
        u.css("word-wrap", "break-word");
        if (u.css("white-space") === "nowrap") {
            u.css("white-space", "normal")
        }
        u.bind_events = function() {
            u.bind("update.dot", function(B, D) {
                u.removeClass("is-truncated");
                B.preventDefault();
                B.stopPropagation();
                switch (typeof w.height) {
                    case "number":
                        w.maxHeight = w.height;
                        break;
                    case "function":
                        w.maxHeight = w.height.call(u[0]);
                        break;
                    default:
                        w.maxHeight = r(u);
                        break
                }
                w.maxHeight += w.tolerance;
                if (typeof D != "undefined") {
                    if (typeof D == "string" || ("nodeType" in D && D.nodeType === 1)) {
                        D = k("<div />").append(D).contents()
                    }
                    if (D instanceof k) {
                        z = D
                    }
                }
                v = u.wrapInner('<div class="dotdotdot" />').children();
                v.contents().detach().end().append(z.clone(true)).find("br").replaceWith("  <br />  ").end().css({
                    height: "auto",
                    width: "auto",
                    border: "none",
                    padding: 0,
                    margin: 0
                });
                var C = false,
                    A = false;
                if (t.afterElement) {
                    C = t.afterElement.clone(true);
                    C.show();
                    t.afterElement.detach()
                }
                if (n(v, w)) {
                    if (w.wrap == "children") {
                        A = c(v, w, C)
                    } else {
                        A = p(v, u, v, w, C)
                    }
                }
                v.replaceWith(v.contents());
                v = null;
                if (k.isFunction(w.callback)) {
                    w.callback.call(u[0], A, z)
                }
                t.isTruncated = A;
                return A
            }).bind("isTruncated.dot", function(B, A) {
                B.preventDefault();
                B.stopPropagation();
                if (typeof A == "function") {
                    A.call(u[0], t.isTruncated)
                }
                return t.isTruncated
            }).bind("originalContent.dot", function(B, A) {
                B.preventDefault();
                B.stopPropagation();
                if (typeof A == "function") {
                    A.call(u[0], z)
                }
                return z
            }).bind("destroy.dot", function(A) {
                A.preventDefault();
                A.stopPropagation();
                u.unwatch().unbind_events().contents().detach().end().append(z).attr("style", u.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", false)
            });
            return u
        };
        u.unbind_events = function() {
            u.unbind(".dot");
            return u
        };
        u.watch = function() {
            u.unwatch();
            if (w.watch == "window") {
                var C = k(window),
                    B = C.width(),
                    A = C.height();
                C.bind("resize.dot" + t.dotId, function() {
                    if (B != C.width() || A != C.height() || !w.windowResizeFix) {
                        B = C.width();
                        A = C.height();
                        if (s) {
                            clearInterval(s)
                        }
                        s = setTimeout(function() {
                            u.trigger("update.dot")
                        }, 100)
                    }
                })
            } else {
                x = m(u);
                s = setInterval(function() {
                    if (u.is(":visible")) {
                        var D = m(u);
                        if (x.width != D.width || x.height != D.height) {
                            u.trigger("update.dot");
                            x = D
                        }
                    }
                }, 500)
            }
            return u
        };
        u.unwatch = function() {
            k(window).unbind("resize.dot" + t.dotId);
            if (s) {
                clearInterval(s)
            }
            return u
        };
        var w = k.extend(true, {}, k.fn.dotdotdot.defaults, y),
            t = {},
            x = {},
            s = null,
            v = null;
        if (!(w.lastCharacter.remove instanceof Array)) {
            w.lastCharacter.remove = k.fn.dotdotdot.defaultArrays.lastCharacter.remove
        }
        if (!(w.lastCharacter.noEllipsis instanceof Array)) {
            w.lastCharacter.noEllipsis = k.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis
        }
        t.afterElement = b(w.after, u);
        t.isTruncated = false;
        t.dotId = o++;
        u.data("dotdotdot", true).bind_events().trigger("update.dot");
        if (w.watch) {
            u.watch()
        }
        return u
    };
    k.fn.dotdotdot.defaults = {
        ellipsis: "... ",
        wrap: "word",
        fallbackToLetter: true,
        lastCharacter: {},
        tolerance: 0,
        callback: null,
        after: null,
        height: null,
        watch: false,
        windowResizeFix: true
    };
    k.fn.dotdotdot.defaultArrays = {
        lastCharacter: {
            remove: [" ", "\u3000", ",", ";", ".", "!", "?"],
            noEllipsis: []
        }
    };
    k.fn.dotdotdot.debug = function(s) {};
    var o = 1;

    function c(v, z, y) {
        var x = v.children(),
            s = false;
        v.empty();
        for (var u = 0, t = x.length; u < t; u++) {
            var w = x.eq(u);
            v.append(w);
            if (y) {
                v.append(y)
            }
            if (n(v, z)) {
                w.remove();
                s = true;
                break
            } else {
                if (y) {
                    y.detach()
                }
            }
        }
        return s
    }

    function p(t, u, z, y, x) {
        var s = false;
        var w = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style";
        var v = "script, .dotdotdot-keep";
        t.contents().detach().each(function() {
            var B = this,
                A = k(B);
            if (typeof B == "undefined") {
                return true
            } else {
                if (A.is(v)) {
                    t.append(A)
                } else {
                    if (s) {
                        return true
                    } else {
                        t.append(A);
                        if (x && !A.is(y.after) && !A.find(y.after).length) {
                            t[t.is(w) ? "after" : "append"](x)
                        }
                        if (n(z, y)) {
                            if (B.nodeType == 3) {
                                s = f(A, u, z, y, x)
                            } else {
                                s = p(A, u, z, y, x)
                            }
                        }
                        if (!s) {
                            if (x) {
                                x.detach()
                            }
                        }
                    }
                }
            }
        });
        u.addClass("is-truncated");
        return s
    }

    function f(u, w, H, x, t) {
        var E = u[0];
        if (!E) {
            return false
        }
        var A = j(E),
            s = (A.indexOf(" ") !== -1) ? " " : "\u3000",
            C = (x.wrap == "letter") ? "" : s,
            F = A.split(C),
            B = -1,
            I = -1,
            D = 0,
            v = F.length - 1;
        if (x.fallbackToLetter && D == 0 && v == 0) {
            C = "";
            F = A.split(C);
            v = F.length - 1
        }
        while (D <= v && !(D == 0 && v == 0)) {
            var y = Math.floor((D + v) / 2);
            if (y == I) {
                break
            }
            I = y;
            a(E, F.slice(0, I + 1).join(C) + x.ellipsis);
            H.children().each(function() {
                k(this).toggle().toggle()
            });
            if (!n(H, x)) {
                B = I;
                D = I
            } else {
                v = I;
                if (x.fallbackToLetter && D == 0 && v == 0) {
                    C = "";
                    F = F[0].split(C);
                    B = -1;
                    I = -1;
                    D = 0;
                    v = F.length - 1
                }
            }
        }
        if (B != -1 && !(F.length == 1 && F[0].length == 0)) {
            A = h(F.slice(0, B + 1).join(C), x);
            a(E, A)
        } else {
            var z = u.parent();
            u.detach();
            var G = (t && t.closest(z).length) ? t.length : 0;
            if (z.contents().length > G) {
                E = g(z.contents().eq(-1 - G), w)
            } else {
                E = g(z, w, true);
                if (!G) {
                    z.detach()
                }
            }
            if (E) {
                A = h(j(E), x);
                a(E, A);
                if (G && t) {
                    k(E).parent().append(t)
                }
            }
        }
        return true
    }

    function n(t, s) {
        return t.innerHeight() > s.maxHeight
    }

    function h(s, t) {
        while (k.inArray(s.slice(-1), t.lastCharacter.remove) > -1) {
            s = s.slice(0, -1)
        }
        if (k.inArray(s.slice(-1), t.lastCharacter.noEllipsis) < 0) {
            s += t.ellipsis
        }
        return s
    }

    function m(s) {
        return {
            width: s.innerWidth(),
            height: s.innerHeight()
        }
    }

    function a(t, s) {
        if (t.innerText) {
            t.innerText = s
        } else {
            if (t.nodeValue) {
                t.nodeValue = s
            } else {
                if (t.textContent) {
                    t.textContent = s
                }
            }
        }
    }

    function j(s) {
        if (s.innerText) {
            return s.innerText
        } else {
            if (s.nodeValue) {
                return s.nodeValue
            } else {
                if (s.textContent) {
                    return s.textContent
                } else {
                    return ""
                }
            }
        }
    }

    function l(s) {
        do {
            s = s.previousSibling
        } while (s && s.nodeType !== 1 && s.nodeType !== 3);
        return s
    }

    function g(t, w, s) {
        var v = t && t[0],
            u;
        if (v) {
            if (!s) {
                if (v.nodeType === 3) {
                    return v
                }
                if (k.trim(t.text())) {
                    return g(t.contents().last(), w)
                }
            }
            u = l(v);
            while (!u) {
                t = t.parent();
                if (t.is(w) || !t.length) {
                    return false
                }
                u = l(t[0])
            }
            if (u) {
                return g(k(u), w)
            }
        }
        return false
    }

    function b(s, t) {
        if (!s) {
            return false
        }
        if (typeof s === "string") {
            s = k(s, t);
            return (s.length) ? s : false
        }
        return !s.jquery ? false : s
    }

    function r(v) {
        var w = v.innerHeight(),
            u = ["paddingTop", "paddingBottom"];
        for (var x = 0, t = u.length; x < t; x++) {
            var s = parseInt(v.css(u[x]), 10);
            if (isNaN(s)) {
                s = 0
            }
            w -= s
        }
        return w
    }
    var q = k.fn.html;
    k.fn.html = function(s) {
        if (s != d && !k.isFunction(s) && this.data("dotdotdot")) {
            return this.trigger("update", [s])
        }
        return q.apply(this, arguments)
    };
    var i = k.fn.text;
    k.fn.text = function(s) {
        if (s != d && !k.isFunction(s) && this.data("dotdotdot")) {
            s = k("<div />").text(s).html();
            return this.trigger("update", [s])
        }
        return i.apply(this, arguments)
    }
})(jQuery);
jQuery(document).ready(function(a) {
    a(".dot-ellipsis").each(function() {
        var g = a(this).hasClass("dot-resize-update");
        var d = a(this).hasClass("dot-timer-update");
        var c = 0;
        var f = a(this).attr("class").split(/\s+/);
        a.each(f, function(h, i) {
            if (!i.match("/^dot-height-\d+$/")) {
                c = Number(i.substr(i.indexOf("-", -1) + 1))
            }
        });
        var b = new Object();
        if (d) {
            b.watch = true
        }
        if (g) {
            b.watch = "window"
        }
        if (c > 0) {
            b.height = c
        }
        a(this).dotdotdot(b)
    })
});
jQuery(window).load(function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
});
$(document).ready(function() {});
(function(c, b) {
    var a = {
        errors: {
            fields: {
                FirstName: {
                    label: "First Name",
                    message: "Please enter your first name"
                },
                LastName: {
                    label: "Last Name",
                    message: "Please enter your last name"
                },
                Email: {
                    label: "Email",
                    message: "Please enter a valid email address"
                },
                Company: {
                    label: "Company",
                    message: "Please enter your company name"
                },
                Title: {
                    label: "Job Title",
                    message: "Please select a job title"
                },
                Industry: {
                    label: "Industry",
                    message: "Please select an industry"
                },
                "NumberofEmployees-here/atlocation": {
                    label: "Company Size",
                    message: "Please select a company size"
                },
                Country: {
                    label: "Country",
                    message: "Please select a country"
                },
                IfProjectdoyouhaveBudget: {
                    label: "Project budget",
                    message: "Please select a project budget"
                },
                PurchaseTimeframe: {
                    label: "Project time frame",
                    message: "Please select a project time frame"
                },
                MainPhone: {
                    label: "Phone number",
                    message: "Please enter your phone number"
                },
                PrimaryProductInterest: {
                    label: "Product interest",
                    message: "Please select at least 1 product interest"
                }
            }
        }
    };
    c.fn.ctxMarketoForm = function(u) {
        var h = c(this),
            k = "mktError",
            p = "icon-check";
        var i = function() {
            h.find(".mktField select").each(function() {
                c("option:first", this).html("")
            })
        };
        var j = function() {
            h.find("#mktContent .mktField .mktFormCheckbox").each(function() {
                c(this).parents(".mktField").find("label").addClass("checkbox-label")
            })
        };
        var d = function() {
            var v = 0;
            h.find(".mktField *[tabindex]").each(function() {
                var w = c(this);
                v = parseInt(w.attr("tabindex"), 10) + 100;
                w.attr("tabindex", v)
            });
            c("#mktFrmSubmit").attr("tabindex", v + 1)
        };
        var n = function() {
            h.find(".mktField .mktInput input, .mktField .mktInput select").focus(function() {
                c(this).parents(".mktField").removeClass(k)
            });
            h.find(".mktField .mktInput .mktFormMsg").bind("DOMSubtreeModified", function() {
                s(c(this))
            });
            h.find('input[name="Company"]').on("change", function() {
                if (c(this).val() !== "") {
                    setTimeout(function() {
                        l(h.find('select[name="Industry"]'));
                        l(h.find('select[name="NumberofEmployees-here/atlocation"]'));
                        l(h.find('select[name="Country"]'));
                        l(h.find('input[name="MainPhone"]'))
                    }, 100)
                }
            })
        };
        var s = function(v) {
            if (v.html() === "") {
                v.hide()
            } else {
                v.css("display", "block")
            }
        };
        var l = function(v) {
            if (v.val() !== "") {
                v.parent().find(".mktFormMsg").html("");
                v.parents(".mktField").removeClass(k)
            }
        };
        var t = function() {
            c(document).on("click", "#mktContent .mktField .mktInput .checkbox", function() {
                var w = c(this),
                    v = w.parent().find(".mktFormCheckbox");
                w.toggleClass(p);
                v.trigger("click");
                w.siblings(".mktFormMsg").html("");
                w.parents(".mktField").removeClass(k)
            })
        };
        var o = function() {
            var v = typeof c(".marketo-form-content").data("prod") !== "undefined";
            if (!v) {
                c("#mktFrmSubmit").on("focus", function(w) {
                    h.find("#Company").val("Citrix").change();
                    h.find("#Email").val("test@citrix.com").change();
                    h.find("#Industry").val("Technology").change();
                    h.find("#Street").val("851 W Cypress Creek Rd").change();
                    h.find("#PostalCode").val("33309").change();
                    h.find("#MainPhone").val("954-267-3048").change()
                })
            }
        };
        var g = function() {
            b.originalMyFormIsValid = myFormIsValid;
            b.myFormIsValid = function() {
                var w = b.originalMyFormIsValid.call();
                var v = r();
                return w && v
            }
        };
        var r = function() {
            var v = true;
            h.find(".mktField.mktFormReq:visible").each(function() {
                var x = c(this),
                    A = x.find("input, select");
                if (!A.val()) {
                    v = false;
                    var z = A.attr("id"),
                        w = a.errors.fields[z];
                    if (typeof w !== "undefined") {
                        var y = w.message;
                        A.siblings(".mktFormMsg").html(y)
                    }
                    x.addClass(k)
                }
            });
            return v
        };
        var f = function() {
            c(document).on("added-privacy-text", function(v, w) {
                m()
            })
        };
        var m = function() {
            h.find(".mktInput .mktFormCheckbox").each(function() {
                var v = c(this);
                if (!v.parent().find(".custom.checkbox").length) {
                    c('<span class="custom checkbox"></span>').insertAfter(v)
                }
            });
            j()
        };
        var q = function() {
            i();
            j();
            d();
            n();
            t();
            f();
            g();
            m()
        };
        q();
        return this
    }
}(jQuery, window));

function dynamicImage(b) {
    this.dynamicImageFactory = function() {
        this.data = b;
        var c = jQuery("html").hasClass("lt-ie9");
        var f = b.uniqueClass;
        var d = jQuery(".ctx-image-inner.ctx-" + f + " img");
        this.swapimages = function() {
            var g = jQuery(window).width();

            function h(i) {
                d.attr("width", b["imgWidth" + i]);
                d.css("maxWidth", b["imgWidth" + i] + "px");
                d.attr("height", b["imgHeight" + i]);
                d.attr({
                    src: b["imgFilePath" + i],
                    usemap: b["imageMap" + i]
                });
                rwdImageMap(d)
            }
            if ((g >= b.brkPointMd) || c && b.imgWidth) {
                h("")
            } else {
                if ((g >= b.brkPointSm) && (g < b.brkPointMd) && !c) {
                    if (b.imgWidth2) {
                        h(2)
                    } else {
                        h("")
                    }
                } else {
                    if (g < b.brkPointSm && !c) {
                        if (b.imgWidth3) {
                            h(3)
                        } else {
                            if (b.imgWidth2) {
                                h(2)
                            } else {
                                if (b.imgWidth) {
                                    h("")
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    var a = new this.dynamicImageFactory();
    a.swapimages();
    jQuery(window).on("debouncedresize", function(c) {
        a.swapimages()
    })
}

function rwdImageMap(a) {
    (function(b) {
        a.each(function() {
            if (typeof(b(a).attr("usemap")) == "undefined") {
                return
            }
            var d = this,
                c = b(d);
            b("<img />").load(function() {
                var g = "width",
                    m = "height",
                    n = c.attr(g),
                    j = c.attr(m);
                if (!n || !j) {
                    var o = new Image();
                    o.src = c.attr("src");
                    if (!n) {
                        n = o.width
                    }
                    if (!j) {
                        j = o.height
                    }
                }
                var f = c.width() / 100,
                    k = c.height() / 100,
                    i = c.attr("usemap").replace("#", ""),
                    l = "coords";
                b('map[name="' + i + '"]').find("area").each(function() {
                    var r = b(this);
                    if (!r.data(l)) {
                        r.data(l, r.attr(l))
                    }
                    var q = r.data(l).split(","),
                        p = new Array(q.length);
                    for (var h = 0; h < p.length;
                        ++h) {
                        if (h % 2 === 0) {
                            p[h] = parseInt(((q[h] / n) * 100) * f)
                        } else {
                            p[h] = parseInt(((q[h] / j) * 100) * k)
                        }
                    }
                    r.attr(l, p.toString())
                })
            }).attr("src", c.attr("src"))
        });
        return this
    })(jQuery)
}
jQuery(document).ready(function() {
    var b = navigator.userAgent;
    var c = !!b.match(/iPad/i) || !!b.match(/iPhone/i);
    var a = !!b.match(/WebKit/i);
    var d = c && a && !b.match(/CriOS/i);
    if (d) {
        $("body").on("touchend", "area", function() {
            window.location = $(this).attr("href")
        })
    }
});
jQuery(document).ready(function() {
    var a = jQuery(".ctx-droplist .ctx-droplist-select > select");
    var c = jQuery(".ctx-droplist-btn-search a.ctx-sml-btn");
    var b = jQuery("#ctx-droplist-search");
    jQuery(a).val("all");
    jQuery(a).change(function() {
        var f = jQuery(this).parent().next(".ctx-droplist-btn-go").find("a.ctx-sml-btn");
        if (jQuery(this).val() != "all") {
            var d = jQuery(this).val().split(",");
            var g = d[0];
            var h = d[1];
            if (!(g.indexOf("http") != -1 || (g.indexOf("/content") == 0 && g.indexOf("html") != -1))) {
                g = g + ".html"
            }
            f.attr({
                href: g,
                target: h
            });
            f.removeClass("ctx-small-disabled");
            f.addClass("ctx-blue")
        } else {
            f.attr({
                href: "javascript:void(0)",
                target: "_self"
            });
            f.removeClass("ctx-blue");
            f.addClass("ctx-small-disabled")
        }
    });
    jQuery(a).on("keypress", function() {
        jQuery(this).trigger("change")
    });
    jQuery(c).click(function() {
        var f = jQuery(b).val();
        if (f == "Search the Knowledge Center") {
            jQuery(this).attr({
                href: "http://support.citrix.com/search/basic/",
                target: "_blank"
            })
        } else {
            var d = "http://support.citrix.com/search/basic/?searchQuery=" + f;
            jQuery(this).attr({
                href: d,
                target: "_blank"
            })
        }
    });
    jQuery(a).keydown(function(d) {
        if (d.which == 13 || d.keyCode == 13) {
            jQuery(this).parent().next(".ctx-droplist-btn-go").find("a.ctx-small-btn")[0].click()
        }
    })
});
(function(f) {
    function d(h) {
        var g = /(https?:\/\/[^\s]+)/g;
        return h.replace(g, function(i) {
            return '<a target="_blank" href="' + i + '">' + i + "</a>"
        })
    }

    function a(h) {
        var g = /@(\w){1,15}/g;
        return h.replace(g, function(i) {
            return '<a target="_blank" href="https://twitter.com/' + i + '">' + i + "</a>"
        })
    }

    function c(h) {
        var g = /\S*#(?:\[[^\]]+\]|\S+)/g;
        return h.replace(g, function(i) {
            i = i.replace("#", "");
            return '<a target="_blank" href="https://twitter.com/hashtag/' + i + '">#' + i + "</a>"
        })
    }

    function b(g) {
        g.find(".tweet").each(function() {
            var h = d(f(this).text());
            h = a(h);
            h = c(h);
            f(this).html(h)
        })
    }
    f(document).ready(function() {
        var g = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
        f(".ctx-twitter-feed").each(function() {
            var h = f(this),
                i = g + h.data("json-path");
            f.get(i, {
                title: h.data("title"),
                feed: h.data("feed")
            }, function(j) {
                h.find(".twitter-feed-inner").html(j);
                b(h)
            })
        })
    })
}(jQuery));
(function(a) {
    a.fn.ctxSuperTabs = function() {
        var b = 600;
        return this.each(function() {
            var f = a(this),
                n = f.find(".ctx-super-tabs-container"),
                g = n.find(".ctx-super-tab-label"),
                k = n.find(".ctx-super-tab-content");
            var j = function() {
                return k.find(".ctx-super-tab-arrow").first().css("position") === "static"
            };
            var l = function() {
                g.each(function() {
                    var t = a(this),
                        r = a(this).next(),
                        q = r.find(".ctx-super-tab-arrow svg"),
                        p = t.position().left,
                        o = t.find("a").outerWidth(),
                        u = q.width(),
                        s = p + o / 2 - u / 2 - 15;
                    if (n.width() >= 1920) {
                        s -= ((a("html").width() - n.width()) / 2)
                    }
                    r.find(".ctx-super-tab-arrow svg").css("left", s + "px")
                })
            };
            var m = function(o) {
                o.addClass("active").next().show().find(".ctx-super-tab-inner-content").show()
            };
            var c = function(o) {
                o.addClass("active").next().show().find(".ctx-super-tab-inner-content").fadeIn(b);
                CTX_Layout_Tool.handleAnchorContent();
                a(".ctx-anchored-content").hide();
                setTimeout(function() {
                    CTX_Layout_Tool.handleAnchorContent();
                    a(".ctx-anchored-content").show()
                }, 100)
            };
            var i = function(p) {
                var o = p.next();
                o.find(".ctx-super-tab-inner-content").hide();
                o.hide();
                p.removeClass("active")
            };
            var d = function() {
                l();
                var q = (/^#tab-\d{4,5}$/.test(location.hash)) ? location.hash : "",
                    r = g.first();
                if (q !== "") {
                    var p = q.replace("#tab-", ""),
                        o = g.filter('[data-tab="' + p + '"]');
                    if (o.length > 0) {
                        r = o
                    }
                }
                c(r)
            };
            var h = function() {
                var o = g.filter(".active"),
                    p = o.length;
                if (!j() && p > 1) {
                    o.each(function(q) {
                        if (q > 0) {
                            i(a(this))
                        }
                    })
                }
            };
            g.each(function() {
                a(this).on("click", function() {
                    var q = a(this),
                        p = q.hasClass("active"),
                        o = j();
                    if (!o && p) {
                        return
                    }
                    if (o) {
                        if (p) {
                            i(q)
                        } else {
                            c(q)
                        }
                    } else {
                        g.each(function() {
                            i(a(this))
                        });
                        c(q)
                    }
                })
            });
            a(window).on("resize", function() {
                l();
                h()
            });
            a(document).ready(d)
        })
    };
    a(document).ready(function() {
        a(".ctx-super-tabs").ctxSuperTabs()
    })
})($);
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value: function(b) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined')
            }
            var g = Object(this);
            var a = g.length >>> 0;
            if (typeof b !== "function") {
                throw new TypeError("predicate must be a function")
            }
            var c = arguments[1];
            var d = 0;
            while (d < a) {
                var f = g[d];
                if (b.call(c, f, d, g)) {
                    return f
                }
                d++
            }
            return undefined
        },
        configurable: true,
        writable: true
    })
}(function(a) {
    a(document).ready(function() {
        var b;
        a(".layout-tool").each(function(d, f) {
            b = a(this);
            if (b.find(".target .campaign").length > 1) {
                b.find(".ctx-teaser-spinner").hide();
                b.find(".ctx-layout-spinner").show()
            } else {
                b.find(".ctx-layout-spinner").hide();
                b.find(".ctx-teaser-spinner").show()
            }
        });
        var c;
        a(".parbase.target").each(function(d, f) {
            c = a(f);
            if (c.parents(".layout-tool").length === 0) {
                c.find(".ctx-teaser-spinner").show()
            }
        })
    });
    a(document).on("target-dom-loaded", function(c, b) {
        a(".ctx-teaser-spinner").hide();
        a(".ctx-layout-spinner").hide()
    })
})(jQuery);
(function(a) {
    a(document).ready(function() {
        CTX.utils.text.handleAnchorLinks()
    })
})(jQuery);
$(document).ready(function() {
    var a = function(j) {
        var i = j;
        var f = $(".close-message-visitor", i);
        var l = $(".ctx-location-notify", i);
        var d = function() {
            i.slideUp()
        };
        var h = function() {
            var m = CTX.utils.globalMsg.confirmedCookie;
            $.cookie(m, 1, {
                expires: 36500,
                path: "/"
            });
            d()
        };
        var k = function() {
            f.click(d);
            l.click(h)
        };
        var g = function() {
            var n = CTX.utils.globalMsg.languageCookie;
            var m = i.data("lang");
            if (m && !$.cookie(n)) {
                $.cookie(n, m.toUpperCase(), {
                    expires: 10,
                    path: "/"
                })
            }
        };
        k();
        g();
        i.slideDown()
    };
    if (CTX.utils.globalMsg.isAllowedHost(location.host) && !CTX.utils.globalMsg.popupConfirmed()) {
        var c = CTX.utils.globalMsg.getLanguage();
        if (c) {
            var b = CTX.utils.globalMsg.getMsgRequest(c);
            b.done(function(d) {
                $("body").prepend(d);
                new a($(".visitor-popup.global-msg"))
            })
        } else {
            if (c == null) {
                $.cookie(CTX.utils.globalMsg.languageCookie, "EN-US", {
                    expires: 10,
                    path: "/"
                })
            }
        }
    }
});