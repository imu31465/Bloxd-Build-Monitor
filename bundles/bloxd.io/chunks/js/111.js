/*! For license information please see qepqb8.111.a37a6502.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  5926: function(vv, zv, Pv) {
    var hv;
    ! function() {
      var Sv, ev = 1e9,
        gv = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
        },
        pv = !0,
        dv = "[DecimalError] ",
        Nv = dv + "Invalid argument: ",
        lv = dv + "Exponent out of range: ",
        Tv = Math.floor,
        Wv = Math.pow,
        wv = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        av = 1e7,
        sv = 9007199254740991,
        Cv = Tv(1286742750677284.5),
        iv = {};

      function cv(vv, zv) {
        var Pv, hv, Sv, ev, gv, dv, Nv, lv, Tv = vv.constructor,
          Wv = Tv.precision;
        if (!vv.s || !zv.s) return zv.s || (zv = new Tv(vv)), pv ? Kv(zv, Wv) : zv;
        if (Nv = vv.d, lv = zv.d, gv = vv.e, Sv = zv.e, Nv = Nv.slice(), ev = gv - Sv) {
          for (ev < 0 ? (hv = Nv, ev = -ev, dv = lv.length) : (hv = lv, Sv = gv, dv = Nv.length), ev > (dv = (gv = Math.ceil(Wv / 7)) > dv ? gv + 1 : dv + 1) && (ev = dv, hv.length = 1), hv.reverse(); ev--;) hv.push(0);
          hv.reverse()
        }
        for ((dv = Nv.length) - (ev = lv.length) < 0 && (ev = dv, hv = lv, lv = Nv, Nv = hv), Pv = 0; ev;) Pv = (Nv[--ev] = Nv[ev] + lv[ev] + Pv) / av | 0, Nv[ev] %= av;
        for (Pv && (Nv.unshift(Pv), ++Sv), dv = Nv.length; 0 == Nv[--dv];) Nv.pop();
        return zv.d = Nv, zv.e = Sv, pv ? Kv(zv, Wv) : zv
      }

      function Gv(vv, zv, Pv) {
        if (vv !== ~~vv || vv < zv || vv > Pv) throw Error(Nv + vv)
      }

      function mv(vv) {
        var zv, Pv, hv, Sv = vv.length - 1,
          ev = "",
          gv = vv[0];
        if (Sv > 0) {
          for (ev += gv, zv = 1; zv < Sv; zv++)(Pv = 7 - (hv = vv[zv] + "").length) && (ev += nv(Pv)), ev += hv;
          (Pv = 7 - (hv = (gv = vv[zv]) + "").length) && (ev += nv(Pv))
        } else if (0 === gv) return "0";
        for (; gv % 10 === 0;) gv /= 10;
        return ev + gv
      }
      iv.absoluteValue = iv.abs = function() {
        var vv = new this.constructor(this);
        return vv.s && (vv.s = 1), vv
      }, iv.comparedTo = iv.cmp = function(vv) {
        var zv, Pv, hv, Sv, ev = this;
        if (vv = new ev.constructor(vv), ev.s !== vv.s) return ev.s || -vv.s;
        if (ev.e !== vv.e) return ev.e > vv.e ^ ev.s < 0 ? 1 : -1;
        for (zv = 0, Pv = (hv = ev.d.length) < (Sv = vv.d.length) ? hv : Sv; zv < Pv; ++zv)
          if (ev.d[zv] !== vv.d[zv]) return ev.d[zv] > vv.d[zv] ^ ev.s < 0 ? 1 : -1;
        return hv === Sv ? 0 : hv > Sv ^ ev.s < 0 ? 1 : -1
      }, iv.decimalPlaces = iv.dp = function() {
        var vv = this,
          zv = vv.d.length - 1,
          Pv = 7 * (zv - vv.e);
        if (zv = vv.d[zv])
          for (; zv % 10 == 0; zv /= 10) Pv--;
        return Pv < 0 ? 0 : Pv
      }, iv.dividedBy = iv.div = function(vv) {
        return jv(this, new this.constructor(vv))
      }, iv.dividedToIntegerBy = iv.idiv = function(vv) {
        var zv = this.constructor;
        return Kv(jv(this, new zv(vv), 0, 1), zv.precision)
      }, iv.equals = iv.eq = function(vv) {
        return !this.cmp(vv)
      }, iv.exponent = function() {
        return Fv(this)
      }, iv.greaterThan = iv.gt = function(vv) {
        return this.cmp(vv) > 0
      }, iv.greaterThanOrEqualTo = iv.gte = function(vv) {
        return this.cmp(vv) >= 0
      }, iv.isInteger = iv.isint = function() {
        return this.e > this.d.length - 2
      }, iv.isNegative = iv.isneg = function() {
        return this.s < 0
      }, iv.isPositive = iv.ispos = function() {
        return this.s > 0
      }, iv.isZero = function() {
        return 0 === this.s
      }, iv.lessThan = iv.lt = function(vv) {
        return this.cmp(vv) < 0
      }, iv.lessThanOrEqualTo = iv.lte = function(vv) {
        return this.cmp(vv) < 1
      }, iv.logarithm = iv.log = function(vv) {
        var zv, Pv = this,
          hv = Pv.constructor,
          ev = hv.precision,
          gv = ev + 5;
        if (void 0 === vv) vv = new hv(10);
        else if ((vv = new hv(vv)).s < 1 || vv.eq(Sv)) throw Error(dv + "NaN");
        if (Pv.s < 1) throw Error(dv + (Pv.s ? "NaN" : "-Infinity"));
        return Pv.eq(Sv) ? new hv(0) : (pv = !1, zv = jv(Ov(Pv, gv), Ov(vv, gv), gv), pv = !0, Kv(zv, ev))
      }, iv.minus = iv.sub = function(vv) {
        var zv = this;
        return vv = new zv.constructor(vv), zv.s == vv.s ? Vv(zv, vv) : cv(zv, (vv.s = -vv.s, vv))
      }, iv.modulo = iv.mod = function(vv) {
        var zv, Pv = this,
          hv = Pv.constructor,
          Sv = hv.precision;
        if (!(vv = new hv(vv)).s) throw Error(dv + "NaN");
        return Pv.s ? (pv = !1, zv = jv(Pv, vv, 0, 1).times(vv), pv = !0, Pv.minus(zv)) : Kv(new hv(Pv), Sv)
      }, iv.naturalExponential = iv.exp = function() {
        return fv(this)
      }, iv.naturalLogarithm = iv.ln = function() {
        return Ov(this)
      }, iv.negated = iv.neg = function() {
        var vv = new this.constructor(this);
        return vv.s = -vv.s || 0, vv
      }, iv.plus = iv.add = function(vv) {
        var zv = this;
        return vv = new zv.constructor(vv), zv.s == vv.s ? cv(zv, vv) : Vv(zv, (vv.s = -vv.s, vv))
      }, iv.precision = iv.sd = function(vv) {
        var zv, Pv, hv, Sv = this;
        if (void 0 !== vv && vv !== !!vv && 1 !== vv && 0 !== vv) throw Error(Nv + vv);
        if (zv = Fv(Sv) + 1, Pv = 7 * (hv = Sv.d.length - 1) + 1, hv = Sv.d[hv]) {
          for (; hv % 10 == 0; hv /= 10) Pv--;
          for (hv = Sv.d[0]; hv >= 10; hv /= 10) Pv++
        }
        return vv && zv > Pv ? zv : Pv
      }, iv.squareRoot = iv.sqrt = function() {
        var vv, zv, Pv, hv, Sv, ev, gv, Nv = this,
          lv = Nv.constructor;
        if (Nv.s < 1) {
          if (!Nv.s) return new lv(0);
          throw Error(dv + "NaN")
        }
        for (vv = Fv(Nv), pv = !1, 0 == (Sv = Math.sqrt(+Nv)) || Sv == 1 / 0 ? (((zv = mv(Nv.d)).length + vv) % 2 == 0 && (zv += "0"), Sv = Math.sqrt(zv), vv = Tv((vv + 1) / 2) - (vv < 0 || vv % 2), hv = new lv(zv = Sv == 1 / 0 ? "1e" + vv : (zv = Sv.toExponential()).slice(0, zv.indexOf("e") + 1) + vv)) : hv = new lv(Sv.toString()), Sv = gv = (Pv = lv.precision) + 3;;)
          if (hv = (ev = hv).plus(jv(Nv, ev, gv + 2)).times(.5), mv(ev.d).slice(0, gv) === (zv = mv(hv.d)).slice(0, gv)) {
            if (zv = zv.slice(gv - 3, gv + 1), Sv == gv && "4999" == zv) {
              if (Kv(ev, Pv + 1, 0), ev.times(ev).eq(Nv)) {
                hv = ev;
                break
              }
            } else if ("9999" != zv) break;
            gv += 4
          } return pv = !0, Kv(hv, Pv)
      }, iv.times = iv.mul = function(vv) {
        var zv, Pv, hv, Sv, ev, gv, dv, Nv, lv, Tv = this,
          Wv = Tv.constructor,
          wv = Tv.d,
          sv = (vv = new Wv(vv)).d;
        if (!Tv.s || !vv.s) return new Wv(0);
        for (vv.s *= Tv.s, Pv = Tv.e + vv.e, (Nv = wv.length) < (lv = sv.length) && (ev = wv, wv = sv, sv = ev, gv = Nv, Nv = lv, lv = gv), ev = [], hv = gv = Nv + lv; hv--;) ev.push(0);
        for (hv = lv; --hv >= 0;) {
          for (zv = 0, Sv = Nv + hv; Sv > hv;) dv = ev[Sv] + sv[hv] * wv[Sv - hv - 1] + zv, ev[Sv--] = dv % av | 0, zv = dv / av | 0;
          ev[Sv] = (ev[Sv] + zv) % av | 0
        }
        for (; !ev[--gv];) ev.pop();
        return zv ? ++Pv : ev.shift(), vv.d = ev, vv.e = Pv, pv ? Kv(vv, Wv.precision) : vv
      }, iv.toDecimalPlaces = iv.todp = function(vv, zv) {
        var Pv = this,
          hv = Pv.constructor;
        return Pv = new hv(Pv), void 0 === vv ? Pv : (Gv(vv, 0, ev), void 0 === zv ? zv = hv.rounding : Gv(zv, 0, 8), Kv(Pv, vv + Fv(Pv) + 1, zv))
      }, iv.toExponential = function(vv, zv) {
        var Pv, hv = this,
          Sv = hv.constructor;
        return void 0 === vv ? Pv = Uv(hv, !0) : (Gv(vv, 0, ev), void 0 === zv ? zv = Sv.rounding : Gv(zv, 0, 8), Pv = Uv(hv = Kv(new Sv(hv), vv + 1, zv), !0, vv + 1)), Pv
      }, iv.toFixed = function(vv, zv) {
        var Pv, hv, Sv = this,
          gv = Sv.constructor;
        return void 0 === vv ? Uv(Sv) : (Gv(vv, 0, ev), void 0 === zv ? zv = gv.rounding : Gv(zv, 0, 8), Pv = Uv((hv = Kv(new gv(Sv), vv + Fv(Sv) + 1, zv)).abs(), !1, vv + Fv(hv) + 1), Sv.isneg() && !Sv.isZero() ? "-" + Pv : Pv)
      }, iv.toInteger = iv.toint = function() {
        var vv = this,
          zv = vv.constructor;
        return Kv(new zv(vv), Fv(vv) + 1, zv.rounding)
      }, iv.toNumber = function() {
        return +this
      }, iv.toPower = iv.pow = function(vv) {
        var zv, Pv, hv, ev, gv, Nv, lv = this,
          Wv = lv.constructor,
          wv = +(vv = new Wv(vv));
        if (!vv.s) return new Wv(Sv);
        if (!(lv = new Wv(lv)).s) {
          if (vv.s < 1) throw Error(dv + "Infinity");
          return lv
        }
        if (lv.eq(Sv)) return lv;
        if (hv = Wv.precision, vv.eq(Sv)) return Kv(lv, hv);
        if (Nv = (zv = vv.e) >= (Pv = vv.d.length - 1), gv = lv.s, Nv) {
          if ((Pv = wv < 0 ? -wv : wv) <= sv) {
            for (ev = new Wv(Sv), zv = Math.ceil(hv / 7 + 4), pv = !1; Pv % 2 && Rv((ev = ev.times(lv)).d, zv), 0 !== (Pv = Tv(Pv / 2));) Rv((lv = lv.times(lv)).d, zv);
            return pv = !0, vv.s < 0 ? new Wv(Sv).div(ev) : Kv(ev, hv)
          }
        } else if (gv < 0) throw Error(dv + "NaN");
        return gv = gv < 0 && 1 & vv.d[Math.max(zv, Pv)] ? -1 : 1, lv.s = 1, pv = !1, ev = vv.times(Ov(lv, hv + 12)), pv = !0, (ev = fv(ev)).s = gv, ev
      }, iv.toPrecision = function(vv, zv) {
        var Pv, hv, Sv = this,
          gv = Sv.constructor;
        return void 0 === vv ? hv = Uv(Sv, (Pv = Fv(Sv)) <= gv.toExpNeg || Pv >= gv.toExpPos) : (Gv(vv, 1, ev), void 0 === zv ? zv = gv.rounding : Gv(zv, 0, 8), hv = Uv(Sv = Kv(new gv(Sv), vv, zv), vv <= (Pv = Fv(Sv)) || Pv <= gv.toExpNeg, vv)), hv
      }, iv.toSignificantDigits = iv.tosd = function(vv, zv) {
        var Pv = this.constructor;
        return void 0 === vv ? (vv = Pv.precision, zv = Pv.rounding) : (Gv(vv, 1, ev), void 0 === zv ? zv = Pv.rounding : Gv(zv, 0, 8)), Kv(new Pv(this), vv, zv)
      }, iv.toString = iv.valueOf = iv.val = iv.toJSON = function() {
        var vv = this,
          zv = Fv(vv),
          Pv = vv.constructor;
        return Uv(vv, zv <= Pv.toExpNeg || zv >= Pv.toExpPos)
      };
      var jv = function() {
        function vv(vv, zv) {
          var Pv, hv = 0,
            Sv = vv.length;
          for (vv = vv.slice(); Sv--;) Pv = vv[Sv] * zv + hv, vv[Sv] = Pv % av | 0, hv = Pv / av | 0;
          return hv && vv.unshift(hv), vv
        }

        function zv(vv, zv, Pv, hv) {
          var Sv, ev;
          if (Pv != hv) ev = Pv > hv ? 1 : -1;
          else
            for (Sv = ev = 0; Sv < Pv; Sv++)
              if (vv[Sv] != zv[Sv]) {
                ev = vv[Sv] > zv[Sv] ? 1 : -1;
                break
              } return ev
        }

        function Pv(vv, zv, Pv) {
          for (var hv = 0; Pv--;) vv[Pv] -= hv, hv = vv[Pv] < zv[Pv] ? 1 : 0, vv[Pv] = hv * av + vv[Pv] - zv[Pv];
          for (; !vv[0] && vv.length > 1;) vv.shift()
        }
        return function(hv, Sv, ev, gv) {
          var pv, Nv, lv, Tv, Wv, wv, sv, Cv, iv, cv, Gv, mv, jv, fv, Yv, nv, Ov, Dv, Vv = hv.constructor,
            Uv = hv.s == Sv.s ? 1 : -1,
            Rv = hv.d,
            xv = Sv.d;
          if (!hv.s) return new Vv(hv);
          if (!Sv.s) throw Error(dv + "Division by zero");
          for (Nv = hv.e - Sv.e, Ov = xv.length, Yv = Rv.length, Cv = (sv = new Vv(Uv)).d = [], lv = 0; xv[lv] == (Rv[lv] || 0);) ++lv;
          if (xv[lv] > (Rv[lv] || 0) && --Nv, (mv = null == ev ? ev = Vv.precision : gv ? ev + (Fv(hv) - Fv(Sv)) + 1 : ev) < 0) return new Vv(0);
          if (mv = mv / 7 + 2 | 0, lv = 0, 1 == Ov)
            for (Tv = 0, xv = xv[0], mv++;
              (lv < Yv || Tv) && mv--; lv++) jv = Tv * av + (Rv[lv] || 0), Cv[lv] = jv / xv | 0, Tv = jv % xv | 0;
          else {
            for ((Tv = av / (xv[0] + 1) | 0) > 1 && (xv = vv(xv, Tv), Rv = vv(Rv, Tv), Ov = xv.length, Yv = Rv.length), fv = Ov, cv = (iv = Rv.slice(0, Ov)).length; cv < Ov;) iv[cv++] = 0;
            (Dv = xv.slice()).unshift(0), nv = xv[0], xv[1] >= av / 2 && ++nv;
            do {
              Tv = 0, (pv = zv(xv, iv, Ov, cv)) < 0 ? (Gv = iv[0], Ov != cv && (Gv = Gv * av + (iv[1] || 0)), (Tv = Gv / nv | 0) > 1 ? (Tv >= av && (Tv = av - 1), 1 == (pv = zv(Wv = vv(xv, Tv), iv, wv = Wv.length, cv = iv.length)) && (Tv--, Pv(Wv, Ov < wv ? Dv : xv, wv))) : (0 == Tv && (pv = Tv = 1), Wv = xv.slice()), (wv = Wv.length) < cv && Wv.unshift(0), Pv(iv, Wv, cv), -1 == pv && (pv = zv(xv, iv, Ov, cv = iv.length)) < 1 && (Tv++, Pv(iv, Ov < cv ? Dv : xv, cv)), cv = iv.length) : 0 === pv && (Tv++, iv = [0]), Cv[lv++] = Tv, pv && iv[0] ? iv[cv++] = Rv[fv] || 0 : (iv = [Rv[fv]], cv = 1)
            } while ((fv++ < Yv || void 0 !== iv[0]) && mv--)
          }
          return Cv[0] || Cv.shift(), sv.e = Nv, Kv(sv, gv ? ev + Fv(sv) + 1 : ev)
        }
      }();

      function fv(vv, zv) {
        var Pv, hv, ev, gv, dv, Nv = 0,
          Tv = 0,
          wv = vv.constructor,
          av = wv.precision;
        if (Fv(vv) > 16) throw Error(lv + Fv(vv));
        if (!vv.s) return new wv(Sv);
        for (null == zv ? (pv = !1, dv = av) : dv = zv, gv = new wv(.03125); vv.abs().gte(.1);) vv = vv.times(gv), Tv += 5;
        for (dv += Math.log(Wv(2, Tv)) / Math.LN10 * 2 + 5 | 0, Pv = hv = ev = new wv(Sv), wv.precision = dv;;) {
          if (hv = Kv(hv.times(vv), dv), Pv = Pv.times(++Nv), mv((gv = ev.plus(jv(hv, Pv, dv))).d).slice(0, dv) === mv(ev.d).slice(0, dv)) {
            for (; Tv--;) ev = Kv(ev.times(ev), dv);
            return wv.precision = av, null == zv ? (pv = !0, Kv(ev, av)) : ev
          }
          ev = gv
        }
      }

      function Fv(vv) {
        for (var zv = 7 * vv.e, Pv = vv.d[0]; Pv >= 10; Pv /= 10) zv++;
        return zv
      }

      function Yv(vv, zv, Pv) {
        if (zv > vv.LN10.sd()) throw pv = !0, Pv && (vv.precision = Pv), Error(dv + "LN10 precision limit exceeded");
        return Kv(new vv(vv.LN10), zv)
      }

      function nv(vv) {
        for (var zv = ""; vv--;) zv += "0";
        return zv
      }

      function Ov(vv, zv) {
        var Pv, hv, ev, gv, Nv, lv, Tv, Wv, wv, av = 1,
          sv = vv,
          Cv = sv.d,
          iv = sv.constructor,
          cv = iv.precision;
        if (sv.s < 1) throw Error(dv + (sv.s ? "NaN" : "-Infinity"));
        if (sv.eq(Sv)) return new iv(0);
        if (null == zv ? (pv = !1, Wv = cv) : Wv = zv, sv.eq(10)) return null == zv && (pv = !0), Yv(iv, Wv);
        if (Wv += 10, iv.precision = Wv, hv = (Pv = mv(Cv)).charAt(0), gv = Fv(sv), !(Math.abs(gv) < 15e14)) return Tv = Yv(iv, Wv + 2, cv).times(gv + ""), sv = Ov(new iv(hv + "." + Pv.slice(1)), Wv - 10).plus(Tv), iv.precision = cv, null == zv ? (pv = !0, Kv(sv, cv)) : sv;
        for (; hv < 7 && 1 != hv || 1 == hv && Pv.charAt(1) > 3;) hv = (Pv = mv((sv = sv.times(vv)).d)).charAt(0), av++;
        for (gv = Fv(sv), hv > 1 ? (sv = new iv("0." + Pv), gv++) : sv = new iv(hv + "." + Pv.slice(1)), lv = Nv = sv = jv(sv.minus(Sv), sv.plus(Sv), Wv), wv = Kv(sv.times(sv), Wv), ev = 3;;) {
          if (Nv = Kv(Nv.times(wv), Wv), mv((Tv = lv.plus(jv(Nv, new iv(ev), Wv))).d).slice(0, Wv) === mv(lv.d).slice(0, Wv)) return lv = lv.times(2), 0 !== gv && (lv = lv.plus(Yv(iv, Wv + 2, cv).times(gv + ""))), lv = jv(lv, new iv(av), Wv), iv.precision = cv, null == zv ? (pv = !0, Kv(lv, cv)) : lv;
          lv = Tv, ev += 2
        }
      }

      function Dv(vv, zv) {
        var Pv, hv, Sv;
        for ((Pv = zv.indexOf(".")) > -1 && (zv = zv.replace(".", "")), (hv = zv.search(/e/i)) > 0 ? (Pv < 0 && (Pv = hv), Pv += +zv.slice(hv + 1), zv = zv.substring(0, hv)) : Pv < 0 && (Pv = zv.length), hv = 0; 48 === zv.charCodeAt(hv);) ++hv;
        for (Sv = zv.length; 48 === zv.charCodeAt(Sv - 1);) --Sv;
        if (zv = zv.slice(hv, Sv)) {
          if (Sv -= hv, Pv = Pv - hv - 1, vv.e = Tv(Pv / 7), vv.d = [], hv = (Pv + 1) % 7, Pv < 0 && (hv += 7), hv < Sv) {
            for (hv && vv.d.push(+zv.slice(0, hv)), Sv -= 7; hv < Sv;) vv.d.push(+zv.slice(hv, hv += 7));
            hv = 7 - (zv = zv.slice(hv)).length
          } else hv -= Sv;
          for (; hv--;) zv += "0";
          if (vv.d.push(+zv), pv && (vv.e > Cv || vv.e < -Cv)) throw Error(lv + Pv)
        } else vv.s = 0, vv.e = 0, vv.d = [0];
        return vv
      }

      function Kv(vv, zv, Pv) {
        var hv, Sv, ev, gv, dv, Nv, wv, sv, iv = vv.d;
        for (gv = 1, ev = iv[0]; ev >= 10; ev /= 10) gv++;
        if ((hv = zv - gv) < 0) hv += 7, Sv = zv, wv = iv[sv = 0];
        else {
          if ((sv = Math.ceil((hv + 1) / 7)) >= (ev = iv.length)) return vv;
          for (wv = ev = iv[sv], gv = 1; ev >= 10; ev /= 10) gv++;
          Sv = (hv %= 7) - 7 + gv
        }
        if (void 0 !== Pv && (dv = wv / (ev = Wv(10, gv - Sv - 1)) % 10 | 0, Nv = zv < 0 || void 0 !== iv[sv + 1] || wv % ev, Nv = Pv < 4 ? (dv || Nv) && (0 == Pv || Pv == (vv.s < 0 ? 3 : 2)) : dv > 5 || 5 == dv && (4 == Pv || Nv || 6 == Pv && (hv > 0 ? Sv > 0 ? wv / Wv(10, gv - Sv) : 0 : iv[sv - 1]) % 10 & 1 || Pv == (vv.s < 0 ? 8 : 7))), zv < 1 || !iv[0]) return Nv ? (ev = Fv(vv), iv.length = 1, zv = zv - ev - 1, iv[0] = Wv(10, (7 - zv % 7) % 7), vv.e = Tv(-zv / 7) || 0) : (iv.length = 1, iv[0] = vv.e = vv.s = 0), vv;
        if (0 == hv ? (iv.length = sv, ev = 1, sv--) : (iv.length = sv + 1, ev = Wv(10, 7 - hv), iv[sv] = Sv > 0 ? (wv / Wv(10, gv - Sv) % Wv(10, Sv) | 0) * ev : 0), Nv)
          for (;;) {
            if (0 == sv) {
              (iv[0] += ev) == av && (iv[0] = 1, ++vv.e);
              break
            }
            if (iv[sv] += ev, iv[sv] != av) break;
            iv[sv--] = 0, ev = 1
          }
        for (hv = iv.length; 0 === iv[--hv];) iv.pop();
        if (pv && (vv.e > Cv || vv.e < -Cv)) throw Error(lv + Fv(vv));
        return vv
      }

      function Vv(vv, zv) {
        var Pv, hv, Sv, ev, gv, dv, Nv, lv, Tv, Wv, wv = vv.constructor,
          sv = wv.precision;
        if (!vv.s || !zv.s) return zv.s ? zv.s = -zv.s : zv = new wv(vv), pv ? Kv(zv, sv) : zv;
        if (Nv = vv.d, Wv = zv.d, hv = zv.e, lv = vv.e, Nv = Nv.slice(), gv = lv - hv) {
          for ((Tv = gv < 0) ? (Pv = Nv, gv = -gv, dv = Wv.length) : (Pv = Wv, hv = lv, dv = Nv.length), gv > (Sv = Math.max(Math.ceil(sv / 7), dv) + 2) && (gv = Sv, Pv.length = 1), Pv.reverse(), Sv = gv; Sv--;) Pv.push(0);
          Pv.reverse()
        } else {
          for ((Tv = (Sv = Nv.length) < (dv = Wv.length)) && (dv = Sv), Sv = 0; Sv < dv; Sv++)
            if (Nv[Sv] != Wv[Sv]) {
              Tv = Nv[Sv] < Wv[Sv];
              break
            } gv = 0
        }
        for (Tv && (Pv = Nv, Nv = Wv, Wv = Pv, zv.s = -zv.s), dv = Nv.length, Sv = Wv.length - dv; Sv > 0; --Sv) Nv[dv++] = 0;
        for (Sv = Wv.length; Sv > gv;) {
          if (Nv[--Sv] < Wv[Sv]) {
            for (ev = Sv; ev && 0 === Nv[--ev];) Nv[ev] = av - 1;
            --Nv[ev], Nv[Sv] += av
          }
          Nv[Sv] -= Wv[Sv]
        }
        for (; 0 === Nv[--dv];) Nv.pop();
        for (; 0 === Nv[0]; Nv.shift()) --hv;
        return Nv[0] ? (zv.d = Nv, zv.e = hv, pv ? Kv(zv, sv) : zv) : new wv(0)
      }

      function Uv(vv, zv, Pv) {
        var hv, Sv = Fv(vv),
          ev = mv(vv.d),
          gv = ev.length;
        return zv ? (Pv && (hv = Pv - gv) > 0 ? ev = ev.charAt(0) + "." + ev.slice(1) + nv(hv) : gv > 1 && (ev = ev.charAt(0) + "." + ev.slice(1)), ev = ev + (Sv < 0 ? "e" : "e+") + Sv) : Sv < 0 ? (ev = "0." + nv(-Sv - 1) + ev, Pv && (hv = Pv - gv) > 0 && (ev += nv(hv))) : Sv >= gv ? (ev += nv(Sv + 1 - gv), Pv && (hv = Pv - Sv - 1) > 0 && (ev = ev + "." + nv(hv))) : ((hv = Sv + 1) < gv && (ev = ev.slice(0, hv) + "." + ev.slice(hv)), Pv && (hv = Pv - gv) > 0 && (Sv + 1 === gv && (ev += "."), ev += nv(hv))), vv.s < 0 ? "-" + ev : ev
      }

      function Rv(vv, zv) {
        if (vv.length > zv) return vv.length = zv, !0
      }

      function xv(vv) {
        if (!vv || "object" !== typeof vv) throw Error(dv + "Object expected");
        var zv, Pv, hv, Sv = ["precision", 1, ev, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
        for (zv = 0; zv < Sv.length; zv += 3)
          if (void 0 !== (hv = vv[Pv = Sv[zv]])) {
            if (!(Tv(hv) === hv && hv >= Sv[zv + 1] && hv <= Sv[zv + 2])) throw Error(Nv + Pv + ": " + hv);
            this[Pv] = hv
          } if (void 0 !== (hv = vv[Pv = "LN10"])) {
          if (hv != Math.LN10) throw Error(Nv + Pv + ": " + hv);
          this[Pv] = new this(hv)
        }
        return this
      }
      gv = function vv(zv) {
        var Pv, hv, Sv;

        function ev(vv) {
          var zv = this;
          if (!(zv instanceof ev)) return new ev(vv);
          if (zv.constructor = ev, vv instanceof ev) return zv.s = vv.s, zv.e = vv.e, void(zv.d = (vv = vv.d) ? vv.slice() : vv);
          if ("number" === typeof vv) {
            if (0 * vv !== 0) throw Error(Nv + vv);
            if (vv > 0) zv.s = 1;
            else {
              if (!(vv < 0)) return zv.s = 0, zv.e = 0, void(zv.d = [0]);
              vv = -vv, zv.s = -1
            }
            return vv === ~~vv && vv < 1e7 ? (zv.e = 0, void(zv.d = [vv])) : Dv(zv, vv.toString())
          }
          if ("string" !== typeof vv) throw Error(Nv + vv);
          if (45 === vv.charCodeAt(0) ? (vv = vv.slice(1), zv.s = -1) : zv.s = 1, !wv.test(vv)) throw Error(Nv + vv);
          Dv(zv, vv)
        }
        if (ev.prototype = iv, ev.ROUND_UP = 0, ev.ROUND_DOWN = 1, ev.ROUND_CEIL = 2, ev.ROUND_FLOOR = 3, ev.ROUND_HALF_UP = 4, ev.ROUND_HALF_DOWN = 5, ev.ROUND_HALF_EVEN = 6, ev.ROUND_HALF_CEIL = 7, ev.ROUND_HALF_FLOOR = 8, ev.clone = vv, ev.config = ev.set = xv, void 0 === zv && (zv = {}), zv)
          for (Sv = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Pv = 0; Pv < Sv.length;) zv.hasOwnProperty(hv = Sv[Pv++]) || (zv[hv] = this[hv]);
        return ev.config(zv), ev
      }(gv), gv.default = gv.Decimal = gv, Sv = new gv(1), void 0 === (hv = function() {
        return gv
      }.call(zv, Pv, zv, vv)) || (vv.exports = hv)
    }()
  },
  5501: (vv, zv, Pv) => {
    var hv = Pv(4982)(Pv(4842), "DataView");
    vv.exports = hv
  },
  4969: (vv, zv, Pv) => {
    var hv = Pv(4974),
      Sv = Pv(5021),
      ev = Pv(5024),
      gv = Pv(5028),
      pv = Pv(5035);

    function dv(vv) {
      var zv = -1,
        Pv = null == vv ? 0 : vv.length;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }
    dv.prototype.clear = hv, dv.prototype.delete = Sv, dv.prototype.get = ev, dv.prototype.has = gv, dv.prototype.set = pv, vv.exports = dv
  },
  5040: (vv, zv, Pv) => {
    var hv = Pv(5042),
      Sv = Pv(5046),
      ev = Pv(5058),
      gv = Pv(5067),
      pv = Pv(5072);

    function dv(vv) {
      var zv = -1,
        Pv = null == vv ? 0 : vv.length;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }
    dv.prototype.clear = hv, dv.prototype.delete = Sv, dv.prototype.get = ev, dv.prototype.has = gv, dv.prototype.set = pv, vv.exports = dv
  },
  5074: (vv, zv, Pv) => {
    var hv = Pv(4982)(Pv(4842), "Map");
    vv.exports = hv
  },
  4957: (vv, zv, Pv) => {
    var hv = Pv(4963),
      Sv = Pv(5077),
      ev = Pv(5099),
      gv = Pv(5104),
      pv = Pv(5107);

    function dv(vv) {
      var zv = -1,
        Pv = null == vv ? 0 : vv.length;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }
    dv.prototype.clear = hv, dv.prototype.delete = Sv, dv.prototype.get = ev, dv.prototype.has = gv, dv.prototype.set = pv, vv.exports = dv
  },
  5510: (vv, zv, Pv) => {
    var hv = Pv(4982)(Pv(4842), "Promise");
    vv.exports = hv
  },
  5513: (vv, zv, Pv) => {
    var hv = Pv(4982)(Pv(4842), "Set");
    vv.exports = hv
  },
  5328: (vv, zv, Pv) => {
    var hv = Pv(4957),
      Sv = Pv(5331),
      ev = Pv(5339);

    function gv(vv) {
      var zv = -1,
        Pv = null == vv ? 0 : vv.length;
      for (this.__data__ = new hv; ++zv < Pv;) this.add(vv[zv])
    }
    gv.prototype.add = gv.prototype.push = Sv, gv.prototype.has = ev, vv.exports = gv
  },
  5277: (vv, zv, Pv) => {
    var hv = Pv(5040),
      Sv = Pv(5280),
      ev = Pv(5288),
      gv = Pv(5297),
      pv = Pv(5303),
      dv = Pv(5309);

    function Nv(vv) {
      var zv = this.__data__ = new hv(vv);
      this.size = zv.size
    }
    Nv.prototype.clear = Sv, Nv.prototype.delete = ev, Nv.prototype.get = gv, Nv.prototype.has = pv, Nv.prototype.set = dv, vv.exports = Nv
  },
  4874: (vv, zv, Pv) => {
    var hv = Pv(4842).Symbol;
    vv.exports = hv
  },
  5356: (vv, zv, Pv) => {
    var hv = Pv(4842).Uint8Array;
    vv.exports = hv
  },
  5515: (vv, zv, Pv) => {
    var hv = Pv(4982)(Pv(4842), "WeakMap");
    vv.exports = hv
  },
  5647: vv => {
    vv.exports = function(vv, zv, Pv) {
      switch (Pv.length) {
        case 0:
          return vv.call(zv);
        case 1:
          return vv.call(zv, Pv[0]);
        case 2:
          return vv.call(zv, Pv[0], Pv[1]);
        case 3:
          return vv.call(zv, Pv[0], Pv[1], Pv[2])
      }
      return vv.apply(zv, Pv)
    }
  },
  5975: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = null == vv ? 0 : vv.length; ++Pv < hv;)
        if (!zv(vv[Pv], Pv, vv)) return !1;
      return !0
    }
  },
  5399: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = null == vv ? 0 : vv.length, Sv = 0, ev = []; ++Pv < hv;) {
        var gv = vv[Pv];
        zv(gv, Pv, vv) && (ev[Sv++] = gv)
      }
      return ev
    }
  },
  5720: (vv, zv, Pv) => {
    var hv = Pv(5724);
    vv.exports = function(vv, zv) {
      return !!(null == vv ? 0 : vv.length) && hv(vv, zv, 0) > -1
    }
  },
  5749: vv => {
    vv.exports = function(vv, zv, Pv) {
      for (var hv = -1, Sv = null == vv ? 0 : vv.length; ++hv < Sv;)
        if (Pv(zv, vv[hv])) return !0;
      return !1
    }
  },
  5416: (vv, zv, Pv) => {
    var hv = Pv(5424),
      Sv = Pv(5243),
      ev = Pv(4902),
      gv = Pv(5429),
      pv = Pv(5220),
      dv = Pv(5441),
      Nv = Object.prototype.hasOwnProperty;
    vv.exports = function(vv, zv) {
      var Pv = ev(vv),
        lv = !Pv && Sv(vv),
        Tv = !Pv && !lv && gv(vv),
        Wv = !Pv && !lv && !Tv && dv(vv),
        wv = Pv || lv || Tv || Wv,
        av = wv ? hv(vv.length, String) : [],
        sv = av.length;
      for (var Cv in vv) !zv && !Nv.call(vv, Cv) || wv && ("length" == Cv || Tv && ("offset" == Cv || "parent" == Cv) || Wv && ("buffer" == Cv || "byteLength" == Cv || "byteOffset" == Cv) || pv(Cv, sv)) || av.push(Cv);
      return av
    }
  },
  5128: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = null == vv ? 0 : vv.length, Sv = Array(hv); ++Pv < hv;) Sv[Pv] = zv(vv[Pv], Pv, vv);
      return Sv
    }
  },
  5236: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = zv.length, Sv = vv.length; ++Pv < hv;) vv[Sv + Pv] = zv[Pv];
      return vv
    }
  },
  5343: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = null == vv ? 0 : vv.length; ++Pv < hv;)
        if (zv(vv[Pv], Pv, vv)) return !0;
      return !1
    }
  },
  5812: vv => {
    vv.exports = function(vv) {
      return vv.split("")
    }
  },
  5050: (vv, zv, Pv) => {
    var hv = Pv(5055);
    vv.exports = function(vv, zv) {
      for (var Pv = vv.length; Pv--;)
        if (hv(vv[Pv][0], zv)) return Pv;
      return -1
    }
  },
  5967: (vv, zv, Pv) => {
    var hv = Pv(5668);
    vv.exports = function(vv, zv, Pv) {
      "__proto__" == zv && hv ? hv(vv, zv, {
        configurable: !0,
        enumerable: !0,
        value: Pv,
        writable: !0
      }) : vv[zv] = Pv
    }
  },
  5602: (vv, zv, Pv) => {
    var hv = Pv(5604),
      Sv = Pv(5611)(hv);
    vv.exports = Sv
  },
  5980: (vv, zv, Pv) => {
    var hv = Pv(5602);
    vv.exports = function(vv, zv) {
      var Pv = !0;
      return hv(vv, (function(vv, hv, Sv) {
        return Pv = !!zv(vv, hv, Sv)
      })), Pv
    }
  },
  5885: (vv, zv, Pv) => {
    var hv = Pv(4870);
    vv.exports = function(vv, zv, Pv) {
      for (var Sv = -1, ev = vv.length; ++Sv < ev;) {
        var gv = vv[Sv],
          pv = zv(gv);
        if (null != pv && (void 0 === dv ? pv === pv && !hv(pv) : Pv(pv, dv))) var dv = pv,
          Nv = gv
      }
      return Nv
    }
  },
  5733: vv => {
    vv.exports = function(vv, zv, Pv, hv) {
      for (var Sv = vv.length, ev = Pv + (hv ? 1 : -1); hv ? ev-- : ++ev < Sv;)
        if (zv(vv[ev], ev, vv)) return ev;
      return -1
    }
  },
  5234: (vv, zv, Pv) => {
    var hv = Pv(5236),
      Sv = Pv(5241);
    vv.exports = function vv(zv, Pv, ev, gv, pv) {
      var dv = -1,
        Nv = zv.length;
      for (ev || (ev = Sv), pv || (pv = []); ++dv < Nv;) {
        var lv = zv[dv];
        Pv > 0 && ev(lv) ? Pv > 1 ? vv(lv, Pv - 1, ev, gv, pv) : hv(pv, lv) : gv || (pv[pv.length] = lv)
      }
      return pv
    }
  },
  5607: (vv, zv, Pv) => {
    var hv = Pv(5609)();
    vv.exports = hv
  },
  5604: (vv, zv, Pv) => {
    var hv = Pv(5607),
      Sv = Pv(5409);
    vv.exports = function(vv, zv) {
      return vv && hv(vv, zv, Sv)
    }
  },
  4928: (vv, zv, Pv) => {
    var hv = Pv(4933),
      Sv = Pv(5133);
    vv.exports = function(vv, zv) {
      for (var Pv = 0, ev = (zv = hv(zv, vv)).length; null != vv && Pv < ev;) vv = vv[Sv(zv[Pv++])];
      return Pv && Pv == ev ? vv : void 0
    }
  },
  5382: (vv, zv, Pv) => {
    var hv = Pv(5236),
      Sv = Pv(4902);
    vv.exports = function(vv, zv, Pv) {
      var ev = zv(vv);
      return Sv(vv) ? ev : hv(ev, Pv(vv))
    }
  },
  4872: (vv, zv, Pv) => {
    var hv = Pv(4874),
      Sv = Pv(4883),
      ev = Pv(4885),
      gv = hv ? hv.toStringTag : void 0;
    vv.exports = function(vv) {
      return null == vv ? void 0 === vv ? "[object Undefined]" : "[object Null]" : gv && gv in Object(vv) ? Sv(vv) : ev(vv)
    }
  },
  5887: vv => {
    vv.exports = function(vv, zv) {
      return vv > zv
    }
  },
  5549: vv => {
    vv.exports = function(vv, zv) {
      return null != vv && zv in Object(vv)
    }
  },
  5724: (vv, zv, Pv) => {
    var hv = Pv(5733),
      Sv = Pv(5739),
      ev = Pv(5741);
    vv.exports = function(vv, zv, Pv) {
      return zv === zv ? ev(vv, zv, Pv) : hv(vv, Sv, Pv)
    }
  },
  5252: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4888);
    vv.exports = function(vv) {
      return Sv(vv) && "[object Arguments]" == hv(vv)
    }
  },
  5315: (vv, zv, Pv) => {
    var hv = Pv(5317),
      Sv = Pv(4888);
    vv.exports = function vv(zv, Pv, ev, gv, pv) {
      return zv === Pv || (null == zv || null == Pv || !Sv(zv) && !Sv(Pv) ? zv !== zv && Pv !== Pv : hv(zv, Pv, ev, gv, vv, pv))
    }
  },
  5317: (vv, zv, Pv) => {
    var hv = Pv(5277),
      Sv = Pv(5319),
      ev = Pv(5347),
      gv = Pv(5369),
      pv = Pv(5493),
      dv = Pv(4902),
      Nv = Pv(5429),
      lv = Pv(5441),
      Tv = "[object Arguments]",
      Wv = "[object Array]",
      wv = "[object Object]",
      av = Object.prototype.hasOwnProperty;
    vv.exports = function(vv, zv, Pv, sv, Cv, iv) {
      var cv = dv(vv),
        Gv = dv(zv),
        mv = cv ? Wv : pv(vv),
        jv = Gv ? Wv : pv(zv),
        fv = (mv = mv == Tv ? wv : mv) == wv,
        Fv = (jv = jv == Tv ? wv : jv) == wv,
        Yv = mv == jv;
      if (Yv && Nv(vv)) {
        if (!Nv(zv)) return !1;
        cv = !0, fv = !1
      }
      if (Yv && !fv) return iv || (iv = new hv), cv || lv(vv) ? Sv(vv, zv, Pv, sv, Cv, iv) : ev(vv, zv, mv, Pv, sv, Cv, iv);
      if (!(1 & Pv)) {
        var nv = fv && av.call(vv, "__wrapped__"),
          Ov = Fv && av.call(zv, "__wrapped__");
        if (nv || Ov) {
          var Dv = nv ? vv.value() : vv,
            Kv = Ov ? zv.value() : zv;
          return iv || (iv = new hv), Cv(Dv, Kv, Pv, sv, iv)
        }
      }
      return !!Yv && (iv || (iv = new hv), gv(vv, zv, Pv, sv, Cv, iv))
    }
  },
  5270: (vv, zv, Pv) => {
    var hv = Pv(5277),
      Sv = Pv(5315);
    vv.exports = function(vv, zv, Pv, ev) {
      var gv = Pv.length,
        pv = gv,
        dv = !ev;
      if (null == vv) return !pv;
      for (vv = Object(vv); gv--;) {
        var Nv = Pv[gv];
        if (dv && Nv[2] ? Nv[1] !== vv[Nv[0]] : !(Nv[0] in vv)) return !1
      }
      for (; ++gv < pv;) {
        var lv = (Nv = Pv[gv])[0],
          Tv = vv[lv],
          Wv = Nv[1];
        if (dv && Nv[2]) {
          if (void 0 === Tv && !(lv in vv)) return !1
        } else {
          var wv = new hv;
          if (ev) var av = ev(Tv, Wv, lv, vv, zv, wv);
          if (!(void 0 === av ? Sv(Wv, Tv, 3, ev, wv) : av)) return !1
        }
      }
      return !0
    }
  },
  5739: vv => {
    vv.exports = function(vv) {
      return vv !== vv
    }
  },
  4988: (vv, zv, Pv) => {
    var hv = Pv(4995),
      Sv = Pv(4999),
      ev = Pv(4826),
      gv = Pv(5013),
      pv = /^\[object .+?Constructor\]$/,
      dv = Function.prototype,
      Nv = Object.prototype,
      lv = dv.toString,
      Tv = Nv.hasOwnProperty,
      Wv = RegExp("^" + lv.call(Tv).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    vv.exports = function(vv) {
      return !(!ev(vv) || Sv(vv)) && (hv(vv) ? Wv : pv).test(gv(vv))
    }
  },
  5444: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(5211),
      ev = Pv(4888),
      gv = {};
    gv["[object Float32Array]"] = gv["[object Float64Array]"] = gv["[object Int8Array]"] = gv["[object Int16Array]"] = gv["[object Int32Array]"] = gv["[object Uint8Array]"] = gv["[object Uint8ClampedArray]"] = gv["[object Uint16Array]"] = gv["[object Uint32Array]"] = !0, gv["[object Arguments]"] = gv["[object Array]"] = gv["[object ArrayBuffer]"] = gv["[object Boolean]"] = gv["[object DataView]"] = gv["[object Date]"] = gv["[object Error]"] = gv["[object Function]"] = gv["[object Map]"] = gv["[object Number]"] = gv["[object Object]"] = gv["[object RegExp]"] = gv["[object Set]"] = gv["[object String]"] = gv["[object WeakMap]"] = !1, vv.exports = function(vv) {
      return ev(vv) && Sv(vv.length) && !!gv[hv(vv)]
    }
  },
  5265: (vv, zv, Pv) => {
    var hv = Pv(5268),
      Sv = Pv(5538),
      ev = Pv(5567),
      gv = Pv(4902),
      pv = Pv(5575);
    vv.exports = function(vv) {
      return "function" == typeof vv ? vv : null == vv ? ev : "object" == typeof vv ? gv(vv) ? Sv(vv[0], vv[1]) : hv(vv) : pv(vv)
    }
  },
  5470: (vv, zv, Pv) => {
    var hv = Pv(5477),
      Sv = Pv(5483),
      ev = Object.prototype.hasOwnProperty;
    vv.exports = function(vv) {
      if (!hv(vv)) return Sv(vv);
      var zv = [];
      for (var Pv in Object(vv)) ev.call(vv, Pv) && "constructor" != Pv && zv.push(Pv);
      return zv
    }
  },
  5901: vv => {
    vv.exports = function(vv, zv) {
      return vv < zv
    }
  },
  5593: (vv, zv, Pv) => {
    var hv = Pv(5602),
      Sv = Pv(5209);
    vv.exports = function(vv, zv) {
      var Pv = -1,
        ev = Sv(vv) ? Array(vv.length) : [];
      return hv(vv, (function(vv, hv, Sv) {
        ev[++Pv] = zv(vv, hv, Sv)
      })), ev
    }
  },
  5268: (vv, zv, Pv) => {
    var hv = Pv(5270),
      Sv = Pv(5524),
      ev = Pv(5535);
    vv.exports = function(vv) {
      var zv = Sv(vv);
      return 1 == zv.length && zv[0][2] ? ev(zv[0][0], zv[0][1]) : function(Pv) {
        return Pv === vv || hv(Pv, vv, zv)
      }
    }
  },
  5538: (vv, zv, Pv) => {
    var hv = Pv(5315),
      Sv = Pv(4924),
      ev = Pv(5546),
      gv = Pv(4939),
      pv = Pv(5528),
      dv = Pv(5535),
      Nv = Pv(5133);
    vv.exports = function(vv, zv) {
      return gv(vv) && pv(zv) ? dv(Nv(vv), zv) : function(Pv) {
        var gv = Sv(Pv, vv);
        return void 0 === gv && gv === zv ? ev(Pv, vv) : hv(zv, gv, 3)
      }
    }
  },
  5257: (vv, zv, Pv) => {
    var hv = Pv(5128),
      Sv = Pv(4928),
      ev = Pv(5265),
      gv = Pv(5593),
      pv = Pv(5618),
      dv = Pv(5453),
      Nv = Pv(5621),
      lv = Pv(5567),
      Tv = Pv(4902);
    vv.exports = function(vv, zv, Pv) {
      zv = zv.length ? hv(zv, (function(vv) {
        return Tv(vv) ? function(zv) {
          return Sv(zv, 1 === vv.length ? vv[0] : vv)
        } : vv
      })) : [lv];
      var Wv = -1;
      zv = hv(zv, dv(ev));
      var wv = gv(vv, (function(vv, Pv, Sv) {
        return {
          criteria: hv(zv, (function(zv) {
            return zv(vv)
          })),
          index: ++Wv,
          value: vv
        }
      }));
      return pv(wv, (function(vv, zv) {
        return Nv(vv, zv, Pv)
      }))
    }
  },
  5579: vv => {
    vv.exports = function(vv) {
      return function(zv) {
        return null == zv ? void 0 : zv[vv]
      }
    }
  },
  5586: (vv, zv, Pv) => {
    var hv = Pv(4928);
    vv.exports = function(vv) {
      return function(zv) {
        return hv(zv, vv)
      }
    }
  },
  5203: vv => {
    var zv = Math.ceil,
      Pv = Math.max;
    vv.exports = function(vv, hv, Sv, ev) {
      for (var gv = -1, pv = Pv(zv((hv - vv) / (Sv || 1)), 0), dv = Array(pv); pv--;) dv[ev ? pv : ++gv] = vv, vv += Sv;
      return dv
    }
  },
  5635: (vv, zv, Pv) => {
    var hv = Pv(5567),
      Sv = Pv(5643),
      ev = Pv(5652);
    vv.exports = function(vv, zv) {
      return ev(Sv(vv, zv, hv), vv + "")
    }
  },
  5660: (vv, zv, Pv) => {
    var hv = Pv(5665),
      Sv = Pv(5668),
      ev = Pv(5567),
      gv = Sv ? function(vv, zv) {
        return Sv(vv, "toString", {
          configurable: !0,
          enumerable: !1,
          value: hv(zv),
          writable: !0
        })
      } : ev;
    vv.exports = gv
  },
  5800: vv => {
    vv.exports = function(vv, zv, Pv) {
      var hv = -1,
        Sv = vv.length;
      zv < 0 && (zv = -zv > Sv ? 0 : Sv + zv), (Pv = Pv > Sv ? Sv : Pv) < 0 && (Pv += Sv), Sv = zv > Pv ? 0 : Pv - zv >>> 0, zv >>>= 0;
      for (var ev = Array(Sv); ++hv < Sv;) ev[hv] = vv[hv + zv];
      return ev
    }
  },
  6038: (vv, zv, Pv) => {
    var hv = Pv(5602);
    vv.exports = function(vv, zv) {
      var Pv;
      return hv(vv, (function(vv, hv, Sv) {
        return !(Pv = zv(vv, hv, Sv))
      })), !!Pv
    }
  },
  5618: vv => {
    vv.exports = function(vv, zv) {
      var Pv = vv.length;
      for (vv.sort(zv); Pv--;) vv[Pv] = vv[Pv].value;
      return vv
    }
  },
  5424: vv => {
    vv.exports = function(vv, zv) {
      for (var Pv = -1, hv = Array(vv); ++Pv < vv;) hv[Pv] = zv(Pv);
      return hv
    }
  },
  5121: (vv, zv, Pv) => {
    var hv = Pv(4874),
      Sv = Pv(5128),
      ev = Pv(4902),
      gv = Pv(4870),
      pv = hv ? hv.prototype : void 0,
      dv = pv ? pv.toString : void 0;
    vv.exports = function vv(zv) {
      if ("string" == typeof zv) return zv;
      if (ev(zv)) return Sv(zv, vv) + "";
      if (gv(zv)) return dv ? dv.call(zv) : "";
      var Pv = zv + "";
      return "0" == Pv && 1 / zv == -1 / 0 ? "-0" : Pv
    }
  },
  4863: (vv, zv, Pv) => {
    var hv = Pv(4866),
      Sv = /^\s+/;
    vv.exports = function(vv) {
      return vv ? vv.slice(0, hv(vv) + 1).replace(Sv, "") : vv
    }
  },
  5453: vv => {
    vv.exports = function(vv) {
      return function(zv) {
        return vv(zv)
      }
    }
  },
  5717: (vv, zv, Pv) => {
    var hv = Pv(5328),
      Sv = Pv(5720),
      ev = Pv(5749),
      gv = Pv(5345),
      pv = Pv(5755),
      dv = Pv(5361);
    vv.exports = function(vv, zv, Pv) {
      var Nv = -1,
        lv = Sv,
        Tv = vv.length,
        Wv = !0,
        wv = [],
        av = wv;
      if (Pv) Wv = !1, lv = ev;
      else if (Tv >= 200) {
        var sv = zv ? null : pv(vv);
        if (sv) return dv(sv);
        Wv = !1, lv = gv, av = new hv
      } else av = zv ? [] : wv;
      vv: for (; ++Nv < Tv;) {
        var Cv = vv[Nv],
          iv = zv ? zv(Cv) : Cv;
        if (Cv = Pv || 0 !== Cv ? Cv : 0, Wv && iv === iv) {
          for (var cv = av.length; cv--;)
            if (av[cv] === iv) continue vv;
          zv && av.push(iv), wv.push(Cv)
        } else lv(av, iv, Pv) || (av !== wv && av.push(iv), wv.push(Cv))
      }
      return wv
    }
  },
  5345: vv => {
    vv.exports = function(vv, zv) {
      return vv.has(zv)
    }
  },
  4933: (vv, zv, Pv) => {
    var hv = Pv(4902),
      Sv = Pv(4939),
      ev = Pv(4942),
      gv = Pv(5113);
    vv.exports = function(vv, zv) {
      return hv(vv) ? vv : Sv(vv, zv) ? [vv] : ev(gv(vv))
    }
  },
  5793: (vv, zv, Pv) => {
    var hv = Pv(5800);
    vv.exports = function(vv, zv, Pv) {
      var Sv = vv.length;
      return Pv = void 0 === Pv ? Sv : Pv, !zv && Pv >= Sv ? vv : hv(vv, zv, Pv)
    }
  },
  5628: (vv, zv, Pv) => {
    var hv = Pv(4870);
    vv.exports = function(vv, zv) {
      if (vv !== zv) {
        var Pv = void 0 !== vv,
          Sv = null === vv,
          ev = vv === vv,
          gv = hv(vv),
          pv = void 0 !== zv,
          dv = null === zv,
          Nv = zv === zv,
          lv = hv(zv);
        if (!dv && !lv && !gv && vv > zv || gv && pv && Nv && !dv && !lv || Sv && pv && Nv || !Pv && Nv || !ev) return 1;
        if (!Sv && !gv && !lv && vv < zv || lv && Pv && ev && !Sv && !gv || dv && Pv && ev || !pv && ev || !Nv) return -1
      }
      return 0
    }
  },
  5621: (vv, zv, Pv) => {
    var hv = Pv(5628);
    vv.exports = function(vv, zv, Pv) {
      for (var Sv = -1, ev = vv.criteria, gv = zv.criteria, pv = ev.length, dv = Pv.length; ++Sv < pv;) {
        var Nv = hv(ev[Sv], gv[Sv]);
        if (Nv) return Sv >= dv ? Nv : Nv * ("desc" == Pv[Sv] ? -1 : 1)
      }
      return vv.index - zv.index
    }
  },
  5004: (vv, zv, Pv) => {
    var hv = Pv(4842)["__core-js_shared__"];
    vv.exports = hv
  },
  5611: (vv, zv, Pv) => {
    var hv = Pv(5209);
    vv.exports = function(vv, zv) {
      return function(Pv, Sv) {
        if (null == Pv) return Pv;
        if (!hv(Pv)) return vv(Pv, Sv);
        for (var ev = Pv.length, gv = zv ? ev : -1, pv = Object(Pv);
          (zv ? gv-- : ++gv < ev) && !1 !== Sv(pv[gv], gv, pv););
        return Pv
      }
    }
  },
  5609: vv => {
    vv.exports = function(vv) {
      return function(zv, Pv, hv) {
        for (var Sv = -1, ev = Object(zv), gv = hv(zv), pv = gv.length; pv--;) {
          var dv = gv[vv ? pv : ++Sv];
          if (!1 === Pv(ev[dv], dv, ev)) break
        }
        return zv
      }
    }
  },
  5785: (vv, zv, Pv) => {
    var hv = Pv(5793),
      Sv = Pv(5802),
      ev = Pv(5804),
      gv = Pv(5113);
    vv.exports = function(vv) {
      return function(zv) {
        zv = gv(zv);
        var Pv = Sv(zv) ? ev(zv) : void 0,
          pv = Pv ? Pv[0] : zv.charAt(0),
          dv = Pv ? hv(Pv, 1).join("") : zv.slice(1);
        return pv[vv]() + dv
      }
    }
  },
  6054: (vv, zv, Pv) => {
    var hv = Pv(5265),
      Sv = Pv(5209),
      ev = Pv(5409);
    vv.exports = function(vv) {
      return function(zv, Pv, gv) {
        var pv = Object(zv);
        if (!Sv(zv)) {
          var dv = hv(Pv, 3);
          zv = ev(zv), Pv = function(vv) {
            return dv(pv[vv], vv, pv)
          }
        }
        var Nv = vv(zv, Pv, gv);
        return Nv > -1 ? pv[dv ? zv[Nv] : Nv] : void 0
      }
    }
  },
  5198: (vv, zv, Pv) => {
    var hv = Pv(5203),
      Sv = Pv(5205),
      ev = Pv(5224);
    vv.exports = function(vv) {
      return function(zv, Pv, gv) {
        return gv && "number" != typeof gv && Sv(zv, Pv, gv) && (Pv = gv = void 0), zv = ev(zv), void 0 === Pv ? (Pv = zv, zv = 0) : Pv = ev(Pv), gv = void 0 === gv ? zv < Pv ? 1 : -1 : ev(gv), hv(zv, Pv, gv, vv)
      }
    }
  },
  5755: (vv, zv, Pv) => {
    var hv = Pv(5513),
      Sv = Pv(5762),
      ev = Pv(5361),
      gv = hv && 1 / ev(new hv([, -0]))[1] == 1 / 0 ? function(vv) {
        return new hv(vv)
      } : Sv;
    vv.exports = gv
  },
  5668: (vv, zv, Pv) => {
    var hv = Pv(4982),
      Sv = function() {
        try {
          var vv = hv(Object, "defineProperty");
          return vv({}, "", {}), vv
        } catch (zv) {}
      }();
    vv.exports = Sv
  },
  5319: (vv, zv, Pv) => {
    var hv = Pv(5328),
      Sv = Pv(5343),
      ev = Pv(5345);
    vv.exports = function(vv, zv, Pv, gv, pv, dv) {
      var Nv = 1 & Pv,
        lv = vv.length,
        Tv = zv.length;
      if (lv != Tv && !(Nv && Tv > lv)) return !1;
      var Wv = dv.get(vv),
        wv = dv.get(zv);
      if (Wv && wv) return Wv == zv && wv == vv;
      var av = -1,
        sv = !0,
        Cv = 2 & Pv ? new hv : void 0;
      for (dv.set(vv, zv), dv.set(zv, vv); ++av < lv;) {
        var iv = vv[av],
          cv = zv[av];
        if (gv) var Gv = Nv ? gv(cv, iv, av, zv, vv, dv) : gv(iv, cv, av, vv, zv, dv);
        if (void 0 !== Gv) {
          if (Gv) continue;
          sv = !1;
          break
        }
        if (Cv) {
          if (!Sv(zv, (function(vv, zv) {
              if (!ev(Cv, zv) && (iv === vv || pv(iv, vv, Pv, gv, dv))) return Cv.push(zv)
            }))) {
            sv = !1;
            break
          }
        } else if (iv !== cv && !pv(iv, cv, Pv, gv, dv)) {
          sv = !1;
          break
        }
      }
      return dv.delete(vv), dv.delete(zv), sv
    }
  },
  5347: (vv, zv, Pv) => {
    var hv = Pv(4874),
      Sv = Pv(5356),
      ev = Pv(5055),
      gv = Pv(5319),
      pv = Pv(5359),
      dv = Pv(5361),
      Nv = hv ? hv.prototype : void 0,
      lv = Nv ? Nv.valueOf : void 0;
    vv.exports = function(vv, zv, Pv, hv, Nv, Tv, Wv) {
      switch (Pv) {
        case "[object DataView]":
          if (vv.byteLength != zv.byteLength || vv.byteOffset != zv.byteOffset) return !1;
          vv = vv.buffer, zv = zv.buffer;
        case "[object ArrayBuffer]":
          return !(vv.byteLength != zv.byteLength || !Tv(new Sv(vv), new Sv(zv)));
        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return ev(+vv, +zv);
        case "[object Error]":
          return vv.name == zv.name && vv.message == zv.message;
        case "[object RegExp]":
        case "[object String]":
          return vv == zv + "";
        case "[object Map]":
          var wv = pv;
        case "[object Set]":
          var av = 1 & hv;
          if (wv || (wv = dv), vv.size != zv.size && !av) return !1;
          var sv = Wv.get(vv);
          if (sv) return sv == zv;
          hv |= 2, Wv.set(vv, zv);
          var Cv = gv(wv(vv), wv(zv), hv, Nv, Tv, Wv);
          return Wv.delete(vv), Cv;
        case "[object Symbol]":
          if (lv) return lv.call(vv) == lv.call(zv)
      }
      return !1
    }
  },
  5369: (vv, zv, Pv) => {
    var hv = Pv(5378),
      Sv = Object.prototype.hasOwnProperty;
    vv.exports = function(vv, zv, Pv, ev, gv, pv) {
      var dv = 1 & Pv,
        Nv = hv(vv),
        lv = Nv.length;
      if (lv != hv(zv).length && !dv) return !1;
      for (var Tv = lv; Tv--;) {
        var Wv = Nv[Tv];
        if (!(dv ? Wv in zv : Sv.call(zv, Wv))) return !1
      }
      var wv = pv.get(vv),
        av = pv.get(zv);
      if (wv && av) return wv == zv && av == vv;
      var sv = !0;
      pv.set(vv, zv), pv.set(zv, vv);
      for (var Cv = dv; ++Tv < lv;) {
        var iv = vv[Wv = Nv[Tv]],
          cv = zv[Wv];
        if (ev) var Gv = dv ? ev(cv, iv, Wv, zv, vv, pv) : ev(iv, cv, Wv, vv, zv, pv);
        if (!(void 0 === Gv ? iv === cv || gv(iv, cv, Pv, ev, pv) : Gv)) {
          sv = !1;
          break
        }
        Cv || (Cv = "constructor" == Wv)
      }
      if (sv && !Cv) {
        var mv = vv.constructor,
          jv = zv.constructor;
        mv == jv || !("constructor" in vv) || !("constructor" in zv) || "function" == typeof mv && mv instanceof mv && "function" == typeof jv && jv instanceof jv || (sv = !1)
      }
      return pv.delete(vv), pv.delete(zv), sv
    }
  },
  4848: (vv, zv, Pv) => {
    var hv = "object" == typeof Pv.g && Pv.g && Pv.g.Object === Object && Pv.g;
    vv.exports = hv
  },
  5378: (vv, zv, Pv) => {
    var hv = Pv(5382),
      Sv = Pv(5391),
      ev = Pv(5409);
    vv.exports = function(vv) {
      return hv(vv, ev, Sv)
    }
  },
  5084: (vv, zv, Pv) => {
    var hv = Pv(5093);
    vv.exports = function(vv, zv) {
      var Pv = vv.__data__;
      return hv(zv) ? Pv["string" == typeof zv ? "string" : "hash"] : Pv.map
    }
  },
  5524: (vv, zv, Pv) => {
    var hv = Pv(5528),
      Sv = Pv(5409);
    vv.exports = function(vv) {
      for (var zv = Sv(vv), Pv = zv.length; Pv--;) {
        var ev = zv[Pv],
          gv = vv[ev];
        zv[Pv] = [ev, gv, hv(gv)]
      }
      return zv
    }
  },
  4982: (vv, zv, Pv) => {
    var hv = Pv(4988),
      Sv = Pv(5015);
    vv.exports = function(vv, zv) {
      var Pv = Sv(vv, zv);
      return hv(Pv) ? Pv : void 0
    }
  },
  6020: (vv, zv, Pv) => {
    var hv = Pv(5488)(Object.getPrototypeOf, Object);
    vv.exports = hv
  },
  4883: (vv, zv, Pv) => {
    var hv = Pv(4874),
      Sv = Object.prototype,
      ev = Sv.hasOwnProperty,
      gv = Sv.toString,
      pv = hv ? hv.toStringTag : void 0;
    vv.exports = function(vv) {
      var zv = ev.call(vv, pv),
        Pv = vv[pv];
      try {
        vv[pv] = void 0;
        var hv = !0
      } catch (dv) {}
      var Sv = gv.call(vv);
      return hv && (zv ? vv[pv] = Pv : delete vv[pv]), Sv
    }
  },
  5391: (vv, zv, Pv) => {
    var hv = Pv(5399),
      Sv = Pv(5403),
      ev = Object.prototype.propertyIsEnumerable,
      gv = Object.getOwnPropertySymbols,
      pv = gv ? function(vv) {
        return null == vv ? [] : (vv = Object(vv), hv(gv(vv), (function(zv) {
          return ev.call(vv, zv)
        })))
      } : Sv;
    vv.exports = pv
  },
  5493: (vv, zv, Pv) => {
    var hv = Pv(5501),
      Sv = Pv(5074),
      ev = Pv(5510),
      gv = Pv(5513),
      pv = Pv(5515),
      dv = Pv(4872),
      Nv = Pv(5013),
      lv = "[object Map]",
      Tv = "[object Promise]",
      Wv = "[object Set]",
      wv = "[object WeakMap]",
      av = "[object DataView]",
      sv = Nv(hv),
      Cv = Nv(Sv),
      iv = Nv(ev),
      cv = Nv(gv),
      Gv = Nv(pv),
      mv = dv;
    (hv && mv(new hv(new ArrayBuffer(1))) != av || Sv && mv(new Sv) != lv || ev && mv(ev.resolve()) != Tv || gv && mv(new gv) != Wv || pv && mv(new pv) != wv) && (mv = function(vv) {
      var zv = dv(vv),
        Pv = "[object Object]" == zv ? vv.constructor : void 0,
        hv = Pv ? Nv(Pv) : "";
      if (hv) switch (hv) {
        case sv:
          return av;
        case Cv:
          return lv;
        case iv:
          return Tv;
        case cv:
          return Wv;
        case Gv:
          return wv
      }
      return zv
    }), vv.exports = mv
  },
  5015: vv => {
    vv.exports = function(vv, zv) {
      return null == vv ? void 0 : vv[zv]
    }
  },
  5558: (vv, zv, Pv) => {
    var hv = Pv(4933),
      Sv = Pv(5243),
      ev = Pv(4902),
      gv = Pv(5220),
      pv = Pv(5211),
      dv = Pv(5133);
    vv.exports = function(vv, zv, Pv) {
      for (var Nv = -1, lv = (zv = hv(zv, vv)).length, Tv = !1; ++Nv < lv;) {
        var Wv = dv(zv[Nv]);
        if (!(Tv = null != vv && Pv(vv, Wv))) break;
        vv = vv[Wv]
      }
      return Tv || ++Nv != lv ? Tv : !!(lv = null == vv ? 0 : vv.length) && pv(lv) && gv(Wv, lv) && (ev(vv) || Sv(vv))
    }
  },
  5802: vv => {
    var zv = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    vv.exports = function(vv) {
      return zv.test(vv)
    }
  },
  4974: (vv, zv, Pv) => {
    var hv = Pv(4978);
    vv.exports = function() {
      this.__data__ = hv ? hv(null) : {}, this.size = 0
    }
  },
  5021: vv => {
    vv.exports = function(vv) {
      var zv = this.has(vv) && delete this.__data__[vv];
      return this.size -= zv ? 1 : 0, zv
    }
  },
  5024: (vv, zv, Pv) => {
    var hv = Pv(4978),
      Sv = Object.prototype.hasOwnProperty;
    vv.exports = function(vv) {
      var zv = this.__data__;
      if (hv) {
        var Pv = zv[vv];
        return "__lodash_hash_undefined__" === Pv ? void 0 : Pv
      }
      return Sv.call(zv, vv) ? zv[vv] : void 0
    }
  },
  5028: (vv, zv, Pv) => {
    var hv = Pv(4978),
      Sv = Object.prototype.hasOwnProperty;
    vv.exports = function(vv) {
      var zv = this.__data__;
      return hv ? void 0 !== zv[vv] : Sv.call(zv, vv)
    }
  },
  5035: (vv, zv, Pv) => {
    var hv = Pv(4978);
    vv.exports = function(vv, zv) {
      var Pv = this.__data__;
      return this.size += this.has(vv) ? 0 : 1, Pv[vv] = hv && void 0 === zv ? "__lodash_hash_undefined__" : zv, this
    }
  },
  5241: (vv, zv, Pv) => {
    var hv = Pv(4874),
      Sv = Pv(5243),
      ev = Pv(4902),
      gv = hv ? hv.isConcatSpreadable : void 0;
    vv.exports = function(vv) {
      return ev(vv) || Sv(vv) || !!(gv && vv && vv[gv])
    }
  },
  5220: vv => {
    var zv = /^(?:0|[1-9]\d*)$/;
    vv.exports = function(vv, Pv) {
      var hv = typeof vv;
      return !!(Pv = null == Pv ? 9007199254740991 : Pv) && ("number" == hv || "symbol" != hv && zv.test(vv)) && vv > -1 && vv % 1 == 0 && vv < Pv
    }
  },
  5205: (vv, zv, Pv) => {
    var hv = Pv(5055),
      Sv = Pv(5209),
      ev = Pv(5220),
      gv = Pv(4826);
    vv.exports = function(vv, zv, Pv) {
      if (!gv(Pv)) return !1;
      var pv = typeof zv;
      return !!("number" == pv ? Sv(Pv) && ev(zv, Pv.length) : "string" == pv && zv in Pv) && hv(Pv[zv], vv)
    }
  },
  4939: (vv, zv, Pv) => {
    var hv = Pv(4902),
      Sv = Pv(4870),
      ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      gv = /^\w*$/;
    vv.exports = function(vv, zv) {
      if (hv(vv)) return !1;
      var Pv = typeof vv;
      return !("number" != Pv && "symbol" != Pv && "boolean" != Pv && null != vv && !Sv(vv)) || (gv.test(vv) || !ev.test(vv) || null != zv && vv in Object(zv))
    }
  },
  5093: vv => {
    vv.exports = function(vv) {
      var zv = typeof vv;
      return "string" == zv || "number" == zv || "symbol" == zv || "boolean" == zv ? "__proto__" !== vv : null === vv
    }
  },
  4999: (vv, zv, Pv) => {
    var hv = Pv(5004),
      Sv = function() {
        var vv = /[^.]+$/.exec(hv && hv.keys && hv.keys.IE_PROTO || "");
        return vv ? "Symbol(src)_1." + vv : ""
      }();
    vv.exports = function(vv) {
      return !!Sv && Sv in vv
    }
  },
  5477: vv => {
    var zv = Object.prototype;
    vv.exports = function(vv) {
      var Pv = vv && vv.constructor;
      return vv === ("function" == typeof Pv && Pv.prototype || zv)
    }
  },
  5528: (vv, zv, Pv) => {
    var hv = Pv(4826);
    vv.exports = function(vv) {
      return vv === vv && !hv(vv)
    }
  },
  5042: vv => {
    vv.exports = function() {
      this.__data__ = [], this.size = 0
    }
  },
  5046: (vv, zv, Pv) => {
    var hv = Pv(5050),
      Sv = Array.prototype.splice;
    vv.exports = function(vv) {
      var zv = this.__data__,
        Pv = hv(zv, vv);
      return !(Pv < 0) && (Pv == zv.length - 1 ? zv.pop() : Sv.call(zv, Pv, 1), --this.size, !0)
    }
  },
  5058: (vv, zv, Pv) => {
    var hv = Pv(5050);
    vv.exports = function(vv) {
      var zv = this.__data__,
        Pv = hv(zv, vv);
      return Pv < 0 ? void 0 : zv[Pv][1]
    }
  },
  5067: (vv, zv, Pv) => {
    var hv = Pv(5050);
    vv.exports = function(vv) {
      return hv(this.__data__, vv) > -1
    }
  },
  5072: (vv, zv, Pv) => {
    var hv = Pv(5050);
    vv.exports = function(vv, zv) {
      var Pv = this.__data__,
        Sv = hv(Pv, vv);
      return Sv < 0 ? (++this.size, Pv.push([vv, zv])) : Pv[Sv][1] = zv, this
    }
  },
  4963: (vv, zv, Pv) => {
    var hv = Pv(4969),
      Sv = Pv(5040),
      ev = Pv(5074);
    vv.exports = function() {
      this.size = 0, this.__data__ = {
        hash: new hv,
        map: new(ev || Sv),
        string: new hv
      }
    }
  },
  5077: (vv, zv, Pv) => {
    var hv = Pv(5084);
    vv.exports = function(vv) {
      var zv = hv(this, vv).delete(vv);
      return this.size -= zv ? 1 : 0, zv
    }
  },
  5099: (vv, zv, Pv) => {
    var hv = Pv(5084);
    vv.exports = function(vv) {
      return hv(this, vv).get(vv)
    }
  },
  5104: (vv, zv, Pv) => {
    var hv = Pv(5084);
    vv.exports = function(vv) {
      return hv(this, vv).has(vv)
    }
  },
  5107: (vv, zv, Pv) => {
    var hv = Pv(5084);
    vv.exports = function(vv, zv) {
      var Pv = hv(this, vv),
        Sv = Pv.size;
      return Pv.set(vv, zv), this.size += Pv.size == Sv ? 0 : 1, this
    }
  },
  5359: vv => {
    vv.exports = function(vv) {
      var zv = -1,
        Pv = Array(vv.size);
      return vv.forEach((function(vv, hv) {
        Pv[++zv] = [hv, vv]
      })), Pv
    }
  },
  5535: vv => {
    vv.exports = function(vv, zv) {
      return function(Pv) {
        return null != Pv && (Pv[vv] === zv && (void 0 !== zv || vv in Object(Pv)))
      }
    }
  },
  4950: (vv, zv, Pv) => {
    var hv = Pv(4952);
    vv.exports = function(vv) {
      var zv = hv(vv, (function(vv) {
          return 500 === Pv.size && Pv.clear(), vv
        })),
        Pv = zv.cache;
      return zv
    }
  },
  4978: (vv, zv, Pv) => {
    var hv = Pv(4982)(Object, "create");
    vv.exports = hv
  },
  5483: (vv, zv, Pv) => {
    var hv = Pv(5488)(Object.keys, Object);
    vv.exports = hv
  },
  5462: (vv, zv, Pv) => {
    vv = Pv.nmd(vv);
    var hv = Pv(4848),
      Sv = zv && !zv.nodeType && zv,
      ev = Sv && vv && !vv.nodeType && vv,
      gv = ev && ev.exports === Sv && hv.process,
      pv = function() {
        try {
          var vv = ev && ev.require && ev.require("util").types;
          return vv || gv && gv.binding && gv.binding("util")
        } catch (zv) {}
      }();
    vv.exports = pv
  },
  4885: vv => {
    var zv = Object.prototype.toString;
    vv.exports = function(vv) {
      return zv.call(vv)
    }
  },
  5488: vv => {
    vv.exports = function(vv, zv) {
      return function(Pv) {
        return vv(zv(Pv))
      }
    }
  },
  5643: (vv, zv, Pv) => {
    var hv = Pv(5647),
      Sv = Math.max;
    vv.exports = function(vv, zv, Pv) {
      return zv = Sv(void 0 === zv ? vv.length - 1 : zv, 0),
        function() {
          for (var ev = arguments, gv = -1, pv = Sv(ev.length - zv, 0), dv = Array(pv); ++gv < pv;) dv[gv] = ev[zv + gv];
          gv = -1;
          for (var Nv = Array(zv + 1); ++gv < zv;) Nv[gv] = ev[gv];
          return Nv[zv] = Pv(dv), hv(vv, this, Nv)
        }
    }
  },
  4842: (vv, zv, Pv) => {
    var hv = Pv(4848),
      Sv = "object" == typeof self && self && self.Object === Object && self,
      ev = hv || Sv || Function("return this")();
    vv.exports = ev
  },
  5331: vv => {
    vv.exports = function(vv) {
      return this.__data__.set(vv, "__lodash_hash_undefined__"), this
    }
  },
  5339: vv => {
    vv.exports = function(vv) {
      return this.__data__.has(vv)
    }
  },
  5361: vv => {
    vv.exports = function(vv) {
      var zv = -1,
        Pv = Array(vv.size);
      return vv.forEach((function(vv) {
        Pv[++zv] = vv
      })), Pv
    }
  },
  5652: (vv, zv, Pv) => {
    var hv = Pv(5660),
      Sv = Pv(5672)(hv);
    vv.exports = Sv
  },
  5672: vv => {
    var zv = Date.now;
    vv.exports = function(vv) {
      var Pv = 0,
        hv = 0;
      return function() {
        var Sv = zv(),
          ev = 16 - (Sv - hv);
        if (hv = Sv, ev > 0) {
          if (++Pv >= 800) return arguments[0]
        } else Pv = 0;
        return vv.apply(void 0, arguments)
      }
    }
  },
  5280: (vv, zv, Pv) => {
    var hv = Pv(5040);
    vv.exports = function() {
      this.__data__ = new hv, this.size = 0
    }
  },
  5288: vv => {
    vv.exports = function(vv) {
      var zv = this.__data__,
        Pv = zv.delete(vv);
      return this.size = zv.size, Pv
    }
  },
  5297: vv => {
    vv.exports = function(vv) {
      return this.__data__.get(vv)
    }
  },
  5303: vv => {
    vv.exports = function(vv) {
      return this.__data__.has(vv)
    }
  },
  5309: (vv, zv, Pv) => {
    var hv = Pv(5040),
      Sv = Pv(5074),
      ev = Pv(4957);
    vv.exports = function(vv, zv) {
      var Pv = this.__data__;
      if (Pv instanceof hv) {
        var gv = Pv.__data__;
        if (!Sv || gv.length < 199) return gv.push([vv, zv]), this.size = ++Pv.size, this;
        Pv = this.__data__ = new ev(gv)
      }
      return Pv.set(vv, zv), this.size = Pv.size, this
    }
  },
  5741: vv => {
    vv.exports = function(vv, zv, Pv) {
      for (var hv = Pv - 1, Sv = vv.length; ++hv < Sv;)
        if (vv[hv] === zv) return hv;
      return -1
    }
  },
  5804: (vv, zv, Pv) => {
    var hv = Pv(5812),
      Sv = Pv(5802),
      ev = Pv(5821);
    vv.exports = function(vv) {
      return Sv(vv) ? ev(vv) : hv(vv)
    }
  },
  4942: (vv, zv, Pv) => {
    var hv = Pv(4950),
      Sv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ev = /\\(\\)?/g,
      gv = hv((function(vv) {
        var zv = [];
        return 46 === vv.charCodeAt(0) && zv.push(""), vv.replace(Sv, (function(vv, Pv, hv, Sv) {
          zv.push(hv ? Sv.replace(ev, "$1") : Pv || vv)
        })), zv
      }));
    vv.exports = gv
  },
  5133: (vv, zv, Pv) => {
    var hv = Pv(4870);
    vv.exports = function(vv) {
      if ("string" == typeof vv || hv(vv)) return vv;
      var zv = vv + "";
      return "0" == zv && 1 / vv == -1 / 0 ? "-0" : zv
    }
  },
  5013: vv => {
    var zv = Function.prototype.toString;
    vv.exports = function(vv) {
      if (null != vv) {
        try {
          return zv.call(vv)
        } catch (Pv) {}
        try {
          return vv + ""
        } catch (Pv) {}
      }
      return ""
    }
  },
  4866: vv => {
    var zv = /\s/;
    vv.exports = function(vv) {
      for (var Pv = vv.length; Pv-- && zv.test(vv.charAt(Pv)););
      return Pv
    }
  },
  5821: vv => {
    var zv = "\\ud800-\\udfff",
      Pv = "[" + zv + "]",
      hv = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
      Sv = "\\ud83c[\\udffb-\\udfff]",
      ev = "[^" + zv + "]",
      gv = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      pv = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      dv = "(?:" + hv + "|" + Sv + ")" + "?",
      Nv = "[\\ufe0e\\ufe0f]?",
      lv = Nv + dv + ("(?:\\u200d(?:" + [ev, gv, pv].join("|") + ")" + Nv + dv + ")*"),
      Tv = "(?:" + [ev + hv + "?", hv, gv, pv, Pv].join("|") + ")",
      Wv = RegExp(Sv + "(?=" + Sv + ")|" + Tv + lv, "g");
    vv.exports = function(vv) {
      return vv.match(Wv) || []
    }
  },
  5665: vv => {
    vv.exports = function(vv) {
      return function() {
        return vv
      }
    }
  },
  4817: (vv, zv, Pv) => {
    var hv = Pv(4826),
      Sv = Pv(4834),
      ev = Pv(4854),
      gv = Math.max,
      pv = Math.min;
    vv.exports = function(vv, zv, Pv) {
      var dv, Nv, lv, Tv, Wv, wv, av = 0,
        sv = !1,
        Cv = !1,
        iv = !0;
      if ("function" != typeof vv) throw new TypeError("Expected a function");

      function cv(zv) {
        var Pv = dv,
          hv = Nv;
        return dv = Nv = void 0, av = zv, Tv = vv.apply(hv, Pv)
      }

      function Gv(vv) {
        var Pv = vv - wv;
        return void 0 === wv || Pv >= zv || Pv < 0 || Cv && vv - av >= lv
      }

      function mv() {
        var vv = Sv();
        if (Gv(vv)) return jv(vv);
        Wv = setTimeout(mv, function(vv) {
          var Pv = zv - (vv - wv);
          return Cv ? pv(Pv, lv - (vv - av)) : Pv
        }(vv))
      }

      function jv(vv) {
        return Wv = void 0, iv && dv ? cv(vv) : (dv = Nv = void 0, Tv)
      }

      function fv() {
        var vv = Sv(),
          Pv = Gv(vv);
        if (dv = arguments, Nv = this, wv = vv, Pv) {
          if (void 0 === Wv) return function(vv) {
            return av = vv, Wv = setTimeout(mv, zv), sv ? cv(vv) : Tv
          }(wv);
          if (Cv) return clearTimeout(Wv), Wv = setTimeout(mv, zv), cv(wv)
        }
        return void 0 === Wv && (Wv = setTimeout(mv, zv)), Tv
      }
      return zv = ev(zv) || 0, hv(Pv) && (sv = !!Pv.leading, lv = (Cv = "maxWait" in Pv) ? gv(ev(Pv.maxWait) || 0, zv) : lv, iv = "trailing" in Pv ? !!Pv.trailing : iv), fv.cancel = function() {
        void 0 !== Wv && clearTimeout(Wv), av = 0, dv = wv = Nv = Wv = void 0
      }, fv.flush = function() {
        return void 0 === Wv ? Tv : jv(Sv())
      }, fv
    }
  },
  5055: vv => {
    vv.exports = function(vv, zv) {
      return vv === zv || vv !== vv && zv !== zv
    }
  },
  5970: (vv, zv, Pv) => {
    var hv = Pv(5975),
      Sv = Pv(5980),
      ev = Pv(5265),
      gv = Pv(4902),
      pv = Pv(5205);
    vv.exports = function(vv, zv, Pv) {
      var dv = gv(vv) ? hv : Sv;
      return Pv && pv(vv, zv, Pv) && (zv = void 0), dv(vv, ev(zv, 3))
    }
  },
  6048: (vv, zv, Pv) => {
    var hv = Pv(6054)(Pv(6063));
    vv.exports = hv
  },
  6063: (vv, zv, Pv) => {
    var hv = Pv(5733),
      Sv = Pv(5265),
      ev = Pv(6068),
      gv = Math.max;
    vv.exports = function(vv, zv, Pv) {
      var pv = null == vv ? 0 : vv.length;
      if (!pv) return -1;
      var dv = null == Pv ? 0 : ev(Pv);
      return dv < 0 && (dv = gv(pv + dv, 0)), hv(vv, Sv(zv, 3), dv)
    }
  },
  5909: (vv, zv, Pv) => {
    var hv = Pv(5234),
      Sv = Pv(5916);
    vv.exports = function(vv, zv) {
      return hv(Sv(vv, zv), 1)
    }
  },
  4924: (vv, zv, Pv) => {
    var hv = Pv(4928);
    vv.exports = function(vv, zv, Pv) {
      var Sv = null == vv ? void 0 : hv(vv, zv);
      return void 0 === Sv ? Pv : Sv
    }
  },
  5546: (vv, zv, Pv) => {
    var hv = Pv(5549),
      Sv = Pv(5558);
    vv.exports = function(vv, zv) {
      return null != vv && Sv(vv, zv, hv)
    }
  },
  5567: vv => {
    vv.exports = function(vv) {
      return vv
    }
  },
  5243: (vv, zv, Pv) => {
    var hv = Pv(5252),
      Sv = Pv(4888),
      ev = Object.prototype,
      gv = ev.hasOwnProperty,
      pv = ev.propertyIsEnumerable,
      dv = hv(function() {
        return arguments
      }()) ? hv : function(vv) {
        return Sv(vv) && gv.call(vv, "callee") && !pv.call(vv, "callee")
      };
    vv.exports = dv
  },
  4902: vv => {
    var zv = Array.isArray;
    vv.exports = zv
  },
  5209: (vv, zv, Pv) => {
    var hv = Pv(4995),
      Sv = Pv(5211);
    vv.exports = function(vv) {
      return null != vv && Sv(vv.length) && !hv(vv)
    }
  },
  6028: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4888);
    vv.exports = function(vv) {
      return !0 === vv || !1 === vv || Sv(vv) && "[object Boolean]" == hv(vv)
    }
  },
  5429: (vv, zv, Pv) => {
    vv = Pv.nmd(vv);
    var hv = Pv(4842),
      Sv = Pv(5432),
      ev = zv && !zv.nodeType && zv,
      gv = ev && vv && !vv.nodeType && vv,
      pv = gv && gv.exports === ev ? hv.Sa : void 0,
      dv = (pv ? pv.isBuffer : void 0) || Sv;
    vv.exports = dv
  },
  5924: (vv, zv, Pv) => {
    var hv = Pv(5315);
    vv.exports = function(vv, zv) {
      return hv(vv, zv)
    }
  },
  4995: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4826);
    vv.exports = function(vv) {
      if (!Sv(vv)) return !1;
      var zv = hv(vv);
      return "[object Function]" == zv || "[object GeneratorFunction]" == zv || "[object AsyncFunction]" == zv || "[object Proxy]" == zv
    }
  },
  5211: vv => {
    vv.exports = function(vv) {
      return "number" == typeof vv && vv > -1 && vv % 1 == 0 && vv <= 9007199254740991
    }
  },
  4909: (vv, zv, Pv) => {
    var hv = Pv(4915);
    vv.exports = function(vv) {
      return hv(vv) && vv != +vv
    }
  },
  5141: vv => {
    vv.exports = function(vv) {
      return null == vv
    }
  },
  4915: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4888);
    vv.exports = function(vv) {
      return "number" == typeof vv || Sv(vv) && "[object Number]" == hv(vv)
    }
  },
  4826: vv => {
    vv.exports = function(vv) {
      var zv = typeof vv;
      return null != vv && ("object" == zv || "function" == zv)
    }
  },
  4888: vv => {
    vv.exports = function(vv) {
      return null != vv && "object" == typeof vv
    }
  },
  6013: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(6020),
      ev = Pv(4888),
      gv = Function.prototype,
      pv = Object.prototype,
      dv = gv.toString,
      Nv = pv.hasOwnProperty,
      lv = dv.call(Object);
    vv.exports = function(vv) {
      if (!ev(vv) || "[object Object]" != hv(vv)) return !1;
      var zv = Sv(vv);
      if (null === zv) return !0;
      var Pv = Nv.call(zv, "constructor") && zv.constructor;
      return "function" == typeof Pv && Pv instanceof Pv && dv.call(Pv) == lv
    }
  },
  4895: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4902),
      ev = Pv(4888);
    vv.exports = function(vv) {
      return "string" == typeof vv || !Sv(vv) && ev(vv) && "[object String]" == hv(vv)
    }
  },
  4870: (vv, zv, Pv) => {
    var hv = Pv(4872),
      Sv = Pv(4888);
    vv.exports = function(vv) {
      return "symbol" == typeof vv || Sv(vv) && "[object Symbol]" == hv(vv)
    }
  },
  5441: (vv, zv, Pv) => {
    var hv = Pv(5444),
      Sv = Pv(5453),
      ev = Pv(5462),
      gv = ev && ev.isTypedArray,
      pv = gv ? Sv(gv) : hv;
    vv.exports = pv
  },
  5409: (vv, zv, Pv) => {
    var hv = Pv(5416),
      Sv = Pv(5470),
      ev = Pv(5209);
    vv.exports = function(vv) {
      return ev(vv) ? hv(vv) : Sv(vv)
    }
  },
  6009: vv => {
    vv.exports = function(vv) {
      var zv = null == vv ? 0 : vv.length;
      return zv ? vv[zv - 1] : void 0
    }
  },
  5916: (vv, zv, Pv) => {
    var hv = Pv(5128),
      Sv = Pv(5265),
      ev = Pv(5593),
      gv = Pv(4902);
    vv.exports = function(vv, zv) {
      return (gv(vv) ? hv : ev)(vv, Sv(zv, 3))
    }
  },
  5960: (vv, zv, Pv) => {
    var hv = Pv(5967),
      Sv = Pv(5604),
      ev = Pv(5265);
    vv.exports = function(vv, zv) {
      var Pv = {};
      return zv = ev(zv, 3), Sv(vv, (function(vv, Sv, ev) {
        hv(Pv, Sv, zv(vv, Sv, ev))
      })), Pv
    }
  },
  5878: (vv, zv, Pv) => {
    var hv = Pv(5885),
      Sv = Pv(5887),
      ev = Pv(5567);
    vv.exports = function(vv) {
      return vv && vv.length ? hv(vv, ev, Sv) : void 0
    }
  },
  4952: (vv, zv, Pv) => {
    var hv = Pv(4957);

    function Sv(vv, zv) {
      if ("function" != typeof vv || null != zv && "function" != typeof zv) throw new TypeError("Expected a function");
      var Pv = function() {
        var hv = arguments,
          Sv = zv ? zv.apply(this, hv) : hv[0],
          ev = Pv.cache;
        if (ev.has(Sv)) return ev.get(Sv);
        var gv = vv.apply(this, hv);
        return Pv.cache = ev.set(Sv, gv) || ev, gv
      };
      return Pv.cache = new(Sv.Cache || hv), Pv
    }
    Sv.Cache = hv, vv.exports = Sv
  },
  5895: (vv, zv, Pv) => {
    var hv = Pv(5885),
      Sv = Pv(5901),
      ev = Pv(5567);
    vv.exports = function(vv) {
      return vv && vv.length ? hv(vv, ev, Sv) : void 0
    }
  },
  5762: vv => {
    vv.exports = function() {}
  },
  4834: (vv, zv, Pv) => {
    var hv = Pv(4842);
    vv.exports = function() {
      return hv.Date.now()
    }
  },
  5575: (vv, zv, Pv) => {
    var hv = Pv(5579),
      Sv = Pv(5586),
      ev = Pv(4939),
      gv = Pv(5133);
    vv.exports = function(vv) {
      return ev(vv) ? hv(gv(vv)) : Sv(vv)
    }
  },
  5190: (vv, zv, Pv) => {
    var hv = Pv(5198)();
    vv.exports = hv
  },
  6035: (vv, zv, Pv) => {
    var hv = Pv(5343),
      Sv = Pv(5265),
      ev = Pv(6038),
      gv = Pv(4902),
      pv = Pv(5205);
    vv.exports = function(vv, zv, Pv) {
      var dv = gv(vv) ? hv : ev;
      return Pv && pv(vv, zv, Pv) && (zv = void 0), dv(vv, Sv(zv, 3))
    }
  },
  5227: (vv, zv, Pv) => {
    var hv = Pv(5234),
      Sv = Pv(5257),
      ev = Pv(5635),
      gv = Pv(5205),
      pv = ev((function(vv, zv) {
        if (null == vv) return [];
        var Pv = zv.length;
        return Pv > 1 && gv(vv, zv[0], zv[1]) ? zv = [] : Pv > 2 && gv(zv[0], zv[1], zv[2]) && (zv = [zv[0]]), Sv(vv, hv(zv, 1), [])
      }));
    vv.exports = pv
  },
  5403: vv => {
    vv.exports = function() {
      return []
    }
  },
  5432: vv => {
    vv.exports = function() {
      return !1
    }
  },
  4810: (vv, zv, Pv) => {
    var hv = Pv(4817),
      Sv = Pv(4826);
    vv.exports = function(vv, zv, Pv) {
      var ev = !0,
        gv = !0;
      if ("function" != typeof vv) throw new TypeError("Expected a function");
      return Sv(Pv) && (ev = "leading" in Pv ? !!Pv.leading : ev, gv = "trailing" in Pv ? !!Pv.trailing : gv), hv(vv, zv, {
        leading: ev,
        maxWait: zv,
        trailing: gv
      })
    }
  },
  5224: (vv, zv, Pv) => {
    var hv = Pv(4854),
      Sv = 1 / 0;
    vv.exports = function(vv) {
      return vv ? (vv = hv(vv)) === Sv || vv === -1 / 0 ? 17976931348623157e292 * (vv < 0 ? -1 : 1) : vv === vv ? vv : 0 : 0 === vv ? vv : 0
    }
  },
  6068: (vv, zv, Pv) => {
    var hv = Pv(5224);
    vv.exports = function(vv) {
      var zv = hv(vv),
        Pv = zv % 1;
      return zv === zv ? Pv ? zv - Pv : zv : 0
    }
  },
  4854: (vv, zv, Pv) => {
    var hv = Pv(4863),
      Sv = Pv(4826),
      ev = Pv(4870),
      gv = /^[-+]0x[0-9a-f]+$/i,
      pv = /^0b[01]+$/i,
      dv = /^0o[0-7]+$/i,
      Nv = parseInt;
    vv.exports = function(vv) {
      if ("number" == typeof vv) return vv;
      if (ev(vv)) return NaN;
      if (Sv(vv)) {
        var zv = "function" == typeof vv.valueOf ? vv.valueOf() : vv;
        vv = Sv(zv) ? zv + "" : zv
      }
      if ("string" != typeof vv) return 0 === vv ? vv : +vv;
      vv = hv(vv);
      var Pv = pv.test(vv);
      return Pv || dv.test(vv) ? Nv(vv.slice(2), Pv ? 2 : 8) : gv.test(vv) ? NaN : +vv
    }
  },
  5113: (vv, zv, Pv) => {
    var hv = Pv(5121);
    vv.exports = function(vv) {
      return null == vv ? "" : hv(vv)
    }
  },
  5711: (vv, zv, Pv) => {
    var hv = Pv(5265),
      Sv = Pv(5717);
    vv.exports = function(vv, zv) {
      return vv && vv.length ? Sv(vv, hv(zv, 2)) : []
    }
  },
  5783: (vv, zv, Pv) => {
    var hv = Pv(5785)("toUpperCase");
    vv.exports = hv
  },
  5839: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Iz
    });
    var hv = Pv(52),
      Sv = Pv(4702),
      ev = Pv.n(Sv);
    const {
      getOwnPropertyNames: gv,
      getOwnPropertySymbols: pv
    } = Object, {
      hasOwnProperty: dv
    } = Object.prototype;

    function Nv(vv, zv) {
      return function(Pv, hv, Sv) {
        return vv(Pv, hv, Sv) && zv(Pv, hv, Sv)
      }
    }

    function lv(vv) {
      return function(zv, Pv, hv) {
        if (!zv || !Pv || "object" !== typeof zv || "object" !== typeof Pv) return vv(zv, Pv, hv);
        const {
          cache: Sv
        } = hv, ev = Sv.get(zv), gv = Sv.get(Pv);
        if (ev && gv) return ev === Pv && gv === zv;
        Sv.set(zv, Pv), Sv.set(Pv, zv);
        const pv = vv(zv, Pv, hv);
        return Sv.delete(zv), Sv.delete(Pv), pv
      }
    }

    function Tv(vv) {
      return gv(vv).concat(pv(vv))
    }
    const Wv = Object.hasOwn || ((vv, zv) => dv.call(vv, zv));

    function wv(vv, zv) {
      return vv === zv || !vv && !zv && vv !== vv && zv !== zv
    }
    const {
      getOwnPropertyDescriptor: av,
      keys: sv
    } = Object;

    function Cv(vv, zv) {
      return vv.byteLength === zv.byteLength && Vv(new Uint8Array(vv), new Uint8Array(zv))
    }

    function iv(vv, zv, Pv) {
      let hv = vv.length;
      if (zv.length !== hv) return !1;
      for (; hv-- > 0;)
        if (!Pv.equals(vv[hv], zv[hv], hv, hv, vv, zv, Pv)) return !1;
      return !0
    }

    function cv(vv, zv) {
      return vv.byteLength === zv.byteLength && Vv(new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength), new Uint8Array(zv.buffer, zv.byteOffset, zv.byteLength))
    }

    function Gv(vv, zv) {
      return wv(vv.getTime(), zv.getTime())
    }

    function mv(vv, zv) {
      return vv.name === zv.name && vv.message === zv.message && vv.cause === zv.cause && vv.stack === zv.stack
    }

    function jv(vv, zv) {
      return vv === zv
    }

    function fv(vv, zv, Pv) {
      const hv = vv.size;
      if (hv !== zv.size) return !1;
      if (!hv) return !0;
      const Sv = new Array(hv),
        ev = vv.entries();
      let gv, pv, dv = 0;
      for (;
        (gv = ev.next()) && !gv.done;) {
        const hv = zv.entries();
        let ev = !1,
          Nv = 0;
        for (;
          (pv = hv.next()) && !pv.done;) {
          if (Sv[Nv]) {
            Nv++;
            continue
          }
          const hv = gv.value,
            lv = pv.value;
          if (Pv.equals(hv[0], lv[0], dv, Nv, vv, zv, Pv) && Pv.equals(hv[1], lv[1], hv[0], lv[0], vv, zv, Pv)) {
            ev = Sv[Nv] = !0;
            break
          }
          Nv++
        }
        if (!ev) return !1;
        dv++
      }
      return !0
    }
    const Fv = wv;

    function Yv(vv, zv, Pv) {
      const hv = sv(vv);
      let Sv = hv.length;
      if (sv(zv).length !== Sv) return !1;
      for (; Sv-- > 0;)
        if (!Rv(vv, zv, Pv, hv[Sv])) return !1;
      return !0
    }

    function nv(vv, zv, Pv) {
      const hv = Tv(vv);
      let Sv, ev, gv, pv = hv.length;
      if (Tv(zv).length !== pv) return !1;
      for (; pv-- > 0;) {
        if (Sv = hv[pv], !Rv(vv, zv, Pv, Sv)) return !1;
        if (ev = av(vv, Sv), gv = av(zv, Sv), (ev || gv) && (!ev || !gv || ev.configurable !== gv.configurable || ev.enumerable !== gv.enumerable || ev.writable !== gv.writable)) return !1
      }
      return !0
    }

    function Ov(vv, zv) {
      return wv(vv.valueOf(), zv.valueOf())
    }

    function Dv(vv, zv) {
      return vv.source === zv.source && vv.flags === zv.flags
    }

    function Kv(vv, zv, Pv) {
      const hv = vv.size;
      if (hv !== zv.size) return !1;
      if (!hv) return !0;
      const Sv = new Array(hv),
        ev = vv.values();
      let gv, pv;
      for (;
        (gv = ev.next()) && !gv.done;) {
        const hv = zv.values();
        let ev = !1,
          dv = 0;
        for (;
          (pv = hv.next()) && !pv.done;) {
          if (!Sv[dv] && Pv.equals(gv.value, pv.value, gv.value, pv.value, vv, zv, Pv)) {
            ev = Sv[dv] = !0;
            break
          }
          dv++
        }
        if (!ev) return !1
      }
      return !0
    }

    function Vv(vv, zv) {
      let Pv = vv.byteLength;
      if (zv.byteLength !== Pv || vv.byteOffset !== zv.byteOffset) return !1;
      for (; Pv-- > 0;)
        if (vv[Pv] !== zv[Pv]) return !1;
      return !0
    }

    function Uv(vv, zv) {
      return vv.hostname === zv.hostname && vv.pathname === zv.pathname && vv.protocol === zv.protocol && vv.port === zv.port && vv.hash === zv.hash && vv.username === zv.username && vv.password === zv.password
    }

    function Rv(vv, zv, Pv, hv) {
      return !("_owner" !== hv && "__o" !== hv && "__v" !== hv || !vv.$$typeof && !zv.$$typeof) || Wv(zv, hv) && Pv.equals(vv[hv], zv[hv], hv, hv, vv, zv, Pv)
    }
    const xv = {
        "[object Int8Array]": !0,
        "[object Uint8Array]": !0,
        "[object Uint8ClampedArray]": !0,
        "[object Int16Array]": !0,
        "[object Uint16Array]": !0,
        "[object Int32Array]": !0,
        "[object Uint32Array]": !0,
        "[object Float16Array]": !0,
        "[object Float32Array]": !0,
        "[object Float64Array]": !0,
        "[object BigInt64Array]": !0,
        "[object BigUint64Array]": !0
      },
      tv = Object.prototype.toString;

    function qv(vv) {
      let {
        areArrayBuffersEqual: zv,
        areArraysEqual: Pv,
        areDataViewsEqual: hv,
        areDatesEqual: Sv,
        areErrorsEqual: ev,
        areFunctionsEqual: gv,
        areMapsEqual: pv,
        areNumbersEqual: dv,
        areObjectsEqual: Nv,
        arePrimitiveWrappersEqual: lv,
        areRegExpsEqual: Tv,
        areSetsEqual: Wv,
        areTypedArraysEqual: wv,
        areUrlsEqual: av,
        unknownTagComparators: sv
      } = vv;
      return function(vv, Cv, iv) {
        if (vv === Cv) return !0;
        if (null == vv || null == Cv) return !1;
        const cv = typeof vv;
        if (cv !== typeof Cv) return !1;
        if ("object" !== cv) return "number" === cv ? dv(vv, Cv, iv) : "function" === cv && gv(vv, Cv, iv);
        const Gv = vv.constructor;
        if (Gv !== Cv.constructor) return !1;
        if (Gv === Object) return Nv(vv, Cv, iv);
        if (Array.isArray(vv)) return Pv(vv, Cv, iv);
        if (Gv === Date) return Sv(vv, Cv, iv);
        if (Gv === RegExp) return Tv(vv, Cv, iv);
        if (Gv === Map) return pv(vv, Cv, iv);
        if (Gv === Set) return Wv(vv, Cv, iv);
        const mv = tv.call(vv);
        if ("[object Date]" === mv) return Sv(vv, Cv, iv);
        if ("[object RegExp]" === mv) return Tv(vv, Cv, iv);
        if ("[object Map]" === mv) return pv(vv, Cv, iv);
        if ("[object Set]" === mv) return Wv(vv, Cv, iv);
        if ("[object Object]" === mv) return "function" !== typeof vv.then && "function" !== typeof Cv.then && Nv(vv, Cv, iv);
        if ("[object URL]" === mv) return av(vv, Cv, iv);
        if ("[object Error]" === mv) return ev(vv, Cv, iv);
        if ("[object Arguments]" === mv) return Nv(vv, Cv, iv);
        if (xv[mv]) return wv(vv, Cv, iv);
        if ("[object ArrayBuffer]" === mv) return zv(vv, Cv, iv);
        if ("[object DataView]" === mv) return hv(vv, Cv, iv);
        if ("[object Boolean]" === mv || "[object Number]" === mv || "[object String]" === mv) return lv(vv, Cv, iv);
        if (sv) {
          let zv = sv[mv];
          if (!zv) {
            const Pv = null != (jv = vv) ? jv[Symbol.toStringTag] : void 0;
            Pv && (zv = sv[Pv])
          }
          if (zv) return zv(vv, Cv, iv)
        }
        var jv;
        return !1
      }
    }
    const Iv = Qv();
    Qv({
      strict: !0
    }), Qv({
      circular: !0
    }), Qv({
      circular: !0,
      strict: !0
    }), Qv({
      createInternalComparator: () => wv
    }), Qv({
      strict: !0,
      createInternalComparator: () => wv
    }), Qv({
      circular: !0,
      createInternalComparator: () => wv
    }), Qv({
      circular: !0,
      createInternalComparator: () => wv,
      strict: !0
    });

    function Qv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        circular: zv = !1,
        createInternalComparator: Pv,
        createState: hv,
        strict: Sv = !1
      } = vv, ev = function(vv) {
        let {
          circular: zv,
          createCustomConfig: Pv,
          strict: hv
        } = vv, Sv = {
          areArrayBuffersEqual: Cv,
          areArraysEqual: hv ? nv : iv,
          areDataViewsEqual: cv,
          areDatesEqual: Gv,
          areErrorsEqual: mv,
          areFunctionsEqual: jv,
          areMapsEqual: hv ? Nv(fv, nv) : fv,
          areNumbersEqual: Fv,
          areObjectsEqual: hv ? nv : Yv,
          arePrimitiveWrappersEqual: Ov,
          areRegExpsEqual: Dv,
          areSetsEqual: hv ? Nv(Kv, nv) : Kv,
          areTypedArraysEqual: hv ? Nv(Vv, nv) : Vv,
          areUrlsEqual: Uv,
          unknownTagComparators: void 0
        };
        if (Pv && (Sv = Object.assign({}, Sv, Pv(Sv))), zv) {
          const vv = lv(Sv.areArraysEqual),
            zv = lv(Sv.areMapsEqual),
            Pv = lv(Sv.areObjectsEqual),
            hv = lv(Sv.areSetsEqual);
          Sv = Object.assign({}, Sv, {
            areArraysEqual: vv,
            areMapsEqual: zv,
            areObjectsEqual: Pv,
            areSetsEqual: hv
          })
        }
        return Sv
      }(vv), gv = qv(ev);
      var pv;
      return function(vv) {
        let {
          circular: zv,
          comparator: Pv,
          createState: hv,
          equals: Sv,
          strict: ev
        } = vv;
        if (hv) return function(vv, gv) {
          const {
            cache: pv = (zv ? new WeakMap : void 0),
            meta: dv
          } = hv();
          return Pv(vv, gv, {
            cache: pv,
            equals: Sv,
            meta: dv,
            strict: ev
          })
        };
        if (zv) return function(vv, zv) {
          return Pv(vv, zv, {
            cache: new WeakMap,
            equals: Sv,
            meta: void 0,
            strict: ev
          })
        };
        const gv = {
          cache: void 0,
          equals: Sv,
          meta: void 0,
          strict: ev
        };
        return function(vv, zv) {
          return Pv(vv, zv, gv)
        }
      }({
        circular: zv,
        comparator: gv,
        createState: hv,
        equals: Pv ? Pv(gv) : (pv = gv, function(vv, zv, Pv, hv, Sv, ev, gv) {
          return pv(vv, zv, gv)
        }),
        strict: Sv
      })
    }

    function Zv(vv) {
      var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = -1;
      requestAnimationFrame((function hv(Sv) {
        Pv < 0 && (Pv = Sv), Sv - Pv > zv ? (vv(Sv), Pv = -1) : function(vv) {
          "undefined" !== typeof requestAnimationFrame && requestAnimationFrame(vv)
        }(hv)
      }))
    }

    function Av(vv) {
      return Av = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Av(vv)
    }

    function Lv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Hv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Hv(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Hv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Mv() {
      var vv = function() {
          return null
        },
        zv = !1,
        Pv = function Pv(hv) {
          if (!zv) {
            if (Array.isArray(hv)) {
              if (!hv.length) return;
              var Sv = Lv(hv),
                ev = Sv[0],
                gv = Sv.slice(1);
              return "number" === typeof ev ? void Zv(Pv.bind(null, gv), ev) : (Pv(ev), void Zv(Pv.bind(null, gv)))
            }
            "object" === Av(hv) && vv(hv), "function" === typeof hv && hv()
          }
        };
      return {
        stop: function() {
          zv = !0
        },
        start: function(vv) {
          zv = !1, Pv(vv)
        },
        subscribe: function(zv) {
          return vv = zv,
            function() {
              vv = function() {
                return null
              }
            }
        }
      }
    }

    function yv(vv) {
      return yv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, yv(vv)
    }

    function Bv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Jv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Bv(Object(Pv), !0).forEach((function(zv) {
          Ev(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Bv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Ev(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" !== yv(vv) || null === vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" !== yv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" === yv(zv) ? zv : String(zv)
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var ov = function(vv) {
        return vv
      },
      bv = function(vv, zv) {
        return Object.keys(zv).reduce((function(Pv, hv) {
          return Jv(Jv({}, Pv), {}, Ev({}, hv, vv(hv, zv[hv])))
        }), {})
      },
      rv = function(vv, zv, Pv) {
        return vv.map((function(vv) {
          return "".concat((hv = vv, hv.replace(/([A-Z])/g, (function(vv) {
            return "-".concat(vv.toLowerCase())
          }))), " ").concat(zv, "ms ").concat(Pv);
          var hv
        })).join(",")
      };

    function kv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || uv(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Xv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return vz(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || uv(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function uv(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return vz(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? vz(vv, zv) : void 0
      }
    }

    function vz(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var zz = 1e-4,
      Pz = function(vv, zv) {
        return [0, 3 * vv, 3 * zv - 6 * vv, 3 * vv - 3 * zv + 1]
      },
      hz = function(vv, zv) {
        return vv.map((function(vv, Pv) {
          return vv * Math.pow(zv, Pv)
        })).reduce((function(vv, zv) {
          return vv + zv
        }))
      },
      Sz = function(vv, zv) {
        return function(Pv) {
          var hv = Pz(vv, zv);
          return hz(hv, Pv)
        }
      },
      ez = function() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        var hv = zv[0],
          Sv = zv[1],
          ev = zv[2],
          gv = zv[3];
        if (1 === zv.length) switch (zv[0]) {
          case "linear":
            hv = 0, Sv = 0, ev = 1, gv = 1;
            break;
          case "ease":
            hv = .25, Sv = .1, ev = .25, gv = 1;
            break;
          case "ease-in":
            hv = .42, Sv = 0, ev = 1, gv = 1;
            break;
          case "ease-out":
            hv = .42, Sv = 0, ev = .58, gv = 1;
            break;
          case "ease-in-out":
            hv = 0, Sv = 0, ev = .58, gv = 1;
            break;
          default:
            var pv = zv[0].split("(");
            if ("cubic-bezier" === pv[0] && 4 === pv[1].split(")")[0].split(",").length) {
              var dv = kv(pv[1].split(")")[0].split(",").map((function(vv) {
                return parseFloat(vv)
              })), 4);
              hv = dv[0], Sv = dv[1], ev = dv[2], gv = dv[3]
            }
        } [hv, ev, Sv, gv].every((function(vv) {
          return "number" === typeof vv && vv >= 0 && vv <= 1
        }));
        var Nv, lv, Tv = Sz(hv, ev),
          Wv = Sz(Sv, gv),
          wv = (Nv = hv, lv = ev, function(vv) {
            var zv = Pz(Nv, lv),
              Pv = [].concat(Xv(zv.map((function(vv, zv) {
                return vv * zv
              })).slice(1)), [0]);
            return hz(Pv, vv)
          }),
          av = function(vv) {
            for (var zv, Pv = vv > 1 ? 1 : vv, hv = Pv, Sv = 0; Sv < 8; ++Sv) {
              var ev = Tv(hv) - Pv,
                gv = wv(hv);
              if (Math.abs(ev - Pv) < zz || gv < zz) return Wv(hv);
              hv = (zv = hv - ev / gv) > 1 ? 1 : zv < 0 ? 0 : zv
            }
            return Wv(hv)
          };
        return av.isStepper = !1, av
      },
      gz = function() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        var hv = zv[0];
        if ("string" === typeof hv) switch (hv) {
          case "ease":
          case "ease-in-out":
          case "ease-out":
          case "ease-in":
          case "linear":
            return ez(hv);
          case "spring":
            return function() {
              var vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                zv = vv.stiff,
                Pv = void 0 === zv ? 100 : zv,
                hv = vv.damping,
                Sv = void 0 === hv ? 8 : hv,
                ev = vv.dt,
                gv = void 0 === ev ? 17 : ev,
                pv = function(vv, zv, hv) {
                  var ev = hv + (-(vv - zv) * Pv - hv * Sv) * gv / 1e3,
                    pv = hv * gv / 1e3 + vv;
                  return Math.abs(pv - zv) < zz && Math.abs(ev) < zz ? [zv, 0] : [pv, ev]
                };
              return pv.isStepper = !0, pv.dt = gv, pv
            }();
          default:
            if ("cubic-bezier" === hv.split("(")[0]) return ez(hv)
        }
        return "function" === typeof hv ? hv : null
      };

    function pz(vv) {
      return pz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, pz(vv)
    }

    function dz(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return az(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || wz(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Nz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function lz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Nz(Object(Pv), !0).forEach((function(zv) {
          Tz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Nz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Tz(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" !== pz(vv) || null === vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" !== pz(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" === pz(zv) ? zv : String(zv)
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Wz(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || wz(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wz(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return az(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? az(vv, zv) : void 0
      }
    }

    function az(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var sz = function(vv, zv, Pv) {
        return vv + (zv - vv) * Pv
      },
      Cz = function(vv) {
        return vv.from !== vv.to
      },
      iz = function vv(zv, Pv, hv) {
        var Sv = bv((function(vv, Pv) {
          if (Cz(Pv)) {
            var hv = Wz(zv(Pv.from, Pv.to, Pv.pC), 2),
              Sv = hv[0],
              ev = hv[1];
            return lz(lz({}, Pv), {}, {
              from: Sv,
              pC: ev
            })
          }
          return Pv
        }), Pv);
        return hv < 1 ? bv((function(vv, zv) {
          return Cz(zv) ? lz(lz({}, zv), {}, {
            pC: sz(zv.pC, Sv[vv].pC, hv),
            from: sz(zv.from, Sv[vv].from, hv)
          }) : zv
        }), Pv) : vv(zv, Sv, hv - 1)
      };
    const cz = function(vv, zv, Pv, hv, Sv) {
      var ev, gv, pv, dv, Nv = (ev = vv, gv = zv, [Object.keys(ev), Object.keys(gv)].reduce((function(vv, zv) {
          return vv.filter((function(vv) {
            return zv.includes(vv)
          }))
        }))),
        lv = Nv.reduce((function(Pv, hv) {
          return lz(lz({}, Pv), {}, Tz({}, hv, [vv[hv], zv[hv]]))
        }), {}),
        Tv = Nv.reduce((function(Pv, hv) {
          return lz(lz({}, Pv), {}, Tz({}, hv, {
            from: vv[hv],
            pC: 0,
            to: zv[hv]
          }))
        }), {}),
        Wv = -1,
        wv = function() {
          return null
        };
      return wv = Pv.isStepper ? function(hv) {
          pv || (pv = hv);
          var ev = (hv - pv) / Pv.dt;
          Tv = iz(Pv, Tv, ev), Sv(lz(lz(lz({}, vv), zv), bv((function(vv, zv) {
            return zv.from
          }), Tv))), pv = hv, Object.values(Tv).filter(Cz).length && (Wv = requestAnimationFrame(wv))
        } : function(ev) {
          dv || (dv = ev);
          var gv = (ev - dv) / hv,
            pv = bv((function(vv, zv) {
              return sz.apply(void 0, dz(zv).concat([Pv(gv)]))
            }), lv);
          if (Sv(lz(lz(lz({}, vv), zv), pv)), gv < 1) Wv = requestAnimationFrame(wv);
          else {
            var Nv = bv((function(vv, zv) {
              return sz.apply(void 0, dz(zv).concat([Pv(1)]))
            }), lv);
            Sv(lz(lz(lz({}, vv), zv), Nv))
          }
        },
        function() {
          return requestAnimationFrame(wv),
            function() {
              cancelAnimationFrame(Wv)
            }
        }
    };

    function Gz(vv) {
      return Gz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Gz(vv)
    }
    var mz = ["children", "dw", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];

    function jz(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv, hv, Sv = {},
          ev = Object.keys(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || (Sv[Pv] = vv[Pv]);
        return Sv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function fz(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return Fz(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Fz(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Fz(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Fz(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Yz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function nz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Yz(Object(Pv), !0).forEach((function(zv) {
          Oz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Yz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Oz(vv, zv, Pv) {
      return (zv = Kz(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Dz(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Kz(hv.key), hv)
      }
    }

    function Kz(vv) {
      var zv = function(vv, zv) {
        if ("object" !== Gz(vv) || null === vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" !== Gz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" === Gz(zv) ? zv : String(zv)
    }

    function Vz(vv, zv) {
      return Vz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Vz(vv, zv)
    }

    function Uz(vv) {
      var zv = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (vv) {
          return !1
        }
      }();
      return function() {
        var Pv, hv = tz(vv);
        if (zv) {
          var Sv = tz(this).constructor;
          Pv = Reflect.construct(hv, arguments, Sv)
        } else Pv = hv.apply(this, arguments);
        return Rz(this, Pv)
      }
    }

    function Rz(vv, zv) {
      if (zv && ("object" === Gz(zv) || "function" === typeof zv)) return zv;
      if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
      return xz(vv)
    }

    function xz(vv) {
      if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return vv
    }

    function tz(vv) {
      return tz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, tz(vv)
    }
    var qz = function(vv) {
      ! function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Vz(vv, zv)
      }(gv, vv);
      var zv, Pv, Sv, ev = Uz(gv);

      function gv(vv, zv) {
        var Pv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, gv);
        var hv = (Pv = ev.call(this, vv, zv)).props,
          Sv = hv.isActive,
          pv = hv.attributeName,
          dv = hv.from,
          Nv = hv.to,
          lv = hv.steps,
          Tv = hv.children,
          Wv = hv.duration;
        if (Pv.handleStyleChange = Pv.handleStyleChange.bind(xz(Pv)), Pv.changeStyle = Pv.changeStyle.bind(xz(Pv)), !Sv || Wv <= 0) return Pv.state = {
          style: {}
        }, "function" === typeof Tv && (Pv.state = {
          style: Nv
        }), Rz(Pv);
        if (lv && lv.length) Pv.state = {
          style: lv[0].style
        };
        else if (dv) {
          if ("function" === typeof Tv) return Pv.state = {
            style: dv
          }, Rz(Pv);
          Pv.state = {
            style: pv ? Oz({}, pv, dv) : dv
          }
        } else Pv.state = {
          style: {}
        };
        return Pv
      }
      return zv = gv, (Pv = [{
        key: "componentDidMount",
        value: function() {
          var vv = this.props,
            zv = vv.isActive,
            Pv = vv.canBegin;
          this.mounted = !0, zv && Pv && this.runAnimation(this.props)
        }
      }, {
        key: "componentDidUpdate",
        value: function(vv) {
          var zv = this.props,
            Pv = zv.isActive,
            hv = zv.canBegin,
            Sv = zv.attributeName,
            ev = zv.shouldReAnimate,
            gv = zv.to,
            pv = zv.from,
            dv = this.state.style;
          if (hv)
            if (Pv) {
              if (!(Iv(vv.to, gv) && vv.canBegin && vv.isActive)) {
                var Nv = !vv.canBegin || !vv.isActive;
                this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                var lv = Nv || ev ? pv : vv.to;
                if (this.state && dv) {
                  var Tv = {
                    style: Sv ? Oz({}, Sv, lv) : lv
                  };
                  (Sv && dv[Sv] !== lv || !Sv && dv !== lv) && this.setState(Tv)
                }
                this.runAnimation(nz(nz({}, this.props), {}, {
                  from: lv,
                  dw: 0
                }))
              }
            } else {
              var Wv = {
                style: Sv ? Oz({}, Sv, gv) : gv
              };
              this.state && dv && (Sv && dv[Sv] !== gv || !Sv && dv !== gv) && this.setState(Wv)
            }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this.mounted = !1;
          var vv = this.props.onAnimationEnd;
          this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), vv && vv()
        }
      }, {
        key: "handleStyleChange",
        value: function(vv) {
          this.changeStyle(vv)
        }
      }, {
        key: "changeStyle",
        value: function(vv) {
          this.mounted && this.setState({
            style: vv
          })
        }
      }, {
        key: "runJSAnimation",
        value: function(vv) {
          var zv = this,
            Pv = vv.from,
            hv = vv.to,
            Sv = vv.duration,
            ev = vv.easing,
            gv = vv.dw,
            pv = vv.onAnimationEnd,
            dv = vv.onAnimationStart,
            Nv = cz(Pv, hv, gz(ev), Sv, this.changeStyle);
          this.manager.start([dv, gv, function() {
            zv.stopJSAnimation = Nv()
          }, Sv, pv])
        }
      }, {
        key: "runStepAnimation",
        value: function(vv) {
          var zv = this,
            Pv = vv.steps,
            hv = vv.dw,
            Sv = vv.onAnimationStart,
            ev = Pv[0],
            gv = ev.style,
            pv = ev.duration,
            dv = void 0 === pv ? 0 : pv;
          return this.manager.start([Sv].concat(fz(Pv.reduce((function(vv, hv, Sv) {
            if (0 === Sv) return vv;
            var ev = hv.duration,
              gv = hv.easing,
              pv = void 0 === gv ? "ease" : gv,
              dv = hv.style,
              Nv = hv.properties,
              lv = hv.onAnimationEnd,
              Tv = Sv > 0 ? Pv[Sv - 1] : hv,
              Wv = Nv || Object.keys(dv);
            if ("function" === typeof pv || "spring" === pv) return [].concat(fz(vv), [zv.runJSAnimation.bind(zv, {
              from: Tv.style,
              to: dv,
              duration: ev,
              easing: pv
            }), ev]);
            var wv = rv(Wv, ev, pv),
              av = nz(nz(nz({}, Tv.style), dv), {}, {
                transition: wv
              });
            return [].concat(fz(vv), [av, ev, lv]).filter(ov)
          }), [gv, Math.max(dv, hv)])), [vv.onAnimationEnd]))
        }
      }, {
        key: "runAnimation",
        value: function(vv) {
          this.manager || (this.manager = Mv());
          var zv = vv.dw,
            Pv = vv.duration,
            hv = vv.attributeName,
            Sv = vv.to,
            ev = vv.easing,
            gv = vv.onAnimationStart,
            pv = vv.onAnimationEnd,
            dv = vv.steps,
            Nv = vv.children,
            lv = this.manager;
          if (this.unSubscribe = lv.subscribe(this.handleStyleChange), "function" !== typeof ev && "function" !== typeof Nv && "spring" !== ev)
            if (dv.length > 1) this.runStepAnimation(vv);
            else {
              var Tv = hv ? Oz({}, hv, Sv) : Sv,
                Wv = rv(Object.keys(Tv), Pv, ev);
              lv.start([gv, zv, nz(nz({}, Tv), {}, {
                transition: Wv
              }), Pv, pv])
            }
          else this.runJSAnimation(vv)
        }
      }, {
        key: "render",
        value: function() {
          var vv = this.props,
            zv = vv.children,
            Pv = (vv.dw, vv.duration),
            Sv = (vv.attributeName, vv.easing, vv.isActive),
            ev = (vv.steps, vv.from, vv.to, vv.canBegin, vv.onAnimationEnd, vv.shouldReAnimate, vv.onAnimationReStart, jz(vv, mz)),
            gv = hv.Children.count(zv),
            pv = this.state.style;
          if ("function" === typeof zv) return zv(pv);
          if (!Sv || 0 === gv || Pv <= 0) return zv;
          var dv = function(vv) {
            var zv = vv.props,
              Pv = zv.style,
              Sv = void 0 === Pv ? {} : Pv,
              gv = zv.className;
            return (0, hv.cloneElement)(vv, nz(nz({}, ev), {}, {
              style: nz(nz({}, Sv), pv),
              className: gv
            }))
          };
          return 1 === gv ? dv(hv.Children.only(zv)) : hv.createElement("div", null, hv.Children.map(zv, (function(vv) {
            return dv(vv)
          })))
        }
      }]) && Dz(zv.prototype, Pv), Sv && Dz(zv, Sv), Object.defineProperty(zv, "prototype", {
        writable: !1
      }), gv
    }(hv.PureComponent);
    qz.displayName = "Animate", qz.defaultProps = {
      dw: 0,
      duration: 1e3,
      from: "",
      to: "",
      attributeName: "",
      easing: "ease",
      isActive: !0,
      canBegin: !0,
      steps: [],
      onAnimationEnd: function() {},
      onAnimationStart: function() {}
    }, qz.propTypes = {
      from: ev().oneOfType([ev().object, ev().string]),
      to: ev().oneOfType([ev().object, ev().string]),
      attributeName: ev().string,
      duration: ev().number,
      dw: ev().number,
      easing: ev().oneOfType([ev().string, ev().func]),
      steps: ev().arrayOf(ev().shape({
        duration: ev().number.isRequired,
        style: ev().object.isRequired,
        easing: ev().oneOfType([ev().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), ev().func]),
        properties: ev().arrayOf("string"),
        onAnimationEnd: ev().func
      })),
      children: ev().oneOfType([ev().node, ev().func]),
      isActive: ev().bool,
      canBegin: ev().bool,
      onAnimationEnd: ev().func,
      shouldReAnimate: ev().bool,
      onAnimationStart: ev().func,
      onAnimationReStart: ev().func
    };
    const Iz = qz
  },
  6076: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Lv
    });
    var hv, Sv = Pv(52),
      ev = Pv(4802),
      gv = Pv(5839),
      pv = Pv(4995),
      dv = Pv.n(pv),
      Nv = Pv(5878),
      lv = Pv.n(Nv),
      Tv = Pv(5141),
      Wv = Pv.n(Tv),
      wv = Pv(4909),
      av = Pv.n(wv),
      sv = Pv(5924),
      Cv = Pv.n(sv),
      iv = Pv(6074),
      cv = Pv(5830),
      Gv = Pv(5691),
      mv = Pv(6004),
      jv = Pv(5705),
      fv = Pv(4891),
      Fv = Pv(5857),
      Yv = Pv(5149),
      nv = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
      Ov = ["key"];

    function Dv(vv) {
      return Dv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Dv(vv)
    }

    function Kv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function Vv() {
      return Vv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Vv.apply(this, arguments)
    }

    function Uv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Rv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Uv(Object(Pv), !0).forEach((function(zv) {
          Zv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Uv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function xv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Av(hv.key), hv)
      }
    }

    function tv(vv, zv, Pv) {
      return zv = Iv(zv),
        function(vv, zv) {
          if (zv && ("object" === Dv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, qv() ? Reflect.construct(zv, Pv || [], Iv(vv).constructor) : zv.apply(vv, Pv))
    }

    function qv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (qv = function() {
        return !!vv
      })()
    }

    function Iv(vv) {
      return Iv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Iv(vv)
    }

    function Qv(vv, zv) {
      return Qv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Qv(vv, zv)
    }

    function Zv(vv, zv, Pv) {
      return (zv = Av(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Av(vv) {
      var zv = function(vv, zv) {
        if ("object" != Dv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Dv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Dv(zv) ? zv : zv + ""
    }
    var Lv = function(vv) {
      function zv() {
        var vv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv);
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        return Zv(vv = tv(this, zv, [].concat(hv)), "state", {
          isAnimationFinished: !0
        }), Zv(vv, "id", (0, fv.z)("recharts-area-")), Zv(vv, "handleAnimationEnd", (function() {
          var zv = vv.props.onAnimationEnd;
          vv.setState({
            isAnimationFinished: !0
          }), dv()(zv) && zv()
        })), Zv(vv, "handleAnimationStart", (function() {
          var zv = vv.props.onAnimationStart;
          vv.setState({
            isAnimationFinished: !1
          }), dv()(zv) && zv()
        })), vv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Qv(vv, zv)
      }(zv, vv), Pv = zv, hv = [{
        key: "renderDots",
        value: function(vv, Pv, hv) {
          var ev = this.props.isAnimationActive,
            gv = this.state.isAnimationFinished;
          if (ev && !gv) return null;
          var pv = this.props,
            dv = pv.dot,
            Nv = pv.points,
            lv = pv.dataKey,
            Tv = (0, Yv.e)(this.props, !1),
            Wv = (0, Yv.e)(dv, !0),
            wv = Nv.map((function(vv, Pv) {
              var hv = Rv(Rv(Rv({
                key: "dot-".concat(Pv),
                r: 3
              }, Tv), Wv), {}, {
                index: Pv,
                cx: vv.x,
                cy: vv.y,
                dataKey: lv,
                value: vv.value,
                payload: vv.payload,
                points: Nv
              });
              return zv.renderDotItem(dv, hv)
            })),
            av = {
              clipPath: vv ? "url(#clipPath-".concat(Pv ? "" : "dots-").concat(hv, ")") : null
            };
          return Sv.createElement(Gv.c, Vv({
            className: "recharts-area-dots"
          }, av), wv)
        }
      }, {
        key: "renderHorizontalRect",
        value: function(vv) {
          var zv = this.props,
            Pv = zv.baseLine,
            hv = zv.points,
            ev = zv.strokeWidth,
            gv = hv[0].x,
            pv = hv[hv.length - 1].x,
            dv = vv * Math.abs(gv - pv),
            Nv = lv()(hv.map((function(vv) {
              return vv.y || 0
            })));
          return (0, fv.t)(Pv) && "number" === typeof Pv ? Nv = Math.max(Pv, Nv) : Pv && Array.isArray(Pv) && Pv.length && (Nv = Math.max(lv()(Pv.map((function(vv) {
            return vv.y || 0
          }))), Nv)), (0, fv.t)(Nv) ? Sv.createElement("rect", {
            x: gv < pv ? gv : gv - dv,
            y: 0,
            width: dv,
            height: Math.floor(Nv + (ev ? parseInt("".concat(ev), 10) : 1))
          }) : null
        }
      }, {
        key: "renderVerticalRect",
        value: function(vv) {
          var zv = this.props,
            Pv = zv.baseLine,
            hv = zv.points,
            ev = zv.strokeWidth,
            gv = hv[0].y,
            pv = hv[hv.length - 1].y,
            dv = vv * Math.abs(gv - pv),
            Nv = lv()(hv.map((function(vv) {
              return vv.x || 0
            })));
          return (0, fv.t)(Pv) && "number" === typeof Pv ? Nv = Math.max(Pv, Nv) : Pv && Array.isArray(Pv) && Pv.length && (Nv = Math.max(lv()(Pv.map((function(vv) {
            return vv.x || 0
          }))), Nv)), (0, fv.t)(Nv) ? Sv.createElement("rect", {
            x: 0,
            y: gv < pv ? gv : gv - dv,
            width: Nv + (ev ? parseInt("".concat(ev), 10) : 1),
            height: Math.floor(dv)
          }) : null
        }
      }, {
        key: "renderClipRect",
        value: function(vv) {
          return "vertical" === this.props.layout ? this.renderVerticalRect(vv) : this.renderHorizontalRect(vv)
        }
      }, {
        key: "renderAreaStatically",
        value: function(vv, zv, Pv, hv) {
          var ev = this.props,
            gv = ev.layout,
            pv = ev.type,
            dv = ev.stroke,
            Nv = ev.connectNulls,
            lv = ev.isRange,
            Tv = (ev.ref, Kv(ev, nv));
          return Sv.createElement(Gv.c, {
            clipPath: Pv ? "url(#clipPath-".concat(hv, ")") : null
          }, Sv.createElement(iv.d, Vv({}, (0, Yv.e)(Tv, !0), {
            points: vv,
            connectNulls: Nv,
            type: pv,
            baseLine: zv,
            layout: gv,
            stroke: "none",
            className: "recharts-area-area"
          })), "none" !== dv && Sv.createElement(iv.d, Vv({}, (0, Yv.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: gv,
            type: pv,
            connectNulls: Nv,
            fill: "none",
            points: vv
          })), "none" !== dv && lv && Sv.createElement(iv.d, Vv({}, (0, Yv.e)(this.props, !1), {
            className: "recharts-area-curve",
            layout: gv,
            type: pv,
            connectNulls: Nv,
            fill: "none",
            points: zv
          })))
        }
      }, {
        key: "renderAreaWithAnimation",
        value: function(vv, zv) {
          var Pv = this,
            hv = this.props,
            ev = hv.points,
            pv = hv.baseLine,
            dv = hv.isAnimationActive,
            Nv = hv.animationBegin,
            lv = hv.animationDuration,
            Tv = hv.animationEasing,
            wv = hv.animationId,
            sv = this.state,
            Cv = sv.prevPoints,
            iv = sv.prevBaseLine;
          return Sv.createElement(gv.c, {
            dw: Nv,
            duration: lv,
            isActive: dv,
            easing: Tv,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "area-".concat(wv),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(hv) {
            var gv = hv.t;
            if (Cv) {
              var dv, Nv = Cv.length / ev.length,
                lv = ev.map((function(vv, zv) {
                  var Pv = Math.floor(zv * Nv);
                  if (Cv[Pv]) {
                    var hv = Cv[Pv],
                      Sv = (0, fv.l)(hv.x, vv.x),
                      ev = (0, fv.l)(hv.y, vv.y);
                    return Rv(Rv({}, vv), {}, {
                      x: Sv(gv),
                      y: ev(gv)
                    })
                  }
                  return vv
                }));
              return dv = (0, fv.t)(pv) && "number" === typeof pv ? (0, fv.l)(iv, pv)(gv) : Wv()(pv) || av()(pv) ? (0, fv.l)(iv, 0)(gv) : pv.map((function(vv, zv) {
                var Pv = Math.floor(zv * Nv);
                if (iv[Pv]) {
                  var hv = iv[Pv],
                    Sv = (0, fv.l)(hv.x, vv.x),
                    ev = (0, fv.l)(hv.y, vv.y);
                  return Rv(Rv({}, vv), {}, {
                    x: Sv(gv),
                    y: ev(gv)
                  })
                }
                return vv
              })), Pv.renderAreaStatically(lv, dv, vv, zv)
            }
            return Sv.createElement(Gv.c, null, Sv.createElement("defs", null, Sv.createElement("clipPath", {
              id: "animationClipPath-".concat(zv)
            }, Pv.renderClipRect(gv))), Sv.createElement(Gv.c, {
              clipPath: "url(#animationClipPath-".concat(zv, ")")
            }, Pv.renderAreaStatically(ev, pv, vv, zv)))
          }))
        }
      }, {
        key: "renderArea",
        value: function(vv, zv) {
          var Pv = this.props,
            hv = Pv.points,
            Sv = Pv.baseLine,
            ev = Pv.isAnimationActive,
            gv = this.state,
            pv = gv.prevPoints,
            dv = gv.prevBaseLine,
            Nv = gv.totalLength;
          return ev && hv && hv.length && (!pv && Nv > 0 || !Cv()(pv, hv) || !Cv()(dv, Sv)) ? this.renderAreaWithAnimation(vv, zv) : this.renderAreaStatically(hv, Sv, vv, zv)
        }
      }, {
        key: "render",
        value: function() {
          var vv, zv = this.props,
            Pv = zv.hide,
            hv = zv.dot,
            gv = zv.points,
            pv = zv.className,
            dv = zv.top,
            Nv = zv.left,
            lv = zv.xAxis,
            Tv = zv.yAxis,
            wv = zv.width,
            av = zv.height,
            sv = zv.isAnimationActive,
            Cv = zv.id;
          if (Pv || !gv || !gv.length) return null;
          var iv = this.state.isAnimationFinished,
            cv = 1 === gv.length,
            jv = (0, ev.b)("recharts-area", pv),
            fv = lv && lv.allowDataOverflow,
            Fv = Tv && Tv.allowDataOverflow,
            nv = fv || Fv,
            Ov = Wv()(Cv) ? this.id : Cv,
            Dv = null !== (vv = (0, Yv.e)(hv, !1)) && void 0 !== vv ? vv : {
              r: 3,
              strokeWidth: 2
            },
            Kv = Dv.r,
            Vv = void 0 === Kv ? 3 : Kv,
            Uv = Dv.strokeWidth,
            Rv = void 0 === Uv ? 2 : Uv,
            xv = ((0, Yv.p)(hv) ? hv : {}).clipDot,
            tv = void 0 === xv || xv,
            qv = 2 * Vv + Rv;
          return Sv.createElement(Gv.c, {
            className: jv
          }, fv || Fv ? Sv.createElement("defs", null, Sv.createElement("clipPath", {
            id: "clipPath-".concat(Ov)
          }, Sv.createElement("rect", {
            x: fv ? Nv : Nv - wv / 2,
            y: Fv ? dv : dv - av / 2,
            width: fv ? wv : 2 * wv,
            height: Fv ? av : 2 * av
          })), !tv && Sv.createElement("clipPath", {
            id: "clipPath-dots-".concat(Ov)
          }, Sv.createElement("rect", {
            x: Nv - qv / 2,
            y: dv - qv / 2,
            width: wv + qv,
            height: av + qv
          }))) : null, cv ? null : this.renderArea(nv, Ov), (hv || cv) && this.renderDots(nv, tv, Ov), (!sv || iv) && mv.b.renderCallByParent(this.props, gv))
        }
      }], pv = [{
        key: "getDerivedStateFromProps",
        value: function(vv, zv) {
          return vv.animationId !== zv.prevAnimationId ? {
            prevAnimationId: vv.animationId,
            curPoints: vv.points,
            curBaseLine: vv.baseLine,
            prevPoints: zv.curPoints,
            prevBaseLine: zv.curBaseLine
          } : vv.points !== zv.curPoints || vv.baseLine !== zv.curBaseLine ? {
            curPoints: vv.points,
            curBaseLine: vv.baseLine
          } : null
        }
      }], hv && xv(Pv.prototype, hv), pv && xv(Pv, pv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, hv, pv
    }(Sv.PureComponent);
    hv = Lv, Zv(Lv, "displayName", "Area"), Zv(Lv, "defaultProps", {
      stroke: "#3182bd",
      fill: "#3182bd",
      fillOpacity: .6,
      xAxisId: 0,
      yAxisId: 0,
      legendType: "line",
      connectNulls: !1,
      points: [],
      dot: !1,
      activeDot: !0,
      hide: !1,
      isAnimationActive: !jv.d.isSsr,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease"
    }), Zv(Lv, "getBaseValue", (function(vv, zv, Pv, hv) {
      var Sv = vv.layout,
        ev = vv.baseValue,
        gv = zv.props.baseValue,
        pv = null !== gv && void 0 !== gv ? gv : ev;
      if ((0, fv.t)(pv) && "number" === typeof pv) return pv;
      var dv = "horizontal" === Sv ? hv : Pv,
        Nv = dv.scale.domain();
      if ("number" === dv.type) {
        var lv = Math.max(Nv[0], Nv[1]),
          Tv = Math.min(Nv[0], Nv[1]);
        return "dataMin" === pv ? Tv : "dataMax" === pv || lv < 0 ? lv : Math.max(Math.min(Nv[0], Nv[1]), 0)
      }
      return "dataMin" === pv ? Nv[0] : "dataMax" === pv ? Nv[1] : Nv[0]
    })), Zv(Lv, "getComposedData", (function(vv) {
      var zv, Pv = vv.props,
        Sv = vv.item,
        ev = vv.xAxis,
        gv = vv.yAxis,
        pv = vv.xAxisTicks,
        dv = vv.yAxisTicks,
        Nv = vv.bandSize,
        lv = vv.dataKey,
        Tv = vv.stackedData,
        Wv = vv.dataStartIndex,
        wv = vv.displayedData,
        av = vv.offset,
        sv = Pv.layout,
        Cv = Tv && Tv.length,
        iv = hv.getBaseValue(Pv, Sv, ev, gv),
        cv = "horizontal" === sv,
        Gv = !1,
        mv = wv.map((function(vv, zv) {
          var Pv;
          Cv ? Pv = Tv[Wv + zv] : (Pv = (0, Fv.eb)(vv, lv), Array.isArray(Pv) ? Gv = !0 : Pv = [iv, Pv]);
          var hv = null == Pv[1] || Cv && null == (0, Fv.eb)(vv, lv);
          return cv ? {
            x: (0, Fv.B)({
              axis: ev,
              ticks: pv,
              bandSize: Nv,
              entry: vv,
              index: zv
            }),
            y: hv ? null : gv.scale(Pv[1]),
            value: Pv,
            payload: vv
          } : {
            x: hv ? null : ev.scale(Pv[1]),
            y: (0, Fv.B)({
              axis: gv,
              ticks: dv,
              bandSize: Nv,
              entry: vv,
              index: zv
            }),
            value: Pv,
            payload: vv
          }
        }));
      return zv = Cv || Gv ? mv.map((function(vv) {
        var zv = Array.isArray(vv.value) ? vv.value[0] : null;
        return cv ? {
          x: vv.x,
          y: null != zv && null != vv.y ? gv.scale(zv) : null
        } : {
          x: null != zv ? ev.scale(zv) : null,
          y: vv.y
        }
      })) : cv ? gv.scale(iv) : ev.scale(iv), Rv({
        points: mv,
        baseLine: zv,
        layout: sv,
        isRange: Gv
      }, av)
    })), Zv(Lv, "renderDotItem", (function(vv, zv) {
      var Pv;
      if (Sv.isValidElement(vv)) Pv = Sv.cloneElement(vv, zv);
      else if (dv()(vv)) Pv = vv(zv);
      else {
        var hv = (0, ev.b)("recharts-area-dot", "boolean" !== typeof vv ? vv.className : ""),
          gv = zv.key,
          pv = Kv(zv, Ov);
        Pv = Sv.createElement(cv.d, Vv({}, pv, {
          key: gv,
          className: hv
        }))
      }
      return Pv
    }))
  },
  5989: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Jv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5839),
      gv = Pv(5924),
      pv = Pv.n(gv),
      dv = Pv(5141),
      Nv = Pv.n(dv),
      lv = Pv(5691),
      Tv = Pv(5933),
      Wv = Pv(5996),
      wv = Pv(6004),
      av = Pv(4891),
      sv = Pv(5149),
      Cv = Pv(5705),
      iv = Pv(5857),
      cv = Pv(5169),
      Gv = Pv(5677),
      mv = Pv(6011),
      jv = ["x", "y"];

    function fv(vv) {
      return fv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, fv(vv)
    }

    function Fv() {
      return Fv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Fv.apply(this, arguments)
    }

    function Yv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function nv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Yv(Object(Pv), !0).forEach((function(zv) {
          Ov(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Yv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Ov(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != fv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != fv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == fv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Dv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function Kv(vv, zv) {
      var Pv = vv.x,
        hv = vv.y,
        Sv = Dv(vv, jv),
        ev = "".concat(Pv),
        gv = parseInt(ev, 10),
        pv = "".concat(hv),
        dv = parseInt(pv, 10),
        Nv = "".concat(zv.height || Sv.height),
        lv = parseInt(Nv, 10),
        Tv = "".concat(zv.width || Sv.width),
        Wv = parseInt(Tv, 10);
      return nv(nv(nv(nv(nv({}, zv), Sv), gv ? {
        x: gv
      } : {}), dv ? {
        y: dv
      } : {}), {}, {
        height: lv,
        width: Wv,
        name: zv.name,
        radius: zv.radius
      })
    }

    function Vv(vv) {
      return hv.createElement(mv.e, Fv({
        shapeType: "rectangle",
        propTransformer: Kv,
        activeClassName: "recharts-active-bar"
      }, vv))
    }
    var Uv, Rv = ["value", "background"];

    function xv(vv) {
      return xv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, xv(vv)
    }

    function tv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function qv() {
      return qv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, qv.apply(this, arguments)
    }

    function Iv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Qv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Iv(Object(Pv), !0).forEach((function(zv) {
          yv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Iv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Zv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Bv(hv.key), hv)
      }
    }

    function Av(vv, zv, Pv) {
      return zv = Hv(zv),
        function(vv, zv) {
          if (zv && ("object" === xv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Lv() ? Reflect.construct(zv, Pv || [], Hv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Lv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Lv = function() {
        return !!vv
      })()
    }

    function Hv(vv) {
      return Hv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Hv(vv)
    }

    function Mv(vv, zv) {
      return Mv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Mv(vv, zv)
    }

    function yv(vv, zv, Pv) {
      return (zv = Bv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Bv(vv) {
      var zv = function(vv, zv) {
        if ("object" != xv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != xv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == xv(zv) ? zv : zv + ""
    }
    var Jv = function(vv) {
      function zv() {
        var vv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv);
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        return yv(vv = Av(this, zv, [].concat(hv)), "state", {
          isAnimationFinished: !1
        }), yv(vv, "id", (0, av.z)("recharts-bar-")), yv(vv, "handleAnimationEnd", (function() {
          var zv = vv.props.onAnimationEnd;
          vv.setState({
            isAnimationFinished: !0
          }), zv && zv()
        })), yv(vv, "handleAnimationStart", (function() {
          var zv = vv.props.onAnimationStart;
          vv.setState({
            isAnimationFinished: !1
          }), zv && zv()
        })), vv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Mv(vv, zv)
      }(zv, vv), Pv = zv, gv = [{
        key: "renderRectanglesStatically",
        value: function(vv) {
          var zv = this,
            Pv = this.props,
            Sv = Pv.shape,
            ev = Pv.dataKey,
            gv = Pv.activeIndex,
            pv = Pv.activeBar,
            dv = (0, sv.e)(this.props, !1);
          return vv && vv.map((function(vv, Pv) {
            var Nv = Pv === gv,
              Tv = Nv ? pv : Sv,
              Wv = Qv(Qv(Qv({}, dv), vv), {}, {
                isActive: Nv,
                option: Tv,
                index: Pv,
                dataKey: ev,
                onAnimationStart: zv.handleAnimationStart,
                onAnimationEnd: zv.handleAnimationEnd
              });
            return hv.createElement(lv.c, qv({
              className: "recharts-bar-rectangle"
            }, (0, cv.h)(zv.props, vv, Pv), {
              key: "rectangle-".concat(null === vv || void 0 === vv ? void 0 : vv.x, "-").concat(null === vv || void 0 === vv ? void 0 : vv.y, "-").concat(null === vv || void 0 === vv ? void 0 : vv.value, "-").concat(Pv)
            }), hv.createElement(Vv, Wv))
          }))
        }
      }, {
        key: "renderRectanglesWithAnimation",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.data,
            Sv = zv.layout,
            gv = zv.isAnimationActive,
            pv = zv.animationBegin,
            dv = zv.animationDuration,
            Nv = zv.animationEasing,
            Tv = zv.animationId,
            Wv = this.state.prevData;
          return hv.createElement(ev.c, {
            dw: pv,
            duration: dv,
            isActive: gv,
            easing: Nv,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "bar-".concat(Tv),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(zv) {
            var ev = zv.t,
              gv = Pv.map((function(vv, zv) {
                var Pv = Wv && Wv[zv];
                if (Pv) {
                  var hv = (0, av.l)(Pv.x, vv.x),
                    gv = (0, av.l)(Pv.y, vv.y),
                    pv = (0, av.l)(Pv.width, vv.width),
                    dv = (0, av.l)(Pv.height, vv.height);
                  return Qv(Qv({}, vv), {}, {
                    x: hv(ev),
                    y: gv(ev),
                    width: pv(ev),
                    height: dv(ev)
                  })
                }
                if ("horizontal" === Sv) {
                  var Nv = (0, av.l)(0, vv.height)(ev);
                  return Qv(Qv({}, vv), {}, {
                    y: vv.y + vv.height - Nv,
                    height: Nv
                  })
                }
                var lv = (0, av.l)(0, vv.width)(ev);
                return Qv(Qv({}, vv), {}, {
                  width: lv
                })
              }));
            return hv.createElement(lv.c, null, vv.renderRectanglesStatically(gv))
          }))
        }
      }, {
        key: "renderRectangles",
        value: function() {
          var vv = this.props,
            zv = vv.data,
            Pv = vv.isAnimationActive,
            hv = this.state.prevData;
          return !(Pv && zv && zv.length) || hv && pv()(hv, zv) ? this.renderRectanglesStatically(zv) : this.renderRectanglesWithAnimation()
        }
      }, {
        key: "renderBackground",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.data,
            Sv = zv.dataKey,
            ev = zv.activeIndex,
            gv = (0, sv.e)(this.props.background, !1);
          return Pv.map((function(zv, Pv) {
            zv.value;
            var pv = zv.background,
              dv = tv(zv, Rv);
            if (!pv) return null;
            var Nv = Qv(Qv(Qv(Qv(Qv({}, dv), {}, {
              fill: "#eee"
            }, pv), gv), (0, cv.h)(vv.props, zv, Pv)), {}, {
              onAnimationStart: vv.handleAnimationStart,
              onAnimationEnd: vv.handleAnimationEnd,
              dataKey: Sv,
              index: Pv,
              className: "recharts-bar-background-rectangle"
            });
            return hv.createElement(Vv, qv({
              key: "background-bar-".concat(Pv),
              option: vv.props.background,
              isActive: Pv === ev
            }, Nv))
          }))
        }
      }, {
        key: "renderErrorBar",
        value: function(vv, zv) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Pv = this.props,
            Sv = Pv.data,
            ev = Pv.xAxis,
            gv = Pv.yAxis,
            pv = Pv.layout,
            dv = Pv.children,
            Nv = (0, sv.g)(dv, Tv.e);
          if (!Nv) return null;
          var Wv = "vertical" === pv ? Sv[0].height / 2 : Sv[0].width / 2,
            wv = function(vv, zv) {
              var Pv = Array.isArray(vv.value) ? vv.value[1] : vv.value;
              return {
                x: vv.x,
                y: vv.y,
                value: Pv,
                errorVal: (0, iv.eb)(vv, zv)
              }
            },
            av = {
              clipPath: vv ? "url(#clipPath-".concat(zv, ")") : null
            };
          return hv.createElement(lv.c, av, Nv.map((function(vv) {
            return hv.cloneElement(vv, {
              key: "error-bar-".concat(zv, "-").concat(vv.props.dataKey),
              data: Sv,
              xAxis: ev,
              yAxis: gv,
              layout: pv,
              offset: Wv,
              dataPointFormatter: wv
            })
          })))
        }
      }, {
        key: "render",
        value: function() {
          var vv = this.props,
            zv = vv.hide,
            Pv = vv.data,
            ev = vv.className,
            gv = vv.xAxis,
            pv = vv.yAxis,
            dv = vv.left,
            Tv = vv.top,
            Wv = vv.width,
            av = vv.height,
            sv = vv.isAnimationActive,
            Cv = vv.background,
            iv = vv.id;
          if (zv || !Pv || !Pv.length) return null;
          var cv = this.state.isAnimationFinished,
            Gv = (0, Sv.b)("recharts-bar", ev),
            mv = gv && gv.allowDataOverflow,
            jv = pv && pv.allowDataOverflow,
            fv = mv || jv,
            Fv = Nv()(iv) ? this.id : iv;
          return hv.createElement(lv.c, {
            className: Gv
          }, mv || jv ? hv.createElement("defs", null, hv.createElement("clipPath", {
            id: "clipPath-".concat(Fv)
          }, hv.createElement("rect", {
            x: mv ? dv : dv - Wv / 2,
            y: jv ? Tv : Tv - av / 2,
            width: mv ? Wv : 2 * Wv,
            height: jv ? av : 2 * av
          }))) : null, hv.createElement(lv.c, {
            className: "recharts-bar-rectangles",
            clipPath: fv ? "url(#clipPath-".concat(Fv, ")") : null
          }, Cv ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(fv, Fv), (!sv || cv) && wv.b.renderCallByParent(this.props, Pv))
        }
      }], dv = [{
        key: "getDerivedStateFromProps",
        value: function(vv, zv) {
          return vv.animationId !== zv.prevAnimationId ? {
            prevAnimationId: vv.animationId,
            curData: vv.data,
            prevData: zv.curData
          } : vv.data !== zv.curData ? {
            curData: vv.data
          } : null
        }
      }], gv && Zv(Pv.prototype, gv), dv && Zv(Pv, dv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, gv, dv
    }(hv.PureComponent);
    Uv = Jv, yv(Jv, "displayName", "Bar"), yv(Jv, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      legendType: "rect",
      minPointSize: 0,
      hide: !1,
      data: [],
      layout: "vertical",
      activeBar: !1,
      isAnimationActive: !Cv.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease"
    }), yv(Jv, "getComposedData", (function(vv) {
      var zv = vv.props,
        Pv = vv.item,
        hv = vv.barPosition,
        Sv = vv.bandSize,
        ev = vv.xAxis,
        gv = vv.yAxis,
        pv = vv.xAxisTicks,
        dv = vv.yAxisTicks,
        Nv = vv.stackedData,
        lv = vv.dataStartIndex,
        Tv = vv.displayedData,
        wv = vv.offset,
        Cv = (0, iv.l)(hv, Pv);
      if (!Cv) return null;
      var cv = zv.layout,
        mv = Pv.type.defaultProps,
        jv = void 0 !== mv ? Qv(Qv({}, mv), Pv.props) : Pv.props,
        fv = jv.dataKey,
        Fv = jv.children,
        Yv = jv.minPointSize,
        nv = "horizontal" === cv ? gv : ev,
        Ov = Nv ? nv.scale.domain() : null,
        Dv = (0, iv.w)({
          numericAxis: nv
        }),
        Kv = (0, sv.g)(Fv, Wv.c),
        Vv = Tv.map((function(vv, zv) {
          var hv, Tv, Wv, wv, sv, mv;
          Nv ? hv = (0, iv.vb)(Nv[lv + zv], Ov) : (hv = (0, iv.eb)(vv, fv), Array.isArray(hv) || (hv = [Dv, hv]));
          var jv = function(vv) {
            var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return function(Pv, hv) {
              if ("number" === typeof vv) return vv;
              var Sv = (0, av.t)(Pv) || (0, av.n)(Pv);
              return Sv ? vv(Pv, hv) : (Sv || (0, Gv.c)(!1), zv)
            }
          }(Yv, Uv.defaultProps.minPointSize)(hv[1], zv);
          if ("horizontal" === cv) {
            var Fv, nv = [gv.scale(hv[0]), gv.scale(hv[1])],
              Vv = nv[0],
              Rv = nv[1];
            Tv = (0, iv.z)({
              axis: ev,
              ticks: pv,
              bandSize: Sv,
              offset: Cv.offset,
              entry: vv,
              index: zv
            }), Wv = null !== (Fv = null !== Rv && void 0 !== Rv ? Rv : Vv) && void 0 !== Fv ? Fv : void 0, wv = Cv.size;
            var xv = Vv - Rv;
            if (sv = Number.isNaN(xv) ? 0 : xv, mv = {
                x: Tv,
                y: gv.y,
                width: wv,
                height: gv.height
              }, Math.abs(jv) > 0 && Math.abs(sv) < Math.abs(jv)) {
              var tv = (0, av.y)(sv || jv) * (Math.abs(jv) - Math.abs(sv));
              Wv -= tv, sv += tv
            }
          } else {
            var qv = [ev.scale(hv[0]), ev.scale(hv[1])],
              Iv = qv[0],
              Zv = qv[1];
            if (Tv = Iv, Wv = (0, iv.z)({
                axis: gv,
                ticks: dv,
                bandSize: Sv,
                offset: Cv.offset,
                entry: vv,
                index: zv
              }), wv = Zv - Iv, sv = Cv.size, mv = {
                x: ev.x,
                y: Wv,
                width: ev.width,
                height: sv
              }, Math.abs(jv) > 0 && Math.abs(wv) < Math.abs(jv)) wv += (0, av.y)(wv || jv) * (Math.abs(jv) - Math.abs(wv))
          }
          return Qv(Qv(Qv({}, vv), {}, {
            x: Tv,
            y: Wv,
            width: wv,
            height: sv,
            value: Nv ? hv : hv[1],
            payload: vv,
            background: mv
          }, Kv && Kv[zv] && Kv[zv].props), {}, {
            tooltipPayload: [(0, iv.cb)(Pv, vv)],
            tooltipPosition: {
              x: Tv + wv / 2,
              y: Wv + sv / 2
            }
          })
        }));
      return Qv({
        data: Vv,
        layout: cv
      }, wv)
    }))
  },
  6099: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => xv
    });
    var hv = Pv(52),
      Sv = Pv(4995),
      ev = Pv.n(Sv),
      gv = Pv(4924),
      pv = Pv.n(gv),
      dv = Pv(4802),
      Nv = Pv(5166),
      lv = Pv(5691),
      Tv = Pv(5846),
      Wv = Pv(5942),
      wv = Pv(4891),
      av = Pv(5169),
      sv = Pv(5149),
      Cv = Pv(6105),
      iv = ["viewBox"],
      cv = ["viewBox"],
      Gv = ["ticks"];

    function mv(vv) {
      return mv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, mv(vv)
    }

    function jv() {
      return jv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, jv.apply(this, arguments)
    }

    function fv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Fv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? fv(Object(Pv), !0).forEach((function(zv) {
          Uv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : fv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Yv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function nv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Rv(hv.key), hv)
      }
    }

    function Ov(vv, zv, Pv) {
      return zv = Kv(zv),
        function(vv, zv) {
          if (zv && ("object" === mv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Dv() ? Reflect.construct(zv, Pv || [], Kv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Dv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Dv = function() {
        return !!vv
      })()
    }

    function Kv(vv) {
      return Kv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Kv(vv)
    }

    function Vv(vv, zv) {
      return Vv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Vv(vv, zv)
    }

    function Uv(vv, zv, Pv) {
      return (zv = Rv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Rv(vv) {
      var zv = function(vv, zv) {
        if ("object" != mv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != mv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == mv(zv) ? zv : zv + ""
    }
    var xv = function(vv) {
      function zv(vv) {
        var Pv;
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), (Pv = Ov(this, zv, [vv])).state = {
          fontSize: "",
          letterSpacing: ""
        }, Pv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Vv(vv, zv)
      }(zv, vv), Pv = zv, gv = [{
        key: "renderTickItem",
        value: function(vv, zv, Pv) {
          var Sv = (0, dv.b)(zv.className, "recharts-cartesian-axis-tick-value");
          return hv.isValidElement(vv) ? hv.cloneElement(vv, Fv(Fv({}, zv), {}, {
            className: Sv
          })) : ev()(vv) ? vv(Fv(Fv({}, zv), {}, {
            className: Sv
          })) : hv.createElement(Tv.d, jv({}, zv, {
            className: "recharts-cartesian-axis-tick-value"
          }), Pv)
        }
      }], (Sv = [{
        key: "shouldComponentUpdate",
        value: function(vv, zv) {
          var Pv = vv.viewBox,
            hv = Yv(vv, iv),
            Sv = this.props,
            ev = Sv.viewBox,
            gv = Yv(Sv, cv);
          return !(0, Nv.e)(Pv, ev) || !(0, Nv.e)(hv, gv) || !(0, Nv.e)(zv, this.state)
        }
      }, {
        key: "componentDidMount",
        value: function() {
          var vv = this.layerReference;
          if (vv) {
            var zv = vv.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
            zv && this.setState({
              fontSize: window.getComputedStyle(zv).fontSize,
              letterSpacing: window.getComputedStyle(zv).letterSpacing
            })
          }
        }
      }, {
        key: "getTickLineCoord",
        value: function(vv) {
          var zv, Pv, hv, Sv, ev, gv, pv = this.props,
            dv = pv.x,
            Nv = pv.y,
            lv = pv.width,
            Tv = pv.height,
            Wv = pv.orientation,
            av = pv.tickSize,
            sv = pv.mirror,
            Cv = pv.tickMargin,
            iv = sv ? -1 : 1,
            cv = vv.tickSize || av,
            Gv = (0, wv.t)(vv.tickCoord) ? vv.tickCoord : vv.coordinate;
          switch (Wv) {
            case "top":
              zv = Pv = vv.coordinate, gv = (hv = (Sv = Nv + +!sv * Tv) - iv * cv) - iv * Cv, ev = Gv;
              break;
            case "left":
              hv = Sv = vv.coordinate, ev = (zv = (Pv = dv + +!sv * lv) - iv * cv) - iv * Cv, gv = Gv;
              break;
            case "right":
              hv = Sv = vv.coordinate, ev = (zv = (Pv = dv + +sv * lv) + iv * cv) + iv * Cv, gv = Gv;
              break;
            default:
              zv = Pv = vv.coordinate, gv = (hv = (Sv = Nv + +sv * Tv) + iv * cv) + iv * Cv, ev = Gv
          }
          return {
            line: {
              x1: zv,
              y1: hv,
              x2: Pv,
              y2: Sv
            },
            MT: {
              x: ev,
              y: gv
            }
          }
        }
      }, {
        key: "getTickTextAnchor",
        value: function() {
          var vv, zv = this.props,
            Pv = zv.orientation,
            hv = zv.mirror;
          switch (Pv) {
            case "left":
              vv = hv ? "start" : "end";
              break;
            case "right":
              vv = hv ? "end" : "start";
              break;
            default:
              vv = "middle"
          }
          return vv
        }
      }, {
        key: "getTickVerticalAnchor",
        value: function() {
          var vv = this.props,
            zv = vv.orientation,
            Pv = vv.mirror,
            hv = "end";
          switch (zv) {
            case "left":
            case "right":
              hv = "middle";
              break;
            case "top":
              hv = Pv ? "start" : "end";
              break;
            default:
              hv = Pv ? "end" : "start"
          }
          return hv
        }
      }, {
        key: "renderAxisLine",
        value: function() {
          var vv = this.props,
            zv = vv.x,
            Pv = vv.y,
            Sv = vv.width,
            ev = vv.height,
            gv = vv.orientation,
            Nv = vv.mirror,
            lv = vv.axisLine,
            Tv = Fv(Fv(Fv({}, (0, sv.e)(this.props, !1)), (0, sv.e)(lv, !1)), {}, {
              fill: "none"
            });
          if ("top" === gv || "bottom" === gv) {
            var Wv = +("top" === gv && !Nv || "bottom" === gv && Nv);
            Tv = Fv(Fv({}, Tv), {}, {
              x1: zv,
              y1: Pv + Wv * ev,
              x2: zv + Sv,
              y2: Pv + Wv * ev
            })
          } else {
            var wv = +("left" === gv && !Nv || "right" === gv && Nv);
            Tv = Fv(Fv({}, Tv), {}, {
              x1: zv + wv * Sv,
              y1: Pv,
              x2: zv + wv * Sv,
              y2: Pv + ev
            })
          }
          return hv.createElement("line", jv({}, Tv, {
            className: (0, dv.b)("recharts-cartesian-axis-line", pv()(lv, "className"))
          }))
        }
      }, {
        key: "renderTicks",
        value: function(vv, Pv, Sv) {
          var gv = this,
            Nv = this.props,
            Tv = Nv.tickLine,
            Wv = Nv.stroke,
            wv = Nv.MT,
            iv = Nv.tickFormatter,
            cv = Nv.unit,
            Gv = (0, Cv.e)(Fv(Fv({}, this.props), {}, {
              ticks: vv
            }), Pv, Sv),
            mv = this.getTickTextAnchor(),
            fv = this.getTickVerticalAnchor(),
            Yv = (0, sv.e)(this.props, !1),
            nv = (0, sv.e)(wv, !1),
            Ov = Fv(Fv({}, Yv), {}, {
              fill: "none"
            }, (0, sv.e)(Tv, !1)),
            Dv = Gv.map((function(vv, Pv) {
              var Sv = gv.getTickLineCoord(vv),
                Nv = Sv.line,
                sv = Sv.MT,
                Cv = Fv(Fv(Fv(Fv({
                  textAnchor: mv,
                  verticalAnchor: fv
                }, Yv), {}, {
                  stroke: "none",
                  fill: Wv
                }, nv), sv), {}, {
                  index: Pv,
                  payload: vv,
                  visibleTicksCount: Gv.length,
                  tickFormatter: iv
                });
              return hv.createElement(lv.c, jv({
                className: "recharts-cartesian-axis-tick",
                key: "tick-".concat(vv.value, "-").concat(vv.coordinate, "-").concat(vv.tickCoord)
              }, (0, av.h)(gv.props, vv, Pv)), Tv && hv.createElement("line", jv({}, Ov, Nv, {
                className: (0, dv.b)("recharts-cartesian-axis-tick-line", pv()(Tv, "className"))
              })), wv && zv.renderTickItem(wv, Cv, "".concat(ev()(iv) ? iv(vv.value, Pv) : vv.value).concat(cv || "")))
            }));
          return hv.createElement("g", {
            className: "recharts-cartesian-axis-ticks"
          }, Dv)
        }
      }, {
        key: "render",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.axisLine,
            Sv = zv.width,
            gv = zv.height,
            pv = zv.ticksGenerator,
            Nv = zv.className;
          if (zv.hide) return null;
          var Tv = this.props,
            wv = Tv.ticks,
            av = Yv(Tv, Gv),
            sv = wv;
          return ev()(pv) && (sv = wv && wv.length > 0 ? pv(this.props) : pv(av)), Sv <= 0 || gv <= 0 || !sv || !sv.length ? null : hv.createElement(lv.c, {
            className: (0, dv.b)("recharts-cartesian-axis", Nv),
            ref: function(zv) {
              vv.layerReference = zv
            }
          }, Pv && this.renderAxisLine(), this.renderTicks(sv, this.state.fontSize, this.state.letterSpacing), Wv.e.renderCallByParent(this.props))
        }
      }]) && nv(Pv.prototype, Sv), gv && nv(Pv, gv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, gv
    }(hv.Component);
    Uv(xv, "displayName", "CartesianAxis"), Uv(xv, "defaultProps", {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      orientation: "bottom",
      ticks: [],
      stroke: "#666",
      tickLine: !0,
      axisLine: !0,
      MT: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd"
    })
  },
  6119: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Uv
    });
    var hv = Pv(52),
      Sv = Pv(4995),
      ev = Pv.n(Sv),
      gv = Pv(5146),
      pv = Pv(4891),
      dv = Pv(5149),
      Nv = Pv(5857),
      lv = Pv(6105),
      Tv = Pv(6099),
      Wv = Pv(6040),
      wv = ["x1", "y1", "x2", "y2", "key"],
      av = ["offset"];

    function sv(vv) {
      return sv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, sv(vv)
    }

    function Cv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function iv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Cv(Object(Pv), !0).forEach((function(zv) {
          cv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Cv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function cv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != sv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != sv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == sv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Gv() {
      return Gv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Gv.apply(this, arguments)
    }

    function mv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var jv = function(vv) {
      var zv = vv.fill;
      if (!zv || "none" === zv) return null;
      var Pv = vv.fillOpacity,
        Sv = vv.x,
        ev = vv.y,
        gv = vv.width,
        pv = vv.height,
        dv = vv.ry;
      return hv.createElement("rect", {
        x: Sv,
        y: ev,
        ry: dv,
        width: gv,
        height: pv,
        stroke: "none",
        fill: zv,
        fillOpacity: Pv,
        className: "recharts-cartesian-grid-bg"
      })
    };

    function fv(vv, zv) {
      var Pv;
      if (hv.isValidElement(vv)) Pv = hv.cloneElement(vv, zv);
      else if (ev()(vv)) Pv = vv(zv);
      else {
        var Sv = zv.x1,
          gv = zv.y1,
          pv = zv.x2,
          Nv = zv.y2,
          lv = zv.key,
          Tv = mv(zv, wv),
          Wv = (0, dv.e)(Tv, !1),
          sv = (Wv.offset, mv(Wv, av));
        Pv = hv.createElement("line", Gv({}, sv, {
          x1: Sv,
          y1: gv,
          x2: pv,
          y2: Nv,
          fill: "none",
          key: lv
        }))
      }
      return Pv
    }

    function Fv(vv) {
      var zv = vv.x,
        Pv = vv.width,
        Sv = vv.horizontal,
        ev = void 0 === Sv || Sv,
        gv = vv.horizontalPoints;
      if (!ev || !gv || !gv.length) return null;
      var pv = gv.map((function(hv, Sv) {
        var gv = iv(iv({}, vv), {}, {
          x1: zv,
          y1: hv,
          x2: zv + Pv,
          y2: hv,
          key: "line-".concat(Sv),
          index: Sv
        });
        return fv(ev, gv)
      }));
      return hv.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, pv)
    }

    function Yv(vv) {
      var zv = vv.y,
        Pv = vv.height,
        Sv = vv.vertical,
        ev = void 0 === Sv || Sv,
        gv = vv.verticalPoints;
      if (!ev || !gv || !gv.length) return null;
      var pv = gv.map((function(hv, Sv) {
        var gv = iv(iv({}, vv), {}, {
          x1: hv,
          y1: zv,
          x2: hv,
          y2: zv + Pv,
          key: "line-".concat(Sv),
          index: Sv
        });
        return fv(ev, gv)
      }));
      return hv.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, pv)
    }

    function nv(vv) {
      var zv = vv.horizontalFill,
        Pv = vv.fillOpacity,
        Sv = vv.x,
        ev = vv.y,
        gv = vv.width,
        pv = vv.height,
        dv = vv.horizontalPoints,
        Nv = vv.horizontal;
      if (!(void 0 === Nv || Nv) || !zv || !zv.length) return null;
      var lv = dv.map((function(vv) {
        return Math.round(vv + ev - ev)
      })).sort((function(vv, zv) {
        return vv - zv
      }));
      ev !== lv[0] && lv.unshift(0);
      var Tv = lv.map((function(vv, dv) {
        var Nv = !lv[dv + 1] ? ev + pv - vv : lv[dv + 1] - vv;
        if (Nv <= 0) return null;
        var Tv = dv % zv.length;
        return hv.createElement("rect", {
          key: "react-".concat(dv),
          y: vv,
          x: Sv,
          height: Nv,
          width: gv,
          stroke: "none",
          fill: zv[Tv],
          fillOpacity: Pv,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return hv.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, Tv)
    }

    function Ov(vv) {
      var zv = vv.vertical,
        Pv = void 0 === zv || zv,
        Sv = vv.verticalFill,
        ev = vv.fillOpacity,
        gv = vv.x,
        pv = vv.y,
        dv = vv.width,
        Nv = vv.height,
        lv = vv.verticalPoints;
      if (!Pv || !Sv || !Sv.length) return null;
      var Tv = lv.map((function(vv) {
        return Math.round(vv + gv - gv)
      })).sort((function(vv, zv) {
        return vv - zv
      }));
      gv !== Tv[0] && Tv.unshift(0);
      var Wv = Tv.map((function(vv, zv) {
        var Pv = !Tv[zv + 1] ? gv + dv - vv : Tv[zv + 1] - vv;
        if (Pv <= 0) return null;
        var lv = zv % Sv.length;
        return hv.createElement("rect", {
          key: "react-".concat(zv),
          x: vv,
          y: pv,
          width: Pv,
          height: Nv,
          stroke: "none",
          fill: Sv[lv],
          fillOpacity: ev,
          className: "recharts-cartesian-grid-bg"
        })
      }));
      return hv.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, Wv)
    }
    var Dv = function(vv, zv) {
        var Pv = vv.xAxis,
          hv = vv.width,
          Sv = vv.height,
          ev = vv.offset;
        return (0, Nv.F)((0, lv.e)(iv(iv(iv({}, Tv.c.defaultProps), Pv), {}, {
          ticks: (0, Nv.X)(Pv, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: hv,
            height: Sv
          }
        })), ev.left, ev.left + ev.width, zv)
      },
      Kv = function(vv, zv) {
        var Pv = vv.yAxis,
          hv = vv.width,
          Sv = vv.height,
          ev = vv.offset;
        return (0, Nv.F)((0, lv.e)(iv(iv(iv({}, Tv.c.defaultProps), Pv), {}, {
          ticks: (0, Nv.X)(Pv, !0),
          viewBox: {
            x: 0,
            y: 0,
            width: hv,
            height: Sv
          }
        })), ev.top, ev.top + ev.height, zv)
      },
      Vv = {
        horizontal: !0,
        vertical: !0,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: "#ccc",
        fill: "none",
        verticalFill: [],
        horizontalFill: []
      };

    function Uv(vv) {
      var zv, Pv, Sv, dv, Nv, lv, Tv = (0, Wv.i)(),
        wv = (0, Wv.f)(),
        av = (0, Wv.n)(),
        Cv = iv(iv({}, vv), {}, {
          stroke: null !== (zv = vv.stroke) && void 0 !== zv ? zv : Vv.stroke,
          fill: null !== (Pv = vv.fill) && void 0 !== Pv ? Pv : Vv.fill,
          horizontal: null !== (Sv = vv.horizontal) && void 0 !== Sv ? Sv : Vv.horizontal,
          horizontalFill: null !== (dv = vv.horizontalFill) && void 0 !== dv ? dv : Vv.horizontalFill,
          vertical: null !== (Nv = vv.vertical) && void 0 !== Nv ? Nv : Vv.vertical,
          verticalFill: null !== (lv = vv.verticalFill) && void 0 !== lv ? lv : Vv.verticalFill,
          x: (0, pv.t)(vv.x) ? vv.x : av.left,
          y: (0, pv.t)(vv.y) ? vv.y : av.top,
          width: (0, pv.t)(vv.width) ? vv.width : av.width,
          height: (0, pv.t)(vv.height) ? vv.height : av.height
        }),
        cv = Cv.x,
        mv = Cv.y,
        fv = Cv.width,
        Uv = Cv.height,
        Rv = Cv.syncWithTicks,
        xv = Cv.horizontalValues,
        tv = Cv.verticalValues,
        qv = (0, Wv.d)(),
        Iv = (0, Wv.w)();
      if (!(0, pv.t)(fv) || fv <= 0 || !(0, pv.t)(Uv) || Uv <= 0 || !(0, pv.t)(cv) || cv !== +cv || !(0, pv.t)(mv) || mv !== +mv) return null;
      var Qv = Cv.verticalCoordinatesGenerator || Dv,
        Zv = Cv.horizontalCoordinatesGenerator || Kv,
        Av = Cv.horizontalPoints,
        Lv = Cv.verticalPoints;
      if ((!Av || !Av.length) && ev()(Zv)) {
        var Hv = xv && xv.length,
          Mv = Zv({
            yAxis: Iv ? iv(iv({}, Iv), {}, {
              ticks: Hv ? xv : Iv.ticks
            }) : void 0,
            width: Tv,
            height: wv,
            offset: av
          }, !!Hv || Rv);
        (0, gv.d)(Array.isArray(Mv), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(sv(Mv), "]")), Array.isArray(Mv) && (Av = Mv)
      }
      if ((!Lv || !Lv.length) && ev()(Qv)) {
        var yv = tv && tv.length,
          Bv = Qv({
            xAxis: qv ? iv(iv({}, qv), {}, {
              ticks: yv ? tv : qv.ticks
            }) : void 0,
            width: Tv,
            height: wv,
            offset: av
          }, !!yv || Rv);
        (0, gv.d)(Array.isArray(Bv), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(sv(Bv), "]")), Array.isArray(Bv) && (Lv = Bv)
      }
      return hv.createElement("g", {
        className: "recharts-cartesian-grid"
      }, hv.createElement(jv, {
        fill: Cv.fill,
        fillOpacity: Cv.fillOpacity,
        x: Cv.x,
        y: Cv.y,
        width: Cv.width,
        height: Cv.height,
        ry: Cv.ry
      }), hv.createElement(Fv, Gv({}, Cv, {
        offset: av,
        horizontalPoints: Av,
        xAxis: qv,
        yAxis: Iv
      })), hv.createElement(Yv, Gv({}, Cv, {
        offset: av,
        verticalPoints: Lv,
        xAxis: qv,
        yAxis: Iv
      })), hv.createElement(nv, Gv({}, Cv, {
        horizontalPoints: Av
      })), hv.createElement(Ov, Gv({}, Cv, {
        verticalPoints: Lv
      })))
    }
    Uv.displayName = "CartesianGrid"
  },
  5933: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => mv
    });
    var hv = Pv(52),
      Sv = Pv(5677),
      ev = Pv(5691),
      gv = Pv(5149),
      pv = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];

    function dv(vv) {
      return dv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, dv(vv)
    }

    function Nv() {
      return Nv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Nv.apply(this, arguments)
    }

    function lv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Tv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Tv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Tv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Wv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function wv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Gv(hv.key), hv)
      }
    }

    function av(vv, zv, Pv) {
      return zv = Cv(zv),
        function(vv, zv) {
          if (zv && ("object" === dv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, sv() ? Reflect.construct(zv, Pv || [], Cv(vv).constructor) : zv.apply(vv, Pv))
    }

    function sv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (sv = function() {
        return !!vv
      })()
    }

    function Cv(vv) {
      return Cv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Cv(vv)
    }

    function iv(vv, zv) {
      return iv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, iv(vv, zv)
    }

    function cv(vv, zv, Pv) {
      return (zv = Gv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Gv(vv) {
      var zv = function(vv, zv) {
        if ("object" != dv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != dv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == dv(zv) ? zv : zv + ""
    }
    var mv = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), av(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && iv(vv, zv)
      }(zv, vv), Pv = zv, (dv = [{
        key: "render",
        value: function() {
          var vv = this.props,
            zv = vv.offset,
            Pv = vv.layout,
            dv = vv.width,
            Tv = vv.dataKey,
            wv = vv.data,
            av = vv.dataPointFormatter,
            sv = vv.xAxis,
            Cv = vv.yAxis,
            iv = Wv(vv, pv),
            cv = (0, gv.e)(iv, !1);
          "x" === this.props.direction && "number" !== sv.type && (0, Sv.c)(!1);
          var Gv = wv.map((function(vv) {
            var Sv = av(vv, Tv),
              gv = Sv.x,
              pv = Sv.y,
              Wv = Sv.value,
              wv = Sv.errorVal;
            if (!wv) return null;
            var iv, Gv, mv = [];
            if (Array.isArray(wv)) {
              var jv = lv(wv, 2);
              iv = jv[0], Gv = jv[1]
            } else iv = Gv = wv;
            if ("vertical" === Pv) {
              var fv = sv.scale,
                Fv = pv + zv,
                Yv = Fv + dv,
                nv = Fv - dv,
                Ov = fv(Wv - iv),
                Dv = fv(Wv + Gv);
              mv.push({
                x1: Dv,
                y1: Yv,
                x2: Dv,
                y2: nv
              }), mv.push({
                x1: Ov,
                y1: Fv,
                x2: Dv,
                y2: Fv
              }), mv.push({
                x1: Ov,
                y1: Yv,
                x2: Ov,
                y2: nv
              })
            } else if ("horizontal" === Pv) {
              var Kv = Cv.scale,
                Vv = gv + zv,
                Uv = Vv - dv,
                Rv = Vv + dv,
                xv = Kv(Wv - iv),
                tv = Kv(Wv + Gv);
              mv.push({
                x1: Uv,
                y1: tv,
                x2: Rv,
                y2: tv
              }), mv.push({
                x1: Vv,
                y1: xv,
                x2: Vv,
                y2: tv
              }), mv.push({
                x1: Uv,
                y1: xv,
                x2: Rv,
                y2: xv
              })
            }
            return hv.createElement(ev.c, Nv({
              className: "recharts-errorBar",
              key: "bar-".concat(mv.map((function(vv) {
                return "".concat(vv.x1, "-").concat(vv.x2, "-").concat(vv.y1, "-").concat(vv.y2)
              })))
            }, cv), mv.map((function(vv) {
              return hv.createElement("line", Nv({}, vv, {
                key: "line-".concat(vv.x1, "-").concat(vv.x2, "-").concat(vv.y1, "-").concat(vv.y2)
              }))
            })))
          }));
          return hv.createElement(ev.c, {
            className: "recharts-errorBars"
          }, Gv)
        }
      }]) && wv(Pv.prototype, dv), Tv && wv(Pv, Tv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, dv, Tv
    }(hv.Component);
    cv(mv, "defaultProps", {
      stroke: "black",
      strokeWidth: 1.5,
      width: 5,
      offset: 0,
      layout: "horizontal"
    }), cv(mv, "displayName", "ErrorBar")
  },
  6084: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Zv
    });
    var hv = Pv(52),
      Sv = Pv(5839),
      ev = Pv(4995),
      gv = Pv.n(ev),
      pv = Pv(5141),
      dv = Pv.n(pv),
      Nv = Pv(5924),
      lv = Pv.n(Nv),
      Tv = Pv(4802),
      Wv = Pv(6074),
      wv = Pv(5830),
      av = Pv(5691),
      sv = Pv(6004),
      Cv = Pv(5933),
      iv = Pv(4891),
      cv = Pv(5149),
      Gv = Pv(5705),
      mv = Pv(5857),
      jv = ["type", "layout", "connectNulls", "ref"],
      fv = ["key"];

    function Fv(vv) {
      return Fv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Fv(vv)
    }

    function Yv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function nv() {
      return nv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, nv.apply(this, arguments)
    }

    function Ov(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Dv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Ov(Object(Pv), !0).forEach((function(zv) {
          Iv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Ov(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Kv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return Vv(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Vv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Vv(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Vv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Uv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Qv(hv.key), hv)
      }
    }

    function Rv(vv, zv, Pv) {
      return zv = tv(zv),
        function(vv, zv) {
          if (zv && ("object" === Fv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, xv() ? Reflect.construct(zv, Pv || [], tv(vv).constructor) : zv.apply(vv, Pv))
    }

    function xv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (xv = function() {
        return !!vv
      })()
    }

    function tv(vv) {
      return tv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, tv(vv)
    }

    function qv(vv, zv) {
      return qv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, qv(vv, zv)
    }

    function Iv(vv, zv, Pv) {
      return (zv = Qv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Qv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Fv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Fv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Fv(zv) ? zv : zv + ""
    }
    var Zv = function(vv) {
      function zv() {
        var vv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv);
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        return Iv(vv = Rv(this, zv, [].concat(hv)), "state", {
          isAnimationFinished: !0,
          totalLength: 0
        }), Iv(vv, "generateSimpleStrokeDasharray", (function(vv, zv) {
          return "".concat(zv, "px ").concat(vv - zv, "px")
        })), Iv(vv, "getStrokeDasharray", (function(Pv, hv, Sv) {
          var ev = Sv.reduce((function(vv, zv) {
            return vv + zv
          }));
          if (!ev) return vv.generateSimpleStrokeDasharray(hv, Pv);
          for (var gv = Math.floor(Pv / ev), pv = Pv % ev, dv = hv - Pv, Nv = [], lv = 0, Tv = 0; lv < Sv.length; Tv += Sv[lv], ++lv)
            if (Tv + Sv[lv] > pv) {
              Nv = [].concat(Kv(Sv.slice(0, lv)), [pv - Tv]);
              break
            } var Wv = Nv.length % 2 === 0 ? [0, dv] : [dv];
          return [].concat(Kv(zv.repeat(Sv, gv)), Kv(Nv), Wv).map((function(vv) {
            return "".concat(vv, "px")
          })).join(", ")
        })), Iv(vv, "id", (0, iv.z)("recharts-line-")), Iv(vv, "pathRef", (function(zv) {
          vv.mainCurve = zv
        })), Iv(vv, "handleAnimationEnd", (function() {
          vv.setState({
            isAnimationFinished: !0
          }), vv.props.onAnimationEnd && vv.props.onAnimationEnd()
        })), Iv(vv, "handleAnimationStart", (function() {
          vv.setState({
            isAnimationFinished: !1
          }), vv.props.onAnimationStart && vv.props.onAnimationStart()
        })), vv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && qv(vv, zv)
      }(zv, vv), Pv = zv, ev = [{
        key: "componentDidMount",
        value: function() {
          if (this.props.isAnimationActive) {
            var vv = this.getTotalLength();
            this.setState({
              totalLength: vv
            })
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          if (this.props.isAnimationActive) {
            var vv = this.getTotalLength();
            vv !== this.state.totalLength && this.setState({
              totalLength: vv
            })
          }
        }
      }, {
        key: "getTotalLength",
        value: function() {
          var vv = this.mainCurve;
          try {
            return vv && vv.getTotalLength && vv.getTotalLength() || 0
          } catch (zv) {
            return 0
          }
        }
      }, {
        key: "renderErrorBar",
        value: function(vv, zv) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var Pv = this.props,
            Sv = Pv.points,
            ev = Pv.xAxis,
            gv = Pv.yAxis,
            pv = Pv.layout,
            dv = Pv.children,
            Nv = (0, cv.g)(dv, Cv.e);
          if (!Nv) return null;
          var lv = function(vv, zv) {
              return {
                x: vv.x,
                y: vv.y,
                value: vv.value,
                errorVal: (0, mv.eb)(vv.payload, zv)
              }
            },
            Tv = {
              clipPath: vv ? "url(#clipPath-".concat(zv, ")") : null
            };
          return hv.createElement(av.c, Tv, Nv.map((function(vv) {
            return hv.cloneElement(vv, {
              key: "bar-".concat(vv.props.dataKey),
              data: Sv,
              xAxis: ev,
              yAxis: gv,
              layout: pv,
              dataPointFormatter: lv
            })
          })))
        }
      }, {
        key: "renderDots",
        value: function(vv, Pv, Sv) {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var ev = this.props,
            gv = ev.dot,
            pv = ev.points,
            dv = ev.dataKey,
            Nv = (0, cv.e)(this.props, !1),
            lv = (0, cv.e)(gv, !0),
            Tv = pv.map((function(vv, Pv) {
              var hv = Dv(Dv(Dv({
                key: "dot-".concat(Pv),
                r: 3
              }, Nv), lv), {}, {
                index: Pv,
                cx: vv.x,
                cy: vv.y,
                value: vv.value,
                dataKey: dv,
                payload: vv.payload,
                points: pv
              });
              return zv.renderDotItem(gv, hv)
            })),
            Wv = {
              clipPath: vv ? "url(#clipPath-".concat(Pv ? "" : "dots-").concat(Sv, ")") : null
            };
          return hv.createElement(av.c, nv({
            className: "recharts-line-dots",
            key: "dots"
          }, Wv), Tv)
        }
      }, {
        key: "renderCurveStatically",
        value: function(vv, zv, Pv, Sv) {
          var ev = this.props,
            gv = ev.type,
            pv = ev.layout,
            dv = ev.connectNulls,
            Nv = (ev.ref, Yv(ev, jv)),
            lv = Dv(Dv(Dv({}, (0, cv.e)(Nv, !0)), {}, {
              fill: "none",
              className: "recharts-line-curve",
              clipPath: zv ? "url(#clipPath-".concat(Pv, ")") : null,
              points: vv
            }, Sv), {}, {
              type: gv,
              layout: pv,
              connectNulls: dv
            });
          return hv.createElement(Wv.d, nv({}, lv, {
            pathRef: this.pathRef
          }))
        }
      }, {
        key: "renderCurveWithAnimation",
        value: function(vv, zv) {
          var Pv = this,
            ev = this.props,
            gv = ev.points,
            pv = ev.strokeDasharray,
            dv = ev.isAnimationActive,
            Nv = ev.animationBegin,
            lv = ev.animationDuration,
            Tv = ev.animationEasing,
            Wv = ev.animationId,
            wv = ev.animateNewValues,
            av = ev.width,
            sv = ev.height,
            Cv = this.state,
            cv = Cv.prevPoints,
            Gv = Cv.totalLength;
          return hv.createElement(Sv.c, {
            dw: Nv,
            duration: lv,
            isActive: dv,
            easing: Tv,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "line-".concat(Wv),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(hv) {
            var Sv = hv.t;
            if (cv) {
              var ev = cv.length / gv.length,
                dv = gv.map((function(vv, zv) {
                  var Pv = Math.floor(zv * ev);
                  if (cv[Pv]) {
                    var hv = cv[Pv],
                      gv = (0, iv.l)(hv.x, vv.x),
                      pv = (0, iv.l)(hv.y, vv.y);
                    return Dv(Dv({}, vv), {}, {
                      x: gv(Sv),
                      y: pv(Sv)
                    })
                  }
                  if (wv) {
                    var dv = (0, iv.l)(2 * av, vv.x),
                      Nv = (0, iv.l)(sv / 2, vv.y);
                    return Dv(Dv({}, vv), {}, {
                      x: dv(Sv),
                      y: Nv(Sv)
                    })
                  }
                  return Dv(Dv({}, vv), {}, {
                    x: vv.x,
                    y: vv.y
                  })
                }));
              return Pv.renderCurveStatically(dv, vv, zv)
            }
            var Nv, lv = (0, iv.l)(0, Gv)(Sv);
            if (pv) {
              var Tv = "".concat(pv).split(/[,\s]+/gim).map((function(vv) {
                return parseFloat(vv)
              }));
              Nv = Pv.getStrokeDasharray(lv, Gv, Tv)
            } else Nv = Pv.generateSimpleStrokeDasharray(Gv, lv);
            return Pv.renderCurveStatically(gv, vv, zv, {
              strokeDasharray: Nv
            })
          }))
        }
      }, {
        key: "renderCurve",
        value: function(vv, zv) {
          var Pv = this.props,
            hv = Pv.points,
            Sv = Pv.isAnimationActive,
            ev = this.state,
            gv = ev.prevPoints,
            pv = ev.totalLength;
          return Sv && hv && hv.length && (!gv && pv > 0 || !lv()(gv, hv)) ? this.renderCurveWithAnimation(vv, zv) : this.renderCurveStatically(hv, vv, zv)
        }
      }, {
        key: "render",
        value: function() {
          var vv, zv = this.props,
            Pv = zv.hide,
            Sv = zv.dot,
            ev = zv.points,
            gv = zv.className,
            pv = zv.xAxis,
            Nv = zv.yAxis,
            lv = zv.top,
            Wv = zv.left,
            wv = zv.width,
            Cv = zv.height,
            iv = zv.isAnimationActive,
            Gv = zv.id;
          if (Pv || !ev || !ev.length) return null;
          var mv = this.state.isAnimationFinished,
            jv = 1 === ev.length,
            fv = (0, Tv.b)("recharts-line", gv),
            Fv = pv && pv.allowDataOverflow,
            Yv = Nv && Nv.allowDataOverflow,
            nv = Fv || Yv,
            Ov = dv()(Gv) ? this.id : Gv,
            Dv = null !== (vv = (0, cv.e)(Sv, !1)) && void 0 !== vv ? vv : {
              r: 3,
              strokeWidth: 2
            },
            Kv = Dv.r,
            Vv = void 0 === Kv ? 3 : Kv,
            Uv = Dv.strokeWidth,
            Rv = void 0 === Uv ? 2 : Uv,
            xv = ((0, cv.p)(Sv) ? Sv : {}).clipDot,
            tv = void 0 === xv || xv,
            qv = 2 * Vv + Rv;
          return hv.createElement(av.c, {
            className: fv
          }, Fv || Yv ? hv.createElement("defs", null, hv.createElement("clipPath", {
            id: "clipPath-".concat(Ov)
          }, hv.createElement("rect", {
            x: Fv ? Wv : Wv - wv / 2,
            y: Yv ? lv : lv - Cv / 2,
            width: Fv ? wv : 2 * wv,
            height: Yv ? Cv : 2 * Cv
          })), !tv && hv.createElement("clipPath", {
            id: "clipPath-dots-".concat(Ov)
          }, hv.createElement("rect", {
            x: Wv - qv / 2,
            y: lv - qv / 2,
            width: wv + qv,
            height: Cv + qv
          }))) : null, !jv && this.renderCurve(nv, Ov), this.renderErrorBar(nv, Ov), (jv || Sv) && this.renderDots(nv, tv, Ov), (!iv || mv) && sv.b.renderCallByParent(this.props, ev))
        }
      }], pv = [{
        key: "getDerivedStateFromProps",
        value: function(vv, zv) {
          return vv.animationId !== zv.prevAnimationId ? {
            prevAnimationId: vv.animationId,
            curPoints: vv.points,
            prevPoints: zv.curPoints
          } : vv.points !== zv.curPoints ? {
            curPoints: vv.points
          } : null
        }
      }, {
        key: "repeat",
        value: function(vv, zv) {
          for (var Pv = vv.length % 2 !== 0 ? [].concat(Kv(vv), [0]) : vv, hv = [], Sv = 0; Sv < zv; ++Sv) hv = [].concat(Kv(hv), Kv(Pv));
          return hv
        }
      }, {
        key: "renderDotItem",
        value: function(vv, zv) {
          var Pv;
          if (hv.isValidElement(vv)) Pv = hv.cloneElement(vv, zv);
          else if (gv()(vv)) Pv = vv(zv);
          else {
            var Sv = zv.key,
              ev = Yv(zv, fv),
              pv = (0, Tv.b)("recharts-line-dot", "boolean" !== typeof vv ? vv.className : "");
            Pv = hv.createElement(wv.d, nv({
              key: Sv
            }, ev, {
              className: pv
            }))
          }
          return Pv
        }
      }], ev && Uv(Pv.prototype, ev), pv && Uv(Pv, pv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, ev, pv
    }(hv.PureComponent);
    Iv(Zv, "displayName", "Line"), Iv(Zv, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      connectNulls: !1,
      activeDot: !0,
      dot: !0,
      legendType: "line",
      stroke: "#3182bd",
      strokeWidth: 1,
      fill: "#fff",
      points: [],
      isAnimationActive: !Gv.d.isSsr,
      animateNewValues: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      hide: !1,
      label: !1
    }), Iv(Zv, "getComposedData", (function(vv) {
      var zv = vv.props,
        Pv = vv.xAxis,
        hv = vv.yAxis,
        Sv = vv.xAxisTicks,
        ev = vv.yAxisTicks,
        gv = vv.dataKey,
        pv = vv.bandSize,
        Nv = vv.displayedData,
        lv = vv.offset,
        Tv = zv.layout;
      return Dv({
        points: Nv.map((function(vv, zv) {
          var Nv = (0, mv.eb)(vv, gv);
          return "horizontal" === Tv ? {
            x: (0, mv.B)({
              axis: Pv,
              ticks: Sv,
              bandSize: pv,
              entry: vv,
              index: zv
            }),
            y: dv()(Nv) ? null : hv.scale(Nv),
            value: Nv,
            payload: vv
          } : {
            x: dv()(Nv) ? null : Pv.scale(Nv),
            y: (0, mv.B)({
              axis: hv,
              ticks: ev,
              bandSize: pv,
              entry: vv,
              index: zv
            }),
            value: Nv,
            payload: vv
          }
        })),
        layout: Tv
      }, lv)
    }))
  },
  6032: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Rv
    });
    var hv = Pv(52),
      Sv = Pv(4995),
      ev = Pv.n(Sv),
      gv = Pv(6035),
      pv = Pv.n(gv),
      dv = Pv(4802),
      Nv = Pv(5691),
      lv = Pv(5942),
      Tv = Pv(5950),
      Wv = Pv(4891),
      wv = Pv(5958),
      av = Pv(5146),
      sv = Pv(5149),
      Cv = Pv(6040);

    function iv(vv) {
      return iv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, iv(vv)
    }

    function cv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Ov(hv.key), hv)
      }
    }

    function Gv(vv, zv, Pv) {
      return zv = jv(zv),
        function(vv, zv) {
          if (zv && ("object" === iv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, mv() ? Reflect.construct(zv, Pv || [], jv(vv).constructor) : zv.apply(vv, Pv))
    }

    function mv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (mv = function() {
        return !!vv
      })()
    }

    function jv(vv) {
      return jv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, jv(vv)
    }

    function fv(vv, zv) {
      return fv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, fv(vv, zv)
    }

    function Fv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Yv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Fv(Object(Pv), !0).forEach((function(zv) {
          nv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Fv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function nv(vv, zv, Pv) {
      return (zv = Ov(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Ov(vv) {
      var zv = function(vv, zv) {
        if ("object" != iv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != iv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == iv(zv) ? zv : zv + ""
    }

    function Dv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Kv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Kv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Kv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Vv() {
      return Vv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Vv.apply(this, arguments)
    }

    function Uv(vv) {
      var zv = vv.x,
        Pv = vv.y,
        Sv = vv.segment,
        gv = vv.xAxisId,
        iv = vv.yAxisId,
        cv = vv.shape,
        Gv = vv.className,
        mv = vv.alwaysShow,
        jv = (0, Cv.l)(),
        fv = (0, Cv.q)(gv),
        Fv = (0, Cv.t)(iv),
        nv = (0, Cv.p)();
      if (!jv || !nv) return null;
      (0, av.d)(void 0 === mv, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var Ov = function(vv, zv, Pv, hv, Sv, ev, gv, dv, Nv) {
        var lv = Sv.x,
          Wv = Sv.y,
          wv = Sv.width,
          av = Sv.height;
        if (Pv) {
          var sv = Nv.y,
            Cv = vv.y.apply(sv, {
              position: ev
            });
          if ((0, Tv.c)(Nv, "discard") && !vv.y.isInRange(Cv)) return null;
          var iv = [{
            x: lv + wv,
            y: Cv
          }, {
            x: lv,
            y: Cv
          }];
          return "left" === dv ? iv.reverse() : iv
        }
        if (zv) {
          var cv = Nv.x,
            Gv = vv.x.apply(cv, {
              position: ev
            });
          if ((0, Tv.c)(Nv, "discard") && !vv.x.isInRange(Gv)) return null;
          var mv = [{
            x: Gv,
            y: Wv + av
          }, {
            x: Gv,
            y: Wv
          }];
          return "top" === gv ? mv.reverse() : mv
        }
        if (hv) {
          var jv = Nv.segment.map((function(zv) {
            return vv.apply(zv, {
              position: ev
            })
          }));
          return (0, Tv.c)(Nv, "discard") && pv()(jv, (function(zv) {
            return !vv.isInRange(zv)
          })) ? null : jv
        }
        return null
      }((0, wv.b)({
        x: fv.scale,
        y: Fv.scale
      }), (0, Wv.r)(zv), (0, Wv.r)(Pv), Sv && 2 === Sv.length, nv, vv.position, fv.orientation, Fv.orientation, vv);
      if (!Ov) return null;
      var Kv = Dv(Ov, 2),
        Uv = Kv[0],
        Rv = Uv.x,
        xv = Uv.y,
        tv = Kv[1],
        qv = tv.x,
        Iv = tv.y,
        Qv = Yv(Yv({
          clipPath: (0, Tv.c)(vv, "hidden") ? "url(#".concat(jv, ")") : void 0
        }, (0, sv.e)(vv, !0)), {}, {
          x1: Rv,
          y1: xv,
          x2: qv,
          y2: Iv
        });
      return hv.createElement(Nv.c, {
        className: (0, dv.b)("recharts-reference-line", Gv)
      }, function(vv, zv) {
        return hv.isValidElement(vv) ? hv.cloneElement(vv, zv) : ev()(vv) ? vv(zv) : hv.createElement("line", Vv({}, zv, {
          className: "recharts-reference-line-line"
        }))
      }(cv, Qv), lv.e.renderCallByParent(vv, (0, wv.i)({
        x1: Rv,
        y1: xv,
        x2: qv,
        y2: Iv
      })))
    }
    var Rv = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), Gv(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && fv(vv, zv)
      }(zv, vv), Pv = zv, (Sv = [{
        key: "render",
        value: function() {
          return hv.createElement(Uv, this.props)
        }
      }]) && cv(Pv.prototype, Sv), ev && cv(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.Component);
    nv(Rv, "displayName", "ReferenceLine"), nv(Rv, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      fill: "none",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1,
      position: "middle"
    })
  },
  6090: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => cv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(6040),
      gv = Pv(6099),
      pv = Pv(5857);

    function dv(vv) {
      return dv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, dv(vv)
    }

    function Nv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, sv(hv.key), hv)
      }
    }

    function lv(vv, zv, Pv) {
      return zv = Wv(zv),
        function(vv, zv) {
          if (zv && ("object" === dv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Tv() ? Reflect.construct(zv, Pv || [], Wv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Tv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Tv = function() {
        return !!vv
      })()
    }

    function Wv(vv) {
      return Wv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Wv(vv)
    }

    function wv(vv, zv) {
      return wv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, wv(vv, zv)
    }

    function av(vv, zv, Pv) {
      return (zv = sv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function sv(vv) {
      var zv = function(vv, zv) {
        if ("object" != dv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != dv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == dv(zv) ? zv : zv + ""
    }

    function Cv() {
      return Cv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Cv.apply(this, arguments)
    }

    function iv(vv) {
      var zv = vv.xAxisId,
        Pv = (0, ev.i)(),
        dv = (0, ev.f)(),
        Nv = (0, ev.q)(zv);
      return null == Nv ? null : hv.createElement(gv.c, Cv({}, Nv, {
        className: (0, Sv.b)("recharts-".concat(Nv.axisType, " ").concat(Nv.axisType), Nv.className),
        viewBox: {
          x: 0,
          y: 0,
          width: Pv,
          height: dv
        },
        ticksGenerator: function(vv) {
          return (0, pv.X)(vv, !0)
        }
      }))
    }
    var cv = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), lv(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && wv(vv, zv)
      }(zv, vv), Pv = zv, (Sv = [{
        key: "render",
        value: function() {
          return hv.createElement(iv, this.props)
        }
      }]) && Nv(Pv.prototype, Sv), ev && Nv(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.Component);
    av(cv, "displayName", "XAxis"), av(cv, "defaultProps", {
      allowDecimals: !0,
      hide: !1,
      orientation: "bottom",
      width: 0,
      height: 30,
      mirror: !1,
      xAxisId: 0,
      tickCount: 5,
      type: "category",
      padding: {
        left: 0,
        right: 0
      },
      allowDataOverflow: !1,
      scale: "auto",
      reversed: !1,
      allowDuplicatedCategory: !0
    })
  },
  6110: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => cv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(6040),
      gv = Pv(6099),
      pv = Pv(5857);

    function dv(vv) {
      return dv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, dv(vv)
    }

    function Nv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, sv(hv.key), hv)
      }
    }

    function lv(vv, zv, Pv) {
      return zv = Wv(zv),
        function(vv, zv) {
          if (zv && ("object" === dv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Tv() ? Reflect.construct(zv, Pv || [], Wv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Tv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Tv = function() {
        return !!vv
      })()
    }

    function Wv(vv) {
      return Wv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Wv(vv)
    }

    function wv(vv, zv) {
      return wv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, wv(vv, zv)
    }

    function av(vv, zv, Pv) {
      return (zv = sv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function sv(vv) {
      var zv = function(vv, zv) {
        if ("object" != dv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != dv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == dv(zv) ? zv : zv + ""
    }

    function Cv() {
      return Cv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Cv.apply(this, arguments)
    }
    var iv = function(vv) {
        var zv = vv.yAxisId,
          Pv = (0, ev.i)(),
          dv = (0, ev.f)(),
          Nv = (0, ev.t)(zv);
        return null == Nv ? null : hv.createElement(gv.c, Cv({}, Nv, {
          className: (0, Sv.b)("recharts-".concat(Nv.axisType, " ").concat(Nv.axisType), Nv.className),
          viewBox: {
            x: 0,
            y: 0,
            width: Pv,
            height: dv
          },
          ticksGenerator: function(vv) {
            return (0, pv.X)(vv, !0)
          }
        }))
      },
      cv = function(vv) {
        function zv() {
          return function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, zv), lv(this, zv, arguments)
        }
        return function(vv, zv) {
          if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
          vv.prototype = Object.create(zv && zv.prototype, {
            constructor: {
              value: vv,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(vv, "prototype", {
            writable: !1
          }), zv && wv(vv, zv)
        }(zv, vv), Pv = zv, (Sv = [{
          key: "render",
          value: function() {
            return hv.createElement(iv, this.props)
          }
        }]) && Nv(Pv.prototype, Sv), ev && Nv(Pv, ev), Object.defineProperty(Pv, "prototype", {
          writable: !1
        }), Pv;
        var Pv, Sv, ev
      }(hv.Component);
    av(cv, "displayName", "YAxis"), av(cv, "defaultProps", {
      allowDuplicatedCategory: !0,
      allowDecimals: !0,
      hide: !1,
      orientation: "left",
      width: 60,
      height: 0,
      mirror: !1,
      yAxisId: 0,
      tickCount: 5,
      type: "number",
      padding: {
        top: 0,
        bottom: 0
      },
      allowDataOverflow: !1,
      scale: "auto",
      reversed: !1
    })
  },
  6105: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => sv
    });
    var hv = Pv(4995),
      Sv = Pv.n(hv),
      ev = Pv(4891),
      gv = Pv(5849),
      pv = Pv(5705),
      dv = Pv(5958);

    function Nv(vv, zv, Pv) {
      if (zv < 1) return [];
      if (1 === zv && void 0 === Pv) return vv;
      for (var hv = [], Sv = 0; Sv < vv.length; Sv += zv) {
        if (void 0 !== Pv && !0 !== Pv(vv[Sv])) return;
        hv.push(vv[Sv])
      }
      return hv
    }

    function lv(vv, zv, Pv, hv, Sv) {
      if (vv * zv < vv * hv || vv * zv > vv * Sv) return !1;
      var ev = Pv();
      return vv * (zv - vv * ev / 2 - hv) >= 0 && vv * (zv + vv * ev / 2 - Sv) <= 0
    }

    function Tv(vv) {
      return Tv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Tv(vv)
    }

    function Wv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function wv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Wv(Object(Pv), !0).forEach((function(zv) {
          av(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Wv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function av(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Tv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Tv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Tv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function sv(vv, zv, Pv) {
      var hv = vv.MT,
        Tv = vv.ticks,
        Wv = vv.viewBox,
        av = vv.minTickGap,
        sv = vv.orientation,
        Cv = vv.interval,
        iv = vv.tickFormatter,
        cv = vv.unit,
        Gv = vv.angle;
      if (!Tv || !Tv.length || !hv) return [];
      if ((0, ev.t)(Cv) || pv.d.isSsr) return function(vv, zv) {
        return Nv(vv, zv + 1)
      }(Tv, "number" === typeof Cv && (0, ev.t)(Cv) ? Cv : 0);
      var mv = [],
        jv = "top" === sv || "bottom" === sv ? "width" : "height",
        fv = cv && "width" === jv ? (0, gv.f)(cv, {
          fontSize: zv,
          letterSpacing: Pv
        }) : {
          width: 0,
          height: 0
        },
        Fv = function(vv, hv) {
          var ev = Sv()(iv) ? iv(vv.value, hv) : vv.value;
          return "width" === jv ? function(vv, zv, Pv) {
            var hv = {
              width: vv.width + zv.width,
              height: vv.height + zv.height
            };
            return (0, dv.g)(hv, Pv)
          }((0, gv.f)(ev, {
            fontSize: zv,
            letterSpacing: Pv
          }), fv, Gv) : (0, gv.f)(ev, {
            fontSize: zv,
            letterSpacing: Pv
          })[jv]
        },
        Yv = Tv.length >= 2 ? (0, ev.y)(Tv[1].coordinate - Tv[0].coordinate) : 1,
        nv = function(vv, zv, Pv) {
          var hv = "width" === Pv,
            Sv = vv.x,
            ev = vv.y,
            gv = vv.width,
            pv = vv.height;
          return 1 === zv ? {
            start: hv ? Sv : ev,
            end: hv ? Sv + gv : ev + pv
          } : {
            start: hv ? Sv + gv : ev + pv,
            end: hv ? Sv : ev
          }
        }(Wv, Yv, jv);
      return "equidistantPreserveStart" === Cv ? function(vv, zv, Pv, hv, Sv) {
        for (var ev, gv = (hv || []).slice(), pv = zv.start, dv = zv.end, Tv = 0, Wv = 1, wv = pv, av = function() {
            var zv = null === hv || void 0 === hv ? void 0 : hv[Tv];
            if (void 0 === zv) return {
              v: Nv(hv, Wv)
            };
            var ev, gv = Tv,
              av = function() {
                return void 0 === ev && (ev = Pv(zv, gv)), ev
              },
              sv = zv.coordinate,
              Cv = 0 === Tv || lv(vv, sv, av, wv, dv);
            Cv || (Tv = 0, wv = pv, Wv += 1), Cv && (wv = sv + vv * (av() / 2 + Sv), Tv += Wv)
          }; Wv <= gv.length;)
          if (ev = av()) return ev.v;
        return []
      }(Yv, nv, Fv, Tv, av) : (mv = "preserveStart" === Cv || "preserveStartEnd" === Cv ? function(vv, zv, Pv, hv, Sv, ev) {
        var gv = (hv || []).slice(),
          pv = gv.length,
          dv = zv.start,
          Nv = zv.end;
        if (ev) {
          var Tv = hv[pv - 1],
            Wv = Pv(Tv, pv - 1),
            av = vv * (Tv.coordinate + vv * Wv / 2 - Nv);
          gv[pv - 1] = Tv = wv(wv({}, Tv), {}, {
            tickCoord: av > 0 ? Tv.coordinate - av * vv : Tv.coordinate
          }), lv(vv, Tv.tickCoord, (function() {
            return Wv
          }), dv, Nv) && (Nv = Tv.tickCoord - vv * (Wv / 2 + Sv), gv[pv - 1] = wv(wv({}, Tv), {}, {
            isShow: !0
          }))
        }
        for (var sv = ev ? pv - 1 : pv, Cv = function(zv) {
            var hv, ev = gv[zv],
              pv = function() {
                return void 0 === hv && (hv = Pv(ev, zv)), hv
              };
            if (0 === zv) {
              var Tv = vv * (ev.coordinate - vv * pv() / 2 - dv);
              gv[zv] = ev = wv(wv({}, ev), {}, {
                tickCoord: Tv < 0 ? ev.coordinate - Tv * vv : ev.coordinate
              })
            } else gv[zv] = ev = wv(wv({}, ev), {}, {
              tickCoord: ev.coordinate
            });
            lv(vv, ev.tickCoord, pv, dv, Nv) && (dv = ev.tickCoord + vv * (pv() / 2 + Sv), gv[zv] = wv(wv({}, ev), {}, {
              isShow: !0
            }))
          }, iv = 0; iv < sv; iv++) Cv(iv);
        return gv
      }(Yv, nv, Fv, Tv, av, "preserveStartEnd" === Cv) : function(vv, zv, Pv, hv, Sv) {
        for (var ev = (hv || []).slice(), gv = ev.length, pv = zv.start, dv = zv.end, Nv = function(zv) {
            var hv, Nv = ev[zv],
              Tv = function() {
                return void 0 === hv && (hv = Pv(Nv, zv)), hv
              };
            if (zv === gv - 1) {
              var Wv = vv * (Nv.coordinate + vv * Tv() / 2 - dv);
              ev[zv] = Nv = wv(wv({}, Nv), {}, {
                tickCoord: Wv > 0 ? Nv.coordinate - Wv * vv : Nv.coordinate
              })
            } else ev[zv] = Nv = wv(wv({}, Nv), {}, {
              tickCoord: Nv.coordinate
            });
            lv(vv, Nv.tickCoord, Tv, pv, dv) && (dv = Nv.tickCoord - vv * (Tv() / 2 + Sv), ev[zv] = wv(wv({}, Nv), {}, {
              isShow: !0
            }))
          }, Tv = gv - 1; Tv >= 0; Tv--) Nv(Tv);
        return ev
      }(Yv, nv, Fv, Tv, av), mv.filter((function(vv) {
        return vv.isShow
      })))
    }
  },
  6122: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv
    });
    var hv = Pv(5183),
      Sv = Pv(5989),
      ev = Pv(6090),
      gv = Pv(6110),
      pv = Pv(5958),
      dv = (0, hv.d)({
        chartName: "BarChart",
        GraphicalChild: Sv.b,
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: ["axis", "item"],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: ev.b
        }, {
          axisType: "yAxis",
          AxisComp: gv.c
        }],
        formatAxisMap: pv.e
      })
  },
  5174: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sz
    });
    var hv = Pv(5183),
      Sv = Pv(6076),
      ev = Pv(5989),
      gv = Pv(6084),
      pv = Pv(52),
      dv = Pv(5839),
      Nv = Pv(5141),
      lv = Pv.n(Nv),
      Tv = Pv(5924),
      Wv = Pv.n(Tv),
      wv = Pv(4995),
      av = Pv.n(wv),
      sv = Pv(4802),
      Cv = Pv(5691),
      iv = Pv(6004),
      cv = Pv(5149),
      Gv = Pv(5705);

    function mv(vv) {
      return mv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, mv(vv)
    }

    function jv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Dv(hv.key), hv)
      }
    }

    function fv(vv, zv, Pv) {
      return zv = Yv(zv),
        function(vv, zv) {
          if (zv && ("object" === mv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Fv() ? Reflect.construct(zv, Pv || [], Yv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Fv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Fv = function() {
        return !!vv
      })()
    }

    function Yv(vv) {
      return Yv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Yv(vv)
    }

    function nv(vv, zv) {
      return nv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, nv(vv, zv)
    }

    function Ov(vv, zv, Pv) {
      return (zv = Dv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Dv(vv) {
      var zv = function(vv, zv) {
        if ("object" != mv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != mv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == mv(zv) ? zv : zv + ""
    }
    var Kv = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), fv(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && nv(vv, zv)
      }(zv, vv), Pv = zv, (hv = [{
        key: "render",
        value: function() {
          return null
        }
      }]) && jv(Pv.prototype, hv), Sv && jv(Pv, Sv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, hv, Sv
    }(pv.Component);
    Ov(Kv, "displayName", "ZAxis"), Ov(Kv, "defaultProps", {
      zAxisId: 0,
      range: [64, 64],
      scale: "auto",
      type: "number"
    });
    var Vv = Pv(6074),
      Uv = Pv(5933),
      Rv = Pv(5996),
      xv = Pv(4891),
      tv = Pv(5857),
      qv = Pv(5169),
      Iv = Pv(5774),
      Qv = Pv(6011),
      Zv = ["option", "isActive"];

    function Av() {
      return Av = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Av.apply(this, arguments)
    }

    function Lv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function Hv(vv) {
      var zv = vv.option,
        Pv = vv.isActive,
        hv = Lv(vv, Zv);
      return "string" === typeof zv ? pv.createElement(Qv.e, Av({
        option: pv.createElement(Iv.c, Av({
          type: zv
        }, hv)),
        isActive: Pv,
        shapeType: "symbols"
      }, hv)) : pv.createElement(Qv.e, Av({
        option: zv,
        isActive: Pv,
        shapeType: "symbols"
      }, hv))
    }

    function Mv(vv) {
      return Mv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Mv(vv)
    }

    function yv() {
      return yv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, yv.apply(this, arguments)
    }

    function Bv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Jv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Bv(Object(Pv), !0).forEach((function(zv) {
          Xv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Bv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Ev(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, uv(hv.key), hv)
      }
    }

    function ov(vv, zv, Pv) {
      return zv = rv(zv),
        function(vv, zv) {
          if (zv && ("object" === Mv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, bv() ? Reflect.construct(zv, Pv || [], rv(vv).constructor) : zv.apply(vv, Pv))
    }

    function bv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (bv = function() {
        return !!vv
      })()
    }

    function rv(vv) {
      return rv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, rv(vv)
    }

    function kv(vv, zv) {
      return kv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, kv(vv, zv)
    }

    function Xv(vv, zv, Pv) {
      return (zv = uv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function uv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Mv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Mv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Mv(zv) ? zv : zv + ""
    }
    var vz = function(vv) {
      function zv() {
        var vv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv);
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        return Xv(vv = ov(this, zv, [].concat(hv)), "state", {
          isAnimationFinished: !1
        }), Xv(vv, "handleAnimationEnd", (function() {
          vv.setState({
            isAnimationFinished: !0
          })
        })), Xv(vv, "handleAnimationStart", (function() {
          vv.setState({
            isAnimationFinished: !1
          })
        })), Xv(vv, "id", (0, xv.z)("recharts-scatter-")), vv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && kv(vv, zv)
      }(zv, vv), Pv = zv, hv = [{
        key: "renderSymbolsStatically",
        value: function(vv) {
          var zv = this,
            Pv = this.props,
            hv = Pv.shape,
            Sv = Pv.activeShape,
            ev = Pv.activeIndex,
            gv = (0, cv.e)(this.props, !1);
          return vv.map((function(vv, Pv) {
            var dv = ev === Pv,
              Nv = dv ? Sv : hv,
              lv = Jv(Jv({}, gv), vv);
            return pv.createElement(Cv.c, yv({
              className: "recharts-scatter-symbol",
              key: "symbol-".concat(null === vv || void 0 === vv ? void 0 : vv.cx, "-").concat(null === vv || void 0 === vv ? void 0 : vv.cy, "-").concat(null === vv || void 0 === vv ? void 0 : vv.size, "-").concat(Pv)
            }, (0, qv.h)(zv.props, vv, Pv), {
              role: "img"
            }), pv.createElement(Hv, yv({
              option: Nv,
              isActive: dv,
              key: "symbol-".concat(Pv)
            }, lv)))
          }))
        }
      }, {
        key: "renderSymbolsWithAnimation",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.points,
            hv = zv.isAnimationActive,
            Sv = zv.animationBegin,
            ev = zv.animationDuration,
            gv = zv.animationEasing,
            Nv = zv.animationId,
            lv = this.state.prevPoints;
          return pv.createElement(dv.c, {
            dw: Sv,
            duration: ev,
            isActive: hv,
            easing: gv,
            from: {
              t: 0
            },
            to: {
              t: 1
            },
            key: "pie-".concat(Nv),
            onAnimationEnd: this.handleAnimationEnd,
            onAnimationStart: this.handleAnimationStart
          }, (function(zv) {
            var hv = zv.t,
              Sv = Pv.map((function(vv, zv) {
                var Pv = lv && lv[zv];
                if (Pv) {
                  var Sv = (0, xv.l)(Pv.cx, vv.cx),
                    ev = (0, xv.l)(Pv.cy, vv.cy),
                    gv = (0, xv.l)(Pv.size, vv.size);
                  return Jv(Jv({}, vv), {}, {
                    cx: Sv(hv),
                    cy: ev(hv),
                    size: gv(hv)
                  })
                }
                var pv = (0, xv.l)(0, vv.size);
                return Jv(Jv({}, vv), {}, {
                  size: pv(hv)
                })
              }));
            return pv.createElement(Cv.c, null, vv.renderSymbolsStatically(Sv))
          }))
        }
      }, {
        key: "renderSymbols",
        value: function() {
          var vv = this.props,
            zv = vv.points,
            Pv = vv.isAnimationActive,
            hv = this.state.prevPoints;
          return !(Pv && zv && zv.length) || hv && Wv()(hv, zv) ? this.renderSymbolsStatically(zv) : this.renderSymbolsWithAnimation()
        }
      }, {
        key: "renderErrorBar",
        value: function() {
          if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
          var vv = this.props,
            zv = vv.points,
            Pv = vv.xAxis,
            hv = vv.yAxis,
            Sv = vv.children,
            ev = (0, cv.g)(Sv, Uv.e);
          return ev ? ev.map((function(vv, Sv) {
            var ev = vv.props,
              gv = ev.direction,
              dv = ev.dataKey;
            return pv.cloneElement(vv, {
              key: "".concat(gv, "-").concat(dv, "-").concat(zv[Sv]),
              data: zv,
              xAxis: Pv,
              yAxis: hv,
              layout: "x" === gv ? "vertical" : "horizontal",
              dataPointFormatter: function(vv, zv) {
                return {
                  x: vv.cx,
                  y: vv.cy,
                  value: "x" === gv ? +vv.node.x : +vv.node.y,
                  errorVal: (0, tv.eb)(vv, zv)
                }
              }
            })
          })) : null
        }
      }, {
        key: "renderLine",
        value: function() {
          var vv, zv, Pv = this.props,
            hv = Pv.points,
            Sv = Pv.line,
            ev = Pv.lineType,
            gv = Pv.lineJointType,
            dv = (0, cv.e)(this.props, !1),
            Nv = (0, cv.e)(Sv, !1);
          if ("joint" === ev) vv = hv.map((function(vv) {
            return {
              x: vv.cx,
              y: vv.cy
            }
          }));
          else if ("fitting" === ev) {
            var lv = (0, xv.f)(hv),
              Tv = lv.xmin,
              Wv = lv.xmax,
              wv = lv.a,
              sv = lv.b,
              iv = function(vv) {
                return wv * vv + sv
              };
            vv = [{
              x: Tv,
              y: iv(Tv)
            }, {
              x: Wv,
              y: iv(Wv)
            }]
          }
          var Gv = Jv(Jv(Jv({}, dv), {}, {
            fill: "none",
            stroke: dv && dv.fill
          }, Nv), {}, {
            points: vv
          });
          return zv = pv.isValidElement(Sv) ? pv.cloneElement(Sv, Gv) : av()(Sv) ? Sv(Gv) : pv.createElement(Vv.d, yv({}, Gv, {
            type: gv
          })), pv.createElement(Cv.c, {
            className: "recharts-scatter-line",
            key: "recharts-scatter-line"
          }, zv)
        }
      }, {
        key: "render",
        value: function() {
          var vv = this.props,
            zv = vv.hide,
            Pv = vv.points,
            hv = vv.line,
            Sv = vv.className,
            ev = vv.xAxis,
            gv = vv.yAxis,
            dv = vv.left,
            Nv = vv.top,
            Tv = vv.width,
            Wv = vv.height,
            wv = vv.id,
            av = vv.isAnimationActive;
          if (zv || !Pv || !Pv.length) return null;
          var cv = this.state.isAnimationFinished,
            Gv = (0, sv.b)("recharts-scatter", Sv),
            mv = ev && ev.allowDataOverflow,
            jv = gv && gv.allowDataOverflow,
            fv = mv || jv,
            Fv = lv()(wv) ? this.id : wv;
          return pv.createElement(Cv.c, {
            className: Gv,
            clipPath: fv ? "url(#clipPath-".concat(Fv, ")") : null
          }, mv || jv ? pv.createElement("defs", null, pv.createElement("clipPath", {
            id: "clipPath-".concat(Fv)
          }, pv.createElement("rect", {
            x: mv ? dv : dv - Tv / 2,
            y: jv ? Nv : Nv - Wv / 2,
            width: mv ? Tv : 2 * Tv,
            height: jv ? Wv : 2 * Wv
          }))) : null, hv && this.renderLine(), this.renderErrorBar(), pv.createElement(Cv.c, {
            key: "recharts-scatter-symbols"
          }, this.renderSymbols()), (!av || cv) && iv.b.renderCallByParent(this.props, Pv))
        }
      }], Sv = [{
        key: "getDerivedStateFromProps",
        value: function(vv, zv) {
          return vv.animationId !== zv.prevAnimationId ? {
            prevAnimationId: vv.animationId,
            curPoints: vv.points,
            prevPoints: zv.curPoints
          } : vv.points !== zv.curPoints ? {
            curPoints: vv.points
          } : null
        }
      }], hv && Ev(Pv.prototype, hv), Sv && Ev(Pv, Sv), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, hv, Sv
    }(pv.PureComponent);
    Xv(vz, "displayName", "Scatter"), Xv(vz, "defaultProps", {
      xAxisId: 0,
      yAxisId: 0,
      zAxisId: 0,
      legendType: "circle",
      lineType: "joint",
      lineJointType: "linear",
      data: [],
      shape: "circle",
      hide: !1,
      isAnimationActive: !Gv.d.isSsr,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "linear"
    }), Xv(vz, "getComposedData", (function(vv) {
      var zv = vv.xAxis,
        Pv = vv.yAxis,
        hv = vv.zAxis,
        Sv = vv.item,
        ev = vv.displayedData,
        gv = vv.xAxisTicks,
        pv = vv.yAxisTicks,
        dv = vv.offset,
        Nv = Sv.props.tooltipType,
        Tv = (0, cv.g)(Sv.props.children, Rv.c),
        Wv = lv()(zv.dataKey) ? Sv.props.dataKey : zv.dataKey,
        wv = lv()(Pv.dataKey) ? Sv.props.dataKey : Pv.dataKey,
        av = hv && hv.dataKey,
        sv = hv ? hv.range : Kv.defaultProps.range,
        Cv = sv && sv[0],
        iv = zv.scale.bandwidth ? zv.scale.bandwidth() : 0,
        Gv = Pv.scale.bandwidth ? Pv.scale.bandwidth() : 0,
        mv = ev.map((function(vv, ev) {
          var dv = (0, tv.eb)(vv, Wv),
            sv = (0, tv.eb)(vv, wv),
            cv = !lv()(av) && (0, tv.eb)(vv, av) || "-",
            mv = [{
              name: lv()(zv.dataKey) ? Sv.props.name : zv.name || zv.dataKey,
              unit: zv.unit || "",
              value: dv,
              payload: vv,
              dataKey: Wv,
              type: Nv
            }, {
              name: lv()(Pv.dataKey) ? Sv.props.name : Pv.name || Pv.dataKey,
              unit: Pv.unit || "",
              value: sv,
              payload: vv,
              dataKey: wv,
              type: Nv
            }];
          "-" !== cv && mv.push({
            name: hv.name || hv.dataKey,
            unit: hv.unit || "",
            value: cv,
            payload: vv,
            dataKey: av,
            type: Nv
          });
          var jv = (0, tv.B)({
              axis: zv,
              ticks: gv,
              bandSize: iv,
              entry: vv,
              index: ev,
              dataKey: Wv
            }),
            fv = (0, tv.B)({
              axis: Pv,
              ticks: pv,
              bandSize: Gv,
              entry: vv,
              index: ev,
              dataKey: wv
            }),
            Fv = "-" !== cv ? hv.scale(cv) : Cv,
            Yv = Math.sqrt(Math.max(Fv, 0) / Math.PI);
          return Jv(Jv({}, vv), {}, {
            cx: jv,
            cy: fv,
            x: jv - Yv,
            y: fv - Yv,
            xAxis: zv,
            yAxis: Pv,
            zAxis: hv,
            width: 2 * Yv,
            height: 2 * Yv,
            size: Fv,
            node: {
              x: dv,
              y: sv,
              z: cv
            },
            tooltipPayload: mv,
            tooltipPosition: {
              x: jv,
              y: fv
            },
            payload: vv
          }, Tv && Tv[ev] && Tv[ev].props)
        }));
      return Jv({
        points: mv
      }, dv)
    }));
    var zz = Pv(6090),
      Pz = Pv(6110),
      hz = Pv(5958),
      Sz = (0, hv.d)({
        chartName: "ComposedChart",
        GraphicalChild: [gv.b, Sv.c, ev.b, vz],
        axisComponents: [{
          axisType: "xAxis",
          AxisComp: zz.b
        }, {
          axisType: "yAxis",
          AxisComp: Pz.c
        }, {
          axisType: "zAxis",
          AxisComp: Kv
        }],
        formatAxisMap: hz.e
      })
  },
  5183: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => AP
    });
    var hv = Pv(52),
      Sv = Pv(5141),
      ev = Pv.n(Sv),
      gv = Pv(4995),
      pv = Pv.n(gv),
      dv = Pv(5190),
      Nv = Pv.n(dv),
      lv = Pv(4924),
      Tv = Pv.n(lv),
      Wv = Pv(5227),
      wv = Pv.n(Wv),
      av = Pv(4810),
      sv = Pv.n(av),
      Cv = Pv(4802),
      iv = Pv(5677),
      cv = Pv(5686),
      Gv = Pv(5691),
      mv = Pv(5697),
      jv = Pv(5771),
      fv = Pv(5830),
      Fv = Pv(5833),
      Yv = Pv(5149),
      nv = Pv(5863),
      Ov = Pv(5846),
      Dv = Pv(5857),
      Kv = Pv(4891);

    function Vv(vv) {
      return Vv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Vv(vv)
    }

    function Uv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Rv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Uv(Object(Pv), !0).forEach((function(zv) {
          xv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Uv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function xv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Vv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Vv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Vv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var tv = ["Webkit", "Moz", "O", "ms"];

    function qv(vv) {
      return qv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, qv(vv)
    }

    function Iv() {
      return Iv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Iv.apply(this, arguments)
    }

    function Qv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Zv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Qv(Object(Pv), !0).forEach((function(zv) {
          Bv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Qv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Av(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Jv(hv.key), hv)
      }
    }

    function Lv(vv, zv, Pv) {
      return zv = Mv(zv),
        function(vv, zv) {
          if (zv && ("object" === qv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Hv() ? Reflect.construct(zv, Pv || [], Mv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Hv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Hv = function() {
        return !!vv
      })()
    }

    function Mv(vv) {
      return Mv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Mv(vv)
    }

    function yv(vv, zv) {
      return yv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, yv(vv, zv)
    }

    function Bv(vv, zv, Pv) {
      return (zv = Jv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Jv(vv) {
      var zv = function(vv, zv) {
        if ("object" != qv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != qv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == qv(zv) ? zv : zv + ""
    }
    var Ev = function(vv) {
        return vv.changedTouches && !!vv.changedTouches.length
      },
      ov = function(vv) {
        function zv(vv) {
          var Pv;
          return function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, zv), Bv(Pv = Lv(this, zv, [vv]), "handleDrag", (function(vv) {
            Pv.leaveTimer && (clearTimeout(Pv.leaveTimer), Pv.leaveTimer = null), Pv.state.isTravellerMoving ? Pv.handleTravellerMove(vv) : Pv.state.isSlideMoving && Pv.handleSlideDrag(vv)
          })), Bv(Pv, "handleTouchMove", (function(vv) {
            null != vv.changedTouches && vv.changedTouches.length > 0 && Pv.handleDrag(vv.changedTouches[0])
          })), Bv(Pv, "handleDragEnd", (function() {
            Pv.setState({
              isTravellerMoving: !1,
              isSlideMoving: !1
            }, (function() {
              var vv = Pv.props,
                zv = vv.endIndex,
                hv = vv.onDragEnd,
                Sv = vv.startIndex;
              null === hv || void 0 === hv || hv({
                endIndex: zv,
                startIndex: Sv
              })
            })), Pv.detachDragEndListener()
          })), Bv(Pv, "handleLeaveWrapper", (function() {
            (Pv.state.isTravellerMoving || Pv.state.isSlideMoving) && (Pv.leaveTimer = window.setTimeout(Pv.handleDragEnd, Pv.props.leaveTimeOut))
          })), Bv(Pv, "handleEnterSlideOrTraveller", (function() {
            Pv.setState({
              isTextActive: !0
            })
          })), Bv(Pv, "handleLeaveSlideOrTraveller", (function() {
            Pv.setState({
              isTextActive: !1
            })
          })), Bv(Pv, "handleSlideDragStart", (function(vv) {
            var zv = Ev(vv) ? vv.changedTouches[0] : vv;
            Pv.setState({
              isTravellerMoving: !1,
              isSlideMoving: !0,
              slideMoveStartX: zv.pageX
            }), Pv.attachDragEndListener()
          })), Pv.travellerDragStartHandlers = {
            startX: Pv.handleTravellerDragStart.bind(Pv, "startX"),
            endX: Pv.handleTravellerDragStart.bind(Pv, "endX")
          }, Pv.state = {}, Pv
        }
        return function(vv, zv) {
          if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
          vv.prototype = Object.create(zv && zv.prototype, {
            constructor: {
              value: vv,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(vv, "prototype", {
            writable: !1
          }), zv && yv(vv, zv)
        }(zv, vv), Pv = zv, Sv = [{
          key: "componentWillUnmount",
          value: function() {
            this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
          }
        }, {
          key: "getIndex",
          value: function(vv) {
            var Pv = vv.startX,
              hv = vv.endX,
              Sv = this.state.scaleValues,
              ev = this.props,
              gv = ev.gap,
              pv = ev.data.length - 1,
              dv = Math.min(Pv, hv),
              Nv = Math.max(Pv, hv),
              lv = zv.getIndexInRange(Sv, dv),
              Tv = zv.getIndexInRange(Sv, Nv);
            return {
              startIndex: lv - lv % gv,
              endIndex: Tv === pv ? pv : Tv - Tv % gv
            }
          }
        }, {
          key: "getTextOfTick",
          value: function(vv) {
            var zv = this.props,
              Pv = zv.data,
              hv = zv.tickFormatter,
              Sv = zv.dataKey,
              ev = (0, Dv.eb)(Pv[vv], Sv, vv);
            return pv()(hv) ? hv(ev, vv) : ev
          }
        }, {
          key: "attachDragEndListener",
          value: function() {
            window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0)
          }
        }, {
          key: "detachDragEndListener",
          value: function() {
            window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0)
          }
        }, {
          key: "handleSlideDrag",
          value: function(vv) {
            var zv = this.state,
              Pv = zv.slideMoveStartX,
              hv = zv.startX,
              Sv = zv.endX,
              ev = this.props,
              gv = ev.x,
              pv = ev.width,
              dv = ev.travellerWidth,
              Nv = ev.startIndex,
              lv = ev.endIndex,
              Tv = ev.onChange,
              Wv = vv.pageX - Pv;
            Wv > 0 ? Wv = Math.min(Wv, gv + pv - dv - Sv, gv + pv - dv - hv) : Wv < 0 && (Wv = Math.max(Wv, gv - hv, gv - Sv));
            var wv = this.getIndex({
              startX: hv + Wv,
              endX: Sv + Wv
            });
            wv.startIndex === Nv && wv.endIndex === lv || !Tv || Tv(wv), this.setState({
              startX: hv + Wv,
              endX: Sv + Wv,
              slideMoveStartX: vv.pageX
            })
          }
        }, {
          key: "handleTravellerDragStart",
          value: function(vv, zv) {
            var Pv = Ev(zv) ? zv.changedTouches[0] : zv;
            this.setState({
              isSlideMoving: !1,
              isTravellerMoving: !0,
              movingTravellerId: vv,
              brushMoveStartX: Pv.pageX
            }), this.attachDragEndListener()
          }
        }, {
          key: "handleTravellerMove",
          value: function(vv) {
            var zv = this.state,
              Pv = zv.brushMoveStartX,
              hv = zv.movingTravellerId,
              Sv = zv.endX,
              ev = zv.startX,
              gv = this.state[hv],
              pv = this.props,
              dv = pv.x,
              Nv = pv.width,
              lv = pv.travellerWidth,
              Tv = pv.onChange,
              Wv = pv.gap,
              wv = pv.data,
              av = {
                startX: this.state.startX,
                endX: this.state.endX
              },
              sv = vv.pageX - Pv;
            sv > 0 ? sv = Math.min(sv, dv + Nv - lv - gv) : sv < 0 && (sv = Math.max(sv, dv - gv)), av[hv] = gv + sv;
            var Cv = this.getIndex(av),
              iv = Cv.startIndex,
              cv = Cv.endIndex;
            this.setState(Bv(Bv({}, hv, gv + sv), "brushMoveStartX", vv.pageX), (function() {
              Tv && function() {
                var vv = wv.length - 1;
                return "startX" === hv && (Sv > ev ? iv % Wv === 0 : cv % Wv === 0) || Sv < ev && cv === vv || "endX" === hv && (Sv > ev ? cv % Wv === 0 : iv % Wv === 0) || Sv > ev && cv === vv
              }() && Tv(Cv)
            }))
          }
        }, {
          key: "handleTravellerMoveKeyboard",
          value: function(vv, zv) {
            var Pv = this,
              hv = this.state,
              Sv = hv.scaleValues,
              ev = hv.startX,
              gv = hv.endX,
              pv = this.state[zv],
              dv = Sv.indexOf(pv);
            if (-1 !== dv) {
              var Nv = dv + vv;
              if (!(-1 === Nv || Nv >= Sv.length)) {
                var lv = Sv[Nv];
                "startX" === zv && lv >= gv || "endX" === zv && lv <= ev || this.setState(Bv({}, zv, lv), (function() {
                  Pv.props.onChange(Pv.getIndex({
                    startX: Pv.state.startX,
                    endX: Pv.state.endX
                  }))
                }))
              }
            }
          }
        }, {
          key: "renderBackground",
          value: function() {
            var vv = this.props,
              zv = vv.x,
              Pv = vv.y,
              Sv = vv.width,
              ev = vv.height,
              gv = vv.fill,
              pv = vv.stroke;
            return hv.createElement("rect", {
              stroke: pv,
              fill: gv,
              x: zv,
              y: Pv,
              width: Sv,
              height: ev
            })
          }
        }, {
          key: "renderPanorama",
          value: function() {
            var vv = this.props,
              zv = vv.x,
              Pv = vv.y,
              Sv = vv.width,
              ev = vv.height,
              gv = vv.data,
              pv = vv.children,
              dv = vv.padding,
              Nv = hv.Children.only(pv);
            return Nv ? hv.cloneElement(Nv, {
              x: zv,
              y: Pv,
              width: Sv,
              height: ev,
              margin: dv,
              compact: !0,
              data: gv
            }) : null
          }
        }, {
          key: "renderTravellerLayer",
          value: function(vv, Pv) {
            var Sv, ev, gv = this,
              pv = this.props,
              dv = pv.y,
              Nv = pv.travellerWidth,
              lv = pv.height,
              Tv = pv.traveller,
              Wv = pv.ariaLabel,
              wv = pv.data,
              av = pv.startIndex,
              sv = pv.endIndex,
              Cv = Math.max(vv, this.props.x),
              iv = Zv(Zv({}, (0, Yv.e)(this.props, !1)), {}, {
                x: Cv,
                y: dv,
                width: Nv,
                height: lv
              }),
              cv = Wv || "Min value: ".concat(null === (Sv = wv[av]) || void 0 === Sv ? void 0 : Sv.name, ", Max value: ").concat(null === (ev = wv[sv]) || void 0 === ev ? void 0 : ev.name);
            return hv.createElement(Gv.c, {
              tabIndex: 0,
              role: "slider",
              "aria-label": cv,
              "aria-valuenow": vv,
              className: "recharts-brush-traveller",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.travellerDragStartHandlers[Pv],
              onTouchStart: this.travellerDragStartHandlers[Pv],
              onKeyDown: function(vv) {
                ["ArrowLeft", "ArrowRight"].includes(vv.key) && (vv.preventDefault(), vv.stopPropagation(), gv.handleTravellerMoveKeyboard("ArrowRight" === vv.key ? 1 : -1, Pv))
              },
              onFocus: function() {
                gv.setState({
                  isTravellerFocused: !0
                })
              },
              onBlur: function() {
                gv.setState({
                  isTravellerFocused: !1
                })
              },
              style: {
                cursor: "col-resize"
              }
            }, zv.renderTraveller(Tv, iv))
          }
        }, {
          key: "renderSlide",
          value: function(vv, zv) {
            var Pv = this.props,
              Sv = Pv.y,
              ev = Pv.height,
              gv = Pv.stroke,
              pv = Pv.travellerWidth,
              dv = Math.min(vv, zv) + pv,
              Nv = Math.max(Math.abs(zv - vv) - pv, 0);
            return hv.createElement("rect", {
              className: "recharts-brush-slide",
              onMouseEnter: this.handleEnterSlideOrTraveller,
              onMouseLeave: this.handleLeaveSlideOrTraveller,
              onMouseDown: this.handleSlideDragStart,
              onTouchStart: this.handleSlideDragStart,
              style: {
                cursor: "move"
              },
              stroke: "none",
              fill: gv,
              fillOpacity: .2,
              x: dv,
              y: Sv,
              width: Nv,
              height: ev
            })
          }
        }, {
          key: "renderText",
          value: function() {
            var vv = this.props,
              zv = vv.startIndex,
              Pv = vv.endIndex,
              Sv = vv.y,
              ev = vv.height,
              gv = vv.travellerWidth,
              pv = vv.stroke,
              dv = this.state,
              Nv = dv.startX,
              lv = dv.endX,
              Tv = {
                pointerEvents: "none",
                fill: pv
              };
            return hv.createElement(Gv.c, {
              className: "recharts-brush-texts"
            }, hv.createElement(Ov.d, Iv({
              textAnchor: "end",
              verticalAnchor: "middle",
              x: Math.min(Nv, lv) - 5,
              y: Sv + ev / 2
            }, Tv), this.getTextOfTick(zv)), hv.createElement(Ov.d, Iv({
              textAnchor: "start",
              verticalAnchor: "middle",
              x: Math.max(Nv, lv) + gv + 5,
              y: Sv + ev / 2
            }, Tv), this.getTextOfTick(Pv)))
          }
        }, {
          key: "render",
          value: function() {
            var vv = this.props,
              zv = vv.data,
              Pv = vv.className,
              Sv = vv.children,
              ev = vv.x,
              gv = vv.y,
              pv = vv.width,
              dv = vv.height,
              Nv = vv.alwaysShowText,
              lv = this.state,
              Tv = lv.startX,
              Wv = lv.endX,
              wv = lv.isTextActive,
              av = lv.isSlideMoving,
              sv = lv.isTravellerMoving,
              iv = lv.isTravellerFocused;
            if (!zv || !zv.length || !(0, Kv.t)(ev) || !(0, Kv.t)(gv) || !(0, Kv.t)(pv) || !(0, Kv.t)(dv) || pv <= 0 || dv <= 0) return null;
            var cv = (0, Cv.b)("recharts-brush", Pv),
              mv = 1 === hv.Children.count(Sv),
              jv = function(vv, zv) {
                if (!vv) return null;
                var Pv = vv.replace(/(\w)/, (function(vv) {
                    return vv.toUpperCase()
                  })),
                  hv = tv.reduce((function(vv, hv) {
                    return Rv(Rv({}, vv), {}, xv({}, hv + Pv, zv))
                  }), {});
                return hv[vv] = zv, hv
              }("userSelect", "none");
            return hv.createElement(Gv.c, {
              className: cv,
              onMouseLeave: this.handleLeaveWrapper,
              onTouchMove: this.handleTouchMove,
              style: jv
            }, this.renderBackground(), mv && this.renderPanorama(), this.renderSlide(Tv, Wv), this.renderTravellerLayer(Tv, "startX"), this.renderTravellerLayer(Wv, "endX"), (wv || av || sv || iv || Nv) && this.renderText())
          }
        }], ev = [{
          key: "renderDefaultTraveller",
          value: function(vv) {
            var zv = vv.x,
              Pv = vv.y,
              Sv = vv.width,
              ev = vv.height,
              gv = vv.stroke,
              pv = Math.floor(Pv + ev / 2) - 1;
            return hv.createElement(hv.Fragment, null, hv.createElement("rect", {
              x: zv,
              y: Pv,
              width: Sv,
              height: ev,
              fill: gv,
              stroke: "none"
            }), hv.createElement("line", {
              x1: zv + 1,
              y1: pv,
              x2: zv + Sv - 1,
              y2: pv,
              fill: "none",
              stroke: "#fff"
            }), hv.createElement("line", {
              x1: zv + 1,
              y1: pv + 2,
              x2: zv + Sv - 1,
              y2: pv + 2,
              fill: "none",
              stroke: "#fff"
            }))
          }
        }, {
          key: "renderTraveller",
          value: function(vv, Pv) {
            return hv.isValidElement(vv) ? hv.cloneElement(vv, Pv) : pv()(vv) ? vv(Pv) : zv.renderDefaultTraveller(Pv)
          }
        }, {
          key: "getDerivedStateFromProps",
          value: function(vv, zv) {
            var Pv = vv.data,
              hv = vv.width,
              Sv = vv.x,
              ev = vv.travellerWidth,
              gv = vv.updateId,
              pv = vv.startIndex,
              dv = vv.endIndex;
            if (Pv !== zv.prevData || gv !== zv.prevUpdateId) return Zv({
              prevData: Pv,
              prevTravellerWidth: ev,
              prevUpdateId: gv,
              prevX: Sv,
              prevWidth: hv
            }, Pv && Pv.length ? function(vv) {
              var zv = vv.data,
                Pv = vv.startIndex,
                hv = vv.endIndex,
                Sv = vv.x,
                ev = vv.width,
                gv = vv.travellerWidth;
              if (!zv || !zv.length) return {};
              var pv = zv.length,
                dv = (0, nv.d)().domain(Nv()(0, pv)).range([Sv, Sv + ev - gv]),
                lv = dv.domain().map((function(vv) {
                  return dv(vv)
                }));
              return {
                isTextActive: !1,
                isSlideMoving: !1,
                isTravellerMoving: !1,
                isTravellerFocused: !1,
                startX: dv(Pv),
                endX: dv(hv),
                scale: dv,
                scaleValues: lv
              }
            }({
              data: Pv,
              width: hv,
              x: Sv,
              travellerWidth: ev,
              startIndex: pv,
              endIndex: dv
            }) : {
              scale: null,
              scaleValues: null
            });
            if (zv.scale && (hv !== zv.prevWidth || Sv !== zv.prevX || ev !== zv.prevTravellerWidth)) {
              zv.scale.range([Sv, Sv + hv - ev]);
              var lv = zv.scale.domain().map((function(vv) {
                return zv.scale(vv)
              }));
              return {
                prevData: Pv,
                prevTravellerWidth: ev,
                prevUpdateId: gv,
                prevX: Sv,
                prevWidth: hv,
                startX: zv.scale(vv.startIndex),
                endX: zv.scale(vv.endIndex),
                scaleValues: lv
              }
            }
            return null
          }
        }, {
          key: "getIndexInRange",
          value: function(vv, zv) {
            for (var Pv = 0, hv = vv.length - 1; hv - Pv > 1;) {
              var Sv = Math.floor((Pv + hv) / 2);
              vv[Sv] > zv ? hv = Sv : Pv = Sv
            }
            return zv >= vv[hv] ? hv : Pv
          }
        }], Sv && Av(Pv.prototype, Sv), ev && Av(Pv, ev), Object.defineProperty(Pv, "prototype", {
          writable: !1
        }), Pv;
        var Pv, Sv, ev
      }(hv.PureComponent);
    Bv(ov, "displayName", "Brush"), Bv(ov, "defaultProps", {
      height: 40,
      travellerWidth: 5,
      gap: 1,
      fill: "#fff",
      stroke: "#666",
      padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      },
      leaveTimeOut: 1e3,
      alwaysShowText: !1
    });
    var bv = Pv(5849),
      rv = Pv(5938),
      kv = Pv(5942),
      Xv = Pv(5950),
      uv = Pv(5958),
      vz = Pv(5146);

    function zz() {
      return zz = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, zz.apply(this, arguments)
    }

    function Pz(vv) {
      return Pz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Pz(vv)
    }

    function hz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Sz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? hz(Object(Pv), !0).forEach((function(zv) {
          lz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : hz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function ez(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Tz(hv.key), hv)
      }
    }

    function gz(vv, zv, Pv) {
      return zv = dz(zv),
        function(vv, zv) {
          if (zv && ("object" === Pz(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, pz() ? Reflect.construct(zv, Pv || [], dz(vv).constructor) : zv.apply(vv, Pv))
    }

    function pz() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (pz = function() {
        return !!vv
      })()
    }

    function dz(vv) {
      return dz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, dz(vv)
    }

    function Nz(vv, zv) {
      return Nz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Nz(vv, zv)
    }

    function lz(vv, zv, Pv) {
      return (zv = Tz(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Tz(vv) {
      var zv = function(vv, zv) {
        if ("object" != Pz(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Pz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Pz(zv) ? zv : zv + ""
    }
    var Wz = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), gz(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Nz(vv, zv)
      }(zv, vv), Pv = zv, (Sv = [{
        key: "render",
        value: function() {
          var vv = this.props,
            Pv = vv.x,
            Sv = vv.y,
            ev = vv.r,
            gv = vv.alwaysShow,
            pv = vv.clipPathId,
            dv = (0, Kv.r)(Pv),
            Nv = (0, Kv.r)(Sv);
          if ((0, vz.d)(void 0 === gv, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !dv || !Nv) return null;
          var lv = function(vv) {
            var zv = vv.x,
              Pv = vv.y,
              hv = vv.xAxis,
              Sv = vv.yAxis,
              ev = (0, uv.b)({
                x: hv.scale,
                y: Sv.scale
              }),
              gv = ev.apply({
                x: zv,
                y: Pv
              }, {
                bandAware: !0
              });
            return (0, Xv.c)(vv, "discard") && !ev.isInRange(gv) ? null : gv
          }(this.props);
          if (!lv) return null;
          var Tv = lv.x,
            Wv = lv.y,
            wv = this.props,
            av = wv.shape,
            sv = wv.className,
            iv = Sz(Sz({
              clipPath: (0, Xv.c)(this.props, "hidden") ? "url(#".concat(pv, ")") : void 0
            }, (0, Yv.e)(this.props, !0)), {}, {
              cx: Tv,
              cy: Wv
            });
          return hv.createElement(Gv.c, {
            className: (0, Cv.b)("recharts-reference-dot", sv)
          }, zv.renderDot(av, iv), kv.e.renderCallByParent(this.props, {
            x: Tv - ev,
            y: Wv - ev,
            width: 2 * ev,
            height: 2 * ev
          }))
        }
      }]) && ez(Pv.prototype, Sv), ev && ez(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.Component);
    lz(Wz, "displayName", "ReferenceDot"), lz(Wz, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#fff",
      stroke: "#ccc",
      fillOpacity: 1,
      strokeWidth: 1
    }), lz(Wz, "renderDot", (function(vv, zv) {
      return hv.isValidElement(vv) ? hv.cloneElement(vv, zv) : pv()(vv) ? vv(zv) : hv.createElement(fv.d, zz({}, zv, {
        cx: zv.cx,
        cy: zv.cy,
        className: "recharts-reference-dot-dot"
      }))
    }));
    var wz = Pv(6032);

    function az() {
      return az = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, az.apply(this, arguments)
    }

    function sz(vv) {
      return sz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, sz(vv)
    }

    function Cz(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function iz(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Cz(Object(Pv), !0).forEach((function(zv) {
          Fz(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Cz(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function cz(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Yz(hv.key), hv)
      }
    }

    function Gz(vv, zv, Pv) {
      return zv = jz(zv),
        function(vv, zv) {
          if (zv && ("object" === sz(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, mz() ? Reflect.construct(zv, Pv || [], jz(vv).constructor) : zv.apply(vv, Pv))
    }

    function mz() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (mz = function() {
        return !!vv
      })()
    }

    function jz(vv) {
      return jz = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, jz(vv)
    }

    function fz(vv, zv) {
      return fz = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, fz(vv, zv)
    }

    function Fz(vv, zv, Pv) {
      return (zv = Yz(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Yz(vv) {
      var zv = function(vv, zv) {
        if ("object" != sz(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != sz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == sz(zv) ? zv : zv + ""
    }
    var nz = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), Gz(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && fz(vv, zv)
      }(zv, vv), Pv = zv, (Sv = [{
        key: "render",
        value: function() {
          var vv = this.props,
            Pv = vv.x1,
            Sv = vv.x2,
            ev = vv.y1,
            gv = vv.y2,
            pv = vv.className,
            dv = vv.alwaysShow,
            Nv = vv.clipPathId;
          (0, vz.d)(void 0 === dv, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
          var lv = (0, Kv.r)(Pv),
            Tv = (0, Kv.r)(Sv),
            Wv = (0, Kv.r)(ev),
            wv = (0, Kv.r)(gv),
            av = this.props.shape;
          if (!lv && !Tv && !Wv && !wv && !av) return null;
          var sv = function(vv, zv, Pv, hv, Sv) {
            var ev = Sv.x1,
              gv = Sv.x2,
              pv = Sv.y1,
              dv = Sv.y2,
              Nv = Sv.xAxis,
              lv = Sv.yAxis;
            if (!Nv || !lv) return null;
            var Tv = (0, uv.b)({
                x: Nv.scale,
                y: lv.scale
              }),
              Wv = {
                x: vv ? Tv.x.apply(ev, {
                  position: "start"
                }) : Tv.x.rangeMin,
                y: Pv ? Tv.y.apply(pv, {
                  position: "start"
                }) : Tv.y.rangeMin
              },
              wv = {
                x: zv ? Tv.x.apply(gv, {
                  position: "end"
                }) : Tv.x.rangeMax,
                y: hv ? Tv.y.apply(dv, {
                  position: "end"
                }) : Tv.y.rangeMax
              };
            return !(0, Xv.c)(Sv, "discard") || Tv.isInRange(Wv) && Tv.isInRange(wv) ? (0, uv.j)(Wv, wv) : null
          }(lv, Tv, Wv, wv, this.props);
          if (!sv && !av) return null;
          var iv = (0, Xv.c)(this.props, "hidden") ? "url(#".concat(Nv, ")") : void 0;
          return hv.createElement(Gv.c, {
            className: (0, Cv.b)("recharts-reference-area", pv)
          }, zv.renderRect(av, iz(iz({
            clipPath: iv
          }, (0, Yv.e)(this.props, !0)), sv)), kv.e.renderCallByParent(this.props, sv))
        }
      }]) && cz(Pv.prototype, Sv), ev && cz(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.Component);

    function Oz(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return Dz(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Dz(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Dz(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Dz(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    Fz(nz, "displayName", "ReferenceArea"), Fz(nz, "defaultProps", {
      isFront: !1,
      ifOverflow: "discard",
      xAxisId: 0,
      yAxisId: 0,
      r: 10,
      fill: "#ccc",
      fillOpacity: .5,
      stroke: "none",
      strokeWidth: 1
    }), Fz(nz, "renderRect", (function(vv, zv) {
      return hv.isValidElement(vv) ? hv.cloneElement(vv, zv) : pv()(vv) ? vv(zv) : hv.createElement(Fv.c, az({}, zv, {
        className: "recharts-reference-area-rect"
      }))
    }));
    var Kz = function(vv, zv, Pv, hv, Sv) {
        var ev = (0, Yv.g)(vv, wz.e),
          gv = (0, Yv.g)(vv, Wz),
          pv = [].concat(Oz(ev), Oz(gv)),
          dv = (0, Yv.g)(vv, nz),
          Nv = "".concat(hv, "Id"),
          lv = hv[0],
          Tv = zv;
        if (pv.length && (Tv = pv.reduce((function(vv, zv) {
            if (zv.props[Nv] === Pv && (0, Xv.c)(zv.props, "extendDomain") && (0, Kv.t)(zv.props[lv])) {
              var hv = zv.props[lv];
              return [Math.min(vv[0], hv), Math.max(vv[1], hv)]
            }
            return vv
          }), Tv)), dv.length) {
          var Wv = "".concat(lv, "1"),
            wv = "".concat(lv, "2");
          Tv = dv.reduce((function(vv, zv) {
            if (zv.props[Nv] === Pv && (0, Xv.c)(zv.props, "extendDomain") && (0, Kv.t)(zv.props[Wv]) && (0, Kv.t)(zv.props[wv])) {
              var hv = zv.props[Wv],
                Sv = zv.props[wv];
              return [Math.min(vv[0], hv, Sv), Math.max(vv[1], hv, Sv)]
            }
            return vv
          }), Tv)
        }
        return Sv && Sv.length && (Tv = Sv.reduce((function(vv, zv) {
          return (0, Kv.t)(zv) ? [Math.min(vv[0], zv), Math.max(vv[1], zv)] : vv
        }), Tv)), Tv
      },
      Vz = Pv(5946),
      Uz = Pv(5166),
      Rz = Pv(35),
      xz = new(Pv.n(Rz)()),
      tz = "recharts.syncMouseEvents",
      qz = Pv(5169);

    function Iz(vv) {
      return Iz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Iz(vv)
    }

    function Qz(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Az(hv.key), hv)
      }
    }

    function Zz(vv, zv, Pv) {
      return (zv = Az(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Az(vv) {
      var zv = function(vv, zv) {
        if ("object" != Iz(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Iz(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Iz(zv) ? zv : zv + ""
    }
    var Lz = function() {
      return vv = function vv() {
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, vv), Zz(this, "activeIndex", 0), Zz(this, "coordinateList", []), Zz(this, "layout", "horizontal")
      }, (zv = [{
        key: "setDetails",
        value: function(vv) {
          var zv, Pv = vv.coordinateList,
            hv = void 0 === Pv ? null : Pv,
            Sv = vv.container,
            ev = void 0 === Sv ? null : Sv,
            gv = vv.layout,
            pv = void 0 === gv ? null : gv,
            dv = vv.offset,
            Nv = void 0 === dv ? null : dv,
            lv = vv.mouseHandlerCallback,
            Tv = void 0 === lv ? null : lv;
          this.coordinateList = null !== (zv = null !== hv && void 0 !== hv ? hv : this.coordinateList) && void 0 !== zv ? zv : [], this.container = null !== ev && void 0 !== ev ? ev : this.container, this.layout = null !== pv && void 0 !== pv ? pv : this.layout, this.offset = null !== Nv && void 0 !== Nv ? Nv : this.offset, this.mouseHandlerCallback = null !== Tv && void 0 !== Tv ? Tv : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1)
        }
      }, {
        key: "focus",
        value: function() {
          this.spoofMouse()
        }
      }, {
        key: "keyboardEvent",
        value: function(vv) {
          if (0 !== this.coordinateList.length) switch (vv.key) {
            case "ArrowRight":
              if ("horizontal" !== this.layout) return;
              this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
              break;
            case "ArrowLeft":
              if ("horizontal" !== this.layout) return;
              this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse()
          }
        }
      }, {
        key: "setIndex",
        value: function(vv) {
          this.activeIndex = vv
        }
      }, {
        key: "spoofMouse",
        value: function() {
          var vv, zv;
          if ("horizontal" === this.layout && 0 !== this.coordinateList.length) {
            var Pv = this.container.getBoundingClientRect(),
              hv = Pv.x,
              Sv = Pv.y,
              ev = Pv.height,
              gv = this.coordinateList[this.activeIndex].coordinate,
              pv = (null === (vv = window) || void 0 === vv ? void 0 : vv.scrollX) || 0,
              dv = (null === (zv = window) || void 0 === zv ? void 0 : zv.scrollY) || 0,
              Nv = hv + gv + pv,
              lv = Sv + this.offset.top + ev / 2 + dv;
            this.mouseHandlerCallback({
              pageX: Nv,
              pageY: lv
            })
          }
        }
      }]) && Qz(vv.prototype, zv), Pv && Qz(vv, Pv), Object.defineProperty(vv, "prototype", {
        writable: !1
      }), vv;
      var vv, zv, Pv
    }();
    var Hz = Pv(6011),
      Mz = Pv(6074);

    function yz(vv) {
      return yz = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, yz(vv)
    }
    var Bz = ["x", "y", "top", "left", "width", "height", "className"];

    function Jz() {
      return Jz = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Jz.apply(this, arguments)
    }

    function Ez(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function oz(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != yz(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != yz(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == yz(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function bz(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var rz = function(vv, zv, Pv, hv, Sv, ev) {
        return "M".concat(vv, ",").concat(Sv, "v").concat(hv, "M").concat(ev, ",").concat(zv, "h").concat(Pv)
      },
      kz = function(vv) {
        var zv = vv.x,
          Pv = void 0 === zv ? 0 : zv,
          Sv = vv.y,
          ev = void 0 === Sv ? 0 : Sv,
          gv = vv.top,
          pv = void 0 === gv ? 0 : gv,
          dv = vv.left,
          Nv = void 0 === dv ? 0 : dv,
          lv = vv.width,
          Tv = void 0 === lv ? 0 : lv,
          Wv = vv.height,
          wv = void 0 === Wv ? 0 : Wv,
          av = vv.className,
          sv = function(vv) {
            for (var zv = 1; zv < arguments.length; zv++) {
              var Pv = null != arguments[zv] ? arguments[zv] : {};
              zv % 2 ? Ez(Object(Pv), !0).forEach((function(zv) {
                oz(vv, zv, Pv[zv])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Ez(Object(Pv)).forEach((function(zv) {
                Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
              }))
            }
            return vv
          }({
            x: Pv,
            y: ev,
            top: pv,
            left: Nv,
            width: Tv,
            height: wv
          }, bz(vv, Bz));
        return (0, Kv.t)(Pv) && (0, Kv.t)(ev) && (0, Kv.t)(Tv) && (0, Kv.t)(wv) && (0, Kv.t)(pv) && (0, Kv.t)(Nv) ? hv.createElement("path", Jz({}, (0, Yv.e)(sv, !0), {
          className: (0, Cv.b)("recharts-cross", av),
          d: rz(Pv, ev, Tv, wv, pv, Nv)
        })) : null
      };

    function Xz(vv) {
      var zv = vv.cx,
        Pv = vv.cy,
        hv = vv.radius,
        Sv = vv.startAngle,
        ev = vv.endAngle;
      return {
        points: [(0, Vz.h)(zv, Pv, hv, Sv), (0, Vz.h)(zv, Pv, hv, ev)],
        cx: zv,
        cy: Pv,
        radius: hv,
        startAngle: Sv,
        endAngle: ev
      }
    }
    var uz = Pv(6030);

    function vP(vv, zv, Pv) {
      var hv, Sv, ev, gv;
      if ("horizontal" === vv) ev = hv = zv.x, Sv = Pv.top, gv = Pv.top + Pv.height;
      else if ("vertical" === vv) gv = Sv = zv.y, hv = Pv.left, ev = Pv.left + Pv.width;
      else if (null != zv.cx && null != zv.cy) {
        if ("centric" !== vv) return Xz(zv);
        var pv = zv.cx,
          dv = zv.cy,
          Nv = zv.innerRadius,
          lv = zv.outerRadius,
          Tv = zv.angle,
          Wv = (0, Vz.h)(pv, dv, Nv, Tv),
          wv = (0, Vz.h)(pv, dv, lv, Tv);
        hv = Wv.x, Sv = Wv.y, ev = wv.x, gv = wv.y
      }
      return [{
        x: hv,
        y: Sv
      }, {
        x: ev,
        y: gv
      }]
    }

    function zP(vv) {
      return zP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, zP(vv)
    }

    function PP(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function hP(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? PP(Object(Pv), !0).forEach((function(zv) {
          SP(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : PP(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function SP(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != zP(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != zP(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == zP(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function eP(vv) {
      var zv, Pv, Sv, ev = vv.element,
        gv = vv.tooltipEventType,
        pv = vv.isActive,
        dv = vv.activeCoordinate,
        Nv = vv.activePayload,
        lv = vv.offset,
        Tv = vv.activeTooltipIndex,
        Wv = vv.tooltipAxisBandSize,
        wv = vv.layout,
        av = vv.chartName,
        sv = null !== (zv = ev.props.cursor) && void 0 !== zv ? zv : null === (Pv = ev.type.defaultProps) || void 0 === Pv ? void 0 : Pv.cursor;
      if (!ev || !sv || !pv || !dv || "ScatterChart" !== av && "axis" !== gv) return null;
      var iv = Mz.d;
      if ("ScatterChart" === av) Sv = dv, iv = kz;
      else if ("BarChart" === av) Sv = function(vv, zv, Pv, hv) {
        var Sv = hv / 2;
        return {
          stroke: "none",
          fill: "#ccc",
          x: "horizontal" === vv ? zv.x - Sv : Pv.left + .5,
          y: "horizontal" === vv ? Pv.top + .5 : zv.y - Sv,
          width: "horizontal" === vv ? hv : Pv.width - 1,
          height: "horizontal" === vv ? Pv.height - 1 : hv
        }
      }(wv, dv, lv, Wv), iv = Fv.c;
      else if ("radial" === wv) {
        var cv = Xz(dv),
          Gv = cv.cx,
          mv = cv.cy,
          jv = cv.radius;
        Sv = {
          cx: Gv,
          cy: mv,
          startAngle: cv.startAngle,
          endAngle: cv.endAngle,
          innerRadius: jv,
          outerRadius: jv
        }, iv = uz.e
      } else Sv = {
        points: vP(wv, dv, lv)
      }, iv = Mz.d;
      var fv = hP(hP(hP(hP({
        stroke: "#ccc",
        pointerEvents: "none"
      }, lv), Sv), (0, Yv.e)(sv, !1)), {}, {
        payload: Nv,
        payloadIndex: Tv,
        className: (0, Cv.b)("recharts-tooltip-cursor", sv.className)
      });
      return (0, hv.isValidElement)(sv) ? (0, hv.cloneElement)(sv, fv) : (0, hv.createElement)(iv, fv)
    }
    var gP = Pv(6040),
      pP = ["item"],
      dP = ["children", "className", "width", "height", "style", "compact", "title", "desc"];

    function NP(vv) {
      return NP = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, NP(vv)
    }

    function lP() {
      return lP = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, lP.apply(this, arguments)
    }

    function TP(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || GP(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function WP(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function wP(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, YP(hv.key), hv)
      }
    }

    function aP(vv, zv, Pv) {
      return zv = CP(zv),
        function(vv, zv) {
          if (zv && ("object" === NP(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, sP() ? Reflect.construct(zv, Pv || [], CP(vv).constructor) : zv.apply(vv, Pv))
    }

    function sP() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (sP = function() {
        return !!vv
      })()
    }

    function CP(vv) {
      return CP = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, CP(vv)
    }

    function iP(vv, zv) {
      return iP = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, iP(vv, zv)
    }

    function cP(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return mP(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || GP(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function GP(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return mP(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? mP(vv, zv) : void 0
      }
    }

    function mP(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function jP(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function fP(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? jP(Object(Pv), !0).forEach((function(zv) {
          FP(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : jP(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function FP(vv, zv, Pv) {
      return (zv = YP(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function YP(vv) {
      var zv = function(vv, zv) {
        if ("object" != NP(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != NP(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == NP(zv) ? zv : zv + ""
    }
    var nP = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
      },
      OP = {
        width: "100%",
        height: "100%"
      },
      DP = {
        x: 0,
        y: 0
      };

    function KP(vv) {
      return vv
    }
    var VP = function(vv, zv) {
      var Pv = zv.graphicalItems,
        hv = zv.dataStartIndex,
        Sv = zv.dataEndIndex,
        ev = (null !== Pv && void 0 !== Pv ? Pv : []).reduce((function(vv, zv) {
          var Pv = zv.props.data;
          return Pv && Pv.length ? [].concat(cP(vv), cP(Pv)) : vv
        }), []);
      return ev.length > 0 ? ev : vv && vv.length && (0, Kv.t)(hv) && (0, Kv.t)(Sv) ? vv.slice(hv, Sv + 1) : []
    };

    function UP(vv) {
      return "number" === vv ? [0, "auto"] : void 0
    }
    var RP = function(vv, zv, Pv, hv) {
        var Sv = vv.graphicalItems,
          ev = vv.tooltipAxis,
          gv = VP(zv, vv);
        return Pv < 0 || !Sv || !Sv.length || Pv >= gv.length ? null : Sv.reduce((function(Sv, pv) {
          var dv, Nv, lv = null !== (dv = pv.props.data) && void 0 !== dv ? dv : zv;
          if (lv && vv.dataStartIndex + vv.dataEndIndex !== 0 && vv.dataEndIndex - vv.dataStartIndex >= Pv && (lv = lv.slice(vv.dataStartIndex, vv.dataEndIndex + 1)), ev.dataKey && !ev.allowDuplicatedCategory) {
            var Tv = void 0 === lv ? gv : lv;
            Nv = (0, Kv.d)(Tv, ev.dataKey, hv)
          } else Nv = lv && lv[Pv] || gv[Pv];
          return Nv ? [].concat(cP(Sv), [(0, Dv.cb)(pv, Nv)]) : Sv
        }), [])
      },
      xP = function(vv, zv, Pv, hv) {
        var Sv = hv || {
            x: vv.chartX,
            y: vv.chartY
          },
          ev = function(vv, zv) {
            return "horizontal" === zv ? vv.x : "vertical" === zv ? vv.y : "centric" === zv ? vv.angle : vv.radius
          }(Sv, Pv),
          gv = vv.orderedTooltipTicks,
          pv = vv.tooltipAxis,
          dv = vv.tooltipTicks,
          Nv = (0, Dv.f)(ev, gv, dv, pv);
        if (Nv >= 0 && dv) {
          var lv = dv[Nv] && dv[Nv].value,
            Tv = RP(vv, zv, Nv, lv),
            Wv = function(vv, zv, Pv, hv) {
              var Sv = zv.find((function(vv) {
                return vv && vv.index === Pv
              }));
              if (Sv) {
                if ("horizontal" === vv) return {
                  x: Sv.coordinate,
                  y: hv.y
                };
                if ("vertical" === vv) return {
                  x: hv.x,
                  y: Sv.coordinate
                };
                if ("centric" === vv) {
                  var ev = Sv.coordinate,
                    gv = hv.radius;
                  return fP(fP(fP({}, hv), (0, Vz.h)(hv.cx, hv.cy, gv, ev)), {}, {
                    angle: ev,
                    radius: gv
                  })
                }
                var pv = Sv.coordinate,
                  dv = hv.angle;
                return fP(fP(fP({}, hv), (0, Vz.h)(hv.cx, hv.cy, pv, dv)), {}, {
                  angle: dv,
                  radius: pv
                })
              }
              return DP
            }(Pv, gv, Nv, Sv);
          return {
            activeTooltipIndex: Nv,
            activeLabel: lv,
            activePayload: Tv,
            activeCoordinate: Wv
          }
        }
        return null
      },
      tP = function(vv, zv) {
        var Pv = zv.axes,
          hv = zv.graphicalItems,
          Sv = zv.axisType,
          gv = zv.axisIdKey,
          pv = zv.stackGroups,
          dv = zv.dataStartIndex,
          lv = zv.dataEndIndex,
          Tv = vv.layout,
          Wv = vv.children,
          wv = vv.stackOffset,
          av = (0, Dv.gb)(Tv, Sv);
        return Pv.reduce((function(zv, Pv) {
          var sv, Cv = void 0 !== Pv.type.defaultProps ? fP(fP({}, Pv.type.defaultProps), Pv.props) : Pv.props,
            iv = Cv.type,
            cv = Cv.dataKey,
            Gv = Cv.allowDataOverflow,
            mv = Cv.allowDuplicatedCategory,
            jv = Cv.scale,
            fv = Cv.ticks,
            Fv = Cv.includeHidden,
            Yv = Cv[gv];
          if (zv[Yv]) return zv;
          var nv, Ov, Vv, Uv = VP(vv.data, {
              graphicalItems: hv.filter((function(vv) {
                var zv;
                return (gv in vv.props ? vv.props[gv] : null === (zv = vv.type.defaultProps) || void 0 === zv ? void 0 : zv[gv]) === Yv
              })),
              dataStartIndex: dv,
              dataEndIndex: lv
            }),
            Rv = Uv.length;
          (function(vv, zv, Pv) {
            if ("number" === Pv && !0 === zv && Array.isArray(vv)) {
              var hv = null === vv || void 0 === vv ? void 0 : vv[0],
                Sv = null === vv || void 0 === vv ? void 0 : vv[1];
              if (hv && Sv && (0, Kv.t)(hv) && (0, Kv.t)(Sv)) return !0
            }
            return !1
          })(Cv.domain, Gv, iv) && (nv = (0, Dv.tb)(Cv.domain, null, Gv), !av || "number" !== iv && "auto" === jv || (Vv = (0, Dv.H)(Uv, cv, "category")));
          var xv = UP(iv);
          if (!nv || 0 === nv.length) {
            var tv, qv = null !== (tv = Cv.domain) && void 0 !== tv ? tv : xv;
            if (cv) {
              if (nv = (0, Dv.H)(Uv, cv, iv), "category" === iv && av) {
                var Iv = (0, Kv.h)(nv);
                mv && Iv ? (Ov = nv, nv = Nv()(0, Rv)) : mv || (nv = (0, Dv.kb)(qv, nv, Pv).reduce((function(vv, zv) {
                  return vv.indexOf(zv) >= 0 ? vv : [].concat(cP(vv), [zv])
                }), []))
              } else if ("category" === iv) nv = mv ? nv.filter((function(vv) {
                return "" !== vv && !ev()(vv)
              })) : (0, Dv.kb)(qv, nv, Pv).reduce((function(vv, zv) {
                return vv.indexOf(zv) >= 0 || "" === zv || ev()(zv) ? vv : [].concat(cP(vv), [zv])
              }), []);
              else if ("number" === iv) {
                var Qv = (0, Dv.nb)(Uv, hv.filter((function(vv) {
                  var zv, Pv, hv = gv in vv.props ? vv.props[gv] : null === (zv = vv.type.defaultProps) || void 0 === zv ? void 0 : zv[gv],
                    Sv = "hide" in vv.props ? vv.props.hide : null === (Pv = vv.type.defaultProps) || void 0 === Pv ? void 0 : Pv.hide;
                  return hv === Yv && (Fv || !Sv)
                })), cv, Sv, Tv);
                Qv && (nv = Qv)
              }!av || "number" !== iv && "auto" === jv || (Vv = (0, Dv.H)(Uv, cv, "category"))
            } else nv = av ? Nv()(0, Rv) : pv && pv[Yv] && pv[Yv].hasStack && "number" === iv ? "expand" === wv ? [0, 1] : (0, Dv.M)(pv[Yv].stackGroups, dv, lv) : (0, Dv.J)(Uv, hv.filter((function(vv) {
              var zv = gv in vv.props ? vv.props[gv] : vv.type.defaultProps[gv],
                Pv = "hide" in vv.props ? vv.props.hide : vv.type.defaultProps.hide;
              return zv === Yv && (Fv || !Pv)
            })), iv, Tv, !0);
            if ("number" === iv) nv = Kz(Wv, nv, Yv, Sv, fv), qv && (nv = (0, Dv.tb)(qv, nv, Gv));
            else if ("category" === iv && qv) {
              var Zv = qv;
              nv.every((function(vv) {
                return Zv.indexOf(vv) >= 0
              })) && (nv = Zv)
            }
          }
          return fP(fP({}, zv), {}, FP({}, Yv, fP(fP({}, Cv), {}, {
            axisType: Sv,
            domain: nv,
            categoricalDomain: Vv,
            duplicateDomain: Ov,
            originalDomain: null !== (sv = Cv.domain) && void 0 !== sv ? sv : xv,
            isCategorical: av,
            layout: Tv
          })))
        }), {})
      },
      qP = function(vv, zv) {
        var Pv = zv.axisType,
          hv = void 0 === Pv ? "xAxis" : Pv,
          Sv = zv.AxisComp,
          ev = zv.graphicalItems,
          gv = zv.stackGroups,
          pv = zv.dataStartIndex,
          dv = zv.dataEndIndex,
          lv = vv.children,
          Wv = "".concat(hv, "Id"),
          wv = (0, Yv.g)(lv, Sv),
          av = {};
        return wv && wv.length ? av = tP(vv, {
          axes: wv,
          graphicalItems: ev,
          axisType: hv,
          axisIdKey: Wv,
          stackGroups: gv,
          dataStartIndex: pv,
          dataEndIndex: dv
        }) : ev && ev.length && (av = function(vv, zv) {
          var Pv = zv.graphicalItems,
            hv = zv.Axis,
            Sv = zv.axisType,
            ev = zv.axisIdKey,
            gv = zv.stackGroups,
            pv = zv.dataStartIndex,
            dv = zv.dataEndIndex,
            lv = vv.layout,
            Wv = vv.children,
            wv = VP(vv.data, {
              graphicalItems: Pv,
              dataStartIndex: pv,
              dataEndIndex: dv
            }),
            av = wv.length,
            sv = (0, Dv.gb)(lv, Sv),
            Cv = -1;
          return Pv.reduce((function(vv, zv) {
            var iv, cv = (void 0 !== zv.type.defaultProps ? fP(fP({}, zv.type.defaultProps), zv.props) : zv.props)[ev],
              Gv = UP("number");
            return vv[cv] ? vv : (Cv++, sv ? iv = Nv()(0, av) : gv && gv[cv] && gv[cv].hasStack ? (iv = (0, Dv.M)(gv[cv].stackGroups, pv, dv), iv = Kz(Wv, iv, cv, Sv)) : (iv = (0, Dv.tb)(Gv, (0, Dv.J)(wv, Pv.filter((function(vv) {
              var zv, Pv, hv = ev in vv.props ? vv.props[ev] : null === (zv = vv.type.defaultProps) || void 0 === zv ? void 0 : zv[ev],
                Sv = "hide" in vv.props ? vv.props.hide : null === (Pv = vv.type.defaultProps) || void 0 === Pv ? void 0 : Pv.hide;
              return hv === cv && !Sv
            })), "number", lv), hv.defaultProps.allowDataOverflow), iv = Kz(Wv, iv, cv, Sv)), fP(fP({}, vv), {}, FP({}, cv, fP(fP({
              axisType: Sv
            }, hv.defaultProps), {}, {
              hide: !0,
              orientation: Tv()(nP, "".concat(Sv, ".").concat(Cv % 2), null),
              domain: iv,
              originalDomain: Gv,
              isCategorical: sv,
              layout: lv
            }))))
          }), {})
        }(vv, {
          Axis: Sv,
          graphicalItems: ev,
          axisType: hv,
          axisIdKey: Wv,
          stackGroups: gv,
          dataStartIndex: pv,
          dataEndIndex: dv
        })), av
      },
      IP = function(vv) {
        var zv = vv.children,
          Pv = vv.defaultShowTooltip,
          hv = (0, Yv.k)(zv, ov),
          Sv = 0,
          ev = 0;
        return vv.data && 0 !== vv.data.length && (ev = vv.data.length - 1), hv && hv.props && (hv.props.startIndex >= 0 && (Sv = hv.props.startIndex), hv.props.endIndex >= 0 && (ev = hv.props.endIndex)), {
          chartX: 0,
          chartY: 0,
          dataStartIndex: Sv,
          dataEndIndex: ev,
          activeTooltipIndex: -1,
          isTooltipActive: Boolean(Pv)
        }
      },
      QP = function(vv) {
        return "horizontal" === vv ? {
          numericAxisName: "yAxis",
          cateAxisName: "xAxis"
        } : "vertical" === vv ? {
          numericAxisName: "xAxis",
          cateAxisName: "yAxis"
        } : "centric" === vv ? {
          numericAxisName: "radiusAxis",
          cateAxisName: "angleAxis"
        } : {
          numericAxisName: "angleAxis",
          cateAxisName: "radiusAxis"
        }
      },
      ZP = function(vv, zv) {
        return "xAxis" === zv ? vv[zv].width : "yAxis" === zv ? vv[zv].height : void 0
      },
      AP = function(vv) {
        var zv = vv.chartName,
          Pv = vv.GraphicalChild,
          Sv = vv.defaultTooltipEventType,
          gv = void 0 === Sv ? "axis" : Sv,
          dv = vv.validateTooltipEventTypes,
          Nv = void 0 === dv ? ["axis"] : dv,
          lv = vv.axisComponents,
          Wv = vv.legendContent,
          av = vv.formatAxisMap,
          nv = vv.defaultProps,
          Ov = function(vv, zv) {
            var Pv = zv.graphicalItems,
              hv = zv.stackGroups,
              Sv = zv.offset,
              gv = zv.updateId,
              pv = zv.dataStartIndex,
              dv = zv.dataEndIndex,
              Nv = vv.barSize,
              Tv = vv.layout,
              Wv = vv.barGap,
              wv = vv.barCategoryGap,
              av = vv.maxBarSize,
              sv = QP(Tv),
              Cv = sv.numericAxisName,
              cv = sv.cateAxisName,
              Gv = function(vv) {
                return !(!vv || !vv.length) && vv.some((function(vv) {
                  var zv = (0, Yv.n)(vv && vv.type);
                  return zv && zv.indexOf("Bar") >= 0
                }))
              }(Pv),
              mv = [];
            return Pv.forEach((function(Pv, sv) {
              var jv = VP(vv.data, {
                  graphicalItems: [Pv],
                  dataStartIndex: pv,
                  dataEndIndex: dv
                }),
                fv = void 0 !== Pv.type.defaultProps ? fP(fP({}, Pv.type.defaultProps), Pv.props) : Pv.props,
                Fv = fv.dataKey,
                nv = fv.maxBarSize,
                Ov = fv["".concat(Cv, "Id")],
                Kv = fv["".concat(cv, "Id")],
                Vv = lv.reduce((function(vv, Pv) {
                  var hv = zv["".concat(Pv.axisType, "Map")],
                    Sv = fv["".concat(Pv.axisType, "Id")];
                  hv && hv[Sv] || "zAxis" === Pv.axisType || (0, iv.c)(!1);
                  var ev = hv[Sv];
                  return fP(fP({}, vv), {}, FP(FP({}, Pv.axisType, ev), "".concat(Pv.axisType, "Ticks"), (0, Dv.X)(ev)))
                }), {}),
                Uv = Vv[cv],
                Rv = Vv["".concat(cv, "Ticks")],
                xv = hv && hv[Ov] && hv[Ov].hasStack && (0, Dv.W)(Pv, hv[Ov].stackGroups),
                tv = (0, Yv.n)(Pv.type).indexOf("Bar") >= 0,
                qv = (0, Dv.o)(Uv, Rv),
                Iv = [],
                Qv = Gv && (0, Dv.s)({
                  barSize: Nv,
                  stackGroups: hv,
                  totalSize: ZP(Vv, cv)
                });
              if (tv) {
                var Zv, Av, Lv = ev()(nv) ? av : nv,
                  Hv = null !== (Zv = null !== (Av = (0, Dv.o)(Uv, Rv, !0)) && void 0 !== Av ? Av : Lv) && void 0 !== Zv ? Zv : 0;
                Iv = (0, Dv.r)({
                  barGap: Wv,
                  barCategoryGap: wv,
                  bandSize: Hv !== qv ? Hv : qv,
                  sizeList: Qv[Kv],
                  maxBarSize: Lv
                }), Hv !== qv && (Iv = Iv.map((function(vv) {
                  return fP(fP({}, vv), {}, {
                    position: fP(fP({}, vv.position), {}, {
                      offset: vv.position.offset - Hv / 2
                    })
                  })
                })))
              }
              var Mv = Pv && Pv.type && Pv.type.getComposedData;
              Mv && mv.push({
                props: fP(fP({}, Mv(fP(fP({}, Vv), {}, {
                  displayedData: jv,
                  props: vv,
                  dataKey: Fv,
                  item: Pv,
                  bandSize: qv,
                  barPosition: Iv,
                  offset: Sv,
                  stackedData: xv,
                  layout: Tv,
                  dataStartIndex: pv,
                  dataEndIndex: dv
                }))), {}, FP(FP(FP({
                  key: Pv.key || "item-".concat(sv)
                }, Cv, Vv[Cv]), cv, Vv[cv]), "animationId", gv)),
                childIndex: (0, Yv.w)(Pv, vv.children),
                item: Pv
              })
            })), mv
          },
          Vv = function(vv, hv) {
            var Sv = vv.props,
              ev = vv.dataStartIndex,
              gv = vv.dataEndIndex,
              pv = vv.updateId;
            if (!(0, Yv.D)({
                props: Sv
              })) return null;
            var dv = Sv.children,
              Nv = Sv.layout,
              Wv = Sv.stackOffset,
              sv = Sv.data,
              Cv = Sv.reverseStackOrder,
              iv = QP(Nv),
              cv = iv.numericAxisName,
              Gv = iv.cateAxisName,
              mv = (0, Yv.g)(dv, Pv),
              fv = (0, Dv.S)(sv, mv, "".concat(cv, "Id"), "".concat(Gv, "Id"), Wv, Cv),
              Fv = lv.reduce((function(vv, zv) {
                var Pv = "".concat(zv.axisType, "Map");
                return fP(fP({}, vv), {}, FP({}, Pv, qP(Sv, fP(fP({}, zv), {}, {
                  graphicalItems: mv,
                  stackGroups: zv.axisType === cv && fv,
                  dataStartIndex: ev,
                  dataEndIndex: gv
                }))))
              }), {}),
              nv = function(vv, zv) {
                var Pv = vv.props,
                  hv = vv.graphicalItems,
                  Sv = vv.xAxisMap,
                  ev = void 0 === Sv ? {} : Sv,
                  gv = vv.yAxisMap,
                  pv = void 0 === gv ? {} : gv,
                  dv = Pv.width,
                  Nv = Pv.height,
                  lv = Pv.children,
                  Wv = Pv.margin || {},
                  wv = (0, Yv.k)(lv, ov),
                  av = (0, Yv.k)(lv, jv.c),
                  sv = Object.keys(pv).reduce((function(vv, zv) {
                    var Pv = pv[zv],
                      hv = Pv.orientation;
                    return Pv.mirror || Pv.hide ? vv : fP(fP({}, vv), {}, FP({}, hv, vv[hv] + Pv.width))
                  }), {
                    left: Wv.left || 0,
                    right: Wv.right || 0
                  }),
                  Cv = Object.keys(ev).reduce((function(vv, zv) {
                    var Pv = ev[zv],
                      hv = Pv.orientation;
                    return Pv.mirror || Pv.hide ? vv : fP(fP({}, vv), {}, FP({}, hv, Tv()(vv, "".concat(hv)) + Pv.height))
                  }), {
                    top: Wv.top || 0,
                    bottom: Wv.bottom || 0
                  }),
                  iv = fP(fP({}, Cv), sv),
                  cv = iv.bottom;
                wv && (iv.bottom += wv.props.height || ov.defaultProps.height), av && zv && (iv = (0, Dv.c)(iv, hv, Pv, zv));
                var Gv = dv - iv.left - iv.right,
                  mv = Nv - iv.top - iv.bottom;
                return fP(fP({
                  brushBottom: cv
                }, iv), {}, {
                  width: Math.max(Gv, 0),
                  height: Math.max(mv, 0)
                })
              }(fP(fP({}, Fv), {}, {
                props: Sv,
                graphicalItems: mv
              }), null === hv || void 0 === hv ? void 0 : hv.legendBBox);
            Object.keys(Fv).forEach((function(vv) {
              Fv[vv] = av(Sv, Fv[vv], nv, vv.replace("Map", ""), zv)
            }));
            var Vv = function(vv) {
                var zv = (0, Kv.e)(vv),
                  Pv = (0, Dv.X)(zv, !1, !0);
                return {
                  tooltipTicks: Pv,
                  orderedTooltipTicks: wv()(Pv, (function(vv) {
                    return vv.coordinate
                  })),
                  tooltipAxis: zv,
                  tooltipAxisBandSize: (0, Dv.o)(zv, Pv)
                }
              }(Fv["".concat(Gv, "Map")]),
              Uv = Ov(Sv, fP(fP({}, Fv), {}, {
                dataStartIndex: ev,
                dataEndIndex: gv,
                updateId: pv,
                graphicalItems: mv,
                stackGroups: fv,
                offset: nv
              }));
            return fP(fP({
              formattedGraphicalItems: Uv,
              graphicalItems: mv,
              offset: nv,
              stackGroups: fv
            }, Vv), Fv)
          },
          Uv = function(vv) {
            function Pv(vv) {
              var Sv, gv, dv;
              return function(vv, zv) {
                if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
              }(this, Pv), FP(dv = aP(this, Pv, [vv]), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), FP(dv, "accessibilityManager", new Lz), FP(dv, "handleLegendBBoxUpdate", (function(vv) {
                if (vv) {
                  var zv = dv.state,
                    Pv = zv.dataStartIndex,
                    hv = zv.dataEndIndex,
                    Sv = zv.updateId;
                  dv.setState(fP({
                    legendBBox: vv
                  }, Vv({
                    props: dv.props,
                    dataStartIndex: Pv,
                    dataEndIndex: hv,
                    updateId: Sv
                  }, fP(fP({}, dv.state), {}, {
                    legendBBox: vv
                  }))))
                }
              })), FP(dv, "handleReceiveSyncEvent", (function(vv, zv, Pv) {
                if (dv.props.syncId === vv) {
                  if (Pv === dv.eventEmitterSymbol && "function" !== typeof dv.props.syncMethod) return;
                  dv.applySyncEvent(zv)
                }
              })), FP(dv, "handleBrushChange", (function(vv) {
                var zv = vv.startIndex,
                  Pv = vv.endIndex;
                if (zv !== dv.state.dataStartIndex || Pv !== dv.state.dataEndIndex) {
                  var hv = dv.state.updateId;
                  dv.setState((function() {
                    return fP({
                      dataStartIndex: zv,
                      dataEndIndex: Pv
                    }, Vv({
                      props: dv.props,
                      dataStartIndex: zv,
                      dataEndIndex: Pv,
                      updateId: hv
                    }, dv.state))
                  })), dv.triggerSyncEvent({
                    dataStartIndex: zv,
                    dataEndIndex: Pv
                  })
                }
              })), FP(dv, "handleMouseEnter", (function(vv) {
                var zv = dv.getMouseInfo(vv);
                if (zv) {
                  var Pv = fP(fP({}, zv), {}, {
                    isTooltipActive: !0
                  });
                  dv.setState(Pv), dv.triggerSyncEvent(Pv);
                  var hv = dv.props.onMouseEnter;
                  pv()(hv) && hv(Pv, vv)
                }
              })), FP(dv, "triggeredAfterMouseMove", (function(vv) {
                var zv = dv.getMouseInfo(vv),
                  Pv = zv ? fP(fP({}, zv), {}, {
                    isTooltipActive: !0
                  }) : {
                    isTooltipActive: !1
                  };
                dv.setState(Pv), dv.triggerSyncEvent(Pv);
                var hv = dv.props.onMouseMove;
                pv()(hv) && hv(Pv, vv)
              })), FP(dv, "handleItemMouseEnter", (function(vv) {
                dv.setState((function() {
                  return {
                    isTooltipActive: !0,
                    activeItem: vv,
                    activePayload: vv.tooltipPayload,
                    activeCoordinate: vv.tooltipPosition || {
                      x: vv.cx,
                      y: vv.cy
                    }
                  }
                }))
              })), FP(dv, "handleItemMouseLeave", (function() {
                dv.setState((function() {
                  return {
                    isTooltipActive: !1
                  }
                }))
              })), FP(dv, "handleMouseMove", (function(vv) {
                vv.persist(), dv.throttleTriggeredAfterMouseMove(vv)
              })), FP(dv, "handleMouseLeave", (function(vv) {
                dv.throttleTriggeredAfterMouseMove.cancel();
                var zv = {
                  isTooltipActive: !1
                };
                dv.setState(zv), dv.triggerSyncEvent(zv);
                var Pv = dv.props.onMouseLeave;
                pv()(Pv) && Pv(zv, vv)
              })), FP(dv, "handleOuterEvent", (function(vv) {
                var zv, Pv = (0, Yv.o)(vv),
                  hv = Tv()(dv.props, "".concat(Pv));
                Pv && pv()(hv) && hv(null !== (zv = /.*touch.*/i.test(Pv) ? dv.getMouseInfo(vv.changedTouches[0]) : dv.getMouseInfo(vv)) && void 0 !== zv ? zv : {}, vv)
              })), FP(dv, "handleClick", (function(vv) {
                var zv = dv.getMouseInfo(vv);
                if (zv) {
                  var Pv = fP(fP({}, zv), {}, {
                    isTooltipActive: !0
                  });
                  dv.setState(Pv), dv.triggerSyncEvent(Pv);
                  var hv = dv.props.onClick;
                  pv()(hv) && hv(Pv, vv)
                }
              })), FP(dv, "handleMouseDown", (function(vv) {
                var zv = dv.props.onMouseDown;
                pv()(zv) && zv(dv.getMouseInfo(vv), vv)
              })), FP(dv, "handleMouseUp", (function(vv) {
                var zv = dv.props.onMouseUp;
                pv()(zv) && zv(dv.getMouseInfo(vv), vv)
              })), FP(dv, "handleTouchMove", (function(vv) {
                null != vv.changedTouches && vv.changedTouches.length > 0 && dv.throttleTriggeredAfterMouseMove(vv.changedTouches[0])
              })), FP(dv, "handleTouchStart", (function(vv) {
                null != vv.changedTouches && vv.changedTouches.length > 0 && dv.handleMouseDown(vv.changedTouches[0])
              })), FP(dv, "handleTouchEnd", (function(vv) {
                null != vv.changedTouches && vv.changedTouches.length > 0 && dv.handleMouseUp(vv.changedTouches[0])
              })), FP(dv, "handleDoubleClick", (function(vv) {
                var zv = dv.props.onDoubleClick;
                pv()(zv) && zv(dv.getMouseInfo(vv), vv)
              })), FP(dv, "handleContextMenu", (function(vv) {
                var zv = dv.props.onContextMenu;
                pv()(zv) && zv(dv.getMouseInfo(vv), vv)
              })), FP(dv, "triggerSyncEvent", (function(vv) {
                void 0 !== dv.props.syncId && xz.emit(tz, dv.props.syncId, vv, dv.eventEmitterSymbol)
              })), FP(dv, "applySyncEvent", (function(vv) {
                var zv = dv.props,
                  Pv = zv.layout,
                  hv = zv.syncMethod,
                  Sv = dv.state.updateId,
                  ev = vv.dataStartIndex,
                  gv = vv.dataEndIndex;
                if (void 0 !== vv.dataStartIndex || void 0 !== vv.dataEndIndex) dv.setState(fP({
                  dataStartIndex: ev,
                  dataEndIndex: gv
                }, Vv({
                  props: dv.props,
                  dataStartIndex: ev,
                  dataEndIndex: gv,
                  updateId: Sv
                }, dv.state)));
                else if (void 0 !== vv.activeTooltipIndex) {
                  var pv = vv.chartX,
                    Nv = vv.chartY,
                    lv = vv.activeTooltipIndex,
                    Tv = dv.state,
                    Wv = Tv.offset,
                    wv = Tv.tooltipTicks;
                  if (!Wv) return;
                  if ("function" === typeof hv) lv = hv(wv, vv);
                  else if ("value" === hv) {
                    lv = -1;
                    for (var av = 0; av < wv.length; av++)
                      if (wv[av].value === vv.activeLabel) {
                        lv = av;
                        break
                      }
                  }
                  var sv = fP(fP({}, Wv), {}, {
                      x: Wv.left,
                      y: Wv.top
                    }),
                    Cv = Math.min(pv, sv.x + sv.width),
                    iv = Math.min(Nv, sv.y + sv.height),
                    cv = wv[lv] && wv[lv].value,
                    Gv = RP(dv.state, dv.props.data, lv),
                    mv = wv[lv] ? {
                      x: "horizontal" === Pv ? wv[lv].coordinate : Cv,
                      y: "horizontal" === Pv ? iv : wv[lv].coordinate
                    } : DP;
                  dv.setState(fP(fP({}, vv), {}, {
                    activeLabel: cv,
                    activeCoordinate: mv,
                    activePayload: Gv,
                    activeTooltipIndex: lv
                  }))
                } else dv.setState(vv)
              })), FP(dv, "renderCursor", (function(vv) {
                var Pv, Sv = dv.state,
                  ev = Sv.isTooltipActive,
                  gv = Sv.activeCoordinate,
                  pv = Sv.activePayload,
                  Nv = Sv.offset,
                  lv = Sv.activeTooltipIndex,
                  Tv = Sv.tooltipAxisBandSize,
                  Wv = dv.getTooltipEventType(),
                  wv = null !== (Pv = vv.props.active) && void 0 !== Pv ? Pv : ev,
                  av = dv.props.layout,
                  sv = vv.key || "_recharts-cursor";
                return hv.createElement(eP, {
                  key: sv,
                  activeCoordinate: gv,
                  activePayload: pv,
                  activeTooltipIndex: lv,
                  chartName: zv,
                  element: vv,
                  isActive: wv,
                  layout: av,
                  offset: Nv,
                  tooltipAxisBandSize: Tv,
                  tooltipEventType: Wv
                })
              })), FP(dv, "renderPolarAxis", (function(vv, zv, Pv) {
                var Sv = Tv()(vv, "type.axisType"),
                  ev = Tv()(dv.state, "".concat(Sv, "Map")),
                  gv = vv.type.defaultProps,
                  pv = void 0 !== gv ? fP(fP({}, gv), vv.props) : vv.props,
                  Nv = ev && ev[pv["".concat(Sv, "Id")]];
                return (0, hv.cloneElement)(vv, fP(fP({}, Nv), {}, {
                  className: (0, Cv.b)(Sv, Nv.className),
                  key: vv.key || "".concat(zv, "-").concat(Pv),
                  ticks: (0, Dv.X)(Nv, !0)
                }))
              })), FP(dv, "renderPolarGrid", (function(vv) {
                var zv = vv.props,
                  Pv = zv.radialLines,
                  Sv = zv.polarAngles,
                  ev = zv.polarRadius,
                  gv = dv.state,
                  pv = gv.radiusAxisMap,
                  Nv = gv.angleAxisMap,
                  lv = (0, Kv.e)(pv),
                  Tv = (0, Kv.e)(Nv),
                  Wv = Tv.cx,
                  wv = Tv.cy,
                  av = Tv.innerRadius,
                  sv = Tv.outerRadius;
                return (0, hv.cloneElement)(vv, {
                  polarAngles: Array.isArray(Sv) ? Sv : (0, Dv.X)(Tv, !0).map((function(vv) {
                    return vv.coordinate
                  })),
                  polarRadius: Array.isArray(ev) ? ev : (0, Dv.X)(lv, !0).map((function(vv) {
                    return vv.coordinate
                  })),
                  cx: Wv,
                  cy: wv,
                  innerRadius: av,
                  outerRadius: sv,
                  key: vv.key || "polar-grid",
                  radialLines: Pv
                })
              })), FP(dv, "renderLegend", (function() {
                var vv = dv.state.formattedGraphicalItems,
                  zv = dv.props,
                  Pv = zv.children,
                  Sv = zv.width,
                  ev = zv.height,
                  gv = dv.props.margin || {},
                  pv = Sv - (gv.left || 0) - (gv.right || 0),
                  Nv = (0, rv.b)({
                    children: Pv,
                    formattedGraphicalItems: vv,
                    legendWidth: pv,
                    legendContent: Wv
                  });
                if (!Nv) return null;
                var lv = Nv.item,
                  Tv = WP(Nv, pP);
                return (0, hv.cloneElement)(lv, fP(fP({}, Tv), {}, {
                  chartWidth: Sv,
                  chartHeight: ev,
                  margin: gv,
                  onBBoxUpdate: dv.handleLegendBBoxUpdate
                }))
              })), FP(dv, "renderTooltip", (function() {
                var vv, zv = dv.props,
                  Pv = zv.children,
                  Sv = zv.accessibilityLayer,
                  ev = (0, Yv.k)(Pv, mv.c);
                if (!ev) return null;
                var gv = dv.state,
                  pv = gv.isTooltipActive,
                  Nv = gv.activeCoordinate,
                  lv = gv.activePayload,
                  Tv = gv.activeLabel,
                  Wv = gv.offset,
                  wv = null !== (vv = ev.props.active) && void 0 !== vv ? vv : pv;
                return (0, hv.cloneElement)(ev, {
                  viewBox: fP(fP({}, Wv), {}, {
                    x: Wv.left,
                    y: Wv.top
                  }),
                  active: wv,
                  label: Tv,
                  payload: wv ? lv : [],
                  coordinate: Nv,
                  accessibilityLayer: Sv
                })
              })), FP(dv, "renderBrush", (function(vv) {
                var zv = dv.props,
                  Pv = zv.margin,
                  Sv = zv.data,
                  ev = dv.state,
                  gv = ev.offset,
                  pv = ev.dataStartIndex,
                  Nv = ev.dataEndIndex,
                  lv = ev.updateId;
                return (0, hv.cloneElement)(vv, {
                  key: vv.key || "_recharts-brush",
                  onChange: (0, Dv.h)(dv.handleBrushChange, vv.props.onChange),
                  data: Sv,
                  x: (0, Kv.t)(vv.props.x) ? vv.props.x : gv.left,
                  y: (0, Kv.t)(vv.props.y) ? vv.props.y : gv.top + gv.height + gv.brushBottom - (Pv.bottom || 0),
                  width: (0, Kv.t)(vv.props.width) ? vv.props.width : gv.width,
                  startIndex: pv,
                  endIndex: Nv,
                  updateId: "brush-".concat(lv)
                })
              })), FP(dv, "renderReferenceElement", (function(vv, zv, Pv) {
                if (!vv) return null;
                var Sv = dv.clipPathId,
                  ev = dv.state,
                  gv = ev.xAxisMap,
                  pv = ev.yAxisMap,
                  Nv = ev.offset,
                  lv = vv.type.defaultProps || {},
                  Tv = vv.props,
                  Wv = Tv.xAxisId,
                  wv = void 0 === Wv ? lv.xAxisId : Wv,
                  av = Tv.yAxisId,
                  sv = void 0 === av ? lv.yAxisId : av;
                return (0, hv.cloneElement)(vv, {
                  key: vv.key || "".concat(zv, "-").concat(Pv),
                  xAxis: gv[wv],
                  yAxis: pv[sv],
                  viewBox: {
                    x: Nv.left,
                    y: Nv.top,
                    width: Nv.width,
                    height: Nv.height
                  },
                  clipPathId: Sv
                })
              })), FP(dv, "renderActivePoints", (function(vv) {
                var zv = vv.item,
                  hv = vv.activePoint,
                  Sv = vv.basePoint,
                  ev = vv.childIndex,
                  gv = vv.isRange,
                  pv = [],
                  dv = zv.props.key,
                  Nv = void 0 !== zv.item.type.defaultProps ? fP(fP({}, zv.item.type.defaultProps), zv.item.props) : zv.item.props,
                  lv = Nv.activeDot,
                  Tv = fP(fP({
                    index: ev,
                    dataKey: Nv.dataKey,
                    cx: hv.x,
                    cy: hv.y,
                    r: 4,
                    fill: (0, Dv.O)(zv.item),
                    strokeWidth: 2,
                    stroke: "#fff",
                    payload: hv.payload,
                    value: hv.value
                  }, (0, Yv.e)(lv, !1)), (0, qz.g)(lv));
                return pv.push(Pv.renderActiveDot(lv, Tv, "".concat(dv, "-activePoint-").concat(ev))), Sv ? pv.push(Pv.renderActiveDot(lv, fP(fP({}, Tv), {}, {
                  cx: Sv.x,
                  cy: Sv.y
                }), "".concat(dv, "-basePoint-").concat(ev))) : gv && pv.push(null), pv
              })), FP(dv, "renderGraphicChild", (function(vv, zv, Pv) {
                var Sv = dv.filterFormatItem(vv, zv, Pv);
                if (!Sv) return null;
                var gv = dv.getTooltipEventType(),
                  pv = dv.state,
                  Nv = pv.isTooltipActive,
                  lv = pv.tooltipAxis,
                  Tv = pv.activeTooltipIndex,
                  Wv = pv.activeLabel,
                  wv = dv.props.children,
                  av = (0, Yv.k)(wv, mv.c),
                  sv = Sv.props,
                  Cv = sv.points,
                  iv = sv.isRange,
                  cv = sv.baseLine,
                  Gv = void 0 !== Sv.item.type.defaultProps ? fP(fP({}, Sv.item.type.defaultProps), Sv.item.props) : Sv.item.props,
                  jv = Gv.activeDot,
                  fv = Gv.hide,
                  Fv = Gv.activeBar,
                  nv = Gv.activeShape,
                  Ov = Boolean(!fv && Nv && av && (jv || Fv || nv)),
                  Vv = {};
                "axis" !== gv && av && "click" === av.props.trigger ? Vv = {
                  onClick: (0, Dv.h)(dv.handleItemMouseEnter, vv.props.onClick)
                } : "axis" !== gv && (Vv = {
                  onMouseLeave: (0, Dv.h)(dv.handleItemMouseLeave, vv.props.onMouseLeave),
                  onMouseEnter: (0, Dv.h)(dv.handleItemMouseEnter, vv.props.onMouseEnter)
                });
                var Uv = (0, hv.cloneElement)(vv, fP(fP({}, Sv.props), Vv));
                if (Ov) {
                  if (!(Tv >= 0)) {
                    var Rv, xv = (null !== (Rv = dv.getItemByXY(dv.state.activeCoordinate)) && void 0 !== Rv ? Rv : {
                        graphicalItem: Uv
                      }).graphicalItem,
                      tv = xv.item,
                      qv = void 0 === tv ? vv : tv,
                      Iv = xv.childIndex,
                      Qv = fP(fP(fP({}, Sv.props), Vv), {}, {
                        activeIndex: Iv
                      });
                    return [(0, hv.cloneElement)(qv, Qv), null, null]
                  }
                  var Zv, Av;
                  if (lv.dataKey && !lv.allowDuplicatedCategory) {
                    var Lv = "function" === typeof lv.dataKey ? function(vv) {
                      return "function" === typeof lv.dataKey ? lv.dataKey(vv.payload) : null
                    } : "payload.".concat(lv.dataKey.toString());
                    Zv = (0, Kv.d)(Cv, Lv, Wv), Av = iv && cv && (0, Kv.d)(cv, Lv, Wv)
                  } else Zv = null === Cv || void 0 === Cv ? void 0 : Cv[Tv], Av = iv && cv && cv[Tv];
                  if (nv || Fv) {
                    var Hv = void 0 !== vv.props.activeIndex ? vv.props.activeIndex : Tv;
                    return [(0, hv.cloneElement)(vv, fP(fP(fP({}, Sv.props), Vv), {}, {
                      activeIndex: Hv
                    })), null, null]
                  }
                  if (!ev()(Zv)) return [Uv].concat(cP(dv.renderActivePoints({
                    item: Sv,
                    activePoint: Zv,
                    basePoint: Av,
                    childIndex: Tv,
                    isRange: iv
                  })))
                }
                return iv ? [Uv, null, null] : [Uv, null]
              })), FP(dv, "renderCustomized", (function(vv, zv, Pv) {
                return (0, hv.cloneElement)(vv, fP(fP({
                  key: "recharts-customized-".concat(Pv)
                }, dv.props), dv.state))
              })), FP(dv, "renderMap", {
                CartesianGrid: {
                  handler: KP,
                  once: !0
                },
                ReferenceArea: {
                  handler: dv.renderReferenceElement
                },
                ReferenceLine: {
                  handler: KP
                },
                ReferenceDot: {
                  handler: dv.renderReferenceElement
                },
                XAxis: {
                  handler: KP
                },
                YAxis: {
                  handler: KP
                },
                Brush: {
                  handler: dv.renderBrush,
                  once: !0
                },
                Bar: {
                  handler: dv.renderGraphicChild
                },
                Line: {
                  handler: dv.renderGraphicChild
                },
                Area: {
                  handler: dv.renderGraphicChild
                },
                Radar: {
                  handler: dv.renderGraphicChild
                },
                RadialBar: {
                  handler: dv.renderGraphicChild
                },
                Scatter: {
                  handler: dv.renderGraphicChild
                },
                Pie: {
                  handler: dv.renderGraphicChild
                },
                Funnel: {
                  handler: dv.renderGraphicChild
                },
                Tooltip: {
                  handler: dv.renderCursor,
                  once: !0
                },
                PolarGrid: {
                  handler: dv.renderPolarGrid,
                  once: !0
                },
                PolarAngleAxis: {
                  handler: dv.renderPolarAxis
                },
                PolarRadiusAxis: {
                  handler: dv.renderPolarAxis
                },
                Customized: {
                  handler: dv.renderCustomized
                }
              }), dv.clipPathId = "".concat(null !== (Sv = vv.id) && void 0 !== Sv ? Sv : (0, Kv.z)("recharts"), "-clip"), dv.throttleTriggeredAfterMouseMove = sv()(dv.triggeredAfterMouseMove, null !== (gv = vv.throttleDelay) && void 0 !== gv ? gv : 1e3 / 60), dv.state = {}, dv
            }
            return function(vv, zv) {
              if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
              vv.prototype = Object.create(zv && zv.prototype, {
                constructor: {
                  value: vv,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(vv, "prototype", {
                writable: !1
              }), zv && iP(vv, zv)
            }(Pv, vv), Sv = Pv, dv = [{
              key: "componentDidMount",
              value: function() {
                var vv, zv;
                this.addListener(), this.accessibilityManager.setDetails({
                  container: this.container,
                  offset: {
                    left: null !== (vv = this.props.margin.left) && void 0 !== vv ? vv : 0,
                    top: null !== (zv = this.props.margin.top) && void 0 !== zv ? zv : 0
                  },
                  coordinateList: this.state.tooltipTicks,
                  mouseHandlerCallback: this.triggeredAfterMouseMove,
                  layout: this.props.layout
                }), this.displayDefaultTooltip()
              }
            }, {
              key: "displayDefaultTooltip",
              value: function() {
                var vv = this.props,
                  zv = vv.children,
                  Pv = vv.data,
                  hv = vv.height,
                  Sv = vv.layout,
                  ev = (0, Yv.k)(zv, mv.c);
                if (ev) {
                  var gv = ev.props.defaultIndex;
                  if (!("number" !== typeof gv || gv < 0 || gv > this.state.tooltipTicks.length - 1)) {
                    var pv = this.state.tooltipTicks[gv] && this.state.tooltipTicks[gv].value,
                      dv = RP(this.state, Pv, gv, pv),
                      Nv = this.state.tooltipTicks[gv].coordinate,
                      lv = (this.state.offset.top + hv) / 2,
                      Tv = "horizontal" === Sv ? {
                        x: Nv,
                        y: lv
                      } : {
                        y: Nv,
                        x: lv
                      },
                      Wv = this.state.formattedGraphicalItems.find((function(vv) {
                        return "Scatter" === vv.item.type.name
                      }));
                    Wv && (Tv = fP(fP({}, Tv), Wv.props.points[gv].tooltipPosition), dv = Wv.props.points[gv].tooltipPayload);
                    var wv = {
                      activeTooltipIndex: gv,
                      isTooltipActive: !0,
                      activeLabel: pv,
                      activePayload: dv,
                      activeCoordinate: Tv
                    };
                    this.setState(wv), this.renderCursor(ev), this.accessibilityManager.setIndex(gv)
                  }
                }
              }
            }, {
              key: "getSnapshotBeforeUpdate",
              value: function(vv, zv) {
                return this.props.accessibilityLayer ? (this.state.tooltipTicks !== zv.tooltipTicks && this.accessibilityManager.setDetails({
                  coordinateList: this.state.tooltipTicks
                }), this.props.layout !== vv.layout && this.accessibilityManager.setDetails({
                  layout: this.props.layout
                }), this.props.margin !== vv.margin && this.accessibilityManager.setDetails({
                  offset: {
                    left: null !== (Pv = this.props.margin.left) && void 0 !== Pv ? Pv : 0,
                    top: null !== (hv = this.props.margin.top) && void 0 !== hv ? hv : 0
                  }
                }), null) : null;
                var Pv, hv
              }
            }, {
              key: "componentDidUpdate",
              value: function(vv) {
                (0, Yv.t)([(0, Yv.k)(vv.children, mv.c)], [(0, Yv.k)(this.props.children, mv.c)]) || this.displayDefaultTooltip()
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel()
              }
            }, {
              key: "getTooltipEventType",
              value: function() {
                var vv = (0, Yv.k)(this.props.children, mv.c);
                if (vv && "boolean" === typeof vv.props.shared) {
                  var zv = vv.props.shared ? "axis" : "item";
                  return Nv.indexOf(zv) >= 0 ? zv : gv
                }
                return gv
              }
            }, {
              key: "getMouseInfo",
              value: function(vv) {
                if (!this.container) return null;
                var zv = this.container,
                  Pv = zv.getBoundingClientRect(),
                  hv = (0, bv.d)(Pv),
                  Sv = {
                    chartX: Math.round(vv.pageX - hv.left),
                    chartY: Math.round(vv.pageY - hv.top)
                  },
                  ev = Pv.width / zv.offsetWidth || 1,
                  gv = this.inRange(Sv.chartX, Sv.chartY, ev);
                if (!gv) return null;
                var pv = this.state,
                  dv = pv.xAxisMap,
                  Nv = pv.yAxisMap,
                  lv = this.getTooltipEventType(),
                  Tv = xP(this.state, this.props.data, this.props.layout, gv);
                if ("axis" !== lv && dv && Nv) {
                  var Wv = (0, Kv.e)(dv).scale,
                    wv = (0, Kv.e)(Nv).scale,
                    av = Wv && Wv.invert ? Wv.invert(Sv.chartX) : null,
                    sv = wv && wv.invert ? wv.invert(Sv.chartY) : null;
                  return fP(fP({}, Sv), {}, {
                    xValue: av,
                    yValue: sv
                  }, Tv)
                }
                return Tv ? fP(fP({}, Sv), Tv) : null
              }
            }, {
              key: "inRange",
              value: function(vv, zv) {
                var Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                  hv = this.props.layout,
                  Sv = vv / Pv,
                  ev = zv / Pv;
                if ("horizontal" === hv || "vertical" === hv) {
                  var gv = this.state.offset;
                  return Sv >= gv.left && Sv <= gv.left + gv.width && ev >= gv.top && ev <= gv.top + gv.height ? {
                    x: Sv,
                    y: ev
                  } : null
                }
                var pv = this.state,
                  dv = pv.angleAxisMap,
                  Nv = pv.radiusAxisMap;
                if (dv && Nv) {
                  var lv = (0, Kv.e)(dv);
                  return (0, Vz.g)({
                    x: Sv,
                    y: ev
                  }, lv)
                }
                return null
              }
            }, {
              key: "parseEventsOfWrapper",
              value: function() {
                var vv = this.props.children,
                  zv = this.getTooltipEventType(),
                  Pv = (0, Yv.k)(vv, mv.c),
                  hv = {};
                return Pv && "axis" === zv && (hv = "click" === Pv.props.trigger ? {
                  onClick: this.handleClick
                } : {
                  onMouseEnter: this.handleMouseEnter,
                  onDoubleClick: this.handleDoubleClick,
                  onMouseMove: this.handleMouseMove,
                  onMouseLeave: this.handleMouseLeave,
                  onTouchMove: this.handleTouchMove,
                  onTouchStart: this.handleTouchStart,
                  onTouchEnd: this.handleTouchEnd,
                  onContextMenu: this.handleContextMenu
                }), fP(fP({}, (0, qz.g)(this.props, this.handleOuterEvent)), hv)
              }
            }, {
              key: "addListener",
              value: function() {
                xz.on(tz, this.handleReceiveSyncEvent)
              }
            }, {
              key: "removeListener",
              value: function() {
                xz.removeListener(tz, this.handleReceiveSyncEvent)
              }
            }, {
              key: "filterFormatItem",
              value: function(vv, zv, Pv) {
                for (var hv = this.state.formattedGraphicalItems, Sv = 0, ev = hv.length; Sv < ev; Sv++) {
                  var gv = hv[Sv];
                  if (gv.item === vv || gv.props.key === vv.key || zv === (0, Yv.n)(gv.item.type) && Pv === gv.childIndex) return gv
                }
                return null
              }
            }, {
              key: "renderClipPath",
              value: function() {
                var vv = this.clipPathId,
                  zv = this.state.offset,
                  Pv = zv.left,
                  Sv = zv.top,
                  ev = zv.height,
                  gv = zv.width;
                return hv.createElement("defs", null, hv.createElement("clipPath", {
                  id: vv
                }, hv.createElement("rect", {
                  x: Pv,
                  y: Sv,
                  height: ev,
                  width: gv
                })))
              }
            }, {
              key: "getXScales",
              value: function() {
                var vv = this.state.xAxisMap;
                return vv ? Object.entries(vv).reduce((function(vv, zv) {
                  var Pv = TP(zv, 2),
                    hv = Pv[0],
                    Sv = Pv[1];
                  return fP(fP({}, vv), {}, FP({}, hv, Sv.scale))
                }), {}) : null
              }
            }, {
              key: "getYScales",
              value: function() {
                var vv = this.state.yAxisMap;
                return vv ? Object.entries(vv).reduce((function(vv, zv) {
                  var Pv = TP(zv, 2),
                    hv = Pv[0],
                    Sv = Pv[1];
                  return fP(fP({}, vv), {}, FP({}, hv, Sv.scale))
                }), {}) : null
              }
            }, {
              key: "getXScaleByAxisId",
              value: function(vv) {
                var zv;
                return null === (zv = this.state.xAxisMap) || void 0 === zv || null === (zv = zv[vv]) || void 0 === zv ? void 0 : zv.scale
              }
            }, {
              key: "getYScaleByAxisId",
              value: function(vv) {
                var zv;
                return null === (zv = this.state.yAxisMap) || void 0 === zv || null === (zv = zv[vv]) || void 0 === zv ? void 0 : zv.scale
              }
            }, {
              key: "getItemByXY",
              value: function(vv) {
                var zv = this.state,
                  Pv = zv.formattedGraphicalItems,
                  hv = zv.activeItem;
                if (Pv && Pv.length)
                  for (var Sv = 0, ev = Pv.length; Sv < ev; Sv++) {
                    var gv = Pv[Sv],
                      pv = gv.props,
                      dv = gv.item,
                      Nv = void 0 !== dv.type.defaultProps ? fP(fP({}, dv.type.defaultProps), dv.props) : dv.props,
                      lv = (0, Yv.n)(dv.type);
                    if ("Bar" === lv) {
                      var Tv = (pv.data || []).find((function(zv) {
                        return (0, Fv.f)(vv, zv)
                      }));
                      if (Tv) return {
                        graphicalItem: gv,
                        payload: Tv
                      }
                    } else if ("RadialBar" === lv) {
                      var Wv = (pv.data || []).find((function(zv) {
                        return (0, Vz.g)(vv, zv)
                      }));
                      if (Wv) return {
                        graphicalItem: gv,
                        payload: Wv
                      }
                    } else if ((0, Hz.j)(gv, hv) || (0, Hz.n)(gv, hv) || (0, Hz.q)(gv, hv)) {
                      var wv = (0, Hz.h)({
                          graphicalItem: gv,
                          activeTooltipItem: hv,
                          itemData: Nv.data
                        }),
                        av = void 0 === Nv.activeIndex ? wv : Nv.activeIndex;
                      return {
                        graphicalItem: fP(fP({}, gv), {}, {
                          childIndex: av
                        }),
                        payload: (0, Hz.q)(gv, hv) ? Nv.data[wv] : gv.props.data[wv]
                      }
                    }
                  }
                return null
              }
            }, {
              key: "render",
              value: function() {
                var vv = this;
                if (!(0, Yv.D)(this)) return null;
                var zv, Pv, Sv = this.props,
                  ev = Sv.children,
                  gv = Sv.className,
                  pv = Sv.width,
                  dv = Sv.height,
                  Nv = Sv.style,
                  lv = Sv.compact,
                  Tv = Sv.title,
                  Wv = Sv.desc,
                  wv = WP(Sv, dP),
                  av = (0, Yv.e)(wv, !1);
                if (lv) return hv.createElement(gP.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, hv.createElement(cv.c, lP({}, av, {
                  width: pv,
                  height: dv,
                  title: Tv,
                  desc: Wv
                }), this.renderClipPath(), (0, Yv.z)(ev, this.renderMap)));
                this.props.accessibilityLayer && (av.tabIndex = null !== (zv = this.props.tabIndex) && void 0 !== zv ? zv : 0, av.role = null !== (Pv = this.props.role) && void 0 !== Pv ? Pv : "application", av.onKeyDown = function(zv) {
                  vv.accessibilityManager.keyboardEvent(zv)
                }, av.onFocus = function() {
                  vv.accessibilityManager.focus()
                });
                var sv = this.parseEventsOfWrapper();
                return hv.createElement(gP.c, {
                  state: this.state,
                  width: this.props.width,
                  height: this.props.height,
                  clipPathId: this.clipPathId
                }, hv.createElement("div", lP({
                  className: (0, Cv.b)("recharts-wrapper", gv),
                  style: fP({
                    position: "relative",
                    cursor: "default",
                    width: pv,
                    height: dv
                  }, Nv)
                }, sv, {
                  ref: function(zv) {
                    vv.container = zv
                  }
                }), hv.createElement(cv.c, lP({}, av, {
                  width: pv,
                  height: dv,
                  title: Tv,
                  desc: Wv,
                  style: OP
                }), this.renderClipPath(), (0, Yv.z)(ev, this.renderMap)), this.renderLegend(), this.renderTooltip()))
              }
            }], dv && wP(Sv.prototype, dv), lv && wP(Sv, lv), Object.defineProperty(Sv, "prototype", {
              writable: !1
            }), Sv;
            var Sv, dv, lv
          }(hv.Component);
        FP(Uv, "displayName", zv), FP(Uv, "defaultProps", fP({
          layout: "horizontal",
          stackOffset: "none",
          barCategoryGap: "10%",
          barGap: 4,
          margin: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
          },
          reverseStackOrder: !1,
          syncMethod: "index"
        }, nv)), FP(Uv, "getDerivedStateFromProps", (function(vv, zv) {
          var Pv = vv.dataKey,
            hv = vv.data,
            Sv = vv.children,
            gv = vv.width,
            pv = vv.height,
            dv = vv.layout,
            Nv = vv.stackOffset,
            lv = vv.margin,
            Tv = zv.dataStartIndex,
            Wv = zv.dataEndIndex;
          if (void 0 === zv.updateId) {
            var wv = IP(vv);
            return fP(fP(fP({}, wv), {}, {
              updateId: 0
            }, Vv(fP(fP({
              props: vv
            }, wv), {}, {
              updateId: 0
            }), zv)), {}, {
              prevDataKey: Pv,
              prevData: hv,
              prevWidth: gv,
              prevHeight: pv,
              prevLayout: dv,
              prevStackOffset: Nv,
              prevMargin: lv,
              prevChildren: Sv
            })
          }
          if (Pv !== zv.prevDataKey || hv !== zv.prevData || gv !== zv.prevWidth || pv !== zv.prevHeight || dv !== zv.prevLayout || Nv !== zv.prevStackOffset || !(0, Uz.e)(lv, zv.prevMargin)) {
            var av = IP(vv),
              sv = {
                chartX: zv.chartX,
                chartY: zv.chartY,
                isTooltipActive: zv.isTooltipActive
              },
              Cv = fP(fP({}, xP(zv, hv, dv)), {}, {
                updateId: zv.updateId + 1
              }),
              iv = fP(fP(fP({}, av), sv), Cv);
            return fP(fP(fP({}, iv), Vv(fP({
              props: vv
            }, iv), zv)), {}, {
              prevDataKey: Pv,
              prevData: hv,
              prevWidth: gv,
              prevHeight: pv,
              prevLayout: dv,
              prevStackOffset: Nv,
              prevMargin: lv,
              prevChildren: Sv
            })
          }
          if (!(0, Yv.t)(Sv, zv.prevChildren)) {
            var cv, Gv, mv, jv, fv = (0, Yv.k)(Sv, ov),
              Fv = fv && null !== (cv = null === (Gv = fv.props) || void 0 === Gv ? void 0 : Gv.startIndex) && void 0 !== cv ? cv : Tv,
              nv = fv && null !== (mv = null === (jv = fv.props) || void 0 === jv ? void 0 : jv.endIndex) && void 0 !== mv ? mv : Wv,
              Ov = Fv !== Tv || nv !== Wv,
              Dv = !ev()(hv) && !Ov ? zv.updateId : zv.updateId + 1;
            return fP(fP({
              updateId: Dv
            }, Vv(fP(fP({
              props: vv
            }, zv), {}, {
              updateId: Dv,
              dataStartIndex: Fv,
              dataEndIndex: nv
            }), zv)), {}, {
              prevChildren: Sv,
              dataStartIndex: Fv,
              dataEndIndex: nv
            })
          }
          return null
        })), FP(Uv, "renderActiveDot", (function(vv, zv, Pv) {
          var Sv;
          return Sv = (0, hv.isValidElement)(vv) ? (0, hv.cloneElement)(vv, zv) : pv()(vv) ? vv(zv) : hv.createElement(fv.d, zv), hv.createElement(Gv.c, {
            className: "recharts-active-dot",
            key: Pv
          }, Sv)
        }));
        var Rv = (0, hv.forwardRef)((function(vv, zv) {
          return hv.createElement(Uv, lP({}, vv, {
            ref: zv
          }))
        }));
        return Rv.displayName = Uv.displayName, Rv
      }
  },
  5996: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    var hv = function(vv) {
      return null
    };
    hv.displayName = "Cell"
  },
  5942: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Vv
    });
    var hv = Pv(52),
      Sv = Pv(5141),
      ev = Pv.n(Sv),
      gv = Pv(4995),
      pv = Pv.n(gv),
      dv = Pv(4826),
      Nv = Pv.n(dv),
      lv = Pv(4802),
      Tv = Pv(5846),
      Wv = Pv(5149),
      wv = Pv(4891),
      av = Pv(5946);

    function sv(vv) {
      return sv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, sv(vv)
    }
    var Cv = ["offset"];

    function iv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return cv(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return cv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return cv(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function cv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Gv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function mv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function jv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? mv(Object(Pv), !0).forEach((function(zv) {
          fv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : mv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function fv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != sv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != sv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == sv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Fv() {
      return Fv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Fv.apply(this, arguments)
    }
    var Yv = function(vv) {
        var zv = vv.value,
          Pv = vv.formatter,
          hv = ev()(vv.children) ? zv : vv.children;
        return pv()(Pv) ? Pv(hv) : hv
      },
      nv = function(vv, zv, Pv) {
        var Sv, gv, pv = vv.position,
          dv = vv.viewBox,
          Nv = vv.offset,
          Tv = vv.className,
          Wv = dv,
          sv = Wv.cx,
          Cv = Wv.cy,
          iv = Wv.innerRadius,
          cv = Wv.outerRadius,
          Gv = Wv.startAngle,
          mv = Wv.endAngle,
          jv = Wv.clockWise,
          fv = (iv + cv) / 2,
          Yv = function(vv, zv) {
            return (0, wv.y)(zv - vv) * Math.min(Math.abs(zv - vv), 360)
          }(Gv, mv),
          nv = Yv >= 0 ? 1 : -1;
        "insideStart" === pv ? (Sv = Gv + nv * Nv, gv = jv) : "insideEnd" === pv ? (Sv = mv - nv * Nv, gv = !jv) : "end" === pv && (Sv = mv + nv * Nv, gv = jv), gv = Yv <= 0 ? gv : !gv;
        var Ov = (0, av.h)(sv, Cv, fv, Sv),
          Dv = (0, av.h)(sv, Cv, fv, Sv + 359 * (gv ? 1 : -1)),
          Kv = "M".concat(Ov.x, ",").concat(Ov.y, "\n    A").concat(fv, ",").concat(fv, ",0,1,").concat(gv ? 0 : 1, ",\n    ").concat(Dv.x, ",").concat(Dv.y),
          Vv = ev()(vv.id) ? (0, wv.z)("recharts-radial-line-") : vv.id;
        return hv.createElement("text", Fv({}, Pv, {
          dominantBaseline: "central",
          className: (0, lv.b)("recharts-radial-bar-label", Tv)
        }), hv.createElement("defs", null, hv.createElement("path", {
          id: Vv,
          d: Kv
        })), hv.createElement("textPath", {
          xlinkHref: "#".concat(Vv)
        }, zv))
      },
      Ov = function(vv) {
        var zv = vv.viewBox,
          Pv = vv.offset,
          hv = vv.position,
          Sv = zv,
          ev = Sv.cx,
          gv = Sv.cy,
          pv = Sv.innerRadius,
          dv = Sv.outerRadius,
          Nv = (Sv.startAngle + Sv.endAngle) / 2;
        if ("outside" === hv) {
          var lv = (0, av.h)(ev, gv, dv + Pv, Nv),
            Tv = lv.x;
          return {
            x: Tv,
            y: lv.y,
            textAnchor: Tv >= ev ? "start" : "end",
            verticalAnchor: "middle"
          }
        }
        if ("center" === hv) return {
          x: ev,
          y: gv,
          textAnchor: "middle",
          verticalAnchor: "middle"
        };
        if ("centerTop" === hv) return {
          x: ev,
          y: gv,
          textAnchor: "middle",
          verticalAnchor: "start"
        };
        if ("centerBottom" === hv) return {
          x: ev,
          y: gv,
          textAnchor: "middle",
          verticalAnchor: "end"
        };
        var Wv = (pv + dv) / 2,
          wv = (0, av.h)(ev, gv, Wv, Nv);
        return {
          x: wv.x,
          y: wv.y,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }
      },
      Dv = function(vv) {
        var zv = vv.viewBox,
          Pv = vv.parentViewBox,
          hv = vv.offset,
          Sv = vv.position,
          ev = zv,
          gv = ev.x,
          pv = ev.y,
          dv = ev.width,
          lv = ev.height,
          Tv = lv >= 0 ? 1 : -1,
          Wv = Tv * hv,
          av = Tv > 0 ? "end" : "start",
          sv = Tv > 0 ? "start" : "end",
          Cv = dv >= 0 ? 1 : -1,
          iv = Cv * hv,
          cv = Cv > 0 ? "end" : "start",
          Gv = Cv > 0 ? "start" : "end";
        if ("top" === Sv) return jv(jv({}, {
          x: gv + dv / 2,
          y: pv - Tv * hv,
          textAnchor: "middle",
          verticalAnchor: av
        }), Pv ? {
          height: Math.max(pv - Pv.y, 0),
          width: dv
        } : {});
        if ("bottom" === Sv) return jv(jv({}, {
          x: gv + dv / 2,
          y: pv + lv + Wv,
          textAnchor: "middle",
          verticalAnchor: sv
        }), Pv ? {
          height: Math.max(Pv.y + Pv.height - (pv + lv), 0),
          width: dv
        } : {});
        if ("left" === Sv) {
          var mv = {
            x: gv - iv,
            y: pv + lv / 2,
            textAnchor: cv,
            verticalAnchor: "middle"
          };
          return jv(jv({}, mv), Pv ? {
            width: Math.max(mv.x - Pv.x, 0),
            height: lv
          } : {})
        }
        if ("right" === Sv) {
          var fv = {
            x: gv + dv + iv,
            y: pv + lv / 2,
            textAnchor: Gv,
            verticalAnchor: "middle"
          };
          return jv(jv({}, fv), Pv ? {
            width: Math.max(Pv.x + Pv.width - fv.x, 0),
            height: lv
          } : {})
        }
        var Fv = Pv ? {
          width: dv,
          height: lv
        } : {};
        return "insideLeft" === Sv ? jv({
          x: gv + iv,
          y: pv + lv / 2,
          textAnchor: Gv,
          verticalAnchor: "middle"
        }, Fv) : "insideRight" === Sv ? jv({
          x: gv + dv - iv,
          y: pv + lv / 2,
          textAnchor: cv,
          verticalAnchor: "middle"
        }, Fv) : "insideTop" === Sv ? jv({
          x: gv + dv / 2,
          y: pv + Wv,
          textAnchor: "middle",
          verticalAnchor: sv
        }, Fv) : "insideBottom" === Sv ? jv({
          x: gv + dv / 2,
          y: pv + lv - Wv,
          textAnchor: "middle",
          verticalAnchor: av
        }, Fv) : "insideTopLeft" === Sv ? jv({
          x: gv + iv,
          y: pv + Wv,
          textAnchor: Gv,
          verticalAnchor: sv
        }, Fv) : "insideTopRight" === Sv ? jv({
          x: gv + dv - iv,
          y: pv + Wv,
          textAnchor: cv,
          verticalAnchor: sv
        }, Fv) : "insideBottomLeft" === Sv ? jv({
          x: gv + iv,
          y: pv + lv - Wv,
          textAnchor: Gv,
          verticalAnchor: av
        }, Fv) : "insideBottomRight" === Sv ? jv({
          x: gv + dv - iv,
          y: pv + lv - Wv,
          textAnchor: cv,
          verticalAnchor: av
        }, Fv) : Nv()(Sv) && ((0, wv.t)(Sv.x) || (0, wv.v)(Sv.x)) && ((0, wv.t)(Sv.y) || (0, wv.v)(Sv.y)) ? jv({
          x: gv + (0, wv.g)(Sv.x, dv),
          y: pv + (0, wv.g)(Sv.y, lv),
          textAnchor: "end",
          verticalAnchor: "end"
        }, Fv) : jv({
          x: gv + dv / 2,
          y: pv + lv / 2,
          textAnchor: "middle",
          verticalAnchor: "middle"
        }, Fv)
      },
      Kv = function(vv) {
        return "cx" in vv && (0, wv.t)(vv.cx)
      };

    function Vv(vv) {
      var zv, Pv = vv.offset,
        Sv = jv({
          offset: void 0 === Pv ? 5 : Pv
        }, Gv(vv, Cv)),
        gv = Sv.viewBox,
        dv = Sv.position,
        Nv = Sv.value,
        wv = Sv.children,
        av = Sv.content,
        sv = Sv.className,
        iv = void 0 === sv ? "" : sv,
        cv = Sv.textBreakAll;
      if (!gv || ev()(Nv) && ev()(wv) && !(0, hv.isValidElement)(av) && !pv()(av)) return null;
      if ((0, hv.isValidElement)(av)) return (0, hv.cloneElement)(av, Sv);
      if (pv()(av)) {
        if (zv = (0, hv.createElement)(av, Sv), (0, hv.isValidElement)(zv)) return zv
      } else zv = Yv(Sv);
      var mv = Kv(gv),
        fv = (0, Wv.e)(Sv, !0);
      if (mv && ("insideStart" === dv || "insideEnd" === dv || "end" === dv)) return nv(Sv, zv, fv);
      var Vv = mv ? Ov(Sv) : Dv(Sv);
      return hv.createElement(Tv.d, Fv({
        className: (0, lv.b)("recharts-label", iv)
      }, fv, Vv, {
        breakAll: cv
      }), zv)
    }
    Vv.displayName = "Label";
    var Uv = function(vv) {
      var zv = vv.cx,
        Pv = vv.cy,
        hv = vv.angle,
        Sv = vv.startAngle,
        ev = vv.endAngle,
        gv = vv.r,
        pv = vv.radius,
        dv = vv.innerRadius,
        Nv = vv.outerRadius,
        lv = vv.x,
        Tv = vv.y,
        Wv = vv.top,
        av = vv.left,
        sv = vv.width,
        Cv = vv.height,
        iv = vv.clockWise,
        cv = vv.labelViewBox;
      if (cv) return cv;
      if ((0, wv.t)(sv) && (0, wv.t)(Cv)) {
        if ((0, wv.t)(lv) && (0, wv.t)(Tv)) return {
          x: lv,
          y: Tv,
          width: sv,
          height: Cv
        };
        if ((0, wv.t)(Wv) && (0, wv.t)(av)) return {
          x: Wv,
          y: av,
          width: sv,
          height: Cv
        }
      }
      return (0, wv.t)(lv) && (0, wv.t)(Tv) ? {
        x: lv,
        y: Tv,
        width: 0,
        height: 0
      } : (0, wv.t)(zv) && (0, wv.t)(Pv) ? {
        cx: zv,
        cy: Pv,
        startAngle: Sv || hv || 0,
        endAngle: ev || hv || 0,
        innerRadius: dv || 0,
        outerRadius: Nv || pv || gv || 0,
        clockWise: iv
      } : vv.viewBox ? vv.viewBox : {}
    };
    Vv.parseViewBox = Uv, Vv.renderCallByParent = function(vv, zv) {
      var Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!vv || !vv.children && Pv && !vv.label) return null;
      var Sv = vv.children,
        ev = Uv(vv),
        gv = (0, Wv.g)(Sv, Vv).map((function(vv, Pv) {
          return (0, hv.cloneElement)(vv, {
            viewBox: zv || ev,
            key: "label-".concat(Pv)
          })
        }));
      if (!Pv) return gv;
      var dv = function(vv, zv) {
        return vv ? !0 === vv ? hv.createElement(Vv, {
          key: "label-implicit",
          viewBox: zv
        }) : (0, wv.r)(vv) ? hv.createElement(Vv, {
          key: "label-implicit",
          viewBox: zv,
          value: vv
        }) : (0, hv.isValidElement)(vv) ? vv.type === Vv ? (0, hv.cloneElement)(vv, {
          key: "label-implicit",
          viewBox: zv
        }) : hv.createElement(Vv, {
          key: "label-implicit",
          content: vv,
          viewBox: zv
        }) : pv()(vv) ? hv.createElement(Vv, {
          key: "label-implicit",
          content: vv,
          viewBox: zv
        }) : Nv()(vv) ? hv.createElement(Vv, Fv({
          viewBox: zv
        }, vv, {
          key: "label-implicit"
        })) : null : null
      }(vv.label, zv || ev);
      return [dv].concat(iv(gv))
    }
  },
  6004: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Dv
    });
    var hv = Pv(52),
      Sv = Pv(5141),
      ev = Pv.n(Sv),
      gv = Pv(4826),
      pv = Pv.n(gv),
      dv = Pv(4995),
      Nv = Pv.n(dv),
      lv = Pv(6009),
      Tv = Pv.n(lv),
      Wv = Pv(5942),
      wv = Pv(5691),
      av = Pv(5149),
      sv = Pv(5857);

    function Cv(vv) {
      return Cv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Cv(vv)
    }
    var iv = ["valueAccessor"],
      cv = ["data", "dataKey", "clockWise", "id", "textBreakAll"];

    function Gv(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return mv(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return mv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return mv(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function mv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function jv() {
      return jv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, jv.apply(this, arguments)
    }

    function fv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Fv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? fv(Object(Pv), !0).forEach((function(zv) {
          Yv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : fv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Yv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Cv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Cv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Cv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function nv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var Ov = function(vv) {
      return Array.isArray(vv.value) ? Tv()(vv.value) : vv.value
    };

    function Dv(vv) {
      var zv = vv.valueAccessor,
        Pv = void 0 === zv ? Ov : zv,
        Sv = nv(vv, iv),
        gv = Sv.data,
        pv = Sv.dataKey,
        dv = Sv.clockWise,
        Nv = Sv.id,
        lv = Sv.textBreakAll,
        Tv = nv(Sv, cv);
      return gv && gv.length ? hv.createElement(wv.c, {
        className: "recharts-label-list"
      }, gv.map((function(vv, zv) {
        var Sv = ev()(pv) ? Pv(vv, zv) : (0, sv.eb)(vv && vv.payload, pv),
          gv = ev()(Nv) ? {} : {
            id: "".concat(Nv, "-").concat(zv)
          };
        return hv.createElement(Wv.e, jv({}, (0, av.e)(vv, !0), Tv, gv, {
          parentViewBox: vv.parentViewBox,
          value: Sv,
          textBreakAll: lv,
          viewBox: Wv.e.parseViewBox(ev()(dv) ? vv : Fv(Fv({}, vv), {}, {
            clockWise: dv
          })),
          key: "label-".concat(zv),
          index: zv
        }))
      }))) : null
    }
    Dv.displayName = "LabelList", Dv.renderCallByParent = function(vv, zv) {
      var Pv = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!vv || !vv.children && Pv && !vv.label) return null;
      var Sv = vv.children,
        ev = (0, av.g)(Sv, Dv).map((function(vv, Pv) {
          return (0, hv.cloneElement)(vv, {
            data: zv,
            key: "labelList-".concat(Pv)
          })
        }));
      return Pv ? [function(vv, zv) {
        return vv ? !0 === vv ? hv.createElement(Dv, {
          key: "labelList-implicit",
          data: zv
        }) : hv.isValidElement(vv) || Nv()(vv) ? hv.createElement(Dv, {
          key: "labelList-implicit",
          data: zv,
          content: vv
        }) : pv()(vv) ? hv.createElement(Dv, jv({
          data: zv
        }, vv, {
          key: "labelList-implicit"
        })) : null : null
      }(vv.label, zv)].concat(Gv(ev)) : ev
    }
  },
  5771: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Av
    });
    var hv = Pv(52),
      Sv = Pv(4995),
      ev = Pv.n(Sv),
      gv = Pv(4802),
      pv = Pv(5146),
      dv = Pv(5686),
      Nv = Pv(5774),
      lv = Pv(5169);

    function Tv(vv) {
      return Tv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Tv(vv)
    }

    function Wv() {
      return Wv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Wv.apply(this, arguments)
    }

    function wv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function av(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, mv(hv.key), hv)
      }
    }

    function sv(vv, zv, Pv) {
      return zv = iv(zv),
        function(vv, zv) {
          if (zv && ("object" === Tv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Cv() ? Reflect.construct(zv, Pv || [], iv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Cv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Cv = function() {
        return !!vv
      })()
    }

    function iv(vv) {
      return iv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, iv(vv)
    }

    function cv(vv, zv) {
      return cv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, cv(vv, zv)
    }

    function Gv(vv, zv, Pv) {
      return (zv = mv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function mv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Tv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Tv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Tv(zv) ? zv : zv + ""
    }
    var jv = 32,
      fv = function(vv) {
        function zv() {
          return function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, zv), sv(this, zv, arguments)
        }
        return function(vv, zv) {
          if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
          vv.prototype = Object.create(zv && zv.prototype, {
            constructor: {
              value: vv,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(vv, "prototype", {
            writable: !1
          }), zv && cv(vv, zv)
        }(zv, vv), Pv = zv, Sv = [{
          key: "renderIcon",
          value: function(vv) {
            var zv = this.props.inactiveColor,
              Pv = 16,
              Sv = jv / 6,
              ev = jv / 3,
              gv = vv.inactive ? zv : vv.color;
            if ("plainline" === vv.type) return hv.createElement("line", {
              strokeWidth: 4,
              fill: "none",
              stroke: gv,
              strokeDasharray: vv.payload.strokeDasharray,
              x1: 0,
              y1: Pv,
              x2: jv,
              y2: Pv,
              className: "recharts-legend-icon"
            });
            if ("line" === vv.type) return hv.createElement("path", {
              strokeWidth: 4,
              fill: "none",
              stroke: gv,
              d: "M0,".concat(Pv, "h").concat(ev, "\n            A").concat(Sv, ",").concat(Sv, ",0,1,1,").concat(2 * ev, ",").concat(Pv, "\n            H").concat(jv, "M").concat(2 * ev, ",").concat(Pv, "\n            A").concat(Sv, ",").concat(Sv, ",0,1,1,").concat(ev, ",").concat(Pv),
              className: "recharts-legend-icon"
            });
            if ("rect" === vv.type) return hv.createElement("path", {
              stroke: "none",
              fill: gv,
              d: "M0,".concat(4, "h").concat(jv, "v").concat(24, "h").concat(-32, "z"),
              className: "recharts-legend-icon"
            });
            if (hv.isValidElement(vv.legendIcon)) {
              var pv = function(vv) {
                for (var zv = 1; zv < arguments.length; zv++) {
                  var Pv = null != arguments[zv] ? arguments[zv] : {};
                  zv % 2 ? wv(Object(Pv), !0).forEach((function(zv) {
                    Gv(vv, zv, Pv[zv])
                  })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : wv(Object(Pv)).forEach((function(zv) {
                    Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
                  }))
                }
                return vv
              }({}, vv);
              return delete pv.legendIcon, hv.cloneElement(vv.legendIcon, pv)
            }
            return hv.createElement(Nv.c, {
              fill: gv,
              cx: Pv,
              cy: Pv,
              size: jv,
              sizeType: "diameter",
              type: vv.type
            })
          }
        }, {
          key: "renderItems",
          value: function() {
            var vv = this,
              zv = this.props,
              Pv = zv.payload,
              Sv = zv.iconSize,
              Nv = zv.layout,
              Tv = zv.formatter,
              wv = zv.inactiveColor,
              av = {
                x: 0,
                y: 0,
                width: jv,
                height: jv
              },
              sv = {
                display: "horizontal" === Nv ? "inline-block" : "block",
                marginRight: 10
              },
              Cv = {
                display: "inline-block",
                verticalAlign: "middle",
                marginRight: 4
              };
            return Pv.map((function(zv, Pv) {
              var Nv = zv.formatter || Tv,
                iv = (0, gv.b)(Gv(Gv({
                  "recharts-legend-item": !0
                }, "legend-item-".concat(Pv), !0), "inactive", zv.inactive));
              if ("none" === zv.type) return null;
              var cv = ev()(zv.value) ? null : zv.value;
              (0, pv.d)(!ev()(zv.value), 'The name property is also required when using a function for the dataKey of a chart\'s cartesian components. Ex: <Bar name="Name of my Data"/>');
              var mv = zv.inactive ? wv : zv.color;
              return hv.createElement("li", Wv({
                className: iv,
                style: sv,
                key: "legend-item-".concat(Pv)
              }, (0, lv.h)(vv.props, zv, Pv)), hv.createElement(dv.c, {
                width: Sv,
                height: Sv,
                viewBox: av,
                style: Cv
              }, vv.renderIcon(zv)), hv.createElement("span", {
                className: "recharts-legend-item-text",
                style: {
                  color: mv
                }
              }, Nv ? Nv(cv, zv, Pv) : cv))
            }))
          }
        }, {
          key: "render",
          value: function() {
            var vv = this.props,
              zv = vv.payload,
              Pv = vv.layout,
              Sv = vv.align;
            if (!zv || !zv.length) return null;
            var ev = {
              padding: 0,
              margin: 0,
              textAlign: "horizontal" === Pv ? Sv : "left"
            };
            return hv.createElement("ul", {
              className: "recharts-default-legend",
              style: ev
            }, this.renderItems())
          }
        }], Sv && av(Pv.prototype, Sv), Tv && av(Pv, Tv), Object.defineProperty(Pv, "prototype", {
          writable: !1
        }), Pv;
        var Pv, Sv, Tv
      }(hv.PureComponent);
    Gv(fv, "displayName", "Legend"), Gv(fv, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "middle",
      inactiveColor: "#ccc"
    });
    var Fv = Pv(4891),
      Yv = Pv(5707);

    function nv(vv) {
      return nv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, nv(vv)
    }
    var Ov = ["ref"];

    function Dv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Kv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Dv(Object(Pv), !0).forEach((function(zv) {
          qv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Dv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Vv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Iv(hv.key), hv)
      }
    }

    function Uv(vv, zv, Pv) {
      return zv = xv(zv),
        function(vv, zv) {
          if (zv && ("object" === nv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Rv() ? Reflect.construct(zv, Pv || [], xv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Rv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Rv = function() {
        return !!vv
      })()
    }

    function xv(vv) {
      return xv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, xv(vv)
    }

    function tv(vv, zv) {
      return tv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, tv(vv, zv)
    }

    function qv(vv, zv, Pv) {
      return (zv = Iv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Iv(vv) {
      var zv = function(vv, zv) {
        if ("object" != nv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != nv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == nv(zv) ? zv : zv + ""
    }

    function Qv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function Zv(vv) {
      return vv.value
    }
    var Av = function(vv) {
      function zv() {
        var vv;
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv);
        for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
        return qv(vv = Uv(this, zv, [].concat(hv)), "lastBoundingBox", {
          width: -1,
          height: -1
        }), vv
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && tv(vv, zv)
      }(zv, vv), Pv = zv, ev = [{
        key: "getWithHeight",
        value: function(vv, zv) {
          var Pv = Kv(Kv({}, this.defaultProps), vv.props).layout;
          return "vertical" === Pv && (0, Fv.t)(vv.props.height) ? {
            height: vv.props.height
          } : "horizontal" === Pv ? {
            width: vv.props.width || zv
          } : null
        }
      }], (Sv = [{
        key: "componentDidMount",
        value: function() {
          this.updateBBox()
        }
      }, {
        key: "componentDidUpdate",
        value: function() {
          this.updateBBox()
        }
      }, {
        key: "getBBox",
        value: function() {
          if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var vv = this.wrapperNode.getBoundingClientRect();
            return vv.height = this.wrapperNode.offsetHeight, vv.width = this.wrapperNode.offsetWidth, vv
          }
          return null
        }
      }, {
        key: "updateBBox",
        value: function() {
          var vv = this.props.onBBoxUpdate,
            zv = this.getBBox();
          zv ? (Math.abs(zv.width - this.lastBoundingBox.width) > 1 || Math.abs(zv.height - this.lastBoundingBox.height) > 1) && (this.lastBoundingBox.width = zv.width, this.lastBoundingBox.height = zv.height, vv && vv(zv)) : -1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height || (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, vv && vv(null))
        }
      }, {
        key: "getBBoxSnapshot",
        value: function() {
          return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Kv({}, this.lastBoundingBox) : {
            width: 0,
            height: 0
          }
        }
      }, {
        key: "getDefaultPosition",
        value: function(vv) {
          var zv, Pv, hv = this.props,
            Sv = hv.layout,
            ev = hv.align,
            gv = hv.verticalAlign,
            pv = hv.margin,
            dv = hv.chartWidth,
            Nv = hv.chartHeight;
          return vv && (void 0 !== vv.left && null !== vv.left || void 0 !== vv.right && null !== vv.right) || (zv = "center" === ev && "vertical" === Sv ? {
            left: ((dv || 0) - this.getBBoxSnapshot().width) / 2
          } : "right" === ev ? {
            right: pv && pv.right || 0
          } : {
            left: pv && pv.left || 0
          }), vv && (void 0 !== vv.top && null !== vv.top || void 0 !== vv.bottom && null !== vv.bottom) || (Pv = "middle" === gv ? {
            top: ((Nv || 0) - this.getBBoxSnapshot().height) / 2
          } : "bottom" === gv ? {
            bottom: pv && pv.bottom || 0
          } : {
            top: pv && pv.top || 0
          }), Kv(Kv({}, zv), Pv)
        }
      }, {
        key: "render",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.content,
            Sv = zv.width,
            ev = zv.height,
            gv = zv.wrapperStyle,
            pv = zv.payloadUniqBy,
            dv = zv.payload,
            Nv = Kv(Kv({
              position: "absolute",
              width: Sv || "auto",
              height: ev || "auto"
            }, this.getDefaultPosition(gv)), gv);
          return hv.createElement("div", {
            className: "recharts-legend-wrapper",
            style: Nv,
            ref: function(zv) {
              vv.wrapperNode = zv
            }
          }, function(vv, zv) {
            if (hv.isValidElement(vv)) return hv.cloneElement(vv, zv);
            if ("function" === typeof vv) return hv.createElement(vv, zv);
            zv.ref;
            var Pv = Qv(zv, Ov);
            return hv.createElement(fv, Pv)
          }(Pv, Kv(Kv({}, this.props), {}, {
            payload: (0, Yv.e)(dv, pv, Zv)
          })))
        }
      }]) && Vv(Pv.prototype, Sv), ev && Vv(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.PureComponent);
    qv(Av, "displayName", "Legend"), qv(Av, "defaultProps", {
      iconSize: 14,
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom"
    })
  },
  4795: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Cv
    });
    var hv = Pv(4802),
      Sv = Pv(52),
      ev = Pv(4810),
      gv = Pv.n(ev),
      pv = Pv(4891),
      dv = Pv(5146),
      Nv = Pv(5149);

    function lv(vv) {
      return lv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, lv(vv)
    }

    function Tv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Wv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Tv(Object(Pv), !0).forEach((function(zv) {
          wv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Tv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function wv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != lv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != lv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == lv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function av(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return sv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return sv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function sv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var Cv = (0, Sv.forwardRef)((function(vv, zv) {
      var Pv = vv.aspect,
        ev = vv.initialDimension,
        lv = void 0 === ev ? {
          width: -1,
          height: -1
        } : ev,
        Tv = vv.width,
        wv = void 0 === Tv ? "100%" : Tv,
        sv = vv.height,
        Cv = void 0 === sv ? "100%" : sv,
        iv = vv.minWidth,
        cv = void 0 === iv ? 0 : iv,
        Gv = vv.minHeight,
        mv = vv.maxHeight,
        jv = vv.children,
        fv = vv.debounce,
        Fv = void 0 === fv ? 0 : fv,
        Yv = vv.id,
        nv = vv.className,
        Ov = vv.mG,
        Dv = vv.style,
        Kv = void 0 === Dv ? {} : Dv,
        Vv = (0, Sv.useRef)(null),
        Uv = (0, Sv.useRef)();
      Uv.current = Ov, (0, Sv.useImperativeHandle)(zv, (function() {
        return Object.defineProperty(Vv.current, "current", {
          get: function() {
            return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), Vv.current
          },
          configurable: !0
        })
      }));
      var Rv = av((0, Sv.useState)({
          containerWidth: lv.width,
          containerHeight: lv.height
        }), 2),
        xv = Rv[0],
        tv = Rv[1],
        qv = (0, Sv.useCallback)((function(vv, zv) {
          tv((function(Pv) {
            var hv = Math.round(vv),
              Sv = Math.round(zv);
            return Pv.containerWidth === hv && Pv.containerHeight === Sv ? Pv : {
              containerWidth: hv,
              containerHeight: Sv
            }
          }))
        }), []);
      (0, Sv.useEffect)((function() {
        var vv = function(vv) {
          var zv, Pv = vv[0].contentRect,
            hv = Pv.width,
            Sv = Pv.height;
          qv(hv, Sv), null === (zv = Uv.current) || void 0 === zv || zv.call(Uv, hv, Sv)
        };
        Fv > 0 && (vv = gv()(vv, Fv, {
          trailing: !0,
          leading: !1
        }));
        var zv = new ResizeObserver(vv),
          Pv = Vv.current.getBoundingClientRect(),
          hv = Pv.width,
          Sv = Pv.height;
        return qv(hv, Sv), zv.observe(Vv.current),
          function() {
            zv.disconnect()
          }
      }), [qv, Fv]);
      var Iv = (0, Sv.useMemo)((function() {
        var vv = xv.containerWidth,
          zv = xv.containerHeight;
        if (vv < 0 || zv < 0) return null;
        (0, dv.d)((0, pv.v)(wv) || (0, pv.v)(Cv), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", wv, Cv), (0, dv.d)(!Pv || Pv > 0, "The aspect(%s) must be greater than zero.", Pv);
        var hv = (0, pv.v)(wv) ? vv : wv,
          ev = (0, pv.v)(Cv) ? zv : Cv;
        Pv && Pv > 0 && (hv ? ev = hv / Pv : ev && (hv = ev * Pv), mv && ev > mv && (ev = mv)), (0, dv.d)(hv > 0 || ev > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", hv, ev, wv, Cv, cv, Gv, Pv);
        var gv = !Array.isArray(jv) && (0, Nv.n)(jv.type).endsWith("Chart");
        return Sv.Children.map(jv, (function(vv) {
          return Sv.isValidElement(vv) ? (0, Sv.cloneElement)(vv, Wv({
            width: hv,
            height: ev
          }, gv ? {
            style: Wv({
              height: "100%",
              width: "100%",
              maxHeight: ev,
              maxWidth: hv
            }, vv.props.style)
          } : {})) : vv
        }))
      }), [Pv, jv, Cv, mv, Gv, cv, xv, wv]);
      return Sv.createElement("div", {
        id: Yv ? "".concat(Yv) : void 0,
        className: (0, hv.b)("recharts-responsive-container", nv),
        style: Wv(Wv({}, Kv), {}, {
          width: wv,
          height: Cv,
          minWidth: cv,
          minHeight: Gv,
          maxHeight: mv
        }),
        ref: Vv
      }, Iv)
    }))
  },
  5846: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Lv
    });
    var hv = Pv(52),
      Sv = Pv(5141),
      ev = Pv.n(Sv),
      gv = Pv(4802),
      pv = Pv(4891),
      dv = Pv(5705),
      Nv = Pv(5149),
      lv = Pv(5849);

    function Tv(vv) {
      return Tv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Tv(vv)
    }

    function Wv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return wv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return wv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function av(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, sv(hv.key), hv)
      }
    }

    function sv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Tv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Tv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Tv(zv) ? zv : zv + ""
    }
    var Cv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      iv = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      cv = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
      Gv = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      mv = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1
      },
      jv = Object.keys(mv),
      fv = "NaN";
    var Fv = function() {
      function vv(zv, Pv) {
        ! function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, vv), this.num = zv, this.unit = Pv, this.num = zv, this.unit = Pv, Number.isNaN(zv) && (this.unit = ""), "" === Pv || cv.test(Pv) || (this.num = NaN, this.unit = ""), jv.includes(Pv) && (this.num = function(vv, zv) {
          return vv * mv[zv]
        }(zv, Pv), this.unit = "px")
      }
      return zv = vv, hv = [{
        key: "parse",
        value: function(zv) {
          var Pv, hv = Wv(null !== (Pv = Gv.exec(zv)) && void 0 !== Pv ? Pv : [], 3),
            Sv = hv[1],
            ev = hv[2];
          return new vv(parseFloat(Sv), null !== ev && void 0 !== ev ? ev : "")
        }
      }], (Pv = [{
        key: "add",
        value: function(zv) {
          return this.unit !== zv.unit ? new vv(NaN, "") : new vv(this.num + zv.num, this.unit)
        }
      }, {
        key: "subtract",
        value: function(zv) {
          return this.unit !== zv.unit ? new vv(NaN, "") : new vv(this.num - zv.num, this.unit)
        }
      }, {
        key: "multiply",
        value: function(zv) {
          return "" !== this.unit && "" !== zv.unit && this.unit !== zv.unit ? new vv(NaN, "") : new vv(this.num * zv.num, this.unit || zv.unit)
        }
      }, {
        key: "divide",
        value: function(zv) {
          return "" !== this.unit && "" !== zv.unit && this.unit !== zv.unit ? new vv(NaN, "") : new vv(this.num / zv.num, this.unit || zv.unit)
        }
      }, {
        key: "toString",
        value: function() {
          return "".concat(this.num).concat(this.unit)
        }
      }, {
        key: "isNaN",
        value: function() {
          return Number.isNaN(this.num)
        }
      }]) && av(zv.prototype, Pv), hv && av(zv, hv), Object.defineProperty(zv, "prototype", {
        writable: !1
      }), zv;
      var zv, Pv, hv
    }();

    function Yv(vv) {
      if (vv.includes(fv)) return fv;
      for (var zv = vv; zv.includes("*") || zv.includes("/");) {
        var Pv, hv = Wv(null !== (Pv = Cv.exec(zv)) && void 0 !== Pv ? Pv : [], 4),
          Sv = hv[1],
          ev = hv[2],
          gv = hv[3],
          pv = Fv.parse(null !== Sv && void 0 !== Sv ? Sv : ""),
          dv = Fv.parse(null !== gv && void 0 !== gv ? gv : ""),
          Nv = "*" === ev ? pv.multiply(dv) : pv.divide(dv);
        if (Nv.isNaN()) return fv;
        zv = zv.replace(Cv, Nv.toString())
      }
      for (; zv.includes("+") || /.-\d+(?:\.\d+)?/.test(zv);) {
        var lv, Tv = Wv(null !== (lv = iv.exec(zv)) && void 0 !== lv ? lv : [], 4),
          wv = Tv[1],
          av = Tv[2],
          sv = Tv[3],
          cv = Fv.parse(null !== wv && void 0 !== wv ? wv : ""),
          Gv = Fv.parse(null !== sv && void 0 !== sv ? sv : ""),
          mv = "+" === av ? cv.add(Gv) : cv.subtract(Gv);
        if (mv.isNaN()) return fv;
        zv = zv.replace(iv, mv.toString())
      }
      return zv
    }
    var nv = /\(([^()]*)\)/;

    function Ov(vv) {
      var zv = vv.replace(/\s+/g, "");
      return zv = function(vv) {
        for (var zv = vv; zv.includes("(");) {
          var Pv = Wv(nv.exec(zv), 2)[1];
          zv = zv.replace(nv, Yv(Pv))
        }
        return zv
      }(zv), zv = Yv(zv)
    }

    function Dv(vv) {
      var zv = function(vv) {
        try {
          return Ov(vv)
        } catch (zv) {
          return fv
        }
      }(vv.slice(5, -1));
      return zv === fv ? "" : zv
    }
    var Kv = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
      Vv = ["dx", "dy", "angle", "className", "breakAll"];

    function Uv() {
      return Uv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Uv.apply(this, arguments)
    }

    function Rv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function xv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return tv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return tv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function tv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var qv = /[ \f\n\r\t\v\u2028\u2029]+/,
      Iv = function(vv) {
        var zv = vv.children,
          Pv = vv.breakAll,
          hv = vv.style;
        try {
          var Sv = [];
          return ev()(zv) || (Sv = Pv ? zv.toString().split("") : zv.toString().split(qv)), {
            wordsWithComputedWidth: Sv.map((function(vv) {
              return {
                word: vv,
                width: (0, lv.f)(vv, hv).width
              }
            })),
            spaceWidth: Pv ? 0 : (0, lv.f)("\xa0", hv).width
          }
        } catch (gv) {
          return null
        }
      },
      Qv = function(vv) {
        return [{
          words: ev()(vv) ? [] : vv.toString().split(qv)
        }]
      },
      Zv = function(vv) {
        var zv = vv.width,
          Pv = vv.scaleToFit,
          hv = vv.children,
          Sv = vv.style,
          ev = vv.breakAll,
          gv = vv.maxLines;
        if ((zv || Pv) && !dv.d.isSsr) {
          var Nv = Iv({
            breakAll: ev,
            children: hv,
            style: Sv
          });
          return Nv ? function(vv, zv, Pv, hv, Sv) {
            var ev = vv.maxLines,
              gv = vv.children,
              dv = vv.style,
              Nv = vv.breakAll,
              lv = (0, pv.t)(ev),
              Tv = gv,
              Wv = function() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce((function(vv, zv) {
                  var ev = zv.word,
                    gv = zv.width,
                    pv = vv[vv.length - 1];
                  if (pv && (null == hv || Sv || pv.width + gv + Pv < Number(hv))) pv.words.push(ev), pv.width += gv + Pv;
                  else {
                    var dv = {
                      words: [ev],
                      width: gv
                    };
                    vv.push(dv)
                  }
                  return vv
                }), [])
              },
              wv = Wv(zv);
            if (!lv) return wv;
            for (var av, sv = function(vv) {
                var zv = Tv.slice(0, vv),
                  Pv = Iv({
                    breakAll: Nv,
                    style: dv,
                    children: zv + "\u2026"
                  }).wordsWithComputedWidth,
                  Sv = Wv(Pv),
                  gv = Sv.length > ev || function(vv) {
                    return vv.reduce((function(vv, zv) {
                      return vv.width > zv.width ? vv : zv
                    }))
                  }(Sv).width > Number(hv);
                return [gv, Sv]
              }, Cv = 0, iv = Tv.length - 1, cv = 0; Cv <= iv && cv <= Tv.length - 1;) {
              var Gv = Math.floor((Cv + iv) / 2),
                mv = xv(sv(Gv - 1), 2),
                jv = mv[0],
                fv = mv[1],
                Fv = xv(sv(Gv), 1)[0];
              if (jv || Fv || (Cv = Gv + 1), jv && Fv && (iv = Gv - 1), !jv && Fv) {
                av = fv;
                break
              }
              cv++
            }
            return av || wv
          }({
            breakAll: ev,
            children: hv,
            maxLines: gv,
            style: Sv
          }, Nv.wordsWithComputedWidth, Nv.spaceWidth, zv, Pv) : Qv(hv)
        }
        return Qv(hv)
      },
      Av = "#808080",
      Lv = function(vv) {
        var zv = vv.x,
          Pv = void 0 === zv ? 0 : zv,
          Sv = vv.y,
          ev = void 0 === Sv ? 0 : Sv,
          dv = vv.lineHeight,
          lv = void 0 === dv ? "1em" : dv,
          Tv = vv.capHeight,
          Wv = void 0 === Tv ? "0.71em" : Tv,
          wv = vv.scaleToFit,
          av = void 0 !== wv && wv,
          sv = vv.textAnchor,
          Cv = void 0 === sv ? "start" : sv,
          iv = vv.verticalAnchor,
          cv = void 0 === iv ? "end" : iv,
          Gv = vv.fill,
          mv = void 0 === Gv ? Av : Gv,
          jv = Rv(vv, Kv),
          fv = (0, hv.useMemo)((function() {
            return Zv({
              breakAll: jv.breakAll,
              children: jv.children,
              maxLines: jv.maxLines,
              scaleToFit: av,
              style: jv.style,
              width: jv.width
            })
          }), [jv.breakAll, jv.children, jv.maxLines, av, jv.style, jv.width]),
          Fv = jv.dx,
          Yv = jv.dy,
          nv = jv.angle,
          Ov = jv.className,
          xv = jv.breakAll,
          tv = Rv(jv, Vv);
        if (!(0, pv.r)(Pv) || !(0, pv.r)(ev)) return null;
        var qv, Iv = Pv + ((0, pv.t)(Fv) ? Fv : 0),
          Qv = ev + ((0, pv.t)(Yv) ? Yv : 0);
        switch (cv) {
          case "start":
            qv = Dv("calc(".concat(Wv, ")"));
            break;
          case "middle":
            qv = Dv("calc(".concat((fv.length - 1) / 2, " * -").concat(lv, " + (").concat(Wv, " / 2))"));
            break;
          default:
            qv = Dv("calc(".concat(fv.length - 1, " * -").concat(lv, ")"))
        }
        var Lv = [];
        if (av) {
          var Hv = fv[0].width,
            Mv = jv.width;
          Lv.push("scale(".concat(((0, pv.t)(Mv) ? Mv / Hv : 1) / Hv, ")"))
        }
        return nv && Lv.push("rotate(".concat(nv, ", ").concat(Iv, ", ").concat(Qv, ")")), Lv.length && (tv.transform = Lv.join(" ")), hv.createElement("text", Uv({}, (0, Nv.e)(tv, !0), {
          x: Iv,
          y: Qv,
          className: (0, gv.b)("recharts-text", Ov),
          textAnchor: Cv,
          fill: mv.includes("url") ? Av : mv
        }), fv.map((function(vv, zv) {
          var Pv = vv.words.join(xv ? "" : " ");
          return hv.createElement("tspan", {
            x: Iv,
            dy: 0 === zv ? qv : lv,
            key: "".concat(Pv, "-").concat(zv)
          }, Pv)
        })))
      }
  },
  5697: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => kv
    });
    var hv = Pv(52),
      Sv = Pv(5227),
      ev = Pv.n(Sv),
      gv = Pv(5141),
      pv = Pv.n(gv),
      dv = Pv(4802),
      Nv = Pv(4891);

    function lv(vv) {
      return lv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, lv(vv)
    }

    function Tv() {
      return Tv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Tv.apply(this, arguments)
    }

    function Wv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return wv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return wv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function wv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function av(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function sv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? av(Object(Pv), !0).forEach((function(zv) {
          Cv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : av(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Cv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != lv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != lv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == lv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function iv(vv) {
      return Array.isArray(vv) && (0, Nv.r)(vv[0]) && (0, Nv.r)(vv[1]) ? vv.join(" ~ ") : vv
    }
    var cv = function(vv) {
      var zv = vv.separator,
        Pv = void 0 === zv ? " : " : zv,
        Sv = vv.contentStyle,
        gv = void 0 === Sv ? {} : Sv,
        lv = vv.itemStyle,
        wv = void 0 === lv ? {} : lv,
        av = vv.labelStyle,
        Cv = void 0 === av ? {} : av,
        cv = vv.payload,
        Gv = vv.formatter,
        mv = vv.itemSorter,
        jv = vv.wrapperClassName,
        fv = vv.labelClassName,
        Fv = vv.label,
        Yv = vv.labelFormatter,
        nv = vv.accessibilityLayer,
        Ov = void 0 !== nv && nv,
        Dv = sv({
          margin: 0,
          padding: 10,
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          whiteSpace: "nowrap"
        }, gv),
        Kv = sv({
          margin: 0
        }, Cv),
        Vv = !pv()(Fv),
        Uv = Vv ? Fv : "",
        Rv = (0, dv.b)("recharts-default-tooltip", jv),
        xv = (0, dv.b)("recharts-tooltip-label", fv);
      Vv && Yv && void 0 !== cv && null !== cv && (Uv = Yv(Fv, cv));
      var tv = Ov ? {
        role: "status",
        "aria-live": "assertive"
      } : {};
      return hv.createElement("div", Tv({
        className: Rv,
        style: Dv
      }, tv), hv.createElement("p", {
        className: xv,
        style: Kv
      }, hv.isValidElement(Uv) ? Uv : "".concat(Uv)), function() {
        if (cv && cv.length) {
          var vv = (mv ? ev()(cv, mv) : cv).map((function(vv, zv) {
            if ("none" === vv.type) return null;
            var Sv = sv({
                display: "block",
                paddingTop: 4,
                paddingBottom: 4,
                color: vv.color || "#000"
              }, wv),
              ev = vv.formatter || Gv || iv,
              gv = vv.value,
              pv = vv.name,
              dv = gv,
              lv = pv;
            if (ev && null != dv && null != lv) {
              var Tv = ev(gv, pv, vv, zv, cv);
              if (Array.isArray(Tv)) {
                var av = Wv(Tv, 2);
                dv = av[0], lv = av[1]
              } else dv = Tv
            }
            return hv.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(zv),
              style: Sv
            }, (0, Nv.r)(lv) ? hv.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, lv) : null, (0, Nv.r)(lv) ? hv.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, Pv) : null, hv.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, dv), hv.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, vv.unit || ""))
          }));
          return hv.createElement("ul", {
            className: "recharts-tooltip-item-list",
            style: {
              padding: 0,
              margin: 0
            }
          }, vv)
        }
        return null
      }())
    };

    function Gv(vv) {
      return Gv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Gv(vv)
    }

    function mv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Gv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Gv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Gv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var jv = "recharts-tooltip-wrapper",
      fv = {
        visibility: "hidden"
      };

    function Fv(vv) {
      var zv = vv.coordinate,
        Pv = vv.translateX,
        hv = vv.translateY;
      return (0, dv.b)(jv, mv(mv(mv(mv({}, "".concat(jv, "-right"), (0, Nv.t)(Pv) && zv && (0, Nv.t)(zv.x) && Pv >= zv.x), "".concat(jv, "-left"), (0, Nv.t)(Pv) && zv && (0, Nv.t)(zv.x) && Pv < zv.x), "".concat(jv, "-bottom"), (0, Nv.t)(hv) && zv && (0, Nv.t)(zv.y) && hv >= zv.y), "".concat(jv, "-top"), (0, Nv.t)(hv) && zv && (0, Nv.t)(zv.y) && hv < zv.y))
    }

    function Yv(vv) {
      var zv = vv.allowEscapeViewBox,
        Pv = vv.coordinate,
        hv = vv.key,
        Sv = vv.offsetTopLeft,
        ev = vv.position,
        gv = vv.reverseDirection,
        pv = vv.tooltipDimension,
        dv = vv.viewBox,
        lv = vv.viewBoxDimension;
      if (ev && (0, Nv.t)(ev[hv])) return ev[hv];
      var Tv = Pv[hv] - pv - Sv,
        Wv = Pv[hv] + Sv;
      return zv[hv] ? gv[hv] ? Tv : Wv : gv[hv] ? Tv < dv[hv] ? Math.max(Wv, dv[hv]) : Math.max(Tv, dv[hv]) : Wv + pv > dv[hv] + lv ? Math.max(Tv, dv[hv]) : Math.max(Wv, dv[hv])
    }

    function nv(vv) {
      return nv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, nv(vv)
    }

    function Ov(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Dv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Ov(Object(Pv), !0).forEach((function(zv) {
          tv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Ov(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Kv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, qv(hv.key), hv)
      }
    }

    function Vv(vv, zv, Pv) {
      return zv = Rv(zv),
        function(vv, zv) {
          if (zv && ("object" === nv(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Uv() ? Reflect.construct(zv, Pv || [], Rv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Uv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Uv = function() {
        return !!vv
      })()
    }

    function Rv(vv) {
      return Rv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Rv(vv)
    }

    function xv(vv, zv) {
      return xv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, xv(vv, zv)
    }

    function tv(vv, zv, Pv) {
      return (zv = qv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function qv(vv) {
      var zv = function(vv, zv) {
        if ("object" != nv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != nv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == nv(zv) ? zv : zv + ""
    }
    var Iv = function(vv) {
        function zv() {
          var vv;
          ! function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, zv);
          for (var Pv = arguments.length, hv = new Array(Pv), Sv = 0; Sv < Pv; Sv++) hv[Sv] = arguments[Sv];
          return tv(vv = Vv(this, zv, [].concat(hv)), "state", {
            dismissed: !1,
            dismissedAtCoordinate: {
              x: 0,
              y: 0
            },
            lastBoundingBox: {
              width: -1,
              height: -1
            }
          }), tv(vv, "handleKeyDown", (function(zv) {
            var Pv, hv, Sv, ev;
            "Escape" === zv.key && vv.setState({
              dismissed: !0,
              dismissedAtCoordinate: {
                x: null !== (Pv = null === (hv = vv.props.coordinate) || void 0 === hv ? void 0 : hv.x) && void 0 !== Pv ? Pv : 0,
                y: null !== (Sv = null === (ev = vv.props.coordinate) || void 0 === ev ? void 0 : ev.y) && void 0 !== Sv ? Sv : 0
              }
            })
          })), vv
        }
        return function(vv, zv) {
          if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
          vv.prototype = Object.create(zv && zv.prototype, {
            constructor: {
              value: vv,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(vv, "prototype", {
            writable: !1
          }), zv && xv(vv, zv)
        }(zv, vv), Pv = zv, (Sv = [{
          key: "updateBBox",
          value: function() {
            if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
              var vv = this.wrapperNode.getBoundingClientRect();
              (Math.abs(vv.width - this.state.lastBoundingBox.width) > 1 || Math.abs(vv.height - this.state.lastBoundingBox.height) > 1) && this.setState({
                lastBoundingBox: {
                  width: vv.width,
                  height: vv.height
                }
              })
            } else - 1 === this.state.lastBoundingBox.width && -1 === this.state.lastBoundingBox.height || this.setState({
              lastBoundingBox: {
                width: -1,
                height: -1
              }
            })
          }
        }, {
          key: "componentDidMount",
          value: function() {
            document.addEventListener("keydown", this.handleKeyDown), this.updateBBox()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            document.removeEventListener("keydown", this.handleKeyDown)
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            var vv, zv;
            this.props.active && this.updateBBox(), this.state.dismissed && ((null === (vv = this.props.coordinate) || void 0 === vv ? void 0 : vv.x) === this.state.dismissedAtCoordinate.x && (null === (zv = this.props.coordinate) || void 0 === zv ? void 0 : zv.y) === this.state.dismissedAtCoordinate.y || (this.state.dismissed = !1))
          }
        }, {
          key: "render",
          value: function() {
            var vv = this,
              zv = this.props,
              Pv = zv.active,
              Sv = zv.allowEscapeViewBox,
              ev = zv.animationDuration,
              gv = zv.animationEasing,
              pv = zv.children,
              dv = zv.coordinate,
              Nv = zv.hasPayload,
              lv = zv.isAnimationActive,
              Tv = zv.offset,
              Wv = zv.position,
              wv = zv.reverseDirection,
              av = zv.useTranslate3d,
              sv = zv.viewBox,
              Cv = zv.wrapperStyle,
              iv = function(vv) {
                var zv, Pv, hv = vv.allowEscapeViewBox,
                  Sv = vv.coordinate,
                  ev = vv.offsetTopLeft,
                  gv = vv.position,
                  pv = vv.reverseDirection,
                  dv = vv.tooltipBox,
                  Nv = vv.useTranslate3d,
                  lv = vv.viewBox;
                return {
                  cssProperties: dv.height > 0 && dv.width > 0 && Sv ? function(vv) {
                    var zv = vv.translateX,
                      Pv = vv.translateY;
                    return {
                      transform: vv.useTranslate3d ? "translate3d(".concat(zv, "px, ").concat(Pv, "px, 0)") : "translate(".concat(zv, "px, ").concat(Pv, "px)")
                    }
                  }({
                    translateX: zv = Yv({
                      allowEscapeViewBox: hv,
                      coordinate: Sv,
                      key: "x",
                      offsetTopLeft: ev,
                      position: gv,
                      reverseDirection: pv,
                      tooltipDimension: dv.width,
                      viewBox: lv,
                      viewBoxDimension: lv.width
                    }),
                    translateY: Pv = Yv({
                      allowEscapeViewBox: hv,
                      coordinate: Sv,
                      key: "y",
                      offsetTopLeft: ev,
                      position: gv,
                      reverseDirection: pv,
                      tooltipDimension: dv.height,
                      viewBox: lv,
                      viewBoxDimension: lv.height
                    }),
                    useTranslate3d: Nv
                  }) : fv,
                  cssClasses: Fv({
                    translateX: zv,
                    translateY: Pv,
                    coordinate: Sv
                  })
                }
              }({
                allowEscapeViewBox: Sv,
                coordinate: dv,
                offsetTopLeft: Tv,
                position: Wv,
                reverseDirection: wv,
                tooltipBox: this.state.lastBoundingBox,
                useTranslate3d: av,
                viewBox: sv
              }),
              cv = iv.cssClasses,
              Gv = iv.cssProperties,
              mv = Dv(Dv({
                transition: lv && Pv ? "transform ".concat(ev, "ms ").concat(gv) : void 0
              }, Gv), {}, {
                pointerEvents: "none",
                visibility: !this.state.dismissed && Pv && Nv ? "visible" : "hidden",
                position: "absolute",
                top: 0,
                left: 0
              }, Cv);
            return hv.createElement("div", {
              tabIndex: -1,
              className: cv,
              style: mv,
              ref: function(zv) {
                vv.wrapperNode = zv
              }
            }, pv)
          }
        }]) && Kv(Pv.prototype, Sv), ev && Kv(Pv, ev), Object.defineProperty(Pv, "prototype", {
          writable: !1
        }), Pv;
        var Pv, Sv, ev
      }(hv.PureComponent),
      Qv = Pv(5705),
      Zv = Pv(5707);

    function Av(vv) {
      return Av = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Av(vv)
    }

    function Lv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Hv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Lv(Object(Pv), !0).forEach((function(zv) {
          ov(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Lv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Mv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, bv(hv.key), hv)
      }
    }

    function yv(vv, zv, Pv) {
      return zv = Jv(zv),
        function(vv, zv) {
          if (zv && ("object" === Av(zv) || "function" === typeof zv)) return zv;
          if (void 0 !== zv) throw new TypeError("Derived constructors may only return object or undefined");
          return function(vv) {
            if (void 0 === vv) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return vv
          }(vv)
        }(vv, Bv() ? Reflect.construct(zv, Pv || [], Jv(vv).constructor) : zv.apply(vv, Pv))
    }

    function Bv() {
      try {
        var vv = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
      } catch (vv) {}
      return (Bv = function() {
        return !!vv
      })()
    }

    function Jv(vv) {
      return Jv = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(vv) {
        return vv.__proto__ || Object.getPrototypeOf(vv)
      }, Jv(vv)
    }

    function Ev(vv, zv) {
      return Ev = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(vv, zv) {
        return vv.__proto__ = zv, vv
      }, Ev(vv, zv)
    }

    function ov(vv, zv, Pv) {
      return (zv = bv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function bv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Av(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Av(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Av(zv) ? zv : zv + ""
    }

    function rv(vv) {
      return vv.dataKey
    }
    var kv = function(vv) {
      function zv() {
        return function(vv, zv) {
          if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
        }(this, zv), yv(this, zv, arguments)
      }
      return function(vv, zv) {
        if ("function" !== typeof zv && null !== zv) throw new TypeError("Super expression must either be null or a function");
        vv.prototype = Object.create(zv && zv.prototype, {
          constructor: {
            value: vv,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(vv, "prototype", {
          writable: !1
        }), zv && Ev(vv, zv)
      }(zv, vv), Pv = zv, (Sv = [{
        key: "render",
        value: function() {
          var vv = this,
            zv = this.props,
            Pv = zv.active,
            Sv = zv.allowEscapeViewBox,
            ev = zv.animationDuration,
            gv = zv.animationEasing,
            pv = zv.content,
            dv = zv.coordinate,
            Nv = zv.filterNull,
            lv = zv.isAnimationActive,
            Tv = zv.offset,
            Wv = zv.payload,
            wv = zv.payloadUniqBy,
            av = zv.position,
            sv = zv.reverseDirection,
            Cv = zv.useTranslate3d,
            iv = zv.viewBox,
            Gv = zv.wrapperStyle,
            mv = null !== Wv && void 0 !== Wv ? Wv : [];
          Nv && mv.length && (mv = (0, Zv.e)(Wv.filter((function(zv) {
            return null != zv.value && (!0 !== zv.hide || vv.props.includeHidden)
          })), wv, rv));
          var jv = mv.length > 0;
          return hv.createElement(Iv, {
            allowEscapeViewBox: Sv,
            animationDuration: ev,
            animationEasing: gv,
            isAnimationActive: lv,
            active: Pv,
            coordinate: dv,
            hasPayload: jv,
            offset: Tv,
            position: av,
            reverseDirection: sv,
            useTranslate3d: Cv,
            viewBox: iv,
            wrapperStyle: Gv
          }, function(vv, zv) {
            return hv.isValidElement(vv) ? hv.cloneElement(vv, zv) : "function" === typeof vv ? hv.createElement(vv, zv) : hv.createElement(cv, zv)
          }(pv, Hv(Hv({}, this.props), {}, {
            payload: mv
          })))
        }
      }]) && Mv(Pv.prototype, Sv), ev && Mv(Pv, ev), Object.defineProperty(Pv, "prototype", {
        writable: !1
      }), Pv;
      var Pv, Sv, ev
    }(hv.PureComponent);
    ov(kv, "displayName", "Tooltip"), ov(kv, "defaultProps", {
      accessibilityLayer: !1,
      allowEscapeViewBox: {
        x: !1,
        y: !1
      },
      animationDuration: 400,
      animationEasing: "ease",
      contentStyle: {},
      coordinate: {
        x: 0,
        y: 0
      },
      cursor: !0,
      cursorStyle: {},
      filterNull: !0,
      isAnimationActive: !Qv.d.isSsr,
      itemStyle: {},
      labelStyle: {},
      offset: 10,
      reverseDirection: {
        x: !1,
        y: !1
      },
      separator: " : ",
      trigger: "hover",
      useTranslate3d: !1,
      viewBox: {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      },
      wrapperStyle: {}
    })
  },
  5691: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5149),
      gv = ["children", "className"];

    function pv() {
      return pv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, pv.apply(this, arguments)
    }

    function dv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var Nv = hv.forwardRef((function(vv, zv) {
      var Pv = vv.children,
        Nv = vv.className,
        lv = dv(vv, gv),
        Tv = (0, Sv.b)("recharts-layer", Nv);
      return hv.createElement("g", pv({
        className: Tv
      }, (0, ev.e)(lv, !0), {
        ref: zv
      }), Pv)
    }))
  },
  5686: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5149),
      gv = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];

    function pv() {
      return pv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, pv.apply(this, arguments)
    }

    function dv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function Nv(vv) {
      var zv = vv.children,
        Pv = vv.width,
        Nv = vv.height,
        lv = vv.viewBox,
        Tv = vv.className,
        Wv = vv.style,
        wv = vv.title,
        av = vv.desc,
        sv = dv(vv, gv),
        Cv = lv || {
          width: Pv,
          height: Nv,
          x: 0,
          y: 0
        },
        iv = (0, Sv.b)("recharts-surface", Tv);
      return hv.createElement("svg", pv({}, (0, ev.e)(sv, !0, "svg"), {
        className: iv,
        width: Pv,
        height: Nv,
        style: Wv,
        viewBox: "".concat(Cv.x, " ").concat(Cv.y, " ").concat(Cv.width, " ").concat(Cv.height)
      }), hv.createElement("title", null, wv), hv.createElement("desc", null, av), zv)
    }
  },
  6040: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Gv,
      d: () => fv,
      f: () => Kv,
      i: () => Dv,
      l: () => mv,
      n: () => Ov,
      p: () => nv,
      q: () => jv,
      t: () => Yv,
      w: () => Fv
    });
    var hv = Pv(52),
      Sv = Pv(5677),
      ev = Pv(6048),
      gv = Pv.n(ev),
      pv = Pv(5970),
      dv = Pv.n(pv),
      Nv = Pv(4952),
      lv = Pv.n(Nv)()((function(vv) {
        return {
          x: vv.left,
          y: vv.top,
          width: vv.width,
          height: vv.height
        }
      }), (function(vv) {
        return ["l", vv.left, "t", vv.top, "w", vv.width, "h", vv.height].join("")
      })),
      Tv = Pv(4891);
    var Wv = (0, hv.createContext)(void 0),
      wv = (0, hv.createContext)(void 0),
      av = (0, hv.createContext)(void 0),
      sv = (0, hv.createContext)({}),
      Cv = (0, hv.createContext)(void 0),
      iv = (0, hv.createContext)(0),
      cv = (0, hv.createContext)(0),
      Gv = function(vv) {
        var zv = vv.state,
          Pv = zv.xAxisMap,
          Sv = zv.yAxisMap,
          ev = zv.offset,
          gv = vv.clipPathId,
          pv = vv.children,
          dv = vv.width,
          Nv = vv.height,
          Tv = lv(ev);
        return hv.createElement(Wv.Provider, {
          value: Pv
        }, hv.createElement(wv.Provider, {
          value: Sv
        }, hv.createElement(sv.Provider, {
          value: ev
        }, hv.createElement(av.Provider, {
          value: Tv
        }, hv.createElement(Cv.Provider, {
          value: gv
        }, hv.createElement(iv.Provider, {
          value: Nv
        }, hv.createElement(cv.Provider, {
          value: dv
        }, pv)))))))
      },
      mv = function() {
        return (0, hv.useContext)(Cv)
      };
    var jv = function(vv) {
        var zv = (0, hv.useContext)(Wv);
        null == zv && (0, Sv.c)(!1);
        var Pv = zv[vv];
        return null == Pv && (0, Sv.c)(!1), Pv
      },
      fv = function() {
        var vv = (0, hv.useContext)(Wv);
        return (0, Tv.e)(vv)
      },
      Fv = function() {
        var vv = (0, hv.useContext)(wv);
        return gv()(vv, (function(vv) {
          return dv()(vv.domain, Number.isFinite)
        })) || (0, Tv.e)(vv)
      },
      Yv = function(vv) {
        var zv = (0, hv.useContext)(wv);
        null == zv && (0, Sv.c)(!1);
        var Pv = zv[vv];
        return null == Pv && (0, Sv.c)(!1), Pv
      },
      nv = function() {
        return (0, hv.useContext)(av)
      },
      Ov = function() {
        return (0, hv.useContext)(sv)
      },
      Dv = function() {
        return (0, hv.useContext)(cv)
      },
      Kv = function() {
        return (0, hv.useContext)(iv)
      }
  },
  6074: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => rv
    });
    var hv = Pv(52);

    function Sv() {}

    function ev(vv, zv, Pv) {
      vv._context.bezierCurveTo((2 * vv._x0 + vv._x1) / 3, (2 * vv._y0 + vv._y1) / 3, (vv._x0 + 2 * vv._x1) / 3, (vv._y0 + 2 * vv._y1) / 3, (vv._x0 + 4 * vv._x1 + zv) / 6, (vv._y0 + 4 * vv._y1 + Pv) / 6)
    }

    function gv(vv) {
      this._context = vv
    }

    function pv(vv) {
      this._context = vv
    }

    function dv(vv) {
      this._context = vv
    }
    gv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 3:
            ev(this, this._x1, this._y1);
          case 2:
            this._context.lineTo(this._x1, this._y1)
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(vv, zv) : this._context.moveTo(vv, zv);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
          default:
            ev(this, vv, zv)
        }
        this._x0 = this._x1, this._x1 = vv, this._y0 = this._y1, this._y1 = zv
      }
    }, pv.prototype = {
      areaStart: Sv,
      areaEnd: Sv,
      lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
        }
      },
      point: function(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1, this._x2 = vv, this._y2 = zv;
            break;
          case 1:
            this._point = 2, this._x3 = vv, this._y3 = zv;
            break;
          case 2:
            this._point = 3, this._x4 = vv, this._y4 = zv, this._context.moveTo((this._x0 + 4 * this._x1 + vv) / 6, (this._y0 + 4 * this._y1 + zv) / 6);
            break;
          default:
            ev(this, vv, zv)
        }
        this._x0 = this._x1, this._x1 = vv, this._y0 = this._y1, this._y1 = zv
      }
    }, dv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
      },
      lineEnd: function() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var Pv = (this._x0 + 4 * this._x1 + vv) / 6,
              hv = (this._y0 + 4 * this._y1 + zv) / 6;
            this._line ? this._context.lineTo(Pv, hv) : this._context.moveTo(Pv, hv);
            break;
          case 3:
            this._point = 4;
          default:
            ev(this, vv, zv)
        }
        this._x0 = this._x1, this._x1 = vv, this._y0 = this._y1, this._y1 = zv
      }
    };
    class Nv {
      constructor(vv, zv) {
        this._context = vv, this._x = zv
      }
      areaStart() {
        this._line = 0
      }
      areaEnd() {
        this._line = NaN
      }
      lineStart() {
        this._point = 0
      }
      lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      }
      point(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(vv, zv) : this._context.moveTo(vv, zv);
            break;
          case 1:
            this._point = 2;
          default:
            this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + vv) / 2, this._y0, this._x0, zv, vv, zv) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + zv) / 2, vv, this._y0, vv, zv)
        }
        this._x0 = vv, this._y0 = zv
      }
    }

    function lv(vv) {
      this._context = vv
    }

    function Tv(vv) {
      this._context = vv
    }

    function Wv(vv) {
      return new Tv(vv)
    }

    function wv(vv) {
      return vv < 0 ? -1 : 1
    }

    function av(vv, zv, Pv) {
      var hv = vv._x1 - vv._x0,
        Sv = zv - vv._x1,
        ev = (vv._y1 - vv._y0) / (hv || Sv < 0 && -0),
        gv = (Pv - vv._y1) / (Sv || hv < 0 && -0),
        pv = (ev * Sv + gv * hv) / (hv + Sv);
      return (wv(ev) + wv(gv)) * Math.min(Math.abs(ev), Math.abs(gv), .5 * Math.abs(pv)) || 0
    }

    function sv(vv, zv) {
      var Pv = vv._x1 - vv._x0;
      return Pv ? (3 * (vv._y1 - vv._y0) / Pv - zv) / 2 : zv
    }

    function Cv(vv, zv, Pv) {
      var hv = vv._x0,
        Sv = vv._y0,
        ev = vv._x1,
        gv = vv._y1,
        pv = (ev - hv) / 3;
      vv._context.bezierCurveTo(hv + pv, Sv + pv * zv, ev - pv, gv - pv * Pv, ev, gv)
    }

    function iv(vv) {
      this._context = vv
    }

    function cv(vv) {
      this._context = new Gv(vv)
    }

    function Gv(vv) {
      this._context = vv
    }

    function mv(vv) {
      this._context = vv
    }

    function jv(vv) {
      var zv, Pv, hv = vv.length - 1,
        Sv = new Array(hv),
        ev = new Array(hv),
        gv = new Array(hv);
      for (Sv[0] = 0, ev[0] = 2, gv[0] = vv[0] + 2 * vv[1], zv = 1; zv < hv - 1; ++zv) Sv[zv] = 1, ev[zv] = 4, gv[zv] = 4 * vv[zv] + 2 * vv[zv + 1];
      for (Sv[hv - 1] = 2, ev[hv - 1] = 7, gv[hv - 1] = 8 * vv[hv - 1] + vv[hv], zv = 1; zv < hv; ++zv) Pv = Sv[zv] / ev[zv - 1], ev[zv] -= Pv, gv[zv] -= Pv * gv[zv - 1];
      for (Sv[hv - 1] = gv[hv - 1] / ev[hv - 1], zv = hv - 2; zv >= 0; --zv) Sv[zv] = (gv[zv] - Sv[zv + 1]) / ev[zv];
      for (ev[hv - 1] = (vv[hv] + Sv[hv - 1]) / 2, zv = 0; zv < hv - 1; ++zv) ev[zv] = 2 * vv[zv + 1] - Sv[zv + 1];
      return [Sv, ev]
    }

    function fv(vv, zv) {
      this._context = vv, this._t = zv
    }
    lv.prototype = {
      areaStart: Sv,
      areaEnd: Sv,
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        this._point && this._context.closePath()
      },
      point: function(vv, zv) {
        vv = +vv, zv = +zv, this._point ? this._context.lineTo(vv, zv) : (this._point = 1, this._context.moveTo(vv, zv))
      }
    }, Tv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._point = 0
      },
      lineEnd: function() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(vv, zv) : this._context.moveTo(vv, zv);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(vv, zv)
        }
      }
    }, iv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
      },
      lineEnd: function() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Cv(this, this._t0, sv(this, this._t0))
        }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
      },
      point: function(vv, zv) {
        var Pv = NaN;
        if (zv = +zv, (vv = +vv) !== this._x1 || zv !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(vv, zv) : this._context.moveTo(vv, zv);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3, Cv(this, sv(this, Pv = av(this, vv, zv)), Pv);
              break;
            default:
              Cv(this, this._t0, Pv = av(this, vv, zv))
          }
          this._x0 = this._x1, this._x1 = vv, this._y0 = this._y1, this._y1 = zv, this._t0 = Pv
        }
      }
    }, (cv.prototype = Object.create(iv.prototype)).point = function(vv, zv) {
      iv.prototype.point.call(this, zv, vv)
    }, Gv.prototype = {
      moveTo: function(vv, zv) {
        this._context.moveTo(zv, vv)
      },
      closePath: function() {
        this._context.closePath()
      },
      lineTo: function(vv, zv) {
        this._context.lineTo(zv, vv)
      },
      bezierCurveTo: function(vv, zv, Pv, hv, Sv, ev) {
        this._context.bezierCurveTo(zv, vv, hv, Pv, ev, Sv)
      }
    }, mv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x = [], this._y = []
      },
      lineEnd: function() {
        var vv = this._x,
          zv = this._y,
          Pv = vv.length;
        if (Pv)
          if (this._line ? this._context.lineTo(vv[0], zv[0]) : this._context.moveTo(vv[0], zv[0]), 2 === Pv) this._context.lineTo(vv[1], zv[1]);
          else
            for (var hv = jv(vv), Sv = jv(zv), ev = 0, gv = 1; gv < Pv; ++ev, ++gv) this._context.bezierCurveTo(hv[0][ev], Sv[0][ev], hv[1][ev], Sv[1][ev], vv[gv], zv[gv]);
        (this._line || 0 !== this._line && 1 === Pv) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
      },
      point: function(vv, zv) {
        this._x.push(+vv), this._y.push(+zv)
      }
    }, fv.prototype = {
      areaStart: function() {
        this._line = 0
      },
      areaEnd: function() {
        this._line = NaN
      },
      lineStart: function() {
        this._x = this._y = NaN, this._point = 0
      },
      lineEnd: function() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
      },
      point: function(vv, zv) {
        switch (vv = +vv, zv = +zv, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(vv, zv) : this._context.moveTo(vv, zv);
            break;
          case 1:
            this._point = 2;
          default:
            if (this._t <= 0) this._context.lineTo(this._x, zv), this._context.lineTo(vv, zv);
            else {
              var Pv = this._x * (1 - this._t) + vv * this._t;
              this._context.lineTo(Pv, this._y), this._context.lineTo(Pv, zv)
            }
        }
        this._x = vv, this._y = zv
      }
    };
    var Fv = Pv(5940),
      Yv = Pv(5823),
      nv = Pv(5827);

    function Ov(vv) {
      return vv[0]
    }

    function Dv(vv) {
      return vv[1]
    }

    function Kv(vv, zv) {
      var Pv = (0, Yv.c)(!0),
        hv = null,
        Sv = Wv,
        ev = null,
        gv = (0, nv.b)(pv);

      function pv(pv) {
        var dv, Nv, lv, Tv = (pv = (0, Fv.d)(pv)).length,
          Wv = !1;
        for (null == hv && (ev = Sv(lv = gv())), dv = 0; dv <= Tv; ++dv) !(dv < Tv && Pv(Nv = pv[dv], dv, pv)) === Wv && ((Wv = !Wv) ? ev.lineStart() : ev.lineEnd()), Wv && ev.point(+vv(Nv, dv, pv), +zv(Nv, dv, pv));
        if (lv) return ev = null, lv + "" || null
      }
      return vv = "function" === typeof vv ? vv : void 0 === vv ? Ov : (0, Yv.c)(vv), zv = "function" === typeof zv ? zv : void 0 === zv ? Dv : (0, Yv.c)(zv), pv.x = function(zv) {
        return arguments.length ? (vv = "function" === typeof zv ? zv : (0, Yv.c)(+zv), pv) : vv
      }, pv.y = function(vv) {
        return arguments.length ? (zv = "function" === typeof vv ? vv : (0, Yv.c)(+vv), pv) : zv
      }, pv.defined = function(vv) {
        return arguments.length ? (Pv = "function" === typeof vv ? vv : (0, Yv.c)(!!vv), pv) : Pv
      }, pv.curve = function(vv) {
        return arguments.length ? (Sv = vv, null != hv && (ev = Sv(hv)), pv) : Sv
      }, pv.context = function(vv) {
        return arguments.length ? (null == vv ? hv = ev = null : ev = Sv(hv = vv), pv) : hv
      }, pv
    }

    function Vv(vv, zv, Pv) {
      var hv = null,
        Sv = (0, Yv.c)(!0),
        ev = null,
        gv = Wv,
        pv = null,
        dv = (0, nv.b)(Nv);

      function Nv(Nv) {
        var lv, Tv, Wv, wv, av, sv = (Nv = (0, Fv.d)(Nv)).length,
          Cv = !1,
          iv = new Array(sv),
          cv = new Array(sv);
        for (null == ev && (pv = gv(av = dv())), lv = 0; lv <= sv; ++lv) {
          if (!(lv < sv && Sv(wv = Nv[lv], lv, Nv)) === Cv)
            if (Cv = !Cv) Tv = lv, pv.areaStart(), pv.lineStart();
            else {
              for (pv.lineEnd(), pv.lineStart(), Wv = lv - 1; Wv >= Tv; --Wv) pv.point(iv[Wv], cv[Wv]);
              pv.lineEnd(), pv.areaEnd()
            } Cv && (iv[lv] = +vv(wv, lv, Nv), cv[lv] = +zv(wv, lv, Nv), pv.point(hv ? +hv(wv, lv, Nv) : iv[lv], Pv ? +Pv(wv, lv, Nv) : cv[lv]))
        }
        if (av) return pv = null, av + "" || null
      }

      function lv() {
        return Kv().defined(Sv).curve(gv).context(ev)
      }
      return vv = "function" === typeof vv ? vv : void 0 === vv ? Ov : (0, Yv.c)(+vv), zv = "function" === typeof zv ? zv : void 0 === zv ? (0, Yv.c)(0) : (0, Yv.c)(+zv), Pv = "function" === typeof Pv ? Pv : void 0 === Pv ? Dv : (0, Yv.c)(+Pv), Nv.x = function(zv) {
        return arguments.length ? (vv = "function" === typeof zv ? zv : (0, Yv.c)(+zv), hv = null, Nv) : vv
      }, Nv.x0 = function(zv) {
        return arguments.length ? (vv = "function" === typeof zv ? zv : (0, Yv.c)(+zv), Nv) : vv
      }, Nv.x1 = function(vv) {
        return arguments.length ? (hv = null == vv ? null : "function" === typeof vv ? vv : (0, Yv.c)(+vv), Nv) : hv
      }, Nv.y = function(vv) {
        return arguments.length ? (zv = "function" === typeof vv ? vv : (0, Yv.c)(+vv), Pv = null, Nv) : zv
      }, Nv.y0 = function(vv) {
        return arguments.length ? (zv = "function" === typeof vv ? vv : (0, Yv.c)(+vv), Nv) : zv
      }, Nv.y1 = function(vv) {
        return arguments.length ? (Pv = null == vv ? null : "function" === typeof vv ? vv : (0, Yv.c)(+vv), Nv) : Pv
      }, Nv.lineX0 = Nv.lineY0 = function() {
        return lv().x(vv).y(zv)
      }, Nv.lineY1 = function() {
        return lv().x(vv).y(Pv)
      }, Nv.lineX1 = function() {
        return lv().x(hv).y(zv)
      }, Nv.defined = function(vv) {
        return arguments.length ? (Sv = "function" === typeof vv ? vv : (0, Yv.c)(!!vv), Nv) : Sv
      }, Nv.curve = function(vv) {
        return arguments.length ? (gv = vv, null != ev && (pv = gv(ev)), Nv) : gv
      }, Nv.context = function(vv) {
        return arguments.length ? (null == vv ? ev = pv = null : pv = gv(ev = vv), Nv) : ev
      }, Nv
    }
    var Uv = Pv(5783),
      Rv = Pv.n(Uv),
      xv = Pv(4995),
      tv = Pv.n(xv),
      qv = Pv(4802),
      Iv = Pv(5169),
      Qv = Pv(5149),
      Zv = Pv(4891);

    function Av(vv) {
      return Av = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Av(vv)
    }

    function Lv() {
      return Lv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Lv.apply(this, arguments)
    }

    function Hv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Mv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Hv(Object(Pv), !0).forEach((function(zv) {
          yv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Hv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function yv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Av(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Av(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Av(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var Bv = {
        curveBasisClosed: function(vv) {
          return new pv(vv)
        },
        curveBasisOpen: function(vv) {
          return new dv(vv)
        },
        curveBasis: function(vv) {
          return new gv(vv)
        },
        curveBumpX: function(vv) {
          return new Nv(vv, !0)
        },
        curveBumpY: function(vv) {
          return new Nv(vv, !1)
        },
        curveLinearClosed: function(vv) {
          return new lv(vv)
        },
        curveLinear: Wv,
        curveMonotoneX: function(vv) {
          return new iv(vv)
        },
        curveMonotoneY: function(vv) {
          return new cv(vv)
        },
        curveNatural: function(vv) {
          return new mv(vv)
        },
        curveStep: function(vv) {
          return new fv(vv, .5)
        },
        curveStepAfter: function(vv) {
          return new fv(vv, 1)
        },
        curveStepBefore: function(vv) {
          return new fv(vv, 0)
        }
      },
      Jv = function(vv) {
        return vv.x === +vv.x && vv.y === +vv.y
      },
      Ev = function(vv) {
        return vv.x
      },
      ov = function(vv) {
        return vv.y
      },
      bv = function(vv) {
        var zv, Pv = vv.type,
          hv = void 0 === Pv ? "linear" : Pv,
          Sv = vv.points,
          ev = void 0 === Sv ? [] : Sv,
          gv = vv.baseLine,
          pv = vv.layout,
          dv = vv.connectNulls,
          Nv = void 0 !== dv && dv,
          lv = function(vv, zv) {
            if (tv()(vv)) return vv;
            var Pv = "curve".concat(Rv()(vv));
            return "curveMonotone" !== Pv && "curveBump" !== Pv || !zv ? Bv[Pv] || Wv : Bv["".concat(Pv).concat("vertical" === zv ? "Y" : "X")]
          }(hv, pv),
          Tv = Nv ? ev.filter((function(vv) {
            return Jv(vv)
          })) : ev;
        if (Array.isArray(gv)) {
          var wv = Nv ? gv.filter((function(vv) {
              return Jv(vv)
            })) : gv,
            av = Tv.map((function(vv, zv) {
              return Mv(Mv({}, vv), {}, {
                base: wv[zv]
              })
            }));
          return (zv = "vertical" === pv ? Vv().y(ov).x1(Ev).x0((function(vv) {
            return vv.base.x
          })) : Vv().x(Ev).y1(ov).y0((function(vv) {
            return vv.base.y
          }))).defined(Jv).curve(lv), zv(av)
        }
        return (zv = "vertical" === pv && (0, Zv.t)(gv) ? Vv().y(ov).x1(Ev).x0(gv) : (0, Zv.t)(gv) ? Vv().x(Ev).y1(ov).y0(gv) : Kv().x(Ev).y(ov)).defined(Jv).curve(lv), zv(Tv)
      },
      rv = function(vv) {
        var zv = vv.className,
          Pv = vv.points,
          Sv = vv.path,
          ev = vv.pathRef;
        if ((!Pv || !Pv.length) && !Sv) return null;
        var gv = Pv && Pv.length ? bv(vv) : Sv;
        return hv.createElement("path", Lv({}, (0, Qv.e)(vv, !1), (0, Iv.g)(vv), {
          className: (0, qv.b)("recharts-curve", zv),
          d: gv,
          ref: ev
        }))
      }
  },
  5830: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5169),
      gv = Pv(5149);

    function pv() {
      return pv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, pv.apply(this, arguments)
    }
    var dv = function(vv) {
      var zv = vv.cx,
        Pv = vv.cy,
        dv = vv.r,
        Nv = vv.className,
        lv = (0, Sv.b)("recharts-dot", Nv);
      return zv === +zv && Pv === +Pv && dv === +dv ? hv.createElement("circle", pv({}, (0, gv.e)(vv, !1), (0, ev.g)(vv), {
        className: lv,
        cx: zv,
        cy: Pv,
        r: dv
      })) : null
    }
  },
  5833: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => iv,
      f: () => sv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5839),
      gv = Pv(5149);

    function pv(vv) {
      return pv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, pv(vv)
    }

    function dv() {
      return dv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, dv.apply(this, arguments)
    }

    function Nv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return lv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return lv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function lv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Tv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Wv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Tv(Object(Pv), !0).forEach((function(zv) {
          wv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Tv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function wv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != pv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != pv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == pv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var av = function(vv, zv, Pv, hv, Sv) {
        var ev, gv = Math.min(Math.abs(Pv) / 2, Math.abs(hv) / 2),
          pv = hv >= 0 ? 1 : -1,
          dv = Pv >= 0 ? 1 : -1,
          Nv = hv >= 0 && Pv >= 0 || hv < 0 && Pv < 0 ? 1 : 0;
        if (gv > 0 && Sv instanceof Array) {
          for (var lv = [0, 0, 0, 0], Tv = 0; Tv < 4; Tv++) lv[Tv] = Sv[Tv] > gv ? gv : Sv[Tv];
          ev = "M".concat(vv, ",").concat(zv + pv * lv[0]), lv[0] > 0 && (ev += "A ".concat(lv[0], ",").concat(lv[0], ",0,0,").concat(Nv, ",").concat(vv + dv * lv[0], ",").concat(zv)), ev += "L ".concat(vv + Pv - dv * lv[1], ",").concat(zv), lv[1] > 0 && (ev += "A ".concat(lv[1], ",").concat(lv[1], ",0,0,").concat(Nv, ",\n        ").concat(vv + Pv, ",").concat(zv + pv * lv[1])), ev += "L ".concat(vv + Pv, ",").concat(zv + hv - pv * lv[2]), lv[2] > 0 && (ev += "A ".concat(lv[2], ",").concat(lv[2], ",0,0,").concat(Nv, ",\n        ").concat(vv + Pv - dv * lv[2], ",").concat(zv + hv)), ev += "L ".concat(vv + dv * lv[3], ",").concat(zv + hv), lv[3] > 0 && (ev += "A ".concat(lv[3], ",").concat(lv[3], ",0,0,").concat(Nv, ",\n        ").concat(vv, ",").concat(zv + hv - pv * lv[3])), ev += "Z"
        } else if (gv > 0 && Sv === +Sv && Sv > 0) {
          var Wv = Math.min(gv, Sv);
          ev = "M ".concat(vv, ",").concat(zv + pv * Wv, "\n            A ").concat(Wv, ",").concat(Wv, ",0,0,").concat(Nv, ",").concat(vv + dv * Wv, ",").concat(zv, "\n            L ").concat(vv + Pv - dv * Wv, ",").concat(zv, "\n            A ").concat(Wv, ",").concat(Wv, ",0,0,").concat(Nv, ",").concat(vv + Pv, ",").concat(zv + pv * Wv, "\n            L ").concat(vv + Pv, ",").concat(zv + hv - pv * Wv, "\n            A ").concat(Wv, ",").concat(Wv, ",0,0,").concat(Nv, ",").concat(vv + Pv - dv * Wv, ",").concat(zv + hv, "\n            L ").concat(vv + dv * Wv, ",").concat(zv + hv, "\n            A ").concat(Wv, ",").concat(Wv, ",0,0,").concat(Nv, ",").concat(vv, ",").concat(zv + hv - pv * Wv, " Z")
        } else ev = "M ".concat(vv, ",").concat(zv, " h ").concat(Pv, " v ").concat(hv, " h ").concat(-Pv, " Z");
        return ev
      },
      sv = function(vv, zv) {
        if (!vv || !zv) return !1;
        var Pv = vv.x,
          hv = vv.y,
          Sv = zv.x,
          ev = zv.y,
          gv = zv.width,
          pv = zv.height;
        if (Math.abs(gv) > 0 && Math.abs(pv) > 0) {
          var dv = Math.min(Sv, Sv + gv),
            Nv = Math.max(Sv, Sv + gv),
            lv = Math.min(ev, ev + pv),
            Tv = Math.max(ev, ev + pv);
          return Pv >= dv && Pv <= Nv && hv >= lv && hv <= Tv
        }
        return !1
      },
      Cv = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
      },
      iv = function(vv) {
        var zv = Wv(Wv({}, Cv), vv),
          Pv = (0, hv.useRef)(),
          pv = Nv((0, hv.useState)(-1), 2),
          lv = pv[0],
          Tv = pv[1];
        (0, hv.useEffect)((function() {
          if (Pv.current && Pv.current.getTotalLength) try {
            var vv = Pv.current.getTotalLength();
            vv && Tv(vv)
          } catch (zv) {}
        }), []);
        var wv = zv.x,
          sv = zv.y,
          iv = zv.width,
          cv = zv.height,
          Gv = zv.radius,
          mv = zv.className,
          jv = zv.animationEasing,
          fv = zv.animationDuration,
          Fv = zv.animationBegin,
          Yv = zv.isAnimationActive,
          nv = zv.isUpdateAnimationActive;
        if (wv !== +wv || sv !== +sv || iv !== +iv || cv !== +cv || 0 === iv || 0 === cv) return null;
        var Ov = (0, Sv.b)("recharts-rectangle", mv);
        return nv ? hv.createElement(ev.c, {
          canBegin: lv > 0,
          from: {
            width: iv,
            height: cv,
            x: wv,
            y: sv
          },
          to: {
            width: iv,
            height: cv,
            x: wv,
            y: sv
          },
          duration: fv,
          animationEasing: jv,
          isActive: nv
        }, (function(vv) {
          var Sv = vv.width,
            pv = vv.height,
            Nv = vv.x,
            Tv = vv.y;
          return hv.createElement(ev.c, {
            canBegin: lv > 0,
            from: "0px ".concat(-1 === lv ? 1 : lv, "px"),
            to: "".concat(lv, "px 0px"),
            attributeName: "strokeDasharray",
            dw: Fv,
            duration: fv,
            isActive: Yv,
            easing: jv
          }, hv.createElement("path", dv({}, (0, gv.e)(zv, !0), {
            className: Ov,
            d: av(Nv, Tv, Sv, pv, Gv),
            ref: Pv
          })))
        })) : hv.createElement("path", dv({}, (0, gv.e)(zv, !0), {
          className: Ov,
          d: av(wv, sv, iv, cv, Gv)
        }))
      }
  },
  6030: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Cv
    });
    var hv = Pv(52),
      Sv = Pv(4802),
      ev = Pv(5149),
      gv = Pv(5946),
      pv = Pv(4891);

    function dv(vv) {
      return dv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, dv(vv)
    }

    function Nv() {
      return Nv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, Nv.apply(this, arguments)
    }

    function lv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Tv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? lv(Object(Pv), !0).forEach((function(zv) {
          Wv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : lv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Wv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != dv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != dv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == dv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var wv = function(vv) {
        var zv = vv.cx,
          Pv = vv.cy,
          hv = vv.radius,
          Sv = vv.angle,
          ev = vv.sign,
          pv = vv.isExternal,
          dv = vv.cornerRadius,
          Nv = vv.cornerIsExternal,
          lv = dv * (pv ? 1 : -1) + hv,
          Tv = Math.asin(dv / lv) / gv.c,
          Wv = Nv ? Sv : Sv + ev * Tv,
          wv = Nv ? Sv - ev * Tv : Sv;
        return {
          center: (0, gv.h)(zv, Pv, lv, Wv),
          circleTangency: (0, gv.h)(zv, Pv, hv, Wv),
          lineTangency: (0, gv.h)(zv, Pv, lv * Math.cos(Tv * gv.c), wv),
          fp: Tv
        }
      },
      av = function(vv) {
        var zv = vv.cx,
          Pv = vv.cy,
          hv = vv.innerRadius,
          Sv = vv.outerRadius,
          ev = vv.startAngle,
          dv = function(vv, zv) {
            return (0, pv.y)(zv - vv) * Math.min(Math.abs(zv - vv), 359.999)
          }(ev, vv.endAngle),
          Nv = ev + dv,
          lv = (0, gv.h)(zv, Pv, Sv, ev),
          Tv = (0, gv.h)(zv, Pv, Sv, Nv),
          Wv = "M ".concat(lv.x, ",").concat(lv.y, "\n    A ").concat(Sv, ",").concat(Sv, ",0,\n    ").concat(+(Math.abs(dv) > 180), ",").concat(+(ev > Nv), ",\n    ").concat(Tv.x, ",").concat(Tv.y, "\n  ");
        if (hv > 0) {
          var wv = (0, gv.h)(zv, Pv, hv, ev),
            av = (0, gv.h)(zv, Pv, hv, Nv);
          Wv += "L ".concat(av.x, ",").concat(av.y, "\n            A ").concat(hv, ",").concat(hv, ",0,\n            ").concat(+(Math.abs(dv) > 180), ",").concat(+(ev <= Nv), ",\n            ").concat(wv.x, ",").concat(wv.y, " Z")
        } else Wv += "L ".concat(zv, ",").concat(Pv, " Z");
        return Wv
      },
      sv = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1
      },
      Cv = function(vv) {
        var zv = Tv(Tv({}, sv), vv),
          Pv = zv.cx,
          gv = zv.cy,
          dv = zv.innerRadius,
          lv = zv.outerRadius,
          Wv = zv.cornerRadius,
          Cv = zv.forceCornerRadius,
          iv = zv.cornerIsExternal,
          cv = zv.startAngle,
          Gv = zv.endAngle,
          mv = zv.className;
        if (lv < dv || cv === Gv) return null;
        var jv, fv = (0, Sv.b)("recharts-sector", mv),
          Fv = lv - dv,
          Yv = (0, pv.g)(Wv, Fv, 0, !0);
        return jv = Yv > 0 && Math.abs(cv - Gv) < 360 ? function(vv) {
          var zv = vv.cx,
            Pv = vv.cy,
            hv = vv.innerRadius,
            Sv = vv.outerRadius,
            ev = vv.cornerRadius,
            gv = vv.forceCornerRadius,
            dv = vv.cornerIsExternal,
            Nv = vv.startAngle,
            lv = vv.endAngle,
            Tv = (0, pv.y)(lv - Nv),
            Wv = wv({
              cx: zv,
              cy: Pv,
              radius: Sv,
              angle: Nv,
              sign: Tv,
              cornerRadius: ev,
              cornerIsExternal: dv
            }),
            sv = Wv.circleTangency,
            Cv = Wv.lineTangency,
            iv = Wv.fp,
            cv = wv({
              cx: zv,
              cy: Pv,
              radius: Sv,
              angle: lv,
              sign: -Tv,
              cornerRadius: ev,
              cornerIsExternal: dv
            }),
            Gv = cv.circleTangency,
            mv = cv.lineTangency,
            jv = cv.fp,
            fv = dv ? Math.abs(Nv - lv) : Math.abs(Nv - lv) - iv - jv;
          if (fv < 0) return gv ? "M ".concat(Cv.x, ",").concat(Cv.y, "\n        a").concat(ev, ",").concat(ev, ",0,0,1,").concat(2 * ev, ",0\n        a").concat(ev, ",").concat(ev, ",0,0,1,").concat(2 * -ev, ",0\n      ") : av({
            cx: zv,
            cy: Pv,
            innerRadius: hv,
            outerRadius: Sv,
            startAngle: Nv,
            endAngle: lv
          });
          var Fv = "M ".concat(Cv.x, ",").concat(Cv.y, "\n    A").concat(ev, ",").concat(ev, ",0,0,").concat(+(Tv < 0), ",").concat(sv.x, ",").concat(sv.y, "\n    A").concat(Sv, ",").concat(Sv, ",0,").concat(+(fv > 180), ",").concat(+(Tv < 0), ",").concat(Gv.x, ",").concat(Gv.y, "\n    A").concat(ev, ",").concat(ev, ",0,0,").concat(+(Tv < 0), ",").concat(mv.x, ",").concat(mv.y, "\n  ");
          if (hv > 0) {
            var Yv = wv({
                cx: zv,
                cy: Pv,
                radius: hv,
                angle: Nv,
                sign: Tv,
                isExternal: !0,
                cornerRadius: ev,
                cornerIsExternal: dv
              }),
              nv = Yv.circleTangency,
              Ov = Yv.lineTangency,
              Dv = Yv.fp,
              Kv = wv({
                cx: zv,
                cy: Pv,
                radius: hv,
                angle: lv,
                sign: -Tv,
                isExternal: !0,
                cornerRadius: ev,
                cornerIsExternal: dv
              }),
              Vv = Kv.circleTangency,
              Uv = Kv.lineTangency,
              Rv = Kv.fp,
              xv = dv ? Math.abs(Nv - lv) : Math.abs(Nv - lv) - Dv - Rv;
            if (xv < 0 && 0 === ev) return "".concat(Fv, "L").concat(zv, ",").concat(Pv, "Z");
            Fv += "L".concat(Uv.x, ",").concat(Uv.y, "\n      A").concat(ev, ",").concat(ev, ",0,0,").concat(+(Tv < 0), ",").concat(Vv.x, ",").concat(Vv.y, "\n      A").concat(hv, ",").concat(hv, ",0,").concat(+(xv > 180), ",").concat(+(Tv > 0), ",").concat(nv.x, ",").concat(nv.y, "\n      A").concat(ev, ",").concat(ev, ",0,0,").concat(+(Tv < 0), ",").concat(Ov.x, ",").concat(Ov.y, "Z")
          } else Fv += "L".concat(zv, ",").concat(Pv, "Z");
          return Fv
        }({
          cx: Pv,
          cy: gv,
          innerRadius: dv,
          outerRadius: lv,
          cornerRadius: Math.min(Yv, Fv / 2),
          forceCornerRadius: Cv,
          cornerIsExternal: iv,
          startAngle: cv,
          endAngle: Gv
        }) : av({
          cx: Pv,
          cy: gv,
          innerRadius: dv,
          outerRadius: lv,
          startAngle: cv,
          endAngle: Gv
        }), hv.createElement("path", Nv({}, (0, ev.e)(zv, !0), {
          className: fv,
          d: jv,
          role: "img"
        }))
      }
  },
  5774: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Mv
    });
    var hv = Pv(52),
      Sv = Pv(5783),
      ev = Pv.n(Sv);
    Math.abs, Math.atan2;
    const gv = Math.cos,
      pv = (Math.max, Math.min, Math.sin),
      dv = Math.sqrt,
      Nv = Math.PI,
      lv = 2 * Nv;
    const Tv = {
        draw(vv, zv) {
          const Pv = dv(zv / Nv);
          vv.moveTo(Pv, 0), vv.arc(0, 0, Pv, 0, lv)
        }
      },
      Wv = {
        draw(vv, zv) {
          const Pv = dv(zv / 5) / 2;
          vv.moveTo(-3 * Pv, -Pv), vv.lineTo(-Pv, -Pv), vv.lineTo(-Pv, -3 * Pv), vv.lineTo(Pv, -3 * Pv), vv.lineTo(Pv, -Pv), vv.lineTo(3 * Pv, -Pv), vv.lineTo(3 * Pv, Pv), vv.lineTo(Pv, Pv), vv.lineTo(Pv, 3 * Pv), vv.lineTo(-Pv, 3 * Pv), vv.lineTo(-Pv, Pv), vv.lineTo(-3 * Pv, Pv), vv.closePath()
        }
      },
      wv = dv(1 / 3),
      av = 2 * wv,
      sv = {
        draw(vv, zv) {
          const Pv = dv(zv / av),
            hv = Pv * wv;
          vv.moveTo(0, -Pv), vv.lineTo(hv, 0), vv.lineTo(0, Pv), vv.lineTo(-hv, 0), vv.closePath()
        }
      },
      Cv = {
        draw(vv, zv) {
          const Pv = dv(zv),
            hv = -Pv / 2;
          vv.rect(hv, hv, Pv, Pv)
        }
      },
      iv = pv(Nv / 10) / pv(7 * Nv / 10),
      cv = pv(lv / 10) * iv,
      Gv = -gv(lv / 10) * iv,
      mv = {
        draw(vv, zv) {
          const Pv = dv(.8908130915292852 * zv),
            hv = cv * Pv,
            Sv = Gv * Pv;
          vv.moveTo(0, -Pv), vv.lineTo(hv, Sv);
          for (let ev = 1; ev < 5; ++ev) {
            const zv = lv * ev / 5,
              dv = gv(zv),
              Nv = pv(zv);
            vv.lineTo(Nv * Pv, -dv * Pv), vv.lineTo(dv * hv - Nv * Sv, Nv * hv + dv * Sv)
          }
          vv.closePath()
        }
      },
      jv = dv(3),
      fv = {
        draw(vv, zv) {
          const Pv = -dv(zv / (3 * jv));
          vv.moveTo(0, 2 * Pv), vv.lineTo(-jv * Pv, -Pv), vv.lineTo(jv * Pv, -Pv), vv.closePath()
        }
      },
      Fv = -.5,
      Yv = dv(3) / 2,
      nv = 1 / dv(12),
      Ov = 3 * (nv / 2 + 1),
      Dv = {
        draw(vv, zv) {
          const Pv = dv(zv / Ov),
            hv = Pv / 2,
            Sv = Pv * nv,
            ev = hv,
            gv = Pv * nv + Pv,
            pv = -ev,
            Nv = gv;
          vv.moveTo(hv, Sv), vv.lineTo(ev, gv), vv.lineTo(pv, Nv), vv.lineTo(Fv * hv - Yv * Sv, Yv * hv + Fv * Sv), vv.lineTo(Fv * ev - Yv * gv, Yv * ev + Fv * gv), vv.lineTo(Fv * pv - Yv * Nv, Yv * pv + Fv * Nv), vv.lineTo(Fv * hv + Yv * Sv, Fv * Sv - Yv * hv), vv.lineTo(Fv * ev + Yv * gv, Fv * gv - Yv * ev), vv.lineTo(Fv * pv + Yv * Nv, Fv * Nv - Yv * pv), vv.closePath()
        }
      };
    var Kv = Pv(5823),
      Vv = Pv(5827);
    dv(3), dv(3);
    var Uv = Pv(4802),
      Rv = Pv(5149);

    function xv(vv) {
      return xv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, xv(vv)
    }
    var tv = ["type", "size", "sizeType"];

    function qv() {
      return qv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, qv.apply(this, arguments)
    }

    function Iv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Qv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Iv(Object(Pv), !0).forEach((function(zv) {
          Zv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Iv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Zv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != xv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != xv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == xv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Av(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }
    var Lv = {
        symbolCircle: Tv,
        symbolCross: Wv,
        symbolDiamond: sv,
        symbolSquare: Cv,
        symbolStar: mv,
        symbolTriangle: fv,
        symbolWye: Dv
      },
      Hv = Math.PI / 180,
      Mv = function(vv) {
        var zv = vv.type,
          Pv = void 0 === zv ? "circle" : zv,
          Sv = vv.size,
          gv = void 0 === Sv ? 64 : Sv,
          pv = vv.sizeType,
          dv = void 0 === pv ? "area" : pv,
          Nv = Qv(Qv({}, Av(vv, tv)), {}, {
            type: Pv,
            size: gv,
            sizeType: dv
          }),
          lv = Nv.className,
          Wv = Nv.cx,
          wv = Nv.cy,
          av = (0, Rv.e)(Nv, !0);
        return Wv === +Wv && wv === +wv && gv === +gv ? hv.createElement("path", qv({}, av, {
          className: (0, Uv.b)("recharts-symbols", lv),
          transform: "translate(".concat(Wv, ", ").concat(wv, ")"),
          d: function() {
            var vv = function(vv) {
                var zv = "symbol".concat(ev()(vv));
                return Lv[zv] || Tv
              }(Pv),
              zv = function(vv, zv) {
                let Pv = null,
                  hv = (0, Vv.b)(Sv);

                function Sv() {
                  let Sv;
                  if (Pv || (Pv = Sv = hv()), vv.apply(this, arguments).draw(Pv, +zv.apply(this, arguments)), Sv) return Pv = null, Sv + "" || null
                }
                return vv = "function" === typeof vv ? vv : (0, Kv.c)(vv || Tv), zv = "function" === typeof zv ? zv : (0, Kv.c)(void 0 === zv ? 64 : +zv), Sv.type = function(zv) {
                  return arguments.length ? (vv = "function" === typeof zv ? zv : (0, Kv.c)(zv), Sv) : vv
                }, Sv.size = function(vv) {
                  return arguments.length ? (zv = "function" === typeof vv ? vv : (0, Kv.c)(+vv), Sv) : zv
                }, Sv.context = function(vv) {
                  return arguments.length ? (Pv = null == vv ? null : vv, Sv) : Pv
                }, Sv
              }().type(vv).size(function(vv, zv, Pv) {
                if ("area" === zv) return vv;
                switch (Pv) {
                  case "cross":
                    return 5 * vv * vv / 9;
                  case "diamond":
                    return .5 * vv * vv / Math.sqrt(3);
                  case "square":
                    return vv * vv;
                  case "star":
                    var hv = 18 * Hv;
                    return 1.25 * vv * vv * (Math.tan(hv) - Math.tan(2 * hv) * Math.pow(Math.tan(hv), 2));
                  case "triangle":
                    return Math.sqrt(3) * vv * vv / 4;
                  case "wye":
                    return (21 - 10 * Math.sqrt(3)) * vv * vv / 8;
                  default:
                    return Math.PI * vv * vv / 4
                }
              }(gv, dv, Pv));
            return zv()
          }()
        })) : null
      };
    Mv.registerSymbol = function(vv, zv) {
      Lv["symbol".concat(ev()(vv))] = zv
    }
  },
  6011: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Zv,
      h: () => Jv,
      j: () => Av,
      n: () => Lv,
      q: () => Hv
    });
    var hv = Pv(52),
      Sv = Pv(4995),
      ev = Pv.n(Sv),
      gv = Pv(6013),
      pv = Pv.n(gv),
      dv = Pv(6028),
      Nv = Pv.n(dv),
      lv = Pv(5924),
      Tv = Pv.n(lv),
      Wv = Pv(5833),
      wv = Pv(4802),
      av = Pv(5839),
      sv = Pv(5149);

    function Cv(vv) {
      return Cv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Cv(vv)
    }

    function iv() {
      return iv = Object.assign ? Object.assign.bind() : function(vv) {
        for (var zv = 1; zv < arguments.length; zv++) {
          var Pv = arguments[zv];
          for (var hv in Pv) Object.prototype.hasOwnProperty.call(Pv, hv) && (vv[hv] = Pv[hv])
        }
        return vv
      }, iv.apply(this, arguments)
    }

    function cv(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        var Pv = null == vv ? null : "undefined" != typeof Symbol && vv[Symbol.iterator] || vv["@@iterator"];
        if (null != Pv) {
          var hv, Sv, ev, gv, pv = [],
            dv = !0,
            Nv = !1;
          try {
            if (ev = (Pv = Pv.call(vv)).next, 0 === zv) {
              if (Object(Pv) !== Pv) return;
              dv = !1
            } else
              for (; !(dv = (hv = ev.call(Pv)).done) && (pv.push(hv.value), pv.length !== zv); dv = !0);
          } catch (vv) {
            Nv = !0, Sv = vv
          } finally {
            try {
              if (!dv && null != Pv.return && (gv = Pv.return(), Object(gv) !== gv)) return
            } finally {
              if (Nv) throw Sv
            }
          }
          return pv
        }
      }(vv, zv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Gv(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Gv(vv, zv)
      }(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Gv(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function mv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function jv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? mv(Object(Pv), !0).forEach((function(zv) {
          fv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : mv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function fv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Cv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Cv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Cv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var Fv = function(vv, zv, Pv, hv, Sv) {
        var ev, gv = Pv - hv;
        return ev = "M ".concat(vv, ",").concat(zv), ev += "L ".concat(vv + Pv, ",").concat(zv), ev += "L ".concat(vv + Pv - gv / 2, ",").concat(zv + Sv), ev += "L ".concat(vv + Pv - gv / 2 - hv, ",").concat(zv + Sv), ev += "L ".concat(vv, ",").concat(zv, " Z")
      },
      Yv = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease"
      },
      nv = function(vv) {
        var zv = jv(jv({}, Yv), vv),
          Pv = (0, hv.useRef)(),
          Sv = cv((0, hv.useState)(-1), 2),
          ev = Sv[0],
          gv = Sv[1];
        (0, hv.useEffect)((function() {
          if (Pv.current && Pv.current.getTotalLength) try {
            var vv = Pv.current.getTotalLength();
            vv && gv(vv)
          } catch (zv) {}
        }), []);
        var pv = zv.x,
          dv = zv.y,
          Nv = zv.upperWidth,
          lv = zv.lowerWidth,
          Tv = zv.height,
          Wv = zv.className,
          Cv = zv.animationEasing,
          Gv = zv.animationDuration,
          mv = zv.animationBegin,
          fv = zv.isUpdateAnimationActive;
        if (pv !== +pv || dv !== +dv || Nv !== +Nv || lv !== +lv || Tv !== +Tv || 0 === Nv && 0 === lv || 0 === Tv) return null;
        var nv = (0, wv.b)("recharts-trapezoid", Wv);
        return fv ? hv.createElement(av.c, {
          canBegin: ev > 0,
          from: {
            upperWidth: 0,
            lowerWidth: 0,
            height: Tv,
            x: pv,
            y: dv
          },
          to: {
            upperWidth: Nv,
            lowerWidth: lv,
            height: Tv,
            x: pv,
            y: dv
          },
          duration: Gv,
          animationEasing: Cv,
          isActive: fv
        }, (function(vv) {
          var Sv = vv.upperWidth,
            gv = vv.lowerWidth,
            pv = vv.height,
            dv = vv.x,
            Nv = vv.y;
          return hv.createElement(av.c, {
            canBegin: ev > 0,
            from: "0px ".concat(-1 === ev ? 1 : ev, "px"),
            to: "".concat(ev, "px 0px"),
            attributeName: "strokeDasharray",
            dw: mv,
            duration: Gv,
            easing: Cv
          }, hv.createElement("path", iv({}, (0, sv.e)(zv, !0), {
            className: nv,
            d: Fv(dv, Nv, Sv, gv, pv),
            ref: Pv
          })))
        })) : hv.createElement("g", null, hv.createElement("path", iv({}, (0, sv.e)(zv, !0), {
          className: nv,
          d: Fv(pv, dv, Nv, lv, Tv)
        })))
      },
      Ov = Pv(6030),
      Dv = Pv(5691),
      Kv = Pv(5774),
      Vv = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];

    function Uv(vv) {
      return Uv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Uv(vv)
    }

    function Rv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function xv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function tv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? xv(Object(Pv), !0).forEach((function(zv) {
          qv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : xv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function qv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Uv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Uv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Uv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Iv(vv, zv) {
      return tv(tv({}, zv), vv)
    }

    function Qv(vv) {
      var zv = vv.shapeType,
        Pv = vv.elementProps;
      switch (zv) {
        case "rectangle":
          return hv.createElement(Wv.c, Pv);
        case "trapezoid":
          return hv.createElement(nv, Pv);
        case "sector":
          return hv.createElement(Ov.e, Pv);
        case "symbols":
          if (function(vv) {
              return "symbols" === vv
            }(zv)) return hv.createElement(Kv.c, Pv);
          break;
        default:
          return null
      }
    }

    function Zv(vv) {
      var zv, Pv = vv.option,
        Sv = vv.shapeType,
        gv = vv.propTransformer,
        dv = void 0 === gv ? Iv : gv,
        lv = vv.activeClassName,
        Tv = void 0 === lv ? "recharts-active-shape" : lv,
        Wv = vv.isActive,
        wv = Rv(vv, Vv);
      if ((0, hv.isValidElement)(Pv)) zv = (0, hv.cloneElement)(Pv, tv(tv({}, wv), function(vv) {
        return (0, hv.isValidElement)(vv) ? vv.props : vv
      }(Pv)));
      else if (ev()(Pv)) zv = Pv(wv);
      else if (pv()(Pv) && !Nv()(Pv)) {
        var av = dv(Pv, wv);
        zv = hv.createElement(Qv, {
          shapeType: Sv,
          elementProps: av
        })
      } else {
        var sv = wv;
        zv = hv.createElement(Qv, {
          shapeType: Sv,
          elementProps: sv
        })
      }
      return Wv ? hv.createElement(Dv.c, {
        className: Tv
      }, zv) : zv
    }

    function Av(vv, zv) {
      return null != zv && "trapezoids" in vv.props
    }

    function Lv(vv, zv) {
      return null != zv && "sectors" in vv.props
    }

    function Hv(vv, zv) {
      return null != zv && "points" in vv.props
    }

    function Mv(vv, zv) {
      var Pv, hv, Sv = vv.x === (null === zv || void 0 === zv || null === (Pv = zv.labelViewBox) || void 0 === Pv ? void 0 : Pv.x) || vv.x === zv.x,
        ev = vv.y === (null === zv || void 0 === zv || null === (hv = zv.labelViewBox) || void 0 === hv ? void 0 : hv.y) || vv.y === zv.y;
      return Sv && ev
    }

    function yv(vv, zv) {
      var Pv = vv.endAngle === zv.endAngle,
        hv = vv.startAngle === zv.startAngle;
      return Pv && hv
    }

    function Bv(vv, zv) {
      var Pv = vv.x === zv.x,
        hv = vv.y === zv.y,
        Sv = vv.z === zv.z;
      return Pv && hv && Sv
    }

    function Jv(vv) {
      var zv = vv.activeTooltipItem,
        Pv = vv.graphicalItem,
        hv = vv.itemData,
        Sv = function(vv, zv) {
          var Pv;
          return Av(vv, zv) ? Pv = "trapezoids" : Lv(vv, zv) ? Pv = "sectors" : Hv(vv, zv) && (Pv = "points"), Pv
        }(Pv, zv),
        ev = function(vv, zv) {
          var Pv, hv;
          return Av(vv, zv) ? null === (Pv = zv.tooltipPayload) || void 0 === Pv || null === (Pv = Pv[0]) || void 0 === Pv || null === (Pv = Pv.payload) || void 0 === Pv ? void 0 : Pv.payload : Lv(vv, zv) ? null === (hv = zv.tooltipPayload) || void 0 === hv || null === (hv = hv[0]) || void 0 === hv || null === (hv = hv.payload) || void 0 === hv ? void 0 : hv.payload : Hv(vv, zv) ? zv.payload : {}
        }(Pv, zv),
        gv = hv.filter((function(vv, hv) {
          var gv = Tv()(ev, vv),
            pv = Pv.props[Sv].filter((function(vv) {
              var hv = function(vv, zv) {
                var Pv;
                return Av(vv, zv) ? Pv = Mv : Lv(vv, zv) ? Pv = yv : Hv(vv, zv) && (Pv = Bv), Pv
              }(Pv, zv);
              return hv(vv, zv)
            })),
            dv = Pv.props[Sv].indexOf(pv[pv.length - 1]);
          return gv && hv === dv
        }));
      return hv.indexOf(gv[gv.length - 1])
    }
  },
  5958: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv,
      e: () => iv,
      g: () => fv,
      i: () => Gv,
      j: () => cv
    });
    var hv = Pv(5960),
      Sv = Pv.n(hv),
      ev = Pv(5970),
      gv = Pv.n(ev),
      pv = Pv(5857),
      dv = Pv(5149),
      Nv = Pv(4891),
      lv = Pv(5989);

    function Tv(vv) {
      return Tv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Tv(vv)
    }

    function Wv(vv, zv) {
      for (var Pv = 0; Pv < zv.length; Pv++) {
        var hv = zv[Pv];
        hv.enumerable = hv.enumerable || !1, hv.configurable = !0, "value" in hv && (hv.writable = !0), Object.defineProperty(vv, Cv(hv.key), hv)
      }
    }

    function wv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function av(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? wv(Object(Pv), !0).forEach((function(zv) {
          sv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : wv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function sv(vv, zv, Pv) {
      return (zv = Cv(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function Cv(vv) {
      var zv = function(vv, zv) {
        if ("object" != Tv(vv) || !vv) return vv;
        var Pv = vv[Symbol.toPrimitive];
        if (void 0 !== Pv) {
          var hv = Pv.call(vv, zv || "default");
          if ("object" != Tv(hv)) return hv;
          throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === zv ? String : Number)(vv)
      }(vv, "string");
      return "symbol" == Tv(zv) ? zv : zv + ""
    }
    var iv = function(vv, zv, Pv, hv, Sv) {
        var ev = vv.width,
          gv = vv.height,
          Tv = vv.layout,
          Wv = vv.children,
          wv = Object.keys(zv),
          Cv = {
            left: Pv.left,
            leftMirror: Pv.left,
            right: ev - Pv.right,
            rightMirror: ev - Pv.right,
            top: Pv.top,
            topMirror: Pv.top,
            bottom: gv - Pv.bottom,
            bottomMirror: gv - Pv.bottom
          },
          iv = !!(0, dv.k)(Wv, lv.b);
        return wv.reduce((function(ev, gv) {
          var dv, lv, Wv, wv, cv, Gv = zv[gv],
            mv = Gv.orientation,
            jv = Gv.domain,
            fv = Gv.padding,
            Fv = void 0 === fv ? {} : fv,
            Yv = Gv.mirror,
            nv = Gv.reversed,
            Ov = "".concat(mv).concat(Yv ? "Mirror" : "");
          if ("number" === Gv.type && ("gap" === Gv.padding || "no-gap" === Gv.padding)) {
            var Dv = jv[1] - jv[0],
              Kv = 1 / 0,
              Vv = Gv.categoricalDomain.sort(Nv.b);
            if (Vv.forEach((function(vv, zv) {
                zv > 0 && (Kv = Math.min((vv || 0) - (Vv[zv - 1] || 0), Kv))
              })), Number.isFinite(Kv)) {
              var Uv = Kv / Dv,
                Rv = "vertical" === Gv.layout ? Pv.height : Pv.width;
              if ("gap" === Gv.padding && (dv = Uv * Rv / 2), "no-gap" === Gv.padding) {
                var xv = (0, Nv.g)(vv.barCategoryGap, Uv * Rv),
                  tv = Uv * Rv / 2;
                dv = tv - xv - (tv - xv) / Rv * xv
              }
            }
          }
          lv = "xAxis" === hv ? [Pv.left + (Fv.left || 0) + (dv || 0), Pv.left + Pv.width - (Fv.right || 0) - (dv || 0)] : "yAxis" === hv ? "horizontal" === Tv ? [Pv.top + Pv.height - (Fv.bottom || 0), Pv.top + (Fv.top || 0)] : [Pv.top + (Fv.top || 0) + (dv || 0), Pv.top + Pv.height - (Fv.bottom || 0) - (dv || 0)] : Gv.range, nv && (lv = [lv[1], lv[0]]);
          var qv = (0, pv.pb)(Gv, Sv, iv),
            Iv = qv.scale,
            Qv = qv.realScaleType;
          Iv.domain(jv).range(lv), (0, pv.g)(Iv);
          var Zv = (0, pv._)(Iv, av(av({}, Gv), {}, {
            realScaleType: Qv
          }));
          "xAxis" === hv ? (cv = "top" === mv && !Yv || "bottom" === mv && Yv, Wv = Pv.left, wv = Cv[Ov] - cv * Gv.height) : "yAxis" === hv && (cv = "left" === mv && !Yv || "right" === mv && Yv, Wv = Cv[Ov] - cv * Gv.width, wv = Pv.top);
          var Av = av(av(av({}, Gv), Zv), {}, {
            realScaleType: Qv,
            x: Wv,
            y: wv,
            scale: Iv,
            width: "xAxis" === hv ? Pv.width : Gv.width,
            height: "yAxis" === hv ? Pv.height : Gv.height
          });
          return Av.bandSize = (0, pv.o)(Av, Zv), Gv.hide || "xAxis" !== hv ? Gv.hide || (Cv[Ov] += (cv ? -1 : 1) * Av.width) : Cv[Ov] += (cv ? -1 : 1) * Av.height, av(av({}, ev), {}, sv({}, gv, Av))
        }), {})
      },
      cv = function(vv, zv) {
        var Pv = vv.x,
          hv = vv.y,
          Sv = zv.x,
          ev = zv.y;
        return {
          x: Math.min(Pv, Sv),
          y: Math.min(hv, ev),
          width: Math.abs(Sv - Pv),
          height: Math.abs(ev - hv)
        }
      },
      Gv = function(vv) {
        var zv = vv.x1,
          Pv = vv.y1,
          hv = vv.x2,
          Sv = vv.y2;
        return cv({
          x: zv,
          y: Pv
        }, {
          x: hv,
          y: Sv
        })
      },
      mv = function() {
        function vv(zv) {
          ! function(vv, zv) {
            if (!(vv instanceof zv)) throw new TypeError("Cannot call a class as a function")
          }(this, vv), this.scale = zv
        }
        return zv = vv, Pv = [{
          key: "domain",
          get: function() {
            return this.scale.domain
          }
        }, {
          key: "range",
          get: function() {
            return this.scale.range
          }
        }, {
          key: "rangeMin",
          get: function() {
            return this.range()[0]
          }
        }, {
          key: "rangeMax",
          get: function() {
            return this.range()[1]
          }
        }, {
          key: "bandwidth",
          get: function() {
            return this.scale.bandwidth
          }
        }, {
          key: "apply",
          value: function(vv) {
            var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Pv = zv.bandAware,
              hv = zv.position;
            if (void 0 !== vv) {
              if (hv) switch (hv) {
                case "start":
                default:
                  return this.scale(vv);
                case "middle":
                  var Sv = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(vv) + Sv;
                case "end":
                  var ev = this.bandwidth ? this.bandwidth() : 0;
                  return this.scale(vv) + ev
              }
              if (Pv) {
                var gv = this.bandwidth ? this.bandwidth() / 2 : 0;
                return this.scale(vv) + gv
              }
              return this.scale(vv)
            }
          }
        }, {
          key: "isInRange",
          value: function(vv) {
            var zv = this.range(),
              Pv = zv[0],
              hv = zv[zv.length - 1];
            return Pv <= hv ? vv >= Pv && vv <= hv : vv >= hv && vv <= Pv
          }
        }], hv = [{
          key: "create",
          value: function(zv) {
            return new vv(zv)
          }
        }], Pv && Wv(zv.prototype, Pv), hv && Wv(zv, hv), Object.defineProperty(zv, "prototype", {
          writable: !1
        }), zv;
        var zv, Pv, hv
      }();
    sv(mv, "EPS", 1e-4);
    var jv = function(vv) {
      var zv = Object.keys(vv).reduce((function(zv, Pv) {
        return av(av({}, zv), {}, sv({}, Pv, mv.create(vv[Pv])))
      }), {});
      return av(av({}, zv), {}, {
        apply: function(vv) {
          var Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            hv = Pv.bandAware,
            ev = Pv.position;
          return Sv()(vv, (function(vv, Pv) {
            return zv[Pv].apply(vv, {
              bandAware: hv,
              position: ev
            })
          }))
        },
        isInRange: function(vv) {
          return gv()(vv, (function(vv, Pv) {
            return zv[Pv].isInRange(vv)
          }))
        }
      })
    };
    var fv = function(vv) {
      var zv = vv.width,
        Pv = vv.height,
        hv = function(vv) {
          return (vv % 180 + 180) % 180
        }(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
        Sv = hv * Math.PI / 180,
        ev = Math.atan(Pv / zv),
        gv = Sv > ev && Sv < Math.PI - ev ? Pv / Math.sin(Sv) : zv / Math.cos(Sv);
      return Math.abs(gv)
    }
  },
  5857: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Rg,
      f: () => Dg,
      g: () => yg,
      h: () => Lg,
      l: () => Bg,
      o: () => ep,
      r: () => Ug,
      s: () => Vg,
      w: () => ug,
      z: () => Xg,
      B: () => kg,
      F: () => Qg,
      H: () => Og,
      J: () => qg,
      M: () => zp,
      O: () => Kg,
      S: () => bg,
      W: () => vp,
      X: () => Zg,
      _: () => rg,
      cb: () => pp,
      eb: () => ng,
      gb: () => Ig,
      kb: () => gp,
      nb: () => tg,
      pb: () => Hg,
      tb: () => Sp,
      vb: () => Jg
    });
    var hv = {};
    Pv.r(hv), Pv.d(hv, {
      scaleBand: () => Sv.c,
      scaleDiverging: () => de,
      scaleDivergingLog: () => Ne,
      scaleDivergingPow: () => Te,
      scaleDivergingSqrt: () => We,
      scaleDivergingSymlog: () => le,
      scaleIdentity: () => bz,
      scaleImplicit: () => NP.h,
      scaleLinear: () => oz,
      scaleLog: () => SP,
      scaleOrdinal: () => NP.e,
      scalePoint: () => Sv.d,
      scalePow: () => aP,
      scaleQuantile: () => OP,
      scaleQuantize: () => DP,
      scaleRadial: () => iP,
      scaleSequential: () => ze,
      scaleSequentialLog: () => Pe,
      scaleSequentialPow: () => Se,
      scaleSequentialQuantile: () => ge,
      scaleSequentialSqrt: () => ee,
      scaleSequentialSymlog: () => he,
      scaleSqrt: () => sP,
      scaleSymlog: () => dP,
      scaleThreshold: () => KP,
      scaleTime: () => kS,
      scaleUtc: () => XS,
      tickFormat: () => Jz
    });
    var Sv = Pv(5863);
    const ev = Math.sqrt(50),
      gv = Math.sqrt(10),
      pv = Math.sqrt(2);

    function dv(vv, zv, Pv) {
      const hv = (zv - vv) / Math.max(0, Pv),
        Sv = Math.floor(Math.log10(hv)),
        Nv = hv / Math.pow(10, Sv),
        lv = Nv >= ev ? 10 : Nv >= gv ? 5 : Nv >= pv ? 2 : 1;
      let Tv, Wv, wv;
      return Sv < 0 ? (wv = Math.pow(10, -Sv) / lv, Tv = Math.round(vv * wv), Wv = Math.round(zv * wv), Tv / wv < vv && ++Tv, Wv / wv > zv && --Wv, wv = -wv) : (wv = Math.pow(10, Sv) * lv, Tv = Math.round(vv / wv), Wv = Math.round(zv / wv), Tv * wv < vv && ++Tv, Wv * wv > zv && --Wv), Wv < Tv && .5 <= Pv && Pv < 2 ? dv(vv, zv, 2 * Pv) : [Tv, Wv, wv]
    }

    function Nv(vv, zv, Pv) {
      if (!((Pv = +Pv) > 0)) return [];
      if ((vv = +vv) === (zv = +zv)) return [vv];
      const hv = zv < vv,
        [Sv, ev, gv] = hv ? dv(zv, vv, Pv) : dv(vv, zv, Pv);
      if (!(ev >= Sv)) return [];
      const pv = ev - Sv + 1,
        Nv = new Array(pv);
      if (hv)
        if (gv < 0)
          for (let dv = 0; dv < pv; ++dv) Nv[dv] = (ev - dv) / -gv;
        else
          for (let dv = 0; dv < pv; ++dv) Nv[dv] = (ev - dv) * gv;
      else if (gv < 0)
        for (let dv = 0; dv < pv; ++dv) Nv[dv] = (Sv + dv) / -gv;
      else
        for (let dv = 0; dv < pv; ++dv) Nv[dv] = (Sv + dv) * gv;
      return Nv
    }

    function lv(vv, zv, Pv) {
      return dv(vv = +vv, zv = +zv, Pv = +Pv)[2]
    }

    function Tv(vv, zv, Pv) {
      Pv = +Pv;
      const hv = (zv = +zv) < (vv = +vv),
        Sv = hv ? lv(zv, vv, Pv) : lv(vv, zv, Pv);
      return (hv ? -1 : 1) * (Sv < 0 ? 1 / -Sv : Sv)
    }

    function Wv(vv, zv) {
      return null == vv || null == zv ? NaN : vv < zv ? -1 : vv > zv ? 1 : vv >= zv ? 0 : NaN
    }

    function wv(vv, zv) {
      return null == vv || null == zv ? NaN : zv < vv ? -1 : zv > vv ? 1 : zv >= vv ? 0 : NaN
    }

    function av(vv) {
      let zv, Pv, hv;

      function Sv(vv, hv) {
        let Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length;
        if (Sv < ev) {
          if (0 !== zv(hv, hv)) return ev;
          do {
            const zv = Sv + ev >>> 1;
            Pv(vv[zv], hv) < 0 ? Sv = zv + 1 : ev = zv
          } while (Sv < ev)
        }
        return Sv
      }
      return 2 !== vv.length ? (zv = Wv, Pv = (zv, Pv) => Wv(vv(zv), Pv), hv = (zv, Pv) => vv(zv) - Pv) : (zv = vv === Wv || vv === wv ? vv : sv, Pv = vv, hv = vv), {
        left: Sv,
        center: function(vv, zv) {
          let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          const ev = Sv(vv, zv, Pv, (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length) - 1);
          return ev > Pv && hv(vv[ev - 1], zv) > -hv(vv[ev], zv) ? ev - 1 : ev
        },
        right: function(vv, hv) {
          let Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.length;
          if (Sv < ev) {
            if (0 !== zv(hv, hv)) return ev;
            do {
              const zv = Sv + ev >>> 1;
              Pv(vv[zv], hv) <= 0 ? Sv = zv + 1 : ev = zv
            } while (Sv < ev)
          }
          return Sv
        }
      }
    }

    function sv() {
      return 0
    }

    function Cv(vv) {
      return null === vv ? NaN : +vv
    }
    const iv = av(Wv),
      cv = iv.right,
      Gv = (iv.left, av(Cv).center, cv);

    function mv(vv, zv, Pv) {
      vv.prototype = zv.prototype = Pv, Pv.constructor = vv
    }

    function jv(vv, zv) {
      var Pv = Object.create(vv.prototype);
      for (var hv in zv) Pv[hv] = zv[hv];
      return Pv
    }

    function fv() {}
    var Fv = .7,
      Yv = 1 / Fv,
      nv = "\\s*([+-]?\\d+)\\s*",
      Ov = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Dv = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Kv = /^#([0-9a-f]{3,8})$/,
      Vv = new RegExp(`^rgb\\(${nv},${nv},${nv}\\)$`),
      Uv = new RegExp(`^rgb\\(${Dv},${Dv},${Dv}\\)$`),
      Rv = new RegExp(`^rgba\\(${nv},${nv},${nv},${Ov}\\)$`),
      xv = new RegExp(`^rgba\\(${Dv},${Dv},${Dv},${Ov}\\)$`),
      tv = new RegExp(`^hsl\\(${Ov},${Dv},${Dv}\\)$`),
      qv = new RegExp(`^hsla\\(${Ov},${Dv},${Dv},${Ov}\\)$`),
      Iv = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      };

    function Qv() {
      return this.rgb().formatHex()
    }

    function Zv() {
      return this.rgb().formatRgb()
    }

    function Av(vv) {
      var zv, Pv;
      return vv = (vv + "").trim().toLowerCase(), (zv = Kv.exec(vv)) ? (Pv = zv[1].length, zv = parseInt(zv[1], 16), 6 === Pv ? Lv(zv) : 3 === Pv ? new yv(zv >> 8 & 15 | zv >> 4 & 240, zv >> 4 & 15 | 240 & zv, (15 & zv) << 4 | 15 & zv, 1) : 8 === Pv ? Hv(zv >> 24 & 255, zv >> 16 & 255, zv >> 8 & 255, (255 & zv) / 255) : 4 === Pv ? Hv(zv >> 12 & 15 | zv >> 8 & 240, zv >> 8 & 15 | zv >> 4 & 240, zv >> 4 & 15 | 240 & zv, ((15 & zv) << 4 | 15 & zv) / 255) : null) : (zv = Vv.exec(vv)) ? new yv(zv[1], zv[2], zv[3], 1) : (zv = Uv.exec(vv)) ? new yv(255 * zv[1] / 100, 255 * zv[2] / 100, 255 * zv[3] / 100, 1) : (zv = Rv.exec(vv)) ? Hv(zv[1], zv[2], zv[3], zv[4]) : (zv = xv.exec(vv)) ? Hv(255 * zv[1] / 100, 255 * zv[2] / 100, 255 * zv[3] / 100, zv[4]) : (zv = tv.exec(vv)) ? rv(zv[1], zv[2] / 100, zv[3] / 100, 1) : (zv = qv.exec(vv)) ? rv(zv[1], zv[2] / 100, zv[3] / 100, zv[4]) : Iv.hasOwnProperty(vv) ? Lv(Iv[vv]) : "transparent" === vv ? new yv(NaN, NaN, NaN, 0) : null
    }

    function Lv(vv) {
      return new yv(vv >> 16 & 255, vv >> 8 & 255, 255 & vv, 1)
    }

    function Hv(vv, zv, Pv, hv) {
      return hv <= 0 && (vv = zv = Pv = NaN), new yv(vv, zv, Pv, hv)
    }

    function Mv(vv, zv, Pv, hv) {
      return 1 === arguments.length ? ((Sv = vv) instanceof fv || (Sv = Av(Sv)), Sv ? new yv((Sv = Sv.rgb()).r, Sv.g, Sv.b, Sv.opacity) : new yv) : new yv(vv, zv, Pv, null == hv ? 1 : hv);
      var Sv
    }

    function yv(vv, zv, Pv, hv) {
      this.r = +vv, this.g = +zv, this.b = +Pv, this.opacity = +hv
    }

    function Bv() {
      return `#${bv(this.r)}${bv(this.g)}${bv(this.b)}`
    }

    function Jv() {
      const vv = Ev(this.opacity);
      return `${1===vv?"rgb(":"rgba("}${ov(this.r)}, ${ov(this.g)}, ${ov(this.b)}${1===vv?")":`, ${vv})`}`
    }

    function Ev(vv) {
      return isNaN(vv) ? 1 : Math.max(0, Math.min(1, vv))
    }

    function ov(vv) {
      return Math.max(0, Math.min(255, Math.round(vv) || 0))
    }

    function bv(vv) {
      return ((vv = ov(vv)) < 16 ? "0" : "") + vv.toString(16)
    }

    function rv(vv, zv, Pv, hv) {
      return hv <= 0 ? vv = zv = Pv = NaN : Pv <= 0 || Pv >= 1 ? vv = zv = NaN : zv <= 0 && (vv = NaN), new Xv(vv, zv, Pv, hv)
    }

    function kv(vv) {
      if (vv instanceof Xv) return new Xv(vv.h, vv.s, vv.l, vv.opacity);
      if (vv instanceof fv || (vv = Av(vv)), !vv) return new Xv;
      if (vv instanceof Xv) return vv;
      var zv = (vv = vv.rgb()).r / 255,
        Pv = vv.g / 255,
        hv = vv.b / 255,
        Sv = Math.min(zv, Pv, hv),
        ev = Math.max(zv, Pv, hv),
        gv = NaN,
        pv = ev - Sv,
        dv = (ev + Sv) / 2;
      return pv ? (gv = zv === ev ? (Pv - hv) / pv + 6 * (Pv < hv) : Pv === ev ? (hv - zv) / pv + 2 : (zv - Pv) / pv + 4, pv /= dv < .5 ? ev + Sv : 2 - ev - Sv, gv *= 60) : pv = dv > 0 && dv < 1 ? 0 : gv, new Xv(gv, pv, dv, vv.opacity)
    }

    function Xv(vv, zv, Pv, hv) {
      this.h = +vv, this.s = +zv, this.l = +Pv, this.opacity = +hv
    }

    function uv(vv) {
      return (vv = (vv || 0) % 360) < 0 ? vv + 360 : vv
    }

    function vz(vv) {
      return Math.max(0, Math.min(1, vv || 0))
    }

    function zz(vv, zv, Pv) {
      return 255 * (vv < 60 ? zv + (Pv - zv) * vv / 60 : vv < 180 ? Pv : vv < 240 ? zv + (Pv - zv) * (240 - vv) / 60 : zv)
    }

    function Pz(vv, zv, Pv, hv, Sv) {
      var ev = vv * vv,
        gv = ev * vv;
      return ((1 - 3 * vv + 3 * ev - gv) * zv + (4 - 6 * ev + 3 * gv) * Pv + (1 + 3 * vv + 3 * ev - 3 * gv) * hv + gv * Sv) / 6
    }
    mv(fv, Av, {
      copy(vv) {
        return Object.assign(new this.constructor, this, vv)
      },
      displayable() {
        return this.rgb().displayable()
      },
      hex: Qv,
      formatHex: Qv,
      formatHex8: function() {
        return this.rgb().formatHex8()
      },
      formatHsl: function() {
        return kv(this).formatHsl()
      },
      formatRgb: Zv,
      toString: Zv
    }), mv(yv, Mv, jv(fv, {
      brighter(vv) {
        return vv = null == vv ? Yv : Math.pow(Yv, vv), new yv(this.r * vv, this.g * vv, this.b * vv, this.opacity)
      },
      darker(vv) {
        return vv = null == vv ? Fv : Math.pow(Fv, vv), new yv(this.r * vv, this.g * vv, this.b * vv, this.opacity)
      },
      rgb() {
        return this
      },
      clamp() {
        return new yv(ov(this.r), ov(this.g), ov(this.b), Ev(this.opacity))
      },
      displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
      },
      hex: Bv,
      formatHex: Bv,
      formatHex8: function() {
        return `#${bv(this.r)}${bv(this.g)}${bv(this.b)}${bv(255*(isNaN(this.opacity)?1:this.opacity))}`
      },
      formatRgb: Jv,
      toString: Jv
    })), mv(Xv, (function(vv, zv, Pv, hv) {
      return 1 === arguments.length ? kv(vv) : new Xv(vv, zv, Pv, null == hv ? 1 : hv)
    }), jv(fv, {
      brighter(vv) {
        return vv = null == vv ? Yv : Math.pow(Yv, vv), new Xv(this.h, this.s, this.l * vv, this.opacity)
      },
      darker(vv) {
        return vv = null == vv ? Fv : Math.pow(Fv, vv), new Xv(this.h, this.s, this.l * vv, this.opacity)
      },
      rgb() {
        var vv = this.h % 360 + 360 * (this.h < 0),
          zv = isNaN(vv) || isNaN(this.s) ? 0 : this.s,
          Pv = this.l,
          hv = Pv + (Pv < .5 ? Pv : 1 - Pv) * zv,
          Sv = 2 * Pv - hv;
        return new yv(zz(vv >= 240 ? vv - 240 : vv + 120, Sv, hv), zz(vv, Sv, hv), zz(vv < 120 ? vv + 240 : vv - 120, Sv, hv), this.opacity)
      },
      clamp() {
        return new Xv(uv(this.h), vz(this.s), vz(this.l), Ev(this.opacity))
      },
      displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
      },
      formatHsl() {
        const vv = Ev(this.opacity);
        return `${1===vv?"hsl(":"hsla("}${uv(this.h)}, ${100*vz(this.s)}%, ${100*vz(this.l)}%${1===vv?")":`, ${vv})`}`
      }
    }));
    const hz = vv => () => vv;

    function Sz(vv, zv) {
      return function(Pv) {
        return vv + Pv * zv
      }
    }

    function ez(vv) {
      return 1 === (vv = +vv) ? gz : function(zv, Pv) {
        return Pv - zv ? function(vv, zv, Pv) {
          return vv = Math.pow(vv, Pv), zv = Math.pow(zv, Pv) - vv, Pv = 1 / Pv,
            function(hv) {
              return Math.pow(vv + hv * zv, Pv)
            }
        }(zv, Pv, vv) : hz(isNaN(zv) ? Pv : zv)
      }
    }

    function gz(vv, zv) {
      var Pv = zv - vv;
      return Pv ? Sz(vv, Pv) : hz(isNaN(vv) ? zv : vv)
    }
    const pz = function vv(zv) {
      var Pv = ez(zv);

      function hv(vv, zv) {
        var hv = Pv((vv = Mv(vv)).r, (zv = Mv(zv)).r),
          Sv = Pv(vv.g, zv.g),
          ev = Pv(vv.b, zv.b),
          gv = gz(vv.opacity, zv.opacity);
        return function(zv) {
          return vv.r = hv(zv), vv.g = Sv(zv), vv.b = ev(zv), vv.opacity = gv(zv), vv + ""
        }
      }
      return hv.gamma = vv, hv
    }(1);

    function dz(vv) {
      return function(zv) {
        var Pv, hv, Sv = zv.length,
          ev = new Array(Sv),
          gv = new Array(Sv),
          pv = new Array(Sv);
        for (Pv = 0; Pv < Sv; ++Pv) hv = Mv(zv[Pv]), ev[Pv] = hv.r || 0, gv[Pv] = hv.g || 0, pv[Pv] = hv.b || 0;
        return ev = vv(ev), gv = vv(gv), pv = vv(pv), hv.opacity = 1,
          function(vv) {
            return hv.r = ev(vv), hv.g = gv(vv), hv.b = pv(vv), hv + ""
          }
      }
    }
    dz((function(vv) {
      var zv = vv.length - 1;
      return function(Pv) {
        var hv = Pv <= 0 ? Pv = 0 : Pv >= 1 ? (Pv = 1, zv - 1) : Math.floor(Pv * zv),
          Sv = vv[hv],
          ev = vv[hv + 1],
          gv = hv > 0 ? vv[hv - 1] : 2 * Sv - ev,
          pv = hv < zv - 1 ? vv[hv + 2] : 2 * ev - Sv;
        return Pz((Pv - hv / zv) * zv, gv, Sv, ev, pv)
      }
    })), dz((function(vv) {
      var zv = vv.length;
      return function(Pv) {
        var hv = Math.floor(((Pv %= 1) < 0 ? ++Pv : Pv) * zv),
          Sv = vv[(hv + zv - 1) % zv],
          ev = vv[hv % zv],
          gv = vv[(hv + 1) % zv],
          pv = vv[(hv + 2) % zv];
        return Pz((Pv - hv / zv) * zv, Sv, ev, gv, pv)
      }
    }));

    function Nz(vv, zv) {
      var Pv, hv = zv ? zv.length : 0,
        Sv = vv ? Math.min(hv, vv.length) : 0,
        ev = new Array(Sv),
        gv = new Array(hv);
      for (Pv = 0; Pv < Sv; ++Pv) ev[Pv] = iz(vv[Pv], zv[Pv]);
      for (; Pv < hv; ++Pv) gv[Pv] = zv[Pv];
      return function(vv) {
        for (Pv = 0; Pv < Sv; ++Pv) gv[Pv] = ev[Pv](vv);
        return gv
      }
    }

    function lz(vv, zv) {
      var Pv = new Date;
      return vv = +vv, zv = +zv,
        function(hv) {
          return Pv.setTime(vv * (1 - hv) + zv * hv), Pv
        }
    }

    function Tz(vv, zv) {
      return vv = +vv, zv = +zv,
        function(Pv) {
          return vv * (1 - Pv) + zv * Pv
        }
    }

    function Wz(vv, zv) {
      var Pv, hv = {},
        Sv = {};
      for (Pv in null !== vv && "object" === typeof vv || (vv = {}), null !== zv && "object" === typeof zv || (zv = {}), zv) Pv in vv ? hv[Pv] = iz(vv[Pv], zv[Pv]) : Sv[Pv] = zv[Pv];
      return function(vv) {
        for (Pv in hv) Sv[Pv] = hv[Pv](vv);
        return Sv
      }
    }
    var wz = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      az = new RegExp(wz.source, "g");

    function sz(vv, zv) {
      var Pv, hv, Sv, ev = wz.lastIndex = az.lastIndex = 0,
        gv = -1,
        pv = [],
        dv = [];
      for (vv += "", zv += "";
        (Pv = wz.exec(vv)) && (hv = az.exec(zv));)(Sv = hv.index) > ev && (Sv = zv.slice(ev, Sv), pv[gv] ? pv[gv] += Sv : pv[++gv] = Sv), (Pv = Pv[0]) === (hv = hv[0]) ? pv[gv] ? pv[gv] += hv : pv[++gv] = hv : (pv[++gv] = null, dv.push({
        i: gv,
        x: Tz(Pv, hv)
      })), ev = az.lastIndex;
      return ev < zv.length && (Sv = zv.slice(ev), pv[gv] ? pv[gv] += Sv : pv[++gv] = Sv), pv.length < 2 ? dv[0] ? function(vv) {
        return function(zv) {
          return vv(zv) + ""
        }
      }(dv[0].x) : function(vv) {
        return function() {
          return vv
        }
      }(zv) : (zv = dv.length, function(vv) {
        for (var Pv, hv = 0; hv < zv; ++hv) pv[(Pv = dv[hv]).i] = Pv.x(vv);
        return pv.join("")
      })
    }

    function Cz(vv, zv) {
      zv || (zv = []);
      var Pv, hv = vv ? Math.min(zv.length, vv.length) : 0,
        Sv = zv.slice();
      return function(ev) {
        for (Pv = 0; Pv < hv; ++Pv) Sv[Pv] = vv[Pv] * (1 - ev) + zv[Pv] * ev;
        return Sv
      }
    }

    function iz(vv, zv) {
      var Pv, hv, Sv = typeof zv;
      return null == zv || "boolean" === Sv ? hz(zv) : ("number" === Sv ? Tz : "string" === Sv ? (Pv = Av(zv)) ? (zv = Pv, pz) : sz : zv instanceof Av ? pz : zv instanceof Date ? lz : (hv = zv, !ArrayBuffer.isView(hv) || hv instanceof DataView ? Array.isArray(zv) ? Nz : "function" !== typeof zv.valueOf && "function" !== typeof zv.toString || isNaN(zv) ? Wz : Tz : Cz))(vv, zv)
    }

    function cz(vv, zv) {
      return vv = +vv, zv = +zv,
        function(Pv) {
          return Math.round(vv * (1 - Pv) + zv * Pv)
        }
    }

    function Gz(vv) {
      return +vv
    }
    var mz = [0, 1];

    function jz(vv) {
      return vv
    }

    function fz(vv, zv) {
      return (zv -= vv = +vv) ? function(Pv) {
        return (Pv - vv) / zv
      } : (Pv = isNaN(zv) ? NaN : .5, function() {
        return Pv
      });
      var Pv
    }

    function Fz(vv, zv, Pv) {
      var hv = vv[0],
        Sv = vv[1],
        ev = zv[0],
        gv = zv[1];
      return Sv < hv ? (hv = fz(Sv, hv), ev = Pv(gv, ev)) : (hv = fz(hv, Sv), ev = Pv(ev, gv)),
        function(vv) {
          return ev(hv(vv))
        }
    }

    function Yz(vv, zv, Pv) {
      var hv = Math.min(vv.length, zv.length) - 1,
        Sv = new Array(hv),
        ev = new Array(hv),
        gv = -1;
      for (vv[hv] < vv[0] && (vv = vv.slice().reverse(), zv = zv.slice().reverse()); ++gv < hv;) Sv[gv] = fz(vv[gv], vv[gv + 1]), ev[gv] = Pv(zv[gv], zv[gv + 1]);
      return function(zv) {
        var Pv = Gv(vv, zv, 1, hv) - 1;
        return ev[Pv](Sv[Pv](zv))
      }
    }

    function nz(vv, zv) {
      return zv.domain(vv.domain()).range(vv.range()).interpolate(vv.interpolate()).clamp(vv.clamp()).unknown(vv.unknown())
    }

    function Oz() {
      var vv, zv, Pv, hv, Sv, ev, gv = mz,
        pv = mz,
        dv = iz,
        Nv = jz;

      function lv() {
        var vv = Math.min(gv.length, pv.length);
        return Nv !== jz && (Nv = function(vv, zv) {
          var Pv;
          return vv > zv && (Pv = vv, vv = zv, zv = Pv),
            function(Pv) {
              return Math.max(vv, Math.min(zv, Pv))
            }
        }(gv[0], gv[vv - 1])), hv = vv > 2 ? Yz : Fz, Sv = ev = null, Tv
      }

      function Tv(zv) {
        return null == zv || isNaN(zv = +zv) ? Pv : (Sv || (Sv = hv(gv.map(vv), pv, dv)))(vv(Nv(zv)))
      }
      return Tv.invert = function(Pv) {
          return Nv(zv((ev || (ev = hv(pv, gv.map(vv), Tz)))(Pv)))
        }, Tv.domain = function(vv) {
          return arguments.length ? (gv = Array.from(vv, Gz), lv()) : gv.slice()
        }, Tv.range = function(vv) {
          return arguments.length ? (pv = Array.from(vv), lv()) : pv.slice()
        }, Tv.rangeRound = function(vv) {
          return pv = Array.from(vv), dv = cz, lv()
        }, Tv.clamp = function(vv) {
          return arguments.length ? (Nv = !!vv || jz, lv()) : Nv !== jz
        }, Tv.interpolate = function(vv) {
          return arguments.length ? (dv = vv, lv()) : dv
        }, Tv.unknown = function(vv) {
          return arguments.length ? (Pv = vv, Tv) : Pv
        },
        function(Pv, hv) {
          return vv = Pv, zv = hv, lv()
        }
    }

    function Dz() {
      return Oz()(jz, jz)
    }
    var Kz, Vz = Pv(5870),
      Uz = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function Rz(vv) {
      if (!(zv = Uz.exec(vv))) throw new Error("invalid format: " + vv);
      var zv;
      return new xz({
        fill: zv[1],
        align: zv[2],
        sign: zv[3],
        symbol: zv[4],
        zero: zv[5],
        width: zv[6],
        comma: zv[7],
        precision: zv[8] && zv[8].slice(1),
        trim: zv[9],
        type: zv[10]
      })
    }

    function xz(vv) {
      this.fill = void 0 === vv.fill ? " " : vv.fill + "", this.align = void 0 === vv.align ? ">" : vv.align + "", this.sign = void 0 === vv.sign ? "-" : vv.sign + "", this.symbol = void 0 === vv.symbol ? "" : vv.symbol + "", this.zero = !!vv.zero, this.width = void 0 === vv.width ? void 0 : +vv.width, this.comma = !!vv.comma, this.precision = void 0 === vv.precision ? void 0 : +vv.precision, this.trim = !!vv.trim, this.type = void 0 === vv.type ? "" : vv.type + ""
    }

    function tz(vv, zv) {
      if (!isFinite(vv) || 0 === vv) return null;
      var Pv = (vv = zv ? vv.toExponential(zv - 1) : vv.toExponential()).indexOf("e"),
        hv = vv.slice(0, Pv);
      return [hv.length > 1 ? hv[0] + hv.slice(2) : hv, +vv.slice(Pv + 1)]
    }

    function qz(vv) {
      return (vv = tz(Math.abs(vv))) ? vv[1] : NaN
    }

    function Iz(vv, zv) {
      var Pv = tz(vv, zv);
      if (!Pv) return vv + "";
      var hv = Pv[0],
        Sv = Pv[1];
      return Sv < 0 ? "0." + new Array(-Sv).join("0") + hv : hv.length > Sv + 1 ? hv.slice(0, Sv + 1) + "." + hv.slice(Sv + 1) : hv + new Array(Sv - hv.length + 2).join("0")
    }
    Rz.prototype = xz.prototype, xz.prototype.toString = function() {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    const Qz = {
      "%": (vv, zv) => (100 * vv).toFixed(zv),
      b: vv => Math.round(vv).toString(2),
      c: vv => vv + "",
      d: function(vv) {
        return Math.abs(vv = Math.round(vv)) >= 1e21 ? vv.toLocaleString("en").replace(/,/g, "") : vv.toString(10)
      },
      e: (vv, zv) => vv.toExponential(zv),
      f: (vv, zv) => vv.toFixed(zv),
      g: (vv, zv) => vv.toPrecision(zv),
      o: vv => Math.round(vv).toString(8),
      p: (vv, zv) => Iz(100 * vv, zv),
      r: Iz,
      s: function(vv, zv) {
        var Pv = tz(vv, zv);
        if (!Pv) return Kz = void 0, vv.toPrecision(zv);
        var hv = Pv[0],
          Sv = Pv[1],
          ev = Sv - (Kz = 3 * Math.max(-8, Math.min(8, Math.floor(Sv / 3)))) + 1,
          gv = hv.length;
        return ev === gv ? hv : ev > gv ? hv + new Array(ev - gv + 1).join("0") : ev > 0 ? hv.slice(0, ev) + "." + hv.slice(ev) : "0." + new Array(1 - ev).join("0") + tz(vv, Math.max(0, zv + ev - 1))[0]
      },
      X: vv => Math.round(vv).toString(16).toUpperCase(),
      x: vv => Math.round(vv).toString(16)
    };

    function Zz(vv) {
      return vv
    }
    var Az, Lz, Hz, Mz = Array.prototype.map,
      yz = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function Bz(vv) {
      var zv, Pv, hv = void 0 === vv.grouping || void 0 === vv.thousands ? Zz : (zv = Mz.call(vv.grouping, Number), Pv = vv.thousands + "", function(vv, hv) {
          for (var Sv = vv.length, ev = [], gv = 0, pv = zv[0], dv = 0; Sv > 0 && pv > 0 && (dv + pv + 1 > hv && (pv = Math.max(1, hv - dv)), ev.push(vv.substring(Sv -= pv, Sv + pv)), !((dv += pv + 1) > hv));) pv = zv[gv = (gv + 1) % zv.length];
          return ev.reverse().join(Pv)
        }),
        Sv = void 0 === vv.currency ? "" : vv.currency[0] + "",
        ev = void 0 === vv.currency ? "" : vv.currency[1] + "",
        gv = void 0 === vv.decimal ? "." : vv.decimal + "",
        pv = void 0 === vv.numerals ? Zz : function(vv) {
          return function(zv) {
            return zv.replace(/[0-9]/g, (function(zv) {
              return vv[+zv]
            }))
          }
        }(Mz.call(vv.numerals, String)),
        dv = void 0 === vv.percent ? "%" : vv.percent + "",
        Nv = void 0 === vv.minus ? "\u2212" : vv.minus + "",
        lv = void 0 === vv.nan ? "NaN" : vv.nan + "";

      function Tv(vv, zv) {
        var Pv = (vv = Rz(vv)).fill,
          Tv = vv.align,
          Wv = vv.sign,
          wv = vv.symbol,
          av = vv.zero,
          sv = vv.width,
          Cv = vv.comma,
          iv = vv.precision,
          cv = vv.trim,
          Gv = vv.type;
        "n" === Gv ? (Cv = !0, Gv = "g") : Qz[Gv] || (void 0 === iv && (iv = 12), cv = !0, Gv = "g"), (av || "0" === Pv && "=" === Tv) && (av = !0, Pv = "0", Tv = "=");
        var mv = (zv && void 0 !== zv.prefix ? zv.prefix : "") + ("$" === wv ? Sv : "#" === wv && /[boxX]/.test(Gv) ? "0" + Gv.toLowerCase() : ""),
          jv = ("$" === wv ? ev : /[%p]/.test(Gv) ? dv : "") + (zv && void 0 !== zv.suffix ? zv.suffix : ""),
          fv = Qz[Gv],
          Fv = /[defgprs%]/.test(Gv);

        function Yv(vv) {
          var zv, Sv, ev, dv = mv,
            wv = jv;
          if ("c" === Gv) wv = fv(vv) + wv, vv = "";
          else {
            var Yv = (vv = +vv) < 0 || 1 / vv < 0;
            if (vv = isNaN(vv) ? lv : fv(Math.abs(vv), iv), cv && (vv = function(vv) {
                vv: for (var zv, Pv = vv.length, hv = 1, Sv = -1; hv < Pv; ++hv) switch (vv[hv]) {
                  case ".":
                    Sv = zv = hv;
                    break;
                  case "0":
                    0 === Sv && (Sv = hv), zv = hv;
                    break;
                  default:
                    if (!+vv[hv]) break vv;
                    Sv > 0 && (Sv = 0)
                }
                return Sv > 0 ? vv.slice(0, Sv) + vv.slice(zv + 1) : vv
              }(vv)), Yv && 0 === +vv && "+" !== Wv && (Yv = !1), dv = (Yv ? "(" === Wv ? Wv : Nv : "-" === Wv || "(" === Wv ? "" : Wv) + dv, wv = ("s" !== Gv || isNaN(vv) || void 0 === Kz ? "" : yz[8 + Kz / 3]) + wv + (Yv && "(" === Wv ? ")" : ""), Fv)
              for (zv = -1, Sv = vv.length; ++zv < Sv;)
                if (48 > (ev = vv.charCodeAt(zv)) || ev > 57) {
                  wv = (46 === ev ? gv + vv.slice(zv + 1) : vv.slice(zv)) + wv, vv = vv.slice(0, zv);
                  break
                }
          }
          Cv && !av && (vv = hv(vv, 1 / 0));
          var nv = dv.length + vv.length + wv.length,
            Ov = nv < sv ? new Array(sv - nv + 1).join(Pv) : "";
          switch (Cv && av && (vv = hv(Ov + vv, Ov.length ? sv - wv.length : 1 / 0), Ov = ""), Tv) {
            case "<":
              vv = dv + vv + wv + Ov;
              break;
            case "=":
              vv = dv + Ov + vv + wv;
              break;
            case "^":
              vv = Ov.slice(0, nv = Ov.length >> 1) + dv + vv + wv + Ov.slice(nv);
              break;
            default:
              vv = Ov + dv + vv + wv
          }
          return pv(vv)
        }
        return iv = void 0 === iv ? 6 : /[gprs]/.test(Gv) ? Math.max(1, Math.min(21, iv)) : Math.max(0, Math.min(20, iv)), Yv.toString = function() {
          return vv + ""
        }, Yv
      }
      return {
        format: Tv,
        formatPrefix: function(vv, zv) {
          var Pv = 3 * Math.max(-8, Math.min(8, Math.floor(qz(zv) / 3))),
            hv = Math.pow(10, -Pv),
            Sv = Tv(((vv = Rz(vv)).type = "f", vv), {
              suffix: yz[8 + Pv / 3]
            });
          return function(vv) {
            return Sv(hv * vv)
          }
        }
      }
    }

    function Jz(vv, zv, Pv, hv) {
      var Sv, ev = Tv(vv, zv, Pv);
      switch ((hv = Rz(null == hv ? ",f" : hv)).type) {
        case "s":
          var gv = Math.max(Math.abs(vv), Math.abs(zv));
          return null != hv.precision || isNaN(Sv = function(vv, zv) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(qz(zv) / 3))) - qz(Math.abs(vv)))
          }(ev, gv)) || (hv.precision = Sv), Hz(hv, gv);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != hv.precision || isNaN(Sv = function(vv, zv) {
            return vv = Math.abs(vv), zv = Math.abs(zv) - vv, Math.max(0, qz(zv) - qz(vv)) + 1
          }(ev, Math.max(Math.abs(vv), Math.abs(zv)))) || (hv.precision = Sv - ("e" === hv.type));
          break;
        case "f":
        case "%":
          null != hv.precision || isNaN(Sv = function(vv) {
            return Math.max(0, -qz(Math.abs(vv)))
          }(ev)) || (hv.precision = Sv - 2 * ("%" === hv.type))
      }
      return Lz(hv)
    }

    function Ez(vv) {
      var zv = vv.domain;
      return vv.ticks = function(vv) {
        var Pv = zv();
        return Nv(Pv[0], Pv[Pv.length - 1], null == vv ? 10 : vv)
      }, vv.tickFormat = function(vv, Pv) {
        var hv = zv();
        return Jz(hv[0], hv[hv.length - 1], null == vv ? 10 : vv, Pv)
      }, vv.nice = function(Pv) {
        null == Pv && (Pv = 10);
        var hv, Sv, ev = zv(),
          gv = 0,
          pv = ev.length - 1,
          dv = ev[gv],
          Nv = ev[pv],
          Tv = 10;
        for (Nv < dv && (Sv = dv, dv = Nv, Nv = Sv, Sv = gv, gv = pv, pv = Sv); Tv-- > 0;) {
          if ((Sv = lv(dv, Nv, Pv)) === hv) return ev[gv] = dv, ev[pv] = Nv, zv(ev);
          if (Sv > 0) dv = Math.floor(dv / Sv) * Sv, Nv = Math.ceil(Nv / Sv) * Sv;
          else {
            if (!(Sv < 0)) break;
            dv = Math.ceil(dv * Sv) / Sv, Nv = Math.floor(Nv * Sv) / Sv
          }
          hv = Sv
        }
        return vv
      }, vv
    }

    function oz() {
      var vv = Dz();
      return vv.copy = function() {
        return nz(vv, oz())
      }, Vz.h.apply(vv, arguments), Ez(vv)
    }

    function bz(vv) {
      var zv;

      function Pv(vv) {
        return null == vv || isNaN(vv = +vv) ? zv : vv
      }
      return Pv.invert = Pv, Pv.domain = Pv.range = function(zv) {
        return arguments.length ? (vv = Array.from(zv, Gz), Pv) : vv.slice()
      }, Pv.unknown = function(vv) {
        return arguments.length ? (zv = vv, Pv) : zv
      }, Pv.copy = function() {
        return bz(vv).unknown(zv)
      }, vv = arguments.length ? Array.from(vv, Gz) : [0, 1], Ez(Pv)
    }

    function rz(vv, zv) {
      var Pv, hv = 0,
        Sv = (vv = vv.slice()).length - 1,
        ev = vv[hv],
        gv = vv[Sv];
      return gv < ev && (Pv = hv, hv = Sv, Sv = Pv, Pv = ev, ev = gv, gv = Pv), vv[hv] = zv.floor(ev), vv[Sv] = zv.ceil(gv), vv
    }

    function kz(vv) {
      return Math.log(vv)
    }

    function Xz(vv) {
      return Math.exp(vv)
    }

    function uz(vv) {
      return -Math.log(-vv)
    }

    function vP(vv) {
      return -Math.exp(-vv)
    }

    function zP(vv) {
      return isFinite(vv) ? +("1e" + vv) : vv < 0 ? 0 : vv
    }

    function PP(vv) {
      return (zv, Pv) => -vv(-zv, Pv)
    }

    function hP(vv) {
      const zv = vv(kz, Xz),
        Pv = zv.domain;
      let hv, Sv, ev = 10;

      function gv() {
        return hv = function(vv) {
          return vv === Math.E ? Math.log : 10 === vv && Math.log10 || 2 === vv && Math.log2 || (vv = Math.log(vv), zv => Math.log(zv) / vv)
        }(ev), Sv = function(vv) {
          return 10 === vv ? zP : vv === Math.E ? Math.exp : zv => Math.pow(vv, zv)
        }(ev), Pv()[0] < 0 ? (hv = PP(hv), Sv = PP(Sv), vv(uz, vP)) : vv(kz, Xz), zv
      }
      return zv.base = function(vv) {
        return arguments.length ? (ev = +vv, gv()) : ev
      }, zv.domain = function(vv) {
        return arguments.length ? (Pv(vv), gv()) : Pv()
      }, zv.ticks = vv => {
        const zv = Pv();
        let gv = zv[0],
          pv = zv[zv.length - 1];
        const dv = pv < gv;
        dv && ([gv, pv] = [pv, gv]);
        let lv, Tv, Wv = hv(gv),
          wv = hv(pv);
        const av = null == vv ? 10 : +vv;
        let sv = [];
        if (!(ev % 1) && wv - Wv < av) {
          if (Wv = Math.floor(Wv), wv = Math.ceil(wv), gv > 0) {
            for (; Wv <= wv; ++Wv)
              for (lv = 1; lv < ev; ++lv)
                if (Tv = Wv < 0 ? lv / Sv(-Wv) : lv * Sv(Wv), !(Tv < gv)) {
                  if (Tv > pv) break;
                  sv.push(Tv)
                }
          } else
            for (; Wv <= wv; ++Wv)
              for (lv = ev - 1; lv >= 1; --lv)
                if (Tv = Wv > 0 ? lv / Sv(-Wv) : lv * Sv(Wv), !(Tv < gv)) {
                  if (Tv > pv) break;
                  sv.push(Tv)
                } 2 * sv.length < av && (sv = Nv(gv, pv, av))
        } else sv = Nv(Wv, wv, Math.min(wv - Wv, av)).map(Sv);
        return dv ? sv.reverse() : sv
      }, zv.tickFormat = (vv, Pv) => {
        if (null == vv && (vv = 10), null == Pv && (Pv = 10 === ev ? "s" : ","), "function" !== typeof Pv && (ev % 1 || null != (Pv = Rz(Pv)).precision || (Pv.trim = !0), Pv = Lz(Pv)), vv === 1 / 0) return Pv;
        const gv = Math.max(1, ev * vv / zv.ticks().length);
        return vv => {
          let zv = vv / Sv(Math.round(hv(vv)));
          return zv * ev < ev - .5 && (zv *= ev), zv <= gv ? Pv(vv) : ""
        }
      }, zv.nice = () => Pv(rz(Pv(), {
        floor: vv => Sv(Math.floor(hv(vv))),
        ceil: vv => Sv(Math.ceil(hv(vv)))
      })), zv
    }

    function SP() {
      const vv = hP(Oz()).domain([1, 10]);
      return vv.copy = () => nz(vv, SP()).base(vv.base()), Vz.h.apply(vv, arguments), vv
    }

    function eP(vv) {
      return function(zv) {
        return Math.sign(zv) * Math.log1p(Math.abs(zv / vv))
      }
    }

    function gP(vv) {
      return function(zv) {
        return Math.sign(zv) * Math.expm1(Math.abs(zv)) * vv
      }
    }

    function pP(vv) {
      var zv = 1,
        Pv = vv(eP(zv), gP(zv));
      return Pv.constant = function(Pv) {
        return arguments.length ? vv(eP(zv = +Pv), gP(zv)) : zv
      }, Ez(Pv)
    }

    function dP() {
      var vv = pP(Oz());
      return vv.copy = function() {
        return nz(vv, dP()).constant(vv.constant())
      }, Vz.h.apply(vv, arguments)
    }
    Az = Bz({
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    }), Lz = Az.format, Hz = Az.formatPrefix;
    var NP = Pv(5875);

    function lP(vv) {
      return function(zv) {
        return zv < 0 ? -Math.pow(-zv, vv) : Math.pow(zv, vv)
      }
    }

    function TP(vv) {
      return vv < 0 ? -Math.sqrt(-vv) : Math.sqrt(vv)
    }

    function WP(vv) {
      return vv < 0 ? -vv * vv : vv * vv
    }

    function wP(vv) {
      var zv = vv(jz, jz),
        Pv = 1;
      return zv.exponent = function(zv) {
        return arguments.length ? 1 === (Pv = +zv) ? vv(jz, jz) : .5 === Pv ? vv(TP, WP) : vv(lP(Pv), lP(1 / Pv)) : Pv
      }, Ez(zv)
    }

    function aP() {
      var vv = wP(Oz());
      return vv.copy = function() {
        return nz(vv, aP()).exponent(vv.exponent())
      }, Vz.h.apply(vv, arguments), vv
    }

    function sP() {
      return aP.apply(null, arguments).exponent(.5)
    }

    function CP(vv) {
      return Math.sign(vv) * vv * vv
    }

    function iP() {
      var vv, zv = Dz(),
        Pv = [0, 1],
        hv = !1;

      function Sv(Pv) {
        var Sv = function(vv) {
          return Math.sign(vv) * Math.sqrt(Math.abs(vv))
        }(zv(Pv));
        return isNaN(Sv) ? vv : hv ? Math.round(Sv) : Sv
      }
      return Sv.invert = function(vv) {
        return zv.invert(CP(vv))
      }, Sv.domain = function(vv) {
        return arguments.length ? (zv.domain(vv), Sv) : zv.domain()
      }, Sv.range = function(vv) {
        return arguments.length ? (zv.range((Pv = Array.from(vv, Gz)).map(CP)), Sv) : Pv.slice()
      }, Sv.rangeRound = function(vv) {
        return Sv.range(vv).round(!0)
      }, Sv.round = function(vv) {
        return arguments.length ? (hv = !!vv, Sv) : hv
      }, Sv.clamp = function(vv) {
        return arguments.length ? (zv.clamp(vv), Sv) : zv.clamp()
      }, Sv.unknown = function(zv) {
        return arguments.length ? (vv = zv, Sv) : vv
      }, Sv.copy = function() {
        return iP(zv.domain(), Pv).round(hv).clamp(zv.clamp()).unknown(vv)
      }, Vz.h.apply(Sv, arguments), Ez(Sv)
    }

    function cP(vv, zv) {
      let Pv;
      if (void 0 === zv)
        for (const hv of vv) null != hv && (Pv < hv || void 0 === Pv && hv >= hv) && (Pv = hv);
      else {
        let hv = -1;
        for (let Sv of vv) null != (Sv = zv(Sv, ++hv, vv)) && (Pv < Sv || void 0 === Pv && Sv >= Sv) && (Pv = Sv)
      }
      return Pv
    }

    function GP(vv, zv) {
      let Pv;
      if (void 0 === zv)
        for (const hv of vv) null != hv && (Pv > hv || void 0 === Pv && hv >= hv) && (Pv = hv);
      else {
        let hv = -1;
        for (let Sv of vv) null != (Sv = zv(Sv, ++hv, vv)) && (Pv > Sv || void 0 === Pv && Sv >= Sv) && (Pv = Sv)
      }
      return Pv
    }

    function mP() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wv;
      if (vv === Wv) return jP;
      if ("function" !== typeof vv) throw new TypeError("compare is not a function");
      return (zv, Pv) => {
        const hv = vv(zv, Pv);
        return hv || 0 === hv ? hv : (0 === vv(Pv, Pv)) - (0 === vv(zv, zv))
      }
    }

    function jP(vv, zv) {
      return (null == vv || !(vv >= vv)) - (null == zv || !(zv >= zv)) || (vv < zv ? -1 : vv > zv ? 1 : 0)
    }

    function fP(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
        Sv = arguments.length > 4 ? arguments[4] : void 0;
      if (zv = Math.floor(zv), Pv = Math.floor(Math.max(0, Pv)), hv = Math.floor(Math.min(vv.length - 1, hv)), !(Pv <= zv && zv <= hv)) return vv;
      for (Sv = void 0 === Sv ? jP : mP(Sv); hv > Pv;) {
        if (hv - Pv > 600) {
          const ev = hv - Pv + 1,
            gv = zv - Pv + 1,
            pv = Math.log(ev),
            dv = .5 * Math.exp(2 * pv / 3),
            Nv = .5 * Math.sqrt(pv * dv * (ev - dv) / ev) * (gv - ev / 2 < 0 ? -1 : 1);
          fP(vv, zv, Math.max(Pv, Math.floor(zv - gv * dv / ev + Nv)), Math.min(hv, Math.floor(zv + (ev - gv) * dv / ev + Nv)), Sv)
        }
        const ev = vv[zv];
        let gv = Pv,
          pv = hv;
        for (FP(vv, Pv, zv), Sv(vv[hv], ev) > 0 && FP(vv, Pv, hv); gv < pv;) {
          for (FP(vv, gv, pv), ++gv, --pv; Sv(vv[gv], ev) < 0;) ++gv;
          for (; Sv(vv[pv], ev) > 0;) --pv
        }
        0 === Sv(vv[Pv], ev) ? FP(vv, Pv, pv) : (++pv, FP(vv, pv, hv)), pv <= zv && (Pv = pv + 1), zv <= pv && (hv = pv - 1)
      }
      return vv
    }

    function FP(vv, zv, Pv) {
      const hv = vv[zv];
      vv[zv] = vv[Pv], vv[Pv] = hv
    }

    function YP(vv, zv, Pv) {
      if (vv = Float64Array.from(function*(vv, zv) {
          if (void 0 === zv)
            for (let Pv of vv) null != Pv && (Pv = +Pv) >= Pv && (yield Pv);
          else {
            let Pv = -1;
            for (let hv of vv) null != (hv = zv(hv, ++Pv, vv)) && (hv = +hv) >= hv && (yield hv)
          }
        }(vv, Pv)), (hv = vv.length) && !isNaN(zv = +zv)) {
        if (zv <= 0 || hv < 2) return GP(vv);
        if (zv >= 1) return cP(vv);
        var hv, Sv = (hv - 1) * zv,
          ev = Math.floor(Sv),
          gv = cP(fP(vv, ev).subarray(0, ev + 1));
        return gv + (GP(vv.subarray(ev + 1)) - gv) * (Sv - ev)
      }
    }

    function nP(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cv;
      if ((hv = vv.length) && !isNaN(zv = +zv)) {
        if (zv <= 0 || hv < 2) return +Pv(vv[0], 0, vv);
        if (zv >= 1) return +Pv(vv[hv - 1], hv - 1, vv);
        var hv, Sv = (hv - 1) * zv,
          ev = Math.floor(Sv),
          gv = +Pv(vv[ev], ev, vv);
        return gv + (+Pv(vv[ev + 1], ev + 1, vv) - gv) * (Sv - ev)
      }
    }

    function OP() {
      var vv, zv = [],
        Pv = [],
        hv = [];

      function Sv() {
        var vv = 0,
          Sv = Math.max(1, Pv.length);
        for (hv = new Array(Sv - 1); ++vv < Sv;) hv[vv - 1] = nP(zv, vv / Sv);
        return ev
      }

      function ev(zv) {
        return null == zv || isNaN(zv = +zv) ? vv : Pv[Gv(hv, zv)]
      }
      return ev.invertExtent = function(vv) {
        var Sv = Pv.indexOf(vv);
        return Sv < 0 ? [NaN, NaN] : [Sv > 0 ? hv[Sv - 1] : zv[0], Sv < hv.length ? hv[Sv] : zv[zv.length - 1]]
      }, ev.domain = function(vv) {
        if (!arguments.length) return zv.slice();
        zv = [];
        for (let Pv of vv) null == Pv || isNaN(Pv = +Pv) || zv.push(Pv);
        return zv.sort(Wv), Sv()
      }, ev.range = function(vv) {
        return arguments.length ? (Pv = Array.from(vv), Sv()) : Pv.slice()
      }, ev.unknown = function(zv) {
        return arguments.length ? (vv = zv, ev) : vv
      }, ev.quantiles = function() {
        return hv.slice()
      }, ev.copy = function() {
        return OP().domain(zv).range(Pv).unknown(vv)
      }, Vz.h.apply(ev, arguments)
    }

    function DP() {
      var vv, zv = 0,
        Pv = 1,
        hv = 1,
        Sv = [.5],
        ev = [0, 1];

      function gv(zv) {
        return null != zv && zv <= zv ? ev[Gv(Sv, zv, 0, hv)] : vv
      }

      function pv() {
        var vv = -1;
        for (Sv = new Array(hv); ++vv < hv;) Sv[vv] = ((vv + 1) * Pv - (vv - hv) * zv) / (hv + 1);
        return gv
      }
      return gv.domain = function(vv) {
        return arguments.length ? ([zv, Pv] = vv, zv = +zv, Pv = +Pv, pv()) : [zv, Pv]
      }, gv.range = function(vv) {
        return arguments.length ? (hv = (ev = Array.from(vv)).length - 1, pv()) : ev.slice()
      }, gv.invertExtent = function(vv) {
        var gv = ev.indexOf(vv);
        return gv < 0 ? [NaN, NaN] : gv < 1 ? [zv, Sv[0]] : gv >= hv ? [Sv[hv - 1], Pv] : [Sv[gv - 1], Sv[gv]]
      }, gv.unknown = function(zv) {
        return arguments.length ? (vv = zv, gv) : gv
      }, gv.thresholds = function() {
        return Sv.slice()
      }, gv.copy = function() {
        return DP().domain([zv, Pv]).range(ev).unknown(vv)
      }, Vz.h.apply(Ez(gv), arguments)
    }

    function KP() {
      var vv, zv = [.5],
        Pv = [0, 1],
        hv = 1;

      function Sv(Sv) {
        return null != Sv && Sv <= Sv ? Pv[Gv(zv, Sv, 0, hv)] : vv
      }
      return Sv.domain = function(vv) {
        return arguments.length ? (zv = Array.from(vv), hv = Math.min(zv.length, Pv.length - 1), Sv) : zv.slice()
      }, Sv.range = function(vv) {
        return arguments.length ? (Pv = Array.from(vv), hv = Math.min(zv.length, Pv.length - 1), Sv) : Pv.slice()
      }, Sv.invertExtent = function(vv) {
        var hv = Pv.indexOf(vv);
        return [zv[hv - 1], zv[hv]]
      }, Sv.unknown = function(zv) {
        return arguments.length ? (vv = zv, Sv) : vv
      }, Sv.copy = function() {
        return KP().domain(zv).range(Pv).unknown(vv)
      }, Vz.h.apply(Sv, arguments)
    }
    const VP = 1e3,
      UP = 6e4,
      RP = 36e5,
      xP = 864e5,
      tP = 6048e5,
      qP = 2592e6,
      IP = 31536e6,
      QP = new Date,
      ZP = new Date;

    function AP(vv, zv, Pv, hv) {
      function Sv(zv) {
        return vv(zv = 0 === arguments.length ? new Date : new Date(+zv)), zv
      }
      return Sv.floor = zv => (vv(zv = new Date(+zv)), zv), Sv.ceil = Pv => (vv(Pv = new Date(Pv - 1)), zv(Pv, 1), vv(Pv), Pv), Sv.round = vv => {
        const zv = Sv(vv),
          Pv = Sv.ceil(vv);
        return vv - zv < Pv - vv ? zv : Pv
      }, Sv.offset = (vv, Pv) => (zv(vv = new Date(+vv), null == Pv ? 1 : Math.floor(Pv)), vv), Sv.range = (Pv, hv, ev) => {
        const gv = [];
        if (Pv = Sv.ceil(Pv), ev = null == ev ? 1 : Math.floor(ev), !(Pv < hv) || !(ev > 0)) return gv;
        let pv;
        do {
          gv.push(pv = new Date(+Pv)), zv(Pv, ev), vv(Pv)
        } while (pv < Pv && Pv < hv);
        return gv
      }, Sv.filter = Pv => AP((zv => {
        if (zv >= zv)
          for (; vv(zv), !Pv(zv);) zv.setTime(zv - 1)
      }), ((vv, hv) => {
        if (vv >= vv)
          if (hv < 0)
            for (; ++hv <= 0;)
              for (; zv(vv, -1), !Pv(vv););
          else
            for (; --hv >= 0;)
              for (; zv(vv, 1), !Pv(vv););
      })), Pv && (Sv.count = (zv, hv) => (QP.setTime(+zv), ZP.setTime(+hv), vv(QP), vv(ZP), Math.floor(Pv(QP, ZP))), Sv.every = vv => (vv = Math.floor(vv), isFinite(vv) && vv > 0 ? vv > 1 ? Sv.filter(hv ? zv => hv(zv) % vv === 0 : zv => Sv.count(0, zv) % vv === 0) : Sv : null)), Sv
    }
    const LP = AP((() => {}), ((vv, zv) => {
      vv.setTime(+vv + zv)
    }), ((vv, zv) => zv - vv));
    LP.every = vv => (vv = Math.floor(vv), isFinite(vv) && vv > 0 ? vv > 1 ? AP((zv => {
      zv.setTime(Math.floor(zv / vv) * vv)
    }), ((zv, Pv) => {
      zv.setTime(+zv + Pv * vv)
    }), ((zv, Pv) => (Pv - zv) / vv)) : LP : null);
    LP.range;
    const HP = AP((vv => {
        vv.setTime(vv - vv.getMilliseconds())
      }), ((vv, zv) => {
        vv.setTime(+vv + zv * VP)
      }), ((vv, zv) => (zv - vv) / VP), (vv => vv.getUTCSeconds())),
      MP = (HP.range, AP((vv => {
        vv.setTime(vv - vv.getMilliseconds() - vv.getSeconds() * VP)
      }), ((vv, zv) => {
        vv.setTime(+vv + zv * UP)
      }), ((vv, zv) => (zv - vv) / UP), (vv => vv.getMinutes()))),
      yP = (MP.range, AP((vv => {
        vv.setUTCSeconds(0, 0)
      }), ((vv, zv) => {
        vv.setTime(+vv + zv * UP)
      }), ((vv, zv) => (zv - vv) / UP), (vv => vv.getUTCMinutes()))),
      BP = (yP.range, AP((vv => {
        vv.setTime(vv - vv.getMilliseconds() - vv.getSeconds() * VP - vv.getMinutes() * UP)
      }), ((vv, zv) => {
        vv.setTime(+vv + zv * RP)
      }), ((vv, zv) => (zv - vv) / RP), (vv => vv.getHours()))),
      JP = (BP.range, AP((vv => {
        vv.setUTCMinutes(0, 0, 0)
      }), ((vv, zv) => {
        vv.setTime(+vv + zv * RP)
      }), ((vv, zv) => (zv - vv) / RP), (vv => vv.getUTCHours()))),
      EP = (JP.range, AP((vv => vv.setHours(0, 0, 0, 0)), ((vv, zv) => vv.setDate(vv.getDate() + zv)), ((vv, zv) => (zv - vv - (zv.getTimezoneOffset() - vv.getTimezoneOffset()) * UP) / xP), (vv => vv.getDate() - 1))),
      oP = (EP.range, AP((vv => {
        vv.setUTCHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setUTCDate(vv.getUTCDate() + zv)
      }), ((vv, zv) => (zv - vv) / xP), (vv => vv.getUTCDate() - 1))),
      bP = (oP.range, AP((vv => {
        vv.setUTCHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setUTCDate(vv.getUTCDate() + zv)
      }), ((vv, zv) => (zv - vv) / xP), (vv => Math.floor(vv / xP))));
    bP.range;

    function rP(vv) {
      return AP((zv => {
        zv.setDate(zv.getDate() - (zv.getDay() + 7 - vv) % 7), zv.setHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setDate(vv.getDate() + 7 * zv)
      }), ((vv, zv) => (zv - vv - (zv.getTimezoneOffset() - vv.getTimezoneOffset()) * UP) / tP))
    }
    const kP = rP(0),
      XP = rP(1),
      uP = rP(2),
      vh = rP(3),
      zh = rP(4),
      Ph = rP(5),
      hh = rP(6);
    kP.range, XP.range, uP.range, vh.range, zh.range, Ph.range, hh.range;

    function Sh(vv) {
      return AP((zv => {
        zv.setUTCDate(zv.getUTCDate() - (zv.getUTCDay() + 7 - vv) % 7), zv.setUTCHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setUTCDate(vv.getUTCDate() + 7 * zv)
      }), ((vv, zv) => (zv - vv) / tP))
    }
    const eh = Sh(0),
      gh = Sh(1),
      ph = Sh(2),
      dh = Sh(3),
      Nh = Sh(4),
      lh = Sh(5),
      Th = Sh(6),
      Wh = (eh.range, gh.range, ph.range, dh.range, Nh.range, lh.range, Th.range, AP((vv => {
        vv.setDate(1), vv.setHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setMonth(vv.getMonth() + zv)
      }), ((vv, zv) => zv.getMonth() - vv.getMonth() + 12 * (zv.getFullYear() - vv.getFullYear())), (vv => vv.getMonth()))),
      wh = (Wh.range, AP((vv => {
        vv.setUTCDate(1), vv.setUTCHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setUTCMonth(vv.getUTCMonth() + zv)
      }), ((vv, zv) => zv.getUTCMonth() - vv.getUTCMonth() + 12 * (zv.getUTCFullYear() - vv.getUTCFullYear())), (vv => vv.getUTCMonth()))),
      ah = (wh.range, AP((vv => {
        vv.setMonth(0, 1), vv.setHours(0, 0, 0, 0)
      }), ((vv, zv) => {
        vv.setFullYear(vv.getFullYear() + zv)
      }), ((vv, zv) => zv.getFullYear() - vv.getFullYear()), (vv => vv.getFullYear())));
    ah.every = vv => isFinite(vv = Math.floor(vv)) && vv > 0 ? AP((zv => {
      zv.setFullYear(Math.floor(zv.getFullYear() / vv) * vv), zv.setMonth(0, 1), zv.setHours(0, 0, 0, 0)
    }), ((zv, Pv) => {
      zv.setFullYear(zv.getFullYear() + Pv * vv)
    })) : null;
    ah.range;
    const sh = AP((vv => {
      vv.setUTCMonth(0, 1), vv.setUTCHours(0, 0, 0, 0)
    }), ((vv, zv) => {
      vv.setUTCFullYear(vv.getUTCFullYear() + zv)
    }), ((vv, zv) => zv.getUTCFullYear() - vv.getUTCFullYear()), (vv => vv.getUTCFullYear()));
    sh.every = vv => isFinite(vv = Math.floor(vv)) && vv > 0 ? AP((zv => {
      zv.setUTCFullYear(Math.floor(zv.getUTCFullYear() / vv) * vv), zv.setUTCMonth(0, 1), zv.setUTCHours(0, 0, 0, 0)
    }), ((zv, Pv) => {
      zv.setUTCFullYear(zv.getUTCFullYear() + Pv * vv)
    })) : null;
    sh.range;

    function Ch(vv, zv, Pv, hv, Sv, ev) {
      const gv = [
        [HP, 1, VP],
        [HP, 5, 5e3],
        [HP, 15, 15e3],
        [HP, 30, 3e4],
        [ev, 1, UP],
        [ev, 5, 3e5],
        [ev, 15, 9e5],
        [ev, 30, 18e5],
        [Sv, 1, RP],
        [Sv, 3, 108e5],
        [Sv, 6, 216e5],
        [Sv, 12, 432e5],
        [hv, 1, xP],
        [hv, 2, 1728e5],
        [Pv, 1, tP],
        [zv, 1, qP],
        [zv, 3, 7776e6],
        [vv, 1, IP]
      ];

      function pv(zv, Pv, hv) {
        const Sv = Math.abs(Pv - zv) / hv,
          ev = av((vv => {
            let [, , zv] = vv;
            return zv
          })).right(gv, Sv);
        if (ev === gv.length) return vv.every(Tv(zv / IP, Pv / IP, hv));
        if (0 === ev) return LP.every(Math.max(Tv(zv, Pv, hv), 1));
        const [pv, dv] = gv[Sv / gv[ev - 1][2] < gv[ev][2] / Sv ? ev - 1 : ev];
        return pv.every(dv)
      }
      return [function(vv, zv, Pv) {
        const hv = zv < vv;
        hv && ([vv, zv] = [zv, vv]);
        const Sv = Pv && "function" === typeof Pv.range ? Pv : pv(vv, zv, Pv),
          ev = Sv ? Sv.range(vv, +zv + 1) : [];
        return hv ? ev.reverse() : ev
      }, pv]
    }
    const [ih, ch] = Ch(sh, wh, eh, bP, JP, yP), [Gh, mh] = Ch(ah, Wh, kP, EP, BP, MP);

    function jh(vv) {
      if (0 <= vv.y && vv.y < 100) {
        var zv = new Date(-1, vv.m, vv.d, vv.H, vv.M, vv.S, vv.L);
        return zv.setFullYear(vv.y), zv
      }
      return new Date(vv.y, vv.m, vv.d, vv.H, vv.M, vv.S, vv.L)
    }

    function fh(vv) {
      if (0 <= vv.y && vv.y < 100) {
        var zv = new Date(Date.UTC(-1, vv.m, vv.d, vv.H, vv.M, vv.S, vv.L));
        return zv.setUTCFullYear(vv.y), zv
      }
      return new Date(Date.UTC(vv.y, vv.m, vv.d, vv.H, vv.M, vv.S, vv.L))
    }

    function Fh(vv, zv, Pv) {
      return {
        y: vv,
        m: zv,
        d: Pv,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      }
    }
    var Yh, nh, Oh, Dh = {
        "-": "",
        _: " ",
        0: "0"
      },
      Kh = /^\s*\d+/,
      Vh = /^%/,
      Uh = /[\\^$*+?|[\]().{}]/g;

    function Rh(vv, zv, Pv) {
      var hv = vv < 0 ? "-" : "",
        Sv = (hv ? -vv : vv) + "",
        ev = Sv.length;
      return hv + (ev < Pv ? new Array(Pv - ev + 1).join(zv) + Sv : Sv)
    }

    function xh(vv) {
      return vv.replace(Uh, "\\$&")
    }

    function th(vv) {
      return new RegExp("^(?:" + vv.map(xh).join("|") + ")", "i")
    }

    function qh(vv) {
      return new Map(vv.map(((vv, zv) => [vv.toLowerCase(), zv])))
    }

    function Ih(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 1));
      return hv ? (vv.w = +hv[0], Pv + hv[0].length) : -1
    }

    function Qh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 1));
      return hv ? (vv.u = +hv[0], Pv + hv[0].length) : -1
    }

    function Zh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.U = +hv[0], Pv + hv[0].length) : -1
    }

    function Ah(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.V = +hv[0], Pv + hv[0].length) : -1
    }

    function Lh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.W = +hv[0], Pv + hv[0].length) : -1
    }

    function Hh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 4));
      return hv ? (vv.y = +hv[0], Pv + hv[0].length) : -1
    }

    function Mh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.y = +hv[0] + (+hv[0] > 68 ? 1900 : 2e3), Pv + hv[0].length) : -1
    }

    function yh(vv, zv, Pv) {
      var hv = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(zv.slice(Pv, Pv + 6));
      return hv ? (vv.Z = hv[1] ? 0 : -(hv[2] + (hv[3] || "00")), Pv + hv[0].length) : -1
    }

    function Bh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 1));
      return hv ? (vv.q = 3 * hv[0] - 3, Pv + hv[0].length) : -1
    }

    function Jh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.m = hv[0] - 1, Pv + hv[0].length) : -1
    }

    function Eh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.d = +hv[0], Pv + hv[0].length) : -1
    }

    function oh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 3));
      return hv ? (vv.m = 0, vv.d = +hv[0], Pv + hv[0].length) : -1
    }

    function bh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.H = +hv[0], Pv + hv[0].length) : -1
    }

    function rh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.M = +hv[0], Pv + hv[0].length) : -1
    }

    function kh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 2));
      return hv ? (vv.S = +hv[0], Pv + hv[0].length) : -1
    }

    function Xh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 3));
      return hv ? (vv.L = +hv[0], Pv + hv[0].length) : -1
    }

    function uh(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv, Pv + 6));
      return hv ? (vv.L = Math.floor(hv[0] / 1e3), Pv + hv[0].length) : -1
    }

    function vS(vv, zv, Pv) {
      var hv = Vh.exec(zv.slice(Pv, Pv + 1));
      return hv ? Pv + hv[0].length : -1
    }

    function zS(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv));
      return hv ? (vv.Q = +hv[0], Pv + hv[0].length) : -1
    }

    function PS(vv, zv, Pv) {
      var hv = Kh.exec(zv.slice(Pv));
      return hv ? (vv.s = +hv[0], Pv + hv[0].length) : -1
    }

    function hS(vv, zv) {
      return Rh(vv.getDate(), zv, 2)
    }

    function SS(vv, zv) {
      return Rh(vv.getHours(), zv, 2)
    }

    function eS(vv, zv) {
      return Rh(vv.getHours() % 12 || 12, zv, 2)
    }

    function gS(vv, zv) {
      return Rh(1 + EP.count(ah(vv), vv), zv, 3)
    }

    function pS(vv, zv) {
      return Rh(vv.getMilliseconds(), zv, 3)
    }

    function dS(vv, zv) {
      return pS(vv, zv) + "000"
    }

    function NS(vv, zv) {
      return Rh(vv.getMonth() + 1, zv, 2)
    }

    function lS(vv, zv) {
      return Rh(vv.getMinutes(), zv, 2)
    }

    function TS(vv, zv) {
      return Rh(vv.getSeconds(), zv, 2)
    }

    function WS(vv) {
      var zv = vv.getDay();
      return 0 === zv ? 7 : zv
    }

    function wS(vv, zv) {
      return Rh(kP.count(ah(vv) - 1, vv), zv, 2)
    }

    function aS(vv) {
      var zv = vv.getDay();
      return zv >= 4 || 0 === zv ? zh(vv) : zh.ceil(vv)
    }

    function sS(vv, zv) {
      return vv = aS(vv), Rh(zh.count(ah(vv), vv) + (4 === ah(vv).getDay()), zv, 2)
    }

    function CS(vv) {
      return vv.getDay()
    }

    function iS(vv, zv) {
      return Rh(XP.count(ah(vv) - 1, vv), zv, 2)
    }

    function cS(vv, zv) {
      return Rh(vv.getFullYear() % 100, zv, 2)
    }

    function GS(vv, zv) {
      return Rh((vv = aS(vv)).getFullYear() % 100, zv, 2)
    }

    function mS(vv, zv) {
      return Rh(vv.getFullYear() % 1e4, zv, 4)
    }

    function jS(vv, zv) {
      var Pv = vv.getDay();
      return Rh((vv = Pv >= 4 || 0 === Pv ? zh(vv) : zh.ceil(vv)).getFullYear() % 1e4, zv, 4)
    }

    function fS(vv) {
      var zv = vv.getTimezoneOffset();
      return (zv > 0 ? "-" : (zv *= -1, "+")) + Rh(zv / 60 | 0, "0", 2) + Rh(zv % 60, "0", 2)
    }

    function FS(vv, zv) {
      return Rh(vv.getUTCDate(), zv, 2)
    }

    function YS(vv, zv) {
      return Rh(vv.getUTCHours(), zv, 2)
    }

    function nS(vv, zv) {
      return Rh(vv.getUTCHours() % 12 || 12, zv, 2)
    }

    function OS(vv, zv) {
      return Rh(1 + oP.count(sh(vv), vv), zv, 3)
    }

    function DS(vv, zv) {
      return Rh(vv.getUTCMilliseconds(), zv, 3)
    }

    function KS(vv, zv) {
      return DS(vv, zv) + "000"
    }

    function VS(vv, zv) {
      return Rh(vv.getUTCMonth() + 1, zv, 2)
    }

    function US(vv, zv) {
      return Rh(vv.getUTCMinutes(), zv, 2)
    }

    function RS(vv, zv) {
      return Rh(vv.getUTCSeconds(), zv, 2)
    }

    function xS(vv) {
      var zv = vv.getUTCDay();
      return 0 === zv ? 7 : zv
    }

    function tS(vv, zv) {
      return Rh(eh.count(sh(vv) - 1, vv), zv, 2)
    }

    function qS(vv) {
      var zv = vv.getUTCDay();
      return zv >= 4 || 0 === zv ? Nh(vv) : Nh.ceil(vv)
    }

    function IS(vv, zv) {
      return vv = qS(vv), Rh(Nh.count(sh(vv), vv) + (4 === sh(vv).getUTCDay()), zv, 2)
    }

    function QS(vv) {
      return vv.getUTCDay()
    }

    function ZS(vv, zv) {
      return Rh(gh.count(sh(vv) - 1, vv), zv, 2)
    }

    function AS(vv, zv) {
      return Rh(vv.getUTCFullYear() % 100, zv, 2)
    }

    function LS(vv, zv) {
      return Rh((vv = qS(vv)).getUTCFullYear() % 100, zv, 2)
    }

    function HS(vv, zv) {
      return Rh(vv.getUTCFullYear() % 1e4, zv, 4)
    }

    function MS(vv, zv) {
      var Pv = vv.getUTCDay();
      return Rh((vv = Pv >= 4 || 0 === Pv ? Nh(vv) : Nh.ceil(vv)).getUTCFullYear() % 1e4, zv, 4)
    }

    function yS() {
      return "+0000"
    }

    function BS() {
      return "%"
    }

    function JS(vv) {
      return +vv
    }

    function ES(vv) {
      return Math.floor(+vv / 1e3)
    }

    function oS(vv) {
      return new Date(vv)
    }

    function bS(vv) {
      return vv instanceof Date ? +vv : +new Date(+vv)
    }

    function rS(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
      var lv = Dz(),
        Tv = lv.invert,
        Wv = lv.domain,
        wv = Nv(".%L"),
        av = Nv(":%S"),
        sv = Nv("%I:%M"),
        Cv = Nv("%I %p"),
        iv = Nv("%a %d"),
        cv = Nv("%b %d"),
        Gv = Nv("%B"),
        mv = Nv("%Y");

      function jv(vv) {
        return (dv(vv) < vv ? wv : pv(vv) < vv ? av : gv(vv) < vv ? sv : ev(vv) < vv ? Cv : hv(vv) < vv ? Sv(vv) < vv ? iv : cv : Pv(vv) < vv ? Gv : mv)(vv)
      }
      return lv.invert = function(vv) {
        return new Date(Tv(vv))
      }, lv.domain = function(vv) {
        return arguments.length ? Wv(Array.from(vv, bS)) : Wv().map(oS)
      }, lv.ticks = function(zv) {
        var Pv = Wv();
        return vv(Pv[0], Pv[Pv.length - 1], null == zv ? 10 : zv)
      }, lv.tickFormat = function(vv, zv) {
        return null == zv ? jv : Nv(zv)
      }, lv.nice = function(vv) {
        var Pv = Wv();
        return vv && "function" === typeof vv.range || (vv = zv(Pv[0], Pv[Pv.length - 1], null == vv ? 10 : vv)), vv ? Wv(rz(Pv, vv)) : lv
      }, lv.copy = function() {
        return nz(lv, rS(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv))
      }, lv
    }

    function kS() {
      return Vz.h.apply(rS(Gh, mh, ah, Wh, kP, EP, BP, MP, HP, nh).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
    }

    function XS() {
      return Vz.h.apply(rS(ih, ch, sh, wh, eh, oP, JP, yP, HP, Oh).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
    }

    function uS() {
      var vv, zv, Pv, hv, Sv, ev = 0,
        gv = 1,
        pv = jz,
        dv = !1;

      function Nv(zv) {
        return null == zv || isNaN(zv = +zv) ? Sv : pv(0 === Pv ? .5 : (zv = (hv(zv) - vv) * Pv, dv ? Math.max(0, Math.min(1, zv)) : zv))
      }

      function lv(vv) {
        return function(zv) {
          var Pv, hv;
          return arguments.length ? ([Pv, hv] = zv, pv = vv(Pv, hv), Nv) : [pv(0), pv(1)]
        }
      }
      return Nv.domain = function(Sv) {
          return arguments.length ? ([ev, gv] = Sv, vv = hv(ev = +ev), zv = hv(gv = +gv), Pv = vv === zv ? 0 : 1 / (zv - vv), Nv) : [ev, gv]
        }, Nv.clamp = function(vv) {
          return arguments.length ? (dv = !!vv, Nv) : dv
        }, Nv.interpolator = function(vv) {
          return arguments.length ? (pv = vv, Nv) : pv
        }, Nv.range = lv(iz), Nv.rangeRound = lv(cz), Nv.unknown = function(vv) {
          return arguments.length ? (Sv = vv, Nv) : Sv
        },
        function(Sv) {
          return hv = Sv, vv = Sv(ev), zv = Sv(gv), Pv = vv === zv ? 0 : 1 / (zv - vv), Nv
        }
    }

    function ve(vv, zv) {
      return zv.domain(vv.domain()).interpolator(vv.interpolator()).clamp(vv.clamp()).unknown(vv.unknown())
    }

    function ze() {
      var vv = Ez(uS()(jz));
      return vv.copy = function() {
        return ve(vv, ze())
      }, Vz.e.apply(vv, arguments)
    }

    function Pe() {
      var vv = hP(uS()).domain([1, 10]);
      return vv.copy = function() {
        return ve(vv, Pe()).base(vv.base())
      }, Vz.e.apply(vv, arguments)
    }

    function he() {
      var vv = pP(uS());
      return vv.copy = function() {
        return ve(vv, he()).constant(vv.constant())
      }, Vz.e.apply(vv, arguments)
    }

    function Se() {
      var vv = wP(uS());
      return vv.copy = function() {
        return ve(vv, Se()).exponent(vv.exponent())
      }, Vz.e.apply(vv, arguments)
    }

    function ee() {
      return Se.apply(null, arguments).exponent(.5)
    }

    function ge() {
      var vv = [],
        zv = jz;

      function Pv(Pv) {
        if (null != Pv && !isNaN(Pv = +Pv)) return zv((Gv(vv, Pv, 1) - 1) / (vv.length - 1))
      }
      return Pv.domain = function(zv) {
        if (!arguments.length) return vv.slice();
        vv = [];
        for (let Pv of zv) null == Pv || isNaN(Pv = +Pv) || vv.push(Pv);
        return vv.sort(Wv), Pv
      }, Pv.interpolator = function(vv) {
        return arguments.length ? (zv = vv, Pv) : zv
      }, Pv.range = function() {
        return vv.map(((Pv, hv) => zv(hv / (vv.length - 1))))
      }, Pv.quantiles = function(zv) {
        return Array.from({
          length: zv + 1
        }, ((Pv, hv) => YP(vv, hv / zv)))
      }, Pv.copy = function() {
        return ge(zv).domain(vv)
      }, Vz.e.apply(Pv, arguments)
    }

    function pe() {
      var vv, zv, Pv, hv, Sv, ev, gv, pv = 0,
        dv = .5,
        Nv = 1,
        lv = 1,
        Tv = jz,
        Wv = !1;

      function wv(vv) {
        return isNaN(vv = +vv) ? gv : (vv = .5 + ((vv = +ev(vv)) - zv) * (lv * vv < lv * zv ? hv : Sv), Tv(Wv ? Math.max(0, Math.min(1, vv)) : vv))
      }

      function av(vv) {
        return function(zv) {
          var Pv, hv, Sv;
          return arguments.length ? ([Pv, hv, Sv] = zv, Tv = function(vv, zv) {
            void 0 === zv && (zv = vv, vv = iz);
            for (var Pv = 0, hv = zv.length - 1, Sv = zv[0], ev = new Array(hv < 0 ? 0 : hv); Pv < hv;) ev[Pv] = vv(Sv, Sv = zv[++Pv]);
            return function(vv) {
              var zv = Math.max(0, Math.min(hv - 1, Math.floor(vv *= hv)));
              return ev[zv](vv - zv)
            }
          }(vv, [Pv, hv, Sv]), wv) : [Tv(0), Tv(.5), Tv(1)]
        }
      }
      return wv.domain = function(gv) {
          return arguments.length ? ([pv, dv, Nv] = gv, vv = ev(pv = +pv), zv = ev(dv = +dv), Pv = ev(Nv = +Nv), hv = vv === zv ? 0 : .5 / (zv - vv), Sv = zv === Pv ? 0 : .5 / (Pv - zv), lv = zv < vv ? -1 : 1, wv) : [pv, dv, Nv]
        }, wv.clamp = function(vv) {
          return arguments.length ? (Wv = !!vv, wv) : Wv
        }, wv.interpolator = function(vv) {
          return arguments.length ? (Tv = vv, wv) : Tv
        }, wv.range = av(iz), wv.rangeRound = av(cz), wv.unknown = function(vv) {
          return arguments.length ? (gv = vv, wv) : gv
        },
        function(gv) {
          return ev = gv, vv = gv(pv), zv = gv(dv), Pv = gv(Nv), hv = vv === zv ? 0 : .5 / (zv - vv), Sv = zv === Pv ? 0 : .5 / (Pv - zv), lv = zv < vv ? -1 : 1, wv
        }
    }

    function de() {
      var vv = Ez(pe()(jz));
      return vv.copy = function() {
        return ve(vv, de())
      }, Vz.e.apply(vv, arguments)
    }

    function Ne() {
      var vv = hP(pe()).domain([.1, 1, 10]);
      return vv.copy = function() {
        return ve(vv, Ne()).base(vv.base())
      }, Vz.e.apply(vv, arguments)
    }

    function le() {
      var vv = pP(pe());
      return vv.copy = function() {
        return ve(vv, le()).constant(vv.constant())
      }, Vz.e.apply(vv, arguments)
    }

    function Te() {
      var vv = wP(pe());
      return vv.copy = function() {
        return ve(vv, Te()).exponent(vv.exponent())
      }, Vz.e.apply(vv, arguments)
    }

    function We() {
      return Te.apply(null, arguments).exponent(.5)
    }

    function we(vv, zv) {
      if ((Sv = vv.length) > 1)
        for (var Pv, hv, Sv, ev = 1, gv = vv[zv[0]], pv = gv.length; ev < Sv; ++ev)
          for (hv = gv, gv = vv[zv[ev]], Pv = 0; Pv < pv; ++Pv) gv[Pv][1] += gv[Pv][0] = isNaN(hv[Pv][1]) ? hv[Pv][0] : hv[Pv][1]
    }! function(vv) {
      Yh = function(vv) {
        var zv = vv.dateTime,
          Pv = vv.date,
          hv = vv.time,
          Sv = vv.periods,
          ev = vv.days,
          gv = vv.shortDays,
          pv = vv.months,
          dv = vv.shortMonths,
          Nv = th(Sv),
          lv = qh(Sv),
          Tv = th(ev),
          Wv = qh(ev),
          wv = th(gv),
          av = qh(gv),
          sv = th(pv),
          Cv = qh(pv),
          iv = th(dv),
          cv = qh(dv),
          Gv = {
            a: function(vv) {
              return gv[vv.getDay()]
            },
            A: function(vv) {
              return ev[vv.getDay()]
            },
            b: function(vv) {
              return dv[vv.getMonth()]
            },
            B: function(vv) {
              return pv[vv.getMonth()]
            },
            c: null,
            d: hS,
            e: hS,
            f: dS,
            g: GS,
            G: jS,
            H: SS,
            I: eS,
            j: gS,
            L: pS,
            m: NS,
            M: lS,
            p: function(vv) {
              return Sv[+(vv.getHours() >= 12)]
            },
            q: function(vv) {
              return 1 + ~~(vv.getMonth() / 3)
            },
            Q: JS,
            s: ES,
            S: TS,
            u: WS,
            U: wS,
            V: sS,
            w: CS,
            W: iS,
            x: null,
            X: null,
            y: cS,
            Y: mS,
            Z: fS,
            "%": BS
          },
          mv = {
            a: function(vv) {
              return gv[vv.getUTCDay()]
            },
            A: function(vv) {
              return ev[vv.getUTCDay()]
            },
            b: function(vv) {
              return dv[vv.getUTCMonth()]
            },
            B: function(vv) {
              return pv[vv.getUTCMonth()]
            },
            c: null,
            d: FS,
            e: FS,
            f: KS,
            g: LS,
            G: MS,
            H: YS,
            I: nS,
            j: OS,
            L: DS,
            m: VS,
            M: US,
            p: function(vv) {
              return Sv[+(vv.getUTCHours() >= 12)]
            },
            q: function(vv) {
              return 1 + ~~(vv.getUTCMonth() / 3)
            },
            Q: JS,
            s: ES,
            S: RS,
            u: xS,
            U: tS,
            V: IS,
            w: QS,
            W: ZS,
            x: null,
            X: null,
            y: AS,
            Y: HS,
            Z: yS,
            "%": BS
          },
          jv = {
            a: function(vv, zv, Pv) {
              var hv = wv.exec(zv.slice(Pv));
              return hv ? (vv.w = av.get(hv[0].toLowerCase()), Pv + hv[0].length) : -1
            },
            A: function(vv, zv, Pv) {
              var hv = Tv.exec(zv.slice(Pv));
              return hv ? (vv.w = Wv.get(hv[0].toLowerCase()), Pv + hv[0].length) : -1
            },
            b: function(vv, zv, Pv) {
              var hv = iv.exec(zv.slice(Pv));
              return hv ? (vv.m = cv.get(hv[0].toLowerCase()), Pv + hv[0].length) : -1
            },
            B: function(vv, zv, Pv) {
              var hv = sv.exec(zv.slice(Pv));
              return hv ? (vv.m = Cv.get(hv[0].toLowerCase()), Pv + hv[0].length) : -1
            },
            c: function(vv, Pv, hv) {
              return Yv(vv, zv, Pv, hv)
            },
            d: Eh,
            e: Eh,
            f: uh,
            g: Mh,
            G: Hh,
            H: bh,
            I: bh,
            j: oh,
            L: Xh,
            m: Jh,
            M: rh,
            p: function(vv, zv, Pv) {
              var hv = Nv.exec(zv.slice(Pv));
              return hv ? (vv.p = lv.get(hv[0].toLowerCase()), Pv + hv[0].length) : -1
            },
            q: Bh,
            Q: zS,
            s: PS,
            S: kh,
            u: Qh,
            U: Zh,
            V: Ah,
            w: Ih,
            W: Lh,
            x: function(vv, zv, hv) {
              return Yv(vv, Pv, zv, hv)
            },
            X: function(vv, zv, Pv) {
              return Yv(vv, hv, zv, Pv)
            },
            y: Mh,
            Y: Hh,
            Z: yh,
            "%": vS
          };

        function fv(vv, zv) {
          return function(Pv) {
            var hv, Sv, ev, gv = [],
              pv = -1,
              dv = 0,
              Nv = vv.length;
            for (Pv instanceof Date || (Pv = new Date(+Pv)); ++pv < Nv;) 37 === vv.charCodeAt(pv) && (gv.push(vv.slice(dv, pv)), null != (Sv = Dh[hv = vv.charAt(++pv)]) ? hv = vv.charAt(++pv) : Sv = "e" === hv ? " " : "0", (ev = zv[hv]) && (hv = ev(Pv, Sv)), gv.push(hv), dv = pv + 1);
            return gv.push(vv.slice(dv, pv)), gv.join("")
          }
        }

        function Fv(vv, zv) {
          return function(Pv) {
            var hv, Sv, ev = Fh(1900, void 0, 1);
            if (Yv(ev, vv, Pv += "", 0) != Pv.length) return null;
            if ("Q" in ev) return new Date(ev.Q);
            if ("s" in ev) return new Date(1e3 * ev.s + ("L" in ev ? ev.L : 0));
            if (zv && !("Z" in ev) && (ev.Z = 0), "p" in ev && (ev.H = ev.H % 12 + 12 * ev.p), void 0 === ev.m && (ev.m = "q" in ev ? ev.q : 0), "V" in ev) {
              if (ev.V < 1 || ev.V > 53) return null;
              "w" in ev || (ev.w = 1), "Z" in ev ? (Sv = (hv = fh(Fh(ev.y, 0, 1))).getUTCDay(), hv = Sv > 4 || 0 === Sv ? gh.ceil(hv) : gh(hv), hv = oP.offset(hv, 7 * (ev.V - 1)), ev.y = hv.getUTCFullYear(), ev.m = hv.getUTCMonth(), ev.d = hv.getUTCDate() + (ev.w + 6) % 7) : (Sv = (hv = jh(Fh(ev.y, 0, 1))).getDay(), hv = Sv > 4 || 0 === Sv ? XP.ceil(hv) : XP(hv), hv = EP.offset(hv, 7 * (ev.V - 1)), ev.y = hv.getFullYear(), ev.m = hv.getMonth(), ev.d = hv.getDate() + (ev.w + 6) % 7)
            } else("W" in ev || "U" in ev) && ("w" in ev || (ev.w = "u" in ev ? ev.u % 7 : "W" in ev ? 1 : 0), Sv = "Z" in ev ? fh(Fh(ev.y, 0, 1)).getUTCDay() : jh(Fh(ev.y, 0, 1)).getDay(), ev.m = 0, ev.d = "W" in ev ? (ev.w + 6) % 7 + 7 * ev.W - (Sv + 5) % 7 : ev.w + 7 * ev.U - (Sv + 6) % 7);
            return "Z" in ev ? (ev.H += ev.Z / 100 | 0, ev.M += ev.Z % 100, fh(ev)) : jh(ev)
          }
        }

        function Yv(vv, zv, Pv, hv) {
          for (var Sv, ev, gv = 0, pv = zv.length, dv = Pv.length; gv < pv;) {
            if (hv >= dv) return -1;
            if (37 === (Sv = zv.charCodeAt(gv++))) {
              if (Sv = zv.charAt(gv++), !(ev = jv[Sv in Dh ? zv.charAt(gv++) : Sv]) || (hv = ev(vv, Pv, hv)) < 0) return -1
            } else if (Sv != Pv.charCodeAt(hv++)) return -1
          }
          return hv
        }
        return Gv.x = fv(Pv, Gv), Gv.X = fv(hv, Gv), Gv.c = fv(zv, Gv), mv.x = fv(Pv, mv), mv.X = fv(hv, mv), mv.c = fv(zv, mv), {
          format: function(vv) {
            var zv = fv(vv += "", Gv);
            return zv.toString = function() {
              return vv
            }, zv
          },
          parse: function(vv) {
            var zv = Fv(vv += "", !1);
            return zv.toString = function() {
              return vv
            }, zv
          },
          utcFormat: function(vv) {
            var zv = fv(vv += "", mv);
            return zv.toString = function() {
              return vv
            }, zv
          },
          utcParse: function(vv) {
            var zv = Fv(vv += "", !0);
            return zv.toString = function() {
              return vv
            }, zv
          }
        }
      }(vv), nh = Yh.format, Yh.parse, Oh = Yh.utcFormat, Yh.utcParse
    }({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var ae = Pv(5940),
      se = Pv(5823);

    function Ce(vv) {
      for (var zv = vv.length, Pv = new Array(zv); --zv >= 0;) Pv[zv] = zv;
      return Pv
    }

    function ie(vv, zv) {
      return vv[zv]
    }

    function ce(vv) {
      const zv = [];
      return zv.key = vv, zv
    }
    var Ge = Pv(5878),
      me = Pv.n(Ge),
      je = Pv(5895),
      fe = Pv.n(je),
      Fe = Pv(5141),
      Ye = Pv.n(Fe),
      ne = Pv(4995),
      Oe = Pv.n(ne),
      De = Pv(4895),
      Ke = Pv.n(De),
      Ve = Pv(4924),
      Ue = Pv.n(Ve),
      Re = Pv(5909),
      xe = Pv.n(Re),
      te = Pv(4909),
      qe = Pv.n(te),
      Ie = Pv(5783),
      Qe = Pv.n(Ie),
      Ze = Pv(5924),
      Ae = Pv.n(Ze),
      Le = Pv(5227),
      He = Pv.n(Le),
      Me = Pv(5926),
      ye = Pv.n(Me);

    function Be(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return Je(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(vv)) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return Je(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return Je(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function Je(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }
    var Ee = function(vv) {
        return vv
      },
      oe = {
        "@@functional/placeholder": !0
      },
      be = function(vv) {
        return vv === oe
      },
      re = function(vv) {
        return function zv() {
          return 0 === arguments.length || 1 === arguments.length && be(arguments.length <= 0 ? void 0 : arguments[0]) ? zv : vv.apply(void 0, arguments)
        }
      },
      ke = function vv(zv, Pv) {
        return 1 === zv ? Pv : re((function() {
          for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
          var gv = Sv.filter((function(vv) {
            return vv !== oe
          })).length;
          return gv >= zv ? Pv.apply(void 0, Sv) : vv(zv - gv, re((function() {
            for (var vv = arguments.length, zv = new Array(vv), hv = 0; hv < vv; hv++) zv[hv] = arguments[hv];
            var ev = Sv.map((function(vv) {
              return be(vv) ? zv.shift() : vv
            }));
            return Pv.apply(void 0, Be(ev).concat(zv))
          })))
        }))
      },
      Xe = function(vv) {
        return ke(vv.length, vv)
      },
      ue = function(vv, zv) {
        for (var Pv = [], hv = vv; hv < zv; ++hv) Pv[hv - vv] = hv;
        return Pv
      },
      vg = Xe((function(vv, zv) {
        return Array.isArray(zv) ? zv.map(vv) : Object.keys(zv).map((function(vv) {
          return zv[vv]
        })).map(vv)
      })),
      zg = function() {
        for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
        if (!zv.length) return Ee;
        var hv = zv.reverse(),
          Sv = hv[0],
          ev = hv.slice(1);
        return function() {
          return ev.reduce((function(vv, zv) {
            return zv(vv)
          }), Sv.apply(void 0, arguments))
        }
      },
      Pg = function(vv) {
        return Array.isArray(vv) ? vv.reverse() : vv.split("").reverse.join("")
      },
      hg = function(vv) {
        var zv = null,
          Pv = null;
        return function() {
          for (var hv = arguments.length, Sv = new Array(hv), ev = 0; ev < hv; ev++) Sv[ev] = arguments[ev];
          return zv && Sv.every((function(vv, Pv) {
            return vv === zv[Pv]
          })) ? Pv : (zv = Sv, Pv = vv.apply(void 0, Sv))
        }
      };
    const Sg = {
      rangeStep: function(vv, zv, Pv) {
        for (var hv = new(ye())(vv), Sv = 0, ev = []; hv.lt(zv) && Sv < 1e5;) ev.push(hv.toNumber()), hv = hv.add(Pv), Sv++;
        return ev
      },
      getDigitCount: function(vv) {
        return 0 === vv ? 1 : Math.floor(new(ye())(vv).abs().log(10).toNumber()) + 1
      },
      interpolateNumber: Xe((function(vv, zv, Pv) {
        var hv = +vv;
        return hv + Pv * (+zv - hv)
      })),
      uninterpolateNumber: Xe((function(vv, zv, Pv) {
        var hv = zv - +vv;
        return (Pv - vv) / (hv = hv || 1 / 0)
      })),
      uninterpolateTruncation: Xe((function(vv, zv, Pv) {
        var hv = zv - +vv;
        return hv = hv || 1 / 0, Math.max(0, Math.min(1, (Pv - vv) / hv))
      }))
    };

    function eg(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return dg(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(vv)) return Array.from(vv)
      }(vv) || pg(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function gg(vv, zv) {
      return function(vv) {
        if (Array.isArray(vv)) return vv
      }(vv) || function(vv, zv) {
        if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(vv))) return;
        var Pv = [],
          hv = !0,
          Sv = !1,
          ev = void 0;
        try {
          for (var gv, pv = vv[Symbol.iterator](); !(hv = (gv = pv.next()).done) && (Pv.push(gv.value), !zv || Pv.length !== zv); hv = !0);
        } catch (dv) {
          Sv = !0, ev = dv
        } finally {
          try {
            hv || null == pv.return || pv.return()
          } finally {
            if (Sv) throw ev
          }
        }
        return Pv
      }(vv, zv) || pg(vv, zv) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function pg(vv, zv) {
      if (vv) {
        if ("string" === typeof vv) return dg(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        return "Object" === Pv && vv.constructor && (Pv = vv.constructor.name), "Map" === Pv || "Set" === Pv ? Array.from(vv) : "Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv) ? dg(vv, zv) : void 0
      }
    }

    function dg(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function Ng(vv) {
      var zv = gg(vv, 2),
        Pv = zv[0],
        hv = zv[1],
        Sv = Pv,
        ev = hv;
      return Pv > hv && (Sv = hv, ev = Pv), [Sv, ev]
    }

    function lg(vv, zv, Pv) {
      if (vv.lte(0)) return new(ye())(0);
      var hv = Sg.getDigitCount(vv.toNumber()),
        Sv = new(ye())(10).pow(hv),
        ev = vv.div(Sv),
        gv = 1 !== hv ? .05 : .1,
        pv = new(ye())(Math.ceil(ev.div(gv).toNumber())).add(Pv).mul(gv).mul(Sv);
      return zv ? pv : new(ye())(Math.ceil(pv))
    }

    function Tg(vv, zv, Pv) {
      var hv = 1,
        Sv = new(ye())(vv);
      if (!Sv.isint() && Pv) {
        var ev = Math.abs(vv);
        ev < 1 ? (hv = new(ye())(10).pow(Sg.getDigitCount(vv) - 1), Sv = new(ye())(Math.floor(Sv.div(hv).toNumber())).mul(hv)) : ev > 1 && (Sv = new(ye())(Math.floor(vv)))
      } else 0 === vv ? Sv = new(ye())(Math.floor((zv - 1) / 2)) : Pv || (Sv = new(ye())(Math.floor(vv)));
      var gv = Math.floor((zv - 1) / 2);
      return zg(vg((function(vv) {
        return Sv.add(new(ye())(vv - gv).mul(hv)).toNumber()
      })), ue)(0, zv)
    }

    function Wg(vv, zv, Pv, hv) {
      var Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      if (!Number.isFinite((zv - vv) / (Pv - 1))) return {
        step: new(ye())(0),
        tickMin: new(ye())(0),
        tickMax: new(ye())(0)
      };
      var ev, gv = lg(new(ye())(zv).sub(vv).div(Pv - 1), hv, Sv);
      ev = vv <= 0 && zv >= 0 ? new(ye())(0) : (ev = new(ye())(vv).add(zv).div(2)).sub(new(ye())(ev).mod(gv));
      var pv = Math.ceil(ev.sub(vv).div(gv).toNumber()),
        dv = Math.ceil(new(ye())(zv).sub(ev).div(gv).toNumber()),
        Nv = pv + dv + 1;
      return Nv > Pv ? Wg(vv, zv, Pv, hv, Sv + 1) : (Nv < Pv && (dv = zv > 0 ? dv + (Pv - Nv) : dv, pv = zv > 0 ? pv : pv + (Pv - Nv)), {
        step: gv,
        tickMin: ev.sub(new(ye())(pv).mul(gv)),
        tickMax: ev.add(new(ye())(dv).mul(gv))
      })
    }
    var wg = hg((function(vv) {
        var zv = gg(vv, 2),
          Pv = zv[0],
          hv = zv[1],
          Sv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          ev = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gv = Math.max(Sv, 2),
          pv = gg(Ng([Pv, hv]), 2),
          dv = pv[0],
          Nv = pv[1];
        if (dv === -1 / 0 || Nv === 1 / 0) {
          var lv = Nv === 1 / 0 ? [dv].concat(eg(ue(0, Sv - 1).map((function() {
            return 1 / 0
          })))) : [].concat(eg(ue(0, Sv - 1).map((function() {
            return -1 / 0
          }))), [Nv]);
          return Pv > hv ? Pg(lv) : lv
        }
        if (dv === Nv) return Tg(dv, Sv, ev);
        var Tv = Wg(dv, Nv, gv, ev),
          Wv = Tv.step,
          wv = Tv.tickMin,
          av = Tv.tickMax,
          sv = Sg.rangeStep(wv, av.add(new(ye())(.1).mul(Wv)), Wv);
        return Pv > hv ? Pg(sv) : sv
      })),
      ag = (hg((function(vv) {
        var zv = gg(vv, 2),
          Pv = zv[0],
          hv = zv[1],
          Sv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          ev = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gv = Math.max(Sv, 2),
          pv = gg(Ng([Pv, hv]), 2),
          dv = pv[0],
          Nv = pv[1];
        if (dv === -1 / 0 || Nv === 1 / 0) return [Pv, hv];
        if (dv === Nv) return Tg(dv, Sv, ev);
        var lv = lg(new(ye())(Nv).sub(dv).div(gv - 1), ev, 0),
          Tv = zg(vg((function(vv) {
            return new(ye())(dv).add(new(ye())(vv).mul(lv)).toNumber()
          })), ue)(0, gv).filter((function(vv) {
            return vv >= dv && vv <= Nv
          }));
        return Pv > hv ? Pg(Tv) : Tv
      })), hg((function(vv, zv) {
        var Pv = gg(vv, 2),
          hv = Pv[0],
          Sv = Pv[1],
          ev = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          gv = gg(Ng([hv, Sv]), 2),
          pv = gv[0],
          dv = gv[1];
        if (pv === -1 / 0 || dv === 1 / 0) return [hv, Sv];
        if (pv === dv) return [pv];
        var Nv = Math.max(zv, 2),
          lv = lg(new(ye())(dv).sub(pv).div(Nv - 1), ev, 0),
          Tv = [].concat(eg(Sg.rangeStep(new(ye())(pv), new(ye())(dv).sub(new(ye())(.99).mul(lv)), lv)), [dv]);
        return hv > Sv ? Pg(Tv) : Tv
      }))),
      sg = Pv(5933),
      Cg = Pv(4891),
      ig = Pv(5149),
      cg = Pv(5938);

    function Gg(vv) {
      return Gg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Gg(vv)
    }

    function mg(vv) {
      return function(vv) {
        if (Array.isArray(vv)) return jg(vv)
      }(vv) || function(vv) {
        if ("undefined" !== typeof Symbol && null != vv[Symbol.iterator] || null != vv["@@iterator"]) return Array.from(vv)
      }(vv) || function(vv, zv) {
        if (!vv) return;
        if ("string" === typeof vv) return jg(vv, zv);
        var Pv = Object.prototype.toString.call(vv).slice(8, -1);
        "Object" === Pv && vv.constructor && (Pv = vv.constructor.name);
        if ("Map" === Pv || "Set" === Pv) return Array.from(vv);
        if ("Arguments" === Pv || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Pv)) return jg(vv, zv)
      }(vv) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
    }

    function jg(vv, zv) {
      (null == zv || zv > vv.length) && (zv = vv.length);
      for (var Pv = 0, hv = new Array(zv); Pv < zv; Pv++) hv[Pv] = vv[Pv];
      return hv
    }

    function fg(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function Fg(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? fg(Object(Pv), !0).forEach((function(zv) {
          Yg(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : fg(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Yg(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Gg(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Gg(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Gg(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }

    function ng(vv, zv, Pv) {
      return Ye()(vv) || Ye()(zv) ? Pv : (0, Cg.r)(zv) ? Ue()(vv, zv, Pv) : Oe()(zv) ? zv(vv) : Pv
    }

    function Og(vv, zv, Pv, hv) {
      var Sv = xe()(vv, (function(vv) {
        return ng(vv, zv)
      }));
      if ("number" === Pv) {
        var ev = Sv.filter((function(vv) {
          return (0, Cg.t)(vv) || parseFloat(vv)
        }));
        return ev.length ? [fe()(ev), me()(ev)] : [1 / 0, -1 / 0]
      }
      return (hv ? Sv.filter((function(vv) {
        return !Ye()(vv)
      })) : Sv).map((function(vv) {
        return (0, Cg.r)(vv) || vv instanceof Date ? vv : ""
      }))
    }
    var Dg = function(vv) {
        var zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          hv = arguments.length > 2 ? arguments[2] : void 0,
          Sv = arguments.length > 3 ? arguments[3] : void 0,
          ev = -1,
          gv = null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.length) && void 0 !== zv ? zv : 0;
        if (gv <= 1) return 0;
        if (Sv && "angleAxis" === Sv.axisType && Math.abs(Math.abs(Sv.range[1] - Sv.range[0]) - 360) <= 1e-6)
          for (var pv = Sv.range, dv = 0; dv < gv; dv++) {
            var Nv = dv > 0 ? hv[dv - 1].coordinate : hv[gv - 1].coordinate,
              lv = hv[dv].coordinate,
              Tv = dv >= gv - 1 ? hv[0].coordinate : hv[dv + 1].coordinate,
              Wv = void 0;
            if ((0, Cg.y)(lv - Nv) !== (0, Cg.y)(Tv - lv)) {
              var wv = [];
              if ((0, Cg.y)(Tv - lv) === (0, Cg.y)(pv[1] - pv[0])) {
                Wv = Tv;
                var av = lv + pv[1] - pv[0];
                wv[0] = Math.min(av, (av + Nv) / 2), wv[1] = Math.max(av, (av + Nv) / 2)
              } else {
                Wv = Nv;
                var sv = Tv + pv[1] - pv[0];
                wv[0] = Math.min(lv, (sv + lv) / 2), wv[1] = Math.max(lv, (sv + lv) / 2)
              }
              var Cv = [Math.min(lv, (Wv + lv) / 2), Math.max(lv, (Wv + lv) / 2)];
              if (vv > Cv[0] && vv <= Cv[1] || vv >= wv[0] && vv <= wv[1]) {
                ev = hv[dv].index;
                break
              }
            } else {
              var iv = Math.min(Nv, Tv),
                cv = Math.max(Nv, Tv);
              if (vv > (iv + lv) / 2 && vv <= (cv + lv) / 2) {
                ev = hv[dv].index;
                break
              }
            }
          } else
            for (var Gv = 0; Gv < gv; Gv++)
              if (0 === Gv && vv <= (Pv[Gv].coordinate + Pv[Gv + 1].coordinate) / 2 || Gv > 0 && Gv < gv - 1 && vv > (Pv[Gv].coordinate + Pv[Gv - 1].coordinate) / 2 && vv <= (Pv[Gv].coordinate + Pv[Gv + 1].coordinate) / 2 || Gv === gv - 1 && vv > (Pv[Gv].coordinate + Pv[Gv - 1].coordinate) / 2) {
                ev = Pv[Gv].index;
                break
              } return ev
      },
      Kg = function(vv) {
        var zv, Pv, hv = vv.type.displayName,
          Sv = null !== (zv = vv.type) && void 0 !== zv && zv.defaultProps ? Fg(Fg({}, vv.type.defaultProps), vv.props) : vv.props,
          ev = Sv.stroke,
          gv = Sv.fill;
        switch (hv) {
          case "Line":
            Pv = ev;
            break;
          case "Area":
          case "Radar":
            Pv = ev && "none" !== ev ? ev : gv;
            break;
          default:
            Pv = gv
        }
        return Pv
      },
      Vg = function(vv) {
        var zv = vv.barSize,
          Pv = vv.totalSize,
          hv = vv.stackGroups,
          Sv = void 0 === hv ? {} : hv;
        if (!Sv) return {};
        for (var ev = {}, gv = Object.keys(Sv), pv = 0, dv = gv.length; pv < dv; pv++)
          for (var Nv = Sv[gv[pv]].stackGroups, lv = Object.keys(Nv), Tv = 0, Wv = lv.length; Tv < Wv; Tv++) {
            var wv = Nv[lv[Tv]],
              av = wv.items,
              sv = wv.cateAxisId,
              Cv = av.filter((function(vv) {
                return (0, ig.n)(vv.type).indexOf("Bar") >= 0
              }));
            if (Cv && Cv.length) {
              var iv = Cv[0].type.defaultProps,
                cv = void 0 !== iv ? Fg(Fg({}, iv), Cv[0].props) : Cv[0].props,
                Gv = cv.barSize,
                mv = cv[sv];
              ev[mv] || (ev[mv] = []);
              var jv = Ye()(Gv) ? zv : Gv;
              ev[mv].push({
                item: Cv[0],
                stackList: Cv.slice(1),
                barSize: Ye()(jv) ? void 0 : (0, Cg.g)(jv, Pv, 0)
              })
            }
          }
        return ev
      },
      Ug = function(vv) {
        var zv = vv.barGap,
          Pv = vv.barCategoryGap,
          hv = vv.bandSize,
          Sv = vv.sizeList,
          ev = void 0 === Sv ? [] : Sv,
          gv = vv.maxBarSize,
          pv = ev.length;
        if (pv < 1) return null;
        var dv, Nv = (0, Cg.g)(zv, hv, 0, !0),
          lv = [];
        if (ev[0].barSize === +ev[0].barSize) {
          var Tv = !1,
            Wv = hv / pv,
            wv = ev.reduce((function(vv, zv) {
              return vv + zv.barSize || 0
            }), 0);
          (wv += (pv - 1) * Nv) >= hv && (wv -= (pv - 1) * Nv, Nv = 0), wv >= hv && Wv > 0 && (Tv = !0, wv = pv * (Wv *= .9));
          var av = {
            offset: ((hv - wv) / 2 | 0) - Nv,
            size: 0
          };
          dv = ev.reduce((function(vv, zv) {
            var Pv = {
                item: zv.item,
                position: {
                  offset: av.offset + av.size + Nv,
                  size: Tv ? Wv : zv.barSize
                }
              },
              hv = [].concat(mg(vv), [Pv]);
            return av = hv[hv.length - 1].position, zv.stackList && zv.stackList.length && zv.stackList.forEach((function(vv) {
              hv.push({
                item: vv,
                position: av
              })
            })), hv
          }), lv)
        } else {
          var sv = (0, Cg.g)(Pv, hv, 0, !0);
          hv - 2 * sv - (pv - 1) * Nv <= 0 && (Nv = 0);
          var Cv = (hv - 2 * sv - (pv - 1) * Nv) / pv;
          Cv > 1 && (Cv >>= 0);
          var iv = gv === +gv ? Math.min(Cv, gv) : Cv;
          dv = ev.reduce((function(vv, zv, Pv) {
            var hv = [].concat(mg(vv), [{
              item: zv.item,
              position: {
                offset: sv + (Cv + Nv) * Pv + (Cv - iv) / 2,
                size: iv
              }
            }]);
            return zv.stackList && zv.stackList.length && zv.stackList.forEach((function(vv) {
              hv.push({
                item: vv,
                position: hv[hv.length - 1].position
              })
            })), hv
          }), lv)
        }
        return dv
      },
      Rg = function(vv, zv, Pv, hv) {
        var Sv = Pv.children,
          ev = Pv.width,
          gv = Pv.margin,
          pv = ev - (gv.left || 0) - (gv.right || 0),
          dv = (0, cg.b)({
            children: Sv,
            legendWidth: pv
          });
        if (dv) {
          var Nv = hv || {},
            lv = Nv.width,
            Tv = Nv.height,
            Wv = dv.align,
            wv = dv.verticalAlign,
            av = dv.layout;
          if (("vertical" === av || "horizontal" === av && "middle" === wv) && "center" !== Wv && (0, Cg.t)(vv[Wv])) return Fg(Fg({}, vv), {}, Yg({}, Wv, vv[Wv] + (lv || 0)));
          if (("horizontal" === av || "vertical" === av && "center" === Wv) && "middle" !== wv && (0, Cg.t)(vv[wv])) return Fg(Fg({}, vv), {}, Yg({}, wv, vv[wv] + (Tv || 0)))
        }
        return vv
      },
      xg = function(vv, zv, Pv, hv, Sv) {
        var ev = zv.props.children,
          gv = (0, ig.g)(ev, sg.e).filter((function(vv) {
            return function(vv, zv, Pv) {
              return !!Ye()(zv) || ("horizontal" === vv ? "yAxis" === zv : "vertical" === vv || "x" === Pv ? "xAxis" === zv : "y" !== Pv || "yAxis" === zv)
            }(hv, Sv, vv.props.direction)
          }));
        if (gv && gv.length) {
          var pv = gv.map((function(vv) {
            return vv.props.dataKey
          }));
          return vv.reduce((function(vv, zv) {
            var hv = ng(zv, Pv);
            if (Ye()(hv)) return vv;
            var Sv = Array.isArray(hv) ? [fe()(hv), me()(hv)] : [hv, hv],
              ev = pv.reduce((function(vv, Pv) {
                var hv = ng(zv, Pv, 0),
                  ev = Sv[0] - Math.abs(Array.isArray(hv) ? hv[0] : hv),
                  gv = Sv[1] + Math.abs(Array.isArray(hv) ? hv[1] : hv);
                return [Math.min(ev, vv[0]), Math.max(gv, vv[1])]
              }), [1 / 0, -1 / 0]);
            return [Math.min(ev[0], vv[0]), Math.max(ev[1], vv[1])]
          }), [1 / 0, -1 / 0])
        }
        return null
      },
      tg = function(vv, zv, Pv, hv, Sv) {
        var ev = zv.map((function(zv) {
          return xg(vv, zv, Pv, Sv, hv)
        })).filter((function(vv) {
          return !Ye()(vv)
        }));
        return ev && ev.length ? ev.reduce((function(vv, zv) {
          return [Math.min(vv[0], zv[0]), Math.max(vv[1], zv[1])]
        }), [1 / 0, -1 / 0]) : null
      },
      qg = function(vv, zv, Pv, hv, Sv) {
        var ev = zv.map((function(zv) {
          var ev = zv.props.dataKey;
          return "number" === Pv && ev && xg(vv, zv, ev, hv) || Og(vv, ev, Pv, Sv)
        }));
        if ("number" === Pv) return ev.reduce((function(vv, zv) {
          return [Math.min(vv[0], zv[0]), Math.max(vv[1], zv[1])]
        }), [1 / 0, -1 / 0]);
        var gv = {};
        return ev.reduce((function(vv, zv) {
          for (var Pv = 0, hv = zv.length; Pv < hv; Pv++) gv[zv[Pv]] || (gv[zv[Pv]] = !0, vv.push(zv[Pv]));
          return vv
        }), [])
      },
      Ig = function(vv, zv) {
        return "horizontal" === vv && "xAxis" === zv || "vertical" === vv && "yAxis" === zv || "centric" === vv && "angleAxis" === zv || "radial" === vv && "radiusAxis" === zv
      },
      Qg = function(vv, zv, Pv, hv) {
        if (hv) return vv.map((function(vv) {
          return vv.coordinate
        }));
        var Sv, ev, gv = vv.map((function(vv) {
          return vv.coordinate === zv && (Sv = !0), vv.coordinate === Pv && (ev = !0), vv.coordinate
        }));
        return Sv || gv.push(zv), ev || gv.push(Pv), gv
      },
      Zg = function(vv, zv, Pv) {
        if (!vv) return null;
        var hv = vv.scale,
          Sv = vv.duplicateDomain,
          ev = vv.type,
          gv = vv.range,
          pv = "scaleBand" === vv.realScaleType ? hv.bandwidth() / 2 : 2,
          dv = (zv || Pv) && "category" === ev && hv.bandwidth ? hv.bandwidth() / pv : 0;
        return dv = "angleAxis" === vv.axisType && (null === gv || void 0 === gv ? void 0 : gv.length) >= 2 ? 2 * (0, Cg.y)(gv[0] - gv[1]) * dv : dv, zv && (vv.ticks || vv.niceTicks) ? (vv.ticks || vv.niceTicks).map((function(vv) {
          var zv = Sv ? Sv.indexOf(vv) : vv;
          return {
            coordinate: hv(zv) + dv,
            value: vv,
            offset: dv
          }
        })).filter((function(vv) {
          return !qe()(vv.coordinate)
        })) : vv.isCategorical && vv.categoricalDomain ? vv.categoricalDomain.map((function(vv, zv) {
          return {
            coordinate: hv(vv) + dv,
            value: vv,
            index: zv,
            offset: dv
          }
        })) : hv.ticks && !Pv ? hv.ticks(vv.tickCount).map((function(vv) {
          return {
            coordinate: hv(vv) + dv,
            value: vv,
            offset: dv
          }
        })) : hv.domain().map((function(vv, zv) {
          return {
            coordinate: hv(vv) + dv,
            value: Sv ? Sv[vv] : vv,
            index: zv,
            offset: dv
          }
        }))
      },
      Ag = new WeakMap,
      Lg = function(vv, zv) {
        if ("function" !== typeof zv) return vv;
        Ag.has(vv) || Ag.set(vv, new WeakMap);
        var Pv = Ag.get(vv);
        if (Pv.has(zv)) return Pv.get(zv);
        var hv = function() {
          vv.apply(void 0, arguments), zv.apply(void 0, arguments)
        };
        return Pv.set(zv, hv), hv
      },
      Hg = function(vv, zv, Pv) {
        var ev = vv.scale,
          gv = vv.type,
          pv = vv.layout,
          dv = vv.axisType;
        if ("auto" === ev) return "radial" === pv && "radiusAxis" === dv ? {
          scale: Sv.c(),
          realScaleType: "band"
        } : "radial" === pv && "angleAxis" === dv ? {
          scale: oz(),
          realScaleType: "linear"
        } : "category" === gv && zv && (zv.indexOf("LineChart") >= 0 || zv.indexOf("AreaChart") >= 0 || zv.indexOf("ComposedChart") >= 0 && !Pv) ? {
          scale: Sv.d(),
          realScaleType: "point"
        } : "category" === gv ? {
          scale: Sv.c(),
          realScaleType: "band"
        } : {
          scale: oz(),
          realScaleType: "linear"
        };
        if (Ke()(ev)) {
          var Nv = "scale".concat(Qe()(ev));
          return {
            scale: (hv[Nv] || Sv.d)(),
            realScaleType: hv[Nv] ? Nv : "point"
          }
        }
        return Oe()(ev) ? {
          scale: ev
        } : {
          scale: Sv.d(),
          realScaleType: "point"
        }
      },
      Mg = 1e-4,
      yg = function(vv) {
        var zv = vv.domain();
        if (zv && !(zv.length <= 2)) {
          var Pv = zv.length,
            hv = vv.range(),
            Sv = Math.min(hv[0], hv[1]) - Mg,
            ev = Math.max(hv[0], hv[1]) + Mg,
            gv = vv(zv[0]),
            pv = vv(zv[Pv - 1]);
          (gv < Sv || gv > ev || pv < Sv || pv > ev) && vv.domain([zv[0], zv[Pv - 1]])
        }
      },
      Bg = function(vv, zv) {
        if (!vv) return null;
        for (var Pv = 0, hv = vv.length; Pv < hv; Pv++)
          if (vv[Pv].item === zv) return vv[Pv].position;
        return null
      },
      Jg = function(vv, zv) {
        if (!zv || 2 !== zv.length || !(0, Cg.t)(zv[0]) || !(0, Cg.t)(zv[1])) return vv;
        var Pv = Math.min(zv[0], zv[1]),
          hv = Math.max(zv[0], zv[1]),
          Sv = [vv[0], vv[1]];
        return (!(0, Cg.t)(vv[0]) || vv[0] < Pv) && (Sv[0] = Pv), (!(0, Cg.t)(vv[1]) || vv[1] > hv) && (Sv[1] = hv), Sv[0] > hv && (Sv[0] = hv), Sv[1] < Pv && (Sv[1] = Pv), Sv
      },
      Eg = {
        sign: function(vv) {
          var zv = vv.length;
          if (!(zv <= 0))
            for (var Pv = 0, hv = vv[0].length; Pv < hv; ++Pv)
              for (var Sv = 0, ev = 0, gv = 0; gv < zv; ++gv) {
                var pv = qe()(vv[gv][Pv][1]) ? vv[gv][Pv][0] : vv[gv][Pv][1];
                pv >= 0 ? (vv[gv][Pv][0] = Sv, vv[gv][Pv][1] = Sv + pv, Sv = vv[gv][Pv][1]) : (vv[gv][Pv][0] = ev, vv[gv][Pv][1] = ev + pv, ev = vv[gv][Pv][1])
              }
        },
        expand: function(vv, zv) {
          if ((hv = vv.length) > 0) {
            for (var Pv, hv, Sv, ev = 0, gv = vv[0].length; ev < gv; ++ev) {
              for (Sv = Pv = 0; Pv < hv; ++Pv) Sv += vv[Pv][ev][1] || 0;
              if (Sv)
                for (Pv = 0; Pv < hv; ++Pv) vv[Pv][ev][1] /= Sv
            }
            we(vv, zv)
          }
        },
        none: we,
        silhouette: function(vv, zv) {
          if ((Pv = vv.length) > 0) {
            for (var Pv, hv = 0, Sv = vv[zv[0]], ev = Sv.length; hv < ev; ++hv) {
              for (var gv = 0, pv = 0; gv < Pv; ++gv) pv += vv[gv][hv][1] || 0;
              Sv[hv][1] += Sv[hv][0] = -pv / 2
            }
            we(vv, zv)
          }
        },
        wiggle: function(vv, zv) {
          if ((Sv = vv.length) > 0 && (hv = (Pv = vv[zv[0]]).length) > 0) {
            for (var Pv, hv, Sv, ev = 0, gv = 1; gv < hv; ++gv) {
              for (var pv = 0, dv = 0, Nv = 0; pv < Sv; ++pv) {
                for (var lv = vv[zv[pv]], Tv = lv[gv][1] || 0, Wv = (Tv - (lv[gv - 1][1] || 0)) / 2, wv = 0; wv < pv; ++wv) {
                  var av = vv[zv[wv]];
                  Wv += (av[gv][1] || 0) - (av[gv - 1][1] || 0)
                }
                dv += Tv, Nv += Wv * Tv
              }
              Pv[gv - 1][1] += Pv[gv - 1][0] = ev, dv && (ev -= Nv / dv)
            }
            Pv[gv - 1][1] += Pv[gv - 1][0] = ev, we(vv, zv)
          }
        },
        positive: function(vv) {
          var zv = vv.length;
          if (!(zv <= 0))
            for (var Pv = 0, hv = vv[0].length; Pv < hv; ++Pv)
              for (var Sv = 0, ev = 0; ev < zv; ++ev) {
                var gv = qe()(vv[ev][Pv][1]) ? vv[ev][Pv][0] : vv[ev][Pv][1];
                gv >= 0 ? (vv[ev][Pv][0] = Sv, vv[ev][Pv][1] = Sv + gv, Sv = vv[ev][Pv][1]) : (vv[ev][Pv][0] = 0, vv[ev][Pv][1] = 0)
              }
        }
      },
      og = function(vv, zv, Pv) {
        var hv = zv.map((function(vv) {
            return vv.props.dataKey
          })),
          Sv = Eg[Pv],
          ev = function() {
            var vv = (0, se.c)([]),
              zv = Ce,
              Pv = we,
              hv = ie;

            function Sv(Sv) {
              var ev, gv, pv = Array.from(vv.apply(this, arguments), ce),
                dv = pv.length,
                Nv = -1;
              for (const vv of Sv)
                for (ev = 0, ++Nv; ev < dv; ++ev)(pv[ev][Nv] = [0, +hv(vv, pv[ev].key, Nv, Sv)]).data = vv;
              for (ev = 0, gv = (0, ae.d)(zv(pv)); ev < dv; ++ev) pv[gv[ev]].index = ev;
              return Pv(pv, gv), pv
            }
            return Sv.keys = function(zv) {
              return arguments.length ? (vv = "function" === typeof zv ? zv : (0, se.c)(Array.from(zv)), Sv) : vv
            }, Sv.value = function(vv) {
              return arguments.length ? (hv = "function" === typeof vv ? vv : (0, se.c)(+vv), Sv) : hv
            }, Sv.order = function(vv) {
              return arguments.length ? (zv = null == vv ? Ce : "function" === typeof vv ? vv : (0, se.c)(Array.from(vv)), Sv) : zv
            }, Sv.offset = function(vv) {
              return arguments.length ? (Pv = null == vv ? we : vv, Sv) : Pv
            }, Sv
          }().keys(hv).value((function(vv, zv) {
            return +ng(vv, zv, 0)
          })).order(Ce).offset(Sv);
        return ev(vv)
      },
      bg = function(vv, zv, Pv, hv, Sv, ev) {
        if (!vv) return null;
        var gv = (ev ? zv.reverse() : zv).reduce((function(vv, zv) {
          var Sv, ev = null !== (Sv = zv.type) && void 0 !== Sv && Sv.defaultProps ? Fg(Fg({}, zv.type.defaultProps), zv.props) : zv.props,
            gv = ev.stackId;
          if (ev.hide) return vv;
          var pv = ev[Pv],
            dv = vv[pv] || {
              hasStack: !1,
              stackGroups: {}
            };
          if ((0, Cg.r)(gv)) {
            var Nv = dv.stackGroups[gv] || {
              numericAxisId: Pv,
              cateAxisId: hv,
              items: []
            };
            Nv.items.push(zv), dv.hasStack = !0, dv.stackGroups[gv] = Nv
          } else dv.stackGroups[(0, Cg.z)("_stackId_")] = {
            numericAxisId: Pv,
            cateAxisId: hv,
            items: [zv]
          };
          return Fg(Fg({}, vv), {}, Yg({}, pv, dv))
        }), {});
        return Object.keys(gv).reduce((function(zv, ev) {
          var pv = gv[ev];
          if (pv.hasStack) {
            pv.stackGroups = Object.keys(pv.stackGroups).reduce((function(zv, ev) {
              var gv = pv.stackGroups[ev];
              return Fg(Fg({}, zv), {}, Yg({}, ev, {
                numericAxisId: Pv,
                cateAxisId: hv,
                items: gv.items,
                stackedData: og(vv, gv.items, Sv)
              }))
            }), {})
          }
          return Fg(Fg({}, zv), {}, Yg({}, ev, pv))
        }), {})
      },
      rg = function(vv, zv) {
        var Pv = zv.realScaleType,
          hv = zv.type,
          Sv = zv.tickCount,
          ev = zv.originalDomain,
          gv = zv.allowDecimals,
          pv = Pv || zv.scale;
        if ("auto" !== pv && "linear" !== pv) return null;
        if (Sv && "number" === hv && ev && ("auto" === ev[0] || "auto" === ev[1])) {
          var dv = vv.domain();
          if (!dv.length) return null;
          var Nv = wg(dv, Sv, gv);
          return vv.domain([fe()(Nv), me()(Nv)]), {
            niceTicks: Nv
          }
        }
        if (Sv && "number" === hv) {
          var lv = vv.domain();
          return {
            niceTicks: ag(lv, Sv, gv)
          }
        }
        return null
      };

    function kg(vv) {
      var zv = vv.axis,
        Pv = vv.ticks,
        hv = vv.bandSize,
        Sv = vv.entry,
        ev = vv.index,
        gv = vv.dataKey;
      if ("category" === zv.type) {
        if (!zv.allowDuplicatedCategory && zv.dataKey && !Ye()(Sv[zv.dataKey])) {
          var pv = (0, Cg.d)(Pv, "value", Sv[zv.dataKey]);
          if (pv) return pv.coordinate + hv / 2
        }
        return Pv[ev] ? Pv[ev].coordinate + hv / 2 : null
      }
      var dv = ng(Sv, Ye()(gv) ? zv.dataKey : gv);
      return Ye()(dv) ? null : zv.scale(dv)
    }
    var Xg = function(vv) {
        var zv = vv.axis,
          Pv = vv.ticks,
          hv = vv.offset,
          Sv = vv.bandSize,
          ev = vv.entry,
          gv = vv.index;
        if ("category" === zv.type) return Pv[gv] ? Pv[gv].coordinate + hv : null;
        var pv = ng(ev, zv.dataKey, zv.domain[gv]);
        return Ye()(pv) ? null : zv.scale(pv) - Sv / 2 + hv
      },
      ug = function(vv) {
        var zv = vv.numericAxis,
          Pv = zv.scale.domain();
        if ("number" === zv.type) {
          var hv = Math.min(Pv[0], Pv[1]),
            Sv = Math.max(Pv[0], Pv[1]);
          return hv <= 0 && Sv >= 0 ? 0 : Sv < 0 ? Sv : hv
        }
        return Pv[0]
      },
      vp = function(vv, zv) {
        var Pv, hv = (null !== (Pv = vv.type) && void 0 !== Pv && Pv.defaultProps ? Fg(Fg({}, vv.type.defaultProps), vv.props) : vv.props).stackId;
        if ((0, Cg.r)(hv)) {
          var Sv = zv[hv];
          if (Sv) {
            var ev = Sv.items.indexOf(vv);
            return ev >= 0 ? Sv.stackedData[ev] : null
          }
        }
        return null
      },
      zp = function(vv, zv, Pv) {
        return Object.keys(vv).reduce((function(hv, Sv) {
          var ev = vv[Sv].stackedData.reduce((function(vv, hv) {
            var Sv = hv.slice(zv, Pv + 1).reduce((function(vv, zv) {
              return [fe()(zv.concat([vv[0]]).filter(Cg.t)), me()(zv.concat([vv[1]]).filter(Cg.t))]
            }), [1 / 0, -1 / 0]);
            return [Math.min(vv[0], Sv[0]), Math.max(vv[1], Sv[1])]
          }), [1 / 0, -1 / 0]);
          return [Math.min(ev[0], hv[0]), Math.max(ev[1], hv[1])]
        }), [1 / 0, -1 / 0]).map((function(vv) {
          return vv === 1 / 0 || vv === -1 / 0 ? 0 : vv
        }))
      },
      Pp = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      hp = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      Sp = function(vv, zv, Pv) {
        if (Oe()(vv)) return vv(zv, Pv);
        if (!Array.isArray(vv)) return zv;
        var hv = [];
        if ((0, Cg.t)(vv[0])) hv[0] = Pv ? vv[0] : Math.min(vv[0], zv[0]);
        else if (Pp.test(vv[0])) {
          var Sv = +Pp.exec(vv[0])[1];
          hv[0] = zv[0] - Sv
        } else Oe()(vv[0]) ? hv[0] = vv[0](zv[0]) : hv[0] = zv[0];
        if ((0, Cg.t)(vv[1])) hv[1] = Pv ? vv[1] : Math.max(vv[1], zv[1]);
        else if (hp.test(vv[1])) {
          var ev = +hp.exec(vv[1])[1];
          hv[1] = zv[1] + ev
        } else Oe()(vv[1]) ? hv[1] = vv[1](zv[1]) : hv[1] = zv[1];
        return hv
      },
      ep = function(vv, zv, Pv) {
        if (vv && vv.scale && vv.scale.bandwidth) {
          var hv = vv.scale.bandwidth();
          if (!Pv || hv > 0) return hv
        }
        if (vv && zv && zv.length >= 2) {
          for (var Sv = He()(zv, (function(vv) {
              return vv.coordinate
            })), ev = 1 / 0, gv = 1, pv = Sv.length; gv < pv; gv++) {
            var dv = Sv[gv],
              Nv = Sv[gv - 1];
            ev = Math.min((dv.coordinate || 0) - (Nv.coordinate || 0), ev)
          }
          return ev === 1 / 0 ? 0 : ev
        }
        return Pv ? void 0 : 0
      },
      gp = function(vv, zv, Pv) {
        return vv && vv.length ? Ae()(vv, Ue()(Pv, "type.defaultProps.domain")) ? zv : vv : zv
      },
      pp = function(vv, zv) {
        var Pv = vv.type.defaultProps ? Fg(Fg({}, vv.type.defaultProps), vv.props) : vv.props,
          hv = Pv.dataKey,
          Sv = Pv.name,
          ev = Pv.unit,
          gv = Pv.formatter,
          pv = Pv.tooltipType,
          dv = Pv.chartType,
          Nv = Pv.hide;
        return Fg(Fg({}, (0, ig.e)(vv, !1)), {}, {
          dataKey: hv,
          unit: ev,
          formatter: gv,
          name: Sv || hv,
          color: Kg(vv),
          value: ng(zv, hv),
          type: pv,
          payload: zv,
          chartType: dv,
          hide: Nv
        })
      }
  },
  5849: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      f: () => Tv
    });
    var hv = Pv(5705);

    function Sv(vv) {
      return Sv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, Sv(vv)
    }

    function ev(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function gv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? ev(Object(Pv), !0).forEach((function(zv) {
          pv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : ev(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function pv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != Sv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != Sv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == Sv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var dv = {
        widthCache: {},
        cacheCount: 0
      },
      Nv = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
      },
      lv = "recharts_measurement_span";
    var Tv = function(vv) {
        var zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === vv || null === vv || hv.d.isSsr) return {
          width: 0,
          height: 0
        };
        var Pv = function(vv) {
            var zv = gv({}, vv);
            return Object.keys(zv).forEach((function(vv) {
              zv[vv] || delete zv[vv]
            })), zv
          }(zv),
          Sv = JSON.stringify({
            text: vv,
            copyStyle: Pv
          });
        if (dv.widthCache[Sv]) return dv.widthCache[Sv];
        try {
          var ev = document.getElementById(lv);
          ev || ((ev = document.createElement("span")).setAttribute("id", lv), ev.setAttribute("aria-hidden", "true"), document.body.appendChild(ev));
          var pv = gv(gv({}, Nv), Pv);
          Object.assign(ev.style, pv), ev.textContent = "".concat(vv);
          var Tv = ev.getBoundingClientRect(),
            Wv = {
              width: Tv.width,
              height: Tv.height
            };
          return dv.widthCache[Sv] = Wv, ++dv.cacheCount > 2e3 && (dv.cacheCount = 0, dv.widthCache = {}), Wv
        } catch (wv) {
          return {
            width: 0,
            height: 0
          }
        }
      },
      Wv = function(vv) {
        return {
          top: vv.top + window.scrollY - document.documentElement.clientTop,
          left: vv.left + window.scrollX - document.documentElement.clientLeft
        }
      }
  },
  4891: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Ov,
      d: () => Yv,
      e: () => jv,
      f: () => nv,
      g: () => mv,
      h: () => fv,
      l: () => Fv,
      n: () => Cv,
      r: () => iv,
      t: () => sv,
      v: () => av,
      y: () => wv,
      z: () => Gv
    });
    var hv = Pv(4895),
      Sv = Pv.n(hv),
      ev = Pv(4909),
      gv = Pv.n(ev),
      pv = Pv(4924),
      dv = Pv.n(pv),
      Nv = Pv(4915),
      lv = Pv.n(Nv),
      Tv = Pv(5141),
      Wv = Pv.n(Tv),
      wv = function(vv) {
        return 0 === vv ? 0 : vv > 0 ? 1 : -1
      },
      av = function(vv) {
        return Sv()(vv) && vv.indexOf("%") === vv.length - 1
      },
      sv = function(vv) {
        return lv()(vv) && !gv()(vv)
      },
      Cv = function(vv) {
        return Wv()(vv)
      },
      iv = function(vv) {
        return sv(vv) || Sv()(vv)
      },
      cv = 0,
      Gv = function(vv) {
        var zv = ++cv;
        return "".concat(vv || "").concat(zv)
      },
      mv = function(vv, zv) {
        var Pv, hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ev = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!sv(vv) && !Sv()(vv)) return hv;
        if (av(vv)) {
          var pv = vv.indexOf("%");
          Pv = zv * parseFloat(vv.slice(0, pv)) / 100
        } else Pv = +vv;
        return gv()(Pv) && (Pv = hv), ev && Pv > zv && (Pv = zv), Pv
      },
      jv = function(vv) {
        if (!vv) return null;
        var zv = Object.keys(vv);
        return zv && zv.length ? vv[zv[0]] : null
      },
      fv = function(vv) {
        if (!Array.isArray(vv)) return !1;
        for (var zv = vv.length, Pv = {}, hv = 0; hv < zv; hv++) {
          if (Pv[vv[hv]]) return !0;
          Pv[vv[hv]] = !0
        }
        return !1
      },
      Fv = function(vv, zv) {
        return sv(vv) && sv(zv) ? function(Pv) {
          return vv + Pv * (zv - vv)
        } : function() {
          return zv
        }
      };

    function Yv(vv, zv, Pv) {
      return vv && vv.length ? vv.find((function(vv) {
        return vv && ("function" === typeof zv ? zv(vv) : dv()(vv, zv)) === Pv
      })) : null
    }
    var nv = function(vv) {
        if (!vv || !vv.length) return null;
        for (var zv = vv.length, Pv = 0, hv = 0, Sv = 0, ev = 0, gv = 1 / 0, pv = -1 / 0, dv = 0, Nv = 0, lv = 0; lv < zv; lv++) Pv += dv = vv[lv].cx || 0, hv += Nv = vv[lv].cy || 0, Sv += dv * Nv, ev += dv * dv, gv = Math.min(gv, dv), pv = Math.max(pv, dv);
        var Tv = zv * ev !== Pv * Pv ? (zv * Sv - Pv * hv) / (zv * ev - Pv * Pv) : 0;
        return {
          xmin: gv,
          xmax: pv,
          a: Tv,
          b: (hv - Tv * Pv) / zv
        }
      },
      Ov = function(vv, zv) {
        return sv(vv) && sv(zv) ? vv - zv : Sv()(vv) && Sv()(zv) ? vv.localeCompare(zv) : vv instanceof Date && zv instanceof Date ? vv.getTime() - zv.getTime() : String(vv).localeCompare(String(zv))
      }
  },
  5705: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    var hv = {
      isSsr: !("undefined" !== typeof window && window.document && window.document.createElement && window.setTimeout),
      get: function(vv) {
        return hv[vv]
      },
      set: function(vv, zv) {
        if ("string" === typeof vv) hv[vv] = zv;
        else {
          var Pv = Object.keys(vv);
          Pv && Pv.length && Pv.forEach((function(zv) {
            hv[zv] = vv[zv]
          }))
        }
      }
    }
  },
  5950: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    var hv = function(vv, zv) {
      var Pv = vv.alwaysShow,
        hv = vv.ifOverflow;
      return Pv && (hv = "extendDomain"), hv === zv
    }
  },
  5146: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    var hv = function(vv, zv) {
      for (var Pv = arguments.length, hv = new Array(Pv > 2 ? Pv - 2 : 0), Sv = 2; Sv < Pv; Sv++) hv[Sv - 2] = arguments[Sv]
    }
  },
  5946: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      g: () => Wv,
      h: () => Nv
    });
    Pv(5141), Pv(52), Pv(4995);

    function hv(vv) {
      return hv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, hv(vv)
    }

    function Sv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function ev(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? Sv(Object(Pv), !0).forEach((function(zv) {
          gv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : Sv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function gv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != hv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var Sv = Pv.call(vv, zv || "default");
            if ("object" != hv(Sv)) return Sv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == hv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var pv = Math.PI / 180,
      dv = function(vv) {
        return 180 * vv / Math.PI
      },
      Nv = function(vv, zv, Pv, hv) {
        return {
          x: vv + Math.cos(-pv * hv) * Pv,
          y: zv + Math.sin(-pv * hv) * Pv
        }
      },
      lv = function(vv, zv) {
        var Pv = vv.x,
          hv = vv.y,
          Sv = zv.cx,
          ev = zv.cy,
          gv = function(vv, zv) {
            var Pv = vv.x,
              hv = vv.y,
              Sv = zv.x,
              ev = zv.y;
            return Math.sqrt(Math.pow(Pv - Sv, 2) + Math.pow(hv - ev, 2))
          }({
            x: Pv,
            y: hv
          }, {
            x: Sv,
            y: ev
          });
        if (gv <= 0) return {
          radius: gv
        };
        var pv = (Pv - Sv) / gv,
          Nv = Math.acos(pv);
        return hv > ev && (Nv = 2 * Math.PI - Nv), {
          radius: gv,
          angle: dv(Nv),
          angleInRadian: Nv
        }
      },
      Tv = function(vv, zv) {
        var Pv = zv.startAngle,
          hv = zv.endAngle,
          Sv = Math.floor(Pv / 360),
          ev = Math.floor(hv / 360);
        return vv + 360 * Math.min(Sv, ev)
      },
      Wv = function(vv, zv) {
        var Pv = vv.x,
          hv = vv.y,
          Sv = lv({
            x: Pv,
            y: hv
          }, zv),
          gv = Sv.radius,
          pv = Sv.angle,
          dv = zv.innerRadius,
          Nv = zv.outerRadius;
        if (gv < dv || gv > Nv) return !1;
        if (0 === gv) return !0;
        var Wv, wv = function(vv) {
            var zv = vv.startAngle,
              Pv = vv.endAngle,
              hv = Math.floor(zv / 360),
              Sv = Math.floor(Pv / 360),
              ev = Math.min(hv, Sv);
            return {
              startAngle: zv - 360 * ev,
              endAngle: Pv - 360 * ev
            }
          }(zv),
          av = wv.startAngle,
          sv = wv.endAngle,
          Cv = pv;
        if (av <= sv) {
          for (; Cv > sv;) Cv -= 360;
          for (; Cv < av;) Cv += 360;
          Wv = Cv >= av && Cv <= sv
        } else {
          for (; Cv > av;) Cv -= 360;
          for (; Cv < sv;) Cv += 360;
          Wv = Cv >= sv && Cv <= av
        }
        return Wv ? ev(ev({}, zv), {}, {
          radius: gv,
          angle: Tv(Cv, zv)
        }) : null
      }
  },
  5149: (vv, zv, Pv) => {
    Pv.d(zv, {
      D: () => Vv,
      e: () => tv,
      g: () => Dv,
      k: () => Kv,
      n: () => Fv,
      o: () => Zv,
      p: () => xv,
      t: () => qv,
      w: () => Av,
      z: () => Qv
    });
    var hv = Pv(4924),
      Sv = Pv.n(hv),
      ev = Pv(5141),
      gv = Pv.n(ev),
      pv = Pv(4895),
      dv = Pv.n(pv),
      Nv = Pv(4995),
      lv = Pv.n(Nv),
      Tv = Pv(4826),
      Wv = Pv.n(Tv),
      wv = Pv(52),
      av = Pv(5153),
      sv = Pv(4891),
      Cv = Pv(5166),
      iv = Pv(5169),
      cv = ["children"],
      Gv = ["children"];

    function mv(vv, zv) {
      if (null == vv) return {};
      var Pv, hv, Sv = function(vv, zv) {
        if (null == vv) return {};
        var Pv = {};
        for (var hv in vv)
          if (Object.prototype.hasOwnProperty.call(vv, hv)) {
            if (zv.indexOf(hv) >= 0) continue;
            Pv[hv] = vv[hv]
          } return Pv
      }(vv, zv);
      if (Object.getOwnPropertySymbols) {
        var ev = Object.getOwnPropertySymbols(vv);
        for (hv = 0; hv < ev.length; hv++) Pv = ev[hv], zv.indexOf(Pv) >= 0 || Object.prototype.propertyIsEnumerable.call(vv, Pv) && (Sv[Pv] = vv[Pv])
      }
      return Sv
    }

    function jv(vv) {
      return jv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, jv(vv)
    }
    var fv = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick"
      },
      Fv = function(vv) {
        return "string" === typeof vv ? vv : vv ? vv.displayName || vv.name || "Component" : ""
      },
      Yv = null,
      nv = null,
      Ov = function vv(zv) {
        if (zv === Yv && Array.isArray(nv)) return nv;
        var Pv = [];
        return wv.Children.forEach(zv, (function(zv) {
          gv()(zv) || ((0, av.isFragment)(zv) ? Pv = Pv.concat(vv(zv.props.children)) : Pv.push(zv))
        })), nv = Pv, Yv = zv, Pv
      };

    function Dv(vv, zv) {
      var Pv = [],
        hv = [];
      return hv = Array.isArray(zv) ? zv.map((function(vv) {
        return Fv(vv)
      })) : [Fv(zv)], Ov(vv).forEach((function(vv) {
        var zv = Sv()(vv, "type.displayName") || Sv()(vv, "type.name"); - 1 !== hv.indexOf(zv) && Pv.push(vv)
      })), Pv
    }

    function Kv(vv, zv) {
      var Pv = Dv(vv, zv);
      return Pv && Pv[0]
    }
    var Vv = function(vv) {
        if (!vv || !vv.props) return !1;
        var zv = vv.props,
          Pv = zv.width,
          hv = zv.height;
        return !(!(0, sv.t)(Pv) || Pv <= 0 || !(0, sv.t)(hv) || hv <= 0)
      },
      Uv = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
      Rv = function(vv) {
        return vv && vv.type && dv()(vv.type) && Uv.indexOf(vv.type) >= 0
      },
      xv = function(vv) {
        return vv && "object" === jv(vv) && "clipDot" in vv
      },
      tv = function(vv, zv, Pv) {
        if (!vv || "function" === typeof vv || "boolean" === typeof vv) return null;
        var hv = vv;
        if ((0, wv.isValidElement)(vv) && (hv = vv.props), !Wv()(hv)) return null;
        var Sv = {};
        return Object.keys(hv).forEach((function(vv) {
          var ev;
          (function(vv, zv, Pv, hv) {
            var Sv, ev = null !== (Sv = null === iv.c || void 0 === iv.c ? void 0 : iv.c[hv]) && void 0 !== Sv ? Sv : [];
            return zv.startsWith("data-") || !lv()(vv) && (hv && ev.includes(zv) || iv.f.includes(zv)) || Pv && iv.b.includes(zv)
          })(null === (ev = hv) || void 0 === ev ? void 0 : ev[vv], vv, zv, Pv) && (Sv[vv] = hv[vv])
        })), Sv
      },
      qv = function vv(zv, Pv) {
        if (zv === Pv) return !0;
        var hv = wv.Children.count(zv);
        if (hv !== wv.Children.count(Pv)) return !1;
        if (0 === hv) return !0;
        if (1 === hv) return Iv(Array.isArray(zv) ? zv[0] : zv, Array.isArray(Pv) ? Pv[0] : Pv);
        for (var Sv = 0; Sv < hv; Sv++) {
          var ev = zv[Sv],
            gv = Pv[Sv];
          if (Array.isArray(ev) || Array.isArray(gv)) {
            if (!vv(ev, gv)) return !1
          } else if (!Iv(ev, gv)) return !1
        }
        return !0
      },
      Iv = function(vv, zv) {
        if (gv()(vv) && gv()(zv)) return !0;
        if (!gv()(vv) && !gv()(zv)) {
          var Pv = vv.props || {},
            hv = Pv.children,
            Sv = mv(Pv, cv),
            ev = zv.props || {},
            pv = ev.children,
            dv = mv(ev, Gv);
          return hv && pv ? (0, Cv.e)(Sv, dv) && qv(hv, pv) : !hv && !pv && (0, Cv.e)(Sv, dv)
        }
        return !1
      },
      Qv = function(vv, zv) {
        var Pv = [],
          hv = {};
        return Ov(vv).forEach((function(vv, Sv) {
          if (Rv(vv)) Pv.push(vv);
          else if (vv) {
            var ev = Fv(vv.type),
              gv = zv[ev] || {},
              pv = gv.handler,
              dv = gv.once;
            if (pv && (!dv || !hv[ev])) {
              var Nv = pv(vv, ev, Sv);
              Pv.push(Nv), hv[ev] = !0
            }
          }
        })), Pv
      },
      Zv = function(vv) {
        var zv = vv && vv.type;
        return zv && fv[zv] ? fv[zv] : null
      },
      Av = function(vv, zv) {
        return Ov(zv).indexOf(vv)
      }
  },
  5166: (vv, zv, Pv) => {
    function hv(vv, zv) {
      for (var Pv in vv)
        if ({}.hasOwnProperty.call(vv, Pv) && (!{}.hasOwnProperty.call(zv, Pv) || vv[Pv] !== zv[Pv])) return !1;
      for (var hv in zv)
        if ({}.hasOwnProperty.call(zv, hv) && !{}.hasOwnProperty.call(vv, hv)) return !1;
      return !0
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  5938: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv
    });
    var hv = Pv(5771),
      Sv = Pv(5857),
      ev = Pv(5149);

    function gv(vv) {
      return gv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, gv(vv)
    }

    function pv(vv, zv) {
      var Pv = Object.keys(vv);
      if (Object.getOwnPropertySymbols) {
        var hv = Object.getOwnPropertySymbols(vv);
        zv && (hv = hv.filter((function(zv) {
          return Object.getOwnPropertyDescriptor(vv, zv).enumerable
        }))), Pv.push.apply(Pv, hv)
      }
      return Pv
    }

    function dv(vv) {
      for (var zv = 1; zv < arguments.length; zv++) {
        var Pv = null != arguments[zv] ? arguments[zv] : {};
        zv % 2 ? pv(Object(Pv), !0).forEach((function(zv) {
          Nv(vv, zv, Pv[zv])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(vv, Object.getOwnPropertyDescriptors(Pv)) : pv(Object(Pv)).forEach((function(zv) {
          Object.defineProperty(vv, zv, Object.getOwnPropertyDescriptor(Pv, zv))
        }))
      }
      return vv
    }

    function Nv(vv, zv, Pv) {
      return (zv = function(vv) {
        var zv = function(vv, zv) {
          if ("object" != gv(vv) || !vv) return vv;
          var Pv = vv[Symbol.toPrimitive];
          if (void 0 !== Pv) {
            var hv = Pv.call(vv, zv || "default");
            if ("object" != gv(hv)) return hv;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === zv ? String : Number)(vv)
        }(vv, "string");
        return "symbol" == gv(zv) ? zv : zv + ""
      }(zv)) in vv ? Object.defineProperty(vv, zv, {
        value: Pv,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : vv[zv] = Pv, vv
    }
    var lv = function(vv) {
      var zv = vv.children,
        Pv = vv.formattedGraphicalItems,
        gv = vv.legendWidth,
        pv = vv.legendContent,
        Nv = (0, ev.k)(zv, hv.c);
      if (!Nv) return null;
      var lv, Tv = hv.c.defaultProps,
        Wv = void 0 !== Tv ? dv(dv({}, Tv), Nv.props) : {};
      return lv = Nv.props && Nv.props.payload ? Nv.props && Nv.props.payload : "children" === pv ? (Pv || []).reduce((function(vv, zv) {
        var Pv = zv.item,
          hv = zv.props,
          Sv = hv.sectors || hv.data || [];
        return vv.concat(Sv.map((function(vv) {
          return {
            type: Nv.props.iconType || Pv.props.legendType,
            value: vv.name,
            color: vv.fill,
            payload: vv
          }
        })))
      }), []) : (Pv || []).map((function(vv) {
        var zv = vv.item,
          Pv = zv.type.defaultProps,
          hv = void 0 !== Pv ? dv(dv({}, Pv), zv.props) : {},
          ev = hv.dataKey,
          gv = hv.name,
          pv = hv.legendType;
        return {
          inactive: hv.hide,
          dataKey: ev,
          type: Wv.iconType || pv || "square",
          color: (0, Sv.O)(zv),
          value: gv || ev,
          payload: hv
        }
      })), dv(dv(dv({}, Wv), hv.c.getWithHeight(Nv, gv)), {}, {
        payload: lv,
        item: Nv
      })
    }
  },
  5707: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(5711),
      Sv = Pv.n(hv),
      ev = Pv(4995),
      gv = Pv.n(ev);

    function pv(vv, zv, Pv) {
      return !0 === zv ? Sv()(vv, Pv) : gv()(zv) ? Sv()(vv, zv) : vv
    }
  },
  5169: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => Nv,
      f: () => pv,
      g: () => Tv,
      h: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(4826),
      ev = Pv.n(Sv);

    function gv(vv) {
      return gv = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(vv) {
        return typeof vv
      } : function(vv) {
        return vv && "function" == typeof Symbol && vv.constructor === Symbol && vv !== Symbol.prototype ? "symbol" : typeof vv
      }, gv(vv)
    }
    var pv = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "dw", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
      dv = ["points", "pathLength"],
      Nv = {
        svg: ["viewBox", "children"],
        polygon: dv,
        polyline: dv
      },
      lv = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
      Tv = function(vv, zv) {
        if (!vv || "function" === typeof vv || "boolean" === typeof vv) return null;
        var Pv = vv;
        if ((0, hv.isValidElement)(vv) && (Pv = vv.props), !ev()(Pv)) return null;
        var Sv = {};
        return Object.keys(Pv).forEach((function(vv) {
          lv.includes(vv) && (Sv[vv] = zv || function(zv) {
            return Pv[vv](Pv, zv)
          })
        })), Sv
      },
      Wv = function(vv, zv, Pv) {
        if (!ev()(vv) || "object" !== gv(vv)) return null;
        var hv = null;
        return Object.keys(vv).forEach((function(Sv) {
          var ev = vv[Sv];
          lv.includes(Sv) && "function" === typeof ev && (hv || (hv = {}), hv[Sv] = function(vv, zv, Pv) {
            return function(hv) {
              return vv(zv, Pv, hv), null
            }
          }(ev, zv, Pv))
        })), hv
      }
  },
  5158: (vv, zv) => {
    var Pv, hv = Symbol.for("react.element"),
      Sv = Symbol.for("react.portal"),
      ev = Symbol.for("react.fragment"),
      gv = Symbol.for("react.strict_mode"),
      pv = Symbol.for("react.profiler"),
      dv = Symbol.for("react.provider"),
      Nv = Symbol.for("react.context"),
      lv = Symbol.for("react.server_context"),
      Tv = Symbol.for("react.forward_ref"),
      Wv = Symbol.for("react.suspense"),
      wv = Symbol.for("react.suspense_list"),
      av = Symbol.for("react.memo"),
      sv = Symbol.for("react.lazy"),
      Cv = Symbol.for("react.offscreen");

    function iv(vv) {
      if ("object" === typeof vv && null !== vv) {
        var zv = vv.$$typeof;
        switch (zv) {
          case hv:
            switch (vv = vv.type) {
              case ev:
              case pv:
              case gv:
              case Wv:
              case wv:
                return vv;
              default:
                switch (vv = vv && vv.$$typeof) {
                  case lv:
                  case Nv:
                  case Tv:
                  case sv:
                  case av:
                  case dv:
                    return vv;
                  default:
                    return zv
                }
            }
          case Sv:
            return zv
        }
      }
    }
    Pv = Symbol.for("react.module.reference"), zv.isFragment = function(vv) {
      return iv(vv) === ev
    }
  },
  5153: (vv, zv, Pv) => {
    vv.exports = Pv(5158)
  },
  4802: (vv, zv, Pv) => {
    function hv(vv) {
      var zv, Pv, Sv = "";
      if ("string" == typeof vv || "number" == typeof vv) Sv += vv;
      else if ("object" == typeof vv)
        if (Array.isArray(vv)) {
          var ev = vv.length;
          for (zv = 0; zv < ev; zv++) vv[zv] && (Pv = hv(vv[zv])) && (Sv && (Sv += " "), Sv += Pv)
        } else
          for (Pv in vv) vv[Pv] && (Sv && (Sv += " "), Sv += Pv);
      return Sv
    }
    Pv.d(zv, {
      b: () => Sv
    });
    const Sv = function() {
      for (var vv, zv, Pv = 0, Sv = "", ev = arguments.length; Pv < ev; Pv++)(vv = arguments[Pv]) && (zv = hv(vv)) && (Sv && (Sv += " "), Sv += zv);
      return Sv
    }
  },
  5863: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      d: () => pv
    });
    var hv = Pv(5870),
      Sv = Pv(5875);

    function ev() {
      var vv, zv, Pv = (0, Sv.e)().unknown(void 0),
        gv = Pv.domain,
        pv = Pv.range,
        dv = 0,
        Nv = 1,
        lv = !1,
        Tv = 0,
        Wv = 0,
        wv = .5;

      function av() {
        var Pv = gv().length,
          hv = Nv < dv,
          Sv = hv ? Nv : dv,
          ev = hv ? dv : Nv;
        vv = (ev - Sv) / Math.max(1, Pv - Tv + 2 * Wv), lv && (vv = Math.floor(vv)), Sv += (ev - Sv - vv * (Pv - Tv)) * wv, zv = vv * (1 - Tv), lv && (Sv = Math.round(Sv), zv = Math.round(zv));
        var av = function(vv, zv, Pv) {
          vv = +vv, zv = +zv, Pv = (Sv = arguments.length) < 2 ? (zv = vv, vv = 0, 1) : Sv < 3 ? 1 : +Pv;
          for (var hv = -1, Sv = 0 | Math.max(0, Math.ceil((zv - vv) / Pv)), ev = new Array(Sv); ++hv < Sv;) ev[hv] = vv + hv * Pv;
          return ev
        }(Pv).map((function(zv) {
          return Sv + vv * zv
        }));
        return pv(hv ? av.reverse() : av)
      }
      return delete Pv.unknown, Pv.domain = function(vv) {
        return arguments.length ? (gv(vv), av()) : gv()
      }, Pv.range = function(vv) {
        return arguments.length ? ([dv, Nv] = vv, dv = +dv, Nv = +Nv, av()) : [dv, Nv]
      }, Pv.rangeRound = function(vv) {
        return [dv, Nv] = vv, dv = +dv, Nv = +Nv, lv = !0, av()
      }, Pv.bandwidth = function() {
        return zv
      }, Pv.step = function() {
        return vv
      }, Pv.round = function(vv) {
        return arguments.length ? (lv = !!vv, av()) : lv
      }, Pv.padding = function(vv) {
        return arguments.length ? (Tv = Math.min(1, Wv = +vv), av()) : Tv
      }, Pv.paddingInner = function(vv) {
        return arguments.length ? (Tv = Math.min(1, vv), av()) : Tv
      }, Pv.paddingOuter = function(vv) {
        return arguments.length ? (Wv = +vv, av()) : Wv
      }, Pv.align = function(vv) {
        return arguments.length ? (wv = Math.max(0, Math.min(1, vv)), av()) : wv
      }, Pv.copy = function() {
        return ev(gv(), [dv, Nv]).round(lv).paddingInner(Tv).paddingOuter(Wv).align(wv)
      }, hv.h.apply(av(), arguments)
    }

    function gv(vv) {
      var zv = vv.copy;
      return vv.padding = vv.paddingOuter, delete vv.paddingInner, delete vv.paddingOuter, vv.copy = function() {
        return gv(zv())
      }, vv
    }

    function pv() {
      return gv(ev.apply(null, arguments).paddingInner(1))
    }
  },
  5870: (vv, zv, Pv) => {
    function hv(vv, zv) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(vv);
          break;
        default:
          this.range(zv).domain(vv)
      }
      return this
    }

    function Sv(vv, zv) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" === typeof vv ? this.interpolator(vv) : this.range(vv);
          break;
        default:
          this.domain(vv), "function" === typeof zv ? this.interpolator(zv) : this.range(zv)
      }
      return this
    }
    Pv.d(zv, {
      e: () => Sv,
      h: () => hv
    })
  },
  5875: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => lv,
      h: () => Nv
    });
    class hv extends Map {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pv;
        if (super(), Object.defineProperties(this, {
            _intern: {
              value: new Map
            },
            _key: {
              value: zv
            }
          }), null != vv)
          for (const [Pv, hv] of vv) this.set(Pv, hv)
      }
      get(vv) {
        return super.get(Sv(this, vv))
      }
      has(vv) {
        return super.has(Sv(this, vv))
      }
      set(vv, zv) {
        return super.set(ev(this, vv), zv)
      }
      delete(vv) {
        return super.delete(gv(this, vv))
      }
    }
    Set;

    function Sv(vv, zv) {
      let {
        _intern: Pv,
        _key: hv
      } = vv;
      const Sv = hv(zv);
      return Pv.has(Sv) ? Pv.get(Sv) : zv
    }

    function ev(vv, zv) {
      let {
        _intern: Pv,
        _key: hv
      } = vv;
      const Sv = hv(zv);
      return Pv.has(Sv) ? Pv.get(Sv) : (Pv.set(Sv, zv), zv)
    }

    function gv(vv, zv) {
      let {
        _intern: Pv,
        _key: hv
      } = vv;
      const Sv = hv(zv);
      return Pv.has(Sv) && (zv = Pv.get(Sv), Pv.delete(Sv)), zv
    }

    function pv(vv) {
      return null !== vv && "object" === typeof vv ? vv.valueOf() : vv
    }
    var dv = Pv(5870);
    const Nv = Symbol("implicit");

    function lv() {
      var vv = new hv,
        zv = [],
        Pv = [],
        Sv = Nv;

      function ev(hv) {
        let ev = vv.get(hv);
        if (void 0 === ev) {
          if (Sv !== Nv) return Sv;
          vv.set(hv, ev = zv.push(hv) - 1)
        }
        return Pv[ev % Pv.length]
      }
      return ev.domain = function(Pv) {
        if (!arguments.length) return zv.slice();
        zv = [], vv = new hv;
        for (const hv of Pv) vv.has(hv) || vv.set(hv, zv.push(hv) - 1);
        return ev
      }, ev.range = function(vv) {
        return arguments.length ? (Pv = Array.from(vv), ev) : Pv.slice()
      }, ev.unknown = function(vv) {
        return arguments.length ? (Sv = vv, ev) : Sv
      }, ev.copy = function() {
        return lv(zv, Pv).unknown(Sv)
      }, dv.h.apply(ev, arguments), ev
    }
  },
  5940: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    Array.prototype.slice;

    function hv(vv) {
      return "object" === typeof vv && "length" in vv ? vv : Array.from(vv)
    }
  },
  5823: (vv, zv, Pv) => {
    function hv(vv) {
      return function() {
        return vv
      }
    }
    Pv.d(zv, {
      c: () => hv
    })
  },
  5827: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Nv
    });
    const hv = Math.PI,
      Sv = 2 * hv,
      ev = 1e-6,
      gv = Sv - ev;

    function pv(vv) {
      this._ += vv[0];
      for (let zv = 1, Pv = vv.length; zv < Pv; ++zv) this._ += arguments[zv] + vv[zv]
    }
    class dv {
      constructor(vv) {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = null == vv ? pv : function(vv) {
          let zv = Math.floor(vv);
          if (!(zv >= 0)) throw new Error(`invalid digits: ${vv}`);
          if (zv > 15) return pv;
          const Pv = 10 ** zv;
          return function(vv) {
            this._ += vv[0];
            for (let zv = 1, hv = vv.length; zv < hv; ++zv) this._ += Math.round(arguments[zv] * Pv) / Pv + vv[zv]
          }
        }(vv)
      }
      moveTo(vv, zv) {
        this._append`M${this._x0=this._x1=+vv},${this._y0=this._y1=+zv}`
      }
      closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`)
      }
      lineTo(vv, zv) {
        this._append`L${this._x1=+vv},${this._y1=+zv}`
      }
      quadraticCurveTo(vv, zv, Pv, hv) {
        this._append`Q${+vv},${+zv},${this._x1=+Pv},${this._y1=+hv}`
      }
      bezierCurveTo(vv, zv, Pv, hv, Sv, ev) {
        this._append`C${+vv},${+zv},${+Pv},${+hv},${this._x1=+Sv},${this._y1=+ev}`
      }
      arcTo(vv, zv, Pv, Sv, gv) {
        if (vv = +vv, zv = +zv, Pv = +Pv, Sv = +Sv, (gv = +gv) < 0) throw new Error(`negative radius: ${gv}`);
        let pv = this._x1,
          dv = this._y1,
          Nv = Pv - vv,
          lv = Sv - zv,
          Tv = pv - vv,
          Wv = dv - zv,
          wv = Tv * Tv + Wv * Wv;
        if (null === this._x1) this._append`M${this._x1=vv},${this._y1=zv}`;
        else if (wv > ev)
          if (Math.abs(Wv * Nv - lv * Tv) > ev && gv) {
            let av = Pv - pv,
              sv = Sv - dv,
              Cv = Nv * Nv + lv * lv,
              iv = av * av + sv * sv,
              cv = Math.sqrt(Cv),
              Gv = Math.sqrt(wv),
              mv = gv * Math.tan((hv - Math.acos((Cv + wv - iv) / (2 * cv * Gv))) / 2),
              jv = mv / Gv,
              fv = mv / cv;
            Math.abs(jv - 1) > ev && this._append`L${vv+jv*Tv},${zv+jv*Wv}`, this._append`A${gv},${gv},0,0,${+(Wv*av>Tv*sv)},${this._x1=vv+fv*Nv},${this._y1=zv+fv*lv}`
          } else this._append`L${this._x1=vv},${this._y1=zv}`;
        else;
      }
      arc(vv, zv, Pv, pv, dv, Nv) {
        if (vv = +vv, zv = +zv, Nv = !!Nv, (Pv = +Pv) < 0) throw new Error(`negative radius: ${Pv}`);
        let lv = Pv * Math.cos(pv),
          Tv = Pv * Math.sin(pv),
          Wv = vv + lv,
          wv = zv + Tv,
          av = 1 ^ Nv,
          sv = Nv ? pv - dv : dv - pv;
        null === this._x1 ? this._append`M${Wv},${wv}` : (Math.abs(this._x1 - Wv) > ev || Math.abs(this._y1 - wv) > ev) && this._append`L${Wv},${wv}`, Pv && (sv < 0 && (sv = sv % Sv + Sv), sv > gv ? this._append`A${Pv},${Pv},0,1,${av},${vv-lv},${zv-Tv}A${Pv},${Pv},0,1,${av},${this._x1=Wv},${this._y1=wv}` : sv > ev && this._append`A${Pv},${Pv},0,${+(sv>=hv)},${av},${this._x1=vv+Pv*Math.cos(dv)},${this._y1=zv+Pv*Math.sin(dv)}`)
      }
      rect(vv, zv, Pv, hv) {
        this._append`M${this._x0=this._x1=+vv},${this._y0=this._y1=+zv}h${Pv=+Pv}v${+hv}h${-Pv}Z`
      }
      toString() {
        return this._
      }
    }

    function Nv(vv) {
      let zv = 3;
      return vv.digits = function(Pv) {
        if (!arguments.length) return zv;
        if (null == Pv) zv = null;
        else {
          const vv = Math.floor(Pv);
          if (!(vv >= 0)) throw new RangeError(`invalid digits: ${Pv}`);
          zv = vv
        }
        return vv
      }, () => new dv(zv)
    }
    dv.prototype
  },
  5677: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev
    });
    var hv = !0,
      Sv = "Invariant failed";

    function ev(vv, zv) {
      if (!vv) {
        if (hv) throw new Error(Sv);
        var Pv = "function" === typeof zv ? zv() : zv,
          ev = Pv ? "".concat(Sv, ": ").concat(Pv) : Sv;
        throw new Error(ev)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);