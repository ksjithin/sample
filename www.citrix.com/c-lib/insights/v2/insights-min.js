(function(e) {
    "use strict";

    function t(e, t) {
        this.openid = e, this.sessionid = t, this.toString = function() {
            return "XApiActor [openId=" + this.openid + " sessionId=" + this.sessionid + "]"
        }
    }

    function n(e) {
        this.display = e, this.toString = function() {
            return "XApiVerb [display=" + this.display + "]"
        }
    }

    function r(e, t, n) {
        this.definition = {
            name: e,
            description: t || e,
            title: n || p.getPageTitle(),
            url: document.URL
        }, this.toString = function() {
            return "XApiObject [definition_name=" + this.definition.name + "definition_desc=" + this.definition.description + "definition_title=" + this.definition.title + "definition_url=" + this.definition.url + "]"
        }
    }

    function i(e, i, o, s, a, d, c, u, h, g) {
        this.id = e, this.actor = new t(i, h), this.verb = new n(o), this.object = new r(s, a, u), this.timestamp = d, this.referrer = p.getPageReferrer(), this.context = c || [], this.context.platform = e, this.context.insightsinfo = {
            frameworksource: f,
            frameworksourceversion: l
        }, this.context.sso = {
            id1: g[0],
            id2: g[1]
        }, this.context.browser = window.navigator.userAgent;
        var v = p.readCookie("_ga");
        this.gaClientId = p.getGAClientID(v);
        var m = p.readCookie("_mkto_trk");
        this.marketoId = p.isValid(m) ? m : "", this.toString = function() {
            return "XApiEvent [id=" + e + " object=" + this.actor + " action=" + this.verb + " value=" + this.object + " timestamp=" + this.timestamp + "referrer" + this.referrer + " gaClientId=" + this.gaClientId + " marketoId=" + this.marketoId + "]"
        }
    }

    function o(e, t, n) {
        this.id = e, this.mock = "_mock_" === e, this.myCitrixHashIds = n || [], this.session = t;
        var r = this;
        this.send = u(function(t, n, o, s, a, c) {
            if ("true" == p.readCookie("insight_optout")) return void console.log("Insights tracking has been opted out by the user. Hence not sending any event.");
            if (a = a || {}, p.isValid(t) || (t = "anonymous"), 0 === r.myCitrixHashIds.length) {
                var u = p.readCookie("MyCitrixHash");
                if (null !== u) {
                    for (var l = u.split("&"), f = {
                            id1: "",
                            id2: ""
                        }, g = 0; g < l.length; g++) {
                        var v = l[g];
                        0 === v.indexOf("ID1") && (f.id1 = v.substr(4)), 0 === v.indexOf("ID2") && (f.id2 = v.substr(4))
                    }
                    r.myCitrixHashIds = [f.id1, f.id2]
                }
            }
            if (!p.validateArgs([n, o])) throw new Error("Illegal Argument Error: Expected non-null arguments");
            h.Verbs[n] ? p.consoleTracer("Sending canned verb:" + n) : p.consoleTracer("Sending custom verb:" + n + " You should try a canned verb that meets your needs from InsightsApi.Verbs");
            var m = p.getISODateString(),
                x = Object.freeze(new i(e, t, n, o, s, m, a, c, r.session, r.myCitrixHashIds));
            return p.consoleTracer(x.toString()), d(r, x), x
        }, 3), this.isMock = function() {
            return this.mock
        }, this.getSessionToken = function() {
            return this.session
        }
    }

    function s(e, t, n) {
        var r = window.$ || window.jQuery,
            i = C[x];
        p.consoleTracer("Posting event to: " + i), r.ajax({
            type: "POST",
            url: i,
            data: e,
            success: t,
            error: n,
            contentType: "text/plain",
            dataType: "json",
            xhrFields: {
                withCredentials: !0
            },
            beforeSend: function(e) {
                e.setRequestHeader("Insights-Csrf", p.generateCsrt(10))
            },
            statusCode: {
                404: function() {
                    p.consoleTracer("Error received when sending API call: 404")
                }
            }
        })
    }

    function a(e, t, n) {
        p.consoleTracer("JQuery disabled. Using XHR");
        var r = new XMLHttpRequest;
        r.onreadystatechange = function() {
            switch (r.readyState) {
                case 2:
                    p.consoleTracer("Sending native XHR event");
                    break;
                case 3:
                    p.consoleTracer("Event has been sent, loading response...");
                    break;
                case 4:
                    200 == r.status && (p.consoleTracer("Native XHR successfully sent!"), t()), r.status > 400 && (p.consoleTracer("Error sending native XHR event"), n())
            }
        };
        var i = p.makeUnique(C[x]);
        p.consoleTracer("Posting event to: " + i), r.open("POST", i, !0), r.withCredentials = !0, r.setRequestHeader("Content-type", "text/plain"), r.overrideMimeType("application/json"), r.setRequestHeader("Insights-Csrf", p.generateCsrt(10)), r.send(e)
    }

    function d(e, t) {
        var n = JSON.stringify(t, null, 2);
        if (e.isMock()) return void p.consoleTracer("Mock API - Sending JSON event: " + n);
        n = y.encode(n);
        var r = function(e) {
                p.consoleTracer("API call sent successfully")
            },
            i = function(e) {
                p.consoleTracer("Error sending API event")
            };
        p.isJQueryEnabled() ? s(n, r, i) : a(n, r, i), console.info("Event sent")
    }

    function c(e) {
        var t = g.slice.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(g.slice.call(arguments)))
        }
    }

    function u(e, t) {
        return t = t || e.length,
            function() {
                if (arguments.length < t) {
                    var n = [e].concat(g.slice.call(arguments));
                    return t - arguments.length > 0 ? u(c.apply(this, n), t - arguments.length) : c.call(this, n)
                }
                return e.apply(this, arguments)
            }
    }
    var l = "2.3.0",
        f = "JS",
        h = h || {};
    h.getVersion = function() {
        return l
    }, h.init = function(e, t, n, r) {
        var i, e = e || window.location.host;
        "true" == p.readCookie("insight_optout") ? console.log("The user has opted out of Insights.") : (i = v.create(), console.log("Insights initialized. Tracking host: " + e + ". Token: " + i));
        var s = p.isValid(t) ? new o(e, i, [t, n]) : new o(e, i);
        if (function() {
                var e = new Boolean(t);
                return r && !0 === r || t && !0 === e.valueOf()
            }()) {
            var a = s.send(null, h.Verbs.visited, window.location.href);
            console.log(a)
        }
        return s
    }, h._mock = function() {
        var e = v.create(),
            t = new o("_mock_", e);
        return t.util = p, t
    }, h.verbose = function() {
        return p.consoleTracer = function(e, t) {
            e && console.log(t)
        }.bind(this, !0), this
    }, h.setEndpoint = function(e) {
        return this
    }, h.setTestEnv = function(e) {
        return x = e || "qa", void 0 === C[x] && (x = "qa"), console.log("Endpoint: " + x), this
    }, h.endpoint = function(e) {
        return console.info("The function endpoint is deprecated!"), h.setEndpoint(e)
    }, h.encode = function(e) {
        return y.encode(e)
    }, h.decode = function(e) {
        return y.decode(e)
    }, h.sessionId = function() {
        return v.create()
    }, h.Verbs = {
        provisioned: "provisioned",
        visited: "visited",
        deleted: "deleted",
        abandoned: "abandoned",
        answered: "answered",
        asked: "asked",
        attempted: "attempted",
        attended: "attended",
        commented: "commented",
        completed: "completed",
        exited: "exited",
        experienced: "experienced",
        failed: "failed",
        imported: "imported",
        initialized: "initialized",
        interacted: "interacted",
        launched: "launched",
        mastered: "mastered",
        passed: "passed",
        preferred: "preferred",
        progressed: "progressed",
        registered: "registered",
        responded: "responded",
        resumed: "resumed",
        satisfied: "satisfied",
        scored: "scored",
        shared: "shared",
        suspended: "suspended",
        terminated: "terminated",
        voided: "voided",
        waived: "waived"
    }, "undefined" != typeof module && module.exports && (module.exports = h), "undefined" == typeof ender && (this.Insights = h), "function" == typeof define && define.amd && define("insights", [], function() {
        return h
    }), o.Verbs = o.Verbs;
    var g = Array.prototype,
        v = function() {
            var e = "insight_session";
            return {
                create: function() {
                    var t = p.readCookie(e);
                    if (!p.isNull(t)) return t;
                    var n = p.generateUUID(),
                        r = n,
                        i = new Date;
                    return i.setTime(i.getTime() + 31536e7), document.cookie = [e, r].join("=") + "; expires=" + i.toGMTString() + "; domain=.citrix.com; path=/", n
                }
            }
        }(),
        p = {};
    p.readCookie = function(e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var i = n[r];
                " " == i.charAt(0);) i = i.substring(1, i.length);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return null
    }, p.generateUUID = function() {
        var e = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
        })
    }, p.generateCsrt = function(e) {
        for (var t = ""; t.length < e - 1;) t += String(p.getRandomInt(0, 9));
        var n = 0,
            r = 0,
            i = t.split("");
        for (i.reverse(); r < e - 1;) {
            var o = parseInt(2 * i[r]);
            o > 9 && (o -= 9), n += o, r != e - 2 && (n += parseInt(i[r + 1])), r += 2
        }
        var s = (10 * (Math.floor(n / 10) + 1) - n) % 10;
        return t += String(s)
    }, p.validateCSRT = function(e) {
        for (var t = [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
            ], n = 0, r = 0, i = e.length - 1; i >= 0; i--) n += t[1 & r++][parseInt(e.substring(i, i + 1))];
        return n % 10 == 0
    }, p.getRandomInt = function(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
    };
    var m = {
        citrix: /^https?:\/\/((([^:\/?#]*)(?::([0-9]+))?))*citrix\.*/,
        savo: /^https?:\/\/((([^:\/?#]*)(?::([0-9]+))?))*citrix.savolab.\.com/,
        citrite: /^https?:\/\/.+citrite\.net/,
        "onelink-translations": /^https?:\/\/((([^:\/?#]*)(?::([0-9]+))?))*citrix.onelink-translations.\.com/
    };
    p.isValidLocation = function(e) {
        for (var t in m)
            if (m[t].test(e)) return !0;
        return !1
    }, p.makeUnique = function(e) {
        return e + "?" + Date.now()
    }, p.consoleTracer = function(e, t) {
        e && console.log(t)
    }.bind(this, !1), p.isNull = function(e) {
        return null === e
    }, p.isUndefined = function(e) {
        return void 0 === e
    }, p.isValid = function(e) {
        return !p.isNull(e) && !p.isUndefined(e)
    }, p.validateArgs = function(e) {
        return e.reduce(function(e, t) {
            return e && p.isValid(t)
        }, !0)
    }, p.isJQueryEnabled = function() {
        return !p.isUndefined(window.jQuery)
    }, p.getISODateString = function() {
        function e(e, t) {
            var n, r;
            for (void 0 !== e && null !== e || (e = 0), void 0 !== t && null !== t || (t = 2), n = Math.pow(10, t - 1), r = e.toString(); e < n && n > 1;) r = "0" + r, n /= 10;
            return r
        }
        var t = new Date;
        return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds()) + "." + e(t.getUTCMilliseconds(), 3) + "Z"
    }, p.getPageTitle = function() {
        return document.getElementsByTagName("title")[0] ? document.getElementsByTagName("title")[0].innerHTML : ""
    }, p.getPageReferrer = function() {
        return "referrer" in document ? document.referrer : ""
    }, p.getGAClientID = function(e) {
        if (!p.isValid(e)) return "";
        var t = e.split(".");
        return 4 != t.length || "" === t[3] ? "" : t[2] + "." + t[3]
    };
    var x = "prod",
        C = {
            dev: "//titan-dev.citrix.com/api/v2/sendInsights",
            qa: "//titan-qa.citrix.com/api/v2/sendInsights",
            prod: "//titan.citrix.com/api/v2/sendInsights"
        },
        y = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t, n, r, i, o, s, a, d = "",
                    c = 0;
                for (e = y._utf8_encode(e); c < e.length;) t = e.charCodeAt(c++), n = e.charCodeAt(c++), r = e.charCodeAt(c++), i = t >> 2, o = (3 & t) << 4 | n >> 4, s = (15 & n) << 2 | r >> 6, a = 63 & r, isNaN(n) ? s = a = 64 : isNaN(r) && (a = 64), d = d + this._keyStr.charAt(i) + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(a);
                return d
            },
            decode: function(e) {
                var t, n, r, i, o, s, a, d = "",
                    c = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) i = this._keyStr.indexOf(e.charAt(c++)), o = this._keyStr.indexOf(e.charAt(c++)), s = this._keyStr.indexOf(e.charAt(c++)), a = this._keyStr.indexOf(e.charAt(c++)), t = i << 2 | o >> 4, n = (15 & o) << 4 | s >> 2, r = (3 & s) << 6 | a, d += String.fromCharCode(t), 64 != s && (d += String.fromCharCode(n)), 64 != a && (d += String.fromCharCode(r));
                return d = y._utf8_decode(d)
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                }
                return t
            },
            _utf8_decode: function(e) {
                for (var t = "", n = 0, r = 0, i = 0, o = 0; n < e.length;) r = e.charCodeAt(n), r < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (i = e.charCodeAt(n + 1), t += String.fromCharCode((31 & r) << 6 | 63 & i), n += 2) : (i = e.charCodeAt(n + 1), o = e.charCodeAt(n + 2), t += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | 63 & o), n += 3);
                return t
            }
        }
}).call(this, window);