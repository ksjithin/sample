/*!
 * jQuery JavaScript Library v1.12.4-aem
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
(function(b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function(c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
}(typeof window !== "undefined" ? window : this, function(bc, aD) {
    var aW = [];
    var m = bc.document;
    var X = aW.slice;
    var aH = aW.concat;
    var w = aW.push;
    var b2 = aW.indexOf;
    var ak = {};
    var x = ak.toString;
    var R = ak.hasOwnProperty;
    var F = {};
    var ap = "1.12.4-aem",
        bP = function(i, cd) {
            return new bP.fn.init(i, cd)
        },
        G = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bZ = /^-ms-/,
        a3 = /-([\da-z])/gi,
        W = function(i, cd) {
            return cd.toUpperCase()
        };
    bP.fn = bP.prototype = {
        jquery: ap,
        constructor: bP,
        selector: "",
        length: 0,
        toArray: function() {
            return X.call(this)
        },
        get: function(i) {
            return i != null ? (i < 0 ? this[i + this.length] : this[i]) : X.call(this)
        },
        pushStack: function(i) {
            var cd = bP.merge(this.constructor(), i);
            cd.prevObject = this;
            cd.context = this.context;
            return cd
        },
        each: function(i) {
            return bP.each(this, i)
        },
        map: function(i) {
            return this.pushStack(bP.map(this, function(ce, cd) {
                return i.call(ce, cd, ce)
            }))
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(cf) {
            var cd = this.length,
                ce = +cf + (cf < 0 ? cd : 0);
            return this.pushStack(ce >= 0 && ce < cd ? [this[ce]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: w,
        sort: aW.sort,
        splice: aW.splice
    };
    bP.extend = bP.fn.extend = function() {
        var cd, cj, ce, cf, cm, ck, ci = arguments[0] || {},
            ch = 1,
            cg = arguments.length,
            cl = false;
        if (typeof ci === "boolean") {
            cl = ci;
            ci = arguments[ch] || {};
            ch++
        }
        if (typeof ci !== "object" && !bP.isFunction(ci)) {
            ci = {}
        }
        if (ch === cg) {
            ci = this;
            ch--
        }
        for (; ch < cg; ch++) {
            if ((cm = arguments[ch]) != null) {
                for (cf in cm) {
                    cd = ci[cf];
                    ce = cm[cf];
                    if (cf === "__proto__" || ci === ce) {
                        continue
                    }
                    if (cl && ce && (bP.isPlainObject(ce) || (cj = bP.isArray(ce)))) {
                        if (cj) {
                            cj = false;
                            ck = cd && bP.isArray(cd) ? cd : []
                        } else {
                            ck = cd && bP.isPlainObject(cd) ? cd : {}
                        }
                        ci[cf] = bP.extend(cl, ck, ce)
                    } else {
                        if (ce !== undefined) {
                            ci[cf] = ce
                        }
                    }
                }
            }
        }
        return ci
    };
    bP.extend({
        expando: "jQuery" + (ap + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(i) {
            throw new Error(i)
        },
        noop: function() {},
        isFunction: function(i) {
            return bP.type(i) === "function"
        },
        isArray: Array.isArray || function(i) {
            return bP.type(i) === "array"
        },
        isWindow: function(i) {
            return i != null && i == i.window
        },
        isNumeric: function(cd) {
            var i = cd && cd.toString();
            return !bP.isArray(cd) && (i - parseFloat(i) + 1) >= 0
        },
        isEmptyObject: function(cd) {
            var i;
            for (i in cd) {
                return false
            }
            return true
        },
        isPlainObject: function(ce) {
            var i;
            if (!ce || bP.type(ce) !== "object" || ce.nodeType || bP.isWindow(ce)) {
                return false
            }
            try {
                if (ce.constructor && !R.call(ce, "constructor") && !R.call(ce.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (cd) {
                return false
            }
            if (!F.ownFirst) {
                for (i in ce) {
                    return R.call(ce, i)
                }
            }
            for (i in ce) {}
            return i === undefined || R.call(ce, i)
        },
        type: function(i) {
            if (i == null) {
                return i + ""
            }
            return typeof i === "object" || typeof i === "function" ? ak[x.call(i)] || "object" : typeof i
        },
        globalEval: function(i) {
            if (i && bP.trim(i)) {
                (bc.execScript || function(cd) {
                    bc["eval"].call(bc, cd)
                })(i)
            }
        },
        camelCase: function(i) {
            return i.replace(bZ, "ms-").replace(a3, W)
        },
        nodeName: function(cd, i) {
            return cd.nodeName && cd.nodeName.toLowerCase() === i.toLowerCase()
        },
        each: function(cf, cg) {
            var ce, cd = 0;
            if (aB(cf)) {
                ce = cf.length;
                for (; cd < ce; cd++) {
                    if (cg.call(cf[cd], cd, cf[cd]) === false) {
                        break
                    }
                }
            } else {
                for (cd in cf) {
                    if (cg.call(cf[cd], cd, cf[cd]) === false) {
                        break
                    }
                }
            }
            return cf
        },
        trim: function(i) {
            return i == null ? "" : (i + "").replace(G, "")
        },
        makeArray: function(i, ce) {
            var cd = ce || [];
            if (i != null) {
                if (aB(Object(i))) {
                    bP.merge(cd, typeof i === "string" ? [i] : i)
                } else {
                    w.call(cd, i)
                }
            }
            return cd
        },
        inArray: function(cg, ce, cf) {
            var cd;
            if (ce) {
                if (b2) {
                    return b2.call(ce, cg, cf)
                }
                cd = ce.length;
                cf = cf ? cf < 0 ? Math.max(0, cd + cf) : cf : 0;
                for (; cf < cd; cf++) {
                    if (cf in ce && ce[cf] === cg) {
                        return cf
                    }
                }
            }
            return -1
        },
        merge: function(ch, cf) {
            var cd = +cf.length,
                ce = 0,
                cg = ch.length;
            while (ce < cd) {
                ch[cg++] = cf[ce++]
            }
            if (cd !== cd) {
                while (cf[ce] !== undefined) {
                    ch[cg++] = cf[ce++]
                }
            }
            ch.length = cg;
            return ch
        },
        grep: function(cd, ck, ch) {
            var cj, cg = [],
                ce = 0,
                cf = cd.length,
                ci = !ch;
            for (; ce < cf; ce++) {
                cj = !ck(cd[ce], ce);
                if (cj !== ci) {
                    cg.push(cd[ce])
                }
            }
            return cg
        },
        map: function(ce, cj, cd) {
            var ch, ci, cg = 0,
                cf = [];
            if (aB(ce)) {
                ch = ce.length;
                for (; cg < ch; cg++) {
                    ci = cj(ce[cg], cg, cd);
                    if (ci != null) {
                        cf.push(ci)
                    }
                }
            } else {
                for (cg in ce) {
                    ci = cj(ce[cg], cg, cd);
                    if (ci != null) {
                        cf.push(ci)
                    }
                }
            }
            return aH.apply([], cf)
        },
        guid: 1,
        proxy: function(cg, cf) {
            var i, ce, cd;
            if (typeof cf === "string") {
                cd = cg[cf];
                cf = cg;
                cg = cd
            }
            if (!bP.isFunction(cg)) {
                return undefined
            }
            i = X.call(arguments, 2);
            ce = function() {
                return cg.apply(cf || this, i.concat(X.call(arguments)))
            };
            ce.guid = cg.guid = cg.guid || bP.guid++;
            return ce
        },
        now: function() {
            return +(new Date())
        },
        support: F
    });
    if (typeof Symbol === "function") {
        bP.fn[Symbol.iterator] = aW[Symbol.iterator]
    }
    bP.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(ce, cd) {
        ak["[object " + cd + "]"] = cd.toLowerCase()
    });

    function aB(ce) {
        var cd = !!ce && "length" in ce && ce.length,
            i = bP.type(ce);
        if (i === "function" || bP.isWindow(ce)) {
            return false
        }
        return i === "array" || cd === 0 || typeof cd === "number" && cd > 0 && (cd - 1) in ce
    }
    var l =
        /*!
         * Sizzle CSS Selector Engine v2.2.1
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2015-10-17
         */
        (function(dk) {
            var cE, dn, ct, cN, cQ, cn, c2, dm, dt, cO, c3, c5, cI, cu, de, c9, dl, ck, cL, dg = "sizzle" + 1 * new Date(),
                cP = dk.document,
                dp = 0,
                da = 0,
                cf = cG(),
                df = cG(),
                cM = cG(),
                cK = function(du, i) {
                    if (du === i) {
                        c3 = true
                    }
                    return 0
                },
                cW = 1 << 31,
                cU = ({}).hasOwnProperty,
                di = [],
                dj = di.pop,
                cS = di.push,
                cd = di.push,
                cs = di.slice,
                cj = function(dx, dw) {
                    var dv = 0,
                        du = dx.length;
                    for (; dv < du; dv++) {
                        if (dx[dv] === dw) {
                            return dv
                        }
                    }
                    return -1
                },
                ce = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                cv = "[\\x20\\t\\r\\n\\f]",
                cR = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                dc = "\\[" + cv + "*(" + cR + ")(?:" + cv + "*([*^$|!~]?=)" + cv + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + cR + "))|)" + cv + "*\\]",
                cq = ":(" + cR + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dc + ")*)|.*)\\)|)",
                cA = new RegExp(cv + "+", "g"),
                cx = new RegExp("^" + cv + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cv + "+$", "g"),
                cB = new RegExp("^" + cv + "*," + cv + "*"),
                cH = new RegExp("^" + cv + "*([>+~]|" + cv + ")" + cv + "*"),
                cz = new RegExp("=" + cv + "*([^\\]'\"]*?)" + cv + "*\\]", "g"),
                cY = new RegExp(cq),
                c0 = new RegExp("^" + cR + "$"),
                c8 = {
                    ID: new RegExp("^#(" + cR + ")"),
                    CLASS: new RegExp("^\\.(" + cR + ")"),
                    TAG: new RegExp("^(" + cR + "|[*])"),
                    ATTR: new RegExp("^" + dc),
                    PSEUDO: new RegExp("^" + cq),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cv + "*(even|odd|(([+-]|)(\\d*)n|)" + cv + "*(?:([+-]|)" + cv + "*(\\d+)|))" + cv + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ce + ")$", "i"),
                    needsContext: new RegExp("^" + cv + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cv + "*((?:-\\d)?\\d*)" + cv + "*\\)|)(?=[^-]|$)", "i")
                },
                ci = /^(?:input|select|textarea|button)$/i,
                cr = /^h\d$/i,
                cV = /^[^{]+\{\s*\[native \w/,
                cX = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                c7 = /[+~]/,
                cT = /'|\\/g,
                cy = new RegExp("\\\\([\\da-f]{1,6}" + cv + "?|(" + cv + ")|.)", "ig"),
                db = function(i, dw, du) {
                    var dv = "0x" + dw - 65536;
                    return dv !== dv || du ? dw : dv < 0 ? String.fromCharCode(dv + 65536) : String.fromCharCode(dv >> 10 | 55296, dv & 1023 | 56320)
                },
                ds = function() {
                    c5()
                };
            try {
                cd.apply((di = cs.call(cP.childNodes)), cP.childNodes);
                di[cP.childNodes.length].nodeType
            } catch (cJ) {
                cd = {
                    apply: di.length ? function(du, i) {
                        cS.apply(du, cs.call(i))
                    } : function(dx, dw) {
                        var du = dx.length,
                            dv = 0;
                        while ((dx[du++] = dw[dv++])) {}
                        dx.length = du - 1
                    }
                }
            }

            function cC(dB, dv, dE, dH) {
                var dz, dF, dy, du, dI, dG, dx, dC, dw = dv && dv.ownerDocument,
                    dD = dv ? dv.nodeType : 9;
                dE = dE || [];
                if (typeof dB !== "string" || !dB || dD !== 1 && dD !== 9 && dD !== 11) {
                    return dE
                }
                if (!dH) {
                    if ((dv ? dv.ownerDocument || dv : cP) !== cI) {
                        c5(dv)
                    }
                    dv = dv || cI;
                    if (de) {
                        if (dD !== 11 && (dG = cX.exec(dB))) {
                            if ((dz = dG[1])) {
                                if (dD === 9) {
                                    if ((dy = dv.getElementById(dz))) {
                                        if (dy.id === dz) {
                                            dE.push(dy);
                                            return dE
                                        }
                                    } else {
                                        return dE
                                    }
                                } else {
                                    if (dw && (dy = dw.getElementById(dz)) && cL(dv, dy) && dy.id === dz) {
                                        dE.push(dy);
                                        return dE
                                    }
                                }
                            } else {
                                if (dG[2]) {
                                    cd.apply(dE, dv.getElementsByTagName(dB));
                                    return dE
                                } else {
                                    if ((dz = dG[3]) && dn.getElementsByClassName && dv.getElementsByClassName) {
                                        cd.apply(dE, dv.getElementsByClassName(dz));
                                        return dE
                                    }
                                }
                            }
                        }
                        if (dn.qsa && !cM[dB + " "] && (!c9 || !c9.test(dB))) {
                            if (dD !== 1) {
                                dw = dv;
                                dC = dB
                            } else {
                                if (dv.nodeName.toLowerCase() !== "object") {
                                    if ((du = dv.getAttribute("id"))) {
                                        du = du.replace(cT, "\\$&")
                                    } else {
                                        dv.setAttribute("id", (du = dg))
                                    }
                                    dx = cn(dB);
                                    dF = dx.length;
                                    dI = c0.test(du) ? "#" + du : "[id='" + du + "']";
                                    while (dF--) {
                                        dx[dF] = dI + " " + co(dx[dF])
                                    }
                                    dC = dx.join(",");
                                    dw = c7.test(dB) && cZ(dv.parentNode) || dv
                                }
                            }
                            if (dC) {
                                try {
                                    cd.apply(dE, dw.querySelectorAll(dC));
                                    return dE
                                } catch (dA) {} finally {
                                    if (du === dg) {
                                        dv.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                }
                return dm(dB.replace(cx, "$1"), dv, dE, dH)
            }

            function cG() {
                var du = [];

                function i(dv, dw) {
                    if (du.push(dv + " ") > ct.cacheLength) {
                        delete i[du.shift()]
                    }
                    return (i[dv + " "] = dw)
                }
                return i
            }

            function cp(i) {
                i[dg] = true;
                return i
            }

            function cl(i) {
                var dv = cI.createElement("div");
                try {
                    return !!i(dv)
                } catch (du) {
                    return false
                } finally {
                    if (dv.parentNode) {
                        dv.parentNode.removeChild(dv)
                    }
                    dv = null
                }
            }

            function dq(dv, dx) {
                var du = dv.split("|"),
                    dw = du.length;
                while (dw--) {
                    ct.attrHandle[du[dw]] = dx
                }
            }

            function cg(du, i) {
                var dw = i && du,
                    dv = dw && du.nodeType === 1 && i.nodeType === 1 && (~i.sourceIndex || cW) - (~du.sourceIndex || cW);
                if (dv) {
                    return dv
                }
                if (dw) {
                    while ((dw = dw.nextSibling)) {
                        if (dw === i) {
                            return -1
                        }
                    }
                }
                return du ? 1 : -1
            }

            function cD(i) {
                return function(dv) {
                    var du = dv.nodeName.toLowerCase();
                    return du === "input" && dv.type === i
                }
            }

            function ch(i) {
                return function(dv) {
                    var du = dv.nodeName.toLowerCase();
                    return (du === "input" || du === "button") && dv.type === i
                }
            }

            function dd(i) {
                return cp(function(du) {
                    du = +du;
                    return cp(function(dv, dz) {
                        var dx, dw = i([], dv.length, du),
                            dy = dw.length;
                        while (dy--) {
                            if (dv[(dx = dw[dy])]) {
                                dv[dx] = !(dz[dx] = dv[dx])
                            }
                        }
                    })
                })
            }

            function cZ(i) {
                return i && typeof i.getElementsByTagName !== "undefined" && i
            }
            dn = cC.support = {};
            cQ = cC.isXML = function(i) {
                var du = i && (i.ownerDocument || i).documentElement;
                return du ? du.nodeName !== "HTML" : false
            };
            c5 = cC.setDocument = function(dv) {
                var i, du, dw = dv ? dv.ownerDocument || dv : cP;
                if (dw === cI || dw.nodeType !== 9 || !dw.documentElement) {
                    return cI
                }
                cI = dw;
                cu = cI.documentElement;
                de = !cQ(cI);
                if ((du = cI.defaultView) && du.top !== du) {
                    if (du.addEventListener) {
                        du.addEventListener("unload", ds, false)
                    } else {
                        if (du.attachEvent) {
                            du.attachEvent("onunload", ds)
                        }
                    }
                }
                dn.attributes = cl(function(dx) {
                    dx.className = "i";
                    return !dx.getAttribute("className")
                });
                dn.getElementsByTagName = cl(function(dx) {
                    dx.appendChild(cI.createComment(""));
                    return !dx.getElementsByTagName("*").length
                });
                dn.getElementsByClassName = cV.test(cI.getElementsByClassName);
                dn.getById = cl(function(dx) {
                    cu.appendChild(dx).id = dg;
                    return !cI.getElementsByName || !cI.getElementsByName(dg).length
                });
                if (dn.getById) {
                    ct.find.ID = function(dz, dy) {
                        if (typeof dy.getElementById !== "undefined" && de) {
                            var dx = dy.getElementById(dz);
                            return dx ? [dx] : []
                        }
                    };
                    ct.filter.ID = function(dy) {
                        var dx = dy.replace(cy, db);
                        return function(dz) {
                            return dz.getAttribute("id") === dx
                        }
                    }
                } else {
                    delete ct.find.ID;
                    ct.filter.ID = function(dy) {
                        var dx = dy.replace(cy, db);
                        return function(dA) {
                            var dz = typeof dA.getAttributeNode !== "undefined" && dA.getAttributeNode("id");
                            return dz && dz.value === dx
                        }
                    }
                }
                ct.find.TAG = dn.getElementsByTagName ? function(dx, dy) {
                    if (typeof dy.getElementsByTagName !== "undefined") {
                        return dy.getElementsByTagName(dx)
                    } else {
                        if (dn.qsa) {
                            return dy.querySelectorAll(dx)
                        }
                    }
                } : function(dx, dB) {
                    var dC, dA = [],
                        dz = 0,
                        dy = dB.getElementsByTagName(dx);
                    if (dx === "*") {
                        while ((dC = dy[dz++])) {
                            if (dC.nodeType === 1) {
                                dA.push(dC)
                            }
                        }
                        return dA
                    }
                    return dy
                };
                ct.find.CLASS = dn.getElementsByClassName && function(dy, dx) {
                    if (typeof dx.getElementsByClassName !== "undefined" && de) {
                        return dx.getElementsByClassName(dy)
                    }
                };
                dl = [];
                c9 = [];
                if ((dn.qsa = cV.test(cI.querySelectorAll))) {
                    cl(function(dx) {
                        cu.appendChild(dx).innerHTML = "<a id='" + dg + "'></a><select id='" + dg + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                        if (dx.querySelectorAll("[msallowcapture^='']").length) {
                            c9.push("[*^$]=" + cv + "*(?:''|\"\")")
                        }
                        if (!dx.querySelectorAll("[selected]").length) {
                            c9.push("\\[" + cv + "*(?:value|" + ce + ")")
                        }
                        if (!dx.querySelectorAll("[id~=" + dg + "-]").length) {
                            c9.push("~=")
                        }
                        if (!dx.querySelectorAll(":checked").length) {
                            c9.push(":checked")
                        }
                        if (!dx.querySelectorAll("a#" + dg + "+*").length) {
                            c9.push(".#.+[+~]")
                        }
                    });
                    cl(function(dy) {
                        var dx = cI.createElement("input");
                        dx.setAttribute("type", "hidden");
                        dy.appendChild(dx).setAttribute("name", "D");
                        if (dy.querySelectorAll("[name=d]").length) {
                            c9.push("name" + cv + "*[*^$|!~]?=")
                        }
                        if (!dy.querySelectorAll(":enabled").length) {
                            c9.push(":enabled", ":disabled")
                        }
                        dy.querySelectorAll("*,:x");
                        c9.push(",.*:")
                    })
                }
                if ((dn.matchesSelector = cV.test((ck = cu.matches || cu.webkitMatchesSelector || cu.mozMatchesSelector || cu.oMatchesSelector || cu.msMatchesSelector)))) {
                    cl(function(dx) {
                        dn.disconnectedMatch = ck.call(dx, "div");
                        ck.call(dx, "[s!='']:x");
                        dl.push("!=", cq)
                    })
                }
                c9 = c9.length && new RegExp(c9.join("|"));
                dl = dl.length && new RegExp(dl.join("|"));
                i = cV.test(cu.compareDocumentPosition);
                cL = i || cV.test(cu.contains) ? function(dy, dx) {
                    var dA = dy.nodeType === 9 ? dy.documentElement : dy,
                        dz = dx && dx.parentNode;
                    return dy === dz || !!(dz && dz.nodeType === 1 && (dA.contains ? dA.contains(dz) : dy.compareDocumentPosition && dy.compareDocumentPosition(dz) & 16))
                } : function(dy, dx) {
                    if (dx) {
                        while ((dx = dx.parentNode)) {
                            if (dx === dy) {
                                return true
                            }
                        }
                    }
                    return false
                };
                cK = i ? function(dy, dx) {
                    if (dy === dx) {
                        c3 = true;
                        return 0
                    }
                    var dz = !dy.compareDocumentPosition - !dx.compareDocumentPosition;
                    if (dz) {
                        return dz
                    }
                    dz = (dy.ownerDocument || dy) === (dx.ownerDocument || dx) ? dy.compareDocumentPosition(dx) : 1;
                    if (dz & 1 || (!dn.sortDetached && dx.compareDocumentPosition(dy) === dz)) {
                        if (dy === cI || dy.ownerDocument === cP && cL(cP, dy)) {
                            return -1
                        }
                        if (dx === cI || dx.ownerDocument === cP && cL(cP, dx)) {
                            return 1
                        }
                        return cO ? (cj(cO, dy) - cj(cO, dx)) : 0
                    }
                    return dz & 4 ? -1 : 1
                } : function(dy, dx) {
                    if (dy === dx) {
                        c3 = true;
                        return 0
                    }
                    var dE, dB = 0,
                        dD = dy.parentNode,
                        dA = dx.parentNode,
                        dz = [dy],
                        dC = [dx];
                    if (!dD || !dA) {
                        return dy === cI ? -1 : dx === cI ? 1 : dD ? -1 : dA ? 1 : cO ? (cj(cO, dy) - cj(cO, dx)) : 0
                    } else {
                        if (dD === dA) {
                            return cg(dy, dx)
                        }
                    }
                    dE = dy;
                    while ((dE = dE.parentNode)) {
                        dz.unshift(dE)
                    }
                    dE = dx;
                    while ((dE = dE.parentNode)) {
                        dC.unshift(dE)
                    }
                    while (dz[dB] === dC[dB]) {
                        dB++
                    }
                    return dB ? cg(dz[dB], dC[dB]) : dz[dB] === cP ? -1 : dC[dB] === cP ? 1 : 0
                };
                return cI
            };
            cC.matches = function(du, i) {
                return cC(du, null, null, i)
            };
            cC.matchesSelector = function(du, dw) {
                if ((du.ownerDocument || du) !== cI) {
                    c5(du)
                }
                dw = dw.replace(cz, "='$1']");
                if (dn.matchesSelector && de && !cM[dw + " "] && (!dl || !dl.test(dw)) && (!c9 || !c9.test(dw))) {
                    try {
                        var i = ck.call(du, dw);
                        if (i || dn.disconnectedMatch || du.document && du.document.nodeType !== 11) {
                            return i
                        }
                    } catch (dv) {}
                }
                return cC(dw, cI, null, [du]).length > 0
            };
            cC.contains = function(i, du) {
                if ((i.ownerDocument || i) !== cI) {
                    c5(i)
                }
                return cL(i, du)
            };
            cC.attr = function(dv, i) {
                if ((dv.ownerDocument || dv) !== cI) {
                    c5(dv)
                }
                var du = ct.attrHandle[i.toLowerCase()],
                    dw = du && cU.call(ct.attrHandle, i.toLowerCase()) ? du(dv, i, !de) : undefined;
                return dw !== undefined ? dw : dn.attributes || !de ? dv.getAttribute(i) : (dw = dv.getAttributeNode(i)) && dw.specified ? dw.value : null
            };
            cC.error = function(i) {
                throw new Error("Syntax error, unrecognized expression: " + i)
            };
            cC.uniqueSort = function(dw) {
                var dx, dy = [],
                    du = 0,
                    dv = 0;
                c3 = !dn.detectDuplicates;
                cO = !dn.sortStable && dw.slice(0);
                dw.sort(cK);
                if (c3) {
                    while ((dx = dw[dv++])) {
                        if (dx === dw[dv]) {
                            du = dy.push(dv)
                        }
                    }
                    while (du--) {
                        dw.splice(dy[du], 1)
                    }
                }
                cO = null;
                return dw
            };
            cN = cC.getText = function(dy) {
                var dx, dv = "",
                    dw = 0,
                    du = dy.nodeType;
                if (!du) {
                    while ((dx = dy[dw++])) {
                        dv += cN(dx)
                    }
                } else {
                    if (du === 1 || du === 9 || du === 11) {
                        if (typeof dy.textContent === "string") {
                            return dy.textContent
                        } else {
                            for (dy = dy.firstChild; dy; dy = dy.nextSibling) {
                                dv += cN(dy)
                            }
                        }
                    } else {
                        if (du === 3 || du === 4) {
                            return dy.nodeValue
                        }
                    }
                }
                return dv
            };
            ct = cC.selectors = {
                cacheLength: 50,
                createPseudo: cp,
                match: c8,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: true
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: true
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(i) {
                        i[1] = i[1].replace(cy, db);
                        i[3] = (i[3] || i[4] || i[5] || "").replace(cy, db);
                        if (i[2] === "~=") {
                            i[3] = " " + i[3] + " "
                        }
                        return i.slice(0, 4)
                    },
                    CHILD: function(i) {
                        i[1] = i[1].toLowerCase();
                        if (i[1].slice(0, 3) === "nth") {
                            if (!i[3]) {
                                cC.error(i[0])
                            }
                            i[4] = +(i[4] ? i[5] + (i[6] || 1) : 2 * (i[3] === "even" || i[3] === "odd"));
                            i[5] = +((i[7] + i[8]) || i[3] === "odd")
                        } else {
                            if (i[3]) {
                                cC.error(i[0])
                            }
                        }
                        return i
                    },
                    PSEUDO: function(du) {
                        var i, dv = !du[6] && du[2];
                        if (c8.CHILD.test(du[0])) {
                            return null
                        }
                        if (du[3]) {
                            du[2] = du[4] || du[5] || ""
                        } else {
                            if (dv && cY.test(dv) && (i = cn(dv, true)) && (i = dv.indexOf(")", dv.length - i) - dv.length)) {
                                du[0] = du[0].slice(0, i);
                                du[2] = dv.slice(0, i)
                            }
                        }
                        return du.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(du) {
                        var i = du.replace(cy, db).toLowerCase();
                        return du === "*" ? function() {
                            return true
                        } : function(dv) {
                            return dv.nodeName && dv.nodeName.toLowerCase() === i
                        }
                    },
                    CLASS: function(i) {
                        var du = cf[i + " "];
                        return du || (du = new RegExp("(^|" + cv + ")" + i + "(" + cv + "|$)")) && cf(i, function(dv) {
                            return du.test(typeof dv.className === "string" && dv.className || typeof dv.getAttribute !== "undefined" && dv.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(dv, du, i) {
                        return function(dx) {
                            var dw = cC.attr(dx, dv);
                            if (dw == null) {
                                return du === "!="
                            }
                            if (!du) {
                                return true
                            }
                            dw += "";
                            return du === "=" ? dw === i : du === "!=" ? dw !== i : du === "^=" ? i && dw.indexOf(i) === 0 : du === "*=" ? i && dw.indexOf(i) > -1 : du === "$=" ? i && dw.slice(-i.length) === i : du === "~=" ? (" " + dw.replace(cA, " ") + " ").indexOf(i) > -1 : du === "|=" ? dw === i || dw.slice(0, i.length + 1) === i + "-" : false
                        }
                    },
                    CHILD: function(du, dx, dw, dy, dv) {
                        var dA = du.slice(0, 3) !== "nth",
                            i = du.slice(-4) !== "last",
                            dz = dx === "of-type";
                        return dy === 1 && dv === 0 ? function(dB) {
                            return !!dB.parentNode
                        } : function(dI, dG, dL) {
                            var dB, dE, dO, dJ, dK, dF, dH = dA !== i ? "nextSibling" : "previousSibling",
                                dN = dI.parentNode,
                                dD = dz && dI.nodeName.toLowerCase(),
                                dC = !dL && !dz,
                                dM = false;
                            if (dN) {
                                if (dA) {
                                    while (dH) {
                                        dJ = dI;
                                        while ((dJ = dJ[dH])) {
                                            if (dz ? dJ.nodeName.toLowerCase() === dD : dJ.nodeType === 1) {
                                                return false
                                            }
                                        }
                                        dF = dH = du === "only" && !dF && "nextSibling"
                                    }
                                    return true
                                }
                                dF = [i ? dN.firstChild : dN.lastChild];
                                if (i && dC) {
                                    dJ = dN;
                                    dO = dJ[dg] || (dJ[dg] = {});
                                    dE = dO[dJ.uniqueID] || (dO[dJ.uniqueID] = {});
                                    dB = dE[du] || [];
                                    dK = dB[0] === dp && dB[1];
                                    dM = dK && dB[2];
                                    dJ = dK && dN.childNodes[dK];
                                    while ((dJ = ++dK && dJ && dJ[dH] || (dM = dK = 0) || dF.pop())) {
                                        if (dJ.nodeType === 1 && ++dM && dJ === dI) {
                                            dE[du] = [dp, dK, dM];
                                            break
                                        }
                                    }
                                } else {
                                    if (dC) {
                                        dJ = dI;
                                        dO = dJ[dg] || (dJ[dg] = {});
                                        dE = dO[dJ.uniqueID] || (dO[dJ.uniqueID] = {});
                                        dB = dE[du] || [];
                                        dK = dB[0] === dp && dB[1];
                                        dM = dK
                                    }
                                    if (dM === false) {
                                        while ((dJ = ++dK && dJ && dJ[dH] || (dM = dK = 0) || dF.pop())) {
                                            if ((dz ? dJ.nodeName.toLowerCase() === dD : dJ.nodeType === 1) && ++dM) {
                                                if (dC) {
                                                    dO = dJ[dg] || (dJ[dg] = {});
                                                    dE = dO[dJ.uniqueID] || (dO[dJ.uniqueID] = {});
                                                    dE[du] = [dp, dM]
                                                }
                                                if (dJ === dI) {
                                                    break
                                                }
                                            }
                                        }
                                    }
                                }
                                dM -= dv;
                                return dM === dy || (dM % dy === 0 && dM / dy >= 0)
                            }
                        }
                    },
                    PSEUDO: function(dw, dv) {
                        var i, du = ct.pseudos[dw] || ct.setFilters[dw.toLowerCase()] || cC.error("unsupported pseudo: " + dw);
                        if (du[dg]) {
                            return du(dv)
                        }
                        if (du.length > 1) {
                            i = [dw, dw, "", dv];
                            return ct.setFilters.hasOwnProperty(dw.toLowerCase()) ? cp(function(dz, dB) {
                                var dy, dx = du(dz, dv),
                                    dA = dx.length;
                                while (dA--) {
                                    dy = cj(dz, dx[dA]);
                                    dz[dy] = !(dB[dy] = dx[dA])
                                }
                            }) : function(dx) {
                                return du(dx, 0, i)
                            }
                        }
                        return du
                    }
                },
                pseudos: {
                    not: cp(function(i) {
                        var du = [],
                            dv = [],
                            dw = c2(i.replace(cx, "$1"));
                        return dw[dg] ? cp(function(dy, dD, dB, dz) {
                            var dC, dx = dw(dy, null, dz, []),
                                dA = dy.length;
                            while (dA--) {
                                if ((dC = dx[dA])) {
                                    dy[dA] = !(dD[dA] = dC)
                                }
                            }
                        }) : function(dz, dy, dx) {
                            du[0] = dz;
                            dw(du, null, dx, dv);
                            du[0] = null;
                            return !dv.pop()
                        }
                    }),
                    has: cp(function(i) {
                        return function(du) {
                            return cC(i, du).length > 0
                        }
                    }),
                    contains: cp(function(i) {
                        i = i.replace(cy, db);
                        return function(du) {
                            return (du.textContent || du.innerText || cN(du)).indexOf(i) > -1
                        }
                    }),
                    lang: cp(function(i) {
                        if (!c0.test(i || "")) {
                            cC.error("unsupported lang: " + i)
                        }
                        i = i.replace(cy, db).toLowerCase();
                        return function(dv) {
                            var du;
                            do {
                                if ((du = de ? dv.lang : dv.getAttribute("xml:lang") || dv.getAttribute("lang"))) {
                                    du = du.toLowerCase();
                                    return du === i || du.indexOf(i + "-") === 0
                                }
                            } while ((dv = dv.parentNode) && dv.nodeType === 1);
                            return false
                        }
                    }),
                    target: function(i) {
                        var du = dk.location && dk.location.hash;
                        return du && du.slice(1) === i.id
                    },
                    root: function(i) {
                        return i === cu
                    },
                    focus: function(i) {
                        return i === cI.activeElement && (!cI.hasFocus || cI.hasFocus()) && !!(i.type || i.href || ~i.tabIndex)
                    },
                    enabled: function(i) {
                        return i.disabled === false
                    },
                    disabled: function(i) {
                        return i.disabled === true
                    },
                    checked: function(i) {
                        var du = i.nodeName.toLowerCase();
                        return (du === "input" && !!i.checked) || (du === "option" && !!i.selected)
                    },
                    selected: function(i) {
                        if (i.parentNode) {
                            i.parentNode.selectedIndex
                        }
                        return i.selected === true
                    },
                    empty: function(i) {
                        for (i = i.firstChild; i; i = i.nextSibling) {
                            if (i.nodeType < 6) {
                                return false
                            }
                        }
                        return true
                    },
                    parent: function(i) {
                        return !ct.pseudos.empty(i)
                    },
                    header: function(i) {
                        return cr.test(i.nodeName)
                    },
                    input: function(i) {
                        return ci.test(i.nodeName)
                    },
                    button: function(du) {
                        var i = du.nodeName.toLowerCase();
                        return i === "input" && du.type === "button" || i === "button"
                    },
                    text: function(du) {
                        var i;
                        return du.nodeName.toLowerCase() === "input" && du.type === "text" && ((i = du.getAttribute("type")) == null || i.toLowerCase() === "text")
                    },
                    first: dd(function() {
                        return [0]
                    }),
                    last: dd(function(i, du) {
                        return [du - 1]
                    }),
                    eq: dd(function(i, dv, du) {
                        return [du < 0 ? du + dv : du]
                    }),
                    even: dd(function(du, dw) {
                        var dv = 0;
                        for (; dv < dw; dv += 2) {
                            du.push(dv)
                        }
                        return du
                    }),
                    odd: dd(function(du, dw) {
                        var dv = 1;
                        for (; dv < dw; dv += 2) {
                            du.push(dv)
                        }
                        return du
                    }),
                    lt: dd(function(du, dx, dw) {
                        var dv = dw < 0 ? dw + dx : dw;
                        for (;
                            --dv >= 0;
                        ) {
                            du.push(dv)
                        }
                        return du
                    }),
                    gt: dd(function(du, dx, dw) {
                        var dv = dw < 0 ? dw + dx : dw;
                        for (;
                            ++dv < dx;
                        ) {
                            du.push(dv)
                        }
                        return du
                    })
                }
            };
            ct.pseudos.nth = ct.pseudos.eq;
            for (cE in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                ct.pseudos[cE] = cD(cE)
            }
            for (cE in {
                    submit: true,
                    reset: true
                }) {
                ct.pseudos[cE] = ch(cE)
            }

            function c1() {}
            c1.prototype = ct.filters = ct.pseudos;
            ct.setFilters = new c1();
            cn = cC.tokenize = function(dx, dC) {
                var du, dy, dA, dB, dz, dv, i, dw = df[dx + " "];
                if (dw) {
                    return dC ? 0 : dw.slice(0)
                }
                dz = dx;
                dv = [];
                i = ct.preFilter;
                while (dz) {
                    if (!du || (dy = cB.exec(dz))) {
                        if (dy) {
                            dz = dz.slice(dy[0].length) || dz
                        }
                        dv.push((dA = []))
                    }
                    du = false;
                    if ((dy = cH.exec(dz))) {
                        du = dy.shift();
                        dA.push({
                            value: du,
                            type: dy[0].replace(cx, " ")
                        });
                        dz = dz.slice(du.length)
                    }
                    for (dB in ct.filter) {
                        if ((dy = c8[dB].exec(dz)) && (!i[dB] || (dy = i[dB](dy)))) {
                            du = dy.shift();
                            dA.push({
                                value: du,
                                type: dB,
                                matches: dy
                            });
                            dz = dz.slice(du.length)
                        }
                    }
                    if (!du) {
                        break
                    }
                }
                return dC ? dz.length : dz ? cC.error(dx) : df(dx, dv).slice(0)
            };

            function co(dx) {
                var dw = 0,
                    dv = dx.length,
                    du = "";
                for (; dw < dv; dw++) {
                    du += dx[dw].value
                }
                return du
            }

            function cw(dx, dv, dw) {
                var i = dv.dir,
                    dy = dw && i === "parentNode",
                    du = da++;
                return dv.first ? function(dB, dA, dz) {
                    while ((dB = dB[i])) {
                        if (dB.nodeType === 1 || dy) {
                            return dx(dB, dA, dz)
                        }
                    }
                } : function(dE, dC, dB) {
                    var dF, dz, dD, dA = [dp, du];
                    if (dB) {
                        while ((dE = dE[i])) {
                            if (dE.nodeType === 1 || dy) {
                                if (dx(dE, dC, dB)) {
                                    return true
                                }
                            }
                        }
                    } else {
                        while ((dE = dE[i])) {
                            if (dE.nodeType === 1 || dy) {
                                dD = dE[dg] || (dE[dg] = {});
                                dz = dD[dE.uniqueID] || (dD[dE.uniqueID] = {});
                                if ((dF = dz[i]) && dF[0] === dp && dF[1] === du) {
                                    return (dA[2] = dF[2])
                                } else {
                                    dz[i] = dA;
                                    if ((dA[2] = dx(dE, dC, dB))) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function dr(i) {
                return i.length > 1 ? function(dx, dw, du) {
                    var dv = i.length;
                    while (dv--) {
                        if (!i[dv](dx, dw, du)) {
                            return false
                        }
                    }
                    return true
                } : i[0]
            }

            function cF(dv, dy, dx) {
                var dw = 0,
                    du = dy.length;
                for (; dw < du; dw++) {
                    cC(dv, dy[dw], dx)
                }
                return dx
            }

            function c6(du, dv, dw, dx, dA) {
                var dy, dD = [],
                    dz = 0,
                    dB = du.length,
                    dC = dv != null;
                for (; dz < dB; dz++) {
                    if ((dy = du[dz])) {
                        if (!dw || dw(dy, dx, dA)) {
                            dD.push(dy);
                            if (dC) {
                                dv.push(dz)
                            }
                        }
                    }
                }
                return dD
            }

            function cm(dv, du, dx, dw, dy, i) {
                if (dw && !dw[dg]) {
                    dw = cm(dw)
                }
                if (dy && !dy[dg]) {
                    dy = cm(dy, i)
                }
                return cp(function(dJ, dG, dB, dI) {
                    var dL, dH, dD, dC = [],
                        dK = [],
                        dA = dG.length,
                        dz = dJ || cF(du || "*", dB.nodeType ? [dB] : dB, []),
                        dE = dv && (dJ || !du) ? c6(dz, dC, dv, dB, dI) : dz,
                        dF = dx ? dy || (dJ ? dv : dA || dw) ? [] : dG : dE;
                    if (dx) {
                        dx(dE, dF, dB, dI)
                    }
                    if (dw) {
                        dL = c6(dF, dK);
                        dw(dL, [], dB, dI);
                        dH = dL.length;
                        while (dH--) {
                            if ((dD = dL[dH])) {
                                dF[dK[dH]] = !(dE[dK[dH]] = dD)
                            }
                        }
                    }
                    if (dJ) {
                        if (dy || dv) {
                            if (dy) {
                                dL = [];
                                dH = dF.length;
                                while (dH--) {
                                    if ((dD = dF[dH])) {
                                        dL.push((dE[dH] = dD))
                                    }
                                }
                                dy(null, (dF = []), dL, dI)
                            }
                            dH = dF.length;
                            while (dH--) {
                                if ((dD = dF[dH]) && (dL = dy ? cj(dJ, dD) : dC[dH]) > -1) {
                                    dJ[dL] = !(dG[dL] = dD)
                                }
                            }
                        }
                    } else {
                        dF = c6(dF === dG ? dF.splice(dA, dF.length) : dF);
                        if (dy) {
                            dy(null, dG, dF, dI)
                        } else {
                            cd.apply(dG, dF)
                        }
                    }
                })
            }

            function dh(dA) {
                var dv, dy, dw, dz = dA.length,
                    dD = ct.relative[dA[0].type],
                    dE = dD || ct.relative[" "],
                    dx = dD ? 1 : 0,
                    dB = cw(function(i) {
                        return i === dv
                    }, dE, true),
                    dC = cw(function(i) {
                        return cj(dv, i) > -1
                    }, dE, true),
                    du = [function(dH, dG, dF) {
                        var i = (!dD && (dF || dG !== dt)) || ((dv = dG).nodeType ? dB(dH, dG, dF) : dC(dH, dG, dF));
                        dv = null;
                        return i
                    }];
                for (; dx < dz; dx++) {
                    if ((dy = ct.relative[dA[dx].type])) {
                        du = [cw(dr(du), dy)]
                    } else {
                        dy = ct.filter[dA[dx].type].apply(null, dA[dx].matches);
                        if (dy[dg]) {
                            dw = ++dx;
                            for (; dw < dz; dw++) {
                                if (ct.relative[dA[dw].type]) {
                                    break
                                }
                            }
                            return cm(dx > 1 && dr(du), dx > 1 && co(dA.slice(0, dx - 1).concat({
                                value: dA[dx - 2].type === " " ? "*" : ""
                            })).replace(cx, "$1"), dy, dx < dw && dh(dA.slice(dx, dw)), dw < dz && dh((dA = dA.slice(dw))), dw < dz && co(dA))
                        }
                        du.push(dy)
                    }
                }
                return dr(du)
            }

            function c4(dw, dv) {
                var i = dv.length > 0,
                    dx = dw.length > 0,
                    du = function(dH, dB, dG, dF, dK) {
                        var dC, dD, dI, dM = 0,
                            dE = "0",
                            dy = dH && [],
                            dN = [],
                            dL = dt,
                            dA = dH || dx && ct.find.TAG("*", dK),
                            dz = (dp += dL == null ? 1 : Math.random() || 0.1),
                            dJ = dA.length;
                        if (dK) {
                            dt = dB === cI || dB || dK
                        }
                        for (; dE !== dJ && (dC = dA[dE]) != null; dE++) {
                            if (dx && dC) {
                                dD = 0;
                                if (!dB && dC.ownerDocument !== cI) {
                                    c5(dC);
                                    dG = !de
                                }
                                while ((dI = dw[dD++])) {
                                    if (dI(dC, dB || cI, dG)) {
                                        dF.push(dC);
                                        break
                                    }
                                }
                                if (dK) {
                                    dp = dz
                                }
                            }
                            if (i) {
                                if ((dC = !dI && dC)) {
                                    dM--
                                }
                                if (dH) {
                                    dy.push(dC)
                                }
                            }
                        }
                        dM += dE;
                        if (i && dE !== dM) {
                            dD = 0;
                            while ((dI = dv[dD++])) {
                                dI(dy, dN, dB, dG)
                            }
                            if (dH) {
                                if (dM > 0) {
                                    while (dE--) {
                                        if (!(dy[dE] || dN[dE])) {
                                            dN[dE] = dj.call(dF)
                                        }
                                    }
                                }
                                dN = c6(dN)
                            }
                            cd.apply(dF, dN);
                            if (dK && !dH && dN.length > 0 && (dM + dv.length) > 1) {
                                cC.uniqueSort(dF)
                            }
                        }
                        if (dK) {
                            dp = dz;
                            dt = dL
                        }
                        return dy
                    };
                return i ? cp(du) : du
            }
            c2 = cC.compile = function(du, dw) {
                var dx, dv = [],
                    dz = [],
                    dy = cM[du + " "];
                if (!dy) {
                    if (!dw) {
                        dw = cn(du)
                    }
                    dx = dw.length;
                    while (dx--) {
                        dy = dh(dw[dx]);
                        if (dy[dg]) {
                            dv.push(dy)
                        } else {
                            dz.push(dy)
                        }
                    }
                    dy = cM(du, c4(dz, dv));
                    dy.selector = du
                }
                return dy
            };
            dm = cC.select = function(dw, du, dx, dA) {
                var dy, dD, dv, dE, dB, dC = typeof dw === "function" && dw,
                    dz = !dA && cn((dw = dC.selector || dw));
                dx = dx || [];
                if (dz.length === 1) {
                    dD = dz[0] = dz[0].slice(0);
                    if (dD.length > 2 && (dv = dD[0]).type === "ID" && dn.getById && du.nodeType === 9 && de && ct.relative[dD[1].type]) {
                        du = (ct.find.ID(dv.matches[0].replace(cy, db), du) || [])[0];
                        if (!du) {
                            return dx
                        } else {
                            if (dC) {
                                du = du.parentNode
                            }
                        }
                        dw = dw.slice(dD.shift().value.length)
                    }
                    dy = c8.needsContext.test(dw) ? 0 : dD.length;
                    while (dy--) {
                        dv = dD[dy];
                        if (ct.relative[(dE = dv.type)]) {
                            break
                        }
                        if ((dB = ct.find[dE])) {
                            if ((dA = dB(dv.matches[0].replace(cy, db), c7.test(dD[0].type) && cZ(du.parentNode) || du))) {
                                dD.splice(dy, 1);
                                dw = dA.length && co(dD);
                                if (!dw) {
                                    cd.apply(dx, dA);
                                    return dx
                                }
                                break
                            }
                        }
                    }
                }(dC || c2(dw, dz))(dA, du, !de, dx, !du || c7.test(dw) && cZ(du.parentNode) || du);
                return dx
            };
            dn.sortStable = dg.split("").sort(cK).join("") === dg;
            dn.detectDuplicates = !!c3;
            c5();
            dn.sortDetached = cl(function(i) {
                return i.compareDocumentPosition(cI.createElement("div")) & 1
            });
            if (!cl(function(i) {
                    i.innerHTML = "<a href='#'></a>";
                    return i.firstChild.getAttribute("href") === "#"
                })) {
                dq("type|href|height|width", function(du, i, dv) {
                    if (!dv) {
                        return du.getAttribute(i, i.toLowerCase() === "type" ? 1 : 2)
                    }
                })
            }
            if (!dn.attributes || !cl(function(i) {
                    i.innerHTML = "<input/>";
                    i.firstChild.setAttribute("value", "");
                    return i.firstChild.getAttribute("value") === ""
                })) {
                dq("value", function(du, i, dv) {
                    if (!dv && du.nodeName.toLowerCase() === "input") {
                        return du.defaultValue
                    }
                })
            }
            if (!cl(function(i) {
                    return i.getAttribute("disabled") == null
                })) {
                dq(ce, function(du, i, dw) {
                    var dv;
                    if (!dw) {
                        return du[i] === true ? i.toLowerCase() : (dv = du.getAttributeNode(i)) && dv.specified ? dv.value : null
                    }
                })
            }
            return cC
        })(bc);
    bP.find = l;
    bP.expr = l.selectors;
    bP.expr[":"] = bP.expr.pseudos;
    bP.uniqueSort = bP.unique = l.uniqueSort;
    bP.text = l.getText;
    bP.isXMLDoc = l.isXML;
    bP.contains = l.contains;
    var af = function(cf, cd, cg) {
        var i = [],
            ce = cg !== undefined;
        while ((cf = cf[cd]) && cf.nodeType !== 9) {
            if (cf.nodeType === 1) {
                if (ce && bP(cf).is(cg)) {
                    break
                }
                i.push(cf)
            }
        }
        return i
    };
    var o = function(ce, cd) {
        var i = [];
        for (; ce; ce = ce.nextSibling) {
            if (ce.nodeType === 1 && ce !== cd) {
                i.push(ce)
            }
        }
        return i
    };
    var z = bP.expr.match.needsContext;
    var a = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
    var aR = /^.[^:#\[\.,]*$/;

    function aY(ce, i, cd) {
        if (bP.isFunction(i)) {
            return bP.grep(ce, function(cg, cf) {
                return !!i.call(cg, cf, cg) !== cd
            })
        }
        if (i.nodeType) {
            return bP.grep(ce, function(cf) {
                return (cf === i) !== cd
            })
        }
        if (typeof i === "string") {
            if (aR.test(i)) {
                return bP.filter(i, ce, cd)
            }
            i = bP.filter(i, ce)
        }
        return bP.grep(ce, function(cf) {
            return (bP.inArray(cf, i) > -1) !== cd
        })
    }
    bP.filter = function(cf, i, ce) {
        var cd = i[0];
        if (ce) {
            cf = ":not(" + cf + ")"
        }
        return i.length === 1 && cd.nodeType === 1 ? bP.find.matchesSelector(cd, cf) ? [cd] : [] : bP.find.matches(cf, bP.grep(i, function(cg) {
            return cg.nodeType === 1
        }))
    };
    bP.fn.extend({
        find: function(ce) {
            var ch, cg = [],
                cf = this,
                cd = cf.length;
            if (typeof ce !== "string") {
                return this.pushStack(bP(ce).filter(function() {
                    for (ch = 0; ch < cd; ch++) {
                        if (bP.contains(cf[ch], this)) {
                            return true
                        }
                    }
                }))
            }
            for (ch = 0; ch < cd; ch++) {
                bP.find(ce, cf[ch], cg)
            }
            cg = this.pushStack(cd > 1 ? bP.unique(cg) : cg);
            cg.selector = this.selector ? this.selector + " " + ce : ce;
            return cg
        },
        filter: function(i) {
            return this.pushStack(aY(this, i || [], false))
        },
        not: function(i) {
            return this.pushStack(aY(this, i || [], true))
        },
        is: function(i) {
            return !!aY(this, typeof i === "string" && z.test(i) ? bP(i) : i || [], false).length
        }
    });
    var y, bA = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        b3 = bP.fn.init = function(i, cf, cd) {
            var ce, cg;
            if (!i) {
                return this
            }
            cd = cd || y;
            if (typeof i === "string") {
                if (i.charAt(0) === "<" && i.charAt(i.length - 1) === ">" && i.length >= 3) {
                    ce = [null, i, null]
                } else {
                    ce = bA.exec(i)
                }
                if (ce && (ce[1] || !cf)) {
                    if (ce[1]) {
                        cf = cf instanceof bP ? cf[0] : cf;
                        bP.merge(this, bP.parseHTML(ce[1], cf && cf.nodeType ? cf.ownerDocument || cf : m, true));
                        if (a.test(ce[1]) && bP.isPlainObject(cf)) {
                            for (ce in cf) {
                                if (bP.isFunction(this[ce])) {
                                    this[ce](cf[ce])
                                } else {
                                    this.attr(ce, cf[ce])
                                }
                            }
                        }
                        return this
                    } else {
                        cg = m.getElementById(ce[2]);
                        if (cg && cg.parentNode) {
                            if (cg.id !== ce[2]) {
                                return y.find(i)
                            }
                            this.length = 1;
                            this[0] = cg
                        }
                        this.context = m;
                        this.selector = i;
                        return this
                    }
                } else {
                    if (!cf || cf.jquery) {
                        return (cf || cd).find(i)
                    } else {
                        return this.constructor(cf).find(i)
                    }
                }
            } else {
                if (i.nodeType) {
                    this.context = this[0] = i;
                    this.length = 1;
                    return this
                } else {
                    if (bP.isFunction(i)) {
                        return typeof cd.ready !== "undefined" ? cd.ready(i) : i(bP)
                    }
                }
            }
            if (i.selector !== undefined) {
                this.selector = i.selector;
                this.context = i.context
            }
            return bP.makeArray(i, this)
        };
    b3.prototype = bP.fn;
    y = bP(m);
    var bC = /^(?:parents|prev(?:Until|All))/,
        bG = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    bP.fn.extend({
        has: function(cg) {
            var cf, ce = bP(cg, this),
                cd = ce.length;
            return this.filter(function() {
                for (cf = 0; cf < cd; cf++) {
                    if (bP.contains(this, ce[cf])) {
                        return true
                    }
                }
            })
        },
        closest: function(ch, cg) {
            var ci, cf = 0,
                ce = this.length,
                cd = [],
                cj = z.test(ch) || typeof ch !== "string" ? bP(ch, cg || this.context) : 0;
            for (; cf < ce; cf++) {
                for (ci = this[cf]; ci && ci !== cg; ci = ci.parentNode) {
                    if (ci.nodeType < 11 && (cj ? cj.index(ci) > -1 : ci.nodeType === 1 && bP.find.matchesSelector(ci, ch))) {
                        cd.push(ci);
                        break
                    }
                }
            }
            return this.pushStack(cd.length > 1 ? bP.uniqueSort(cd) : cd)
        },
        index: function(i) {
            if (!i) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof i === "string") {
                return bP.inArray(this[0], bP(i))
            }
            return bP.inArray(i.jquery ? i[0] : i, this)
        },
        add: function(i, cd) {
            return this.pushStack(bP.uniqueSort(bP.merge(this.get(), bP(i, cd))))
        },
        addBack: function(i) {
            return this.add(i == null ? this.prevObject : this.prevObject.filter(i))
        }
    });

    function a6(cd, i) {
        do {
            cd = cd[i]
        } while (cd && cd.nodeType !== 1);
        return cd
    }
    bP.each({
        parent: function(cd) {
            var i = cd.parentNode;
            return i && i.nodeType !== 11 ? i : null
        },
        parents: function(i) {
            return af(i, "parentNode")
        },
        parentsUntil: function(ce, cd, cf) {
            return af(ce, "parentNode", cf)
        },
        next: function(i) {
            return a6(i, "nextSibling")
        },
        prev: function(i) {
            return a6(i, "previousSibling")
        },
        nextAll: function(i) {
            return af(i, "nextSibling")
        },
        prevAll: function(i) {
            return af(i, "previousSibling")
        },
        nextUntil: function(ce, cd, cf) {
            return af(ce, "nextSibling", cf)
        },
        prevUntil: function(ce, cd, cf) {
            return af(ce, "previousSibling", cf)
        },
        siblings: function(i) {
            return o((i.parentNode || {}).firstChild, i)
        },
        children: function(i) {
            return o(i.firstChild)
        },
        contents: function(i) {
            return bP.nodeName(i, "iframe") ? i.contentDocument || i.contentWindow.document : bP.merge([], i.childNodes)
        }
    }, function(i, cd) {
        bP.fn[i] = function(cg, ce) {
            var cf = bP.map(this, cd, cg);
            if (i.slice(-5) !== "Until") {
                ce = cg
            }
            if (ce && typeof ce === "string") {
                cf = bP.filter(ce, cf)
            }
            if (this.length > 1) {
                if (!bG[i]) {
                    cf = bP.uniqueSort(cf)
                }
                if (bC.test(i)) {
                    cf = cf.reverse()
                }
            }
            return this.pushStack(cf)
        }
    });
    var aM = (/\S+/g);

    function am(cd) {
        var i = {};
        bP.each(cd.match(aM) || [], function(cf, ce) {
            i[ce] = true
        });
        return i
    }
    bP.Callbacks = function(cl) {
        cl = typeof cl === "string" ? am(cl) : bP.extend({}, cl);
        var cg, ce, i, cf, cj = [],
            ch = [],
            ci = -1,
            cd = function() {
                cf = cl.once;
                i = cg = true;
                for (; ch.length; ci = -1) {
                    ce = ch.shift();
                    while (++ci < cj.length) {
                        if (cj[ci].apply(ce[0], ce[1]) === false && cl.stopOnFalse) {
                            ci = cj.length;
                            ce = false
                        }
                    }
                }
                if (!cl.memory) {
                    ce = false
                }
                cg = false;
                if (cf) {
                    if (ce) {
                        cj = []
                    } else {
                        cj = ""
                    }
                }
            },
            ck = {
                add: function() {
                    if (cj) {
                        if (ce && !cg) {
                            ci = cj.length - 1;
                            ch.push(ce)
                        }(function cm(cn) {
                            bP.each(cn, function(cp, co) {
                                if (bP.isFunction(co)) {
                                    if (!cl.unique || !ck.has(co)) {
                                        cj.push(co)
                                    }
                                } else {
                                    if (co && co.length && bP.type(co) !== "string") {
                                        cm(co)
                                    }
                                }
                            })
                        })(arguments);
                        if (ce && !cg) {
                            cd()
                        }
                    }
                    return this
                },
                remove: function() {
                    bP.each(arguments, function(co, cm) {
                        var cn;
                        while ((cn = bP.inArray(cm, cj, cn)) > -1) {
                            cj.splice(cn, 1);
                            if (cn <= ci) {
                                ci--
                            }
                        }
                    });
                    return this
                },
                has: function(cm) {
                    return cm ? bP.inArray(cm, cj) > -1 : cj.length > 0
                },
                empty: function() {
                    if (cj) {
                        cj = []
                    }
                    return this
                },
                disable: function() {
                    cf = ch = [];
                    cj = ce = "";
                    return this
                },
                disabled: function() {
                    return !cj
                },
                lock: function() {
                    cf = true;
                    if (!ce) {
                        ck.disable()
                    }
                    return this
                },
                locked: function() {
                    return !!cf
                },
                fireWith: function(cn, cm) {
                    if (!cf) {
                        cm = cm || [];
                        cm = [cn, cm.slice ? cm.slice() : cm];
                        ch.push(cm);
                        if (!cg) {
                            cd()
                        }
                    }
                    return this
                },
                fire: function() {
                    ck.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return ck
    };
    bP.extend({
        Deferred: function(ce) {
            var cd = [
                    ["resolve", "done", bP.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", bP.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", bP.Callbacks("memory")]
                ],
                cf = "pending",
                cg = {
                    state: function() {
                        return cf
                    },
                    always: function() {
                        i.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var ch = arguments;
                        return bP.Deferred(function(ci) {
                            bP.each(cd, function(ck, cj) {
                                var cl = bP.isFunction(ch[ck]) && ch[ck];
                                i[cj[1]](function() {
                                    var cm = cl && cl.apply(this, arguments);
                                    if (cm && bP.isFunction(cm.promise)) {
                                        cm.promise().progress(ci.notify).done(ci.resolve).fail(ci.reject)
                                    } else {
                                        ci[cj[0] + "With"](this === cg ? ci.promise() : this, cl ? [cm] : arguments)
                                    }
                                })
                            });
                            ch = null
                        }).promise()
                    },
                    promise: function(ch) {
                        return ch != null ? bP.extend(ch, cg) : cg
                    }
                },
                i = {};
            cg.pipe = cg.then;
            bP.each(cd, function(ci, ch) {
                var ck = ch[2],
                    cj = ch[3];
                cg[ch[1]] = ck.add;
                if (cj) {
                    ck.add(function() {
                        cf = cj
                    }, cd[ci ^ 1][2].disable, cd[2][2].lock)
                }
                i[ch[0]] = function() {
                    i[ch[0] + "With"](this === i ? cg : this, arguments);
                    return this
                };
                i[ch[0] + "With"] = ck.fireWith
            });
            cg.promise(i);
            if (ce) {
                ce.call(i, i)
            }
            return i
        },
        when: function(ch) {
            var cf = 0,
                cj = X.call(arguments),
                cd = cj.length,
                ce = cd !== 1 || (ch && bP.isFunction(ch.promise)) ? cd : 0,
                cm = ce === 1 ? ch : bP.Deferred(),
                cg = function(co, cp, cn) {
                    return function(i) {
                        cp[co] = this;
                        cn[co] = arguments.length > 1 ? X.call(arguments) : i;
                        if (cn === cl) {
                            cm.notifyWith(cp, cn)
                        } else {
                            if (!(--ce)) {
                                cm.resolveWith(cp, cn)
                            }
                        }
                    }
                },
                cl, ci, ck;
            if (cd > 1) {
                cl = new Array(cd);
                ci = new Array(cd);
                ck = new Array(cd);
                for (; cf < cd; cf++) {
                    if (cj[cf] && bP.isFunction(cj[cf].promise)) {
                        cj[cf].promise().progress(cg(cf, ci, cl)).done(cg(cf, ck, cj)).fail(cm.reject)
                    } else {
                        --ce
                    }
                }
            }
            if (!ce) {
                cm.resolveWith(ck, cj)
            }
            return cm.promise()
        }
    });
    var ar;
    bP.fn.ready = function(i) {
        bP.ready.promise().done(i);
        return this
    };
    bP.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(i) {
            if (i) {
                bP.readyWait++
            } else {
                bP.ready(true)
            }
        },
        ready: function(i) {
            if (i === true ? --bP.readyWait : bP.isReady) {
                return
            }
            bP.isReady = true;
            if (i !== true && --bP.readyWait > 0) {
                return
            }
            ar.resolveWith(m, [bP]);
            if (bP.fn.triggerHandler) {
                bP(m).triggerHandler("ready");
                bP(m).off("ready")
            }
        }
    });

    function bt() {
        if (m.addEventListener) {
            m.removeEventListener("DOMContentLoaded", b7);
            bc.removeEventListener("load", b7)
        } else {
            m.detachEvent("onreadystatechange", b7);
            bc.detachEvent("onload", b7)
        }
    }

    function b7() {
        if (m.addEventListener || bc.event.type === "load" || m.readyState === "complete") {
            bt();
            bP.ready()
        }
    }
    bP.ready.promise = function(cf) {
        if (!ar) {
            ar = bP.Deferred();
            if (m.readyState === "complete" || (m.readyState !== "loading" && !m.documentElement.doScroll)) {
                bc.setTimeout(bP.ready)
            } else {
                if (m.addEventListener) {
                    m.addEventListener("DOMContentLoaded", b7);
                    bc.addEventListener("load", b7)
                } else {
                    m.attachEvent("onreadystatechange", b7);
                    bc.attachEvent("onload", b7);
                    var ce = false;
                    try {
                        ce = bc.frameElement == null && m.documentElement
                    } catch (cd) {}
                    if (ce && ce.doScroll) {
                        (function i() {
                            if (!bP.isReady) {
                                try {
                                    ce.doScroll("left")
                                } catch (cg) {
                                    return bc.setTimeout(i, 50)
                                }
                                bt();
                                bP.ready()
                            }
                        })()
                    }
                }
            }
        }
        return ar.promise(cf)
    };
    bP.ready.promise();
    var bo;
    for (bo in bP(F)) {
        break
    }
    F.ownFirst = bo === "0";
    F.inlineBlockNeedsLayout = false;
    bP(function() {
        var ce, cf, i, cd;
        i = m.getElementsByTagName("body")[0];
        if (!i || !i.style) {
            return
        }
        cf = m.createElement("div");
        cd = m.createElement("div");
        cd.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        i.appendChild(cd).appendChild(cf);
        if (typeof cf.style.zoom !== "undefined") {
            cf.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
            F.inlineBlockNeedsLayout = ce = cf.offsetWidth === 3;
            if (ce) {
                i.style.zoom = 1
            }
        }
        i.removeChild(cd)
    });
    (function() {
        var cd = m.createElement("div");
        F.deleteExpando = true;
        try {
            delete cd.test
        } catch (i) {
            F.deleteExpando = false
        }
        cd = null
    })();
    var V = function(ce) {
        var cd = bP.noData[(ce.nodeName + " ").toLowerCase()],
            i = +ce.nodeType || 1;
        return i !== 1 && i !== 9 ? false : !cd || cd !== true && ce.getAttribute("classid") === cd
    };
    var bF = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        aX = /([A-Z])/g;

    function bH(ce, cd, cf) {
        if (cf === undefined && ce.nodeType === 1) {
            var i = "data-" + cd.replace(aX, "-$1").toLowerCase();
            cf = ce.getAttribute(i);
            if (typeof cf === "string") {
                try {
                    cf = cf === "true" ? true : cf === "false" ? false : cf === "null" ? null : +cf + "" === cf ? +cf : bF.test(cf) ? bP.parseJSON(cf) : cf
                } catch (cg) {}
                bP.data(ce, cd, cf)
            } else {
                cf = undefined
            }
        }
        return cf
    }

    function Y(cd) {
        var i;
        for (i in cd) {
            if (i === "data" && bP.isEmptyObject(cd[i])) {
                continue
            }
            if (i !== "toJSON") {
                return false
            }
        }
        return true
    }

    function bj(cf, cd, ch, cg) {
        if (!V(cf)) {
            return
        }
        var cj, ci, ck = bP.expando,
            cl = cf.nodeType,
            i = cl ? bP.cache : cf,
            ce = cl ? cf[ck] : cf[ck] && ck;
        if ((!ce || !i[ce] || (!cg && !i[ce].data)) && ch === undefined && typeof cd === "string") {
            return
        }
        if (!ce) {
            if (cl) {
                ce = cf[ck] = aW.pop() || bP.guid++
            } else {
                ce = ck
            }
        }
        if (!i[ce]) {
            i[ce] = cl ? {} : {
                toJSON: bP.noop
            }
        }
        if (typeof cd === "object" || typeof cd === "function") {
            if (cg) {
                i[ce] = bP.extend(i[ce], cd)
            } else {
                i[ce].data = bP.extend(i[ce].data, cd)
            }
        }
        ci = i[ce];
        if (!cg) {
            if (!ci.data) {
                ci.data = {}
            }
            ci = ci.data
        }
        if (ch !== undefined) {
            ci[bP.camelCase(cd)] = ch
        }
        if (typeof cd === "string") {
            cj = ci[cd];
            if (cj == null) {
                cj = ci[bP.camelCase(cd)]
            }
        } else {
            cj = ci
        }
        return cj
    }

    function aj(ch, cf, cd) {
        if (!V(ch)) {
            return
        }
        var cj, cg, ci = ch.nodeType,
            ce = ci ? bP.cache : ch,
            ck = ci ? ch[bP.expando] : bP.expando;
        if (!ce[ck]) {
            return
        }
        if (cf) {
            cj = cd ? ce[ck] : ce[ck].data;
            if (cj) {
                if (!bP.isArray(cf)) {
                    if (cf in cj) {
                        cf = [cf]
                    } else {
                        cf = bP.camelCase(cf);
                        if (cf in cj) {
                            cf = [cf]
                        } else {
                            cf = cf.split(" ")
                        }
                    }
                } else {
                    cf = cf.concat(bP.map(cf, bP.camelCase))
                }
                cg = cf.length;
                while (cg--) {
                    delete cj[cf[cg]]
                }
                if (cd ? !Y(cj) : !bP.isEmptyObject(cj)) {
                    return
                }
            }
        }
        if (!cd) {
            delete ce[ck].data;
            if (!Y(ce[ck])) {
                return
            }
        }
        if (ci) {
            bP.cleanData([ch], true)
        } else {
            if (F.deleteExpando || ce != ce.window) {
                delete ce[ck]
            } else {
                ce[ck] = undefined
            }
        }
    }
    bP.extend({
        cache: {},
        noData: {
            "applet ": true,
            "embed ": true,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(i) {
            i = i.nodeType ? bP.cache[i[bP.expando]] : i[bP.expando];
            return !!i && !Y(i)
        },
        data: function(cd, i, ce) {
            return bj(cd, i, ce)
        },
        removeData: function(cd, i) {
            return aj(cd, i)
        },
        _data: function(cd, i, ce) {
            return bj(cd, i, ce, true)
        },
        _removeData: function(cd, i) {
            return aj(cd, i, true)
        }
    });
    bP.fn.extend({
        data: function(cg, cj) {
            var cf, ce, ci, ch = this[0],
                cd = ch && ch.attributes;
            if (cg === undefined) {
                if (this.length) {
                    ci = bP.data(ch);
                    if (ch.nodeType === 1 && !bP._data(ch, "parsedAttrs")) {
                        cf = cd.length;
                        while (cf--) {
                            if (cd[cf]) {
                                ce = cd[cf].name;
                                if (ce.indexOf("data-") === 0) {
                                    ce = bP.camelCase(ce.slice(5));
                                    bH(ch, ce, ci[ce])
                                }
                            }
                        }
                        bP._data(ch, "parsedAttrs", true)
                    }
                }
                return ci
            }
            if (typeof cg === "object") {
                return this.each(function() {
                    bP.data(this, cg)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                bP.data(this, cg, cj)
            }) : ch ? bH(ch, cg, bP.data(ch, cg)) : undefined
        },
        removeData: function(i) {
            return this.each(function() {
                bP.removeData(this, i)
            })
        }
    });
    bP.extend({
        queue: function(ce, cd, cf) {
            var i;
            if (ce) {
                cd = (cd || "fx") + "queue";
                i = bP._data(ce, cd);
                if (cf) {
                    if (!i || bP.isArray(cf)) {
                        i = bP._data(ce, cd, bP.makeArray(cf))
                    } else {
                        i.push(cf)
                    }
                }
                return i || []
            }
        },
        dequeue: function(ch, cg) {
            cg = cg || "fx";
            var cd = bP.queue(ch, cg),
                ci = cd.length,
                cf = cd.shift(),
                i = bP._queueHooks(ch, cg),
                ce = function() {
                    bP.dequeue(ch, cg)
                };
            if (cf === "inprogress") {
                cf = cd.shift();
                ci--
            }
            if (cf) {
                if (cg === "fx") {
                    cd.unshift("inprogress")
                }
                delete i.stop;
                cf.call(ch, ce, i)
            }
            if (!ci && i) {
                i.empty.fire()
            }
        },
        _queueHooks: function(ce, cd) {
            var i = cd + "queueHooks";
            return bP._data(ce, i) || bP._data(ce, i, {
                empty: bP.Callbacks("once memory").add(function() {
                    bP._removeData(ce, cd + "queue");
                    bP._removeData(ce, i)
                })
            })
        }
    });
    bP.fn.extend({
        queue: function(i, cd) {
            var ce = 2;
            if (typeof i !== "string") {
                cd = i;
                i = "fx";
                ce--
            }
            if (arguments.length < ce) {
                return bP.queue(this[0], i)
            }
            return cd === undefined ? this : this.each(function() {
                var cf = bP.queue(this, i, cd);
                bP._queueHooks(this, i);
                if (i === "fx" && cf[0] !== "inprogress") {
                    bP.dequeue(this, i)
                }
            })
        },
        dequeue: function(i) {
            return this.each(function() {
                bP.dequeue(this, i)
            })
        },
        clearQueue: function(i) {
            return this.queue(i || "fx", [])
        },
        promise: function(cf, cj) {
            var ce, cg = 1,
                ck = bP.Deferred(),
                ci = this,
                cd = this.length,
                ch = function() {
                    if (!(--cg)) {
                        ck.resolveWith(ci, [ci])
                    }
                };
            if (typeof cf !== "string") {
                cj = cf;
                cf = undefined
            }
            cf = cf || "fx";
            while (cd--) {
                ce = bP._data(ci[cd], cf + "queueHooks");
                if (ce && ce.empty) {
                    cg++;
                    ce.empty.add(ch)
                }
            }
            ch();
            return ck.promise(cj)
        }
    });
    (function() {
        var i;
        F.shrinkWrapBlocks = function() {
            if (i != null) {
                return i
            }
            i = false;
            var cf, cd, ce;
            cd = m.getElementsByTagName("body")[0];
            if (!cd || !cd.style) {
                return
            }
            cf = m.createElement("div");
            ce = m.createElement("div");
            ce.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            cd.appendChild(ce).appendChild(cf);
            if (typeof cf.style.zoom !== "undefined") {
                cf.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                cf.appendChild(m.createElement("div")).style.width = "5px";
                i = cf.offsetWidth !== 3
            }
            cd.removeChild(ce);
            return i
        }
    })();
    var aL = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
    var b6 = new RegExp("^(?:([+-])=|)(" + aL + ")([a-z%]*)$", "i");
    var b0 = ["Top", "Right", "Bottom", "Left"];
    var aa = function(cd, i) {
        cd = i || cd;
        return bP.css(cd, "display") === "none" || !bP.contains(cd.ownerDocument, cd)
    };

    function A(cd, i, cg, cl) {
        var cm, ce = 1,
            ci = 20,
            ck = cl ? function() {
                return cl.cur()
            } : function() {
                return bP.css(cd, i, "")
            },
            ch = ck(),
            cj = cg && cg[3] || (bP.cssNumber[i] ? "" : "px"),
            cf = (bP.cssNumber[i] || cj !== "px" && +ch) && b6.exec(bP.css(cd, i));
        if (cf && cf[3] !== cj) {
            cj = cj || cf[3];
            cg = cg || [];
            cf = +ch || 1;
            do {
                ce = ce || ".5";
                cf = cf / ce;
                bP.style(cd, i, cf + cj)
            } while (ce !== (ce = ck() / ch) && ce !== 1 && --ci)
        }
        if (cg) {
            cf = +cf || +ch || 0;
            cm = cg[1] ? cf + (cg[1] + 1) * cg[2] : +cg[2];
            if (cl) {
                cl.unit = cj;
                cl.start = cf;
                cl.end = cm
            }
        }
        return cm
    }
    var aJ = function(cd, ci, ck, cj, cg, cm, cl) {
        var cf = 0,
            ce = cd.length,
            ch = ck == null;
        if (bP.type(ck) === "object") {
            cg = true;
            for (cf in ck) {
                aJ(cd, ci, cf, ck[cf], true, cm, cl)
            }
        } else {
            if (cj !== undefined) {
                cg = true;
                if (!bP.isFunction(cj)) {
                    cl = true
                }
                if (ch) {
                    if (cl) {
                        ci.call(cd, cj);
                        ci = null
                    } else {
                        ch = ci;
                        ci = function(cn, i, co) {
                            return ch.call(bP(cn), co)
                        }
                    }
                }
                if (ci) {
                    for (; cf < ce; cf++) {
                        ci(cd[cf], ck, cl ? cj : cj.call(cd[cf], cf, ci(cd[cf], ck)))
                    }
                }
            }
        }
        return cg ? cd : ch ? ci.call(cd) : ce ? ci(cd[0], ck) : cm
    };
    var aS = (/^(?:checkbox|radio)$/i);
    var n = (/<([\w:-]+)/);
    var bI = (/^$|\/(?:java|ecma)script/i);
    var cc = (/^\s+/);
    var d = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function C(i) {
        var ce = d.split("|"),
            cd = i.createDocumentFragment();
        if (cd.createElement) {
            while (ce.length) {
                cd.createElement(ce.pop())
            }
        }
        return cd
    }(function() {
        var ce = m.createElement("div"),
            cd = m.createDocumentFragment(),
            i = m.createElement("input");
        ce.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        F.leadingWhitespace = ce.firstChild.nodeType === 3;
        F.tbody = !ce.getElementsByTagName("tbody").length;
        F.htmlSerialize = !!ce.getElementsByTagName("link").length;
        F.html5Clone = m.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        i.type = "checkbox";
        i.checked = true;
        cd.appendChild(i);
        F.appendChecked = i.checked;
        ce.innerHTML = "<textarea>x</textarea>";
        F.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue;
        cd.appendChild(ce);
        i = m.createElement("input");
        i.setAttribute("type", "radio");
        i.setAttribute("checked", "checked");
        i.setAttribute("name", "t");
        ce.appendChild(i);
        F.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked;
        F.noCloneEvent = !!ce.addEventListener;
        ce[bP.expando] = 1;
        F.attributes = !ce.getAttribute(bP.expando)
    })();
    var ad = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: F.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ad.optgroup = ad.option;
    ad.tbody = ad.tfoot = ad.colgroup = ad.caption = ad.thead;
    ad.th = ad.td;

    function k(cg, cd) {
        var ce, ch, cf = 0,
            ci = typeof cg.getElementsByTagName !== "undefined" ? cg.getElementsByTagName(cd || "*") : typeof cg.querySelectorAll !== "undefined" ? cg.querySelectorAll(cd || "*") : undefined;
        if (!ci) {
            for (ci = [], ce = cg.childNodes || cg;
                (ch = ce[cf]) != null; cf++) {
                if (!cd || bP.nodeName(ch, cd)) {
                    ci.push(ch)
                } else {
                    bP.merge(ci, k(ch, cd))
                }
            }
        }
        return cd === undefined || cd && bP.nodeName(cg, cd) ? bP.merge([cg], ci) : ci
    }

    function bB(cd, cf) {
        var cg, ce = 0;
        for (;
            (cg = cd[ce]) != null; ce++) {
            bP._data(cg, "globalEval", !cf || bP._data(cf[ce], "globalEval"))
        }
    }
    var S = /<|&#?\w+;/,
        b8 = /<tbody/i;

    function b5(i) {
        if (aS.test(i.type)) {
            i.defaultChecked = i.checked
        }
    }

    function B(ce, cg, cm, cr, cj) {
        var cn, ci, cl, cq, cs, cp, cf, ck = ce.length,
            ch = C(cg),
            cd = [],
            co = 0;
        for (; co < ck; co++) {
            ci = ce[co];
            if (ci || ci === 0) {
                if (bP.type(ci) === "object") {
                    bP.merge(cd, ci.nodeType ? [ci] : ci)
                } else {
                    if (!S.test(ci)) {
                        cd.push(cg.createTextNode(ci))
                    } else {
                        cq = cq || ch.appendChild(cg.createElement("div"));
                        cs = (n.exec(ci) || ["", ""])[1].toLowerCase();
                        cf = ad[cs] || ad._default;
                        cq.innerHTML = cf[1] + bP.htmlPrefilter(ci) + cf[2];
                        cn = cf[0];
                        while (cn--) {
                            cq = cq.lastChild
                        }
                        if (!F.leadingWhitespace && cc.test(ci)) {
                            cd.push(cg.createTextNode(cc.exec(ci)[0]))
                        }
                        if (!F.tbody) {
                            ci = cs === "table" && !b8.test(ci) ? cq.firstChild : cf[1] === "<table>" && !b8.test(ci) ? cq : 0;
                            cn = ci && ci.childNodes.length;
                            while (cn--) {
                                if (bP.nodeName((cp = ci.childNodes[cn]), "tbody") && !cp.childNodes.length) {
                                    ci.removeChild(cp)
                                }
                            }
                        }
                        bP.merge(cd, cq.childNodes);
                        cq.textContent = "";
                        while (cq.firstChild) {
                            cq.removeChild(cq.firstChild)
                        }
                        cq = ch.lastChild
                    }
                }
            }
        }
        if (cq) {
            ch.removeChild(cq)
        }
        if (!F.appendChecked) {
            bP.grep(k(cd, "input"), b5)
        }
        co = 0;
        while ((ci = cd[co++])) {
            if (cr && bP.inArray(ci, cr) > -1) {
                if (cj) {
                    cj.push(ci)
                }
                continue
            }
            cl = bP.contains(ci.ownerDocument, ci);
            cq = k(ch.appendChild(ci), "script");
            if (cl) {
                bB(cq)
            }
            if (cm) {
                cn = 0;
                while ((ci = cq[cn++])) {
                    if (bI.test(ci.type || "")) {
                        cm.push(ci)
                    }
                }
            }
        }
        cq = null;
        return ch
    }(function() {
        var ce, cd, cf = m.createElement("div");
        for (ce in {
                submit: true,
                change: true,
                focusin: true
            }) {
            cd = "on" + ce;
            if (!(F[ce] = cd in bc)) {
                cf.setAttribute(cd, "t");
                F[ce] = cf.attributes[cd].expando === false
            }
        }
        cf = null
    })();
    var bN = /^(?:input|select|textarea)$/i,
        bd = /^key/,
        bS = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        bJ = /^(?:focusinfocus|focusoutblur)$/,
        bE = /^([^.]*)(?:\.(.+)|)/;

    function ac() {
        return true
    }

    function ah() {
        return false
    }

    function au() {
        try {
            return m.activeElement
        } catch (i) {}
    }

    function bp(ch, ce, i, ci, cg, cd) {
        var cj, cf;
        if (typeof ce === "object") {
            if (typeof i !== "string") {
                ci = ci || i;
                i = undefined
            }
            for (cf in ce) {
                bp(ch, cf, i, ci, ce[cf], cd)
            }
            return ch
        }
        if (ci == null && cg == null) {
            cg = i;
            ci = i = undefined
        } else {
            if (cg == null) {
                if (typeof i === "string") {
                    cg = ci;
                    ci = undefined
                } else {
                    cg = ci;
                    ci = i;
                    i = undefined
                }
            }
        }
        if (cg === false) {
            cg = ah
        } else {
            if (!cg) {
                return ch
            }
        }
        if (cd === 1) {
            cj = cg;
            cg = function(ck) {
                bP().off(ck);
                return cj.apply(this, arguments)
            };
            cg.guid = cj.guid || (cj.guid = bP.guid++)
        }
        return ch.each(function() {
            bP.event.add(this, ce, cg, ci, i)
        })
    }
    bP.event = {
        global: {},
        add: function(cg, cl, cq, ci, ch) {
            var cj, cr, cs, ce, cn, ck, cp, cf, co, i, cd, cm = bP._data(cg);
            if (!cm) {
                return
            }
            if (cq.handler) {
                ce = cq;
                cq = ce.handler;
                ch = ce.selector
            }
            if (!cq.guid) {
                cq.guid = bP.guid++
            }
            if (!(cr = cm.events)) {
                cr = cm.events = {}
            }
            if (!(ck = cm.handle)) {
                ck = cm.handle = function(ct) {
                    return typeof bP !== "undefined" && (!ct || bP.event.triggered !== ct.type) ? bP.event.dispatch.apply(ck.elem, arguments) : undefined
                };
                ck.elem = cg
            }
            cl = (cl || "").match(aM) || [""];
            cs = cl.length;
            while (cs--) {
                cj = bE.exec(cl[cs]) || [];
                co = cd = cj[1];
                i = (cj[2] || "").split(".").sort();
                if (!co) {
                    continue
                }
                cn = bP.event.special[co] || {};
                co = (ch ? cn.delegateType : cn.bindType) || co;
                cn = bP.event.special[co] || {};
                cp = bP.extend({
                    type: co,
                    origType: cd,
                    data: ci,
                    handler: cq,
                    guid: cq.guid,
                    selector: ch,
                    needsContext: ch && bP.expr.match.needsContext.test(ch),
                    namespace: i.join(".")
                }, ce);
                if (!(cf = cr[co])) {
                    cf = cr[co] = [];
                    cf.delegateCount = 0;
                    if (!cn.setup || cn.setup.call(cg, ci, i, ck) === false) {
                        if (cg.addEventListener) {
                            cg.addEventListener(co, ck, false)
                        } else {
                            if (cg.attachEvent) {
                                cg.attachEvent("on" + co, ck)
                            }
                        }
                    }
                }
                if (cn.add) {
                    cn.add.call(cg, cp);
                    if (!cp.handler.guid) {
                        cp.handler.guid = cq.guid
                    }
                }
                if (ch) {
                    cf.splice(cf.delegateCount++, 0, cp)
                } else {
                    cf.push(cp)
                }
                bP.event.global[co] = true
            }
            cg = null
        },
        remove: function(cf, cl, cs, cg, ck) {
            var ci, cp, cj, ch, cr, cq, cn, ce, co, i, cd, cm = bP.hasData(cf) && bP._data(cf);
            if (!cm || !(cq = cm.events)) {
                return
            }
            cl = (cl || "").match(aM) || [""];
            cr = cl.length;
            while (cr--) {
                cj = bE.exec(cl[cr]) || [];
                co = cd = cj[1];
                i = (cj[2] || "").split(".").sort();
                if (!co) {
                    for (co in cq) {
                        bP.event.remove(cf, co + cl[cr], cs, cg, true)
                    }
                    continue
                }
                cn = bP.event.special[co] || {};
                co = (cg ? cn.delegateType : cn.bindType) || co;
                ce = cq[co] || [];
                cj = cj[2] && new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.|)") + "(\\.|$)");
                ch = ci = ce.length;
                while (ci--) {
                    cp = ce[ci];
                    if ((ck || cd === cp.origType) && (!cs || cs.guid === cp.guid) && (!cj || cj.test(cp.namespace)) && (!cg || cg === cp.selector || cg === "**" && cp.selector)) {
                        ce.splice(ci, 1);
                        if (cp.selector) {
                            ce.delegateCount--
                        }
                        if (cn.remove) {
                            cn.remove.call(cf, cp)
                        }
                    }
                }
                if (ch && !ce.length) {
                    if (!cn.teardown || cn.teardown.call(cf, i, cm.handle) === false) {
                        bP.removeEvent(cf, co, cm.handle)
                    }
                    delete cq[co]
                }
            }
            if (bP.isEmptyObject(cq)) {
                delete cm.handle;
                bP._removeData(cf, "events")
            }
        },
        trigger: function(cd, ck, cg, cr) {
            var cl, cf, cp, cq, cn, cj, ci, ch = [cg || m],
                co = R.call(cd, "type") ? cd.type : cd,
                ce = R.call(cd, "namespace") ? cd.namespace.split(".") : [];
            cp = cj = cg = cg || m;
            if (cg.nodeType === 3 || cg.nodeType === 8) {
                return
            }
            if (bJ.test(co + bP.event.triggered)) {
                return
            }
            if (co.indexOf(".") > -1) {
                ce = co.split(".");
                co = ce.shift();
                ce.sort()
            }
            cf = co.indexOf(":") < 0 && "on" + co;
            cd = cd[bP.expando] ? cd : new bP.Event(co, typeof cd === "object" && cd);
            cd.isTrigger = cr ? 2 : 3;
            cd.namespace = ce.join(".");
            cd.rnamespace = cd.namespace ? new RegExp("(^|\\.)" + ce.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            cd.result = undefined;
            if (!cd.target) {
                cd.target = cg
            }
            ck = ck == null ? [cd] : bP.makeArray(ck, [cd]);
            cn = bP.event.special[co] || {};
            if (!cr && cn.trigger && cn.trigger.apply(cg, ck) === false) {
                return
            }
            if (!cr && !cn.noBubble && !bP.isWindow(cg)) {
                cq = cn.delegateType || co;
                if (!bJ.test(cq + co)) {
                    cp = cp.parentNode
                }
                for (; cp; cp = cp.parentNode) {
                    ch.push(cp);
                    cj = cp
                }
                if (cj === (cg.ownerDocument || m)) {
                    ch.push(cj.defaultView || cj.parentWindow || bc)
                }
            }
            ci = 0;
            while ((cp = ch[ci++]) && !cd.isPropagationStopped()) {
                cd.type = ci > 1 ? cq : cn.bindType || co;
                cl = (bP._data(cp, "events") || {})[cd.type] && bP._data(cp, "handle");
                if (cl) {
                    cl.apply(cp, ck)
                }
                cl = cf && cp[cf];
                if (cl && cl.apply && V(cp)) {
                    cd.result = cl.apply(cp, ck);
                    if (cd.result === false) {
                        cd.preventDefault()
                    }
                }
            }
            cd.type = co;
            if (!cr && !cd.isDefaultPrevented()) {
                if ((!cn._default || cn._default.apply(ch.pop(), ck) === false) && V(cg)) {
                    if (cf && cg[co] && !bP.isWindow(cg)) {
                        cj = cg[cf];
                        if (cj) {
                            cg[cf] = null
                        }
                        bP.event.triggered = co;
                        try {
                            cg[co]()
                        } catch (cm) {}
                        bP.event.triggered = undefined;
                        if (cj) {
                            cg[cf] = cj
                        }
                    }
                }
            }
            return cd.result
        },
        dispatch: function(cd) {
            cd = bP.event.fix(cd);
            var ch, cg, ci, ce, cm, cl = [],
                ck = X.call(arguments),
                cf = (bP._data(this, "events") || {})[cd.type] || [],
                cj = bP.event.special[cd.type] || {};
            ck[0] = cd;
            cd.delegateTarget = this;
            if (cj.preDispatch && cj.preDispatch.call(this, cd) === false) {
                return
            }
            cl = bP.event.handlers.call(this, cd, cf);
            ch = 0;
            while ((ce = cl[ch++]) && !cd.isPropagationStopped()) {
                cd.currentTarget = ce.elem;
                cg = 0;
                while ((cm = ce.handlers[cg++]) && !cd.isImmediatePropagationStopped()) {
                    if (!cd.rnamespace || cd.rnamespace.test(cm.namespace)) {
                        cd.handleObj = cm;
                        cd.data = cm.data;
                        ci = ((bP.event.special[cm.origType] || {}).handle || cm.handler).apply(ce.elem, ck);
                        if (ci !== undefined) {
                            if ((cd.result = ci) === false) {
                                cd.preventDefault();
                                cd.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (cj.postDispatch) {
                cj.postDispatch.call(this, cd)
            }
            return cd.result
        },
        handlers: function(cd, cf) {
            var ch, ci, ce, ck, cj = [],
                cg = cf.delegateCount,
                cl = cd.target;
            if (cg && cl.nodeType && (cd.type !== "click" || isNaN(cd.button) || cd.button < 1)) {
                for (; cl != this; cl = cl.parentNode || this) {
                    if (cl.nodeType === 1 && (cl.disabled !== true || cd.type !== "click")) {
                        ci = [];
                        for (ch = 0; ch < cg; ch++) {
                            ck = cf[ch];
                            ce = ck.selector + " ";
                            if (ci[ce] === undefined) {
                                ci[ce] = ck.needsContext ? bP(ce, this).index(cl) > -1 : bP.find(ce, this, null, [cl]).length
                            }
                            if (ci[ce]) {
                                ci.push(ck)
                            }
                        }
                        if (ci.length) {
                            cj.push({
                                elem: cl,
                                handlers: ci
                            })
                        }
                    }
                }
            }
            if (cg < cf.length) {
                cj.push({
                    elem: this,
                    handlers: cf.slice(cg)
                })
            }
            return cj
        },
        fix: function(cg) {
            if (cg[bP.expando]) {
                return cg
            }
            var ce, cj, ci, cf = cg.type,
                cd = cg,
                ch = this.fixHooks[cf];
            if (!ch) {
                this.fixHooks[cf] = ch = bS.test(cf) ? this.mouseHooks : bd.test(cf) ? this.keyHooks : {}
            }
            ci = ch.props ? this.props.concat(ch.props) : this.props;
            cg = new bP.Event(cd);
            ce = ci.length;
            while (ce--) {
                cj = ci[ce];
                cg[cj] = cd[cj]
            }
            if (!cg.target) {
                cg.target = cd.srcElement || m
            }
            if (cg.target.nodeType === 3) {
                cg.target = cg.target.parentNode
            }
            cg.metaKey = !!cg.metaKey;
            return ch.filter ? ch.filter(cg, cd) : cg
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(cd, i) {
                if (cd.which == null) {
                    cd.which = i.charCode != null ? i.charCode : i.keyCode
                }
                return cd
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement").split(" "),
            filter: function(cf, ce) {
                var i, cg, ch, cd = ce.button,
                    ci = ce.fromElement;
                if (cf.pageX == null && ce.clientX != null) {
                    cg = cf.target.ownerDocument || m;
                    ch = cg.documentElement;
                    i = cg.body;
                    cf.pageX = ce.clientX + (ch && ch.scrollLeft || i && i.scrollLeft || 0) - (ch && ch.clientLeft || i && i.clientLeft || 0);
                    cf.pageY = ce.clientY + (ch && ch.scrollTop || i && i.scrollTop || 0) - (ch && ch.clientTop || i && i.clientTop || 0)
                }
                if (!cf.relatedTarget && ci) {
                    cf.relatedTarget = ci === cf.target ? ce.toElement : ci
                }
                if (!cf.which && cd !== undefined) {
                    cf.which = (cd & 1 ? 1 : (cd & 2 ? 3 : (cd & 4 ? 2 : 0)))
                }
                return cf
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== au() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (i) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === au() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (bP.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(i) {
                    return bP.nodeName(i.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(i) {
                    if (i.result !== undefined && i.originalEvent) {
                        i.originalEvent.returnValue = i.result
                    }
                }
            }
        },
        simulate: function(i, ce, cd) {
            var cf = bP.extend(new bP.Event(), cd, {
                type: i,
                isSimulated: true
            });
            bP.event.trigger(cf, null, ce);
            if (cf.isDefaultPrevented()) {
                cd.preventDefault()
            }
        }
    };
    bP.removeEvent = m.removeEventListener ? function(cd, i, ce) {
        if (cd.removeEventListener) {
            cd.removeEventListener(i, ce)
        }
    } : function(ce, cd, cf) {
        var i = "on" + cd;
        if (ce.detachEvent) {
            if (typeof ce[i] === "undefined") {
                ce[i] = null
            }
            ce.detachEvent(i, cf)
        }
    };
    bP.Event = function(cd, i) {
        if (!(this instanceof bP.Event)) {
            return new bP.Event(cd, i)
        }
        if (cd && cd.type) {
            this.originalEvent = cd;
            this.type = cd.type;
            this.isDefaultPrevented = cd.defaultPrevented || cd.defaultPrevented === undefined && cd.returnValue === false ? ac : ah
        } else {
            this.type = cd
        }
        if (i) {
            bP.extend(this, i)
        }
        this.timeStamp = cd && cd.timeStamp || bP.now();
        this[bP.expando] = true
    };
    bP.Event.prototype = {
        constructor: bP.Event,
        isDefaultPrevented: ah,
        isPropagationStopped: ah,
        isImmediatePropagationStopped: ah,
        preventDefault: function() {
            var i = this.originalEvent;
            this.isDefaultPrevented = ac;
            if (!i) {
                return
            }
            if (i.preventDefault) {
                i.preventDefault()
            } else {
                i.returnValue = false
            }
        },
        stopPropagation: function() {
            var i = this.originalEvent;
            this.isPropagationStopped = ac;
            if (!i || this.isSimulated) {
                return
            }
            if (i.stopPropagation) {
                i.stopPropagation()
            }
            i.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            var i = this.originalEvent;
            this.isImmediatePropagationStopped = ac;
            if (i && i.stopImmediatePropagation) {
                i.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    bP.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(cd, i) {
        bP.event.special[cd] = {
            delegateType: i,
            bindType: i,
            handle: function(cg) {
                var ce, ci = this,
                    ch = cg.relatedTarget,
                    cf = cg.handleObj;
                if (!ch || (ch !== ci && !bP.contains(ci, ch))) {
                    cg.type = cf.origType;
                    ce = cf.handler.apply(this, arguments);
                    cg.type = i
                }
                return ce
            }
        }
    });
    if (!F.submit) {
        bP.event.special.submit = {
            setup: function() {
                if (bP.nodeName(this, "form")) {
                    return false
                }
                bP.event.add(this, "click._submit keypress._submit", function(ce) {
                    var cd = ce.target,
                        i = bP.nodeName(cd, "input") || bP.nodeName(cd, "button") ? bP.prop(cd, "form") : undefined;
                    if (i && !bP._data(i, "submit")) {
                        bP.event.add(i, "submit._submit", function(cf) {
                            cf._submitBubble = true
                        });
                        bP._data(i, "submit", true)
                    }
                })
            },
            postDispatch: function(i) {
                if (i._submitBubble) {
                    delete i._submitBubble;
                    if (this.parentNode && !i.isTrigger) {
                        bP.event.simulate("submit", this.parentNode, i)
                    }
                }
            },
            teardown: function() {
                if (bP.nodeName(this, "form")) {
                    return false
                }
                bP.event.remove(this, "._submit")
            }
        }
    }
    if (!F.change) {
        bP.event.special.change = {
            setup: function() {
                if (bN.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bP.event.add(this, "propertychange._change", function(i) {
                            if (i.originalEvent.propertyName === "checked") {
                                this._justChanged = true
                            }
                        });
                        bP.event.add(this, "click._change", function(i) {
                            if (this._justChanged && !i.isTrigger) {
                                this._justChanged = false
                            }
                            bP.event.simulate("change", this, i)
                        })
                    }
                    return false
                }
                bP.event.add(this, "beforeactivate._change", function(cd) {
                    var i = cd.target;
                    if (bN.test(i.nodeName) && !bP._data(i, "change")) {
                        bP.event.add(i, "change._change", function(ce) {
                            if (this.parentNode && !ce.isSimulated && !ce.isTrigger) {
                                bP.event.simulate("change", this.parentNode, ce)
                            }
                        });
                        bP._data(i, "change", true)
                    }
                })
            },
            handle: function(cd) {
                var i = cd.target;
                if (this !== i || cd.isSimulated || cd.isTrigger || (i.type !== "radio" && i.type !== "checkbox")) {
                    return cd.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                bP.event.remove(this, "._change");
                return !bN.test(this.nodeName)
            }
        }
    }
    if (!F.focusin) {
        bP.each({
            focus: "focusin",
            blur: "focusout"
        }, function(ce, i) {
            var cd = function(cf) {
                bP.event.simulate(i, cf.target, bP.event.fix(cf))
            };
            bP.event.special[i] = {
                setup: function() {
                    var cg = this.ownerDocument || this,
                        cf = bP._data(cg, i);
                    if (!cf) {
                        cg.addEventListener(ce, cd, true)
                    }
                    bP._data(cg, i, (cf || 0) + 1)
                },
                teardown: function() {
                    var cg = this.ownerDocument || this,
                        cf = bP._data(cg, i) - 1;
                    if (!cf) {
                        cg.removeEventListener(ce, cd, true);
                        bP._removeData(cg, i)
                    } else {
                        bP._data(cg, i, cf)
                    }
                }
            }
        })
    }
    bP.fn.extend({
        on: function(cd, i, cf, ce) {
            return bp(this, cd, i, cf, ce)
        },
        one: function(cd, i, cf, ce) {
            return bp(this, cd, i, cf, ce, 1)
        },
        off: function(ce, i, cg) {
            var cd, cf;
            if (ce && ce.preventDefault && ce.handleObj) {
                cd = ce.handleObj;
                bP(ce.delegateTarget).off(cd.namespace ? cd.origType + "." + cd.namespace : cd.origType, cd.selector, cd.handler);
                return this
            }
            if (typeof ce === "object") {
                for (cf in ce) {
                    this.off(cf, i, ce[cf])
                }
                return this
            }
            if (i === false || typeof i === "function") {
                cg = i;
                i = undefined
            }
            if (cg === false) {
                cg = ah
            }
            return this.each(function() {
                bP.event.remove(this, ce, cg, i)
            })
        },
        trigger: function(i, cd) {
            return this.each(function() {
                bP.event.trigger(i, cd, this)
            })
        },
        triggerHandler: function(i, ce) {
            var cd = this[0];
            if (cd) {
                return bP.event.trigger(i, ce, cd, true)
            }
        }
    });
    var aK = / jQuery\d+="(?:null|\d+)"/g,
        T = new RegExp("<(?:" + d + ")[\\s/>]", "i"),
        aN = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        av = /<script|<style|<link/i,
        b4 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        az = /^true\/(.*)/,
        aU = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        a0 = C(m),
        j = a0.appendChild(m.createElement("div"));

    function ba(cd, i) {
        return bP.nodeName(cd, "table") && bP.nodeName(i.nodeType !== 11 ? i : i.firstChild, "tr") ? cd.getElementsByTagName("tbody")[0] || cd.appendChild(cd.ownerDocument.createElement("tbody")) : cd
    }

    function u(i) {
        i.type = (bP.find.attr(i, "type") !== null) + "/" + i.type;
        return i
    }

    function bm(cd) {
        var i = az.exec(cd.type);
        if (i) {
            cd.type = i[1]
        } else {
            cd.removeAttribute("type")
        }
        return cd
    }

    function aA(ck, ce) {
        if (ce.nodeType !== 1 || !bP.hasData(ck)) {
            return
        }
        var ch, cg, cd, cj = bP._data(ck),
            ci = bP._data(ce, cj),
            cf = cj.events;
        if (cf) {
            delete ci.handle;
            ci.events = {};
            for (ch in cf) {
                for (cg = 0, cd = cf[ch].length; cg < cd; cg++) {
                    bP.event.add(ce, ch, cf[ch][cg])
                }
            }
        }
        if (ci.data) {
            ci.data = bP.extend({}, ci.data)
        }
    }

    function ab(cf, i) {
        var cg, ce, cd;
        if (i.nodeType !== 1) {
            return
        }
        cg = i.nodeName.toLowerCase();
        if (!F.noCloneEvent && i[bP.expando]) {
            cd = bP._data(i);
            for (ce in cd.events) {
                bP.removeEvent(i, ce, cd.handle)
            }
            i.removeAttribute(bP.expando)
        }
        if (cg === "script" && i.text !== cf.text) {
            u(i).text = cf.text;
            bm(i)
        } else {
            if (cg === "object") {
                if (i.parentNode) {
                    i.outerHTML = cf.outerHTML
                }
                if (F.html5Clone && (cf.innerHTML && !bP.trim(i.innerHTML))) {
                    i.innerHTML = cf.innerHTML
                }
            } else {
                if (cg === "input" && aS.test(cf.type)) {
                    i.defaultChecked = i.checked = cf.checked;
                    if (i.value !== cf.value) {
                        i.value = cf.value
                    }
                } else {
                    if (cg === "option") {
                        i.defaultSelected = i.selected = cf.defaultSelected
                    } else {
                        if (cg === "input" || cg === "textarea") {
                            i.defaultValue = cf.defaultValue
                        }
                    }
                }
            }
        }
    }

    function J(cl, cn, cr, cg) {
        cn = aH.apply([], cn);
        var ck, cf, cd, ci, cp, cm, cj = 0,
            ch = cl.length,
            cq = ch - 1,
            co = cn[0],
            ce = bP.isFunction(co);
        if (ce || (ch > 1 && typeof co === "string" && !F.checkClone && b4.test(co))) {
            return cl.each(function(cs) {
                var i = cl.eq(cs);
                if (ce) {
                    cn[0] = co.call(this, cs, i.html())
                }
                J(i, cn, cr, cg)
            })
        }
        if (ch) {
            cm = B(cn, cl[0].ownerDocument, false, cl, cg);
            ck = cm.firstChild;
            if (cm.childNodes.length === 1) {
                cm = ck
            }
            if (ck || cg) {
                ci = bP.map(k(cm, "script"), u);
                cd = ci.length;
                for (; cj < ch; cj++) {
                    cf = cm;
                    if (cj !== cq) {
                        cf = bP.clone(cf, true, true);
                        if (cd) {
                            bP.merge(ci, k(cf, "script"))
                        }
                    }
                    cr.call(cl[cj], cf, cj)
                }
                if (cd) {
                    cp = ci[ci.length - 1].ownerDocument;
                    bP.map(ci, bm);
                    for (cj = 0; cj < cd; cj++) {
                        cf = ci[cj];
                        if (bI.test(cf.type || "") && !bP._data(cf, "globalEval") && bP.contains(cp, cf)) {
                            if (cf.src) {
                                if (bP._evalUrl) {
                                    bP._evalUrl(cf.src)
                                }
                            } else {
                                bP.globalEval((cf.text || cf.textContent || cf.innerHTML || "").replace(aU, ""))
                            }
                        }
                    }
                }
                cm = ck = null
            }
        }
        return cl
    }

    function L(ch, cd, ci) {
        var cg, ce = cd ? bP.filter(cd, ch) : ch,
            cf = 0;
        for (;
            (cg = ce[cf]) != null; cf++) {
            if (!ci && cg.nodeType === 1) {
                bP.cleanData(k(cg))
            }
            if (cg.parentNode) {
                if (ci && bP.contains(cg.ownerDocument, cg)) {
                    bB(k(cg, "script"))
                }
                cg.parentNode.removeChild(cg)
            }
        }
        return ch
    }
    bP.extend({
        htmlPrefilter: function(i) {
            return i.replace(aN, "<$1></$2>")
        },
        clone: function(ce, cg, cd) {
            var ci, cf, cl, ch, cj, ck = bP.contains(ce.ownerDocument, ce);
            if (F.html5Clone || bP.isXMLDoc(ce) || !T.test("<" + ce.nodeName + ">")) {
                cl = ce.cloneNode(true)
            } else {
                j.innerHTML = ce.outerHTML;
                j.removeChild(cl = j.firstChild)
            }
            if ((!F.noCloneEvent || !F.noCloneChecked) && (ce.nodeType === 1 || ce.nodeType === 11) && !bP.isXMLDoc(ce)) {
                ci = k(cl);
                cj = k(ce);
                for (ch = 0;
                    (cf = cj[ch]) != null;
                    ++ch) {
                    if (ci[ch]) {
                        ab(cf, ci[ch])
                    }
                }
            }
            if (cg) {
                if (cd) {
                    cj = cj || k(ce);
                    ci = ci || k(cl);
                    for (ch = 0;
                        (cf = cj[ch]) != null; ch++) {
                        aA(cf, ci[ch])
                    }
                } else {
                    aA(ce, cl)
                }
            }
            ci = k(cl, "script");
            if (ci.length > 0) {
                bB(ci, !ck && k(ce, "script"))
            }
            ci = cj = cf = null;
            return cl
        },
        cleanData: function(ce, cm) {
            var cg, cl, cf, ci, cj = 0,
                cn = bP.expando,
                cd = bP.cache,
                ch = F.attributes,
                ck = bP.event.special;
            for (;
                (cg = ce[cj]) != null; cj++) {
                if (cm || V(cg)) {
                    cf = cg[cn];
                    ci = cf && cd[cf];
                    if (ci) {
                        if (ci.events) {
                            for (cl in ci.events) {
                                if (ck[cl]) {
                                    bP.event.remove(cg, cl)
                                } else {
                                    bP.removeEvent(cg, cl, ci.handle)
                                }
                            }
                        }
                        if (cd[cf]) {
                            delete cd[cf];
                            if (!ch && typeof cg.removeAttribute !== "undefined") {
                                cg.removeAttribute(cn)
                            } else {
                                cg[cn] = undefined
                            }
                            aW.push(cf)
                        }
                    }
                }
            }
        }
    });
    bP.fn.extend({
        domManip: J,
        detach: function(i) {
            return L(this, i, true)
        },
        remove: function(i) {
            return L(this, i)
        },
        text: function(i) {
            return aJ(this, function(cd) {
                return cd === undefined ? bP.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(cd))
            }, null, i, arguments.length)
        },
        append: function() {
            return J(this, arguments, function(i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cd = ba(this, i);
                    cd.appendChild(i)
                }
            })
        },
        prepend: function() {
            return J(this, arguments, function(i) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var cd = ba(this, i);
                    cd.insertBefore(i, cd.firstChild)
                }
            })
        },
        before: function() {
            return J(this, arguments, function(i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this)
                }
            })
        },
        after: function() {
            return J(this, arguments, function(i) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(i, this.nextSibling)
                }
            })
        },
        empty: function() {
            var ce, cd = 0;
            for (;
                (ce = this[cd]) != null; cd++) {
                if (ce.nodeType === 1) {
                    bP.cleanData(k(ce, false))
                }
                while (ce.firstChild) {
                    ce.removeChild(ce.firstChild)
                }
                if (ce.options && bP.nodeName(ce, "select")) {
                    ce.options.length = 0
                }
            }
            return this
        },
        clone: function(cd, i) {
            cd = cd == null ? false : cd;
            i = i == null ? cd : i;
            return this.map(function() {
                return bP.clone(this, cd, i)
            })
        },
        html: function(i) {
            return aJ(this, function(cg) {
                var cf = this[0] || {},
                    ce = 0,
                    cd = this.length;
                if (cg === undefined) {
                    return cf.nodeType === 1 ? cf.innerHTML.replace(aK, "") : undefined
                }
                if (typeof cg === "string" && !av.test(cg) && (F.htmlSerialize || !T.test(cg)) && (F.leadingWhitespace || !cc.test(cg)) && !ad[(n.exec(cg) || ["", ""])[1].toLowerCase()]) {
                    cg = bP.htmlPrefilter(cg);
                    try {
                        for (; ce < cd; ce++) {
                            cf = this[ce] || {};
                            if (cf.nodeType === 1) {
                                bP.cleanData(k(cf, false));
                                cf.innerHTML = cg
                            }
                        }
                        cf = 0
                    } catch (ch) {}
                }
                if (cf) {
                    this.empty().append(cg)
                }
            }, null, i, arguments.length)
        },
        replaceWith: function() {
            var i = [];
            return J(this, arguments, function(ce) {
                var cd = this.parentNode;
                if (bP.inArray(this, i) < 0) {
                    bP.cleanData(k(this));
                    if (cd) {
                        cd.replaceChild(ce, this)
                    }
                }
            }, i)
        }
    });
    bP.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(i, cd) {
        bP.fn[i] = function(ce) {
            var cf, ch = 0,
                cg = [],
                cj = bP(ce),
                ci = cj.length - 1;
            for (; ch <= ci; ch++) {
                cf = ch === ci ? this : this.clone(true);
                bP(cj[ch])[cd](cf);
                w.apply(cg, cf.get())
            }
            return this.pushStack(cg)
        }
    });
    var aO, bs = {
        HTML: "block",
        BODY: "block"
    };

    function bb(i, cf) {
        var cd = bP(cf.createElement(i)).appendTo(cf.body),
            ce = bP.css(cd[0], "display");
        cd.detach();
        return ce
    }

    function a8(ce) {
        var cd = m,
            i = bs[ce];
        if (!i) {
            i = bb(ce, cd);
            if (i === "none" || !i) {
                aO = (aO || bP("<iframe frameborder='0' width='0' height='0'/>")).appendTo(cd.documentElement);
                cd = (aO[0].contentWindow || aO[0].contentDocument).document;
                cd.write();
                cd.close();
                i = bb(ce, cd);
                aO.detach()
            }
            bs[ce] = i
        }
        return i
    }
    var a7 = (/^margin/);
    var ag = new RegExp("^(" + aL + ")(?!px)[a-z%]+$", "i");
    var K = function(ch, cg, ci, cf) {
        var ce, cd, i = {};
        for (cd in cg) {
            i[cd] = ch.style[cd];
            ch.style[cd] = cg[cd]
        }
        ce = ci.apply(ch, cf || []);
        for (cd in cg) {
            ch.style[cd] = i[cd]
        }
        return ce
    };
    var b1 = m.documentElement;
    (function() {
        var ch, ce, ci, ck, cj, cf, cd = m.createElement("div"),
            i = m.createElement("div");
        if (!i.style) {
            return
        }
        i.style.cssText = "float:left;opacity:.5";
        F.opacity = i.style.opacity === "0.5";
        F.cssFloat = !!i.style.cssFloat;
        i.style.backgroundClip = "content-box";
        i.cloneNode(true).style.backgroundClip = "";
        F.clearCloneStyle = i.style.backgroundClip === "content-box";
        cd = m.createElement("div");
        cd.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
        i.innerHTML = "";
        cd.appendChild(i);
        F.boxSizing = i.style.boxSizing === "" || i.style.MozBoxSizing === "" || i.style.WebkitBoxSizing === "";
        bP.extend(F, {
            reliableHiddenOffsets: function() {
                if (ch == null) {
                    cg()
                }
                return ck
            },
            boxSizingReliable: function() {
                if (ch == null) {
                    cg()
                }
                return ci
            },
            pixelMarginRight: function() {
                if (ch == null) {
                    cg()
                }
                return ce
            },
            pixelPosition: function() {
                if (ch == null) {
                    cg()
                }
                return ch
            },
            reliableMarginRight: function() {
                if (ch == null) {
                    cg()
                }
                return cj
            },
            reliableMarginLeft: function() {
                if (ch == null) {
                    cg()
                }
                return cf
            }
        });

        function cg() {
            var cm, cl, cn = m.documentElement;
            cn.appendChild(cd);
            i.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
            ch = ci = cf = false;
            ce = cj = true;
            if (bc.getComputedStyle) {
                cl = bc.getComputedStyle(i);
                ch = (cl || {}).top !== "1%";
                cf = (cl || {}).marginLeft === "2px";
                ci = (cl || {
                    width: "4px"
                }).width === "4px";
                i.style.marginRight = "50%";
                ce = (cl || {
                    marginRight: "4px"
                }).marginRight === "4px";
                cm = i.appendChild(m.createElement("div"));
                cm.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                cm.style.marginRight = cm.style.width = "0";
                i.style.width = "1px";
                cj = !parseFloat((bc.getComputedStyle(cm) || {}).marginRight);
                i.removeChild(cm)
            }
            i.style.display = "none";
            ck = i.getClientRects().length === 0;
            if (ck) {
                i.style.display = "";
                i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                i.childNodes[0].style.borderCollapse = "separate";
                cm = i.getElementsByTagName("td");
                cm[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                ck = cm[0].offsetHeight === 0;
                if (ck) {
                    cm[0].style.display = "";
                    cm[1].style.display = "none";
                    ck = cm[0].offsetHeight === 0
                }
            }
            cn.removeChild(cd)
        }
    })();
    var bx, I, bv = /^(top|right|bottom|left)$/;
    if (bc.getComputedStyle) {
        bx = function(cd) {
            var i = cd.ownerDocument.defaultView;
            if (!i || !i.opener) {
                i = bc
            }
            return i.getComputedStyle(cd)
        };
        I = function(cj, cd, ci) {
            var cg, cf, ch, i, ce = cj.style;
            ci = ci || bx(cj);
            i = ci ? ci.getPropertyValue(cd) || ci[cd] : undefined;
            if ((i === "" || i === undefined) && !bP.contains(cj.ownerDocument, cj)) {
                i = bP.style(cj, cd)
            }
            if (ci) {
                if (!F.pixelMarginRight() && ag.test(i) && a7.test(cd)) {
                    cg = ce.width;
                    cf = ce.minWidth;
                    ch = ce.maxWidth;
                    ce.minWidth = ce.maxWidth = ce.width = i;
                    i = ci.width;
                    ce.width = cg;
                    ce.minWidth = cf;
                    ce.maxWidth = ch
                }
            }
            return i === undefined ? i : i + ""
        }
    } else {
        if (b1.currentStyle) {
            bx = function(i) {
                return i.currentStyle
            };
            I = function(ci, cf, ch) {
                var cj, cd, i, ce, cg = ci.style;
                ch = ch || bx(ci);
                ce = ch ? ch[cf] : undefined;
                if (ce == null && cg && cg[cf]) {
                    ce = cg[cf]
                }
                if (ag.test(ce) && !bv.test(cf)) {
                    cj = cg.left;
                    cd = ci.runtimeStyle;
                    i = cd && cd.left;
                    if (i) {
                        cd.left = ci.currentStyle.left
                    }
                    cg.left = cf === "fontSize" ? "1em" : ce;
                    ce = cg.pixelLeft + "px";
                    cg.left = cj;
                    if (i) {
                        cd.left = i
                    }
                }
                return ce === undefined ? ce : ce + "" || "auto"
            }
        }
    }

    function be(i, cd) {
        return {
            get: function() {
                if (i()) {
                    delete this.get;
                    return
                }
                return (this.get = cd).apply(this, arguments)
            }
        }
    }
    var bq = /alpha\([^)]*\)/i,
        a2 = /opacity\s*=\s*([^)]*)/i,
        M = /^(none|table(?!-c[ea]).+)/,
        bi = new RegExp("^(" + aL + ")(.*)$", "i"),
        bl = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bK = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        aE = ["Webkit", "O", "Moz", "ms"],
        bY = m.createElement("div").style;

    function c(cd) {
        if (cd in bY) {
            return cd
        }
        var cf = cd.charAt(0).toUpperCase() + cd.slice(1),
            ce = aE.length;
        while (ce--) {
            cd = aE[ce] + cf;
            if (cd in bY) {
                return cd
            }
        }
    }

    function r(ci, i) {
        var cj, cg, ch, cd = [],
            ce = 0,
            cf = ci.length;
        for (; ce < cf; ce++) {
            cg = ci[ce];
            if (!cg.style) {
                continue
            }
            cd[ce] = bP._data(cg, "olddisplay");
            cj = cg.style.display;
            if (i) {
                if (!cd[ce] && cj === "none") {
                    cg.style.display = ""
                }
                if (cg.style.display === "" && aa(cg)) {
                    cd[ce] = bP._data(cg, "olddisplay", a8(cg.nodeName))
                }
            } else {
                ch = aa(cg);
                if (cj && cj !== "none" || !ch) {
                    bP._data(cg, "olddisplay", ch ? cj : bP.css(cg, "display"))
                }
            }
        }
        for (ce = 0; ce < cf; ce++) {
            cg = ci[ce];
            if (!cg.style) {
                continue
            }
            if (!i || cg.style.display === "none" || cg.style.display === "") {
                cg.style.display = i ? cd[ce] || "" : "none"
            }
        }
        return ci
    }

    function aT(i, ce, cf) {
        var cd = bi.exec(ce);
        return cd ? Math.max(0, cd[1] - (cf || 0)) + (cd[2] || "px") : ce
    }

    function aF(ch, ce, cd, cj, cg) {
        var cf = cd === (cj ? "border" : "content") ? 4 : ce === "width" ? 1 : 0,
            ci = 0;
        for (; cf < 4; cf += 2) {
            if (cd === "margin") {
                ci += bP.css(ch, cd + b0[cf], true, cg)
            }
            if (cj) {
                if (cd === "content") {
                    ci -= bP.css(ch, "padding" + b0[cf], true, cg)
                }
                if (cd !== "margin") {
                    ci -= bP.css(ch, "border" + b0[cf] + "Width", true, cg)
                }
            } else {
                ci += bP.css(ch, "padding" + b0[cf], true, cg);
                if (cd !== "padding") {
                    ci += bP.css(ch, "border" + b0[cf] + "Width", true, cg)
                }
            }
        }
        return ci
    }

    function v(cg, cd, i) {
        var cf = true,
            ch = cd === "width" ? cg.offsetWidth : cg.offsetHeight,
            ce = bx(cg),
            ci = F.boxSizing && bP.css(cg, "boxSizing", false, ce) === "border-box";
        if (ch <= 0 || ch == null) {
            ch = I(cg, cd, ce);
            if (ch < 0 || ch == null) {
                ch = cg.style[cd]
            }
            if (ag.test(ch)) {
                return ch
            }
            cf = ci && (F.boxSizingReliable() || ch === cg.style[cd]);
            ch = parseFloat(ch) || 0
        }
        return (ch + aF(cg, cd, i || (ci ? "border" : "content"), cf, ce)) + "px"
    }
    bP.extend({
        cssHooks: {
            opacity: {
                get: function(ce, cd) {
                    if (cd) {
                        var i = I(ce, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": F.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(ce, cd, ck, cf) {
            if (!ce || ce.nodeType === 3 || ce.nodeType === 8 || !ce.style) {
                return
            }
            var ci, cj, cl, cg = bP.camelCase(cd),
                i = ce.style;
            cd = bP.cssProps[cg] || (bP.cssProps[cg] = c(cg) || cg);
            cl = bP.cssHooks[cd] || bP.cssHooks[cg];
            if (ck !== undefined) {
                cj = typeof ck;
                if (cj === "string" && (ci = b6.exec(ck)) && ci[1]) {
                    ck = A(ce, cd, ci);
                    cj = "number"
                }
                if (ck == null || ck !== ck) {
                    return
                }
                if (cj === "number") {
                    ck += ci && ci[3] || (bP.cssNumber[cg] ? "" : "px")
                }
                if (!F.clearCloneStyle && ck === "" && cd.indexOf("background") === 0) {
                    i[cd] = "inherit"
                }
                if (!cl || !("set" in cl) || (ck = cl.set(ce, ck, cf)) !== undefined) {
                    try {
                        i[cd] = ck
                    } catch (ch) {}
                }
            } else {
                if (cl && "get" in cl && (ci = cl.get(ce, false, cf)) !== undefined) {
                    return ci
                }
                return i[cd]
            }
        },
        css: function(ci, cg, cd, ch) {
            var cf, cj, i, ce = bP.camelCase(cg);
            cg = bP.cssProps[ce] || (bP.cssProps[ce] = c(ce) || ce);
            i = bP.cssHooks[cg] || bP.cssHooks[ce];
            if (i && "get" in i) {
                cj = i.get(ci, true, cd)
            }
            if (cj === undefined) {
                cj = I(ci, cg, ch)
            }
            if (cj === "normal" && cg in bK) {
                cj = bK[cg]
            }
            if (cd === "" || cd) {
                cf = parseFloat(cj);
                return cd === true || isFinite(cf) ? cf || 0 : cj
            }
            return cj
        }
    });
    bP.each(["height", "width"], function(ce, cd) {
        bP.cssHooks[cd] = {
            get: function(cg, cf, i) {
                if (cf) {
                    return M.test(bP.css(cg, "display")) && cg.offsetWidth === 0 ? K(cg, bl, function() {
                        return v(cg, cd, i)
                    }) : v(cg, cd, i)
                }
            },
            set: function(cg, ch, i) {
                var cf = i && bx(cg);
                return aT(cg, ch, i ? aF(cg, cd, i, F.boxSizing && bP.css(cg, "boxSizing", false, cf) === "border-box", cf) : 0)
            }
        }
    });
    if (!F.opacity) {
        bP.cssHooks.opacity = {
            get: function(cd, i) {
                return a2.test((i && cd.currentStyle ? cd.currentStyle.filter : cd.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : i ? "1" : ""
            },
            set: function(cg, ch) {
                var cf = cg.style,
                    cd = cg.currentStyle,
                    i = bP.isNumeric(ch) ? "alpha(opacity=" + ch * 100 + ")" : "",
                    ce = cd && cd.filter || cf.filter || "";
                cf.zoom = 1;
                if ((ch >= 1 || ch === "") && bP.trim(ce.replace(bq, "")) === "" && cf.removeAttribute) {
                    cf.removeAttribute("filter");
                    if (ch === "" || cd && !cd.filter) {
                        return
                    }
                }
                cf.filter = bq.test(ce) ? ce.replace(bq, i) : ce + " " + i
            }
        }
    }
    bP.cssHooks.marginRight = be(F.reliableMarginRight, function(cd, i) {
        if (i) {
            return K(cd, {
                display: "inline-block"
            }, I, [cd, "marginRight"])
        }
    });
    bP.cssHooks.marginLeft = be(F.reliableMarginLeft, function(cd, i) {
        if (i) {
            return (parseFloat(I(cd, "marginLeft")) || (bP.contains(cd.ownerDocument, cd) ? cd.getBoundingClientRect().left - K(cd, {
                marginLeft: 0
            }, function() {
                return cd.getBoundingClientRect().left
            }) : 0)) + "px"
        }
    });
    bP.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, cd) {
        bP.cssHooks[i + cd] = {
            expand: function(cg) {
                var cf = 0,
                    ce = {},
                    ch = typeof cg === "string" ? cg.split(" ") : [cg];
                for (; cf < 4; cf++) {
                    ce[i + b0[cf] + cd] = ch[cf] || ch[cf - 2] || ch[0]
                }
                return ce
            }
        };
        if (!a7.test(i)) {
            bP.cssHooks[i + cd].set = aT
        }
    });
    bP.fn.extend({
        css: function(i, cd) {
            return aJ(this, function(ci, cf, cj) {
                var ch, ce, ck = {},
                    cg = 0;
                if (bP.isArray(cf)) {
                    ch = bx(ci);
                    ce = cf.length;
                    for (; cg < ce; cg++) {
                        ck[cf[cg]] = bP.css(ci, cf[cg], false, ch)
                    }
                    return ck
                }
                return cj !== undefined ? bP.style(ci, cf, cj) : bP.css(ci, cf)
            }, i, cd, arguments.length > 1)
        },
        show: function() {
            return r(this, true)
        },
        hide: function() {
            return r(this)
        },
        toggle: function(i) {
            if (typeof i === "boolean") {
                return i ? this.show() : this.hide()
            }
            return this.each(function() {
                if (aa(this)) {
                    bP(this).show()
                } else {
                    bP(this).hide()
                }
            })
        }
    });

    function P(ce, cd, cg, i, cf) {
        return new P.prototype.init(ce, cd, cg, i, cf)
    }
    bP.Tween = P;
    P.prototype = {
        constructor: P,
        init: function(cf, cd, ch, i, cg, ce) {
            this.elem = cf;
            this.prop = ch;
            this.easing = cg || bP.easing._default;
            this.options = cd;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = ce || (bP.cssNumber[ch] ? "" : "px")
        },
        cur: function() {
            var i = P.propHooks[this.prop];
            return i && i.get ? i.get(this) : P.propHooks._default.get(this)
        },
        run: function(ce) {
            var cd, i = P.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = cd = bP.easing[this.easing](ce, this.options.duration * ce, 0, 1, this.options.duration)
            } else {
                this.pos = cd = ce
            }
            this.now = (this.end - this.start) * cd + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (i && i.set) {
                i.set(this)
            } else {
                P.propHooks._default.set(this)
            }
            return this
        }
    };
    P.prototype.init.prototype = P.prototype;
    P.propHooks = {
        _default: {
            get: function(cd) {
                var i;
                if (cd.elem.nodeType !== 1 || cd.elem[cd.prop] != null && cd.elem.style[cd.prop] == null) {
                    return cd.elem[cd.prop]
                }
                i = bP.css(cd.elem, cd.prop, "");
                return !i || i === "auto" ? 0 : i
            },
            set: function(i) {
                if (bP.fx.step[i.prop]) {
                    bP.fx.step[i.prop](i)
                } else {
                    if (i.elem.nodeType === 1 && (i.elem.style[bP.cssProps[i.prop]] != null || bP.cssHooks[i.prop])) {
                        bP.style(i.elem, i.prop, i.now + i.unit)
                    } else {
                        i.elem[i.prop] = i.now
                    }
                }
            }
        }
    };
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(i) {
            if (i.elem.nodeType && i.elem.parentNode) {
                i.elem[i.prop] = i.now
            }
        }
    };
    bP.easing = {
        linear: function(i) {
            return i
        },
        swing: function(i) {
            return 0.5 - Math.cos(i * Math.PI) / 2
        },
        _default: "swing"
    };
    bP.fx = P.prototype.init;
    bP.fx.step = {};
    var U, al, bX = /^(?:toggle|show|hide)$/,
        bV = /queueHooks$/;

    function bu() {
        bc.setTimeout(function() {
            U = undefined
        });
        return (U = bP.now())
    }

    function bO(cf, ch) {
        var cg, cd = {
                height: cf
            },
            ce = 0;
        ch = ch ? 1 : 0;
        for (; ce < 4; ce += 2 - ch) {
            cg = b0[ce];
            cd["margin" + cg] = cd["padding" + cg] = cf
        }
        if (ch) {
            cd.opacity = cd.width = cf
        }
        return cd
    }

    function bk(cg, ci, cf) {
        var cd, ch = (e.tweeners[ci] || []).concat(e.tweeners["*"]),
            i = 0,
            ce = ch.length;
        for (; i < ce; i++) {
            if ((cd = ch[i].call(cf, ci, cg))) {
                return cd
            }
        }
    }

    function g(cf, ck, i) {
        var ce, cn, ch, cq, cr, co, cj, cm, cg = this,
            cl = {},
            cd = cf.style,
            ci = cf.nodeType && aa(cf),
            cp = bP._data(cf, "fxshow");
        if (!i.queue) {
            cr = bP._queueHooks(cf, "fx");
            if (cr.unqueued == null) {
                cr.unqueued = 0;
                co = cr.empty.fire;
                cr.empty.fire = function() {
                    if (!cr.unqueued) {
                        co()
                    }
                }
            }
            cr.unqueued++;
            cg.always(function() {
                cg.always(function() {
                    cr.unqueued--;
                    if (!bP.queue(cf, "fx").length) {
                        cr.empty.fire()
                    }
                })
            })
        }
        if (cf.nodeType === 1 && ("height" in ck || "width" in ck)) {
            i.overflow = [cd.overflow, cd.overflowX, cd.overflowY];
            cj = bP.css(cf, "display");
            cm = cj === "none" ? bP._data(cf, "olddisplay") || a8(cf.nodeName) : cj;
            if (cm === "inline" && bP.css(cf, "float") === "none") {
                if (!F.inlineBlockNeedsLayout || a8(cf.nodeName) === "inline") {
                    cd.display = "inline-block"
                } else {
                    cd.zoom = 1
                }
            }
        }
        if (i.overflow) {
            cd.overflow = "hidden";
            if (!F.shrinkWrapBlocks()) {
                cg.always(function() {
                    cd.overflow = i.overflow[0];
                    cd.overflowX = i.overflow[1];
                    cd.overflowY = i.overflow[2]
                })
            }
        }
        for (ce in ck) {
            cn = ck[ce];
            if (bX.exec(cn)) {
                delete ck[ce];
                ch = ch || cn === "toggle";
                if (cn === (ci ? "hide" : "show")) {
                    if (cn === "show" && cp && cp[ce] !== undefined) {
                        ci = true
                    } else {
                        continue
                    }
                }
                cl[ce] = cp && cp[ce] || bP.style(cf, ce)
            } else {
                cj = undefined
            }
        }
        if (!bP.isEmptyObject(cl)) {
            if (cp) {
                if ("hidden" in cp) {
                    ci = cp.hidden
                }
            } else {
                cp = bP._data(cf, "fxshow", {})
            }
            if (ch) {
                cp.hidden = !ci
            }
            if (ci) {
                bP(cf).show()
            } else {
                cg.done(function() {
                    bP(cf).hide()
                })
            }
            cg.done(function() {
                var cs;
                bP._removeData(cf, "fxshow");
                for (cs in cl) {
                    bP.style(cf, cs, cl[cs])
                }
            });
            for (ce in cl) {
                cq = bk(ci ? cp[ce] : 0, ce, cg);
                if (!(ce in cp)) {
                    cp[ce] = cq.start;
                    if (ci) {
                        cq.end = cq.start;
                        cq.start = ce === "width" || ce === "height" ? 1 : 0
                    }
                }
            }
        } else {
            if ((cj === "none" ? a8(cf.nodeName) : cj) === "inline") {
                cd.display = cj
            }
        }
    }

    function aw(cf, ch) {
        var ce, cd, ci, cg, i;
        for (ce in cf) {
            cd = bP.camelCase(ce);
            ci = ch[cd];
            cg = cf[ce];
            if (bP.isArray(cg)) {
                ci = cg[1];
                cg = cf[ce] = cg[0]
            }
            if (ce !== cd) {
                cf[cd] = cg;
                delete cf[ce]
            }
            i = bP.cssHooks[cd];
            if (i && "expand" in i) {
                cg = i.expand(cg);
                delete cf[cd];
                for (ce in cg) {
                    if (!(ce in cf)) {
                        cf[ce] = cg[ce];
                        ch[ce] = ci
                    }
                }
            } else {
                ch[cd] = ci
            }
        }
    }

    function e(ce, ci, cl) {
        var cm, i, ch = 0,
            cd = e.prefilters.length,
            ck = bP.Deferred().always(function() {
                delete cg.elem
            }),
            cg = function() {
                if (i) {
                    return false
                }
                var cs = U || bu(),
                    cp = Math.max(0, cf.startTime + cf.duration - cs),
                    cn = cp / cf.duration || 0,
                    cr = 1 - cn,
                    co = 0,
                    cq = cf.tweens.length;
                for (; co < cq; co++) {
                    cf.tweens[co].run(cr)
                }
                ck.notifyWith(ce, [cf, cr, cp]);
                if (cr < 1 && cq) {
                    return cp
                } else {
                    ck.resolveWith(ce, [cf]);
                    return false
                }
            },
            cf = ck.promise({
                elem: ce,
                props: bP.extend({}, ci),
                opts: bP.extend(true, {
                    specialEasing: {},
                    easing: bP.easing._default
                }, cl),
                originalProperties: ci,
                originalOptions: cl,
                startTime: U || bu(),
                duration: cl.duration,
                tweens: [],
                createTween: function(cp, cn) {
                    var co = bP.Tween(ce, cf.opts, cp, cn, cf.opts.specialEasing[cp] || cf.opts.easing);
                    cf.tweens.push(co);
                    return co
                },
                stop: function(co) {
                    var cn = 0,
                        cp = co ? cf.tweens.length : 0;
                    if (i) {
                        return this
                    }
                    i = true;
                    for (; cn < cp; cn++) {
                        cf.tweens[cn].run(1)
                    }
                    if (co) {
                        ck.notifyWith(ce, [cf, 1, 0]);
                        ck.resolveWith(ce, [cf, co])
                    } else {
                        ck.rejectWith(ce, [cf, co])
                    }
                    return this
                }
            }),
            cj = cf.props;
        aw(cj, cf.opts.specialEasing);
        for (; ch < cd; ch++) {
            cm = e.prefilters[ch].call(cf, ce, cj, cf.opts);
            if (cm) {
                if (bP.isFunction(cm.stop)) {
                    bP._queueHooks(cf.elem, cf.opts.queue).stop = bP.proxy(cm.stop, cm)
                }
                return cm
            }
        }
        bP.map(cj, bk, cf);
        if (bP.isFunction(cf.opts.start)) {
            cf.opts.start.call(ce, cf)
        }
        bP.fx.timer(bP.extend(cg, {
            elem: ce,
            anim: cf,
            queue: cf.opts.queue
        }));
        return cf.progress(cf.opts.progress).done(cf.opts.done, cf.opts.complete).fail(cf.opts.fail).always(cf.opts.always)
    }
    bP.Animation = bP.extend(e, {
        tweeners: {
            "*": [function(ce, cd) {
                var i = this.createTween(ce, cd);
                A(i.elem, ce, b6.exec(cd), i);
                return i
            }]
        },
        tweener: function(cd, cg) {
            if (bP.isFunction(cd)) {
                cg = cd;
                cd = ["*"]
            } else {
                cd = cd.match(aM)
            }
            var cf, i = 0,
                ce = cd.length;
            for (; i < ce; i++) {
                cf = cd[i];
                e.tweeners[cf] = e.tweeners[cf] || [];
                e.tweeners[cf].unshift(cg)
            }
        },
        prefilters: [g],
        prefilter: function(cd, i) {
            if (i) {
                e.prefilters.unshift(cd)
            } else {
                e.prefilters.push(cd)
            }
        }
    });
    bP.speed = function(ce, cf, cd) {
        var i = ce && typeof ce === "object" ? bP.extend({}, ce) : {
            complete: cd || !cd && cf || bP.isFunction(ce) && ce,
            duration: ce,
            easing: cd && cf || cf && !bP.isFunction(cf) && cf
        };
        i.duration = bP.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in bP.fx.speeds ? bP.fx.speeds[i.duration] : bP.fx.speeds._default;
        if (i.queue == null || i.queue === true) {
            i.queue = "fx"
        }
        i.old = i.complete;
        i.complete = function() {
            if (bP.isFunction(i.old)) {
                i.old.call(this)
            }
            if (i.queue) {
                bP.dequeue(this, i.queue)
            }
        };
        return i
    };
    bP.fn.extend({
        fadeTo: function(i, cf, ce, cd) {
            return this.filter(aa).css("opacity", 0).show().end().animate({
                opacity: cf
            }, i, ce, cd)
        },
        animate: function(ci, cf, ch, cg) {
            var ce = bP.isEmptyObject(ci),
                i = bP.speed(cf, ch, cg),
                cd = function() {
                    var cj = e(this, bP.extend({}, ci), i);
                    if (ce || bP._data(this, "finish")) {
                        cj.stop(true)
                    }
                };
            cd.finish = cd;
            return ce || i.queue === false ? this.each(cd) : this.queue(i.queue, cd)
        },
        stop: function(ce, cd, i) {
            var cf = function(cg) {
                var ch = cg.stop;
                delete cg.stop;
                ch(i)
            };
            if (typeof ce !== "string") {
                i = cd;
                cd = ce;
                ce = undefined
            }
            if (cd && ce !== false) {
                this.queue(ce || "fx", [])
            }
            return this.each(function() {
                var cj = true,
                    cg = ce != null && ce + "queueHooks",
                    ci = bP.timers,
                    ch = bP._data(this);
                if (cg) {
                    if (ch[cg] && ch[cg].stop) {
                        cf(ch[cg])
                    }
                } else {
                    for (cg in ch) {
                        if (ch[cg] && ch[cg].stop && bV.test(cg)) {
                            cf(ch[cg])
                        }
                    }
                }
                for (cg = ci.length; cg--;) {
                    if (ci[cg].elem === this && (ce == null || ci[cg].queue === ce)) {
                        ci[cg].anim.stop(i);
                        cj = false;
                        ci.splice(cg, 1)
                    }
                }
                if (cj || !i) {
                    bP.dequeue(this, ce)
                }
            })
        },
        finish: function(i) {
            if (i !== false) {
                i = i || "fx"
            }
            return this.each(function() {
                var cf, ci = bP._data(this),
                    ce = ci[i + "queue"],
                    cd = ci[i + "queueHooks"],
                    ch = bP.timers,
                    cg = ce ? ce.length : 0;
                ci.finish = true;
                bP.queue(this, i, []);
                if (cd && cd.stop) {
                    cd.stop.call(this, true)
                }
                for (cf = ch.length; cf--;) {
                    if (ch[cf].elem === this && ch[cf].queue === i) {
                        ch[cf].anim.stop(true);
                        ch.splice(cf, 1)
                    }
                }
                for (cf = 0; cf < cg; cf++) {
                    if (ce[cf] && ce[cf].finish) {
                        ce[cf].finish.call(this)
                    }
                }
                delete ci.finish
            })
        }
    });
    bP.each(["toggle", "show", "hide"], function(ce, cd) {
        var cf = bP.fn[cd];
        bP.fn[cd] = function(i, ch, cg) {
            return i == null || typeof i === "boolean" ? cf.apply(this, arguments) : this.animate(bO(cd, true), i, ch, cg)
        }
    });
    bP.each({
        slideDown: bO("show"),
        slideUp: bO("hide"),
        slideToggle: bO("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(i, cd) {
        bP.fn[i] = function(ce, cg, cf) {
            return this.animate(cd, ce, cg, cf)
        }
    });
    bP.timers = [];
    bP.fx.tick = function() {
        var cf, ce = bP.timers,
            cd = 0;
        U = bP.now();
        for (; cd < ce.length; cd++) {
            cf = ce[cd];
            if (!cf() && ce[cd] === cf) {
                ce.splice(cd--, 1)
            }
        }
        if (!ce.length) {
            bP.fx.stop()
        }
        U = undefined
    };
    bP.fx.timer = function(i) {
        bP.timers.push(i);
        if (i()) {
            bP.fx.start()
        } else {
            bP.timers.pop()
        }
    };
    bP.fx.interval = 13;
    bP.fx.start = function() {
        if (!al) {
            al = bc.setInterval(bP.fx.tick, bP.fx.interval)
        }
    };
    bP.fx.stop = function() {
        bc.clearInterval(al);
        al = null
    };
    bP.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bP.fn.delay = function(cd, i) {
        cd = bP.fx ? bP.fx.speeds[cd] || cd : cd;
        i = i || "fx";
        return this.queue(i, function(cf, ce) {
            var cg = bc.setTimeout(cf, cd);
            ce.stop = function() {
                bc.clearTimeout(cg)
            }
        })
    };
    (function() {
        var cd, ce = m.createElement("input"),
            cg = m.createElement("div"),
            i = m.createElement("select"),
            cf = i.appendChild(m.createElement("option"));
        cg = m.createElement("div");
        cg.setAttribute("className", "t");
        cg.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        cd = cg.getElementsByTagName("a")[0];
        ce.setAttribute("type", "checkbox");
        cg.appendChild(ce);
        cd = cg.getElementsByTagName("a")[0];
        cd.style.cssText = "top:1px";
        F.getSetAttribute = cg.className !== "t";
        F.style = /top/.test(cd.getAttribute("style"));
        F.hrefNormalized = cd.getAttribute("href") === "/a";
        F.checkOn = !!ce.value;
        F.optSelected = cf.selected;
        F.enctype = !!m.createElement("form").enctype;
        i.disabled = true;
        F.optDisabled = !cf.disabled;
        ce = m.createElement("input");
        ce.setAttribute("value", "");
        F.input = ce.getAttribute("value") === "";
        ce.value = "t";
        ce.setAttribute("type", "radio");
        F.radioValue = ce.value === "t"
    })();
    var at = /\r/g,
        a4 = /[\x20\t\r\n\f]+/g;
    bP.fn.extend({
        val: function(cf) {
            var i, cd, cg, ce = this[0];
            if (!arguments.length) {
                if (ce) {
                    i = bP.valHooks[ce.type] || bP.valHooks[ce.nodeName.toLowerCase()];
                    if (i && "get" in i && (cd = i.get(ce, "value")) !== undefined) {
                        return cd
                    }
                    cd = ce.value;
                    return typeof cd === "string" ? cd.replace(at, "") : cd == null ? "" : cd
                }
                return
            }
            cg = bP.isFunction(cf);
            return this.each(function(ch) {
                var ci;
                if (this.nodeType !== 1) {
                    return
                }
                if (cg) {
                    ci = cf.call(this, ch, bP(this).val())
                } else {
                    ci = cf
                }
                if (ci == null) {
                    ci = ""
                } else {
                    if (typeof ci === "number") {
                        ci += ""
                    } else {
                        if (bP.isArray(ci)) {
                            ci = bP.map(ci, function(cj) {
                                return cj == null ? "" : cj + ""
                            })
                        }
                    }
                }
                i = bP.valHooks[this.type] || bP.valHooks[this.nodeName.toLowerCase()];
                if (!i || !("set" in i) || i.set(this, ci, "value") === undefined) {
                    this.value = ci
                }
            })
        }
    });
    bP.extend({
        valHooks: {
            option: {
                get: function(i) {
                    var cd = bP.find.attr(i, "value");
                    return cd != null ? cd : bP.trim(bP.text(i)).replace(a4, " ")
                }
            },
            select: {
                get: function(cd) {
                    var cj, cf, cl = cd.options,
                        ch = cd.selectedIndex,
                        cg = cd.type === "select-one" || ch < 0,
                        ck = cg ? null : [],
                        ci = cg ? ch + 1 : cl.length,
                        ce = ch < 0 ? ci : cg ? ch : 0;
                    for (; ce < ci; ce++) {
                        cf = cl[ce];
                        if ((cf.selected || ce === ch) && (F.optDisabled ? !cf.disabled : cf.getAttribute("disabled") === null) && (!cf.parentNode.disabled || !bP.nodeName(cf.parentNode, "optgroup"))) {
                            cj = bP(cf).val();
                            if (cg) {
                                return cj
                            }
                            ck.push(cj)
                        }
                    }
                    return ck
                },
                set: function(ci, cj) {
                    var ck, ch, cf = ci.options,
                        cd = bP.makeArray(cj),
                        cg = cf.length;
                    while (cg--) {
                        ch = cf[cg];
                        if (bP.inArray(bP.valHooks.option.get(ch), cd) > -1) {
                            try {
                                ch.selected = ck = true
                            } catch (ce) {
                                ch.scrollHeight
                            }
                        } else {
                            ch.selected = false
                        }
                    }
                    if (!ck) {
                        ci.selectedIndex = -1
                    }
                    return cf
                }
            }
        }
    });
    bP.each(["radio", "checkbox"], function() {
        bP.valHooks[this] = {
            set: function(i, cd) {
                if (bP.isArray(cd)) {
                    return (i.checked = bP.inArray(bP(i).val(), cd) > -1)
                }
            }
        };
        if (!F.checkOn) {
            bP.valHooks[this].get = function(i) {
                return i.getAttribute("value") === null ? "on" : i.value
            }
        }
    });
    var bh, ca, bU = bP.expr.attrHandle,
        ay = /^(?:checked|selected)$/i,
        bT = F.getSetAttribute,
        bM = F.input;
    bP.fn.extend({
        attr: function(i, cd) {
            return aJ(this, bP.attr, i, cd, arguments.length > 1)
        },
        removeAttr: function(i) {
            return this.each(function() {
                bP.removeAttr(this, i)
            })
        }
    });
    bP.extend({
        attr: function(cg, cf, ch) {
            var ce, i, cd = cg.nodeType;
            if (cd === 3 || cd === 8 || cd === 2) {
                return
            }
            if (typeof cg.getAttribute === "undefined") {
                return bP.prop(cg, cf, ch)
            }
            if (cd !== 1 || !bP.isXMLDoc(cg)) {
                cf = cf.toLowerCase();
                i = bP.attrHooks[cf] || (bP.expr.match.bool.test(cf) ? ca : bh)
            }
            if (ch !== undefined) {
                if (ch === null) {
                    bP.removeAttr(cg, cf);
                    return
                }
                if (i && "set" in i && (ce = i.set(cg, ch, cf)) !== undefined) {
                    return ce
                }
                cg.setAttribute(cf, ch + "");
                return ch
            }
            if (i && "get" in i && (ce = i.get(cg, cf)) !== null) {
                return ce
            }
            ce = bP.find.attr(cg, cf);
            return ce == null ? undefined : ce
        },
        attrHooks: {
            type: {
                set: function(i, cd) {
                    if (!F.radioValue && cd === "radio" && bP.nodeName(i, "input")) {
                        var ce = i.value;
                        i.setAttribute("type", cd);
                        if (ce) {
                            i.value = ce
                        }
                        return cd
                    }
                }
            }
        },
        removeAttr: function(cf, ch) {
            var cd, cg, ce = 0,
                ci = ch && ch.match(aM);
            if (ci && cf.nodeType === 1) {
                while ((cd = ci[ce++])) {
                    cg = bP.propFix[cd] || cd;
                    if (bP.expr.match.bool.test(cd)) {
                        if (bM && bT || !ay.test(cd)) {
                            cf[cg] = false
                        } else {
                            cf[bP.camelCase("default-" + cd)] = cf[cg] = false
                        }
                    } else {
                        bP.attr(cf, cd, "")
                    }
                    cf.removeAttribute(bT ? cd : cg)
                }
            }
        }
    });
    ca = {
        set: function(cd, ce, i) {
            if (ce === false) {
                bP.removeAttr(cd, i)
            } else {
                if (bM && bT || !ay.test(i)) {
                    cd.setAttribute(!bT && bP.propFix[i] || i, i)
                } else {
                    cd[bP.camelCase("default-" + i)] = cd[i] = true
                }
            }
            return i
        }
    };
    bP.each(bP.expr.match.bool.source.match(/\w+/g), function(cf, ce) {
        var cd = bU[ce] || bP.find.attr;
        if (bM && bT || !ay.test(ce)) {
            bU[ce] = function(ch, cg, cj) {
                var i, ci;
                if (!cj) {
                    ci = bU[cg];
                    bU[cg] = i;
                    i = cd(ch, cg, cj) != null ? cg.toLowerCase() : null;
                    bU[cg] = ci
                }
                return i
            }
        } else {
            bU[ce] = function(cg, i, ch) {
                if (!ch) {
                    return cg[bP.camelCase("default-" + i)] ? i.toLowerCase() : null
                }
            }
        }
    });
    if (!bM || !bT) {
        bP.attrHooks.value = {
            set: function(cd, ce, i) {
                if (bP.nodeName(cd, "input")) {
                    cd.defaultValue = ce
                } else {
                    return bh && bh.set(cd, ce, i)
                }
            }
        }
    }
    if (!bT) {
        bh = {
            set: function(ce, cf, cd) {
                var i = ce.getAttributeNode(cd);
                if (!i) {
                    ce.setAttributeNode((i = ce.ownerDocument.createAttribute(cd)))
                }
                i.value = cf += "";
                if (cd === "value" || cf === ce.getAttribute(cd)) {
                    return cf
                }
            }
        };
        bU.id = bU.name = bU.coords = function(ce, cd, cf) {
            var i;
            if (!cf) {
                return (i = ce.getAttributeNode(cd)) && i.value !== "" ? i.value : null
            }
        };
        bP.valHooks.button = {
            get: function(ce, cd) {
                var i = ce.getAttributeNode(cd);
                if (i && i.specified) {
                    return i.value
                }
            },
            set: bh.set
        };
        bP.attrHooks.contenteditable = {
            set: function(cd, ce, i) {
                bh.set(cd, ce === "" ? false : ce, i)
            }
        };
        bP.each(["width", "height"], function(ce, cd) {
            bP.attrHooks[cd] = {
                set: function(i, cf) {
                    if (cf === "") {
                        i.setAttribute(cd, "auto");
                        return cf
                    }
                }
            }
        })
    }
    if (!F.style) {
        bP.attrHooks.style = {
            get: function(i) {
                return i.style.cssText || undefined
            },
            set: function(i, cd) {
                return (i.style.cssText = cd + "")
            }
        }
    }
    var aP = /^(?:input|select|textarea|button|object)$/i,
        H = /^(?:a|area)$/i;
    bP.fn.extend({
        prop: function(i, cd) {
            return aJ(this, bP.prop, i, cd, arguments.length > 1)
        },
        removeProp: function(i) {
            i = bP.propFix[i] || i;
            return this.each(function() {
                try {
                    this[i] = undefined;
                    delete this[i]
                } catch (cd) {}
            })
        }
    });
    bP.extend({
        prop: function(cg, cf, ch) {
            var ce, i, cd = cg.nodeType;
            if (cd === 3 || cd === 8 || cd === 2) {
                return
            }
            if (cd !== 1 || !bP.isXMLDoc(cg)) {
                cf = bP.propFix[cf] || cf;
                i = bP.propHooks[cf]
            }
            if (ch !== undefined) {
                if (i && "set" in i && (ce = i.set(cg, ch, cf)) !== undefined) {
                    return ce
                }
                return (cg[cf] = ch)
            }
            if (i && "get" in i && (ce = i.get(cg, cf)) !== null) {
                return ce
            }
            return cg[cf]
        },
        propHooks: {
            tabIndex: {
                get: function(cd) {
                    var i = bP.find.attr(cd, "tabindex");
                    return i ? parseInt(i, 10) : aP.test(cd.nodeName) || H.test(cd.nodeName) && cd.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!F.hrefNormalized) {
        bP.each(["href", "src"], function(ce, cd) {
            bP.propHooks[cd] = {
                get: function(i) {
                    return i.getAttribute(cd, 4)
                }
            }
        })
    }
    if (!F.optSelected) {
        bP.propHooks.selected = {
            get: function(cd) {
                var i = cd.parentNode;
                if (i) {
                    i.selectedIndex;
                    if (i.parentNode) {
                        i.parentNode.selectedIndex
                    }
                }
                return null
            },
            set: function(cd) {
                var i = cd.parentNode;
                if (i) {
                    i.selectedIndex;
                    if (i.parentNode) {
                        i.parentNode.selectedIndex
                    }
                }
            }
        }
    }
    bP.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bP.propFix[this.toLowerCase()] = this
    });
    if (!F.enctype) {
        bP.propFix.enctype = "encoding"
    }
    var bR = /[\t\r\n\f]/g;

    function D(i) {
        return bP.attr(i, "class") || ""
    }
    bP.fn.extend({
        addClass: function(ck) {
            var cf, ce, cl, cg, cj, ch, cd, ci = 0;
            if (bP.isFunction(ck)) {
                return this.each(function(i) {
                    bP(this).addClass(ck.call(this, i, D(this)))
                })
            }
            if (typeof ck === "string" && ck) {
                cf = ck.match(aM) || [];
                while ((ce = this[ci++])) {
                    cg = D(ce);
                    cl = ce.nodeType === 1 && (" " + cg + " ").replace(bR, " ");
                    if (cl) {
                        ch = 0;
                        while ((cj = cf[ch++])) {
                            if (cl.indexOf(" " + cj + " ") < 0) {
                                cl += cj + " "
                            }
                        }
                        cd = bP.trim(cl);
                        if (cg !== cd) {
                            bP.attr(ce, "class", cd)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(ck) {
            var cf, ce, cl, cg, cj, ch, cd, ci = 0;
            if (bP.isFunction(ck)) {
                return this.each(function(i) {
                    bP(this).removeClass(ck.call(this, i, D(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if (typeof ck === "string" && ck) {
                cf = ck.match(aM) || [];
                while ((ce = this[ci++])) {
                    cg = D(ce);
                    cl = ce.nodeType === 1 && (" " + cg + " ").replace(bR, " ");
                    if (cl) {
                        ch = 0;
                        while ((cj = cf[ch++])) {
                            while (cl.indexOf(" " + cj + " ") > -1) {
                                cl = cl.replace(" " + cj + " ", " ")
                            }
                        }
                        cd = bP.trim(cl);
                        if (cg !== cd) {
                            bP.attr(ce, "class", cd)
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(ce, i) {
            var cd = typeof ce;
            if (typeof i === "boolean" && cd === "string") {
                return i ? this.addClass(ce) : this.removeClass(ce)
            }
            if (bP.isFunction(ce)) {
                return this.each(function(cf) {
                    bP(this).toggleClass(ce.call(this, cf, D(this), i), i)
                })
            }
            return this.each(function() {
                var ch, cg, cf, ci;
                if (cd === "string") {
                    cg = 0;
                    cf = bP(this);
                    ci = ce.match(aM) || [];
                    while ((ch = ci[cg++])) {
                        if (cf.hasClass(ch)) {
                            cf.removeClass(ch)
                        } else {
                            cf.addClass(ch)
                        }
                    }
                } else {
                    if (ce === undefined || cd === "boolean") {
                        ch = D(this);
                        if (ch) {
                            bP._data(this, "__className__", ch)
                        }
                        bP.attr(this, "class", ch || ce === false ? "" : bP._data(this, "__className__") || "")
                    }
                }
            })
        },
        hasClass: function(cd) {
            var cf, cg, ce = 0;
            cf = " " + cd + " ";
            while ((cg = this[ce++])) {
                if (cg.nodeType === 1 && (" " + D(cg) + " ").replace(bR, " ").indexOf(cf) > -1) {
                    return true
                }
            }
            return false
        }
    });
    bP.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(ce, cd) {
        bP.fn[cd] = function(cf, i) {
            return arguments.length > 0 ? this.on(cd, null, cf, i) : this.trigger(cd)
        }
    });
    bP.fn.extend({
        hover: function(i, cd) {
            return this.mouseenter(i).mouseleave(cd || i)
        }
    });
    var aV = bc.location;
    var bw = bP.now();
    var bW = (/\?/);
    var a9 = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    bP.parseJSON = function(i) {
        if (bc.JSON && bc.JSON.parse) {
            return bc.JSON.parse(i + "")
        }
        var cf, ce = null,
            cd = bP.trim(i + "");
        return cd && !bP.trim(cd.replace(a9, function(ci, cg, ch, cj) {
            if (cf && cg) {
                ce = 0
            }
            if (ce === 0) {
                return ci
            }
            cf = ch || cg;
            ce += !cj - !ch;
            return ""
        })) ? (Function("return " + cd))() : bP.error("Invalid JSON: " + i)
    };
    bP.parseXML = function(ce) {
        var i, cd;
        if (!ce || typeof ce !== "string") {
            return null
        }
        try {
            if (bc.DOMParser) {
                cd = new bc.DOMParser();
                i = cd.parseFromString(ce, "text/xml")
            } else {
                i = new bc.ActiveXObject("Microsoft.XMLDOM");
                i.async = "false";
                i.loadXML(ce)
            }
        } catch (cf) {
            i = undefined
        }
        if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
            bP.error("Invalid XML: " + ce)
        }
        return i
    };
    var ax = /#.*$/,
        Z = /([?&])_=[^&]*/,
        ao = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        E = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        q = /^(?:GET|HEAD)$/,
        aQ = /^\/\//,
        a1 = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        t = {},
        bg = {},
        a5 = "*/".concat("*"),
        ai = aV.href,
        cb = a1.exec(ai.toLowerCase()) || [];

    function bQ(i) {
        return function(cg, ch) {
            if (typeof cg !== "string") {
                ch = cg;
                cg = "*"
            }
            var cd, ce = 0,
                cf = cg.toLowerCase().match(aM) || [];
            if (bP.isFunction(ch)) {
                while ((cd = cf[ce++])) {
                    if (cd.charAt(0) === "+") {
                        cd = cd.slice(1) || "*";
                        (i[cd] = i[cd] || []).unshift(ch)
                    } else {
                        (i[cd] = i[cd] || []).push(ch)
                    }
                }
            }
        }
    }

    function p(i, ce, ci, cf) {
        var cd = {},
            cg = (i === bg);

        function ch(cj) {
            var ck;
            cd[cj] = true;
            bP.each(i[cj] || [], function(cm, cl) {
                var cn = cl(ce, ci, cf);
                if (typeof cn === "string" && !cg && !cd[cn]) {
                    ce.dataTypes.unshift(cn);
                    ch(cn);
                    return false
                } else {
                    if (cg) {
                        return !(ck = cn)
                    }
                }
            });
            return ck
        }
        return ch(ce.dataTypes[0]) || !cd["*"] && ch("*")
    }

    function s(ce, cf) {
        var i, cd, cg = bP.ajaxSettings.flatOptions || {};
        for (cd in cf) {
            if (cf[cd] !== undefined) {
                (cg[cd] ? ce : (i || (i = {})))[cd] = cf[cd]
            }
        }
        if (i) {
            bP.extend(true, ce, i)
        }
        return ce
    }

    function f(ck, cj, cg) {
        var i, cf, ce, ch, cd = ck.contents,
            ci = ck.dataTypes;
        while (ci[0] === "*") {
            ci.shift();
            if (cf === undefined) {
                cf = ck.mimeType || cj.getResponseHeader("Content-Type")
            }
        }
        if (cf) {
            for (ch in cd) {
                if (cd[ch] && cd[ch].test(cf)) {
                    ci.unshift(ch);
                    break
                }
            }
        }
        if (ci[0] in cg) {
            ce = ci[0]
        } else {
            for (ch in cg) {
                if (!ci[0] || ck.converters[ch + " " + ci[0]]) {
                    ce = ch;
                    break
                }
                if (!i) {
                    i = ch
                }
            }
            ce = ce || i
        }
        if (ce) {
            if (ce !== ci[0]) {
                ci.unshift(ce)
            }
            return cg[ce]
        }
    }

    function an(cn, cf, ck, cd) {
        var i, ci, cl, cg, ce, cm = {},
            cj = cn.dataTypes.slice();
        if (cj[1]) {
            for (cl in cn.converters) {
                cm[cl.toLowerCase()] = cn.converters[cl]
            }
        }
        ci = cj.shift();
        while (ci) {
            if (cn.responseFields[ci]) {
                ck[cn.responseFields[ci]] = cf
            }
            if (!ce && cd && cn.dataFilter) {
                cf = cn.dataFilter(cf, cn.dataType)
            }
            ce = ci;
            ci = cj.shift();
            if (ci) {
                if (ci === "*") {
                    ci = ce
                } else {
                    if (ce !== "*" && ce !== ci) {
                        cl = cm[ce + " " + ci] || cm["* " + ci];
                        if (!cl) {
                            for (i in cm) {
                                cg = i.split(" ");
                                if (cg[1] === ci) {
                                    cl = cm[ce + " " + cg[0]] || cm["* " + cg[0]];
                                    if (cl) {
                                        if (cl === true) {
                                            cl = cm[i]
                                        } else {
                                            if (cm[i] !== true) {
                                                ci = cg[0];
                                                cj.unshift(cg[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (cl !== true) {
                            if (cl && cn["throws"]) {
                                cf = cl(cf)
                            } else {
                                try {
                                    cf = cl(cf)
                                } catch (ch) {
                                    return {
                                        state: "parsererror",
                                        error: cl ? ch : "No conversion from " + ce + " to " + ci
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: cf
        }
    }
    bP.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ai,
            type: "GET",
            isLocal: E.test(cb[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": a5,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": bP.parseJSON,
                "text xml": bP.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(cd, i) {
            return i ? s(s(cd, bP.ajaxSettings), i) : s(bP.ajaxSettings, cd)
        },
        ajaxPrefilter: bQ(t),
        ajaxTransport: bQ(bg),
        ajax: function(ch, ce) {
            if (typeof ch === "object") {
                ce = ch;
                ch = undefined
            }
            ce = ce || {};
            var cq, cs, ci, cx, cm, cd, ct, cf, cl = bP.ajaxSetup({}, ce),
                cz = cl.context || cl,
                co = cl.context && (cz.nodeType || cz.jquery) ? bP(cz) : bP.event,
                cy = bP.Deferred(),
                cv = bP.Callbacks("once memory"),
                cj = cl.statusCode || {},
                cp = {},
                cw = {},
                cg = 0,
                ck = "canceled",
                cr = {
                    readyState: 0,
                    getResponseHeader: function(cA) {
                        var i;
                        if (cg === 2) {
                            if (!cf) {
                                cf = {};
                                while ((i = ao.exec(cx))) {
                                    cf[i[1].toLowerCase()] = i[2]
                                }
                            }
                            i = cf[cA.toLowerCase()]
                        }
                        return i == null ? null : i
                    },
                    getAllResponseHeaders: function() {
                        return cg === 2 ? cx : null
                    },
                    setRequestHeader: function(cA, cB) {
                        var i = cA.toLowerCase();
                        if (!cg) {
                            cA = cw[i] = cw[i] || cA;
                            cp[cA] = cB
                        }
                        return this
                    },
                    overrideMimeType: function(i) {
                        if (!cg) {
                            cl.mimeType = i
                        }
                        return this
                    },
                    statusCode: function(cA) {
                        var i;
                        if (cA) {
                            if (cg < 2) {
                                for (i in cA) {
                                    cj[i] = [cj[i], cA[i]]
                                }
                            } else {
                                cr.always(cA[cr.status])
                            }
                        }
                        return this
                    },
                    abort: function(cA) {
                        var i = cA || ck;
                        if (ct) {
                            ct.abort(i)
                        }
                        cn(0, i);
                        return this
                    }
                };
            cy.promise(cr).complete = cv.add;
            cr.success = cr.done;
            cr.error = cr.fail;
            cl.url = ((ch || cl.url || ai) + "").replace(ax, "").replace(aQ, cb[1] + "//");
            cl.type = ce.method || ce.type || cl.method || cl.type;
            cl.dataTypes = bP.trim(cl.dataType || "*").toLowerCase().match(aM) || [""];
            if (cl.crossDomain == null) {
                cq = a1.exec(cl.url.toLowerCase());
                cl.crossDomain = !!(cq && (cq[1] !== cb[1] || cq[2] !== cb[2] || (cq[3] || (cq[1] === "http:" ? "80" : "443")) !== (cb[3] || (cb[1] === "http:" ? "80" : "443"))))
            }
            if (cl.data && cl.processData && typeof cl.data !== "string") {
                cl.data = bP.param(cl.data, cl.traditional)
            }
            p(t, cl, ce, cr);
            if (cg === 2) {
                return cr
            }
            cd = bP.event && cl.global;
            if (cd && bP.active++ === 0) {
                bP.event.trigger("ajaxStart")
            }
            cl.type = cl.type.toUpperCase();
            cl.hasContent = !q.test(cl.type);
            ci = cl.url;
            if (!cl.hasContent) {
                if (cl.data) {
                    ci = (cl.url += (bW.test(ci) ? "&" : "?") + cl.data);
                    delete cl.data
                }
                if (cl.cache === false) {
                    cl.url = Z.test(ci) ? ci.replace(Z, "$1_=" + bw++) : ci + (bW.test(ci) ? "&" : "?") + "_=" + bw++
                }
            }
            if (cl.ifModified) {
                if (bP.lastModified[ci]) {
                    cr.setRequestHeader("If-Modified-Since", bP.lastModified[ci])
                }
                if (bP.etag[ci]) {
                    cr.setRequestHeader("If-None-Match", bP.etag[ci])
                }
            }
            if (cl.data && cl.hasContent && cl.contentType !== false || ce.contentType) {
                cr.setRequestHeader("Content-Type", cl.contentType)
            }
            cr.setRequestHeader("Accept", cl.dataTypes[0] && cl.accepts[cl.dataTypes[0]] ? cl.accepts[cl.dataTypes[0]] + (cl.dataTypes[0] !== "*" ? ", " + a5 + "; q=0.01" : "") : cl.accepts["*"]);
            for (cs in cl.headers) {
                cr.setRequestHeader(cs, cl.headers[cs])
            }
            if (cl.beforeSend && (cl.beforeSend.call(cz, cr, cl) === false || cg === 2)) {
                return cr.abort()
            }
            ck = "abort";
            for (cs in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                cr[cs](cl[cs])
            }
            ct = p(bg, cl, ce, cr);
            if (!ct) {
                cn(-1, "No Transport")
            } else {
                cr.readyState = 1;
                if (cd) {
                    co.trigger("ajaxSend", [cr, cl])
                }
                if (cg === 2) {
                    return cr
                }
                if (cl.async && cl.timeout > 0) {
                    cm = bc.setTimeout(function() {
                        cr.abort("timeout")
                    }, cl.timeout)
                }
                try {
                    cg = 1;
                    ct.send(cp, cn)
                } catch (cu) {
                    if (cg < 2) {
                        cn(-1, cu)
                    } else {
                        throw cu
                    }
                }
            }

            function cn(cE, cA, cF, cC) {
                var i, cI, cG, cD, cH, cB = cA;
                if (cg === 2) {
                    return
                }
                cg = 2;
                if (cm) {
                    bc.clearTimeout(cm)
                }
                ct = undefined;
                cx = cC || "";
                cr.readyState = cE > 0 ? 4 : 0;
                i = cE >= 200 && cE < 300 || cE === 304;
                if (cF) {
                    cD = f(cl, cr, cF)
                }
                cD = an(cl, cD, cr, i);
                if (i) {
                    if (cl.ifModified) {
                        cH = cr.getResponseHeader("Last-Modified");
                        if (cH) {
                            bP.lastModified[ci] = cH
                        }
                        cH = cr.getResponseHeader("etag");
                        if (cH) {
                            bP.etag[ci] = cH
                        }
                    }
                    if (cE === 204 || cl.type === "HEAD") {
                        cB = "nocontent"
                    } else {
                        if (cE === 304) {
                            cB = "notmodified"
                        } else {
                            cB = cD.state;
                            cI = cD.data;
                            cG = cD.error;
                            i = !cG
                        }
                    }
                } else {
                    cG = cB;
                    if (cE || !cB) {
                        cB = "error";
                        if (cE < 0) {
                            cE = 0
                        }
                    }
                }
                cr.status = cE;
                cr.statusText = (cA || cB) + "";
                if (i) {
                    cy.resolveWith(cz, [cI, cB, cr])
                } else {
                    cy.rejectWith(cz, [cr, cB, cG])
                }
                cr.statusCode(cj);
                cj = undefined;
                if (cd) {
                    co.trigger(i ? "ajaxSuccess" : "ajaxError", [cr, cl, i ? cI : cG])
                }
                cv.fireWith(cz, [cr, cB]);
                if (cd) {
                    co.trigger("ajaxComplete", [cr, cl]);
                    if (!(--bP.active)) {
                        bP.event.trigger("ajaxStop")
                    }
                }
            }
            return cr
        },
        getJSON: function(i, cd, ce) {
            return bP.get(i, cd, ce, "json")
        },
        getScript: function(i, cd) {
            return bP.get(i, undefined, cd, "script")
        }
    });
    bP.each(["get", "post"], function(cd, ce) {
        bP[ce] = function(i, cg, ch, cf) {
            if (bP.isFunction(cg)) {
                cf = cf || ch;
                ch = cg;
                cg = undefined
            }
            return bP.ajax(bP.extend({
                url: i,
                type: ce,
                dataType: cf,
                data: cg,
                success: ch
            }, bP.isPlainObject(i) && i))
        }
    });
    bP._evalUrl = function(i) {
        return bP.ajax({
            url: i,
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        })
    };
    bP.fn.extend({
        wrapAll: function(i) {
            if (bP.isFunction(i)) {
                return this.each(function(ce) {
                    bP(this).wrapAll(i.call(this, ce))
                })
            }
            if (this[0]) {
                var cd = bP(i, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    cd.insertBefore(this[0])
                }
                cd.map(function() {
                    var ce = this;
                    while (ce.firstChild && ce.firstChild.nodeType === 1) {
                        ce = ce.firstChild
                    }
                    return ce
                }).append(this)
            }
            return this
        },
        wrapInner: function(i) {
            if (bP.isFunction(i)) {
                return this.each(function(cd) {
                    bP(this).wrapInner(i.call(this, cd))
                })
            }
            return this.each(function() {
                var cd = bP(this),
                    ce = cd.contents();
                if (ce.length) {
                    ce.wrapAll(i)
                } else {
                    cd.append(i)
                }
            })
        },
        wrap: function(i) {
            var cd = bP.isFunction(i);
            return this.each(function(ce) {
                bP(this).wrapAll(cd ? i.call(this, ce) : i)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!bP.nodeName(this, "body")) {
                    bP(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });

    function Q(i) {
        return i.style && i.style.display || bP.css(i, "display")
    }

    function N(i) {
        if (!bP.contains(i.ownerDocument || m, i)) {
            return true
        }
        while (i && i.nodeType === 1) {
            if (Q(i) === "none" || i.type === "hidden") {
                return true
            }
            i = i.parentNode
        }
        return false
    }
    bP.expr.filters.hidden = function(i) {
        return F.reliableHiddenOffsets() ? (i.offsetWidth <= 0 && i.offsetHeight <= 0 && !i.getClientRects().length) : N(i)
    };
    bP.expr.filters.visible = function(i) {
        return !bP.expr.filters.hidden(i)
    };
    var bD = /%20/g,
        aZ = /\[\]$/,
        ae = /\r?\n/g,
        b = /^(?:submit|button|image|reset|file)$/i,
        aC = /^(?:input|select|textarea|keygen)/i;

    function h(ce, cg, cd, cf) {
        var i;
        if (bP.isArray(cg)) {
            bP.each(cg, function(ci, ch) {
                if (cd || aZ.test(ce)) {
                    cf(ce, ch)
                } else {
                    h(ce + "[" + (typeof ch === "object" && ch != null ? ci : "") + "]", ch, cd, cf)
                }
            })
        } else {
            if (!cd && bP.type(cg) === "object") {
                for (i in cg) {
                    h(ce + "[" + i + "]", cg[i], cd, cf)
                }
            } else {
                cf(ce, cg)
            }
        }
    }
    bP.param = function(i, ce) {
        var cf, cd = [],
            cg = function(ch, ci) {
                ci = bP.isFunction(ci) ? ci() : (ci == null ? "" : ci);
                cd[cd.length] = encodeURIComponent(ch) + "=" + encodeURIComponent(ci)
            };
        if (ce === undefined) {
            ce = bP.ajaxSettings && bP.ajaxSettings.traditional
        }
        if (bP.isArray(i) || (i.jquery && !bP.isPlainObject(i))) {
            bP.each(i, function() {
                cg(this.name, this.value)
            })
        } else {
            for (cf in i) {
                h(cf, i[cf], ce, cg)
            }
        }
        return cd.join("&").replace(bD, "+")
    };
    bP.fn.extend({
        serialize: function() {
            return bP.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var i = bP.prop(this, "elements");
                return i ? bP.makeArray(i) : this
            }).filter(function() {
                var i = this.type;
                return this.name && !bP(this).is(":disabled") && aC.test(this.nodeName) && !b.test(i) && (this.checked || !aS.test(i))
            }).map(function(cd, ce) {
                var cf = bP(this).val();
                return cf == null ? null : bP.isArray(cf) ? bP.map(cf, function(i) {
                    return {
                        name: ce.name,
                        value: i.replace(ae, "\r\n")
                    }
                }) : {
                    name: ce.name,
                    value: cf.replace(ae, "\r\n")
                }
            }).get()
        }
    });
    bP.ajaxSettings.xhr = bc.ActiveXObject !== undefined ? function() {
        if (this.isLocal) {
            return bn()
        }
        if (m.documentMode > 8) {
            return bL()
        }
        return /^(get|post|head|put|delete|options)$/i.test(this.type) && bL() || bn()
    } : bL;
    var aI = 0,
        aq = {},
        aG = bP.ajaxSettings.xhr();
    if (bc.attachEvent) {
        bc.attachEvent("onunload", function() {
            for (var i in aq) {
                aq[i](undefined, true)
            }
        })
    }
    F.cors = !!aG && ("withCredentials" in aG);
    aG = F.ajax = !!aG;
    if (aG) {
        bP.ajaxTransport(function(i) {
            if (!i.crossDomain || F.cors) {
                var cd;
                return {
                    send: function(ch, ce) {
                        var cf, cg = i.xhr(),
                            ci = ++aI;
                        cg.open(i.type, i.url, i.async, i.username, i.password);
                        if (i.xhrFields) {
                            for (cf in i.xhrFields) {
                                cg[cf] = i.xhrFields[cf]
                            }
                        }
                        if (i.mimeType && cg.overrideMimeType) {
                            cg.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !ch["X-Requested-With"]) {
                            ch["X-Requested-With"] = "XMLHttpRequest"
                        }
                        for (cf in ch) {
                            if (ch[cf] !== undefined) {
                                cg.setRequestHeader(cf, ch[cf] + "")
                            }
                        }
                        cg.send((i.hasContent && i.data) || null);
                        cd = function(cl, ck) {
                            var cj, co, cm;
                            if (cd && (ck || cg.readyState === 4)) {
                                delete aq[ci];
                                cd = undefined;
                                cg.onreadystatechange = bP.noop;
                                if (ck) {
                                    if (cg.readyState !== 4) {
                                        cg.abort()
                                    }
                                } else {
                                    cm = {};
                                    cj = cg.status;
                                    if (typeof cg.responseText === "string") {
                                        cm.text = cg.responseText
                                    }
                                    try {
                                        co = cg.statusText
                                    } catch (cn) {
                                        co = ""
                                    }
                                    if (!cj && i.isLocal && !i.crossDomain) {
                                        cj = cm.text ? 200 : 404
                                    } else {
                                        if (cj === 1223) {
                                            cj = 204
                                        }
                                    }
                                }
                            }
                            if (cm) {
                                ce(cj, co, cm, cg.getAllResponseHeaders())
                            }
                        };
                        if (!i.async) {
                            cd()
                        } else {
                            if (cg.readyState === 4) {
                                bc.setTimeout(cd)
                            } else {
                                cg.onreadystatechange = aq[ci] = cd
                            }
                        }
                    },
                    abort: function() {
                        if (cd) {
                            cd(undefined, true)
                        }
                    }
                }
            }
        })
    }

    function bL() {
        try {
            return new bc.XMLHttpRequest()
        } catch (i) {}
    }

    function bn() {
        try {
            return new bc.ActiveXObject("Microsoft.XMLHTTP")
        } catch (i) {}
    }
    bP.ajaxPrefilter(function(i) {
        if (i.crossDomain) {
            i.contents.script = false
        }
    });
    bP.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(i) {
                bP.globalEval(i);
                return i
            }
        }
    });
    bP.ajaxPrefilter("script", function(i) {
        if (i.cache === undefined) {
            i.cache = false
        }
        if (i.crossDomain) {
            i.type = "GET";
            i.global = false
        }
    });
    bP.ajaxTransport("script", function(ce) {
        if (ce.crossDomain) {
            var i, cd = m.head || bP("head")[0] || m.documentElement;
            return {
                send: function(cf, cg) {
                    i = m.createElement("script");
                    i.async = true;
                    if (ce.scriptCharset) {
                        i.charset = ce.scriptCharset
                    }
                    i.src = ce.url;
                    i.onload = i.onreadystatechange = function(ci, ch) {
                        if (ch || !i.readyState || /loaded|complete/.test(i.readyState)) {
                            i.onload = i.onreadystatechange = null;
                            if (i.parentNode) {
                                i.parentNode.removeChild(i)
                            }
                            i = null;
                            if (!ch) {
                                cg(200, "success")
                            }
                        }
                    };
                    cd.insertBefore(i, cd.firstChild)
                },
                abort: function() {
                    if (i) {
                        i.onload(undefined, true)
                    }
                }
            }
        }
    });
    var bz = [],
        bf = /(=)\?(?=&|$)|\?\?/;
    bP.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var i = bz.pop() || (bP.expando + "_" + (bw++));
            this[i] = true;
            return i
        }
    });
    bP.ajaxPrefilter("json jsonp", function(cf, i, cg) {
        var ci, cd, ce, ch = cf.jsonp !== false && (bf.test(cf.url) ? "url" : typeof cf.data === "string" && (cf.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && bf.test(cf.data) && "data");
        if (ch || cf.dataTypes[0] === "jsonp") {
            ci = cf.jsonpCallback = bP.isFunction(cf.jsonpCallback) ? cf.jsonpCallback() : cf.jsonpCallback;
            if (ch) {
                cf[ch] = cf[ch].replace(bf, "$1" + ci)
            } else {
                if (cf.jsonp !== false) {
                    cf.url += (bW.test(cf.url) ? "&" : "?") + cf.jsonp + "=" + ci
                }
            }
            cf.converters["script json"] = function() {
                if (!ce) {
                    bP.error(ci + " was not called")
                }
                return ce[0]
            };
            cf.dataTypes[0] = "json";
            cd = bc[ci];
            bc[ci] = function() {
                ce = arguments
            };
            cg.always(function() {
                if (cd === undefined) {
                    bP(bc).removeProp(ci)
                } else {
                    bc[ci] = cd
                }
                if (cf[ci]) {
                    cf.jsonpCallback = i.jsonpCallback;
                    bz.push(ci)
                }
                if (ce && bP.isFunction(cd)) {
                    cd(ce[0])
                }
                ce = cd = undefined
            });
            return "script"
        }
    });
    bP.parseHTML = function(cg, ce, cf) {
        if (!cg || typeof cg !== "string") {
            return null
        }
        if (typeof ce === "boolean") {
            cf = ce;
            ce = false
        }
        ce = ce || m;
        var cd = a.exec(cg),
            i = !cf && [];
        if (cd) {
            return [ce.createElement(cd[1])]
        }
        cd = B([cg], ce, i);
        if (i && i.length) {
            bP(i).remove()
        }
        return bP.merge([], cd.childNodes)
    };
    var b9 = bP.fn.load;
    bP.fn.load = function(cf, ci, cj) {
        if (typeof cf !== "string" && b9) {
            return b9.apply(this, arguments)
        }
        var i, cg, ce, cd = this,
            ch = cf.indexOf(" ");
        if (ch > -1) {
            i = bP.trim(cf.slice(ch, cf.length));
            cf = cf.slice(0, ch)
        }
        if (bP.isFunction(ci)) {
            cj = ci;
            ci = undefined
        } else {
            if (ci && typeof ci === "object") {
                cg = "POST"
            }
        }
        if (cd.length > 0) {
            bP.ajax({
                url: cf,
                type: cg || "GET",
                dataType: "html",
                data: ci
            }).done(function(ck) {
                ce = arguments;
                cd.html(i ? bP("<div>").append(bP.parseHTML(ck)).find(i) : ck)
            }).always(cj && function(cl, ck) {
                cd.each(function() {
                    cj.apply(this, ce || [cl.responseText, ck, cl])
                })
            })
        }
        return this
    };
    bP.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(cd, ce) {
        bP.fn[ce] = function(i) {
            return this.on(ce, i)
        }
    });
    bP.expr.filters.animated = function(i) {
        return bP.grep(bP.timers, function(cd) {
            return i === cd.elem
        }).length
    };

    function by(i) {
        return bP.isWindow(i) ? i : i.nodeType === 9 ? i.defaultView || i.parentWindow : false
    }
    bP.offset = {
        setOffset: function(cf, cp, cj) {
            var cl, ci, cd, cg, ce, cn, co, ck = bP.css(cf, "position"),
                ch = bP(cf),
                cm = {};
            if (ck === "static") {
                cf.style.position = "relative"
            }
            ce = ch.offset();
            cd = bP.css(cf, "top");
            cn = bP.css(cf, "left");
            co = (ck === "absolute" || ck === "fixed") && bP.inArray("auto", [cd, cn]) > -1;
            if (co) {
                cl = ch.position();
                cg = cl.top;
                ci = cl.left
            } else {
                cg = parseFloat(cd) || 0;
                ci = parseFloat(cn) || 0
            }
            if (bP.isFunction(cp)) {
                cp = cp.call(cf, cj, bP.extend({}, ce))
            }
            if (cp.top != null) {
                cm.top = (cp.top - ce.top) + cg
            }
            if (cp.left != null) {
                cm.left = (cp.left - ce.left) + ci
            }
            if ("using" in cp) {
                cp.using.call(cf, cm)
            } else {
                ch.css(cm)
            }
        }
    };
    bP.fn.extend({
        offset: function(cd) {
            if (arguments.length) {
                return cd === undefined ? this : this.each(function(ci) {
                    bP.offset.setOffset(this, cd, ci)
                })
            }
            var i, ch, cf = {
                    top: 0,
                    left: 0
                },
                ce = this[0],
                cg = ce && ce.ownerDocument;
            if (!cg) {
                return
            }
            i = cg.documentElement;
            if (!bP.contains(i, ce)) {
                return cf
            }
            if (typeof ce.getBoundingClientRect !== "undefined") {
                cf = ce.getBoundingClientRect()
            }
            ch = by(cg);
            return {
                top: cf.top + (ch.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: cf.left + (ch.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var ce, cf, i = {
                    top: 0,
                    left: 0
                },
                cd = this[0];
            if (bP.css(cd, "position") === "fixed") {
                cf = cd.getBoundingClientRect()
            } else {
                ce = this.offsetParent();
                cf = this.offset();
                if (!bP.nodeName(ce[0], "html")) {
                    i = ce.offset()
                }
                i.top += bP.css(ce[0], "borderTopWidth", true);
                i.left += bP.css(ce[0], "borderLeftWidth", true)
            }
            return {
                top: cf.top - i.top - bP.css(cd, "marginTop", true),
                left: cf.left - i.left - bP.css(cd, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var i = this.offsetParent;
                while (i && (!bP.nodeName(i, "html") && bP.css(i, "position") === "static")) {
                    i = i.offsetParent
                }
                return i || b1
            })
        }
    });
    bP.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(ce, cd) {
        var i = /Y/.test(cd);
        bP.fn[ce] = function(cf) {
            return aJ(this, function(cg, cj, ci) {
                var ch = by(cg);
                if (ci === undefined) {
                    return ch ? (cd in ch) ? ch[cd] : ch.document.documentElement[cj] : cg[cj]
                }
                if (ch) {
                    ch.scrollTo(!i ? ci : bP(ch).scrollLeft(), i ? ci : bP(ch).scrollTop())
                } else {
                    cg[cj] = ci
                }
            }, ce, cf, arguments.length, null)
        }
    });
    bP.each(["top", "left"], function(cd, ce) {
        bP.cssHooks[ce] = be(F.pixelPosition, function(cf, i) {
            if (i) {
                i = I(cf, ce);
                return ag.test(i) ? bP(cf).position()[ce] + "px" : i
            }
        })
    });
    bP.each({
        Height: "height",
        Width: "width"
    }, function(i, cd) {
        bP.each({
            padding: "inner" + i,
            content: cd,
            "": "outer" + i
        }, function(ce, cf) {
            bP.fn[cf] = function(cj, ci) {
                var ch = arguments.length && (ce || typeof cj !== "boolean"),
                    cg = ce || (cj === true || ci === true ? "margin" : "border");
                return aJ(this, function(cl, ck, cm) {
                    var cn;
                    if (bP.isWindow(cl)) {
                        return cl.document.documentElement["client" + i]
                    }
                    if (cl.nodeType === 9) {
                        cn = cl.documentElement;
                        return Math.max(cl.body["scroll" + i], cn["scroll" + i], cl.body["offset" + i], cn["offset" + i], cn["client" + i])
                    }
                    return cm === undefined ? bP.css(cl, ck, cg) : bP.style(cl, ck, cm, cg)
                }, cd, ch ? cj : undefined, ch, null)
            }
        })
    });
    bP.fn.extend({
        bind: function(i, ce, cd) {
            return this.on(i, null, ce, cd)
        },
        unbind: function(i, cd) {
            return this.off(i, null, cd)
        },
        delegate: function(i, cd, cf, ce) {
            return this.on(cd, i, cf, ce)
        },
        undelegate: function(i, cd, ce) {
            return arguments.length === 1 ? this.off(i, "**") : this.off(cd, i || "**", ce)
        }
    });
    bP.fn.size = function() {
        return this.length
    };
    bP.fn.andSelf = bP.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return bP
        })
    }
    var br = bc.jQuery,
        O = bc.$;
    bP.noConflict = function(i) {
        if (bc.$ === bP) {
            bc.$ = O
        }
        if (i && bc.jQuery === bP) {
            bc.jQuery = br
        }
        return bP
    };
    if (!aD) {
        bc.jQuery = bc.$ = bP
    }
    return bP
}));
jQuery.uaMatch = function(b) {
    b = b.toLowerCase();
    var a = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
    return {
        browser: a[1] || "",
        version: a[2] || "0"
    }
};
if (!jQuery.browser) {
    matched = jQuery.uaMatch(navigator.userAgent);
    browser = {};
    if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version
    }
    if (browser.chrome) {
        browser.webkit = true
    } else {
        if (browser.webkit) {
            browser.safari = true
        }
    }
    jQuery.browser = browser
}(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a()
    } else {
        var b = window.Granite = window.Granite || {};
        b.Sling = a()
    }
}(function() {
    return {
        SELECTOR_INFINITY: ".infinity",
        CHARSET: "_charset_",
        STATUS: ":status",
        STATUS_BROWSER: "browser",
        OPERATION: ":operation",
        OPERATION_DELETE: "delete",
        OPERATION_MOVE: "move",
        DELETE_SUFFIX: "@Delete",
        TYPEHINT_SUFFIX: "@TypeHint",
        COPY_SUFFIX: "@CopyFrom",
        MOVE_SUFFIX: "@MoveFrom",
        ORDER: ":order",
        REPLACE: ":replace",
        DESTINATION: ":dest",
        SAVE_PARAM_PREFIX: ":saveParamPrefix",
        IGNORE_PARAM: ":ignore",
        REQUEST_LOGIN_PARAM: "sling:authRequestLogin",
        LOGIN_URL: "/system/sling/login.html",
        LOGOUT_URL: "/system/sling/logout.html"
    }
}));
(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a()
    } else {
        var b = window.Granite = window.Granite || {};
        b.Util = a()
    }
}(function() {
    var a = function(b) {
        return Object.prototype.toString.call(b) === "[object Array]"
    };
    return {
        patchText: function(d, c) {
            if (c) {
                if (!a(c)) {
                    d = d.replace("{0}", c)
                } else {
                    for (var b = 0; b < c.length; b++) {
                        d = d.replace(("{" + b + "}"), c[b])
                    }
                }
            }
            return d
        },
        getTopWindow: function() {
            var c = window;
            if (this.iFrameTopWindow) {
                return this.iFrameTopWindow
            }
            try {
                while (c.parent && c !== c.parent && c.parent.location.href) {
                    c = c.parent
                }
            } catch (b) {}
            return c
        },
        setIFrameMode: function(b) {
            this.iFrameTopWindow = b || window
        },
        applyDefaults: function() {
            var d;
            var f = arguments[0] || {};
            for (var c = 1; c < arguments.length; c++) {
                d = arguments[c];
                for (var b in d) {
                    var e = d[b];
                    if (d.hasOwnProperty(b) && e !== undefined) {
                        if (e !== null && typeof e === "object" && !(e instanceof Array)) {
                            f[b] = this.applyDefaults(f[b], e)
                        } else {
                            if (e instanceof Array) {
                                f[b] = e.slice(0)
                            } else {
                                f[b] = e
                            }
                        }
                    }
                }
            }
            return f
        },
        getKeyCode: function(b) {
            return b.keyCode ? b.keyCode : b.which
        }
    }
}));
(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a(require("@granite/util"), require("jquery"))
    } else {
        window.Granite.HTTP = a(Granite.Util, jQuery)
    }
}(function(util, $) {
    return (function() {
        var contextPath = null;
        var SCRIPT_URL_REGEXP = /^(?:http|https):\/\/[^/]+(\/.*)\/(?:etc\.clientlibs|etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs|etc\/designs).*\.js(\?.*)?$/;
        var ENCODE_PATH_REGEXP = /[^\w-.~%:/?[\]@!$&'()*+,;=]/;
        var URI_REGEXP = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
        var loginRedirected = false;
        var self = {};
        self.getSchemeAndAuthority = function(uri) {
            if (!uri) {
                return ""
            }
            var result = URI_REGEXP.exec(uri);
            if (result === null) {
                return ""
            }
            return [result[1], result[3]].join("")
        };
        self.getContextPath = function() {
            if (contextPath === null) {
                contextPath = self.detectContextPath()
            }
            return contextPath
        };
        self.detectContextPath = function() {
            try {
                if (window.CQURLInfo) {
                    contextPath = CQURLInfo.contextPath || ""
                } else {
                    var scripts = document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        var result = SCRIPT_URL_REGEXP.exec(scripts[i].src);
                        if (result) {
                            contextPath = result[1];
                            return contextPath
                        }
                    }
                    contextPath = ""
                }
            } catch (e) {}
            return contextPath
        };
        self.externalize = function(url) {
            try {
                if (url.indexOf("/") === 0 && self.getContextPath() && url.indexOf(self.getContextPath() + "/") !== 0) {
                    url = self.getContextPath() + url
                }
            } catch (e) {}
            return url
        };
        self.internalize = function(url, doc) {
            if (url.charAt(0) === "/") {
                if (contextPath === url) {
                    return ""
                } else {
                    if (contextPath && url.indexOf(contextPath + "/") === 0) {
                        return url.substring(contextPath.length)
                    } else {
                        return url
                    }
                }
            }
            if (!doc) {
                doc = document
            }
            var docHost = self.getSchemeAndAuthority(doc.location.href);
            var urlHost = self.getSchemeAndAuthority(url);
            if (docHost === urlHost) {
                return url.substring(urlHost.length + (contextPath ? contextPath.length : 0))
            } else {
                return url
            }
        };
        self.getPath = function(url) {
            if (!url) {
                if (window.CQURLInfo && CQURLInfo.requestPath) {
                    return CQURLInfo.requestPath
                } else {
                    url = window.location.pathname
                }
            } else {
                url = self.removeParameters(url);
                url = self.removeAnchor(url)
            }
            url = self.internalize(url);
            var i = url.indexOf(".", url.lastIndexOf("/"));
            if (i !== -1) {
                url = url.substring(0, i)
            }
            return url
        };
        self.removeAnchor = function(uri) {
            var fragmentIndex = uri.indexOf("#");
            if (fragmentIndex >= 0) {
                return uri.substring(0, fragmentIndex)
            } else {
                return uri
            }
        };
        self.removeParameters = function(uri) {
            var queryIndex = uri.indexOf("?");
            if (queryIndex >= 0) {
                return uri.substring(0, queryIndex)
            } else {
                return uri
            }
        };
        self.encodePathOfURI = function(uri) {
            var DELIMS = ["?", "#"];
            var parts = [uri];
            var delim;
            for (var i = 0, ln = DELIMS.length; i < ln; i++) {
                delim = DELIMS[i];
                if (uri.indexOf(delim) >= 0) {
                    parts = uri.split(delim);
                    break
                }
            }
            if (ENCODE_PATH_REGEXP.test(parts[0])) {
                parts[0] = self.encodePath(parts[0])
            }
            return parts.join(delim)
        };
        self.encodePath = function(uri) {
            uri = encodeURI(uri);
            uri = uri.replace(/%5B/g, "[").replace(/%5D/g, "]");
            uri = uri.replace(/\?/g, "%3F");
            uri = uri.replace(/#/g, "%23");
            return uri
        };
        self.handleLoginRedirect = function() {
            if (!loginRedirected) {
                loginRedirected = true;
                alert(Granite.I18n.get("Your request could not be completed because you have been signed out."));
                var l = util.getTopWindow().document.location;
                l.href = self.externalize("/") + "?resource=" + encodeURIComponent(l.pathname + l.search + l.hash)
            }
        };
        self.getXhrHook = function(url, method, params) {
            method = method || "GET";
            if (window.G_XHR_HOOK && typeof G_XHR_HOOK === "function") {
                var p = {
                    url: url,
                    method: method
                };
                if (params) {
                    p.params = params
                }
                return G_XHR_HOOK(p)
            }
            return null
        };
        self.eval = function(response) {
            if (typeof response !== "object") {
                response = $.ajax({
                    url: response,
                    type: "get",
                    async: false
                })
            }
            try {
                var text = response.body ? response.body : response.responseText;
                return JSON.parse(text)
            } catch (e) {}
            return null
        };
        return self
    }())
}));
(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a(require("@granite/http"))
    } else {
        window.Granite.I18n = a(window.Granite.HTTP)
    }
}(function(a) {
    return (function() {
        var b = {};
        var g = "/libs/cq/i18n/dict.";
        var j = ".json";
        var c = undefined;
        var i = false;
        var f = null;
        var k = {};
        var e = false;
        var d = function(l) {
            if (e) {
                return g + l + j
            }
            var n;
            var m = document.querySelector("html");
            if (m) {
                n = m.getAttribute("data-i18n-dictionary-src")
            }
            if (!n) {
                return g + l + j
            }
            return n.replace("{locale}", encodeURIComponent(l)).replace("{+locale}", l)
        };
        var h = function(n, m) {
            if (m) {
                if (Array.isArray(m)) {
                    for (var l = 0; l < m.length; l++) {
                        n = n.replace("{" + l + "}", m[l])
                    }
                } else {
                    n = n.replace("{0}", m)
                }
            }
            return n
        };
        k.LOCALE_DEFAULT = "en";
        k.PSEUDO_LANGUAGE = "zz";
        k.PSEUDO_PATTERN_KEY = "_pseudoPattern_";
        k.init = function(l) {
            l = l || {};
            this.setLocale(l.locale);
            this.setUrlPrefix(l.urlPrefix);
            this.setUrlSuffix(l.urlSuffix)
        };
        k.setLocale = function(l) {
            if (!l) {
                return
            }
            c = l
        };
        k.getLocale = function() {
            if (typeof c === "function") {
                c = c()
            }
            return c || document.documentElement.lang || k.LOCALE_DEFAULT
        };
        k.setUrlPrefix = function(l) {
            if (!l) {
                return
            }
            g = l;
            e = true
        };
        k.setUrlSuffix = function(l) {
            if (!l) {
                return
            }
            j = l;
            e = true
        };
        k.getDictionary = function(l) {
            l = l || k.getLocale();
            if (!b[l]) {
                i = l.indexOf(k.PSEUDO_LANGUAGE) === 0;
                try {
                    var n = new XMLHttpRequest();
                    n.open("GET", a.externalize(d(l)), false);
                    n.send();
                    b[l] = JSON.parse(n.responseText)
                } catch (m) {}
                if (!b[l]) {
                    b[l] = {}
                }
            }
            return b[l]
        };
        k.get = function(p, m, n) {
            var q;
            var o;
            var l;
            q = k.getDictionary();
            l = i ? k.PSEUDO_PATTERN_KEY : n ? p + " ((" + n + "))" : p;
            if (q) {
                o = q[l]
            }
            if (!o) {
                o = p
            }
            if (i) {
                o = o.replace("{string}", p).replace("{comment}", n ? n : "")
            }
            return h(o, m)
        };
        k.getVar = function(m, l) {
            if (!m) {
                return null
            }
            return k.get(m, null, l)
        };
        k.getLanguages = function() {
            if (!f) {
                try {
                    var l = a.externalize("/libs/wcm/core/resources/languages.overlay.infinity.json");
                    var o = new XMLHttpRequest();
                    o.open("GET", l, false);
                    o.send();
                    var m = JSON.parse(o.responseText);
                    Object.keys(m).forEach(function(q) {
                        var p = m[q];
                        if (p.language) {
                            p.title = k.getVar(p.language)
                        }
                        if (p.title && p.country && p.country !== "*") {
                            p.title += " (" + k.getVar(p.country) + ")"
                        }
                    });
                    f = m
                } catch (n) {
                    f = {}
                }
            }
            return f
        };
        k.parseLocale = function(o) {
            if (!o) {
                return null
            }
            var n = o.indexOf("_");
            if (n < 0) {
                n = o.indexOf("-")
            }
            var m;
            var l;
            if (n < 0) {
                m = o;
                l = null
            } else {
                m = o.substring(0, n);
                l = o.substring(n + 1)
            }
            return {
                code: o,
                language: m,
                country: l
            }
        };
        return k
    }())
}));
(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a()
    } else {
        var b = window.Granite = window.Granite || {};
        b.TouchIndicator = a()
    }
}(function() {
    function c() {
        var d = document.createElement("div");
        d.style.visibility = "hidden";
        d.style.position = "absolute";
        d.style.width = "30px";
        d.style.height = "30px";
        d.style.borderRadius = "20px";
        d.style.border = "5px solid orange";
        d.style.userSelect = "none";
        d.style.opacity = "0.5";
        d.style.zIndex = "2000";
        d.style.pointerEvents = "none";
        return d
    }
    var b = {};
    var a = [];
    return {
        debugWithMouse: false,
        init: function() {
            var d = this;
            var e = function(f) {
                d.update(f.touches);
                return true
            };
            document.addEventListener("touchstart", e);
            document.addEventListener("touchmove", e);
            document.addEventListener("touchend", e);
            if (this.debugWithMouse) {
                document.addEventListener("mousemove", function(f) {
                    f.identifer = "fake";
                    d.update([f]);
                    return true
                })
            }
        },
        update: function(g) {
            var e = {};
            for (var f = 0; f < g.length; f++) {
                var j = g[f];
                var h = j.identifier;
                var d = b[h];
                if (!d) {
                    d = a.pop();
                    if (!d) {
                        d = c();
                        document.body.appendChild(d)
                    }
                }
                e[h] = d;
                d.style.left = (j.pageX - 20) + "px";
                d.style.top = (j.pageY - 20) + "px";
                d.style.visibility = "visible"
            }
            for (h in b) {
                if (b.hasOwnProperty(h) && !e[h]) {
                    d = b[h];
                    d.style.visibility = "hidden";
                    a.push(d)
                }
            }
            b = e
        }
    }
}));
(function(a) {
    if (typeof module === "object" && module.exports) {
        module.exports = a()
    } else {
        var b = window.Granite = window.Granite || {};
        b.OptOutUtil = a()
    }
}(function(b) {
    function a(c) {
        if (String.prototype.trim) {
            return c.trim()
        }
        return c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    return (function() {
        var c = {};
        var d = [];
        var e = [];
        c.init = function(f) {
            if (f) {
                d = f.cookieNames || [];
                e = f.whitelistCookieNames || []
            } else {
                d = [];
                e = []
            }
        };
        c.getCookieNames = function() {
            return d
        };
        c.getWhitelistCookieNames = function() {
            return e
        };
        c.isOptedOut = function() {
            var h = document.cookie.split(";");
            for (var g = 0; g < h.length; g++) {
                var f = h[g];
                var j = a(f.split("=")[0]);
                if (c.getCookieNames().indexOf(j) >= 0) {
                    return true
                }
            }
            return false
        };
        c.maySetCookie = function(f) {
            return !(c.isOptedOut() && c.getWhitelistCookieNames().indexOf(f) === -1)
        };
        return c
    }())
}));
Granite.OptOutUtil.init(window.GraniteOptOutConfig);
Granite.HTTP.detectContextPath();
(function(c, b) {
    var a;
    b.Granite = b.Granite || {};
    b.Granite.$ = b.Granite.$ || c;
    b._g = b._g || {};
    b._g.$ = b._g.$ || c;
    a = Granite.HTTP;
    c.ajaxSetup({
        externalize: true,
        encodePath: true,
        hook: true,
        beforeSend: function(e, d) {
            if (typeof G_IS_HOOKED === "undefined" || !G_IS_HOOKED(d.url)) {
                if (d.externalize) {
                    d.url = a.externalize(d.url)
                }
                if (d.encodePath) {
                    d.url = a.encodePathOfURI(d.url)
                }
            }
            if (d.hook) {
                var f = a.getXhrHook(d.url, d.type, d.data);
                if (f) {
                    d.url = f.url;
                    if (f.params) {
                        if (d.type.toUpperCase() === "GET") {
                            d.url += "?" + c.param(f.params)
                        } else {
                            d.data = c.param(f.params)
                        }
                    }
                }
            }
        },
        statusCode: {
            403: function(d) {
                if (d.getResponseHeader("X-Reason") === "Authentication Failed") {
                    a.handleLoginRedirect()
                }
            }
        }
    });
    c.ajaxSettings.traditional = true
}(jQuery, this));
(function(a) {
    if (window.Granite.csrf) {
        return
    }
    window.Granite.csrf = a(window.Granite.HTTP)
}(function(m) {
    function b() {
        this._handler = []
    }
    b.prototype = {
        then: function(t, s) {
            this._handler.push({
                resolve: t,
                reject: s
            })
        },
        resolve: function() {
            this._execute("resolve", arguments)
        },
        reject: function() {
            this._execute("reject", arguments)
        },
        _execute: function(s, t) {
            if (this._handler === null) {
                throw new Error("Promise already completed.")
            }
            for (var u = 0, v = this._handler.length; u < v; u++) {
                this._handler[u][s].apply(window, t)
            }
            this.then = function(x, w) {
                (s === "resolve" ? x : w).apply(window, t)
            };
            this._handler = null
        }
    };

    function e(t) {
        var u = document.location.host;
        var w = document.location.protocol;
        var v = "//" + u;
        var s = w + v;
        return (t === s || t.slice(0, s.length + 1) === s + "/") || (t === v || t.slice(0, v.length + 1) === v + "/") || !(/^(\/\/|http:|https:).*/.test(t))
    }
    var p = ":cq_csrf_token";
    var g = "CSRF-Token";
    var k = m.externalize("/libs/granite/csrf/token.json");
    var j;
    var r;

    function o(s) {
        if (window.console) {
            console.warn("CSRF data not available;The data may be unavailable by design, such as during non-authenticated requests: " + s)
        }
    }

    function n() {
        var s = new b();
        j = s;
        var t = new XMLHttpRequest();
        t.onreadystatechange = function() {
            if (t.readyState === 4) {
                try {
                    var v = JSON.parse(t.responseText);
                    r = v.token;
                    s.resolve(r)
                } catch (u) {
                    o(u);
                    s.reject(t.responseText)
                }
            }
        };
        t.open("GET", k, true);
        t.send();
        return s
    }

    function d() {
        var t = new XMLHttpRequest();
        t.open("GET", k, false);
        t.send();
        try {
            return r = JSON.parse(t.responseText).token
        } catch (s) {
            o(s)
        }
    }

    function l() {
        r = undefined;
        n()
    }

    function a(t) {
        var u = t.getAttribute("action");
        if (t.method.toUpperCase() === "GET" || (u && !e(u))) {
            return
        }
        if (!r) {
            d()
        }
        if (!r) {
            return
        }
        var s = t.querySelector('input[name="' + p + '"]');
        if (!s) {
            s = document.createElement("input");
            s.setAttribute("type", "hidden");
            s.setAttribute("name", p);
            t.appendChild(s)
        }
        s.setAttribute("value", r)
    }

    function i(s) {
        var t = function(v) {
            var u = v.target;
            if (u.nodeName === "FORM") {
                a(u)
            }
        };
        if (s.addEventListener) {
            s.addEventListener("submit", t, true)
        } else {
            if (s.attachEvent) {
                s.attachEvent("submit", t)
            }
        }
    }
    i(document);
    var h = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(u, s, t) {
        if (u.toLowerCase() !== "get" && e(s)) {
            this._csrf = true;
            this._async = t
        }
        return h.apply(this, arguments)
    };
    var c = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        if (!this._csrf) {
            c.apply(this, arguments);
            return
        }
        if (r) {
            this.setRequestHeader(g, r);
            c.apply(this, arguments);
            return
        }
        if (this._async === false) {
            d();
            if (r) {
                this.setRequestHeader(g, r)
            }
            c.apply(this, arguments);
            return
        }
        var s = this;
        var t = Array.prototype.slice.call(arguments);
        j.then(function(u) {
            s.setRequestHeader(g, u);
            c.apply(s, t)
        }, function() {
            c.apply(s, t)
        })
    };
    var f = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function() {
        a(this);
        return f.apply(this, arguments)
    };
    if (window.Node) {
        var q = Node.prototype.appendChild;
        Node.prototype.appendChild = function() {
            var s = q.apply(this, arguments);
            if (s.nodeName === "IFRAME") {
                try {
                    if (s.contentWindow && !s._csrf) {
                        s._csrf = true;
                        i(s.contentWindow.document)
                    }
                } catch (t) {
                    if (s.src && s.src.length && e(s.src)) {
                        if (window.console) {
                            console.error("Unable to attach CSRF token to an iframe element on the same origin")
                        }
                    }
                }
            }
            return s
        }
    }
    n();
    setInterval(function() {
        n()
    }, 300000);
    return {
        initialised: false,
        refreshToken: n,
        _clearToken: l
    }
}));
window.$CQ = _g.$;
(function() {
    var l;
    var g = [],
        r = [];
    var H = 0;
    var a = +new Date + "";
    var b = 75;
    var j = 40;
    var E = (" \t\x0B\f\xA0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000");
    var w = /\b__p \+= '';/g,
        R = /\b(__p \+=) '' \+/g,
        e = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var z = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var C = /\w*$/;
    var p = /^\s*function[ \n\r\t]+\w/;
    var m = /<%=([\s\S]+?)%>/g;
    var W = RegExp("^[" + E + "]*0+(?=.$)");
    var P = /($^)/;
    var i = /\bthis\b/;
    var T = /['\n\r\t\u2028\u2029\\]/g;
    var x = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"];
    var Z = 0;
    var S = "[object Arguments]",
        t = "[object Array]",
        A = "[object Boolean]",
        I = "[object Date]",
        ab = "[object Function]",
        F = "[object Number]",
        c = "[object Object]",
        J = "[object RegExp]",
        G = "[object String]";
    var u = {};
    u[ab] = false;
    u[S] = u[t] = u[A] = u[I] = u[F] = u[c] = u[J] = u[G] = true;
    var M = {
        leading: false,
        maxWait: 0,
        trailing: false
    };
    var k = {
        configurable: false,
        enumerable: false,
        value: null,
        writable: false
    };
    var D = {
        "boolean": false,
        "function": true,
        object: true,
        number: false,
        string: false,
        "undefined": false
    };
    var L = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var B = (D[typeof window] && window) || this;
    var U = D[typeof exports] && exports && !exports.nodeType && exports;
    var y = D[typeof module] && module && !module.nodeType && module;
    var O = y && y.exports === U && U;
    var v = D[typeof global] && global;
    if (v && (v.global === v || v.window === v)) {
        B = v
    }

    function h(ag, af, ad) {
        var ac = (ad || 0) - 1,
            ae = ag ? ag.length : 0;
        while (++ac < ae) {
            if (ag[ac] === af) {
                return ac
            }
        }
        return -1
    }

    function N(ac, af) {
        var ae = typeof af;
        ac = ac.cache;
        if (ae == "boolean" || af == null) {
            return ac[af] ? 0 : -1
        }
        if (ae != "number" && ae != "string") {
            ae = "object"
        }
        var ad = ae == "number" ? af : a + af;
        ac = (ac = ac[ae]) && ac[ad];
        return ae == "object" ? (ac && h(ac, af) > -1 ? 0 : -1) : (ac ? 0 : -1)
    }

    function K(ag) {
        var ad = this.cache,
            af = typeof ag;
        if (af == "boolean" || ag == null) {
            ad[ag] = true
        } else {
            if (af != "number" && af != "string") {
                af = "object"
            }
            var ae = af == "number" ? ag : a + ag,
                ac = ad[af] || (ad[af] = {});
            if (af == "object") {
                (ac[ae] || (ac[ae] = [])).push(ag)
            } else {
                ac[ae] = true
            }
        }
    }

    function o(ac) {
        return ac.charCodeAt(0)
    }

    function V(af, ae) {
        var ai = af.criteria,
            ak = ae.criteria,
            ag = -1,
            ah = ai.length;
        while (++ag < ah) {
            var aj = ai[ag],
                ad = ak[ag];
            if (aj !== ad) {
                if (aj > ad || typeof aj == "undefined") {
                    return 1
                }
                if (aj < ad || typeof ad == "undefined") {
                    return -1
                }
            }
        }
        return af.index - ae.index
    }

    function Y(aj) {
        var af = -1,
            ah = aj.length,
            ai = aj[0],
            ae = aj[(ah / 2) | 0],
            ag = aj[ah - 1];
        if (ai && typeof ai == "object" && ae && typeof ae == "object" && ag && typeof ag == "object") {
            return false
        }
        var ad = q();
        ad["false"] = ad["null"] = ad["true"] = ad["undefined"] = false;
        var ac = q();
        ac.array = aj;
        ac.cache = ad;
        ac.push = K;
        while (++af < ah) {
            ac.push(aj[af])
        }
        return ac
    }

    function f(ac) {
        return "\\" + L[ac]
    }

    function d() {
        return g.pop() || []
    }

    function q() {
        return r.pop() || {
            array: null,
            cache: null,
            criteria: null,
            "false": false,
            index: 0,
            "null": false,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": false,
            "undefined": false,
            value: null
        }
    }

    function Q(ac) {
        ac.length = 0;
        if (g.length < j) {
            g.push(ac)
        }
    }

    function n(ad) {
        var ac = ad.cache;
        if (ac) {
            n(ac)
        }
        ad.array = ad.cache = ad.criteria = ad.object = ad.number = ad.string = ad.value = null;
        if (r.length < j) {
            r.push(ad)
        }
    }

    function s(ah, ag, ad) {
        ag || (ag = 0);
        if (typeof ad == "undefined") {
            ad = ah ? ah.length : 0
        }
        var ae = -1,
            af = ad - ag || 0,
            ac = Array(af < 0 ? 0 : af);
        while (++ae < af) {
            ac[ae] = ah[ag + ae]
        }
        return ac
    }

    function X(ah) {
        ah = ah ? aa.defaults(B.Object(), ah, aa.pick(B, x)) : B;
        var aF = ah.Array,
            cd = ah.Boolean,
            ce = ah.Date,
            aY = ah.Function,
            b3 = ah.Math,
            bd = ah.Number,
            c1 = ah.Object,
            cF = ah.RegExp,
            co = ah.String,
            aG = ah.TypeError;
        var b7 = [];
        var cJ = c1.prototype;
        var cV = ah._;
        var az = cJ.toString;
        var b0 = cF("^" + co(az).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$");
        var aV = b3.ceil,
            bR = ah.clearTimeout,
            cN = b3.floor,
            bB = aY.prototype.toString,
            ar = b4(ar = c1.getPrototypeOf) && ar,
            aZ = cJ.hasOwnProperty,
            aw = b7.push,
            aW = ah.setTimeout,
            cm = b7.splice,
            cI = b7.unshift;
        var cG = (function() {
            try {
                var dh = {},
                    df = b4(df = c1.defineProperty) && df,
                    at = df(dh, dh, dh) && df
            } catch (dg) {}
            return at
        }());
        var av = b4(av = c1.create) && av,
            be = b4(be = aF.isArray) && be,
            aI = ah.isFinite,
            bD = ah.isNaN,
            ci = b4(ci = c1.keys) && ci,
            cj = b3.max,
            am = b3.min,
            da = ah.parseInt,
            bJ = b3.random;
        var cK = {};
        cK[t] = aF;
        cK[A] = cd;
        cK[I] = ce;
        cK[ab] = aY;
        cK[c] = c1;
        cK[F] = bd;
        cK[J] = cF;
        cK[G] = co;

        function aT(at) {
            return (at && typeof at == "object" && !bC(at) && aZ.call(at, "__wrapped__")) ? at : new cP(at)
        }

        function cP(df, at) {
            this.__chain__ = !!at;
            this.__wrapped__ = df
        }
        cP.prototype = aT.prototype;
        var aE = aT.support = {};
        aE.funcDecomp = !b4(ah.WinRTError) && i.test(X);
        aE.funcNames = typeof aY.name == "string";
        aT.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: m,
            variable: "",
            imports: {
                _: aT
            }
        };

        function ap(di) {
            var dh = di[0],
                df = di[2],
                at = di[4];

            function dg() {
                if (df) {
                    var dl = s(df);
                    aw.apply(dl, arguments)
                }
                if (this instanceof dg) {
                    var dk = bZ(dh.prototype),
                        dj = dh.apply(dk, dl || arguments);
                    return dd(dj) ? dj : dk
                }
                return dh.apply(at, dl || arguments)
            }
            ad(dg, di);
            return dg
        }

        function bi(dn, dk, dp, di, dg) {
            if (dp) {
                var dq = dp(dn);
                if (typeof dq != "undefined") {
                    return dq
                }
            }
            var dh = dd(dn);
            if (dh) {
                var dl = az.call(dn);
                if (!u[dl]) {
                    return dn
                }
                var dm = cK[dl];
                switch (dl) {
                    case A:
                    case I:
                        return new dm(+dn);
                    case F:
                    case G:
                        return new dm(dn);
                    case J:
                        dq = dm(dn.source, C.exec(dn));
                        dq.lastIndex = dn.lastIndex;
                        return dq
                }
            } else {
                return dn
            }
            var dj = bC(dn);
            if (dk) {
                var df = !di;
                di || (di = d());
                dg || (dg = d());
                var at = di.length;
                while (at--) {
                    if (di[at] == dn) {
                        return dg[at]
                    }
                }
                dq = dj ? dm(dn.length) : {}
            } else {
                dq = dj ? s(dn) : br({}, dn)
            }
            if (dj) {
                if (aZ.call(dn, "index")) {
                    dq.index = dn.index
                }
                if (aZ.call(dn, "input")) {
                    dq.input = dn.input
                }
            }
            if (!dk) {
                return dq
            }
            di.push(dn);
            dg.push(dq);
            (dj ? bA : bN)(dn, function(dr, ds) {
                dq[ds] = bi(dr, dk, dp, di, dg)
            });
            if (df) {
                Q(di);
                Q(dg)
            }
            return dq
        }

        function bZ(at, df) {
            return dd(at) ? av(at) : {}
        }
        if (!av) {
            bZ = (function() {
                function at() {}
                return function(dg) {
                    if (dd(dg)) {
                        at.prototype = dg;
                        var df = new at;
                        at.prototype = null
                    }
                    return df || ah.Object()
                }
            }())
        }

        function ct(df, at, di) {
            if (typeof df != "function") {
                return bj
            }
            if (typeof at == "undefined" || !("prototype" in df)) {
                return df
            }
            var dh = df.__bindData__;
            if (typeof dh == "undefined") {
                if (aE.funcNames) {
                    dh = !df.name
                }
                dh = dh || !aE.funcDecomp;
                if (!dh) {
                    var dg = bB.call(df);
                    if (!aE.funcNames) {
                        dh = !p.test(dg)
                    }
                    if (!dh) {
                        dh = i.test(dg);
                        ad(df, dh)
                    }
                }
            }
            if (dh === false || (dh !== true && dh[1] & 1)) {
                return df
            }
            switch (di) {
                case 1:
                    return function(dj) {
                        return df.call(at, dj)
                    };
                case 2:
                    return function(dk, dj) {
                        return df.call(at, dk, dj)
                    };
                case 3:
                    return function(dk, dj, dl) {
                        return df.call(at, dk, dj, dl)
                    };
                case 4:
                    return function(dj, dl, dk, dm) {
                        return df.call(at, dj, dl, dk, dm)
                    }
            }
            return bX(df, at)
        }

        function bl(dh) {
            var dj = dh[0],
                dg = dh[1],
                dl = dh[2],
                df = dh[3],
                dp = dh[4],
                at = dh[5];
            var di = dg & 1,
                dr = dg & 2,
                dn = dg & 4,
                dm = dg & 8,
                dq = dj;

            function dk() {
                var dt = di ? dp : this;
                if (dl) {
                    var du = s(dl);
                    aw.apply(du, arguments)
                }
                if (df || dn) {
                    du || (du = s(arguments));
                    if (df) {
                        aw.apply(du, df)
                    }
                    if (dn && du.length < at) {
                        dg |= 16 & ~32;
                        return bl([dj, (dm ? dg : dg & ~3), du, null, dp, at])
                    }
                }
                du || (du = arguments);
                if (dr) {
                    dj = dt[dq]
                }
                if (this instanceof dk) {
                    dt = bZ(dj.prototype);
                    var ds = dj.apply(dt, du);
                    return dd(ds) ? ds : dt
                }
                return dj.apply(dt, du)
            }
            ad(dk, dh);
            return dk
        }

        function dc(dh, dl) {
            var dg = -1,
                di = b5(),
                df = dh ? dh.length : 0,
                dj = df >= b && di === h,
                dm = [];
            if (dj) {
                var at = Y(dl);
                if (at) {
                    di = N;
                    dl = at
                } else {
                    dj = false
                }
            }
            while (++dg < df) {
                var dk = dh[dg];
                if (di(dl, dk) < 0) {
                    dm.push(dk)
                }
            }
            if (dj) {
                n(dl)
            }
            return dm
        }

        function bT(dh, dj, df, dk) {
            var dg = (dk || 0) - 1,
                at = dh ? dh.length : 0,
                dp = [];
            while (++dg < at) {
                var dl = dh[dg];
                if (dl && typeof dl == "object" && typeof dl.length == "number" && (bC(dl) || a4(dl))) {
                    if (!dj) {
                        dl = bT(dl, dj, df)
                    }
                    var dn = -1,
                        di = dl.length,
                        dm = dp.length;
                    dp.length += di;
                    while (++dn < di) {
                        dp[dm++] = dl[dn]
                    }
                } else {
                    if (!df) {
                        dp.push(dl)
                    }
                }
            }
            return dp
        }

        function bb(dx, dw, dl, dt, dz, dy) {
            if (dl) {
                var dr = dl(dx, dw);
                if (typeof dr != "undefined") {
                    return !!dr
                }
            }
            if (dx === dw) {
                return dx !== 0 || (1 / dx == 1 / dw)
            }
            var dk = typeof dx,
                di = typeof dw;
            if (dx === dx && !(dx && D[dk]) && !(dw && D[di])) {
                return false
            }
            if (dx == null || dw == null) {
                return dx === dw
            }
            var df = az.call(dx),
                dp = az.call(dw);
            if (df == S) {
                df = c
            }
            if (dp == S) {
                dp = c
            }
            if (df != dp) {
                return false
            }
            switch (df) {
                case A:
                case I:
                    return +dx == +dw;
                case F:
                    return (dx != +dx) ? dw != +dw : (dx == 0 ? (1 / dx == 1 / dw) : dx == +dw);
                case J:
                case G:
                    return dx == co(dw)
            }
            var dm = df == t;
            if (!dm) {
                var ds = aZ.call(dx, "__wrapped__"),
                    at = aZ.call(dw, "__wrapped__");
                if (ds || at) {
                    return bb(ds ? dx.__wrapped__ : dx, at ? dw.__wrapped__ : dw, dl, dt, dz, dy)
                }
                if (df != c) {
                    return false
                }
                var dj = dx.constructor,
                    dg = dw.constructor;
                if (dj != dg && !(ax(dj) && dj instanceof dj && ax(dg) && dg instanceof dg) && ("constructor" in dx && "constructor" in dw)) {
                    return false
                }
            }
            var dq = !dz;
            dz || (dz = d());
            dy || (dy = d());
            var dh = dz.length;
            while (dh--) {
                if (dz[dh] == dx) {
                    return dy[dh] == dw
                }
            }
            var du = 0;
            dr = true;
            dz.push(dx);
            dy.push(dw);
            if (dm) {
                dh = dx.length;
                du = dw.length;
                dr = du == dh;
                if (dr || dt) {
                    while (du--) {
                        var dn = dh,
                            dv = dw[du];
                        if (dt) {
                            while (dn--) {
                                if ((dr = bb(dx[dn], dv, dl, dt, dz, dy))) {
                                    break
                                }
                            }
                        } else {
                            if (!(dr = bb(dx[du], dv, dl, dt, dz, dy))) {
                                break
                            }
                        }
                    }
                }
            } else {
                ai(dw, function(dC, dB, dA) {
                    if (aZ.call(dA, dB)) {
                        du++;
                        return (dr = aZ.call(dx, dB) && bb(dx[dB], dC, dl, dt, dz, dy))
                    }
                });
                if (dr && !dt) {
                    ai(dx, function(dC, dB, dA) {
                        if (aZ.call(dA, dB)) {
                            return (dr = --du > -1)
                        }
                    })
                }
            }
            dz.pop();
            dy.pop();
            if (dq) {
                Q(dz);
                Q(dy)
            }
            return dr
        }

        function ag(df, dg, di, at, dh) {
            (bC(dg) ? bA : bN)(dg, function(dq, dl) {
                var dp, dm, dk = dq,
                    dn = df[dl];
                if (dq && ((dm = bC(dq)) || aN(dq))) {
                    var dr = at.length;
                    while (dr--) {
                        if ((dp = at[dr] == dq)) {
                            dn = dh[dr];
                            break
                        }
                    }
                    if (!dp) {
                        var dj;
                        if (di) {
                            dk = di(dn, dq);
                            if ((dj = typeof dk != "undefined")) {
                                dn = dk
                            }
                        }
                        if (!dj) {
                            dn = dm ? (bC(dn) ? dn : []) : (aN(dn) ? dn : {})
                        }
                        at.push(dq);
                        dh.push(dn);
                        if (!dj) {
                            ag(dn, dq, di, at, dh)
                        }
                    }
                } else {
                    if (di) {
                        dk = di(dn, dq);
                        if (typeof dk == "undefined") {
                            dk = dq
                        }
                    }
                    if (typeof dk != "undefined") {
                        dn = dk
                    }
                }
                df[dl] = dn
            })
        }

        function ao(df, at) {
            return df + cN(bJ() * (at - df + 1))
        }

        function ae(dk, dh, dp) {
            var dj = -1,
                dl = b5(),
                dg = dk ? dk.length : 0,
                dq = [];
            var dm = !dh && dg >= b && dl === h,
                df = (dp || dm) ? d() : dq;
            if (dm) {
                var at = Y(df);
                dl = N;
                df = at
            }
            while (++dj < dg) {
                var dn = dk[dj],
                    di = dp ? dp(dn, dj, dk) : dn;
                if (dh ? !dj || df[df.length - 1] !== di : dl(df, di) < 0) {
                    if (dp || dm) {
                        df.push(di)
                    }
                    dq.push(dn)
                }
            }
            if (dm) {
                Q(df.array);
                n(df)
            } else {
                if (dp) {
                    Q(df)
                }
            }
            return dq
        }

        function bS(at) {
            return function(dk, dl, dg) {
                var df = {};
                dl = aT.createCallback(dl, dg, 3);
                var dh = -1,
                    di = dk ? dk.length : 0;
                if (typeof di == "number") {
                    while (++dh < di) {
                        var dj = dk[dh];
                        at(df, dj, dl(dj, dh, dk), dk)
                    }
                } else {
                    bN(dk, function(dn, dm, dp) {
                        at(df, dn, dl(dn, dm, dp), dp)
                    })
                }
                return df
            }
        }

        function cL(dk, dh, dl, dg, dr, at) {
            var dj = dh & 1,
                ds = dh & 2,
                dp = dh & 4,
                dn = dh & 8,
                df = dh & 16,
                dm = dh & 32;
            if (!ds && !ax(dk)) {
                throw new aG
            }
            if (df && !dl.length) {
                dh &= ~16;
                df = dl = false
            }
            if (dm && !dg.length) {
                dh &= ~32;
                dm = dg = false
            }
            var di = dk && dk.__bindData__;
            if (di && di !== true) {
                di = s(di);
                if (di[2]) {
                    di[2] = s(di[2])
                }
                if (di[3]) {
                    di[3] = s(di[3])
                }
                if (dj && !(di[1] & 1)) {
                    di[4] = dr
                }
                if (!dj && di[1] & 1) {
                    dh |= 8
                }
                if (dp && !(di[1] & 4)) {
                    di[5] = at
                }
                if (df) {
                    aw.apply(di[2] || (di[2] = []), dl)
                }
                if (dm) {
                    cI.apply(di[3] || (di[3] = []), dg)
                }
                di[1] |= dh;
                return cL.apply(null, di)
            }
            var dq = (dh == 1 || dh === 17) ? ap : bl;
            return dq([dk, dh, dl, dg, dr, at])
        }

        function bn(at) {
            return aS[at]
        }

        function b5() {
            var at = (at = aT.indexOf) === c4 ? h : at;
            return at
        }

        function b4(at) {
            return typeof at == "function" && b0.test(at)
        }
        var ad = !cG ? af : function(at, df) {
            k.value = df;
            cG(at, "__bindData__", k)
        };

        function aK(dg) {
            var df, at;
            if (!(dg && az.call(dg) == c) || (df = dg.constructor, ax(df) && !(df instanceof df))) {
                return false
            }
            ai(dg, function(di, dh) {
                at = dh
            });
            return typeof at == "undefined" || aZ.call(dg, at)
        }

        function bo(at) {
            return bU[at]
        }

        function a4(at) {
            return at && typeof at == "object" && typeof at.length == "number" && az.call(at) == S || false
        }
        var bC = be || function(at) {
            return at && typeof at == "object" && typeof at.length == "number" && az.call(at) == t || false
        };
        var bc = function(dg) {
            var df, dh = dg,
                at = [];
            if (!dh) {
                return at
            }
            if (!(D[typeof dg])) {
                return at
            }
            for (df in dh) {
                if (aZ.call(dh, df)) {
                    at.push(df)
                }
            }
            return at
        };
        var b9 = !ci ? bc : function(at) {
            if (!dd(at)) {
                return []
            }
            return ci(at)
        };
        var aS = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        var bU = b6(aS);
        var ca = cF("(" + b9(bU).join("|") + ")", "g"),
            cg = cF("[" + b9(aS).join("") + "]", "g");
        var br = function(di, at, dl) {
            var dk, dh = di,
                dr = dh;
            if (!dh) {
                return dr
            }
            var dn = arguments,
                df = 0,
                dj = typeof dl == "number" ? 2 : dn.length;
            if (dj > 3 && typeof dn[dj - 2] == "function") {
                var dq = ct(dn[--dj - 1], dn[dj--], 2)
            } else {
                if (dj > 2 && typeof dn[dj - 1] == "function") {
                    dq = dn[--dj]
                }
            }
            while (++df < dj) {
                dh = dn[df];
                if (dh && D[typeof dh]) {
                    var dm = -1,
                        dp = D[typeof dh] && b9(dh),
                        dg = dp ? dp.length : 0;
                    while (++dm < dg) {
                        dk = dp[dm];
                        dr[dk] = dq ? dq(dr[dk], dh[dk]) : dh[dk]
                    }
                }
            }
            return dr
        };

        function cB(dg, df, dh, at) {
            if (typeof df != "boolean" && df != null) {
                at = dh;
                dh = df;
                df = false
            }
            return bi(dg, df, typeof dh == "function" && ct(dh, at, 1))
        }

        function c9(df, dg, at) {
            return bi(df, true, typeof dg == "function" && ct(dg, at, 1))
        }

        function aP(df, dg) {
            var at = bZ(df);
            return dg ? br(at, dg) : at
        }
        var bs = function(di, at, dl) {
            var dk, dh = di,
                dq = dh;
            if (!dh) {
                return dq
            }
            var dn = arguments,
                df = 0,
                dj = typeof dl == "number" ? 2 : dn.length;
            while (++df < dj) {
                dh = dn[df];
                if (dh && D[typeof dh]) {
                    var dm = -1,
                        dp = D[typeof dh] && b9(dh),
                        dg = dp ? dp.length : 0;
                    while (++dm < dg) {
                        dk = dp[dm];
                        if (typeof dq[dk] == "undefined") {
                            dq[dk] = dh[dk]
                        }
                    }
                }
            }
            return dq
        };

        function cr(dg, dh, df) {
            var at;
            dh = aT.createCallback(dh, df, 3);
            bN(dg, function(dk, dj, di) {
                if (dh(dk, dj, di)) {
                    at = dj;
                    return false
                }
            });
            return at
        }

        function bM(dg, dh, df) {
            var at;
            dh = aT.createCallback(dh, df, 3);
            c0(dg, function(dk, dj, di) {
                if (dh(dk, dj, di)) {
                    at = dj;
                    return false
                }
            });
            return at
        }
        var ai = function(di, dj, df) {
            var dg, dh = di,
                at = dh;
            if (!dh) {
                return at
            }
            if (!D[typeof dh]) {
                return at
            }
            dj = dj && typeof df == "undefined" ? dj : ct(dj, df, 3);
            for (dg in dh) {
                if (dj(dh[dg], dg, di) === false) {
                    return at
                }
            }
            return at
        };

        function cs(df, di, at) {
            var dh = [];
            ai(df, function(dk, dj) {
                dh.push(dj, dk)
            });
            var dg = dh.length;
            di = ct(di, at, 3);
            while (dg--) {
                if (di(dh[dg--], dh[dg], df) === false) {
                    break
                }
            }
            return df
        }
        var bN = function(dg, dl, dj) {
            var dh, df = dg,
                dm = df;
            if (!df) {
                return dm
            }
            if (!D[typeof df]) {
                return dm
            }
            dl = dl && typeof dj == "undefined" ? dl : ct(dl, dj, 3);
            var di = -1,
                dk = D[typeof df] && b9(df),
                at = dk ? dk.length : 0;
            while (++di < at) {
                dh = dk[di];
                if (dl(df[dh], dh, dg) === false) {
                    return dm
                }
            }
            return dm
        };

        function c0(df, dj, at) {
            var dh = b9(df),
                di = dh.length;
            dj = ct(dj, at, 3);
            while (di--) {
                var dg = dh[di];
                if (dj(df[dg], dg, df) === false) {
                    break
                }
            }
            return df
        }

        function cH(df) {
            var at = [];
            ai(df, function(dh, dg) {
                if (ax(dh)) {
                    at.push(dg)
                }
            });
            return at.sort()
        }

        function cX(at, df) {
            return at ? aZ.call(at, df) : false
        }

        function b6(dg) {
            var df = -1,
                di = b9(dg),
                dj = di.length,
                at = {};
            while (++df < dj) {
                var dh = di[df];
                at[dg[dh]] = dh
            }
            return at
        }

        function bG(at) {
            return at === true || at === false || at && typeof at == "object" && az.call(at) == A || false
        }

        function a7(at) {
            return at && typeof at == "object" && az.call(at) == I || false
        }

        function b1(at) {
            return at && at.nodeType === 1 || false
        }

        function cp(dh) {
            var at = true;
            if (!dh) {
                return at
            }
            var df = az.call(dh),
                dg = dh.length;
            if ((df == t || df == G || df == S) || (df == c && typeof dg == "number" && ax(dh.splice))) {
                return !dg
            }
            bN(dh, function() {
                return (at = false)
            });
            return at
        }

        function b2(dg, at, dh, df) {
            return bb(dg, at, typeof dh == "function" && ct(dh, df, 2))
        }

        function aJ(at) {
            return aI(at) && !bD(parseFloat(at))
        }

        function ax(at) {
            return typeof at == "function"
        }

        function dd(at) {
            return !!(at && D[typeof at])
        }

        function bP(at) {
            return bq(at) && at != +at
        }

        function c3(at) {
            return at === null
        }

        function bq(at) {
            return typeof at == "number" || at && typeof at == "object" && az.call(at) == F || false
        }
        var aN = !ar ? aK : function(dg) {
            if (!(dg && az.call(dg) == c)) {
                return false
            }
            var at = dg.valueOf,
                df = b4(at) && (df = ar(at)) && ar(df);
            return df ? (dg == df || ar(dg) == df) : aK(dg)
        };

        function cR(at) {
            return at && typeof at == "object" && az.call(at) == J || false
        }

        function cy(at) {
            return typeof at == "string" || at && typeof at == "object" && az.call(at) == G || false
        }

        function bW(at) {
            return typeof at == "undefined"
        }

        function bg(dg, dh, df) {
            var at = {};
            dh = aT.createCallback(dh, df, 3);
            bN(dg, function(dk, dj, di) {
                at[dj] = dh(dk, dj, di)
            });
            return at
        }

        function bI(di) {
            var dh = arguments,
                dj = 2;
            if (!dd(di)) {
                return di
            }
            if (typeof dh[2] != "number") {
                dj = dh.length
            }
            if (dj > 3 && typeof dh[dj - 2] == "function") {
                var dl = ct(dh[--dj - 1], dh[dj--], 2)
            } else {
                if (dj > 2 && typeof dh[dj - 1] == "function") {
                    dl = dh[--dj]
                }
            }
            var dg = s(arguments, 1, dj),
                df = -1,
                at = d(),
                dk = d();
            while (++df < dj) {
                ag(di, dg[df], dl, at, dk)
            }
            Q(at);
            Q(dk);
            return di
        }

        function cu(dh, dl, df) {
            var at = {};
            if (typeof dl != "function") {
                var dj = [];
                ai(dh, function(dn, dm) {
                    dj.push(dm)
                });
                dj = dc(dj, bT(arguments, true, false, 1));
                var dg = -1,
                    dk = dj.length;
                while (++dg < dk) {
                    var di = dj[dg];
                    at[di] = dh[di]
                }
            } else {
                dl = aT.createCallback(dl, df, 3);
                ai(dh, function(dp, dn, dm) {
                    if (!dl(dp, dn, dm)) {
                        at[dn] = dp
                    }
                })
            }
            return at
        }

        function by(dg) {
            var df = -1,
                di = b9(dg),
                dj = di.length,
                at = aF(dj);
            while (++df < dj) {
                var dh = di[df];
                at[df] = [dh, dg[dh]]
            }
            return at
        }

        function bK(dh, dl, df) {
            var at = {};
            if (typeof dl != "function") {
                var dg = -1,
                    dj = bT(arguments, true, false, 1),
                    dk = dd(dh) ? dj.length : 0;
                while (++dg < dk) {
                    var di = dj[dg];
                    if (di in dh) {
                        at[di] = dh[di]
                    }
                }
            } else {
                dl = aT.createCallback(dl, df, 3);
                ai(dh, function(dp, dn, dm) {
                    if (dl(dp, dn, dm)) {
                        at[dn] = dp
                    }
                })
            }
            return at
        }

        function cW(dg, dk, df, at) {
            var dj = bC(dg);
            if (df == null) {
                if (dj) {
                    df = []
                } else {
                    var di = dg && dg.constructor,
                        dh = di && di.prototype;
                    df = bZ(dh)
                }
            }
            if (dk) {
                dk = aT.createCallback(dk, at, 4);
                (dj ? bA : bN)(dg, function(dn, dm, dl) {
                    return dk(df, dn, dm, dl)
                })
            }
            return df
        }

        function bv(dg) {
            var df = -1,
                dh = b9(dg),
                di = dh.length,
                at = aF(di);
            while (++df < di) {
                at[df] = dg[dh[df]]
            }
            return at
        }

        function cM(dj) {
            var dg = arguments,
                df = -1,
                dh = bT(dg, true, false, 1),
                di = (dg[2] && dg[2][dg[1]] === dj) ? 1 : dh.length,
                at = aF(di);
            while (++df < di) {
                at[df] = dj[dh[df]]
            }
            return at
        }

        function a3(dk, dj, dh) {
            var df = -1,
                dg = b5(),
                di = dk ? dk.length : 0,
                at = false;
            dh = (dh < 0 ? cj(0, di + dh) : dh) || 0;
            if (bC(dk)) {
                at = dg(dk, dj, dh) > -1
            } else {
                if (typeof di == "number") {
                    at = (cy(dk) ? dk.indexOf(dj, dh) : dg(dk, dj, dh)) > -1
                } else {
                    bN(dk, function(dl) {
                        if (++df >= dh) {
                            return !(at = dl === dj)
                        }
                    })
                }
            }
            return at
        }
        var bH = bS(function(at, dg, df) {
            (aZ.call(at, df) ? at[df]++ : at[df] = 1)
        });

        function ay(di, dj, df) {
            var at = true;
            dj = aT.createCallback(dj, df, 3);
            var dg = -1,
                dh = di ? di.length : 0;
            if (typeof dh == "number") {
                while (++dg < dh) {
                    if (!(at = !!dj(di[dg], dg, di))) {
                        break
                    }
                }
            } else {
                bN(di, function(dl, dk, dm) {
                    return (at = !!dj(dl, dk, dm))
                })
            }
            return at
        }

        function bO(dj, dk, df) {
            var at = [];
            dk = aT.createCallback(dk, df, 3);
            var dg = -1,
                dh = dj ? dj.length : 0;
            if (typeof dh == "number") {
                while (++dg < dh) {
                    var di = dj[dg];
                    if (dk(di, dg, dj)) {
                        at.push(di)
                    }
                }
            } else {
                bN(dj, function(dm, dl, dn) {
                    if (dk(dm, dl, dn)) {
                        at.push(dm)
                    }
                })
            }
            return at
        }

        function bF(dj, dk, df) {
            dk = aT.createCallback(dk, df, 3);
            var dg = -1,
                dh = dj ? dj.length : 0;
            if (typeof dh == "number") {
                while (++dg < dh) {
                    var di = dj[dg];
                    if (dk(di, dg, dj)) {
                        return di
                    }
                }
            } else {
                var at;
                bN(dj, function(dm, dl, dn) {
                    if (dk(dm, dl, dn)) {
                        at = dm;
                        return false
                    }
                });
                return at
            }
        }

        function c7(dg, dh, df) {
            var at;
            dh = aT.createCallback(dh, df, 3);
            aq(dg, function(dj, di, dk) {
                if (dh(dj, di, dk)) {
                    at = dj;
                    return false
                }
            });
            return at
        }

        function bA(dh, di, at) {
            var df = -1,
                dg = dh ? dh.length : 0;
            di = di && typeof at == "undefined" ? di : ct(di, at, 3);
            if (typeof dg == "number") {
                while (++df < dg) {
                    if (di(dh[df], df, dh) === false) {
                        break
                    }
                }
            } else {
                bN(dh, di)
            }
            return dh
        }

        function aq(dh, di, at) {
            var dg = dh ? dh.length : 0;
            di = di && typeof at == "undefined" ? di : ct(di, at, 3);
            if (typeof dg == "number") {
                while (dg--) {
                    if (di(dh[dg], dg, dh) === false) {
                        break
                    }
                }
            } else {
                var df = b9(dh);
                dg = df.length;
                bN(dh, function(dk, dj, dl) {
                    dj = df ? df[--dg] : --dg;
                    return di(dl[dj], dj, dl)
                })
            }
            return dh
        }
        var bp = bS(function(at, dg, df) {
            (aZ.call(at, df) ? at[df] : at[df] = []).push(dg)
        });
        var c5 = bS(function(at, dg, df) {
            at[df] = dg
        });

        function aH(dk, df) {
            var dh = s(arguments, 2),
                dg = -1,
                dj = typeof df == "function",
                di = dk ? dk.length : 0,
                at = aF(typeof di == "number" ? di : 0);
            bA(dk, function(dl) {
                at[++dg] = (dj ? df : dl[df]).apply(dl, dh)
            });
            return at
        }

        function bk(di, dj, df) {
            var dg = -1,
                dh = di ? di.length : 0;
            dj = aT.createCallback(dj, df, 3);
            if (typeof dh == "number") {
                var at = aF(dh);
                while (++dg < dh) {
                    at[dg] = dj(di[dg], dg, di)
                }
            } else {
                at = [];
                bN(di, function(dl, dk, dm) {
                    at[++dg] = dj(dl, dk, dm)
                })
            }
            return at
        }

        function bh(dk, dl, df) {
            var di = -Infinity,
                at = di;
            if (typeof dl != "function" && df && df[dl] === dk) {
                dl = null
            }
            if (dl == null && bC(dk)) {
                var dg = -1,
                    dh = dk.length;
                while (++dg < dh) {
                    var dj = dk[dg];
                    if (dj > at) {
                        at = dj
                    }
                }
            } else {
                dl = (dl == null && cy(dk)) ? o : aT.createCallback(dl, df, 3);
                bA(dk, function(dn, dm, dq) {
                    var dp = dl(dn, dm, dq);
                    if (dp > di) {
                        di = dp;
                        at = dn
                    }
                })
            }
            return at
        }

        function cl(dk, dl, df) {
            var di = Infinity,
                at = di;
            if (typeof dl != "function" && df && df[dl] === dk) {
                dl = null
            }
            if (dl == null && bC(dk)) {
                var dg = -1,
                    dh = dk.length;
                while (++dg < dh) {
                    var dj = dk[dg];
                    if (dj < at) {
                        at = dj
                    }
                }
            } else {
                dl = (dl == null && cy(dk)) ? o : aT.createCallback(dl, df, 3);
                bA(dk, function(dn, dm, dq) {
                    var dp = dl(dn, dm, dq);
                    if (dp < di) {
                        di = dp;
                        at = dn
                    }
                })
            }
            return at
        }
        var c8 = bk;

        function cn(dj, dk, df, at) {
            if (!dj) {
                return df
            }
            var dh = arguments.length < 3;
            dk = aT.createCallback(dk, at, 4);
            var dg = -1,
                di = dj.length;
            if (typeof di == "number") {
                if (dh) {
                    df = dj[++dg]
                }
                while (++dg < di) {
                    df = dk(df, dj[dg], dg, dj)
                }
            } else {
                bN(dj, function(dm, dl, dn) {
                    df = dh ? (dh = false, dm) : dk(df, dm, dl, dn)
                })
            }
            return df
        }

        function cT(dh, di, df, at) {
            var dg = arguments.length < 3;
            di = aT.createCallback(di, at, 4);
            aq(dh, function(dk, dj, dl) {
                df = dg ? (dg = false, dk) : di(df, dk, dj, dl)
            });
            return df
        }

        function aA(df, dg, at) {
            dg = aT.createCallback(dg, at, 3);
            return bO(df, function(di, dh, dj) {
                return !dg(di, dh, dj)
            })
        }

        function cS(dg, dh, df) {
            if (dg && typeof dg.length != "number") {
                dg = bv(dg)
            }
            if (dh == null || df) {
                return dg ? dg[ao(0, dg.length - 1)] : l
            }
            var at = bw(dg);
            at.length = am(cj(0, dh), at.length);
            return at
        }

        function bw(dh) {
            var df = -1,
                dg = dh ? dh.length : 0,
                at = aF(typeof dg == "number" ? dg : 0);
            bA(dh, function(dj) {
                var di = ao(0, ++df);
                at[df] = at[di];
                at[di] = dj
            });
            return at
        }

        function a6(df) {
            var at = df ? df.length : 0;
            return typeof at == "number" ? at : b9(df).length
        }

        function a5(di, dj, df) {
            var at;
            dj = aT.createCallback(dj, df, 3);
            var dg = -1,
                dh = di ? di.length : 0;
            if (typeof dh == "number") {
                while (++dg < dh) {
                    if ((at = dj(di[dg], dg, di))) {
                        break
                    }
                }
            } else {
                bN(di, function(dl, dk, dm) {
                    return !(at = dj(dl, dk, dm))
                })
            }
            return !!at
        }

        function a8(dk, dl, df) {
            var dh = -1,
                dj = bC(dl),
                di = dk ? dk.length : 0,
                at = aF(typeof di == "number" ? di : 0);
            if (!dj) {
                dl = aT.createCallback(dl, df, 3)
            }
            bA(dk, function(dp, dn, dq) {
                var dm = at[++dh] = q();
                if (dj) {
                    dm.criteria = bk(dl, function(dr) {
                        return dp[dr]
                    })
                } else {
                    (dm.criteria = d())[0] = dl(dp, dn, dq)
                }
                dm.index = dh;
                dm.value = dp
            });
            di = at.length;
            at.sort(V);
            while (di--) {
                var dg = at[di];
                at[di] = dg.value;
                if (!dj) {
                    Q(dg.criteria)
                }
                n(dg)
            }
            return at
        }

        function aC(at) {
            if (at && typeof at.length == "number") {
                return s(at)
            }
            return bv(at)
        }
        var aj = bO;

        function aO(di) {
            var df = -1,
                dg = di ? di.length : 0,
                at = [];
            while (++df < dg) {
                var dh = di[df];
                if (dh) {
                    at.push(dh)
                }
            }
            return at
        }

        function ac(at) {
            return dc(at, bT(arguments, true, true, 1))
        }

        function c2(di, dh, at) {
            var df = -1,
                dg = di ? di.length : 0;
            dh = aT.createCallback(dh, at, 3);
            while (++df < dg) {
                if (dh(di[df], df, di)) {
                    return df
                }
            }
            return -1
        }

        function aL(dh, dg, at) {
            var df = dh ? dh.length : 0;
            dg = aT.createCallback(dg, at, 3);
            while (df--) {
                if (dg(dh[df], df, dh)) {
                    return df
                }
            }
            return -1
        }

        function bf(dj, di, at) {
            var dh = 0,
                dg = dj ? dj.length : 0;
            if (typeof di != "number" && di != null) {
                var df = -1;
                di = aT.createCallback(di, at, 3);
                while (++df < dg && di(dj[df], df, dj)) {
                    dh++
                }
            } else {
                dh = di;
                if (dh == null || at) {
                    return dj ? dj[0] : l
                }
            }
            return s(dj, 0, am(cj(0, dh), dg))
        }

        function cA(dh, at, dg, df) {
            if (typeof at != "boolean" && at != null) {
                df = dg;
                dg = (typeof at != "function" && df && df[at] === dh) ? null : at;
                at = false
            }
            if (dg != null) {
                dh = bk(dh, dg, df)
            }
            return bT(dh, at)
        }

        function c4(di, dh, df) {
            if (typeof df == "number") {
                var dg = di ? di.length : 0;
                df = (df < 0 ? cj(0, dg + df) : df || 0)
            } else {
                if (df) {
                    var at = a9(di, dh);
                    return di[at] === dh ? at : -1
                }
            }
            return h(di, dh, df)
        }

        function c6(dj, di, at) {
            var dh = 0,
                dg = dj ? dj.length : 0;
            if (typeof di != "number" && di != null) {
                var df = dg;
                di = aT.createCallback(di, at, 3);
                while (df-- && di(dj[df], df, dj)) {
                    dh++
                }
            } else {
                dh = (di == null || at) ? 1 : di || dh
            }
            return s(dj, 0, am(cj(0, dg - dh), dg))
        }

        function cx() {
            var dn = [],
                dg = -1,
                dj = arguments.length,
                dm = d(),
                dp = b5(),
                di = dp === h,
                df = d();
            while (++dg < dj) {
                var dq = arguments[dg];
                if (bC(dq) || a4(dq)) {
                    dn.push(dq);
                    dm.push(di && dq.length >= b && Y(dg ? dn[dg] : df))
                }
            }
            var dl = dn[0],
                dk = -1,
                dh = dl ? dl.length : 0,
                dr = [];
            outer: while (++dk < dh) {
                var at = dm[0];
                dq = dl[dk];
                if ((at ? N(at, dq) : dp(df, dq)) < 0) {
                    dg = dj;
                    (at || df).push(dq);
                    while (--dg) {
                        at = dm[dg];
                        if ((at ? N(at, dq) : dp(dn[dg], dq)) < 0) {
                            continue outer
                        }
                    }
                    dr.push(dq)
                }
            }
            while (dj--) {
                at = dm[dj];
                if (at) {
                    n(at)
                }
            }
            Q(dm);
            Q(df);
            return dr
        }

        function bt(dj, di, at) {
            var dh = 0,
                dg = dj ? dj.length : 0;
            if (typeof di != "number" && di != null) {
                var df = dg;
                di = aT.createCallback(di, at, 3);
                while (df-- && di(dj[df], df, dj)) {
                    dh++
                }
            } else {
                dh = di;
                if (dh == null || at) {
                    return dj ? dj[dg - 1] : l
                }
            }
            return s(dj, cj(0, dg - dh))
        }

        function de(dh, dg, df) {
            var at = dh ? dh.length : 0;
            if (typeof df == "number") {
                at = (df < 0 ? cj(0, at + df) : am(df, at - 1)) + 1
            }
            while (at--) {
                if (dh[at] === dg) {
                    return at
                }
            }
            return -1
        }

        function cb(dk) {
            var dg = arguments,
                at = 0,
                di = dg.length,
                dh = dk ? dk.length : 0;
            while (++at < di) {
                var df = -1,
                    dj = dg[at];
                while (++df < dh) {
                    if (dk[df] === dj) {
                        cm.call(dk, df--, 1);
                        dh--
                    }
                }
            }
            return dk
        }

        function aX(dj, df, di) {
            dj = +dj || 0;
            di = typeof di == "number" ? di : (+di || 1);
            if (df == null) {
                df = dj;
                dj = 0
            }
            var dg = -1,
                dh = cj(0, aV((df - dj) / (di || 1))),
                at = aF(dh);
            while (++dg < dh) {
                at[dg] = dj;
                dj += di
            }
            return at
        }

        function aM(dk, dj, df) {
            var dg = -1,
                dh = dk ? dk.length : 0,
                at = [];
            dj = aT.createCallback(dj, df, 3);
            while (++dg < dh) {
                var di = dk[dg];
                if (dj(di, dg, dk)) {
                    at.push(di);
                    cm.call(dk, dg--, 1);
                    dh--
                }
            }
            return at
        }

        function b8(dj, di, at) {
            if (typeof di != "number" && di != null) {
                var dh = 0,
                    df = -1,
                    dg = dj ? dj.length : 0;
                di = aT.createCallback(di, at, 3);
                while (++df < dg && di(dj[df], df, dj)) {
                    dh++
                }
            } else {
                dh = (di == null || at) ? 1 : cj(0, di)
            }
            return s(dj, dh)
        }

        function a9(dk, di, dj, df) {
            var at = 0,
                dh = dk ? dk.length : at;
            dj = dj ? aT.createCallback(dj, df, 1) : bj;
            di = dj(di);
            while (at < dh) {
                var dg = (at + dh) >>> 1;
                (dj(dk[dg]) < di) ? at = dg + 1: dh = dg
            }
            return at
        }

        function au() {
            return ae(bT(arguments, true, true))
        }

        function bQ(dh, dg, df, at) {
            if (typeof dg != "boolean" && dg != null) {
                at = df;
                df = (typeof dg != "function" && at && at[dg] === dh) ? null : dg;
                dg = false
            }
            if (df != null) {
                df = aT.createCallback(df, at, 3)
            }
            return ae(dh, dg, df)
        }

        function cZ(at) {
            return dc(at, s(arguments, 1))
        }

        function bY() {
            var df = -1,
                dg = arguments.length;
            while (++df < dg) {
                var dh = arguments[df];
                if (bC(dh) || a4(dh)) {
                    var at = at ? ae(dc(at, dh).concat(dc(dh, at))) : dh
                }
            }
            return at || []
        }

        function an() {
            var dh = arguments.length > 1 ? arguments : arguments[0],
                df = -1,
                dg = dh ? bh(c8(dh, "length")) : 0,
                at = aF(dg < 0 ? 0 : dg);
            while (++df < dg) {
                at[df] = c8(dh, df)
            }
            return at
        }

        function cC(dj, df) {
            var dg = -1,
                di = dj ? dj.length : 0,
                at = {};
            if (!df && di && !bC(dj[0])) {
                df = []
            }
            while (++dg < di) {
                var dh = dj[dg];
                if (df) {
                    at[dh] = df[dg]
                } else {
                    if (dh) {
                        at[dh[0]] = dh[1]
                    }
                }
            }
            return at
        }

        function aR(df, at) {
            if (!ax(at)) {
                throw new aG
            }
            return function() {
                if (--df < 1) {
                    return at.apply(this, arguments)
                }
            }
        }

        function bX(df, at) {
            return arguments.length > 2 ? cL(df, 17, s(arguments, 2), null, at) : cL(df, 1, null, null, at)
        }

        function bu(dg) {
            var at = arguments.length > 1 ? bT(arguments, true, false, 1) : cH(dg),
                df = -1,
                di = at.length;
            while (++df < di) {
                var dh = at[df];
                dg[dh] = cL(dg[dh], 1, null, null, dg)
            }
            return dg
        }

        function cQ(at, df) {
            return arguments.length > 2 ? cL(df, 19, s(arguments, 2), null, at) : cL(df, 3, null, null, at)
        }

        function cE() {
            var at = arguments,
                df = at.length;
            while (df--) {
                if (!ax(at[df])) {
                    throw new aG
                }
            }
            return function() {
                var dg = arguments,
                    dh = at.length;
                while (dh--) {
                    dg = [at[dh].apply(this, dg)]
                }
                return dg[0]
            }
        }

        function cO(at, df) {
            df = typeof df == "number" ? df : (+df || at.length);
            return cL(at, 4, null, null, null, df)
        }

        function cD(dh, dm, dt) {
            var dp, dk, du, at, dr, ds, dq, dl = 0,
                dj = false,
                dn = true;
            if (!ax(dh)) {
                throw new aG
            }
            dm = cj(0, dm) || 0;
            if (dt === true) {
                var dg = true;
                dn = false
            } else {
                if (dd(dt)) {
                    dg = dt.leading;
                    dj = "maxWait" in dt && (cj(dm, dt.maxWait) || 0);
                    dn = "trailing" in dt ? dt.trailing : dn
                }
            }
            var di = function() {
                var dw = dm - (cf() - at);
                if (dw <= 0) {
                    if (dk) {
                        bR(dk)
                    }
                    var dv = dq;
                    dk = ds = dq = l;
                    if (dv) {
                        dl = cf();
                        du = dh.apply(dr, dp);
                        if (!ds && !dk) {
                            dp = dr = null
                        }
                    }
                } else {
                    ds = aW(di, dw)
                }
            };
            var df = function() {
                if (ds) {
                    bR(ds)
                }
                dk = ds = dq = l;
                if (dn || (dj !== dm)) {
                    dl = cf();
                    du = dh.apply(dr, dp);
                    if (!ds && !dk) {
                        dp = dr = null
                    }
                }
            };
            return function() {
                dp = arguments;
                at = cf();
                dr = this;
                dq = dn && (ds || !dg);
                if (dj === false) {
                    var dv = dg && !ds
                } else {
                    if (!dk && !dg) {
                        dl = at
                    }
                    var dx = dj - (at - dl),
                        dw = dx <= 0;
                    if (dw) {
                        if (dk) {
                            dk = bR(dk)
                        }
                        dl = at;
                        du = dh.apply(dr, dp)
                    } else {
                        if (!dk) {
                            dk = aW(df, dx)
                        }
                    }
                }
                if (dw && ds) {
                    ds = bR(ds)
                } else {
                    if (!ds && dm !== dj) {
                        ds = aW(di, dm)
                    }
                }
                if (dv) {
                    dw = true;
                    du = dh.apply(dr, dp)
                }
                if (dw && !ds && !dk) {
                    dp = dr = null
                }
                return du
            }
        }

        function a0(df) {
            if (!ax(df)) {
                throw new aG
            }
            var at = s(arguments, 1);
            return aW(function() {
                df.apply(l, at)
            }, 1)
        }

        function bL(df, dg) {
            if (!ax(df)) {
                throw new aG
            }
            var at = s(arguments, 2);
            return aW(function() {
                df.apply(l, at)
            }, dg)
        }

        function a2(df, dg) {
            if (!ax(df)) {
                throw new aG
            }
            var at = function() {
                var dh = at.cache,
                    di = dg ? dg.apply(this, arguments) : a + arguments[0];
                return aZ.call(dh, di) ? dh[di] : (dh[di] = df.apply(this, arguments))
            };
            at.cache = {};
            return at
        }

        function cw(dg) {
            var df, at;
            if (!ax(dg)) {
                throw new aG
            }
            return function() {
                if (df) {
                    return at
                }
                df = true;
                at = dg.apply(this, arguments);
                dg = null;
                return at
            }
        }

        function cU(at) {
            return cL(at, 16, s(arguments, 1))
        }

        function cq(at) {
            return cL(at, 32, null, s(arguments, 1))
        }

        function ck(df, dg, at) {
            var di = true,
                dh = true;
            if (!ax(df)) {
                throw new aG
            }
            if (at === false) {
                di = false
            } else {
                if (dd(at)) {
                    di = "leading" in at ? at.leading : di;
                    dh = "trailing" in at ? at.trailing : dh
                }
            }
            M.leading = di;
            M.maxWait = dg;
            M.trailing = dh;
            return cD(df, dg, M)
        }

        function bV(at, df) {
            return cL(df, 16, [at])
        }

        function cv(at) {
            return function() {
                return at
            }
        }

        function aD(dj, df, dk) {
            var di = typeof dj;
            if (dj == null || di == "function") {
                return ct(dj, df, dk)
            }
            if (di != "object") {
                return a1(dj)
            }
            var dh = b9(dj),
                dg = dh[0],
                at = dj[dg];
            if (dh.length == 1 && at === at && !dd(at)) {
                return function(dm) {
                    var dl = dm[dg];
                    return at === dl && (at !== 0 || (1 / at == 1 / dl))
                }
            }
            return function(dm) {
                var dn = dh.length,
                    dl = false;
                while (dn--) {
                    if (!(dl = bb(dm[dh[dn]], dj[dh[dn]], null, true))) {
                        break
                    }
                }
                return dl
            }
        }

        function ba(at) {
            return at == null ? "" : co(at).replace(cg, bn)
        }

        function bj(at) {
            return at
        }

        function aB(df, dk, at) {
            var dg = true,
                di = dk && cH(dk);
            if (!dk || (!at && !di.length)) {
                if (at == null) {
                    at = dk
                }
                dh = cP;
                dk = df;
                df = aT;
                di = cH(dk)
            }
            if (at === false) {
                dg = false
            } else {
                if (dd(at) && "chain" in at) {
                    dg = at.chain
                }
            }
            var dh = df,
                dj = ax(dh);
            bA(di, function(dl) {
                var dm = df[dl] = dk[dl];
                if (dj) {
                    dh.prototype[dl] = function() {
                        var dp = this.__chain__,
                            dr = this.__wrapped__,
                            dq = [dr];
                        aw.apply(dq, arguments);
                        var dn = dm.apply(df, dq);
                        if (dg || dp) {
                            if (dr === dn && dd(dn)) {
                                return this
                            }
                            dn = new dh(dn);
                            dn.__chain__ = dp
                        }
                        return dn
                    }
                }
            })
        }

        function cY() {
            ah._ = cV;
            return this
        }

        function af() {}
        var cf = b4(cf = ce.now) && cf || function() {
            return new ce().getTime()
        };
        var db = da(E + "08") == 8 ? da : function(df, at) {
            return da(cy(df) ? df.replace(W, "") : df, at || 0)
        };

        function a1(at) {
            return function(df) {
                return df[at]
            }
        }

        function cc(dg, at, dj) {
            var di = dg == null,
                df = at == null;
            if (dj == null) {
                if (typeof dg == "boolean" && df) {
                    dj = dg;
                    dg = 1
                } else {
                    if (!df && typeof at == "boolean") {
                        dj = at;
                        df = true
                    }
                }
            }
            if (di && df) {
                at = 1
            }
            dg = +dg || 0;
            if (df) {
                at = dg;
                dg = 0
            } else {
                at = +at || 0
            }
            if (dj || dg % 1 || at % 1) {
                var dh = bJ();
                return am(dg + (dh * (at - dg + parseFloat("1e-" + ((dh + "").length - 1)))), at)
            }
            return ao(dg, at)
        }

        function aQ(at, df) {
            if (at) {
                var dg = at[df];
                return ax(dg) ? at[df]() : dg
            }
        }

        function bE(ds, dl, dv) {
            var di = aT.templateSettings;
            ds = co(ds || "");
            dv = bs({}, dv, di);
            var dg = bs({}, dv.imports, di.imports),
                dm = b9(dg),
                dh = bv(dg);
            var dr, dn = 0,
                dq = dv.interpolate || P,
                df = "__p += '";
            var du = cF((dv.escape || P).source + "|" + dq.source + "|" + (dq === m ? z : P).source + "|" + (dv.evaluate || P).source + "|$", "g");
            ds.replace(du, function(dw, dA, dy, dx, dz, dB) {
                dy || (dy = dx);
                df += ds.slice(dn, dB).replace(T, f);
                if (dA) {
                    df += "' +\n__e(" + dA + ") +\n'"
                }
                if (dz) {
                    dr = true;
                    df += "';\n" + dz + ";\n__p += '"
                }
                if (dy) {
                    df += "' +\n((__t = (" + dy + ")) == null ? '' : __t) +\n'"
                }
                dn = dB + dw.length;
                return dw
            });
            df += "';\n";
            var dj = dv.variable,
                dk = dj;
            if (!dk) {
                dj = "obj";
                df = "with (" + dj + ") {\n" + df + "\n}\n"
            }
            df = (dr ? df.replace(w, "") : df).replace(R, "$1").replace(e, "$1;");
            df = "function(" + dj + ") {\n" + (dk ? "" : dj + " || (" + dj + " = {});\n") + "var __t, __p = '', __e = _.escape" + (dr ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + df + "return __p\n}";
            var at = "\n/*\n//# sourceURL=" + (dv.sourceURL || "/lodash/template/source[" + (Z++) + "]") + "\n*/";
            try {
                var dt = aY(dm, "return " + df + at).apply(l, dh)
            } catch (dp) {
                dp.source = df;
                throw dp
            }
            if (dl) {
                return dt(dl)
            }
            dt.source = df;
            return dt
        }

        function ak(di, dh, df) {
            di = (di = +di) > -1 ? di : 0;
            var dg = -1,
                at = aF(di);
            dh = ct(dh, df, 1);
            while (++dg < di) {
                at[dg] = dh(dg)
            }
            return at
        }

        function al(at) {
            return at == null ? "" : co(at).replace(ca, bo)
        }

        function ch(at) {
            var df = ++H;
            return co(at == null ? "" : at) + df
        }

        function bx(at) {
            at = new cP(at);
            at.__chain__ = true;
            return at
        }

        function cz(at, df) {
            df(at);
            return at
        }

        function bz() {
            this.__chain__ = true;
            return this
        }

        function bm() {
            return co(this.__wrapped__)
        }

        function aU() {
            return this.__wrapped__
        }
        aT.after = aR;
        aT.assign = br;
        aT.at = cM;
        aT.bind = bX;
        aT.bindAll = bu;
        aT.bindKey = cQ;
        aT.chain = bx;
        aT.compact = aO;
        aT.compose = cE;
        aT.constant = cv;
        aT.countBy = bH;
        aT.create = aP;
        aT.createCallback = aD;
        aT.curry = cO;
        aT.debounce = cD;
        aT.defaults = bs;
        aT.defer = a0;
        aT.delay = bL;
        aT.difference = ac;
        aT.filter = bO;
        aT.flatten = cA;
        aT.forEach = bA;
        aT.forEachRight = aq;
        aT.forIn = ai;
        aT.forInRight = cs;
        aT.forOwn = bN;
        aT.forOwnRight = c0;
        aT.functions = cH;
        aT.groupBy = bp;
        aT.indexBy = c5;
        aT.initial = c6;
        aT.intersection = cx;
        aT.invert = b6;
        aT.invoke = aH;
        aT.keys = b9;
        aT.map = bk;
        aT.mapValues = bg;
        aT.max = bh;
        aT.memoize = a2;
        aT.merge = bI;
        aT.min = cl;
        aT.omit = cu;
        aT.once = cw;
        aT.pairs = by;
        aT.partial = cU;
        aT.partialRight = cq;
        aT.pick = bK;
        aT.pluck = c8;
        aT.property = a1;
        aT.pull = cb;
        aT.range = aX;
        aT.reject = aA;
        aT.remove = aM;
        aT.rest = b8;
        aT.shuffle = bw;
        aT.sortBy = a8;
        aT.tap = cz;
        aT.throttle = ck;
        aT.times = ak;
        aT.toArray = aC;
        aT.transform = cW;
        aT.union = au;
        aT.uniq = bQ;
        aT.values = bv;
        aT.where = aj;
        aT.without = cZ;
        aT.wrap = bV;
        aT.xor = bY;
        aT.zip = an;
        aT.zipObject = cC;
        aT.collect = bk;
        aT.drop = b8;
        aT.each = bA;
        aT.eachRight = aq;
        aT.extend = br;
        aT.methods = cH;
        aT.object = cC;
        aT.select = bO;
        aT.tail = b8;
        aT.unique = bQ;
        aT.unzip = an;
        aB(aT);
        aT.clone = cB;
        aT.cloneDeep = c9;
        aT.contains = a3;
        aT.escape = ba;
        aT.every = ay;
        aT.find = bF;
        aT.findIndex = c2;
        aT.findKey = cr;
        aT.findLast = c7;
        aT.findLastIndex = aL;
        aT.findLastKey = bM;
        aT.has = cX;
        aT.identity = bj;
        aT.indexOf = c4;
        aT.isArguments = a4;
        aT.isArray = bC;
        aT.isBoolean = bG;
        aT.isDate = a7;
        aT.isElement = b1;
        aT.isEmpty = cp;
        aT.isEqual = b2;
        aT.isFinite = aJ;
        aT.isFunction = ax;
        aT.isNaN = bP;
        aT.isNull = c3;
        aT.isNumber = bq;
        aT.isObject = dd;
        aT.isPlainObject = aN;
        aT.isRegExp = cR;
        aT.isString = cy;
        aT.isUndefined = bW;
        aT.lastIndexOf = de;
        aT.mixin = aB;
        aT.noConflict = cY;
        aT.noop = af;
        aT.now = cf;
        aT.parseInt = db;
        aT.random = cc;
        aT.reduce = cn;
        aT.reduceRight = cT;
        aT.result = aQ;
        aT.runInContext = X;
        aT.size = a6;
        aT.some = a5;
        aT.sortedIndex = a9;
        aT.template = bE;
        aT.unescape = al;
        aT.uniqueId = ch;
        aT.all = ay;
        aT.any = a5;
        aT.detect = bF;
        aT.findWhere = bF;
        aT.foldl = cn;
        aT.foldr = cT;
        aT.include = a3;
        aT.inject = cn;
        aB(function() {
            var at = {};
            bN(aT, function(dg, df) {
                if (!aT.prototype[df]) {
                    at[df] = dg
                }
            });
            return at
        }(), false);
        aT.first = bf;
        aT.last = bt;
        aT.sample = cS;
        aT.take = bf;
        aT.head = bf;
        bN(aT, function(dg, df) {
            var at = df !== "sample";
            if (!aT.prototype[df]) {
                aT.prototype[df] = function(dk, dj) {
                    var di = this.__chain__,
                        dh = dg(this.__wrapped__, dk, dj);
                    return !di && (dk == null || (dj && !(at && typeof dk == "function"))) ? dh : new cP(dh, di)
                }
            }
        });
        aT.VERSION = "2.4.1";
        aT.prototype.chain = bz;
        aT.prototype.toString = bm;
        aT.prototype.value = aU;
        aT.prototype.valueOf = aU;
        bA(["join", "pop", "shift"], function(at) {
            var df = b7[at];
            aT.prototype[at] = function() {
                var dh = this.__chain__,
                    dg = df.apply(this.__wrapped__, arguments);
                return dh ? new cP(dg, dh) : dg
            }
        });
        bA(["push", "reverse", "sort", "unshift"], function(at) {
            var df = b7[at];
            aT.prototype[at] = function() {
                df.apply(this.__wrapped__, arguments);
                return this
            }
        });
        bA(["concat", "slice", "splice"], function(at) {
            var df = b7[at];
            aT.prototype[at] = function() {
                return new cP(df.apply(this.__wrapped__, arguments), this.__chain__)
            }
        });
        return aT
    }
    var aa = X();
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        B._ = aa;
        define(function() {
            return aa
        })
    } else {
        if (U && y) {
            if (O) {
                (y.exports = aa)._ = aa
            } else {
                U._ = aa
            }
        } else {
            B._ = aa
        }
    }
}.call(this));