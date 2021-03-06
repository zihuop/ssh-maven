// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.6.0

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var l, aa = aa || {}, ba = this;

    function m(b) {
        return void 0 !== b
    }

    function v(b, c, d) {
        b = b.split(".");
        d = d || ba;
        b[0]in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());)!b.length && m(c) ? d[e] = c : d[e] ? d = d[e] : d = d[e] = {}
    }

    function ca() {
    }

    function da(b) {
        b.Ia = function () {
            return b.lg ? b.lg : b.lg = new b
        }
    }

    function ea(b) {
        var c = typeof b;
        if ("object" == c)if (b) {
            if (b instanceof Array)return "array";
            if (b instanceof Object)return c;
            var d = Object.prototype.toString.call(b);
            if ("[object Window]" == d)return "object";
            if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == c && "undefined" == typeof b.call)return "object";
        return c
    }

    function fa(b) {
        return null === b
    }

    function ga(b) {
        return "array" == ea(b)
    }

    function ha(b) {
        var c = ea(b);
        return "array" == c || "object" == c && "number" == typeof b.length
    }

    function ia(b) {
        return "string" == typeof b
    }

    function ja(b) {
        return "number" == typeof b
    }

    function ka(b) {
        return "function" == ea(b)
    }

    function la(b) {
        var c = typeof b;
        return "object" == c && null != b || "function" == c
    }

    function ma(b) {
        return b[na] || (b[na] = ++oa)
    }

    var na = "closure_uid_" + (1E9 * Math.random() >>> 0), oa = 0;

    function pa(b, c, d) {
        return b.call.apply(b.bind, arguments)
    }

    function qa(b, c, d) {
        if (!b)throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function () {
            return b.apply(c, arguments)
        }
    }

    function ra(b, c, d) {
        ra = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
        return ra.apply(null, arguments)
    }

    function ta(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    }

    var ua = Date.now || function () {
            return +new Date
        };

    function w(b, c) {
        function d() {
        }

        d.prototype = c.prototype;
        b.S = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.No = function (b, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
            return c.prototype[d].apply(b, h)
        }
    };
    var va, wa;

    function xa(b) {
        if (Error.captureStackTrace)Error.captureStackTrace(this, xa); else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    }

    w(xa, Error);
    xa.prototype.name = "CustomError";
    var ya;

    function Aa(b, c) {
        var d = b.length - c.length;
        return 0 <= d && b.indexOf(c, d) == d
    }

    function Ba(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;)e += d.shift() + f.shift();
        return e + d.join("%s")
    }

    var Ca = String.prototype.trim ? function (b) {
        return b.trim()
    } : function (b) {
        return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Da(b) {
        if (!Ea.test(b))return b;
        -1 != b.indexOf("&") && (b = b.replace(Fa, "&amp;"));
        -1 != b.indexOf("<") && (b = b.replace(Ha, "&lt;"));
        -1 != b.indexOf(">") && (b = b.replace(Ia, "&gt;"));
        -1 != b.indexOf('"') && (b = b.replace(Ja, "&quot;"));
        -1 != b.indexOf("'") && (b = b.replace(Ka, "&#39;"));
        -1 != b.indexOf("\x00") && (b = b.replace(La, "&#0;"));
        return b
    }

    var Fa = /&/g, Ha = /</g, Ia = />/g, Ja = /"/g, Ka = /'/g, La = /\x00/g, Ea = /[\x00&<>"']/;

    function Ma(b) {
        b = m(void 0) ? b.toFixed(void 0) : String(b);
        var c = b.indexOf(".");
        -1 == c && (c = b.length);
        c = Math.max(0, 2 - c);
        return Array(c + 1).join("0") + b
    }

    function Na(b, c) {
        for (var d = 0, e = Ca(String(b)).split("."), f = Ca(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var k = e[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(k) || ["", "", ""], t = q.exec(n) || ["", "", ""];
                if (0 == r[0].length && 0 == t[0].length)break;
                d = Pa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Pa(0 == r[2].length, 0 == t[2].length) || Pa(r[2], t[2])
            } while (0 == d)
        }
        return d
    }

    function Pa(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    };
    var Qa = Array.prototype;

    function Ra(b, c) {
        return Qa.indexOf.call(b, c, void 0)
    }

    function Sa(b, c, d) {
        Qa.forEach.call(b, c, d)
    }

    function Ta(b, c) {
        return Qa.filter.call(b, c, void 0)
    }

    function Ua(b, c, d) {
        return Qa.map.call(b, c, d)
    }

    function Va(b, c) {
        return Qa.some.call(b, c, void 0)
    }

    function Wa(b, c) {
        var d = Xa(b, c, void 0);
        return 0 > d ? null : ia(b) ? b.charAt(d) : b[d]
    }

    function Xa(b, c, d) {
        for (var e = b.length, f = ia(b) ? b.split("") : b, g = 0; g < e; g++)if (g in f && c.call(d, f[g], g, b))return g;
        return -1
    }

    function Ya(b, c) {
        return 0 <= Ra(b, c)
    }

    function $a(b, c) {
        var d = Ra(b, c), e;
        (e = 0 <= d) && Qa.splice.call(b, d, 1);
        return e
    }

    function ab(b) {
        return Qa.concat.apply(Qa, arguments)
    }

    function cb(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++)d[e] = b[e];
            return d
        }
        return []
    }

    function db(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (ha(e)) {
                var f = b.length || 0, g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++)b[f + h] = e[h]
            } else b.push(e)
        }
    }

    function eb(b, c, d, e) {
        Qa.splice.apply(b, fb(arguments, 1))
    }

    function fb(b, c, d) {
        return 2 >= arguments.length ? Qa.slice.call(b, c) : Qa.slice.call(b, c, d)
    }

    function gb(b, c) {
        b.sort(c || hb)
    }

    function ib(b, c) {
        if (!ha(b) || !ha(c) || b.length != c.length)return !1;
        for (var d = b.length, e = jb, f = 0; f < d; f++)if (!e(b[f], c[f]))return !1;
        return !0
    }

    function hb(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    }

    function jb(b, c) {
        return b === c
    }

    function kb(b) {
        for (var c = [], d = 0; d < arguments.length; d++) {
            var e = arguments[d];
            if (ga(e))for (var f = 0; f < e.length; f += 8192)for (var g = kb.apply(null, fb(e, f, f + 8192)), h = 0; h < g.length; h++)c.push(g[h]); else c.push(e)
        }
        return c
    };
    var lb;
    a:{
        var mb = ba.navigator;
        if (mb) {
            var nb = mb.userAgent;
            if (nb) {
                lb = nb;
                break a
            }
        }
        lb = ""
    }
    function ob(b) {
        return -1 != lb.indexOf(b)
    };
    function pb(b, c, d) {
        for (var e in b)c.call(d, b[e], e, b)
    }

    function qb(b, c) {
        for (var d in b)if (c.call(void 0, b[d], d, b))return !0;
        return !1
    }

    function rb(b) {
        var c = 0, d;
        for (d in b)c++;
        return c
    }

    function sb(b) {
        var c = [], d = 0, e;
        for (e in b)c[d++] = b[e];
        return c
    }

    function tb(b) {
        var c = [], d = 0, e;
        for (e in b)c[d++] = e;
        return c
    }

    function ub(b, c) {
        return c in b
    }

    function vb(b, c) {
        for (var d in b)if (b[d] == c)return !0;
        return !1
    }

    function wb(b, c) {
        for (var d in b)if (c.call(void 0, b[d], d, b))return d
    }

    function xb(b) {
        for (var c in b)return !1;
        return !0
    }

    function yb(b) {
        for (var c in b)delete b[c]
    }

    function zb(b, c) {
        c in b && delete b[c]
    }

    function Ab(b, c, d) {
        return c in b ? b[c] : d
    }

    function Cb(b, c) {
        var d = [];
        return c in b ? b[c] : b[c] = d
    }

    function Db(b) {
        var c = {}, d;
        for (d in b)c[d] = b[d];
        return c
    }

    var Eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Fb(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e)b[d] = e[d];
            for (var g = 0; g < Eb.length; g++)d = Eb[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    }

    function Gb(b) {
        var c = arguments.length;
        if (1 == c && ga(arguments[0]))return Gb.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++)d[arguments[e]] = !0;
        return d
    };
    var Hb = ob("Opera") || ob("OPR"), Ib = ob("Trident") || ob("MSIE"), Jb = ob("Gecko") && -1 == lb.toLowerCase().indexOf("webkit") && !(ob("Trident") || ob("MSIE")), Kb = -1 != lb.toLowerCase().indexOf("webkit"), Lb = ob("Macintosh"), Mb = ob("Windows"), Nb = ob("Linux") || ob("CrOS");

    function Ob() {
        var b = ba.document;
        return b ? b.documentMode : void 0
    }

    var Pb = function () {
        var b = "", c;
        if (Hb && ba.opera)return b = ba.opera.version, ka(b) ? b() : b;
        Jb ? c = /rv\:([^\);]+)(\)|;)/ : Ib ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Kb && (c = /WebKit\/(\S+)/);
        c && (b = (b = c.exec(lb)) ? b[1] : "");
        return Ib && (c = Ob(), c > parseFloat(b)) ? String(c) : b
    }(), Qb = {};

    function Rb(b) {
        return Qb[b] || (Qb[b] = 0 <= Na(Pb, b))
    }

    var Sb = ba.document, Tb = Sb && Ib ? Ob() || ("CSS1Compat" == Sb.compatMode ? parseInt(Pb, 10) : 5) : void 0;
    var Ub = Ib && !Rb("9.0") && "" !== Pb;

    function Vb(b, c, d) {
        return Math.min(Math.max(b, c), d)
    }

    function Wb(b, c) {
        var d = b % c;
        return 0 > d * c ? d + c : d
    }

    function Xb(b, c, d) {
        return b + d * (c - b)
    }

    function Yb(b) {
        return b * Math.PI / 180
    };
    function Zb(b) {
        return function (c) {
            if (m(c))return [Vb(c[0], b[0], b[2]), Vb(c[1], b[1], b[3])]
        }
    }

    function $b(b) {
        return b
    };
    function ac(b, c, d) {
        var e = b.length;
        if (b[0] <= c)return 0;
        if (!(c <= b[e - 1]))if (0 < d)for (d = 1; d < e; ++d) {
            if (b[d] < c)return d - 1
        } else if (0 > d)for (d = 1; d < e; ++d) {
            if (b[d] <= c)return d
        } else for (d = 1; d < e; ++d) {
            if (b[d] == c)return d;
            if (b[d] < c)return b[d - 1] - c < c - b[d] ? d - 1 : d
        }
        return e - 1
    };
    function bc(b) {
        return function (c, d, e) {
            if (m(c))return c = ac(b, c, e), c = Vb(c + d, 0, b.length - 1), b[c]
        }
    }

    function cc(b, c, d) {
        return function (e, f, g) {
            if (m(e))return g = 0 < g ? 0 : 0 > g ? 1 : .5, e = Math.floor(Math.log(c / e) / Math.log(b) + g), f = Math.max(e + f, 0), m(d) && (f = Math.min(f, d)), c / Math.pow(b, f)
        }
    };
    function dc(b) {
        if (m(b))return 0
    }

    function ec(b, c) {
        if (m(b))return b + c
    }

    function fc(b) {
        var c = 2 * Math.PI / b;
        return function (b, e) {
            if (m(b))return b = Math.floor((b + e) / c + .5) * c
        }
    }

    function gc() {
        var b = Yb(5);
        return function (c, d) {
            if (m(c))return Math.abs(c + d) <= b ? 0 : c + d
        }
    };
    function hc(b, c, d) {
        this.center = b;
        this.resolution = c;
        this.rotation = d
    };
    var ic = !Ib || Ib && 9 <= Tb, jc = !Ib || Ib && 9 <= Tb, kc = Ib && !Rb("9");
    !Kb || Rb("528");
    Jb && Rb("1.9b") || Ib && Rb("8") || Hb && Rb("9.5") || Kb && Rb("528");
    Jb && !Rb("8") || Ib && Rb("9");
    function mc() {
        0 != nc && (oc[ma(this)] = this);
        this.W = this.W;
        this.V = this.V
    }

    var nc = 0, oc = {};
    mc.prototype.W = !1;
    mc.prototype.Xc = function () {
        if (!this.W && (this.W = !0, this.N(), 0 != nc)) {
            var b = ma(this);
            delete oc[b]
        }
    };
    function pc(b, c) {
        var d = ta(qc, c);
        b.W ? d.call(void 0) : (b.V || (b.V = []), b.V.push(m(void 0) ? ra(d, void 0) : d))
    }

    mc.prototype.N = function () {
        if (this.V)for (; this.V.length;)this.V.shift()()
    };
    function qc(b) {
        b && "function" == typeof b.Xc && b.Xc()
    };
    function rc(b, c) {
        this.type = b;
        this.c = this.target = c;
        this.g = !1;
        this.qh = !0
    }

    rc.prototype.gb = function () {
        this.g = !0
    };
    rc.prototype.preventDefault = function () {
        this.qh = !1
    };
    function sc(b) {
        b.gb()
    }

    function tc(b) {
        b.preventDefault()
    };
    var uc = Ib ? "focusout" : "DOMFocusOut";

    function vc(b) {
        vc[" "](b);
        return b
    }

    vc[" "] = ca;
    function wc(b, c) {
        rc.call(this, b ? b.type : "");
        this.relatedTarget = this.c = this.target = null;
        this.q = this.e = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.n = this.d = this.b = this.i = !1;
        this.state = null;
        this.f = !1;
        this.a = null;
        b && xc(this, b, c)
    }

    w(wc, rc);
    var yc = [1, 4, 2];

    function xc(b, c, d) {
        b.a = c;
        var e = b.type = c.type;
        b.target = c.target || c.srcElement;
        b.c = d;
        if (d = c.relatedTarget) {
            if (Jb) {
                var f;
                a:{
                    try {
                        vc(d.nodeName);
                        f = !0;
                        break a
                    } catch (g) {
                    }
                    f = !1
                }
                f || (d = null)
            }
        } else"mouseover" == e ? d = c.fromElement : "mouseout" == e && (d = c.toElement);
        b.relatedTarget = d;
        Object.defineProperties ? Object.defineProperties(b, {
            offsetX: {
                configurable: !0,
                enumerable: !0,
                get: b.ag,
                set: b.co
            }, offsetY: {configurable: !0, enumerable: !0, get: b.bg, set: b.eo}
        }) : (b.offsetX = b.ag(), b.offsetY = b.bg());
        b.clientX = void 0 !== c.clientX ? c.clientX :
            c.pageX;
        b.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
        b.screenX = c.screenX || 0;
        b.screenY = c.screenY || 0;
        b.button = c.button;
        b.e = c.keyCode || 0;
        b.q = c.charCode || ("keypress" == e ? c.keyCode : 0);
        b.i = c.ctrlKey;
        b.b = c.altKey;
        b.d = c.shiftKey;
        b.n = c.metaKey;
        b.f = Lb ? c.metaKey : c.ctrlKey;
        b.state = c.state;
        c.defaultPrevented && b.preventDefault()
    }

    function zc(b) {
        return (ic ? 0 == b.a.button : "click" == b.type ? !0 : !!(b.a.button & yc[0])) && !(Kb && Lb && b.i)
    }

    l = wc.prototype;
    l.gb = function () {
        wc.S.gb.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    l.preventDefault = function () {
        wc.S.preventDefault.call(this);
        var b = this.a;
        if (b.preventDefault)b.preventDefault(); else if (b.returnValue = !1, kc)try {
            if (b.ctrlKey || 112 <= b.keyCode && 123 >= b.keyCode)b.keyCode = -1
        } catch (c) {
        }
    };
    l.Qi = function () {
        return this.a
    };
    l.ag = function () {
        return Kb || void 0 !== this.a.offsetX ? this.a.offsetX : this.a.layerX
    };
    l.co = function (b) {
        Object.defineProperties(this, {offsetX: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    l.bg = function () {
        return Kb || void 0 !== this.a.offsetY ? this.a.offsetY : this.a.layerY
    };
    l.eo = function (b) {
        Object.defineProperties(this, {offsetY: {writable: !0, enumerable: !0, configurable: !0, value: b}})
    };
    var Ac = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Bc(b) {
        return !(!b || !b[Ac])
    }

    var Cc = 0;

    function Dc(b, c, d, e, f) {
        this.Yb = b;
        this.a = null;
        this.src = c;
        this.type = d;
        this.Pc = !!e;
        this.Od = f;
        this.key = ++Cc;
        this.Gc = this.vd = !1
    }

    function Ec(b) {
        b.Gc = !0;
        b.Yb = null;
        b.a = null;
        b.src = null;
        b.Od = null
    };
    function Gc(b) {
        this.src = b;
        this.a = {};
        this.b = 0
    }

    Gc.prototype.add = function (b, c, d, e, f) {
        var g = b.toString();
        b = this.a[g];
        b || (b = this.a[g] = [], this.b++);
        var h = Hc(b, c, e, f);
        -1 < h ? (c = b[h], d || (c.vd = !1)) : (c = new Dc(c, this.src, g, !!e, f), c.vd = d, b.push(c));
        return c
    };
    Gc.prototype.remove = function (b, c, d, e) {
        b = b.toString();
        if (!(b in this.a))return !1;
        var f = this.a[b];
        c = Hc(f, c, d, e);
        return -1 < c ? (Ec(f[c]), Qa.splice.call(f, c, 1), 0 == f.length && (delete this.a[b], this.b--), !0) : !1
    };
    function Ic(b, c) {
        var d = c.type;
        if (!(d in b.a))return !1;
        var e = $a(b.a[d], c);
        e && (Ec(c), 0 == b.a[d].length && (delete b.a[d], b.b--));
        return e
    }

    function Jc(b, c, d, e, f) {
        b = b.a[c.toString()];
        c = -1;
        b && (c = Hc(b, d, e, f));
        return -1 < c ? b[c] : null
    }

    function Kc(b, c, d) {
        var e = m(c), f = e ? c.toString() : "", g = m(d);
        return qb(b.a, function (b) {
            for (var c = 0; c < b.length; ++c)if (!(e && b[c].type != f || g && b[c].Pc != d))return !0;
            return !1
        })
    }

    function Hc(b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (!g.Gc && g.Yb == c && g.Pc == !!d && g.Od == e)return f
        }
        return -1
    };
    var Lc = "closure_lm_" + (1E6 * Math.random() | 0), Mc = {}, Nc = 0;

    function x(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++)x(b, c[g], d, e, f);
            return null
        }
        d = Oc(d);
        return Bc(b) ? b.Ka(c, d, e, f) : Pc(b, c, d, !1, e, f)
    }

    function Pc(b, c, d, e, f, g) {
        if (!c)throw Error("Invalid event type");
        var h = !!f, k = Qc(b);
        k || (b[Lc] = k = new Gc(b));
        d = k.add(c, d, e, f, g);
        if (d.a)return d;
        e = Rc();
        d.a = e;
        e.src = b;
        e.Yb = d;
        b.addEventListener ? b.addEventListener(c.toString(), e, h) : b.attachEvent(Sc(c.toString()), e);
        Nc++;
        return d
    }

    function Rc() {
        var b = Tc, c = jc ? function (d) {
            return b.call(c.src, c.Yb, d)
        } : function (d) {
            d = b.call(c.src, c.Yb, d);
            if (!d)return d
        };
        return c
    }

    function Uc(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++)Uc(b, c[g], d, e, f);
            return null
        }
        d = Oc(d);
        return Bc(b) ? b.bb.add(String(c), d, !0, e, f) : Pc(b, c, d, !0, e, f)
    }

    function Vc(b, c, d, e, f) {
        if (ga(c))for (var g = 0; g < c.length; g++)Vc(b, c[g], d, e, f); else d = Oc(d), Bc(b) ? b.xf(c, d, e, f) : b && (b = Qc(b)) && (c = Jc(b, c, d, !!e, f)) && Wc(c)
    }

    function Wc(b) {
        if (ja(b) || !b || b.Gc)return !1;
        var c = b.src;
        if (Bc(c))return Ic(c.bb, b);
        var d = b.type, e = b.a;
        c.removeEventListener ? c.removeEventListener(d, e, b.Pc) : c.detachEvent && c.detachEvent(Sc(d), e);
        Nc--;
        (d = Qc(c)) ? (Ic(d, b), 0 == d.b && (d.src = null, c[Lc] = null)) : Ec(b);
        return !0
    }

    function Sc(b) {
        return b in Mc ? Mc[b] : Mc[b] = "on" + b
    }

    function Xc(b, c, d, e) {
        var f = !0;
        if (b = Qc(b))if (c = b.a[c.toString()])for (c = c.concat(), b = 0; b < c.length; b++) {
            var g = c[b];
            g && g.Pc == d && !g.Gc && (g = Yc(g, e), f = f && !1 !== g)
        }
        return f
    }

    function Yc(b, c) {
        var d = b.Yb, e = b.Od || b.src;
        b.vd && Wc(b);
        return d.call(e, c)
    }

    function Tc(b, c) {
        if (b.Gc)return !0;
        if (!jc) {
            var d;
            if (!(d = c))a:{
                d = ["window", "event"];
                for (var e = ba, f; f = d.shift();)if (null != e[f])e = e[f]; else {
                    d = null;
                    break a
                }
                d = e
            }
            f = d;
            d = new wc(f, this);
            e = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a:{
                    var g = !1;
                    if (0 == f.keyCode)try {
                        f.keyCode = -1;
                        break a
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue)f.returnValue = !0
                }
                f = [];
                for (g = d.c; g; g = g.parentNode)f.push(g);
                for (var g = b.type, k = f.length - 1; !d.g && 0 <= k; k--) {
                    d.c = f[k];
                    var n = Xc(f[k], g, !0, d), e = e && n
                }
                for (k = 0; !d.g && k < f.length; k++)d.c = f[k], n =
                    Xc(f[k], g, !1, d), e = e && n
            }
            return e
        }
        return Yc(b, new wc(c, this))
    }

    function Qc(b) {
        b = b[Lc];
        return b instanceof Gc ? b : null
    }

    var Zc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Oc(b) {
        if (ka(b))return b;
        b[Zc] || (b[Zc] = function (c) {
            return b.handleEvent(c)
        });
        return b[Zc]
    };
    function $c() {
        mc.call(this);
        this.bb = new Gc(this);
        this.sd = this;
        this.Ea = null
    }

    w($c, mc);
    $c.prototype[Ac] = !0;
    l = $c.prototype;
    l.addEventListener = function (b, c, d, e) {
        x(this, b, c, d, e)
    };
    l.removeEventListener = function (b, c, d, e) {
        Vc(this, b, c, d, e)
    };
    l.dispatchEvent = function (b) {
        var c, d = this.Ea;
        if (d)for (c = []; d; d = d.Ea)c.push(d);
        var d = this.sd, e = b.type || b;
        if (ia(b))b = new rc(b, d); else if (b instanceof rc)b.target = b.target || d; else {
            var f = b;
            b = new rc(e, d);
            Fb(b, f)
        }
        var f = !0, g;
        if (c)for (var h = c.length - 1; !b.g && 0 <= h; h--)g = b.c = c[h], f = ad(g, e, !0, b) && f;
        b.g || (g = b.c = d, f = ad(g, e, !0, b) && f, b.g || (f = ad(g, e, !1, b) && f));
        if (c)for (h = 0; !b.g && h < c.length; h++)g = b.c = c[h], f = ad(g, e, !1, b) && f;
        return f
    };
    l.N = function () {
        $c.S.N.call(this);
        if (this.bb) {
            var b = this.bb, c = 0, d;
            for (d in b.a) {
                for (var e = b.a[d], f = 0; f < e.length; f++)++c, Ec(e[f]);
                delete b.a[d];
                b.b--
            }
        }
        this.Ea = null
    };
    l.Ka = function (b, c, d, e) {
        return this.bb.add(String(b), c, !1, d, e)
    };
    l.xf = function (b, c, d, e) {
        return this.bb.remove(String(b), c, d, e)
    };
    function ad(b, c, d, e) {
        c = b.bb.a[String(c)];
        if (!c)return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.Gc && h.Pc == d) {
                var k = h.Yb, n = h.Od || h.src;
                h.vd && Ic(b.bb, h);
                f = !1 !== k.call(n, e) && f
            }
        }
        return f && 0 != e.qh
    }

    function bd(b, c, d) {
        return Kc(b.bb, m(c) ? String(c) : void 0, d)
    };
    function cd() {
        $c.call(this);
        this.a = 0
    }

    w(cd, $c);
    function dd(b) {
        Wc(b)
    }

    l = cd.prototype;
    l.k = function () {
        ++this.a;
        this.dispatchEvent("change")
    };
    l.v = function () {
        return this.a
    };
    l.r = function (b, c, d) {
        return x(this, b, c, !1, d)
    };
    l.A = function (b, c, d) {
        return Uc(this, b, c, !1, d)
    };
    l.u = function (b, c, d) {
        Vc(this, b, c, !1, d)
    };
    l.B = dd;
    function ed(b, c, d) {
        rc.call(this, b);
        this.key = c;
        this.oldValue = d
    }

    w(ed, rc);
    function fd(b) {
        cd.call(this);
        ma(this);
        this.q = {};
        m(b) && this.t(b)
    }

    w(fd, cd);
    var gd = {};

    function hd(b) {
        return gd.hasOwnProperty(b) ? gd[b] : gd[b] = "change:" + b
    }

    l = fd.prototype;
    l.get = function (b) {
        var c;
        this.q.hasOwnProperty(b) && (c = this.q[b]);
        return c
    };
    l.C = function () {
        return tb(this.q)
    };
    l.D = function () {
        var b = {}, c;
        for (c in this.q)b[c] = this.q[c];
        return b
    };
    function id(b, c, d) {
        var e;
        e = hd(c);
        b.dispatchEvent(new ed(e, c, d));
        b.dispatchEvent(new ed("propertychange", c, d))
    }

    l.set = function (b, c) {
        var d = this.q[b];
        this.q[b] = c;
        id(this, b, d)
    };
    l.t = function (b) {
        for (var c in b)this.set(c, b[c])
    };
    l.I = function (b) {
        if (b in this.q) {
            var c = this.q[b];
            delete this.q[b];
            id(this, b, c)
        }
    };
    function jd(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] + 2 * c;
        d[1] = b[1] + 2 * c;
        return d
    }

    function kd(b, c, d) {
        m(d) || (d = [0, 0]);
        d[0] = b[0] * c + .5 | 0;
        d[1] = b[1] * c + .5 | 0;
        return d
    }

    function ld(b, c) {
        if (ga(b))return b;
        m(c) ? (c[0] = b, c[1] = b) : c = [b, b];
        return c
    };
    function md(b, c) {
        b[0] += c[0];
        b[1] += c[1];
        return b
    }

    function nd(b, c) {
        var d = b[0], e = b[1], f = c[0], g = c[1], h = f[0], f = f[1], k = g[0], g = g[1], n = k - h, p = g - f, d = 0 === n && 0 === p ? 0 : (n * (d - h) + p * (e - f)) / (n * n + p * p || 0);
        0 >= d || (1 <= d ? (h = k, f = g) : (h += d * n, f += d * p));
        return [h, f]
    }

    function od(b, c) {
        var d = Wb(b + 180, 360) - 180, e = Math.abs(Math.round(3600 * d));
        return Math.floor(e / 3600) + "\u00b0 " + Math.floor(e / 60 % 60) + "\u2032 " + Math.floor(e % 60) + "\u2033 " + c.charAt(0 > d ? 1 : 0)
    }

    function pd(b, c, d) {
        return m(b) ? c.replace("{x}", b[0].toFixed(d)).replace("{y}", b[1].toFixed(d)) : ""
    }

    function qd(b, c) {
        for (var d = !0, e = b.length - 1; 0 <= e; --e)if (b[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }

    function rd(b, c) {
        var d = Math.cos(c), e = Math.sin(c), f = b[1] * d + b[0] * e;
        b[0] = b[0] * d - b[1] * e;
        b[1] = f;
        return b
    }

    function sd(b, c) {
        var d = b[0] - c[0], e = b[1] - c[1];
        return d * d + e * e
    }

    function td(b, c) {
        return sd(b, nd(b, c))
    }

    function ud(b, c) {
        return pd(b, "{x}, {y}", c)
    };
    function vd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++)this[c] = b[c] || 0
    }

    vd.prototype.a = 4;
    vd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++)this[c + d] = b[d]
    };
    vd.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (vd.BYTES_PER_ELEMENT = 4, vd.prototype.BYTES_PER_ELEMENT = vd.prototype.a, vd.prototype.set = vd.prototype.set, vd.prototype.toString = vd.prototype.toString, v("Float32Array", vd, void 0));
    function wd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++)this[c] = b[c] || 0
    }

    wd.prototype.a = 8;
    wd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++)this[c + d] = b[d]
    };
    wd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            wd.BYTES_PER_ELEMENT = 8
        } catch (xd) {
        }
        wd.prototype.BYTES_PER_ELEMENT = wd.prototype.a;
        wd.prototype.set = wd.prototype.set;
        wd.prototype.toString = wd.prototype.toString;
        v("Float64Array", wd, void 0)
    }
    ;
    function yd(b, c, d, e, f) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f
    };
    function zd() {
        var b = Array(16);
        Ad(b, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return b
    }

    function Bd() {
        var b = Array(16);
        Ad(b, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return b
    }

    function Ad(b, c, d, e, f, g, h, k, n, p, q, r, t, u, A, z, C) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f;
        b[4] = g;
        b[5] = h;
        b[6] = k;
        b[7] = n;
        b[8] = p;
        b[9] = q;
        b[10] = r;
        b[11] = t;
        b[12] = u;
        b[13] = A;
        b[14] = z;
        b[15] = C
    }

    function Cd(b, c) {
        b[0] = c[0];
        b[1] = c[1];
        b[2] = c[2];
        b[3] = c[3];
        b[4] = c[4];
        b[5] = c[5];
        b[6] = c[6];
        b[7] = c[7];
        b[8] = c[8];
        b[9] = c[9];
        b[10] = c[10];
        b[11] = c[11];
        b[12] = c[12];
        b[13] = c[13];
        b[14] = c[14];
        b[15] = c[15]
    }

    function Dd(b) {
        b[0] = 1;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        b[4] = 0;
        b[5] = 1;
        b[6] = 0;
        b[7] = 0;
        b[8] = 0;
        b[9] = 0;
        b[10] = 1;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1
    }

    function Ed(b, c, d) {
        var e = b[0], f = b[1], g = b[2], h = b[3], k = b[4], n = b[5], p = b[6], q = b[7], r = b[8], t = b[9], u = b[10], A = b[11], z = b[12], C = b[13], B = b[14];
        b = b[15];
        var y = c[0], K = c[1], J = c[2], H = c[3], Q = c[4], sa = c[5], Oa = c[6], O = c[7], za = c[8], bb = c[9], Ga = c[10], Bb = c[11], Za = c[12], Fc = c[13], lc = c[14];
        c = c[15];
        d[0] = e * y + k * K + r * J + z * H;
        d[1] = f * y + n * K + t * J + C * H;
        d[2] = g * y + p * K + u * J + B * H;
        d[3] = h * y + q * K + A * J + b * H;
        d[4] = e * Q + k * sa + r * Oa + z * O;
        d[5] = f * Q + n * sa + t * Oa + C * O;
        d[6] = g * Q + p * sa + u * Oa + B * O;
        d[7] = h * Q + q * sa + A * Oa + b * O;
        d[8] = e * za + k * bb + r * Ga + z * Bb;
        d[9] = f * za + n * bb + t * Ga + C * Bb;
        d[10] =
            g * za + p * bb + u * Ga + B * Bb;
        d[11] = h * za + q * bb + A * Ga + b * Bb;
        d[12] = e * Za + k * Fc + r * lc + z * c;
        d[13] = f * Za + n * Fc + t * lc + C * c;
        d[14] = g * Za + p * Fc + u * lc + B * c;
        d[15] = h * Za + q * Fc + A * lc + b * c
    }

    function Fd(b, c) {
        var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], k = b[5], n = b[6], p = b[7], q = b[8], r = b[9], t = b[10], u = b[11], A = b[12], z = b[13], C = b[14], B = b[15], y = d * k - e * h, K = d * n - f * h, J = d * p - g * h, H = e * n - f * k, Q = e * p - g * k, sa = f * p - g * n, Oa = q * z - r * A, O = q * C - t * A, za = q * B - u * A, bb = r * C - t * z, Ga = r * B - u * z, Bb = t * B - u * C, Za = y * Bb - K * Ga + J * bb + H * za - Q * O + sa * Oa;
        0 != Za && (Za = 1 / Za, c[0] = (k * Bb - n * Ga + p * bb) * Za, c[1] = (-e * Bb + f * Ga - g * bb) * Za, c[2] = (z * sa - C * Q + B * H) * Za, c[3] = (-r * sa + t * Q - u * H) * Za, c[4] = (-h * Bb + n * za - p * O) * Za, c[5] = (d * Bb - f * za + g * O) * Za, c[6] = (-A * sa + C * J - B * K) * Za, c[7] = (q * sa - t * J + u *
            K) * Za, c[8] = (h * Ga - k * za + p * Oa) * Za, c[9] = (-d * Ga + e * za - g * Oa) * Za, c[10] = (A * Q - z * J + B * y) * Za, c[11] = (-q * Q + r * J - u * y) * Za, c[12] = (-h * bb + k * O - n * Oa) * Za, c[13] = (d * bb - e * O + f * Oa) * Za, c[14] = (-A * H + z * K - C * y) * Za, c[15] = (q * H - r * K + t * y) * Za)
    }

    function Gd(b, c, d) {
        var e = b[1] * c + b[5] * d + 0 * b[9] + b[13], f = b[2] * c + b[6] * d + 0 * b[10] + b[14], g = b[3] * c + b[7] * d + 0 * b[11] + b[15];
        b[12] = b[0] * c + b[4] * d + 0 * b[8] + b[12];
        b[13] = e;
        b[14] = f;
        b[15] = g
    }

    function Hd(b, c, d) {
        Ad(b, b[0] * c, b[1] * c, b[2] * c, b[3] * c, b[4] * d, b[5] * d, b[6] * d, b[7] * d, 1 * b[8], 1 * b[9], 1 * b[10], 1 * b[11], b[12], b[13], b[14], b[15])
    }

    function Id(b, c) {
        var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], k = b[5], n = b[6], p = b[7], q = Math.cos(c), r = Math.sin(c);
        b[0] = d * q + h * r;
        b[1] = e * q + k * r;
        b[2] = f * q + n * r;
        b[3] = g * q + p * r;
        b[4] = d * -r + h * q;
        b[5] = e * -r + k * q;
        b[6] = f * -r + n * q;
        b[7] = g * -r + p * q
    }

    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);
    function Jd(b) {
        for (var c = Kd(), d = 0, e = b.length; d < e; ++d)Ld(c, b[d]);
        return c
    }

    function Md(b, c, d) {
        var e = Math.min.apply(null, b), f = Math.min.apply(null, c);
        b = Math.max.apply(null, b);
        c = Math.max.apply(null, c);
        return Nd(e, f, b, c, d)
    }

    function Od(b, c, d) {
        return m(d) ? (d[0] = b[0] - c, d[1] = b[1] - c, d[2] = b[2] + c, d[3] = b[3] + c, d) : [b[0] - c, b[1] - c, b[2] + c, b[3] + c]
    }

    function Pd(b, c) {
        return m(c) ? (c[0] = b[0], c[1] = b[1], c[2] = b[2], c[3] = b[3], c) : b.slice()
    }

    function Qd(b, c, d) {
        c = c < b[0] ? b[0] - c : b[2] < c ? c - b[2] : 0;
        b = d < b[1] ? b[1] - d : b[3] < d ? d - b[3] : 0;
        return c * c + b * b
    }

    function Rd(b, c) {
        return Sd(b, c[0], c[1])
    }

    function Td(b, c) {
        return b[0] <= c[0] && c[2] <= b[2] && b[1] <= c[1] && c[3] <= b[3]
    }

    function Sd(b, c, d) {
        return b[0] <= c && c <= b[2] && b[1] <= d && d <= b[3]
    }

    function Ud(b, c) {
        var d = b[1], e = b[2], f = b[3], g = c[0], h = c[1], k = 0;
        g < b[0] ? k = k | 16 : g > e && (k = k | 4);
        h < d ? k |= 8 : h > f && (k |= 2);
        0 === k && (k = 1);
        return k
    }

    function Kd() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }

    function Nd(b, c, d, e, f) {
        return m(f) ? (f[0] = b, f[1] = c, f[2] = d, f[3] = e, f) : [b, c, d, e]
    }

    function Vd(b, c) {
        var d = b[0], e = b[1];
        return Nd(d, e, d, e, c)
    }

    function Wd(b, c) {
        return b[0] == c[0] && b[2] == c[2] && b[1] == c[1] && b[3] == c[3]
    }

    function Xd(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[2] > b[2] && (b[2] = c[2]);
        c[1] < b[1] && (b[1] = c[1]);
        c[3] > b[3] && (b[3] = c[3]);
        return b
    }

    function Ld(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[0] > b[2] && (b[2] = c[0]);
        c[1] < b[1] && (b[1] = c[1]);
        c[1] > b[3] && (b[3] = c[1])
    }

    function Yd(b, c, d, e, f) {
        for (; d < e; d += f) {
            var g = b, h = c[d], k = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], k);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], k)
        }
        return b
    }

    function Zd(b, c, d) {
        var e;
        return (e = c.call(d, $d(b))) || (e = c.call(d, ae(b))) || (e = c.call(d, be(b))) ? e : (e = c.call(d, ce(b))) ? e : !1
    }

    function $d(b) {
        return [b[0], b[1]]
    }

    function ae(b) {
        return [b[2], b[1]]
    }

    function de(b) {
        return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]
    }

    function ee(b, c, d, e) {
        var f = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        d = Math.sin(d);
        f = [-f, -f, f, f];
        e = [-e, e, -e, e];
        var g, h, k;
        for (g = 0; 4 > g; ++g)h = f[g], k = e[g], f[g] = b[0] + h * c - k * d, e[g] = b[1] + h * d + k * c;
        return Md(f, e, void 0)
    }

    function fe(b) {
        return b[3] - b[1]
    }

    function ge(b, c, d) {
        d = m(d) ? d : Kd();
        he(b, c) && (d[0] = b[0] > c[0] ? b[0] : c[0], d[1] = b[1] > c[1] ? b[1] : c[1], d[2] = b[2] < c[2] ? b[2] : c[2], d[3] = b[3] < c[3] ? b[3] : c[3]);
        return d
    }

    function ce(b) {
        return [b[0], b[3]]
    }

    function be(b) {
        return [b[2], b[3]]
    }

    function ie(b) {
        return b[2] - b[0]
    }

    function he(b, c) {
        return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
    }

    function je(b) {
        return b[2] < b[0] || b[3] < b[1]
    }

    function ke(b, c) {
        var d = (b[2] - b[0]) / 2 * (c - 1), e = (b[3] - b[1]) / 2 * (c - 1);
        b[0] -= d;
        b[2] += d;
        b[1] -= e;
        b[3] += e
    }

    function le(b, c, d) {
        b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
        c(b, b, 2);
        return Md([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]], d)
    };
    /*

     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
    function me(b) {
        this.radius = b
    }

    me.prototype.b = function (b) {
        for (var c = 0, d = b.length, e = b[d - 1][0], f = b[d - 1][1], g = 0; g < d; g++)var h = b[g][0], k = b[g][1], c = c + Yb(h - e) * (2 + Math.sin(Yb(f)) + Math.sin(Yb(k))), e = h, f = k;
        return c * this.radius * this.radius / 2
    };
    me.prototype.a = function (b, c) {
        var d = Yb(b[1]), e = Yb(c[1]), f = (e - d) / 2, g = Yb(c[0] - b[0]) / 2, d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * this.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    };
    me.prototype.offset = function (b, c, d) {
        var e = Yb(b[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (Yb(b[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var ne = new me(6370997);
    var oe = {};
    oe.degrees = 2 * Math.PI * ne.radius / 360;
    oe.ft = .3048;
    oe.m = 1;
    oe["us-ft"] = 1200 / 3937;
    function pe(b) {
        this.a = b.code;
        this.b = b.units;
        this.g = m(b.extent) ? b.extent : null;
        this.f = m(b.worldExtent) ? b.worldExtent : null;
        this.d = m(b.axisOrientation) ? b.axisOrientation : "enu";
        this.c = (this.e = m(b.global) ? b.global : !1) && null !== this.g;
        this.q = m(b.getPointResolution) ? b.getPointResolution : this.qj;
        this.i = null;
        if ("function" == typeof proj4) {
            var c = b.code, d = proj4.defs(c);
            if (m(d)) {
                m(d.axis) && !m(b.axisOrientation) && (this.d = d.axis);
                m(b.units) || (b = d.units, !m(b) && m(d.to_meter) && (b = d.to_meter.toString(), oe[b] = d.to_meter),
                    this.b = b);
                b = qe;
                var e, f;
                for (e in b)f = proj4.defs(e), m(f) && (b = re(e), f === d ? se([b, this]) : (f = proj4(e, c), te(b, this, f.forward, f.inverse)))
            }
        }
    }

    l = pe.prototype;
    l.Ri = function () {
        return this.a
    };
    l.G = function () {
        return this.g
    };
    l.Nl = function () {
        return this.b
    };
    l.Ed = function () {
        return oe[this.b]
    };
    l.Bj = function () {
        return this.f
    };
    function ue(b) {
        return b.d
    }

    l.rk = function () {
        return this.e
    };
    l.Zn = function (b) {
        this.c = (this.e = b) && null !== this.g
    };
    l.Ol = function (b) {
        this.g = b;
        this.c = this.e && null !== b
    };
    l.mo = function (b) {
        this.f = b
    };
    l.Yn = function (b) {
        this.q = b
    };
    l.qj = function (b, c) {
        if ("degrees" == this.b)return b;
        var d = ve(this, re("EPSG:4326")), e = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2], e = d(e, e, 2), d = (ne.a(e.slice(0, 2), e.slice(2, 4)) + ne.a(e.slice(4, 6), e.slice(6, 8))) / 2, e = this.Ed();
        m(e) && (d /= e);
        return d
    };
    l.getPointResolution = function (b, c) {
        return this.q(b, c)
    };
    var qe = {}, we = {};

    function se(b) {
        xe(b);
        Sa(b, function (c) {
            Sa(b, function (b) {
                c !== b && ye(c, b, ze)
            })
        })
    }

    function Ae() {
        var b = Be, c = Ce, d = De;
        Sa(Ee, function (e) {
            Sa(b, function (b) {
                ye(e, b, c);
                ye(b, e, d)
            })
        })
    }

    function Fe(b) {
        qe[b.a] = b;
        ye(b, b, ze)
    }

    function xe(b) {
        var c = [];
        Sa(b, function (b) {
            c.push(Fe(b))
        })
    }

    function Ge(b) {
        return null != b ? ia(b) ? re(b) : b : re("EPSG:3857")
    }

    function ye(b, c, d) {
        b = b.a;
        c = c.a;
        b in we || (we[b] = {});
        we[b][c] = d
    }

    function te(b, c, d, e) {
        b = re(b);
        c = re(c);
        ye(b, c, He(d));
        ye(c, b, He(e))
    }

    function He(b) {
        return function (c, d, e) {
            var f = c.length;
            e = m(e) ? e : 2;
            d = m(d) ? d : Array(f);
            var g, h;
            for (h = 0; h < f; h += e)for (g = b([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g)d[h + g] = c[h + g];
            return d
        }
    }

    function re(b) {
        var c;
        b instanceof pe ? c = b : ia(b) ? (c = qe[b], !m(c) && "function" == typeof proj4 && m(proj4.defs(b)) && (c = new pe({code: b}), Fe(c))) : c = null;
        return c
    }

    function Ie(b, c) {
        return b === c ? !0 : b.a === c.a ? !0 : b.b != c.b ? !1 : ve(b, c) === ze
    }

    function Je(b, c) {
        var d = re(b), e = re(c);
        return ve(d, e)
    }

    function ve(b, c) {
        var d = b.a, e = c.a, f;
        d in we && e in we[d] && (f = we[d][e]);
        m(f) || (f = Ke);
        return f
    }

    function Ke(b, c) {
        if (m(c) && b !== c) {
            for (var d = 0, e = b.length; d < e; ++d)c[d] = b[d];
            b = c
        }
        return b
    }

    function ze(b, c) {
        var d;
        if (m(c)) {
            d = 0;
            for (var e = b.length; d < e; ++d)c[d] = b[d];
            d = c
        } else d = b.slice();
        return d
    }

    function Le(b, c, d) {
        return Je(c, d)(b, void 0, b.length)
    }

    function Me(b, c, d) {
        c = Je(c, d);
        return le(b, c)
    };
    function Ne(b) {
        fd.call(this);
        b = m(b) ? b : {};
        this.c = [0, 0];
        var c = {};
        c.center = m(b.center) ? b.center : null;
        this.e = Ge(b.projection);
        var d, e, f, g = m(b.minZoom) ? b.minZoom : 0;
        d = m(b.maxZoom) ? b.maxZoom : 28;
        var h = m(b.zoomFactor) ? b.zoomFactor : 2;
        if (m(b.resolutions))d = b.resolutions, e = d[0], f = d[d.length - 1], d = bc(d); else {
            e = Ge(b.projection);
            f = e.G();
            var k = (null === f ? 360 * oe.degrees / oe[e.b] : Math.max(ie(f), fe(f))) / 256 / Math.pow(2, 0), n = k / Math.pow(2, 28);
            e = b.maxResolution;
            m(e) ? g = 0 : e = k / Math.pow(h, g);
            f = b.minResolution;
            m(f) || (f = m(b.maxZoom) ?
                m(b.maxResolution) ? e / Math.pow(h, d) : k / Math.pow(h, d) : n);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = cc(h, e, d - g)
        }
        this.b = e;
        this.f = f;
        this.d = g;
        g = m(b.extent) ? Zb(b.extent) : $b;
        (m(b.enableRotation) ? b.enableRotation : 1) ? (e = b.constrainRotation, e = m(e) && !0 !== e ? !1 === e ? ec : ja(e) ? fc(e) : ec : gc()) : e = dc;
        this.g = new hc(g, d, e);
        m(b.resolution) ? c.resolution = b.resolution : m(b.zoom) && (c.resolution = this.constrainResolution(this.b, b.zoom - this.d));
        c.rotation = m(b.rotation) ? b.rotation : 0;
        this.t(c)
    }

    w(Ne, fd);
    l = Ne.prototype;
    l.xd = function (b) {
        return this.g.center(b)
    };
    l.constrainResolution = function (b, c, d) {
        return this.g.resolution(b, c || 0, d || 0)
    };
    l.constrainRotation = function (b, c) {
        return this.g.rotation(b, c || 0)
    };
    l.Ba = function () {
        return this.get("center")
    };
    l.Oc = function (b) {
        var c = this.Ba(), d = this.xa();
        return [c[0] - d * b[0] / 2, c[1] - d * b[1] / 2, c[0] + d * b[0] / 2, c[1] + d * b[1] / 2]
    };
    l.dl = function () {
        return this.e
    };
    l.xa = function () {
        return this.get("resolution")
    };
    function Oe(b, c) {
        return Math.max(ie(b) / c[0], fe(b) / c[1])
    }

    function Pe(b) {
        var c = b.b, d = Math.log(c / b.f) / Math.log(2);
        return function (b) {
            return c / Math.pow(2, b * d)
        }
    }

    l.Ca = function () {
        return this.get("rotation")
    };
    function Re(b) {
        var c = b.b, d = Math.log(c / b.f) / Math.log(2);
        return function (b) {
            return Math.log(c / b) / Math.log(2) / d
        }
    }

    function Se(b) {
        var c = b.Ba(), d = b.e, e = b.xa();
        b = b.Ca();
        return {center: c.slice(), projection: m(d) ? d : null, resolution: e, rotation: b}
    }

    l.Dj = function () {
        var b, c = this.xa();
        if (m(c)) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.b, e);
                if (d == c) {
                    b = e;
                    break
                }
                ++e
            } while (d > this.f)
        }
        return m(b) ? this.d + b : b
    };
    l.Ie = function (b, c) {
        if (!je(b)) {
            this.Na(de(b));
            var d = Oe(b, c), e = this.constrainResolution(d, 0, 0);
            e < d && (e = this.constrainResolution(e, -1, 0));
            this.yb(e)
        }
    };
    l.Fi = function (b, c, d) {
        var e = m(d) ? d : {};
        d = m(e.padding) ? e.padding : [0, 0, 0, 0];
        var f = m(e.constrainResolution) ? e.constrainResolution : !0, g = m(e.nearest) ? e.nearest : !1, h;
        m(e.minResolution) ? h = e.minResolution : m(e.maxZoom) ? h = this.constrainResolution(this.b, e.maxZoom - this.d, 0) : h = 0;
        var k = b.j, n = this.Ca(), e = Math.cos(-n), n = Math.sin(-n), p = Infinity, q = Infinity, r = -Infinity, t = -Infinity;
        b = b.s;
        for (var u = 0, A = k.length; u < A; u += b)var z = k[u] * e - k[u + 1] * n, C = k[u] * n + k[u + 1] * e, p = Math.min(p, z), q = Math.min(q, C), r = Math.max(r, z), t = Math.max(t,
            C);
        c = Oe([p, q, r, t], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        this.yb(c);
        n = -n;
        g = (p + r) / 2 + (d[1] - d[3]) / 2 * c;
        d = (q + t) / 2 + (d[0] - d[2]) / 2 * c;
        this.Na([g * e - d * n, d * e + g * n])
    };
    l.Bi = function (b, c, d) {
        var e = this.Ca(), f = Math.cos(-e), e = Math.sin(-e), g = b[0] * f - b[1] * e;
        b = b[1] * f + b[0] * e;
        var h = this.xa(), g = g + (c[0] / 2 - d[0]) * h;
        b += (d[1] - c[1] / 2) * h;
        e = -e;
        this.Na([g * f - b * e, b * f + g * e])
    };
    function Te(b) {
        return null != b.Ba() && m(b.xa())
    }

    l.rotate = function (b, c) {
        if (m(c)) {
            var d, e = this.Ba();
            m(e) && (d = [e[0] - c[0], e[1] - c[1]], rd(d, b - this.Ca()), md(d, c));
            this.Na(d)
        }
        this.Yd(b)
    };
    l.Na = function (b) {
        this.set("center", b)
    };
    function Ue(b, c) {
        b.c[1] += c
    }

    l.yb = function (b) {
        this.set("resolution", b)
    };
    l.Yd = function (b) {
        this.set("rotation", b)
    };
    l.oo = function (b) {
        b = this.constrainResolution(this.b, b - this.d, 0);
        this.yb(b)
    };
    function Ve(b) {
        return 1 - Math.pow(1 - b, 3)
    };
    function We(b) {
        return 3 * b * b - 2 * b * b * b
    }

    function Xe(b) {
        return b
    }

    function Ye(b) {
        return .5 > b ? We(2 * b) : 1 - We(2 * (b - .5))
    };
    function Ze(b) {
        var c = b.source, d = m(b.start) ? b.start : ua(), e = c[0], f = c[1], g = m(b.duration) ? b.duration : 1E3, h = m(b.easing) ? b.easing : We;
        return function (b, c) {
            if (c.time < d)return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var p = 1 - h((c.time - d) / g), q = e - c.viewState.center[0], r = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += p * q;
                c.viewState.center[1] += p * r;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function $e(b) {
        var c = m(b.rotation) ? b.rotation : 0, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : We, g = m(b.anchor) ? b.anchor : null;
        return function (b, k) {
            if (k.time < d)return k.animate = !0, k.viewHints[0] += 1, !0;
            if (k.time < d + e) {
                var n = 1 - f((k.time - d) / e), n = (c - k.viewState.rotation) * n;
                k.animate = !0;
                k.viewState.rotation += n;
                if (null !== g) {
                    var p = k.viewState.center;
                    p[0] -= g[0];
                    p[1] -= g[1];
                    rd(p, n);
                    md(p, g)
                }
                k.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function af(b) {
        var c = b.resolution, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : We;
        return function (b, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = 1 - f((h.time - d) / e), n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };
    function bf(b, c, d, e) {
        return m(e) ? (e[0] = b, e[1] = c, e[2] = d, e) : [b, c, d]
    }

    function cf(b, c, d) {
        return b + "/" + c + "/" + d
    }

    function df(b) {
        var c = b[0], d = Array(c), e = 1 << c - 1, f, g;
        for (f = 0; f < c; ++f)g = 48, b[1] & e && (g += 1), b[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
        return d.join("")
    }

    function ef(b) {
        return cf(b[0], b[1], b[2])
    };
    function ff(b, c, d, e) {
        this.b = b;
        this.d = c;
        this.a = d;
        this.c = e
    }

    ff.prototype.contains = function (b) {
        return gf(this, b[1], b[2])
    };
    function gf(b, c, d) {
        return b.b <= c && c <= b.d && b.a <= d && d <= b.c
    }

    function hf(b, c) {
        return b.b == c.b && b.a == c.a && b.d == c.d && b.c == c.c
    }

    function jf(b) {
        return b.d - b.b + 1
    }

    function kf(b, c) {
        return b.b <= c.d && b.d >= c.b && b.a <= c.c && b.c >= c.a
    };
    function lf(b) {
        this.b = b.html;
        this.a = m(b.tileRanges) ? b.tileRanges : null
    }

    lf.prototype.c = function () {
        return this.b
    };
    function mf(b, c, d) {
        rc.call(this, b, d);
        this.element = c
    }

    w(mf, rc);
    function nf(b) {
        fd.call(this);
        this.b = m(b) ? b : [];
        of(this)
    }

    w(nf, fd);
    l = nf.prototype;
    l.clear = function () {
        for (; 0 < this.Jb();)this.pop()
    };
    l.Ze = function (b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; ++c)this.push(b[c]);
        return this
    };
    l.forEach = function (b, c) {
        Sa(this.b, b, c)
    };
    l.Hk = function () {
        return this.b
    };
    l.item = function (b) {
        return this.b[b]
    };
    l.Jb = function () {
        return this.get("length")
    };
    l.Pd = function (b, c) {
        eb(this.b, b, 0, c);
        of(this);
        this.dispatchEvent(new mf("add", c, this))
    };
    l.pop = function () {
        return this.tf(this.Jb() - 1)
    };
    l.push = function (b) {
        var c = this.b.length;
        this.Pd(c, b);
        return c
    };
    l.remove = function (b) {
        var c = this.b, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d] === b)return this.tf(d)
    };
    l.tf = function (b) {
        var c = this.b[b];
        Qa.splice.call(this.b, b, 1);
        of(this);
        this.dispatchEvent(new mf("remove", c, this));
        return c
    };
    l.Vn = function (b, c) {
        var d = this.Jb();
        if (b < d)d = this.b[b], this.b[b] = c, this.dispatchEvent(new mf("remove", d, this)), this.dispatchEvent(new mf("add", c, this)); else {
            for (; d < b; ++d)this.Pd(d, void 0);
            this.Pd(b, c)
        }
    };
    function of(b) {
        b.set("length", b.b.length)
    };
    var pf = /^#(?:[0-9a-f]{3}){1,2}$/i, qf = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i, rf = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function sf(b) {
        return ga(b) ? b : tf(b)
    }

    function uf(b) {
        if (!ia(b)) {
            var c = b[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = b[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = b[2];
            e != (e | 0) && (e = e + .5 | 0);
            b = "rgba(" + c + "," + d + "," + e + "," + b[3] + ")"
        }
        return b
    }

    var tf = function () {
        var b = {}, c = 0;
        return function (d) {
            var e;
            if (b.hasOwnProperty(d))e = b[d]; else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in b)0 === (e++ & 3) && (delete b[f], --c)
                }
                var g, h;
                pf.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = rf.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = vf(e, e)) : (h = qf.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]),
                    e = [e, f, g, 1], e = vf(e, e)) : e = void 0;
                b[d] = e;
                ++c
            }
            return e
        }
    }();

    function vf(b, c) {
        var d = m(c) ? c : [];
        d[0] = Vb(b[0] + .5 | 0, 0, 255);
        d[1] = Vb(b[1] + .5 | 0, 0, 255);
        d[2] = Vb(b[2] + .5 | 0, 0, 255);
        d[3] = Vb(b[3], 0, 1);
        return d
    };
    function wf() {
        this.f = zd();
        this.b = void 0;
        this.a = zd();
        this.d = void 0;
        this.c = zd();
        this.g = void 0;
        this.e = zd();
        this.q = void 0;
        this.i = zd()
    }

    function xf(b, c, d, e, f) {
        var g = !1;
        m(c) && c !== b.b && (g = b.a, Dd(g), g[12] = c, g[13] = c, g[14] = c, g[15] = 1, b.b = c, g = !0);
        if (m(d) && d !== b.d) {
            g = b.c;
            Dd(g);
            g[0] = d;
            g[5] = d;
            g[10] = d;
            g[15] = 1;
            var h = -.5 * d + .5;
            g[12] = h;
            g[13] = h;
            g[14] = h;
            g[15] = 1;
            b.d = d;
            g = !0
        }
        m(e) && e !== b.g && (g = Math.cos(e), h = Math.sin(e), Ad(b.e, .213 + .787 * g - .213 * h, .213 - .213 * g + .143 * h, .213 - .213 * g - .787 * h, 0, .715 - .715 * g - .715 * h, .715 + .285 * g + .14 * h, .715 - .715 * g + .715 * h, 0, .072 - .072 * g + .928 * h, .072 - .072 * g - .283 * h, .072 + .928 * g + .072 * h, 0, 0, 0, 0, 1), b.g = e, g = !0);
        m(f) && f !== b.q && (Ad(b.i, .213 + .787 *
            f, .213 - .213 * f, .213 - .213 * f, 0, .715 - .715 * f, .715 + .285 * f, .715 - .715 * f, 0, .072 - .072 * f, .072 - .072 * f, .072 + .928 * f, 0, 0, 0, 0, 1), b.q = f, g = !0);
        g && (g = b.f, Dd(g), m(d) && Ed(g, b.c, g), m(c) && Ed(g, b.a, g), m(f) && Ed(g, b.i, g), m(e) && Ed(g, b.e, g));
        return b.f
    };
    var yf = !Ib || Ib && 9 <= Tb;
    !Jb && !Ib || Ib && Ib && 9 <= Tb || Jb && Rb("1.9.1");
    Ib && Rb("9");
    Gb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    function zf(b, c) {
        this.x = m(b) ? b : 0;
        this.y = m(c) ? c : 0
    }

    l = zf.prototype;
    l.clone = function () {
        return new zf(this.x, this.y)
    };
    l.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.x *= b;
        this.y *= d;
        return this
    };
    function Af(b, c) {
        this.width = b;
        this.height = c
    }

    l = Af.prototype;
    l.clone = function () {
        return new Af(this.width, this.height)
    };
    l.la = function () {
        return !(this.width * this.height)
    };
    l.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.width *= b;
        this.height *= d;
        return this
    };
    function Bf(b) {
        return b ? new Cf(Df(b)) : ya || (ya = new Cf)
    }

    function Ef(b) {
        var c = document;
        return ia(b) ? c.getElementById(b) : b
    }

    function Ff(b, c) {
        pb(c, function (c, e) {
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : e in Gf ? b.setAttribute(Gf[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? b.setAttribute(e, c) : b[e] = c
        })
    }

    var Gf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Hf(b) {
        b = b.document.documentElement;
        return new Af(b.clientWidth, b.clientHeight)
    }

    function If(b, c, d) {
        var e = arguments, f = document, g = e[0], h = e[1];
        if (!yf && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Da(h.name), '"');
            if (h.type) {
                g.push(' type="', Da(h.type), '"');
                var k = {};
                Fb(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ia(h) ? g.className = h : ga(h) ? g.className = h.join(" ") : Ff(g, h));
        2 < e.length && Jf(f, g, e, 2);
        return g
    }

    function Jf(b, c, d, e) {
        function f(d) {
            d && c.appendChild(ia(d) ? b.createTextNode(d) : d)
        }

        for (; e < d.length; e++) {
            var g = d[e];
            !ha(g) || la(g) && 0 < g.nodeType ? f(g) : Sa(Kf(g) ? cb(g) : g, f)
        }
    }

    function Lf(b) {
        return document.createElement(b)
    }

    function Mf(b, c) {
        Jf(Df(b), b, arguments, 1)
    }

    function Nf(b) {
        for (var c; c = b.firstChild;)b.removeChild(c)
    }

    function Of(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    }

    function Pf(b) {
        b && b.parentNode && b.parentNode.removeChild(b)
    }

    function Qf(b, c) {
        var d = c.parentNode;
        d && d.replaceChild(b, c)
    }

    function Rf(b) {
        if (void 0 != b.firstElementChild)b = b.firstElementChild; else for (b = b.firstChild; b && 1 != b.nodeType;)b = b.nextSibling;
        return b
    }

    function Tf(b, c) {
        if (b.contains && 1 == c.nodeType)return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition)return b == c || Boolean(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;)c = c.parentNode;
        return c == b
    }

    function Df(b) {
        return 9 == b.nodeType ? b : b.ownerDocument || b.document
    }

    function Kf(b) {
        if (b && "number" == typeof b.length) {
            if (la(b))return "function" == typeof b.item || "string" == typeof b.item;
            if (ka(b))return "function" == typeof b.item
        }
        return !1
    }

    function Cf(b) {
        this.a = b || ba.document || document
    }

    function Uf() {
        return !0
    }

    function Vf(b) {
        var c = b.a;
        b = Kb ? c.body || c.documentElement : c.documentElement;
        c = c.parentWindow || c.defaultView;
        return Ib && Rb("10") && c.pageYOffset != b.scrollTop ? new zf(b.scrollLeft, b.scrollTop) : new zf(c.pageXOffset || b.scrollLeft, c.pageYOffset || b.scrollTop)
    }

    Cf.prototype.appendChild = function (b, c) {
        b.appendChild(c)
    };
    Cf.prototype.contains = Tf;
    function Wf(b) {
        if (b.classList)return b.classList;
        b = b.className;
        return ia(b) && b.match(/\S+/g) || []
    }

    function Xf(b, c) {
        return b.classList ? b.classList.contains(c) : Ya(Wf(b), c)
    }

    function Yf(b, c) {
        b.classList ? b.classList.add(c) : Xf(b, c) || (b.className += 0 < b.className.length ? " " + c : c)
    }

    function Zf(b, c) {
        b.classList ? b.classList.remove(c) : Xf(b, c) && (b.className = Ta(Wf(b), function (b) {
            return b != c
        }).join(" "))
    }

    function $f(b, c) {
        Xf(b, c) ? Zf(b, c) : Yf(b, c)
    };
    function ag(b, c, d, e) {
        this.top = b;
        this.right = c;
        this.bottom = d;
        this.left = e
    }

    l = ag.prototype;
    l.clone = function () {
        return new ag(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function (b) {
        return this && b ? b instanceof ag ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom : !1
    };
    l.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.right *= b;
        this.top *= d;
        this.bottom *= d;
        return this
    };
    function bg(b, c, d, e) {
        this.left = b;
        this.top = c;
        this.width = d;
        this.height = e
    }

    l = bg.prototype;
    l.clone = function () {
        return new bg(this.left, this.top, this.width, this.height)
    };
    l.contains = function (b) {
        return b instanceof bg ? this.left <= b.left && this.left + this.width >= b.left + b.width && this.top <= b.top && this.top + this.height >= b.top + b.height : b.x >= this.left && b.x <= this.left + this.width && b.y >= this.top && b.y <= this.top + this.height
    };
    function cg(b, c) {
        var d = c.x < b.left ? b.left - c.x : Math.max(c.x - (b.left + b.width), 0), e = c.y < b.top ? b.top - c.y : Math.max(c.y - (b.top + b.height), 0);
        return d * d + e * e
    }

    l.distance = function (b) {
        return Math.sqrt(cg(this, b))
    };
    l.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.width *= b;
        this.top *= d;
        this.height *= d;
        return this
    };
    function dg(b, c) {
        var d = Df(b);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(b, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    }

    function eg(b, c) {
        return dg(b, c) || (b.currentStyle ? b.currentStyle[c] : null) || b.style && b.style[c]
    }

    function fg(b, c, d) {
        var e;
        c instanceof zf ? (e = c.x, c = c.y) : (e = c, c = d);
        b.style.left = gg(e);
        b.style.top = gg(c)
    }

    function hg(b) {
        var c;
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
            return {left: 0, top: 0, right: 0, bottom: 0}
        }
        Ib && b.ownerDocument.body && (b = b.ownerDocument, c.left -= b.documentElement.clientLeft + b.body.clientLeft, c.top -= b.documentElement.clientTop + b.body.clientTop);
        return c
    }

    function ig(b) {
        if (1 == b.nodeType)return b = hg(b), new zf(b.left, b.top);
        var c = ka(b.Qi), d = b;
        b.targetTouches && b.targetTouches.length ? d = b.targetTouches[0] : c && b.a.targetTouches && b.a.targetTouches.length && (d = b.a.targetTouches[0]);
        return new zf(d.clientX, d.clientY)
    }

    function gg(b) {
        "number" == typeof b && (b = b + "px");
        return b
    }

    function jg(b) {
        var c = kg;
        if ("none" != eg(b, "display"))return c(b);
        var d = b.style, e = d.display, f = d.visibility, g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        b = c(b);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return b
    }

    function kg(b) {
        var c = b.offsetWidth, d = b.offsetHeight, e = Kb && !c && !d;
        return m(c) && !e || !b.getBoundingClientRect ? new Af(c, d) : (b = hg(b), new Af(b.right - b.left, b.bottom - b.top))
    }

    function lg(b, c) {
        b.style.display = c ? "" : "none"
    }

    function mg(b, c, d, e) {
        if (/^\d+px?$/.test(c))return parseInt(c, 10);
        var f = b.style[d], g = b.runtimeStyle[d];
        b.runtimeStyle[d] = b.currentStyle[d];
        b.style[d] = c;
        c = b.style[e];
        b.style[d] = f;
        b.runtimeStyle[d] = g;
        return c
    }

    function ng(b, c) {
        var d = b.currentStyle ? b.currentStyle[c] : null;
        return d ? mg(b, d, "left", "pixelLeft") : 0
    }

    function og(b, c) {
        if (Ib) {
            var d = ng(b, c + "Left"), e = ng(b, c + "Right"), f = ng(b, c + "Top"), g = ng(b, c + "Bottom");
            return new ag(f, e, g, d)
        }
        d = dg(b, c + "Left");
        e = dg(b, c + "Right");
        f = dg(b, c + "Top");
        g = dg(b, c + "Bottom");
        return new ag(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }

    var pg = {thin: 2, medium: 4, thick: 6};

    function qg(b, c) {
        if ("none" == (b.currentStyle ? b.currentStyle[c + "Style"] : null))return 0;
        var d = b.currentStyle ? b.currentStyle[c + "Width"] : null;
        return d in pg ? pg[d] : mg(b, d, "left", "pixelLeft")
    }

    function rg(b) {
        if (Ib && !(Ib && 9 <= Tb)) {
            var c = qg(b, "borderLeft"), d = qg(b, "borderRight"), e = qg(b, "borderTop");
            b = qg(b, "borderBottom");
            return new ag(e, d, b, c)
        }
        c = dg(b, "borderLeftWidth");
        d = dg(b, "borderRightWidth");
        e = dg(b, "borderTopWidth");
        b = dg(b, "borderBottomWidth");
        return new ag(parseFloat(e), parseFloat(d), parseFloat(b), parseFloat(c))
    };
    function sg(b, c, d) {
        rc.call(this, b);
        this.map = c;
        this.frameState = m(d) ? d : null
    }

    w(sg, rc);
    function tg(b) {
        fd.call(this);
        this.element = m(b.element) ? b.element : null;
        this.b = this.K = null;
        this.n = [];
        this.render = m(b.render) ? b.render : ca;
        m(b.target) && this.c(b.target)
    }

    w(tg, fd);
    function ug(b) {
        x(b, ["mouseout", uc], function () {
            this.blur()
        }, !1)
    }

    tg.prototype.N = function () {
        Pf(this.element);
        tg.S.N.call(this)
    };
    tg.prototype.e = function () {
        return this.b
    };
    tg.prototype.setMap = function (b) {
        null === this.b || Pf(this.element);
        0 != this.n.length && (Sa(this.n, Wc), this.n.length = 0);
        this.b = b;
        null !== this.b && ((null === this.K ? b.p : this.K).appendChild(this.element), this.render !== ca && this.n.push(x(b, "postrender", this.render, !1, this)), b.render())
    };
    tg.prototype.c = function (b) {
        this.K = Ef(b)
    };
    function vg() {
        this.c = 0;
        this.d = {};
        this.b = this.a = null
    }

    l = vg.prototype;
    l.clear = function () {
        this.c = 0;
        this.d = {};
        this.b = this.a = null
    };
    function wg(b, c) {
        return b.d.hasOwnProperty(c)
    }

    l.forEach = function (b, c) {
        for (var d = this.a; null !== d;)b.call(c, d.qc, d.Sd, this), d = d.Xa
    };
    l.get = function (b) {
        b = this.d[b];
        if (b === this.b)return b.qc;
        b === this.a ? (this.a = this.a.Xa, this.a.Mb = null) : (b.Xa.Mb = b.Mb, b.Mb.Xa = b.Xa);
        b.Xa = null;
        b.Mb = this.b;
        this.b = this.b.Xa = b;
        return b.qc
    };
    l.Sb = function () {
        return this.c
    };
    l.C = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Mb)b[c++] = d.Sd;
        return b
    };
    l.eb = function () {
        var b = Array(this.c), c = 0, d;
        for (d = this.b; null !== d; d = d.Mb)b[c++] = d.qc;
        return b
    };
    l.pop = function () {
        var b = this.a;
        delete this.d[b.Sd];
        null !== b.Xa && (b.Xa.Mb = null);
        this.a = b.Xa;
        null === this.a && (this.b = null);
        --this.c;
        return b.qc
    };
    l.set = function (b, c) {
        var d = {Sd: b, Xa: null, Mb: this.b, qc: c};
        null === this.b ? this.a = d : this.b.Xa = d;
        this.b = d;
        this.d[b] = d;
        ++this.c
    };
    function xg(b) {
        vg.call(this);
        this.e = m(b) ? b : 2048
    }

    w(xg, vg);
    function yg(b) {
        return b.Sb() > b.e
    };
    function zg(b, c) {
        $c.call(this);
        this.a = b;
        this.state = c
    }

    w(zg, $c);
    function Ag(b) {
        b.dispatchEvent("change")
    }

    zg.prototype.hb = function () {
        return ma(this).toString()
    };
    zg.prototype.g = function () {
        return this.a
    };
    function Bg(b) {
        fd.call(this);
        this.g = re(b.projection);
        this.d = m(b.attributions) ? b.attributions : null;
        this.K = b.logo;
        this.o = m(b.state) ? b.state : "ready";
        this.J = m(b.wrapX) ? b.wrapX : !1
    }

    w(Bg, fd);
    l = Bg.prototype;
    l.ce = ca;
    l.ea = function () {
        return this.d
    };
    l.ca = function () {
        return this.K
    };
    l.fa = function () {
        return this.g
    };
    l.ga = function () {
        return this.o
    };
    function Cg(b) {
        return b.J
    }

    function Dg(b, c) {
        b.o = c;
        b.k()
    };
    function Eg(b) {
        return function () {
            return b
        }
    }

    var Fg = Eg(!1), Gg = Eg(!0), Hg = Eg(null);

    function Ig(b) {
        return b
    }

    function Jg(b) {
        var c;
        c = c || 0;
        return function () {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    }

    function Kg(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b, f = 0; f < d; f++)b = c[f].apply(this, arguments);
            return b
        }
    }

    function Lg(b) {
        var c = arguments, d = c.length;
        return function () {
            for (var b = 0; b < d; b++)if (!c[b].apply(this, arguments))return !1;
            return !0
        }
    };
    function Mg(b) {
        this.minZoom = m(b.minZoom) ? b.minZoom : 0;
        this.a = b.resolutions;
        this.maxZoom = this.a.length - 1;
        this.c = m(b.origin) ? b.origin : null;
        this.e = null;
        m(b.origins) && (this.e = b.origins);
        var c = b.extent;
        m(c) && null === this.c && null === this.e && (this.c = $d(c));
        this.g = null;
        m(b.tileSizes) && (this.g = b.tileSizes);
        this.i = m(b.tileSize) ? b.tileSize : null === this.g ? 256 : null;
        this.n = m(c) ? c : null;
        this.createTileCoordTransform = m(b.createTileCoordTransform) ? b.createTileCoordTransform : Ig;
        this.b = null;
        m(b.sizes) ? this.b = Ua(b.sizes,
            function (b) {
                var c = new ff(0, b[0] - 1, 0, b[1] - 1);
                c.c < c.a && (c.a = b[1], c.c = -1);
                return c
            }, this) : null != c && Ng(this, c);
        this.d = [0, 0]
    }

    var Og = [0, 0, 0];

    function Pg(b, c, d, e, f) {
        f = Qg(b, c, f);
        for (c = c[0] - 1; c >= b.minZoom;) {
            if (d.call(null, c, Rg(b, f, c, e)))return !0;
            --c
        }
        return !1
    }

    l = Mg.prototype;
    l.G = function () {
        return this.n
    };
    l.Re = function () {
        return this.maxZoom
    };
    l.Se = function () {
        return this.minZoom
    };
    l.dc = function (b) {
        return null === this.c ? this.e[b] : this.c
    };
    l.oa = function (b) {
        return this.a[b]
    };
    l.jf = function () {
        return this.a
    };
    function Sg(b, c, d, e) {
        return c[0] < b.maxZoom ? (e = Qg(b, c, e), Rg(b, e, c[0] + 1, d)) : null
    }

    function Tg(b, c, d, e) {
        Ug(b, c[0], c[1], d, !1, Og);
        var f = Og[1], g = Og[2];
        Ug(b, c[2], c[3], d, !0, Og);
        b = Og[1];
        c = Og[2];
        m(e) ? (e.b = f, e.d = b, e.a = g, e.c = c) : e = new ff(f, b, g, c);
        return e
    }

    function Rg(b, c, d, e) {
        return Tg(b, c, b.oa(d), e)
    }

    function Vg(b, c) {
        var d = b.dc(c[0]), e = b.oa(c[0]), f = ld(b.ra(c[0]), b.d);
        return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e]
    }

    function Qg(b, c, d) {
        var e = b.dc(c[0]), f = b.oa(c[0]);
        b = ld(b.ra(c[0]), b.d);
        var g = e[0] + c[1] * b[0] * f;
        c = e[1] + c[2] * b[1] * f;
        return Nd(g, c, g + b[0] * f, c + b[1] * f, d)
    }

    l.wc = function (b, c, d) {
        return Ug(this, b[0], b[1], c, !1, d)
    };
    function Ug(b, c, d, e, f, g) {
        var h = Wg(b, e), k = e / b.oa(h), n = b.dc(h);
        b = ld(b.ra(h), b.d);
        var p = f ? .5 : 0;
        c = k * ((c - n[0]) / e + p | 0) / b[0];
        d = k * ((d - n[1]) / e + p | 0) / b[1];
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return bf(h, c, d, g)
    }

    l.bd = function (b, c, d) {
        return Ug(this, b[0], b[1], this.oa(c), !1, d)
    };
    l.ra = function (b) {
        return null === this.i ? this.g[b] : this.i
    };
    function Wg(b, c) {
        var d = ac(b.a, c, 0);
        return Vb(d, b.minZoom, b.maxZoom)
    }

    function Ng(b, c) {
        for (var d = ie(c), e = fe(c), f = Array(b.a.length), g, h = 0, k = f.length; h < k; ++h)g = ld(b.ra(h), b.d), f[h] = new ff(0, Math.ceil(d / g[0] / b.a[h]) - 1, 0, Math.ceil(e / g[1] / b.a[h]) - 1);
        b.b = f
    }

    function Xg(b) {
        var c = {};
        Fb(c, m(b) ? b : {});
        m(c.extent) || (c.extent = re("EPSG:3857").G());
        c.resolutions = Yg(c.extent, c.maxZoom, c.tileSize);
        delete c.maxZoom;
        c.createTileCoordTransform = function () {
            return Zg(this)
        };
        return new Mg(c)
    }

    function Yg(b, c, d) {
        c = m(c) ? c : 42;
        var e = fe(b);
        b = ie(b);
        d = ld(m(d) ? d : 256);
        d = Math.max(b / d[0], e / d[1]);
        c += 1;
        e = Array(c);
        for (b = 0; b < c; ++b)e[b] = d / Math.pow(2, b);
        return e
    }

    function $g(b) {
        b = re(b);
        var c = b.G();
        null === c && (b = 180 * oe.degrees / b.Ed(), c = Nd(-b, -b, b, b));
        return c
    }

    function Zg(b) {
        return function (c, d, e) {
            if (null === c)return null;
            d = c[0];
            var f = null === b.b ? null : b.b[d];
            return bf(d, c[1], (null === f || 0 > f.a ? 0 : f.c - f.a + 1) - c[2] - 1, e)
        }
    };
    function ah(b) {
        Bg.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state,
            wrapX: b.wrapX
        });
        this.U = m(b.opaque) ? b.opaque : !1;
        this.aa = m(b.tilePixelRatio) ? b.tilePixelRatio : 1;
        this.tileGrid = m(b.tileGrid) ? b.tileGrid : null;
        this.b = new xg;
        this.c = [0, 0]
    }

    w(ah, Bg);
    function bh(b, c, d, e) {
        for (var f = !0, g, h, k = d.b; k <= d.d; ++k)for (var n = d.a; n <= d.c; ++n)g = b.cb(c, k, n), h = !1, wg(b.b, g) && (g = b.b.get(g), (h = 2 === g.state) && (h = !1 !== e(g))), h || (f = !1);
        return f
    }

    l = ah.prototype;
    l.Bd = function () {
        return 0
    };
    l.cb = cf;
    l.ta = function () {
        return this.tileGrid
    };
    function ch(b, c) {
        var d;
        if (null === b.tileGrid) {
            var e = c.i;
            if (null === e) {
                var e = $g(c), f = m(void 0) ? void 0 : "bottom-left", g = Yg(e, void 0, void 0);
                "bottom-left" === f ? d = $d(e) : "bottom-right" === f ? d = ae(e) : "top-left" === f ? d = ce(e) : "top-right" === f && (d = be(e));
                e = new Mg({extent: e, origin: d, resolutions: g, tileSize: void 0});
                c.i = e
            }
            d = e
        } else d = b.tileGrid;
        return d
    }

    l.Vb = function (b, c, d) {
        c = ch(this, d);
        return kd(ld(c.ra(b), this.c), this.aa, this.c)
    };
    l.zf = ca;
    function dh(b, c) {
        rc.call(this, b);
        this.tile = c
    }

    w(dh, rc);
    function eh(b) {
        b = m(b) ? b : {};
        this.p = Lf("UL");
        this.o = Lf("LI");
        this.p.appendChild(this.o);
        lg(this.o, !1);
        this.d = m(b.collapsed) ? b.collapsed : !0;
        this.f = m(b.collapsible) ? b.collapsible : !0;
        this.f || (this.d = !1);
        var c = m(b.className) ? b.className : "ol-attribution", d = m(b.tipLabel) ? b.tipLabel : "Attributions", e = m(b.collapseLabel) ? b.collapseLabel : "\u00bb";
        this.J = ia(e) ? If("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "i";
        this.H = ia(e) ? If("SPAN", {}, e) : e;
        d = If("BUTTON", {type: "button", title: d}, this.f && !this.d ? this.J : this.H);
        x(d, "click",
            this.gl, !1, this);
        x(d, ["mouseout", uc], function () {
            this.blur()
        }, !1);
        c = If("DIV", c + " ol-unselectable ol-control" + (this.d && this.f ? " ol-collapsed" : "") + (this.f ? "" : " ol-uncollapsible"), this.p, d);
        tg.call(this, {element: c, render: m(b.render) ? b.render : fh, target: b.target});
        this.l = !0;
        this.i = {};
        this.g = {};
        this.R = {}
    }

    w(eh, tg);
    function fh(b) {
        b = b.frameState;
        if (null === b)this.l && (lg(this.element, !1), this.l = !1); else {
            var c, d, e, f, g, h, k, n, p, q, r, t = b.layerStatesArray, u = Db(b.attributions), A = {}, z = b.viewState.projection;
            d = 0;
            for (c = t.length; d < c; d++)if (h = t[d].layer.da(), null !== h && (q = ma(h).toString(), p = h.d, null !== p))for (e = 0, f = p.length; e < f; e++)if (k = p[e], n = ma(k).toString(), !(n in u)) {
                g = b.usedTiles[q];
                if (m(g)) {
                    var C = ch(h, z);
                    a:{
                        r = k;
                        var B = z;
                        if (null === r.a)r = !0; else {
                            var y = void 0, K = void 0, J = void 0, H = void 0;
                            for (H in g)if (H in r.a)for (var J = g[H],
                                                              Q, y = 0, K = r.a[H].length; y < K; ++y) {
                                Q = r.a[H][y];
                                if (kf(Q, J)) {
                                    r = !0;
                                    break a
                                }
                                var sa = Rg(C, B.G(), parseInt(H, 10)), Oa = jf(sa);
                                if (J.b < sa.b || J.d > sa.d)if (kf(Q, new ff(Wb(J.b, Oa), Wb(J.d, Oa), J.a, J.c)) || jf(J) > Oa && kf(Q, sa)) {
                                    r = !0;
                                    break a
                                }
                            }
                            r = !1
                        }
                    }
                } else r = !1;
                r ? (n in A && delete A[n], u[n] = k) : A[n] = k
            }
            c = [u, A];
            d = c[0];
            c = c[1];
            for (var O in this.i)O in d ? (this.g[O] || (lg(this.i[O], !0), this.g[O] = !0), delete d[O]) : O in c ? (this.g[O] && (lg(this.i[O], !1), delete this.g[O]), delete c[O]) : (Pf(this.i[O]), delete this.i[O], delete this.g[O]);
            for (O in d)e =
                Lf("LI"), e.innerHTML = d[O].b, this.p.appendChild(e), this.i[O] = e, this.g[O] = !0;
            for (O in c)e = Lf("LI"), e.innerHTML = c[O].b, lg(e, !1), this.p.appendChild(e), this.i[O] = e;
            O = !xb(this.g) || !xb(b.logos);
            this.l != O && (lg(this.element, O), this.l = O);
            O && xb(this.g) ? Yf(this.element, "ol-logo-only") : Zf(this.element, "ol-logo-only");
            var za;
            b = b.logos;
            O = this.R;
            for (za in O)za in b || (Pf(O[za]), delete O[za]);
            for (var bb in b)bb in O || (za = new Image, za.src = bb, d = b[bb], "" === d ? d = za : (d = If("A", {href: d}), d.appendChild(za)), this.o.appendChild(d),
                O[bb] = d);
            lg(this.o, !xb(b))
        }
    }

    l = eh.prototype;
    l.gl = function (b) {
        b.preventDefault();
        gh(this)
    };
    function gh(b) {
        $f(b.element, "ol-collapsed");
        b.d ? Qf(b.J, b.H) : Qf(b.H, b.J);
        b.d = !b.d
    }

    l.fl = function () {
        return this.f
    };
    l.il = function (b) {
        this.f !== b && (this.f = b, $f(this.element, "ol-uncollapsible"), !b && this.d && gh(this))
    };
    l.hl = function (b) {
        this.f && this.d !== b && gh(this)
    };
    l.el = function () {
        return this.d
    };
    function hh(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-rotate", d = m(b.label) ? b.label : "\u21e7";
        this.d = null;
        ia(d) ? this.d = If("SPAN", "ol-compass", d) : (this.d = d, Yf(this.d, "ol-compass"));
        d = If("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Reset rotation"
        }, this.d);
        x(d, "click", hh.prototype.o, !1, this);
        ug(d);
        c = If("DIV", c + " ol-unselectable ol-control", d);
        tg.call(this, {element: c, render: m(b.render) ? b.render : ih, target: b.target});
        this.f = m(b.duration) ? b.duration : 250;
        this.g = m(b.autoHide) ?
            b.autoHide : !0;
        this.i = void 0;
        this.g && Yf(this.element, "ol-hidden")
    }

    w(hh, tg);
    hh.prototype.o = function (b) {
        b.preventDefault();
        b = this.b;
        var c = b.P();
        if (null !== c) {
            for (var d = c.Ca(); d < -Math.PI;)d += 2 * Math.PI;
            for (; d > Math.PI;)d -= 2 * Math.PI;
            m(d) && (0 < this.f && b.Ha($e({rotation: d, duration: this.f, easing: Ve})), c.Yd(0))
        }
    };
    function ih(b) {
        b = b.frameState;
        if (null !== b) {
            b = b.viewState.rotation;
            if (b != this.i) {
                var c = "rotate(" + 180 * b / Math.PI + "deg)";
                if (this.g) {
                    var d = this.element;
                    0 === b ? Yf(d, "ol-hidden") : Zf(d, "ol-hidden")
                }
                this.d.style.msTransform = c;
                this.d.style.webkitTransform = c;
                this.d.style.transform = c
            }
            this.i = b
        }
    };
    function jh(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-zoom", d = m(b.delta) ? b.delta : 1, e = m(b.zoomOutLabel) ? b.zoomOutLabel : "\u2212", f = m(b.zoomOutTipLabel) ? b.zoomOutTipLabel : "Zoom out", g = If("BUTTON", {
            "class": c + "-in",
            type: "button",
            title: m(b.zoomInTipLabel) ? b.zoomInTipLabel : "Zoom in"
        }, m(b.zoomInLabel) ? b.zoomInLabel : "+");
        x(g, "click", ta(jh.prototype.g, d), !1, this);
        ug(g);
        e = If("BUTTON", {"class": c + "-out", type: "button", title: f}, e);
        x(e, "click", ta(jh.prototype.g, -d), !1, this);
        x(e, ["mouseout", uc], function () {
                this.blur()
            },
            !1);
        c = If("DIV", c + " ol-unselectable ol-control", g, e);
        tg.call(this, {element: c, target: b.target});
        this.d = m(b.duration) ? b.duration : 250
    }

    w(jh, tg);
    jh.prototype.g = function (b, c) {
        c.preventDefault();
        var d = this.b, e = d.P();
        if (null !== e) {
            var f = e.xa();
            m(f) && (0 < this.d && d.Ha(af({
                resolution: f,
                duration: this.d,
                easing: Ve
            })), d = e.constrainResolution(f, b), e.yb(d))
        }
    };
    function kh(b) {
        b = m(b) ? b : {};
        var c = new nf;
        (m(b.zoom) ? b.zoom : 1) && c.push(new jh(b.zoomOptions));
        (m(b.rotate) ? b.rotate : 1) && c.push(new hh(b.rotateOptions));
        (m(b.attribution) ? b.attribution : 1) && c.push(new eh(b.attributionOptions));
        return c
    };
    var lh = Kb ? "webkitfullscreenchange" : Jb ? "mozfullscreenchange" : Ib ? "MSFullscreenChange" : "fullscreenchange";

    function mh() {
        var b = Bf().a, c = b.body;
        return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && b.mozFullScreenEnabled || c.msRequestFullscreen && b.msFullscreenEnabled || c.requestFullscreen && b.fullscreenEnabled)
    }

    function nh(b) {
        b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.requestFullscreen && b.requestFullscreen()
    }

    function oh() {
        var b = Bf().a;
        return !!(b.webkitIsFullScreen || b.mozFullScreen || b.msFullscreenElement || b.fullscreenElement)
    };
    function ph(b) {
        b = m(b) ? b : {};
        this.d = m(b.className) ? b.className : "ol-full-screen";
        var c = m(b.label) ? b.label : "\u2194";
        this.g = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.labelActive) ? b.labelActive : "\u00d7";
        this.f = ia(c) ? document.createTextNode(String(c)) : c;
        c = m(b.tipLabel) ? b.tipLabel : "Toggle full-screen";
        c = If("BUTTON", {"class": this.d + "-" + oh(), type: "button", title: c}, this.g);
        x(c, "click", this.l, !1, this);
        ug(c);
        x(ba.document, lh, this.i, !1, this);
        var d = this.d + " ol-unselectable ol-control " + (mh() ? "" : "ol-unsupported"),
            c = If("DIV", d, c);
        tg.call(this, {element: c, target: b.target});
        this.o = m(b.keys) ? b.keys : !1
    }

    w(ph, tg);
    ph.prototype.l = function (b) {
        b.preventDefault();
        mh() && (b = this.b, null !== b && (oh() ? (b = Bf().a, b.webkitCancelFullScreen ? b.webkitCancelFullScreen() : b.mozCancelFullScreen ? b.mozCancelFullScreen() : b.msExitFullscreen ? b.msExitFullscreen() : b.exitFullscreen && b.exitFullscreen()) : (b = b.bf(), b = Ef(b), this.o ? b.mozRequestFullScreenWithKeys ? b.mozRequestFullScreenWithKeys() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : nh(b) : nh(b))))
    };
    ph.prototype.i = function () {
        var b = this.d + "-true", c = this.d + "-false", d = Rf(this.element), e = this.b;
        oh() ? (Xf(d, c) && (Zf(d, c), Yf(d, b)), Qf(this.f, this.g)) : (Xf(d, b) && (Zf(d, b), Yf(d, c)), Qf(this.g, this.f));
        null === e || e.Jc()
    };
    function qh(b) {
        b = m(b) ? b : {};
        var c = If("DIV", m(b.className) ? b.className : "ol-mouse-position");
        tg.call(this, {element: c, render: m(b.render) ? b.render : rh, target: b.target});
        x(this, hd("projection"), this.jl, !1, this);
        m(b.coordinateFormat) && this.th(b.coordinateFormat);
        m(b.projection) && this.Ag(re(b.projection));
        this.o = m(b.undefinedHTML) ? b.undefinedHTML : "";
        this.i = c.innerHTML;
        this.f = this.g = this.d = null
    }

    w(qh, tg);
    function rh(b) {
        b = b.frameState;
        null === b ? this.d = null : this.d != b.viewState.projection && (this.d = b.viewState.projection, this.g = null);
        sh(this, this.f)
    }

    l = qh.prototype;
    l.jl = function () {
        this.g = null
    };
    l.Vf = function () {
        return this.get("coordinateFormat")
    };
    l.zg = function () {
        return this.get("projection")
    };
    l.Zj = function (b) {
        this.f = this.b.Ad(b.a);
        sh(this, this.f)
    };
    l.$j = function () {
        sh(this, null);
        this.f = null
    };
    l.setMap = function (b) {
        qh.S.setMap.call(this, b);
        null !== b && (b = b.b, this.n.push(x(b, "mousemove", this.Zj, !1, this), x(b, "mouseout", this.$j, !1, this)))
    };
    l.th = function (b) {
        this.set("coordinateFormat", b)
    };
    l.Ag = function (b) {
        this.set("projection", b)
    };
    function sh(b, c) {
        var d = b.o;
        if (null !== c && null !== b.d) {
            if (null === b.g) {
                var e = b.zg();
                b.g = m(e) ? ve(b.d, e) : Ke
            }
            e = b.b.ka(c);
            null !== e && (b.g(e, e), d = b.Vf(), d = m(d) ? d(e) : e.toString())
        }
        m(b.i) && d == b.i || (b.element.innerHTML = d, b.i = d)
    };
    function th(b, c, d) {
        mc.call(this);
        this.d = b;
        this.c = d;
        this.a = c || window;
        this.b = ra(this.Qf, this)
    }

    w(th, mc);
    l = th.prototype;
    l.Z = null;
    l.Af = !1;
    l.start = function () {
        uh(this);
        this.Af = !1;
        var b = vh(this), c = wh(this);
        b && !c && this.a.mozRequestAnimationFrame ? (this.Z = x(this.a, "MozBeforePaint", this.b), this.a.mozRequestAnimationFrame(null), this.Af = !0) : this.Z = b && c ? b.call(this.a, this.b) : this.a.setTimeout(Jg(this.b), 20)
    };
    function uh(b) {
        if (null != b.Z) {
            var c = vh(b), d = wh(b);
            c && !d && b.a.mozRequestAnimationFrame ? Wc(b.Z) : c && d ? d.call(b.a, b.Z) : b.a.clearTimeout(b.Z)
        }
        b.Z = null
    }

    l.Qf = function () {
        this.Af && this.Z && Wc(this.Z);
        this.Z = null;
        this.d.call(this.c, ua())
    };
    l.N = function () {
        uh(this);
        th.S.N.call(this)
    };
    function vh(b) {
        b = b.a;
        return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || null
    }

    function wh(b) {
        b = b.a;
        return b.cancelAnimationFrame || b.cancelRequestAnimationFrame || b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || null
    };
    function xh(b) {
        ba.setTimeout(function () {
            throw b;
        }, 0)
    }

    function yh(b, c) {
        var d = b;
        c && (d = ra(b, c));
        d = zh(d);
        !ka(ba.setImmediate) || ba.Window && ba.Window.prototype.setImmediate == ba.setImmediate ? (Ah || (Ah = Bh()), Ah(d)) : ba.setImmediate(d)
    }

    var Ah;

    function Bh() {
        var b = ba.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function () {
            var b = document.createElement("iframe");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow, b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(), e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host, b = ra(function (b) {
                    if (("*" == e || b.origin == e) && b.data == d)this.port1.onmessage()
                },
                this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !ob("Trident") && !ob("MSIE")) {
            var c = new b, d = {}, e = d;
            c.port1.onmessage = function () {
                if (m(d.next)) {
                    d = d.next;
                    var b = d.Mf;
                    d.Mf = null;
                    b()
                }
            };
            return function (b) {
                e.next = {Mf: b};
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement("script") ? function (b) {
            var c = document.createElement("script");
            c.onreadystatechange = function () {
                c.onreadystatechange =
                    null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function (b) {
            ba.setTimeout(b, 0)
        }
    }

    var zh = Ig;

    function Ch(b) {
        if ("function" == typeof b.eb)return b.eb();
        if (ia(b))return b.split("");
        if (ha(b)) {
            for (var c = [], d = b.length, e = 0; e < d; e++)c.push(b[e]);
            return c
        }
        return sb(b)
    }

    function Dh(b, c) {
        if ("function" == typeof b.forEach)b.forEach(c, void 0); else if (ha(b) || ia(b))Sa(b, c, void 0); else {
            var d;
            if ("function" == typeof b.C)d = b.C(); else if ("function" != typeof b.eb)if (ha(b) || ia(b)) {
                d = [];
                for (var e = b.length, f = 0; f < e; f++)d.push(f)
            } else d = tb(b); else d = void 0;
            for (var e = Ch(b), f = e.length, g = 0; g < f; g++)c.call(void 0, e[g], d && d[g], b)
        }
    };
    function Eh(b, c) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2)throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2)this.set(arguments[e], arguments[e + 1])
        } else if (b) {
            b instanceof Eh ? (d = b.C(), e = b.eb()) : (d = tb(b), e = sb(b));
            for (var f = 0; f < d.length; f++)this.set(d[f], e[f])
        }
    }

    l = Eh.prototype;
    l.Sb = function () {
        return this.c
    };
    l.eb = function () {
        Fh(this);
        for (var b = [], c = 0; c < this.a.length; c++)b.push(this.b[this.a[c]]);
        return b
    };
    l.C = function () {
        Fh(this);
        return this.a.concat()
    };
    l.la = function () {
        return 0 == this.c
    };
    l.clear = function () {
        this.b = {};
        this.c = this.a.length = 0
    };
    l.remove = function (b) {
        return Gh(this.b, b) ? (delete this.b[b], this.c--, this.a.length > 2 * this.c && Fh(this), !0) : !1
    };
    function Fh(b) {
        if (b.c != b.a.length) {
            for (var c = 0, d = 0; c < b.a.length;) {
                var e = b.a[c];
                Gh(b.b, e) && (b.a[d++] = e);
                c++
            }
            b.a.length = d
        }
        if (b.c != b.a.length) {
            for (var f = {}, d = c = 0; c < b.a.length;)e = b.a[c], Gh(f, e) || (b.a[d++] = e, f[e] = 1), c++;
            b.a.length = d
        }
    }

    l.get = function (b, c) {
        return Gh(this.b, b) ? this.b[b] : c
    };
    l.set = function (b, c) {
        Gh(this.b, b) || (this.c++, this.a.push(b));
        this.b[b] = c
    };
    l.forEach = function (b, c) {
        for (var d = this.C(), e = 0; e < d.length; e++) {
            var f = d[e], g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    l.clone = function () {
        return new Eh(this)
    };
    function Gh(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    };
    function Hh() {
        this.a = ua()
    }

    new Hh;
    Hh.prototype.set = function (b) {
        this.a = b
    };
    Hh.prototype.get = function () {
        return this.a
    };
    function Ih(b) {
        $c.call(this);
        this.od = b || window;
        this.Id = x(this.od, "resize", this.hk, !1, this);
        this.Jd = Hf(this.od || window)
    }

    w(Ih, $c);
    l = Ih.prototype;
    l.Id = null;
    l.od = null;
    l.Jd = null;
    l.N = function () {
        Ih.S.N.call(this);
        this.Id && (Wc(this.Id), this.Id = null);
        this.Jd = this.od = null
    };
    l.hk = function () {
        var b = Hf(this.od || window), c = this.Jd;
        b == c || b && c && b.width == c.width && b.height == c.height || (this.Jd = b, this.dispatchEvent("resize"))
    };
    function Jh(b, c, d, e, f) {
        if (!(Ib || Kb && Rb("525")))return !0;
        if (Lb && f)return Kh(b);
        if (f && !e)return !1;
        ja(c) && (c = Lh(c));
        if (!d && (17 == c || 18 == c || Lb && 91 == c))return !1;
        if (Kb && e && d)switch (b) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Ib && e && c == b)return !1;
        switch (b) {
            case 13:
                return !0;
            case 27:
                return !Kb
        }
        return Kh(b)
    }

    function Kh(b) {
        if (48 <= b && 57 >= b || 96 <= b && 106 >= b || 65 <= b && 90 >= b || Kb && 0 == b)return !0;
        switch (b) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }

    function Lh(b) {
        if (Jb)b = Mh(b); else if (Lb && Kb)a:switch (b) {
            case 93:
                b = 91;
                break a
        }
        return b
    }

    function Mh(b) {
        switch (b) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return b
        }
    };
    function Nh(b, c) {
        $c.call(this);
        b && Oh(this, b, c)
    }

    w(Nh, $c);
    l = Nh.prototype;
    l.Y = null;
    l.Qd = null;
    l.We = null;
    l.Rd = null;
    l.Ja = -1;
    l.Ib = -1;
    l.Be = !1;
    var Ph = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, Qh = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, Rh = Ib || Kb && Rb("525"), Sh = Lb && Jb;
    Nh.prototype.a = function (b) {
        Kb && (17 == this.Ja && !b.i || 18 == this.Ja && !b.b || Lb && 91 == this.Ja && !b.n) && (this.Ib = this.Ja = -1);
        -1 == this.Ja && (b.i && 17 != b.e ? this.Ja = 17 : b.b && 18 != b.e ? this.Ja = 18 : b.n && 91 != b.e && (this.Ja = 91));
        Rh && !Jh(b.e, this.Ja, b.d, b.i, b.b) ? this.handleEvent(b) : (this.Ib = Lh(b.e), Sh && (this.Be = b.b))
    };
    Nh.prototype.b = function (b) {
        this.Ib = this.Ja = -1;
        this.Be = b.b
    };
    Nh.prototype.handleEvent = function (b) {
        var c = b.a, d, e, f = c.altKey;
        Ib && "keypress" == b.type ? (d = this.Ib, e = 13 != d && 27 != d ? c.keyCode : 0) : Kb && "keypress" == b.type ? (d = this.Ib, e = 0 <= c.charCode && 63232 > c.charCode && Kh(d) ? c.charCode : 0) : Hb ? (d = this.Ib, e = Kh(d) ? c.keyCode : 0) : (d = c.keyCode || this.Ib, e = c.charCode || 0, Sh && (f = this.Be), Lb && 63 == e && 224 == d && (d = 191));
        var g = d = Lh(d), h = c.keyIdentifier;
        d ? 63232 <= d && d in Ph ? g = Ph[d] : 25 == d && b.d && (g = 9) : h && h in Qh && (g = Qh[h]);
        this.Ja = g;
        b = new Th(g, e, 0, c);
        b.b = f;
        this.dispatchEvent(b)
    };
    function Oh(b, c, d) {
        b.Rd && Uh(b);
        b.Y = c;
        b.Qd = x(b.Y, "keypress", b, d);
        b.We = x(b.Y, "keydown", b.a, d, b);
        b.Rd = x(b.Y, "keyup", b.b, d, b)
    }

    function Uh(b) {
        b.Qd && (Wc(b.Qd), Wc(b.We), Wc(b.Rd), b.Qd = null, b.We = null, b.Rd = null);
        b.Y = null;
        b.Ja = -1;
        b.Ib = -1
    }

    Nh.prototype.N = function () {
        Nh.S.N.call(this);
        Uh(this)
    };
    function Th(b, c, d, e) {
        wc.call(this, e);
        this.type = "key";
        this.e = b;
        this.q = c
    }

    w(Th, wc);
    function Vh(b, c) {
        $c.call(this);
        var d = this.Y = b;
        (d = la(d) && 1 == d.nodeType ? this.Y : this.Y ? this.Y.body : null) && eg(d, "direction");
        this.a = x(this.Y, Jb ? "DOMMouseScroll" : "mousewheel", this, c)
    }

    w(Vh, $c);
    Vh.prototype.handleEvent = function (b) {
        var c = 0, d = 0, e = 0;
        b = b.a;
        if ("mousewheel" == b.type) {
            d = 1;
            if (Ib || Kb && (Mb || Rb("532.0")))d = 40;
            e = Wh(-b.wheelDelta, d);
            m(b.wheelDeltaX) ? (c = Wh(-b.wheelDeltaX, d), d = Wh(-b.wheelDeltaY, d)) : d = e
        } else e = b.detail, 100 < e ? e = 3 : -100 > e && (e = -3), m(b.axis) && b.axis === b.HORIZONTAL_AXIS ? c = e : d = e;
        ja(this.b) && Vb(c, -this.b, this.b);
        ja(this.c) && (d = Vb(d, -this.c, this.c));
        c = new Xh(e, b, 0, d);
        this.dispatchEvent(c)
    };
    function Wh(b, c) {
        return Kb && (Lb || Nb) && 0 != b % c ? b : b / c
    }

    Vh.prototype.N = function () {
        Vh.S.N.call(this);
        Wc(this.a);
        this.a = null
    };
    function Xh(b, c, d, e) {
        wc.call(this, c);
        this.type = "mousewheel";
        this.detail = b;
        this.o = e
    }

    w(Xh, wc);
    function Yh(b, c, d) {
        rc.call(this, b);
        this.a = c;
        b = m(d) ? d : {};
        this.buttons = Zh(b);
        this.pressure = $h(b, this.buttons);
        this.bubbles = Ab(b, "bubbles", !1);
        this.cancelable = Ab(b, "cancelable", !1);
        this.view = Ab(b, "view", null);
        this.detail = Ab(b, "detail", null);
        this.screenX = Ab(b, "screenX", 0);
        this.screenY = Ab(b, "screenY", 0);
        this.clientX = Ab(b, "clientX", 0);
        this.clientY = Ab(b, "clientY", 0);
        this.button = Ab(b, "button", 0);
        this.relatedTarget = Ab(b, "relatedTarget", null);
        this.pointerId = Ab(b, "pointerId", 0);
        this.width = Ab(b, "width", 0);
        this.height =
            Ab(b, "height", 0);
        this.pointerType = Ab(b, "pointerType", "");
        this.isPrimary = Ab(b, "isPrimary", !1);
        c.preventDefault && (this.preventDefault = function () {
            c.preventDefault()
        })
    }

    w(Yh, rc);
    function Zh(b) {
        if (b.buttons || ai)b = b.buttons; else switch (b.which) {
            case 1:
                b = 1;
                break;
            case 2:
                b = 4;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        return b
    }

    function $h(b, c) {
        var d = 0;
        b.pressure ? d = b.pressure : d = c ? .5 : 0;
        return d
    }

    var ai = !1;
    try {
        ai = 1 === (new MouseEvent("click", {buttons: 1})).buttons
    } catch (ci) {
    }
    ;
    function di(b, c) {
        var d = Lf("CANVAS");
        m(b) && (d.width = b);
        m(c) && (d.height = c);
        return d.getContext("2d")
    }

    var ei = function () {
        var b;
        return function () {
            if (!m(b))if (ba.getComputedStyle) {
                var c = Lf("P"), d, e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate(1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                Pf(c);
                b = d && "none" !== d
            } else b = !1;
            return b
        }
    }(), fi = function () {
        var b;
        return function () {
            if (!m(b))if (ba.getComputedStyle) {
                var c = Lf("P"),
                    d, e = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.appendChild(c);
                for (var f in e)f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                Pf(c);
                b = d && "none" !== d
            } else b = !1;
            return b
        }
    }();

    function gi(b, c) {
        var d = b.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.a = c;
        d.msTransform = c;
        d.transform = c;
        Ib && !Ub && (b.style.transformOrigin = "0 0")
    }

    function hi(b, c) {
        var d;
        if (fi()) {
            if (m(6)) {
                var e = Array(16);
                for (d = 0; 16 > d; ++d)e[d] = c[d].toFixed(6);
                d = e.join(",")
            } else d = c.join(",");
            gi(b, "matrix3d(" + d + ")")
        } else if (ei()) {
            e = [c[0], c[1], c[4], c[5], c[12], c[13]];
            if (m(6)) {
                var f = Array(6);
                for (d = 0; 6 > d; ++d)f[d] = e[d].toFixed(6);
                d = f.join(",")
            } else d = e.join(",");
            gi(b, "matrix(" + d + ")")
        } else b.style.left = Math.round(c[12]) + "px", b.style.top = Math.round(c[13]) + "px"
    };
    var ii = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function ji(b, c) {
        var d, e, f = ii.length;
        for (e = 0; e < f; ++e)try {
            if (d = b.getContext(ii[e], c), null !== d)return d
        } catch (g) {
        }
        return null
    };
    var ki, li = ba.devicePixelRatio || 1, mi = !1, ni = function () {
        if (!("HTMLCanvasElement"in ba))return !1;
        try {
            var b = di();
            if (null === b)return !1;
            m(b.setLineDash) && (mi = !0);
            return !0
        } catch (c) {
            return !1
        }
    }(), oi = "DeviceOrientationEvent"in ba, pi = "geolocation"in ba.navigator, qi = "ontouchstart"in ba, ri = "PointerEvent"in ba, si = !!ba.navigator.msPointerEnabled, ti = !1, ui, vi = [];
    if ("WebGLRenderingContext"in ba)try {
        var wi = ji(Lf("CANVAS"), {failIfMajorPerformanceCaveat: !0});
        null !== wi && (ti = !0, ui = wi.getParameter(wi.MAX_TEXTURE_SIZE), vi = wi.getSupportedExtensions())
    } catch (xi) {
    }
    ki = ti;
    wa = vi;
    va = ui;
    function yi(b, c) {
        this.a = b;
        this.e = c
    };
    function zi(b) {
        yi.call(this, b, {
            mousedown: this.tk,
            mousemove: this.uk,
            mouseup: this.xk,
            mouseover: this.wk,
            mouseout: this.vk
        });
        this.b = b.b;
        this.c = []
    }

    w(zi, yi);
    function Ai(b, c) {
        for (var d = b.c, e = c.clientX, f = c.clientY, g = 0, h = d.length, k; g < h && (k = d[g]); g++) {
            var n = Math.abs(f - k[1]);
            if (25 >= Math.abs(e - k[0]) && 25 >= n)return !0
        }
        return !1
    }

    function Bi(b) {
        var c = Ci(b, b.a), d = c.preventDefault;
        c.preventDefault = function () {
            b.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }

    l = zi.prototype;
    l.tk = function (b) {
        if (!Ai(this, b)) {
            (1).toString()in this.b && this.cancel(b);
            var c = Bi(b);
            this.b[(1).toString()] = b;
            Di(this.a, Ei, c, b)
        }
    };
    l.uk = function (b) {
        if (!Ai(this, b)) {
            var c = Bi(b);
            Di(this.a, Fi, c, b)
        }
    };
    l.xk = function (b) {
        if (!Ai(this, b)) {
            var c = this.b[(1).toString()];
            c && c.button === b.button && (c = Bi(b), Di(this.a, Gi, c, b), zb(this.b, (1).toString()))
        }
    };
    l.wk = function (b) {
        if (!Ai(this, b)) {
            var c = Bi(b);
            Hi(this.a, c, b)
        }
    };
    l.vk = function (b) {
        if (!Ai(this, b)) {
            var c = Bi(b);
            Ii(this.a, c, b)
        }
    };
    l.cancel = function (b) {
        var c = Bi(b);
        this.a.cancel(c, b);
        zb(this.b, (1).toString())
    };
    function Ji(b) {
        yi.call(this, b, {
            MSPointerDown: this.Ck,
            MSPointerMove: this.Dk,
            MSPointerUp: this.Gk,
            MSPointerOut: this.Ek,
            MSPointerOver: this.Fk,
            MSPointerCancel: this.Bk,
            MSGotPointerCapture: this.zk,
            MSLostPointerCapture: this.Ak
        });
        this.b = b.b;
        this.c = ["", "unavailable", "touch", "pen", "mouse"]
    }

    w(Ji, yi);
    function Ki(b, c) {
        var d = c;
        ja(c.a.pointerType) && (d = Ci(c, c.a), d.pointerType = b.c[c.a.pointerType]);
        return d
    }

    l = Ji.prototype;
    l.Ck = function (b) {
        this.b[b.a.pointerId] = b;
        var c = Ki(this, b);
        Di(this.a, Ei, c, b)
    };
    l.Dk = function (b) {
        var c = Ki(this, b);
        Di(this.a, Fi, c, b)
    };
    l.Gk = function (b) {
        var c = Ki(this, b);
        Di(this.a, Gi, c, b);
        zb(this.b, b.a.pointerId)
    };
    l.Ek = function (b) {
        var c = Ki(this, b);
        Ii(this.a, c, b)
    };
    l.Fk = function (b) {
        var c = Ki(this, b);
        Hi(this.a, c, b)
    };
    l.Bk = function (b) {
        var c = Ki(this, b);
        this.a.cancel(c, b);
        zb(this.b, b.a.pointerId)
    };
    l.Ak = function (b) {
        this.a.dispatchEvent(new Yh("lostpointercapture", b, b.a))
    };
    l.zk = function (b) {
        this.a.dispatchEvent(new Yh("gotpointercapture", b, b.a))
    };
    function Li(b) {
        yi.call(this, b, {
            pointerdown: this.pn,
            pointermove: this.qn,
            pointerup: this.tn,
            pointerout: this.rn,
            pointerover: this.sn,
            pointercancel: this.nn,
            gotpointercapture: this.Ej,
            lostpointercapture: this.sk
        })
    }

    w(Li, yi);
    l = Li.prototype;
    l.pn = function (b) {
        Mi(this.a, b)
    };
    l.qn = function (b) {
        Mi(this.a, b)
    };
    l.tn = function (b) {
        Mi(this.a, b)
    };
    l.rn = function (b) {
        Mi(this.a, b)
    };
    l.sn = function (b) {
        Mi(this.a, b)
    };
    l.nn = function (b) {
        Mi(this.a, b)
    };
    l.sk = function (b) {
        Mi(this.a, b)
    };
    l.Ej = function (b) {
        Mi(this.a, b)
    };
    function Ni(b, c) {
        yi.call(this, b, {touchstart: this.to, touchmove: this.so, touchend: this.ro, touchcancel: this.qo});
        this.b = b.b;
        this.f = c;
        this.c = void 0;
        this.g = 0;
        this.d = void 0
    }

    w(Ni, yi);
    l = Ni.prototype;
    l.ph = function () {
        this.g = 0;
        this.d = void 0
    };
    function Oi(b, c, d) {
        c = Ci(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = b.g;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = b.c === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }

    function Pi(b, c, d) {
        function e() {
            c.preventDefault()
        }

        var f = Array.prototype.slice.call(c.a.changedTouches), g = f.length, h, k;
        for (h = 0; h < g; ++h)k = Oi(b, c, f[h]), k.preventDefault = e, d.call(b, c, k)
    }

    l.to = function (b) {
        var c = b.a.touches, d = tb(this.b), e = d.length;
        if (e >= c.length) {
            var f = [], g, h, k;
            for (g = 0; g < e; ++g) {
                h = d[g];
                k = this.b[h];
                var n;
                if (!(n = 1 == h))a:{
                    n = c.length;
                    for (var p = void 0, q = 0; q < n; q++)if (p = c[q], p.identifier === h - 2) {
                        n = !0;
                        break a
                    }
                    n = !1
                }
                n || f.push(k.ec)
            }
            for (g = 0; g < f.length; ++g)this.Ce(b, f[g])
        }
        c = rb(this.b);
        if (0 === c || 1 === c && (1).toString()in this.b)this.c = b.a.changedTouches[0].identifier, m(this.d) && ba.clearTimeout(this.d);
        Qi(this, b);
        this.g++;
        Pi(this, b, this.jn)
    };
    l.jn = function (b, c) {
        this.b[c.pointerId] = {target: c.target, ec: c, Yg: c.target};
        var d = this.a;
        c.bubbles = !0;
        Di(d, Ri, c, b);
        d = this.a;
        c.bubbles = !1;
        Di(d, Si, c, b);
        Di(this.a, Ei, c, b)
    };
    l.so = function (b) {
        b.preventDefault();
        Pi(this, b, this.yk)
    };
    l.yk = function (b, c) {
        var d = this.b[c.pointerId];
        if (d) {
            var e = d.ec, f = d.Yg;
            Di(this.a, Fi, c, b);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (Ii(this.a, e, b), Hi(this.a, c, b)) : (c.target = f, c.relatedTarget = null, this.Ce(b, c)));
            d.ec = c;
            d.Yg = c.target
        }
    };
    l.ro = function (b) {
        Qi(this, b);
        Pi(this, b, this.uo)
    };
    l.uo = function (b, c) {
        Di(this.a, Gi, c, b);
        this.a.ec(c, b);
        var d = this.a;
        c.bubbles = !1;
        Di(d, Ti, c, b);
        zb(this.b, c.pointerId);
        c.isPrimary && (this.c = void 0, this.d = ba.setTimeout(ra(this.ph, this), 200))
    };
    l.qo = function (b) {
        Pi(this, b, this.Ce)
    };
    l.Ce = function (b, c) {
        this.a.cancel(c, b);
        this.a.ec(c, b);
        var d = this.a;
        c.bubbles = !1;
        Di(d, Ti, c, b);
        zb(this.b, c.pointerId);
        c.isPrimary && (this.c = void 0, this.d = ba.setTimeout(ra(this.ph, this), 200))
    };
    function Qi(b, c) {
        var d = b.f.c, e = c.a.changedTouches[0];
        if (b.c === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            ba.setTimeout(function () {
                $a(d, f)
            }, 2500)
        }
    };
    function Ui(b) {
        $c.call(this);
        this.Y = b;
        this.b = {};
        this.c = {};
        this.a = [];
        ri ? Vi(this, new Li(this)) : si ? Vi(this, new Ji(this)) : (b = new zi(this), Vi(this, b), qi && Vi(this, new Ni(this, b)));
        b = this.a.length;
        for (var c, d = 0; d < b; d++)c = this.a[d], Wi(this, tb(c.e))
    }

    w(Ui, $c);
    function Vi(b, c) {
        var d = tb(c.e);
        d && (Sa(d, function (b) {
            var d = c.e[b];
            d && (this.c[b] = ra(d, c))
        }, b), b.a.push(c))
    }

    Ui.prototype.d = function (b) {
        var c = this.c[b.type];
        c && c(b)
    };
    function Wi(b, c) {
        Sa(c, function (b) {
            x(this.Y, b, this.d, !1, this)
        }, b)
    }

    function Xi(b, c) {
        Sa(c, function (b) {
            Vc(this.Y, b, this.d, !1, this)
        }, b)
    }

    function Ci(b, c) {
        for (var d = {}, e, f = 0, g = Yi.length; f < g; f++)e = Yi[f][0], d[e] = b[e] || c[e] || Yi[f][1];
        return d
    }

    Ui.prototype.ec = function (b, c) {
        b.bubbles = !0;
        Di(this, Zi, b, c)
    };
    Ui.prototype.cancel = function (b, c) {
        Di(this, $i, b, c)
    };
    function Ii(b, c, d) {
        b.ec(c, d);
        var e = c.relatedTarget;
        null !== e && Tf(c.target, e) || (c.bubbles = !1, Di(b, Ti, c, d))
    }

    function Hi(b, c, d) {
        c.bubbles = !0;
        Di(b, Ri, c, d);
        var e = c.relatedTarget;
        null !== e && Tf(c.target, e) || (c.bubbles = !1, Di(b, Si, c, d))
    }

    function Di(b, c, d, e) {
        b.dispatchEvent(new Yh(c, e, d))
    }

    function Mi(b, c) {
        b.dispatchEvent(new Yh(c.type, c, c.a))
    }

    Ui.prototype.N = function () {
        for (var b = this.a.length, c, d = 0; d < b; d++)c = this.a[d], Xi(this, tb(c.e));
        Ui.S.N.call(this)
    };
    var Fi = "pointermove", Ei = "pointerdown", Gi = "pointerup", Ri = "pointerover", Zi = "pointerout", Si = "pointerenter", Ti = "pointerleave", $i = "pointercancel", Yi = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary",
        !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];

    function aj(b, c, d, e, f) {
        sg.call(this, b, c, f);
        this.a = d;
        this.originalEvent = d.a;
        this.pixel = c.Ad(this.originalEvent);
        this.coordinate = c.ka(this.pixel);
        this.dragging = m(e) ? e : !1
    }

    w(aj, sg);
    aj.prototype.preventDefault = function () {
        aj.S.preventDefault.call(this);
        this.a.preventDefault()
    };
    aj.prototype.gb = function () {
        aj.S.gb.call(this);
        this.a.gb()
    };
    function bj(b, c, d, e, f) {
        aj.call(this, b, c, d.a, e, f);
        this.b = d
    }

    w(bj, aj);
    function cj(b) {
        $c.call(this);
        this.c = b;
        this.g = 0;
        this.f = !1;
        this.b = this.i = this.d = null;
        b = this.c.b;
        this.o = 0;
        this.n = {};
        this.e = new Ui(b);
        this.a = null;
        this.i = x(this.e, Ei, this.ck, !1, this);
        this.q = x(this.e, Fi, this.Ln, !1, this)
    }

    w(cj, $c);
    function dj(b, c) {
        var d;
        d = new bj(ej, b.c, c);
        b.dispatchEvent(d);
        0 !== b.g ? (ba.clearTimeout(b.g), b.g = 0, d = new bj(fj, b.c, c), b.dispatchEvent(d)) : b.g = ba.setTimeout(ra(function () {
            this.g = 0;
            var b = new bj(gj, this.c, c);
            this.dispatchEvent(b)
        }, b), 250)
    }

    function hj(b, c) {
        c.type == ij || c.type == jj ? delete b.n[c.pointerId] : c.type == kj && (b.n[c.pointerId] = !0);
        b.o = rb(b.n)
    }

    l = cj.prototype;
    l.hg = function (b) {
        hj(this, b);
        var c = new bj(ij, this.c, b);
        this.dispatchEvent(c);
        !this.f && 0 === b.button && dj(this, this.b);
        0 === this.o && (Sa(this.d, Wc), this.d = null, this.f = !1, this.b = null, qc(this.a), this.a = null)
    };
    l.ck = function (b) {
        hj(this, b);
        var c = new bj(kj, this.c, b);
        this.dispatchEvent(c);
        this.b = b;
        null === this.d && (this.a = new Ui(document), this.d = [x(this.a, lj, this.$k, !1, this), x(this.a, ij, this.hg, !1, this), x(this.e, jj, this.hg, !1, this)])
    };
    l.$k = function (b) {
        if (b.clientX != this.b.clientX || b.clientY != this.b.clientY) {
            this.f = !0;
            var c = new bj(mj, this.c, b, this.f);
            this.dispatchEvent(c)
        }
        b.preventDefault()
    };
    l.Ln = function (b) {
        this.dispatchEvent(new bj(b.type, this.c, b, null !== this.b && (b.clientX != this.b.clientX || b.clientY != this.b.clientY)))
    };
    l.N = function () {
        null !== this.q && (Wc(this.q), this.q = null);
        null !== this.i && (Wc(this.i), this.i = null);
        null !== this.d && (Sa(this.d, Wc), this.d = null);
        null !== this.a && (qc(this.a), this.a = null);
        null !== this.e && (qc(this.e), this.e = null);
        cj.S.N.call(this)
    };
    var gj = "singleclick", ej = "click", fj = "dblclick", mj = "pointerdrag", lj = "pointermove", kj = "pointerdown", ij = "pointerup", jj = "pointercancel", nj = {
        Lo: gj,
        Ao: ej,
        Bo: fj,
        Eo: mj,
        Ho: lj,
        Do: kj,
        Ko: ij,
        Jo: "pointerover",
        Io: "pointerout",
        Fo: "pointerenter",
        Go: "pointerleave",
        Co: jj
    };

    function oj(b) {
        fd.call(this);
        var c = Db(b);
        c.brightness = m(b.brightness) ? b.brightness : 0;
        c.contrast = m(b.contrast) ? b.contrast : 1;
        c.hue = m(b.hue) ? b.hue : 0;
        c.opacity = m(b.opacity) ? b.opacity : 1;
        c.saturation = m(b.saturation) ? b.saturation : 1;
        c.visible = m(b.visible) ? b.visible : !0;
        c.maxResolution = m(b.maxResolution) ? b.maxResolution : Infinity;
        c.minResolution = m(b.minResolution) ? b.minResolution : 0;
        this.t(c)
    }

    w(oj, fd);
    l = oj.prototype;
    l.Cb = function () {
        return this.get("brightness")
    };
    l.Db = function () {
        return this.get("contrast")
    };
    l.Eb = function () {
        return this.get("hue")
    };
    function pj(b) {
        var c = b.Cb(), d = b.Db(), e = b.Eb(), f = b.Kb(), g = b.Hb(), h = b.Ue(), k = b.fb(), n = b.G(), p = b.Fb(), q = b.Gb();
        return {
            layer: b,
            brightness: Vb(c, -1, 1),
            contrast: Math.max(d, 0),
            hue: e,
            opacity: Vb(f, 0, 1),
            saturation: Math.max(g, 0),
            i: h,
            visible: k,
            extent: n,
            maxResolution: p,
            minResolution: Math.max(q, 0)
        }
    }

    l.G = function () {
        return this.get("extent")
    };
    l.Fb = function () {
        return this.get("maxResolution")
    };
    l.Gb = function () {
        return this.get("minResolution")
    };
    l.Kb = function () {
        return this.get("opacity")
    };
    l.Hb = function () {
        return this.get("saturation")
    };
    l.fb = function () {
        return this.get("visible")
    };
    l.gc = function (b) {
        this.set("brightness", b)
    };
    l.hc = function (b) {
        this.set("contrast", b)
    };
    l.ic = function (b) {
        this.set("hue", b)
    };
    l.ac = function (b) {
        this.set("extent", b)
    };
    l.jc = function (b) {
        this.set("maxResolution", b)
    };
    l.kc = function (b) {
        this.set("minResolution", b)
    };
    l.bc = function (b) {
        this.set("opacity", b)
    };
    l.lc = function (b) {
        this.set("saturation", b)
    };
    l.mc = function (b) {
        this.set("visible", b)
    };
    function D(b) {
        var c = Db(b);
        delete c.source;
        oj.call(this, c);
        this.g = null;
        x(this, hd("source"), this.jk, !1, this);
        this.Ic(m(b.source) ? b.source : null)
    }

    w(D, oj);
    function qj(b, c) {
        return b.visible && c >= b.minResolution && c < b.maxResolution
    }

    l = D.prototype;
    l.Qe = function (b) {
        b = m(b) ? b : [];
        b.push(pj(this));
        return b
    };
    l.da = function () {
        var b = this.get("source");
        return m(b) ? b : null
    };
    l.Ue = function () {
        var b = this.da();
        return null === b ? "undefined" : b.o
    };
    l.Ml = function () {
        this.k()
    };
    l.jk = function () {
        null !== this.g && (Wc(this.g), this.g = null);
        var b = this.da();
        null !== b && (this.g = x(b, "change", this.Ml, !1, this));
        this.k()
    };
    l.Ic = function (b) {
        this.set("source", b)
    };
    function sj(b, c, d, e, f) {
        $c.call(this);
        this.g = f;
        this.extent = b;
        this.e = d;
        this.resolution = c;
        this.state = e
    }

    w(sj, $c);
    sj.prototype.G = function () {
        return this.extent
    };
    function tj(b, c, d, e, f, g, h, k) {
        Dd(b);
        0 === c && 0 === d || Gd(b, c, d);
        1 == e && 1 == f || Hd(b, e, f);
        0 !== g && Id(b, g);
        0 === h && 0 === k || Gd(b, h, k);
        return b
    }

    function uj(b, c) {
        return b[0] == c[0] && b[1] == c[1] && b[4] == c[4] && b[5] == c[5] && b[12] == c[12] && b[13] == c[13]
    }

    function vj(b, c, d) {
        var e = b[1], f = b[5], g = b[13], h = c[0];
        c = c[1];
        d[0] = b[0] * h + b[4] * c + b[12];
        d[1] = e * h + f * c + g;
        return d
    };
    function wj(b) {
        cd.call(this);
        this.b = b
    }

    w(wj, cd);
    l = wj.prototype;
    l.Pa = ca;
    l.cc = function (b, c, d, e) {
        b = b.slice();
        vj(c.pixelToCoordinateMatrix, b, b);
        if (this.Pa(b, c, Gg, this))return d.call(e, this.b)
    };
    l.ae = Fg;
    l.yd = function (b, c) {
        return function (d, e) {
            return bh(b, d, e, function (b) {
                c[d] || (c[d] = {});
                c[d][b.a.toString()] = b
            })
        }
    };
    l.Pl = function (b) {
        2 === b.target.state && xj(this)
    };
    function yj(b, c) {
        var d = c.state;
        2 != d && 3 != d && x(c, "change", b.Pl, !1, b);
        0 == d && (c.load(), d = c.state);
        return 2 == d
    }

    function xj(b) {
        var c = b.b;
        c.fb() && "ready" == c.Ue() && b.k()
    }

    function zj(b, c) {
        yg(c.b) && b.postRenderFunctions.push(ta(function (b, c, f) {
            c = ma(b).toString();
            b = b.b;
            f = f.usedTiles[c];
            for (var g; yg(b) && !(c = b.a.qc, g = c.a[0].toString(), g in f && f[g].contains(c.a));)b.pop().Xc()
        }, c))
    }

    function Aj(b, c) {
        if (null != c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e)d = c[e], b[ma(d).toString()] = d
        }
    }

    function Bj(b, c) {
        var d = c.K;
        m(d) && (ia(d) ? b.logos[d] = "" : la(d) && (b.logos[d.src] = d.href))
    }

    function Cj(b, c, d, e) {
        c = ma(c).toString();
        d = d.toString();
        c in b ? d in b[c] ? (b = b[c][d], e.b < b.b && (b.b = e.b), e.d > b.d && (b.d = e.d), e.a < b.a && (b.a = e.a), e.c > b.c && (b.c = e.c)) : b[c][d] = e : (b[c] = {}, b[c][d] = e)
    }

    function Dj(b, c, d) {
        return [c * (Math.round(b[0] / c) + d[0] % 2 / 2), c * (Math.round(b[1] / c) + d[1] % 2 / 2)]
    }

    function Ej(b, c, d, e, f, g, h, k, n, p) {
        var q = ma(c).toString();
        q in b.wantedTiles || (b.wantedTiles[q] = {});
        var r = b.wantedTiles[q];
        b = b.tileQueue;
        var t = d.minZoom, u, A, z, C, B, y;
        for (y = h; y >= t; --y)for (A = Rg(d, g, y, A), z = d.oa(y), C = A.b; C <= A.d; ++C)for (B = A.a; B <= A.c; ++B)h - y <= k ? (u = c.Ub(y, C, B, e, f), 0 == u.state && (r[ef(u.a)] = !0, u.hb()in b.c || Fj(b, [u, q, Vg(d, u.a), z])), m(n) && n.call(p, u)) : c.zf(y, C, B)
    };
    function Gj(b) {
        this.l = b.opacity;
        this.p = b.rotateWithView;
        this.q = b.rotation;
        this.n = b.scale;
        this.W = b.snapToPixel
    }

    l = Gj.prototype;
    l.ee = function () {
        return this.l
    };
    l.Gd = function () {
        return this.p
    };
    l.fe = function () {
        return this.q
    };
    l.ge = function () {
        return this.n
    };
    l.Hd = function () {
        return this.W
    };
    l.he = function (b) {
        this.q = b
    };
    l.ie = function (b) {
        this.n = b
    };
    function Hj(b) {
        b = m(b) ? b : {};
        this.e = m(b.anchor) ? b.anchor : [.5, .5];
        this.d = null;
        this.b = m(b.anchorOrigin) ? b.anchorOrigin : "top-left";
        this.f = m(b.anchorXUnits) ? b.anchorXUnits : "fraction";
        this.i = m(b.anchorYUnits) ? b.anchorYUnits : "fraction";
        var c = m(b.crossOrigin) ? b.crossOrigin : null, d = m(b.img) ? b.img : null, e = m(b.imgSize) ? b.imgSize : null, f = b.src;
        m(f) && 0 !== f.length || null === d || (f = d.src);
        var g = m(b.src) ? 0 : 2, h = Ij.Ia(), k = h.get(f, c);
        null === k && (k = new Jj(d, f, e, c, g), h.set(f, c, k));
        this.a = k;
        this.V = m(b.offset) ? b.offset : [0, 0];
        this.c =
            m(b.offsetOrigin) ? b.offsetOrigin : "top-left";
        this.g = null;
        this.o = m(b.size) ? b.size : null;
        Gj.call(this, {
            opacity: m(b.opacity) ? b.opacity : 1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: m(b.scale) ? b.scale : 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0,
            rotateWithView: m(b.rotateWithView) ? b.rotateWithView : !1
        })
    }

    w(Hj, Gj);
    l = Hj.prototype;
    l.rb = function () {
        if (null !== this.d)return this.d;
        var b = this.e, c = this.Ya();
        if ("fraction" == this.f || "fraction" == this.i) {
            if (null === c)return null;
            b = this.e.slice();
            "fraction" == this.f && (b[0] *= c[0]);
            "fraction" == this.i && (b[1] *= c[1])
        }
        if ("top-left" != this.b) {
            if (null === c)return null;
            b === this.e && (b = this.e.slice());
            if ("top-right" == this.b || "bottom-right" == this.b)b[0] = -b[0] + c[0];
            if ("bottom-left" == this.b || "bottom-right" == this.b)b[1] = -b[1] + c[1]
        }
        return this.d = b
    };
    l.Lb = function () {
        return this.a.a
    };
    l.Cd = function () {
        return this.a.b
    };
    l.fd = function () {
        return this.a.c
    };
    l.de = function () {
        var b = this.a;
        if (null === b.e)if (b.i) {
            var c = b.b[0], d = b.b[1], e = di(c, d);
            e.fillRect(0, 0, c, d);
            b.e = e.canvas
        } else b.e = b.a;
        return b.e
    };
    l.wb = function () {
        if (null !== this.g)return this.g;
        var b = this.V;
        if ("top-left" != this.c) {
            var c = this.Ya(), d = this.a.b;
            if (null === c || null === d)return null;
            b = b.slice();
            if ("top-right" == this.c || "bottom-right" == this.c)b[0] = d[0] - c[0] - b[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c)b[1] = d[1] - c[1] - b[1]
        }
        return this.g = b
    };
    l.Cm = function () {
        return this.a.g
    };
    l.Ya = function () {
        return null === this.o ? this.a.b : this.o
    };
    l.Ye = function (b, c) {
        return x(this.a, "change", b, !1, c)
    };
    l.load = function () {
        this.a.load()
    };
    l.yf = function (b, c) {
        Vc(this.a, "change", b, !1, c)
    };
    function Jj(b, c, d, e, f) {
        $c.call(this);
        this.e = null;
        this.a = null === b ? new Image : b;
        null !== e && (this.a.crossOrigin = e);
        this.d = null;
        this.c = f;
        this.b = d;
        this.g = c;
        this.i = !1
    }

    w(Jj, $c);
    Jj.prototype.f = function () {
        this.c = 3;
        Sa(this.d, Wc);
        this.d = null;
        this.dispatchEvent("change")
    };
    Jj.prototype.q = function () {
        this.c = 2;
        this.b = [this.a.width, this.a.height];
        Sa(this.d, Wc);
        this.d = null;
        var b = di(1, 1);
        b.drawImage(this.a, 0, 0);
        try {
            b.getImageData(0, 0, 1, 1)
        } catch (c) {
            this.i = !0
        }
        this.dispatchEvent("change")
    };
    Jj.prototype.load = function () {
        if (0 == this.c) {
            this.c = 1;
            this.d = [Uc(this.a, "error", this.f, !1, this), Uc(this.a, "load", this.q, !1, this)];
            try {
                this.a.src = this.g
            } catch (b) {
                this.f()
            }
        }
    };
    function Ij() {
        this.a = {};
        this.b = 0
    }

    da(Ij);
    Ij.prototype.clear = function () {
        this.a = {};
        this.b = 0
    };
    Ij.prototype.get = function (b, c) {
        var d = c + ":" + b;
        return d in this.a ? this.a[d] : null
    };
    Ij.prototype.set = function (b, c, d) {
        this.a[c + ":" + b] = d;
        ++this.b
    };
    function Kj(b, c) {
        mc.call(this);
        this.f = c;
        this.c = null;
        this.g = {};
        this.o = {}
    }

    w(Kj, mc);
    function Lj(b) {
        var c = b.viewState, d = b.coordinateToPixelMatrix;
        tj(d, b.size[0] / 2, b.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        Fd(d, b.pixelToCoordinateMatrix)
    }

    l = Kj.prototype;
    l.N = function () {
        pb(this.g, qc);
        Kj.S.N.call(this)
    };
    function Mj() {
        var b = Ij.Ia();
        if (32 < b.b) {
            var c = 0, d, e;
            for (d in b.a) {
                e = b.a[d];
                var f;
                if (f = 0 === (c++ & 3))Bc(e) ? e = bd(e, void 0, void 0) : (e = Qc(e), e = !!e && Kc(e, void 0, void 0)), f = !e;
                f && (delete b.a[d], --b.b)
            }
        }
    }

    l.df = function (b, c, d, e, f, g) {
        function h(b) {
            var c = ma(b).toString();
            if (!(c in r))return r[c] = !0, d.call(e, b, null)
        }

        var k, n = c.viewState, p = n.resolution, q = n.rotation, r = {}, t = n.projection, n = b;
        if (t.c) {
            var u = t.G(), t = ie(u);
            k = b[0];
            if (k < u[0] || k > u[2])n = Math.ceil((u[0] - k) / t), n = [k + t * n, b[1]]
        }
        if (null !== this.c && (k = this.c.c(n, p, q, {}, h)))return k;
        q = c.layerStatesArray;
        for (t = q.length - 1; 0 <= t; --t)if (k = q[t], u = k.layer, qj(k, p) && f.call(g, u) && (k = Nj(this, u).Pa(Cg(u.da()) ? n : b, c, d, e)))return k
    };
    l.Ig = function (b, c, d, e, f, g) {
        var h, k = c.viewState, n = k.resolution, k = k.rotation;
        if (null !== this.c) {
            var p = this.f.ka(b);
            if (this.c.c(p, n, k, {}, Gg) && (h = d.call(e, null)))return h
        }
        k = c.layerStatesArray;
        for (p = k.length - 1; 0 <= p; --p) {
            h = k[p];
            var q = h.layer;
            if (qj(h, n) && f.call(g, q) && (h = Nj(this, q).cc(b, c, d, e)))return h
        }
    };
    l.Jg = function (b, c, d, e) {
        b = this.df(b, c, Gg, this, d, e);
        return m(b)
    };
    function Nj(b, c) {
        var d = ma(c).toString();
        if (d in b.g)return b.g[d];
        var e = b.Ge(c);
        b.g[d] = e;
        b.o[d] = x(e, "change", b.Sj, !1, b);
        return e
    }

    l.Sj = function () {
        this.f.render()
    };
    l.pe = ca;
    l.Qn = function (b, c) {
        for (var d in this.g)if (!(null !== c && d in c.layerStates)) {
            var e = d, f = this.g[e];
            delete this.g[e];
            Wc(this.o[e]);
            delete this.o[e];
            qc(f)
        }
    };
    function Oj(b, c) {
        for (var d in b.g)if (!(d in c.layerStates)) {
            c.postRenderFunctions.push(ra(b.Qn, b));
            break
        }
    };
    function Pj(b, c) {
        this.f = b;
        this.e = c;
        this.a = [];
        this.b = [];
        this.c = {}
    }

    Pj.prototype.clear = function () {
        this.a.length = 0;
        this.b.length = 0;
        yb(this.c)
    };
    function Qj(b) {
        var c = b.a, d = b.b, e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), Rj(b, 0));
        c = b.e(e);
        delete b.c[c];
        return e
    }

    function Fj(b, c) {
        var d = b.f(c);
        Infinity != d && (b.a.push(c), b.b.push(d), b.c[b.e(c)] = !0, Sj(b, 0, b.a.length - 1))
    }

    Pj.prototype.Sb = function () {
        return this.a.length
    };
    Pj.prototype.la = function () {
        return 0 === this.a.length
    };
    function Rj(b, c) {
        for (var d = b.a, e = b.b, f = d.length, g = d[c], h = e[c], k = c; c < f >> 1;) {
            var n = 2 * c + 1, p = 2 * c + 2, n = p < f && e[p] < e[n] ? p : n;
            d[c] = d[n];
            e[c] = e[n];
            c = n
        }
        d[c] = g;
        e[c] = h;
        Sj(b, k, c)
    }

    function Sj(b, c, d) {
        var e = b.a;
        b = b.b;
        for (var f = e[d], g = b[d]; d > c;) {
            var h = d - 1 >> 1;
            if (b[h] > g)e[d] = e[h], b[d] = b[h], d = h; else break
        }
        e[d] = f;
        b[d] = g
    }

    function Tj(b) {
        var c = b.f, d = b.a, e = b.b, f = 0, g = d.length, h, k, n;
        for (k = 0; k < g; ++k)h = d[k], n = c(h), Infinity == n ? delete b.c[b.e(h)] : (e[f] = n, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (b.a.length >> 1) - 1; 0 <= c; c--)Rj(b, c)
    };
    function Uj(b, c) {
        Pj.call(this, function (c) {
            return b.apply(null, c)
        }, function (b) {
            return b[0].hb()
        });
        this.i = c;
        this.d = 0
    }

    w(Uj, Pj);
    Uj.prototype.g = function (b) {
        b = b.target;
        var c = b.state;
        if (2 === c || 3 === c || 4 === c)Vc(b, "change", this.g, !1, this), --this.d, this.i()
    };
    function Vj(b, c, d) {
        this.d = b;
        this.c = c;
        this.g = d;
        this.a = [];
        this.b = this.e = 0
    }

    Vj.prototype.update = function (b, c) {
        this.a.push(b, c, ua())
    };
    function Wj(b, c) {
        var d = b.d, e = b.b, f = b.c - e, g = Xj(b);
        return Ze({
            source: c, duration: g, easing: function (b) {
                return e * (Math.exp(d * b * g) - 1) / f
            }
        })
    }

    function Xj(b) {
        return Math.log(b.c / b.b) / b.d
    };
    function Yj(b) {
        fd.call(this);
        this.n = null;
        this.d(!0);
        this.handleEvent = b.handleEvent
    }

    w(Yj, fd);
    Yj.prototype.b = function () {
        return this.get("active")
    };
    Yj.prototype.d = function (b) {
        this.set("active", b)
    };
    Yj.prototype.setMap = function (b) {
        this.n = b
    };
    function Zj(b, c, d, e, f) {
        if (null != d) {
            var g = c.Ca(), h = c.Ba();
            m(g) && m(h) && m(f) && 0 < f && (b.Ha($e({
                rotation: g,
                duration: f,
                easing: Ve
            })), m(e) && b.Ha(Ze({source: h, duration: f, easing: Ve})));
            c.rotate(d, e)
        }
    }

    function ak(b, c, d, e, f) {
        var g = c.xa();
        d = c.constrainResolution(g, d, 0);
        bk(b, c, d, e, f)
    }

    function bk(b, c, d, e, f) {
        if (null != d) {
            var g = c.xa(), h = c.Ba();
            m(g) && m(h) && m(f) && 0 < f && (b.Ha(af({
                resolution: g,
                duration: f,
                easing: Ve
            })), m(e) && b.Ha(Ze({source: h, duration: f, easing: Ve})));
            if (null != e) {
                var k;
                b = c.Ba();
                f = c.xa();
                m(b) && m(f) && (k = [e[0] - d * (e[0] - b[0]) / f, e[1] - d * (e[1] - b[1]) / f]);
                c.Na(k)
            }
            c.yb(d)
        }
    };
    function ck(b) {
        b = m(b) ? b : {};
        this.c = m(b.delta) ? b.delta : 1;
        Yj.call(this, {handleEvent: dk});
        this.e = m(b.duration) ? b.duration : 250
    }

    w(ck, Yj);
    function dk(b) {
        var c = !1, d = b.a;
        if (b.type == fj) {
            var c = b.map, e = b.coordinate, d = d.d ? -this.c : this.c, f = c.P();
            ak(c, f, d, e, this.e);
            b.preventDefault();
            c = !0
        }
        return !c
    };
    function ek(b) {
        b = b.a;
        return b.b && !b.f && b.d
    }

    function fk(b) {
        return "pointermove" == b.type
    }

    function gk(b) {
        return b.type == gj
    }

    function hk(b) {
        b = b.a;
        return !b.b && !b.f && !b.d
    }

    function ik(b) {
        b = b.a;
        return !b.b && !b.f && b.d
    }

    function jk(b) {
        b = b.a.target.tagName;
        return "INPUT" !== b && "SELECT" !== b && "TEXTAREA" !== b
    }

    function kk(b) {
        return 1 == b.b.pointerId
    };
    function lk(b) {
        b = m(b) ? b : {};
        Yj.call(this, {handleEvent: m(b.handleEvent) ? b.handleEvent : mk});
        this.Mc = m(b.handleDownEvent) ? b.handleDownEvent : Fg;
        this.ze = m(b.handleDragEvent) ? b.handleDragEvent : ca;
        this.ei = m(b.handleMoveEvent) ? b.handleMoveEvent : ca;
        this.fi = m(b.handleUpEvent) ? b.handleUpEvent : Fg;
        this.o = !1;
        this.R = {};
        this.g = []
    }

    w(lk, Yj);
    function nk(b) {
        for (var c = b.length, d = 0, e = 0, f = 0; f < c; f++)d += b[f].clientX, e += b[f].clientY;
        return [d / c, e / c]
    }

    function mk(b) {
        if (!(b instanceof bj))return !0;
        var c = !1, d = b.type;
        if (d === kj || d === mj || d === ij)d = b.b, b.type == ij ? delete this.R[d.pointerId] : b.type == kj ? this.R[d.pointerId] = d : d.pointerId in this.R && (this.R[d.pointerId] = d), this.g = sb(this.R);
        this.o && (b.type == mj ? this.ze(b) : b.type == ij && (this.o = this.fi(b)));
        b.type == kj ? (this.o = b = this.Mc(b), c = this.nc(b)) : b.type == lj && this.ei(b);
        return !c
    }

    lk.prototype.nc = Ig;
    function ok(b) {
        lk.call(this, {handleDownEvent: pk, handleDragEvent: qk, handleUpEvent: rk});
        b = m(b) ? b : {};
        this.c = b.kinetic;
        this.e = this.f = null;
        this.l = m(b.condition) ? b.condition : hk;
        this.i = !1
    }

    w(ok, lk);
    function qk(b) {
        var c = nk(this.g);
        this.c && this.c.update(c[0], c[1]);
        if (null !== this.e) {
            var d = this.e[0] - c[0], e = c[1] - this.e[1];
            b = b.map;
            var f = b.P(), g = Se(f), e = d = [d, e], h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            rd(d, g.rotation);
            md(d, g.center);
            d = f.xd(d);
            b.render();
            f.Na(d)
        }
        this.e = c
    }

    function rk(b) {
        b = b.map;
        var c = b.P();
        if (0 === this.g.length) {
            var d;
            if (d = !this.i && this.c)if (d = this.c, 6 > d.a.length)d = !1; else {
                var e = ua() - d.g, f = d.a.length - 3;
                if (d.a[f + 2] < e)d = !1; else {
                    for (var g = f - 3; 0 < g && d.a[g + 2] > e;)g -= 3;
                    var e = d.a[f + 2] - d.a[g + 2], h = d.a[f] - d.a[g], f = d.a[f + 1] - d.a[g + 1];
                    d.e = Math.atan2(f, h);
                    d.b = Math.sqrt(h * h + f * f) / e;
                    d = d.b > d.c
                }
            }
            d && (d = this.c, d = (d.c - d.b) / d.d, f = this.c.e, g = c.Ba(), this.f = Wj(this.c, g), b.Ha(this.f), g = b.sa(g), d = b.ka([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.xd(d), c.Na(d));
            Ue(c, -1);
            b.render();
            return !1
        }
        this.e = null;
        return !0
    }

    function pk(b) {
        if (0 < this.g.length && this.l(b)) {
            var c = b.map, d = c.P();
            this.e = null;
            this.o || Ue(d, 1);
            c.render();
            null !== this.f && $a(c.J, this.f) && (d.Na(b.frameState.viewState.center), this.f = null);
            this.c && (b = this.c, b.a.length = 0, b.e = 0, b.b = 0);
            this.i = 1 < this.g.length;
            return !0
        }
        return !1
    }

    ok.prototype.nc = Fg;
    function sk(b) {
        b = m(b) ? b : {};
        lk.call(this, {handleDownEvent: tk, handleDragEvent: uk, handleUpEvent: vk});
        this.e = m(b.condition) ? b.condition : ek;
        this.c = void 0;
        this.f = m(b.duration) ? b.duration : 250
    }

    w(sk, lk);
    function uk(b) {
        if (kk(b)) {
            var c = b.map, d = c.wa();
            b = b.pixel;
            d = Math.atan2(d[1] / 2 - b[1], b[0] - d[0] / 2);
            if (m(this.c)) {
                b = d - this.c;
                var e = c.P(), f = e.Ca();
                c.render();
                Zj(c, e, f - b)
            }
            this.c = d
        }
    }

    function vk(b) {
        if (!kk(b))return !0;
        b = b.map;
        var c = b.P();
        Ue(c, -1);
        var d = c.Ca(), e = this.f, d = c.constrainRotation(d, 0);
        Zj(b, c, d, void 0, e);
        return !1
    }

    function tk(b) {
        return kk(b) && zc(b.a) && this.e(b) ? (b = b.map, Ue(b.P(), 1), b.render(), this.c = void 0, !0) : !1
    }

    sk.prototype.nc = Fg;
    function wk() {
        fd.call(this);
        this.n = Kd();
        this.o = -1;
        this.e = {};
        this.i = this.g = 0
    }

    w(wk, fd);
    l = wk.prototype;
    l.Ua = function (b, c) {
        var d = m(c) ? c : [NaN, NaN];
        this.Sa(b[0], b[1], d, Infinity);
        return d
    };
    l.Fe = function (b) {
        return this.$b(b[0], b[1])
    };
    l.$b = Fg;
    l.G = function (b) {
        this.o != this.a && (this.n = this.wd(this.n), this.o = this.a);
        var c = this.n;
        m(b) ? (b[0] = c[0], b[1] = c[1], b[2] = c[2], b[3] = c[3]) : b = c;
        return b
    };
    l.transform = function (b, c) {
        this.qa(Je(b, c));
        return this
    };
    function xk(b, c, d, e, f, g) {
        var h = f[0], k = f[1], n = f[4], p = f[5], q = f[12];
        f = f[13];
        for (var r = m(g) ? g : [], t = 0; c < d; c += e) {
            var u = b[c], A = b[c + 1];
            r[t++] = h * u + n * A + q;
            r[t++] = k * u + p * A + f
        }
        m(g) && r.length != t && (r.length = t);
        return r
    };
    function yk() {
        wk.call(this);
        this.b = "XY";
        this.s = 2;
        this.j = null
    }

    w(yk, wk);
    function zk(b) {
        if ("XY" == b)return 2;
        if ("XYZ" == b || "XYM" == b)return 3;
        if ("XYZM" == b)return 4
    }

    l = yk.prototype;
    l.$b = Fg;
    l.wd = function (b) {
        var c = this.j, d = this.j.length, e = this.s;
        b = Nd(Infinity, Infinity, -Infinity, -Infinity, b);
        return Yd(b, c, 0, d, e)
    };
    l.tb = function () {
        return this.j.slice(0, this.s)
    };
    l.ub = function () {
        return this.j.slice(this.j.length - this.s)
    };
    l.vb = function () {
        return this.b
    };
    l.Te = function (b) {
        this.i != this.a && (yb(this.e), this.g = 0, this.i = this.a);
        if (0 > b || 0 !== this.g && b <= this.g)return this;
        var c = b.toString();
        if (this.e.hasOwnProperty(c))return this.e[c];
        var d = this.vc(b);
        if (d.j.length < this.j.length)return this.e[c] = d;
        this.g = b;
        return this
    };
    l.vc = function () {
        return this
    };
    function Ak(b, c, d) {
        b.s = zk(c);
        b.b = c;
        b.j = d
    }

    function Bk(b, c, d, e) {
        if (m(c))d = zk(c); else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    b.b = "XY";
                    b.s = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        b.b = c;
        b.s = d
    }

    l.qa = function (b) {
        null !== this.j && (b(this.j, this.j, this.s), this.k())
    };
    l.Oa = function (b, c) {
        var d = this.j;
        if (null !== d) {
            var e = d.length, f = this.s, g = m(d) ? d : [], h = 0, k, n;
            for (k = 0; k < e; k += f)for (g[h++] = d[k] + b, g[h++] = d[k + 1] + c, n = k + 2; n < k + f; ++n)g[h++] = d[n];
            m(d) && g.length != h && (g.length = h);
            this.k()
        }
    };
    function Ck(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e)var k = b[c], n = b[c + 1], f = f + (h * k - g * n), g = k, h = n;
        return f / 2
    }

    function Dk(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], f = f + Ck(b, c, k, e);
            c = k
        }
        return f
    };
    function Ek(b, c, d, e, f, g) {
        var h = f - d, k = g - e;
        if (0 !== h || 0 !== k) {
            var n = ((b - d) * h + (c - e) * k) / (h * h + k * k);
            1 < n ? (d = f, e = g) : 0 < n && (d += h * n, e += k * n)
        }
        return Fk(b, c, d, e)
    }

    function Fk(b, c, d, e) {
        b = d - b;
        c = e - c;
        return b * b + c * c
    };
    function Gk(b, c, d, e, f, g, h) {
        var k = b[c], n = b[c + 1], p = b[d] - k, q = b[d + 1] - n;
        if (0 !== p || 0 !== q)if (g = ((f - k) * p + (g - n) * q) / (p * p + q * q), 1 < g)c = d; else if (0 < g) {
            for (f = 0; f < e; ++f)h[f] = Xb(b[c + f], b[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f)h[f] = b[c + f];
        h.length = e
    }

    function Hk(b, c, d, e, f) {
        var g = b[c], h = b[c + 1];
        for (c += e; c < d; c += e) {
            var k = b[c], n = b[c + 1], g = Fk(g, h, k, n);
            g > f && (f = g);
            g = k;
            h = n
        }
        return f
    }

    function Ik(b, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g];
            f = Hk(b, c, k, e, f);
            c = k
        }
        return f
    }

    function Jk(b, c, d, e, f, g, h, k, n, p, q) {
        if (c == d)return p;
        var r;
        if (0 === f) {
            r = Fk(h, k, b[c], b[c + 1]);
            if (r < p) {
                for (q = 0; q < e; ++q)n[q] = b[c + q];
                n.length = e;
                return r
            }
            return p
        }
        for (var t = m(q) ? q : [NaN, NaN], u = c + e; u < d;)if (Gk(b, u - e, u, e, h, k, t), r = Fk(h, k, t[0], t[1]), r < p) {
            p = r;
            for (q = 0; q < e; ++q)n[q] = t[q];
            n.length = e;
            u += e
        } else u += e * Math.max((Math.sqrt(r) - Math.sqrt(p)) / f | 0, 1);
        if (g && (Gk(b, d - e, c, e, h, k, t), r = Fk(h, k, t[0], t[1]), r < p)) {
            p = r;
            for (q = 0; q < e; ++q)n[q] = t[q];
            n.length = e
        }
        return p
    }

    function Kk(b, c, d, e, f, g, h, k, n, p, q) {
        q = m(q) ? q : [NaN, NaN];
        var r, t;
        r = 0;
        for (t = d.length; r < t; ++r) {
            var u = d[r];
            p = Jk(b, c, u, e, f, g, h, k, n, p, q);
            c = u
        }
        return p
    };
    function Lk(b, c) {
        var d = 0, e, f;
        e = 0;
        for (f = c.length; e < f; ++e)b[d++] = c[e];
        return d
    }

    function Mk(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f], k;
            for (k = 0; k < e; ++k)b[c++] = h[k]
        }
        return c
    }

    function Nk(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, k;
        h = 0;
        for (k = d.length; h < k; ++h)c = Mk(b, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    };
    function Ok(b, c, d, e, f) {
        f = m(f) ? f : [];
        for (var g = 0; c < d; c += e)f[g++] = b.slice(c, c + e);
        f.length = g;
        return f
    }

    function Pk(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0, h, k;
        h = 0;
        for (k = d.length; h < k; ++h) {
            var n = d[h];
            f[g++] = Ok(b, c, n, e, f[g]);
            c = n
        }
        f.length = g;
        return f
    };
    function Qk(b, c, d, e, f, g, h) {
        var k = (d - c) / e;
        if (3 > k) {
            for (; c < d; c += e)g[h++] = b[c], g[h++] = b[c + 1];
            return h
        }
        var n = Array(k);
        n[0] = 1;
        n[k - 1] = 1;
        d = [c, d - e];
        for (var p = 0, q; 0 < d.length;) {
            var r = d.pop(), t = d.pop(), u = 0, A = b[t], z = b[t + 1], C = b[r], B = b[r + 1];
            for (q = t + e; q < r; q += e) {
                var y = Ek(b[q], b[q + 1], A, z, C, B);
                y > u && (p = q, u = y)
            }
            u > f && (n[(p - c) / e] = 1, t + e < p && d.push(t, p), p + e < r && d.push(p, r))
        }
        for (q = 0; q < k; ++q)n[q] && (g[h++] = b[c + q * e], g[h++] = b[c + q * e + 1]);
        return h
    }

    function Rk(b, c, d, e, f, g, h, k) {
        var n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n];
            a:{
                var r = b, t = q, u = e, A = f, z = g;
                if (c != t) {
                    var C = A * Math.round(r[c] / A), B = A * Math.round(r[c + 1] / A);
                    c += u;
                    z[h++] = C;
                    z[h++] = B;
                    var y = void 0, K = void 0;
                    do if (y = A * Math.round(r[c] / A), K = A * Math.round(r[c + 1] / A), c += u, c == t) {
                        z[h++] = y;
                        z[h++] = K;
                        break a
                    } while (y == C && K == B);
                    for (; c < t;) {
                        var J, H;
                        J = A * Math.round(r[c] / A);
                        H = A * Math.round(r[c + 1] / A);
                        c += u;
                        if (J != y || H != K) {
                            var Q = y - C, sa = K - B, Oa = J - C, O = H - B;
                            Q * O == sa * Oa && (0 > Q && Oa < Q || Q == Oa || 0 < Q && Oa > Q) && (0 > sa && O < sa || sa == O || 0 < sa &&
                            O > sa) || (z[h++] = y, z[h++] = K, C = y, B = K);
                            y = J;
                            K = H
                        }
                    }
                    z[h++] = y;
                    z[h++] = K
                }
            }
            k.push(h);
            c = q
        }
        return h
    };
    function Sk(b, c) {
        yk.call(this);
        this.c = this.f = -1;
        this.ba(b, c)
    }

    w(Sk, yk);
    l = Sk.prototype;
    l.clone = function () {
        var b = new Sk(null);
        Tk(b, this.b, this.j.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        this.c != this.a && (this.f = Math.sqrt(Hk(this.j, 0, this.j.length, this.s, 0)), this.c = this.a);
        return Jk(this.j, 0, this.j.length, this.s, this.f, !0, b, c, d, e)
    };
    l.tl = function () {
        return Ck(this.j, 0, this.j.length, this.s)
    };
    l.M = function () {
        return Ok(this.j, 0, this.j.length, this.s)
    };
    l.vc = function (b) {
        var c = [];
        c.length = Qk(this.j, 0, this.j.length, this.s, b, c, 0);
        b = new Sk(null);
        Tk(b, "XY", c);
        return b
    };
    l.L = function () {
        return "LinearRing"
    };
    l.ba = function (b, c) {
        null === b ? Tk(this, "XY", null) : (Bk(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Mk(this.j, 0, b, this.s), this.k())
    };
    function Tk(b, c, d) {
        Ak(b, c, d);
        b.k()
    };
    function E(b, c) {
        yk.call(this);
        this.ba(b, c)
    }

    w(E, yk);
    l = E.prototype;
    l.clone = function () {
        var b = new E(null);
        Uk(b, this.b, this.j.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        var f = this.j;
        b = Fk(b, c, f[0], f[1]);
        if (b < e) {
            e = this.s;
            for (c = 0; c < e; ++c)d[c] = f[c];
            d.length = e;
            return b
        }
        return e
    };
    l.M = function () {
        return null === this.j ? [] : this.j.slice()
    };
    l.wd = function (b) {
        return Vd(this.j, b)
    };
    l.L = function () {
        return "Point"
    };
    l.na = function (b) {
        return Sd(b, this.j[0], this.j[1])
    };
    l.ba = function (b, c) {
        null === b ? Uk(this, "XY", null) : (Bk(this, c, b, 0), null === this.j && (this.j = []), this.j.length = Lk(this.j, b), this.k())
    };
    function Uk(b, c, d) {
        Ak(b, c, d);
        b.k()
    };
    function Vk(b, c, d, e, f) {
        return !Zd(f, function (f) {
            return !Wk(b, c, d, e, f[0], f[1])
        })
    }

    function Wk(b, c, d, e, f, g) {
        for (var h = !1, k = b[d - e], n = b[d - e + 1]; c < d; c += e) {
            var p = b[c], q = b[c + 1];
            n > g != q > g && f < (p - k) * (g - n) / (q - n) + k && (h = !h);
            k = p;
            n = q
        }
        return h
    }

    function Xk(b, c, d, e, f, g) {
        if (0 === d.length || !Wk(b, c, d[0], e, f, g))return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c)if (Wk(b, d[c - 1], d[c], e, f, g))return !1;
        return !0
    };
    function Yk(b, c, d, e, f, g, h) {
        var k, n, p, q, r, t = f[g + 1], u = [], A = d[0];
        p = b[A - e];
        r = b[A - e + 1];
        for (k = c; k < A; k += e) {
            q = b[k];
            n = b[k + 1];
            if (t <= r && n <= t || r <= t && t <= n)p = (t - r) / (n - r) * (q - p) + p, u.push(p);
            p = q;
            r = n
        }
        A = NaN;
        r = -Infinity;
        u.sort();
        p = u[0];
        k = 1;
        for (n = u.length; k < n; ++k) {
            q = u[k];
            var z = Math.abs(q - p);
            z > r && (p = (p + q) / 2, Xk(b, c, d, e, p, t) && (A = p, r = z));
            p = q
        }
        isNaN(A) && (A = f[g]);
        return m(h) ? (h.push(A, t), h) : [A, t]
    };
    function Zk(b, c, d, e, f, g) {
        for (var h = [b[c], b[c + 1]], k = [], n; c + e < d; c += e) {
            k[0] = b[c + e];
            k[1] = b[c + e + 1];
            if (n = f.call(g, h, k))return n;
            h[0] = k[0];
            h[1] = k[1]
        }
        return !1
    };
    function $k(b, c, d, e, f) {
        var g = Yd(Kd(), b, c, d, e);
        return he(f, g) ? Td(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : Zk(b, c, d, e, function (b, c) {
            var d = !1, e = Ud(f, b), g = Ud(f, c);
            if (1 === e || 1 === g)d = !0; else {
                var r = f[0], t = f[1], u = f[2], A = f[3], z = c[0], C = c[1], B = (C - b[1]) / (z - b[0]);
                g & 2 && !(e & 2) && (d = z - (C - A) / B, d = d >= r && d <= u);
                d || !(g & 4) || e & 4 || (d = C - (z - u) * B, d = d >= t && d <= A);
                d || !(g & 8) || e & 8 || (d = z - (C - t) / B, d = d >= r && d <= u);
                d || !(g & 16) || e & 16 || (d = C - (z - r) * B, d = d >= t && d <= A)
            }
            return d
        }) : !1
    }

    function al(b, c, d, e, f) {
        var g = d[0];
        if (!($k(b, c, g, e, f) || Wk(b, c, g, e, f[0], f[1]) || Wk(b, c, g, e, f[0], f[3]) || Wk(b, c, g, e, f[2], f[1]) || Wk(b, c, g, e, f[2], f[3])))return !1;
        if (1 === d.length)return !0;
        c = 1;
        for (g = d.length; c < g; ++c)if (Vk(b, d[c - 1], d[c], e, f))return !1;
        return !0
    };
    function bl(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e)var k = b[c], n = b[c + 1], f = f + (k - g) * (n + h), g = k, h = n;
        return 0 < f
    }

    function cl(b, c, d, e) {
        var f = 0;
        e = m(e) ? e : !1;
        var g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g], f = bl(b, f, k, d);
            if (0 === g) {
                if (e && f || !e && !f)return !1
            } else if (e && !f || !e && f)return !1;
            f = k
        }
        return !0
    }

    function dl(b, c, d, e, f) {
        f = m(f) ? f : !1;
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], n = bl(b, c, k, e);
            if (0 === g ? f && n || !f && !n : f && !n || !f && n)for (var n = b, p = k, q = e; c < p - q;) {
                var r;
                for (r = 0; r < q; ++r) {
                    var t = n[c + r];
                    n[c + r] = n[p - q + r];
                    n[p - q + r] = t
                }
                c += q;
                p -= q
            }
            c = k
        }
        return c
    }

    function el(b, c, d, e) {
        var f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g)f = dl(b, f, c[g], d, e);
        return f
    };
    function F(b, c) {
        yk.call(this);
        this.c = [];
        this.l = -1;
        this.p = null;
        this.K = this.J = this.H = -1;
        this.f = null;
        this.ba(b, c)
    }

    w(F, yk);
    l = F.prototype;
    l.xi = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j);
        this.c.push(this.j.length);
        this.k()
    };
    l.clone = function () {
        var b = new F(null);
        fl(b, this.b, this.j.slice(), this.c.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        this.J != this.a && (this.H = Math.sqrt(Ik(this.j, 0, this.c, this.s, 0)), this.J = this.a);
        return Kk(this.j, 0, this.c, this.s, this.H, !0, b, c, d, e)
    };
    l.$b = function (b, c) {
        return Xk(gl(this), 0, this.c, this.s, b, c)
    };
    l.wl = function () {
        return Dk(gl(this), 0, this.c, this.s)
    };
    l.M = function (b) {
        var c;
        m(b) ? (c = gl(this).slice(), dl(c, 0, this.c, this.s, b)) : c = this.j;
        return Pk(c, 0, this.c, this.s)
    };
    function hl(b) {
        if (b.l != b.a) {
            var c = de(b.G());
            b.p = Yk(gl(b), 0, b.c, b.s, c, 0);
            b.l = b.a
        }
        return b.p
    }

    l.cj = function () {
        return new E(hl(this))
    };
    l.hj = function () {
        return this.c.length
    };
    l.Zf = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c = new Sk(null);
        Tk(c, this.b, this.j.slice(0 === b ? 0 : this.c[b - 1], this.c[b]));
        return c
    };
    l.Dd = function () {
        var b = this.b, c = this.j, d = this.c, e = [], f = 0, g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g], n = new Sk(null);
            Tk(n, b, c.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };
    function gl(b) {
        if (b.K != b.a) {
            var c = b.j;
            cl(c, b.c, b.s) ? b.f = c : (b.f = c.slice(), b.f.length = dl(b.f, 0, b.c, b.s));
            b.K = b.a
        }
        return b.f
    }

    l.vc = function (b) {
        var c = [], d = [];
        c.length = Rk(this.j, 0, this.c, this.s, Math.sqrt(b), c, 0, d);
        b = new F(null);
        fl(b, "XY", c, d);
        return b
    };
    l.L = function () {
        return "Polygon"
    };
    l.na = function (b) {
        return al(gl(this), 0, this.c, this.s, b)
    };
    l.ba = function (b, c) {
        if (null === b)fl(this, "XY", null, this.c); else {
            Bk(this, c, b, 2);
            null === this.j && (this.j = []);
            var d = Nk(this.j, 0, b, this.s, this.c);
            this.j.length = 0 === d.length ? 0 : d[d.length - 1];
            this.k()
        }
    };
    function fl(b, c, d, e) {
        Ak(b, c, d);
        b.c = e;
        b.k()
    }

    function il(b, c, d, e) {
        var f = m(e) ? e : 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g)db(e, b.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        b = new F(null);
        fl(b, "XY", e, [e.length]);
        return b
    }

    function jl(b, c, d) {
        var e = m(c) ? c : 32, f = b.s;
        c = b.b;
        for (var g = new F(null, c), e = f * (e + 1), f = [], h = 0; h < e; h++)f[h] = 0;
        fl(g, c, f, [f.length]);
        kl(g, b.cd(), b.cf(), d);
        return g
    }

    function kl(b, c, d, e) {
        var f = b.j, g = b.b, h = b.s, k = b.c, n = f.length / h - 1;
        e = m(e) ? e : 0;
        for (var p, q, r = 0; r <= n; ++r)q = r * h, p = e + 2 * Wb(r, n) * Math.PI / n, f[q] = c[0] + d * Math.cos(p), f[q + 1] = c[1] + d * Math.sin(p);
        fl(b, g, f, k)
    };
    function ll() {
    };
    function ml(b, c, d, e, f, g, h) {
        rc.call(this, b, c);
        this.vectorContext = d;
        this.a = e;
        this.frameState = f;
        this.context = g;
        this.glContext = h
    }

    w(ml, rc);
    function nl(b) {
        this.c = this.b = this.e = this.d = this.a = null;
        this.g = b
    }

    w(nl, mc);
    function pl(b) {
        var c = b.e, d = b.b;
        b = Ua([c, [c[0], d[1]], d, [d[0], c[1]]], b.a.ka, b.a);
        b[4] = b[0].slice();
        return new F([b])
    }

    nl.prototype.N = function () {
        this.setMap(null)
    };
    nl.prototype.f = function (b) {
        var c = this.c, d = this.g;
        b.vectorContext.rc(Infinity, function (b) {
            b.za(d.d, d.c);
            b.Aa(d.b);
            b.Qb(c, null)
        })
    };
    nl.prototype.Q = function () {
        return this.c
    };
    function ql(b) {
        null === b.a || null === b.e || null === b.b || b.a.render()
    }

    nl.prototype.setMap = function (b) {
        null !== this.d && (Wc(this.d), this.d = null, this.a.render(), this.a = null);
        this.a = b;
        null !== this.a && (this.d = x(b, "postcompose", this.f, !1, this), ql(this))
    };
    function rl(b, c) {
        rc.call(this, b);
        this.coordinate = c
    }

    w(rl, rc);
    function sl(b) {
        lk.call(this, {handleDownEvent: tl, handleDragEvent: ul, handleUpEvent: vl});
        b = m(b) ? b : {};
        this.e = new nl(m(b.style) ? b.style : null);
        this.c = null;
        this.i = m(b.condition) ? b.condition : Gg
    }

    w(sl, lk);
    function ul(b) {
        if (kk(b)) {
            var c = this.e;
            b = b.pixel;
            c.e = this.c;
            c.b = b;
            c.c = pl(c);
            ql(c)
        }
    }

    sl.prototype.Q = function () {
        return this.e.Q()
    };
    sl.prototype.f = ca;
    function vl(b) {
        if (!kk(b))return !0;
        this.e.setMap(null);
        var c = b.pixel[0] - this.c[0], d = b.pixel[1] - this.c[1];
        64 <= c * c + d * d && (this.f(b), this.dispatchEvent(new rl("boxend", b.coordinate)));
        return !1
    }

    function tl(b) {
        if (kk(b) && zc(b.a) && this.i(b)) {
            this.c = b.pixel;
            this.e.setMap(b.map);
            var c = this.e, d = this.c;
            c.e = this.c;
            c.b = d;
            c.c = pl(c);
            ql(c);
            this.dispatchEvent(new rl("boxstart", b.coordinate));
            return !0
        }
        return !1
    };
    function wl() {
        this.b = -1
    };
    function xl() {
        this.b = -1;
        this.b = 64;
        this.a = Array(4);
        this.e = Array(this.b);
        this.d = this.c = 0;
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.d = this.c = 0
    }

    w(xl, wl);
    function yl(b, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ia(c))for (var f = 0; 16 > f; ++f)e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24; else for (f = 0; 16 > f; ++f)e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = b.a[0];
        d = b.a[1];
        var f = b.a[2], g = b.a[3], h = 0, h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^
            c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f +
            (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 |
            h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 |
            h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 |
            h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^
            c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d +
            (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        b.a[0] = b.a[0] + c & 4294967295;
        b.a[1] = b.a[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        b.a[2] = b.a[2] + f & 4294967295;
        b.a[3] = b.a[3] + g & 4294967295
    }

    xl.prototype.update = function (b, c) {
        m(c) || (c = b.length);
        for (var d = c - this.b, e = this.e, f = this.c, g = 0; g < c;) {
            if (0 == f)for (; g <= d;)yl(this, b, g), g += this.b;
            if (ia(b))for (; g < c;) {
                if (e[f++] = b.charCodeAt(g++), f == this.b) {
                    yl(this, e);
                    f = 0;
                    break
                }
            } else for (; g < c;)if (e[f++] = b[g++], f == this.b) {
                yl(this, e);
                f = 0;
                break
            }
        }
        this.c = f;
        this.d += c
    };
    function zl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.d = b.lineCap;
        this.c = m(b.lineDash) ? b.lineDash : null;
        this.e = b.lineJoin;
        this.g = b.miterLimit;
        this.b = b.width;
        this.f = void 0
    }

    l = zl.prototype;
    l.Im = function () {
        return this.a
    };
    l.ej = function () {
        return this.d
    };
    l.Jm = function () {
        return this.c
    };
    l.fj = function () {
        return this.e
    };
    l.kj = function () {
        return this.g
    };
    l.Km = function () {
        return this.b
    };
    l.Lm = function (b) {
        this.a = b;
        this.f = void 0
    };
    l.$n = function (b) {
        this.d = b;
        this.f = void 0
    };
    l.Mm = function (b) {
        this.c = b;
        this.f = void 0
    };
    l.ao = function (b) {
        this.e = b;
        this.f = void 0
    };
    l.bo = function (b) {
        this.g = b;
        this.f = void 0
    };
    l.lo = function (b) {
        this.b = b;
        this.f = void 0
    };
    l.sb = function () {
        if (!m(this.f)) {
            var b = "s" + (null === this.a ? "-" : uf(this.a)) + "," + (m(this.d) ? this.d.toString() : "-") + "," + (null === this.c ? "-" : this.c.toString()) + "," + (m(this.e) ? this.e : "-") + "," + (m(this.g) ? this.g.toString() : "-") + "," + (m(this.b) ? this.b.toString() : "-"), c = new xl;
            c.update(b);
            var d = Array((56 > c.c ? c.b : 2 * c.b) - c.c);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b)d[b] = 0;
            for (var e = 8 * c.d, b = d.length - 8; b < d.length; ++b)d[b] = e & 255, e /= 256;
            c.update(d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)for (var f = 0; 32 > f; f += 8)d[e++] = c.a[b] >>> f & 255;
            if (8192 > d.length)c = String.fromCharCode.apply(null, d); else for (c = "", b = 0; b < d.length; b += 8192)c += String.fromCharCode.apply(null, fb(d, b, b + 8192));
            this.f = c
        }
        return this.f
    };
    var Al = [0, 0, 0, 1], Bl = [], Cl = [0, 0, 0, 1];

    function Dl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.b = void 0
    }

    Dl.prototype.c = function () {
        return this.a
    };
    Dl.prototype.d = function (b) {
        this.a = b;
        this.b = void 0
    };
    Dl.prototype.sb = function () {
        m(this.b) || (this.b = "f" + (null === this.a ? "-" : uf(this.a)));
        return this.b
    };
    function El(b) {
        b = m(b) ? b : {};
        this.g = this.a = this.e = null;
        this.d = m(b.fill) ? b.fill : null;
        this.b = m(b.stroke) ? b.stroke : null;
        this.c = b.radius;
        this.o = [0, 0];
        this.i = this.V = this.f = null;
        var c = b.atlasManager, d, e = null, f, g = 0;
        null !== this.b && (f = uf(this.b.a), g = this.b.b, m(g) || (g = 1), e = this.b.c, mi || (e = null));
        var h = 2 * (this.c + g) + 1;
        f = {strokeStyle: f, ld: g, size: h, lineDash: e};
        m(c) ? (h = Math.round(h), (e = null === this.d) && (d = ra(this.Qg, this, f)), g = this.sb(), f = c.add(g, h, h, ra(this.Rg, this, f), d), this.a = f.image, this.o = [f.offsetX, f.offsetY],
            d = f.image.width, this.g = e ? f.kg : this.a) : (this.a = Lf("CANVAS"), this.a.height = h, this.a.width = h, d = h = this.a.width, c = this.a.getContext("2d"), this.Rg(f, c, 0, 0), null === this.d ? (c = this.g = Lf("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.Qg(f, c, 0, 0)) : this.g = this.a);
        this.f = [h / 2, h / 2];
        this.V = [h, h];
        this.i = [d, d];
        Gj.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }

    w(El, Gj);
    l = El.prototype;
    l.rb = function () {
        return this.f
    };
    l.zm = function () {
        return this.d
    };
    l.de = function () {
        return this.g
    };
    l.Lb = function () {
        return this.a
    };
    l.fd = function () {
        return 2
    };
    l.Cd = function () {
        return this.i
    };
    l.wb = function () {
        return this.o
    };
    l.Am = function () {
        return this.c
    };
    l.Ya = function () {
        return this.V
    };
    l.Bm = function () {
        return this.b
    };
    l.Ye = ca;
    l.load = ca;
    l.yf = ca;
    l.Rg = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.c, 0, 2 * Math.PI, !0);
        null !== this.d && (c.fillStyle = uf(this.d.a), c.fill());
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ld, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.Qg = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.c, 0, 2 * Math.PI, !0);
        c.fillStyle = Al;
        c.fill();
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ld, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.sb = function () {
        var b = null === this.b ? "-" : this.b.sb(), c = null === this.d ? "-" : this.d.sb();
        if (null === this.e || b != this.e[1] || c != this.e[2] || this.c != this.e[3])this.e = ["c" + b + c + (m(this.c) ? this.c.toString() : "-"), b, c, this.c];
        return this.e[0]
    };
    function Fl(b) {
        b = m(b) ? b : {};
        this.f = null;
        this.e = Gl;
        m(b.geometry) && this.Ug(b.geometry);
        this.d = m(b.fill) ? b.fill : null;
        this.g = m(b.image) ? b.image : null;
        this.c = m(b.stroke) ? b.stroke : null;
        this.b = m(b.text) ? b.text : null;
        this.a = b.zIndex
    }

    l = Fl.prototype;
    l.Q = function () {
        return this.f
    };
    l.Zi = function () {
        return this.e
    };
    l.Nm = function () {
        return this.d
    };
    l.Om = function () {
        return this.g
    };
    l.Pm = function () {
        return this.c
    };
    l.Qm = function () {
        return this.b
    };
    l.Cj = function () {
        return this.a
    };
    l.Ug = function (b) {
        ka(b) ? this.e = b : ia(b) ? this.e = function (c) {
            return c.get(b)
        } : null === b ? this.e = Gl : m(b) && (this.e = function () {
            return b
        });
        this.f = b
    };
    l.no = function (b) {
        this.a = b
    };
    function Hl(b) {
        ka(b) || (b = ga(b) ? b : [b], b = Eg(b));
        return b
    }

    function Il() {
        var b = new Dl({color: "rgba(255,255,255,0.4)"}), c = new zl({
            color: "#3399CC",
            width: 1.25
        }), d = [new Fl({image: new El({fill: b, stroke: c, radius: 5}), fill: b, stroke: c})];
        Il = function () {
            return d
        };
        return d
    }

    function Jl() {
        var b = {}, c = [255, 255, 255, 1], d = [0, 153, 255, 1];
        b.Polygon = [new Fl({fill: new Dl({color: [255, 255, 255, .5]})})];
        b.MultiPolygon = b.Polygon;
        b.LineString = [new Fl({stroke: new zl({color: c, width: 5})}), new Fl({stroke: new zl({color: d, width: 3})})];
        b.MultiLineString = b.LineString;
        b.Circle = b.Polygon.concat(b.LineString);
        b.Point = [new Fl({
            image: new El({radius: 6, fill: new Dl({color: d}), stroke: new zl({color: c, width: 1.5})}),
            zIndex: Infinity
        })];
        b.MultiPoint = b.Point;
        b.GeometryCollection = b.Polygon.concat(b.Point);
        return b
    }

    function Gl(b) {
        return b.Q()
    };
    function Kl(b) {
        var c = m(b) ? b : {};
        b = m(c.condition) ? c.condition : ik;
        this.l = m(c.duration) ? c.duration : 200;
        c = m(c.style) ? c.style : new Fl({stroke: new zl({color: [0, 0, 255, 1]})});
        sl.call(this, {condition: b, style: c})
    }

    w(Kl, sl);
    Kl.prototype.f = function () {
        var b = this.n, c = b.P(), d = this.Q().G(), e = de(d), f = b.wa(), d = Oe(d, f), f = this.l, d = c.constrainResolution(d, 0, void 0);
        bk(b, c, d, e, f)
    };
    function Ll(b) {
        Yj.call(this, {handleEvent: Ml});
        b = m(b) ? b : {};
        this.c = m(b.condition) ? b.condition : Lg(hk, jk);
        this.e = m(b.duration) ? b.duration : 100;
        this.g = m(b.pixelDelta) ? b.pixelDelta : 128
    }

    w(Ll, Yj);
    function Ml(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.e;
            if (this.c(b) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = b.map, c = e.P(), f = Se(c), g = f.resolution * this.g, h = 0, k = 0;
                40 == d ? k = -g : 37 == d ? h = -g : 39 == d ? h = g : k = g;
                d = [h, k];
                rd(d, f.rotation);
                f = this.e;
                g = c.Ba();
                m(g) && (m(f) && 0 < f && e.Ha(Ze({
                    source: g,
                    duration: f,
                    easing: Xe
                })), e = c.xd([g[0] + d[0], g[1] + d[1]]), c.Na(e));
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function Nl(b) {
        Yj.call(this, {handleEvent: Ol});
        b = m(b) ? b : {};
        this.e = m(b.condition) ? b.condition : jk;
        this.c = m(b.delta) ? b.delta : 1;
        this.g = m(b.duration) ? b.duration : 100
    }

    w(Nl, Yj);
    function Ol(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.q;
            if (this.e(b) && (43 == d || 45 == d)) {
                c = b.map;
                d = 43 == d ? this.c : -this.c;
                c.render();
                var e = c.P();
                ak(c, e, d, void 0, this.g);
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };
    function Pl(b) {
        Yj.call(this, {handleEvent: Ql});
        b = m(b) ? b : {};
        this.c = 0;
        this.o = m(b.duration) ? b.duration : 250;
        this.g = null;
        this.f = this.e = void 0
    }

    w(Pl, Yj);
    function Ql(b) {
        var c = !1;
        if ("mousewheel" == b.type) {
            var c = b.map, d = b.a;
            this.g = b.coordinate;
            this.c += d.o;
            m(this.e) || (this.e = ua());
            d = Math.max(80 - (ua() - this.e), 0);
            ba.clearTimeout(this.f);
            this.f = ba.setTimeout(ra(this.i, this, c), d);
            b.preventDefault();
            c = !0
        }
        return !c
    }

    Pl.prototype.i = function (b) {
        var c = Vb(this.c, -1, 1), d = b.P();
        b.render();
        ak(b, d, -c, this.g, this.o);
        this.c = 0;
        this.g = null;
        this.f = this.e = void 0
    };
    function Rl(b) {
        lk.call(this, {handleDownEvent: Sl, handleDragEvent: Tl, handleUpEvent: Ul});
        b = m(b) ? b : {};
        this.e = null;
        this.f = void 0;
        this.c = !1;
        this.i = 0;
        this.p = m(b.threshold) ? b.threshold : .3;
        this.l = m(b.duration) ? b.duration : 250
    }

    w(Rl, lk);
    function Tl(b) {
        var c = 0, d = this.g[0], e = this.g[1], d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        m(this.f) && (c = d - this.f, this.i += c, !this.c && Math.abs(this.i) > this.p && (this.c = !0));
        this.f = d;
        b = b.map;
        d = ig(b.b);
        e = nk(this.g);
        e[0] -= d.x;
        e[1] -= d.y;
        this.e = b.ka(e);
        this.c && (d = b.P(), e = d.Ca(), b.render(), Zj(b, d, e + c, this.e))
    }

    function Ul(b) {
        if (2 > this.g.length) {
            b = b.map;
            var c = b.P();
            Ue(c, -1);
            if (this.c) {
                var d = c.Ca(), e = this.e, f = this.l, d = c.constrainRotation(d, 0);
                Zj(b, c, d, e, f)
            }
            return !1
        }
        return !0
    }

    function Sl(b) {
        return 2 <= this.g.length ? (b = b.map, this.e = null, this.f = void 0, this.c = !1, this.i = 0, this.o || Ue(b.P(), 1), b.render(), !0) : !1
    }

    Rl.prototype.nc = Fg;
    function Vl(b) {
        lk.call(this, {handleDownEvent: Wl, handleDragEvent: Xl, handleUpEvent: Yl});
        b = m(b) ? b : {};
        this.e = null;
        this.i = m(b.duration) ? b.duration : 400;
        this.c = void 0;
        this.f = 1
    }

    w(Vl, lk);
    function Xl(b) {
        var c = 1, d = this.g[0], e = this.g[1], f = d.clientX - e.clientX, d = d.clientY - e.clientY, f = Math.sqrt(f * f + d * d);
        m(this.c) && (c = this.c / f);
        this.c = f;
        1 != c && (this.f = c);
        b = b.map;
        var f = b.P(), d = f.xa(), e = ig(b.b), g = nk(this.g);
        g[0] -= e.x;
        g[1] -= e.y;
        this.e = b.ka(g);
        b.render();
        bk(b, f, d * c, this.e)
    }

    function Yl(b) {
        if (2 > this.g.length) {
            b = b.map;
            var c = b.P();
            Ue(c, -1);
            var d = c.xa(), e = this.e, f = this.i, d = c.constrainResolution(d, 0, this.f - 1);
            bk(b, c, d, e, f);
            return !1
        }
        return !0
    }

    function Wl(b) {
        return 2 <= this.g.length ? (b = b.map, this.e = null, this.c = void 0, this.f = 1, this.o || Ue(b.P(), 1), b.render(), !0) : !1
    }

    Vl.prototype.nc = Fg;
    function Zl(b) {
        b = m(b) ? b : {};
        var c = new nf, d = new Vj(-.005, .05, 100);
        (m(b.altShiftDragRotate) ? b.altShiftDragRotate : 1) && c.push(new sk);
        (m(b.doubleClickZoom) ? b.doubleClickZoom : 1) && c.push(new ck({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.dragPan) ? b.dragPan : 1) && c.push(new ok({kinetic: d}));
        (m(b.pinchRotate) ? b.pinchRotate : 1) && c.push(new Rl);
        (m(b.pinchZoom) ? b.pinchZoom : 1) && c.push(new Vl({duration: b.zoomDuration}));
        if (m(b.keyboard) ? b.keyboard : 1)c.push(new Ll), c.push(new Nl({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.mouseWheelZoom) ? b.mouseWheelZoom : 1) && c.push(new Pl({duration: b.zoomDuration}));
        (m(b.shiftDragZoom) ? b.shiftDragZoom : 1) && c.push(new Kl);
        return c
    };
    function G(b) {
        var c = m(b) ? b : {};
        b = Db(c);
        delete b.layers;
        c = c.layers;
        oj.call(this, b);
        this.c = [];
        this.b = {};
        x(this, hd("layers"), this.Uj, !1, this);
        null != c ? ga(c) && (c = new nf(c.slice())) : c = new nf;
        this.yh(c)
    }

    w(G, oj);
    l = G.prototype;
    l.Md = function () {
        this.fb() && this.k()
    };
    l.Uj = function () {
        Sa(this.c, Wc);
        this.c.length = 0;
        var b = this.Ac();
        this.c.push(x(b, "add", this.Tj, !1, this), x(b, "remove", this.Vj, !1, this));
        pb(this.b, function (b) {
            Sa(b, Wc)
        });
        yb(this.b);
        var b = b.b, c, d, e;
        c = 0;
        for (d = b.length; c < d; c++)e = b[c], this.b[ma(e).toString()] = [x(e, "propertychange", this.Md, !1, this), x(e, "change", this.Md, !1, this)];
        this.k()
    };
    l.Tj = function (b) {
        b = b.element;
        var c = ma(b).toString();
        this.b[c] = [x(b, "propertychange", this.Md, !1, this), x(b, "change", this.Md, !1, this)];
        this.k()
    };
    l.Vj = function (b) {
        b = ma(b.element).toString();
        Sa(this.b[b], Wc);
        delete this.b[b];
        this.k()
    };
    l.Ac = function () {
        return this.get("layers")
    };
    l.yh = function (b) {
        this.set("layers", b)
    };
    l.Qe = function (b) {
        var c = m(b) ? b : [], d = c.length;
        this.Ac().forEach(function (b) {
            b.Qe(c)
        });
        b = pj(this);
        var e, f;
        for (e = c.length; d < e; d++)f = c[d], f.brightness = Vb(f.brightness + b.brightness, -1, 1), f.contrast *= b.contrast, f.hue += b.hue, f.opacity *= b.opacity, f.saturation *= b.saturation, f.visible = f.visible && b.visible, f.maxResolution = Math.min(f.maxResolution, b.maxResolution), f.minResolution = Math.max(f.minResolution, b.minResolution), m(b.extent) && (f.extent = m(f.extent) ? ge(f.extent, b.extent) : b.extent);
        return c
    };
    l.Ue = function () {
        return "ready"
    };
    function $l(b) {
        pe.call(this, {code: b, units: "m", extent: am, global: !0, worldExtent: bm})
    }

    w($l, pe);
    $l.prototype.getPointResolution = function (b, c) {
        var d = c[1] / 6378137;
        return b / ((Math.exp(d) + Math.exp(-d)) / 2)
    };
    var cm = 6378137 * Math.PI, am = [-cm, -cm, cm, cm], bm = [-180, -85, 180, 85], Be = Ua("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "), function (b) {
        return new $l(b)
    });

    function Ce(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 6378137 * Math.PI * b[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (b[f + 1] + 90) / 360));
        return c
    }

    function De(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d)c[f] = 180 * b[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(b[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };
    function dm(b, c) {
        pe.call(this, {code: b, units: "degrees", extent: em, axisOrientation: c, global: !0, worldExtent: em})
    }

    w(dm, pe);
    dm.prototype.getPointResolution = function (b) {
        return b
    };
    var em = [-180, -90, 180, 90], Ee = [new dm("CRS:84"), new dm("EPSG:4326", "neu"), new dm("urn:ogc:def:crs:EPSG::4326", "neu"), new dm("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new dm("urn:ogc:def:crs:OGC:1.3:CRS84"), new dm("urn:ogc:def:crs:OGC:2:84"), new dm("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new dm("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function fm() {
        se(Be);
        se(Ee);
        Ae()
    };
    function I(b) {
        D.call(this, m(b) ? b : {})
    }

    w(I, D);
    function L(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.preload;
        delete c.useInterimTilesOnError;
        D.call(this, c);
        this.d(m(b.preload) ? b.preload : 0);
        this.e(m(b.useInterimTilesOnError) ? b.useInterimTilesOnError : !0)
    }

    w(L, D);
    L.prototype.b = function () {
        return this.get("preload")
    };
    L.prototype.d = function (b) {
        this.set("preload", b)
    };
    L.prototype.c = function () {
        return this.get("useInterimTilesOnError")
    };
    L.prototype.e = function (b) {
        this.set("useInterimTilesOnError", b)
    };
    function M(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.style;
        delete c.renderBuffer;
        delete c.updateWhileAnimating;
        delete c.updateWhileInteracting;
        D.call(this, c);
        this.c = m(b.renderBuffer) ? b.renderBuffer : 100;
        this.f = null;
        this.b = void 0;
        this.e(b.style);
        this.o = m(b.updateWhileAnimating) ? b.updateWhileAnimating : !1;
        this.l = m(b.updateWhileInteracting) ? b.updateWhileInteracting : !1
    }

    w(M, D);
    M.prototype.J = function () {
        return this.f
    };
    M.prototype.H = function () {
        return this.b
    };
    M.prototype.e = function (b) {
        this.f = m(b) ? b : Il;
        this.b = null === b ? void 0 : Hl(this.f);
        this.k()
    };
    function gm(b, c, d, e, f) {
        this.l = {};
        this.c = b;
        this.W = c;
        this.e = d;
        this.J = e;
        this.Mc = f;
        this.g = this.a = this.b = this.Ea = this.ma = this.aa = null;
        this.Ga = this.Fa = this.o = this.R = this.K = this.H = 0;
        this.Ra = !1;
        this.f = this.jb = 0;
        this.kb = !1;
        this.T = 0;
        this.d = "";
        this.q = this.V = this.mb = this.lb = 0;
        this.U = this.n = this.i = null;
        this.p = [];
        this.sd = zd()
    }

    function hm(b, c, d) {
        if (null !== b.g) {
            c = xk(c, 0, d, 2, b.J, b.p);
            d = b.c;
            var e = b.sd, f = d.globalAlpha;
            1 != b.o && (d.globalAlpha = f * b.o);
            var g = b.jb;
            b.Ra && (g += b.Mc);
            var h, k;
            h = 0;
            for (k = c.length; h < k; h += 2) {
                var n = c[h] - b.H, p = c[h + 1] - b.K;
                b.kb && (n = n + .5 | 0, p = p + .5 | 0);
                if (0 !== g || 1 != b.f) {
                    var q = n + b.H, r = p + b.K;
                    tj(e, q, r, b.f, b.f, g, -q, -r);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(b.g, b.Fa, b.Ga, b.T, b.R, n, p, b.T, b.R)
            }
            0 === g && 1 == b.f || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != b.o && (d.globalAlpha = f)
        }
    }

    function im(b, c, d, e) {
        var f = 0;
        if (null !== b.U && "" !== b.d) {
            null === b.i || jm(b, b.i);
            null === b.n || km(b, b.n);
            var g = b.U, h = b.c, k = b.Ea;
            null === k ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, b.Ea = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            }) : (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline));
            c = xk(c, f, d, e, b.J, b.p);
            for (g = b.c; f < d; f += e) {
                h = c[f] +
                    b.lb;
                k = c[f + 1] + b.mb;
                if (0 !== b.V || 1 != b.q) {
                    var n = tj(b.sd, h, k, b.q, b.q, b.V, -h, -k);
                    g.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                }
                null === b.n || g.strokeText(b.d, h, k);
                null === b.i || g.fillText(b.d, h, k)
            }
            0 === b.V && 1 == b.q || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }

    function lm(b, c, d, e, f, g) {
        var h = b.c;
        b = xk(c, d, e, f, b.J, b.p);
        h.moveTo(b[0], b[1]);
        for (c = 2; c < b.length; c += 2)h.lineTo(b[c], b[c + 1]);
        g && h.lineTo(b[0], b[1]);
        return e
    }

    function mm(b, c, d, e, f) {
        var g = b.c, h, k;
        h = 0;
        for (k = e.length; h < k; ++h)d = lm(b, c, d, e[h], f, !0), g.closePath();
        return d
    }

    l = gm.prototype;
    l.rc = function (b, c) {
        var d = b.toString(), e = this.l[d];
        m(e) ? e.push(c) : this.l[d] = [c]
    };
    l.sc = function (b) {
        if (he(this.e, b.G())) {
            if (null !== this.b || null !== this.a) {
                null === this.b || jm(this, this.b);
                null === this.a || km(this, this.a);
                var c;
                c = b.j;
                c = null === c ? null : xk(c, 0, c.length, b.s, this.J, this.p);
                var d = c[2] - c[0], e = c[3] - c[1], d = Math.sqrt(d * d + e * e), e = this.c;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                null === this.b || e.fill();
                null === this.a || e.stroke()
            }
            "" !== this.d && im(this, b.cd(), 2, 2)
        }
    };
    l.He = function (b, c) {
        var d = (0, c.e)(b);
        if (null != d && he(this.e, d.G())) {
            var e = c.a;
            m(e) || (e = 0);
            this.rc(e, function (b) {
                b.za(c.d, c.c);
                b.$a(c.g);
                b.Aa(c.b);
                nm[d.L()].call(b, d, null)
            })
        }
    };
    l.zd = function (b, c) {
        var d = b.d, e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e];
            nm[g.L()].call(this, g, c)
        }
    };
    l.pb = function (b) {
        var c = b.j;
        b = b.s;
        null === this.g || hm(this, c, c.length);
        "" !== this.d && im(this, c, c.length, b)
    };
    l.ob = function (b) {
        var c = b.j;
        b = b.s;
        null === this.g || hm(this, c, c.length);
        "" !== this.d && im(this, c, c.length, b)
    };
    l.Ab = function (b) {
        if (he(this.e, b.G())) {
            if (null !== this.a) {
                km(this, this.a);
                var c = this.c, d = b.j;
                c.beginPath();
                lm(this, d, 0, d.length, b.s, !1);
                c.stroke()
            }
            "" !== this.d && (b = om(b), im(this, b, 2, 2))
        }
    };
    l.tc = function (b) {
        var c = b.G();
        if (he(this.e, c)) {
            if (null !== this.a) {
                km(this, this.a);
                var c = this.c, d = b.j, e = 0, f = b.c, g = b.s;
                c.beginPath();
                var h, k;
                h = 0;
                for (k = f.length; h < k; ++h)e = lm(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.d && (b = pm(b), im(this, b, b.length, 2))
        }
    };
    l.Qb = function (b) {
        if (he(this.e, b.G())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || jm(this, this.b);
                null === this.a || km(this, this.a);
                var c = this.c;
                c.beginPath();
                mm(this, gl(b), 0, b.c, b.s);
                null === this.b || c.fill();
                null === this.a || c.stroke()
            }
            "" !== this.d && (b = hl(b), im(this, b, 2, 2))
        }
    };
    l.uc = function (b) {
        if (he(this.e, b.G())) {
            if (null !== this.a || null !== this.b) {
                null === this.b || jm(this, this.b);
                null === this.a || km(this, this.a);
                var c = this.c, d = qm(b), e = 0, f = b.c, g = b.s, h, k;
                h = 0;
                for (k = f.length; h < k; ++h) {
                    var n = f[h];
                    c.beginPath();
                    e = mm(this, d, e, n, g);
                    null === this.b || c.fill();
                    null === this.a || c.stroke()
                }
            }
            "" !== this.d && (b = rm(b), im(this, b, b.length, 2))
        }
    };
    function sm(b) {
        var c = Ua(tb(b.l), Number);
        gb(c);
        var d, e, f, g, h;
        d = 0;
        for (e = c.length; d < e; ++d)for (f = b.l[c[d].toString()], g = 0, h = f.length; g < h; ++g)f[g](b)
    }

    function jm(b, c) {
        var d = b.c, e = b.aa;
        null === e ? (d.fillStyle = c.fillStyle, b.aa = {fillStyle: c.fillStyle}) : e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle)
    }

    function km(b, c) {
        var d = b.c, e = b.ma;
        null === e ? (d.lineCap = c.lineCap, mi && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, b.ma = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        }) : (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), mi && !ib(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin =
            c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle))
    }

    l.za = function (b, c) {
        if (null === b)this.b = null; else {
            var d = b.a;
            this.b = {fillStyle: uf(null === d ? Al : d)}
        }
        if (null === c)this.a = null; else {
            var d = c.a, e = c.d, f = c.c, g = c.e, h = c.b, k = c.g;
            this.a = {
                lineCap: m(e) ? e : "round",
                lineDash: null != f ? f : Bl,
                lineJoin: m(g) ? g : "round",
                lineWidth: this.W * (m(h) ? h : 1),
                miterLimit: m(k) ? k : 10,
                strokeStyle: uf(null === d ? Cl : d)
            }
        }
    };
    l.$a = function (b) {
        if (null === b)this.g = null; else {
            var c = b.rb(), d = b.Lb(1), e = b.wb(), f = b.Ya();
            this.H = c[0];
            this.K = c[1];
            this.R = f[1];
            this.g = d;
            this.o = b.l;
            this.Fa = e[0];
            this.Ga = e[1];
            this.Ra = b.p;
            this.jb = b.q;
            this.f = b.n;
            this.kb = b.W;
            this.T = f[0]
        }
    };
    l.Aa = function (b) {
        if (null === b)this.d = ""; else {
            var c = b.a;
            null === c ? this.i = null : (c = c.a, this.i = {fillStyle: uf(null === c ? Al : c)});
            var d = b.g;
            if (null === d)this.n = null; else {
                var c = d.a, e = d.d, f = d.c, g = d.e, h = d.b, d = d.g;
                this.n = {
                    lineCap: m(e) ? e : "round",
                    lineDash: null != f ? f : Bl,
                    lineJoin: m(g) ? g : "round",
                    lineWidth: m(h) ? h : 1,
                    miterLimit: m(d) ? d : 10,
                    strokeStyle: uf(null === c ? Cl : c)
                }
            }
            var c = b.d, e = b.q, f = b.n, g = b.e, h = b.b, d = b.c, k = b.f;
            b = b.i;
            this.U = {
                font: m(c) ? c : "10px sans-serif",
                textAlign: m(k) ? k : "center",
                textBaseline: m(b) ? b : "middle"
            };
            this.d = m(d) ?
                d : "";
            this.lb = m(e) ? this.W * e : 0;
            this.mb = m(f) ? this.W * f : 0;
            this.V = m(g) ? g : 0;
            this.q = this.W * (m(h) ? h : 1)
        }
    };
    var nm = {
        Point: gm.prototype.pb,
        LineString: gm.prototype.Ab,
        Polygon: gm.prototype.Qb,
        MultiPoint: gm.prototype.ob,
        MultiLineString: gm.prototype.tc,
        MultiPolygon: gm.prototype.uc,
        GeometryCollection: gm.prototype.zd,
        Circle: gm.prototype.sc
    };
    var tm = ["Polygon", "LineString", "Image", "Text"];

    function um(b, c, d) {
        this.Ea = b;
        this.T = c;
        this.d = null;
        this.e = 0;
        this.resolution = d;
        this.K = this.H = null;
        this.b = [];
        this.coordinates = [];
        this.aa = zd();
        this.a = [];
        this.U = [];
        this.ma = zd()
    }

    w(um, ll);
    function wm(b, c, d, e, f, g) {
        var h = b.coordinates.length, k = b.Le(), n = [c[d], c[d + 1]], p = [NaN, NaN], q = !0, r, t, u;
        for (r = d + f; r < e; r += f)p[0] = c[r], p[1] = c[r + 1], u = Ud(k, p), u !== t ? (q && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]), b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : 1 === u ? (b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : q = !0, n[0] = p[0], n[1] = p[1], t = u;
        r === d + f && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]);
        g && (b.coordinates[h++] = c[d], b.coordinates[h++] = c[d + 1]);
        return h
    }

    function xm(b, c) {
        b.H = [0, c, 0];
        b.b.push(b.H);
        b.K = [0, c, 0];
        b.a.push(b.K)
    }

    function ym(b, c, d, e, f, g, h, k, n) {
        var p;
        uj(e, b.aa) ? p = b.U : (p = xk(b.coordinates, 0, b.coordinates.length, 2, e, b.U), Cd(b.aa, e));
        e = 0;
        var q = h.length, r = 0, t;
        for (b = b.ma; e < q;) {
            var u = h[e], A, z, C, B;
            switch (u[0]) {
                case 0:
                    r = u[1];
                    t = ma(r).toString();
                    m(g[t]) ? e = u[2] : m(n) && !he(n, r.Q().G()) ? e = u[2] : ++e;
                    break;
                case 1:
                    c.beginPath();
                    ++e;
                    break;
                case 2:
                    r = u[1];
                    t = p[r];
                    var y = p[r + 1], K = p[r + 2] - t, r = p[r + 3] - y;
                    c.arc(t, y, Math.sqrt(K * K + r * r), 0, 2 * Math.PI, !0);
                    ++e;
                    break;
                case 3:
                    c.closePath();
                    ++e;
                    break;
                case 4:
                    r = u[1];
                    t = u[2];
                    A = u[3];
                    C = u[4] * d;
                    var J = u[5] *
                        d, H = u[6];
                    z = u[7];
                    var Q = u[8], sa = u[9], y = u[11], K = u[12], Oa = u[13], O = u[14];
                    for (u[10] && (y += f); r < t; r += 2) {
                        u = p[r] - C;
                        B = p[r + 1] - J;
                        Oa && (u = u + .5 | 0, B = B + .5 | 0);
                        if (1 != K || 0 !== y) {
                            var za = u + C, bb = B + J;
                            tj(b, za, bb, K, K, y, -za, -bb);
                            c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13])
                        }
                        za = c.globalAlpha;
                        1 != z && (c.globalAlpha = za * z);
                        c.drawImage(A, Q, sa, O, H, u, B, O * d, H * d);
                        1 != z && (c.globalAlpha = za);
                        1 == K && 0 === y || c.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++e;
                    break;
                case 5:
                    r = u[1];
                    t = u[2];
                    C = u[3];
                    J = u[4] * d;
                    H = u[5] * d;
                    y = u[6];
                    K = u[7] * d;
                    A = u[8];
                    for (z = u[9]; r < t; r += 2) {
                        u = p[r] +
                            J;
                        B = p[r + 1] + H;
                        if (1 != K || 0 !== y)tj(b, u, B, K, K, y, -u, -B), c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13]);
                        z && c.strokeText(C, u, B);
                        A && c.fillText(C, u, B);
                        1 == K && 0 === y || c.setTransform(1, 0, 0, 1, 0, 0)
                    }
                    ++e;
                    break;
                case 6:
                    if (m(k) && (r = u[1], r = k(r)))return r;
                    ++e;
                    break;
                case 7:
                    c.fill();
                    ++e;
                    break;
                case 8:
                    r = u[1];
                    t = u[2];
                    c.moveTo(p[r], p[r + 1]);
                    for (r += 2; r < t; r += 2)c.lineTo(p[r], p[r + 1]);
                    ++e;
                    break;
                case 9:
                    c.fillStyle = u[1];
                    ++e;
                    break;
                case 10:
                    r = m(u[7]) ? u[7] : !0;
                    t = u[2];
                    c.strokeStyle = u[1];
                    c.lineWidth = r ? t * d : t;
                    c.lineCap = u[3];
                    c.lineJoin = u[4];
                    c.miterLimit =
                        u[5];
                    mi && c.setLineDash(u[6]);
                    ++e;
                    break;
                case 11:
                    c.font = u[1];
                    c.textAlign = u[2];
                    c.textBaseline = u[3];
                    ++e;
                    break;
                case 12:
                    c.stroke();
                    ++e;
                    break;
                default:
                    ++e
            }
        }
    }

    function zm(b) {
        var c = b.a;
        c.reverse();
        var d, e = c.length, f, g, h = -1;
        for (d = 0; d < e; ++d)if (f = c[d], g = f[0], 6 == g)h = d; else if (0 == g) {
            f[2] = d;
            f = b.a;
            for (g = d; h < g;) {
                var k = f[h];
                f[h] = f[g];
                f[g] = k;
                ++h;
                --g
            }
            h = -1
        }
    }

    function Am(b, c) {
        b.H[2] = b.b.length;
        b.H = null;
        b.K[2] = b.a.length;
        b.K = null;
        var d = [6, c];
        b.b.push(d);
        b.a.push(d)
    }

    um.prototype.$d = ca;
    um.prototype.Le = function () {
        return this.T
    };
    function Bm(b, c, d) {
        um.call(this, b, c, d);
        this.i = this.R = null;
        this.J = this.V = this.W = this.p = this.l = this.o = this.n = this.q = this.f = this.g = this.c = void 0
    }

    w(Bm, um);
    Bm.prototype.pb = function (b, c) {
        if (null !== this.i) {
            xm(this, c);
            var d = b.j, e = this.coordinates.length, d = wm(this, d, 0, d.length, b.s, !1);
            this.b.push([4, e, d, this.i, this.c, this.g, this.f, this.q, this.n, this.o, this.l, this.p, this.W, this.V, this.J]);
            this.a.push([4, e, d, this.R, this.c, this.g, this.f, this.q, this.n, this.o, this.l, this.p, this.W, this.V, this.J]);
            Am(this, c)
        }
    };
    Bm.prototype.ob = function (b, c) {
        if (null !== this.i) {
            xm(this, c);
            var d = b.j, e = this.coordinates.length, d = wm(this, d, 0, d.length, b.s, !1);
            this.b.push([4, e, d, this.i, this.c, this.g, this.f, this.q, this.n, this.o, this.l, this.p, this.W, this.V, this.J]);
            this.a.push([4, e, d, this.R, this.c, this.g, this.f, this.q, this.n, this.o, this.l, this.p, this.W, this.V, this.J]);
            Am(this, c)
        }
    };
    Bm.prototype.$d = function () {
        zm(this);
        this.g = this.c = void 0;
        this.i = this.R = null;
        this.J = this.V = this.p = this.l = this.o = this.n = this.q = this.W = this.f = void 0
    };
    Bm.prototype.$a = function (b) {
        var c = b.rb(), d = b.Ya(), e = b.de(1), f = b.Lb(1), g = b.wb();
        this.c = c[0];
        this.g = c[1];
        this.R = e;
        this.i = f;
        this.f = d[1];
        this.q = b.l;
        this.n = g[0];
        this.o = g[1];
        this.l = b.p;
        this.p = b.q;
        this.W = b.n;
        this.V = b.W;
        this.J = d[0]
    };
    function Cm(b, c, d) {
        um.call(this, b, c, d);
        this.c = {
            Wc: void 0,
            Rc: void 0,
            Sc: null,
            Tc: void 0,
            Uc: void 0,
            Vc: void 0,
            Xe: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    w(Cm, um);
    function Dm(b, c, d, e, f) {
        var g = b.coordinates.length;
        c = wm(b, c, d, e, f, !1);
        g = [8, g, c];
        b.b.push(g);
        b.a.push(g);
        return e
    }

    l = Cm.prototype;
    l.Le = function () {
        null === this.d && (this.d = Pd(this.T), 0 < this.e && Od(this.d, this.resolution * (this.e + 1) / 2, this.d));
        return this.d
    };
    function Em(b) {
        var c = b.c, d = c.strokeStyle, e = c.lineCap, f = c.lineDash, g = c.lineJoin, h = c.lineWidth, k = c.miterLimit;
        c.Wc == d && c.Rc == e && ib(c.Sc, f) && c.Tc == g && c.Uc == h && c.Vc == k || (c.Xe != b.coordinates.length && (b.b.push([12]), c.Xe = b.coordinates.length), b.b.push([10, d, h, e, g, k, f], [1]), c.Wc = d, c.Rc = e, c.Sc = f, c.Tc = g, c.Uc = h, c.Vc = k)
    }

    l.Ab = function (b, c) {
        var d = this.c, e = d.lineWidth;
        m(d.strokeStyle) && m(e) && (Em(this), xm(this, c), this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = b.j, Dm(this, d, 0, d.length, b.s), this.a.push([12]), Am(this, c))
    };
    l.tc = function (b, c) {
        var d = this.c, e = d.lineWidth;
        if (m(d.strokeStyle) && m(e)) {
            Em(this);
            xm(this, c);
            this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = b.c, e = b.j, f = b.s, g = 0, h, k;
            h = 0;
            for (k = d.length; h < k; ++h)g = Dm(this, e, g, d[h], f);
            this.a.push([12]);
            Am(this, c)
        }
    };
    l.$d = function () {
        this.c.Xe != this.coordinates.length && this.b.push([12]);
        zm(this);
        this.c = null
    };
    l.za = function (b, c) {
        var d = c.a;
        this.c.strokeStyle = uf(null === d ? Cl : d);
        d = c.d;
        this.c.lineCap = m(d) ? d : "round";
        d = c.c;
        this.c.lineDash = null === d ? Bl : d;
        d = c.e;
        this.c.lineJoin = m(d) ? d : "round";
        d = c.b;
        this.c.lineWidth = m(d) ? d : 1;
        d = c.g;
        this.c.miterLimit = m(d) ? d : 10;
        this.c.lineWidth > this.e && (this.e = this.c.lineWidth, this.d = null)
    };
    function Fm(b, c, d) {
        um.call(this, b, c, d);
        this.c = {
            Nf: void 0,
            Wc: void 0,
            Rc: void 0,
            Sc: null,
            Tc: void 0,
            Uc: void 0,
            Vc: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }

    w(Fm, um);
    function Gm(b, c, d, e, f) {
        var g = b.c, h = [1];
        b.b.push(h);
        b.a.push(h);
        var k, h = 0;
        for (k = e.length; h < k; ++h) {
            var n = e[h], p = b.coordinates.length;
            d = wm(b, c, d, n, f, !0);
            d = [8, p, d];
            p = [3];
            b.b.push(d, p);
            b.a.push(d, p);
            d = n
        }
        c = [7];
        b.a.push(c);
        m(g.fillStyle) && b.b.push(c);
        m(g.strokeStyle) && (g = [12], b.b.push(g), b.a.push(g));
        return d
    }

    l = Fm.prototype;
    l.sc = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Hm(this);
            xm(this, c);
            this.a.push([9, uf(Al)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = b.j, e = this.coordinates.length;
            wm(this, f, 0, f.length, b.s, !1);
            f = [1];
            e = [2, e];
            this.b.push(f, e);
            this.a.push(f, e);
            e = [7];
            this.a.push(e);
            m(d.fillStyle) && this.b.push(e);
            m(d.strokeStyle) && (d = [12], this.b.push(d), this.a.push(d));
            Am(this, c)
        }
    };
    l.Qb = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e))Hm(this), xm(this, c), this.a.push([9, uf(Al)]), m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = b.c, e = gl(b), Gm(this, e, 0, d, b.s), Am(this, c)
    };
    l.uc = function (b, c) {
        var d = this.c, e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Hm(this);
            xm(this, c);
            this.a.push([9, uf(Al)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = b.c, e = qm(b), f = b.s, g = 0, h, k;
            h = 0;
            for (k = d.length; h < k; ++h)g = Gm(this, e, g, d[h], f);
            Am(this, c)
        }
    };
    l.$d = function () {
        zm(this);
        this.c = null;
        var b = this.Ea;
        if (0 !== b) {
            var c = this.coordinates, d, e;
            d = 0;
            for (e = c.length; d < e; ++d)c[d] = b * Math.round(c[d] / b)
        }
    };
    l.Le = function () {
        null === this.d && (this.d = Pd(this.T), 0 < this.e && Od(this.d, this.resolution * (this.e + 1) / 2, this.d));
        return this.d
    };
    l.za = function (b, c) {
        var d = this.c;
        if (null === b)d.fillStyle = void 0; else {
            var e = b.a;
            d.fillStyle = uf(null === e ? Al : e)
        }
        null === c ? (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0) : (e = c.a, d.strokeStyle = uf(null === e ? Cl : e), e = c.d, d.lineCap = m(e) ? e : "round", e = c.c, d.lineDash = null === e ? Bl : e.slice(), e = c.e, d.lineJoin = m(e) ? e : "round", e = c.b, d.lineWidth = m(e) ? e : 1, e = c.g, d.miterLimit = m(e) ? e : 10, d.lineWidth > this.e && (this.e = d.lineWidth, this.d = null))
    };
    function Hm(b) {
        var c = b.c, d = c.fillStyle, e = c.strokeStyle, f = c.lineCap, g = c.lineDash, h = c.lineJoin, k = c.lineWidth, n = c.miterLimit;
        m(d) && c.Nf != d && (b.b.push([9, d]), c.Nf = c.fillStyle);
        !m(e) || c.Wc == e && c.Rc == f && c.Sc == g && c.Tc == h && c.Uc == k && c.Vc == n || (b.b.push([10, e, k, f, h, n, g]), c.Wc = e, c.Rc = f, c.Sc = g, c.Tc = h, c.Uc = k, c.Vc = n)
    }

    function Im(b, c, d) {
        um.call(this, b, c, d);
        this.V = this.W = this.p = null;
        this.i = "";
        this.l = this.o = this.n = this.q = 0;
        this.f = this.g = this.c = null
    }

    w(Im, um);
    Im.prototype.qb = function (b, c, d, e, f, g) {
        if ("" !== this.i && null !== this.f && (null !== this.c || null !== this.g)) {
            if (null !== this.c) {
                f = this.c;
                var h = this.p;
                if (null === h || h.fillStyle != f.fillStyle) {
                    var k = [9, f.fillStyle];
                    this.b.push(k);
                    this.a.push(k);
                    null === h ? this.p = {fillStyle: f.fillStyle} : h.fillStyle = f.fillStyle
                }
            }
            null !== this.g && (f = this.g, h = this.W, null === h || h.lineCap != f.lineCap || h.lineDash != f.lineDash || h.lineJoin != f.lineJoin || h.lineWidth != f.lineWidth || h.miterLimit != f.miterLimit || h.strokeStyle != f.strokeStyle) && (k = [10,
                f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], this.b.push(k), this.a.push(k), null === h ? this.W = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            } : (h.lineCap = f.lineCap, h.lineDash = f.lineDash, h.lineJoin = f.lineJoin, h.lineWidth = f.lineWidth, h.miterLimit = f.miterLimit, h.strokeStyle = f.strokeStyle));
            f = this.f;
            h = this.V;
            if (null === h || h.font != f.font || h.textAlign != f.textAlign || h.textBaseline != f.textBaseline)k =
                [11, f.font, f.textAlign, f.textBaseline], this.b.push(k), this.a.push(k), null === h ? this.V = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            } : (h.font = f.font, h.textAlign = f.textAlign, h.textBaseline = f.textBaseline);
            xm(this, g);
            f = this.coordinates.length;
            b = wm(this, b, c, d, e, !1);
            b = [5, f, b, this.i, this.q, this.n, this.o, this.l, null !== this.c, null !== this.g];
            this.b.push(b);
            this.a.push(b);
            Am(this, g)
        }
    };
    Im.prototype.Aa = function (b) {
        if (null === b)this.i = ""; else {
            var c = b.a;
            null === c ? this.c = null : (c = c.a, c = uf(null === c ? Al : c), null === this.c ? this.c = {fillStyle: c} : this.c.fillStyle = c);
            var d = b.g;
            if (null === d)this.g = null; else {
                var c = d.a, e = d.d, f = d.c, g = d.e, h = d.b, d = d.g, e = m(e) ? e : "round", f = null != f ? f.slice() : Bl, g = m(g) ? g : "round", h = m(h) ? h : 1, d = m(d) ? d : 10, c = uf(null === c ? Cl : c);
                if (null === this.g)this.g = {
                    lineCap: e,
                    lineDash: f,
                    lineJoin: g,
                    lineWidth: h,
                    miterLimit: d,
                    strokeStyle: c
                }; else {
                    var k = this.g;
                    k.lineCap = e;
                    k.lineDash = f;
                    k.lineJoin = g;
                    k.lineWidth =
                        h;
                    k.miterLimit = d;
                    k.strokeStyle = c
                }
            }
            var n = b.d, c = b.q, e = b.n, f = b.e, h = b.b, d = b.c, g = b.f, k = b.i;
            b = m(n) ? n : "10px sans-serif";
            g = m(g) ? g : "center";
            k = m(k) ? k : "middle";
            null === this.f ? this.f = {
                font: b,
                textAlign: g,
                textBaseline: k
            } : (n = this.f, n.font = b, n.textAlign = g, n.textBaseline = k);
            this.i = m(d) ? d : "";
            this.q = m(c) ? c : 0;
            this.n = m(e) ? e : 0;
            this.o = m(f) ? f : 0;
            this.l = m(h) ? h : 1
        }
    };
    function Jm(b, c, d, e) {
        this.q = b;
        this.d = c;
        this.i = d;
        this.e = e;
        this.b = {};
        this.g = di(1, 1);
        this.f = zd()
    }

    function Km(b) {
        for (var c in b.b) {
            var d = b.b[c], e;
            for (e in d)d[e].$d()
        }
    }

    Jm.prototype.c = function (b, c, d, e, f) {
        var g = this.f;
        tj(g, .5, .5, 1 / c, -1 / c, -d, -b[0], -b[1]);
        var h = this.g;
        h.clearRect(0, 0, 1, 1);
        var k;
        m(this.e) && (k = Kd(), Ld(k, b), Od(k, c * this.e, k));
        return Lm(this, h, g, d, e, function (b) {
            if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
                if (b = f(b))return b;
                h.clearRect(0, 0, 1, 1)
            }
        }, k)
    };
    Jm.prototype.a = function (b, c) {
        var d = m(b) ? b.toString() : "0", e = this.b[d];
        m(e) || (e = {}, this.b[d] = e);
        d = e[c];
        m(d) || (d = new Mm[c](this.q, this.d, this.i), e[c] = d);
        return d
    };
    Jm.prototype.la = function () {
        return xb(this.b)
    };
    function Nm(b, c, d, e, f, g) {
        var h = Ua(tb(b.b), Number);
        gb(h);
        var k = b.d, n = k[0], p = k[1], q = k[2], k = k[3], n = [n, p, n, k, q, k, q, p];
        xk(n, 0, 8, 2, e, n);
        c.save();
        c.beginPath();
        c.moveTo(n[0], n[1]);
        c.lineTo(n[2], n[3]);
        c.lineTo(n[4], n[5]);
        c.lineTo(n[6], n[7]);
        c.closePath();
        c.clip();
        for (var r, t, n = 0, p = h.length; n < p; ++n)for (r = b.b[h[n].toString()], q = 0, k = tm.length; q < k; ++q)t = r[tm[q]], m(t) && ym(t, c, d, e, f, g, t.b, void 0);
        c.restore()
    }

    function Lm(b, c, d, e, f, g, h) {
        var k = Ua(tb(b.b), Number);
        gb(k, function (b, c) {
            return c - b
        });
        var n, p, q, r, t;
        n = 0;
        for (p = k.length; n < p; ++n)for (r = b.b[k[n].toString()], q = tm.length - 1; 0 <= q; --q)if (t = r[tm[q]], m(t) && (t = ym(t, c, 1, d, e, f, t.a, g, h)))return t
    }

    var Mm = {Image: Bm, LineString: Cm, Polygon: Fm, Text: Im};

    function Om(b) {
        wj.call(this, b);
        this.H = zd()
    }

    w(Om, wj);
    Om.prototype.o = function (b, c, d) {
        Pm(this, "precompose", d, b, void 0);
        var e = this.be();
        if (null !== e) {
            var f = c.extent, g = m(f);
            if (g) {
                var h = b.pixelRatio, k = ce(f), n = be(f), p = ae(f), f = $d(f);
                vj(b.coordinateToPixelMatrix, k, k);
                vj(b.coordinateToPixelMatrix, n, n);
                vj(b.coordinateToPixelMatrix, p, p);
                vj(b.coordinateToPixelMatrix, f, f);
                d.save();
                d.beginPath();
                d.moveTo(k[0] * h, k[1] * h);
                d.lineTo(n[0] * h, n[1] * h);
                d.lineTo(p[0] * h, p[1] * h);
                d.lineTo(f[0] * h, f[1] * h);
                d.clip()
            }
            h = this.Yf();
            k = d.globalAlpha;
            d.globalAlpha = c.opacity;
            0 === b.viewState.rotation ?
                (c = h[13], n = e.width * h[0], p = e.height * h[5], d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(c), Math.round(n), Math.round(p))) : (d.setTransform(h[0], h[1], h[4], h[5], h[12], h[13]), d.drawImage(e, 0, 0), d.setTransform(1, 0, 0, 1, 0, 0));
            d.globalAlpha = k;
            g && d.restore()
        }
        Pm(this, "postcompose", d, b, void 0)
    };
    function Pm(b, c, d, e, f) {
        var g = b.b;
        bd(g, c) && (b = m(f) ? f : Qm(b, e, 0), b = new gm(d, e.pixelRatio, e.extent, b, e.viewState.rotation), g.dispatchEvent(new ml(c, g, b, null, e, d, null)), sm(b))
    }

    function Qm(b, c, d) {
        var e = c.viewState, f = c.pixelRatio;
        return tj(b.H, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1])
    }

    function Rm(b, c) {
        var d = [0, 0];
        vj(c, b, d);
        return d
    }

    var Sm = function () {
        var b = null, c = null;
        return function (d) {
            if (null === b) {
                b = di(1, 1);
                c = b.createImageData(1, 1);
                var e = c.data;
                e[0] = 42;
                e[1] = 84;
                e[2] = 126;
                e[3] = 255
            }
            var e = b.canvas, f = d[0] <= e.width && d[1] <= e.height;
            f || (e.width = d[0], e.height = d[1], e = d[0] - 1, d = d[1] - 1, b.putImageData(c, e, d), d = b.getImageData(e, d, 1, 1), f = ib(c.data, d.data));
            return f
        }
    }();

    function Tm(b, c, d) {
        yk.call(this);
        this.uf(b, m(c) ? c : 0, d)
    }

    w(Tm, yk);
    l = Tm.prototype;
    l.clone = function () {
        var b = new Tm(null);
        Ak(b, this.b, this.j.slice());
        b.k();
        return b
    };
    l.Sa = function (b, c, d, e) {
        var f = this.j;
        b -= f[0];
        var g = c - f[1];
        c = b * b + g * g;
        if (c < e) {
            if (0 === c)for (e = 0; e < this.s; ++e)d[e] = f[e]; else for (e = this.cf() / Math.sqrt(c), d[0] = f[0] + e * b, d[1] = f[1] + e * g, e = 2; e < this.s; ++e)d[e] = f[e];
            d.length = this.s;
            return c
        }
        return e
    };
    l.$b = function (b, c) {
        var d = this.j, e = b - d[0], d = c - d[1];
        return e * e + d * d <= Um(this)
    };
    l.cd = function () {
        return this.j.slice(0, this.s)
    };
    l.wd = function (b) {
        var c = this.j, d = c[this.s] - c[0];
        return Nd(c[0] - d, c[1] - d, c[0] + d, c[1] + d, b)
    };
    l.cf = function () {
        return Math.sqrt(Um(this))
    };
    function Um(b) {
        var c = b.j[b.s] - b.j[0];
        b = b.j[b.s + 1] - b.j[1];
        return c * c + b * b
    }

    l.L = function () {
        return "Circle"
    };
    l.na = function (b) {
        var c = this.G();
        return he(b, c) ? (c = this.cd(), b[0] <= c[0] && b[2] >= c[0] || b[1] <= c[1] && b[3] >= c[1] ? !0 : Zd(b, this.Fe, this)) : !1
    };
    l.pl = function (b) {
        var c = this.s, d = b.slice();
        d[c] = d[0] + (this.j[c] - this.j[0]);
        var e;
        for (e = 1; e < c; ++e)d[c + e] = b[e];
        Ak(this, this.b, d);
        this.k()
    };
    l.uf = function (b, c, d) {
        if (null === b)Ak(this, "XY", null); else {
            Bk(this, d, b, 0);
            null === this.j && (this.j = []);
            d = this.j;
            b = Lk(d, b);
            d[b++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.s; c < e; ++c)d[b++] = d[c];
            d.length = b
        }
        this.k()
    };
    l.ql = function (b) {
        this.j[this.s] = this.j[0] + b;
        this.k()
    };
    function Vm(b) {
        wk.call(this);
        this.d = m(b) ? b : null;
        Wm(this)
    }

    w(Vm, wk);
    function Xm(b) {
        var c = [], d, e;
        d = 0;
        for (e = b.length; d < e; ++d)c.push(b[d].clone());
        return c
    }

    function Ym(b) {
        var c, d;
        if (null !== b.d)for (c = 0, d = b.d.length; c < d; ++c)Vc(b.d[c], "change", b.k, !1, b)
    }

    function Wm(b) {
        var c, d;
        if (null !== b.d)for (c = 0, d = b.d.length; c < d; ++c)x(b.d[c], "change", b.k, !1, b)
    }

    l = Vm.prototype;
    l.clone = function () {
        var b = new Vm(null);
        b.vh(this.d);
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        var f = this.d, g, h;
        g = 0;
        for (h = f.length; g < h; ++g)e = f[g].Sa(b, c, d, e);
        return e
    };
    l.$b = function (b, c) {
        var d = this.d, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)if (d[e].$b(b, c))return !0;
        return !1
    };
    l.wd = function (b) {
        Nd(Infinity, Infinity, -Infinity, -Infinity, b);
        for (var c = this.d, d = 0, e = c.length; d < e; ++d)Xd(b, c[d].G());
        return b
    };
    l.Wf = function () {
        return Xm(this.d)
    };
    l.Te = function (b) {
        this.i != this.a && (yb(this.e), this.g = 0, this.i = this.a);
        if (0 > b || 0 !== this.g && b < this.g)return this;
        var c = b.toString();
        if (this.e.hasOwnProperty(c))return this.e[c];
        var d = [], e = this.d, f = !1, g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var k = e[g], n = k.Te(b);
            d.push(n);
            n !== k && (f = !0)
        }
        if (f)return b = new Vm(null), Ym(b), b.d = d, Wm(b), b.k(), this.e[c] = b;
        this.g = b;
        return this
    };
    l.L = function () {
        return "GeometryCollection"
    };
    l.na = function (b) {
        var c = this.d, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)if (c[d].na(b))return !0;
        return !1
    };
    l.la = function () {
        return 0 == this.d.length
    };
    l.vh = function (b) {
        b = Xm(b);
        Ym(this);
        this.d = b;
        Wm(this);
        this.k()
    };
    l.qa = function (b) {
        var c = this.d, d, e;
        d = 0;
        for (e = c.length; d < e; ++d)c[d].qa(b);
        this.k()
    };
    l.Oa = function (b, c) {
        var d = this.d, e, f;
        e = 0;
        for (f = d.length; e < f; ++e)d[e].Oa(b, c);
        this.k()
    };
    l.N = function () {
        Ym(this);
        Vm.S.N.call(this)
    };
    function Zm(b, c, d, e, f) {
        var g = NaN, h = NaN, k = (d - c) / e;
        if (0 !== k)if (1 == k)g = b[c], h = b[c + 1]; else if (2 == k)g = .5 * b[c] + .5 * b[c + e], h = .5 * b[c + 1] + .5 * b[c + e + 1]; else {
            var h = b[c], k = b[c + 1], n = 0, g = [0], p;
            for (p = c + e; p < d; p += e) {
                var q = b[p], r = b[p + 1], n = n + Math.sqrt((q - h) * (q - h) + (r - k) * (r - k));
                g.push(n);
                h = q;
                k = r
            }
            d = .5 * n;
            for (var t, h = hb, k = 0, n = g.length; k < n;)p = k + n >> 1, q = h(d, g[p]), 0 < q ? k = p + 1 : (n = p, t = !q);
            t = t ? k : ~k;
            0 > t ? (d = (d - g[-t - 2]) / (g[-t - 1] - g[-t - 2]), c += (-t - 2) * e, g = Xb(b[c], b[c + e], d), h = Xb(b[c + 1], b[c + e + 1], d)) : (g = b[c + t * e], h = b[c + t * e + 1])
        }
        return null != f ?
            (f[0] = g, f[1] = h, f) : [g, h]
    }

    function $m(b, c, d, e, f, g) {
        if (d == c)return null;
        if (f < b[c + e - 1])return g ? (d = b.slice(c, c + e), d[e - 1] = f, d) : null;
        if (b[d - 1] < f)return g ? (d = b.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == b[c + e - 1])return b.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;)g = c + d >> 1, f < b[(g + 1) * e - 1] ? d = g : c = g + 1;
        d = b[c * e - 1];
        if (f == d)return b.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (b[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h)d.push(Xb(b[(c - 1) * e + h], b[c * e + h], g));
        d.push(f);
        return d
    }

    function an(b, c, d, e, f, g) {
        var h = 0;
        if (g)return $m(b, h, c[c.length - 1], d, e, f);
        if (e < b[d - 1])return f ? (b = b.slice(0, d), b[d - 1] = e, b) : null;
        if (b[b.length - 1] < e)return f ? (b = b.slice(b.length - d), b[d - 1] = e, b) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var k = c[f];
            if (h != k) {
                if (e < b[h + d - 1])break;
                if (e <= b[k - 1])return $m(b, h, k, d, e, !1);
                h = k
            }
        }
        return null
    };
    function N(b, c) {
        yk.call(this);
        this.c = null;
        this.l = this.p = this.f = -1;
        this.ba(b, c)
    }

    w(N, yk);
    l = N.prototype;
    l.vi = function (b) {
        null === this.j ? this.j = b.slice() : db(this.j, b);
        this.k()
    };
    l.clone = function () {
        var b = new N(null);
        bn(b, this.b, this.j.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        this.l != this.a && (this.p = Math.sqrt(Hk(this.j, 0, this.j.length, this.s, 0)), this.l = this.a);
        return Jk(this.j, 0, this.j.length, this.s, this.p, !1, b, c, d, e)
    };
    l.Ji = function (b, c) {
        return Zk(this.j, 0, this.j.length, this.s, b, c)
    };
    l.rl = function (b, c) {
        return "XYM" != this.b && "XYZM" != this.b ? null : $m(this.j, 0, this.j.length, this.s, b, m(c) ? c : !1)
    };
    l.M = function () {
        return Ok(this.j, 0, this.j.length, this.s)
    };
    l.sl = function () {
        var b = this.j, c = this.s, d = b[0], e = b[1], f = 0, g;
        for (g = 0 + c; g < this.j.length; g += c)var h = b[g], k = b[g + 1], f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)), d = h, e = k;
        return f
    };
    function om(b) {
        b.f != b.a && (b.c = Zm(b.j, 0, b.j.length, b.s, b.c), b.f = b.a);
        return b.c
    }

    l.vc = function (b) {
        var c = [];
        c.length = Qk(this.j, 0, this.j.length, this.s, b, c, 0);
        b = new N(null);
        bn(b, "XY", c);
        return b
    };
    l.L = function () {
        return "LineString"
    };
    l.na = function (b) {
        return $k(this.j, 0, this.j.length, this.s, b)
    };
    l.ba = function (b, c) {
        null === b ? bn(this, "XY", null) : (Bk(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Mk(this.j, 0, b, this.s), this.k())
    };
    function bn(b, c, d) {
        Ak(b, c, d);
        b.k()
    };
    function P(b, c) {
        yk.call(this);
        this.c = [];
        this.f = this.l = -1;
        this.ba(b, c)
    }

    w(P, yk);
    l = P.prototype;
    l.wi = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j.slice());
        this.c.push(this.j.length);
        this.k()
    };
    l.clone = function () {
        var b = new P(null);
        cn(b, this.b, this.j.slice(), this.c.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        this.f != this.a && (this.l = Math.sqrt(Ik(this.j, 0, this.c, this.s, 0)), this.f = this.a);
        return Kk(this.j, 0, this.c, this.s, this.l, !1, b, c, d, e)
    };
    l.ul = function (b, c, d) {
        return "XYM" != this.b && "XYZM" != this.b || 0 === this.j.length ? null : an(this.j, this.c, this.s, b, m(c) ? c : !1, m(d) ? d : !1)
    };
    l.M = function () {
        return Pk(this.j, 0, this.c, this.s)
    };
    l.gj = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c = new N(null);
        bn(c, this.b, this.j.slice(0 === b ? 0 : this.c[b - 1], this.c[b]));
        return c
    };
    l.$c = function () {
        var b = this.j, c = this.c, d = this.b, e = [], f = 0, g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g], n = new N(null);
            bn(n, d, b.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };
    function pm(b) {
        var c = [], d = b.j, e = 0, f = b.c;
        b = b.s;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var k = f[g], e = Zm(d, e, k, b);
            db(c, e);
            e = k
        }
        return c
    }

    l.vc = function (b) {
        var c = [], d = [], e = this.j, f = this.c, g = this.s, h = 0, k = 0, n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n], k = Qk(e, h, q, g, b, c, k);
            d.push(k);
            h = q
        }
        c.length = k;
        b = new P(null);
        cn(b, "XY", c, d);
        return b
    };
    l.L = function () {
        return "MultiLineString"
    };
    l.na = function (b) {
        a:{
            var c = this.j, d = this.c, e = this.s, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if ($k(c, f, d[g], e, b)) {
                    b = !0;
                    break a
                }
                f = d[g]
            }
            b = !1
        }
        return b
    };
    l.ba = function (b, c) {
        if (null === b)cn(this, "XY", null, this.c); else {
            Bk(this, c, b, 2);
            null === this.j && (this.j = []);
            var d = Nk(this.j, 0, b, this.s, this.c);
            this.j.length = 0 === d.length ? 0 : d[d.length - 1];
            this.k()
        }
    };
    function cn(b, c, d, e) {
        Ak(b, c, d);
        b.c = e;
        b.k()
    }

    function dn(b, c) {
        var d = "XY", e = [], f = [], g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            0 === g && (d = k.b);
            db(e, k.j);
            f.push(e.length)
        }
        cn(b, d, e, f)
    };
    function en(b, c) {
        yk.call(this);
        this.ba(b, c)
    }

    w(en, yk);
    l = en.prototype;
    l.yi = function (b) {
        null === this.j ? this.j = b.j.slice() : db(this.j, b.j);
        this.k()
    };
    l.clone = function () {
        var b = new en(null);
        Ak(b, this.b, this.j.slice());
        b.k();
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        var f = this.j, g = this.s, h, k, n;
        h = 0;
        for (k = f.length; h < k; h += g)if (n = Fk(b, c, f[h], f[h + 1]), n < e) {
            e = n;
            for (n = 0; n < g; ++n)d[n] = f[h + n];
            d.length = g
        }
        return e
    };
    l.M = function () {
        return Ok(this.j, 0, this.j.length, this.s)
    };
    l.pj = function (b) {
        var c = null === this.j ? 0 : this.j.length / this.s;
        if (0 > b || c <= b)return null;
        c = new E(null);
        Uk(c, this.b, this.j.slice(b * this.s, (b + 1) * this.s));
        return c
    };
    l.Zd = function () {
        var b = this.j, c = this.b, d = this.s, e = [], f, g;
        f = 0;
        for (g = b.length; f < g; f += d) {
            var h = new E(null);
            Uk(h, c, b.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    l.L = function () {
        return "MultiPoint"
    };
    l.na = function (b) {
        var c = this.j, d = this.s, e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d)if (g = c[e], h = c[e + 1], Sd(b, g, h))return !0;
        return !1
    };
    l.ba = function (b, c) {
        null === b ? Ak(this, "XY", null) : (Bk(this, c, b, 1), null === this.j && (this.j = []), this.j.length = Mk(this.j, 0, b, this.s));
        this.k()
    };
    function R(b, c) {
        yk.call(this);
        this.c = [];
        this.l = -1;
        this.p = null;
        this.K = this.J = this.H = -1;
        this.f = null;
        this.ba(b, c)
    }

    w(R, yk);
    l = R.prototype;
    l.zi = function (b) {
        if (null === this.j)this.j = b.j.slice(), b = b.c.slice(), this.c.push(); else {
            var c = this.j.length;
            db(this.j, b.j);
            b = b.c.slice();
            var d, e;
            d = 0;
            for (e = b.length; d < e; ++d)b[d] += c
        }
        this.c.push(b);
        this.k()
    };
    l.clone = function () {
        var b = new R(null);
        fn(b, this.b, this.j.slice(), this.c.slice());
        return b
    };
    l.Sa = function (b, c, d, e) {
        if (e < Qd(this.G(), b, c))return e;
        if (this.J != this.a) {
            var f = this.c, g = 0, h = 0, k, n;
            k = 0;
            for (n = f.length; k < n; ++k)var p = f[k], h = Ik(this.j, g, p, this.s, h), g = p[p.length - 1];
            this.H = Math.sqrt(h);
            this.J = this.a
        }
        f = qm(this);
        g = this.c;
        h = this.s;
        k = this.H;
        n = 0;
        var p = m(void 0) ? void 0 : [NaN, NaN], q, r;
        q = 0;
        for (r = g.length; q < r; ++q) {
            var t = g[q];
            e = Kk(f, n, t, h, k, !0, b, c, d, e, p);
            n = t[t.length - 1]
        }
        return e
    };
    l.$b = function (b, c) {
        var d;
        a:{
            d = qm(this);
            var e = this.c, f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var k = e[g];
                    if (Xk(d, f, k, this.s, b, c)) {
                        d = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    l.vl = function () {
        var b = qm(this), c = this.c, d = 0, e = 0, f, g;
        f = 0;
        for (g = c.length; f < g; ++f)var h = c[f], e = e + Dk(b, d, h, this.s), d = h[h.length - 1];
        return e
    };
    l.M = function (b) {
        var c;
        m(b) ? (c = qm(this).slice(), el(c, this.c, this.s, b)) : c = this.j;
        b = c;
        c = this.c;
        var d = this.s, e = 0, f = m(void 0) ? void 0 : [], g = 0, h, k;
        h = 0;
        for (k = c.length; h < k; ++h) {
            var n = c[h];
            f[g++] = Pk(b, e, n, d, f[g]);
            e = n[n.length - 1]
        }
        f.length = g;
        return f
    };
    function rm(b) {
        if (b.l != b.a) {
            var c = b.j, d = b.c, e = b.s, f = 0, g = [], h, k, n = Kd();
            h = 0;
            for (k = d.length; h < k; ++h) {
                var p = d[h], n = Yd(Nd(Infinity, Infinity, -Infinity, -Infinity, void 0), c, f, p[0], e);
                g.push((n[0] + n[2]) / 2, (n[1] + n[3]) / 2);
                f = p[p.length - 1]
            }
            c = qm(b);
            d = b.c;
            e = b.s;
            f = 0;
            h = [];
            k = 0;
            for (n = d.length; k < n; ++k)p = d[k], h = Yk(c, f, p, e, g, 2 * k, h), f = p[p.length - 1];
            b.p = h;
            b.l = b.a
        }
        return b.p
    }

    l.dj = function () {
        var b = new en(null), c = rm(this).slice();
        Ak(b, "XY", c);
        b.k();
        return b
    };
    function qm(b) {
        if (b.K != b.a) {
            var c = b.j, d;
            a:{
                d = b.c;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e)if (!cl(c, d[e], b.s, void 0)) {
                    d = !1;
                    break a
                }
                d = !0
            }
            d ? b.f = c : (b.f = c.slice(), b.f.length = el(b.f, b.c, b.s));
            b.K = b.a
        }
        return b.f
    }

    l.vc = function (b) {
        var c = [], d = [], e = this.j, f = this.c, g = this.s;
        b = Math.sqrt(b);
        var h = 0, k = 0, n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n], r = [], k = Rk(e, h, q, g, b, c, k, r);
            d.push(r);
            h = q[q.length - 1]
        }
        c.length = k;
        e = new R(null);
        fn(e, "XY", c, d);
        return e
    };
    l.rj = function (b) {
        if (0 > b || this.c.length <= b)return null;
        var c;
        0 === b ? c = 0 : (c = this.c[b - 1], c = c[c.length - 1]);
        b = this.c[b].slice();
        var d = b[b.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e)b[e] -= c
        }
        e = new F(null);
        fl(e, this.b, this.j.slice(c, d), b);
        return e
    };
    l.Fd = function () {
        var b = this.b, c = this.j, d = this.c, e = [], f = 0, g, h, k, n;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var p = d[g].slice(), q = p[p.length - 1];
            if (0 !== f)for (k = 0, n = p.length; k < n; ++k)p[k] -= f;
            k = new F(null);
            fl(k, b, c.slice(f, q), p);
            e.push(k);
            f = q
        }
        return e
    };
    l.L = function () {
        return "MultiPolygon"
    };
    l.na = function (b) {
        a:{
            var c = qm(this), d = this.c, e = this.s, f = 0, g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var k = d[g];
                if (al(c, f, k, e, b)) {
                    b = !0;
                    break a
                }
                f = k[k.length - 1]
            }
            b = !1
        }
        return b
    };
    l.ba = function (b, c) {
        if (null === b)fn(this, "XY", null, this.c); else {
            Bk(this, c, b, 3);
            null === this.j && (this.j = []);
            var d = this.j, e = this.s, f = this.c, g = 0, f = m(f) ? f : [], h = 0, k, n;
            k = 0;
            for (n = b.length; k < n; ++k)g = Nk(d, g, b[k], e, f[h]), f[h++] = g, g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.j.length = 0 : (d = f[f.length - 1], this.j.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.k()
        }
    };
    function fn(b, c, d, e) {
        Ak(b, c, d);
        b.c = e;
        b.k()
    }

    function gn(b, c) {
        var d = "XY", e = [], f = [], g, h, k;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var n = c[g];
            0 === g && (d = n.b);
            var p = e.length;
            k = n.c;
            var q, r;
            q = 0;
            for (r = k.length; q < r; ++q)k[q] += p;
            db(e, n.j);
            f.push(k)
        }
        fn(b, d, e, f)
    };
    function hn(b, c) {
        return ma(b) - ma(c)
    }

    function jn(b, c) {
        var d = .5 * b / c;
        return d * d
    }

    function kn(b, c, d, e, f, g) {
        var h = !1, k, n;
        k = d.g;
        null !== k && (n = k.fd(), 2 == n || 3 == n ? k.yf(f, g) : (0 == n && k.load(), k.Ye(f, g), h = !0));
        f = (0, d.e)(c);
        null != f && (e = f.Te(e), (0, ln[e.L()])(b, e, d, c));
        return h
    }

    var ln = {
        Point: function (b, c, d, e) {
            var f = d.g;
            if (null !== f) {
                if (2 != f.fd())return;
                var g = b.a(d.a, "Image");
                g.$a(f);
                g.pb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), b.qb(c.M(), 0, 2, 2, c, e))
        }, LineString: function (b, c, d, e) {
            var f = d.c;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.za(null, f);
                g.Ab(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), b.qb(om(c), 0, 2, 2, c, e))
        }, Polygon: function (b, c, d, e) {
            var f = d.d, g = d.c;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.za(f, g);
                h.Qb(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f),
                b.qb(hl(c), 0, 2, 2, c, e))
        }, MultiPoint: function (b, c, d, e) {
            var f = d.g;
            if (null !== f) {
                if (2 != f.fd())return;
                var g = b.a(d.a, "Image");
                g.$a(f);
                g.ob(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), d = c.j, b.qb(d, 0, d.length, c.s, c, e))
        }, MultiLineString: function (b, c, d, e) {
            var f = d.c;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.za(null, f);
                g.tc(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), d = pm(c), b.qb(d, 0, d.length, 2, c, e))
        }, MultiPolygon: function (b, c, d, e) {
            var f = d.d, g = d.c;
            if (null !== g || null !== f) {
                var h = b.a(d.a, "Polygon");
                h.za(f,
                    g);
                h.uc(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), d = rm(c), b.qb(d, 0, d.length, 2, c, e))
        }, GeometryCollection: function (b, c, d, e) {
            c = c.d;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, ln[c[f].L()])(b, c[f], d, e)
        }, Circle: function (b, c, d, e) {
            var f = d.d, g = d.c;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.za(f, g);
                h.sc(c, e)
            }
            f = d.b;
            null !== f && (b = b.a(d.a, "Text"), b.Aa(f), b.qb(c.cd(), 0, 2, 2, c, e))
        }
    };

    function mn(b, c, d, e, f) {
        sj.call(this, b, c, d, 2, e);
        this.b = f
    }

    w(mn, sj);
    mn.prototype.a = function () {
        return this.b
    };
    function nn(b) {
        Bg.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.n = m(b.resolutions) ? b.resolutions : null
    }

    w(nn, Bg);
    function on(b, c) {
        if (null !== b.n) {
            var d = ac(b.n, c, 0);
            c = b.n[d]
        }
        return c
    }

    nn.prototype.i = function (b) {
        b = b.target;
        switch (b.state) {
            case 1:
                this.dispatchEvent(new pn(qn, b));
                break;
            case 2:
                this.dispatchEvent(new pn(rn, b));
                break;
            case 3:
                this.dispatchEvent(new pn(sn, b))
        }
    };
    function tn(b, c) {
        b.a().src = c
    }

    function pn(b, c) {
        rc.call(this, b);
        this.image = c
    }

    w(pn, rc);
    var qn = "imageloadstart", rn = "imageloadend", sn = "imageloaderror";

    function un(b) {
        nn.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions,
            state: m(b.state) ? b.state : void 0
        });
        this.T = b.canvasFunction;
        this.H = null;
        this.R = 0;
        this.U = m(b.ratio) ? b.ratio : 1.5
    }

    w(un, nn);
    un.prototype.Bc = function (b, c, d, e) {
        c = on(this, c);
        var f = this.H;
        if (null !== f && this.R == this.a && f.resolution == c && f.e == d && Td(f.G(), b))return f;
        b = b.slice();
        ke(b, this.U);
        e = this.T(b, c, d, [ie(b) / c * d, fe(b) / c * d], e);
        null === e || (f = new mn(b, c, d, this.d, e));
        this.H = f;
        this.R = this.a;
        return f
    };
    function vn(b) {
        b.prototype.then = b.prototype.then;
        b.prototype.$goog_Thenable = !0
    }

    function wn(b) {
        if (!b)return !1;
        try {
            return !!b.$goog_Thenable
        } catch (c) {
            return !1
        }
    };
    function xn(b, c) {
        yn || zn();
        An || (yn(), An = !0);
        Bn.push(new Cn(b, c))
    }

    var yn;

    function zn() {
        if (ba.Promise && ba.Promise.resolve) {
            var b = ba.Promise.resolve();
            yn = function () {
                b.then(Dn)
            }
        } else yn = function () {
            yh(Dn)
        }
    }

    var An = !1, Bn = [];

    function Dn() {
        for (; Bn.length;) {
            var b = Bn;
            Bn = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    d.a.call(d.b)
                } catch (e) {
                    xh(e)
                }
            }
        }
        An = !1
    }

    function Cn(b, c) {
        this.a = b;
        this.b = c
    };
    function En(b, c) {
        this.b = Fn;
        this.g = void 0;
        this.a = this.c = null;
        this.d = this.e = !1;
        try {
            var d = this;
            b.call(c, function (b) {
                Gn(d, Hn, b)
            }, function (b) {
                Gn(d, In, b)
            })
        } catch (e) {
            Gn(this, In, e)
        }
    }

    var Fn = 0, Hn = 2, In = 3;
    En.prototype.then = function (b, c, d) {
        return Jn(this, ka(b) ? b : null, ka(c) ? c : null, d)
    };
    vn(En);
    En.prototype.cancel = function (b) {
        this.b == Fn && xn(function () {
            var c = new Kn(b);
            Ln(this, c)
        }, this)
    };
    function Ln(b, c) {
        if (b.b == Fn)if (b.c) {
            var d = b.c;
            if (d.a) {
                for (var e = 0, f = -1, g = 0, h; h = d.a[g]; g++)if (h = h.Qc)if (e++, h == b && (f = g), 0 <= f && 1 < e)break;
                0 <= f && (d.b == Fn && 1 == e ? Ln(d, c) : (e = d.a.splice(f, 1)[0], Mn(d, e, In, c)))
            }
        } else Gn(b, In, c)
    }

    function Nn(b, c) {
        b.a && b.a.length || b.b != Hn && b.b != In || On(b);
        b.a || (b.a = []);
        b.a.push(c)
    }

    function Jn(b, c, d, e) {
        var f = {Qc: null, Vg: null, Xg: null};
        f.Qc = new En(function (b, h) {
            f.Vg = c ? function (d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (p) {
                    h(p)
                }
            } : b;
            f.Xg = d ? function (c) {
                try {
                    var f = d.call(e, c);
                    !m(f) && c instanceof Kn ? h(c) : b(f)
                } catch (p) {
                    h(p)
                }
            } : h
        });
        f.Qc.c = b;
        Nn(b, f);
        return f.Qc
    }

    En.prototype.f = function (b) {
        this.b = Fn;
        Gn(this, Hn, b)
    };
    En.prototype.i = function (b) {
        this.b = Fn;
        Gn(this, In, b)
    };
    function Gn(b, c, d) {
        if (b.b == Fn) {
            if (b == d)c = In, d = new TypeError("Promise cannot resolve to itself"); else {
                if (wn(d)) {
                    b.b = 1;
                    d.then(b.f, b.i, b);
                    return
                }
                if (la(d))try {
                    var e = d.then;
                    if (ka(e)) {
                        Pn(b, d, e);
                        return
                    }
                } catch (f) {
                    c = In, d = f
                }
            }
            b.g = d;
            b.b = c;
            On(b);
            c != In || d instanceof Kn || Qn(b, d)
        }
    }

    function Pn(b, c, d) {
        function e(c) {
            g || (g = !0, b.i(c))
        }

        function f(c) {
            g || (g = !0, b.f(c))
        }

        b.b = 1;
        var g = !1;
        try {
            d.call(c, f, e)
        } catch (h) {
            e(h)
        }
    }

    function On(b) {
        b.e || (b.e = !0, xn(b.q, b))
    }

    En.prototype.q = function () {
        for (; this.a && this.a.length;) {
            var b = this.a;
            this.a = [];
            for (var c = 0; c < b.length; c++)Mn(this, b[c], this.b, this.g)
        }
        this.e = !1
    };
    function Mn(b, c, d, e) {
        if (d == Hn)c.Vg(e); else {
            if (c.Qc)for (; b && b.d; b = b.c)b.d = !1;
            c.Xg(e)
        }
    }

    function Qn(b, c) {
        b.d = !0;
        xn(function () {
            b.d && Rn.call(null, c)
        })
    }

    var Rn = xh;

    function Kn(b) {
        xa.call(this, b)
    }

    w(Kn, xa);
    Kn.prototype.name = "cancel";
    function Sn(b, c, d) {
        if (ka(b))d && (b = ra(b, d)); else if (b && "function" == typeof b.handleEvent)b = ra(b.handleEvent, b); else throw Error("Invalid listener argument");
        return 2147483647 < c ? -1 : ba.setTimeout(b, c || 0)
    };
    var Tn = ba.JSON.parse, Un = ba.JSON.stringify;

    function Vn() {
    }

    Vn.prototype.a = null;
    function Wn(b) {
        var c;
        (c = b.a) || (c = {}, Xn(b) && (c[0] = !0, c[1] = !0), c = b.a = c);
        return c
    };
    var Yn;

    function Zn() {
    }

    w(Zn, Vn);
    function $n(b) {
        return (b = Xn(b)) ? new ActiveXObject(b) : new XMLHttpRequest
    }

    function Xn(b) {
        if (!b.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new ActiveXObject(e), b.b = e
                } catch (f) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return b.b
    }

    Yn = new Zn;
    var ao = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function bo(b) {
        if (co) {
            co = !1;
            var c = ba.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = bo(d)[3] || null) ? decodeURI(d) : d) && d != c.hostname)throw co = !0, Error();
            }
        }
        return b.match(ao)
    }

    var co = Kb;

    function eo(b, c) {
        for (var d = b.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].indexOf("="), g = null, h = null;
            0 <= f ? (g = d[e].substring(0, f), h = d[e].substring(f + 1)) : g = d[e];
            c(g, h ? decodeURIComponent(h.replace(/\+/g, " ")) : "")
        }
    }

    function fo(b) {
        if (b[1]) {
            var c = b[0], d = c.indexOf("#");
            0 <= d && (b.push(c.substr(d)), b[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? b[1] = "?" : d == c.length - 1 && (b[1] = void 0)
        }
        return b.join("")
    }

    function go(b, c, d) {
        if (ga(c))for (var e = 0; e < c.length; e++)go(b, String(c[e]), d); else null != c && d.push("&", b, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }

    function ho(b, c) {
        for (var d in c)go(d, c[d], b);
        return b
    };
    function io(b) {
        $c.call(this);
        this.J = new Eh;
        this.i = b || null;
        this.a = !1;
        this.f = this.X = null;
        this.e = this.o = "";
        this.b = this.n = this.d = this.q = !1;
        this.g = 0;
        this.c = null;
        this.l = jo;
        this.p = this.H = !1
    }

    w(io, $c);
    var jo = "", ko = /^https?$/i, lo = ["POST", "PUT"];
    l = io.prototype;
    l.send = function (b, c, d, e) {
        if (this.X)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.o + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        this.o = b;
        this.e = "";
        this.q = !1;
        this.a = !0;
        this.X = this.i ? $n(this.i) : $n(Yn);
        this.f = this.i ? Wn(this.i) : Wn(Yn);
        this.X.onreadystatechange = ra(this.Wg, this);
        try {
            this.n = !0, this.X.open(c, String(b), !0), this.n = !1
        } catch (f) {
            mo(this, f);
            return
        }
        b = d || "";
        var g = this.J.clone();
        e && Dh(e, function (b, c) {
            g.set(c, b)
        });
        e = Wa(g.C(), no);
        d = ba.FormData && b instanceof ba.FormData;
        !Ya(lo,
            c) || e || d || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function (b, c) {
            this.X.setRequestHeader(c, b)
        }, this);
        this.l && (this.X.responseType = this.l);
        "withCredentials"in this.X && (this.X.withCredentials = this.H);
        try {
            oo(this), 0 < this.g && ((this.p = po(this.X)) ? (this.X.timeout = this.g, this.X.ontimeout = ra(this.oc, this)) : this.c = Sn(this.oc, this.g, this)), this.d = !0, this.X.send(b), this.d = !1
        } catch (h) {
            mo(this, h)
        }
    };
    function po(b) {
        return Ib && Rb(9) && ja(b.timeout) && m(b.ontimeout)
    }

    function no(b) {
        return "content-type" == b.toLowerCase()
    }

    l.oc = function () {
        "undefined" != typeof aa && this.X && (this.e = "Timed out after " + this.g + "ms, aborting", this.dispatchEvent("timeout"), this.X && this.a && (this.a = !1, this.b = !0, this.X.abort(), this.b = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qo(this)))
    };
    function mo(b, c) {
        b.a = !1;
        b.X && (b.b = !0, b.X.abort(), b.b = !1);
        b.e = c;
        ro(b);
        qo(b)
    }

    function ro(b) {
        b.q || (b.q = !0, b.dispatchEvent("complete"), b.dispatchEvent("error"))
    }

    l.N = function () {
        this.X && (this.a && (this.a = !1, this.b = !0, this.X.abort(), this.b = !1), qo(this, !0));
        io.S.N.call(this)
    };
    l.Wg = function () {
        this.W || (this.n || this.d || this.b ? so(this) : this.en())
    };
    l.en = function () {
        so(this)
    };
    function so(b) {
        if (b.a && "undefined" != typeof aa && (!b.f[1] || 4 != to(b) || 2 != uo(b)))if (b.d && 4 == to(b))Sn(b.Wg, 0, b); else if (b.dispatchEvent("readystatechange"), 4 == to(b)) {
            b.a = !1;
            try {
                if (vo(b))b.dispatchEvent("complete"), b.dispatchEvent("success"); else {
                    var c;
                    try {
                        c = 2 < to(b) ? b.X.statusText : ""
                    } catch (d) {
                        c = ""
                    }
                    b.e = c + " [" + uo(b) + "]";
                    ro(b)
                }
            } finally {
                qo(b)
            }
        }
    }

    function qo(b, c) {
        if (b.X) {
            oo(b);
            var d = b.X, e = b.f[0] ? ca : null;
            b.X = null;
            b.f = null;
            c || b.dispatchEvent("ready");
            try {
                d.onreadystatechange = e
            } catch (f) {
            }
        }
    }

    function oo(b) {
        b.X && b.p && (b.X.ontimeout = null);
        ja(b.c) && (ba.clearTimeout(b.c), b.c = null)
    }

    function vo(b) {
        var c = uo(b), d;
        a:switch (c) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                d = !0;
                break a;
            default:
                d = !1
        }
        if (!d) {
            if (c = 0 === c)b = bo(String(b.o))[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), c = !ko.test(b ? b.toLowerCase() : "");
            d = c
        }
        return d
    }

    function to(b) {
        return b.X ? b.X.readyState : 0
    }

    function uo(b) {
        try {
            return 2 < to(b) ? b.X.status : -1
        } catch (c) {
            return -1
        }
    }

    function wo(b) {
        try {
            return b.X ? b.X.responseText : ""
        } catch (c) {
            return ""
        }
    };
    function xo(b) {
        if ("undefined" != typeof XMLSerializer)return (new XMLSerializer).serializeToString(b);
        if (b = b.xml)return b;
        throw Error("Your browser does not support serializing XML documents");
    };
    var yo;
    a:if (document.implementation && document.implementation.createDocument)yo = document.implementation.createDocument("", "", null); else {
        if ("undefined" != typeof ActiveXObject) {
            var zo = new ActiveXObject("MSXML2.DOMDocument");
            if (zo) {
                zo.resolveExternals = !1;
                zo.validateOnParse = !1;
                try {
                    zo.setProperty("ProhibitDTD", !0), zo.setProperty("MaxXMLSize", 2048), zo.setProperty("MaxElementDepth", 256)
                } catch (Ao) {
                }
            }
            if (zo) {
                yo = zo;
                break a
            }
        }
        throw Error("Your browser does not support creating new documents");
    }
    var Bo = yo;

    function Co(b, c) {
        return Bo.createElementNS(b, c)
    }

    function Do(b, c) {
        null === b && (b = "");
        return Bo.createNode(1, c, b)
    }

    var Eo = document.implementation && document.implementation.createDocument ? Co : Do;

    function Fo(b, c) {
        return Go(b, c, []).join("")
    }

    function Go(b, c, d) {
        if (4 == b.nodeType || 3 == b.nodeType)c ? d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(b.nodeValue); else for (b = b.firstChild; null !== b; b = b.nextSibling)Go(b, c, d);
        return d
    }

    function Ho(b) {
        return b.localName
    }

    function Io(b) {
        var c = b.localName;
        return m(c) ? c : b.baseName
    }

    var Jo = Ib ? Io : Ho;

    function Ko(b) {
        return b instanceof Document
    }

    function Lo(b) {
        return la(b) && 9 == b.nodeType
    }

    var Mo = Ib ? Lo : Ko;

    function No(b) {
        return b instanceof Node
    }

    function Oo(b) {
        return la(b) && m(b.nodeType)
    }

    var Po = Ib ? Oo : No;

    function Qo(b, c, d) {
        return b.getAttributeNS(c, d) || ""
    }

    function Ro(b, c, d) {
        var e = "";
        b = So(b, c, d);
        m(b) && (e = b.nodeValue);
        return e
    }

    var To = document.implementation && document.implementation.createDocument ? Qo : Ro;

    function Uo(b, c, d) {
        return b.getAttributeNodeNS(c, d)
    }

    function Vo(b, c, d) {
        var e = null;
        b = b.attributes;
        for (var f, g, h = 0, k = b.length; h < k; ++h)if (f = b[h], f.namespaceURI == c && (g = f.prefix ? f.prefix + ":" + d : d, g == f.nodeName)) {
            e = f;
            break
        }
        return e
    }

    var So = document.implementation && document.implementation.createDocument ? Uo : Vo;

    function Wo(b, c, d, e) {
        b.setAttributeNS(c, d, e)
    }

    function Xo(b, c, d, e) {
        null === c ? b.setAttribute(d, e) : (c = b.ownerDocument.createNode(2, d, c), c.nodeValue = e, b.setAttributeNode(c))
    }

    var Yo = document.implementation && document.implementation.createDocument ? Wo : Xo;

    function Zo(b) {
        return (new DOMParser).parseFromString(b, "application/xml")
    }

    function $o(b, c) {
        return function (d, e) {
            var f = b.call(c, d, e);
            m(f) && db(e[e.length - 1], f)
        }
    }

    function ap(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && e[e.length - 1].push(f)
        }
    }

    function bp(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && (e[e.length - 1] = f)
        }
    }

    function cp(b) {
        return function (c, d) {
            var e = b.call(m(void 0) ? void 0 : this, c, d);
            m(e) && Cb(d[d.length - 1], m(void 0) ? void 0 : c.localName).push(e)
        }
    }

    function S(b, c) {
        return function (d, e) {
            var f = b.call(m(void 0) ? void 0 : this, d, e);
            m(f) && (e[e.length - 1][m(c) ? c : d.localName] = f)
        }
    }

    function T(b, c, d) {
        return dp(b, c, d)
    }

    function U(b, c) {
        return function (d, e, f) {
            b.call(m(c) ? c : this, d, e, f);
            f[f.length - 1].O.appendChild(d)
        }
    }

    function ep(b) {
        var c, d;
        return function (e, f, g) {
            if (!m(c)) {
                c = {};
                var h = {};
                h[e.localName] = b;
                c[e.namespaceURI] = h;
                d = fp(e.localName)
            }
            gp(c, d, f, g)
        }
    }

    function fp(b, c) {
        return function (d, e, f) {
            d = e[e.length - 1].O;
            e = b;
            m(e) || (e = f);
            f = c;
            m(c) || (f = d.namespaceURI);
            return Eo(f, e)
        }
    }

    var hp = fp();

    function ip(b, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; ++f)e[f] = b[c[f]];
        return e
    }

    function dp(b, c, d) {
        d = m(d) ? d : {};
        var e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d[b[e]] = c;
        return d
    }

    function jp(b, c, d, e) {
        for (c = c.firstElementChild; null !== c; c = c.nextElementSibling) {
            var f = b[c.namespaceURI];
            m(f) && (f = f[c.localName], m(f) && f.call(e, c, d))
        }
    }

    function V(b, c, d, e, f) {
        e.push(b);
        jp(c, d, e, f);
        return e.pop()
    }

    function gp(b, c, d, e, f, g) {
        for (var h = (m(f) ? f : d).length, k, n, p = 0; p < h; ++p)k = d[p], m(k) && (n = c.call(g, k, e, m(f) ? f[p] : void 0), m(n) && b[n.namespaceURI][n.localName].call(g, n, k, e))
    }

    function kp(b, c, d, e, f, g, h) {
        f.push(b);
        gp(c, d, e, f, g, h);
        f.pop()
    };
    function lp(b, c, d) {
        return function (e, f, g) {
            e = new io;
            e.l = "text";
            x(e, "complete", function (b) {
                b = b.target;
                if (vo(b)) {
                    var e = c.L(), f;
                    if ("json" == e)f = wo(b); else if ("text" == e)f = wo(b); else if ("xml" == e) {
                        if (!Ib)try {
                            f = b.X ? b.X.responseXML : null
                        } catch (p) {
                            f = null
                        }
                        null != f || (f = Zo(wo(b)))
                    }
                    null != f && (f = c.ja(f, {featureProjection: g}), d.call(this, f))
                }
                qc(b)
            }, !1, this);
            e.send(b)
        }
    }

    function mp(b, c) {
        return lp(b, c, function (b) {
            this.Nc(b)
        })
    };
    function np() {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    };
    var op;
    (function () {
        var b = {Rf: {}};
        (function () {
            function c(b, d) {
                if (!(this instanceof c))return new c(b, d);
                this.Ae = Math.max(4, b || 9);
                this.If = Math.max(2, Math.ceil(.4 * this.Ae));
                d && this.ri(d);
                this.clear()
            }

            function d(b, c) {
                b.bbox = e(b, 0, b.children.length, c)
            }

            function e(b, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++)h = b.children[c], f(g, b.va ? e(h) : h.bbox);
                return g
            }

            function f(b, c) {
                b[0] = Math.min(b[0], c[0]);
                b[1] = Math.min(b[1], c[1]);
                b[2] = Math.max(b[2], c[2]);
                b[3] = Math.max(b[3], c[3])
            }

            function g(b, c) {
                return b.bbox[0] -
                    c.bbox[0]
            }

            function h(b, c) {
                return b.bbox[1] - c.bbox[1]
            }

            function k(b) {
                return (b[2] - b[0]) * (b[3] - b[1])
            }

            function n(b) {
                return b[2] - b[0] + (b[3] - b[1])
            }

            function p(b, c) {
                return b[0] <= c[0] && b[1] <= c[1] && c[2] <= b[2] && c[3] <= b[3]
            }

            function q(b, c) {
                return c[0] <= b[2] && c[1] <= b[3] && c[2] >= b[0] && c[3] >= b[1]
            }

            function r(b, c, d, e, f) {
                for (var g = [c, d], h; g.length;)d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, t(b, c, d, h, f), g.push(c, h, h, d))
            }

            function t(b, c, d, e, f) {
                for (var g, h, k, n, p; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g),
                        n = .5 * Math.exp(2 * k / 3), p = .5 * Math.sqrt(k * n * (g - n) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * n / g + p)), h = Math.min(d, Math.floor(e + (g - h) * n / g + p)), t(b, k, h, e, f));
                    g = b[e];
                    h = c;
                    n = d;
                    u(b, c, e);
                    for (0 < f(b[d], g) && u(b, c, d); h < n;) {
                        u(b, h, n);
                        h++;
                        for (n--; 0 > f(b[h], g);)h++;
                        for (; 0 < f(b[n], g);)n--
                    }
                    0 === f(b[c], g) ? u(b, c, n) : (n++, u(b, n, d));
                    n <= e && (c = n + 1);
                    e <= n && (d = n - 1)
                }
            }

            function u(b, c, d) {
                var e = b[c];
                b[c] = b[d];
                b[d] = e
            }

            c.prototype = {
                all: function () {
                    return this.Ef(this.data, [])
                }, search: function (b) {
                    var c = this.data, d = [], e = this.Da;
                    if (!q(b, c.bbox))return d;
                    for (var f = [], g, h, k, n; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++)k = c.children[g], n = c.va ? e(k) : k.bbox, q(b, n) && (c.va ? d.push(k) : p(b, n) ? this.Ef(k, d) : f.push(k));
                        c = f.pop()
                    }
                    return d
                }, load: function (b) {
                    if (!b || !b.length)return this;
                    if (b.length < this.If) {
                        for (var c = 0, d = b.length; c < d; c++)this.ha(b[c]);
                        return this
                    }
                    b = this.Gf(b.slice(), 0, b.length - 1, 0);
                    this.data.children.length ? this.data.height === b.height ? this.Jf(this.data, b) : (this.data.height < b.height && (c = this.data, this.data = b, b = c), this.Hf(b, this.data.height - b.height - 1,
                        !0)) : this.data = b;
                    return this
                }, ha: function (b) {
                    b && this.Hf(b, this.data.height - 1);
                    return this
                }, clear: function () {
                    this.data = {children: [], height: 1, bbox: [Infinity, Infinity, -Infinity, -Infinity], va: !0};
                    return this
                }, remove: function (b) {
                    if (!b)return this;
                    for (var c = this.data, d = this.Da(b), e = [], f = [], g, h, k, n; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), n = !0);
                        if (c.va && (k = c.children.indexOf(b), -1 !== k)) {
                            c.children.splice(k, 1);
                            e.push(c);
                            this.qi(e);
                            break
                        }
                        n || c.va || !p(c.bbox, d) ? h ? (g++, c = h.children[g], n = !1) : c = null :
                            (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                }, Da: function (b) {
                    return b
                }, De: function (b, c) {
                    return b[0] - c[0]
                }, Ee: function (b, c) {
                    return b[1] - c[1]
                }, toJSON: function () {
                    return this.data
                }, Ef: function (b, c) {
                    for (var d = []; b;)b.va ? c.push.apply(c, b.children) : d.push.apply(d, b.children), b = d.pop();
                    return c
                }, Gf: function (b, c, e, f) {
                    var g = e - c + 1, h = this.Ae, k;
                    if (g <= h)return k = {
                        children: b.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        va: !0
                    }, d(k, this.Da), k;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    k = {children: [], height: f, bbox: null};
                    var g = Math.ceil(g / h), h = g * Math.ceil(Math.sqrt(h)), n, p, q;
                    for (r(b, c, e, h, this.De); c <= e; c += h)for (p = Math.min(c + h - 1, e), r(b, c, p, g, this.Ee), n = c; n <= p; n += g)q = Math.min(n + g - 1, p), k.children.push(this.Gf(b, n, q, f - 1));
                    d(k, this.Da);
                    return k
                }, pi: function (b, c, d, e) {
                    for (var f, g, h, n, p, q, r, t; ;) {
                        e.push(c);
                        if (c.va || e.length - 1 === d)break;
                        r = t = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++) {
                            h = c.children[f];
                            p = k(h.bbox);
                            q = b;
                            var u = h.bbox;
                            q = (Math.max(u[2], q[2]) - Math.min(u[0], q[0])) * (Math.max(u[3],
                                    q[3]) - Math.min(u[1], q[1])) - p;
                            q < t ? (t = q, r = p < r ? p : r, n = h) : q === t && p < r && (r = p, n = h)
                        }
                        c = n
                    }
                    return c
                }, Hf: function (b, c, d) {
                    var e = this.Da;
                    d = d ? b.bbox : e(b);
                    var e = [], g = this.pi(d, this.data, c, e);
                    g.children.push(b);
                    for (f(g.bbox, d); 0 <= c;)if (e[c].children.length > this.Ae)this.si(e, c), c--; else break;
                    this.mi(d, e, c)
                }, si: function (b, c) {
                    var e = b[c], f = e.children.length, g = this.If;
                    this.ni(e, g, f);
                    f = {children: e.children.splice(this.oi(e, g, f)), height: e.height};
                    e.va && (f.va = !0);
                    d(e, this.Da);
                    d(f, this.Da);
                    c ? b[c - 1].children.push(f) : this.Jf(e,
                        f)
                }, Jf: function (b, c) {
                    this.data = {children: [b, c], height: b.height + 1};
                    d(this.data, this.Da)
                }, oi: function (b, c, d) {
                    var f, g, h, n, p, q, r;
                    p = q = Infinity;
                    for (f = c; f <= d - c; f++) {
                        g = e(b, 0, f, this.Da);
                        h = e(b, f, d, this.Da);
                        var t = g, u = h;
                        n = Math.max(t[0], u[0]);
                        var za = Math.max(t[1], u[1]), bb = Math.min(t[2], u[2]), t = Math.min(t[3], u[3]);
                        n = Math.max(0, bb - n) * Math.max(0, t - za);
                        g = k(g) + k(h);
                        n < p ? (p = n, r = f, q = g < q ? g : q) : n === p && g < q && (q = g, r = f)
                    }
                    return r
                }, ni: function (b, c, d) {
                    var e = b.va ? this.De : g, f = b.va ? this.Ee : h, k = this.Ff(b, c, d, e);
                    c = this.Ff(b, c, d, f);
                    k < c && b.children.sort(e)
                }, Ff: function (b, c, d, g) {
                    b.children.sort(g);
                    g = this.Da;
                    var h = e(b, 0, c, g), k = e(b, d - c, d, g), p = n(h) + n(k), q, r;
                    for (q = c; q < d - c; q++)r = b.children[q], f(h, b.va ? g(r) : r.bbox), p += n(h);
                    for (q = d - c - 1; q >= c; q--)r = b.children[q], f(k, b.va ? g(r) : r.bbox), p += n(k);
                    return p
                }, mi: function (b, c, d) {
                    for (; 0 <= d; d--)f(c[d].bbox, b)
                }, qi: function (b) {
                    for (var c = b.length - 1, e; 0 <= c; c--)0 === b[c].children.length ? 0 < c ? (e = b[c - 1].children, e.splice(e.indexOf(b[c]), 1)) : this.clear() : d(b[c], this.Da)
                }, ri: function (b) {
                    var c = ["return a", " - b",
                        ";"];
                    this.De = new Function("a", "b", c.join(b[0]));
                    this.Ee = new Function("a", "b", c.join(b[1]));
                    this.Da = new Function("a", "return [a" + b.join(", a") + "];")
                }
            };
            "function" === typeof define && define.Mo ? define("rbush", function () {
                return c
            }) : "undefined" !== typeof b ? b.Rf = c : "undefined" !== typeof self ? self.a = c : window.a = c
        })();
        op = b.Rf
    })();
    function pp(b) {
        this.b = op(b);
        this.a = {}
    }

    l = pp.prototype;
    l.ha = function (b, c) {
        var d = [b[0], b[1], b[2], b[3], c];
        this.b.ha(d);
        this.a[ma(c)] = d
    };
    l.load = function (b, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = b[e], h = c[e], g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            this.a[ma(h)] = g
        }
        this.b.load(d)
    };
    l.remove = function (b) {
        b = ma(b);
        var c = this.a[b];
        zb(this.a, b);
        return null !== this.b.remove(c)
    };
    l.update = function (b, c) {
        var d = ma(c);
        Wd(this.a[d].slice(0, 4), b) || (this.remove(c), this.ha(b, c))
    };
    function qp(b) {
        b = b.b.all();
        return Ua(b, function (b) {
            return b[4]
        })
    }

    function rp(b, c) {
        var d = b.b.search(c);
        return Ua(d, function (b) {
            return b[4]
        })
    }

    l.forEach = function (b, c) {
        return sp(qp(this), b, c)
    };
    function tp(b, c, d, e) {
        return sp(rp(b, c), d, e)
    }

    function sp(b, c, d) {
        for (var e, f = 0, g = b.length; f < g && !(e = c.call(d, b[f])); f++);
        return e
    }

    l.la = function () {
        return xb(this.a)
    };
    l.clear = function () {
        this.b.clear();
        this.a = {}
    };
    l.G = function () {
        return this.b.data.bbox
    };
    function up(b) {
        b = m(b) ? b : {};
        Bg.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: void 0,
            state: "ready",
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.H = ca;
        m(b.loader) ? this.H = b.loader : m(b.url) && (this.H = mp(b.url, b.format));
        this.ma = m(b.strategy) ? b.strategy : np;
        this.b = new pp;
        this.R = new pp;
        this.c = {};
        this.e = {};
        this.f = {};
        this.i = {};
        m(b.features) && vp(this, b.features)
    }

    w(up, Bg);
    l = up.prototype;
    l.hf = function (b) {
        var c = ma(b).toString();
        if (wp(this, c, b)) {
            xp(this, c, b);
            var d = b.Q();
            null != d ? (c = d.G(), this.b.ha(c, b)) : this.c[c] = b;
            this.dispatchEvent(new yp("addfeature", b))
        }
        this.k()
    };
    function xp(b, c, d) {
        b.i[c] = [x(d, "change", b.Og, !1, b), x(d, "propertychange", b.Og, !1, b)]
    }

    function wp(b, c, d) {
        var e = !0, f = d.Z;
        m(f) ? f.toString()in b.e ? e = !1 : b.e[f.toString()] = d : b.f[c] = d;
        return e
    }

    l.Nc = function (b) {
        vp(this, b);
        this.k()
    };
    function vp(b, c) {
        var d, e, f, g, h = [], k = [], n = [];
        e = 0;
        for (f = c.length; e < f; e++)g = c[e], d = ma(g).toString(), wp(b, d, g) && k.push(g);
        e = 0;
        for (f = k.length; e < f; e++) {
            g = k[e];
            d = ma(g).toString();
            xp(b, d, g);
            var p = g.Q();
            null != p ? (d = p.G(), h.push(d), n.push(g)) : b.c[d] = g
        }
        b.b.load(h, n);
        e = 0;
        for (f = k.length; e < f; e++)b.dispatchEvent(new yp("addfeature", k[e]))
    }

    l.clear = function (b) {
        if (b) {
            for (var c in this.i)Sa(this.i[c], Wc);
            this.i = {};
            this.e = {};
            this.f = {}
        } else b = this.oh, this.b.forEach(b, this), pb(this.c, b, this);
        this.b.clear();
        this.R.clear();
        this.c = {};
        this.dispatchEvent(new yp("clear"));
        this.k()
    };
    l.Sf = function (b, c) {
        return this.b.forEach(b, c)
    };
    function zp(b, c, d) {
        b.Zc([c[0], c[1], c[0], c[1]], function (b) {
            if (b.Q().Fe(c))return d.call(void 0, b)
        })
    }

    l.Zc = function (b, c, d) {
        return tp(this.b, b, c, d)
    };
    l.Bb = function (b, c, d, e) {
        return this.Zc(b, d, e)
    };
    l.Ke = function (b, c, d) {
        return this.Zc(b, function (e) {
            if (e.Q().na(b) && (e = c.call(d, e)))return e
        })
    };
    l.Cc = function () {
        var b = qp(this.b);
        xb(this.c) || db(b, sb(this.c));
        return b
    };
    l.Ne = function (b) {
        var c = [];
        zp(this, b, function (b) {
            c.push(b)
        });
        return c
    };
    l.Oe = function (b) {
        return rp(this.b, b)
    };
    l.Uf = function (b) {
        var c = b[0], d = b[1], e = null, f = [NaN, NaN], g = Infinity, h = [-Infinity, -Infinity, Infinity, Infinity];
        tp(this.b, h, function (b) {
            var n = b.Q(), p = g;
            g = n.Sa(c, d, f, g);
            g < p && (e = b, b = Math.sqrt(g), h[0] = c - b, h[1] = d - b, h[2] = c + b, h[3] = d + b)
        });
        return e
    };
    l.G = function () {
        return this.b.G()
    };
    l.Me = function (b) {
        b = this.e[b.toString()];
        return m(b) ? b : null
    };
    l.Og = function (b) {
        b = b.target;
        var c = ma(b).toString(), d = b.Q();
        null != d ? (d = d.G(), c in this.c ? (delete this.c[c], this.b.ha(d, b)) : this.b.update(d, b)) : c in this.c || (this.b.remove(b), this.c[c] = b);
        d = b.Z;
        m(d) ? (d = d.toString(), c in this.f ? (delete this.f[c], this.e[d] = b) : this.e[d] !== b && (Ap(this, b), this.e[d] = b)) : c in this.f || (Ap(this, b), this.f[c] = b);
        this.k();
        this.dispatchEvent(new yp("changefeature", b))
    };
    l.la = function () {
        return this.b.la() && xb(this.c)
    };
    l.Zb = function (b, c, d) {
        var e = this.R;
        b = this.ma(b, c);
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            tp(e, h, function (b) {
                return Td(b.extent, h)
            }) || (this.H.call(this, h, c, d), e.ha(h, {extent: h.slice()}))
        }
    };
    l.Pg = function (b) {
        var c = ma(b).toString();
        c in this.c ? delete this.c[c] : this.b.remove(b);
        this.oh(b);
        this.k()
    };
    l.oh = function (b) {
        var c = ma(b).toString();
        Sa(this.i[c], Wc);
        delete this.i[c];
        var d = b.Z;
        m(d) ? delete this.e[d.toString()] : delete this.f[c];
        this.dispatchEvent(new yp("removefeature", b))
    };
    function Ap(b, c) {
        for (var d in b.e)if (b.e[d] === c) {
            delete b.e[d];
            break
        }
    }

    function yp(b, c) {
        rc.call(this, b);
        this.feature = c
    }

    w(yp, rc);
    function Bp(b) {
        this.b = b.source;
        this.aa = zd();
        this.c = di();
        this.e = [0, 0];
        this.l = null;
        un.call(this, {
            attributions: b.attributions,
            canvasFunction: ra(this.Ai, this),
            logo: b.logo,
            projection: b.projection,
            ratio: b.ratio,
            resolutions: b.resolutions,
            state: this.b.o
        });
        this.p = null;
        this.f = void 0;
        this.Lg(b.style);
        x(this.b, "change", this.bm, void 0, this)
    }

    w(Bp, un);
    l = Bp.prototype;
    l.Ai = function (b, c, d, e, f) {
        var g = new Jm(.5 * c / d, b, c);
        this.b.Zb(b, c, f);
        var h = !1;
        this.b.Bb(b, c, function (b) {
            var e;
            if (!(e = h)) {
                var f;
                m(b.c) ? f = b.c.call(b, c) : m(this.f) && (f = this.f(b, c));
                if (null != f) {
                    var q, r = !1;
                    e = 0;
                    for (q = f.length; e < q; ++e)r = kn(g, b, f[e], jn(c, d), this.am, this) || r;
                    e = r
                } else e = !1
            }
            h = e
        }, this);
        Km(g);
        if (h)return null;
        this.e[0] != e[0] || this.e[1] != e[1] ? (this.c.canvas.width = e[0], this.c.canvas.height = e[1], this.e[0] = e[0], this.e[1] = e[1]) : this.c.clearRect(0, 0, e[0], e[1]);
        b = Cp(this, de(b), c, d, e);
        Nm(g, this.c, d, b, 0,
            {});
        this.l = g;
        return this.c.canvas
    };
    l.ce = function (b, c, d, e, f) {
        if (null !== this.l) {
            var g = {};
            return this.l.c(b, c, 0, e, function (b) {
                var c = ma(b).toString();
                if (!(c in g))return g[c] = !0, f(b)
            })
        }
    };
    l.Yl = function () {
        return this.b
    };
    l.Zl = function () {
        return this.p
    };
    l.$l = function () {
        return this.f
    };
    function Cp(b, c, d, e, f) {
        return tj(b.aa, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1])
    }

    l.am = function () {
        this.k()
    };
    l.bm = function () {
        Dg(this, this.b.o)
    };
    l.Lg = function (b) {
        this.p = m(b) ? b : Il;
        this.f = null === b ? void 0 : Hl(this.p);
        this.k()
    };
    function Dp(b) {
        Om.call(this, b);
        this.e = null;
        this.g = zd();
        this.c = this.d = null
    }

    w(Dp, Om);
    l = Dp.prototype;
    l.Pa = function (b, c, d, e) {
        var f = this.b;
        return f.da().ce(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    l.cc = function (b, c, d, e) {
        if (!fa(this.be()))if (this.b.da()instanceof Bp) {
            if (b = b.slice(), vj(c.pixelToCoordinateMatrix, b, b), this.Pa(b, c, Gg, this))return d.call(e, this.b)
        } else if (null === this.d && (this.d = zd(), Fd(this.g, this.d)), c = Rm(b, this.d), null === this.c && (this.c = di(1, 1)), this.c.clearRect(0, 0, 1, 1), this.c.drawImage(this.be(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.c.getImageData(0, 0, 1, 1).data[3])return d.call(e, this.b)
    };
    l.be = function () {
        return null === this.e ? null : this.e.a()
    };
    l.Yf = function () {
        return this.g
    };
    l.ef = function (b, c) {
        var d = b.pixelRatio, e = b.viewState, f = e.center, g = e.resolution, h = e.rotation, k, n = this.b.da(), p = b.viewHints;
        k = b.extent;
        m(c.extent) && (k = ge(k, c.extent));
        p[0] || p[1] || je(k) || (e = e.projection, p = n.g, null === p || (e = p), k = n.Bc(k, g, d, e), null !== k && yj(this, k) && (this.e = k));
        if (null !== this.e) {
            k = this.e;
            var e = k.G(), p = k.resolution, q = k.e, g = d * p / (g * q);
            tj(this.g, d * b.size[0] / 2, d * b.size[1] / 2, g, g, h, q * (e[0] - f[0]) / p, q * (f[1] - e[3]) / p);
            this.d = null;
            Aj(b.attributions, k.g);
            Bj(b, n)
        }
        return !0
    };
    function Ep(b) {
        Om.call(this, b);
        this.c = this.g = null;
        this.q = !1;
        this.f = null;
        this.n = zd();
        this.e = null;
        this.p = this.J = this.l = NaN;
        this.i = this.d = null;
        this.K = [0, 0]
    }

    w(Ep, Om);
    Ep.prototype.be = function () {
        return this.g
    };
    Ep.prototype.Yf = function () {
        return this.n
    };
    Ep.prototype.ef = function (b, c) {
        var d = b.pixelRatio, e = b.viewState, f = e.projection, g = this.b, h = g.da(), k = ch(h, f), n = h.Bd(), p = Wg(k, e.resolution), q = h.Vb(p, b.pixelRatio, f), r = q[0] / ld(k.ra(p), this.K)[0], t = k.oa(p), r = t / r, u = e.center, A;
        t == e.resolution ? (u = Dj(u, t, b.size), A = ee(u, t, e.rotation, b.size)) : A = b.extent;
        m(c.extent) && (A = ge(A, c.extent));
        if (je(A))return !1;
        var z = Tg(k, A, t), C = q[0] * jf(z), B = q[1] * (z.c - z.a + 1), y, K;
        null === this.g ? (K = di(C, B), this.g = K.canvas, this.c = [C, B], this.f = K, this.q = !Sm(this.c)) : (y = this.g, K = this.f, this.c[0] <
        C || this.c[1] < B || this.J !== q[0] || this.p !== q[1] || this.q && (this.c[0] > C || this.c[1] > B) ? (y.width = C, y.height = B, this.c = [C, B], this.q = !Sm(this.c), this.d = null) : (C = this.c[0], B = this.c[1], (y = p != this.l) || (y = this.d, y = !(y.b <= z.b && z.d <= y.d && y.a <= z.a && z.c <= y.c)), y && (this.d = null)));
        var J, H;
        null === this.d ? (C /= q[0], B /= q[1], J = z.b - Math.floor((C - jf(z)) / 2), H = z.a - Math.floor((B - (z.c - z.a + 1)) / 2), this.l = p, this.J = q[0], this.p = q[1], this.d = new ff(J, J + C - 1, H, H + B - 1), this.i = Array(C * B), B = this.d) : (B = this.d, C = jf(B));
        y = {};
        y[p] = {};
        var Q = [], sa =
            this.yd(h, y), Oa = g.c(), O = Kd(), za = new ff(0, 0, 0, 0), bb, Ga, Bb;
        for (H = z.b; H <= z.d; ++H)for (Bb = z.a; Bb <= z.c; ++Bb)Ga = h.Ub(p, H, Bb, d, f), J = Ga.state, 2 == J || 4 == J || 3 == J && !Oa ? y[p][ef(Ga.a)] = Ga : (bb = Pg(k, Ga.a, sa, za, O), bb || (Q.push(Ga), bb = Sg(k, Ga.a, za, O), null === bb || sa(p + 1, bb)));
        sa = 0;
        for (bb = Q.length; sa < bb; ++sa)Ga = Q[sa], H = q[0] * (Ga.a[1] - B.b), Bb = q[1] * (B.c - Ga.a[2]), K.clearRect(H, Bb, q[0], q[1]);
        Q = Ua(tb(y), Number);
        gb(Q);
        var Za = h.U, Fc = ce(Qg(k, [p, B.b, B.c], O)), lc, Qe, rj, bi, Sf, vm, sa = 0;
        for (bb = Q.length; sa < bb; ++sa)if (lc = Q[sa], q = h.Vb(lc,
                d, f), bi = y[lc], lc == p)for (rj in bi)Ga = bi[rj], Qe = (Ga.a[2] - B.a) * C + (Ga.a[1] - B.b), this.i[Qe] != Ga && (H = q[0] * (Ga.a[1] - B.b), Bb = q[1] * (B.c - Ga.a[2]), J = Ga.state, 4 != J && (3 != J || Oa) && Za || K.clearRect(H, Bb, q[0], q[1]), 2 == J && K.drawImage(Ga.Ma(), n, n, q[0], q[1], H, Bb, q[0], q[1]), this.i[Qe] = Ga); else for (rj in lc = k.oa(lc) / t, bi)for (Ga = bi[rj], Qe = Qg(k, Ga.a, O), H = (Qe[0] - Fc[0]) / r, Bb = (Fc[1] - Qe[3]) / r, vm = lc * q[0], Sf = lc * q[1], J = Ga.state, 4 != J && Za || K.clearRect(H, Bb, vm, Sf), 2 == J && K.drawImage(Ga.Ma(), n, n, q[0], q[1], H, Bb, vm, Sf), Ga = Rg(k, Qe, p, za),
                                                                                                                                                                                                                                                                                                                                                                                                                      J = Math.max(Ga.b, B.b), Bb = Math.min(Ga.d, B.d), H = Math.max(Ga.a, B.a), Ga = Math.min(Ga.c, B.c); J <= Bb; ++J)for (Sf = H; Sf <= Ga; ++Sf)Qe = (Sf - B.a) * C + (J - B.b), this.i[Qe] = void 0;
        Cj(b.usedTiles, h, p, z);
        Ej(b, h, k, d, f, A, p, g.b());
        zj(b, h);
        Bj(b, h);
        tj(this.n, d * b.size[0] / 2, d * b.size[1] / 2, d * r / e.resolution, d * r / e.resolution, e.rotation, (Fc[0] - u[0]) / r, (u[1] - Fc[1]) / r);
        this.e = null;
        return !0
    };
    Ep.prototype.cc = function (b, c, d, e) {
        if (null !== this.f && (null === this.e && (this.e = zd(), Fd(this.n, this.e)), b = Rm(b, this.e), 0 < this.f.getImageData(b[0], b[1], 1, 1).data[3]))return d.call(e, this.b)
    };
    function Fp(b) {
        Om.call(this, b);
        this.d = !1;
        this.q = -1;
        this.i = NaN;
        this.g = Kd();
        this.c = this.f = null;
        this.e = di()
    }

    w(Fp, Om);
    Fp.prototype.o = function (b, c, d) {
        var e = b.extent, f = b.focus, g = b.pixelRatio, h = b.skippedFeatureUids, k = b.viewState, n = k.projection, k = k.rotation, p = n.G(), q = this.b.da(), r = Qm(this, b, 0);
        Pm(this, "precompose", d, b, r);
        var t = this.c;
        if (null !== t && !t.la()) {
            var u;
            bd(this.b, "render") ? (this.e.canvas.width = d.canvas.width, this.e.canvas.height = d.canvas.height, u = this.e) : u = d;
            var A = u.globalAlpha;
            u.globalAlpha = c.opacity;
            c = {};
            f = f[0];
            if (q.J && n.c && !Td(p, e)) {
                n = p[0];
                q = p[2];
                Nm(t, u, g, r, k, n <= f && f <= q ? h : c);
                for (var z = e[0], C = ie(p), B = 0, y; z <
                p[0];)--B, y = C * B, r = Qm(this, b, y), Nm(t, u, g, r, k, n + y <= f && f <= q + y ? h : c), z += C;
                B = 0;
                for (z = e[2]; z > p[2];)++B, y = C * B, r = Qm(this, b, y), Nm(t, u, g, r, k, n + y <= f && f <= q + y ? h : c), z -= C
            } else Nm(t, u, g, r, k, h);
            u != d && (Pm(this, "render", u, b, r), d.drawImage(u.canvas, 0, 0));
            u.globalAlpha = A
        }
        Pm(this, "postcompose", d, b, r)
    };
    Fp.prototype.Pa = function (b, c, d, e) {
        if (null !== this.c) {
            var f = this.b, g = {};
            return this.c.c(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
                var c = ma(b).toString();
                if (!(c in g))return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    Fp.prototype.n = function () {
        xj(this)
    };
    Fp.prototype.ef = function (b) {
        function c(b) {
            var c;
            m(b.c) ? c = b.c.call(b, p) : m(d.b) && (c = (0, d.b)(b, p));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e)g = kn(t, b, c[e], jn(p, q), this.n, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }

        var d = this.b, e = d.da();
        Aj(b.attributions, e.d);
        Bj(b, e);
        var f = b.viewHints[0], g = b.viewHints[1], h = d.o, k = d.l;
        if (!this.d && !h && f || !k && g)return !0;
        var n = b.extent, f = b.viewState, g = f.projection, p = f.resolution, q = b.pixelRatio, h = d.a, r = d.c, k = d.get("renderOrder");
        m(k) || (k = hn);
        n = Od(n, r * p);
        r = f.projection.G();
        e.J && f.projection.c && !Td(r, b.extent) && (n[0] = r[0], n[2] = r[2]);
        if (!this.d && this.i == p && this.q == h && this.f == k && Td(this.g, n))return !0;
        qc(this.c);
        this.c = null;
        this.d = !1;
        var t = new Jm(.5 * p / q, n, p, d.c);
        e.Zb(n, p, g);
        if (null === k)e.Bb(n, p, c, this); else {
            var u = [];
            e.Bb(n, p, function (b) {
                u.push(b)
            }, this);
            gb(u, k);
            Sa(u, c, this)
        }
        Km(t);
        this.i = p;
        this.q = h;
        this.f = k;
        this.g = n;
        this.c = t;
        return !0
    };
    function Gp(b, c) {
        Kj.call(this, 0, c);
        this.d = di();
        this.a = this.d.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Of(b, this.a, 0);
        this.b = !0;
        this.e = zd()
    }

    w(Gp, Kj);
    Gp.prototype.Ge = function (b) {
        return b instanceof I ? new Dp(b) : b instanceof L ? new Ep(b) : b instanceof M ? new Fp(b) : null
    };
    function Hp(b, c, d) {
        var e = b.f, f = b.d;
        if (bd(e, c)) {
            var g = d.extent, h = d.pixelRatio, k = d.viewState, n = k.projection, p = k.resolution, k = k.rotation, q = 0;
            if (n.c) {
                var r = n.G(), n = ie(r), t = d.focus[0];
                if (t < r[0] || t > r[2])q = Math.ceil((r[0] - t) / n), q *= n, g = [g[0] + q, g[1], g[2] + q, g[3]]
            }
            n = d.pixelRatio;
            r = d.viewState;
            t = r.resolution;
            q = tj(b.e, b.a.width / 2, b.a.height / 2, n / t, -n / t, -r.rotation, -r.center[0] - q, -r.center[1]);
            p = new Jm(.5 * p / h, g, p);
            g = new gm(f, h, g, q, k);
            e.dispatchEvent(new ml(c, e, g, p, d, f, null));
            Km(p);
            p.la() || Nm(p, f, h, q, k, {});
            sm(g);
            b.c = p
        }
    }

    Gp.prototype.L = function () {
        return "canvas"
    };
    Gp.prototype.pe = function (b) {
        if (null === b)this.b && (lg(this.a, !1), this.b = !1); else {
            var c = this.d, d = b.size[0] * b.pixelRatio, e = b.size[1] * b.pixelRatio;
            this.a.width != d || this.a.height != e ? (this.a.width = d, this.a.height = e) : c.clearRect(0, 0, this.a.width, this.a.height);
            Lj(b);
            Hp(this, "precompose", b);
            var d = b.layerStatesArray, e = b.viewState.resolution, f, g, h, k;
            f = 0;
            for (g = d.length; f < g; ++f)k = d[f], h = k.layer, h = Nj(this, h), qj(k, e) && "ready" == k.i && h.ef(b, k) && h.o(b, k, c);
            Hp(this, "postcompose", b);
            this.b || (lg(this.a, !0), this.b = !0);
            Oj(this, b);
            b.postRenderFunctions.push(Mj)
        }
    };
    function Ip(b, c) {
        wj.call(this, b);
        this.target = c
    }

    w(Ip, wj);
    Ip.prototype.e = ca;
    Ip.prototype.i = ca;
    function Jp(b) {
        var c = Lf("DIV");
        c.style.position = "absolute";
        Ip.call(this, b, c);
        this.c = null;
        this.d = Bd()
    }

    w(Jp, Ip);
    Jp.prototype.Pa = function (b, c, d, e) {
        var f = this.b;
        return f.da().ce(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    Jp.prototype.e = function () {
        Nf(this.target);
        this.c = null
    };
    Jp.prototype.g = function (b, c) {
        var d = b.viewState, e = d.center, f = d.resolution, g = d.rotation, h = this.c, k = this.b.da(), n = b.viewHints, p = b.extent;
        m(c.extent) && (p = ge(p, c.extent));
        n[0] || n[1] || je(p) || (d = d.projection, n = k.g, null === n || (d = n), p = k.Bc(p, f, b.pixelRatio, d), null === p || yj(this, p) && (h = p));
        null !== h && (d = h.G(), n = h.resolution, p = zd(), tj(p, b.size[0] / 2, b.size[1] / 2, n / f, n / f, g, (d[0] - e[0]) / n, (e[1] - d[3]) / n), h != this.c && (e = h.a(this), e.style.maxWidth = "none", e.style.position = "absolute", Nf(this.target), this.target.appendChild(e),
            this.c = h), uj(p, this.d) || (hi(this.target, p), Cd(this.d, p)), Aj(b.attributions, h.g), Bj(b, k));
        return !0
    };
    function Kp(b) {
        var c = Lf("DIV");
        c.style.position = "absolute";
        Ip.call(this, b, c);
        this.d = !0;
        this.q = 1;
        this.f = 0;
        this.c = {}
    }

    w(Kp, Ip);
    Kp.prototype.e = function () {
        Nf(this.target);
        this.f = 0
    };
    Kp.prototype.g = function (b, c) {
        if (!c.visible)return this.d && (lg(this.target, !1), this.d = !1), !0;
        var d = b.pixelRatio, e = b.viewState, f = e.projection, g = this.b, h = g.da(), k = ch(h, f), n = h.Bd(), p = Wg(k, e.resolution), q = k.oa(p), r = e.center, t;
        q == e.resolution ? (r = Dj(r, q, b.size), t = ee(r, q, e.rotation, b.size)) : t = b.extent;
        m(c.extent) && (t = ge(t, c.extent));
        var q = Tg(k, t, q), u = {};
        u[p] = {};
        var A = this.yd(h, u), z = g.c(), C = Kd(), B = new ff(0, 0, 0, 0), y, K, J, H;
        for (J = q.b; J <= q.d; ++J)for (H = q.a; H <= q.c; ++H)y = h.Ub(p, J, H, d, f), K = y.state, 2 == K ? u[p][ef(y.a)] =
            y : 4 == K || 3 == K && !z || (K = Pg(k, y.a, A, B, C), K || (y = Sg(k, y.a, B, C), null === y || A(p + 1, y)));
        var Q;
        if (this.f != h.a) {
            for (Q in this.c)z = this.c[+Q], Pf(z.target);
            this.c = {};
            this.f = h.a
        }
        C = Ua(tb(u), Number);
        gb(C);
        var A = {}, sa;
        J = 0;
        for (H = C.length; J < H; ++J) {
            Q = C[J];
            Q in this.c ? z = this.c[Q] : (z = k.bd(r, Q), z = new Lp(k, z), A[Q] = !0, this.c[Q] = z);
            Q = u[Q];
            for (sa in Q) {
                y = z;
                K = Q[sa];
                var Oa = n, O = K.a, za = O[0], bb = O[1], Ga = O[2], O = ef(O);
                if (!(O in y.b)) {
                    var za = ld(y.d.ra(za), y.i), Bb = K.Ma(y), Za = Bb.style;
                    Za.maxWidth = "none";
                    var Fc = void 0, lc = void 0;
                    0 < Oa ? (Fc =
                        Lf("DIV"), lc = Fc.style, lc.overflow = "hidden", lc.width = za[0] + "px", lc.height = za[1] + "px", Za.position = "absolute", Za.left = -Oa + "px", Za.top = -Oa + "px", Za.width = za[0] + 2 * Oa + "px", Za.height = za[1] + 2 * Oa + "px", Fc.appendChild(Bb)) : (Za.width = za[0] + "px", Za.height = za[1] + "px", Fc = Bb, lc = Za);
                    lc.position = "absolute";
                    lc.left = (bb - y.c[1]) * za[0] + "px";
                    lc.top = (y.c[2] - Ga) * za[1] + "px";
                    null === y.a && (y.a = document.createDocumentFragment());
                    y.a.appendChild(Fc);
                    y.b[O] = K
                }
            }
            null !== z.a && (z.target.appendChild(z.a), z.a = null)
        }
        n = Ua(tb(this.c), Number);
        gb(n);
        J = zd();
        sa = 0;
        for (C = n.length; sa < C; ++sa)if (Q = n[sa], z = this.c[Q], Q in u)if (y = z.f, H = z.g, tj(J, b.size[0] / 2, b.size[1] / 2, y / e.resolution, y / e.resolution, e.rotation, (H[0] - r[0]) / y, (r[1] - H[1]) / y), H = z, y = J, uj(y, H.e) || (hi(H.target, y), Cd(H.e, y)), Q in A) {
            for (--Q; 0 <= Q; --Q)if (Q in this.c) {
                H = this.c[Q].target;
                H.parentNode && H.parentNode.insertBefore(z.target, H.nextSibling);
                break
            }
            0 > Q && Of(this.target, z.target, 0)
        } else {
            if (!b.viewHints[0] && !b.viewHints[1]) {
                K = Rg(z.d, t, z.c[0], B);
                Q = [];
                y = H = void 0;
                for (y in z.b)H = z.b[y], K.contains(H.a) ||
                Q.push(H);
                Oa = K = void 0;
                K = 0;
                for (Oa = Q.length; K < Oa; ++K)H = Q[K], y = ef(H.a), Pf(H.Ma(z)), delete z.b[y]
            }
        } else Pf(z.target), delete this.c[Q];
        c.opacity != this.q && (this.q = this.target.style.opacity = c.opacity);
        c.visible && !this.d && (lg(this.target, !0), this.d = !0);
        Cj(b.usedTiles, h, p, q);
        Ej(b, h, k, d, f, t, p, g.b());
        zj(b, h);
        Bj(b, h);
        return !0
    };
    function Lp(b, c) {
        this.target = Lf("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.d = b;
        this.c = c;
        this.g = ce(Qg(b, c));
        this.f = b.oa(c[0]);
        this.b = {};
        this.a = null;
        this.e = Bd();
        this.i = [0, 0]
    };
    function Mp(b) {
        this.f = di();
        var c = this.f.canvas;
        c.style.maxWidth = "none";
        c.style.position = "absolute";
        Ip.call(this, b, c);
        this.d = !1;
        this.l = -1;
        this.o = NaN;
        this.q = Kd();
        this.c = this.n = null;
        this.J = zd();
        this.p = zd()
    }

    w(Mp, Ip);
    Mp.prototype.i = function (b, c) {
        var d = b.viewState, e = d.center, f = d.rotation, g = d.resolution, d = b.pixelRatio, h = b.size[0], k = b.size[1], n = h * d, p = k * d, e = tj(this.J, d * h / 2, d * k / 2, d / g, -d / g, -f, -e[0], -e[1]), g = this.f;
        g.canvas.width = n;
        g.canvas.height = p;
        h = tj(this.p, 0, 0, 1 / d, 1 / d, 0, -(n - h) / 2 * d, -(p - k) / 2 * d);
        hi(g.canvas, h);
        Np(this, "precompose", b, e);
        h = this.c;
        null === h || h.la() || (g.globalAlpha = c.opacity, Nm(h, g, d, e, f, b.skippedFeatureUids), Np(this, "render", b, e));
        Np(this, "postcompose", b, e)
    };
    function Np(b, c, d, e) {
        var f = b.f;
        b = b.b;
        bd(b, c) && (e = new gm(f, d.pixelRatio, d.extent, e, d.viewState.rotation), b.dispatchEvent(new ml(c, b, e, null, d, f, null)), sm(e))
    }

    Mp.prototype.Pa = function (b, c, d, e) {
        if (null !== this.c) {
            var f = this.b, g = {};
            return this.c.c(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
                var c = ma(b).toString();
                if (!(c in g))return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    Mp.prototype.H = function () {
        xj(this)
    };
    Mp.prototype.g = function (b) {
        function c(b) {
            var c;
            m(b.c) ? c = b.c.call(b, n) : m(d.b) && (c = (0, d.b)(b, n));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e)g = kn(q, b, c[e], jn(n, p), this.H, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }

        var d = this.b, e = d.da();
        Aj(b.attributions, e.d);
        Bj(b, e);
        var f = b.viewHints[0], g = b.viewHints[1], h = d.o, k = d.l;
        if (!this.d && !h && f || !k && g)return !0;
        var g = b.extent, h = b.viewState, f = h.projection, n = h.resolution, p = b.pixelRatio;
        b = d.a;
        k = d.c;
        h = d.get("renderOrder");
        m(h) || (h = hn);
        g = Od(g, k * n);
        if (!this.d &&
            this.o == n && this.l == b && this.n == h && Td(this.q, g))return !0;
        qc(this.c);
        this.c = null;
        this.d = !1;
        var q = new Jm(.5 * n / p, g, n, d.c);
        e.Zb(g, n, f);
        if (null === h)e.Bb(g, n, c, this); else {
            var r = [];
            e.Bb(g, n, function (b) {
                r.push(b)
            }, this);
            gb(r, h);
            Sa(r, c, this)
        }
        Km(q);
        this.o = n;
        this.l = b;
        this.n = h;
        this.q = g;
        this.c = q;
        return !0
    };
    function Op(b, c) {
        Kj.call(this, 0, c);
        this.b = null;
        this.b = di();
        var d = this.b.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        Of(b, d, 0);
        this.e = zd();
        this.a = Lf("DIV");
        this.a.className = "ol-unselectable";
        d = this.a.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        x(this.a, "touchstart", tc);
        Of(b, this.a, 0);
        this.d = !0
    }

    w(Op, Kj);
    Op.prototype.N = function () {
        Pf(this.a);
        Op.S.N.call(this)
    };
    Op.prototype.Ge = function (b) {
        if (b instanceof I)b = new Jp(b); else if (b instanceof L)b = new Kp(b); else if (b instanceof M)b = new Mp(b); else return null;
        return b
    };
    function Pp(b, c, d) {
        var e = b.f;
        if (bd(e, c)) {
            var f = d.extent, g = d.pixelRatio, h = d.viewState, k = h.resolution, n = h.rotation, p = b.b, q = p.canvas;
            tj(b.e, q.width / 2, q.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            h = new gm(p, g, f, b.e, n);
            f = new Jm(.5 * k / g, f, k);
            e.dispatchEvent(new ml(c, e, h, f, d, p, null));
            Km(f);
            f.la() || Nm(f, p, g, b.e, n, {});
            sm(h);
            b.c = f
        }
    }

    Op.prototype.L = function () {
        return "dom"
    };
    Op.prototype.pe = function (b) {
        if (null === b)this.d && (lg(this.a, !1), this.d = !1); else {
            var c;
            c = function (b, c) {
                Of(this.a, b, c)
            };
            var d = this.f;
            if (bd(d, "precompose") || bd(d, "postcompose")) {
                var d = this.b.canvas, e = b.pixelRatio;
                d.width = b.size[0] * e;
                d.height = b.size[1] * e
            }
            Pp(this, "precompose", b);
            var d = b.layerStatesArray, e = b.viewState.resolution, f, g, h, k;
            f = 0;
            for (g = d.length; f < g; ++f)k = d[f], h = k.layer, h = Nj(this, h), c.call(this, h.target, f), qj(k, e) && "ready" == k.i ? h.g(b, k) && h.i(b, k) : h.e();
            c = b.layerStates;
            for (var n in this.g)n in c ||
            (h = this.g[n], Pf(h.target));
            this.d || (lg(this.a, !0), this.d = !0);
            Lj(b);
            Oj(this, b);
            b.postRenderFunctions.push(Mj);
            Pp(this, "postcompose", b)
        }
    };
    function Qp(b) {
        this.a = b
    }

    function Rp(b) {
        this.a = b
    }

    w(Rp, Qp);
    Rp.prototype.L = function () {
        return 35632
    };
    function Sp(b) {
        this.a = b
    }

    w(Sp, Qp);
    Sp.prototype.L = function () {
        return 35633
    };
    function Tp() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform mat4 k;uniform float l;uniform sampler2D m;void main(void){vec4 texColor=texture2D(m,a);float alpha=texColor.a*b*l;if(alpha==0.0){discard;}gl_FragColor.a=alpha;gl_FragColor.rgb=(k*vec4(texColor.rgb,1.)).rgb;}"
    }

    w(Tp, Rp);
    da(Tp);
    function Up() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    w(Up, Sp);
    da(Up);
    function Vp(b, c) {
        this.n = b.getUniformLocation(c, "k");
        this.i = b.getUniformLocation(c, "j");
        this.q = b.getUniformLocation(c, "i");
        this.g = b.getUniformLocation(c, "l");
        this.f = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };
    function Wp() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }

    w(Wp, Rp);
    da(Wp);
    function Xp() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }

    w(Xp, Sp);
    da(Xp);
    function Yp(b, c) {
        this.i = b.getUniformLocation(c, "j");
        this.q = b.getUniformLocation(c, "i");
        this.g = b.getUniformLocation(c, "k");
        this.f = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.b = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.c = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };
    function Zp(b) {
        this.a = m(b) ? b : [];
        this.b = m(void 0) ? void 0 : 35044
    };
    function $p(b, c) {
        this.n = b;
        this.a = c;
        this.b = {};
        this.g = {};
        this.e = {};
        this.i = this.q = this.d = this.f = null;
        (this.c = Ya(wa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        x(this.n, "webglcontextlost", this.Zm, !1, this);
        x(this.n, "webglcontextrestored", this.$m, !1, this)
    }

    function aq(b, c, d) {
        var e = b.a, f = d.a, g = ma(d);
        if (g in b.b)e.bindBuffer(c, b.b[g].buffer); else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var k;
            34962 == c ? k = new Float32Array(f) : 34963 == c && (k = b.c ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, k, d.b);
            b.b[g] = {c: d, buffer: h}
        }
    }

    function bq(b, c) {
        var d = b.a, e = ma(c), f = b.b[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete b.b[e]
    }

    l = $p.prototype;
    l.N = function () {
        var b = this.a;
        b.isContextLost() || (pb(this.b, function (c) {
            b.deleteBuffer(c.buffer)
        }), pb(this.e, function (c) {
            b.deleteProgram(c)
        }), pb(this.g, function (c) {
            b.deleteShader(c)
        }), b.deleteFramebuffer(this.d), b.deleteRenderbuffer(this.i), b.deleteTexture(this.q))
    };
    l.Ym = function () {
        return this.a
    };
    l.Pe = function () {
        if (null === this.d) {
            var b = this.a, c = b.createFramebuffer();
            b.bindFramebuffer(b.FRAMEBUFFER, c);
            var d = cq(b, 1, 1), e = b.createRenderbuffer();
            b.bindRenderbuffer(b.RENDERBUFFER, e);
            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, 1, 1);
            b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, d, 0);
            b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, e);
            b.bindTexture(b.TEXTURE_2D, null);
            b.bindRenderbuffer(b.RENDERBUFFER, null);
            b.bindFramebuffer(b.FRAMEBUFFER,
                null);
            this.d = c;
            this.q = d;
            this.i = e
        }
        return this.d
    };
    function dq(b, c) {
        var d = ma(c);
        if (d in b.g)return b.g[d];
        var e = b.a, f = e.createShader(c.L());
        e.shaderSource(f, c.a);
        e.compileShader(f);
        return b.g[d] = f
    }

    function eq(b, c, d) {
        var e = ma(c) + "/" + ma(d);
        if (e in b.e)return b.e[e];
        var f = b.a, g = f.createProgram();
        f.attachShader(g, dq(b, c));
        f.attachShader(g, dq(b, d));
        f.linkProgram(g);
        return b.e[e] = g
    }

    l.Zm = function () {
        yb(this.b);
        yb(this.g);
        yb(this.e);
        this.i = this.q = this.d = this.f = null
    };
    l.$m = function () {
    };
    l.je = function (b) {
        if (b == this.f)return !1;
        this.a.useProgram(b);
        this.f = b;
        return !0
    };
    function fq(b, c, d) {
        var e = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, e);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR);
        m(c) && b.texParameteri(3553, 10242, c);
        m(d) && b.texParameteri(3553, 10243, d);
        return e
    }

    function cq(b, c, d) {
        var e = fq(b, void 0, void 0);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, c, d, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        return e
    }

    function gq(b, c) {
        var d = fq(b, 33071, 33071);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, c);
        return d
    };
    function hq(b, c) {
        this.W = this.p = void 0;
        this.lb = new wf;
        this.q = de(c);
        this.l = [];
        this.g = [];
        this.H = void 0;
        this.e = [];
        this.d = [];
        this.R = this.K = void 0;
        this.b = [];
        this.J = this.V = this.i = null;
        this.T = void 0;
        this.jb = Bd();
        this.kb = Bd();
        this.aa = this.U = void 0;
        this.mb = Bd();
        this.Fa = this.Ea = this.ma = void 0;
        this.Ra = [];
        this.f = [];
        this.a = [];
        this.o = null;
        this.c = [];
        this.n = [];
        this.Ga = void 0
    }

    w(hq, ll);
    function iq(b, c) {
        var d = b.o, e = b.i, f = b.Ra, g = b.f, h = c.a;
        return function () {
            if (!h.isContextLost()) {
                var b, n;
                b = 0;
                for (n = f.length; b < n; ++b)h.deleteTexture(f[b]);
                b = 0;
                for (n = g.length; b < n; ++b)h.deleteTexture(g[b])
            }
            bq(c, d);
            bq(c, e)
        }
    }

    function jq(b, c, d, e) {
        var f = b.p, g = b.W, h = b.H, k = b.K, n = b.R, p = b.T, q = b.U, r = b.aa, t = b.ma ? 1 : 0, u = b.Ea, A = b.Fa, z = b.Ga, C = Math.cos(u), u = Math.sin(u), B = b.b.length, y = b.a.length, K, J, H, Q, sa, Oa;
        for (K = 0; K < d; K += e)sa = c[K] - b.q[0], Oa = c[K + 1] - b.q[1], J = y / 8, H = -A * f, Q = -A * (h - g), b.a[y++] = sa, b.a[y++] = Oa, b.a[y++] = H * C - Q * u, b.a[y++] = H * u + Q * C, b.a[y++] = q / n, b.a[y++] = (r + h) / k, b.a[y++] = p, b.a[y++] = t, H = A * (z - f), Q = -A * (h - g), b.a[y++] = sa, b.a[y++] = Oa, b.a[y++] = H * C - Q * u, b.a[y++] = H * u + Q * C, b.a[y++] = (q + z) / n, b.a[y++] = (r + h) / k, b.a[y++] = p, b.a[y++] = t, H = A * (z - f),
            Q = A * g, b.a[y++] = sa, b.a[y++] = Oa, b.a[y++] = H * C - Q * u, b.a[y++] = H * u + Q * C, b.a[y++] = (q + z) / n, b.a[y++] = r / k, b.a[y++] = p, b.a[y++] = t, H = -A * f, Q = A * g, b.a[y++] = sa, b.a[y++] = Oa, b.a[y++] = H * C - Q * u, b.a[y++] = H * u + Q * C, b.a[y++] = q / n, b.a[y++] = r / k, b.a[y++] = p, b.a[y++] = t, b.b[B++] = J, b.b[B++] = J + 1, b.b[B++] = J + 2, b.b[B++] = J, b.b[B++] = J + 2, b.b[B++] = J + 3
    }

    hq.prototype.ob = function (b, c) {
        this.c.push(this.b.length);
        this.n.push(c);
        var d = b.j;
        jq(this, d, d.length, b.s)
    };
    hq.prototype.pb = function (b, c) {
        this.c.push(this.b.length);
        this.n.push(c);
        var d = b.j;
        jq(this, d, d.length, b.s)
    };
    function kq(b, c) {
        var d = c.a;
        b.l.push(b.b.length);
        b.g.push(b.b.length);
        b.o = new Zp(b.a);
        aq(c, 34962, b.o);
        b.i = new Zp(b.b);
        aq(c, 34963, b.i);
        var e = {};
        lq(b.Ra, b.e, e, d);
        lq(b.f, b.d, e, d);
        b.p = void 0;
        b.W = void 0;
        b.H = void 0;
        b.e = null;
        b.d = null;
        b.K = void 0;
        b.R = void 0;
        b.b = null;
        b.T = void 0;
        b.U = void 0;
        b.aa = void 0;
        b.ma = void 0;
        b.Ea = void 0;
        b.Fa = void 0;
        b.a = null;
        b.Ga = void 0
    }

    function lq(b, c, d, e) {
        var f, g, h, k = c.length;
        for (h = 0; h < k; ++h)f = c[h], g = ma(f).toString(), g in d ? f = d[g] : (f = gq(e, f), d[g] = f), b[h] = f
    }

    function mq(b, c, d, e, f, g, h, k, n, p, q, r, t, u, A) {
        var z = c.a;
        aq(c, 34962, b.o);
        aq(c, 34963, b.i);
        var C = k || 1 != n || p || 1 != q, B, y;
        C ? (B = Tp.Ia(), y = Up.Ia()) : (B = Wp.Ia(), y = Xp.Ia());
        y = eq(c, B, y);
        C ? null === b.V ? (B = new Vp(z, y), b.V = B) : B = b.V : null === b.J ? (B = new Yp(z, y), b.J = B) : B = b.J;
        c.je(y);
        z.enableVertexAttribArray(B.d);
        z.vertexAttribPointer(B.d, 2, 5126, !1, 32, 0);
        z.enableVertexAttribArray(B.a);
        z.vertexAttribPointer(B.a, 2, 5126, !1, 32, 8);
        z.enableVertexAttribArray(B.e);
        z.vertexAttribPointer(B.e, 2, 5126, !1, 32, 16);
        z.enableVertexAttribArray(B.b);
        z.vertexAttribPointer(B.b, 1, 5126, !1, 32, 24);
        z.enableVertexAttribArray(B.c);
        z.vertexAttribPointer(B.c, 1, 5126, !1, 32, 28);
        y = b.mb;
        tj(y, 0, 0, 2 / (e * g[0]), 2 / (e * g[1]), -f, -(d[0] - b.q[0]), -(d[1] - b.q[1]));
        d = b.kb;
        e = 2 / g[0];
        g = 2 / g[1];
        Dd(d);
        d[0] = e;
        d[5] = g;
        d[10] = 1;
        d[15] = 1;
        g = b.jb;
        Dd(g);
        0 !== f && Id(g, -f);
        z.uniformMatrix4fv(B.f, !1, y);
        z.uniformMatrix4fv(B.q, !1, d);
        z.uniformMatrix4fv(B.i, !1, g);
        z.uniform1f(B.g, h);
        C && z.uniformMatrix4fv(B.n, !1, xf(b.lb, k, n, p, q));
        var K;
        if (m(t)) {
            if (u)a:{
                f = c.c ? 5125 : 5123;
                c = c.c ? 4 : 2;
                p = b.c.length - 1;
                for (h =
                         b.f.length - 1; 0 <= h; --h)for (z.bindTexture(3553, b.f[h]), k = 0 < h ? b.g[h - 1] : 0, q = b.g[h]; 0 <= p && b.c[p] >= k;) {
                    n = b.c[p];
                    u = b.n[p];
                    C = ma(u).toString();
                    if (!m(r[C]) && (!m(A) || he(A, u.Q().G())) && (z.clear(z.COLOR_BUFFER_BIT | z.DEPTH_BUFFER_BIT), z.drawElements(4, q - n, f, n * c), q = t(u))) {
                        b = q;
                        break a
                    }
                    q = n;
                    p--
                }
                b = void 0
            } else z.clear(z.COLOR_BUFFER_BIT | z.DEPTH_BUFFER_BIT), nq(b, z, c, r, b.f, b.g), b = (b = t(null)) ? b : void 0;
            K = b
        } else nq(b, z, c, r, b.Ra, b.l);
        z.disableVertexAttribArray(B.d);
        z.disableVertexAttribArray(B.a);
        z.disableVertexAttribArray(B.e);
        z.disableVertexAttribArray(B.b);
        z.disableVertexAttribArray(B.c);
        return K
    }

    function nq(b, c, d, e, f, g) {
        var h = d.c ? 5125 : 5123;
        d = d.c ? 4 : 2;
        if (xb(e)) {
            var k;
            b = 0;
            e = f.length;
            for (k = 0; b < e; ++b) {
                c.bindTexture(3553, f[b]);
                var n = g[b];
                c.drawElements(4, n - k, h, k * d);
                k = n
            }
        } else {
            k = 0;
            var p, n = 0;
            for (p = f.length; n < p; ++n) {
                c.bindTexture(3553, f[n]);
                for (var q = 0 < n ? g[n - 1] : 0, r = g[n], t = q; k < b.c.length && b.c[k] <= r;) {
                    var u = ma(b.n[k]).toString();
                    m(e[u]) ? (t !== q && c.drawElements(4, q - t, h, t * d), q = t = k === b.c.length - 1 ? r : b.c[k + 1]) : q = k === b.c.length - 1 ? r : b.c[k + 1];
                    k++
                }
                t !== q && c.drawElements(4, q - t, h, t * d)
            }
        }
    }

    hq.prototype.$a = function (b) {
        var c = b.rb(), d = b.Lb(1), e = b.Cd(), f = b.de(1), g = b.l, h = b.wb(), k = b.p, n = b.q, p = b.Ya();
        b = b.n;
        var q;
        0 === this.e.length ? this.e.push(d) : (q = this.e[this.e.length - 1], ma(q) != ma(d) && (this.l.push(this.b.length), this.e.push(d)));
        0 === this.d.length ? this.d.push(f) : (q = this.d[this.d.length - 1], ma(q) != ma(f) && (this.g.push(this.b.length), this.d.push(f)));
        this.p = c[0];
        this.W = c[1];
        this.H = p[1];
        this.K = e[1];
        this.R = e[0];
        this.T = g;
        this.U = h[0];
        this.aa = h[1];
        this.Ea = n;
        this.ma = k;
        this.Fa = b;
        this.Ga = p[0]
    };
    function oq(b, c, d) {
        this.e = c;
        this.g = b;
        this.d = d;
        this.b = {}
    }

    function pq(b, c) {
        var d = [], e;
        for (e in b.b)d.push(iq(b.b[e], c));
        return Kg.apply(null, d)
    }

    function qq(b, c) {
        for (var d in b.b)kq(b.b[d], c)
    }

    oq.prototype.a = function (b, c) {
        var d = this.b[c];
        m(d) || (d = new rq[c](this.g, this.e), this.b[c] = d);
        return d
    };
    oq.prototype.la = function () {
        return xb(this.b)
    };
    function sq(b, c, d, e, f, g, h, k, n, p, q, r, t, u) {
        var A = tq, z, C;
        for (z = tm.length - 1; 0 <= z; --z)if (C = b.b[tm[z]], m(C) && (C = mq(C, c, d, e, f, A, g, h, k, n, p, q, r, t, u)))return C
    }

    oq.prototype.c = function (b, c, d, e, f, g, h, k, n, p, q, r, t, u) {
        var A = c.a;
        A.bindFramebuffer(A.FRAMEBUFFER, c.Pe());
        var z;
        m(this.d) && (z = Od(Vd(b), e * this.d));
        return sq(this, c, b, e, f, k, n, p, q, r, t, function (b) {
            var c = new Uint8Array(4);
            A.readPixels(0, 0, 1, 1, A.RGBA, A.UNSIGNED_BYTE, c);
            if (0 < c[3] && (b = u(b)))return b
        }, !0, z)
    };
    function uq(b, c, d, e, f, g, h, k, n, p, q) {
        var r = d.a;
        r.bindFramebuffer(r.FRAMEBUFFER, d.Pe());
        b = sq(b, d, c, e, f, g, h, k, n, p, q, function () {
            var b = new Uint8Array(4);
            r.readPixels(0, 0, 1, 1, r.RGBA, r.UNSIGNED_BYTE, b);
            return 0 < b[3]
        }, !1);
        return m(b)
    }

    var rq = {Image: hq}, tq = [1, 1];

    function vq(b, c, d, e, f, g) {
        this.b = b;
        this.e = c;
        this.d = g;
        this.i = f;
        this.f = e;
        this.g = d;
        this.c = null;
        this.a = {}
    }

    w(vq, ll);
    l = vq.prototype;
    l.rc = function (b, c) {
        var d = b.toString(), e = this.a[d];
        m(e) ? e.push(c) : this.a[d] = [c]
    };
    l.sc = function () {
    };
    l.He = function (b, c) {
        var d = (0, c.e)(b);
        if (null != d && he(this.d, d.G())) {
            var e = c.a;
            m(e) || (e = 0);
            this.rc(e, function (b) {
                b.za(c.d, c.c);
                b.$a(c.g);
                b.Aa(c.b);
                var e = wq[d.L()];
                e && e.call(b, d, null)
            })
        }
    };
    l.zd = function (b, c) {
        var d = b.d, e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e], h = wq[g.L()];
            h && h.call(this, g, c)
        }
    };
    l.pb = function (b, c) {
        var d = this.b, e = (new oq(1, this.d)).a(0, "Image");
        e.$a(this.c);
        e.pb(b, c);
        kq(e, d);
        mq(e, this.b, this.e, this.g, this.f, this.i, 1, 0, 1, 0, 1, {}, void 0, !1);
        iq(e, d)()
    };
    l.Ab = function () {
    };
    l.tc = function () {
    };
    l.ob = function (b, c) {
        var d = this.b, e = (new oq(1, this.d)).a(0, "Image");
        e.$a(this.c);
        e.ob(b, c);
        kq(e, d);
        mq(e, this.b, this.e, this.g, this.f, this.i, 1, 0, 1, 0, 1, {}, void 0, !1);
        iq(e, d)()
    };
    l.uc = function () {
    };
    l.Qb = function () {
    };
    l.qb = function () {
    };
    l.za = function () {
    };
    l.$a = function (b) {
        this.c = b
    };
    l.Aa = function () {
    };
    var wq = {Point: vq.prototype.pb, MultiPoint: vq.prototype.ob, GeometryCollection: vq.prototype.zd};

    function xq() {
        this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"
    }

    w(xq, Rp);
    da(xq);
    function yq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    w(yq, Sp);
    da(yq);
    function zq(b, c) {
        this.f = b.getUniformLocation(c, "f");
        this.c = b.getUniformLocation(c, "g");
        this.d = b.getUniformLocation(c, "e");
        this.g = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Aq() {
        this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }

    w(Aq, Rp);
    da(Aq);
    function Bq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }

    w(Bq, Sp);
    da(Bq);
    function Cq(b, c) {
        this.c = b.getUniformLocation(c, "f");
        this.d = b.getUniformLocation(c, "e");
        this.g = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "g");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Dq(b, c) {
        wj.call(this, c);
        this.c = b;
        this.R = new Zp([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.e = this.Qa = null;
        this.g = void 0;
        this.q = zd();
        this.l = Bd();
        this.T = new wf;
        this.o = this.n = null
    }

    w(Dq, wj);
    function Eq(b, c, d) {
        var e = b.c.e;
        if (m(b.g) && b.g == d)e.bindFramebuffer(36160, b.e); else {
            c.postRenderFunctions.push(ta(function (b, c, d) {
                b.isContextLost() || (b.deleteFramebuffer(c), b.deleteTexture(d))
            }, e, b.e, b.Qa));
            c = cq(e, d, d);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            b.Qa = c;
            b.e = f;
            b.g = d
        }
    }

    Dq.prototype.Kg = function (b, c, d) {
        Fq(this, "precompose", d, b);
        aq(d, 34962, this.R);
        var e = d.a, f = c.brightness || 1 != c.contrast || c.hue || 1 != c.saturation, g, h;
        f ? (g = xq.Ia(), h = yq.Ia()) : (g = Aq.Ia(), h = Bq.Ia());
        g = eq(d, g, h);
        f ? null === this.n ? this.n = h = new zq(e, g) : h = this.n : null === this.o ? this.o = h = new Cq(e, g) : h = this.o;
        d.je(g) && (e.enableVertexAttribArray(h.a), e.vertexAttribPointer(h.a, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(h.b), e.vertexAttribPointer(h.b, 2, 5126, !1, 16, 8), e.uniform1i(h.e, 0));
        e.uniformMatrix4fv(h.g, !1, this.q);
        e.uniformMatrix4fv(h.d, !1, this.l);
        f && e.uniformMatrix4fv(h.f, !1, xf(this.T, c.brightness, c.contrast, c.hue, c.saturation));
        e.uniform1f(h.c, c.opacity);
        e.bindTexture(3553, this.Qa);
        e.drawArrays(5, 0, 4);
        Fq(this, "postcompose", d, b)
    };
    function Fq(b, c, d, e) {
        b = b.b;
        if (bd(b, c)) {
            var f = e.viewState;
            b.dispatchEvent(new ml(c, b, new vq(d, f.center, f.resolution, f.rotation, e.size, e.extent), null, e, null, d))
        }
    }

    Dq.prototype.ff = function () {
        this.e = this.Qa = null;
        this.g = void 0
    };
    function Gq(b, c) {
        Dq.call(this, b, c);
        this.i = this.f = this.d = null
    }

    w(Gq, Dq);
    function Hq(b, c) {
        var d = c.a();
        return gq(b.c.e, d)
    }

    Gq.prototype.Pa = function (b, c, d, e) {
        var f = this.b;
        return f.da().ce(b, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    Gq.prototype.gf = function (b, c) {
        var d = this.c.e, e = b.pixelRatio, f = b.viewState, g = f.center, h = f.resolution, k = f.rotation, n = this.d, p = this.Qa, q = this.b.da(), r = b.viewHints, t = b.extent;
        m(c.extent) && (t = ge(t, c.extent));
        r[0] || r[1] || je(t) || (f = f.projection, r = q.g, null === r || (f = r), t = q.Bc(t, h, e, f), null !== t && yj(this, t) && (n = t, p = Hq(this, t), null === this.Qa || b.postRenderFunctions.push(ta(function (b, c) {
            b.isContextLost() || b.deleteTexture(c)
        }, d, this.Qa))));
        null !== n && (d = this.c.d.n, Iq(this, d.width, d.height, e, g, h, k, n.G()), this.i = null,
            e = this.q, Dd(e), Hd(e, 1, -1), Gd(e, 0, -1), this.d = n, this.Qa = p, Aj(b.attributions, n.g), Bj(b, q));
        return !0
    };
    function Iq(b, c, d, e, f, g, h, k) {
        c *= g;
        d *= g;
        b = b.l;
        Dd(b);
        Hd(b, 2 * e / c, 2 * e / d);
        Id(b, -h);
        Gd(b, k[0] - f[0], k[1] - f[1]);
        Hd(b, (k[2] - k[0]) / 2, (k[3] - k[1]) / 2);
        Gd(b, 1, 1)
    }

    Gq.prototype.ae = function (b, c) {
        var d = this.Pa(b, c, Gg, this);
        return m(d)
    };
    Gq.prototype.cc = function (b, c, d, e) {
        if (null !== this.d && !fa(this.d.a()))if (this.b.da()instanceof Bp) {
            if (b = b.slice(), vj(c.pixelToCoordinateMatrix, b, b), this.Pa(b, c, Gg, this))return d.call(e, this.b)
        } else {
            var f = [this.d.a().width, this.d.a().height];
            if (null === this.i) {
                var g = c.size;
                c = zd();
                Dd(c);
                Gd(c, -1, -1);
                Hd(c, 2 / g[0], 2 / g[1]);
                Gd(c, 0, g[1]);
                Hd(c, 1, -1);
                g = zd();
                Fd(this.l, g);
                var h = zd();
                Dd(h);
                Gd(h, 0, f[1]);
                Hd(h, 1, -1);
                Hd(h, f[0] / 2, f[1] / 2);
                Gd(h, 1, 1);
                var k = zd();
                Ed(h, g, k);
                Ed(k, c, k);
                this.i = k
            }
            c = [0, 0];
            vj(this.i, b, c);
            if (!(0 > c[0] ||
                c[0] > f[0] || 0 > c[1] || c[1] > f[1]) && (null === this.f && (this.f = di(1, 1)), this.f.clearRect(0, 0, 1, 1), this.f.drawImage(this.d.a(), c[0], c[1], 1, 1, 0, 0, 1, 1), 0 < this.f.getImageData(0, 0, 1, 1).data[3]))return d.call(e, this.b)
        }
    };
    function Jq() {
        this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }

    w(Jq, Rp);
    da(Jq);
    function Kq() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }

    w(Kq, Sp);
    da(Kq);
    function Lq(b, c) {
        this.c = b.getUniformLocation(c, "e");
        this.d = b.getUniformLocation(c, "d");
        this.a = b.getAttribLocation(c, "b");
        this.b = b.getAttribLocation(c, "c")
    };
    function Mq(b, c) {
        Dq.call(this, b, c);
        this.H = Jq.Ia();
        this.U = Kq.Ia();
        this.d = null;
        this.J = new Zp([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.p = this.f = null;
        this.i = -1;
        this.K = [0, 0]
    }

    w(Mq, Dq);
    l = Mq.prototype;
    l.N = function () {
        bq(this.c.d, this.J);
        Mq.S.N.call(this)
    };
    l.yd = function (b, c) {
        var d = this.c;
        return function (e, f) {
            return bh(b, e, f, function (b) {
                var f = wg(d.b, b.hb());
                f && (c[e] || (c[e] = {}), c[e][b.a.toString()] = b);
                return f
            })
        }
    };
    l.ff = function () {
        Mq.S.ff.call(this);
        this.d = null
    };
    l.gf = function (b, c, d) {
        var e = this.c, f = d.a, g = b.viewState, h = g.projection, k = this.b, n = k.da(), p = ch(n, h), q = Wg(p, g.resolution), r = p.oa(q), t = n.Vb(q, b.pixelRatio, h), u = t[0] / ld(p.ra(q), this.K)[0], A = r / u, z = n.Bd(), C = g.center, B;
        r == g.resolution ? (C = Dj(C, r, b.size), B = ee(C, r, g.rotation, b.size)) : B = b.extent;
        r = Tg(p, B, r);
        if (null !== this.f && hf(this.f, r) && this.i == n.a)A = this.p; else {
            var y = [jf(r), r.c - r.a + 1], y = Math.max(y[0] * t[0], y[1] * t[1]), K = Math.pow(2, Math.ceil(Math.log(y) / Math.LN2)), y = A * K, J = p.dc(q), H = J[0] + r.b * t[0] * A, A = J[1] + r.a *
                t[1] * A, A = [H, A, H + y, A + y];
            Eq(this, b, K);
            f.viewport(0, 0, K, K);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            K = eq(d, this.H, this.U);
            d.je(K);
            null === this.d && (this.d = new Lq(f, K));
            aq(d, 34962, this.J);
            f.enableVertexAttribArray(this.d.a);
            f.vertexAttribPointer(this.d.a, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.d.b);
            f.vertexAttribPointer(this.d.b, 2, 5126, !1, 16, 8);
            f.uniform1i(this.d.c, 0);
            d = {};
            d[q] = {};
            var Q = this.yd(n, d), sa = k.c(), K = !0, H = Kd(), Oa = new ff(0, 0, 0, 0), O, za, bb;
            for (za = r.b; za <= r.d; ++za)for (bb = r.a; bb <=
            r.c; ++bb) {
                J = n.Ub(q, za, bb, u, h);
                if (m(c.extent) && (O = Qg(p, J.a, H), !he(O, c.extent)))continue;
                O = J.state;
                if (2 == O) {
                    if (wg(e.b, J.hb())) {
                        d[q][ef(J.a)] = J;
                        continue
                    }
                } else if (4 == O || 3 == O && !sa)continue;
                K = !1;
                O = Pg(p, J.a, Q, Oa, H);
                O || (J = Sg(p, J.a, Oa, H), null === J || Q(q + 1, J))
            }
            c = Ua(tb(d), Number);
            gb(c);
            for (var Q = new Float32Array(4), Ga, Bb, Za, sa = 0, Oa = c.length; sa < Oa; ++sa)for (Ga in Bb = d[c[sa]], Bb)J = Bb[Ga], O = Qg(p, J.a, H), za = 2 * (O[2] - O[0]) / y, bb = 2 * (O[3] - O[1]) / y, Za = 2 * (O[0] - A[0]) / y - 1, O = 2 * (O[1] - A[1]) / y - 1, yd(Q, za, bb, Za, O), f.uniform4fv(this.d.d,
                Q), Nq(e, J, t, z * u), f.drawArrays(5, 0, 4);
            K ? (this.f = r, this.p = A, this.i = n.a) : (this.p = this.f = null, this.i = -1, b.animate = !0)
        }
        Cj(b.usedTiles, n, q, r);
        var Fc = e.q;
        Ej(b, n, p, u, h, B, q, k.b(), function (b) {
            var c;
            (c = 2 != b.state || wg(e.b, b.hb())) || (c = b.hb()in Fc.c);
            c || Fj(Fc, [b, Vg(p, b.a), p.oa(b.a[0]), t, z * u])
        }, this);
        zj(b, n);
        Bj(b, n);
        f = this.q;
        Dd(f);
        Gd(f, (C[0] - A[0]) / (A[2] - A[0]), (C[1] - A[1]) / (A[3] - A[1]));
        0 !== g.rotation && Id(f, g.rotation);
        Hd(f, b.size[0] * g.resolution / (A[2] - A[0]), b.size[1] * g.resolution / (A[3] - A[1]));
        Gd(f, -.5, -.5);
        return !0
    };
    l.cc = function (b, c, d, e) {
        if (null !== this.e) {
            var f = [0, 0];
            vj(this.q, [b[0] / c.size[0], (c.size[1] - b[1]) / c.size[1]], f);
            b = [f[0] * this.g, f[1] * this.g];
            c = this.c.d.a;
            c.bindFramebuffer(c.FRAMEBUFFER, this.e);
            f = new Uint8Array(4);
            c.readPixels(b[0], b[1], 1, 1, c.RGBA, c.UNSIGNED_BYTE, f);
            if (0 < f[3])return d.call(e, this.b)
        }
    };
    function Oq(b, c) {
        Dq.call(this, b, c);
        this.i = !1;
        this.K = -1;
        this.H = NaN;
        this.p = Kd();
        this.f = this.d = this.J = null
    }

    w(Oq, Dq);
    l = Oq.prototype;
    l.Kg = function (b, c, d) {
        this.f = c;
        var e = b.viewState, f = this.d;
        if (null !== f && !f.la()) {
            var g = e.center, h = e.resolution, e = e.rotation, k = b.size, n = c.opacity, p = c.brightness, q = c.contrast, r = c.hue;
            c = c.saturation;
            b = b.skippedFeatureUids;
            var t, u, A;
            t = 0;
            for (u = tm.length; t < u; ++t)A = f.b[tm[t]], m(A) && mq(A, d, g, h, e, k, n, p, q, r, c, b, void 0, !1)
        }
    };
    l.N = function () {
        var b = this.d;
        null !== b && (pq(b, this.c.d)(), this.d = null);
        Oq.S.N.call(this)
    };
    l.Pa = function (b, c, d, e) {
        if (null !== this.d && null !== this.f) {
            var f = c.viewState, g = this.b, h = this.f, k = {};
            return this.d.c(b, this.c.d, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, h.opacity, h.brightness, h.contrast, h.hue, h.saturation, c.skippedFeatureUids, function (b) {
                var c = ma(b).toString();
                if (!(c in k))return k[c] = !0, d.call(e, b, g)
            })
        }
    };
    l.ae = function (b, c) {
        if (null === this.d || null === this.f)return !1;
        var d = c.viewState, e = this.f;
        return uq(this.d, b, this.c.d, d.resolution, d.rotation, e.opacity, e.brightness, e.contrast, e.hue, e.saturation, c.skippedFeatureUids)
    };
    l.cc = function (b, c, d, e) {
        b = b.slice();
        vj(c.pixelToCoordinateMatrix, b, b);
        if (this.ae(b, c))return d.call(e, this.b)
    };
    l.Sl = function () {
        xj(this)
    };
    l.gf = function (b, c, d) {
        function e(b) {
            var c;
            m(b.c) ? c = b.c.call(b, p) : m(f.b) && (c = (0, f.b)(b, p));
            if (null != c) {
                if (null != c) {
                    var d, e, g = !1;
                    d = 0;
                    for (e = c.length; d < e; ++d)g = kn(t, b, c[d], jn(p, q), this.Sl, this) || g;
                    b = g
                } else b = !1;
                this.i = this.i || b
            }
        }

        var f = this.b;
        c = f.da();
        Aj(b.attributions, c.d);
        Bj(b, c);
        var g = b.viewHints[0], h = b.viewHints[1], k = f.o, n = f.l;
        if (!this.i && !k && g || !n && h)return !0;
        var h = b.extent, k = b.viewState, g = k.projection, p = k.resolution, q = b.pixelRatio, k = f.a, r = f.c, n = f.get("renderOrder");
        m(n) || (n = hn);
        h = Od(h, r * p);
        if (!this.i &&
            this.H == p && this.K == k && this.J == n && Td(this.p, h))return !0;
        null === this.d || b.postRenderFunctions.push(pq(this.d, d));
        this.i = !1;
        var t = new oq(.5 * p / q, h, f.c);
        c.Zb(h, p, g);
        if (null === n)c.Bb(h, p, e, this); else {
            var u = [];
            c.Bb(h, p, function (b) {
                u.push(b)
            }, this);
            gb(u, n);
            Sa(u, e, this)
        }
        qq(t, d);
        this.H = p;
        this.K = k;
        this.J = n;
        this.p = h;
        this.d = t;
        return !0
    };
    function Pq(b, c) {
        Kj.call(this, 0, c);
        this.a = Lf("CANVAS");
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Of(b, this.a, 0);
        this.p = this.J = 0;
        this.H = di();
        this.n = !0;
        this.e = ji(this.a, {
            antialias: !0,
            depth: !1,
            failIfMajorPerformanceCaveat: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.d = new $p(this.a, this.e);
        x(this.a, "webglcontextlost", this.Ql, !1, this);
        x(this.a, "webglcontextrestored", this.Rl, !1, this);
        this.b = new vg;
        this.l = null;
        this.q = new Pj(ra(function (b) {
            var c = b[1];
            b = b[2];
            var f = c[0] - this.l[0], c = c[1] - this.l[1];
            return 65536 * Math.log(b) + Math.sqrt(f * f + c * c) / b
        }, this), function (b) {
            return b[0].hb()
        });
        this.K = ra(function () {
            if (!this.q.la()) {
                Tj(this.q);
                var b = Qj(this.q);
                Nq(this, b[0], b[3], b[4])
            }
        }, this);
        this.i = 0;
        Qq(this)
    }

    w(Pq, Kj);
    function Nq(b, c, d, e) {
        var f = b.e, g = c.hb();
        if (wg(b.b, g))b = b.b.get(g), f.bindTexture(3553, b.Qa), 9729 != b.ng && (f.texParameteri(3553, 10240, 9729), b.ng = 9729), 9729 != b.og && (f.texParameteri(3553, 10240, 9729), b.og = 9729); else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var k = b.H.canvas, n = b.H;
                b.J !== d[0] || b.p !== d[1] ? (k.width = d[0], k.height = d[1], b.J = d[0], b.p = d[1]) : n.clearRect(0, 0, d[0], d[1]);
                n.drawImage(c.Ma(), e, e, d[0], d[1], 0, 0, d[0], d[1]);
                f.texImage2D(3553, 0, 6408, 6408, 5121, k)
            } else f.texImage2D(3553, 0, 6408, 6408,
                5121, c.Ma());
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553, 10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            b.b.set(g, {Qa: h, ng: 9729, og: 9729})
        }
    }

    l = Pq.prototype;
    l.Ge = function (b) {
        return b instanceof I ? new Gq(this, b) : b instanceof L ? new Mq(this, b) : b instanceof M ? new Oq(this, b) : null
    };
    function Rq(b, c, d) {
        var e = b.f;
        if (bd(e, c)) {
            var f = b.d, g = d.extent, h = d.size, k = d.viewState, n = k.resolution, p = k.center, q = k.rotation, k = new vq(f, p, n, q, h, g), g = new oq(.5 * n / d.pixelRatio, g);
            e.dispatchEvent(new ml(c, e, k, g, d, null, f));
            qq(g, f);
            if (!g.la()) {
                var r = Sq;
                c = r.opacity;
                d = r.brightness;
                var e = r.contrast, t = r.hue, r = r.saturation, u = {}, A, z, C;
                A = 0;
                for (z = tm.length; A < z; ++A)C = g.b[tm[A]], m(C) && mq(C, f, p, n, q, h, c, d, e, t, r, u, void 0, !1)
            }
            pq(g, f)();
            f = Ua(tb(k.a), Number);
            gb(f);
            h = 0;
            for (n = f.length; h < n; ++h)for (p = k.a[f[h].toString()],
                                                   q = 0, c = p.length; q < c; ++q)p[q](k);
            b.c = g
        }
    }

    l.N = function () {
        var b = this.e;
        b.isContextLost() || this.b.forEach(function (c) {
            null === c || b.deleteTexture(c.Qa)
        });
        qc(this.d);
        Pq.S.N.call(this)
    };
    l.Di = function (b, c) {
        for (var d = this.e, e; 1024 < this.b.Sb() - this.i;) {
            e = this.b.a.qc;
            if (null === e)if (+this.b.a.Sd == c.index)break; else--this.i; else d.deleteTexture(e.Qa);
            this.b.pop()
        }
    };
    l.L = function () {
        return "webgl"
    };
    l.Ql = function (b) {
        b.preventDefault();
        this.b.clear();
        this.i = 0;
        pb(this.g, function (b) {
            b.ff()
        })
    };
    l.Rl = function () {
        Qq(this);
        this.f.render()
    };
    function Qq(b) {
        b = b.e;
        b.activeTexture(33984);
        b.blendFuncSeparate(770, 771, 1, 771);
        b.disable(2884);
        b.disable(2929);
        b.disable(3089);
        b.disable(2960)
    }

    l.pe = function (b) {
        var c = this.d, d = this.e;
        if (d.isContextLost())return !1;
        if (null === b)return this.n && (lg(this.a, !1), this.n = !1), !1;
        this.l = b.focus;
        this.b.set((-b.index).toString(), null);
        ++this.i;
        var e = [], f = b.layerStatesArray, g = b.viewState.resolution, h, k, n, p;
        h = 0;
        for (k = f.length; h < k; ++h)p = f[h], qj(p, g) && "ready" == p.i && (n = Nj(this, p.layer), n.gf(b, p, c) && e.push(p));
        f = b.size[0] * b.pixelRatio;
        g = b.size[1] * b.pixelRatio;
        if (this.a.width != f || this.a.height != g)this.a.width = f, this.a.height = g;
        d.bindFramebuffer(36160, null);
        d.clearColor(0,
            0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.a.width, this.a.height);
        Rq(this, "precompose", b);
        h = 0;
        for (k = e.length; h < k; ++h)p = e[h], n = Nj(this, p.layer), n.Kg(b, p, c);
        this.n || (lg(this.a, !0), this.n = !0);
        Lj(b);
        1024 < this.b.Sb() - this.i && b.postRenderFunctions.push(ra(this.Di, this));
        this.q.la() || (b.postRenderFunctions.push(this.K), b.animate = !0);
        Rq(this, "postcompose", b);
        Oj(this, b);
        b.postRenderFunctions.push(Mj)
    };
    l.df = function (b, c, d, e, f, g) {
        var h;
        if (this.e.isContextLost())return !1;
        var k = this.d, n = c.viewState;
        if (null !== this.c) {
            var p = {}, q = Sq;
            if (h = this.c.c(b, k, n.center, n.resolution, n.rotation, c.size, c.pixelRatio, q.opacity, q.brightness, q.contrast, q.hue, q.saturation, {}, function (b) {
                    var c = ma(b).toString();
                    if (!(c in p))return p[c] = !0, d.call(e, b, null)
                }))return h
        }
        k = c.layerStatesArray;
        for (q = k.length - 1; 0 <= q; --q) {
            h = k[q];
            var r = h.layer;
            if (qj(h, n.resolution) && f.call(g, r) && (h = Nj(this, r).Pa(b, c, d, e)))return h
        }
    };
    l.Jg = function (b, c, d, e) {
        var f = !1;
        if (this.e.isContextLost())return !1;
        var g = this.d, h = c.viewState;
        if (null !== this.c && (f = Sq, f = uq(this.c, b, g, h.resolution, h.rotation, f.opacity, f.brightness, f.contrast, f.hue, f.saturation, {})))return !0;
        var g = c.layerStatesArray, k;
        for (k = g.length - 1; 0 <= k; --k) {
            var n = g[k], p = n.layer;
            if (qj(n, h.resolution) && d.call(e, p) && (f = Nj(this, p).ae(b, c)))return !0
        }
        return f
    };
    l.Ig = function (b, c, d, e, f) {
        if (this.e.isContextLost())return !1;
        var g = this.d, h = c.viewState, k;
        if (null !== this.c) {
            var n = Sq;
            k = this.f.ka(b);
            if (uq(this.c, k, g, h.resolution, h.rotation, n.opacity, n.brightness, n.contrast, n.hue, n.saturation, {}) && (k = d.call(e, null)))return k
        }
        g = c.layerStatesArray;
        for (n = g.length - 1; 0 <= n; --n) {
            k = g[n];
            var p = k.layer;
            if (qj(k, h.resolution) && f.call(e, p) && (k = Nj(this, p).cc(b, c, d, e)))return k
        }
    };
    var Sq = {opacity: 1, brightness: 0, contrast: 1, hue: 0, saturation: 1};
    var Tq = ["canvas", "webgl", "dom"];

    function W(b) {
        fd.call(this);
        var c = Uq(b);
        this.kb = m(b.loadTilesWhileAnimating) ? b.loadTilesWhileAnimating : !1;
        this.lb = m(b.loadTilesWhileInteracting) ? b.loadTilesWhileInteracting : !1;
        this.Mc = m(b.pixelRatio) ? b.pixelRatio : li;
        this.mb = c.logos;
        this.o = new th(this.Rn, void 0, this);
        pc(this, this.o);
        this.Ra = zd();
        this.ze = zd();
        this.jb = 0;
        this.c = null;
        this.ma = Kd();
        this.f = this.H = null;
        this.b = If("DIV", "ol-viewport");
        this.b.style.position = "relative";
        this.b.style.overflow = "hidden";
        this.b.style.width = "100%";
        this.b.style.height =
            "100%";
        this.b.style.msTouchAction = "none";
        qi && (this.b.className = "ol-touch");
        this.U = If("DIV", "ol-overlaycontainer");
        this.b.appendChild(this.U);
        this.p = If("DIV", "ol-overlaycontainer-stopevent");
        x(this.p, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", kj, Jb ? "DOMMouseScroll" : "mousewheel"], sc);
        this.b.appendChild(this.p);
        b = new cj(this);
        x(b, sb(nj), this.gg, !1, this);
        pc(this, b);
        this.T = c.keyboardEventTarget;
        this.l = new Nh;
        x(this.l, "key", this.fg, !1, this);
        pc(this, this.l);
        b = new Vh(this.b);
        x(b, "mousewheel",
            this.fg, !1, this);
        pc(this, b);
        this.e = c.controls;
        this.d = c.interactions;
        this.g = c.overlays;
        this.i = new c.Tn(this.b, this);
        pc(this, this.i);
        this.Ga = new Ih;
        pc(this, this.Ga);
        this.K = this.n = null;
        this.J = [];
        this.aa = [];
        this.Fa = new Uj(ra(this.yj, this), ra(this.bl, this));
        this.R = {};
        x(this, hd("layergroup"), this.Pj, !1, this);
        x(this, hd("view"), this.lk, !1, this);
        x(this, hd("size"), this.ik, !1, this);
        x(this, hd("target"), this.kk, !1, this);
        this.t(c.values);
        this.e.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.e, "add", function (b) {
                b.element.setMap(this)
            },
            !1, this);
        x(this.e, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.d.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.d, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        x(this.d, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.g.forEach(function (b) {
            b.setMap(this)
        }, this);
        x(this.g, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        x(this.g, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this)
    }

    w(W, fd);
    l = W.prototype;
    l.ti = function (b) {
        this.e.push(b)
    };
    l.ui = function (b) {
        this.d.push(b)
    };
    l.Kf = function (b) {
        this.Tb().Ac().push(b)
    };
    l.Lf = function (b) {
        this.g.push(b)
    };
    l.Ha = function (b) {
        this.render();
        Array.prototype.push.apply(this.J, arguments)
    };
    l.N = function () {
        Pf(this.b);
        W.S.N.call(this)
    };
    l.Je = function (b, c, d, e, f) {
        if (null !== this.c)return b = this.ka(b), this.i.df(b, this.c, c, m(d) ? d : null, m(e) ? e : Gg, m(f) ? f : null)
    };
    l.al = function (b, c, d, e, f) {
        if (null !== this.c)return this.i.Ig(b, this.c, c, m(d) ? d : null, m(e) ? e : Gg, m(f) ? f : null)
    };
    l.nk = function (b, c, d) {
        if (null === this.c)return !1;
        b = this.ka(b);
        return this.i.Jg(b, this.c, m(c) ? c : Gg, m(d) ? d : null)
    };
    l.Ui = function (b) {
        return this.ka(this.Ad(b))
    };
    l.Ad = function (b) {
        if (m(b.changedTouches)) {
            var c = b.changedTouches[0];
            b = ig(this.b);
            return [c.clientX - b.x, c.clientY - b.y]
        }
        c = this.b;
        b = ig(b);
        c = ig(c);
        c = new zf(b.x - c.x, b.y - c.y);
        return [c.x, c.y]
    };
    l.bf = function () {
        return this.get("target")
    };
    l.ad = function () {
        var b = this.bf();
        return m(b) ? Ef(b) : null
    };
    l.ka = function (b) {
        var c = this.c;
        if (null === c)return null;
        b = b.slice();
        return vj(c.pixelToCoordinateMatrix, b, b)
    };
    l.Si = function () {
        return this.e
    };
    l.nj = function () {
        return this.g
    };
    l.bj = function () {
        return this.d
    };
    l.Tb = function () {
        return this.get("layergroup")
    };
    l.xg = function () {
        return this.Tb().Ac()
    };
    l.sa = function (b) {
        var c = this.c;
        if (null === c)return null;
        b = b.slice(0, 2);
        return vj(c.coordinateToPixelMatrix, b, b)
    };
    l.wa = function () {
        return this.get("size")
    };
    l.P = function () {
        return this.get("view")
    };
    l.Aj = function () {
        return this.b
    };
    l.yj = function (b, c, d, e) {
        var f = this.c;
        if (!(null !== f && c in f.wantedTiles && f.wantedTiles[c][ef(b.a)]))return Infinity;
        b = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(b * b + d * d) / e
    };
    l.fg = function (b, c) {
        var d = new aj(c || b.type, this, b);
        this.gg(d)
    };
    l.gg = function (b) {
        if (null !== this.c) {
            this.K = b.coordinate;
            b.frameState = this.c;
            var c = this.d.b, d;
            if (!1 !== this.dispatchEvent(b))for (d = c.length - 1; 0 <= d; d--) {
                var e = c[d];
                if (e.b() && !e.handleEvent(b))break
            }
        }
    };
    l.fk = function () {
        var b = this.c, c = this.Fa;
        if (!c.la()) {
            var d = 16, e = d, f = 0;
            null !== b && (f = b.viewHints, f[0] && (d = this.kb ? 8 : 0, e = 2), f[1] && (d = this.lb ? 8 : 0, e = 2), f = rb(b.wantedTiles));
            d *= f;
            e *= f;
            if (c.d < d) {
                Tj(c);
                d = Math.min(d - c.d, e, c.Sb());
                for (e = 0; e < d; ++e)f = Qj(c)[0], x(f, "change", c.g, !1, c), f.load();
                c.d += d
            }
        }
        c = this.aa;
        d = 0;
        for (e = c.length; d < e; ++d)c[d](this, b);
        c.length = 0
    };
    l.ik = function () {
        this.render()
    };
    l.kk = function () {
        var b = this.ad();
        Uh(this.l);
        null === b ? (Pf(this.b), null !== this.n && (Wc(this.n), this.n = null)) : (b.appendChild(this.b), Oh(this.l, null === this.T ? b : this.T), null === this.n && (this.n = x(this.Ga, "resize", this.Jc, !1, this)));
        this.Jc()
    };
    l.bl = function () {
        this.render()
    };
    l.mk = function () {
        this.render()
    };
    l.lk = function () {
        null !== this.H && (Wc(this.H), this.H = null);
        var b = this.P();
        null !== b && (this.H = x(b, "propertychange", this.mk, !1, this));
        this.render()
    };
    l.Qj = function () {
        this.render()
    };
    l.Rj = function () {
        this.render()
    };
    l.Pj = function () {
        if (null !== this.f) {
            for (var b = this.f.length, c = 0; c < b; ++c)Wc(this.f[c]);
            this.f = null
        }
        b = this.Tb();
        null != b && (this.f = [x(b, "propertychange", this.Rj, !1, this), x(b, "change", this.Qj, !1, this)]);
        this.render()
    };
    l.Sn = function () {
        var b = this.o;
        uh(b);
        b.Qf()
    };
    l.render = function () {
        null != this.o.Z || this.o.start()
    };
    l.Mn = function (b) {
        if (m(this.e.remove(b)))return b
    };
    l.Nn = function (b) {
        var c;
        m(this.d.remove(b)) && (c = b);
        return c
    };
    l.On = function (b) {
        return this.Tb().Ac().remove(b)
    };
    l.Pn = function (b) {
        if (m(this.g.remove(b)))return b
    };
    l.Rn = function (b) {
        var c, d, e, f = this.wa(), g = this.P(), h = null;
        if (m(f) && 0 < f[0] && 0 < f[1] && null !== g && Te(g)) {
            var h = g.c.slice(), k = this.Tb().Qe(), n = {};
            c = 0;
            for (d = k.length; c < d; ++c)n[ma(k[c].layer)] = k[c];
            e = Se(g);
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Ra,
                extent: null,
                focus: null === this.K ? e.center : this.K,
                index: this.jb++,
                layerStates: n,
                layerStatesArray: k,
                logos: Db(this.mb),
                pixelRatio: this.Mc,
                pixelToCoordinateMatrix: this.ze,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.R,
                tileQueue: this.Fa,
                time: b,
                usedTiles: {},
                viewState: e,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (null !== h) {
            b = this.J;
            c = f = 0;
            for (d = b.length; c < d; ++c)g = b[c], g(this, h) && (b[f++] = g);
            b.length = f;
            h.extent = ee(e.center, e.resolution, e.rotation, h.size)
        }
        this.c = h;
        this.i.pe(h);
        null !== h && (h.animate && this.render(), Array.prototype.push.apply(this.aa, h.postRenderFunctions), 0 !== this.J.length || h.viewHints[0] || h.viewHints[1] || Wd(h.extent, this.ma) || (this.dispatchEvent(new sg("moveend", this, h)), Pd(h.extent, this.ma)));
        this.dispatchEvent(new sg("postrender", this, h));
        yh(this.fk, this)
    };
    l.xh = function (b) {
        this.set("layergroup", b)
    };
    l.wf = function (b) {
        this.set("size", b)
    };
    l.cl = function (b) {
        this.set("target", b)
    };
    l.ko = function (b) {
        this.set("view", b)
    };
    l.Ch = function (b) {
        b = ma(b).toString();
        this.R[b] = !0;
        this.render()
    };
    l.Jc = function () {
        var b = this.ad();
        if (null === b)this.wf(void 0); else {
            var c = Df(b), d = Ib && b.currentStyle;
            d && Uf(Bf(c)) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = mg(b, d.width, "width", "pixelWidth"), b = mg(b, d.height, "height", "pixelHeight"), b = new Af(c, b)) : (d = new Af(b.offsetWidth, b.offsetHeight), c = og(b, "padding"), b = rg(b), b = new Af(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
            this.wf([b.width, b.height])
        }
    };
    l.Gh = function (b) {
        b = ma(b).toString();
        delete this.R[b];
        this.render()
    };
    function Uq(b) {
        var c = null;
        m(b.keyboardEventTarget) && (c = ia(b.keyboardEventTarget) ? document.getElementById(b.keyboardEventTarget) : b.keyboardEventTarget);
        var d = {}, e = {};
        if (!m(b.logo) || "boolean" == typeof b.logo && b.logo)e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] =
            "http://openlayers.org/"; else {
            var f = b.logo;
            ia(f) ? e[f] = "" : la(f) && (e[f.src] = f.href)
        }
        f = b.layers instanceof G ? b.layers : new G({layers: b.layers});
        d.layergroup = f;
        d.target = b.target;
        d.view = m(b.view) ? b.view : new Ne;
        var f = Kj, g;
        m(b.renderer) ? ga(b.renderer) ? g = b.renderer : ia(b.renderer) && (g = [b.renderer]) : g = Tq;
        var h, k;
        h = 0;
        for (k = g.length; h < k; ++h) {
            var n = g[h];
            if ("canvas" == n) {
                if (ni) {
                    f = Gp;
                    break
                }
            } else if ("dom" == n) {
                f = Op;
                break
            } else if ("webgl" == n && ki) {
                f = Pq;
                break
            }
        }
        var p;
        m(b.controls) ? p = ga(b.controls) ? new nf(b.controls.slice()) :
            b.controls : p = kh();
        var q;
        m(b.interactions) ? q = ga(b.interactions) ? new nf(b.interactions.slice()) : b.interactions : q = Zl();
        b = m(b.overlays) ? ga(b.overlays) ? new nf(b.overlays.slice()) : b.overlays : new nf;
        return {controls: p, interactions: q, keyboardEventTarget: c, logos: e, overlays: b, Tn: f, values: d}
    }

    fm();
    function Vq(b) {
        fd.call(this);
        this.f = m(b.insertFirst) ? b.insertFirst : !0;
        this.i = m(b.stopEvent) ? b.stopEvent : !0;
        this.Y = If("DIV", {"class": "ol-overlay-container"});
        this.Y.style.position = "absolute";
        this.g = m(b.autoPan) ? b.autoPan : !1;
        this.d = m(b.autoPanAnimation) ? b.autoPanAnimation : {};
        this.e = m(b.autoPanMargin) ? b.autoPanMargin : 20;
        this.b = {ud: "", Td: "", qe: "", re: "", visible: !0};
        this.c = null;
        x(this, hd("element"), this.Jj, !1, this);
        x(this, hd("map"), this.Xj, !1, this);
        x(this, hd("offset"), this.bk, !1, this);
        x(this, hd("position"),
            this.dk, !1, this);
        x(this, hd("positioning"), this.ek, !1, this);
        m(b.element) && this.uh(b.element);
        this.zh(m(b.offset) ? b.offset : [0, 0]);
        this.Ah(m(b.positioning) ? b.positioning : "top-left");
        m(b.position) && this.vf(b.position)
    }

    w(Vq, fd);
    l = Vq.prototype;
    l.Wd = function () {
        return this.get("element")
    };
    l.Xd = function () {
        return this.get("map")
    };
    l.$f = function () {
        return this.get("offset")
    };
    l.yg = function () {
        return this.get("position")
    };
    l.cg = function () {
        return this.get("positioning")
    };
    l.Jj = function () {
        Nf(this.Y);
        var b = this.Wd();
        null != b && Mf(this.Y, b)
    };
    l.Xj = function () {
        null !== this.c && (Pf(this.Y), Wc(this.c), this.c = null);
        var b = this.Xd();
        null != b && (this.c = x(b, "postrender", this.render, !1, this), Wq(this), b = this.i ? b.p : b.U, this.f ? Of(b, this.Y, 0) : Mf(b, this.Y))
    };
    l.render = function () {
        Wq(this)
    };
    l.bk = function () {
        Wq(this)
    };
    l.dk = function () {
        Wq(this);
        if (m(this.get("position")) && this.g) {
            var b = this.Xd();
            if (m(b) && !fa(b.ad())) {
                var c = Xq(b.ad(), b.wa()), d = this.Wd(), e = d.offsetWidth, f = d.currentStyle || window.getComputedStyle(d), e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)), f = d.offsetHeight, g = d.currentStyle || window.getComputedStyle(d), f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)), h = Xq(d, [e, f]), d = this.e;
                Td(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) +
                    d), 0 > g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = b.P().Ba(), e = b.sa(d), c = [e[0] + c[0], e[1] + c[1]], null !== this.d && (this.d.source = d, b.Ha(Ze(this.d))), b.P().Na(b.ka(c)))
            }
        }
    };
    l.ek = function () {
        Wq(this)
    };
    l.uh = function (b) {
        this.set("element", b)
    };
    l.setMap = function (b) {
        this.set("map", b)
    };
    l.zh = function (b) {
        this.set("offset", b)
    };
    l.vf = function (b) {
        this.set("position", b)
    };
    function Xq(b, c) {
        var d = Df(b);
        eg(b, "position");
        var e = new zf(0, 0), f;
        f = d ? Df(d) : document;
        f = !Ib || Ib && 9 <= Tb || Uf(Bf(f)) ? f.documentElement : f.body;
        b != f && (f = hg(b), d = Vf(Bf(d)), e.x = f.left + d.x, e.y = f.top + d.y);
        return [e.x, e.y, e.x + c[0], e.y + c[1]]
    }

    l.Ah = function (b) {
        this.set("positioning", b)
    };
    function Wq(b) {
        var c = b.Xd(), d = b.yg();
        if (m(c) && null !== c.c && m(d)) {
            var d = c.sa(d), e = c.wa(), c = b.Y.style, f = b.$f(), g = b.cg(), h = f[0], f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g)"" !== b.b.Td && (b.b.Td = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", b.b.qe != h && (b.b.qe = c.right = h); else {
                "" !== b.b.qe && (b.b.qe = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g)h -= jg(b.Y).width / 2;
                h = Math.round(d[0] + h) + "px";
                b.b.Td != h && (b.b.Td = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" ==
                g)"" !== b.b.re && (b.b.re = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", b.b.ud != d && (b.b.ud = c.bottom = d); else {
                "" !== b.b.ud && (b.b.ud = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g)f -= jg(b.Y).height / 2;
                d = Math.round(d[1] + f) + "px";
                b.b.re != d && (b.b.re = c.top = d)
            }
            b.b.visible || (lg(b.Y, !0), b.b.visible = !0)
        } else b.b.visible && (lg(b.Y, !1), b.b.visible = !1)
    };
    function Yq(b) {
        b = m(b) ? b : {};
        this.g = m(b.collapsed) ? b.collapsed : !0;
        this.f = m(b.collapsible) ? b.collapsible : !0;
        this.f || (this.g = !1);
        var c = m(b.className) ? b.className : "ol-overviewmap", d = m(b.tipLabel) ? b.tipLabel : "Overview map", e = m(b.collapseLabel) ? b.collapseLabel : "\u00ab";
        this.o = ia(e) ? If("SPAN", {}, e) : e;
        e = m(b.label) ? b.label : "\u00bb";
        this.l = ia(e) ? If("SPAN", {}, e) : e;
        d = If("BUTTON", {type: "button", title: d}, this.f && !this.g ? this.o : this.l);
        x(d, "click", this.ml, !1, this);
        ug(d);
        var e = If("DIV", "ol-overviewmap-map"), f = this.d =
            new W({controls: new nf, interactions: new nf, target: e});
        m(b.layers) && b.layers.forEach(function (b) {
            f.Kf(b)
        }, this);
        var g = If("DIV", "ol-overviewmap-box");
        this.i = new Vq({position: [0, 0], positioning: "bottom-left", element: g});
        this.d.Lf(this.i);
        c = If("DIV", c + " ol-unselectable ol-control" + (this.g && this.f ? " ol-collapsed" : "") + (this.f ? "" : " ol-uncollapsible"), e, d);
        tg.call(this, {element: c, render: m(b.render) ? b.render : Zq, target: b.target})
    }

    w(Yq, tg);
    l = Yq.prototype;
    l.setMap = function (b) {
        var c = this.b;
        b !== c && (c && (c = c.P()) && Vc(c, hd("rotation"), this.Nd, !1, this), Yq.S.setMap.call(this, b), b && (this.n.push(x(b, "propertychange", this.Yj, !1, this)), 0 === this.d.xg().Jb() && this.d.xh(b.Tb()), b = b.P())) && (x(b, hd("rotation"), this.Nd, !1, this), Te(b) && (this.d.Jc(), $q(this)))
    };
    l.Yj = function (b) {
        "view" === b.key && ((b = b.oldValue) && Vc(b, hd("rotation"), this.Nd, !1, this), b = this.b.P(), x(b, hd("rotation"), this.Nd, !1, this))
    };
    l.Nd = function () {
        this.d.P().Yd(this.b.P().Ca())
    };
    function Zq() {
        var b = this.b, c = this.d;
        if (null !== b.c && null !== c.c) {
            var d = b.wa(), b = b.P().Oc(d), e = c.wa(), d = c.P().Oc(e), f = c.sa(ce(b)), c = c.sa(ae(b)), c = new Af(Math.abs(f[0] - c[0]), Math.abs(f[1] - c[1])), f = e[0], e = e[1];
            c.width < .1 * f || c.height < .1 * e || c.width > .75 * f || c.height > .75 * e ? $q(this) : Td(d, b) || (b = this.d, d = this.b.P(), b.P().Na(d.Ba()))
        }
        ar(this)
    }

    function $q(b) {
        var c = b.b;
        b = b.d;
        var d = c.wa(), c = c.P().Oc(d), d = b.wa();
        b = b.P();
        var e = Math.log(7.5) / Math.LN2;
        ke(c, 1 / (.1 * Math.pow(2, e / 2)));
        b.Ie(c, d)
    }

    function ar(b) {
        var c = b.b, d = b.d;
        if (null !== c.c && null !== d.c) {
            var e = c.wa(), f = c.P(), g = d.P();
            d.wa();
            var c = f.Ca(), h = b.i, d = b.i.Wd(), f = f.Oc(e), e = g.xa(), g = $d(f), f = be(f), k;
            b = b.b.P().Ba();
            m(b) && (k = [g[0] - b[0], g[1] - b[1]], rd(k, c), md(k, b));
            h.vf(k);
            null != d && (k = new Af(Math.abs((g[0] - f[0]) / e), Math.abs((f[1] - g[1]) / e)), c = Uf(Bf(Df(d))), !Ib || Rb("10") || c && Rb("8") ? (d = d.style, Jb ? d.MozBoxSizing = "border-box" : Kb ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(k.width, 0) + "px", d.height = Math.max(k.height,
                    0) + "px") : (b = d.style, c ? (c = og(d, "padding"), d = rg(d), b.pixelWidth = k.width - d.left - c.left - c.right - d.right, b.pixelHeight = k.height - d.top - c.top - c.bottom - d.bottom) : (b.pixelWidth = k.width, b.pixelHeight = k.height)))
        }
    }

    l.ml = function (b) {
        b.preventDefault();
        br(this)
    };
    function br(b) {
        $f(b.element, "ol-collapsed");
        b.g ? Qf(b.o, b.l) : Qf(b.l, b.o);
        b.g = !b.g;
        var c = b.d;
        b.g || null !== c.c || (c.Jc(), $q(b), Uc(c, "postrender", function () {
            ar(this)
        }, !1, b))
    }

    l.ll = function () {
        return this.f
    };
    l.ol = function (b) {
        this.f !== b && (this.f = b, $f(this.element, "ol-uncollapsible"), !b && this.g && br(this))
    };
    l.nl = function (b) {
        this.f && this.g !== b && br(this)
    };
    l.kl = function () {
        return this.g
    };
    function cr(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-scale-line";
        this.f = If("DIV", c + "-inner");
        this.Y = If("DIV", c + " ol-unselectable", this.f);
        this.o = null;
        this.i = m(b.minWidth) ? b.minWidth : 64;
        this.d = !1;
        this.J = void 0;
        this.l = "";
        this.g = null;
        tg.call(this, {element: this.Y, render: m(b.render) ? b.render : dr, target: b.target});
        x(this, hd("units"), this.R, !1, this);
        this.H(b.units || "metric")
    }

    w(cr, tg);
    var er = [1, 2, 5];
    cr.prototype.p = function () {
        return this.get("units")
    };
    function dr(b) {
        b = b.frameState;
        null === b ? this.o = null : this.o = b.viewState;
        fr(this)
    }

    cr.prototype.R = function () {
        fr(this)
    };
    cr.prototype.H = function (b) {
        this.set("units", b)
    };
    function fr(b) {
        var c = b.o;
        if (null === c)b.d && (lg(b.Y, !1), b.d = !1); else {
            var d = c.center, e = c.projection, c = e.getPointResolution(c.resolution, d), f = e.b, g = b.p();
            "degrees" != f || "metric" != g && "imperial" != g && "us" != g && "nautical" != g ? "degrees" != f && "degrees" == g ? (null === b.g && (b.g = ve(e, re("EPSG:4326"))), d = Math.cos(Yb(b.g(d)[1])), e = ne.radius, e /= oe[f], c *= 180 / (Math.PI * d * e)) : b.g = null : (b.g = null, d = Math.cos(Yb(d[1])), c *= Math.PI * d * ne.radius / 180);
            d = b.i * c;
            f = "";
            "degrees" == g ? d < 1 / 60 ? (f = "\u2033", c *= 3600) : 1 > d ? (f = "\u2032", c *= 60) : f = "\u00b0" :
                "imperial" == g ? .9144 > d ? (f = "in", c /= .0254) : 1609.344 > d ? (f = "ft", c /= .3048) : (f = "mi", c /= 1609.344) : "nautical" == g ? (c /= 1852, f = "nm") : "metric" == g ? 1 > d ? (f = "mm", c *= 1E3) : 1E3 > d ? f = "m" : (f = "km", c /= 1E3) : "us" == g && (.9144 > d ? (f = "in", c *= 39.37) : 1609.344 > d ? (f = "ft", c /= .30480061) : (f = "mi", c /= 1609.3472));
            for (d = 3 * Math.floor(Math.log(b.i * c) / Math.log(10)); ;) {
                e = er[d % 3] * Math.pow(10, Math.floor(d / 3));
                g = Math.round(e / c);
                if (isNaN(g)) {
                    lg(b.Y, !1);
                    b.d = !1;
                    return
                }
                if (g >= b.i)break;
                ++d
            }
            c = e + " " + f;
            b.l != c && (b.f.innerHTML = c, b.l = c);
            b.J != g && (b.f.style.width =
                g + "px", b.J = g);
            b.d || (lg(b.Y, !0), b.d = !0)
        }
    };
    function gr(b) {
        mc.call(this);
        this.b = b;
        this.a = {}
    }

    w(gr, mc);
    var hr = [];
    gr.prototype.Ka = function (b, c, d, e) {
        ga(c) || (c && (hr[0] = c.toString()), c = hr);
        for (var f = 0; f < c.length; f++) {
            var g = x(b, c[f], d || this.handleEvent, e || !1, this.b || this);
            if (!g)break;
            this.a[g.key] = g
        }
        return this
    };
    gr.prototype.xf = function (b, c, d, e, f) {
        if (ga(c))for (var g = 0; g < c.length; g++)this.xf(b, c[g], d, e, f); else d = d || this.handleEvent, f = f || this.b || this, d = Oc(d), e = !!e, c = Bc(b) ? Jc(b.bb, String(c), d, e, f) : b ? (b = Qc(b)) ? Jc(b, c, d, e, f) : null : null, c && (Wc(c), delete this.a[c.key]);
        return this
    };
    function ir(b) {
        pb(b.a, Wc);
        b.a = {}
    }

    gr.prototype.N = function () {
        gr.S.N.call(this);
        ir(this)
    };
    gr.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function jr(b, c, d) {
        $c.call(this);
        this.target = b;
        this.handle = c || b;
        this.a = d || new bg(NaN, NaN, NaN, NaN);
        this.c = Df(b);
        this.b = new gr(this);
        pc(this, this.b);
        x(this.handle, ["touchstart", "mousedown"], this.eg, !1, this)
    }

    w(jr, $c);
    var kr = Ib || Jb && Rb("1.9.3");
    l = jr.prototype;
    l.clientX = 0;
    l.clientY = 0;
    l.screenX = 0;
    l.screenY = 0;
    l.Dh = 0;
    l.Eh = 0;
    l.xc = 0;
    l.yc = 0;
    l.Xb = !1;
    l.N = function () {
        jr.S.N.call(this);
        Vc(this.handle, ["touchstart", "mousedown"], this.eg, !1, this);
        ir(this.b);
        kr && this.c.releaseCapture();
        this.handle = this.target = null
    };
    l.eg = function (b) {
        var c = "mousedown" == b.type;
        if (this.Xb || c && !zc(b))this.dispatchEvent("earlycancel"); else if (lr(b), this.dispatchEvent(new mr("start", this, b.clientX, b.clientY))) {
            this.Xb = !0;
            b.preventDefault();
            var c = this.c, d = c.documentElement, e = !kr;
            this.b.Ka(c, ["touchmove", "mousemove"], this.ak, e);
            this.b.Ka(c, ["touchend", "mouseup"], this.Kd, e);
            kr ? (d.setCapture(!1), this.b.Ka(d, "losecapture", this.Kd)) : this.b.Ka(c ? c.parentWindow || c.defaultView : window, "blur", this.Kd);
            this.e && this.b.Ka(this.e, "scroll", this.fn,
                e);
            this.clientX = this.Dh = b.clientX;
            this.clientY = this.Eh = b.clientY;
            this.screenX = b.screenX;
            this.screenY = b.screenY;
            this.xc = this.target.offsetLeft;
            this.yc = this.target.offsetTop;
            this.d = Vf(Bf(this.c));
            ua()
        }
    };
    l.Kd = function (b) {
        ir(this.b);
        kr && this.c.releaseCapture();
        if (this.Xb) {
            lr(b);
            this.Xb = !1;
            var c = nr(this, this.xc), d = or(this, this.yc);
            this.dispatchEvent(new mr("end", this, b.clientX, b.clientY, 0, c, d))
        } else this.dispatchEvent("earlycancel")
    };
    function lr(b) {
        var c = b.type;
        "touchstart" == c || "touchmove" == c ? xc(b, b.a.targetTouches[0], b.c) : "touchend" != c && "touchcancel" != c || xc(b, b.a.changedTouches[0], b.c)
    }

    l.ak = function (b) {
        lr(b);
        var c = 1 * (b.clientX - this.clientX), d = b.clientY - this.clientY;
        this.clientX = b.clientX;
        this.clientY = b.clientY;
        this.screenX = b.screenX;
        this.screenY = b.screenY;
        if (!this.Xb) {
            var e = this.Dh - this.clientX, f = this.Eh - this.clientY;
            if (0 < e * e + f * f)if (this.dispatchEvent(new mr("start", this, b.clientX, b.clientY)))this.Xb = !0; else {
                this.W || this.Kd(b);
                return
            }
        }
        d = pr(this, c, d);
        c = d.x;
        d = d.y;
        this.Xb && this.dispatchEvent(new mr("beforedrag", this, b.clientX, b.clientY, 0, c, d)) && (qr(this, b, c, d), b.preventDefault())
    };
    function pr(b, c, d) {
        var e = Vf(Bf(b.c));
        c += e.x - b.d.x;
        d += e.y - b.d.y;
        b.d = e;
        b.xc += c;
        b.yc += d;
        c = nr(b, b.xc);
        b = or(b, b.yc);
        return new zf(c, b)
    }

    l.fn = function (b) {
        var c = pr(this, 0, 0);
        b.clientX = this.clientX;
        b.clientY = this.clientY;
        qr(this, b, c.x, c.y)
    };
    function qr(b, c, d, e) {
        b.target.style.left = d + "px";
        b.target.style.top = e + "px";
        b.dispatchEvent(new mr("drag", b, c.clientX, c.clientY, 0, d, e))
    }

    function nr(b, c) {
        var d = b.a, e = isNaN(d.left) ? null : d.left, d = isNaN(d.width) ? 0 : d.width;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function or(b, c) {
        var d = b.a, e = isNaN(d.top) ? null : d.top, d = isNaN(d.height) ? 0 : d.height;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }

    function mr(b, c, d, e, f, g, h) {
        rc.call(this, b);
        this.clientX = d;
        this.clientY = e;
        this.left = m(g) ? g : c.xc;
        this.top = m(h) ? h : c.yc
    }

    w(mr, rc);
    function rr(b) {
        b = m(b) ? b : {};
        this.g = void 0;
        this.f = sr;
        this.i = null;
        this.l = !1;
        this.o = m(b.duration) ? b.duration : 200;
        var c = m(b.className) ? b.className : "ol-zoomslider", d = If("DIV", [c + "-thumb", "ol-unselectable"]), c = If("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.d = new jr(d);
        pc(this, this.d);
        x(this.d, "start", this.Ij, !1, this);
        x(this.d, "drag", this.Gj, !1, this);
        x(this.d, "end", this.Hj, !1, this);
        x(c, "click", this.Fj, !1, this);
        x(d, "click", sc);
        tg.call(this, {element: c, render: m(b.render) ? b.render : tr})
    }

    w(rr, tg);
    var sr = 0;
    l = rr.prototype;
    l.setMap = function (b) {
        rr.S.setMap.call(this, b);
        null === b || b.render()
    };
    function tr(b) {
        if (null !== b.frameState) {
            if (!this.l) {
                var c = this.element, d = jg(c), e = Rf(c), c = og(e, "margin"), f = new Af(e.offsetWidth, e.offsetHeight), e = f.width + c.right + c.left, c = f.height + c.top + c.bottom;
                this.i = [e, c];
                e = d.width - e;
                c = d.height - c;
                d.width > d.height ? (this.f = 1, d = new bg(0, 0, e, 0)) : (this.f = sr, d = new bg(0, 0, 0, c));
                this.d.a = d || new bg(NaN, NaN, NaN, NaN);
                this.l = !0
            }
            b = b.frameState.viewState.resolution;
            b !== this.g && (this.g = b, b = 1 - Re(this.b.P())(b), d = this.d, c = Rf(this.element), 1 == this.f ? fg(c, d.a.left + d.a.width * b) : fg(c,
                d.a.left, d.a.top + d.a.height * b))
        }
    }

    l.Fj = function (b) {
        var c = this.b, d = c.P(), e = d.xa();
        c.Ha(af({resolution: e, duration: this.o, easing: Ve}));
        b = ur(this, b.offsetX - this.i[0] / 2, b.offsetY - this.i[1] / 2);
        b = vr(this, b);
        d.yb(d.constrainResolution(b))
    };
    l.Ij = function () {
        Ue(this.b.P(), 1)
    };
    l.Gj = function (b) {
        b = ur(this, b.left, b.top);
        this.g = vr(this, b);
        this.b.P().yb(this.g)
    };
    l.Hj = function () {
        var b = this.b, c = b.P();
        Ue(c, -1);
        b.Ha(af({resolution: this.g, duration: this.o, easing: Ve}));
        b = c.constrainResolution(this.g);
        c.yb(b)
    };
    function ur(b, c, d) {
        var e = b.d.a;
        return Vb(1 === b.f ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1)
    }

    function vr(b, c) {
        return Pe(b.b.P())(1 - c)
    };
    function wr(b) {
        b = m(b) ? b : {};
        this.d = m(b.extent) ? b.extent : null;
        var c = m(b.className) ? b.className : "ol-zoom-extent", d = If("BUTTON", {
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Fit to extent"
        }, m(b.label) ? b.label : "E");
        x(d, "click", this.g, !1, this);
        ug(d);
        c = If("DIV", c + " ol-unselectable ol-control", d);
        tg.call(this, {element: c, target: b.target})
    }

    w(wr, tg);
    wr.prototype.g = function (b) {
        b.preventDefault();
        var c = this.b;
        b = c.P();
        var d = null === this.d ? b.e.G() : this.d, c = c.wa();
        b.Ie(d, c)
    };
    function xr(b) {
        fd.call(this);
        b = m(b) ? b : {};
        this.b = null;
        x(this, hd("tracking"), this.Jk, !1, this);
        this.$e(m(b.tracking) ? b.tracking : !1)
    }

    w(xr, fd);
    l = xr.prototype;
    l.N = function () {
        this.$e(!1);
        xr.S.N.call(this)
    };
    l.gn = function (b) {
        b = b.a;
        if (null != b.alpha) {
            var c = Yb(b.alpha);
            this.set("alpha", c);
            "boolean" == typeof b.absolute && b.absolute ? this.set("heading", c) : null != b.webkitCompassHeading && null != b.webkitCompassAccuracy && -1 != b.webkitCompassAccuracy && this.set("heading", Yb(b.webkitCompassHeading))
        }
        null != b.beta && this.set("beta", Yb(b.beta));
        null != b.gamma && this.set("gamma", Yb(b.gamma));
        this.k()
    };
    l.Mi = function () {
        return this.get("alpha")
    };
    l.Pi = function () {
        return this.get("beta")
    };
    l.Yi = function () {
        return this.get("gamma")
    };
    l.Ik = function () {
        return this.get("heading")
    };
    l.qg = function () {
        return this.get("tracking")
    };
    l.Jk = function () {
        if (oi) {
            var b = this.qg();
            b && null === this.b ? this.b = x(ba, "deviceorientation", this.gn, !1, this) : b || null === this.b || (Wc(this.b), this.b = null)
        }
    };
    l.$e = function (b) {
        this.set("tracking", b)
    };
    function X(b) {
        fd.call(this);
        this.Z = void 0;
        this.b = "geometry";
        this.e = null;
        this.c = void 0;
        this.d = null;
        x(this, hd(this.b), this.Ld, !1, this);
        m(b) && (b instanceof wk || null === b ? this.La(b) : this.t(b))
    }

    w(X, fd);
    l = X.prototype;
    l.clone = function () {
        var b = new X(this.D());
        b.Hc(this.b);
        var c = this.Q();
        null != c && b.La(c.clone());
        c = this.e;
        null === c || b.af(c);
        return b
    };
    l.Q = function () {
        return this.get(this.b)
    };
    l.aj = function () {
        return this.Z
    };
    l.$i = function () {
        return this.b
    };
    l.Qk = function () {
        return this.e
    };
    l.Rk = function () {
        return this.c
    };
    l.Sk = function () {
        this.k()
    };
    l.Ld = function () {
        null !== this.d && (Wc(this.d), this.d = null);
        var b = this.Q();
        null != b && (this.d = x(b, "change", this.Sk, !1, this));
        this.k()
    };
    l.La = function (b) {
        this.set(this.b, b)
    };
    l.af = function (b) {
        this.e = b;
        null === b ? b = void 0 : ka(b) || (b = ga(b) ? b : [b], b = Eg(b));
        this.c = b;
        this.k()
    };
    l.Pb = function (b) {
        this.Z = b;
        this.k()
    };
    l.Hc = function (b) {
        Vc(this, hd(this.b), this.Ld, !1, this);
        this.b = b;
        x(this, hd(this.b), this.Ld, !1, this);
        this.Ld()
    };
    function yr(b) {
        b = m(b) ? b : {};
        this.f = this.e = this.d = this.b = this.c = this.a = null;
        this.g = void 0;
        this.tg(m(b.style) ? b.style : Il);
        m(b.features) ? ga(b.features) ? this.kd(new nf(b.features.slice())) : this.kd(b.features) : this.kd(new nf);
        m(b.map) && this.setMap(b.map)
    }

    l = yr.prototype;
    l.rg = function (b) {
        this.a.push(b)
    };
    l.Kk = function () {
        return this.a
    };
    l.Lk = function () {
        return this.d
    };
    l.sg = function () {
        zr(this)
    };
    l.Lj = function (b) {
        b = b.element;
        this.b[ma(b).toString()] = x(b, "change", this.sg, !1, this);
        zr(this)
    };
    l.Mj = function (b) {
        b = ma(b.element).toString();
        Wc(this.b[b]);
        delete this.b[b];
        zr(this)
    };
    l.Ok = function () {
        zr(this)
    };
    l.Pk = function (b) {
        if (null !== this.a) {
            var c = this.g;
            m(c) || (c = Il);
            var d = b.a;
            b = b.frameState;
            var e = b.viewState.resolution, f = jn(e, b.pixelRatio), g, h, k, n;
            this.a.forEach(function (b) {
                n = b.c;
                k = m(n) ? n.call(b, e) : c(b, e);
                if (null != k)for (h = k.length, g = 0; g < h; ++g)kn(d, b, k[g], f, this.Ok, this)
            }, this)
        }
    };
    l.Ud = function (b) {
        this.a.remove(b)
    };
    function zr(b) {
        null === b.d || b.d.render()
    }

    l.kd = function (b) {
        null !== this.c && (Sa(this.c, Wc), this.c = null);
        null !== this.b && (Sa(sb(this.b), Wc), this.b = null);
        this.a = b;
        null !== b && (this.c = [x(b, "add", this.Lj, !1, this), x(b, "remove", this.Mj, !1, this)], this.b = {}, b.forEach(function (b) {
            this.b[ma(b).toString()] = x(b, "change", this.sg, !1, this)
        }, this));
        zr(this)
    };
    l.setMap = function (b) {
        null !== this.e && (Wc(this.e), this.e = null);
        zr(this);
        this.d = b;
        null !== b && (this.e = x(b, "postcompose", this.Pk, !1, this), b.render())
    };
    l.tg = function (b) {
        this.f = b;
        this.g = Hl(b);
        zr(this)
    };
    l.Mk = function () {
        return this.f
    };
    l.Nk = function () {
        return this.g
    };
    function Ar() {
        this.defaultDataProjection = null
    }

    function Br(b, c, d) {
        var e;
        m(d) && (e = {
            dataProjection: m(d.dataProjection) ? d.dataProjection : b.ya(c),
            featureProjection: d.featureProjection
        });
        return Cr(b, e)
    }

    function Cr(b, c) {
        var d;
        m(c) && (d = {
            featureProjection: c.featureProjection,
            dataProjection: null != c.dataProjection ? c.dataProjection : b.defaultDataProjection,
            rightHanded: c.rightHanded
        });
        return d
    }

    function Dr(b, c, d) {
        var e = m(d) ? re(d.featureProjection) : null;
        d = m(d) ? re(d.dataProjection) : null;
        return null === e || null === d || Ie(e, d) ? b : b instanceof wk ? (c ? b.clone() : b).transform(c ? e : d, c ? d : e) : Me(c ? b.slice() : b, c ? e : d, c ? d : e)
    };
    function Er() {
        this.defaultDataProjection = null
    }

    w(Er, Ar);
    function Fr(b) {
        return la(b) ? b : ia(b) ? (b = Tn(b), m(b) ? b : null) : null
    }

    l = Er.prototype;
    l.L = function () {
        return "json"
    };
    l.xb = function (b, c) {
        return this.Ec(Fr(b), Br(this, b, c))
    };
    l.ja = function (b, c) {
        return this.of(Fr(b), Br(this, b, c))
    };
    l.Fc = function (b, c) {
        return this.gh(Fr(b), Br(this, b, c))
    };
    l.ya = function (b) {
        return this.mh(Fr(b))
    };
    l.pd = function (b, c) {
        return Un(this.Kc(b, c))
    };
    l.zb = function (b, c) {
        return Un(this.ue(b, c))
    };
    l.Lc = function (b, c) {
        return Un(this.we(b, c))
    };
    function Gr(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = b.geometryName
    }

    w(Gr, Er);
    function Hr(b, c) {
        if (null === b)return null;
        var d;
        if (ja(b.x) && ja(b.y))d = "Point"; else if (null != b.points)d = "MultiPoint"; else if (null != b.paths)d = 1 === b.paths.length ? "LineString" : "MultiLineString"; else if (null != b.rings) {
            var e = b.rings, f = Ir(b), g = [];
            d = [];
            var h, k;
            h = 0;
            for (k = e.length; h < k; ++h) {
                var n = kb(e[h]);
                bl(n, 0, n.length, f.length) ? g.push([e[h]]) : d.push(e[h])
            }
            for (; d.length;) {
                e = d.shift();
                f = !1;
                for (h = g.length - 1; 0 <= h; h--)if (Td((new Sk(g[h][0])).G(), (new Sk(e)).G())) {
                    g[h].push(e);
                    f = !0;
                    break
                }
                f || g.push([e.reverse()])
            }
            b =
                Db(b);
            1 === g.length ? (d = "Polygon", b.rings = g[0]) : (d = "MultiPolygon", b.rings = g)
        }
        return Dr((0, Jr[d])(b), !1, c)
    }

    function Ir(b) {
        var c = "XY";
        !0 === b.hasZ && !0 === b.hasM ? c = "XYZM" : !0 === b.hasZ ? c = "XYZ" : !0 === b.hasM && (c = "XYM");
        return c
    }

    function Kr(b) {
        b = b.b;
        return {hasZ: "XYZ" === b || "XYZM" === b, hasM: "XYM" === b || "XYZM" === b}
    }

    var Jr = {
        Point: function (b) {
            return null != b.m && null != b.z ? new E([b.x, b.y, b.z, b.m], "XYZM") : null != b.z ? new E([b.x, b.y, b.z], "XYZ") : null != b.m ? new E([b.x, b.y, b.m], "XYM") : new E([b.x, b.y])
        }, LineString: function (b) {
            return new N(b.paths[0], Ir(b))
        }, Polygon: function (b) {
            return new F(b.rings, Ir(b))
        }, MultiPoint: function (b) {
            return new en(b.points, Ir(b))
        }, MultiLineString: function (b) {
            return new P(b.paths, Ir(b))
        }, MultiPolygon: function (b) {
            return new R(b.rings, Ir(b))
        }
    }, Lr = {
        Point: function (b) {
            var c = b.M();
            b = b.b;
            if ("XYZ" === b)return {
                x: c[0],
                y: c[1], z: c[2]
            };
            if ("XYM" === b)return {x: c[0], y: c[1], m: c[2]};
            if ("XYZM" === b)return {x: c[0], y: c[1], z: c[2], m: c[3]};
            if ("XY" === b)return {x: c[0], y: c[1]}
        }, LineString: function (b) {
            var c = Kr(b);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: [b.M()]}
        }, Polygon: function (b) {
            var c = Kr(b);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: b.M(!1)}
        }, MultiPoint: function (b) {
            var c = Kr(b);
            return {hasZ: c.hasZ, hasM: c.hasM, points: b.M()}
        }, MultiLineString: function (b) {
            var c = Kr(b);
            return {hasZ: c.hasZ, hasM: c.hasM, paths: b.M()}
        }, MultiPolygon: function (b) {
            var c = Kr(b);
            b = b.M(!1);
            for (var d = [], e = 0; e < b.length; e++)for (var f = b[e].length - 1; 0 <= f; f--)d.push(b[e][f]);
            return {hasZ: c.hasZ, hasM: c.hasM, rings: d}
        }
    };
    l = Gr.prototype;
    l.Ec = function (b, c) {
        var d = Hr(b.geometry, c), e = new X;
        m(this.a) && e.Hc(this.a);
        e.La(d);
        m(c) && m(c.Ve) && m(b.attributes[c.Ve]) && e.Pb(b.attributes[c.Ve]);
        m(b.attributes) && e.t(b.attributes);
        return e
    };
    l.of = function (b, c) {
        var d = m(c) ? c : {};
        if (null != b.features) {
            var e = [], f = b.features, g, h;
            d.Ve = b.objectIdFieldName;
            g = 0;
            for (h = f.length; g < h; ++g)e.push(this.Ec(f[g], d));
            return e
        }
        return [this.Ec(b, d)]
    };
    l.gh = function (b, c) {
        return Hr(b, c)
    };
    l.mh = function (b) {
        return null != b.spatialReference && null != b.spatialReference.wkid ? re("EPSG:" + b.spatialReference.wkid) : null
    };
    function Mr(b, c) {
        return (0, Lr[b.L()])(Dr(b, !0, c), c)
    }

    l.we = function (b, c) {
        return Mr(b, Cr(this, c))
    };
    l.Kc = function (b, c) {
        c = Cr(this, c);
        var d = {}, e = b.Q();
        null != e && (d.geometry = Mr(e, c));
        e = b.D();
        zb(e, b.b);
        d.attributes = xb(e) ? {} : e;
        m(c) && m(c.featureProjection) && (d.spatialReference = {wkid: re(c.featureProjection).a.split(":").pop()});
        return d
    };
    l.ue = function (b, c) {
        c = Cr(this, c);
        var d = [], e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d.push(this.Kc(b[e], c));
        return {features: d}
    };
    function Nr(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326");
        this.a = b.geometryName
    }

    w(Nr, Er);
    function Or(b, c) {
        return null === b ? null : Dr((0, Pr[b.type])(b), !1, c)
    }

    function Qr(b, c) {
        return (0, Rr[b.L()])(Dr(b, !0, c), c)
    }

    var Pr = {
        Point: function (b) {
            return new E(b.coordinates)
        }, LineString: function (b) {
            return new N(b.coordinates)
        }, Polygon: function (b) {
            return new F(b.coordinates)
        }, MultiPoint: function (b) {
            return new en(b.coordinates)
        }, MultiLineString: function (b) {
            return new P(b.coordinates)
        }, MultiPolygon: function (b) {
            return new R(b.coordinates)
        }, GeometryCollection: function (b, c) {
            var d = Ua(b.geometries, function (b) {
                return Or(b, c)
            });
            return new Vm(d)
        }
    }, Rr = {
        Point: function (b) {
            return {type: "Point", coordinates: b.M()}
        }, LineString: function (b) {
            return {
                type: "LineString",
                coordinates: b.M()
            }
        }, Polygon: function (b, c) {
            var d;
            m(c) && (d = c.rightHanded);
            return {type: "Polygon", coordinates: b.M(d)}
        }, MultiPoint: function (b) {
            return {type: "MultiPoint", coordinates: b.M()}
        }, MultiLineString: function (b) {
            return {type: "MultiLineString", coordinates: b.M()}
        }, MultiPolygon: function (b, c) {
            var d;
            m(c) && (d = c.rightHanded);
            return {type: "MultiPolygon", coordinates: b.M(d)}
        }, GeometryCollection: function (b, c) {
            return {
                type: "GeometryCollection", geometries: Ua(b.d, function (b) {
                    return Qr(b, c)
                })
            }
        }, Circle: function () {
            return {
                type: "GeometryCollection",
                geometries: []
            }
        }
    };
    l = Nr.prototype;
    l.Ec = function (b, c) {
        var d = Or(b.geometry, c), e = new X;
        m(this.a) && e.Hc(this.a);
        e.La(d);
        m(b.id) && e.Pb(b.id);
        m(b.properties) && e.t(b.properties);
        return e
    };
    l.of = function (b, c) {
        if ("Feature" == b.type)return [this.Ec(b, c)];
        if ("FeatureCollection" == b.type) {
            var d = [], e = b.features, f, g;
            f = 0;
            for (g = e.length; f < g; ++f)d.push(this.Ec(e[f], c));
            return d
        }
        return []
    };
    l.gh = function (b, c) {
        return Or(b, c)
    };
    l.mh = function (b) {
        b = b.crs;
        return null != b ? "name" == b.type ? re(b.properties.name) : "EPSG" == b.type ? re("EPSG:" + b.properties.code) : null : this.defaultDataProjection
    };
    l.Kc = function (b, c) {
        c = Cr(this, c);
        var d = {type: "Feature"}, e = b.Z;
        null != e && (d.id = e);
        e = b.Q();
        null != e && (d.geometry = Qr(e, c));
        e = b.D();
        zb(e, b.b);
        d.properties = xb(e) ? null : e;
        return d
    };
    l.ue = function (b, c) {
        c = Cr(this, c);
        var d = [], e, f;
        e = 0;
        for (f = b.length; e < f; ++e)d.push(this.Kc(b[e], c));
        return {type: "FeatureCollection", features: d}
    };
    l.we = function (b, c) {
        return Qr(b, Cr(this, c))
    };
    function Sr() {
        this.defaultDataProjection = null
    }

    w(Sr, Ar);
    l = Sr.prototype;
    l.L = function () {
        return "xml"
    };
    l.xb = function (b, c) {
        if (Mo(b))return Tr(this, b, c);
        if (Po(b))return this.eh(b, c);
        if (ia(b)) {
            var d = Zo(b);
            return Tr(this, d, c)
        }
        return null
    };
    function Tr(b, c, d) {
        b = Ur(b, c, d);
        return 0 < b.length ? b[0] : null
    }

    l.ja = function (b, c) {
        if (Mo(b))return Ur(this, b, c);
        if (Po(b))return this.Nb(b, c);
        if (ia(b)) {
            var d = Zo(b);
            return Ur(this, d, c)
        }
        return []
    };
    function Ur(b, c, d) {
        var e = [];
        for (c = c.firstChild; null !== c; c = c.nextSibling)1 == c.nodeType && db(e, b.Nb(c, d));
        return e
    }

    l.Fc = function (b, c) {
        if (Mo(b))return this.n(b, c);
        if (Po(b)) {
            var d = this.le(b, [Br(this, b, m(c) ? c : {})]);
            return m(d) ? d : null
        }
        return ia(b) ? (d = Zo(b), this.n(d, c)) : null
    };
    l.ya = function (b) {
        return Mo(b) ? this.sf(b) : Po(b) ? this.oe(b) : ia(b) ? (b = Zo(b), this.sf(b)) : null
    };
    l.sf = function () {
        return this.defaultDataProjection
    };
    l.oe = function () {
        return this.defaultDataProjection
    };
    l.pd = function (b, c) {
        var d = this.l(b, c);
        return xo(d)
    };
    l.zb = function (b, c) {
        var d = this.b(b, c);
        return xo(d)
    };
    l.Lc = function (b, c) {
        var d = this.q(b, c);
        return xo(d)
    };
    function Vr(b) {
        b = m(b) ? b : {};
        this.featureType = b.featureType;
        this.featureNS = b.featureNS;
        this.srsName = b.srsName;
        this.schemaLocation = "";
        this.a = {};
        this.a["http://www.opengis.net/gml"] = {
            featureMember: bp(Vr.prototype.hd),
            featureMembers: bp(Vr.prototype.hd)
        };
        this.defaultDataProjection = null
    }

    w(Vr, Sr);
    l = Vr.prototype;
    l.hd = function (b, c) {
        var d = Jo(b), e;
        if ("FeatureCollection" == d)"http://www.opengis.net/wfs" === b.namespaceURI ? e = V([], this.a, b, c, this) : e = V(null, this.a, b, c, this); else if ("featureMembers" == d || "featureMember" == d) {
            var f = c[0], g = f.featureType;
            e = f.featureNS;
            var h, k;
            if (!m(g) && null != b.childNodes) {
                g = [];
                e = {};
                h = 0;
                for (k = b.childNodes.length; h < k; ++h) {
                    var n = b.childNodes[h];
                    if (1 === n.nodeType) {
                        var p = n.nodeName.split(":").pop();
                        if (-1 === Ra(g, p)) {
                            var q;
                            vb(e, n.namespaceURI) ? q = wb(e, function (b) {
                                return b === n.namespaceURI
                            }) : (q =
                                "p" + rb(e), e[q] = n.namespaceURI);
                            g.push(q + ":" + p)
                        }
                    }
                }
                f.featureType = g;
                f.featureNS = e
            }
            ia(e) && (h = e, e = {}, e.p0 = h);
            var f = {}, g = ga(g) ? g : [g], r;
            for (r in e) {
                p = {};
                h = 0;
                for (k = g.length; h < k; ++h)(-1 === g[h].indexOf(":") ? "p0" : g[h].split(":")[0]) === r && (p[g[h].split(":").pop()] = "featureMembers" == d ? ap(this.nf, this) : bp(this.nf, this));
                f[e[r]] = p
            }
            e = V([], f, b, c)
        }
        m(e) || (e = []);
        return e
    };
    l.le = function (b, c) {
        var d = c[0];
        d.srsName = b.firstElementChild.getAttribute("srsName");
        var e = V(null, this.Df, b, c, this);
        if (null != e)return Dr(e, !1, d)
    };
    l.nf = function (b, c) {
        var d, e = b.getAttribute("fid") || To(b, "http://www.opengis.net/gml", "id"), f = {}, g;
        for (d = b.firstElementChild; null !== d; d = d.nextElementSibling) {
            var h = Jo(d);
            if (0 === d.childNodes.length || 1 === d.childNodes.length && 3 === d.firstChild.nodeType) {
                var k = Fo(d, !1);
                /^[\s\xa0]*$/.test(k) && (k = void 0);
                f[h] = k
            } else"boundedBy" !== h && (g = h), f[h] = this.le(d, c)
        }
        d = new X(f);
        m(g) && d.Hc(g);
        e && d.Pb(e);
        return d
    };
    l.lh = function (b, c) {
        var d = this.ke(b, c);
        if (null != d) {
            var e = new E(null);
            Uk(e, "XYZ", d);
            return e
        }
    };
    l.jh = function (b, c) {
        var d = V([], this.Zh, b, c, this);
        if (m(d))return new en(d)
    };
    l.ih = function (b, c) {
        var d = V([], this.Yh, b, c, this);
        if (m(d)) {
            var e = new P(null);
            dn(e, d);
            return e
        }
    };
    l.kh = function (b, c) {
        var d = V([], this.$h, b, c, this);
        if (m(d)) {
            var e = new R(null);
            gn(e, d);
            return e
        }
    };
    l.Zg = function (b, c) {
        jp(this.ci, b, c, this)
    };
    l.mg = function (b, c) {
        jp(this.Wh, b, c, this)
    };
    l.$g = function (b, c) {
        jp(this.di, b, c, this)
    };
    l.me = function (b, c) {
        var d = this.ke(b, c);
        if (null != d) {
            var e = new N(null);
            bn(e, "XYZ", d);
            return e
        }
    };
    l.zn = function (b, c) {
        var d = V(null, this.rd, b, c, this);
        if (null != d)return d
    };
    l.hh = function (b, c) {
        var d = this.ke(b, c);
        if (m(d)) {
            var e = new Sk(null);
            Tk(e, "XYZ", d);
            return e
        }
    };
    l.ne = function (b, c) {
        var d = V([null], this.ye, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, k;
            h = 1;
            for (k = d.length; h < k; ++h)db(f, d[h]), g.push(f.length);
            fl(e, "XYZ", f, g);
            return e
        }
    };
    l.ke = function (b, c) {
        return V(null, this.rd, b, c, this)
    };
    l.Zh = Object({
        "http://www.opengis.net/gml": {
            pointMember: ap(Vr.prototype.Zg),
            pointMembers: ap(Vr.prototype.Zg)
        }
    });
    l.Yh = Object({
        "http://www.opengis.net/gml": {
            lineStringMember: ap(Vr.prototype.mg),
            lineStringMembers: ap(Vr.prototype.mg)
        }
    });
    l.$h = Object({
        "http://www.opengis.net/gml": {
            polygonMember: ap(Vr.prototype.$g),
            polygonMembers: ap(Vr.prototype.$g)
        }
    });
    l.ci = Object({"http://www.opengis.net/gml": {Point: ap(Vr.prototype.ke)}});
    l.Wh = Object({"http://www.opengis.net/gml": {LineString: ap(Vr.prototype.me)}});
    l.di = Object({"http://www.opengis.net/gml": {Polygon: ap(Vr.prototype.ne)}});
    l.td = Object({"http://www.opengis.net/gml": {LinearRing: bp(Vr.prototype.zn)}});
    l.Nb = function (b, c) {
        var d = {featureType: this.featureType, featureNS: this.featureNS};
        m(c) && Fb(d, Br(this, b, c));
        return this.hd(b, [d])
    };
    l.oe = function (b) {
        return re(m(this.o) ? this.o : b.firstElementChild.getAttribute("srsName"))
    };
    function Wr(b) {
        b = Fo(b, !1);
        return Xr(b)
    }

    function Xr(b) {
        if (b = /^\s*(true|1)|(false|0)\s*$/.exec(b))return m(b[1]) || !1
    }

    function Yr(b) {
        b = Fo(b, !1);
        if (b = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)) {
            var c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), parseInt(b[6], 10)) / 1E3;
            if ("Z" != b[7]) {
                var d = "-" == b[8] ? -1 : 1, c = c + 60 * d * parseInt(b[9], 10);
                m(b[10]) && (c += 3600 * d * parseInt(b[10], 10))
            }
            return c
        }
    }

    function Zr(b) {
        b = Fo(b, !1);
        return $r(b)
    }

    function $r(b) {
        if (b = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b))return parseFloat(b[1])
    }

    function as(b) {
        b = Fo(b, !1);
        return bs(b)
    }

    function bs(b) {
        if (b = /^\s*(\d+)\s*$/.exec(b))return parseInt(b[1], 10)
    }

    function Y(b) {
        b = Fo(b, !1);
        return Ca(b)
    }

    function cs(b, c) {
        ds(b, c ? "1" : "0")
    }

    function es(b, c) {
        b.appendChild(Bo.createTextNode(c.toPrecision()))
    }

    function fs(b, c) {
        b.appendChild(Bo.createTextNode(c.toString()))
    }

    function ds(b, c) {
        b.appendChild(Bo.createTextNode(c))
    };
    function gs(b) {
        b = m(b) ? b : {};
        Vr.call(this, b);
        this.i = m(b.surface) ? b.surface : !1;
        this.e = m(b.curve) ? b.curve : !1;
        this.g = m(b.multiCurve) ? b.multiCurve : !0;
        this.f = m(b.multiSurface) ? b.multiSurface : !0;
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }

    w(gs, Vr);
    l = gs.prototype;
    l.Cn = function (b, c) {
        var d = V([], this.Xh, b, c, this);
        if (m(d)) {
            var e = new P(null);
            dn(e, d);
            return e
        }
    };
    l.Dn = function (b, c) {
        var d = V([], this.ai, b, c, this);
        if (m(d)) {
            var e = new R(null);
            gn(e, d);
            return e
        }
    };
    l.Of = function (b, c) {
        jp(this.Th, b, c, this)
    };
    l.Fh = function (b, c) {
        jp(this.ji, b, c, this)
    };
    l.Gn = function (b, c) {
        return V([null], this.bi, b, c, this)
    };
    l.In = function (b, c) {
        return V([null], this.ii, b, c, this)
    };
    l.Hn = function (b, c) {
        return V([null], this.ye, b, c, this)
    };
    l.Bn = function (b, c) {
        return V([null], this.rd, b, c, this)
    };
    l.qk = function (b, c) {
        var d = V(void 0, this.td, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.Ei = function (b, c) {
        var d = V(void 0, this.td, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.nh = function (b, c) {
        var d = V([null], this.ki, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new F(null), f = d[0], g = [f.length], h, k;
            h = 1;
            for (k = d.length; h < k; ++h)db(f, d[h]), g.push(f.length);
            fl(e, "XYZ", f, g);
            return e
        }
    };
    l.bh = function (b, c) {
        var d = V([null], this.Uh, b, c, this);
        if (m(d)) {
            var e = new N(null);
            bn(e, "XYZ", d);
            return e
        }
    };
    l.yn = function (b, c) {
        var d = V([null], this.Vh, b, c, this);
        return Nd(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    l.An = function (b, c) {
        for (var d = Fo(b, !1), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);)f.push(parseFloat(g[1])), d = d.substr(g[0].length);
        if ("" === d) {
            d = c[0].srsName;
            e = "enu";
            null === d || (e = ue(re(d)));
            if ("neu" === e)for (d = 0, e = f.length; d < e; d += 3)g = f[d], f[d] = f[d + 1], f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    l.qf = function (b, c) {
        var d = Fo(b, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = b.parentNode.getAttribute("srsDimension"), g = "enu";
        null === e || (g = ue(re(e)));
        d = d.split(/\s+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = bs(f)) : e = bs(b.getAttribute("dimension")) : e = bs(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e)f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.rd = Object({"http://www.opengis.net/gml": {pos: bp(gs.prototype.An), posList: bp(gs.prototype.qf)}});
    l.ye = Object({"http://www.opengis.net/gml": {interior: gs.prototype.qk, exterior: gs.prototype.Ei}});
    l.Df = Object({
        "http://www.opengis.net/gml": {
            Point: bp(Vr.prototype.lh),
            MultiPoint: bp(Vr.prototype.jh),
            LineString: bp(Vr.prototype.me),
            MultiLineString: bp(Vr.prototype.ih),
            LinearRing: bp(Vr.prototype.hh),
            Polygon: bp(Vr.prototype.ne),
            MultiPolygon: bp(Vr.prototype.kh),
            Surface: bp(gs.prototype.nh),
            MultiSurface: bp(gs.prototype.Dn),
            Curve: bp(gs.prototype.bh),
            MultiCurve: bp(gs.prototype.Cn),
            Envelope: bp(gs.prototype.yn)
        }
    });
    l.Xh = Object({
        "http://www.opengis.net/gml": {
            curveMember: ap(gs.prototype.Of),
            curveMembers: ap(gs.prototype.Of)
        }
    });
    l.ai = Object({
        "http://www.opengis.net/gml": {
            surfaceMember: ap(gs.prototype.Fh),
            surfaceMembers: ap(gs.prototype.Fh)
        }
    });
    l.Th = Object({"http://www.opengis.net/gml": {LineString: ap(Vr.prototype.me), Curve: ap(gs.prototype.bh)}});
    l.ji = Object({"http://www.opengis.net/gml": {Polygon: ap(Vr.prototype.ne), Surface: ap(gs.prototype.nh)}});
    l.ki = Object({"http://www.opengis.net/gml": {patches: bp(gs.prototype.Gn)}});
    l.Uh = Object({"http://www.opengis.net/gml": {segments: bp(gs.prototype.In)}});
    l.Vh = Object({"http://www.opengis.net/gml": {lowerCorner: ap(gs.prototype.qf), upperCorner: ap(gs.prototype.qf)}});
    l.bi = Object({"http://www.opengis.net/gml": {PolygonPatch: bp(gs.prototype.Hn)}});
    l.ii = Object({"http://www.opengis.net/gml": {LineStringSegment: bp(gs.prototype.Bn)}});
    function hs(b, c, d) {
        d = d[d.length - 1].srsName;
        c = c.M();
        for (var e = c.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var k = h, n = "enu";
            null != d && (n = ue(re(d)));
            f[k] = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        ds(b, f.join(" "))
    }

    l.Ph = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = Eo(b.namespaceURI, "pos");
        b.appendChild(e);
        d = d[d.length - 1].srsName;
        b = "enu";
        null != d && (b = ue(re(d)));
        c = c.M();
        ds(e, "en" === b.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var is = {"http://www.opengis.net/gml": {lowerCorner: U(ds), upperCorner: U(ds)}};
    l = gs.prototype;
    l.xo = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        m(e) && b.setAttribute("srsName", e);
        kp({O: b}, is, hp, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    l.Mh = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        e = Eo(b.namespaceURI, "posList");
        b.appendChild(e);
        hs(e, c, d)
    };
    l.gi = function (b, c) {
        var d = c[c.length - 1], e = d.O, f = d.exteriorWritten;
        m(f) || (d.exteriorWritten = !0);
        return Eo(e.namespaceURI, m(f) ? "interior" : "exterior")
    };
    l.xe = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        "PolygonPatch" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "Polygon" === b.nodeName || "PolygonPatch" === b.nodeName ? (c = c.Dd(), kp({
            O: b,
            srsName: e
        }, js, this.gi, c, d, void 0, this)) : "Surface" === b.nodeName && (e = Eo(b.namespaceURI, "patches"), b.appendChild(e), b = Eo(e.namespaceURI, "PolygonPatch"), e.appendChild(b), this.xe(b, c, d))
    };
    l.se = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        "LineStringSegment" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "LineString" === b.nodeName || "LineStringSegment" === b.nodeName ? (e = Eo(b.namespaceURI, "posList"), b.appendChild(e), hs(e, c, d)) : "Curve" === b.nodeName && (e = Eo(b.namespaceURI, "segments"), b.appendChild(e), b = Eo(e.namespaceURI, "LineStringSegment"), e.appendChild(b), this.se(b, c, d))
    };
    l.Oh = function (b, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.surface;
        null != f && b.setAttribute("srsName", f);
        c = c.Fd();
        kp({O: b, srsName: f, surface: e}, ks, this.d, c, d, void 0, this)
    };
    l.yo = function (b, c, d) {
        var e = d[d.length - 1].srsName;
        null != e && b.setAttribute("srsName", e);
        c = c.Zd();
        kp({O: b, srsName: e}, ls, fp("pointMember"), c, d, void 0, this)
    };
    l.Nh = function (b, c, d) {
        var e = d[d.length - 1], f = e.srsName, e = e.curve;
        null != f && b.setAttribute("srsName", f);
        c = c.$c();
        kp({O: b, srsName: f, curve: e}, ms, this.d, c, d, void 0, this)
    };
    l.Qh = function (b, c, d) {
        var e = Eo(b.namespaceURI, "LinearRing");
        b.appendChild(e);
        this.Mh(e, c, d)
    };
    l.Rh = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.xe(e, c, d))
    };
    l.zo = function (b, c, d) {
        var e = Eo(b.namespaceURI, "Point");
        b.appendChild(e);
        this.Ph(e, c, d)
    };
    l.Lh = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.se(e, c, d))
    };
    l.ve = function (b, c, d) {
        var e = d[d.length - 1], f = Db(e);
        f.O = b;
        var g;
        ga(c) ? m(e.dataProjection) ? g = Me(c, e.featureProjection, e.dataProjection) : g = c : g = Dr(c, !0, e);
        kp(f, ns, this.c, [g], d, void 0, this)
    };
    l.Jh = function (b, c, d) {
        var e = c.Z;
        m(e) && b.setAttribute("fid", e);
        var e = d[d.length - 1], f = e.featureNS, g = c.b;
        m(e.fc) || (e.fc = {}, e.fc[f] = {});
        var h = c.D();
        c = [];
        var k = [], n;
        for (n in h) {
            var p = h[n];
            null !== p && (c.push(n), k.push(p), n == g ? n in e.fc[f] || (e.fc[f][n] = U(this.ve, this)) : n in e.fc[f] || (e.fc[f][n] = U(ds)))
        }
        n = Db(e);
        n.O = b;
        kp(n, e.fc, fp(void 0, f), k, d, c)
    };
    var ks = {
        "http://www.opengis.net/gml": {
            surfaceMember: U(gs.prototype.Rh),
            polygonMember: U(gs.prototype.Rh)
        }
    }, ls = {"http://www.opengis.net/gml": {pointMember: U(gs.prototype.zo)}}, ms = {
        "http://www.opengis.net/gml": {
            lineStringMember: U(gs.prototype.Lh),
            curveMember: U(gs.prototype.Lh)
        }
    }, js = {"http://www.opengis.net/gml": {exterior: U(gs.prototype.Qh), interior: U(gs.prototype.Qh)}}, ns = {
        "http://www.opengis.net/gml": {
            Curve: U(gs.prototype.se),
            MultiCurve: U(gs.prototype.Nh),
            Point: U(gs.prototype.Ph),
            MultiPoint: U(gs.prototype.yo),
            LineString: U(gs.prototype.se),
            MultiLineString: U(gs.prototype.Nh),
            LinearRing: U(gs.prototype.Mh),
            Polygon: U(gs.prototype.xe),
            MultiPolygon: U(gs.prototype.Oh),
            Surface: U(gs.prototype.xe),
            MultiSurface: U(gs.prototype.Oh),
            Envelope: U(gs.prototype.xo)
        }
    }, os = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    gs.prototype.d = function (b, c) {
        return Eo("http://www.opengis.net/gml", os[c[c.length - 1].O.nodeName])
    };
    gs.prototype.c = function (b, c) {
        var d = c[c.length - 1], e = d.multiSurface, f = d.surface, g = d.curve, d = d.multiCurve, h;
        ga(b) ? h = "Envelope" : (h = b.L(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return Eo("http://www.opengis.net/gml", h)
    };
    gs.prototype.q = function (b, c) {
        c = Cr(this, c);
        var d = Eo("http://www.opengis.net/gml", "geom"), e = {
            O: d,
            srsName: this.srsName,
            curve: this.e,
            surface: this.i,
            multiSurface: this.f,
            multiCurve: this.g
        };
        m(c) && Fb(e, c);
        this.ve(d, b, [e]);
        return d
    };
    gs.prototype.b = function (b, c) {
        c = Cr(this, c);
        var d = Eo("http://www.opengis.net/gml", "featureMembers");
        Yo(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.e,
            surface: this.i,
            multiSurface: this.f,
            multiCurve: this.g,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        m(c) && Fb(e, c);
        var e = [e], f = e[e.length - 1], g = f.featureType, h = f.featureNS, k = {};
        k[h] = {};
        k[h][g] = U(this.Jh, this);
        f = Db(f);
        f.O = d;
        kp(f, k, fp(g, h), b, e);
        return d
    };
    function ps(b) {
        b = m(b) ? b : {};
        Vr.call(this, b);
        this.a["http://www.opengis.net/gml"].featureMember = ap(Vr.prototype.hd);
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }

    w(ps, Vr);
    l = ps.prototype;
    l.fh = function (b, c) {
        var d = Fo(b, !1).replace(/^\s*|\s*$/g, ""), e = c[0].srsName, f = b.parentNode.getAttribute("srsDimension"), g = "enu";
        null === e || (g = ue(re(e)));
        d = d.split(/[\s,]+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = bs(f)) : e = bs(b.getAttribute("dimension")) : e = bs(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e)f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.xn = function (b, c) {
        var d = V([null], this.Sh, b, c, this);
        return Nd(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    l.ok = function (b, c) {
        var d = V(void 0, this.td, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.hn = function (b, c) {
        var d = V(void 0, this.td, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.rd = Object({"http://www.opengis.net/gml": {coordinates: bp(ps.prototype.fh)}});
    l.ye = Object({"http://www.opengis.net/gml": {innerBoundaryIs: ps.prototype.ok, outerBoundaryIs: ps.prototype.hn}});
    l.Sh = Object({"http://www.opengis.net/gml": {coordinates: ap(ps.prototype.fh)}});
    l.Df = Object({
        "http://www.opengis.net/gml": {
            Point: bp(Vr.prototype.lh),
            MultiPoint: bp(Vr.prototype.jh),
            LineString: bp(Vr.prototype.me),
            MultiLineString: bp(Vr.prototype.ih),
            LinearRing: bp(Vr.prototype.hh),
            Polygon: bp(Vr.prototype.ne),
            MultiPolygon: bp(Vr.prototype.kh),
            Box: bp(ps.prototype.xn)
        }
    });
    function qs(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re("EPSG:4326");
        this.a = b.readExtensions
    }

    w(qs, Sr);
    var rs = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function ss(b, c, d) {
        b.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele"in d ? (b.push(d.ele), zb(d, "ele")) : b.push(0);
        "time"in d ? (b.push(d.time), zb(d, "time")) : b.push(0);
        return b
    }

    function ts(b, c) {
        var d = c[c.length - 1], e = b.getAttribute("href");
        null === e || (d.link = e);
        jp(us, b, c)
    }

    function vs(b, c) {
        c[c.length - 1].extensionsNode_ = b
    }

    function ws(b, c) {
        var d = c[0], e = V({flatCoordinates: []}, xs, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            zb(e, "flatCoordinates");
            var g = new N(null);
            bn(g, "XYZM", f);
            Dr(g, !1, d);
            d = new X(g);
            d.t(e);
            return d
        }
    }

    function ys(b, c) {
        var d = c[0], e = V({flatCoordinates: [], ends: []}, zs, b, c);
        if (m(e)) {
            var f = e.flatCoordinates;
            zb(e, "flatCoordinates");
            var g = e.ends;
            zb(e, "ends");
            var h = new P(null);
            cn(h, "XYZM", f, g);
            Dr(h, !1, d);
            d = new X(h);
            d.t(e);
            return d
        }
    }

    function As(b, c) {
        var d = c[0], e = V({}, Bs, b, c);
        if (m(e)) {
            var f = ss([], b, e), f = new E(f, "XYZM");
            Dr(f, !1, d);
            d = new X(f);
            d.t(e);
            return d
        }
    }

    var Cs = {rte: ws, trk: ys, wpt: As}, Ds = T(rs, {
            rte: ap(ws),
            trk: ap(ys),
            wpt: ap(As)
        }), us = T(rs, {text: S(Y, "linkText"), type: S(Y, "linkType")}), xs = T(rs, {
            name: S(Y),
            cmt: S(Y),
            desc: S(Y),
            src: S(Y),
            link: ts,
            number: S(as),
            extensions: vs,
            type: S(Y),
            rtept: function (b, c) {
                var d = V({}, Es, b, c);
                m(d) && ss(c[c.length - 1].flatCoordinates, b, d)
            }
        }), Es = T(rs, {ele: S(Zr), time: S(Yr)}), zs = T(rs, {
            name: S(Y),
            cmt: S(Y),
            desc: S(Y),
            src: S(Y),
            link: ts,
            number: S(as),
            type: S(Y),
            extensions: vs,
            trkseg: function (b, c) {
                var d = c[c.length - 1];
                jp(Fs, b, c);
                d.ends.push(d.flatCoordinates.length)
            }
        }),
        Fs = T(rs, {
            trkpt: function (b, c) {
                var d = V({}, Gs, b, c);
                m(d) && ss(c[c.length - 1].flatCoordinates, b, d)
            }
        }), Gs = T(rs, {ele: S(Zr), time: S(Yr)}), Bs = T(rs, {
            ele: S(Zr),
            time: S(Yr),
            magvar: S(Zr),
            geoidheight: S(Zr),
            name: S(Y),
            cmt: S(Y),
            desc: S(Y),
            src: S(Y),
            link: ts,
            sym: S(Y),
            type: S(Y),
            fix: S(Y),
            sat: S(as),
            hdop: S(Zr),
            vdop: S(Zr),
            pdop: S(Zr),
            ageofdgpsdata: S(Zr),
            dgpsid: S(as),
            extensions: vs
        });

    function Hs(b, c) {
        null === c && (c = []);
        for (var d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (m(b.a)) {
                var g = f.get("extensionsNode_") || null;
                b.a(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }

    qs.prototype.eh = function (b, c) {
        if (!Ya(rs, b.namespaceURI))return null;
        var d = Cs[b.localName];
        if (!m(d))return null;
        d = d(b, [Br(this, b, c)]);
        if (!m(d))return null;
        Hs(this, [d]);
        return d
    };
    qs.prototype.Nb = function (b, c) {
        if (!Ya(rs, b.namespaceURI))return [];
        if ("gpx" == b.localName) {
            var d = V([], Ds, b, [Br(this, b, c)]);
            if (m(d))return Hs(this, d), d
        }
        return []
    };
    function Is(b, c, d) {
        b.setAttribute("href", c);
        c = d[d.length - 1].properties;
        kp({O: b}, Js, hp, [c.linkText, c.linkType], d, Ks)
    }

    function Ls(b, c, d) {
        var e = d[d.length - 1], f = e.O.namespaceURI, g = e.properties;
        Yo(b, null, "lat", c[1]);
        Yo(b, null, "lon", c[0]);
        switch (e.geometryLayout) {
            case "XYZM":
                0 !== c[3] && (g.time = c[3]);
            case "XYZ":
                0 !== c[2] && (g.ele = c[2]);
                break;
            case "XYM":
                0 !== c[2] && (g.time = c[2])
        }
        c = Ms[f];
        e = ip(g, c);
        kp({O: b, properties: g}, Ns, hp, e, d, c)
    }

    var Ks = ["text", "type"], Js = dp(rs, {
            text: U(ds),
            type: U(ds)
        }), Os = dp(rs, "name cmt desc src link number type rtept".split(" ")), Ps = dp(rs, {
            name: U(ds),
            cmt: U(ds),
            desc: U(ds),
            src: U(ds),
            link: U(Is),
            number: U(fs),
            type: U(ds),
            rtept: ep(U(Ls))
        }), Qs = dp(rs, "name cmt desc src link number type trkseg".split(" ")), Ts = dp(rs, {
            name: U(ds),
            cmt: U(ds),
            desc: U(ds),
            src: U(ds),
            link: U(Is),
            number: U(fs),
            type: U(ds),
            trkseg: ep(U(function (b, c, d) {
                kp({O: b, geometryLayout: c.b, properties: {}}, Rs, Ss, c.M(), d)
            }))
        }), Ss = fp("trkpt"), Rs = dp(rs, {trkpt: U(Ls)}),
        Ms = dp(rs, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")), Ns = dp(rs, {
            ele: U(es),
            time: U(function (b, c) {
                var d = new Date(1E3 * c), d = d.getUTCFullYear() + "-" + Ma(d.getUTCMonth() + 1) + "-" + Ma(d.getUTCDate()) + "T" + Ma(d.getUTCHours()) + ":" + Ma(d.getUTCMinutes()) + ":" + Ma(d.getUTCSeconds()) + "Z";
                b.appendChild(Bo.createTextNode(d))
            }),
            magvar: U(es),
            geoidheight: U(es),
            name: U(ds),
            cmt: U(ds),
            desc: U(ds),
            src: U(ds),
            link: U(Is),
            sym: U(ds),
            type: U(ds),
            fix: U(ds),
            sat: U(fs),
            hdop: U(es),
            vdop: U(es),
            pdop: U(es),
            ageofdgpsdata: U(es),
            dgpsid: U(fs)
        }), Us = {Point: "wpt", LineString: "rte", MultiLineString: "trk"};

    function Vs(b, c) {
        var d = b.Q();
        if (m(d))return Eo(c[c.length - 1].O.namespaceURI, Us[d.L()])
    }

    var Ws = dp(rs, {
        rte: U(function (b, c, d) {
            var e = d[0], f = c.D();
            b = {O: b, properties: f};
            c = c.Q();
            m(c) && (c = Dr(c, !0, e), b.geometryLayout = c.b, f.rtept = c.M());
            e = Os[d[d.length - 1].O.namespaceURI];
            f = ip(f, e);
            kp(b, Ps, hp, f, d, e)
        }), trk: U(function (b, c, d) {
            var e = d[0], f = c.D();
            b = {O: b, properties: f};
            c = c.Q();
            m(c) && (c = Dr(c, !0, e), f.trkseg = c.$c());
            e = Qs[d[d.length - 1].O.namespaceURI];
            f = ip(f, e);
            kp(b, Ts, hp, f, d, e)
        }), wpt: U(function (b, c, d) {
            var e = d[0], f = d[d.length - 1];
            f.properties = c.D();
            c = c.Q();
            m(c) && (c = Dr(c, !0, e), f.geometryLayout = c.b, Ls(b, c.M(),
                d))
        })
    });
    qs.prototype.b = function (b, c) {
        c = Cr(this, c);
        var d = Eo("http://www.topografix.com/GPX/1/1", "gpx");
        kp({O: d}, Ws, Vs, b, [c]);
        return d
    };
    function Xs(b) {
        b = Ys(b);
        return Ua(b, function (b) {
            return b.c.substring(b.b, b.a)
        })
    }

    function Zs(b, c, d) {
        this.c = b;
        this.b = c;
        this.a = d
    }

    function Ys(b) {
        for (var c = RegExp("\r\n|\r|\n", "g"), d = 0, e, f = []; e = c.exec(b);)d = new Zs(b, d, e.index), f.push(d), d = c.lastIndex;
        d < b.length && (d = new Zs(b, d, b.length), f.push(d));
        return f
    };
    function $s() {
        this.defaultDataProjection = null
    }

    w($s, Ar);
    l = $s.prototype;
    l.L = function () {
        return "text"
    };
    l.xb = function (b, c) {
        return this.gd(ia(b) ? b : "", Cr(this, c))
    };
    l.ja = function (b, c) {
        return this.pf(ia(b) ? b : "", Cr(this, c))
    };
    l.Fc = function (b, c) {
        return this.jd(ia(b) ? b : "", Cr(this, c))
    };
    l.ya = function () {
        return this.defaultDataProjection
    };
    l.pd = function (b, c) {
        return this.te(b, Cr(this, c))
    };
    l.zb = function (b, c) {
        return this.Kh(b, Cr(this, c))
    };
    l.Lc = function (b, c) {
        return this.qd(b, Cr(this, c))
    };
    function at(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re("EPSG:4326");
        this.a = m(b.altitudeMode) ? b.altitudeMode : "none"
    }

    w(at, $s);
    var bt = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/, ct = /^H.([A-Z]{3}).*?:(.*)/, dt = /^HFDTE(\d{2})(\d{2})(\d{2})/;
    at.prototype.gd = function (b, c) {
        var d = this.a, e = Xs(b), f = {}, g = [], h = 2E3, k = 0, n = 1, p, q;
        p = 0;
        for (q = e.length; p < q; ++p) {
            var r = e[p], t;
            if ("B" == r.charAt(0)) {
                if (t = bt.exec(r)) {
                    var r = parseInt(t[1], 10), u = parseInt(t[2], 10), A = parseInt(t[3], 10), z = parseInt(t[4], 10) + parseInt(t[5], 10) / 6E4;
                    "S" == t[6] && (z = -z);
                    var C = parseInt(t[7], 10) + parseInt(t[8], 10) / 6E4;
                    "W" == t[9] && (C = -C);
                    g.push(C, z);
                    "none" != d && g.push("gps" == d ? parseInt(t[11], 10) : "barometric" == d ? parseInt(t[12], 10) : 0);
                    g.push(Date.UTC(h, k, n, r, u, A) / 1E3)
                }
            } else if ("H" == r.charAt(0))if (t =
                    dt.exec(r))n = parseInt(t[1], 10), k = parseInt(t[2], 10) - 1, h = 2E3 + parseInt(t[3], 10); else if (t = ct.exec(r))f[t[1]] = Ca(t[2]), dt.exec(r)
        }
        if (0 === g.length)return null;
        e = new N(null);
        bn(e, "none" == d ? "XYM" : "XYZM", g);
        d = new X(Dr(e, !1, c));
        d.t(f);
        return d
    };
    at.prototype.pf = function (b, c) {
        var d = this.gd(b, c);
        return null === d ? [] : [d]
    };
    function et(b, c) {
        var d;
        b instanceof et ? (this.Wb = m(c) ? c : b.Wb, ft(this, b.Ob), this.pc = b.pc, this.nb = b.nb, gt(this, b.Dc), this.ib = b.ib, ht(this, b.a.clone()), this.Rb = b.Rb) : b && (d = bo(String(b))) ? (this.Wb = !!c, ft(this, d[1] || "", !0), this.pc = it(d[2] || ""), this.nb = it(d[3] || "", !0), gt(this, d[4]), this.ib = it(d[5] || "", !0), ht(this, d[6] || "", !0), this.Rb = it(d[7] || "")) : (this.Wb = !!c, this.a = new jt(null, 0, this.Wb))
    }

    l = et.prototype;
    l.Ob = "";
    l.pc = "";
    l.nb = "";
    l.Dc = null;
    l.ib = "";
    l.Rb = "";
    l.Wb = !1;
    l.toString = function () {
        var b = [], c = this.Ob;
        c && b.push(kt(c, lt, !0), ":");
        if (c = this.nb) {
            b.push("//");
            var d = this.pc;
            d && b.push(kt(d, lt, !0), "@");
            b.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            c = this.Dc;
            null != c && b.push(":", String(c))
        }
        if (c = this.ib)this.nb && "/" != c.charAt(0) && b.push("/"), b.push(kt(c, "/" == c.charAt(0) ? mt : nt, !0));
        (c = this.a.toString()) && b.push("?", c);
        (c = this.Rb) && b.push("#", kt(c, ot));
        return b.join("")
    };
    l.clone = function () {
        return new et(this)
    };
    function ft(b, c, d) {
        b.Ob = d ? it(c, !0) : c;
        b.Ob && (b.Ob = b.Ob.replace(/:$/, ""))
    }

    function gt(b, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c)throw Error("Bad port number " + c);
            b.Dc = c
        } else b.Dc = null
    }

    function ht(b, c, d) {
        c instanceof jt ? (b.a = c, pt(b.a, b.Wb)) : (d || (c = kt(c, qt)), b.a = new jt(c, 0, b.Wb))
    }

    function rt(b) {
        return b instanceof et ? b.clone() : new et(b, void 0)
    }

    function st(b, c) {
        b instanceof et || (b = rt(b));
        c instanceof et || (c = rt(c));
        var d = b, e = c, f = d.clone(), g = !!e.Ob;
        g ? ft(f, e.Ob) : g = !!e.pc;
        g ? f.pc = e.pc : g = !!e.nb;
        g ? f.nb = e.nb : g = null != e.Dc;
        var h = e.ib;
        if (g)gt(f, e.Dc); else if (g = !!e.ib)if ("/" != h.charAt(0) && (d.nb && !d.ib ? h = "/" + h : (d = f.ib.lastIndexOf("/"), -1 != d && (h = f.ib.substr(0, d + 1) + h))), d = h, ".." == d || "." == d)h = ""; else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), k = [], n = 0; n < d.length;) {
                var p = d[n++];
                "." == p ? h && n == d.length && k.push("") :
                    ".." == p ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && n == d.length && k.push("")) : (k.push(p), h = !0)
            }
            h = k.join("/")
        } else h = d;
        g ? f.ib = h : g = "" !== e.a.toString();
        g ? ht(f, it(e.a.toString())) : g = !!e.Rb;
        g && (f.Rb = e.Rb);
        return f
    }

    function it(b, c) {
        return b ? c ? decodeURI(b) : decodeURIComponent(b) : ""
    }

    function kt(b, c, d) {
        return ia(b) ? (b = encodeURI(b).replace(c, tt), d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
    }

    function tt(b) {
        b = b.charCodeAt(0);
        return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
    }

    var lt = /[#\/\?@]/g, nt = /[\#\?:]/g, mt = /[\#\?]/g, qt = /[\#\?@]/g, ot = /#/g;

    function jt(b, c, d) {
        this.a = b || null;
        this.b = !!d
    }

    function ut(b) {
        b.ia || (b.ia = new Eh, b.ua = 0, b.a && eo(b.a, function (c, d) {
            b.add(decodeURIComponent(c.replace(/\+/g, " ")), d)
        }))
    }

    l = jt.prototype;
    l.ia = null;
    l.ua = null;
    l.Sb = function () {
        ut(this);
        return this.ua
    };
    l.add = function (b, c) {
        ut(this);
        this.a = null;
        b = vt(this, b);
        var d = this.ia.get(b);
        d || this.ia.set(b, d = []);
        d.push(c);
        this.ua++;
        return this
    };
    l.remove = function (b) {
        ut(this);
        b = vt(this, b);
        return Gh(this.ia.b, b) ? (this.a = null, this.ua -= this.ia.get(b).length, this.ia.remove(b)) : !1
    };
    l.clear = function () {
        this.ia = this.a = null;
        this.ua = 0
    };
    l.la = function () {
        ut(this);
        return 0 == this.ua
    };
    function wt(b, c) {
        ut(b);
        c = vt(b, c);
        return Gh(b.ia.b, c)
    }

    l.C = function () {
        ut(this);
        for (var b = this.ia.eb(), c = this.ia.C(), d = [], e = 0; e < c.length; e++)for (var f = b[e], g = 0; g < f.length; g++)d.push(c[e]);
        return d
    };
    l.eb = function (b) {
        ut(this);
        var c = [];
        if (ia(b))wt(this, b) && (c = ab(c, this.ia.get(vt(this, b)))); else {
            b = this.ia.eb();
            for (var d = 0; d < b.length; d++)c = ab(c, b[d])
        }
        return c
    };
    l.set = function (b, c) {
        ut(this);
        this.a = null;
        b = vt(this, b);
        wt(this, b) && (this.ua -= this.ia.get(b).length);
        this.ia.set(b, [c]);
        this.ua++;
        return this
    };
    l.get = function (b, c) {
        var d = b ? this.eb(b) : [];
        return 0 < d.length ? String(d[0]) : c
    };
    function xt(b, c, d) {
        b.remove(c);
        0 < d.length && (b.a = null, b.ia.set(vt(b, c), cb(d)), b.ua += d.length)
    }

    l.toString = function () {
        if (this.a)return this.a;
        if (!this.ia)return "";
        for (var b = [], c = this.ia.C(), d = 0; d < c.length; d++)for (var e = c[d], f = encodeURIComponent(String(e)), e = this.eb(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
            b.push(h)
        }
        return this.a = b.join("&")
    };
    l.clone = function () {
        var b = new jt;
        b.a = this.a;
        this.ia && (b.ia = this.ia.clone(), b.ua = this.ua);
        return b
    };
    function vt(b, c) {
        var d = String(c);
        b.b && (d = d.toLowerCase());
        return d
    }

    function pt(b, c) {
        c && !b.b && (ut(b), b.a = null, b.ia.forEach(function (b, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), xt(this, f, b))
        }, b));
        b.b = c
    };
    function yt(b) {
        b = m(b) ? b : {};
        this.d = b.font;
        this.e = b.rotation;
        this.b = b.scale;
        this.c = b.text;
        this.f = b.textAlign;
        this.i = b.textBaseline;
        this.a = m(b.fill) ? b.fill : null;
        this.g = m(b.stroke) ? b.stroke : null;
        this.q = m(b.offsetX) ? b.offsetX : 0;
        this.n = m(b.offsetY) ? b.offsetY : 0
    }

    l = yt.prototype;
    l.Wi = function () {
        return this.d
    };
    l.lj = function () {
        return this.q
    };
    l.mj = function () {
        return this.n
    };
    l.Rm = function () {
        return this.a
    };
    l.Sm = function () {
        return this.e
    };
    l.Tm = function () {
        return this.b
    };
    l.Um = function () {
        return this.g
    };
    l.Vm = function () {
        return this.c
    };
    l.wj = function () {
        return this.f
    };
    l.xj = function () {
        return this.i
    };
    l.Xn = function (b) {
        this.d = b
    };
    l.Wn = function (b) {
        this.a = b
    };
    l.Wm = function (b) {
        this.e = b
    };
    l.Xm = function (b) {
        this.b = b
    };
    l.fo = function (b) {
        this.g = b
    };
    l.ho = function (b) {
        this.c = b
    };
    l.io = function (b) {
        this.f = b
    };
    l.jo = function (b) {
        this.i = b
    };
    function zt(b) {
        function c(b) {
            return ga(b) ? b : ia(b) ? (!(b in e) && "#" + b in e && (b = "#" + b), c(e[b])) : d
        }

        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re("EPSG:4326");
        var d = m(b.defaultStyle) ? b.defaultStyle : At, e = {};
        this.c = m(b.extractStyles) ? b.extractStyles : !0;
        this.a = e;
        this.d = function () {
            var b = this.get("Style");
            if (m(b))return b;
            b = this.get("styleUrl");
            return m(b) ? c(b) : d
        }
    }

    w(zt, Sr);
    var Bt = ["http://www.google.com/kml/ext/2.2"], Ct = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"], Dt = [255, 255, 255, 1], Et = new Dl({color: Dt}), Ft = [20, 2], Gt = [64, 64], Ht = new Hj({
        anchor: Ft,
        anchorOrigin: "bottom-left",
        anchorXUnits: "pixels",
        anchorYUnits: "pixels",
        crossOrigin: "anonymous",
        rotation: 0,
        scale: .5,
        size: Gt,
        src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
    }), It = new zl({color: Dt, width: 1}), Jt = new yt({
        font: "normal 16px Helvetica",
        fill: Et, stroke: It, scale: 1
    }), At = [new Fl({fill: Et, image: Ht, text: Jt, stroke: It, zIndex: 0})], Kt = {
        fraction: "fraction",
        pixels: "pixels"
    };

    function Lt(b) {
        b = Fo(b, !1);
        if (b = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b))return b = b[1], [parseInt(b.substr(6, 2), 16), parseInt(b.substr(4, 2), 16), parseInt(b.substr(2, 2), 16), parseInt(b.substr(0, 2), 16) / 255]
    }

    function Mt(b) {
        b = Fo(b, !1);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(b);)c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), b = b.substr(e[0].length);
        return "" !== b ? void 0 : c
    }

    function Nt(b) {
        var c = Fo(b, !1);
        return null != b.baseURI ? st(b.baseURI, Ca(c)).toString() : Ca(c)
    }

    function Ot(b) {
        b = Zr(b);
        if (m(b))return Math.sqrt(b)
    }

    function Pt(b, c) {
        return V(null, Qt, b, c)
    }

    function Rt(b, c) {
        var d = V({j: [], Ih: []}, St, b, c);
        if (m(d)) {
            var e = d.j, d = d.Ih, f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f)e[4 * f + 3] = d[f];
            d = new N(null);
            bn(d, "XYZM", e);
            return d
        }
    }

    function Tt(b, c) {
        var d = V({}, Ut, b, c), e = V(null, Vt, b, c);
        if (m(e)) {
            var f = new N(null);
            bn(f, "XYZ", e);
            f.t(d);
            return f
        }
    }

    function Wt(b, c) {
        var d = V({}, Ut, b, c), e = V(null, Vt, b, c);
        if (m(e)) {
            var f = new F(null);
            fl(f, "XYZ", e, [e.length]);
            f.t(d);
            return f
        }
    }

    function Xt(b, c) {
        var d = V([], Yt, b, c);
        if (!m(d))return null;
        if (0 === d.length)return new Vm(d);
        var e = !0, f = d[0].L(), g, h, k;
        h = 1;
        for (k = d.length; h < k; ++h)if (g = d[h], g.L() != f) {
            e = !1;
            break
        }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.b;
                f = g.j;
                h = 1;
                for (k = d.length; h < k; ++h)g = d[h], db(f, g.j);
                g = new en(null);
                Ak(g, e, f);
                g.k();
                Zt(g, d);
                return g
            }
            return "LineString" == f ? (g = new P(null), dn(g, d), Zt(g, d), g) : "Polygon" == f ? (g = new R(null), gn(g, d), Zt(g, d), g) : "GeometryCollection" == f ? new Vm(d) : null
        }
        return new Vm(d)
    }

    function $t(b, c) {
        var d = V({}, Ut, b, c), e = V(null, Vt, b, c);
        if (null != e) {
            var f = new E(null);
            Uk(f, "XYZ", e);
            f.t(d);
            return f
        }
    }

    function au(b, c) {
        var d = V({}, Ut, b, c), e = V([null], bu, b, c);
        if (null != e && null !== e[0]) {
            var f = new F(null), g = e[0], h = [g.length], k, n;
            k = 1;
            for (n = e.length; k < n; ++k)db(g, e[k]), h.push(g.length);
            fl(f, "XYZ", g, h);
            f.t(d);
            return f
        }
    }

    function cu(b, c) {
        var d = V({}, du, b, c);
        if (!m(d))return null;
        var e = Ab(d, "fillStyle", Et), f = d.fill;
        m(f) && !f && (e = null);
        var f = Ab(d, "imageStyle", Ht), g = Ab(d, "textStyle", Jt), h = Ab(d, "strokeStyle", It), d = d.outline;
        m(d) && !d && (h = null);
        return [new Fl({fill: e, image: f, stroke: h, text: g, zIndex: void 0})]
    }

    function Zt(b, c) {
        var d = c.length, e = Array(c.length), f = Array(c.length), g, h, k, n;
        k = n = !1;
        for (h = 0; h < d; ++h)g = c[h], e[h] = g.get("extrude"), f[h] = g.get("altitudeMode"), k = k || m(e[h]), n = n || m(f[h]);
        k && b.set("extrude", e);
        n && b.set("altitudeMode", f)
    }

    function eu(b, c) {
        jp(fu, b, c)
    }

    var gu = T(Ct, {value: bp(Y)}), fu = T(Ct, {
            Data: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = V(void 0, gu, b, c);
                    m(e) && (c[c.length - 1][d] = e)
                }
            }, SchemaData: function (b, c) {
                jp(hu, b, c)
            }
        }), Ut = T(Ct, {
            extrude: S(Wr),
            altitudeMode: S(Y)
        }), Qt = T(Ct, {coordinates: bp(Mt)}), bu = T(Ct, {
            innerBoundaryIs: function (b, c) {
                var d = V(void 0, iu, b, c);
                m(d) && c[c.length - 1].push(d)
            }, outerBoundaryIs: function (b, c) {
                var d = V(void 0, ju, b, c);
                m(d) && (c[c.length - 1][0] = d)
            }
        }), St = T(Ct, {
            when: function (b, c) {
                var d = c[c.length - 1].Ih, e = Fo(b, !1);
                if (e =
                        /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                    var f = Date.UTC(parseInt(e[1], 10), m(e[3]) ? parseInt(e[3], 10) - 1 : 0, m(e[5]) ? parseInt(e[5], 10) : 1, m(e[7]) ? parseInt(e[7], 10) : 0, m(e[8]) ? parseInt(e[8], 10) : 0, m(e[9]) ? parseInt(e[9], 10) : 0);
                    if (m(e[10]) && "Z" != e[10]) {
                        var g = "-" == e[11] ? -1 : 1, f = f + 60 * g * parseInt(e[12], 10);
                        m(e[13]) && (f += 3600 * g * parseInt(e[13], 10))
                    }
                    d.push(f)
                } else d.push(0)
            }
        }, T(Bt, {
            coord: function (b, c) {
                var d = c[c.length - 1].j, e = Fo(b, !1);
                (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ?
                    d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0)
            }
        })), Vt = T(Ct, {coordinates: bp(Mt)}), ku = T(Ct, {href: S(Nt)}, T(Bt, {
            x: S(Zr),
            y: S(Zr),
            w: S(Zr),
            h: S(Zr)
        })), lu = T(Ct, {
            Icon: S(function (b, c) {
                var d = V({}, ku, b, c);
                return m(d) ? d : null
            }), heading: S(Zr), hotSpot: S(function (b) {
                var c = b.getAttribute("xunits"), d = b.getAttribute("yunits");
                return {x: parseFloat(b.getAttribute("x")), Bf: Kt[c], y: parseFloat(b.getAttribute("y")), Cf: Kt[d]}
            }), scale: S(Ot)
        }), iu = T(Ct, {LinearRing: bp(Pt)}), mu = T(Ct, {color: S(Lt), scale: S(Ot)}),
        nu = T(Ct, {color: S(Lt), width: S(Zr)}), Yt = T(Ct, {
            LineString: ap(Tt),
            LinearRing: ap(Wt),
            MultiGeometry: ap(Xt),
            Point: ap($t),
            Polygon: ap(au)
        }), ou = T(Bt, {Track: ap(Rt)}), qu = T(Ct, {
            ExtendedData: eu, Link: function (b, c) {
                jp(pu, b, c)
            }, address: S(Y), description: S(Y), name: S(Y), open: S(Wr), phoneNumber: S(Y), visibility: S(Wr)
        }), pu = T(Ct, {href: S(Nt)}), ju = T(Ct, {LinearRing: bp(Pt)}), ru = T(Ct, {
            Style: S(cu),
            key: S(Y),
            styleUrl: S(function (b) {
                var c = Ca(Fo(b, !1));
                return null != b.baseURI ? st(b.baseURI, c).toString() : c
            })
        }), tu = T(Ct, {
            ExtendedData: eu,
            MultiGeometry: S(Xt, "geometry"),
            LineString: S(Tt, "geometry"),
            LinearRing: S(Wt, "geometry"),
            Point: S($t, "geometry"),
            Polygon: S(au, "geometry"),
            Style: S(cu),
            StyleMap: function (b, c) {
                var d = V(void 0, su, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    ga(d) ? e.Style = d : ia(d) && (e.styleUrl = d)
                }
            },
            address: S(Y),
            description: S(Y),
            name: S(Y),
            open: S(Wr),
            phoneNumber: S(Y),
            styleUrl: S(Nt),
            visibility: S(Wr)
        }, T(Bt, {
            MultiTrack: S(function (b, c) {
                var d = V([], ou, b, c);
                if (m(d)) {
                    var e = new P(null);
                    dn(e, d);
                    return e
                }
            }, "geometry"), Track: S(Rt, "geometry")
        })), uu =
            T(Ct, {color: S(Lt), fill: S(Wr), outline: S(Wr)}), hu = T(Ct, {
            SimpleData: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = Y(b);
                    c[c.length - 1][d] = e
                }
            }
        }), du = T(Ct, {
            IconStyle: function (b, c) {
                var d = V({}, lu, b, c);
                if (m(d)) {
                    var e = c[c.length - 1], f = Ab(d, "Icon", {}), g;
                    g = f.href;
                    g = m(g) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                    var h, k, n, p = d.hotSpot;
                    m(p) ? (h = [p.x, p.y], k = p.Bf, n = p.Cf) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Ft, n = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) &&
                    (h = [.5, 0], n = k = "fraction");
                    var q, p = f.x, r = f.y;
                    m(p) && m(r) && (q = [p, r]);
                    var t, p = f.w, f = f.h;
                    m(p) && m(f) && (t = [p, f]);
                    var u, f = d.heading;
                    m(f) && (u = Yb(f));
                    d = d.scale;
                    "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (t = Gt);
                    h = new Hj({
                        anchor: h,
                        anchorOrigin: "bottom-left",
                        anchorXUnits: k,
                        anchorYUnits: n,
                        crossOrigin: "anonymous",
                        offset: q,
                        offsetOrigin: "bottom-left",
                        rotation: u,
                        scale: d,
                        size: t,
                        src: g
                    });
                    e.imageStyle = h
                }
            }, LabelStyle: function (b, c) {
                var d = V({}, mu, b, c);
                m(d) && (c[c.length - 1].textStyle = new yt({
                    fill: new Dl({
                        color: Ab(d,
                            "color", Dt)
                    }), scale: d.scale
                }))
            }, LineStyle: function (b, c) {
                var d = V({}, nu, b, c);
                m(d) && (c[c.length - 1].strokeStyle = new zl({color: Ab(d, "color", Dt), width: Ab(d, "width", 1)}))
            }, PolyStyle: function (b, c) {
                var d = V({}, uu, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    e.fillStyle = new Dl({color: Ab(d, "color", Dt)});
                    var f = d.fill;
                    m(f) && (e.fill = f);
                    d = d.outline;
                    m(d) && (e.outline = d)
                }
            }
        }), su = T(Ct, {
            Pair: function (b, c) {
                var d = V({}, ru, b, c);
                if (m(d)) {
                    var e = d.key;
                    m(e) && "normal" == e && (e = d.styleUrl, m(e) && (c[c.length - 1] = e), d = d.Style, m(d) && (c[c.length -
                    1] = d))
                }
            }
        });
    l = zt.prototype;
    l.dh = function (b, c) {
        Jo(b);
        var d = T(Ct, {
            Folder: $o(this.dh, this),
            Placemark: ap(this.rf, this),
            Style: ra(this.Kn, this),
            StyleMap: ra(this.Jn, this)
        }), d = V([], d, b, c, this);
        if (m(d))return d
    };
    l.rf = function (b, c) {
        var d = V({geometry: null}, tu, b, c);
        if (m(d)) {
            var e = new X, f = b.getAttribute("id");
            null === f || e.Pb(f);
            f = c[0];
            null != d.geometry && Dr(d.geometry, !1, f);
            e.t(d);
            this.c && e.af(this.d);
            return e
        }
    };
    l.Kn = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = cu(b, c);
            m(e) && (d = null != b.baseURI ? st(b.baseURI, "#" + d).toString() : "#" + d, this.a[d] = e)
        }
    };
    l.Jn = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = V(void 0, su, b, c);
            m(e) && (d = null != b.baseURI ? st(b.baseURI, "#" + d).toString() : "#" + d, this.a[d] = e)
        }
    };
    l.eh = function (b, c) {
        if (!Ya(Ct, b.namespaceURI))return null;
        var d = this.rf(b, [Br(this, b, c)]);
        return m(d) ? d : null
    };
    l.Nb = function (b, c) {
        if (!Ya(Ct, b.namespaceURI))return [];
        var d;
        d = Jo(b);
        if ("Document" == d || "Folder" == d)return d = this.dh(b, [Br(this, b, c)]), m(d) ? d : [];
        if ("Placemark" == d)return d = this.rf(b, [Br(this, b, c)]), m(d) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = b.firstElementChild; null !== e; e = e.nextElementSibling) {
                var f = this.Nb(e, c);
                m(f) && db(d, f)
            }
            return d
        }
        return []
    };
    l.En = function (b) {
        if (Mo(b))return vu(this, b);
        if (Po(b))return wu(this, b);
        if (ia(b))return b = Zo(b), vu(this, b)
    };
    function vu(b, c) {
        var d;
        for (d = c.firstChild; null !== d; d = d.nextSibling)if (1 == d.nodeType) {
            var e = wu(b, d);
            if (m(e))return e
        }
    }

    function wu(b, c) {
        var d;
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)if (Ya(Ct, d.namespaceURI) && "name" == d.localName)return Y(d);
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) {
            var e = Jo(d);
            if (Ya(Ct, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = wu(b, d), m(e)))return e
        }
    }

    l.Fn = function (b) {
        var c = [];
        Mo(b) ? db(c, xu(this, b)) : Po(b) ? db(c, yu(this, b)) : ia(b) && (b = Zo(b), db(c, xu(this, b)));
        return c
    };
    function xu(b, c) {
        var d, e = [];
        for (d = c.firstChild; null !== d; d = d.nextSibling)1 == d.nodeType && db(e, yu(b, d));
        return e
    }

    function yu(b, c) {
        var d, e = [];
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)if (Ya(Ct, d.namespaceURI) && "NetworkLink" == d.localName) {
            var f = V({}, qu, d, []);
            e.push(f)
        }
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling)f = Jo(d), !Ya(Ct, d.namespaceURI) || "Document" != f && "Folder" != f && "kml" != f || db(e, yu(b, d));
        return e
    }

    function zu(b, c) {
        var d = sf(c), d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]], e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f : f
        }
        ds(b, d.join(""))
    }

    function Au(b, c, d) {
        kp({O: b}, Bu, Cu, [c], d)
    }

    function Du(b, c, d) {
        var e = {O: b};
        null != c.Z && b.setAttribute("id", c.Z);
        b = c.D();
        var f = c.c;
        m(f) && (f = f.call(c, 0), null !== f && 0 < f.length && (b.Style = f[0], f = f[0].b, null === f || (b.name = f.c)));
        f = Eu[d[d.length - 1].O.namespaceURI];
        b = ip(b, f);
        kp(e, Fu, hp, b, d, f);
        b = d[0];
        c = c.Q();
        null != c && (c = Dr(c, !0, b));
        kp(e, Fu, Gu, [c], d)
    }

    function Hu(b, c, d) {
        var e = c.j;
        b = {O: b};
        b.layout = c.b;
        b.stride = c.s;
        kp(b, Iu, Ju, [e], d)
    }

    function Ku(b, c, d) {
        c = c.Dd();
        var e = c.shift();
        b = {O: b};
        kp(b, Lu, Mu, c, d);
        kp(b, Lu, Nu, [e], d)
    }

    function Ou(b, c) {
        es(b, c * c)
    }

    var Pu = dp(Ct, ["Document", "Placemark"]), Su = dp(Ct, {
            Document: U(function (b, c, d) {
                kp({O: b}, Qu, Ru, c, d)
            }), Placemark: U(Du)
        }), Qu = dp(Ct, {Placemark: U(Du)}), Tu = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry"
        }, Uu = dp(Ct, ["href"], dp(Bt, ["x", "y", "w", "h"])), Vu = dp(Ct, {href: U(ds)}, dp(Bt, {
            x: U(es),
            y: U(es),
            w: U(es),
            h: U(es)
        })), Wu = dp(Ct, ["scale", "heading", "Icon", "hotSpot"]), Yu = dp(Ct, {
            Icon: U(function (b, c,
                              d) {
                b = {O: b};
                var e = Uu[d[d.length - 1].O.namespaceURI], f = ip(c, e);
                kp(b, Vu, hp, f, d, e);
                e = Uu[Bt[0]];
                f = ip(c, e);
                kp(b, Vu, Xu, f, d, e)
            }), heading: U(es), hotSpot: U(function (b, c) {
                b.setAttribute("x", c.x);
                b.setAttribute("y", c.y);
                b.setAttribute("xunits", c.Bf);
                b.setAttribute("yunits", c.Cf)
            }), scale: U(Ou)
        }), Zu = dp(Ct, ["color", "scale"]), $u = dp(Ct, {
            color: U(zu),
            scale: U(Ou)
        }), av = dp(Ct, ["color", "width"]), bv = dp(Ct, {
            color: U(zu),
            width: U(es)
        }), Bu = dp(Ct, {LinearRing: U(Hu)}), cv = dp(Ct, {
            LineString: U(Hu),
            Point: U(Hu),
            Polygon: U(Ku)
        }), Eu = dp(Ct,
            "name open visibility address phoneNumber description styleUrl Style".split(" ")), Fu = dp(Ct, {
            MultiGeometry: U(function (b, c, d) {
                b = {O: b};
                var e = c.L(), f, g;
                "MultiPoint" == e ? (f = c.Zd(), g = dv) : "MultiLineString" == e ? (f = c.$c(), g = ev) : "MultiPolygon" == e && (f = c.Fd(), g = fv);
                kp(b, cv, g, f, d)
            }),
            LineString: U(Hu),
            LinearRing: U(Hu),
            Point: U(Hu),
            Polygon: U(Ku),
            Style: U(function (b, c, d) {
                b = {O: b};
                var e = {}, f = c.d, g = c.c, h = c.g;
                c = c.b;
                null === h || (e.IconStyle = h);
                null === c || (e.LabelStyle = c);
                null === g || (e.LineStyle = g);
                null === f || (e.PolyStyle = f);
                c =
                    gv[d[d.length - 1].O.namespaceURI];
                e = ip(e, c);
                kp(b, hv, hp, e, d, c)
            }),
            address: U(ds),
            description: U(ds),
            name: U(ds),
            open: U(cs),
            phoneNumber: U(ds),
            styleUrl: U(ds),
            visibility: U(cs)
        }), Iu = dp(Ct, {
            coordinates: U(function (b, c, d) {
                d = d[d.length - 1];
                var e = d.layout;
                d = d.stride;
                var f;
                "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
                var g, h = c.length, k = "";
                if (0 < h) {
                    k += c[0];
                    for (e = 1; e < f; ++e)k += "," + c[e];
                    for (g = d; g < h; g += d)for (k += " " + c[g], e = 1; e < f; ++e)k += "," + c[g + e]
                }
                ds(b, k)
            })
        }), Lu = dp(Ct, {outerBoundaryIs: U(Au), innerBoundaryIs: U(Au)}),
        iv = dp(Ct, {color: U(zu)}), gv = dp(Ct, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]), hv = dp(Ct, {
            IconStyle: U(function (b, c, d) {
                b = {O: b};
                var e = {}, f = c.Ya(), g = c.Cd(), h = {href: c.a.g};
                if (null !== f) {
                    h.w = f[0];
                    h.h = f[1];
                    var k = c.rb(), n = c.wb();
                    null !== n && null !== g && 0 !== n[0] && n[1] !== f[1] && (h.x = n[0], h.y = g[1] - (n[1] + f[1]));
                    null === k || 0 === k[0] || k[1] === f[1] || (e.hotSpot = {
                        x: k[0],
                        Bf: "pixels",
                        y: f[1] - k[1],
                        Cf: "pixels"
                    })
                }
                e.Icon = h;
                f = c.n;
                1 !== f && (e.scale = f);
                c = c.q;
                0 !== c && (e.heading = c);
                c = Wu[d[d.length - 1].O.namespaceURI];
                e = ip(e, c);
                kp(b,
                    Yu, hp, e, d, c)
            }), LabelStyle: U(function (b, c, d) {
                b = {O: b};
                var e = {}, f = c.a;
                null === f || (e.color = f.a);
                c = c.b;
                m(c) && 1 !== c && (e.scale = c);
                c = Zu[d[d.length - 1].O.namespaceURI];
                e = ip(e, c);
                kp(b, $u, hp, e, d, c)
            }), LineStyle: U(function (b, c, d) {
                b = {O: b};
                var e = av[d[d.length - 1].O.namespaceURI];
                c = ip({color: c.a, width: c.b}, e);
                kp(b, bv, hp, c, d, e)
            }), PolyStyle: U(function (b, c, d) {
                kp({O: b}, iv, jv, [c.a], d)
            })
        });

    function Xu(b, c, d) {
        return Eo(Bt[0], "gx:" + d)
    }

    function Ru(b, c) {
        return Eo(c[c.length - 1].O.namespaceURI, "Placemark")
    }

    function Gu(b, c) {
        if (null != b)return Eo(c[c.length - 1].O.namespaceURI, Tu[b.L()])
    }

    var jv = fp("color"), Ju = fp("coordinates"), Mu = fp("innerBoundaryIs"), dv = fp("Point"), ev = fp("LineString"), Cu = fp("LinearRing"), fv = fp("Polygon"), Nu = fp("outerBoundaryIs");
    zt.prototype.b = function (b, c) {
        c = Cr(this, c);
        var d = Eo(Ct[4], "kml");
        Yo(d, "http://www.w3.org/2000/xmlns/", "xmlns:gx", Bt[0]);
        Yo(d, "http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        Yo(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {O: d}, f = {};
        1 < b.length ? f.Document = b : 1 == b.length && (f.Placemark = b[0]);
        var g = Pu[d.namespaceURI], f = ip(f, g);
        kp(e, Su, hp, f, [c], g);
        return d
    };
    function kv() {
        this.defaultDataProjection = null;
        this.defaultDataProjection = re("EPSG:4326")
    }

    w(kv, Sr);
    function lv(b, c) {
        c[c.length - 1].md[b.getAttribute("k")] = b.getAttribute("v")
    }

    var mv = [null], nv = T(mv, {
        nd: function (b, c) {
            c[c.length - 1].zc.push(b.getAttribute("ref"))
        }, tag: lv
    }), pv = T(mv, {
        node: function (b, c) {
            var d = c[0], e = c[c.length - 1], f = b.getAttribute("id"), g = [parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat"))];
            e.pg[f] = g;
            var h = V({md: {}}, ov, b, c);
            xb(h.md) || (g = new E(g), Dr(g, !1, d), d = new X(g), d.Pb(f), d.t(h.md), e.features.push(d))
        }, way: function (b, c) {
            for (var d = c[0], e = b.getAttribute("id"), f = V({
                zc: [],
                md: {}
            }, nv, b, c), g = c[c.length - 1], h = [], k = 0, n = f.zc.length; k < n; k++)db(h, g.pg[f.zc[k]]);
            f.zc[0] == f.zc[f.zc.length - 1] ? (k = new F(null), fl(k, "XY", h, [h.length])) : (k = new N(null), bn(k, "XY", h));
            Dr(k, !1, d);
            d = new X(k);
            d.Pb(e);
            d.t(f.md);
            g.features.push(d)
        }
    }), ov = T(mv, {tag: lv});
    kv.prototype.Nb = function (b, c) {
        var d = Br(this, b, c);
        return "osm" == b.localName && (d = V({pg: {}, features: []}, pv, b, [d]), m(d.features)) ? d.features : []
    };
    function qv(b) {
        return b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };
    function rv() {
    }

    rv.prototype.c = function (b) {
        return Mo(b) ? this.b(b) : Po(b) ? this.a(b) : ia(b) ? (b = Zo(b), this.b(b)) : null
    };
    function sv() {
    }

    w(sv, rv);
    sv.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    sv.prototype.a = function (b) {
        b = V({}, tv, b, []);
        return m(b) ? b : null
    };
    var uv = [null, "http://www.opengis.net/ows/1.1"], tv = T(uv, {
        ServiceIdentification: S(function (b, c) {
            return V({}, vv, b, c)
        }), ServiceProvider: S(function (b, c) {
            return V({}, wv, b, c)
        }), OperationsMetadata: S(function (b, c) {
            return V({}, xv, b, c)
        })
    }), yv = T(uv, {
        DeliveryPoint: S(Y),
        City: S(Y),
        AdministrativeArea: S(Y),
        PostalCode: S(Y),
        Country: S(Y),
        ElectronicMailAddress: S(Y)
    }), zv = T(uv, {
        Value: cp(function (b) {
            return Y(b)
        })
    }), Av = T(uv, {
        AllowedValues: S(function (b, c) {
            return V({}, zv, b, c)
        })
    }), Cv = T(uv, {
        Phone: S(function (b, c) {
            return V({},
                Bv, b, c)
        }), Address: S(function (b, c) {
            return V({}, yv, b, c)
        })
    }), Ev = T(uv, {
        HTTP: S(function (b, c) {
            return V({}, Dv, b, c)
        })
    }), Dv = T(uv, {
        Get: cp(function (b, c) {
            var d = qv(b);
            return m(d) ? V({href: d}, Fv, b, c) : void 0
        }), Post: void 0
    }), Gv = T(uv, {
        DCP: S(function (b, c) {
            return V({}, Ev, b, c)
        })
    }), xv = T(uv, {
        Operation: function (b, c) {
            var d = b.getAttribute("name"), e = V({}, Gv, b, c);
            m(e) && (c[c.length - 1][d] = e)
        }
    }), Bv = T(uv, {Voice: S(Y), Facsimile: S(Y)}), Fv = T(uv, {
        Constraint: cp(function (b, c) {
            var d = b.getAttribute("name");
            return m(d) ? V({name: d}, Av, b, c) :
                void 0
        })
    }), Hv = T(uv, {
        IndividualName: S(Y), PositionName: S(Y), ContactInfo: S(function (b, c) {
            return V({}, Cv, b, c)
        })
    }), vv = T(uv, {Title: S(Y), ServiceTypeVersion: S(Y), ServiceType: S(Y)}), wv = T(uv, {
        ProviderName: S(Y),
        ProviderSite: S(qv),
        ServiceContact: S(function (b, c) {
            return V({}, Hv, b, c)
        })
    });

    function Iv(b, c, d, e) {
        var f;
        m(e) ? f = m(void 0) ? void 0 : 0 : (e = [], f = 0);
        var g, h;
        for (g = 0; g < c;)for (h = b[g++], e[f++] = b[g++], e[f++] = h, h = 2; h < d; ++h)e[f++] = b[g++];
        e.length = f
    };
    function Jv(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re("EPSG:4326");
        this.a = m(b.factor) ? b.factor : 1E5;
        this.b = m(b.geometryLayout) ? b.geometryLayout : "XY"
    }

    w(Jv, $s);
    function Kv(b, c, d) {
        d = m(d) ? d : 1E5;
        var e, f = Array(c);
        for (e = 0; e < c; ++e)f[e] = 0;
        var g, h;
        g = 0;
        for (h = b.length; g < h;)for (e = 0; e < c; ++e, ++g) {
            var k = b[g], n = k - f[e];
            f[e] = k;
            b[g] = n
        }
        return Lv(b, d)
    }

    function Mv(b, c, d) {
        var e = m(d) ? d : 1E5, f = Array(c);
        for (d = 0; d < c; ++d)f[d] = 0;
        b = Nv(b, e);
        var g, e = 0;
        for (g = b.length; e < g;)for (d = 0; d < c; ++d, ++e)f[d] += b[e], b[e] = f[d];
        return b
    }

    function Lv(b, c) {
        var d = m(c) ? c : 1E5, e, f;
        e = 0;
        for (f = b.length; e < f; ++e)b[e] = Math.round(b[e] * d);
        d = 0;
        for (e = b.length; d < e; ++d)f = b[d], b[d] = 0 > f ? ~(f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = b.length; e < f; ++e) {
            for (var g = b[e], h = void 0, k = ""; 32 <= g;)h = (32 | g & 31) + 63, k += String.fromCharCode(h), g >>= 5;
            h = g + 63;
            k += String.fromCharCode(h);
            d += k
        }
        return d
    }

    function Nv(b, c) {
        var d = m(c) ? c : 1E5, e = [], f = 0, g = 0, h, k;
        h = 0;
        for (k = b.length; h < k; ++h) {
            var n = b.charCodeAt(h) - 63, f = f | (n & 31) << g;
            32 > n ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f)h = e[f], e[f] = h & 1 ? ~(h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f)e[f] /= d;
        return e
    }

    l = Jv.prototype;
    l.gd = function (b, c) {
        var d = this.jd(b, c);
        return new X(d)
    };
    l.pf = function (b, c) {
        return [this.gd(b, c)]
    };
    l.jd = function (b, c) {
        var d = zk(this.b), e = Mv(b, d, this.a);
        Iv(e, e.length, d, e);
        d = Ok(e, 0, e.length, d);
        return Dr(new N(d, this.b), !1, Cr(this, c))
    };
    l.te = function (b, c) {
        var d = b.Q();
        return null != d ? this.qd(d, c) : ""
    };
    l.Kh = function (b, c) {
        return this.te(b[0], c)
    };
    l.qd = function (b, c) {
        b = Dr(b, !0, Cr(this, c));
        var d = b.j, e = b.s;
        Iv(d, d.length, e, d);
        return Kv(d, e, this.a)
    };
    function Ov(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = re(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326")
    }

    w(Ov, Er);
    function Pv(b, c) {
        var d = [], e, f, g, h;
        g = 0;
        for (h = b.length; g < h; ++g)e = b[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e)d[e] = d[e].slice();
        return d
    }

    function Qv(b, c, d, e, f) {
        b = b.geometries;
        var g = [], h, k;
        h = 0;
        for (k = b.length; h < k; ++h)g[h] = Rv(b[h], c, d, e, f);
        return g
    }

    function Rv(b, c, d, e, f) {
        var g = b.type, h = Sv[g];
        c = "Point" === g || "MultiPoint" === g ? h(b, d, e) : h(b, c);
        d = new X;
        d.La(Dr(c, !1, f));
        m(b.id) && d.Pb(b.id);
        m(b.properties) && d.t(b.properties);
        return d
    }

    Ov.prototype.of = function (b, c) {
        if ("Topology" == b.type) {
            var d, e = null, f = null;
            m(b.transform) && (d = b.transform, e = d.scale, f = d.translate);
            var g = b.arcs;
            if (m(d)) {
                d = e;
                var h = f, k, n;
                k = 0;
                for (n = g.length; k < n; ++k)for (var p = g[k], q = d, r = h, t = 0, u = 0, A = void 0, z = void 0, C = void 0, z = 0, C = p.length; z < C; ++z)A = p[z], t += A[0], u += A[1], A[0] = t, A[1] = u, Tv(A, q, r)
            }
            d = [];
            h = sb(b.objects);
            k = 0;
            for (n = h.length; k < n; ++k)"GeometryCollection" === h[k].type ? (p = h[k], d.push.apply(d, Qv(p, g, e, f, c))) : (p = h[k], d.push(Rv(p, g, e, f, c)));
            return d
        }
        return []
    };
    function Tv(b, c, d) {
        b[0] = b[0] * c[0] + d[0];
        b[1] = b[1] * c[1] + d[1]
    }

    Ov.prototype.ya = function () {
        return this.defaultDataProjection
    };
    var Sv = {
        Point: function (b, c, d) {
            b = b.coordinates;
            null === c || null === d || Tv(b, c, d);
            return new E(b)
        }, LineString: function (b, c) {
            var d = Pv(b.arcs, c);
            return new N(d)
        }, Polygon: function (b, c) {
            var d = [], e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e)d[e] = Pv(b.arcs[e], c);
            return new F(d)
        }, MultiPoint: function (b, c, d) {
            b = b.coordinates;
            var e, f;
            if (null !== c && null !== d)for (e = 0, f = b.length; e < f; ++e)Tv(b[e], c, d);
            return new en(b)
        }, MultiLineString: function (b, c) {
            var d = [], e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e)d[e] = Pv(b.arcs[e], c);
            return new P(d)
        },
        MultiPolygon: function (b, c) {
            var d = [], e, f, g, h, k, n;
            k = 0;
            for (n = b.arcs.length; k < n; ++k) {
                e = b.arcs[k];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g)f[g] = Pv(e[g], c);
                d[k] = f
            }
            return new R(d)
        }
    };

    function Uv(b) {
        b = m(b) ? b : {};
        this.e = b.featureType;
        this.c = b.featureNS;
        this.a = m(b.gmlFormat) ? b.gmlFormat : new gs;
        this.d = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        this.defaultDataProjection = null
    }

    w(Uv, Sr);
    Uv.prototype.Nb = function (b, c) {
        var d = {featureType: this.e, featureNS: this.c};
        Fb(d, Br(this, b, m(c) ? c : {}));
        d = [d];
        this.a.a["http://www.opengis.net/gml"].featureMember = ap(Vr.prototype.hd);
        d = V([], this.a.a, b, d, this.a);
        m(d) || (d = []);
        return d
    };
    Uv.prototype.f = function (b) {
        if (Mo(b))return Vv(b);
        if (Po(b))return V({}, Wv, b, []);
        if (ia(b))return b = Zo(b), Vv(b)
    };
    Uv.prototype.g = function (b) {
        if (Mo(b))return Xv(this, b);
        if (Po(b))return Yv(this, b);
        if (ia(b))return b = Zo(b), Xv(this, b)
    };
    function Xv(b, c) {
        for (var d = c.firstChild; null !== d; d = d.nextSibling)if (1 == d.nodeType)return Yv(b, d)
    }

    var Zv = {"http://www.opengis.net/gml": {boundedBy: S(Vr.prototype.le, "bounds")}};

    function Yv(b, c) {
        var d = {}, e = bs(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return V(d, Zv, c, [], b.a)
    }

    var $v = {
        "http://www.opengis.net/wfs": {
            totalInserted: S(as),
            totalUpdated: S(as),
            totalDeleted: S(as)
        }
    }, aw = {
        "http://www.opengis.net/ogc": {
            FeatureId: ap(function (b) {
                return b.getAttribute("fid")
            })
        }
    }, bw = {
        "http://www.opengis.net/wfs": {
            Feature: function (b, c) {
                jp(aw, b, c)
            }
        }
    }, Wv = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: S(function (b, c) {
                return V({}, $v, b, c)
            }, "transactionSummary"), InsertResults: S(function (b, c) {
                return V([], bw, b, c)
            }, "insertIds")
        }
    };

    function Vv(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return V({}, Wv, b, [])
    }

    var cw = {"http://www.opengis.net/wfs": {PropertyName: U(ds)}};

    function dw(b, c) {
        var d = Eo("http://www.opengis.net/ogc", "Filter"), e = Eo("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        b.appendChild(d)
    }

    var ew = {
        "http://www.opengis.net/wfs": {
            Insert: U(function (b, c, d) {
                var e = d[d.length - 1], e = Eo(e.featureNS, e.featureType);
                b.appendChild(e);
                gs.prototype.Jh(e, c, d)
            }), Update: U(function (b, c, d) {
                var e = d[d.length - 1], f = e.featureType, g = e.featurePrefix, g = m(g) ? g : "feature", h = e.featureNS;
                b.setAttribute("typeName", g + ":" + f);
                Yo(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                f = c.Z;
                if (m(f)) {
                    for (var g = c.C(), h = [], k = 0, n = g.length; k < n; k++) {
                        var p = c.get(g[k]);
                        m(p) && h.push({name: g[k], value: p})
                    }
                    kp({O: b, srsName: e.srsName}, ew, fp("Property"),
                        h, d);
                    dw(b, f)
                }
            }), Delete: U(function (b, c, d) {
                var e = d[d.length - 1];
                d = e.featureType;
                var f = e.featurePrefix, f = m(f) ? f : "feature", e = e.featureNS;
                b.setAttribute("typeName", f + ":" + d);
                Yo(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                c = c.Z;
                m(c) && dw(b, c)
            }), Property: U(function (b, c, d) {
                var e = Eo("http://www.opengis.net/wfs", "Name");
                b.appendChild(e);
                ds(e, c.name);
                null != c.value && (e = Eo("http://www.opengis.net/wfs", "Value"), b.appendChild(e), c.value instanceof wk ? gs.prototype.ve(e, c.value, d) : ds(e, c.value))
            }), Native: U(function (b,
                                    c) {
                m(c.wo) && b.setAttribute("vendorId", c.wo);
                m(c.Un) && b.setAttribute("safeToIgnore", c.Un);
                m(c.value) && ds(b, c.value)
            })
        }
    }, fw = {
        "http://www.opengis.net/wfs": {
            Query: U(function (b, c, d) {
                var e = d[d.length - 1], f = e.featurePrefix, g = e.featureNS, h = e.propertyNames, k = e.srsName;
                b.setAttribute("typeName", (m(f) ? f + ":" : "") + c);
                m(k) && b.setAttribute("srsName", k);
                m(g) && Yo(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                c = Db(e);
                c.O = b;
                kp(c, cw, fp("PropertyName"), h, d);
                e = e.bbox;
                m(e) && (h = Eo("http://www.opengis.net/ogc", "Filter"),
                    c = d[d.length - 1].geometryName, f = Eo("http://www.opengis.net/ogc", "BBOX"), h.appendChild(f), g = Eo("http://www.opengis.net/ogc", "PropertyName"), ds(g, c), f.appendChild(g), gs.prototype.ve(f, e, d), b.appendChild(h))
            })
        }
    };
    Uv.prototype.i = function (b) {
        var c = Eo("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        m(b) && (m(b.handle) && c.setAttribute("handle", b.handle), m(b.outputFormat) && c.setAttribute("outputFormat", b.outputFormat), m(b.maxFeatures) && c.setAttribute("maxFeatures", b.maxFeatures), m(b.resultType) && c.setAttribute("resultType", b.resultType), m(b.po) && c.setAttribute("startIndex", b.po), m(b.count) && c.setAttribute("count", b.count));
        Yo(c, "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:schemaLocation", this.d);
        var d = b.featureTypes;
        b = [{
            O: c,
            srsName: b.srsName,
            featureNS: m(b.featureNS) ? b.featureNS : this.c,
            featurePrefix: b.featurePrefix,
            geometryName: b.geometryName,
            bbox: b.bbox,
            ah: m(b.ah) ? b.ah : []
        }];
        var e = Db(b[b.length - 1]);
        e.O = c;
        kp(e, fw, fp("Query"), d, b);
        return c
    };
    Uv.prototype.o = function (b, c, d, e) {
        var f = [], g = Eo("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, k;
        m(e) && (h = m(e.gmlOptions) ? e.gmlOptions : {}, m(e.handle) && g.setAttribute("handle", e.handle));
        Yo(g, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.d);
        null != b && (k = {
            O: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Fb(k, h), kp(k, ew, fp("Insert"), b, f));
        null != c && (k = {
            O: g, featureNS: e.featureNS,
            featureType: e.featureType, featurePrefix: e.featurePrefix
        }, Fb(k, h), kp(k, ew, fp("Update"), c, f));
        null != d && kp({
            O: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, ew, fp("Delete"), d, f);
        m(e.nativeElements) && kp({
            O: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, ew, fp("Native"), e.nativeElements, f);
        return g
    };
    Uv.prototype.sf = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.oe(b);
        return null
    };
    Uv.prototype.oe = function (b) {
        if (null != b.firstElementChild && null != b.firstElementChild.firstElementChild)for (b = b.firstElementChild.firstElementChild, b = b.firstElementChild; null !== b; b = b.nextElementSibling)if (0 !== b.childNodes.length && (1 !== b.childNodes.length || 3 !== b.firstChild.nodeType)) {
            var c = [{}];
            this.a.le(b, c);
            return re(c.pop().srsName)
        }
        return null
    };
    function gw(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = m(b.splitCollection) ? b.splitCollection : !1
    }

    w(gw, $s);
    function hw(b) {
        b = b.M();
        return 0 == b.length ? "" : b[0] + " " + b[1]
    }

    function iw(b) {
        b = b.M();
        for (var c = [], d = 0, e = b.length; d < e; ++d)c.push(b[d][0] + " " + b[d][1]);
        return c.join(",")
    }

    function jw(b) {
        var c = [];
        b = b.Dd();
        for (var d = 0, e = b.length; d < e; ++d)c.push("(" + iw(b[d]) + ")");
        return c.join(",")
    }

    function kw(b) {
        var c = b.L();
        b = (0, lw[c])(b);
        c = c.toUpperCase();
        return 0 === b.length ? c + " EMPTY" : c + "(" + b + ")"
    }

    var lw = {
        Point: hw, LineString: iw, Polygon: jw, MultiPoint: function (b) {
            var c = [];
            b = b.Zd();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + hw(b[d]) + ")");
            return c.join(",")
        }, MultiLineString: function (b) {
            var c = [];
            b = b.$c();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + iw(b[d]) + ")");
            return c.join(",")
        }, MultiPolygon: function (b) {
            var c = [];
            b = b.Fd();
            for (var d = 0, e = b.length; d < e; ++d)c.push("(" + jw(b[d]) + ")");
            return c.join(",")
        }, GeometryCollection: function (b) {
            var c = [];
            b = b.Wf();
            for (var d = 0, e = b.length; d < e; ++d)c.push(kw(b[d]));
            return c.join(",")
        }
    };
    l = gw.prototype;
    l.gd = function (b, c) {
        var d = this.jd(b, c);
        if (m(d)) {
            var e = new X;
            e.La(d);
            return e
        }
        return null
    };
    l.pf = function (b, c) {
        var d = [], e = this.jd(b, c);
        this.a && "GeometryCollection" == e.L() ? d = e.d : d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g)e = new X, e.La(d[g]), f.push(e);
        return f
    };
    l.jd = function (b, c) {
        var d;
        d = new mw(new nw(b));
        d.a = ow(d.b);
        d = pw(d);
        return m(d) ? Dr(d, !1, c) : null
    };
    l.te = function (b, c) {
        var d = b.Q();
        return m(d) ? this.qd(d, c) : ""
    };
    l.Kh = function (b, c) {
        if (1 == b.length)return this.te(b[0], c);
        for (var d = [], e = 0, f = b.length; e < f; ++e)d.push(b[e].Q());
        d = new Vm(d);
        return this.qd(d, c)
    };
    l.qd = function (b, c) {
        return kw(Dr(b, !0, c))
    };
    function nw(b) {
        this.b = b;
        this.a = -1
    }

    function qw(b, c) {
        var d = m(c) ? c : !1;
        return "0" <= b && "9" >= b || "." == b && !d
    }

    function ow(b) {
        var c = b.b.charAt(++b.a), d = {position: b.a, value: c};
        if ("(" == c)d.type = 2; else if ("," == c)d.type = 5; else if (")" == c)d.type = 3; else if (qw(c) || "-" == c) {
            d.type = 4;
            var e, c = b.a, f = !1, g = !1;
            do {
                if ("." == e)f = !0; else if ("e" == e || "E" == e)g = !0;
                e = b.b.charAt(++b.a)
            } while (qw(e, f) || !g && ("e" == e || "E" == e) || g && ("-" == e || "+" == e));
            b = parseFloat(b.b.substring(c, b.a--));
            d.value = b
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = b.a;
            do e = b.b.charAt(++b.a); while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
            b = b.b.substring(c, b.a--).toUpperCase();
            d.value = b
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c)return ow(b);
            if ("" === c)d.type = 6; else throw Error("Unexpected character: " + c);
        }
        return d
    }

    function mw(b) {
        this.b = b
    }

    l = mw.prototype;
    l.match = function (b) {
        if (b = this.a.type == b)this.a = ow(this.b);
        return b
    };
    function pw(b) {
        var c = b.a;
        if (b.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a:{
                    if (b.match(2)) {
                        c = [];
                        do c.push(pw(b)); while (b.match(5));
                        if (b.match(3)) {
                            b = c;
                            break a
                        }
                    } else if (rw(b)) {
                        b = [];
                        break a
                    }
                    throw Error(sw(b));
                }
                return new Vm(b)
            }
            var e = tw[d], c = uw[d];
            if (!m(e) || !m(c))throw Error("Invalid geometry type: " + d);
            b = e.call(b);
            return new c(b)
        }
        throw Error(sw(b));
    }

    l.lf = function () {
        if (this.match(2)) {
            var b = vw(this);
            if (this.match(3))return b
        } else if (rw(this))return null;
        throw Error(sw(this));
    };
    l.kf = function () {
        if (this.match(2)) {
            var b = ww(this);
            if (this.match(3))return b
        } else if (rw(this))return [];
        throw Error(sw(this));
    };
    l.mf = function () {
        if (this.match(2)) {
            var b = xw(this);
            if (this.match(3))return b
        } else if (rw(this))return [];
        throw Error(sw(this));
    };
    l.ln = function () {
        if (this.match(2)) {
            var b;
            if (2 == this.a.type)for (b = [this.lf()]; this.match(5);)b.push(this.lf()); else b = ww(this);
            if (this.match(3))return b
        } else if (rw(this))return [];
        throw Error(sw(this));
    };
    l.kn = function () {
        if (this.match(2)) {
            var b = xw(this);
            if (this.match(3))return b
        } else if (rw(this))return [];
        throw Error(sw(this));
    };
    l.mn = function () {
        if (this.match(2)) {
            for (var b = [this.mf()]; this.match(5);)b.push(this.mf());
            if (this.match(3))return b
        } else if (rw(this))return [];
        throw Error(sw(this));
    };
    function vw(b) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = b.a;
            if (b.match(4))c.push(e.value); else break
        }
        if (2 == c.length)return c;
        throw Error(sw(b));
    }

    function ww(b) {
        for (var c = [vw(b)]; b.match(5);)c.push(vw(b));
        return c
    }

    function xw(b) {
        for (var c = [b.kf()]; b.match(5);)c.push(b.kf());
        return c
    }

    function rw(b) {
        var c = 1 == b.a.type && "EMPTY" == b.a.value;
        c && (b.a = ow(b.b));
        return c
    }

    function sw(b) {
        return "Unexpected `" + b.a.value + "` at position " + b.a.position + " in `" + b.b.b + "`"
    }

    var uw = {
        POINT: E,
        LINESTRING: N,
        POLYGON: F,
        MULTIPOINT: en,
        MULTILINESTRING: P,
        MULTIPOLYGON: R
    }, tw = {
        POINT: mw.prototype.lf,
        LINESTRING: mw.prototype.kf,
        POLYGON: mw.prototype.mf,
        MULTIPOINT: mw.prototype.ln,
        MULTILINESTRING: mw.prototype.kn,
        MULTIPOLYGON: mw.prototype.mn
    };

    function yw() {
        this.version = void 0
    }

    w(yw, rv);
    yw.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    yw.prototype.a = function (b) {
        this.version = Ca(b.getAttribute("version"));
        b = V({version: this.version}, zw, b, []);
        return m(b) ? b : null
    };
    function Aw(b, c) {
        return V({}, Bw, b, c)
    }

    function Cw(b, c) {
        return V({}, Dw, b, c)
    }

    function Ew(b, c) {
        var d = Aw(b, c);
        if (m(d)) {
            var e = [bs(b.getAttribute("width")), bs(b.getAttribute("height"))];
            d.size = e;
            return d
        }
    }

    function Fw(b, c) {
        return V([], Gw, b, c)
    }

    var Hw = [null, "http://www.opengis.net/wms"], zw = T(Hw, {
        Service: S(function (b, c) {
            return V({}, Iw, b, c)
        }), Capability: S(function (b, c) {
            return V({}, Jw, b, c)
        })
    }), Jw = T(Hw, {
        Request: S(function (b, c) {
            return V({}, Kw, b, c)
        }), Exception: S(function (b, c) {
            return V([], Lw, b, c)
        }), Layer: S(function (b, c) {
            return V({}, Mw, b, c)
        })
    }), Iw = T(Hw, {
        Name: S(Y),
        Title: S(Y),
        Abstract: S(Y),
        KeywordList: S(Fw),
        OnlineResource: S(qv),
        ContactInformation: S(function (b, c) {
            return V({}, Nw, b, c)
        }),
        Fees: S(Y),
        AccessConstraints: S(Y),
        LayerLimit: S(as),
        MaxWidth: S(as),
        MaxHeight: S(as)
    }), Nw = T(Hw, {
        ContactPersonPrimary: S(function (b, c) {
            return V({}, Ow, b, c)
        }), ContactPosition: S(Y), ContactAddress: S(function (b, c) {
            return V({}, Pw, b, c)
        }), ContactVoiceTelephone: S(Y), ContactFacsimileTelephone: S(Y), ContactElectronicMailAddress: S(Y)
    }), Ow = T(Hw, {ContactPerson: S(Y), ContactOrganization: S(Y)}), Pw = T(Hw, {
        AddressType: S(Y),
        Address: S(Y),
        City: S(Y),
        StateOrProvince: S(Y),
        PostCode: S(Y),
        Country: S(Y)
    }), Lw = T(Hw, {Format: ap(Y)}), Mw = T(Hw, {
        Name: S(Y), Title: S(Y), Abstract: S(Y), KeywordList: S(Fw), CRS: cp(Y),
        EX_GeographicBoundingBox: S(function (b, c) {
            var d = V({}, Qw, b, c);
            if (m(d)) {
                var e = d.westBoundLongitude, f = d.southBoundLatitude, g = d.eastBoundLongitude, d = d.northBoundLatitude;
                return m(e) && m(f) && m(g) && m(d) ? [e, f, g, d] : void 0
            }
        }), BoundingBox: cp(function (b) {
            var c = [$r(b.getAttribute("minx")), $r(b.getAttribute("miny")), $r(b.getAttribute("maxx")), $r(b.getAttribute("maxy"))], d = [$r(b.getAttribute("resx")), $r(b.getAttribute("resy"))];
            return {crs: b.getAttribute("CRS"), extent: c, res: d}
        }), Dimension: cp(function (b) {
            return {
                name: b.getAttribute("name"),
                units: b.getAttribute("units"),
                unitSymbol: b.getAttribute("unitSymbol"),
                "default": b.getAttribute("default"),
                multipleValues: Xr(b.getAttribute("multipleValues")),
                nearestValue: Xr(b.getAttribute("nearestValue")),
                current: Xr(b.getAttribute("current")),
                values: Y(b)
            }
        }), Attribution: S(function (b, c) {
            return V({}, Rw, b, c)
        }), AuthorityURL: cp(function (b, c) {
            var d = Aw(b, c);
            if (m(d))return d.name = b.getAttribute("name"), d
        }), Identifier: cp(Y), MetadataURL: cp(function (b, c) {
            var d = Aw(b, c);
            if (m(d))return d.type = b.getAttribute("type"),
                d
        }), DataURL: cp(Aw), FeatureListURL: cp(Aw), Style: cp(function (b, c) {
            return V({}, Sw, b, c)
        }), MinScaleDenominator: S(Zr), MaxScaleDenominator: S(Zr), Layer: cp(function (b, c) {
            var d = c[c.length - 1], e = V({}, Mw, b, c);
            if (m(e)) {
                var f = Xr(b.getAttribute("queryable"));
                m(f) || (f = d.queryable);
                e.queryable = m(f) ? f : !1;
                f = bs(b.getAttribute("cascaded"));
                m(f) || (f = d.cascaded);
                e.cascaded = f;
                f = Xr(b.getAttribute("opaque"));
                m(f) || (f = d.opaque);
                e.opaque = m(f) ? f : !1;
                f = Xr(b.getAttribute("noSubsets"));
                m(f) || (f = d.noSubsets);
                e.noSubsets = m(f) ? f : !1;
                f = $r(b.getAttribute("fixedWidth"));
                m(f) || (f = d.fixedWidth);
                e.fixedWidth = f;
                f = $r(b.getAttribute("fixedHeight"));
                m(f) || (f = d.fixedHeight);
                e.fixedHeight = f;
                Sa(["Style", "CRS", "AuthorityURL"], function (b) {
                    var c = d[b];
                    if (m(c)) {
                        var f = Cb(e, b), f = f.concat(c);
                        e[b] = f
                    }
                });
                Sa("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "), function (b) {
                    m(e[b]) || (e[b] = d[b])
                });
                return e
            }
        })
    }), Rw = T(Hw, {Title: S(Y), OnlineResource: S(qv), LogoURL: S(Ew)}), Qw = T(Hw, {
        westBoundLongitude: S(Zr),
        eastBoundLongitude: S(Zr), southBoundLatitude: S(Zr), northBoundLatitude: S(Zr)
    }), Kw = T(Hw, {GetCapabilities: S(Cw), GetMap: S(Cw), GetFeatureInfo: S(Cw)}), Dw = T(Hw, {
        Format: cp(Y),
        DCPType: cp(function (b, c) {
            return V({}, Tw, b, c)
        })
    }), Tw = T(Hw, {
        HTTP: S(function (b, c) {
            return V({}, Uw, b, c)
        })
    }), Uw = T(Hw, {Get: S(Aw), Post: S(Aw)}), Sw = T(Hw, {
        Name: S(Y),
        Title: S(Y),
        Abstract: S(Y),
        LegendURL: cp(Ew),
        StyleSheetURL: S(Aw),
        StyleURL: S(Aw)
    }), Bw = T(Hw, {Format: S(Y), OnlineResource: S(qv)}), Gw = T(Hw, {Keyword: ap(Y)});

    function Vw() {
        this.c = "http://mapserver.gis.umn.edu/mapserver";
        this.a = new ps;
        this.defaultDataProjection = null
    }

    w(Vw, Sr);
    function Ww(b, c, d) {
        c.namespaceURI = b.c;
        var e = Jo(c), f = [];
        if (0 === c.childNodes.length)return f;
        "msGMLOutput" == e && Sa(c.childNodes, function (b) {
            if (1 === b.nodeType) {
                var c = d[0], e = b.localName, n = RegExp, p;
                p = "_layer".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
                n = new n(p, "");
                e = e.replace(n, "") + "_feature";
                c.featureType = e;
                c.featureNS = this.c;
                n = {};
                n[e] = ap(this.a.nf, this.a);
                c = T([c.featureNS, null], n);
                b.namespaceURI = this.c;
                b = V([], c, b, d, this.a);
                m(b) && db(f, b)
            }
        }, b);
        "FeatureCollection" == e && (b = V([],
            b.a.a, c, [{}], b.a), m(b) && (f = b));
        return f
    }

    Vw.prototype.Nb = function (b, c) {
        var d = {featureType: this.featureType, featureNS: this.featureNS};
        m(c) && Fb(d, Br(this, b, c));
        return Ww(this, b, [d])
    };
    function Xw() {
        this.d = new sv
    }

    w(Xw, rv);
    Xw.prototype.b = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling)if (1 == b.nodeType)return this.a(b);
        return null
    };
    Xw.prototype.a = function (b) {
        this.version = Ca(b.getAttribute("version"));
        var c = this.d.a(b);
        if (!m(c))return null;
        c.version = this.version;
        c = V(c, Yw, b, []);
        return m(c) ? c : null
    };
    function Zw(b) {
        var c = Y(b).split(" ");
        if (m(c) && 2 == c.length)return b = +c[0], c = +c[1], isNaN(b) || isNaN(c) ? void 0 : [b, c]
    }

    var $w = [null, "http://www.opengis.net/wmts/1.0"], ax = [null, "http://www.opengis.net/ows/1.1"], Yw = T($w, {
            Contents: S(function (b, c) {
                return V({}, bx, b, c)
            })
        }), bx = T($w, {
            Layer: cp(function (b, c) {
                return V({}, cx, b, c)
            }), TileMatrixSet: cp(function (b, c) {
                return V({}, dx, b, c)
            })
        }), cx = T($w, {
            Style: cp(function (b, c) {
                var d = V({}, ex, b, c);
                if (m(d)) {
                    var e = "true" === b.getAttribute("isDefault");
                    d.isDefault = e;
                    return d
                }
            }), Format: cp(Y), TileMatrixSetLink: cp(function (b, c) {
                return V({}, fx, b, c)
            }), ResourceURL: cp(function (b) {
                var c = b.getAttribute("format"),
                    d = b.getAttribute("template");
                b = b.getAttribute("resourceType");
                var e = {};
                m(c) && (e.format = c);
                m(d) && (e.template = d);
                m(b) && (e.resourceType = b);
                return e
            })
        }, T(ax, {
            Title: S(Y), Abstract: S(Y), WGS84BoundingBox: S(function (b, c) {
                var d = V([], gx, b, c);
                return 2 != d.length ? void 0 : Jd(d)
            }), Identifier: S(Y)
        })), ex = T($w, {
            LegendURL: cp(function (b) {
                var c = {};
                c.format = b.getAttribute("format");
                c.href = qv(b);
                return c
            })
        }, T(ax, {Title: S(Y), Identifier: S(Y)})), fx = T($w, {TileMatrixSet: S(Y)}), gx = T(ax, {
            LowerCorner: ap(Zw),
            UpperCorner: ap(Zw)
        }),
        dx = T($w, {
            WellKnownScaleSet: S(Y), TileMatrix: cp(function (b, c) {
                return V({}, hx, b, c)
            })
        }, T(ax, {SupportedCRS: S(Y), Identifier: S(Y)})), hx = T($w, {
            TopLeftCorner: S(Zw),
            ScaleDenominator: S(Zr),
            TileWidth: S(as),
            TileHeight: S(as),
            MatrixWidth: S(as),
            MatrixHeight: S(as)
        }, T(ax, {Identifier: S(Y)}));
    var ix = new me(6378137);

    function jx(b) {
        fd.call(this);
        b = m(b) ? b : {};
        this.b = null;
        this.d = Ke;
        this.c = void 0;
        x(this, hd("projection"), this.Vk, !1, this);
        x(this, hd("tracking"), this.Wk, !1, this);
        m(b.projection) && this.wg(re(b.projection));
        m(b.trackingOptions) && this.Bh(b.trackingOptions);
        this.Vd(m(b.tracking) ? b.tracking : !1)
    }

    w(jx, fd);
    l = jx.prototype;
    l.N = function () {
        this.Vd(!1);
        jx.S.N.call(this)
    };
    l.Vk = function () {
        var b = this.ug();
        null != b && (this.d = ve(re("EPSG:4326"), b), null === this.b || this.set("position", this.d(this.b)))
    };
    l.Wk = function () {
        if (pi) {
            var b = this.vg();
            b && !m(this.c) ? this.c = ba.navigator.geolocation.watchPosition(ra(this.vn, this), ra(this.wn, this), this.dg()) : !b && m(this.c) && (ba.navigator.geolocation.clearWatch(this.c), this.c = void 0)
        }
    };
    l.vn = function (b) {
        b = b.coords;
        this.set("accuracy", b.accuracy);
        this.set("altitude", null === b.altitude ? void 0 : b.altitude);
        this.set("altitudeAccuracy", null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
        this.set("heading", null === b.heading ? void 0 : Yb(b.heading));
        null === this.b ? this.b = [b.longitude, b.latitude] : (this.b[0] = b.longitude, this.b[1] = b.latitude);
        var c = this.d(this.b);
        this.set("position", c);
        this.set("speed", null === b.speed ? void 0 : b.speed);
        b = il(ix, this.b, b.accuracy);
        b.qa(this.d);
        this.set("accuracyGeometry",
            b);
        this.k()
    };
    l.wn = function (b) {
        b.type = "error";
        this.Vd(!1);
        this.dispatchEvent(b)
    };
    l.Ki = function () {
        return this.get("accuracy")
    };
    l.Li = function () {
        return this.get("accuracyGeometry") || null
    };
    l.Ni = function () {
        return this.get("altitude")
    };
    l.Oi = function () {
        return this.get("altitudeAccuracy")
    };
    l.Tk = function () {
        return this.get("heading")
    };
    l.Uk = function () {
        return this.get("position")
    };
    l.ug = function () {
        return this.get("projection")
    };
    l.uj = function () {
        return this.get("speed")
    };
    l.vg = function () {
        return this.get("tracking")
    };
    l.dg = function () {
        return this.get("trackingOptions")
    };
    l.wg = function (b) {
        this.set("projection", b)
    };
    l.Vd = function (b) {
        this.set("tracking", b)
    };
    l.Bh = function (b) {
        this.set("trackingOptions", b)
    };
    function kx(b, c, d) {
        for (var e = [], f = b(0), g = b(1), h = c(f), k = c(g), n = [g, f], p = [k, h], q = [1, 0], r = {}, t = 1E5, u, A, z, C, B; 0 < --t && 0 < q.length;)z = q.pop(), f = n.pop(), h = p.pop(), g = z.toString(), g in r || (e.push(h[0], h[1]), r[g] = !0), C = q.pop(), g = n.pop(), k = p.pop(), B = (z + C) / 2, u = b(B), A = c(u), Ek(A[0], A[1], h[0], h[1], k[0], k[1]) < d ? (e.push(k[0], k[1]), g = C.toString(), r[g] = !0) : (q.push(C, B, B, z), p.push(k, A, A, h), n.push(g, u, u, f));
        return e
    }

    function lx(b, c, d, e, f) {
        var g = re("EPSG:4326");
        return kx(function (e) {
            return [b, c + (d - c) * e]
        }, Je(g, e), f)
    }

    function mx(b, c, d, e, f) {
        var g = re("EPSG:4326");
        return kx(function (e) {
            return [c + (d - c) * e, b]
        }, Je(g, e), f)
    };
    function nx(b) {
        b = m(b) ? b : {};
        this.i = this.f = null;
        this.d = this.c = Infinity;
        this.g = this.e = -Infinity;
        this.W = m(b.targetSize) ? b.targetSize : 100;
        this.l = m(b.maxLines) ? b.maxLines : 100;
        this.a = [];
        this.b = [];
        this.p = m(b.strokeStyle) ? b.strokeStyle : ox;
        this.o = this.q = void 0;
        this.n = null;
        this.setMap(m(b.map) ? b.map : null)
    }

    var ox = new zl({color: "rgba(0,0,0,0.2)"}), px = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function qx(b, c, d, e, f) {
        var g = f;
        c = lx(c, b.e, b.c, b.i, d);
        g = m(b.a[g]) ? b.a[g] : new N(null);
        bn(g, "XY", c);
        he(g.G(), e) && (b.a[f++] = g);
        return f
    }

    function rx(b, c, d, e, f) {
        var g = f;
        c = mx(c, b.g, b.d, b.i, d);
        g = m(b.b[g]) ? b.b[g] : new N(null);
        bn(g, "XY", c);
        he(g.G(), e) && (b.b[f++] = g);
        return f
    }

    l = nx.prototype;
    l.Xk = function () {
        return this.f
    };
    l.jj = function () {
        return this.a
    };
    l.oj = function () {
        return this.b
    };
    l.ig = function (b) {
        var c = b.vectorContext, d = b.frameState;
        b = d.extent;
        var e = d.viewState, f = e.center, g = e.projection, e = e.resolution, d = d.pixelRatio, d = e * e / (4 * d * d);
        if (null === this.i || !Ie(this.i, g)) {
            var h = g.G(), k = g.f, n = k[2], p = k[1], q = k[0];
            this.c = k[3];
            this.d = n;
            this.e = p;
            this.g = q;
            k = re("EPSG:4326");
            this.q = Je(k, g);
            this.o = Je(g, k);
            this.n = this.o(de(h));
            this.i = g
        }
        for (var g = this.n[0], h = this.n[1], k = -1, r, p = Math.pow(this.W * e, 2), q = [], t = [], e = 0, n = px.length; e < n; ++e) {
            r = px[e] / 2;
            q[0] = g - r;
            q[1] = h - r;
            t[0] = g + r;
            t[1] = h + r;
            this.q(q, q);
            this.q(t,
                t);
            r = Math.pow(t[0] - q[0], 2) + Math.pow(t[1] - q[1], 2);
            if (r <= p)break;
            k = px[e]
        }
        e = k;
        if (-1 == e)this.a.length = this.b.length = 0; else {
            g = this.o(f);
            f = g[0];
            g = g[1];
            h = this.l;
            f = Math.floor(f / e) * e;
            p = Vb(f, this.g, this.d);
            n = qx(this, p, d, b, 0);
            for (k = 0; p != this.g && k++ < h;)p = Math.max(p - e, this.g), n = qx(this, p, d, b, n);
            p = Vb(f, this.g, this.d);
            for (k = 0; p != this.d && k++ < h;)p = Math.min(p + e, this.d), n = qx(this, p, d, b, n);
            this.a.length = n;
            g = Math.floor(g / e) * e;
            f = Vb(g, this.e, this.c);
            n = rx(this, f, d, b, 0);
            for (k = 0; f != this.e && k++ < h;)f = Math.max(f - e, this.e), n =
                rx(this, f, d, b, n);
            f = Vb(g, this.e, this.c);
            for (k = 0; f != this.c && k++ < h;)f = Math.min(f + e, this.c), n = rx(this, f, d, b, n);
            this.b.length = n
        }
        c.za(null, this.p);
        b = 0;
        for (d = this.a.length; b < d; ++b)f = this.a[b], c.Ab(f, null);
        b = 0;
        for (d = this.b.length; b < d; ++b)f = this.b[b], c.Ab(f, null)
    };
    l.setMap = function (b) {
        null !== this.f && (this.f.u("postcompose", this.ig, this), this.f.render());
        null !== b && (b.r("postcompose", this.ig, this), b.render());
        this.f = b
    };
    function sx(b, c, d, e, f, g, h) {
        sj.call(this, b, c, d, 0, e);
        this.i = f;
        this.b = new Image;
        null !== g && (this.b.crossOrigin = g);
        this.d = {};
        this.c = null;
        this.state = 0;
        this.f = h
    }

    w(sx, sj);
    sx.prototype.a = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.d)return this.d[c];
            b = xb(this.d) ? this.b : this.b.cloneNode(!1);
            return this.d[c] = b
        }
        return this.b
    };
    sx.prototype.q = function () {
        this.state = 3;
        Sa(this.c, Wc);
        this.c = null;
        this.dispatchEvent("change")
    };
    sx.prototype.n = function () {
        m(this.resolution) || (this.resolution = fe(this.extent) / this.b.height);
        this.state = 2;
        Sa(this.c, Wc);
        this.c = null;
        this.dispatchEvent("change")
    };
    sx.prototype.load = function () {
        0 == this.state && (this.state = 1, this.dispatchEvent("change"), this.c = [Uc(this.b, "error", this.q, !1, this), Uc(this.b, "load", this.n, !1, this)], this.f(this, this.i))
    };
    function tx(b, c, d, e, f) {
        zg.call(this, b, c);
        this.f = d;
        this.b = new Image;
        null !== e && (this.b.crossOrigin = e);
        this.c = {};
        this.e = null;
        this.i = f
    }

    w(tx, zg);
    l = tx.prototype;
    l.N = function () {
        1 == this.state && ux(this);
        tx.S.N.call(this)
    };
    l.Ma = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.c)return this.c[c];
            b = xb(this.c) ? this.b : this.b.cloneNode(!1);
            return this.c[c] = b
        }
        return this.b
    };
    l.hb = function () {
        return this.f
    };
    l.Yk = function () {
        this.state = 3;
        ux(this);
        Ag(this)
    };
    l.Zk = function () {
        this.state = this.b.naturalWidth && this.b.naturalHeight ? 2 : 4;
        ux(this);
        Ag(this)
    };
    l.load = function () {
        0 == this.state && (this.state = 1, Ag(this), this.e = [Uc(this.b, "error", this.Yk, !1, this), Uc(this.b, "load", this.Zk, !1, this)], this.i(this, this.f))
    };
    function ux(b) {
        Sa(b.e, Wc);
        b.e = null
    };
    function vx(b, c, d) {
        return function (e, f, g) {
            return d(b, c, e, f, g)
        }
    }

    function wx() {
    };
    function xx(b, c) {
        $c.call(this);
        this.a = new gr(this);
        var d = b;
        c && (d = Df(b));
        this.a.Ka(d, "dragenter", this.an);
        d != b && this.a.Ka(d, "dragover", this.bn);
        this.a.Ka(b, "dragover", this.cn);
        this.a.Ka(b, "drop", this.dn)
    }

    w(xx, $c);
    l = xx.prototype;
    l.Yc = !1;
    l.N = function () {
        xx.S.N.call(this);
        this.a.Xc()
    };
    l.an = function (b) {
        var c = b.a.dataTransfer;
        (this.Yc = !(!c || !(c.types && (Ya(c.types, "Files") || Ya(c.types, "public.file-url")) || c.files && 0 < c.files.length))) && b.preventDefault()
    };
    l.bn = function (b) {
        this.Yc && (b.preventDefault(), b.a.dataTransfer.dropEffect = "none")
    };
    l.cn = function (b) {
        this.Yc && (b.preventDefault(), b.gb(), b = b.a.dataTransfer, b.effectAllowed = "all", b.dropEffect = "copy")
    };
    l.dn = function (b) {
        this.Yc && (b.preventDefault(), b.gb(), b = new wc(b.a), b.type = "drop", this.dispatchEvent(b))
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    function yx(b, c) {
        this.e = [];
        this.l = b;
        this.o = c || null;
        this.d = this.a = !1;
        this.c = void 0;
        this.q = this.p = this.f = !1;
        this.g = 0;
        this.b = null;
        this.i = 0
    }

    yx.prototype.cancel = function (b) {
        if (this.a)this.c instanceof yx && this.c.cancel(); else {
            if (this.b) {
                var c = this.b;
                delete this.b;
                b ? c.cancel(b) : (c.i--, 0 >= c.i && c.cancel())
            }
            this.l ? this.l.call(this.o, this) : this.q = !0;
            this.a || (b = new zx, Ax(this), Bx(this, !1, b))
        }
    };
    yx.prototype.n = function (b, c) {
        this.f = !1;
        Bx(this, b, c)
    };
    function Bx(b, c, d) {
        b.a = !0;
        b.c = d;
        b.d = !c;
        Cx(b)
    }

    function Ax(b) {
        if (b.a) {
            if (!b.q)throw new Dx;
            b.q = !1
        }
    }

    function Ex(b, c, d, e) {
        b.e.push([c, d, e]);
        b.a && Cx(b)
    }

    yx.prototype.then = function (b, c, d) {
        var e, f, g = new En(function (b, c) {
            e = b;
            f = c
        });
        Ex(this, e, function (b) {
            b instanceof zx ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    vn(yx);
    function Fx(b) {
        return Va(b.e, function (b) {
            return ka(b[1])
        })
    }

    function Cx(b) {
        if (b.g && b.a && Fx(b)) {
            var c = b.g, d = Gx[c];
            d && (ba.clearTimeout(d.Z), delete Gx[c]);
            b.g = 0
        }
        b.b && (b.b.i--, delete b.b);
        for (var c = b.c, e = d = !1; b.e.length && !b.f;) {
            var f = b.e.shift(), g = f[0], h = f[1], f = f[2];
            if (g = b.d ? h : g)try {
                var k = g.call(f || b.o, c);
                m(k) && (b.d = b.d && (k == c || k instanceof Error), b.c = c = k);
                wn(c) && (e = !0, b.f = !0)
            } catch (n) {
                c = n, b.d = !0, Fx(b) || (d = !0)
            }
        }
        b.c = c;
        e && (k = ra(b.n, b, !0), e = ra(b.n, b, !1), c instanceof yx ? (Ex(c, k, e), c.p = !0) : c.then(k, e));
        d && (c = new Hx(c), Gx[c.Z] = c, b.g = c.Z)
    }

    function Dx() {
        xa.call(this)
    }

    w(Dx, xa);
    Dx.prototype.message = "Deferred has already fired";
    Dx.prototype.name = "AlreadyCalledError";
    function zx() {
        xa.call(this)
    }

    w(zx, xa);
    zx.prototype.message = "Deferred was canceled";
    zx.prototype.name = "CanceledError";
    function Hx(b) {
        this.Z = ba.setTimeout(ra(this.b, this), 0);
        this.a = b
    }

    Hx.prototype.b = function () {
        delete Gx[this.Z];
        throw this.a;
    };
    var Gx = {};

    function Ix(b, c) {
        m(b.name) ? (this.name = b.name, this.code = Jx[b.name]) : (this.code = b.code, this.name = Kx(b.code));
        xa.call(this, Ba("%s %s", this.name, c))
    }

    w(Ix, xa);
    function Kx(b) {
        var c = wb(Jx, function (c) {
            return b == c
        });
        if (!m(c))throw Error("Invalid code: " + b);
        return c
    }

    var Jx = {
        AbortError: 3,
        EncodingError: 5,
        InvalidModificationError: 9,
        InvalidStateError: 7,
        NotFoundError: 1,
        NotReadableError: 4,
        NoModificationAllowedError: 6,
        PathExistsError: 12,
        QuotaExceededError: 10,
        SecurityError: 2,
        SyntaxError: 8,
        TypeMismatchError: 11
    };

    function Lx(b, c) {
        rc.call(this, b.type, c)
    }

    w(Lx, rc);
    function Mx() {
        $c.call(this);
        this.Za = new FileReader;
        this.Za.onloadstart = ra(this.a, this);
        this.Za.onprogress = ra(this.a, this);
        this.Za.onload = ra(this.a, this);
        this.Za.onabort = ra(this.a, this);
        this.Za.onerror = ra(this.a, this);
        this.Za.onloadend = ra(this.a, this)
    }

    w(Mx, $c);
    Mx.prototype.getError = function () {
        return this.Za.error && new Ix(this.Za.error, "reading file")
    };
    Mx.prototype.a = function (b) {
        this.dispatchEvent(new Lx(b, this))
    };
    Mx.prototype.N = function () {
        Mx.S.N.call(this);
        delete this.Za
    };
    function Nx(b) {
        var c = new yx;
        b.Ka("loadend", ta(function (b, c) {
            var f = c.Za.result, g = c.getError();
            null == f || g ? (Ax(b), Bx(b, !1, g)) : (Ax(b), Bx(b, !0, f));
            c.Xc()
        }, c, b));
        return c
    };
    function Ox(b) {
        b = m(b) ? b : {};
        Yj.call(this, {handleEvent: Gg});
        this.g = m(b.formatConstructors) ? b.formatConstructors : [];
        this.o = m(b.projection) ? re(b.projection) : null;
        this.e = null;
        this.c = void 0
    }

    w(Ox, Yj);
    Ox.prototype.N = function () {
        m(this.c) && Wc(this.c);
        Ox.S.N.call(this)
    };
    Ox.prototype.f = function (b) {
        b = b.a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = b.length; c < d; ++c) {
            var f = e = b[c], g = new Mx, h = Nx(g);
            g.Za.readAsText(f, "");
            Ex(h, ta(this.i, e), null, this)
        }
    };
    Ox.prototype.i = function (b, c) {
        var d = this.n, e = this.o;
        null === e && (e = d.P().e);
        var d = this.g, f = [], g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = new d[g], n;
            try {
                n = k.ja(c)
            } catch (p) {
                n = null
            }
            if (null !== n) {
                var k = k.ya(c), k = Je(k, e), q, r;
                q = 0;
                for (r = n.length; q < r; ++q) {
                    var t = n[q], u = t.Q();
                    null != u && u.qa(k);
                    f.push(t)
                }
            }
        }
        this.dispatchEvent(new Px(Qx, this, b, f, e))
    };
    Ox.prototype.setMap = function (b) {
        m(this.c) && (Wc(this.c), this.c = void 0);
        null !== this.e && (qc(this.e), this.e = null);
        Ox.S.setMap.call(this, b);
        null !== b && (this.e = new xx(b.b), this.c = x(this.e, "drop", this.f, !1, this))
    };
    var Qx = "addfeatures";

    function Px(b, c, d, e, f) {
        rc.call(this, b, c);
        this.features = e;
        this.file = d;
        this.projection = f
    }

    w(Px, rc);
    function Rx(b, c) {
        this.x = b;
        this.y = c
    }

    w(Rx, zf);
    Rx.prototype.clone = function () {
        return new Rx(this.x, this.y)
    };
    Rx.prototype.scale = zf.prototype.scale;
    Rx.prototype.add = function (b) {
        this.x += b.x;
        this.y += b.y;
        return this
    };
    Rx.prototype.rotate = function (b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = this.y * c + this.x * b;
        this.x = this.x * c - this.y * b;
        this.y = d;
        return this
    };
    function Sx(b) {
        b = m(b) ? b : {};
        lk.call(this, {handleDownEvent: Tx, handleDragEvent: Ux, handleUpEvent: Vx});
        this.i = m(b.condition) ? b.condition : ik;
        this.c = this.e = void 0;
        this.f = 0;
        this.l = m(b.duration) ? b.duration : 400
    }

    w(Sx, lk);
    function Ux(b) {
        if (kk(b)) {
            var c = b.map, d = c.wa();
            b = b.pixel;
            b = new Rx(b[0] - d[0] / 2, d[1] / 2 - b[1]);
            d = Math.atan2(b.y, b.x);
            b = Math.sqrt(b.x * b.x + b.y * b.y);
            var e = c.P(), f = Se(e);
            c.render();
            m(this.e) && Zj(c, e, f.rotation - (d - this.e));
            this.e = d;
            m(this.c) && bk(c, e, f.resolution / b * this.c);
            m(this.c) && (this.f = this.c / b);
            this.c = b
        }
    }

    function Vx(b) {
        if (!kk(b))return !0;
        b = b.map;
        var c = b.P();
        Ue(c, -1);
        var d = Se(c), e = this.f - 1, f = d.rotation, f = c.constrainRotation(f, 0);
        Zj(b, c, f, void 0, void 0);
        d = d.resolution;
        f = this.l;
        d = c.constrainResolution(d, 0, e);
        bk(b, c, d, void 0, f);
        this.f = 0;
        return !1
    }

    function Tx(b) {
        return kk(b) && this.i(b) ? (Ue(b.map.P(), 1), this.c = this.e = void 0, !0) : !1
    };
    function Wx(b, c) {
        rc.call(this, b);
        this.feature = c
    }

    w(Wx, rc);
    function Xx(b) {
        lk.call(this, {handleDownEvent: Yx, handleEvent: Zx, handleUpEvent: $x});
        this.U = null;
        this.K = !1;
        this.lb = m(b.source) ? b.source : null;
        this.jb = m(b.features) ? b.features : null;
        this.li = m(b.snapTolerance) ? b.snapTolerance : 12;
        this.T = b.type;
        this.c = ay(this.T);
        this.Ra = m(b.minPoints) ? b.minPoints : this.c === by ? 3 : 2;
        this.Ga = m(b.maxPoints) ? b.maxPoints : Infinity;
        var c = b.geometryFunction;
        if (!m(c))if ("Circle" === this.T)c = function (b, c) {
            var d = m(c) ? c : new Tm([NaN, NaN]);
            d.uf(b[0], Math.sqrt(sd(b[0], b[1])));
            return d
        }; else {
            var d,
                c = this.c;
            c === cy ? d = E : c === dy ? d = N : c === by && (d = F);
            c = function (b, c) {
                var g = c;
                m(g) ? g.ba(b) : g = new d(b);
                return g
            }
        }
        this.J = c;
        this.H = this.l = this.e = this.p = this.i = this.f = null;
        this.ma = new yr({style: m(b.style) ? b.style : ey()});
        this.kb = b.geometryName;
        this.hi = m(b.condition) ? b.condition : hk;
        this.Fa = m(b.freehandCondition) ? b.freehandCondition : ik;
        x(this, hd("active"), this.mb, !1, this)
    }

    w(Xx, lk);
    function ey() {
        var b = Jl();
        return function (c) {
            return b[c.Q().L()]
        }
    }

    Xx.prototype.setMap = function (b) {
        Xx.S.setMap.call(this, b);
        this.mb()
    };
    function Zx(b) {
        var c = !this.K;
        this.K && b.type === mj ? (fy(this, b), c = !1) : b.type === lj ? c = gy(this, b) : b.type === fj && (c = !1);
        return mk.call(this, b) && c
    }

    function Yx(b) {
        if (this.hi(b))return this.U = b.pixel, !0;
        if (this.c !== dy && this.c !== by || !this.Fa(b))return !1;
        this.U = b.pixel;
        this.K = !0;
        null === this.f && hy(this, b);
        return !0
    }

    function $x(b) {
        this.K = !1;
        var c = this.U, d = b.pixel, e = c[0] - d[0], c = c[1] - d[1], d = !0;
        4 >= e * e + c * c && (gy(this, b), null === this.f ? hy(this, b) : (this.c === cy || this.c === iy) && null !== this.f || jy(this, b) ? this.aa() : fy(this, b), d = !1);
        return d
    }

    function gy(b, c) {
        if (b.c === cy && null === b.f)hy(b, c); else if (null === b.f) {
            var d = c.coordinate.slice();
            null === b.p ? (b.p = new X(new E(d)), ky(b)) : b.p.Q().ba(d)
        } else {
            var d = c.coordinate, e = b.i.Q(), f;
            b.c === cy ? f = b.e : b.c === by ? (f = b.e[0], f = f[f.length - 1], jy(b, c) && (d = b.f.slice())) : (f = b.e, f = f[f.length - 1]);
            f[0] = d[0];
            f[1] = d[1];
            b.J(b.e, e);
            null === b.p || b.p.Q().ba(d);
            e instanceof F && b.c !== by ? (null === b.l && (b.l = new X(new N(null))), e = e.Zf(0), d = b.l.Q(), bn(d, e.b, e.j)) : null !== b.H && (d = b.l.Q(), d.ba(b.H));
            ky(b)
        }
        return !0
    }

    function jy(b, c) {
        var d = !1;
        if (null !== b.i) {
            var e = !1, f = [b.f];
            b.c === dy ? e = b.e.length > b.Ra : b.c === by && (e = b.e[0].length > b.Ra, f = [b.e[0][0], b.e[0][b.e[0].length - 2]]);
            if (e)for (var e = c.map, g = 0, h = f.length; g < h; g++) {
                var k = f[g], n = e.sa(k), p = c.pixel, d = p[0] - n[0], n = p[1] - n[1], p = b.K && b.Fa(c) ? 1 : b.li;
                if (d = Math.sqrt(d * d + n * n) <= p) {
                    b.f = k;
                    break
                }
            }
        }
        return d
    }

    function hy(b, c) {
        var d = c.coordinate;
        b.f = d;
        b.c === cy ? b.e = d.slice() : b.c === by ? (b.e = [[d.slice(), d.slice()]], b.H = b.e[0]) : (b.e = [d.slice(), d.slice()], b.c === iy && (b.H = b.e));
        null !== b.H && (b.l = new X(new N(b.H)));
        d = b.J(b.e);
        b.i = new X;
        m(b.kb) && b.i.Hc(b.kb);
        b.i.La(d);
        ky(b);
        b.dispatchEvent(new Wx("drawstart", b.i))
    }

    function fy(b, c) {
        var d = c.coordinate, e = b.i.Q(), f, g;
        if (b.c === dy)b.f = d.slice(), g = b.e, g.push(d.slice()), f = g.length > b.Ga, b.J(g, e); else if (b.c === by) {
            g = b.e[0];
            g.push(d.slice());
            if (f = g.length > b.Ga)b.f = g[0];
            b.J(b.e, e)
        }
        ky(b);
        f && b.aa()
    }

    Xx.prototype.aa = function () {
        var b = ly(this), c = this.e, d = b.Q();
        this.c === dy ? (c.pop(), this.J(c, d)) : this.c === by && (c[0].pop(), c[0].push(c[0][0]), this.J(c, d));
        "MultiPoint" === this.T ? b.La(new en([c])) : "MultiLineString" === this.T ? b.La(new P([c])) : "MultiPolygon" === this.T && b.La(new R([c]));
        this.dispatchEvent(new Wx("drawend", b));
        null === this.jb || this.jb.push(b);
        null === this.lb || this.lb.hf(b)
    };
    function ly(b) {
        b.f = null;
        var c = b.i;
        null !== c && (b.i = null, b.p = null, b.l = null, b.ma.a.clear());
        return c
    }

    Xx.prototype.nc = Fg;
    function ky(b) {
        var c = [];
        null === b.i || c.push(b.i);
        null === b.l || c.push(b.l);
        null === b.p || c.push(b.p);
        b.ma.kd(new nf(c))
    }

    Xx.prototype.mb = function () {
        var b = this.n, c = this.b();
        null !== b && c || ly(this);
        this.ma.setMap(c ? b : null)
    };
    function ay(b) {
        var c;
        "Point" === b || "MultiPoint" === b ? c = cy : "LineString" === b || "MultiLineString" === b ? c = dy : "Polygon" === b || "MultiPolygon" === b ? c = by : "Circle" === b && (c = iy);
        return c
    }

    var cy = "Point", dy = "LineString", by = "Polygon", iy = "Circle";

    function my(b) {
        lk.call(this, {handleDownEvent: ny, handleDragEvent: oy, handleEvent: py, handleUpEvent: qy});
        this.U = m(b.deleteCondition) ? b.deleteCondition : Lg(hk, gk);
        this.T = this.e = null;
        this.H = [0, 0];
        this.c = new pp;
        this.i = m(b.pixelTolerance) ? b.pixelTolerance : 10;
        this.K = !1;
        this.f = null;
        this.l = new yr({style: m(b.style) ? b.style : ry()});
        this.J = {
            Point: this.Dl,
            LineString: this.Cg,
            LinearRing: this.Cg,
            Polygon: this.El,
            MultiPoint: this.Bl,
            MultiLineString: this.Al,
            MultiPolygon: this.Cl,
            GeometryCollection: this.zl
        };
        this.p = b.features;
        this.p.forEach(this.Bg, this);
        x(this.p, "add", this.xl, !1, this);
        x(this.p, "remove", this.yl, !1, this)
    }

    w(my, lk);
    l = my.prototype;
    l.Bg = function (b) {
        var c = b.Q();
        m(this.J[c.L()]) && this.J[c.L()].call(this, b, c);
        b = this.n;
        null === b || sy(this, this.H, b)
    };
    l.setMap = function (b) {
        this.l.setMap(b);
        my.S.setMap.call(this, b)
    };
    l.xl = function (b) {
        this.Bg(b.element)
    };
    l.yl = function (b) {
        var c = b.element;
        b = this.c;
        var d, e = [];
        tp(b, c.Q().G(), function (b) {
            c === b.feature && e.push(b)
        });
        for (d = e.length - 1; 0 <= d; --d)b.remove(e[d]);
        null !== this.e && 0 === this.p.Jb() && (this.l.Ud(this.e), this.e = null)
    };
    l.Dl = function (b, c) {
        var d = c.M(), d = {feature: b, geometry: c, $: [d, d]};
        this.c.ha(c.G(), d)
    };
    l.Bl = function (b, c) {
        var d = c.M(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {
            feature: b,
            geometry: c,
            depth: [f],
            index: f,
            $: [e, e]
        }, this.c.ha(c.G(), e)
    };
    l.Cg = function (b, c) {
        var d = c.M(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {
            feature: b,
            geometry: c,
            index: e,
            $: g
        }, this.c.ha(Jd(g), h)
    };
    l.Al = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            $: n
        }, this.c.ha(Jd(n), p)
    };
    l.El = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            $: n
        }, this.c.ha(Jd(n), p)
    };
    l.Cl = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p, q, r, t;
        n = 0;
        for (p = d.length; n < p; ++n)for (q = d[n], h = 0, k = q.length; h < k; ++h)for (e = q[h], f = 0, g = e.length - 1; f < g; ++f)r = e.slice(f, f + 2), t = {
            feature: b,
            geometry: c,
            depth: [h, n],
            index: f,
            $: r
        }, this.c.ha(Jd(r), t)
    };
    l.zl = function (b, c) {
        var d, e = c.d;
        for (d = 0; d < e.length; ++d)this.J[e[d].L()].call(this, b, e[d])
    };
    function ty(b, c) {
        var d = b.e;
        null === d ? (d = new X(new E(c)), b.e = d, b.l.rg(d)) : d.Q().ba(c)
    }

    function uy(b, c) {
        return b.index - c.index
    }

    function ny(b) {
        sy(this, b.pixel, b.map);
        this.f = [];
        var c = this.e;
        if (null !== c) {
            b = [];
            var c = c.Q().M(), d = Jd([c]), d = rp(this.c, d), e = {};
            d.sort(uy);
            for (var f = 0, g = d.length; f < g; ++f) {
                var h = d[f], k = h.$, n = ma(h.feature), p = h.depth;
                p && (n += "-" + p.join("-"));
                e[n] || (e[n] = Array(2));
                if (qd(k[0], c) && !e[n][0])this.f.push([h, 0]), e[n][0] = h; else if (qd(k[1], c) && !e[n][1]) {
                    if ("LineString" !== h.geometry.L() && "MultiLineString" !== h.geometry.L() || !e[n][0] || 0 !== e[n][0].index)this.f.push([h, 1]), e[n][1] = h
                } else ma(k)in this.T && !e[n][0] && !e[n][1] &&
                b.push([h, c])
            }
            for (f = b.length - 1; 0 <= f; --f)this.pk.apply(this, b[f])
        }
        return null !== this.e
    }

    function oy(b) {
        b = b.coordinate;
        for (var c = 0, d = this.f.length; c < d; ++c) {
            for (var e = this.f[c], f = e[0], g = f.depth, h = f.geometry, k = h.M(), n = f.$, e = e[1]; b.length < h.s;)b.push(0);
            switch (h.L()) {
                case "Point":
                    k = b;
                    n[0] = n[1] = b;
                    break;
                case "MultiPoint":
                    k[f.index] = b;
                    n[0] = n[1] = b;
                    break;
                case "LineString":
                    k[f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiLineString":
                    k[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "Polygon":
                    k[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiPolygon":
                    k[g[1]][g[0]][f.index + e] = b, n[e] = b
            }
            h.ba(k)
        }
        ty(this, b)
    }

    function qy() {
        for (var b, c = this.f.length - 1; 0 <= c; --c)b = this.f[c][0], this.c.update(Jd(b.$), b);
        return !1
    }

    function py(b) {
        var c;
        b.map.P().c.slice()[1] || b.type != lj || this.o || (this.H = b.pixel, sy(this, b.pixel, b.map));
        if (null !== this.e && this.U(b)) {
            this.e.Q();
            c = this.f;
            var d = {}, e, f, g, h, k, n, p, q, r;
            for (k = c.length - 1; 0 <= k; --k)if (g = c[k], q = g[0], h = q.geometry, f = h.M(), r = ma(q.feature), q.depth && (r += "-" + q.depth.join("-")), e = p = n = void 0, 0 === g[1] ? (p = q, n = q.index) : 1 == g[1] && (e = q, n = q.index + 1), r in d || (d[r] = [e, p, n]), g = d[r], m(e) && (g[0] = e), m(p) && (g[1] = p), m(g[0]) && m(g[1])) {
                e = f;
                r = !1;
                p = n - 1;
                switch (h.L()) {
                    case "MultiLineString":
                        f[q.depth[0]].splice(n,
                            1);
                        r = !0;
                        break;
                    case "LineString":
                        f.splice(n, 1);
                        r = !0;
                        break;
                    case "MultiPolygon":
                        e = e[q.depth[1]];
                    case "Polygon":
                        e = e[q.depth[0]], 4 < e.length && (n == e.length - 1 && (n = 0), e.splice(n, 1), r = !0, 0 === n && (e.pop(), e.push(e[0]), p = e.length - 1))
                }
                r && (this.c.remove(g[0]), this.c.remove(g[1]), h.ba(f), f = {
                    depth: q.depth,
                    feature: q.feature,
                    geometry: q.geometry,
                    index: p,
                    $: [g[0].$[0], g[1].$[1]]
                }, this.c.ha(Jd(f.$), f), vy(this, h, n, q.depth, -1), this.l.Ud(this.e), this.e = null)
            }
            c = !0
        }
        return mk.call(this, b) && !c
    }

    function sy(b, c, d) {
        function e(b, c) {
            return td(f, b.$) - td(f, c.$)
        }

        var f = d.ka(c), g = d.ka([c[0] - b.i, c[1] + b.i]), h = d.ka([c[0] + b.i, c[1] - b.i]), g = Jd([g, h]), g = rp(b.c, g);
        if (0 < g.length) {
            g.sort(e);
            var h = g[0].$, k = nd(f, h), n = d.sa(k);
            if (Math.sqrt(sd(c, n)) <= b.i) {
                c = d.sa(h[0]);
                d = d.sa(h[1]);
                c = sd(n, c);
                d = sd(n, d);
                b.K = Math.sqrt(Math.min(c, d)) <= b.i;
                b.K && (k = c > d ? h[1] : h[0]);
                ty(b, k);
                d = {};
                d[ma(h)] = !0;
                c = 1;
                for (n = g.length; c < n; ++c)if (k = g[c].$, qd(h[0], k[0]) && qd(h[1], k[1]) || qd(h[0], k[1]) && qd(h[1], k[0]))d[ma(k)] = !0; else break;
                b.T = d;
                return
            }
        }
        null !==
        b.e && (b.l.Ud(b.e), b.e = null)
    }

    l.pk = function (b, c) {
        for (var d = b.$, e = b.feature, f = b.geometry, g = b.depth, h = b.index, k; c.length < f.s;)c.push(0);
        switch (f.L()) {
            case "MultiLineString":
                k = f.M();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "Polygon":
                k = f.M();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "MultiPolygon":
                k = f.M();
                k[g[1]][g[0]].splice(h + 1, 0, c);
                break;
            case "LineString":
                k = f.M();
                k.splice(h + 1, 0, c);
                break;
            default:
                return
        }
        f.ba(k);
        k = this.c;
        k.remove(b);
        vy(this, f, h, g, 1);
        var n = {$: [d[0], c], feature: e, geometry: f, depth: g, index: h};
        k.ha(Jd(n.$), n);
        this.f.push([n, 1]);
        d = {
            $: [c,
                d[1]], feature: e, geometry: f, depth: g, index: h + 1
        };
        k.ha(Jd(d.$), d);
        this.f.push([d, 0])
    };
    function vy(b, c, d, e, f) {
        tp(b.c, c.G(), function (b) {
            b.geometry === c && (!m(e) || ib(b.depth, e)) && b.index > d && (b.index += f)
        })
    }

    function ry() {
        var b = Jl();
        return function () {
            return b.Point
        }
    };
    function wy(b, c, d, e) {
        rc.call(this, b);
        this.selected = c;
        this.deselected = d;
        this.mapBrowserEvent = e
    }

    w(wy, rc);
    function xy(b) {
        Yj.call(this, {handleEvent: yy});
        b = m(b) ? b : {};
        this.o = m(b.condition) ? b.condition : gk;
        this.f = m(b.addCondition) ? b.addCondition : Fg;
        this.J = m(b.removeCondition) ? b.removeCondition : Fg;
        this.K = m(b.toggleCondition) ? b.toggleCondition : ik;
        this.i = m(b.multi) ? b.multi : !1;
        this.e = m(b.filter) ? b.filter : Gg;
        var c;
        if (m(b.layers))if (ka(b.layers))c = b.layers; else {
            var d = b.layers;
            c = function (b) {
                return Ya(d, b)
            }
        } else c = Gg;
        this.g = c;
        this.c = new yr({style: m(b.style) ? b.style : zy()});
        b = this.c.a;
        x(b, "add", this.l, !1, this);
        x(b,
            "remove", this.H, !1, this)
    }

    w(xy, Yj);
    xy.prototype.p = function () {
        return this.c.a
    };
    function yy(b) {
        if (!this.o(b))return !0;
        var c = this.f(b), d = this.J(b), e = this.K(b), f = b.map, g = this.c.a, h = [], k = [], n = !1;
        if (c || d || e) {
            f.Je(b.pixel, function (b, f) {
                -1 == Ra(g.b, b) ? (c || e) && this.e(b, f) && k.push(b) : (d || e) && h.push(b)
            }, this, this.g);
            for (f = h.length - 1; 0 <= f; --f)g.remove(h[f]);
            g.Ze(k);
            if (0 < k.length || 0 < h.length)n = !0
        } else f.Je(b.pixel, function (b, c) {
            if (this.e(b, c))return k.push(b), !this.i
        }, this, this.g), 0 < k.length && 1 == g.Jb() && g.item(0) == k[0] || (n = !0, 0 !== g.Jb() && (h = Array.prototype.concat(g.b), g.clear()), g.Ze(k));
        n && this.dispatchEvent(new wy("select", k, h, b));
        return fk(b)
    }

    xy.prototype.setMap = function (b) {
        var c = this.n, d = this.c.a;
        null === c || d.forEach(c.Gh, c);
        xy.S.setMap.call(this, b);
        this.c.setMap(b);
        null === b || d.forEach(b.Ch, b)
    };
    function zy() {
        var b = Jl();
        db(b.Polygon, b.LineString);
        db(b.GeometryCollection, b.LineString);
        return function (c) {
            return b[c.Q().L()]
        }
    }

    xy.prototype.l = function (b) {
        b = b.element;
        var c = this.n;
        null === c || c.Ch(b)
    };
    xy.prototype.H = function (b) {
        b = b.element;
        var c = this.n;
        null === c || c.Gh(b)
    };
    function Ay(b) {
        lk.call(this, {handleEvent: By, handleDownEvent: Gg, handleUpEvent: Cy});
        b = m(b) ? b : {};
        this.i = m(b.source) ? b.source : null;
        this.f = m(b.features) ? b.features : null;
        this.U = [];
        this.p = {};
        this.J = {};
        this.K = {};
        this.l = {};
        this.H = null;
        this.e = m(b.pixelTolerance) ? b.pixelTolerance : 10;
        this.aa = ra(Dy, this);
        this.c = new pp;
        this.T = {
            Point: this.Kl,
            LineString: this.Fg,
            LinearRing: this.Fg,
            Polygon: this.Ll,
            MultiPoint: this.Il,
            MultiLineString: this.Hl,
            MultiPolygon: this.Jl,
            GeometryCollection: this.Gl
        }
    }

    w(Ay, lk);
    l = Ay.prototype;
    l.dd = function (b, c) {
        var d = m(c) ? c : !0, e = b.Q(), f = this.T[e.L()];
        if (m(f)) {
            var g = ma(b);
            this.K[g] = e.G(Kd());
            f.call(this, b, e);
            d && (this.J[g] = e.r("change", ra(this.Nj, this, b), this), this.p[g] = b.r(hd(b.b), this.Fl, this))
        }
    };
    l.Hi = function (b) {
        this.dd(b)
    };
    l.Ii = function (b) {
        this.ed(b)
    };
    l.Dg = function (b) {
        var c;
        b instanceof yp ? c = b.feature : b instanceof mf && (c = b.element);
        this.dd(c)
    };
    l.Eg = function (b) {
        var c;
        b instanceof yp ? c = b.feature : b instanceof mf && (c = b.element);
        this.ed(c)
    };
    l.Fl = function (b) {
        b = b.c;
        this.ed(b, !0);
        this.dd(b, !0)
    };
    l.Nj = function (b) {
        if (this.o) {
            var c = ma(b);
            c in this.l || (this.l[c] = b)
        } else this.Hh(b)
    };
    l.ed = function (b, c) {
        var d = m(c) ? c : !0, e = ma(b), f = this.K[e];
        if (f) {
            var g = this.c, h = [];
            tp(g, f, function (c) {
                b === c.feature && h.push(c)
            });
            for (f = h.length - 1; 0 <= f; --f)g.remove(h[f]);
            d && (Wc(this.J[e]), delete this.J[e], Wc(this.p[e]), delete this.p[e])
        }
    };
    l.setMap = function (b) {
        var c = this.n, d = this.U, e;
        null === this.f ? null === this.i || (e = this.i.Cc()) : e = this.f;
        c && (Sa(d, dd), d.length = 0, e.forEach(this.Ii, this));
        Ay.S.setMap.call(this, b);
        b && (null !== this.f ? (d.push(this.f.r("add", this.Dg, this)), d.push(this.f.r("remove", this.Eg, this))) : null !== this.i && (d.push(this.i.r("addfeature", this.Dg, this)), d.push(this.i.r("removefeature", this.Eg, this))), e.forEach(this.Hi, this))
    };
    l.nc = Fg;
    l.Hh = function (b) {
        this.ed(b, !1);
        this.dd(b, !1)
    };
    l.Gl = function (b, c) {
        var d, e = c.d;
        for (d = 0; d < e.length; ++d)this.T[e[d].L()].call(this, b, e[d])
    };
    l.Fg = function (b, c) {
        var d = c.M(), e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e)g = d.slice(e, e + 2), h = {feature: b, $: g}, this.c.ha(Jd(g), h)
    };
    l.Hl = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            $: n
        }, this.c.ha(Jd(n), p)
    };
    l.Il = function (b, c) {
        var d = c.M(), e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f)e = d[f], e = {feature: b, $: [e, e]}, this.c.ha(c.G(), e)
    };
    l.Jl = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p, q, r, t;
        n = 0;
        for (p = d.length; n < p; ++n)for (q = d[n], h = 0, k = q.length; h < k; ++h)for (e = q[h], f = 0, g = e.length - 1; f < g; ++f)r = e.slice(f, f + 2), t = {
            feature: b,
            $: r
        }, this.c.ha(Jd(r), t)
    };
    l.Kl = function (b, c) {
        var d = c.M(), d = {feature: b, $: [d, d]};
        this.c.ha(c.G(), d)
    };
    l.Ll = function (b, c) {
        var d = c.M(), e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h)for (e = d[h], f = 0, g = e.length - 1; f < g; ++f)n = e.slice(f, f + 2), p = {
            feature: b,
            $: n
        }, this.c.ha(Jd(n), p)
    };
    function By(b) {
        var c, d, e = b.pixel, f = b.coordinate;
        c = b.map;
        var g = c.ka([e[0] - this.e, e[1] + this.e]);
        d = c.ka([e[0] + this.e, e[1] - this.e]);
        var g = Jd([g, d]), h = rp(this.c, g), k = !1, g = !1, n = null;
        d = null;
        0 < h.length && (this.H = f, h.sort(this.aa), h = h[0].$, n = nd(f, h), d = c.sa(n), Math.sqrt(sd(e, d)) <= this.e && (g = !0, e = c.sa(h[0]), f = c.sa(h[1]), e = sd(d, e), f = sd(d, f), k = Math.sqrt(Math.min(e, f)) <= this.e)) && (n = e > f ? h[1] : h[0], d = c.sa(n), d = [Math.round(d[0]), Math.round(d[1])]);
        c = n;
        g && (b.coordinate = c.slice(0, 2), b.pixel = d);
        return mk.call(this, b)
    }

    function Cy() {
        var b = sb(this.l);
        b.length && (Sa(b, this.Hh, this), this.l = {});
        return !1
    }

    function Dy(b, c) {
        return td(this.H, b.$) - td(this.H, c.$)
    };
    function Z(b) {
        b = m(b) ? b : {};
        var c = Db(b);
        delete c.gradient;
        delete c.radius;
        delete c.blur;
        delete c.shadow;
        delete c.weight;
        M.call(this, c);
        this.d = null;
        this.K = m(b.shadow) ? b.shadow : 250;
        this.p = void 0;
        this.n = null;
        x(this, hd("gradient"), this.Oj, !1, this);
        this.wh(m(b.gradient) ? b.gradient : Ey);
        this.sh(m(b.blur) ? b.blur : 15);
        this.Hg(m(b.radius) ? b.radius : 8);
        x(this, [hd("blur"), hd("radius")], this.jg, !1, this);
        this.jg();
        var d = m(b.weight) ? b.weight : "weight", e;
        ia(d) ? e = function (b) {
            return b.get(d)
        } : e = d;
        this.e(ra(function (b) {
            b =
                e(b);
            b = m(b) ? Vb(b, 0, 1) : 1;
            var c = 255 * b | 0, d = this.n[c];
            m(d) || (d = [new Fl({image: new Hj({opacity: b, src: this.p})})], this.n[c] = d);
            return d
        }, this));
        this.set("renderOrder", null);
        x(this, "render", this.gk, !1, this)
    }

    w(Z, M);
    var Ey = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];
    l = Z.prototype;
    l.Tf = function () {
        return this.get("blur")
    };
    l.Xf = function () {
        return this.get("gradient")
    };
    l.Gg = function () {
        return this.get("radius")
    };
    l.Oj = function () {
        for (var b = this.Xf(), c = di(1, 256), d = c.createLinearGradient(0, 0, 1, 256), e = 1 / (b.length - 1), f = 0, g = b.length; f < g; ++f)d.addColorStop(f * e, b[f]);
        c.fillStyle = d;
        c.fillRect(0, 0, 1, 256);
        this.d = c.getImageData(0, 0, 1, 256).data
    };
    l.jg = function () {
        var b = this.Gg(), c = this.Tf(), d = b + c + 1, e = 2 * d, e = di(e, e);
        e.shadowOffsetX = e.shadowOffsetY = this.K;
        e.shadowBlur = c;
        e.shadowColor = "#000";
        e.beginPath();
        c = d - this.K;
        e.arc(c, c, b, 0, 2 * Math.PI, !0);
        e.fill();
        this.p = e.canvas.toDataURL();
        this.n = Array(256);
        this.k()
    };
    l.gk = function (b) {
        b = b.context;
        var c = b.canvas, c = b.getImageData(0, 0, c.width, c.height), d = c.data, e, f, g;
        e = 0;
        for (f = d.length; e < f; e += 4)if (g = 4 * d[e + 3])d[e] = this.d[g], d[e + 1] = this.d[g + 1], d[e + 2] = this.d[g + 2];
        b.putImageData(c, 0, 0)
    };
    l.sh = function (b) {
        this.set("blur", b)
    };
    l.wh = function (b) {
        this.set("gradient", b)
    };
    l.Hg = function (b) {
        this.set("radius", b)
    };
    function Fy(b, c) {
        var d = c || {}, e = d.document || document, f = Lf("SCRIPT"), g = {
            rh: f,
            oc: void 0
        }, h = new yx(Gy, g), k = null, n = null != d.timeout ? d.timeout : 5E3;
        0 < n && (k = window.setTimeout(function () {
            Hy(f, !0);
            var c = new Iy(Jy, "Timeout reached for loading script " + b);
            Ax(h);
            Bx(h, !1, c)
        }, n), g.oc = k);
        f.onload = f.onreadystatechange = function () {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (Hy(f, d.Ci || !1, k), Ax(h), Bx(h, !0, null))
        };
        f.onerror = function () {
            Hy(f, !0, k);
            var c = new Iy(Ky, "Error while loading script " + b);
            Ax(h);
            Bx(h, !1, c)
        };
        Ff(f, {type: "text/javascript", charset: "UTF-8", src: b});
        Ly(e).appendChild(f);
        return h
    }

    function Ly(b) {
        var c = b.getElementsByTagName("HEAD");
        return c && 0 != c.length ? c[0] : b.documentElement
    }

    function Gy() {
        if (this && this.rh) {
            var b = this.rh;
            b && "SCRIPT" == b.tagName && Hy(b, !0, this.oc)
        }
    }

    function Hy(b, c, d) {
        null != d && ba.clearTimeout(d);
        b.onload = ca;
        b.onerror = ca;
        b.onreadystatechange = ca;
        c && window.setTimeout(function () {
            Pf(b)
        }, 0)
    }

    var Ky = 0, Jy = 1;

    function Iy(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        xa.call(this, d);
        this.code = b
    }

    w(Iy, xa);
    function My(b, c) {
        this.b = new et(b);
        this.a = c ? c : "callback";
        this.oc = 5E3
    }

    var Ny = 0;
    My.prototype.send = function (b, c, d, e) {
        b = b || null;
        e = e || "_" + (Ny++).toString(36) + ua().toString(36);
        ba._callbacks_ || (ba._callbacks_ = {});
        var f = this.b.clone();
        if (b)for (var g in b)if (!b.hasOwnProperty || b.hasOwnProperty(g)) {
            var h = f, k = g, n = b[g];
            ga(n) || (n = [String(n)]);
            xt(h.a, k, n)
        }
        c && (ba._callbacks_[e] = Oy(e, c), c = this.a, g = "_callbacks_." + e, ga(g) || (g = [String(g)]), xt(f.a, c, g));
        c = Fy(f.toString(), {timeout: this.oc, Ci: !0});
        Ex(c, null, Py(e, b, d), void 0);
        return {Z: e, Pf: c}
    };
    My.prototype.cancel = function (b) {
        b && (b.Pf && b.Pf.cancel(), b.Z && Qy(b.Z, !1))
    };
    function Py(b, c, d) {
        return function () {
            Qy(b, !1);
            d && d(c)
        }
    }

    function Oy(b, c) {
        return function (d) {
            Qy(b, !0);
            c.apply(void 0, arguments)
        }
    }

    function Qy(b, c) {
        ba._callbacks_[b] && (c ? delete ba._callbacks_[b] : ba._callbacks_[b] = ca)
    };
    function Ry(b) {
        var c = /\{z\}/g, d = /\{x\}/g, e = /\{y\}/g, f = /\{-y\}/g;
        return function (g) {
            return null === g ? void 0 : b.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, g[2].toString()).replace(f, function () {
                return ((1 << g[0]) - g[2] - 1).toString()
            })
        }
    }

    function Sy(b) {
        return Ty(Ua(b, Ry))
    }

    function Ty(b) {
        return 1 === b.length ? b[0] : function (c, d, e) {
            return null === c ? void 0 : b[Wb((c[1] << c[0]) + c[2], b.length)](c, d, e)
        }
    }

    function Uy() {
    }

    function Vy(b, c) {
        var d = [0, 0, 0];
        return function (e, f, g) {
            return null === e ? void 0 : c(b(e, g, d), f, g)
        }
    }

    function Wy(b) {
        var c = [], d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
        if (d) {
            var e = d[2].charCodeAt(0), f;
            for (f = d[1].charCodeAt(0); f <= e; ++f)c.push(b.replace(d[0], String.fromCharCode(f)))
        } else c.push(b);
        return c
    };
    function Xy(b) {
        ah.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            opaque: b.opaque,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0,
            tileGrid: b.tileGrid,
            tilePixelRatio: b.tilePixelRatio,
            wrapX: b.wrapX
        });
        this.tileUrlFunction = m(b.tileUrlFunction) ? b.tileUrlFunction : Uy;
        this.crossOrigin = m(b.crossOrigin) ? b.crossOrigin : null;
        this.tileLoadFunction = m(b.tileLoadFunction) ? b.tileLoadFunction : Yy;
        this.tileClass = m(b.tileClass) ? b.tileClass : tx
    }

    w(Xy, ah);
    function Yy(b, c) {
        b.Ma().src = c
    }

    l = Xy.prototype;
    l.Ub = function (b, c, d, e, f) {
        var g = this.cb(b, c, d);
        if (wg(this.b, g))return this.b.get(g);
        d = b = [b, c, d];
        var h = m(f) ? f : this.g;
        c = ch(this, h);
        if (this.J) {
            var k = d;
            d = k[0];
            var n = Vg(c, k), h = $g(h);
            Rd(h, n) ? d = k : (k = ie(h), h = Math.ceil((h[0] - n[0]) / k), n[0] += k * h, d = c.bd(n, d))
        }
        k = d[0];
        n = d[1];
        h = d[2];
        if (c.minZoom > k || k > c.maxZoom)c = null; else {
            var p = c.G();
            c = null === p ? null === c.b ? null : c.b[k] : Rg(c, p, k);
            c = null === c ? d : gf(c, n, h) ? d : null
        }
        e = null === c ? void 0 : this.tileUrlFunction(c, e, f);
        e = new this.tileClass(b, m(e) ? 0 : 4, m(e) ? e : "", this.crossOrigin, this.tileLoadFunction);
        x(e, "change", this.om, !1, this);
        this.b.set(g, e);
        return e
    };
    l.Va = function () {
        return this.tileLoadFunction
    };
    l.Wa = function () {
        return this.tileUrlFunction
    };
    l.om = function (b) {
        b = b.target;
        switch (b.state) {
            case 1:
                this.dispatchEvent(new dh("tileloadstart", b));
                break;
            case 2:
                this.dispatchEvent(new dh("tileloadend", b));
                break;
            case 3:
                this.dispatchEvent(new dh("tileloaderror", b))
        }
    };
    l.ab = function (b) {
        this.b.clear();
        this.tileLoadFunction = b;
        this.k()
    };
    l.pa = function (b) {
        this.b.clear();
        this.tileUrlFunction = b;
        this.k()
    };
    l.zf = function (b, c, d) {
        b = this.cb(b, c, d);
        wg(this.b, b) && this.b.get(b)
    };
    function Zy(b) {
        Xy.call(this, {
            crossOrigin: "anonymous",
            opaque: !0,
            projection: re("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.f = m(b.culture) ? b.culture : "en-us";
        this.e = m(b.maxZoom) ? b.maxZoom : -1;
        var c = new et("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/" + b.imagerySet);
        (new My(c, "jsonp")).send({include: "ImageryProviders", uriScheme: "https", key: b.key}, ra(this.i, this))
    }

    w(Zy, Xy);
    var $y = new lf({html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'});
    Zy.prototype.i = function (b) {
        if (200 != b.statusCode || "OK" != b.statusDescription || "ValidCredentials" != b.authenticationResultCode || 1 != b.resourceSets.length || 1 != b.resourceSets[0].resources.length)Dg(this, "error"); else {
            var c = b.brandLogoUri;
            -1 == c.indexOf("https") && (c = c.replace("http", "https"));
            var d = b.resourceSets[0].resources[0], e = -1 == this.e ? d.zoomMax : this.e;
            b = $g(this.g);
            var f = Xg({
                extent: b,
                minZoom: d.zoomMin,
                maxZoom: e,
                tileSize: d.imageWidth == d.imageHeight ? d.imageWidth : [d.imageWidth, d.imageHeight]
            });
            this.tileGrid =
                f;
            var g = this.f;
            this.tileUrlFunction = Vy(f.createTileCoordTransform(), Ty(Ua(d.imageUrlSubdomains, function (b) {
                var c = d.imageUrl.replace("{subdomain}", b).replace("{culture}", g);
                return function (b) {
                    return null === b ? void 0 : c.replace("{quadkey}", df(b))
                }
            })));
            if (d.imageryProviders) {
                var h = ve(re("EPSG:4326"), this.g);
                b = Ua(d.imageryProviders, function (b) {
                    var c = b.attribution, d = {};
                    Sa(b.coverageAreas, function (b) {
                        var c = b.zoomMin, g = Math.min(b.zoomMax, e);
                        b = b.bbox;
                        b = le([b[1], b[0], b[3], b[2]], h);
                        var k, n;
                        for (k = c; k <= g; ++k)n =
                            k.toString(), c = Rg(f, b, k), n in d ? d[n].push(c) : d[n] = [c]
                    });
                    return new lf({html: c, tileRanges: d})
                });
                b.push($y);
                this.d = b
            }
            this.K = c;
            Dg(this, "ready")
        }
    };
    function az(b) {
        up.call(this, {attributions: b.attributions, extent: b.extent, logo: b.logo, projection: b.projection});
        this.p = void 0;
        this.T = m(b.distance) ? b.distance : 20;
        this.l = [];
        this.n = b.source;
        this.n.r("change", az.prototype.aa, this)
    }

    w(az, up);
    az.prototype.U = function () {
        return this.n
    };
    az.prototype.Zb = function (b, c, d) {
        c !== this.p && (this.clear(), this.p = c, this.n.Zb(b, c, d), bz(this), this.Nc(this.l))
    };
    az.prototype.aa = function () {
        this.clear();
        bz(this);
        this.Nc(this.l);
        this.k()
    };
    function bz(b) {
        if (m(b.p)) {
            b.l.length = 0;
            for (var c = Kd(), d = b.T * b.p, e = b.n.Cc(), f = {}, g = 0, h = e.length; g < h; g++) {
                var k = e[g];
                ub(f, ma(k).toString()) || (k = k.Q().M(), Vd(k, c), Od(c, d, c), k = b.n.Oe(c), k = Ta(k, function (b) {
                    b = ma(b).toString();
                    return b in f ? !1 : f[b] = !0
                }), b.l.push(cz(k)))
            }
        }
    }

    function cz(b) {
        for (var c = b.length, d = [0, 0], e = 0; e < c; e++) {
            var f = b[e].Q().M();
            md(d, f)
        }
        c = 1 / c;
        d[0] *= c;
        d[1] *= c;
        d = new X(new E(d));
        d.set("features", b);
        return d
    };
    function dz(b) {
        nn.call(this, {projection: b.projection, resolutions: b.resolutions});
        this.T = m(b.crossOrigin) ? b.crossOrigin : null;
        this.f = m(b.displayDpi) ? b.displayDpi : 96;
        this.e = m(b.params) ? b.params : {};
        var c;
        m(b.url) ? c = vx(b.url, this.e, ra(this.Vl, this)) : c = wx;
        this.H = c;
        this.b = m(b.imageLoadFunction) ? b.imageLoadFunction : tn;
        this.U = m(b.hidpi) ? b.hidpi : !0;
        this.R = m(b.metersPerUnit) ? b.metersPerUnit : 1;
        this.l = m(b.ratio) ? b.ratio : 1;
        this.aa = m(b.useOverlay) ? b.useOverlay : !1;
        this.c = null;
        this.p = 0
    }

    w(dz, nn);
    l = dz.prototype;
    l.Ul = function () {
        return this.e
    };
    l.Bc = function (b, c, d, e) {
        c = on(this, c);
        d = this.U ? d : 1;
        var f = this.c;
        if (null !== f && this.p == this.a && f.resolution == c && f.e == d && Td(f.G(), b))return f;
        1 != this.l && (b = b.slice(), ke(b, this.l));
        e = this.H(b, [ie(b) / c * d, fe(b) / c * d], e);
        m(e) ? (f = new sx(b, c, d, this.d, e, this.T, this.b), x(f, "change", this.i, !1, this)) : f = null;
        this.c = f;
        this.p = this.a;
        return f
    };
    l.Tl = function () {
        return this.b
    };
    l.Xl = function (b) {
        Fb(this.e, b);
        this.k()
    };
    l.Vl = function (b, c, d, e) {
        var f;
        f = this.R;
        var g = ie(d), h = fe(d), k = e[0], n = e[1], p = .0254 / this.f;
        f = n * g > k * h ? g * f / (k * p) : h * f / (n * p);
        d = de(d);
        e = {
            OPERATION: this.aa ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
            VERSION: "2.0.0",
            LOCALE: "en",
            CLIENTAGENT: "ol.source.ImageMapGuide source",
            CLIP: "1",
            SETDISPLAYDPI: this.f,
            SETDISPLAYWIDTH: Math.round(e[0]),
            SETDISPLAYHEIGHT: Math.round(e[1]),
            SETVIEWSCALE: f,
            SETVIEWCENTERX: d[0],
            SETVIEWCENTERY: d[1]
        };
        Fb(e, c);
        return fo(ho([b], e))
    };
    l.Wl = function (b) {
        this.c = null;
        this.b = b;
        this.k()
    };
    function ez(b) {
        var c = m(b.attributions) ? b.attributions : null, d = b.imageExtent, e, f;
        m(b.imageSize) && (e = fe(d) / b.imageSize[1], f = [e]);
        var g = m(b.crossOrigin) ? b.crossOrigin : null, h = m(b.imageLoadFunction) ? b.imageLoadFunction : tn;
        nn.call(this, {attributions: c, logo: b.logo, projection: re(b.projection), resolutions: f});
        this.b = new sx(d, e, 1, c, b.url, g, h);
        x(this.b, "change", this.i, !1, this)
    }

    w(ez, nn);
    ez.prototype.Bc = function (b) {
        return he(b, this.b.G()) ? this.b : null
    };
    function fz(b) {
        b = m(b) ? b : {};
        nn.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions
        });
        this.U = m(b.crossOrigin) ? b.crossOrigin : null;
        this.e = b.url;
        this.l = m(b.imageLoadFunction) ? b.imageLoadFunction : tn;
        this.c = b.params;
        this.f = !0;
        gz(this);
        this.T = b.serverType;
        this.aa = m(b.hidpi) ? b.hidpi : !0;
        this.b = null;
        this.p = [0, 0];
        this.R = 0;
        this.H = m(b.ratio) ? b.ratio : 1.5
    }

    w(fz, nn);
    var hz = [101, 101];
    l = fz.prototype;
    l.cm = function (b, c, d, e) {
        if (m(this.e)) {
            var f = ee(b, c, 0, hz), g = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.c.LAYERS
            };
            Fb(g, this.c, e);
            e = Math.floor((f[3] - b[1]) / c);
            g[this.f ? "I" : "X"] = Math.floor((b[0] - f[0]) / c);
            g[this.f ? "J" : "Y"] = e;
            return iz(this, f, hz, 1, re(d), g)
        }
    };
    l.em = function () {
        return this.c
    };
    l.Bc = function (b, c, d, e) {
        if (!m(this.e))return null;
        c = on(this, c);
        1 == d || this.aa && m(this.T) || (d = 1);
        var f = this.b;
        if (null !== f && this.R == this.a && f.resolution == c && f.e == d && Td(f.G(), b))return f;
        f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
        Fb(f, this.c);
        b = b.slice();
        var g = (b[0] + b[2]) / 2, h = (b[1] + b[3]) / 2;
        if (1 != this.H) {
            var k = this.H * ie(b) / 2, n = this.H * fe(b) / 2;
            b[0] = g - k;
            b[1] = h - n;
            b[2] = g + k;
            b[3] = h + n
        }
        var k = c / d, n = Math.ceil(ie(b) / k), p = Math.ceil(fe(b) / k);
        b[0] = g - k * n / 2;
        b[2] = g + k * n / 2;
        b[1] = h -
            k * p / 2;
        b[3] = h + k * p / 2;
        this.p[0] = n;
        this.p[1] = p;
        e = iz(this, b, this.p, d, e, f);
        this.b = new sx(b, c, d, this.d, e, this.U, this.l);
        this.R = this.a;
        x(this.b, "change", this.i, !1, this);
        return this.b
    };
    l.dm = function () {
        return this.l
    };
    function iz(b, c, d, e, f, g) {
        g[b.f ? "CRS" : "SRS"] = f.a;
        "STYLES"in b.c || (g.STYLES = new String(""));
        if (1 != e)switch (b.T) {
            case "geoserver":
                e = 90 * e + .5 | 0;
                g.FORMAT_OPTIONS = m(g.FORMAT_OPTIONS) ? g.FORMAT_OPTIONS + (";dpi:" + e) : "dpi:" + e;
                break;
            case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;
            case "carmentaserver":
            case "qgis":
                g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.d;
        var h;
        b.f && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return fo(ho([b.e], g))
    }

    l.fm = function () {
        return this.e
    };
    l.gm = function (b) {
        this.b = null;
        this.l = b;
        this.k()
    };
    l.hm = function (b) {
        b != this.e && (this.e = b, this.b = null, this.k())
    };
    l.im = function (b) {
        Fb(this.c, b);
        gz(this);
        this.b = null;
        this.k()
    };
    function gz(b) {
        b.f = 0 <= Na(Ab(b.c, "VERSION", "1.3.0"), "1.3")
    };
    function jz(b) {
        var c = m(b.projection) ? b.projection : "EPSG:3857", d = Xg({
            extent: $g(c),
            maxZoom: b.maxZoom,
            tileSize: b.tileSize
        });
        Xy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: c,
            tileGrid: d,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: Uy,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        this.n = d.createTileCoordTransform();
        m(b.tileUrlFunction) ? this.pa(b.tileUrlFunction) : m(b.urls) ? this.pa(Sy(b.urls)) : m(b.url) && this.e(b.url)
    }

    w(jz, Xy);
    jz.prototype.pa = function (b) {
        jz.S.pa.call(this, Vy(this.n, b))
    };
    jz.prototype.e = function (b) {
        this.pa(Sy(Wy(b)))
    };
    function kz(b) {
        b = m(b) ? b : {};
        var c;
        m(b.attributions) ? c = b.attributions : c = [lz];
        jz.call(this, {
            attributions: c,
            crossOrigin: m(b.crossOrigin) ? b.crossOrigin : "anonymous",
            opaque: !0,
            maxZoom: m(b.maxZoom) ? b.maxZoom : 19,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            wrapX: b.wrapX
        })
    }

    w(kz, jz);
    var lz = new lf({html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'});

    function mz(b) {
        b = m(b) ? b : {};
        var c = nz[b.layer];
        this.f = b.layer;
        jz.call(this, {
            attributions: c.attributions,
            crossOrigin: "anonymous",
            logo: "https://developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            opaque: !0,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + this.f + "/{z}/{x}/{y}.jpg"
        })
    }

    w(mz, jz);
    var oz = new lf({html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'}), nz = {
        osm: {
            maxZoom: 19,
            attributions: [oz, lz]
        },
        sat: {
            maxZoom: 18,
            attributions: [oz, new lf({html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"})]
        },
        hyb: {maxZoom: 18, attributions: [oz, lz]}
    };
    mz.prototype.i = function () {
        return this.f
    };
    var pz = {
        terrain: {Ta: "jpg", opaque: !0},
        "terrain-background": {Ta: "jpg", opaque: !0},
        "terrain-labels": {Ta: "png", opaque: !1},
        "terrain-lines": {Ta: "png", opaque: !1},
        "toner-background": {Ta: "png", opaque: !0},
        toner: {Ta: "png", opaque: !0},
        "toner-hybrid": {Ta: "png", opaque: !1},
        "toner-labels": {Ta: "png", opaque: !1},
        "toner-lines": {Ta: "png", opaque: !1},
        "toner-lite": {Ta: "png", opaque: !0},
        watercolor: {Ta: "jpg", opaque: !0}
    }, qz = {
        terrain: {minZoom: 4, maxZoom: 18},
        toner: {minZoom: 0, maxZoom: 20},
        watercolor: {minZoom: 3, maxZoom: 16}
    };

    function rz(b) {
        var c = b.layer.indexOf("-"), d = pz[b.layer];
        jz.call(this, {
            attributions: sz,
            crossOrigin: "anonymous",
            maxZoom: qz[-1 == c ? b.layer : b.layer.slice(0, c)].maxZoom,
            opaque: d.opaque,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" + b.layer + "/{z}/{x}/{y}." + d.Ta
        })
    }

    w(rz, jz);
    var sz = [new lf({html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'}), lz];

    function tz(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        Xy.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: ra(this.mm, this),
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = Wy(b.url));
        this.f = null != d ? d : [];
        this.e = c;
        this.i = Kd()
    }

    w(tz, Xy);
    l = tz.prototype;
    l.jm = function () {
        return this.e
    };
    l.Vb = function (b, c, d) {
        b = tz.S.Vb.call(this, b, c, d);
        return 1 == c ? b : kd(b, c, this.c)
    };
    l.km = function () {
        return this.f
    };
    l.lm = function (b) {
        b = m(b) ? Wy(b) : null;
        this.Mg(b)
    };
    l.Mg = function (b) {
        this.f = null != b ? b : [];
        this.k()
    };
    l.mm = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = ch(this, d));
        if (!(e.a.length <= b[0])) {
            var f = Qg(e, b, this.i), g = ld(e.ra(b[0]), this.c);
            1 != c && (g = kd(g, c, this.c));
            e = {F: "image", FORMAT: "PNG32", TRANSPARENT: !0};
            Fb(e, this.e);
            var h = this.f;
            0 == h.length ? b = void 0 : (d = d.a.split(":").pop(), e.SIZE = g[0] + "," + g[1], e.BBOX = f.join(","), e.BBOXSR = d, e.IMAGESR = d, e.DPI = 90 * c, b = 1 == h.length ? h[0] : h[Wb((b[1] << b[0]) + b[2], h.length)], Aa(b, "/") || (b += "/"), Aa(b, "MapServer/") ? b += "export" : Aa(b, "ImageServer/") && (b += "exportImage"), b = fo(ho([b],
                e)));
            return b
        }
    };
    l.nm = function (b) {
        Fb(this.e, b);
        this.k()
    };
    function uz(b, c) {
        zg.call(this, b, 2);
        this.c = ld(c.ra(b[0]));
        this.b = {}
    }

    w(uz, zg);
    uz.prototype.Ma = function (b) {
        b = m(b) ? ma(b) : -1;
        if (b in this.b)return this.b[b];
        var c = this.c, d = di(c[0], c[1]);
        d.strokeStyle = "black";
        d.strokeRect(.5, .5, c[0] + .5, c[1] + .5);
        d.fillStyle = "black";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.font = "24px sans-serif";
        d.fillText(ef(this.a), c[0] / 2, c[1] / 2);
        return this.b[b] = d.canvas
    };
    function vz(b) {
        ah.call(this, {opaque: !1, projection: b.projection, tileGrid: b.tileGrid})
    }

    w(vz, ah);
    vz.prototype.Ub = function (b, c, d) {
        var e = this.cb(b, c, d);
        if (wg(this.b, e))return this.b.get(e);
        b = new uz([b, c, d], this.tileGrid);
        this.b.set(e, b);
        return b
    };
    function wz(b) {
        Xy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            projection: re("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction,
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        (new My(b.url)).send(void 0, ra(this.e, this))
    }

    w(wz, Xy);
    wz.prototype.e = function (b) {
        var c = re("EPSG:4326"), d = this.g, e;
        m(b.bounds) && (e = le(b.bounds, ve(c, d)));
        var f = b.minzoom || 0, g = b.maxzoom || 22;
        this.tileGrid = d = Xg({extent: $g(d), maxZoom: g, minZoom: f});
        this.tileUrlFunction = Vy(d.createTileCoordTransform(), Sy(b.tiles));
        if (m(b.attribution) && null === this.d) {
            c = m(e) ? e : c.G();
            e = {};
            for (var h; f <= g; ++f)h = f.toString(), e[h] = [Rg(d, c, f)];
            this.d = [new lf({html: b.attribution, tileRanges: e})]
        }
        Dg(this, "ready")
    };
    function xz(b) {
        ah.call(this, {projection: re("EPSG:3857"), state: "loading"});
        this.i = m(b.preemptive) ? b.preemptive : !0;
        this.e = Uy;
        this.f = void 0;
        (new My(b.url)).send(void 0, ra(this.pm, this))
    }

    w(xz, ah);
    l = xz.prototype;
    l.vj = function () {
        return this.f
    };
    l.Gi = function (b, c, d, e, f) {
        null === this.tileGrid ? !0 === f ? yh(function () {
            d.call(e, null)
        }) : d.call(e, null) : (c = this.tileGrid.wc(b, c), yz(this.Ub(c[0], c[1], c[2], 1, this.g), b, d, e, f))
    };
    l.pm = function (b) {
        var c = re("EPSG:4326"), d = this.g, e;
        m(b.bounds) && (e = le(b.bounds, ve(c, d)));
        var f = b.minzoom || 0, g = b.maxzoom || 22;
        this.tileGrid = d = Xg({extent: $g(d), maxZoom: g, minZoom: f});
        this.f = b.template;
        var h = b.grids;
        if (null != h) {
            this.e = Vy(d.createTileCoordTransform(), Sy(h));
            if (m(b.attribution)) {
                c = m(e) ? e : c.G();
                for (e = {}; f <= g; ++f)h = f.toString(), e[h] = [Rg(d, c, f)];
                this.d = [new lf({html: b.attribution, tileRanges: e})]
            }
            Dg(this, "ready")
        } else Dg(this, "error")
    };
    l.Ub = function (b, c, d, e, f) {
        var g = this.cb(b, c, d);
        if (wg(this.b, g))return this.b.get(g);
        b = [b, c, d];
        e = this.e(b, e, f);
        e = new zz(b, m(e) ? 0 : 4, m(e) ? e : "", Qg(this.tileGrid, b), this.i);
        this.b.set(g, e);
        return e
    };
    l.zf = function (b, c, d) {
        b = this.cb(b, c, d);
        wg(this.b, b) && this.b.get(b)
    };
    function zz(b, c, d, e, f) {
        zg.call(this, b, c);
        this.f = d;
        this.b = e;
        this.i = f;
        this.d = this.e = this.c = null
    }

    w(zz, zg);
    l = zz.prototype;
    l.Ma = function () {
        return null
    };
    function Az(b, c) {
        if (null === b.c || null === b.e || null == b.d)return null;
        var d = b.c[Math.floor((1 - (c[1] - b.b[1]) / (b.b[3] - b.b[1])) * b.c.length)];
        if (!ia(d))return null;
        d = d.charCodeAt(Math.floor((c[0] - b.b[0]) / (b.b[2] - b.b[0]) * d.length));
        93 <= d && d--;
        35 <= d && d--;
        d = b.e[d - 32];
        return null != d ? b.d[d] : null
    }

    function yz(b, c, d, e, f) {
        0 == b.state && !0 === f ? (Uc(b, "change", function () {
            d.call(e, Az(this, c))
        }, !1, b), Bz(b)) : !0 === f ? yh(function () {
            d.call(e, Az(this, c))
        }, b) : d.call(e, Az(b, c))
    }

    l.hb = function () {
        return this.f
    };
    l.Kj = function () {
        this.state = 3;
        Ag(this)
    };
    l.Wj = function (b) {
        this.c = b.grid;
        this.e = b.keys;
        this.d = b.data;
        this.state = 4;
        Ag(this)
    };
    function Bz(b) {
        0 == b.state && (b.state = 1, (new My(b.f)).send(void 0, ra(b.Wj, b), ra(b.Kj, b)))
    }

    l.load = function () {
        this.i && Bz(this)
    };
    function Cz(b) {
        up.call(this, {attributions: b.attributions, logo: b.logo, projection: void 0, state: "ready"});
        this.T = b.format;
        this.l = b.tileGrid;
        this.p = Uy;
        this.U = this.l.createTileCoordTransform();
        this.n = {};
        m(b.tileUrlFunction) ? (this.p = b.tileUrlFunction, this.k()) : m(b.urls) ? (this.p = Sy(b.urls), this.k()) : m(b.url) && (this.p = Sy(Wy(b.url)), this.k())
    }

    w(Cz, up);
    l = Cz.prototype;
    l.clear = function () {
        yb(this.n)
    };
    function Dz(b, c, d, e) {
        var f = b.n;
        b = b.l.wc(c, d);
        f = f[b[0] + "/" + b[1] + "/" + b[2]];
        if (m(f))for (b = 0, d = f.length; b < d; ++b) {
            var g = f[b];
            if (g.Q().Fe(c) && e.call(void 0, g))break
        }
    }

    l.Bb = function (b, c, d, e) {
        var f = this.l, g = this.n;
        c = Wg(f, c);
        b = Rg(f, b, c);
        for (var h, f = b.b; f <= b.d; ++f)for (h = b.a; h <= b.c; ++h) {
            var k = g[c + "/" + f + "/" + h];
            if (m(k)) {
                var n, p;
                n = 0;
                for (p = k.length; n < p; ++n) {
                    var q = d.call(e, k[n]);
                    if (q)return q
                }
            }
        }
    };
    l.Cc = function () {
        var b = this.n, c = [], d;
        for (d in b)db(c, b[d]);
        return c
    };
    l.Vi = function (b, c) {
        var d = [];
        Dz(this, b, c, function (b) {
            d.push(b)
        });
        return d
    };
    l.Zb = function (b, c, d) {
        function e(b, c) {
            k[b] = c;
            this.k()
        }

        var f = this.U, g = this.l, h = this.p, k = this.n, n = Wg(g, c), g = Rg(g, b, n), p = [n, 0, 0], q, r;
        for (q = g.b; q <= g.d; ++q)for (r = g.a; r <= g.c; ++r) {
            var t = n + "/" + q + "/" + r;
            if (!(t in k)) {
                p[0] = n;
                p[1] = q;
                p[2] = r;
                f(p, d, p);
                var u = h(p, 1, d);
                m(u) && (k[t] = [], lp(u, this.T, ta(e, t)).call(this, b, c, d))
            }
        }
    };
    function Ez(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        Xy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            opaque: !Ab(c, "TRANSPARENT", !0),
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: ra(this.um, this),
            wrapX: m(b.wrapX) ? b.wrapX : !0
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = Wy(b.url));
        this.f = null != d ? d : [];
        this.n = m(b.gutter) ? b.gutter : 0;
        this.e = c;
        this.i = !0;
        this.l = b.serverType;
        this.H = m(b.hidpi) ? b.hidpi : !0;
        this.p = "";
        Fz(this);
        this.R = Kd();
        Gz(this)
    }

    w(Ez, Xy);
    l = Ez.prototype;
    l.qm = function (b, c, d, e) {
        d = re(d);
        var f = this.tileGrid;
        null === f && (f = ch(this, d));
        c = f.wc(b, c);
        if (!(f.a.length <= c[0])) {
            var g = f.oa(c[0]), h = Qg(f, c, this.R), f = ld(f.ra(c[0]), this.c), k = this.n;
            0 !== k && (f = jd(f, k, this.c), h = Od(h, g * k, h));
            k = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: this.e.LAYERS
            };
            Fb(k, this.e, e);
            e = Math.floor((h[3] - b[1]) / g);
            k[this.i ? "I" : "X"] = Math.floor((b[0] - h[0]) / g);
            k[this.i ? "J" : "Y"] = e;
            return Hz(this, c, f, h, 1, d, k)
        }
    };
    l.Bd = function () {
        return this.n
    };
    l.cb = function (b, c, d) {
        return this.p + Ez.S.cb.call(this, b, c, d)
    };
    l.rm = function () {
        return this.e
    };
    function Hz(b, c, d, e, f, g, h) {
        var k = b.f;
        if (0 != k.length) {
            h.WIDTH = d[0];
            h.HEIGHT = d[1];
            h[b.i ? "CRS" : "SRS"] = g.a;
            "STYLES"in b.e || (h.STYLES = new String(""));
            if (1 != f)switch (b.l) {
                case "geoserver":
                    d = 90 * f + .5 | 0;
                    h.FORMAT_OPTIONS = m(h.FORMAT_OPTIONS) ? h.FORMAT_OPTIONS + (";dpi:" + d) : "dpi:" + d;
                    break;
                case "mapserver":
                    h.MAP_RESOLUTION = 90 * f;
                    break;
                case "carmentaserver":
                case "qgis":
                    h.DPI = 90 * f
            }
            g = g.d;
            b.i && "ne" == g.substr(0, 2) && (b = e[0], e[0] = e[1], e[1] = b, b = e[2], e[2] = e[3], e[3] = b);
            h.BBOX = e.join(",");
            return fo(ho([1 == k.length ? k[0] : k[Wb((c[1] <<
                c[0]) + c[2], k.length)]], h))
        }
    }

    l.Vb = function (b, c, d) {
        b = Ez.S.Vb.call(this, b, c, d);
        return 1 != c && this.H && m(this.l) ? kd(b, c, this.c) : b
    };
    l.sm = function () {
        return this.f
    };
    function Fz(b) {
        var c = 0, d = [], e, f;
        e = 0;
        for (f = b.f.length; e < f; ++e)d[c++] = b.f[e];
        for (var g in b.e)d[c++] = g + "-" + b.e[g];
        b.p = d.join("#")
    }

    l.tm = function (b) {
        b = m(b) ? Wy(b) : null;
        this.Ng(b)
    };
    l.Ng = function (b) {
        this.f = null != b ? b : [];
        Fz(this);
        this.k()
    };
    l.um = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = ch(this, d));
        if (!(e.a.length <= b[0])) {
            1 == c || this.H && m(this.l) || (c = 1);
            var f = e.oa(b[0]), g = Qg(e, b, this.R), e = ld(e.ra(b[0]), this.c), h = this.n;
            0 !== h && (e = jd(e, h, this.c), g = Od(g, f * h, g));
            1 != c && (e = kd(e, c, this.c));
            f = {SERVICE: "WMS", VERSION: "1.3.0", REQUEST: "GetMap", FORMAT: "image/png", TRANSPARENT: !0};
            Fb(f, this.e);
            return Hz(this, b, e, g, c, d, f)
        }
    };
    l.vm = function (b) {
        Fb(this.e, b);
        Fz(this);
        Gz(this);
        this.k()
    };
    function Gz(b) {
        b.i = 0 <= Na(Ab(b.e, "VERSION", "1.3.0"), "1.3")
    };
    function Iz(b) {
        this.f = b.matrixIds;
        Mg.call(this, {
            extent: b.extent,
            origin: b.origin,
            origins: b.origins,
            resolutions: b.resolutions,
            tileSize: b.tileSize,
            tileSizes: b.tileSizes,
            sizes: b.sizes
        })
    }

    w(Iz, Mg);
    Iz.prototype.q = function () {
        return this.f
    };
    function Jz(b, c) {
        var d = [], e = [], f = [], g = [], h = [], k;
        k = re(b.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var n = k.Ed(), p = "ne" == k.d.substr(0, 2);
        gb(b.TileMatrix, function (b, c) {
            return c.ScaleDenominator - b.ScaleDenominator
        });
        Sa(b.TileMatrix, function (b) {
            e.push(b.Identifier);
            var c = 2.8E-4 * b.ScaleDenominator / n, k = b.TileWidth, u = b.TileHeight, A = b.MatrixHeight;
            p ? f.push([b.TopLeftCorner[1], b.TopLeftCorner[0]]) : f.push(b.TopLeftCorner);
            d.push(c);
            g.push(k == u ? k : [k, u]);
            h.push([b.MatrixWidth, -A])
        });
        return new Iz({
            extent: c,
            origins: f, resolutions: d, matrixIds: e, tileSizes: g, sizes: h
        })
    };
    function Kz(b) {
        function c(b) {
            b = "KVP" == e ? fo(ho([b], g)) : b.replace(/\{(\w+?)\}/g, function (b, c) {
                return c.toLowerCase()in g ? g[c.toLowerCase()] : b
            });
            return function (c) {
                if (null !== c) {
                    var d = {TileMatrix: f.f[c[0]], TileCol: c[1], TileRow: c[2]};
                    Fb(d, h);
                    c = b;
                    return c = "KVP" == e ? fo(ho([c], d)) : c.replace(/\{(\w+?)\}/g, function (b, c) {
                        return d[c]
                    })
                }
            }
        }

        this.R = m(b.version) ? b.version : "1.0.0";
        this.l = m(b.format) ? b.format : "image/jpeg";
        this.e = m(b.dimensions) ? b.dimensions : {};
        this.n = "";
        Lz(this);
        this.p = b.layer;
        this.i = b.matrixSet;
        this.H =
            b.style;
        var d = b.urls;
        !m(d) && m(b.url) && (d = Wy(b.url));
        this.f = null != d ? d : [];
        var e = this.T = m(b.requestEncoding) ? b.requestEncoding : "KVP", f = b.tileGrid, g = {
            layer: this.p,
            style: this.H,
            tilematrixset: this.i
        };
        "KVP" == e && Fb(g, {Service: "WMTS", Request: "GetTile", Version: this.R, Format: this.l});
        var h = this.e, d = 0 < this.f.length ? Ty(Ua(this.f, c)) : Uy, d = Vy(Zg(f), d);
        Xy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: b.projection,
            tileClass: b.tileClass,
            tileGrid: f,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: d,
            wrapX: m(b.wrapX) ? b.wrapX : !1
        })
    }

    w(Kz, Xy);
    l = Kz.prototype;
    l.Ti = function () {
        return this.e
    };
    l.Xi = function () {
        return this.l
    };
    l.cb = function (b, c, d) {
        return this.n + Kz.S.cb.call(this, b, c, d)
    };
    l.wm = function () {
        return this.p
    };
    l.ij = function () {
        return this.i
    };
    l.tj = function () {
        return this.T
    };
    l.xm = function () {
        return this.H
    };
    l.ym = function () {
        return this.f
    };
    l.zj = function () {
        return this.R
    };
    function Lz(b) {
        var c = 0, d = [], e;
        for (e in b.e)d[c++] = e + "-" + b.e[e];
        b.n = d.join("/")
    }

    l.vo = function (b) {
        Fb(this.e, b);
        Lz(this);
        this.k()
    };
    function Mz(b) {
        var c = m(b) ? b : c;
        Mg.call(this, {
            createTileCoordTransform: function (b) {
                b = m(b) ? b : {};
                var c = this.minZoom, f = this.maxZoom, g = null;
                if (m(b.extent)) {
                    var g = Array(f + 1), h;
                    for (h = 0; h <= f; ++h)g[h] = h < c ? null : Rg(this, b.extent, h)
                }
                return function (b, d, h) {
                    d = b[0];
                    if (d < c || f < d)return null;
                    var q = Math.pow(2, d), r = b[1];
                    if (0 > r || q <= r)return null;
                    b = b[2];
                    return b < -q || -1 < b || null !== g && !gf(g[d], r, -b - 1) ? null : bf(d, r, -b - 1, h)
                }
            }, origin: [0, 0], resolutions: c.resolutions
        })
    }

    w(Mz, Mg);
    function Nz(b) {
        b = m(b) ? b : {};
        var c = b.size, d = c[0], e = c[1], f = [], g = 256;
        switch (m(b.tierSizeCalculation) ? b.tierSizeCalculation : "default") {
            case "default":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
                break;
            case "truncated":
                for (; d > g || e > g;)f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1
        }
        f.push([1, 1]);
        f.reverse();
        for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++)g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
        g.reverse();
        var g = new Mz({resolutions: g}), k = b.url, c = Vy(g.createTileCoordTransform({
            extent: [0,
                0, c[0], c[1]]
        }), function (b) {
            if (null !== b) {
                var c = b[0], d = b[1];
                b = b[2];
                return k + "TileGroup" + ((d + b * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + b + ".jpg"
            }
        });
        Xy.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            tileClass: Oz,
            tileGrid: g,
            tileUrlFunction: c
        })
    }

    w(Nz, Xy);
    function Oz(b, c, d, e, f) {
        tx.call(this, b, c, d, e, f);
        this.d = {}
    }

    w(Oz, tx);
    Oz.prototype.Ma = function (b) {
        var c = m(b) ? ma(b).toString() : "";
        if (c in this.d)return this.d[c];
        b = Oz.S.Ma.call(this, b);
        if (2 == this.state) {
            if (256 == b.width && 256 == b.height)return this.d[c] = b;
            var d = di(256, 256);
            d.drawImage(b, 0, 0);
            return this.d[c] = d.canvas
        }
        return b
    };
    function Pz(b) {
        b = m(b) ? b : {};
        this.b = m(b.initialSize) ? b.initialSize : 256;
        this.c = m(b.maxSize) ? b.maxSize : m(va) ? va : 2048;
        this.a = m(b.space) ? b.space : 1;
        this.e = [new Qz(this.b, this.a)];
        this.d = this.b;
        this.g = [new Qz(this.d, this.a)]
    }

    Pz.prototype.add = function (b, c, d, e, f, g) {
        if (c + this.a > this.c || d + this.a > this.c)return null;
        e = Rz(this, !1, b, c, d, e, g);
        if (null === e)return null;
        b = Rz(this, !0, b, c, d, m(f) ? f : Hg, g);
        return {offsetX: e.offsetX, offsetY: e.offsetY, image: e.image, kg: b.image}
    };
    function Rz(b, c, d, e, f, g, h) {
        var k = c ? b.g : b.e, n, p, q;
        p = 0;
        for (q = k.length; p < q; ++p) {
            n = k[p];
            n = n.add(d, e, f, g, h);
            if (null !== n)return n;
            null === n && p === q - 1 && (c ? (n = Math.min(2 * b.d, b.c), b.d = n) : (n = Math.min(2 * b.b, b.c), b.b = n), n = new Qz(n, b.a), k.push(n), ++q)
        }
    }

    function Qz(b, c) {
        this.a = c;
        this.b = [{x: 0, y: 0, width: b, height: b}];
        this.d = {};
        this.c = Lf("CANVAS");
        this.c.width = b;
        this.c.height = b;
        this.e = this.c.getContext("2d")
    }

    Qz.prototype.get = function (b) {
        return Ab(this.d, b, null)
    };
    Qz.prototype.add = function (b, c, d, e, f) {
        var g, h, k;
        h = 0;
        for (k = this.b.length; h < k; ++h)if (g = this.b[h], g.width >= c + this.a && g.height >= d + this.a)return k = {
            offsetX: g.x + this.a,
            offsetY: g.y + this.a,
            image: this.c
        }, this.d[b] = k, e.call(f, this.e, g.x + this.a, g.y + this.a), b = h, c = c + this.a, d = d + this.a, f = e = void 0, g.width - c > g.height - d ? (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: g.height
        }, f = {x: g.x, y: g.y + d, width: c, height: g.height - d}, Sz(this, b, e, f)) : (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: d
        }, f = {
            x: g.x, y: g.y + d, width: g.width, height: g.height -
            d
        }, Sz(this, b, e, f)), k;
        return null
    };
    function Sz(b, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        b.b.splice.apply(b.b, c)
    };
    function Tz(b) {
        this.o = this.d = this.e = null;
        this.i = m(b.fill) ? b.fill : null;
        this.H = [0, 0];
        this.a = b.points;
        this.c = m(b.radius) ? b.radius : b.radius1;
        this.g = m(b.radius2) ? b.radius2 : this.c;
        this.f = m(b.angle) ? b.angle : 0;
        this.b = m(b.stroke) ? b.stroke : null;
        this.J = this.K = this.V = null;
        var c = b.atlasManager, d = "", e = "", f = 0, g = null, h, k = 0;
        null !== this.b && (h = uf(this.b.a), k = this.b.b, m(k) || (k = 1), g = this.b.c, mi || (g = null), e = this.b.e, m(e) || (e = "round"), d = this.b.d, m(d) || (d = "round"), f = this.b.g, m(f) || (f = 10));
        var n = 2 * (this.c + k) + 1, d = {
            strokeStyle: h,
            ld: k, size: n, lineCap: d, lineDash: g, lineJoin: e, miterLimit: f
        };
        if (m(c)) {
            var n = Math.round(n), e = null === this.i, p;
            e && (p = ra(this.Sg, this, d));
            f = this.sb();
            p = c.add(f, n, n, ra(this.Tg, this, d), p);
            this.d = p.image;
            this.H = [p.offsetX, p.offsetY];
            c = p.image.width;
            this.o = e ? p.kg : this.d
        } else this.d = Lf("CANVAS"), this.d.height = n, this.d.width = n, c = n = this.d.width, p = this.d.getContext("2d"), this.Tg(d, p, 0, 0), null === this.i ? (p = this.o = Lf("CANVAS"), p.height = d.size, p.width = d.size, p = p.getContext("2d"), this.Sg(d, p, 0, 0)) : this.o = this.d;
        this.V =
            [n / 2, n / 2];
        this.K = [n, n];
        this.J = [c, c];
        Gj.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }

    w(Tz, Gj);
    l = Tz.prototype;
    l.rb = function () {
        return this.V
    };
    l.Dm = function () {
        return this.f
    };
    l.Em = function () {
        return this.i
    };
    l.de = function () {
        return this.o
    };
    l.Lb = function () {
        return this.d
    };
    l.Cd = function () {
        return this.J
    };
    l.fd = function () {
        return 2
    };
    l.wb = function () {
        return this.H
    };
    l.Fm = function () {
        return this.a
    };
    l.Gm = function () {
        return this.c
    };
    l.sj = function () {
        return this.g
    };
    l.Ya = function () {
        return this.K
    };
    l.Hm = function () {
        return this.b
    };
    l.Ye = ca;
    l.load = ca;
    l.yf = ca;
    l.Tg = function (b, c, d, e) {
        var f;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.g !== this.c && (this.a *= 2);
        for (d = 0; d <= this.a; d++)e = 2 * d * Math.PI / this.a - Math.PI / 2 + this.f, f = 0 === d % 2 ? this.c : this.g, c.lineTo(b.size / 2 + f * Math.cos(e), b.size / 2 + f * Math.sin(e));
        null !== this.i && (c.fillStyle = uf(this.i.a), c.fill());
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ld, null === b.lineDash || c.setLineDash(b.lineDash), c.lineCap = b.lineCap, c.lineJoin = b.lineJoin, c.miterLimit = b.miterLimit, c.stroke());
        c.closePath()
    };
    l.Sg = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.g !== this.c && (this.a *= 2);
        var f;
        for (d = 0; d <= this.a; d++)f = 2 * d * Math.PI / this.a - Math.PI / 2 + this.f, e = 0 === d % 2 ? this.c : this.g, c.lineTo(b.size / 2 + e * Math.cos(f), b.size / 2 + e * Math.sin(f));
        c.fillStyle = Al;
        c.fill();
        null !== this.b && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.ld, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.sb = function () {
        var b = null === this.b ? "-" : this.b.sb(), c = null === this.i ? "-" : this.i.sb();
        if (null === this.e || b != this.e[1] || c != this.e[2] || this.c != this.e[3] || this.g != this.e[4] || this.f != this.e[5] || this.a != this.e[6])this.e = ["r" + b + c + (m(this.c) ? this.c.toString() : "-") + (m(this.g) ? this.g.toString() : "-") + (m(this.f) ? this.f.toString() : "-") + (m(this.a) ? this.a.toString() : "-"), b, c, this.c, this.g, this.f, this.a];
        return this.e[0]
    };
    v("ol.animation.bounce", function (b) {
        var c = b.resolution, d = m(b.start) ? b.start : ua(), e = m(b.duration) ? b.duration : 1E3, f = m(b.easing) ? b.easing : Ye;
        return function (b, h) {
            if (h.time < d)return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = f((h.time - d) / e), n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }, OPENLAYERS);
    v("ol.animation.pan", Ze, OPENLAYERS);
    v("ol.animation.rotate", $e, OPENLAYERS);
    v("ol.animation.zoom", af, OPENLAYERS);
    v("ol.Attribution", lf, OPENLAYERS);
    lf.prototype.getHTML = lf.prototype.c;
    mf.prototype.element = mf.prototype.element;
    v("ol.Collection", nf, OPENLAYERS);
    nf.prototype.clear = nf.prototype.clear;
    nf.prototype.extend = nf.prototype.Ze;
    nf.prototype.forEach = nf.prototype.forEach;
    nf.prototype.getArray = nf.prototype.Hk;
    nf.prototype.item = nf.prototype.item;
    nf.prototype.getLength = nf.prototype.Jb;
    nf.prototype.insertAt = nf.prototype.Pd;
    nf.prototype.pop = nf.prototype.pop;
    nf.prototype.push = nf.prototype.push;
    nf.prototype.remove = nf.prototype.remove;
    nf.prototype.removeAt = nf.prototype.tf;
    nf.prototype.setAt = nf.prototype.Vn;
    v("ol.coordinate.add", md, OPENLAYERS);
    v("ol.coordinate.createStringXY", function (b) {
        return function (c) {
            return ud(c, b)
        }
    }, OPENLAYERS);
    v("ol.coordinate.format", pd, OPENLAYERS);
    v("ol.coordinate.rotate", rd, OPENLAYERS);
    v("ol.coordinate.toStringHDMS", function (b) {
        return m(b) ? od(b[1], "NS") + " " + od(b[0], "EW") : ""
    }, OPENLAYERS);
    v("ol.coordinate.toStringXY", ud, OPENLAYERS);
    v("ol.DeviceOrientation", xr, OPENLAYERS);
    xr.prototype.getAlpha = xr.prototype.Mi;
    xr.prototype.getBeta = xr.prototype.Pi;
    xr.prototype.getGamma = xr.prototype.Yi;
    xr.prototype.getHeading = xr.prototype.Ik;
    xr.prototype.getTracking = xr.prototype.qg;
    xr.prototype.setTracking = xr.prototype.$e;
    v("ol.easing.easeIn", function (b) {
        return Math.pow(b, 3)
    }, OPENLAYERS);
    v("ol.easing.easeOut", Ve, OPENLAYERS);
    v("ol.easing.inAndOut", We, OPENLAYERS);
    v("ol.easing.linear", Xe, OPENLAYERS);
    v("ol.easing.upAndDown", Ye, OPENLAYERS);
    v("ol.extent.boundingExtent", Jd, OPENLAYERS);
    v("ol.extent.buffer", Od, OPENLAYERS);
    v("ol.extent.containsCoordinate", Rd, OPENLAYERS);
    v("ol.extent.containsExtent", Td, OPENLAYERS);
    v("ol.extent.containsXY", Sd, OPENLAYERS);
    v("ol.extent.createEmpty", Kd, OPENLAYERS);
    v("ol.extent.equals", Wd, OPENLAYERS);
    v("ol.extent.extend", Xd, OPENLAYERS);
    v("ol.extent.getBottomLeft", $d, OPENLAYERS);
    v("ol.extent.getBottomRight", ae, OPENLAYERS);
    v("ol.extent.getCenter", de, OPENLAYERS);
    v("ol.extent.getHeight", fe, OPENLAYERS);
    v("ol.extent.getIntersection", ge, OPENLAYERS);
    v("ol.extent.getSize", function (b) {
        return [b[2] - b[0], b[3] - b[1]]
    }, OPENLAYERS);
    v("ol.extent.getTopLeft", ce, OPENLAYERS);
    v("ol.extent.getTopRight", be, OPENLAYERS);
    v("ol.extent.getWidth", ie, OPENLAYERS);
    v("ol.extent.intersects", he, OPENLAYERS);
    v("ol.extent.isEmpty", je, OPENLAYERS);
    v("ol.extent.applyTransform", le, OPENLAYERS);
    v("ol.Feature", X, OPENLAYERS);
    X.prototype.clone = X.prototype.clone;
    X.prototype.getGeometry = X.prototype.Q;
    X.prototype.getId = X.prototype.aj;
    X.prototype.getGeometryName = X.prototype.$i;
    X.prototype.getStyle = X.prototype.Qk;
    X.prototype.getStyleFunction = X.prototype.Rk;
    X.prototype.setGeometry = X.prototype.La;
    X.prototype.setStyle = X.prototype.af;
    X.prototype.setId = X.prototype.Pb;
    X.prototype.setGeometryName = X.prototype.Hc;
    v("ol.featureloader.xhr", mp, OPENLAYERS);
    v("ol.FeatureOverlay", yr, OPENLAYERS);
    yr.prototype.addFeature = yr.prototype.rg;
    yr.prototype.getFeatures = yr.prototype.Kk;
    yr.prototype.getMap = yr.prototype.Lk;
    yr.prototype.removeFeature = yr.prototype.Ud;
    yr.prototype.setFeatures = yr.prototype.kd;
    yr.prototype.setMap = yr.prototype.setMap;
    yr.prototype.setStyle = yr.prototype.tg;
    yr.prototype.getStyle = yr.prototype.Mk;
    yr.prototype.getStyleFunction = yr.prototype.Nk;
    v("ol.Geolocation", jx, OPENLAYERS);
    jx.prototype.getAccuracy = jx.prototype.Ki;
    jx.prototype.getAccuracyGeometry = jx.prototype.Li;
    jx.prototype.getAltitude = jx.prototype.Ni;
    jx.prototype.getAltitudeAccuracy = jx.prototype.Oi;
    jx.prototype.getHeading = jx.prototype.Tk;
    jx.prototype.getPosition = jx.prototype.Uk;
    jx.prototype.getProjection = jx.prototype.ug;
    jx.prototype.getSpeed = jx.prototype.uj;
    jx.prototype.getTracking = jx.prototype.vg;
    jx.prototype.getTrackingOptions = jx.prototype.dg;
    jx.prototype.setProjection = jx.prototype.wg;
    jx.prototype.setTracking = jx.prototype.Vd;
    jx.prototype.setTrackingOptions = jx.prototype.Bh;
    v("ol.Graticule", nx, OPENLAYERS);
    nx.prototype.getMap = nx.prototype.Xk;
    nx.prototype.getMeridians = nx.prototype.jj;
    nx.prototype.getParallels = nx.prototype.oj;
    nx.prototype.setMap = nx.prototype.setMap;
    v("ol.has.DEVICE_PIXEL_RATIO", li, OPENLAYERS);
    v("ol.has.CANVAS", ni, OPENLAYERS);
    v("ol.has.DEVICE_ORIENTATION", oi, OPENLAYERS);
    v("ol.has.GEOLOCATION", pi, OPENLAYERS);
    v("ol.has.TOUCH", qi, OPENLAYERS);
    v("ol.has.WEBGL", ki, OPENLAYERS);
    sx.prototype.getImage = sx.prototype.a;
    tx.prototype.getImage = tx.prototype.Ma;
    v("ol.Kinetic", Vj, OPENLAYERS);
    v("ol.loadingstrategy.all", np, OPENLAYERS);
    v("ol.loadingstrategy.bbox", function (b) {
        return [b]
    }, OPENLAYERS);
    v("ol.loadingstrategy.tile", function (b) {
        return function (c, d) {
            var e = Wg(b, d), f = Rg(b, c, e), g = [], e = [e, 0, 0];
            for (e[1] = f.b; e[1] <= f.d; ++e[1])for (e[2] = f.a; e[2] <= f.c; ++e[2])g.push(Qg(b, e));
            return g
        }
    }, OPENLAYERS);
    v("ol.Map", W, OPENLAYERS);
    W.prototype.addControl = W.prototype.ti;
    W.prototype.addInteraction = W.prototype.ui;
    W.prototype.addLayer = W.prototype.Kf;
    W.prototype.addOverlay = W.prototype.Lf;
    W.prototype.beforeRender = W.prototype.Ha;
    W.prototype.forEachFeatureAtPixel = W.prototype.Je;
    W.prototype.forEachLayerAtPixel = W.prototype.al;
    W.prototype.hasFeatureAtPixel = W.prototype.nk;
    W.prototype.getEventCoordinate = W.prototype.Ui;
    W.prototype.getEventPixel = W.prototype.Ad;
    W.prototype.getTarget = W.prototype.bf;
    W.prototype.getTargetElement = W.prototype.ad;
    W.prototype.getCoordinateFromPixel = W.prototype.ka;
    W.prototype.getControls = W.prototype.Si;
    W.prototype.getOverlays = W.prototype.nj;
    W.prototype.getInteractions = W.prototype.bj;
    W.prototype.getLayerGroup = W.prototype.Tb;
    W.prototype.getLayers = W.prototype.xg;
    W.prototype.getPixelFromCoordinate = W.prototype.sa;
    W.prototype.getSize = W.prototype.wa;
    W.prototype.getView = W.prototype.P;
    W.prototype.getViewport = W.prototype.Aj;
    W.prototype.renderSync = W.prototype.Sn;
    W.prototype.render = W.prototype.render;
    W.prototype.removeControl = W.prototype.Mn;
    W.prototype.removeInteraction = W.prototype.Nn;
    W.prototype.removeLayer = W.prototype.On;
    W.prototype.removeOverlay = W.prototype.Pn;
    W.prototype.setLayerGroup = W.prototype.xh;
    W.prototype.setSize = W.prototype.wf;
    W.prototype.setTarget = W.prototype.cl;
    W.prototype.setView = W.prototype.ko;
    W.prototype.updateSize = W.prototype.Jc;
    aj.prototype.originalEvent = aj.prototype.originalEvent;
    aj.prototype.pixel = aj.prototype.pixel;
    aj.prototype.coordinate = aj.prototype.coordinate;
    aj.prototype.dragging = aj.prototype.dragging;
    aj.prototype.preventDefault = aj.prototype.preventDefault;
    aj.prototype.stopPropagation = aj.prototype.gb;
    sg.prototype.map = sg.prototype.map;
    sg.prototype.frameState = sg.prototype.frameState;
    ed.prototype.key = ed.prototype.key;
    ed.prototype.oldValue = ed.prototype.oldValue;
    v("ol.Object", fd, OPENLAYERS);
    fd.prototype.get = fd.prototype.get;
    fd.prototype.getKeys = fd.prototype.C;
    fd.prototype.getProperties = fd.prototype.D;
    fd.prototype.set = fd.prototype.set;
    fd.prototype.setProperties = fd.prototype.t;
    fd.prototype.unset = fd.prototype.I;
    v("ol.Observable", cd, OPENLAYERS);
    v("ol.Observable.unByKey", dd, OPENLAYERS);
    cd.prototype.changed = cd.prototype.k;
    cd.prototype.getRevision = cd.prototype.v;
    cd.prototype.on = cd.prototype.r;
    cd.prototype.once = cd.prototype.A;
    cd.prototype.un = cd.prototype.u;
    cd.prototype.unByKey = cd.prototype.B;
    v("ol.inherits", w, OPENLAYERS);
    v("ol.Overlay", Vq, OPENLAYERS);
    Vq.prototype.getElement = Vq.prototype.Wd;
    Vq.prototype.getMap = Vq.prototype.Xd;
    Vq.prototype.getOffset = Vq.prototype.$f;
    Vq.prototype.getPosition = Vq.prototype.yg;
    Vq.prototype.getPositioning = Vq.prototype.cg;
    Vq.prototype.setElement = Vq.prototype.uh;
    Vq.prototype.setMap = Vq.prototype.setMap;
    Vq.prototype.setOffset = Vq.prototype.zh;
    Vq.prototype.setPosition = Vq.prototype.vf;
    Vq.prototype.setPositioning = Vq.prototype.Ah;
    v("ol.size.toSize", ld, OPENLAYERS);
    zg.prototype.getTileCoord = zg.prototype.g;
    v("ol.View", Ne, OPENLAYERS);
    Ne.prototype.constrainCenter = Ne.prototype.xd;
    Ne.prototype.constrainResolution = Ne.prototype.constrainResolution;
    Ne.prototype.constrainRotation = Ne.prototype.constrainRotation;
    Ne.prototype.getCenter = Ne.prototype.Ba;
    Ne.prototype.calculateExtent = Ne.prototype.Oc;
    Ne.prototype.getProjection = Ne.prototype.dl;
    Ne.prototype.getResolution = Ne.prototype.xa;
    Ne.prototype.getRotation = Ne.prototype.Ca;
    Ne.prototype.getZoom = Ne.prototype.Dj;
    Ne.prototype.fitExtent = Ne.prototype.Ie;
    Ne.prototype.fitGeometry = Ne.prototype.Fi;
    Ne.prototype.centerOn = Ne.prototype.Bi;
    Ne.prototype.rotate = Ne.prototype.rotate;
    Ne.prototype.setCenter = Ne.prototype.Na;
    Ne.prototype.setResolution = Ne.prototype.yb;
    Ne.prototype.setRotation = Ne.prototype.Yd;
    Ne.prototype.setZoom = Ne.prototype.oo;
    v("ol.xml.getAllTextContent", Fo, OPENLAYERS);
    v("ol.xml.parse", Zo, OPENLAYERS);
    v("ol.webgl.Context", $p, OPENLAYERS);
    $p.prototype.getGL = $p.prototype.Ym;
    $p.prototype.getHitDetectionFramebuffer = $p.prototype.Pe;
    $p.prototype.useProgram = $p.prototype.je;
    v("ol.tilegrid.TileGrid", Mg, OPENLAYERS);
    Mg.prototype.createTileCoordTransform = Mg.prototype.createTileCoordTransform;
    Mg.prototype.getMaxZoom = Mg.prototype.Re;
    Mg.prototype.getMinZoom = Mg.prototype.Se;
    Mg.prototype.getOrigin = Mg.prototype.dc;
    Mg.prototype.getResolution = Mg.prototype.oa;
    Mg.prototype.getResolutions = Mg.prototype.jf;
    Mg.prototype.getTileCoordForCoordAndResolution = Mg.prototype.wc;
    Mg.prototype.getTileCoordForCoordAndZ = Mg.prototype.bd;
    Mg.prototype.getTileSize = Mg.prototype.ra;
    v("ol.tilegrid.createXYZ", Xg, OPENLAYERS);
    v("ol.tilegrid.WMTS", Iz, OPENLAYERS);
    Iz.prototype.getMatrixIds = Iz.prototype.q;
    v("ol.tilegrid.WMTS.createFromCapabilitiesMatrixSet", Jz, OPENLAYERS);
    v("ol.tilegrid.Zoomify", Mz, OPENLAYERS);
    v("ol.style.AtlasManager", Pz, OPENLAYERS);
    v("ol.style.Circle", El, OPENLAYERS);
    El.prototype.getAnchor = El.prototype.rb;
    El.prototype.getFill = El.prototype.zm;
    El.prototype.getImage = El.prototype.Lb;
    El.prototype.getOrigin = El.prototype.wb;
    El.prototype.getRadius = El.prototype.Am;
    El.prototype.getSize = El.prototype.Ya;
    El.prototype.getStroke = El.prototype.Bm;
    v("ol.style.Fill", Dl, OPENLAYERS);
    Dl.prototype.getColor = Dl.prototype.c;
    Dl.prototype.setColor = Dl.prototype.d;
    v("ol.style.Icon", Hj, OPENLAYERS);
    Hj.prototype.getAnchor = Hj.prototype.rb;
    Hj.prototype.getImage = Hj.prototype.Lb;
    Hj.prototype.getOrigin = Hj.prototype.wb;
    Hj.prototype.getSrc = Hj.prototype.Cm;
    Hj.prototype.getSize = Hj.prototype.Ya;
    v("ol.style.Image", Gj, OPENLAYERS);
    Gj.prototype.getOpacity = Gj.prototype.ee;
    Gj.prototype.getRotateWithView = Gj.prototype.Gd;
    Gj.prototype.getRotation = Gj.prototype.fe;
    Gj.prototype.getScale = Gj.prototype.ge;
    Gj.prototype.getSnapToPixel = Gj.prototype.Hd;
    Gj.prototype.setRotation = Gj.prototype.he;
    Gj.prototype.setScale = Gj.prototype.ie;
    v("ol.style.RegularShape", Tz, OPENLAYERS);
    Tz.prototype.getAnchor = Tz.prototype.rb;
    Tz.prototype.getAngle = Tz.prototype.Dm;
    Tz.prototype.getFill = Tz.prototype.Em;
    Tz.prototype.getImage = Tz.prototype.Lb;
    Tz.prototype.getOrigin = Tz.prototype.wb;
    Tz.prototype.getPoints = Tz.prototype.Fm;
    Tz.prototype.getRadius = Tz.prototype.Gm;
    Tz.prototype.getRadius2 = Tz.prototype.sj;
    Tz.prototype.getSize = Tz.prototype.Ya;
    Tz.prototype.getStroke = Tz.prototype.Hm;
    v("ol.style.Stroke", zl, OPENLAYERS);
    zl.prototype.getColor = zl.prototype.Im;
    zl.prototype.getLineCap = zl.prototype.ej;
    zl.prototype.getLineDash = zl.prototype.Jm;
    zl.prototype.getLineJoin = zl.prototype.fj;
    zl.prototype.getMiterLimit = zl.prototype.kj;
    zl.prototype.getWidth = zl.prototype.Km;
    zl.prototype.setColor = zl.prototype.Lm;
    zl.prototype.setLineCap = zl.prototype.$n;
    zl.prototype.setLineDash = zl.prototype.Mm;
    zl.prototype.setLineJoin = zl.prototype.ao;
    zl.prototype.setMiterLimit = zl.prototype.bo;
    zl.prototype.setWidth = zl.prototype.lo;
    v("ol.style.Style", Fl, OPENLAYERS);
    Fl.prototype.getGeometry = Fl.prototype.Q;
    Fl.prototype.getGeometryFunction = Fl.prototype.Zi;
    Fl.prototype.getFill = Fl.prototype.Nm;
    Fl.prototype.getImage = Fl.prototype.Om;
    Fl.prototype.getStroke = Fl.prototype.Pm;
    Fl.prototype.getText = Fl.prototype.Qm;
    Fl.prototype.getZIndex = Fl.prototype.Cj;
    Fl.prototype.setGeometry = Fl.prototype.Ug;
    Fl.prototype.setZIndex = Fl.prototype.no;
    v("ol.style.Text", yt, OPENLAYERS);
    yt.prototype.getFont = yt.prototype.Wi;
    yt.prototype.getOffsetX = yt.prototype.lj;
    yt.prototype.getOffsetY = yt.prototype.mj;
    yt.prototype.getFill = yt.prototype.Rm;
    yt.prototype.getRotation = yt.prototype.Sm;
    yt.prototype.getScale = yt.prototype.Tm;
    yt.prototype.getStroke = yt.prototype.Um;
    yt.prototype.getText = yt.prototype.Vm;
    yt.prototype.getTextAlign = yt.prototype.wj;
    yt.prototype.getTextBaseline = yt.prototype.xj;
    yt.prototype.setFont = yt.prototype.Xn;
    yt.prototype.setFill = yt.prototype.Wn;
    yt.prototype.setRotation = yt.prototype.Wm;
    yt.prototype.setScale = yt.prototype.Xm;
    yt.prototype.setStroke = yt.prototype.fo;
    yt.prototype.setText = yt.prototype.ho;
    yt.prototype.setTextAlign = yt.prototype.io;
    yt.prototype.setTextBaseline = yt.prototype.jo;
    v("ol.Sphere", me, OPENLAYERS);
    me.prototype.geodesicArea = me.prototype.b;
    me.prototype.haversineDistance = me.prototype.a;
    v("ol.source.BingMaps", Zy, OPENLAYERS);
    v("ol.source.BingMaps.TOS_ATTRIBUTION", $y, OPENLAYERS);
    v("ol.source.Cluster", az, OPENLAYERS);
    az.prototype.getSource = az.prototype.U;
    v("ol.source.ImageCanvas", un, OPENLAYERS);
    v("ol.source.ImageMapGuide", dz, OPENLAYERS);
    dz.prototype.getParams = dz.prototype.Ul;
    dz.prototype.getImageLoadFunction = dz.prototype.Tl;
    dz.prototype.updateParams = dz.prototype.Xl;
    dz.prototype.setImageLoadFunction = dz.prototype.Wl;
    v("ol.source.Image", nn, OPENLAYERS);
    pn.prototype.image = pn.prototype.image;
    v("ol.source.ImageStatic", ez, OPENLAYERS);
    v("ol.source.ImageVector", Bp, OPENLAYERS);
    Bp.prototype.getSource = Bp.prototype.Yl;
    Bp.prototype.getStyle = Bp.prototype.Zl;
    Bp.prototype.getStyleFunction = Bp.prototype.$l;
    Bp.prototype.setStyle = Bp.prototype.Lg;
    v("ol.source.ImageWMS", fz, OPENLAYERS);
    fz.prototype.getGetFeatureInfoUrl = fz.prototype.cm;
    fz.prototype.getParams = fz.prototype.em;
    fz.prototype.getImageLoadFunction = fz.prototype.dm;
    fz.prototype.getUrl = fz.prototype.fm;
    fz.prototype.setImageLoadFunction = fz.prototype.gm;
    fz.prototype.setUrl = fz.prototype.hm;
    fz.prototype.updateParams = fz.prototype.im;
    v("ol.source.MapQuest", mz, OPENLAYERS);
    mz.prototype.getLayer = mz.prototype.i;
    v("ol.source.OSM", kz, OPENLAYERS);
    v("ol.source.OSM.ATTRIBUTION", lz, OPENLAYERS);
    v("ol.source.Source", Bg, OPENLAYERS);
    Bg.prototype.getAttributions = Bg.prototype.ea;
    Bg.prototype.getLogo = Bg.prototype.ca;
    Bg.prototype.getProjection = Bg.prototype.fa;
    Bg.prototype.getState = Bg.prototype.ga;
    v("ol.source.Stamen", rz, OPENLAYERS);
    v("ol.source.TileArcGISRest", tz, OPENLAYERS);
    tz.prototype.getParams = tz.prototype.jm;
    tz.prototype.getUrls = tz.prototype.km;
    tz.prototype.setUrl = tz.prototype.lm;
    tz.prototype.setUrls = tz.prototype.Mg;
    tz.prototype.updateParams = tz.prototype.nm;
    v("ol.source.TileDebug", vz, OPENLAYERS);
    v("ol.source.TileImage", Xy, OPENLAYERS);
    Xy.prototype.getTileLoadFunction = Xy.prototype.Va;
    Xy.prototype.getTileUrlFunction = Xy.prototype.Wa;
    Xy.prototype.setTileLoadFunction = Xy.prototype.ab;
    Xy.prototype.setTileUrlFunction = Xy.prototype.pa;
    v("ol.source.TileJSON", wz, OPENLAYERS);
    v("ol.source.Tile", ah, OPENLAYERS);
    ah.prototype.getTileGrid = ah.prototype.ta;
    dh.prototype.tile = dh.prototype.tile;
    v("ol.source.TileUTFGrid", xz, OPENLAYERS);
    xz.prototype.getTemplate = xz.prototype.vj;
    xz.prototype.forDataAtCoordinateAndResolution = xz.prototype.Gi;
    v("ol.source.TileVector", Cz, OPENLAYERS);
    Cz.prototype.getFeatures = Cz.prototype.Cc;
    Cz.prototype.getFeaturesAtCoordinateAndResolution = Cz.prototype.Vi;
    v("ol.source.TileWMS", Ez, OPENLAYERS);
    Ez.prototype.getGetFeatureInfoUrl = Ez.prototype.qm;
    Ez.prototype.getParams = Ez.prototype.rm;
    Ez.prototype.getUrls = Ez.prototype.sm;
    Ez.prototype.setUrl = Ez.prototype.tm;
    Ez.prototype.setUrls = Ez.prototype.Ng;
    Ez.prototype.updateParams = Ez.prototype.vm;
    v("ol.source.Vector", up, OPENLAYERS);
    up.prototype.addFeature = up.prototype.hf;
    up.prototype.addFeatures = up.prototype.Nc;
    up.prototype.clear = up.prototype.clear;
    up.prototype.forEachFeature = up.prototype.Sf;
    up.prototype.forEachFeatureInExtent = up.prototype.Zc;
    up.prototype.forEachFeatureIntersectingExtent = up.prototype.Ke;
    up.prototype.getFeatures = up.prototype.Cc;
    up.prototype.getFeaturesAtCoordinate = up.prototype.Ne;
    up.prototype.getFeaturesInExtent = up.prototype.Oe;
    up.prototype.getClosestFeatureToCoordinate = up.prototype.Uf;
    up.prototype.getExtent = up.prototype.G;
    up.prototype.getFeatureById = up.prototype.Me;
    up.prototype.removeFeature = up.prototype.Pg;
    yp.prototype.feature = yp.prototype.feature;
    v("ol.source.WMTS", Kz, OPENLAYERS);
    Kz.prototype.getDimensions = Kz.prototype.Ti;
    Kz.prototype.getFormat = Kz.prototype.Xi;
    Kz.prototype.getLayer = Kz.prototype.wm;
    Kz.prototype.getMatrixSet = Kz.prototype.ij;
    Kz.prototype.getRequestEncoding = Kz.prototype.tj;
    Kz.prototype.getStyle = Kz.prototype.xm;
    Kz.prototype.getUrls = Kz.prototype.ym;
    Kz.prototype.getVersion = Kz.prototype.zj;
    Kz.prototype.updateDimensions = Kz.prototype.vo;
    v("ol.source.WMTS.optionsFromCapabilities", function (b, c) {
        var d = Wa(b.Contents.Layer, function (b) {
            return b.Identifier == c.layer
        }), e, f;
        e = 1 < d.TileMatrixSetLink.length ? Xa(d.TileMatrixSetLink, function (b) {
            return b.TileMatrixSet == c.matrixSet
        }) : m(c.projection) ? Xa(d.TileMatrixSetLink, function (b) {
            return b.TileMatrixSet.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3") == c.projection
        }) : 0;
        0 > e && (e = 0);
        f = d.TileMatrixSetLink[e].TileMatrixSet;
        var g = d.Format[0];
        m(c.format) && (g = c.format);
        e = Xa(d.Style, function (b) {
            return m(c.style) ?
            b.Title == c.style : b.isDefault
        });
        0 > e && (e = 0);
        e = d.Style[e].Identifier;
        var h = {};
        m(d.Dimension) && Sa(d.Dimension, function (b) {
            var c = b.Identifier, d = b["default"];
            m(d) || (d = b.values[0]);
            h[c] = d
        });
        var k = Wa(b.Contents.TileMatrixSet, function (b) {
            return b.Identifier == f
        }), n;
        n = m(c.projection) ? re(c.projection) : re(k.SupportedCRS.replace(/urn:ogc:def:crs:(\w+):(.*:)?(\w+)$/, "$1:$3"));
        var p = d.WGS84BoundingBox, q, r;
        m(p) && (r = re("EPSG:4326").G(), r = p[0] == r[0] && p[2] == r[2], q = Me(p, "EPSG:4326", n), p = n.G(), null === p || Td(p, q) || (q = void 0));
        var k = Jz(k, q), t = [];
        q = c.requestEncoding;
        q = m(q) ? q : "";
        if (b.hasOwnProperty("OperationsMetadata") && b.OperationsMetadata.hasOwnProperty("GetTile") && 0 != q.lastIndexOf("REST", 0))for (var d = b.OperationsMetadata.GetTile.DCP.HTTP.Get, p = 0, u = d.length; p < u; ++p) {
            var A = Wa(d[p].Constraint, function (b) {
                return "GetEncoding" == b.name
            }).AllowedValues.Value;
            0 < A.length && Ya(A, "KVP") && (q = "KVP", t.push(d[p].href))
        } else q = "REST", Sa(d.ResourceURL, function (b) {
            "tile" == b.resourceType && (g = b.format, t.push(b.template))
        });
        return {
            urls: t, layer: c.layer,
            matrixSet: f, format: g, projection: n, requestEncoding: q, tileGrid: k, style: e, dimensions: h, wrapX: r
        }
    }, OPENLAYERS);
    v("ol.source.XYZ", jz, OPENLAYERS);
    jz.prototype.setTileUrlFunction = jz.prototype.pa;
    jz.prototype.setUrl = jz.prototype.e;
    v("ol.source.Zoomify", Nz, OPENLAYERS);
    ml.prototype.vectorContext = ml.prototype.vectorContext;
    ml.prototype.frameState = ml.prototype.frameState;
    ml.prototype.context = ml.prototype.context;
    ml.prototype.glContext = ml.prototype.glContext;
    v("ol.render.VectorContext", ll, OPENLAYERS);
    vq.prototype.drawAsync = vq.prototype.rc;
    vq.prototype.drawCircleGeometry = vq.prototype.sc;
    vq.prototype.drawFeature = vq.prototype.He;
    vq.prototype.drawGeometryCollectionGeometry = vq.prototype.zd;
    vq.prototype.drawPointGeometry = vq.prototype.pb;
    vq.prototype.drawLineStringGeometry = vq.prototype.Ab;
    vq.prototype.drawMultiLineStringGeometry = vq.prototype.tc;
    vq.prototype.drawMultiPointGeometry = vq.prototype.ob;
    vq.prototype.drawMultiPolygonGeometry = vq.prototype.uc;
    vq.prototype.drawPolygonGeometry = vq.prototype.Qb;
    vq.prototype.drawText = vq.prototype.qb;
    vq.prototype.setFillStrokeStyle = vq.prototype.za;
    vq.prototype.setImageStyle = vq.prototype.$a;
    vq.prototype.setTextStyle = vq.prototype.Aa;
    gm.prototype.drawAsync = gm.prototype.rc;
    gm.prototype.drawCircleGeometry = gm.prototype.sc;
    gm.prototype.drawFeature = gm.prototype.He;
    gm.prototype.drawPointGeometry = gm.prototype.pb;
    gm.prototype.drawMultiPointGeometry = gm.prototype.ob;
    gm.prototype.drawLineStringGeometry = gm.prototype.Ab;
    gm.prototype.drawMultiLineStringGeometry = gm.prototype.tc;
    gm.prototype.drawPolygonGeometry = gm.prototype.Qb;
    gm.prototype.drawMultiPolygonGeometry = gm.prototype.uc;
    gm.prototype.setFillStrokeStyle = gm.prototype.za;
    gm.prototype.setImageStyle = gm.prototype.$a;
    gm.prototype.setTextStyle = gm.prototype.Aa;
    v("ol.proj.common.add", fm, OPENLAYERS);
    v("ol.proj.METERS_PER_UNIT", oe, OPENLAYERS);
    v("ol.proj.Projection", pe, OPENLAYERS);
    pe.prototype.getCode = pe.prototype.Ri;
    pe.prototype.getExtent = pe.prototype.G;
    pe.prototype.getUnits = pe.prototype.Nl;
    pe.prototype.getMetersPerUnit = pe.prototype.Ed;
    pe.prototype.getWorldExtent = pe.prototype.Bj;
    pe.prototype.isGlobal = pe.prototype.rk;
    pe.prototype.setGlobal = pe.prototype.Zn;
    pe.prototype.setExtent = pe.prototype.Ol;
    pe.prototype.setWorldExtent = pe.prototype.mo;
    pe.prototype.setGetPointResolution = pe.prototype.Yn;
    pe.prototype.getPointResolution = pe.prototype.getPointResolution;
    v("ol.proj.addEquivalentProjections", se, OPENLAYERS);
    v("ol.proj.addProjection", Fe, OPENLAYERS);
    v("ol.proj.addCoordinateTransforms", te, OPENLAYERS);
    v("ol.proj.fromLonLat", function (b, c) {
        return Le(b, "EPSG:4326", m(c) ? c : "EPSG:3857")
    }, OPENLAYERS);
    v("ol.proj.toLonLat", function (b, c) {
        return Le(b, m(c) ? c : "EPSG:3857", "EPSG:4326")
    }, OPENLAYERS);
    v("ol.proj.get", re, OPENLAYERS);
    v("ol.proj.getTransform", Je, OPENLAYERS);
    v("ol.proj.transform", Le, OPENLAYERS);
    v("ol.proj.transformExtent", Me, OPENLAYERS);
    v("ol.layer.Heatmap", Z, OPENLAYERS);
    Z.prototype.getBlur = Z.prototype.Tf;
    Z.prototype.getGradient = Z.prototype.Xf;
    Z.prototype.getRadius = Z.prototype.Gg;
    Z.prototype.setBlur = Z.prototype.sh;
    Z.prototype.setGradient = Z.prototype.wh;
    Z.prototype.setRadius = Z.prototype.Hg;
    v("ol.layer.Image", I, OPENLAYERS);
    I.prototype.getSource = I.prototype.da;
    v("ol.layer.Layer", D, OPENLAYERS);
    D.prototype.getSource = D.prototype.da;
    D.prototype.setSource = D.prototype.Ic;
    v("ol.layer.Base", oj, OPENLAYERS);
    oj.prototype.getBrightness = oj.prototype.Cb;
    oj.prototype.getContrast = oj.prototype.Db;
    oj.prototype.getHue = oj.prototype.Eb;
    oj.prototype.getExtent = oj.prototype.G;
    oj.prototype.getMaxResolution = oj.prototype.Fb;
    oj.prototype.getMinResolution = oj.prototype.Gb;
    oj.prototype.getOpacity = oj.prototype.Kb;
    oj.prototype.getSaturation = oj.prototype.Hb;
    oj.prototype.getVisible = oj.prototype.fb;
    oj.prototype.setBrightness = oj.prototype.gc;
    oj.prototype.setContrast = oj.prototype.hc;
    oj.prototype.setHue = oj.prototype.ic;
    oj.prototype.setExtent = oj.prototype.ac;
    oj.prototype.setMaxResolution = oj.prototype.jc;
    oj.prototype.setMinResolution = oj.prototype.kc;
    oj.prototype.setOpacity = oj.prototype.bc;
    oj.prototype.setSaturation = oj.prototype.lc;
    oj.prototype.setVisible = oj.prototype.mc;
    v("ol.layer.Group", G, OPENLAYERS);
    G.prototype.getLayers = G.prototype.Ac;
    G.prototype.setLayers = G.prototype.yh;
    v("ol.layer.Tile", L, OPENLAYERS);
    L.prototype.getPreload = L.prototype.b;
    L.prototype.getSource = L.prototype.da;
    L.prototype.setPreload = L.prototype.d;
    L.prototype.getUseInterimTilesOnError = L.prototype.c;
    L.prototype.setUseInterimTilesOnError = L.prototype.e;
    v("ol.layer.Vector", M, OPENLAYERS);
    M.prototype.getSource = M.prototype.da;
    M.prototype.getStyle = M.prototype.J;
    M.prototype.getStyleFunction = M.prototype.H;
    M.prototype.setStyle = M.prototype.e;
    v("ol.interaction.DoubleClickZoom", ck, OPENLAYERS);
    v("ol.interaction.DoubleClickZoom.handleEvent", dk, OPENLAYERS);
    v("ol.interaction.DragAndDrop", Ox, OPENLAYERS);
    v("ol.interaction.DragAndDrop.handleEvent", Gg, OPENLAYERS);
    Px.prototype.features = Px.prototype.features;
    Px.prototype.file = Px.prototype.file;
    Px.prototype.projection = Px.prototype.projection;
    rl.prototype.coordinate = rl.prototype.coordinate;
    v("ol.interaction.DragBox", sl, OPENLAYERS);
    sl.prototype.getGeometry = sl.prototype.Q;
    v("ol.interaction.DragPan", ok, OPENLAYERS);
    v("ol.interaction.DragRotateAndZoom", Sx, OPENLAYERS);
    v("ol.interaction.DragRotate", sk, OPENLAYERS);
    v("ol.interaction.DragZoom", Kl, OPENLAYERS);
    Wx.prototype.feature = Wx.prototype.feature;
    v("ol.interaction.Draw", Xx, OPENLAYERS);
    v("ol.interaction.Draw.handleEvent", Zx, OPENLAYERS);
    Xx.prototype.finishDrawing = Xx.prototype.aa;
    v("ol.interaction.Draw.createRegularPolygon", function (b, c) {
        return function (d, e) {
            var f = d[0], g = d[1], h = Math.sqrt(sd(f, g)), k = m(e) ? e : jl(new Tm(f), b);
            kl(k, f, h, m(c) ? c : Math.atan((g[1] - f[1]) / (g[0] - f[0])));
            return k
        }
    }, OPENLAYERS);
    v("ol.interaction.Interaction", Yj, OPENLAYERS);
    Yj.prototype.getActive = Yj.prototype.b;
    Yj.prototype.setActive = Yj.prototype.d;
    v("ol.interaction.defaults", Zl, OPENLAYERS);
    v("ol.interaction.KeyboardPan", Ll, OPENLAYERS);
    v("ol.interaction.KeyboardPan.handleEvent", Ml, OPENLAYERS);
    v("ol.interaction.KeyboardZoom", Nl, OPENLAYERS);
    v("ol.interaction.KeyboardZoom.handleEvent", Ol, OPENLAYERS);
    v("ol.interaction.Modify", my, OPENLAYERS);
    v("ol.interaction.Modify.handleEvent", py, OPENLAYERS);
    v("ol.interaction.MouseWheelZoom", Pl, OPENLAYERS);
    v("ol.interaction.MouseWheelZoom.handleEvent", Ql, OPENLAYERS);
    v("ol.interaction.PinchRotate", Rl, OPENLAYERS);
    v("ol.interaction.PinchZoom", Vl, OPENLAYERS);
    v("ol.interaction.Pointer", lk, OPENLAYERS);
    v("ol.interaction.Pointer.handleEvent", mk, OPENLAYERS);
    wy.prototype.selected = wy.prototype.selected;
    wy.prototype.deselected = wy.prototype.deselected;
    wy.prototype.mapBrowserEvent = wy.prototype.mapBrowserEvent;
    v("ol.interaction.Select", xy, OPENLAYERS);
    xy.prototype.getFeatures = xy.prototype.p;
    v("ol.interaction.Select.handleEvent", yy, OPENLAYERS);
    xy.prototype.setMap = xy.prototype.setMap;
    v("ol.interaction.Snap", Ay, OPENLAYERS);
    Ay.prototype.addFeature = Ay.prototype.dd;
    Ay.prototype.removeFeature = Ay.prototype.ed;
    v("ol.geom.Circle", Tm, OPENLAYERS);
    Tm.prototype.clone = Tm.prototype.clone;
    Tm.prototype.getCenter = Tm.prototype.cd;
    Tm.prototype.getRadius = Tm.prototype.cf;
    Tm.prototype.getType = Tm.prototype.L;
    Tm.prototype.intersectsExtent = Tm.prototype.na;
    Tm.prototype.setCenter = Tm.prototype.pl;
    Tm.prototype.setCenterAndRadius = Tm.prototype.uf;
    Tm.prototype.setRadius = Tm.prototype.ql;
    Tm.prototype.transform = Tm.prototype.transform;
    v("ol.geom.Geometry", wk, OPENLAYERS);
    wk.prototype.getClosestPoint = wk.prototype.Ua;
    wk.prototype.getExtent = wk.prototype.G;
    v("ol.geom.GeometryCollection", Vm, OPENLAYERS);
    Vm.prototype.clone = Vm.prototype.clone;
    Vm.prototype.getGeometries = Vm.prototype.Wf;
    Vm.prototype.getType = Vm.prototype.L;
    Vm.prototype.intersectsExtent = Vm.prototype.na;
    Vm.prototype.setGeometries = Vm.prototype.vh;
    Vm.prototype.applyTransform = Vm.prototype.qa;
    Vm.prototype.translate = Vm.prototype.Oa;
    v("ol.geom.LinearRing", Sk, OPENLAYERS);
    Sk.prototype.clone = Sk.prototype.clone;
    Sk.prototype.getArea = Sk.prototype.tl;
    Sk.prototype.getCoordinates = Sk.prototype.M;
    Sk.prototype.getType = Sk.prototype.L;
    Sk.prototype.setCoordinates = Sk.prototype.ba;
    v("ol.geom.LineString", N, OPENLAYERS);
    N.prototype.appendCoordinate = N.prototype.vi;
    N.prototype.clone = N.prototype.clone;
    N.prototype.forEachSegment = N.prototype.Ji;
    N.prototype.getCoordinateAtM = N.prototype.rl;
    N.prototype.getCoordinates = N.prototype.M;
    N.prototype.getLength = N.prototype.sl;
    N.prototype.getType = N.prototype.L;
    N.prototype.intersectsExtent = N.prototype.na;
    N.prototype.setCoordinates = N.prototype.ba;
    v("ol.geom.MultiLineString", P, OPENLAYERS);
    P.prototype.appendLineString = P.prototype.wi;
    P.prototype.clone = P.prototype.clone;
    P.prototype.getCoordinateAtM = P.prototype.ul;
    P.prototype.getCoordinates = P.prototype.M;
    P.prototype.getLineString = P.prototype.gj;
    P.prototype.getLineStrings = P.prototype.$c;
    P.prototype.getType = P.prototype.L;
    P.prototype.intersectsExtent = P.prototype.na;
    P.prototype.setCoordinates = P.prototype.ba;
    v("ol.geom.MultiPoint", en, OPENLAYERS);
    en.prototype.appendPoint = en.prototype.yi;
    en.prototype.clone = en.prototype.clone;
    en.prototype.getCoordinates = en.prototype.M;
    en.prototype.getPoint = en.prototype.pj;
    en.prototype.getPoints = en.prototype.Zd;
    en.prototype.getType = en.prototype.L;
    en.prototype.intersectsExtent = en.prototype.na;
    en.prototype.setCoordinates = en.prototype.ba;
    v("ol.geom.MultiPolygon", R, OPENLAYERS);
    R.prototype.appendPolygon = R.prototype.zi;
    R.prototype.clone = R.prototype.clone;
    R.prototype.getArea = R.prototype.vl;
    R.prototype.getCoordinates = R.prototype.M;
    R.prototype.getInteriorPoints = R.prototype.dj;
    R.prototype.getPolygon = R.prototype.rj;
    R.prototype.getPolygons = R.prototype.Fd;
    R.prototype.getType = R.prototype.L;
    R.prototype.intersectsExtent = R.prototype.na;
    R.prototype.setCoordinates = R.prototype.ba;
    v("ol.geom.Point", E, OPENLAYERS);
    E.prototype.clone = E.prototype.clone;
    E.prototype.getCoordinates = E.prototype.M;
    E.prototype.getType = E.prototype.L;
    E.prototype.intersectsExtent = E.prototype.na;
    E.prototype.setCoordinates = E.prototype.ba;
    v("ol.geom.Polygon", F, OPENLAYERS);
    F.prototype.appendLinearRing = F.prototype.xi;
    F.prototype.clone = F.prototype.clone;
    F.prototype.getArea = F.prototype.wl;
    F.prototype.getCoordinates = F.prototype.M;
    F.prototype.getInteriorPoint = F.prototype.cj;
    F.prototype.getLinearRingCount = F.prototype.hj;
    F.prototype.getLinearRing = F.prototype.Zf;
    F.prototype.getLinearRings = F.prototype.Dd;
    F.prototype.getType = F.prototype.L;
    F.prototype.intersectsExtent = F.prototype.na;
    F.prototype.setCoordinates = F.prototype.ba;
    v("ol.geom.Polygon.circular", il, OPENLAYERS);
    v("ol.geom.Polygon.fromExtent", function (b) {
        var c = b[0], d = b[1], e = b[2];
        b = b[3];
        c = [c, d, c, b, e, b, e, d, c, d];
        d = new F(null);
        fl(d, "XY", c, [c.length]);
        return d
    }, OPENLAYERS);
    v("ol.geom.Polygon.fromCircle", jl, OPENLAYERS);
    v("ol.geom.SimpleGeometry", yk, OPENLAYERS);
    yk.prototype.getFirstCoordinate = yk.prototype.tb;
    yk.prototype.getLastCoordinate = yk.prototype.ub;
    yk.prototype.getLayout = yk.prototype.vb;
    yk.prototype.applyTransform = yk.prototype.qa;
    yk.prototype.translate = yk.prototype.Oa;
    v("ol.format.EsriJSON", Gr, OPENLAYERS);
    Gr.prototype.readFeature = Gr.prototype.xb;
    Gr.prototype.readFeatures = Gr.prototype.ja;
    Gr.prototype.readGeometry = Gr.prototype.Fc;
    Gr.prototype.readProjection = Gr.prototype.ya;
    Gr.prototype.writeGeometry = Gr.prototype.Lc;
    Gr.prototype.writeGeometryObject = Gr.prototype.we;
    Gr.prototype.writeFeature = Gr.prototype.pd;
    Gr.prototype.writeFeatureObject = Gr.prototype.Kc;
    Gr.prototype.writeFeatures = Gr.prototype.zb;
    Gr.prototype.writeFeaturesObject = Gr.prototype.ue;
    v("ol.format.Feature", Ar, OPENLAYERS);
    v("ol.format.GeoJSON", Nr, OPENLAYERS);
    Nr.prototype.readFeature = Nr.prototype.xb;
    Nr.prototype.readFeatures = Nr.prototype.ja;
    Nr.prototype.readGeometry = Nr.prototype.Fc;
    Nr.prototype.readProjection = Nr.prototype.ya;
    Nr.prototype.writeFeature = Nr.prototype.pd;
    Nr.prototype.writeFeatureObject = Nr.prototype.Kc;
    Nr.prototype.writeFeatures = Nr.prototype.zb;
    Nr.prototype.writeFeaturesObject = Nr.prototype.ue;
    Nr.prototype.writeGeometry = Nr.prototype.Lc;
    Nr.prototype.writeGeometryObject = Nr.prototype.we;
    v("ol.format.GPX", qs, OPENLAYERS);
    qs.prototype.readFeature = qs.prototype.xb;
    qs.prototype.readFeatures = qs.prototype.ja;
    qs.prototype.readProjection = qs.prototype.ya;
    qs.prototype.writeFeatures = qs.prototype.zb;
    qs.prototype.writeFeaturesNode = qs.prototype.b;
    v("ol.format.IGC", at, OPENLAYERS);
    at.prototype.readFeature = at.prototype.xb;
    at.prototype.readFeatures = at.prototype.ja;
    at.prototype.readProjection = at.prototype.ya;
    v("ol.format.KML", zt, OPENLAYERS);
    zt.prototype.readFeature = zt.prototype.xb;
    zt.prototype.readFeatures = zt.prototype.ja;
    zt.prototype.readName = zt.prototype.En;
    zt.prototype.readNetworkLinks = zt.prototype.Fn;
    zt.prototype.readProjection = zt.prototype.ya;
    zt.prototype.writeFeatures = zt.prototype.zb;
    zt.prototype.writeFeaturesNode = zt.prototype.b;
    v("ol.format.OSMXML", kv, OPENLAYERS);
    kv.prototype.readFeatures = kv.prototype.ja;
    kv.prototype.readProjection = kv.prototype.ya;
    v("ol.format.Polyline", Jv, OPENLAYERS);
    v("ol.format.Polyline.encodeDeltas", Kv, OPENLAYERS);
    v("ol.format.Polyline.decodeDeltas", Mv, OPENLAYERS);
    v("ol.format.Polyline.encodeFloats", Lv, OPENLAYERS);
    v("ol.format.Polyline.decodeFloats", Nv, OPENLAYERS);
    Jv.prototype.readFeature = Jv.prototype.xb;
    Jv.prototype.readFeatures = Jv.prototype.ja;
    Jv.prototype.readGeometry = Jv.prototype.Fc;
    Jv.prototype.readProjection = Jv.prototype.ya;
    Jv.prototype.writeGeometry = Jv.prototype.Lc;
    v("ol.format.TopoJSON", Ov, OPENLAYERS);
    Ov.prototype.readFeatures = Ov.prototype.ja;
    Ov.prototype.readProjection = Ov.prototype.ya;
    v("ol.format.WFS", Uv, OPENLAYERS);
    Uv.prototype.readFeatures = Uv.prototype.ja;
    Uv.prototype.readTransactionResponse = Uv.prototype.f;
    Uv.prototype.readFeatureCollectionMetadata = Uv.prototype.g;
    Uv.prototype.writeGetFeature = Uv.prototype.i;
    Uv.prototype.writeTransaction = Uv.prototype.o;
    Uv.prototype.readProjection = Uv.prototype.ya;
    v("ol.format.WKT", gw, OPENLAYERS);
    gw.prototype.readFeature = gw.prototype.xb;
    gw.prototype.readFeatures = gw.prototype.ja;
    gw.prototype.readGeometry = gw.prototype.Fc;
    gw.prototype.writeFeature = gw.prototype.pd;
    gw.prototype.writeFeatures = gw.prototype.zb;
    gw.prototype.writeGeometry = gw.prototype.Lc;
    v("ol.format.WMSCapabilities", yw, OPENLAYERS);
    yw.prototype.read = yw.prototype.c;
    v("ol.format.WMSGetFeatureInfo", Vw, OPENLAYERS);
    Vw.prototype.readFeatures = Vw.prototype.ja;
    v("ol.format.WMTSCapabilities", Xw, OPENLAYERS);
    Xw.prototype.read = Xw.prototype.c;
    v("ol.format.GML2", ps, OPENLAYERS);
    v("ol.format.GML3", gs, OPENLAYERS);
    gs.prototype.writeGeometryNode = gs.prototype.q;
    gs.prototype.writeFeatures = gs.prototype.zb;
    gs.prototype.writeFeaturesNode = gs.prototype.b;
    v("ol.format.GML", gs, OPENLAYERS);
    gs.prototype.writeFeatures = gs.prototype.zb;
    gs.prototype.writeFeaturesNode = gs.prototype.b;
    Vr.prototype.readFeatures = Vr.prototype.ja;
    v("ol.events.condition.altKeyOnly", function (b) {
        b = b.a;
        return b.b && !b.f && !b.d
    }, OPENLAYERS);
    v("ol.events.condition.altShiftKeysOnly", ek, OPENLAYERS);
    v("ol.events.condition.always", Gg, OPENLAYERS);
    v("ol.events.condition.click", function (b) {
        return b.type == ej
    }, OPENLAYERS);
    v("ol.events.condition.never", Fg, OPENLAYERS);
    v("ol.events.condition.pointerMove", fk, OPENLAYERS);
    v("ol.events.condition.singleClick", gk, OPENLAYERS);
    v("ol.events.condition.noModifierKeys", hk, OPENLAYERS);
    v("ol.events.condition.platformModifierKeyOnly", function (b) {
        b = b.a;
        return !b.b && b.f && !b.d
    }, OPENLAYERS);
    v("ol.events.condition.shiftKeyOnly", ik, OPENLAYERS);
    v("ol.events.condition.targetNotEditable", jk, OPENLAYERS);
    v("ol.events.condition.mouseOnly", kk, OPENLAYERS);
    v("ol.control.Attribution", eh, OPENLAYERS);
    v("ol.control.Attribution.render", fh, OPENLAYERS);
    eh.prototype.getCollapsible = eh.prototype.fl;
    eh.prototype.setCollapsible = eh.prototype.il;
    eh.prototype.setCollapsed = eh.prototype.hl;
    eh.prototype.getCollapsed = eh.prototype.el;
    v("ol.control.Control", tg, OPENLAYERS);
    tg.prototype.getMap = tg.prototype.e;
    tg.prototype.setMap = tg.prototype.setMap;
    tg.prototype.setTarget = tg.prototype.c;
    v("ol.control.defaults", kh, OPENLAYERS);
    v("ol.control.FullScreen", ph, OPENLAYERS);
    v("ol.control.MousePosition", qh, OPENLAYERS);
    v("ol.control.MousePosition.render", rh, OPENLAYERS);
    qh.prototype.getCoordinateFormat = qh.prototype.Vf;
    qh.prototype.getProjection = qh.prototype.zg;
    qh.prototype.setMap = qh.prototype.setMap;
    qh.prototype.setCoordinateFormat = qh.prototype.th;
    qh.prototype.setProjection = qh.prototype.Ag;
    v("ol.control.OverviewMap", Yq, OPENLAYERS);
    Yq.prototype.setMap = Yq.prototype.setMap;
    v("ol.control.OverviewMap.render", Zq, OPENLAYERS);
    Yq.prototype.getCollapsible = Yq.prototype.ll;
    Yq.prototype.setCollapsible = Yq.prototype.ol;
    Yq.prototype.setCollapsed = Yq.prototype.nl;
    Yq.prototype.getCollapsed = Yq.prototype.kl;
    v("ol.control.Rotate", hh, OPENLAYERS);
    v("ol.control.Rotate.render", ih, OPENLAYERS);
    v("ol.control.ScaleLine", cr, OPENLAYERS);
    cr.prototype.getUnits = cr.prototype.p;
    v("ol.control.ScaleLine.render", dr, OPENLAYERS);
    cr.prototype.setUnits = cr.prototype.H;
    v("ol.control.Zoom", jh, OPENLAYERS);
    v("ol.control.ZoomSlider", rr, OPENLAYERS);
    v("ol.control.ZoomSlider.render", tr, OPENLAYERS);
    v("ol.control.ZoomToExtent", wr, OPENLAYERS);
    v("ol.color.asArray", sf, OPENLAYERS);
    v("ol.color.asString", uf, OPENLAYERS);
    fd.prototype.changed = fd.prototype.k;
    fd.prototype.getRevision = fd.prototype.v;
    fd.prototype.on = fd.prototype.r;
    fd.prototype.once = fd.prototype.A;
    fd.prototype.un = fd.prototype.u;
    fd.prototype.unByKey = fd.prototype.B;
    nf.prototype.get = nf.prototype.get;
    nf.prototype.getKeys = nf.prototype.C;
    nf.prototype.getProperties = nf.prototype.D;
    nf.prototype.set = nf.prototype.set;
    nf.prototype.setProperties = nf.prototype.t;
    nf.prototype.unset = nf.prototype.I;
    nf.prototype.changed = nf.prototype.k;
    nf.prototype.getRevision = nf.prototype.v;
    nf.prototype.on = nf.prototype.r;
    nf.prototype.once = nf.prototype.A;
    nf.prototype.un = nf.prototype.u;
    nf.prototype.unByKey = nf.prototype.B;
    xr.prototype.get = xr.prototype.get;
    xr.prototype.getKeys = xr.prototype.C;
    xr.prototype.getProperties = xr.prototype.D;
    xr.prototype.set = xr.prototype.set;
    xr.prototype.setProperties = xr.prototype.t;
    xr.prototype.unset = xr.prototype.I;
    xr.prototype.changed = xr.prototype.k;
    xr.prototype.getRevision = xr.prototype.v;
    xr.prototype.on = xr.prototype.r;
    xr.prototype.once = xr.prototype.A;
    xr.prototype.un = xr.prototype.u;
    xr.prototype.unByKey = xr.prototype.B;
    X.prototype.get = X.prototype.get;
    X.prototype.getKeys = X.prototype.C;
    X.prototype.getProperties = X.prototype.D;
    X.prototype.set = X.prototype.set;
    X.prototype.setProperties = X.prototype.t;
    X.prototype.unset = X.prototype.I;
    X.prototype.changed = X.prototype.k;
    X.prototype.getRevision = X.prototype.v;
    X.prototype.on = X.prototype.r;
    X.prototype.once = X.prototype.A;
    X.prototype.un = X.prototype.u;
    X.prototype.unByKey = X.prototype.B;
    jx.prototype.get = jx.prototype.get;
    jx.prototype.getKeys = jx.prototype.C;
    jx.prototype.getProperties = jx.prototype.D;
    jx.prototype.set = jx.prototype.set;
    jx.prototype.setProperties = jx.prototype.t;
    jx.prototype.unset = jx.prototype.I;
    jx.prototype.changed = jx.prototype.k;
    jx.prototype.getRevision = jx.prototype.v;
    jx.prototype.on = jx.prototype.r;
    jx.prototype.once = jx.prototype.A;
    jx.prototype.un = jx.prototype.u;
    jx.prototype.unByKey = jx.prototype.B;
    tx.prototype.getTileCoord = tx.prototype.g;
    W.prototype.get = W.prototype.get;
    W.prototype.getKeys = W.prototype.C;
    W.prototype.getProperties = W.prototype.D;
    W.prototype.set = W.prototype.set;
    W.prototype.setProperties = W.prototype.t;
    W.prototype.unset = W.prototype.I;
    W.prototype.changed = W.prototype.k;
    W.prototype.getRevision = W.prototype.v;
    W.prototype.on = W.prototype.r;
    W.prototype.once = W.prototype.A;
    W.prototype.un = W.prototype.u;
    W.prototype.unByKey = W.prototype.B;
    aj.prototype.map = aj.prototype.map;
    aj.prototype.frameState = aj.prototype.frameState;
    bj.prototype.originalEvent = bj.prototype.originalEvent;
    bj.prototype.pixel = bj.prototype.pixel;
    bj.prototype.coordinate = bj.prototype.coordinate;
    bj.prototype.dragging = bj.prototype.dragging;
    bj.prototype.preventDefault = bj.prototype.preventDefault;
    bj.prototype.stopPropagation = bj.prototype.gb;
    bj.prototype.map = bj.prototype.map;
    bj.prototype.frameState = bj.prototype.frameState;
    Vq.prototype.get = Vq.prototype.get;
    Vq.prototype.getKeys = Vq.prototype.C;
    Vq.prototype.getProperties = Vq.prototype.D;
    Vq.prototype.set = Vq.prototype.set;
    Vq.prototype.setProperties = Vq.prototype.t;
    Vq.prototype.unset = Vq.prototype.I;
    Vq.prototype.changed = Vq.prototype.k;
    Vq.prototype.getRevision = Vq.prototype.v;
    Vq.prototype.on = Vq.prototype.r;
    Vq.prototype.once = Vq.prototype.A;
    Vq.prototype.un = Vq.prototype.u;
    Vq.prototype.unByKey = Vq.prototype.B;
    Ne.prototype.get = Ne.prototype.get;
    Ne.prototype.getKeys = Ne.prototype.C;
    Ne.prototype.getProperties = Ne.prototype.D;
    Ne.prototype.set = Ne.prototype.set;
    Ne.prototype.setProperties = Ne.prototype.t;
    Ne.prototype.unset = Ne.prototype.I;
    Ne.prototype.changed = Ne.prototype.k;
    Ne.prototype.getRevision = Ne.prototype.v;
    Ne.prototype.on = Ne.prototype.r;
    Ne.prototype.once = Ne.prototype.A;
    Ne.prototype.un = Ne.prototype.u;
    Ne.prototype.unByKey = Ne.prototype.B;
    Iz.prototype.createTileCoordTransform = Iz.prototype.createTileCoordTransform;
    Iz.prototype.getMaxZoom = Iz.prototype.Re;
    Iz.prototype.getMinZoom = Iz.prototype.Se;
    Iz.prototype.getOrigin = Iz.prototype.dc;
    Iz.prototype.getResolution = Iz.prototype.oa;
    Iz.prototype.getResolutions = Iz.prototype.jf;
    Iz.prototype.getTileCoordForCoordAndResolution = Iz.prototype.wc;
    Iz.prototype.getTileCoordForCoordAndZ = Iz.prototype.bd;
    Iz.prototype.getTileSize = Iz.prototype.ra;
    Mz.prototype.createTileCoordTransform = Mz.prototype.createTileCoordTransform;
    Mz.prototype.getMaxZoom = Mz.prototype.Re;
    Mz.prototype.getMinZoom = Mz.prototype.Se;
    Mz.prototype.getOrigin = Mz.prototype.dc;
    Mz.prototype.getResolution = Mz.prototype.oa;
    Mz.prototype.getResolutions = Mz.prototype.jf;
    Mz.prototype.getTileCoordForCoordAndResolution = Mz.prototype.wc;
    Mz.prototype.getTileCoordForCoordAndZ = Mz.prototype.bd;
    Mz.prototype.getTileSize = Mz.prototype.ra;
    El.prototype.getOpacity = El.prototype.ee;
    El.prototype.getRotateWithView = El.prototype.Gd;
    El.prototype.getRotation = El.prototype.fe;
    El.prototype.getScale = El.prototype.ge;
    El.prototype.getSnapToPixel = El.prototype.Hd;
    El.prototype.setRotation = El.prototype.he;
    El.prototype.setScale = El.prototype.ie;
    Hj.prototype.getOpacity = Hj.prototype.ee;
    Hj.prototype.getRotateWithView = Hj.prototype.Gd;
    Hj.prototype.getRotation = Hj.prototype.fe;
    Hj.prototype.getScale = Hj.prototype.ge;
    Hj.prototype.getSnapToPixel = Hj.prototype.Hd;
    Hj.prototype.setRotation = Hj.prototype.he;
    Hj.prototype.setScale = Hj.prototype.ie;
    Tz.prototype.getOpacity = Tz.prototype.ee;
    Tz.prototype.getRotateWithView = Tz.prototype.Gd;
    Tz.prototype.getRotation = Tz.prototype.fe;
    Tz.prototype.getScale = Tz.prototype.ge;
    Tz.prototype.getSnapToPixel = Tz.prototype.Hd;
    Tz.prototype.setRotation = Tz.prototype.he;
    Tz.prototype.setScale = Tz.prototype.ie;
    Bg.prototype.get = Bg.prototype.get;
    Bg.prototype.getKeys = Bg.prototype.C;
    Bg.prototype.getProperties = Bg.prototype.D;
    Bg.prototype.set = Bg.prototype.set;
    Bg.prototype.setProperties = Bg.prototype.t;
    Bg.prototype.unset = Bg.prototype.I;
    Bg.prototype.changed = Bg.prototype.k;
    Bg.prototype.getRevision = Bg.prototype.v;
    Bg.prototype.on = Bg.prototype.r;
    Bg.prototype.once = Bg.prototype.A;
    Bg.prototype.un = Bg.prototype.u;
    Bg.prototype.unByKey = Bg.prototype.B;
    ah.prototype.getAttributions = ah.prototype.ea;
    ah.prototype.getLogo = ah.prototype.ca;
    ah.prototype.getProjection = ah.prototype.fa;
    ah.prototype.getState = ah.prototype.ga;
    ah.prototype.get = ah.prototype.get;
    ah.prototype.getKeys = ah.prototype.C;
    ah.prototype.getProperties = ah.prototype.D;
    ah.prototype.set = ah.prototype.set;
    ah.prototype.setProperties = ah.prototype.t;
    ah.prototype.unset = ah.prototype.I;
    ah.prototype.changed = ah.prototype.k;
    ah.prototype.getRevision = ah.prototype.v;
    ah.prototype.on = ah.prototype.r;
    ah.prototype.once = ah.prototype.A;
    ah.prototype.un = ah.prototype.u;
    ah.prototype.unByKey = ah.prototype.B;
    Xy.prototype.getTileGrid = Xy.prototype.ta;
    Xy.prototype.getAttributions = Xy.prototype.ea;
    Xy.prototype.getLogo = Xy.prototype.ca;
    Xy.prototype.getProjection = Xy.prototype.fa;
    Xy.prototype.getState = Xy.prototype.ga;
    Xy.prototype.get = Xy.prototype.get;
    Xy.prototype.getKeys = Xy.prototype.C;
    Xy.prototype.getProperties = Xy.prototype.D;
    Xy.prototype.set = Xy.prototype.set;
    Xy.prototype.setProperties = Xy.prototype.t;
    Xy.prototype.unset = Xy.prototype.I;
    Xy.prototype.changed = Xy.prototype.k;
    Xy.prototype.getRevision = Xy.prototype.v;
    Xy.prototype.on = Xy.prototype.r;
    Xy.prototype.once = Xy.prototype.A;
    Xy.prototype.un = Xy.prototype.u;
    Xy.prototype.unByKey = Xy.prototype.B;
    Zy.prototype.getTileLoadFunction = Zy.prototype.Va;
    Zy.prototype.getTileUrlFunction = Zy.prototype.Wa;
    Zy.prototype.setTileLoadFunction = Zy.prototype.ab;
    Zy.prototype.setTileUrlFunction = Zy.prototype.pa;
    Zy.prototype.getTileGrid = Zy.prototype.ta;
    Zy.prototype.getAttributions = Zy.prototype.ea;
    Zy.prototype.getLogo = Zy.prototype.ca;
    Zy.prototype.getProjection = Zy.prototype.fa;
    Zy.prototype.getState = Zy.prototype.ga;
    Zy.prototype.get = Zy.prototype.get;
    Zy.prototype.getKeys = Zy.prototype.C;
    Zy.prototype.getProperties = Zy.prototype.D;
    Zy.prototype.set = Zy.prototype.set;
    Zy.prototype.setProperties = Zy.prototype.t;
    Zy.prototype.unset = Zy.prototype.I;
    Zy.prototype.changed = Zy.prototype.k;
    Zy.prototype.getRevision = Zy.prototype.v;
    Zy.prototype.on = Zy.prototype.r;
    Zy.prototype.once = Zy.prototype.A;
    Zy.prototype.un = Zy.prototype.u;
    Zy.prototype.unByKey = Zy.prototype.B;
    up.prototype.getAttributions = up.prototype.ea;
    up.prototype.getLogo = up.prototype.ca;
    up.prototype.getProjection = up.prototype.fa;
    up.prototype.getState = up.prototype.ga;
    up.prototype.get = up.prototype.get;
    up.prototype.getKeys = up.prototype.C;
    up.prototype.getProperties = up.prototype.D;
    up.prototype.set = up.prototype.set;
    up.prototype.setProperties = up.prototype.t;
    up.prototype.unset = up.prototype.I;
    up.prototype.changed = up.prototype.k;
    up.prototype.getRevision = up.prototype.v;
    up.prototype.on = up.prototype.r;
    up.prototype.once = up.prototype.A;
    up.prototype.un = up.prototype.u;
    up.prototype.unByKey = up.prototype.B;
    az.prototype.addFeature = az.prototype.hf;
    az.prototype.addFeatures = az.prototype.Nc;
    az.prototype.clear = az.prototype.clear;
    az.prototype.forEachFeature = az.prototype.Sf;
    az.prototype.forEachFeatureInExtent = az.prototype.Zc;
    az.prototype.forEachFeatureIntersectingExtent = az.prototype.Ke;
    az.prototype.getFeatures = az.prototype.Cc;
    az.prototype.getFeaturesAtCoordinate = az.prototype.Ne;
    az.prototype.getFeaturesInExtent = az.prototype.Oe;
    az.prototype.getClosestFeatureToCoordinate = az.prototype.Uf;
    az.prototype.getExtent = az.prototype.G;
    az.prototype.getFeatureById = az.prototype.Me;
    az.prototype.removeFeature = az.prototype.Pg;
    az.prototype.getAttributions = az.prototype.ea;
    az.prototype.getLogo = az.prototype.ca;
    az.prototype.getProjection = az.prototype.fa;
    az.prototype.getState = az.prototype.ga;
    az.prototype.get = az.prototype.get;
    az.prototype.getKeys = az.prototype.C;
    az.prototype.getProperties = az.prototype.D;
    az.prototype.set = az.prototype.set;
    az.prototype.setProperties = az.prototype.t;
    az.prototype.unset = az.prototype.I;
    az.prototype.changed = az.prototype.k;
    az.prototype.getRevision = az.prototype.v;
    az.prototype.on = az.prototype.r;
    az.prototype.once = az.prototype.A;
    az.prototype.un = az.prototype.u;
    az.prototype.unByKey = az.prototype.B;
    nn.prototype.getAttributions = nn.prototype.ea;
    nn.prototype.getLogo = nn.prototype.ca;
    nn.prototype.getProjection = nn.prototype.fa;
    nn.prototype.getState = nn.prototype.ga;
    nn.prototype.get = nn.prototype.get;
    nn.prototype.getKeys = nn.prototype.C;
    nn.prototype.getProperties = nn.prototype.D;
    nn.prototype.set = nn.prototype.set;
    nn.prototype.setProperties = nn.prototype.t;
    nn.prototype.unset = nn.prototype.I;
    nn.prototype.changed = nn.prototype.k;
    nn.prototype.getRevision = nn.prototype.v;
    nn.prototype.on = nn.prototype.r;
    nn.prototype.once = nn.prototype.A;
    nn.prototype.un = nn.prototype.u;
    nn.prototype.unByKey = nn.prototype.B;
    un.prototype.getAttributions = un.prototype.ea;
    un.prototype.getLogo = un.prototype.ca;
    un.prototype.getProjection = un.prototype.fa;
    un.prototype.getState = un.prototype.ga;
    un.prototype.get = un.prototype.get;
    un.prototype.getKeys = un.prototype.C;
    un.prototype.getProperties = un.prototype.D;
    un.prototype.set = un.prototype.set;
    un.prototype.setProperties = un.prototype.t;
    un.prototype.unset = un.prototype.I;
    un.prototype.changed = un.prototype.k;
    un.prototype.getRevision = un.prototype.v;
    un.prototype.on = un.prototype.r;
    un.prototype.once = un.prototype.A;
    un.prototype.un = un.prototype.u;
    un.prototype.unByKey = un.prototype.B;
    dz.prototype.getAttributions = dz.prototype.ea;
    dz.prototype.getLogo = dz.prototype.ca;
    dz.prototype.getProjection = dz.prototype.fa;
    dz.prototype.getState = dz.prototype.ga;
    dz.prototype.get = dz.prototype.get;
    dz.prototype.getKeys = dz.prototype.C;
    dz.prototype.getProperties = dz.prototype.D;
    dz.prototype.set = dz.prototype.set;
    dz.prototype.setProperties = dz.prototype.t;
    dz.prototype.unset = dz.prototype.I;
    dz.prototype.changed = dz.prototype.k;
    dz.prototype.getRevision = dz.prototype.v;
    dz.prototype.on = dz.prototype.r;
    dz.prototype.once = dz.prototype.A;
    dz.prototype.un = dz.prototype.u;
    dz.prototype.unByKey = dz.prototype.B;
    ez.prototype.getAttributions = ez.prototype.ea;
    ez.prototype.getLogo = ez.prototype.ca;
    ez.prototype.getProjection = ez.prototype.fa;
    ez.prototype.getState = ez.prototype.ga;
    ez.prototype.get = ez.prototype.get;
    ez.prototype.getKeys = ez.prototype.C;
    ez.prototype.getProperties = ez.prototype.D;
    ez.prototype.set = ez.prototype.set;
    ez.prototype.setProperties = ez.prototype.t;
    ez.prototype.unset = ez.prototype.I;
    ez.prototype.changed = ez.prototype.k;
    ez.prototype.getRevision = ez.prototype.v;
    ez.prototype.on = ez.prototype.r;
    ez.prototype.once = ez.prototype.A;
    ez.prototype.un = ez.prototype.u;
    ez.prototype.unByKey = ez.prototype.B;
    Bp.prototype.getAttributions = Bp.prototype.ea;
    Bp.prototype.getLogo = Bp.prototype.ca;
    Bp.prototype.getProjection = Bp.prototype.fa;
    Bp.prototype.getState = Bp.prototype.ga;
    Bp.prototype.get = Bp.prototype.get;
    Bp.prototype.getKeys = Bp.prototype.C;
    Bp.prototype.getProperties = Bp.prototype.D;
    Bp.prototype.set = Bp.prototype.set;
    Bp.prototype.setProperties = Bp.prototype.t;
    Bp.prototype.unset = Bp.prototype.I;
    Bp.prototype.changed = Bp.prototype.k;
    Bp.prototype.getRevision = Bp.prototype.v;
    Bp.prototype.on = Bp.prototype.r;
    Bp.prototype.once = Bp.prototype.A;
    Bp.prototype.un = Bp.prototype.u;
    Bp.prototype.unByKey = Bp.prototype.B;
    fz.prototype.getAttributions = fz.prototype.ea;
    fz.prototype.getLogo = fz.prototype.ca;
    fz.prototype.getProjection = fz.prototype.fa;
    fz.prototype.getState = fz.prototype.ga;
    fz.prototype.get = fz.prototype.get;
    fz.prototype.getKeys = fz.prototype.C;
    fz.prototype.getProperties = fz.prototype.D;
    fz.prototype.set = fz.prototype.set;
    fz.prototype.setProperties = fz.prototype.t;
    fz.prototype.unset = fz.prototype.I;
    fz.prototype.changed = fz.prototype.k;
    fz.prototype.getRevision = fz.prototype.v;
    fz.prototype.on = fz.prototype.r;
    fz.prototype.once = fz.prototype.A;
    fz.prototype.un = fz.prototype.u;
    fz.prototype.unByKey = fz.prototype.B;
    jz.prototype.getTileLoadFunction = jz.prototype.Va;
    jz.prototype.getTileUrlFunction = jz.prototype.Wa;
    jz.prototype.setTileLoadFunction = jz.prototype.ab;
    jz.prototype.getTileGrid = jz.prototype.ta;
    jz.prototype.getAttributions = jz.prototype.ea;
    jz.prototype.getLogo = jz.prototype.ca;
    jz.prototype.getProjection = jz.prototype.fa;
    jz.prototype.getState = jz.prototype.ga;
    jz.prototype.get = jz.prototype.get;
    jz.prototype.getKeys = jz.prototype.C;
    jz.prototype.getProperties = jz.prototype.D;
    jz.prototype.set = jz.prototype.set;
    jz.prototype.setProperties = jz.prototype.t;
    jz.prototype.unset = jz.prototype.I;
    jz.prototype.changed = jz.prototype.k;
    jz.prototype.getRevision = jz.prototype.v;
    jz.prototype.on = jz.prototype.r;
    jz.prototype.once = jz.prototype.A;
    jz.prototype.un = jz.prototype.u;
    jz.prototype.unByKey = jz.prototype.B;
    mz.prototype.setTileUrlFunction = mz.prototype.pa;
    mz.prototype.setUrl = mz.prototype.e;
    mz.prototype.getTileLoadFunction = mz.prototype.Va;
    mz.prototype.getTileUrlFunction = mz.prototype.Wa;
    mz.prototype.setTileLoadFunction = mz.prototype.ab;
    mz.prototype.getTileGrid = mz.prototype.ta;
    mz.prototype.getAttributions = mz.prototype.ea;
    mz.prototype.getLogo = mz.prototype.ca;
    mz.prototype.getProjection = mz.prototype.fa;
    mz.prototype.getState = mz.prototype.ga;
    mz.prototype.get = mz.prototype.get;
    mz.prototype.getKeys = mz.prototype.C;
    mz.prototype.getProperties = mz.prototype.D;
    mz.prototype.set = mz.prototype.set;
    mz.prototype.setProperties = mz.prototype.t;
    mz.prototype.unset = mz.prototype.I;
    mz.prototype.changed = mz.prototype.k;
    mz.prototype.getRevision = mz.prototype.v;
    mz.prototype.on = mz.prototype.r;
    mz.prototype.once = mz.prototype.A;
    mz.prototype.un = mz.prototype.u;
    mz.prototype.unByKey = mz.prototype.B;
    kz.prototype.setTileUrlFunction = kz.prototype.pa;
    kz.prototype.setUrl = kz.prototype.e;
    kz.prototype.getTileLoadFunction = kz.prototype.Va;
    kz.prototype.getTileUrlFunction = kz.prototype.Wa;
    kz.prototype.setTileLoadFunction = kz.prototype.ab;
    kz.prototype.getTileGrid = kz.prototype.ta;
    kz.prototype.getAttributions = kz.prototype.ea;
    kz.prototype.getLogo = kz.prototype.ca;
    kz.prototype.getProjection = kz.prototype.fa;
    kz.prototype.getState = kz.prototype.ga;
    kz.prototype.get = kz.prototype.get;
    kz.prototype.getKeys = kz.prototype.C;
    kz.prototype.getProperties = kz.prototype.D;
    kz.prototype.set = kz.prototype.set;
    kz.prototype.setProperties = kz.prototype.t;
    kz.prototype.unset = kz.prototype.I;
    kz.prototype.changed = kz.prototype.k;
    kz.prototype.getRevision = kz.prototype.v;
    kz.prototype.on = kz.prototype.r;
    kz.prototype.once = kz.prototype.A;
    kz.prototype.un = kz.prototype.u;
    kz.prototype.unByKey = kz.prototype.B;
    rz.prototype.setTileUrlFunction = rz.prototype.pa;
    rz.prototype.setUrl = rz.prototype.e;
    rz.prototype.getTileLoadFunction = rz.prototype.Va;
    rz.prototype.getTileUrlFunction = rz.prototype.Wa;
    rz.prototype.setTileLoadFunction = rz.prototype.ab;
    rz.prototype.getTileGrid = rz.prototype.ta;
    rz.prototype.getAttributions = rz.prototype.ea;
    rz.prototype.getLogo = rz.prototype.ca;
    rz.prototype.getProjection = rz.prototype.fa;
    rz.prototype.getState = rz.prototype.ga;
    rz.prototype.get = rz.prototype.get;
    rz.prototype.getKeys = rz.prototype.C;
    rz.prototype.getProperties = rz.prototype.D;
    rz.prototype.set = rz.prototype.set;
    rz.prototype.setProperties = rz.prototype.t;
    rz.prototype.unset = rz.prototype.I;
    rz.prototype.changed = rz.prototype.k;
    rz.prototype.getRevision = rz.prototype.v;
    rz.prototype.on = rz.prototype.r;
    rz.prototype.once = rz.prototype.A;
    rz.prototype.un = rz.prototype.u;
    rz.prototype.unByKey = rz.prototype.B;
    tz.prototype.getTileLoadFunction = tz.prototype.Va;
    tz.prototype.getTileUrlFunction = tz.prototype.Wa;
    tz.prototype.setTileLoadFunction = tz.prototype.ab;
    tz.prototype.setTileUrlFunction = tz.prototype.pa;
    tz.prototype.getTileGrid = tz.prototype.ta;
    tz.prototype.getAttributions = tz.prototype.ea;
    tz.prototype.getLogo = tz.prototype.ca;
    tz.prototype.getProjection = tz.prototype.fa;
    tz.prototype.getState = tz.prototype.ga;
    tz.prototype.get = tz.prototype.get;
    tz.prototype.getKeys = tz.prototype.C;
    tz.prototype.getProperties = tz.prototype.D;
    tz.prototype.set = tz.prototype.set;
    tz.prototype.setProperties = tz.prototype.t;
    tz.prototype.unset = tz.prototype.I;
    tz.prototype.changed = tz.prototype.k;
    tz.prototype.getRevision = tz.prototype.v;
    tz.prototype.on = tz.prototype.r;
    tz.prototype.once = tz.prototype.A;
    tz.prototype.un = tz.prototype.u;
    tz.prototype.unByKey = tz.prototype.B;
    vz.prototype.getTileGrid = vz.prototype.ta;
    vz.prototype.getAttributions = vz.prototype.ea;
    vz.prototype.getLogo = vz.prototype.ca;
    vz.prototype.getProjection = vz.prototype.fa;
    vz.prototype.getState = vz.prototype.ga;
    vz.prototype.get = vz.prototype.get;
    vz.prototype.getKeys = vz.prototype.C;
    vz.prototype.getProperties = vz.prototype.D;
    vz.prototype.set = vz.prototype.set;
    vz.prototype.setProperties = vz.prototype.t;
    vz.prototype.unset = vz.prototype.I;
    vz.prototype.changed = vz.prototype.k;
    vz.prototype.getRevision = vz.prototype.v;
    vz.prototype.on = vz.prototype.r;
    vz.prototype.once = vz.prototype.A;
    vz.prototype.un = vz.prototype.u;
    vz.prototype.unByKey = vz.prototype.B;
    wz.prototype.getTileLoadFunction = wz.prototype.Va;
    wz.prototype.getTileUrlFunction = wz.prototype.Wa;
    wz.prototype.setTileLoadFunction = wz.prototype.ab;
    wz.prototype.setTileUrlFunction = wz.prototype.pa;
    wz.prototype.getTileGrid = wz.prototype.ta;
    wz.prototype.getAttributions = wz.prototype.ea;
    wz.prototype.getLogo = wz.prototype.ca;
    wz.prototype.getProjection = wz.prototype.fa;
    wz.prototype.getState = wz.prototype.ga;
    wz.prototype.get = wz.prototype.get;
    wz.prototype.getKeys = wz.prototype.C;
    wz.prototype.getProperties = wz.prototype.D;
    wz.prototype.set = wz.prototype.set;
    wz.prototype.setProperties = wz.prototype.t;
    wz.prototype.unset = wz.prototype.I;
    wz.prototype.changed = wz.prototype.k;
    wz.prototype.getRevision = wz.prototype.v;
    wz.prototype.on = wz.prototype.r;
    wz.prototype.once = wz.prototype.A;
    wz.prototype.un = wz.prototype.u;
    wz.prototype.unByKey = wz.prototype.B;
    xz.prototype.getTileGrid = xz.prototype.ta;
    xz.prototype.getAttributions = xz.prototype.ea;
    xz.prototype.getLogo = xz.prototype.ca;
    xz.prototype.getProjection = xz.prototype.fa;
    xz.prototype.getState = xz.prototype.ga;
    xz.prototype.get = xz.prototype.get;
    xz.prototype.getKeys = xz.prototype.C;
    xz.prototype.getProperties = xz.prototype.D;
    xz.prototype.set = xz.prototype.set;
    xz.prototype.setProperties = xz.prototype.t;
    xz.prototype.unset = xz.prototype.I;
    xz.prototype.changed = xz.prototype.k;
    xz.prototype.getRevision = xz.prototype.v;
    xz.prototype.on = xz.prototype.r;
    xz.prototype.once = xz.prototype.A;
    xz.prototype.un = xz.prototype.u;
    xz.prototype.unByKey = xz.prototype.B;
    Cz.prototype.forEachFeatureIntersectingExtent = Cz.prototype.Ke;
    Cz.prototype.getFeaturesAtCoordinate = Cz.prototype.Ne;
    Cz.prototype.getFeatureById = Cz.prototype.Me;
    Cz.prototype.getAttributions = Cz.prototype.ea;
    Cz.prototype.getLogo = Cz.prototype.ca;
    Cz.prototype.getProjection = Cz.prototype.fa;
    Cz.prototype.getState = Cz.prototype.ga;
    Cz.prototype.get = Cz.prototype.get;
    Cz.prototype.getKeys = Cz.prototype.C;
    Cz.prototype.getProperties = Cz.prototype.D;
    Cz.prototype.set = Cz.prototype.set;
    Cz.prototype.setProperties = Cz.prototype.t;
    Cz.prototype.unset = Cz.prototype.I;
    Cz.prototype.changed = Cz.prototype.k;
    Cz.prototype.getRevision = Cz.prototype.v;
    Cz.prototype.on = Cz.prototype.r;
    Cz.prototype.once = Cz.prototype.A;
    Cz.prototype.un = Cz.prototype.u;
    Cz.prototype.unByKey = Cz.prototype.B;
    Ez.prototype.getTileLoadFunction = Ez.prototype.Va;
    Ez.prototype.getTileUrlFunction = Ez.prototype.Wa;
    Ez.prototype.setTileLoadFunction = Ez.prototype.ab;
    Ez.prototype.setTileUrlFunction = Ez.prototype.pa;
    Ez.prototype.getTileGrid = Ez.prototype.ta;
    Ez.prototype.getAttributions = Ez.prototype.ea;
    Ez.prototype.getLogo = Ez.prototype.ca;
    Ez.prototype.getProjection = Ez.prototype.fa;
    Ez.prototype.getState = Ez.prototype.ga;
    Ez.prototype.get = Ez.prototype.get;
    Ez.prototype.getKeys = Ez.prototype.C;
    Ez.prototype.getProperties = Ez.prototype.D;
    Ez.prototype.set = Ez.prototype.set;
    Ez.prototype.setProperties = Ez.prototype.t;
    Ez.prototype.unset = Ez.prototype.I;
    Ez.prototype.changed = Ez.prototype.k;
    Ez.prototype.getRevision = Ez.prototype.v;
    Ez.prototype.on = Ez.prototype.r;
    Ez.prototype.once = Ez.prototype.A;
    Ez.prototype.un = Ez.prototype.u;
    Ez.prototype.unByKey = Ez.prototype.B;
    Kz.prototype.getTileLoadFunction = Kz.prototype.Va;
    Kz.prototype.getTileUrlFunction = Kz.prototype.Wa;
    Kz.prototype.setTileLoadFunction = Kz.prototype.ab;
    Kz.prototype.setTileUrlFunction = Kz.prototype.pa;
    Kz.prototype.getTileGrid = Kz.prototype.ta;
    Kz.prototype.getAttributions = Kz.prototype.ea;
    Kz.prototype.getLogo = Kz.prototype.ca;
    Kz.prototype.getProjection = Kz.prototype.fa;
    Kz.prototype.getState = Kz.prototype.ga;
    Kz.prototype.get = Kz.prototype.get;
    Kz.prototype.getKeys = Kz.prototype.C;
    Kz.prototype.getProperties = Kz.prototype.D;
    Kz.prototype.set = Kz.prototype.set;
    Kz.prototype.setProperties = Kz.prototype.t;
    Kz.prototype.unset = Kz.prototype.I;
    Kz.prototype.changed = Kz.prototype.k;
    Kz.prototype.getRevision = Kz.prototype.v;
    Kz.prototype.on = Kz.prototype.r;
    Kz.prototype.once = Kz.prototype.A;
    Kz.prototype.un = Kz.prototype.u;
    Kz.prototype.unByKey = Kz.prototype.B;
    Nz.prototype.getTileLoadFunction = Nz.prototype.Va;
    Nz.prototype.getTileUrlFunction = Nz.prototype.Wa;
    Nz.prototype.setTileLoadFunction = Nz.prototype.ab;
    Nz.prototype.setTileUrlFunction = Nz.prototype.pa;
    Nz.prototype.getTileGrid = Nz.prototype.ta;
    Nz.prototype.getAttributions = Nz.prototype.ea;
    Nz.prototype.getLogo = Nz.prototype.ca;
    Nz.prototype.getProjection = Nz.prototype.fa;
    Nz.prototype.getState = Nz.prototype.ga;
    Nz.prototype.get = Nz.prototype.get;
    Nz.prototype.getKeys = Nz.prototype.C;
    Nz.prototype.getProperties = Nz.prototype.D;
    Nz.prototype.set = Nz.prototype.set;
    Nz.prototype.setProperties = Nz.prototype.t;
    Nz.prototype.unset = Nz.prototype.I;
    Nz.prototype.changed = Nz.prototype.k;
    Nz.prototype.getRevision = Nz.prototype.v;
    Nz.prototype.on = Nz.prototype.r;
    Nz.prototype.once = Nz.prototype.A;
    Nz.prototype.un = Nz.prototype.u;
    Nz.prototype.unByKey = Nz.prototype.B;
    wj.prototype.changed = wj.prototype.k;
    wj.prototype.getRevision = wj.prototype.v;
    wj.prototype.on = wj.prototype.r;
    wj.prototype.once = wj.prototype.A;
    wj.prototype.un = wj.prototype.u;
    wj.prototype.unByKey = wj.prototype.B;
    Dq.prototype.changed = Dq.prototype.k;
    Dq.prototype.getRevision = Dq.prototype.v;
    Dq.prototype.on = Dq.prototype.r;
    Dq.prototype.once = Dq.prototype.A;
    Dq.prototype.un = Dq.prototype.u;
    Dq.prototype.unByKey = Dq.prototype.B;
    Gq.prototype.changed = Gq.prototype.k;
    Gq.prototype.getRevision = Gq.prototype.v;
    Gq.prototype.on = Gq.prototype.r;
    Gq.prototype.once = Gq.prototype.A;
    Gq.prototype.un = Gq.prototype.u;
    Gq.prototype.unByKey = Gq.prototype.B;
    Mq.prototype.changed = Mq.prototype.k;
    Mq.prototype.getRevision = Mq.prototype.v;
    Mq.prototype.on = Mq.prototype.r;
    Mq.prototype.once = Mq.prototype.A;
    Mq.prototype.un = Mq.prototype.u;
    Mq.prototype.unByKey = Mq.prototype.B;
    Oq.prototype.changed = Oq.prototype.k;
    Oq.prototype.getRevision = Oq.prototype.v;
    Oq.prototype.on = Oq.prototype.r;
    Oq.prototype.once = Oq.prototype.A;
    Oq.prototype.un = Oq.prototype.u;
    Oq.prototype.unByKey = Oq.prototype.B;
    Ip.prototype.changed = Ip.prototype.k;
    Ip.prototype.getRevision = Ip.prototype.v;
    Ip.prototype.on = Ip.prototype.r;
    Ip.prototype.once = Ip.prototype.A;
    Ip.prototype.un = Ip.prototype.u;
    Ip.prototype.unByKey = Ip.prototype.B;
    Jp.prototype.changed = Jp.prototype.k;
    Jp.prototype.getRevision = Jp.prototype.v;
    Jp.prototype.on = Jp.prototype.r;
    Jp.prototype.once = Jp.prototype.A;
    Jp.prototype.un = Jp.prototype.u;
    Jp.prototype.unByKey = Jp.prototype.B;
    Kp.prototype.changed = Kp.prototype.k;
    Kp.prototype.getRevision = Kp.prototype.v;
    Kp.prototype.on = Kp.prototype.r;
    Kp.prototype.once = Kp.prototype.A;
    Kp.prototype.un = Kp.prototype.u;
    Kp.prototype.unByKey = Kp.prototype.B;
    Mp.prototype.changed = Mp.prototype.k;
    Mp.prototype.getRevision = Mp.prototype.v;
    Mp.prototype.on = Mp.prototype.r;
    Mp.prototype.once = Mp.prototype.A;
    Mp.prototype.un = Mp.prototype.u;
    Mp.prototype.unByKey = Mp.prototype.B;
    Om.prototype.changed = Om.prototype.k;
    Om.prototype.getRevision = Om.prototype.v;
    Om.prototype.on = Om.prototype.r;
    Om.prototype.once = Om.prototype.A;
    Om.prototype.un = Om.prototype.u;
    Om.prototype.unByKey = Om.prototype.B;
    Dp.prototype.changed = Dp.prototype.k;
    Dp.prototype.getRevision = Dp.prototype.v;
    Dp.prototype.on = Dp.prototype.r;
    Dp.prototype.once = Dp.prototype.A;
    Dp.prototype.un = Dp.prototype.u;
    Dp.prototype.unByKey = Dp.prototype.B;
    Ep.prototype.changed = Ep.prototype.k;
    Ep.prototype.getRevision = Ep.prototype.v;
    Ep.prototype.on = Ep.prototype.r;
    Ep.prototype.once = Ep.prototype.A;
    Ep.prototype.un = Ep.prototype.u;
    Ep.prototype.unByKey = Ep.prototype.B;
    Fp.prototype.changed = Fp.prototype.k;
    Fp.prototype.getRevision = Fp.prototype.v;
    Fp.prototype.on = Fp.prototype.r;
    Fp.prototype.once = Fp.prototype.A;
    Fp.prototype.un = Fp.prototype.u;
    Fp.prototype.unByKey = Fp.prototype.B;
    oj.prototype.get = oj.prototype.get;
    oj.prototype.getKeys = oj.prototype.C;
    oj.prototype.getProperties = oj.prototype.D;
    oj.prototype.set = oj.prototype.set;
    oj.prototype.setProperties = oj.prototype.t;
    oj.prototype.unset = oj.prototype.I;
    oj.prototype.changed = oj.prototype.k;
    oj.prototype.getRevision = oj.prototype.v;
    oj.prototype.on = oj.prototype.r;
    oj.prototype.once = oj.prototype.A;
    oj.prototype.un = oj.prototype.u;
    oj.prototype.unByKey = oj.prototype.B;
    D.prototype.getBrightness = D.prototype.Cb;
    D.prototype.getContrast = D.prototype.Db;
    D.prototype.getHue = D.prototype.Eb;
    D.prototype.getExtent = D.prototype.G;
    D.prototype.getMaxResolution = D.prototype.Fb;
    D.prototype.getMinResolution = D.prototype.Gb;
    D.prototype.getOpacity = D.prototype.Kb;
    D.prototype.getSaturation = D.prototype.Hb;
    D.prototype.getVisible = D.prototype.fb;
    D.prototype.setBrightness = D.prototype.gc;
    D.prototype.setContrast = D.prototype.hc;
    D.prototype.setHue = D.prototype.ic;
    D.prototype.setExtent = D.prototype.ac;
    D.prototype.setMaxResolution = D.prototype.jc;
    D.prototype.setMinResolution = D.prototype.kc;
    D.prototype.setOpacity = D.prototype.bc;
    D.prototype.setSaturation = D.prototype.lc;
    D.prototype.setVisible = D.prototype.mc;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.C;
    D.prototype.getProperties = D.prototype.D;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.t;
    D.prototype.unset = D.prototype.I;
    D.prototype.changed = D.prototype.k;
    D.prototype.getRevision = D.prototype.v;
    D.prototype.on = D.prototype.r;
    D.prototype.once = D.prototype.A;
    D.prototype.un = D.prototype.u;
    D.prototype.unByKey = D.prototype.B;
    M.prototype.setSource = M.prototype.Ic;
    M.prototype.getBrightness = M.prototype.Cb;
    M.prototype.getContrast = M.prototype.Db;
    M.prototype.getHue = M.prototype.Eb;
    M.prototype.getExtent = M.prototype.G;
    M.prototype.getMaxResolution = M.prototype.Fb;
    M.prototype.getMinResolution = M.prototype.Gb;
    M.prototype.getOpacity = M.prototype.Kb;
    M.prototype.getSaturation = M.prototype.Hb;
    M.prototype.getVisible = M.prototype.fb;
    M.prototype.setBrightness = M.prototype.gc;
    M.prototype.setContrast = M.prototype.hc;
    M.prototype.setHue = M.prototype.ic;
    M.prototype.setExtent = M.prototype.ac;
    M.prototype.setMaxResolution = M.prototype.jc;
    M.prototype.setMinResolution = M.prototype.kc;
    M.prototype.setOpacity = M.prototype.bc;
    M.prototype.setSaturation = M.prototype.lc;
    M.prototype.setVisible = M.prototype.mc;
    M.prototype.get = M.prototype.get;
    M.prototype.getKeys = M.prototype.C;
    M.prototype.getProperties = M.prototype.D;
    M.prototype.set = M.prototype.set;
    M.prototype.setProperties = M.prototype.t;
    M.prototype.unset = M.prototype.I;
    M.prototype.changed = M.prototype.k;
    M.prototype.getRevision = M.prototype.v;
    M.prototype.on = M.prototype.r;
    M.prototype.once = M.prototype.A;
    M.prototype.un = M.prototype.u;
    M.prototype.unByKey = M.prototype.B;
    Z.prototype.getSource = Z.prototype.da;
    Z.prototype.getStyle = Z.prototype.J;
    Z.prototype.getStyleFunction = Z.prototype.H;
    Z.prototype.setStyle = Z.prototype.e;
    Z.prototype.setSource = Z.prototype.Ic;
    Z.prototype.getBrightness = Z.prototype.Cb;
    Z.prototype.getContrast = Z.prototype.Db;
    Z.prototype.getHue = Z.prototype.Eb;
    Z.prototype.getExtent = Z.prototype.G;
    Z.prototype.getMaxResolution = Z.prototype.Fb;
    Z.prototype.getMinResolution = Z.prototype.Gb;
    Z.prototype.getOpacity = Z.prototype.Kb;
    Z.prototype.getSaturation = Z.prototype.Hb;
    Z.prototype.getVisible = Z.prototype.fb;
    Z.prototype.setBrightness = Z.prototype.gc;
    Z.prototype.setContrast = Z.prototype.hc;
    Z.prototype.setHue = Z.prototype.ic;
    Z.prototype.setExtent = Z.prototype.ac;
    Z.prototype.setMaxResolution = Z.prototype.jc;
    Z.prototype.setMinResolution = Z.prototype.kc;
    Z.prototype.setOpacity = Z.prototype.bc;
    Z.prototype.setSaturation = Z.prototype.lc;
    Z.prototype.setVisible = Z.prototype.mc;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.C;
    Z.prototype.getProperties = Z.prototype.D;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.t;
    Z.prototype.unset = Z.prototype.I;
    Z.prototype.changed = Z.prototype.k;
    Z.prototype.getRevision = Z.prototype.v;
    Z.prototype.on = Z.prototype.r;
    Z.prototype.once = Z.prototype.A;
    Z.prototype.un = Z.prototype.u;
    Z.prototype.unByKey = Z.prototype.B;
    I.prototype.setSource = I.prototype.Ic;
    I.prototype.getBrightness = I.prototype.Cb;
    I.prototype.getContrast = I.prototype.Db;
    I.prototype.getHue = I.prototype.Eb;
    I.prototype.getExtent = I.prototype.G;
    I.prototype.getMaxResolution = I.prototype.Fb;
    I.prototype.getMinResolution = I.prototype.Gb;
    I.prototype.getOpacity = I.prototype.Kb;
    I.prototype.getSaturation = I.prototype.Hb;
    I.prototype.getVisible = I.prototype.fb;
    I.prototype.setBrightness = I.prototype.gc;
    I.prototype.setContrast = I.prototype.hc;
    I.prototype.setHue = I.prototype.ic;
    I.prototype.setExtent = I.prototype.ac;
    I.prototype.setMaxResolution = I.prototype.jc;
    I.prototype.setMinResolution = I.prototype.kc;
    I.prototype.setOpacity = I.prototype.bc;
    I.prototype.setSaturation = I.prototype.lc;
    I.prototype.setVisible = I.prototype.mc;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.C;
    I.prototype.getProperties = I.prototype.D;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.t;
    I.prototype.unset = I.prototype.I;
    I.prototype.changed = I.prototype.k;
    I.prototype.getRevision = I.prototype.v;
    I.prototype.on = I.prototype.r;
    I.prototype.once = I.prototype.A;
    I.prototype.un = I.prototype.u;
    I.prototype.unByKey = I.prototype.B;
    G.prototype.getBrightness = G.prototype.Cb;
    G.prototype.getContrast = G.prototype.Db;
    G.prototype.getHue = G.prototype.Eb;
    G.prototype.getExtent = G.prototype.G;
    G.prototype.getMaxResolution = G.prototype.Fb;
    G.prototype.getMinResolution = G.prototype.Gb;
    G.prototype.getOpacity = G.prototype.Kb;
    G.prototype.getSaturation = G.prototype.Hb;
    G.prototype.getVisible = G.prototype.fb;
    G.prototype.setBrightness = G.prototype.gc;
    G.prototype.setContrast = G.prototype.hc;
    G.prototype.setHue = G.prototype.ic;
    G.prototype.setExtent = G.prototype.ac;
    G.prototype.setMaxResolution = G.prototype.jc;
    G.prototype.setMinResolution = G.prototype.kc;
    G.prototype.setOpacity = G.prototype.bc;
    G.prototype.setSaturation = G.prototype.lc;
    G.prototype.setVisible = G.prototype.mc;
    G.prototype.get = G.prototype.get;
    G.prototype.getKeys = G.prototype.C;
    G.prototype.getProperties = G.prototype.D;
    G.prototype.set = G.prototype.set;
    G.prototype.setProperties = G.prototype.t;
    G.prototype.unset = G.prototype.I;
    G.prototype.changed = G.prototype.k;
    G.prototype.getRevision = G.prototype.v;
    G.prototype.on = G.prototype.r;
    G.prototype.once = G.prototype.A;
    G.prototype.un = G.prototype.u;
    G.prototype.unByKey = G.prototype.B;
    L.prototype.setSource = L.prototype.Ic;
    L.prototype.getBrightness = L.prototype.Cb;
    L.prototype.getContrast = L.prototype.Db;
    L.prototype.getHue = L.prototype.Eb;
    L.prototype.getExtent = L.prototype.G;
    L.prototype.getMaxResolution = L.prototype.Fb;
    L.prototype.getMinResolution = L.prototype.Gb;
    L.prototype.getOpacity = L.prototype.Kb;
    L.prototype.getSaturation = L.prototype.Hb;
    L.prototype.getVisible = L.prototype.fb;
    L.prototype.setBrightness = L.prototype.gc;
    L.prototype.setContrast = L.prototype.hc;
    L.prototype.setHue = L.prototype.ic;
    L.prototype.setExtent = L.prototype.ac;
    L.prototype.setMaxResolution = L.prototype.jc;
    L.prototype.setMinResolution = L.prototype.kc;
    L.prototype.setOpacity = L.prototype.bc;
    L.prototype.setSaturation = L.prototype.lc;
    L.prototype.setVisible = L.prototype.mc;
    L.prototype.get = L.prototype.get;
    L.prototype.getKeys = L.prototype.C;
    L.prototype.getProperties = L.prototype.D;
    L.prototype.set = L.prototype.set;
    L.prototype.setProperties = L.prototype.t;
    L.prototype.unset = L.prototype.I;
    L.prototype.changed = L.prototype.k;
    L.prototype.getRevision = L.prototype.v;
    L.prototype.on = L.prototype.r;
    L.prototype.once = L.prototype.A;
    L.prototype.un = L.prototype.u;
    L.prototype.unByKey = L.prototype.B;
    Yj.prototype.get = Yj.prototype.get;
    Yj.prototype.getKeys = Yj.prototype.C;
    Yj.prototype.getProperties = Yj.prototype.D;
    Yj.prototype.set = Yj.prototype.set;
    Yj.prototype.setProperties = Yj.prototype.t;
    Yj.prototype.unset = Yj.prototype.I;
    Yj.prototype.changed = Yj.prototype.k;
    Yj.prototype.getRevision = Yj.prototype.v;
    Yj.prototype.on = Yj.prototype.r;
    Yj.prototype.once = Yj.prototype.A;
    Yj.prototype.un = Yj.prototype.u;
    Yj.prototype.unByKey = Yj.prototype.B;
    ck.prototype.getActive = ck.prototype.b;
    ck.prototype.setActive = ck.prototype.d;
    ck.prototype.get = ck.prototype.get;
    ck.prototype.getKeys = ck.prototype.C;
    ck.prototype.getProperties = ck.prototype.D;
    ck.prototype.set = ck.prototype.set;
    ck.prototype.setProperties = ck.prototype.t;
    ck.prototype.unset = ck.prototype.I;
    ck.prototype.changed = ck.prototype.k;
    ck.prototype.getRevision = ck.prototype.v;
    ck.prototype.on = ck.prototype.r;
    ck.prototype.once = ck.prototype.A;
    ck.prototype.un = ck.prototype.u;
    ck.prototype.unByKey = ck.prototype.B;
    Ox.prototype.getActive = Ox.prototype.b;
    Ox.prototype.setActive = Ox.prototype.d;
    Ox.prototype.get = Ox.prototype.get;
    Ox.prototype.getKeys = Ox.prototype.C;
    Ox.prototype.getProperties = Ox.prototype.D;
    Ox.prototype.set = Ox.prototype.set;
    Ox.prototype.setProperties = Ox.prototype.t;
    Ox.prototype.unset = Ox.prototype.I;
    Ox.prototype.changed = Ox.prototype.k;
    Ox.prototype.getRevision = Ox.prototype.v;
    Ox.prototype.on = Ox.prototype.r;
    Ox.prototype.once = Ox.prototype.A;
    Ox.prototype.un = Ox.prototype.u;
    Ox.prototype.unByKey = Ox.prototype.B;
    lk.prototype.getActive = lk.prototype.b;
    lk.prototype.setActive = lk.prototype.d;
    lk.prototype.get = lk.prototype.get;
    lk.prototype.getKeys = lk.prototype.C;
    lk.prototype.getProperties = lk.prototype.D;
    lk.prototype.set = lk.prototype.set;
    lk.prototype.setProperties = lk.prototype.t;
    lk.prototype.unset = lk.prototype.I;
    lk.prototype.changed = lk.prototype.k;
    lk.prototype.getRevision = lk.prototype.v;
    lk.prototype.on = lk.prototype.r;
    lk.prototype.once = lk.prototype.A;
    lk.prototype.un = lk.prototype.u;
    lk.prototype.unByKey = lk.prototype.B;
    sl.prototype.getActive = sl.prototype.b;
    sl.prototype.setActive = sl.prototype.d;
    sl.prototype.get = sl.prototype.get;
    sl.prototype.getKeys = sl.prototype.C;
    sl.prototype.getProperties = sl.prototype.D;
    sl.prototype.set = sl.prototype.set;
    sl.prototype.setProperties = sl.prototype.t;
    sl.prototype.unset = sl.prototype.I;
    sl.prototype.changed = sl.prototype.k;
    sl.prototype.getRevision = sl.prototype.v;
    sl.prototype.on = sl.prototype.r;
    sl.prototype.once = sl.prototype.A;
    sl.prototype.un = sl.prototype.u;
    sl.prototype.unByKey = sl.prototype.B;
    ok.prototype.getActive = ok.prototype.b;
    ok.prototype.setActive = ok.prototype.d;
    ok.prototype.get = ok.prototype.get;
    ok.prototype.getKeys = ok.prototype.C;
    ok.prototype.getProperties = ok.prototype.D;
    ok.prototype.set = ok.prototype.set;
    ok.prototype.setProperties = ok.prototype.t;
    ok.prototype.unset = ok.prototype.I;
    ok.prototype.changed = ok.prototype.k;
    ok.prototype.getRevision = ok.prototype.v;
    ok.prototype.on = ok.prototype.r;
    ok.prototype.once = ok.prototype.A;
    ok.prototype.un = ok.prototype.u;
    ok.prototype.unByKey = ok.prototype.B;
    Sx.prototype.getActive = Sx.prototype.b;
    Sx.prototype.setActive = Sx.prototype.d;
    Sx.prototype.get = Sx.prototype.get;
    Sx.prototype.getKeys = Sx.prototype.C;
    Sx.prototype.getProperties = Sx.prototype.D;
    Sx.prototype.set = Sx.prototype.set;
    Sx.prototype.setProperties = Sx.prototype.t;
    Sx.prototype.unset = Sx.prototype.I;
    Sx.prototype.changed = Sx.prototype.k;
    Sx.prototype.getRevision = Sx.prototype.v;
    Sx.prototype.on = Sx.prototype.r;
    Sx.prototype.once = Sx.prototype.A;
    Sx.prototype.un = Sx.prototype.u;
    Sx.prototype.unByKey = Sx.prototype.B;
    sk.prototype.getActive = sk.prototype.b;
    sk.prototype.setActive = sk.prototype.d;
    sk.prototype.get = sk.prototype.get;
    sk.prototype.getKeys = sk.prototype.C;
    sk.prototype.getProperties = sk.prototype.D;
    sk.prototype.set = sk.prototype.set;
    sk.prototype.setProperties = sk.prototype.t;
    sk.prototype.unset = sk.prototype.I;
    sk.prototype.changed = sk.prototype.k;
    sk.prototype.getRevision = sk.prototype.v;
    sk.prototype.on = sk.prototype.r;
    sk.prototype.once = sk.prototype.A;
    sk.prototype.un = sk.prototype.u;
    sk.prototype.unByKey = sk.prototype.B;
    Kl.prototype.getGeometry = Kl.prototype.Q;
    Kl.prototype.getActive = Kl.prototype.b;
    Kl.prototype.setActive = Kl.prototype.d;
    Kl.prototype.get = Kl.prototype.get;
    Kl.prototype.getKeys = Kl.prototype.C;
    Kl.prototype.getProperties = Kl.prototype.D;
    Kl.prototype.set = Kl.prototype.set;
    Kl.prototype.setProperties = Kl.prototype.t;
    Kl.prototype.unset = Kl.prototype.I;
    Kl.prototype.changed = Kl.prototype.k;
    Kl.prototype.getRevision = Kl.prototype.v;
    Kl.prototype.on = Kl.prototype.r;
    Kl.prototype.once = Kl.prototype.A;
    Kl.prototype.un = Kl.prototype.u;
    Kl.prototype.unByKey = Kl.prototype.B;
    Xx.prototype.getActive = Xx.prototype.b;
    Xx.prototype.setActive = Xx.prototype.d;
    Xx.prototype.get = Xx.prototype.get;
    Xx.prototype.getKeys = Xx.prototype.C;
    Xx.prototype.getProperties = Xx.prototype.D;
    Xx.prototype.set = Xx.prototype.set;
    Xx.prototype.setProperties = Xx.prototype.t;
    Xx.prototype.unset = Xx.prototype.I;
    Xx.prototype.changed = Xx.prototype.k;
    Xx.prototype.getRevision = Xx.prototype.v;
    Xx.prototype.on = Xx.prototype.r;
    Xx.prototype.once = Xx.prototype.A;
    Xx.prototype.un = Xx.prototype.u;
    Xx.prototype.unByKey = Xx.prototype.B;
    Ll.prototype.getActive = Ll.prototype.b;
    Ll.prototype.setActive = Ll.prototype.d;
    Ll.prototype.get = Ll.prototype.get;
    Ll.prototype.getKeys = Ll.prototype.C;
    Ll.prototype.getProperties = Ll.prototype.D;
    Ll.prototype.set = Ll.prototype.set;
    Ll.prototype.setProperties = Ll.prototype.t;
    Ll.prototype.unset = Ll.prototype.I;
    Ll.prototype.changed = Ll.prototype.k;
    Ll.prototype.getRevision = Ll.prototype.v;
    Ll.prototype.on = Ll.prototype.r;
    Ll.prototype.once = Ll.prototype.A;
    Ll.prototype.un = Ll.prototype.u;
    Ll.prototype.unByKey = Ll.prototype.B;
    Nl.prototype.getActive = Nl.prototype.b;
    Nl.prototype.setActive = Nl.prototype.d;
    Nl.prototype.get = Nl.prototype.get;
    Nl.prototype.getKeys = Nl.prototype.C;
    Nl.prototype.getProperties = Nl.prototype.D;
    Nl.prototype.set = Nl.prototype.set;
    Nl.prototype.setProperties = Nl.prototype.t;
    Nl.prototype.unset = Nl.prototype.I;
    Nl.prototype.changed = Nl.prototype.k;
    Nl.prototype.getRevision = Nl.prototype.v;
    Nl.prototype.on = Nl.prototype.r;
    Nl.prototype.once = Nl.prototype.A;
    Nl.prototype.un = Nl.prototype.u;
    Nl.prototype.unByKey = Nl.prototype.B;
    my.prototype.getActive = my.prototype.b;
    my.prototype.setActive = my.prototype.d;
    my.prototype.get = my.prototype.get;
    my.prototype.getKeys = my.prototype.C;
    my.prototype.getProperties = my.prototype.D;
    my.prototype.set = my.prototype.set;
    my.prototype.setProperties = my.prototype.t;
    my.prototype.unset = my.prototype.I;
    my.prototype.changed = my.prototype.k;
    my.prototype.getRevision = my.prototype.v;
    my.prototype.on = my.prototype.r;
    my.prototype.once = my.prototype.A;
    my.prototype.un = my.prototype.u;
    my.prototype.unByKey = my.prototype.B;
    Pl.prototype.getActive = Pl.prototype.b;
    Pl.prototype.setActive = Pl.prototype.d;
    Pl.prototype.get = Pl.prototype.get;
    Pl.prototype.getKeys = Pl.prototype.C;
    Pl.prototype.getProperties = Pl.prototype.D;
    Pl.prototype.set = Pl.prototype.set;
    Pl.prototype.setProperties = Pl.prototype.t;
    Pl.prototype.unset = Pl.prototype.I;
    Pl.prototype.changed = Pl.prototype.k;
    Pl.prototype.getRevision = Pl.prototype.v;
    Pl.prototype.on = Pl.prototype.r;
    Pl.prototype.once = Pl.prototype.A;
    Pl.prototype.un = Pl.prototype.u;
    Pl.prototype.unByKey = Pl.prototype.B;
    Rl.prototype.getActive = Rl.prototype.b;
    Rl.prototype.setActive = Rl.prototype.d;
    Rl.prototype.get = Rl.prototype.get;
    Rl.prototype.getKeys = Rl.prototype.C;
    Rl.prototype.getProperties = Rl.prototype.D;
    Rl.prototype.set = Rl.prototype.set;
    Rl.prototype.setProperties = Rl.prototype.t;
    Rl.prototype.unset = Rl.prototype.I;
    Rl.prototype.changed = Rl.prototype.k;
    Rl.prototype.getRevision = Rl.prototype.v;
    Rl.prototype.on = Rl.prototype.r;
    Rl.prototype.once = Rl.prototype.A;
    Rl.prototype.un = Rl.prototype.u;
    Rl.prototype.unByKey = Rl.prototype.B;
    Vl.prototype.getActive = Vl.prototype.b;
    Vl.prototype.setActive = Vl.prototype.d;
    Vl.prototype.get = Vl.prototype.get;
    Vl.prototype.getKeys = Vl.prototype.C;
    Vl.prototype.getProperties = Vl.prototype.D;
    Vl.prototype.set = Vl.prototype.set;
    Vl.prototype.setProperties = Vl.prototype.t;
    Vl.prototype.unset = Vl.prototype.I;
    Vl.prototype.changed = Vl.prototype.k;
    Vl.prototype.getRevision = Vl.prototype.v;
    Vl.prototype.on = Vl.prototype.r;
    Vl.prototype.once = Vl.prototype.A;
    Vl.prototype.un = Vl.prototype.u;
    Vl.prototype.unByKey = Vl.prototype.B;
    xy.prototype.getActive = xy.prototype.b;
    xy.prototype.setActive = xy.prototype.d;
    xy.prototype.get = xy.prototype.get;
    xy.prototype.getKeys = xy.prototype.C;
    xy.prototype.getProperties = xy.prototype.D;
    xy.prototype.set = xy.prototype.set;
    xy.prototype.setProperties = xy.prototype.t;
    xy.prototype.unset = xy.prototype.I;
    xy.prototype.changed = xy.prototype.k;
    xy.prototype.getRevision = xy.prototype.v;
    xy.prototype.on = xy.prototype.r;
    xy.prototype.once = xy.prototype.A;
    xy.prototype.un = xy.prototype.u;
    xy.prototype.unByKey = xy.prototype.B;
    Ay.prototype.getActive = Ay.prototype.b;
    Ay.prototype.setActive = Ay.prototype.d;
    Ay.prototype.get = Ay.prototype.get;
    Ay.prototype.getKeys = Ay.prototype.C;
    Ay.prototype.getProperties = Ay.prototype.D;
    Ay.prototype.set = Ay.prototype.set;
    Ay.prototype.setProperties = Ay.prototype.t;
    Ay.prototype.unset = Ay.prototype.I;
    Ay.prototype.changed = Ay.prototype.k;
    Ay.prototype.getRevision = Ay.prototype.v;
    Ay.prototype.on = Ay.prototype.r;
    Ay.prototype.once = Ay.prototype.A;
    Ay.prototype.un = Ay.prototype.u;
    Ay.prototype.unByKey = Ay.prototype.B;
    wk.prototype.get = wk.prototype.get;
    wk.prototype.getKeys = wk.prototype.C;
    wk.prototype.getProperties = wk.prototype.D;
    wk.prototype.set = wk.prototype.set;
    wk.prototype.setProperties = wk.prototype.t;
    wk.prototype.unset = wk.prototype.I;
    wk.prototype.changed = wk.prototype.k;
    wk.prototype.getRevision = wk.prototype.v;
    wk.prototype.on = wk.prototype.r;
    wk.prototype.once = wk.prototype.A;
    wk.prototype.un = wk.prototype.u;
    wk.prototype.unByKey = wk.prototype.B;
    yk.prototype.getClosestPoint = yk.prototype.Ua;
    yk.prototype.getExtent = yk.prototype.G;
    yk.prototype.get = yk.prototype.get;
    yk.prototype.getKeys = yk.prototype.C;
    yk.prototype.getProperties = yk.prototype.D;
    yk.prototype.set = yk.prototype.set;
    yk.prototype.setProperties = yk.prototype.t;
    yk.prototype.unset = yk.prototype.I;
    yk.prototype.changed = yk.prototype.k;
    yk.prototype.getRevision = yk.prototype.v;
    yk.prototype.on = yk.prototype.r;
    yk.prototype.once = yk.prototype.A;
    yk.prototype.un = yk.prototype.u;
    yk.prototype.unByKey = yk.prototype.B;
    Tm.prototype.getFirstCoordinate = Tm.prototype.tb;
    Tm.prototype.getLastCoordinate = Tm.prototype.ub;
    Tm.prototype.getLayout = Tm.prototype.vb;
    Tm.prototype.applyTransform = Tm.prototype.qa;
    Tm.prototype.translate = Tm.prototype.Oa;
    Tm.prototype.getClosestPoint = Tm.prototype.Ua;
    Tm.prototype.getExtent = Tm.prototype.G;
    Tm.prototype.get = Tm.prototype.get;
    Tm.prototype.getKeys = Tm.prototype.C;
    Tm.prototype.getProperties = Tm.prototype.D;
    Tm.prototype.set = Tm.prototype.set;
    Tm.prototype.setProperties = Tm.prototype.t;
    Tm.prototype.unset = Tm.prototype.I;
    Tm.prototype.changed = Tm.prototype.k;
    Tm.prototype.getRevision = Tm.prototype.v;
    Tm.prototype.on = Tm.prototype.r;
    Tm.prototype.once = Tm.prototype.A;
    Tm.prototype.un = Tm.prototype.u;
    Tm.prototype.unByKey = Tm.prototype.B;
    Vm.prototype.getClosestPoint = Vm.prototype.Ua;
    Vm.prototype.getExtent = Vm.prototype.G;
    Vm.prototype.get = Vm.prototype.get;
    Vm.prototype.getKeys = Vm.prototype.C;
    Vm.prototype.getProperties = Vm.prototype.D;
    Vm.prototype.set = Vm.prototype.set;
    Vm.prototype.setProperties = Vm.prototype.t;
    Vm.prototype.unset = Vm.prototype.I;
    Vm.prototype.changed = Vm.prototype.k;
    Vm.prototype.getRevision = Vm.prototype.v;
    Vm.prototype.on = Vm.prototype.r;
    Vm.prototype.once = Vm.prototype.A;
    Vm.prototype.un = Vm.prototype.u;
    Vm.prototype.unByKey = Vm.prototype.B;
    Sk.prototype.getFirstCoordinate = Sk.prototype.tb;
    Sk.prototype.getLastCoordinate = Sk.prototype.ub;
    Sk.prototype.getLayout = Sk.prototype.vb;
    Sk.prototype.applyTransform = Sk.prototype.qa;
    Sk.prototype.translate = Sk.prototype.Oa;
    Sk.prototype.getClosestPoint = Sk.prototype.Ua;
    Sk.prototype.getExtent = Sk.prototype.G;
    Sk.prototype.get = Sk.prototype.get;
    Sk.prototype.getKeys = Sk.prototype.C;
    Sk.prototype.getProperties = Sk.prototype.D;
    Sk.prototype.set = Sk.prototype.set;
    Sk.prototype.setProperties = Sk.prototype.t;
    Sk.prototype.unset = Sk.prototype.I;
    Sk.prototype.changed = Sk.prototype.k;
    Sk.prototype.getRevision = Sk.prototype.v;
    Sk.prototype.on = Sk.prototype.r;
    Sk.prototype.once = Sk.prototype.A;
    Sk.prototype.un = Sk.prototype.u;
    Sk.prototype.unByKey = Sk.prototype.B;
    N.prototype.getFirstCoordinate = N.prototype.tb;
    N.prototype.getLastCoordinate = N.prototype.ub;
    N.prototype.getLayout = N.prototype.vb;
    N.prototype.applyTransform = N.prototype.qa;
    N.prototype.translate = N.prototype.Oa;
    N.prototype.getClosestPoint = N.prototype.Ua;
    N.prototype.getExtent = N.prototype.G;
    N.prototype.get = N.prototype.get;
    N.prototype.getKeys = N.prototype.C;
    N.prototype.getProperties = N.prototype.D;
    N.prototype.set = N.prototype.set;
    N.prototype.setProperties = N.prototype.t;
    N.prototype.unset = N.prototype.I;
    N.prototype.changed = N.prototype.k;
    N.prototype.getRevision = N.prototype.v;
    N.prototype.on = N.prototype.r;
    N.prototype.once = N.prototype.A;
    N.prototype.un = N.prototype.u;
    N.prototype.unByKey = N.prototype.B;
    P.prototype.getFirstCoordinate = P.prototype.tb;
    P.prototype.getLastCoordinate = P.prototype.ub;
    P.prototype.getLayout = P.prototype.vb;
    P.prototype.applyTransform = P.prototype.qa;
    P.prototype.translate = P.prototype.Oa;
    P.prototype.getClosestPoint = P.prototype.Ua;
    P.prototype.getExtent = P.prototype.G;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.C;
    P.prototype.getProperties = P.prototype.D;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.t;
    P.prototype.unset = P.prototype.I;
    P.prototype.changed = P.prototype.k;
    P.prototype.getRevision = P.prototype.v;
    P.prototype.on = P.prototype.r;
    P.prototype.once = P.prototype.A;
    P.prototype.un = P.prototype.u;
    P.prototype.unByKey = P.prototype.B;
    en.prototype.getFirstCoordinate = en.prototype.tb;
    en.prototype.getLastCoordinate = en.prototype.ub;
    en.prototype.getLayout = en.prototype.vb;
    en.prototype.applyTransform = en.prototype.qa;
    en.prototype.translate = en.prototype.Oa;
    en.prototype.getClosestPoint = en.prototype.Ua;
    en.prototype.getExtent = en.prototype.G;
    en.prototype.get = en.prototype.get;
    en.prototype.getKeys = en.prototype.C;
    en.prototype.getProperties = en.prototype.D;
    en.prototype.set = en.prototype.set;
    en.prototype.setProperties = en.prototype.t;
    en.prototype.unset = en.prototype.I;
    en.prototype.changed = en.prototype.k;
    en.prototype.getRevision = en.prototype.v;
    en.prototype.on = en.prototype.r;
    en.prototype.once = en.prototype.A;
    en.prototype.un = en.prototype.u;
    en.prototype.unByKey = en.prototype.B;
    R.prototype.getFirstCoordinate = R.prototype.tb;
    R.prototype.getLastCoordinate = R.prototype.ub;
    R.prototype.getLayout = R.prototype.vb;
    R.prototype.applyTransform = R.prototype.qa;
    R.prototype.translate = R.prototype.Oa;
    R.prototype.getClosestPoint = R.prototype.Ua;
    R.prototype.getExtent = R.prototype.G;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.C;
    R.prototype.getProperties = R.prototype.D;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.t;
    R.prototype.unset = R.prototype.I;
    R.prototype.changed = R.prototype.k;
    R.prototype.getRevision = R.prototype.v;
    R.prototype.on = R.prototype.r;
    R.prototype.once = R.prototype.A;
    R.prototype.un = R.prototype.u;
    R.prototype.unByKey = R.prototype.B;
    E.prototype.getFirstCoordinate = E.prototype.tb;
    E.prototype.getLastCoordinate = E.prototype.ub;
    E.prototype.getLayout = E.prototype.vb;
    E.prototype.applyTransform = E.prototype.qa;
    E.prototype.translate = E.prototype.Oa;
    E.prototype.getClosestPoint = E.prototype.Ua;
    E.prototype.getExtent = E.prototype.G;
    E.prototype.get = E.prototype.get;
    E.prototype.getKeys = E.prototype.C;
    E.prototype.getProperties = E.prototype.D;
    E.prototype.set = E.prototype.set;
    E.prototype.setProperties = E.prototype.t;
    E.prototype.unset = E.prototype.I;
    E.prototype.changed = E.prototype.k;
    E.prototype.getRevision = E.prototype.v;
    E.prototype.on = E.prototype.r;
    E.prototype.once = E.prototype.A;
    E.prototype.un = E.prototype.u;
    E.prototype.unByKey = E.prototype.B;
    F.prototype.getFirstCoordinate = F.prototype.tb;
    F.prototype.getLastCoordinate = F.prototype.ub;
    F.prototype.getLayout = F.prototype.vb;
    F.prototype.applyTransform = F.prototype.qa;
    F.prototype.translate = F.prototype.Oa;
    F.prototype.getClosestPoint = F.prototype.Ua;
    F.prototype.getExtent = F.prototype.G;
    F.prototype.get = F.prototype.get;
    F.prototype.getKeys = F.prototype.C;
    F.prototype.getProperties = F.prototype.D;
    F.prototype.set = F.prototype.set;
    F.prototype.setProperties = F.prototype.t;
    F.prototype.unset = F.prototype.I;
    F.prototype.changed = F.prototype.k;
    F.prototype.getRevision = F.prototype.v;
    F.prototype.on = F.prototype.r;
    F.prototype.once = F.prototype.A;
    F.prototype.un = F.prototype.u;
    F.prototype.unByKey = F.prototype.B;
    ps.prototype.readFeatures = ps.prototype.ja;
    gs.prototype.readFeatures = gs.prototype.ja;
    gs.prototype.readFeatures = gs.prototype.ja;
    tg.prototype.get = tg.prototype.get;
    tg.prototype.getKeys = tg.prototype.C;
    tg.prototype.getProperties = tg.prototype.D;
    tg.prototype.set = tg.prototype.set;
    tg.prototype.setProperties = tg.prototype.t;
    tg.prototype.unset = tg.prototype.I;
    tg.prototype.changed = tg.prototype.k;
    tg.prototype.getRevision = tg.prototype.v;
    tg.prototype.on = tg.prototype.r;
    tg.prototype.once = tg.prototype.A;
    tg.prototype.un = tg.prototype.u;
    tg.prototype.unByKey = tg.prototype.B;
    eh.prototype.getMap = eh.prototype.e;
    eh.prototype.setMap = eh.prototype.setMap;
    eh.prototype.setTarget = eh.prototype.c;
    eh.prototype.get = eh.prototype.get;
    eh.prototype.getKeys = eh.prototype.C;
    eh.prototype.getProperties = eh.prototype.D;
    eh.prototype.set = eh.prototype.set;
    eh.prototype.setProperties = eh.prototype.t;
    eh.prototype.unset = eh.prototype.I;
    eh.prototype.changed = eh.prototype.k;
    eh.prototype.getRevision = eh.prototype.v;
    eh.prototype.on = eh.prototype.r;
    eh.prototype.once = eh.prototype.A;
    eh.prototype.un = eh.prototype.u;
    eh.prototype.unByKey = eh.prototype.B;
    ph.prototype.getMap = ph.prototype.e;
    ph.prototype.setMap = ph.prototype.setMap;
    ph.prototype.setTarget = ph.prototype.c;
    ph.prototype.get = ph.prototype.get;
    ph.prototype.getKeys = ph.prototype.C;
    ph.prototype.getProperties = ph.prototype.D;
    ph.prototype.set = ph.prototype.set;
    ph.prototype.setProperties = ph.prototype.t;
    ph.prototype.unset = ph.prototype.I;
    ph.prototype.changed = ph.prototype.k;
    ph.prototype.getRevision = ph.prototype.v;
    ph.prototype.on = ph.prototype.r;
    ph.prototype.once = ph.prototype.A;
    ph.prototype.un = ph.prototype.u;
    ph.prototype.unByKey = ph.prototype.B;
    qh.prototype.getMap = qh.prototype.e;
    qh.prototype.setTarget = qh.prototype.c;
    qh.prototype.get = qh.prototype.get;
    qh.prototype.getKeys = qh.prototype.C;
    qh.prototype.getProperties = qh.prototype.D;
    qh.prototype.set = qh.prototype.set;
    qh.prototype.setProperties = qh.prototype.t;
    qh.prototype.unset = qh.prototype.I;
    qh.prototype.changed = qh.prototype.k;
    qh.prototype.getRevision = qh.prototype.v;
    qh.prototype.on = qh.prototype.r;
    qh.prototype.once = qh.prototype.A;
    qh.prototype.un = qh.prototype.u;
    qh.prototype.unByKey = qh.prototype.B;
    Yq.prototype.getMap = Yq.prototype.e;
    Yq.prototype.setTarget = Yq.prototype.c;
    Yq.prototype.get = Yq.prototype.get;
    Yq.prototype.getKeys = Yq.prototype.C;
    Yq.prototype.getProperties = Yq.prototype.D;
    Yq.prototype.set = Yq.prototype.set;
    Yq.prototype.setProperties = Yq.prototype.t;
    Yq.prototype.unset = Yq.prototype.I;
    Yq.prototype.changed = Yq.prototype.k;
    Yq.prototype.getRevision = Yq.prototype.v;
    Yq.prototype.on = Yq.prototype.r;
    Yq.prototype.once = Yq.prototype.A;
    Yq.prototype.un = Yq.prototype.u;
    Yq.prototype.unByKey = Yq.prototype.B;
    hh.prototype.getMap = hh.prototype.e;
    hh.prototype.setMap = hh.prototype.setMap;
    hh.prototype.setTarget = hh.prototype.c;
    hh.prototype.get = hh.prototype.get;
    hh.prototype.getKeys = hh.prototype.C;
    hh.prototype.getProperties = hh.prototype.D;
    hh.prototype.set = hh.prototype.set;
    hh.prototype.setProperties = hh.prototype.t;
    hh.prototype.unset = hh.prototype.I;
    hh.prototype.changed = hh.prototype.k;
    hh.prototype.getRevision = hh.prototype.v;
    hh.prototype.on = hh.prototype.r;
    hh.prototype.once = hh.prototype.A;
    hh.prototype.un = hh.prototype.u;
    hh.prototype.unByKey = hh.prototype.B;
    cr.prototype.getMap = cr.prototype.e;
    cr.prototype.setMap = cr.prototype.setMap;
    cr.prototype.setTarget = cr.prototype.c;
    cr.prototype.get = cr.prototype.get;
    cr.prototype.getKeys = cr.prototype.C;
    cr.prototype.getProperties = cr.prototype.D;
    cr.prototype.set = cr.prototype.set;
    cr.prototype.setProperties = cr.prototype.t;
    cr.prototype.unset = cr.prototype.I;
    cr.prototype.changed = cr.prototype.k;
    cr.prototype.getRevision = cr.prototype.v;
    cr.prototype.on = cr.prototype.r;
    cr.prototype.once = cr.prototype.A;
    cr.prototype.un = cr.prototype.u;
    cr.prototype.unByKey = cr.prototype.B;
    jh.prototype.getMap = jh.prototype.e;
    jh.prototype.setMap = jh.prototype.setMap;
    jh.prototype.setTarget = jh.prototype.c;
    jh.prototype.get = jh.prototype.get;
    jh.prototype.getKeys = jh.prototype.C;
    jh.prototype.getProperties = jh.prototype.D;
    jh.prototype.set = jh.prototype.set;
    jh.prototype.setProperties = jh.prototype.t;
    jh.prototype.unset = jh.prototype.I;
    jh.prototype.changed = jh.prototype.k;
    jh.prototype.getRevision = jh.prototype.v;
    jh.prototype.on = jh.prototype.r;
    jh.prototype.once = jh.prototype.A;
    jh.prototype.un = jh.prototype.u;
    jh.prototype.unByKey = jh.prototype.B;
    rr.prototype.getMap = rr.prototype.e;
    rr.prototype.setTarget = rr.prototype.c;
    rr.prototype.get = rr.prototype.get;
    rr.prototype.getKeys = rr.prototype.C;
    rr.prototype.getProperties = rr.prototype.D;
    rr.prototype.set = rr.prototype.set;
    rr.prototype.setProperties = rr.prototype.t;
    rr.prototype.unset = rr.prototype.I;
    rr.prototype.changed = rr.prototype.k;
    rr.prototype.getRevision = rr.prototype.v;
    rr.prototype.on = rr.prototype.r;
    rr.prototype.once = rr.prototype.A;
    rr.prototype.un = rr.prototype.u;
    rr.prototype.unByKey = rr.prototype.B;
    wr.prototype.getMap = wr.prototype.e;
    wr.prototype.setMap = wr.prototype.setMap;
    wr.prototype.setTarget = wr.prototype.c;
    wr.prototype.get = wr.prototype.get;
    wr.prototype.getKeys = wr.prototype.C;
    wr.prototype.getProperties = wr.prototype.D;
    wr.prototype.set = wr.prototype.set;
    wr.prototype.setProperties = wr.prototype.t;
    wr.prototype.unset = wr.prototype.I;
    wr.prototype.changed = wr.prototype.k;
    wr.prototype.getRevision = wr.prototype.v;
    wr.prototype.on = wr.prototype.r;
    wr.prototype.once = wr.prototype.A;
    wr.prototype.un = wr.prototype.u;
    wr.prototype.unByKey = wr.prototype.B;
    return OPENLAYERS.ol;
}));

