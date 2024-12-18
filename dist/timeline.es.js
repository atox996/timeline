var Nt = Object.defineProperty;
var Rt = (h, t, e) => t in h ? Nt(h, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : h[t] = e;
var ut = (h, t, e) => (Rt(h, typeof t != "symbol" ? t + "" : t, e), e), Yt = (h, t, e) => {
  if (!t.has(h))
    throw TypeError("Cannot " + e);
};
var s = (h, t, e) => (Yt(h, t, "read from private field"), e ? e.call(h) : t.get(h)), H = (h, t, e) => {
  if (t.has(h))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(h) : t.set(h, e);
}, F = (h, t, e, n) => (Yt(h, t, "write to private field"), n ? n.call(h, e) : t.set(h, e), e);
var U = (h, t, e) => (Yt(h, t, "access private method"), e);
function Bt(h) {
  return { all: h = h || /* @__PURE__ */ new Map(), on: function(t, e) {
    var n = h.get(t);
    n ? n.push(e) : h.set(t, [e]);
  }, off: function(t, e) {
    var n = h.get(t);
    n && (e ? n.splice(n.indexOf(e) >>> 0, 1) : h.set(t, []));
  }, emit: function(t, e) {
    var n = h.get(t);
    n && n.slice().map(function(g) {
      g(e);
    }), (n = h.get("*")) && n.slice().map(function(g) {
      g(t, e);
    });
  } };
}
var Ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ct(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var zt = { exports: {} };
(function(h, t) {
  (function(e, n) {
    h.exports = n();
  })(Ot, function() {
    var e = 1e3, n = 6e4, g = 36e5, v = "millisecond", m = "second", f = "minute", u = "hour", T = "day", z = "week", M = "month", y = "quarter", D = "year", S = "date", o = "Invalid Date", x = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(l) {
      var a = ["th", "st", "nd", "rd"], i = l % 100;
      return "[" + l + (a[(i - 20) % 10] || a[i] || a[0]) + "]";
    } }, b = function(l, a, i) {
      var c = String(l);
      return !c || c.length >= a ? l : "" + Array(a + 1 - c.length).join(i) + l;
    }, A = { s: b, z: function(l) {
      var a = -l.utcOffset(), i = Math.abs(a), c = Math.floor(i / 60), r = i % 60;
      return (a <= 0 ? "+" : "-") + b(c, 2, "0") + ":" + b(r, 2, "0");
    }, m: function l(a, i) {
      if (a.date() < i.date())
        return -l(i, a);
      var c = 12 * (i.year() - a.year()) + (i.month() - a.month()), r = a.clone().add(c, M), d = i - r < 0, $ = a.clone().add(c + (d ? -1 : 1), M);
      return +(-(c + (i - r) / (d ? r - $ : $ - r)) || 0);
    }, a: function(l) {
      return l < 0 ? Math.ceil(l) || 0 : Math.floor(l);
    }, p: function(l) {
      return { M, y: D, w: z, d: T, D: S, h: u, m: f, s: m, ms: v, Q: y }[l] || String(l || "").toLowerCase().replace(/s$/, "");
    }, u: function(l) {
      return l === void 0;
    } }, O = "en", k = {};
    k[O] = Y;
    var X = "$isDayjsObject", q = function(l) {
      return l instanceof mt || !(!l || !l[X]);
    }, N = function l(a, i, c) {
      var r;
      if (!a)
        return O;
      if (typeof a == "string") {
        var d = a.toLowerCase();
        k[d] && (r = d), i && (k[d] = i, r = d);
        var $ = a.split("-");
        if (!r && $.length > 1)
          return l($[0]);
      } else {
        var w = a.name;
        k[w] = a, r = w;
      }
      return !c && r && (O = r), r || !c && O;
    }, C = function(l, a) {
      if (q(l))
        return l.clone();
      var i = typeof a == "object" ? a : {};
      return i.date = l, i.args = arguments, new mt(i);
    }, p = A;
    p.l = N, p.i = q, p.w = function(l, a) {
      return C(l, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
    };
    var mt = function() {
      function l(i) {
        this.$L = N(i.locale, null, !0), this.parse(i), this.$x = this.$x || i.x || {}, this[X] = !0;
      }
      var a = l.prototype;
      return a.parse = function(i) {
        this.$d = function(c) {
          var r = c.date, d = c.utc;
          if (r === null)
            return /* @__PURE__ */ new Date(NaN);
          if (p.u(r))
            return /* @__PURE__ */ new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var $ = r.match(x);
            if ($) {
              var w = $[2] - 1 || 0, _ = ($[7] || "0").substring(0, 3);
              return d ? new Date(Date.UTC($[1], w, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, _)) : new Date($[1], w, $[3] || 1, $[4] || 0, $[5] || 0, $[6] || 0, _);
            }
          }
          return new Date(r);
        }(i), this.init();
      }, a.init = function() {
        var i = this.$d;
        this.$y = i.getFullYear(), this.$M = i.getMonth(), this.$D = i.getDate(), this.$W = i.getDay(), this.$H = i.getHours(), this.$m = i.getMinutes(), this.$s = i.getSeconds(), this.$ms = i.getMilliseconds();
      }, a.$utils = function() {
        return p;
      }, a.isValid = function() {
        return this.$d.toString() !== o;
      }, a.isSame = function(i, c) {
        var r = C(i);
        return this.startOf(c) <= r && r <= this.endOf(c);
      }, a.isAfter = function(i, c) {
        return C(i) < this.startOf(c);
      }, a.isBefore = function(i, c) {
        return this.endOf(c) < C(i);
      }, a.$g = function(i, c, r) {
        return p.u(i) ? this[c] : this.set(r, i);
      }, a.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a.valueOf = function() {
        return this.$d.getTime();
      }, a.startOf = function(i, c) {
        var r = this, d = !!p.u(c) || c, $ = p.p(i), w = function(et, Z) {
          var G = p.w(r.$u ? Date.UTC(r.$y, Z, et) : new Date(r.$y, Z, et), r);
          return d ? G : G.endOf(T);
        }, _ = function(et, Z) {
          return p.w(r.toDate()[et].apply(r.toDate("s"), (d ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), r);
        }, W = this.$W, I = this.$M, R = this.$D, st = "set" + (this.$u ? "UTC" : "");
        switch ($) {
          case D:
            return d ? w(1, 0) : w(31, 11);
          case M:
            return d ? w(1, I) : w(0, I + 1);
          case z:
            var tt = this.$locale().weekStart || 0, ht = (W < tt ? W + 7 : W) - tt;
            return w(d ? R - ht : R + (6 - ht), I);
          case T:
          case S:
            return _(st + "Hours", 0);
          case u:
            return _(st + "Minutes", 1);
          case f:
            return _(st + "Seconds", 2);
          case m:
            return _(st + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a.endOf = function(i) {
        return this.startOf(i, !1);
      }, a.$set = function(i, c) {
        var r, d = p.p(i), $ = "set" + (this.$u ? "UTC" : ""), w = (r = {}, r[T] = $ + "Date", r[S] = $ + "Date", r[M] = $ + "Month", r[D] = $ + "FullYear", r[u] = $ + "Hours", r[f] = $ + "Minutes", r[m] = $ + "Seconds", r[v] = $ + "Milliseconds", r)[d], _ = d === T ? this.$D + (c - this.$W) : c;
        if (d === M || d === D) {
          var W = this.clone().set(S, 1);
          W.$d[w](_), W.init(), this.$d = W.set(S, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          w && this.$d[w](_);
        return this.init(), this;
      }, a.set = function(i, c) {
        return this.clone().$set(i, c);
      }, a.get = function(i) {
        return this[p.p(i)]();
      }, a.add = function(i, c) {
        var r, d = this;
        i = Number(i);
        var $ = p.p(c), w = function(I) {
          var R = C(d);
          return p.w(R.date(R.date() + Math.round(I * i)), d);
        };
        if ($ === M)
          return this.set(M, this.$M + i);
        if ($ === D)
          return this.set(D, this.$y + i);
        if ($ === T)
          return w(1);
        if ($ === z)
          return w(7);
        var _ = (r = {}, r[f] = n, r[u] = g, r[m] = e, r)[$] || 1, W = this.$d.getTime() + i * _;
        return p.w(W, this);
      }, a.subtract = function(i, c) {
        return this.add(-1 * i, c);
      }, a.format = function(i) {
        var c = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || o;
        var d = i || "YYYY-MM-DDTHH:mm:ssZ", $ = p.z(this), w = this.$H, _ = this.$m, W = this.$M, I = r.weekdays, R = r.months, st = r.meridiem, tt = function(Z, G, ct, dt) {
          return Z && (Z[G] || Z(c, d)) || ct[G].slice(0, dt);
        }, ht = function(Z) {
          return p.s(w % 12 || 12, Z, "0");
        }, et = st || function(Z, G, ct) {
          var dt = Z < 12 ? "AM" : "PM";
          return ct ? dt.toLowerCase() : dt;
        };
        return d.replace(E, function(Z, G) {
          return G || function(ct) {
            switch (ct) {
              case "YY":
                return String(c.$y).slice(-2);
              case "YYYY":
                return p.s(c.$y, 4, "0");
              case "M":
                return W + 1;
              case "MM":
                return p.s(W + 1, 2, "0");
              case "MMM":
                return tt(r.monthsShort, W, R, 3);
              case "MMMM":
                return tt(R, W);
              case "D":
                return c.$D;
              case "DD":
                return p.s(c.$D, 2, "0");
              case "d":
                return String(c.$W);
              case "dd":
                return tt(r.weekdaysMin, c.$W, I, 2);
              case "ddd":
                return tt(r.weekdaysShort, c.$W, I, 3);
              case "dddd":
                return I[c.$W];
              case "H":
                return String(w);
              case "HH":
                return p.s(w, 2, "0");
              case "h":
                return ht(1);
              case "hh":
                return ht(2);
              case "a":
                return et(w, _, !0);
              case "A":
                return et(w, _, !1);
              case "m":
                return String(_);
              case "mm":
                return p.s(_, 2, "0");
              case "s":
                return String(c.$s);
              case "ss":
                return p.s(c.$s, 2, "0");
              case "SSS":
                return p.s(c.$ms, 3, "0");
              case "Z":
                return $;
            }
            return null;
          }(Z) || $.replace(":", "");
        });
      }, a.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a.diff = function(i, c, r) {
        var d, $ = this, w = p.p(c), _ = C(i), W = (_.utcOffset() - this.utcOffset()) * n, I = this - _, R = function() {
          return p.m($, _);
        };
        switch (w) {
          case D:
            d = R() / 12;
            break;
          case M:
            d = R();
            break;
          case y:
            d = R() / 3;
            break;
          case z:
            d = (I - W) / 6048e5;
            break;
          case T:
            d = (I - W) / 864e5;
            break;
          case u:
            d = I / g;
            break;
          case f:
            d = I / n;
            break;
          case m:
            d = I / e;
            break;
          default:
            d = I;
        }
        return r ? d : p.a(d);
      }, a.daysInMonth = function() {
        return this.endOf(M).$D;
      }, a.$locale = function() {
        return k[this.$L];
      }, a.locale = function(i, c) {
        if (!i)
          return this.$L;
        var r = this.clone(), d = N(i, c, !0);
        return d && (r.$L = d), r;
      }, a.clone = function() {
        return p.w(this.$d, this);
      }, a.toDate = function() {
        return new Date(this.valueOf());
      }, a.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a.toISOString = function() {
        return this.$d.toISOString();
      }, a.toString = function() {
        return this.$d.toUTCString();
      }, l;
    }(), Ft = mt.prototype;
    return C.prototype = Ft, [["$ms", v], ["$s", m], ["$m", f], ["$H", u], ["$W", T], ["$M", M], ["$y", D], ["$D", S]].forEach(function(l) {
      Ft[l[1]] = function(a) {
        return this.$g(a, l[0], l[1]);
      };
    }), C.extend = function(l, a) {
      return l.$i || (l(a, mt, C), l.$i = !0), C;
    }, C.locale = N, C.isDayjs = q, C.unix = function(l) {
      return C(1e3 * l);
    }, C.en = k[O], C.Ls = k, C.p = {}, C;
  });
})(zt);
var qt = zt.exports;
const Ht = /* @__PURE__ */ Ct(qt);
var _t = { exports: {} };
(function(h, t) {
  (function(e, n) {
    h.exports = n();
  })(Ot, function() {
    var e = "minute", n = /[+-]\d\d(?::?\d\d)?/g, g = /([+-]|\d\d)/g;
    return function(v, m, f) {
      var u = m.prototype;
      f.utc = function(o) {
        var x = { date: o, utc: !0, args: arguments };
        return new m(x);
      }, u.utc = function(o) {
        var x = f(this.toDate(), { locale: this.$L, utc: !0 });
        return o ? x.add(this.utcOffset(), e) : x;
      }, u.local = function() {
        return f(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var T = u.parse;
      u.parse = function(o) {
        o.utc && (this.$u = !0), this.$utils().u(o.$offset) || (this.$offset = o.$offset), T.call(this, o);
      };
      var z = u.init;
      u.init = function() {
        if (this.$u) {
          var o = this.$d;
          this.$y = o.getUTCFullYear(), this.$M = o.getUTCMonth(), this.$D = o.getUTCDate(), this.$W = o.getUTCDay(), this.$H = o.getUTCHours(), this.$m = o.getUTCMinutes(), this.$s = o.getUTCSeconds(), this.$ms = o.getUTCMilliseconds();
        } else
          z.call(this);
      };
      var M = u.utcOffset;
      u.utcOffset = function(o, x) {
        var E = this.$utils().u;
        if (E(o))
          return this.$u ? 0 : E(this.$offset) ? M.call(this) : this.$offset;
        if (typeof o == "string" && (o = function(O) {
          O === void 0 && (O = "");
          var k = O.match(n);
          if (!k)
            return null;
          var X = ("" + k[0]).match(g) || ["-", 0, 0], q = X[0], N = 60 * +X[1] + +X[2];
          return N === 0 ? 0 : q === "+" ? N : -N;
        }(o), o === null))
          return this;
        var Y = Math.abs(o) <= 16 ? 60 * o : o, b = this;
        if (x)
          return b.$offset = Y, b.$u = o === 0, b;
        if (o !== 0) {
          var A = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (b = this.local().add(Y + A, e)).$offset = Y, b.$x.$localOffset = A;
        } else
          b = this.utc();
        return b;
      };
      var y = u.format;
      u.format = function(o) {
        var x = o || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return y.call(this, x);
      }, u.valueOf = function() {
        var o = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * o;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var D = u.toDate;
      u.toDate = function(o) {
        return o === "s" && this.$offset ? f(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : D.call(this);
      };
      var S = u.diff;
      u.diff = function(o, x, E) {
        if (o && this.$u === o.$u)
          return S.call(this, o, x, E);
        var Y = this.local(), b = f(o).local();
        return S.call(Y, b, x, E);
      };
    };
  });
})(_t);
var Jt = _t.exports;
const Vt = /* @__PURE__ */ Ct(Jt);
var Et = { exports: {} };
(function(h, t) {
  (function(e, n) {
    h.exports = n();
  })(Ot, function() {
    var e = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, n = {};
    return function(g, v, m) {
      var f, u = function(y, D, S) {
        S === void 0 && (S = {});
        var o = new Date(y), x = function(E, Y) {
          Y === void 0 && (Y = {});
          var b = Y.timeZoneName || "short", A = E + "|" + b, O = n[A];
          return O || (O = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: E, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: b }), n[A] = O), O;
        }(D, S);
        return x.formatToParts(o);
      }, T = function(y, D) {
        for (var S = u(y, D), o = [], x = 0; x < S.length; x += 1) {
          var E = S[x], Y = E.type, b = E.value, A = e[Y];
          A >= 0 && (o[A] = parseInt(b, 10));
        }
        var O = o[3], k = O === 24 ? 0 : O, X = o[0] + "-" + o[1] + "-" + o[2] + " " + k + ":" + o[4] + ":" + o[5] + ":000", q = +y;
        return (m.utc(X).valueOf() - (q -= q % 1e3)) / 6e4;
      }, z = v.prototype;
      z.tz = function(y, D) {
        y === void 0 && (y = f);
        var S = this.utcOffset(), o = this.toDate(), x = o.toLocaleString("en-US", { timeZone: y }), E = Math.round((o - new Date(x)) / 1e3 / 60), Y = m(x, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(o.getTimezoneOffset() / 15) - E, !0);
        if (D) {
          var b = Y.utcOffset();
          Y = Y.add(S - b, "minute");
        }
        return Y.$x.$timezone = y, Y;
      }, z.offsetName = function(y) {
        var D = this.$x.$timezone || m.tz.guess(), S = u(this.valueOf(), D, { timeZoneName: y }).find(function(o) {
          return o.type.toLowerCase() === "timezonename";
        });
        return S && S.value;
      };
      var M = z.startOf;
      z.startOf = function(y, D) {
        if (!this.$x || !this.$x.$timezone)
          return M.call(this, y, D);
        var S = m(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return M.call(S, y, D).tz(this.$x.$timezone, !0);
      }, m.tz = function(y, D, S) {
        var o = S && D, x = S || D || f, E = T(+m(), x);
        if (typeof y != "string")
          return m(y).tz(x);
        var Y = function(k, X, q) {
          var N = k - 60 * X * 1e3, C = T(N, q);
          if (X === C)
            return [N, X];
          var p = T(N -= 60 * (C - X) * 1e3, q);
          return C === p ? [N, C] : [k - 60 * Math.min(C, p) * 1e3, Math.max(C, p)];
        }(m.utc(y, o).valueOf(), E, x), b = Y[0], A = Y[1], O = m(b).utcOffset(A);
        return O.$x.$timezone = x, O;
      }, m.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, m.tz.setDefault = function(y) {
        f = y;
      };
    };
  });
})(Et);
var Gt = Et.exports;
const Qt = /* @__PURE__ */ Ct(Gt);
Ht.extend(Vt);
Ht.extend(Qt);
const wt = (h, t = "MM/DD HH:mm Z", e) => Ht(h).tz(e).format(t), bt = (h, t) => {
  let e, n = 0;
  return (...g) => {
    const v = Date.now(), m = v - n;
    !n || m >= t ? (n = v, h.apply(void 0, g)) : e || (e = setTimeout(() => {
      n = v, h.apply(void 0, g), e = null;
    }, t - m));
  };
}, Lt = (h) => {
  const [t, e] = [h[0], h[1]], n = e.clientX - t.clientX, g = e.clientY - t.clientY;
  return Math.sqrt(n * n + g * g);
}, Kt = (h, t) => {
  const e = document.createElement("canvas");
  e.width = e.height = 1;
  const n = e.getContext("2d");
  n.fillStyle = h, n.fillRect(0, 0, 1, 1);
  const g = n.getImageData(0, 0, 1, 1).data;
  return `rgba(${g[0]}, ${g[1]}, ${g[2]}, ${t})`;
}, te = ({ xCenterPoint: h, cfg: t, timePerPixel: e, timeSpacing: n, currentTime: g, $canvas: v, screenScaleCount: m, scaleHeight: f, startTime: u, drawLine: T, drawText: z, drawArea: M }) => {
  const y = ({ space: S, scaleTimeFormat: o, bgTimeFormat: x, pointerTimeFormat: E, timezone: Y }) => {
    z({
      x: v.width - h / 10,
      y: 6,
      text: wt(g, x, Y),
      fontSize: `${v.height - 5}px`,
      align: "right",
      baseLine: "top",
      color: t.bgTextColor
    });
    const b = u % n, A = b / e;
    for (let O = 0; O < m; O++) {
      const k = O * t.scaleSpacing - A - t.pointerWidth / 2, X = u + O * n - b;
      if (X % (n * S) === 0) {
        T({ x: k, y: f.long }), z({
          x: k,
          y: v.height - f.long - 5,
          text: wt(X, o, Y),
          baseLine: "bottom"
        });
        continue;
      }
      T({ x: k, y: f.short });
    }
    T({
      x: h - t.pointerWidth / 2,
      y: v.height,
      width: t.pointerWidth,
      color: t.pointerColor
    }), M({
      startX: h - t.pointerDisplayWidth / 2,
      startY: 4,
      endX: h + t.pointerDisplayWidth / 2,
      endY: 4 + t.pointerDisplayHeight,
      bgColor: t.pointerColor
    }), z({
      x: h,
      y: t.pointerDisplayHeight / 2 + 5,
      text: wt(g, E, Y),
      align: "center",
      baseLine: "middle"
    });
  }, D = t.thresholdsConfig[n];
  D && y({
    space: D.space,
    scaleTimeFormat: D.scaleTimeFormat,
    bgTimeFormat: D.bgTimeFormat,
    pointerTimeFormat: D.pointerTimeFormat,
    timezone: t.timezone
  });
}, ee = {
  fill: !0,
  width: 1e3,
  height: 60,
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#ffffff",
  fontFamily: "Arial",
  scaleColor: "#ffffff",
  scaleSpacing: 7,
  areaBgColor: "#ffffff55",
  pointerColor: "#00aeec",
  pointerWidth: 3,
  pointerDisplayWidth: 100,
  pointerDisplayHeight: 14,
  fps: 60,
  zoom: 3,
  timeSpacingList: [10, 100, 1e3, 1e4, 6e4, 6e5, 36e5, 864e5, 6048e5],
  // scaleHeight: ,
  // bgTextColor: ,
  thresholdsConfig: {
    10: {
      scaleTimeFormat: "mm:ss:SSS",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss:SSS",
      space: 10
    },
    100: {
      scaleTimeFormat: "mm:ss",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss:SSS",
      space: 10
    },
    1e3: {
      scaleTimeFormat: "mm:ss",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss",
      space: 10
    },
    1e4: {
      scaleTimeFormat: "HH:mm:ss",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss",
      space: 12
    },
    6e4: {
      scaleTimeFormat: "HH:mm",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss",
      space: 10
    },
    6e5: {
      scaleTimeFormat: "HH:mm",
      bgTimeFormat: "YYYY/MM/DD",
      pointerTimeFormat: "HH:mm:ss",
      space: 10
    },
    36e5: {
      scaleTimeFormat: "MM/DD HH:mm",
      bgTimeFormat: "YYYY/MM",
      pointerTimeFormat: "MM/DD HH:mm",
      space: 12
    },
    864e5: {
      scaleTimeFormat: "MM/DD HH:mm",
      bgTimeFormat: "YYYY/MM",
      pointerTimeFormat: "YYYY/MM/DD HH:mm",
      space: 12
    },
    6048e5: {
      scaleTimeFormat: "YYYY/MM/DD",
      bgTimeFormat: "YYYY",
      pointerTimeFormat: "YYYY/MM/DD",
      space: 10
    }
  }
};
var rt, J, at, P, B, L, it, j, Q, V, ft, $t, kt, gt, Wt, vt, Pt, pt, Xt, Mt, It, Dt, Ut, Tt, At, xt, Zt, yt, jt, St, lt, ot, K, nt;
class se {
  constructor(t, e) {
    H(this, $t);
    // 拖拽
    H(this, gt);
    // 缩放
    H(this, vt);
    // 触摸事件监听器
    H(this, pt);
    H(this, Mt);
    H(this, Dt);
    // 父元素size变化
    H(this, Tt);
    // 清空画布
    H(this, xt);
    // 绘制比例尺
    H(this, yt);
    H(this, K);
    ut(this, "$canvas");
    ut(this, "$canvasParent");
    ut(this, "ctx");
    ut(this, "cfg");
    H(this, rt, void 0);
    H(this, J, void 0);
    H(this, at, Bt());
    H(this, P, 0);
    H(this, B, void 0);
    H(this, L, void 0);
    H(this, it, void 0);
    H(this, j, !1);
    H(this, Q, null);
    H(this, V, null);
    H(this, ft, 0);
    // 绘制线条
    H(this, St, ({ x: t, y: e, width: n = 1, color: g = this.cfg.scaleColor }) => {
      this.ctx.beginPath(), this.ctx.moveTo(t, this.$canvas.height), this.ctx.lineTo(t, this.$canvas.height - e), this.ctx.closePath(), this.ctx.strokeStyle = g, this.ctx.lineWidth = n, this.ctx.stroke();
    });
    // 绘制文字
    H(this, lt, ({ x: t, y: e, text: n, color: g = this.cfg.textColor, fontSize: v = "11px", align: m = "center", baseLine: f = "alphabetic" }) => {
      this.ctx.beginPath(), this.ctx.font = `${v} ${this.cfg.fontFamily}`, this.ctx.fillStyle = g, this.ctx.textAlign = m, this.ctx.textBaseline = f, this.ctx.fillText(n, t, e);
    });
    // 绘制区域
    H(this, ot, ({ startX: t, startY: e, endX: n, endY: g, bgColor: v }) => {
      this.ctx.beginPath(), this.ctx.rect(t, e, n - t, g - e), this.ctx.fillStyle = v, this.ctx.fill();
    });
    if (!t)
      throw new Error("canvas Element Or Element ID is required!");
    typeof t == "string" ? this.$canvas = document.querySelector(t) : this.$canvas = t, this.ctx = this.$canvas.getContext("2d"), this.cfg = { ...ee, ...e }, e != null && e.pointColor && (this.cfg.pointerColor = e.pointColor), e != null && e.pointWidth && (this.cfg.pointerWidth = e.pointWidth);
    const { fill: n, width: g, height: v, zoom: m, timeSpacingList: f, scaleHeight: u, textColor: T, bgTextColor: z } = this.cfg;
    if (z || (this.cfg.bgTextColor = Kt(T, 0.18)), m < 0 || m >= f.length || m % 1 !== 0)
      throw new Error(`zoom must be 0 ~ ${f.length - 1}, and must be an integer`);
    if (n) {
      const M = this.$canvas.parentElement;
      this.$canvasParent = M, this.$canvas.width = M.clientWidth, this.$canvas.height = M.clientHeight, new ResizeObserver(bt(U(this, Tt, At).bind(this), 200)).observe(M);
    } else
      this.$canvas.width = g, this.$canvas.height = v;
    F(this, L, f[m]), u != null && u.long && (u != null && u.short) ? F(this, it, u) : F(this, it, {
      long: this.$canvas.height / 3,
      medium: this.$canvas.height / 6,
      short: this.$canvas.height / 10
    }), this.draw(), this.$canvas.addEventListener("wheel", U(this, vt, Pt).bind(this), { passive: !1 }), this.$canvas.addEventListener("mousedown", U(this, gt, Wt).bind(this)), this.$canvas.addEventListener("click", U(this, $t, kt).bind(this)), this.$canvas.addEventListener("touchstart", U(this, pt, Xt).bind(this), { passive: !1 }), this.$canvas.addEventListener("touchmove", bt(U(this, Mt, It).bind(this), 1e3 / this.cfg.fps), { passive: !1 }), this.$canvas.addEventListener("touchend", U(this, Dt, Ut).bind(this));
  }
  // 绘制时间轴
  draw({ currentTime: t, areas: e, _privateFlag: n } = {}) {
    if (s(this, j) && !n)
      return;
    F(this, P, t || Date.now()), F(this, B, e || []);
    const g = this.$canvas.width / 2, v = Math.ceil(this.$canvas.width / this.cfg.scaleSpacing), m = v * s(this, L), [f, u] = F(this, rt, [s(this, P) - m / 2, s(this, P) + m / 2]);
    F(this, J, m / this.$canvas.width), U(this, xt, Zt).call(this), s(this, ot).call(this, {
      startX: 0,
      startY: 0,
      endX: this.$canvas.width,
      endY: this.$canvas.height,
      bgColor: this.cfg.bgColor
    }), s(this, B).forEach((T) => {
      const z = T.startTime <= f ? 0 : Math.round((T.startTime - f) / s(this, J)), M = T.endTime >= u ? this.$canvas.width : Math.round((T.endTime - f) / s(this, J));
      z < this.$canvas.width && M > 0 && s(this, ot).call(this, {
        startX: z,
        startY: 0,
        endX: M,
        endY: this.$canvas.height,
        bgColor: T.bgColor || this.cfg.areaBgColor
      });
    }), te.bind(this)({
      xCenterPoint: g,
      screenScaleCount: v,
      startTime: f,
      timePerPixel: s(this, J),
      scaleHeight: s(this, it),
      timeSpacing: s(this, L),
      currentTime: s(this, P),
      $canvas: this.$canvas,
      cfg: this.cfg,
      drawLine: s(this, St).bind(this),
      drawText: s(this, lt).bind(this),
      drawArea: s(this, ot).bind(this)
    }), U(this, yt, jt).call(this);
  }
  // 获取当前时间
  getCurrentTime() {
    return s(this, P);
  }
  // 获取时间范围
  getTimeRange() {
    return s(this, rt);
  }
  // 获取1px所占毫秒数
  getMsPerPixel() {
    return s(this, J);
  }
  on(t, e) {
    s(this, at).on(t, e);
  }
  off(t, e) {
    s(this, at).off(t, e);
  }
}
rt = new WeakMap(), J = new WeakMap(), at = new WeakMap(), P = new WeakMap(), B = new WeakMap(), L = new WeakMap(), it = new WeakMap(), j = new WeakMap(), Q = new WeakMap(), V = new WeakMap(), ft = new WeakMap(), $t = new WeakSet(), kt = function(t) {
  if (s(this, j))
    return;
  const [e] = s(this, rt), n = this.$canvas.getBoundingClientRect(), g = t.clientX - n.left, v = Math.round(e + g * s(this, J));
  F(this, P, v), this.draw({
    currentTime: s(this, P),
    areas: s(this, B)
  }), U(this, K, nt).call(this, "click", v);
}, gt = new WeakSet(), Wt = function(t) {
  F(this, j, !1);
  let e = t.clientX, n = s(this, P);
  F(this, ft, t.clientX);
  const g = bt(({ clientX: f }) => {
    s(this, j) || Math.abs(f - s(this, ft)) > 5 && F(this, j, !0), s(this, j) && (n = Math.round(s(this, P) - s(this, L) / this.cfg.scaleSpacing * (f - e)), e = f, this.draw({
      currentTime: n,
      areas: s(this, B),
      _privateFlag: !0
    }));
  }, 1e3 / this.cfg.fps), v = (f) => {
    const u = this.$canvas.getBoundingClientRect(), T = f.clientX - u.left, z = f.clientY - u.top, M = 3;
    (T < M || T > this.$canvas.width - M || z < M || z > this.$canvas.height - M) && (this.$canvas.removeEventListener("mousemove", g), this.$canvas.removeEventListener("mousemove", v));
  }, m = () => {
    this.$canvas.removeEventListener("mousemove", g), this.$canvas.removeEventListener("mousemove", v), document.removeEventListener("mouseup", m), s(this, j) && U(this, K, nt).call(this, "dragged", n);
  };
  this.$canvas.addEventListener("mousemove", g), this.$canvas.addEventListener("mousemove", v), document.addEventListener("mouseup", m);
}, vt = new WeakSet(), Pt = function(t) {
  t.preventDefault();
  const e = this.cfg.timeSpacingList.findIndex((n) => n === s(this, L));
  t.deltaY < 0 && e > 0 ? (F(this, L, this.cfg.timeSpacingList[e - 1]), this.draw({
    currentTime: s(this, P),
    areas: s(this, B),
    _privateFlag: !0
  }), U(this, K, nt).call(this, "zoom", e - 1)) : t.deltaY > 0 && e < this.cfg.timeSpacingList.length - 1 && (F(this, L, this.cfg.timeSpacingList[e + 1]), this.draw({
    currentTime: s(this, P),
    areas: s(this, B),
    _privateFlag: !0
  }), U(this, K, nt).call(this, "zoom", e + 1));
}, pt = new WeakSet(), Xt = function(t) {
  t.preventDefault(), F(this, j, !0), F(this, Q, t.touches[0].clientX), t.touches.length === 2 && F(this, V, Lt(t.touches));
}, Mt = new WeakSet(), It = function(t) {
  if (t.preventDefault(), !s(this, j))
    return;
  if (t.touches.length === 2 && s(this, V) !== null) {
    const v = Lt(t.touches), m = Math.abs(s(this, V) - v) >= 35;
    if (!m)
      return;
    let f = this.cfg.timeSpacingList.findIndex((u) => u === s(this, L));
    if (v < s(this, V) ? f += 1 : f -= 1, f < 0 || f > this.cfg.timeSpacingList.length - 1)
      return;
    F(this, L, this.cfg.timeSpacingList[f]), m && F(this, V, v), this.draw({
      currentTime: s(this, P),
      areas: s(this, B),
      _privateFlag: !0
    });
    return;
  }
  if (s(this, Q) === null)
    return;
  const e = t.touches[0], n = e.clientX - s(this, Q), g = Math.round(s(this, P) - s(this, L) / this.cfg.scaleSpacing * n);
  F(this, Q, e.clientX), this.draw({
    currentTime: g,
    areas: s(this, B),
    _privateFlag: !0
  });
}, Dt = new WeakSet(), Ut = function(t) {
  s(this, j) && (F(this, j, !1), F(this, Q, null), t.touches.length < 2 && F(this, V, null), U(this, K, nt).call(this, "dragged", s(this, P)));
}, Tt = new WeakSet(), At = function() {
  this.$canvasParent && (this.$canvas.width = this.$canvasParent.clientWidth, this.$canvas.height = this.$canvasParent.clientHeight, this.cfg.scaleHeight || F(this, it, {
    long: this.$canvas.height / 3,
    medium: this.$canvas.height / 6,
    short: this.$canvas.height / 10
  }), this.draw({
    currentTime: s(this, P),
    areas: s(this, B)
  }));
}, xt = new WeakSet(), Zt = function() {
  this.ctx.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
}, yt = new WeakSet(), jt = function() {
  const t = () => s(this, L) < 1e3 ? `${s(this, L)}ms` : s(this, L) < 6e4 ? `${Math.round(s(this, L) / 100) / 10}sec` : s(this, L) < 36e5 ? `${Math.round(s(this, L) / 100 / 60) / 10}min` : s(this, L) < 864e5 ? `${Math.round(s(this, L) / 100 / 60 / 60) / 10}hours` : s(this, L) < 6048e5 ? `${Math.round(s(this, L) / 100 / 60 / 60 / 24) / 10}days` : `${Math.round(s(this, L) / 100 / 60 / 60 / 24 / 7) / 10}weeks`;
  s(this, lt).call(this, {
    x: this.cfg.scaleSpacing + 12,
    y: 9,
    text: t(),
    align: "left",
    baseLine: "middle"
  }), this.ctx.beginPath(), this.ctx.moveTo(5, 6), this.ctx.lineTo(5, 10), this.ctx.lineTo(this.cfg.scaleSpacing + 6, 10), this.ctx.lineTo(this.cfg.scaleSpacing + 6, 6), this.ctx.strokeStyle = this.cfg.scaleColor, this.ctx.lineWidth = 1.5, this.ctx.stroke();
}, St = new WeakMap(), lt = new WeakMap(), ot = new WeakMap(), K = new WeakSet(), nt = function(...t) {
  s(this, at).emit(...t);
};
export {
  se as default,
  wt as format
};
